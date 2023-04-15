// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
inquirer
  .prompt const questions = {
    title: "What is the Title of your application?",
    describe: "How would you describe the functionality of the application?",
    install: "What are the steps required to install your app?",
    usage: "How are user going to use this app?",
    credit: "Is there anyone else who helped on this project?",
    howTo: "If anyone wants to contribute, how can they reach you?",
    roadMap: "Do you have any plans for the future of this application?"
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
