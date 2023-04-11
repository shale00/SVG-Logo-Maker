//Packages needed
//a package to validate color keywords and hexadeicmals?


// Questions array
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three characters',
        validate: nameInput => {
            if (nameInput.length <= 3 && nameInput.length != 0) {
                return true;
            } else {
                console.log('Make sure you are using at least one character and not more than three.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'textColorChoice',
        message: 'How you would like to provide a text color.',
        choices: ['Color keyword', 'Hexadecimal number'],
    },
    {
        type: 'input',
        name: 'colorKeyword',
        message: 'What color keyword would you like to use for text color?',
        when: (answers) => answers.choice === 'Color keyword',
        validate: ''
    },
    {
        type: 'input',
        name: 'colorHex',
        message: 'What hexadecimal number would you like to use for text color?',
        when: (answers) => answers.choice === 'Hexadecimal number',
        validate: ''
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What type of shape would you like to use for the logo?',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'list',
        name: 'shapeColorChoice',
        message: 'How you would like to provide a shape color?',
        choices: ['Color keyword', 'Hexadecimal number'],
    },
    {
        type: 'input',
        name: 'colorKeyword',
        message: 'What color keyword would you like to use for the shape color?',
        when: (answers) => answers.choice === 'Color keyword',
        validate: '' 
    },
    {
        type: 'input',
        name: 'colorHex',
        message: 'What hexadecimal number would you like to use for the shape color?',
        when: (answers) => answers.choice === 'Hexadecimal number',
        validate: ''
    },
    {
        type: 'input',
        name: '',
        message: '',
    },
];

module.exports = questions;
