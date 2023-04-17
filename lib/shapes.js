//Shape constructor class
class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

//Extended shape constructor classes
class Circle extends Shape {
    render() {
        return `
        <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

     <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />

     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
     
     </svg>`
    }
}

class Square extends Shape {
    render() {
        return `
        <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

     <rect width="100%" height="100%" fill="${this.shapeColor}" />

     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

    </svg>`
    }
}

class Triangle extends Shape {
    render() {
        return `
        <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

     <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>

     <text x="150" y="140" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

    </svg>`
    }
}

//Exporting just the specific shape constructor classes
module.exports = { Circle, Square, Triangle };