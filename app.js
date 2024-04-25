// CommonJS modules
const abc = require("./person"); // Syntax to import modules as commonJS
const {person, people} = require("./person") // Syntax to import a module as a variables object.

// const os = require("os");
const path = require("path");
console.log(path); // Prints out some usefull functions, example: path.resolve(), path.join(), etc.

// console.log(abc); // This will print out the person exported module

// console.log(person); // This will print out the imported module "person" variable.
// console.log(people); // Same as above.
// ES modules

// const greets = (name) => {
//     console.log(name);
// };

// greets("Raven");
// greets("D. Milosh");

// console.log(global);

// globalThis.setInterval(() => { // This will run every 1.0 second (the powr of node.js).
//     console.log("MERN stack course");
// }, 1000)

// console.log(__dirname); // This will print out the absolute path, to the current directory route.
// console.log(__filename); // This will print out the absolute path, to the current file's name execution.