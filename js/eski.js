// let numbers = [1, 2, 3, 4, 5];

// let sum = numbers.reduce((sum, n) => sum + n, 0); //barcha elementlarni bitta qiymatga kamaytirish uchun

// numbers.pop(); // oxiridan element olib tashlaydi
// numbers.push(10); // oxriga element qo'shadi

// numbers.shift();
// numbers.unshift(0);

// let dubled = numbers.map((n) => n * 2); // har bir elementni ustidan amal bajarib, yangi array qaytarish uchun

// let filtred = numbers.filter((n) => n % 2 === 0); // shartga mos keladigan elementlarni yangi arrayga olish uchun

// console.log(numbers);
// console.log(filtred);

// let numbers = [1, 2, 3, 4, 5, 2, 6, 1, 3, 2];
// let toqlar = [1, 3, 5, 13, 2, 21, 15];

// let even = numbers.some((n) => n % 2 === 0); //sharta mos element 1 ta bo'lsa ham true qaytaradi
// let odd = toqlar.every((n) => n % 2 === 1); // barcha elementlar shartga mos kelsagina true qaytaradi.
// let finder = numbers.find((n) => n === 2); //berilgan elementlar ichidan birinchi topganini oladi

// console.log(even);
// console.log(odd);
// console.log(finder);

// let names = [
//   "alisher",
//   "gulirano",
//   "madina",
//   "sevinchoy",
//   "kamron",
//   "ilyosbek",
//   "alobek",
//   "jorabek",
// ];

// let sorted = names.sort();
// console.log(sorted);

// let sonlar = [1, 32, 15, 7, 81, 11, 213];

// let osish = sonlar.sort((a, b) => a - b);
// let kamayish = sonlar.sort((a, b) => b - a);

// console.log(kamayish);

// sonlar.forEach((val, i) => {
//   console.log(val, i);
// });

// let names = ["Ali", "Sardor", "John", "Vali", "Muhammad"];

// let filtred = names.filter((n) => n.length >= 5);
// let sorted = filtred.sort();                         //topshiriq 2
// console.log(sorted);

// let nums = [5, 12, 7, 20];

// let son = nums.some((n) => n >= 10);

// if (son) {
//   son = nums.filter((n) => n >= 10);            //topshiriq 5
//   sorted = son.sort();
//   console.log(sorted);
// } else {
//   console.log("Xato");
// }

// let names=["Ali", "Siroj", "Lola", "Samar"];
// let filtred = names.filter((n) => n.length >= 4);
// let hello = filtred.map((n) => n + "Hello");         //topshiriq 7

// console.log(hello);

// let nums = [-2, 1, 3, -5, 4];
// let kopaytma = nums.map((n) => n * 3);
// let filtred = kopaytma.filter((n) => n > 0);     //topshiriq 8

// console.log(filtred);

// let arr = [0, 4, 0, 6, 10];
// let filtred = arr.filter((n) => n != 0);
// let qiymat = filtred.reduce((a, b) => a + b, 0) / filtred.length;

// console.log(qiymat);

// let fruits = ["apple", "banana", "orange"];
// console.log(fruits.includes("banana"));
// console.log(fruits.includes("grape"));

// let numbers = [10, 20, 30, 40, 50, 60, 70];

// console.log(numbers.indexOf(30));
// console.log(numbers.lastIndexOf(30));

// let part = numbers.slice(1, 5);
// let part2 = numbers.splice(1, 2, 4, 0, 56776, 23, 5657, 8787);
// console.log(part2);
// console.log(numbers);

// Masalalar

// let nums = [0, 3, 0, 4, 5, 0, 7];
// let filtred = nums.filter((n) => n != 0);        //1-masala
// let revers = filtred.toReversed();
// console.log(revers);

// let numbers = [1, -2, 3, 4, -5, 6, -7, 8, -9];
// let filtred = numbers.filter((n) => n > 0);
// let sum = filtred.reduce((sum, n) => sum + n, 0);       //2-masala
// console.log(sum);

// let son = [2, 5, 6, 8, 1];
// let filtred = son.filter((n) => n > 5);
// let dubled = filtred.map((n) => n ** 2);            //3-masala
// console.log(dubled);

// let nums = [1, 2, 3, 4, 5];
// let sorted = nums.toSorted((a, b) => b - a);        //4-masala
// let sliced = sorted.slice(0, 2);
// console.log(sliced);

// let numbers = [1, 2, 2, 3, 3, 3, 4];
// let unique = numbers.filter((item, index) => {       //5-masala
//   return numbers.indexOf(item) === index;
// });
// console.log(unique);

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let filtred = nums.filter((n) => nums.indexOf(n) % 2 === 1); //6-masala
// let dubled = filtred.map((n) => n ** 2);
// console.log(dubled);

