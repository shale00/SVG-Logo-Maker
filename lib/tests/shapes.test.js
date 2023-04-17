// Packages needed for this application
const { Circle, Square, Triangle } = require("../shapes");

//Jest tests for each shape
describe('Circle', () => {
    it('should render a green circle with black letters reading TST', () => {
        const shape = new Circle('TST', 'black', 'green');
        const expected = `
        <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

     <circle cx="150" cy="100" r="100" fill="green" />

     <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">TST</text>
     
     </svg>`;
        const actual = shape.render();
        expect(actual).toEqual(expected);
    });
});

describe('Square', () => {
    it('should render a red square with grey letters reading TST', () => {
        const shape = new Square('TST', 'grey', 'red');
        const expected = `
        <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

     <rect width="100%" height="100%" fill="red" />

     <text x="150" y="125" font-size="60" text-anchor="middle" fill="grey">TST</text>

    </svg>`;
        const actual = shape.render();
        expect(actual).toEqual(expected);
    });
});

describe('Triangle', () => {
    it('should render a blue triangle with white letters reading TST', () => {
        const shape = new Triangle('TST', 'white', 'blue');
        const expected = `
        <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

     <polygon points="150, 18 244, 182 56, 182" fill="blue"/>

     <text x="150" y="140" font-size="50" text-anchor="middle" fill="white">TST</text>

    </svg>`;
        const actual = shape.render();
        expect(actual).toEqual(expected);
    });
});