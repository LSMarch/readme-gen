// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a brief description of your project',        
        },
        {
            type: 'confirm',
            name: 'toc',
            message: 'Would you like a table of contents?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the instatllation instructions for your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is your project meant to be used?'
        },
        {
            type: 'confirm',
            name: 'license',
            message: 'Would you like to add an MIT license?'
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'List constributor if any.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Come back and figure this one out!!'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Come back to this one too!!'
        },   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    
    
}

// TODO: Create a function to initialize app
function init() {
    return inquirer
    .prompt(questions)
}

// Function call to initialize app
init();