// let son = [5, 6, 7];
// let plus = [].concat(...son.map((num) => [0, +num])); //7-masala
// console.log(plus);

// let nums = [1, -2, 3, -4, 5, -6, 7, -8, 9];
// let filtred = nums.filter((n) => n % 2 === 1);
// let filtred2 = nums.filter((n) => n % 2 === 0);
// let arr = filtred.concat(filtred2);                 //8-masala Musbat va manfiy sonlarni alohida arraylarga ajratish

// console.log(arr);

// let numbers = [1, 2, 3, 4, 5];
// let left = numbers.shift();
// numbers.push(left);                          //9-masala
// console.log(numbers);

// let numbers = [3, 2, 1, 6, 4, 5];
// let sorted = numbers.toSorted();
// sorted.shift();
// console.log(sorted);

// Yangi Mavzu - Object

// let user = {
//   fName: "Madina",
//   age: 16,
//   isStudent: true,
//   greet() {
//     console.log("Hello " + this.fName);
//   },
// };

// let user2 = { ...user };
// let user3 = JSON.parse(JSON.stringify(user));

// user.country = "uzbekistan";

// console.log(user.fName);
// console.log(user.age);
// console.log(user.isStudent);
// user.greet();
// console.log(user2);

// let user = {
//   fName: "Madina",
//   age: 16,
//   isStudent: true,
//   address: {
//     city: "Tashkent",
//     zip: 221100,
//   },

//   greet() {
//     console.log("Hello " + this.fName);
//   },
// };

// let(
//   ({
//     address: { city, zip },
//   } = user),
// );
// // console.log(city);
// // console.log(zip);

// let a = { name: "Alisher" };
// let b = { surname: "Satimov" };

// let fullName = { ...a, ...b };
// // console.log(fullName);

// let updateUser = {
//   ...fullName,
//   name: "azamat",
// };

// console.log(updateUser);

// console.log(Object.entries(updateUser));

// let foydalanuvci = {
//   name: "Madi",
//   age:20,
// };

// for(let kalit in foydalanuvci){
//     console.log(kalit,foydalanuvci[kalit]);
// }

// Object masalalar:

// let user = {
//   name: "Ali",
//   age: 22,
// };
// user.isActive = "true";        //1-masala
// console.log(user);

// let product = {
//   title: "Book",
//   price: 15,
// };
// product.price = 20;          //2-masala
// let { title, price } = product;
// console.log(product);

// let person = {
//   name: "Dilshod",
//   age: 30,
// };
// delete person.age;

// let { name, age = 18 } = person;       //3-masala
// console.log(name);
// console.log(age);

// let car = {
//   brand: "BMW",
//   model: "X5",
//   getFullName() {
//     console.log(this.brand + " " + this.model);      //4-masala
//   },
// };
// car.getFullName();

// let user = {
//   name: "Sam",
//   address: {
//     city: "Tashkent",
//     zip: 100100,                     //5-masala
//   },
// };
// console.log(user.address.city);
// console.log(user.address.zip);

// let info = {
//   address: {
//     city: "Samarqand",
//   },
// };
// let {
//   address: { city, street = "unknown" },         //6-masala
// } = info;
// console.log(city);
// console.log(street);

// let account = {
//   balance: 100,
//   addBalance(qiymat) {
//     this.balance += qiymat;
//   },
// };
// console.log(account.balance);           //7-masala
// account.addBalance(50);
// console.log(account.balance);

// let student = {
//   name: "Karim",
//   contact: {
//     email: "k@gmail.com",
//     phone: "999",                  //8-masala
//   },
// };
// student.grade = "A";
// console.log(student.grade);
// console.log(student.contact.email);

// let user = {
//   firstName: "Bek",
//   years: 27,
// };
// let { firstName: name, years: age } = user;    //9-masala
// console.log(name, age);

// const student = {
//   name: "Doniyor",
//   scores: {
//     math: 90,
//     english: 70,
//   },
//   getAverage() {
//     return (this.scores.math + this.scores.english) / 2;
//   },
// };
// console.log(student.getAverage());

// Yangi mavzu JavaScript DOM.

// let tagName = document.querySelector("p");
// let buAydi = document.querySelector("#buAydi");
// let buClass = document.querySelector(".buClass");

// let matn = document.querySelector(".matn");
// let btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   matn.textContent = "Alik Dunyodan";
//   matn.style.color = "red";
//   matn.style.backgroundColor = "yellow";
// });

// let matn = document.querySelector(".matn");
// let btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   matn.classList.remove("active");
//   matn.classList.toggle("stil");
//   console.log(matn);
// });

// let btn = document.querySelector(".btn");
// let card = document.querySelector(".card");

// let yangiMatn = document.createElement("h1");

// yangiMatn.textContent = "Hello World";
// yangiMatn.classList.add("stil");

