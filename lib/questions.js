//Packages needed
const validateColor = require('validate-color').default;

// Questions array
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three characters',
        validate: input => {
            if (input.length <= 3 && input.length != 0) {
                return true;
            } else {
                console.log(' Make sure you are using at least one character and not more than three.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'color',
        message: 'What would you like the text color to be? Use a color-keyword or hexadecimal number.',
        default: 'white',
        validate: (input) => {
            if (validateColor(input)) {
                return true;
            } else {
                console.log(' Please provide a valid color-keyword or hexadecimal number.');
                return false;
            }
        },
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What type of shape would you like to use for the logo?',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'list',
        name: 'shapeColor',
        message: 'What would you like the shape color to be? Use a color-keyword or hexadecimal number.',
        validate: (input) => {
            if (validateColor(input)) {
                return true;
            } else {
                console.log(' Please provide a valid color-keyword or hexadecimal number.');
                return false;
            }
        }, 
    },
];

module.exports = questions;
