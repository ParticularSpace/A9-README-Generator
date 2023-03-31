// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
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
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project.',
    }
].then(answers => {
    console.log(answers);
    fs.writeFile('answers.txt',writeToFiles(answers),  (err) => {
        if (err) {
            console.log('Error', err);
            return;
        }

        console.log('success');


    });
});


// TODO: Create a function to write README file
const  writeToFile = (fileName, data) => {
        return `
        Your ${title}!
        Your description is ${description}
        Your installation is ${installation}
        The how to use ${usage}
        this is your credits ${credits}
        this is your license ${license}
        this is your tests ${tests}
        `;
    };
    

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);

}

// Function call to initialize app
init();
