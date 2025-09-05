const listElement = document.getElementById("list");
const list1 = document.createElement("li");
const buttonEdit1 = document.createElement("button");
const buttonDelete1 = document.createElement("button");
buttonEdit1.innerHTML = "Edit";
buttonEdit1.classList.add("btn-edit");
buttonDelete1.innerHTML = "Delete";
buttonDelete1.classList.add("btn-delete");

async function loadAndDisplayData() {
  const response = await fetch("./assets/data.json"); // Replace with your JSON file path or URL
  const data = await response.json();
  const textnode1 = document.createTextNode(data[0].todo);
  list1.appendChild(textnode1);
  list1.appendChild(buttonEdit1);
  list1.appendChild(buttonDelete1);
  list1.classList.add("list-item");
  listElement.appendChild(list1);
}

loadAndDisplayData();
