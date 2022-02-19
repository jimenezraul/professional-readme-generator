// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project title? (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a project title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Write a brief description of your project: (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a brief description of your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "installations steps: ",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter installation steps");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "What is this project usage for? (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter what is this project usage for");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Chose the appropriate license for this project: ",
    choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
    default: "MIT",
  },
  {
    type: "input",
    name: "contributing",
    message: "Name of the contributor of this project? ",
  },
  {
    type: "input",
    name: "tests",
    message: "Is there a test included? ",
  },
  {
    type: "input",
    name: "questions",
    message: "What do I do if I have an issue? (Required)",
  },
  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email: (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your email!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, markdown(data), (err) => {
        if (err) {
          console.log(err);
          return;
        } else {
            console.log("File created!")
        } 
      });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions).then(data => writeToFile("./dist/README.md", data));
}

// Function call to initialize app
init();
