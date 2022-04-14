
function renderLicenseBadge(license) {  
      if(license !== 'None'){
        return `![Badge for license](https://img.shields.io/badge/license-${license}-brightgreen)`
      } else {
        return ' '
      }
}

function renderLicenseLink(license) {
  if(license !== 'None') {
    return `[${license}](https://choosealicense.com/licenses/${license})`
  }
}

function renderLicenseSection(license) {
  if(license !== 'None') {
    return ` 
    
    ### [License](#table-of-contents)
    
    The project is covered under the following license:
    
    ${renderLicenseLink(license)}`
  } else {
    return ' '
  }
}


function generateMarkdown(answers) {
  return `
  # ${answers.title} ${renderLicenseBadge(answers.license)} 

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [How-To](#how-to)
  - [Contribution](#contribution)
  - [Testing Instructions](#testing-instructions)
  - [Contact](#contact)
  - [License](#license)
  
  ### [Description](#table-of-contents)
  - ${answers.description}

  ### [Installation](#table-of-contents)
  - ${answers.installation}

  ### [How-To](#table-of-contents)
  - ${answers.usage}

  ### [Contribution](#table-of-contents)
  - ${answers.contributors}

  ### [Testing Instructions](#table-of-contents)
  - ${answers.tests}

  ### [Contact](#table-of-contents)

  Questions?
  Comments?
  Concerns?
    
  - [LSMarch](https://github.com/${answers.github})
  - ${answers.email}

  ${renderLicenseSection(answers.license)}

`;
}

module.exports = generateMarkdown;
