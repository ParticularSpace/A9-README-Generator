// required packages for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



// all of the questions for the user to create the README
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please provide credits for your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'WTFPL', 'GPL-3.0', 'Apache-2.0', 'None'],
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
    }
];
    
// function to write README file
function createREADME() {
    inquirer.prompt(questions).then((answers) => {
        const readme = generateMarkdown(answers);
        fs.writeFile('README.md', readme, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });

}

// Function call to createREADME 
createREADME();
