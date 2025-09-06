// Variabel = kotak
// var
// let 

// string
// number
// boolean

let namaDepan = "Dimas";
let namaBelakang = "Pratama";
// concatenation / concat
let nama = namaDepan + " " + namaBelakang;
// ini harusnya name

// calculation
let umur = 2025 - 2005;
// console.log(typeof umur);

let isMarried = false;
// console.log(typeof isMarried);
// isMarried = 3;
// console.log(typeof isMarried);
let a = false;
let b = false;
let checkBoolean = a || b;
let checkBoolean2 = !checkBoolean;

// console.log(nama)
// console.log(umur);
// console.log(isMarried);
// console.log(checkBoolean);
// console.log(checkBoolean2);

// Non primitive

// Data pertama = indeks 0
// Data kedua = indeks 1
// Data ketiga = indeks 2
// Khusus data jamak yang memiliki 1 jenis tipe data tapi jenis datanya sama
let kumpulanNama = ["Dimas", "Pratama", "Setiawan"];
let kumpulanUmur = [20, 21, 22];
// names 
console.log(kumpulanNama[0], kumpulanNama[1], kumpulanNama[2]);

// objek
let siswa = {
    nama: "Dimas",
    umur: 20,
    isMarried: false
};

console.log(siswa.nama);

let kumpulanSiswa = [
    {
        nama: "Dimas",
        umur: 20,
        isMarried: false,
    },
    {
        nama: "Pratama",
        umur: 21,
        isMarried: false
    },
    {
        nama: "Setiawan",
        umur: 22,
        isMarried: false
    }
];

console.log(kumpulanSiswa[1].nama);

// Inisialisasi
const PHI = 3.14;
// Reinisialisasi
// PHI = 22 / 7;
// const area = PHI * 10 * 10;
// let myName = "Dimas";
// myName = "Yudi";
// console.log(myName);

const array = [1, 2, 3];
// Manipulasi
array.push(1);
// Reinisialisasi
// array = [1, 2, 3, 4];
console.log(array);

let modulus = 12 % 3;
// 13 / 3 = 4 sisa 1
console.log(modulus);

// ===

// truth value
// 'a' true
// > 0 true 
// 0 false
// '' false 

const compare = true == 1;
console.log(compare);

// Motor pertama masuk 2000, 1 jam selanjutnya 1000
// Mobil peratama masuk 5000, 1 jam berikutnya 2000

// Misal ada 3 motor, parkir masing masing 1, 2, 3 jam dan mobile ada 2 parkir masing masing 1, 2 jam
// Hitung total pendapatan parkir


// Conditional

const motor = 3;
let biayaTotal = 0;
if (motor > 1) {
    // rumus yes 
    biayaTotal = 2000 + ((motor - 1) * 1000);
} else {
    // rumus no
    biayaTotal = 2000;
}
console.log(biayaTotal);

// Switch case 

// looping 
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// predictable
// for (let index = 0; index < 100; index++) {
//     const element = index;
//     console.log(element+1);
// }

let statusHungry = 0;
const percentageMinimum = 60;
// unpredictable
// while (statusHungry < percentageMinimum) {
//     console.log("I'm hungry", statusHungry);
//     console.log("Let eat");
//     if(statusHungry === 59) {
//         console.log("I'm full");
//     }
//     statusHungry++;
// }

function greeting(number) {
    console.log("Silahkan input data", number);
    console.log("Data akan di prosese", number);
    console.log("Data sudah selesai", number);
}

greeting(1);
greeting(2);
greeting(3);


function calculation(number1, number2) {
    let result = number1 + number2;
    console.log(result);
}

calculation(1, 2);
calculation(3, 4);
calculation(5, 6);

