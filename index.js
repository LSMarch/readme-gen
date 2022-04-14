
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')


const askUser = () => {
    return inquirer.prompt([        
                {
                type: 'input',
                name: 'title',
                message: 'What is the title of the project?',
                validate: function (answer) {
                    if(answer.length < 1) {
                        return console.log('Please enter a title')
                    }
                    return true;
                }                
            },
            {
                type: 'input',
                name: 'description',
                message: 'Give a brief description of the project',
                validate: function (answer) {
                    if(answer.length < 1) {
                        return console.log('Please enter a description')
                    }
                    return true;
                }        
            },           
            {
                type: 'input',
                name: 'installation',
                message: 'What are the instatllation instructions for the project?',
                validate: function (answer) {
                    if(answer.length < 1) {
                        return console.log('Please enter instructions')
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: 'How is the project meant to be used?',
                validate: function (answer) {
                    if(answer.length < 1) {
                        return console.log('Please enter a usage guide')
                    }
                    return true;
                }
            },
            {
                type: 'list',
                name: 'license',
                message: 'Would you like to add a license?',
                choices: ['mit', 'apache', 'bsd', 'None'],
                
            },
            {
                type: 'input',
                name: 'contributors',
                message: 'What guidelines do you want contributors to follow?',
                validate: function (answer) {
                    if(answer.length < 1) {
                        return console.log('Please enter guidelines')
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'tests',
                message: 'What is the best way to run a test for the project?',
                validate: function (answer) {
                    if(answer.length < 1) {
                        return console.log('Please enter instructions')
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?',
                validate: function (answer) {
                    if(answer.length < 1) {
                        return console.log('Please enter your username')
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
                validate: function (answer) {
                    if(answer.length < 1) {
                        return console.log('Please enter your email')
                    }
                    return true;
                }
            },   
    
    ])
}

const init = () => {

    askUser() 
        .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
        .then(() => console.log('Succussfully created README.md!'))
        .catch((err) => console.error(err))


}

init();
