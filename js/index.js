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

//7.05.2026

// fetch("https://axv-blogs.up.railway.app/health")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// fetch("https://axv-blogs.up.railway.app/api/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// let btn = document.querySelector(".btn_post");
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   let title = document.querySelector(".title").value;
//   let content = document.querySelector(".content").value;
//   let author = document.querySelector(".author").value;
//   fetch("https://axv-blogs.up.railway.app/api/posts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       title,
//       content,
//       author,
//     }),
//   })
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// });

// let btn_get = document.querySelector(".btn_get");
// let btn_put = document.querySelector(".btn_put");

// btn_get.addEventListener("click", (e) => {
//   e.preventDefault();
//   let title = document.querySelector("#title");
//   let content = document.querySelector("#content");
//   let author = document.querySelector("#author");

//   fetch("https://axv-blogs.up.railway.app/api/posts/100", {
//     method: "GET",
//   })
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       title.value = data.title;
//       author.value = data.author;
//       content.value = data.content;
//       console.log(data);
//     });
// });

// btn_put.addEventListener("click", (e) => {
//   e.preventDefault();
//   let title = document.querySelector("#title").value;
//   let content = document.querySelector("#content").value;
//

//   fetch("https://axv-blogs.up.railway.app/api/posts/100", {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       title,
//       content,
//
//     }),
//   })
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// });

//Post yaratish va o'chiirsh

let postlar = document.querySelector("#postlar");
let btn_get = document.querySelector(".btn_get");

btn_get.addEventListener("click", (e) => {
  e.preventDefault();
  getPosts();
});

function getPosts() {
  fetch("https://axv-blogs.up.railway.app/api/posts")
    .then((res) => res.json())
    .then((data) => {
      postlar.innerHTML = "";
      data.forEach((post) => {
        createPost(post);
      });
    });
}

function createPost(post) {
  let title = document.createElement("h3");
  let content = document.createElement("p");
  let author = document.createElement("h4");
  let hr = document.createElement("hr");
  let del_btn = document.createElement("button");

  del_btn.addEventListener("click", () => {
    event.preventDefault();
    deletePost(post.id);
  });

  title.textContent = post.title;
  content.textContent = post.content;
  author.textContent = post.author;
  del_btn.textContent = "Delete";

  postlar.appendChild(title);
  postlar.appendChild(content);
  postlar.appendChild(author);
  postlar.appendChild(hr);
  postlar.appendChild(del_btn);
}
function deletePost(id) {
  fetch(`https://axv-blogs.up.railway.app/api/posts/${id}`, {
    method: "DELETE",
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      getPosts();
    });
}
