// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');


// Function to create new SVG file


// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            createLogo(response);
            console.log('Questions answered successfully.');
        })
        .catch((err) => console.log(err));
};

// Function call to initialize app
init();