// Packages needed for this application
const fs = require('fs');
const { Circle, Square, Triangle } = require('./shapes');

//Function to create the SVG Logo and write to file in example folder
function createLogo({ text, textColor, shape, shapeColor}) {
    let shapeObj;
    switch (shape) {
        case 'Circle':
            shapeObj = new Circle(text, textColor, shapeColor);
            break;
        case 'Square':
            shapeObj = new Square(text, textColor, shapeColor);
            break;
        case 'Triangle':
            shapeObj = new Triangle(text, textColor, shapeColor);
            break;
    }

    const SVG = shapeObj.render();

    fs.mkdirSync('./examples', { recursive: true }, (err) => {
        if (err) throw err;
    });

    fs.writeFileSync(`./examples/logo.svg`, SVG);
}

module.exports = createLogo;