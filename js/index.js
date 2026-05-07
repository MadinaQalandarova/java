// function factorial(n) {
//     let kop=1;
//     for (let i = 1; i <= n; i++) {
//         kop += i;
//     }
//     return kop;
// }

// let n = 2;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     sum += [-1]** 9 (i-1) / factorial(2*i-1);
// }
// console.log(sum);

// function datebirth(year, age) {

//     console.log(year - age);

// }                                //function declaretiond
//  datebirth(2026, 16)

// let alik = function (){
//     console.log("voleykum assalom");

// };                                      //function expression

// alik();

// function son(a, b, c) {

//     console.log((a+b+c)/3);

// }
//  son(1, 2, 3)

//  let son = function (){
//     console.log((a+b+c)/3);

// };

// alik(1, 2, 3);

// let nimaGap = () => {
//     console.log("gap yoq");
// }
//                             //arrow function
// nimaGap();

// let aniqla = (n) => {
//   if (typeof n == "number") {
//     if (0 < n) {
//       console.log("musbat");
//     } else if (0 > n) {
//       console.log("manfiy");
//     } else {
//       console.log("0");
//     }
//   } else {
//     console.log("Bu son emas");
//   }
// };

// aniqla("bir");

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => res.json())
//   .then((data) => {
//     let top_1 = document.querySelector(".top_1");
//     let malumot = `Ismi: ${data.name}, pochtasi: ${data.email}`;
//     top_1.textContent = malumot;
//   })
//   .catch((err) => (dispatchEvent.innerHTML = "<p>Xatolik!</p>"));

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => {
//     let top_2 = document.querySelector(".top_2");
//     let malumot = `completed: ${data.completed}`;
//     top_2.textContent = malumot;
//   })
//   .catch((err) => (dispatchEvent.innerHTML = "<p>Xatolik!</p>"));

fetch("https://axv-blogs.up.railway.app/health")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

fetch("https://axv-blogs.up.railway.app/api/posts")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
