
import { Rectangle } from "./Rectangle.js";
import { Square } from "./Square.js";
import { Circle } from "./Circle.js";
//import { Shape } from "./Shape.js";

const shape = new Shape("shape");

const rect = new Rectangle(10, 5);
const square = new Square(6);
const circle = new Circle(3);

const output = document.getElementById("output");

output.textContent = `
${rect.toString()}
${square.toString()}
${circle.toString()}
`;

console.log(rect.toString());
console.log(square.toString());
console.log(circle.toString());
console.log(shape.toString());
