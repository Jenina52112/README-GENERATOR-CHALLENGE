// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
    case 'GPL 3.0':
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
    case 'Apache 2.0':
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
    default:
        return '';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
        return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
        return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
        return '[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)';
    default:
        return '';
}
 
}
// const selectedLicense = 'MIT'; // Example selected license
// const licenseLink = renderLicenseLink(selectedLicense);
// console.log(licenseLink); // Output the license link


// const license = 'MIT';
// const badge = renderLicenseBadge(license);
// console.log(badge);




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {generateMarkdown, renderLicenseBadge}


