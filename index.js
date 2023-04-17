// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 

// TODO: Create an array of questions for user input
 const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the title of your application?"
  },
  {
    type: "input",
    name: "description",
    message: "Enter a project desscription"
  },
  {
    type: "input",
    name: "installaltion",
    message: "Enter installation instructions"
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage instructions:",
  },
  {
    type: "input",
    name: "credit",
    message: "Who do you want to give some credit to?"
  },
  {
    type: "input",
    name: "contribution",
    message: "How can others contribute to this project?"
  },
  {
    type: "list",
    name: "license",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT",
      "BSD 2-Clause Simplified License",
      "BSD 3-Clause New or Revised License",
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense"
    ]
  },
  {
    type: "input",
    name: "roadMap",
    message: "Any future plans for the project?"
  }
];


// TODO: Create a function to write README file
    const {projectTitle, description, installation, usage, credit, contribution, license, roadMap} = data;

function writeToFile(fileName, data) {
    const readmeContent = `# ${projectTitle}\n\n` + 
    `## Descriptionn\n\n${description}\n\n` +
    `## Installation\n\n${installation}\n\n` +
    `## Usage\n\n${usage}\n\n` +
    `## Credit\n\n${credit}\n\n` +
    `## Contributors\n\n${contribution}\n\n` +
    `## License\n\nThis project is licensed under the ${license} license.\n\n` +
    `## Roadmap\n\n${roadMap}\n`;

    fs.writeFile (fileName, readmeContent, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log('${fileName} has been created succesfully');
        }
    });
};

// TODO: Create a function to initialize app
function init() {
    if(process.argv[2]) {
        const projectTitle = process.argv[2];
        writeToFile('README.md', {projectTitle});
    } else {
        inquirer.prompt(questions)
        .then((answers) => {
            writeToFile('README.md', answers);
        })
        .catch((err) => {
            console.log(err);
        });
    }
};

// Function call to initialize app
init();
