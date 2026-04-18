// import { apikey } from "./util.js";
// import  apiKey  from "./util.js";
// import { abc, apiKey } from "./util.js";
// import * as util from "./util.js";
// import { abc as content } from "./util.js";
// console.log(content);

// console.log(util.apiKey);
// console.log(util.abc);
// console.log(util.default);

// function greetUser(userName, message = "Hello!") {
//     // console.log(userName);
//     // console.log(message);
//     return "Hi, I am " + userName + ". " + message;
// }

// greetUser("Max");
// console.log(greetUser("Bob", "What's up?"));

// export default (userName, message) => {
//     console.log('Hello');
//     return userName + message;
// }

// const user = {
//     name: "Bob",
//     age: 20,
//     greet() {
//         console.log("Hello!");
//         console.log(this.name);
//     }
// }

// user.greet();
// console.log(user.age);

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log('Hi!');
//     }
// }

// const user1 = new User("Minerva", 22);
// console.log(user1);
// user1.greet();

// const hobbies = ["Sports", "Coding", "Reading"]
// console.log(hobbies[0]);

// hobbies.push("Archery")
// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === "Archery")

// console.log(index)

// const editedHobbies = hobbies.map((item) => item + "!")

// console.log(editedHobbies)

// const objectHobbies = hobbies.map((item) => ({ text: item }))

// console.log(objectHobbies)

// const [firstName, lastName] = ["Valentino", "Bob"]

// console.log(firstName);
// console.log(lastName);

// const { name: userName, age } = {
//     name: "Steve",
//     age: 20
// }

// console.log(userName);
// console.log(age);

// function storeOrder(order) {
//     localStorage.setItem('id', order.id);
//     localStorage.setItem('currency', order.currency);
// }

// function storeOrder({ id, currency }) { // destructuring
//     localStorage.setItem('id', id);
//     localStorage.setItem('currency', currency);
// }

// const hobbies = ["Sports", "Coding"]
// const user = {
//     name: "Steve",
//     age: 20
// }

// const newHobbies = ["Reading"]

// const mergedHobbies = [...hobbies, ...newHobbies]

// console.log(mergedHobbies);

// const extendedUser = {
//     isAdmin: false,
//     ...user
// }

// console.log(extendedUser);

const password = prompt("Your password");

if (password === "Hello") {
    console.log("Hello works");
} else if (password === "hello") {
    console.log("hello works");
} else {
    console.log("Invalid password");
}


const hobbies = ["Sports", "Coding"]

for (const hobby of hobbies) {
    console.log(hobby);

}