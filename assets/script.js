const listElement = document.getElementById("list");

async function loadAndDisplayDataFromJson() {
  const response = await fetch("./assets/data.json"); // Replace with your JSON file path or URL
  const data = await response.json();
  for (let index = 0; index < data.length; index++) {
    const row = data[index];
    const textnode = document.createTextNode(row.todo);
    const list = document.createElement("li");
    const buttonEdit = document.createElement("button");
    const buttonDelete = document.createElement("button");
    buttonEdit.innerHTML = "Edit";
    buttonEdit.classList.add("btn-edit");
    buttonDelete.innerHTML = "Delete";
    buttonDelete.classList.add("btn-delete");
    list.appendChild(textnode);
    list.appendChild(buttonEdit);
    list.appendChild(buttonDelete);
    list.classList.add("list-item");
    listElement.appendChild(list);
  }
}

async function loadAndDisplayDataFromLocalStorage() {
  const response = localStorage.getItem('data') // Replace with your JSON file path or URL
  const data = JSON.parse(response);
  if (data) {
    for (let index = 0; index < data.length; index++) {
      const row = data[index];
      const textnode = document.createTextNode(row.todo);
      const list = document.createElement("li");
      const buttonEdit = document.createElement("button");
      const buttonDelete = document.createElement("button");
      buttonEdit.innerHTML = "Edit";
      buttonEdit.classList.add("btn-edit");
      buttonEdit.dataId = index;
      buttonEdit.addEventListener('click', editMode);
      buttonDelete.innerHTML = "Delete";
      buttonDelete.classList.add("btn-delete");
      buttonDelete.dataId = index;
      buttonDelete.addEventListener('click', deleteTodo);
      list.appendChild(textnode);
      list.appendChild(buttonEdit);
      list.appendChild(buttonDelete);
      list.classList.add("list-item");
      listElement.appendChild(list);
    }
  }
}

function editMode(event) {
  const button = document.getElementById('btn-add');
  button.textContent = 'Update';
  const currentId = parseInt(event.currentTarget.dataId);
  const response = localStorage.getItem('data') // Replace with your JSON file path or URL
  const data = JSON.parse(response);
  const currentData = data[currentId];
  const getInputTodo = document.getElementById('input-todo');
  getInputTodo.value = currentData.todo;
  localStorage.setItem('currentId', currentId);
  localStorage.setItem('currentInput', currentData.todo);
  button.addEventListener('click', editAction)
}

function editAction() {
  const response = localStorage.getItem('data') // Replace with your JSON file path or URL
  const data = JSON.parse(response);
  const currentId = parseInt(localStorage.getItem('currentId'));
  const getInputTodo = document.getElementById('input-todo');
  const newData = data;
  newData[currentId].todo = localStorage.getItem('currentInput');
  dataToLocal = JSON.stringify(newData);
  localStorage.setItem('data', dataToLocal);
  const button = document.getElementById('btn-add');
  getInputTodo.value = '';
  button.textContent = 'Tambah';
  button.addEventListener('click', createDataLocalStorage);
}

function deleteTodo(event) {
  const currentId = parseInt(event.currentTarget.dataId);
  const response = localStorage.getItem('data') // Replace with your JSON file path or URL
  const data = JSON.parse(response);
  const newData = data.filter((_, i) => i !== currentId);
  dataToLocal = JSON.stringify(newData);
  localStorage.setItem('data', dataToLocal);
  listElement.innerHTML = '';
  loadAndDisplayDataFromLocalStorage();
}

function saveJsonToFile(data, filename) {
  const jsonString = JSON.stringify(data, null, 2); // Pretty-print JSON
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename || "data.json"; // Default filename
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

async function createDataJson() {
  const getInputTodo = document.getElementById('input-todo');
  const dataObject = {
    "todo": getInputTodo.value,
  };
  const response = await fetch("./assets/data.json"); // Replace with your JSON file path or URL
  const data = await response.json();
  data.push(dataObject);
  saveJsonToFile(data, 'data.json');
}

async function createDataLocalStorage() {
  const getInputTodo = document.getElementById('input-todo');
  const dataObject = {
    "todo": getInputTodo.value,
  };
  const response = localStorage.getItem('data') // Replace with your JSON file path or URL
  const data = JSON.parse(response);
  data.push(dataObject);
  dataToLocal = JSON.stringify(data);
  localStorage.setItem('data', dataToLocal);
  listElement.innerHTML = '';
  getInputTodo.value = '';
  loadAndDisplayDataFromLocalStorage();
}

loadAndDisplayDataFromLocalStorage();
