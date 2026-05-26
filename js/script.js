// fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//const { Activity } = require("react");

// fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/comments")
//   .then((response) => response.json())
//   .then((comments) => console.log(comments));

// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async function getPosts() {
//   let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   console.log(response.data);
// }
// getPosts();

// async function getPosts() {
//   try {
//     let response = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts",
//     );
//     console.log(response.data);
//   } catch (error) {
//     console.log("Xatolik yuz berdi");
//     console.log(error);
//   }
// }
// getPosts();

// async function createPost() {
//   try {
//     let response = await axios.post(
//       "https://jsonplaceholder.typicode.com/posts",
//       {
//         title: "Mening birinchi postm",
//         body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, atque.",
//         userId: 1,
//       },
//     );
//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// createPost();

// async function getPosts() {
//   try {
//     let response = await axios.get(
//       "https://jsonplaceholder.typicode.com/todos?_limit=10",
//     );
//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getPosts();
// let postlar = document.querySelector(".postlar");
// let btn = document.querySelector(".save");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   getPosts();
// });

// function getPosts() {
//   fetch("https://axv-blogs.up.railway.app/api/posts")
//     .then((res) => res.json())
//     .then((data) => {
//       postlar.innerHTML = "";
//       data.forEach((post) => {
//         createPost(post);
//       });
//     });
// }

// function createPost(post) {
//   let title = document.createElement("h3");
//   let content = document.createElement("p");
//   let author = document.createElement("h4");
//   let hr = document.createElement("hr");

//   title.textContent = post.title;
//   content.textContent = post.content;
//   author.textContent = post.author;
//   hr.textContent = "";

//   postlar.appendChild(title);
//   postlar.appendChild(content);
//   postlar.appendChild(author);
//   postlar.appendChild(hr);
// }