// btn.addEventListener("click", () => {
//   card.appendChild(yangiMatn);
//   console.log(card);
// });

// btn.addEventListener("dblclick", () => {
//   yangiMatn.remove();
//   console.log(card);
// });

// let card = document.querySelector(".card");

// card.addEventListener("mouseover", () => {
//   console.log("mouseover");
// });
// card.addEventListener("mouseout", () => {
//   console.log("mouseout");
// });
// card.addEventListener("mousedown", () => {
//   console.log("mousedown");
// });
// card.addEventListener("mouseup", () => {
//   console.log("mouseup");
// });
// card.addEventListener("mousemove", () => {
//   console.log("mousemove");
// });

// let bos = document.querySelector(".bos");
// let element = document.querySelector(".element");

// bos.addEventListener("click", () => {
//   let new1 = document.createElement("li");   //matn chiqarish
//   new1.textContent = "Bu yangi matn";
//   element.appendChild(new1);
// });

// let matn = document.getElementById("text");
// let tugma = document.getElementById("btn");

// tugma.onclick = function () {
//   matn.innerText = "JavaScript zo‘r!"; //1-vazifa
//   matn.style.color = "red";
// };

// let quti = document.querySelector(".box");
// let rang = document.querySelector("button");

// quti.style.backgroundColor = "green";

// rang.onclick = function () {
//   if (quti.style.backgroundColor === "green") {
//     quti.style.backgroundColor = "red";            2-vazifa
//   } else {
//     quti.style.backgroundColor = "green";
//   }
// };

// let gap = document.querySelector(".yashirin");
// let btn = document.querySelector("button");

// btn.onclick = function () {
//   if (gap.style.visibility === "hidden") {
//     gap.style.display = "block"; //3-vazifa
//   } else {
//     gap.style.display = "none";
//   }
// };

// btn.addEventListener("click", () => {
//   gap.classList.toggle("hide");
// });

// let bos = document.querySelector(".bos");
// let element = document.querySelector("#list");

// function addElem() {
//   let new1 = document.createElement("li"); //matn chiqarish va o'chirish
//   new1.textContent = "Bu yangi matn";
//   element.appendChild(new1);
// }

// function remElem() {
//   let li = document.querySelectorAll("#list li");
//   li.forEach((e) => {
//     e.addEventListener("click", () => {
//       e.remove();
//     });
//   });
// }

// bos.addEventListener("click", () => {
//   addElem();
//   remElem();
// });

// window.addEventListener("keydown", (event) => {
//   if (event.key === "g" && event.altKey) {
//     document.body.style.background = "red";
//   }
// });

// document.addEventListener("keydown", function (e) {
//   if (e.key === "F5") {
//     e.preventDefault();
//     console.log(e.key);
//   }
// });

// let btn = document.querySelector(".btn");

// function handleClick() {
//   console.log("bosildi");
// }

// btn.addEventListener("click", handleClick);
// btn.removeEventListener("click", handleClick);

// let btn = document.querySelector(".btn");

// let timeout = setTimeout(() => {
//   console.log("Hello World");
// }, 3000);

// btn.addEventListener("click", () => {
//   clearTimeout(timeout);
// });

// setInterval(() => {
//   console.log("ishlayabdi...");
//   // window.location.reload();
// }, 1000);

// localStorage.setItem("name", "Madina");
// localStorage.removeItem("name");

// console.log(localStorage.getItem("name"));

// localStorage.setItem("son", 10);

// let son = +localStorage.getItem("son");

// console.log(typeof son);

// sessionStorage.setItem("name", "098765");
// sessionStorage.removeItem("name");

// console.log(sessionStorage.getItem("name"));

// sessionStorage.setItem("son", 10);

// let son = +sessionStorage.getItem("son");

// console.log(typeof son);

// let b = prompt();
// // let b = a * 2;
// if (b % 2 != 0) {
//   console.log("Toq son");
// } else if (b % 2 == 0) {
//   console.log("Juft son");
// }
// console.log(b);

// const post = { userId: 1, title: "salom" };
// console.log(post);

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then(function (response) {
//     return response.json();
//   })

//   .then(function (data) {
//     console.log(data);
//   });

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => response.json())
//   .then((user) => {
//     console.log(`Ismi: ${user.name}`);
//     console.log(`Email: ${user.email}`);
//     document.body.innerHTML += `<h1>${user.name}</h1><p>${user.email}</p>`;
//   });

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     const div = document.getElementById("post");
//     div.innerHTML = `
//         <h2>${data.title}</h2>
//         <p>${data.body}</p>
//       `;
//   })
//   .catch(function (error) {
//     const div = document.getElementById("post");
//     div.innerHTML = "<p>Xatolik yuz berdi. Internetni tekshir.</p>";
//   });
