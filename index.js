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

async function getPosts() {
  try {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10",
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
getPosts();
