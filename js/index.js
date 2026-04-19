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

function daraja(a, b = 2) {
  console.log(a ** b);
}

daraja(2, 5);

daraja(4);
