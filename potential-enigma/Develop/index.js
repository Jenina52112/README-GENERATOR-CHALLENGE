// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('../Develop/utils/generateMarkdown');

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
      name: 'installation',
      message: 'How to install this application?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How to use this application?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide contribution guidelines.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test documentations if any.',
    },
    {
      type: 'list',
      choices: ['MIT', 'GPL 3.0', 'Apache 2.0'],
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
    const license = `${answers.licenses}`;
    const badge = markdown.renderLicenseBadge(license);
    const licenseLink = markdown.renderLicenseLink(license);
    return `
# ${answers.title}    ${badge}


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)


## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License 
  This application is covered under license ${answers.licenses}.
  For more information about the license, visit: [${answers.licenses}](${licenseLink}) or click the badge on top.

## Questions
  My GitHub profile is: ${answers.username} [View on GitHub](https://github.com/${answers.username})

  For additional questions, contact me at email address: ${answers.email}
`;
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





