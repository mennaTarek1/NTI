import { Shape } from "./Shape.js";

export class Square extends Shape {
  constructor(side) {
    super('Square');
    this.side = side;
  }

  getArea() {
    return this.side * this.side;
  }

  getPerimeter() {
    return 4 * this.side;
  }
}
