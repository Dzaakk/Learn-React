// import { apikey } from "./util.js";
// import  apiKey  from "./util.js";
// import { abc, apiKey } from "./util.js";
// import * as util from "./util.js";

// import { abc as content } from "./util.js";
// console.log(content);

// console.log(util.apiKey);
// console.log(util.abc);
// console.log(util.default);

function greetUser(userName, message = "Hello!") {
    // console.log(userName);
    // console.log(message);
    return "Hi, I am " + userName + ". " + message;
}

greetUser("Max");
console.log(greetUser("Bob", "What's up?"));
