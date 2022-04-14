// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  //(https://img.shields.io/badge/license-${answers.license}-brightgreen)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title} ![Badge for license](https://img.shields.io/apm/l/vim-mode?style=plastic) 
    

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [How-To](#how-to)
  - [Contribution](#contribution)
  - [Testing Instructions](#testing-instructions)
  - [Contact](#contact)
  - [License](#license)
  
  ### Description
  - ${answers.description}

  ### Installation
  - ${answers.installation}

  ### How-To
  - ${answers.usage}

  ### Contribution
  - ${answers.contributors}

  ### Testing Instructions
  - ${answers.tests}

  ### Contact

  Questions?
  Comments?
  Concerns?
    
  - ${answers.github}
  - ${answers.email}

  ### License
 - This application is covered under the ${answers.license} license


`;
}

module.exports = generateMarkdown;
