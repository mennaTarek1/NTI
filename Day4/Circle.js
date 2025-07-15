import { Shape } from "./Shape.js";

export class Circle extends Shape {
  constructor(radius) {
    super('Circle');
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}
