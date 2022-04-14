// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input

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
                choices: ['MIT', 'Apache 2.0', 'BSD 2'],
                
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

// Original code given for questions array


// const questions = [
    
//         {
//             type: 'input',
//             name: 'title',
//             message: 'What is the title of the project?',
            
//         },
        // {
        //     type: 'input',
        //     name: 'description',
        //     message: 'Give a brief description of the project',        
        // },
        // {
        //     type: 'confirm',
        //     name: 'toc',
        //     message: 'Would you like a table of contents?'
        // },
        // {
        //     type: 'input',
        //     name: 'installation',
        //     message: 'What are the instatllation instructions for the project?'
        // },
        // {
        //     type: 'input',
        //     name: 'usage',
        //     message: 'How is the project meant to be used?'
        // },
        // {
        //     type: 'list',
        //     name: 'license',
        //     message: 'Would you like to add a license?',
        //     choices: ['MIT', 'Someother'],
        //     default: 'MIT'
        // },
        // {
        //     type: 'input',
        //     name: 'contributors',
        //     message: 'List anyone who contributed on the project.'
        // },
        // {
        //     type: 'input',
        //     name: 'tests',
        //     message: 'Come back and figure this one out!!'
        // },
        // {
        //     type: 'input',
        //     name: 'questions',
        //     message: 'Come back to this one too!!'
        // },   
//];

// TODO: Create a function to write README file



// function writeToFile(fileName, data) {
//     // TODO: Create a function to write README file

//     const readmeContent = generateMarkdown(data)
//     fs.writeFile('README.md', readmeContent, (err) =>
//     err ? console.log(err) : console.log('Successfully created README.md!')
//     )    
// }

// TODO: Create a function to initialize app
// function init() {
//     return inquirer
//     .prompt(questions)
//     writeToFile('README.md', data)
// }

const init = () => {

    askUser() //questions array into a promise
        .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
        .then(() => console.log('Succussfully created README.md!'))
        .catch((err) => console.error(err))


}
// Function call to initialize app
init();
