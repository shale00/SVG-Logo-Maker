// Packages needed for this application
const inquirer = require('inquirer');
const questions = require('./lib/questions');
const createLogo = require('./lib/createLogo');


// Inquirer module to prompt user
inquirer.prompt(questions)
    .then((response) => {
        createLogo(response);
        console.log('Generated logo.svg!');
    })
    .catch((err) => console.log(err));
