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

const user = {
    name: "Bob",
    age: 20,
    greet() {
        console.log("Hello!");
        console.log(this.name);
    }
}

user.greet();
console.log(user.age);

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('Hi!');
    }
}

const user1 = new User("Minerva", 22);
console.log(user1);
user1.greet();