// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is this project about?',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'What are the languages or apps used for this project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is this project for?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who are the contributors on this project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test documentations.',
    },
    {
      type: 'list',
      choices: ['MIT License', 'GNU General Public License (GPL)', 'Apache License', 'BSD License', 'Creative Commons Licenses'],
      name: 'licenses',
      message: 'What is the license used if any?',
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ]

  function generateREADME(answers) {
    return `
# ${answers.title}

## Table of Contents

## Description
${answers.description}

## Installation
${answers.Installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions?
  My GitHub profile is: ${answers.username}
  My email address is: ${answers.email}


`;
//README entitled Description, Installation, Usage, Contributing, and Tests
    // Add more sections as needed
}
// TODO: Create a function to write README file

function writeREADME(content) {
  fs.writeFile('README.md', content, err => {
      if (err) {
          console.error(err);
          return;
      }
      console.log('README.md created successfully!');
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
      .then(answers => {
          const READMEContent = generateREADME(answers);
          writeREADME(READMEContent);
      })
      .catch(err => console.error(err));
}
// Function call to initialize app
init();






