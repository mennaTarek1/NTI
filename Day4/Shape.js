export class Shape {
  constructor(name) {
    if (new.target === Shape) {
      throw new Error("Cannot instantiate Shape directly. It is an abstract class.");
    }
    this.name = name;
  }

  getArea() {
    throw new Error('getArea() must be implemented');
  }

  getPerimeter() {
    throw new Error('getPerimeter() must be implemented');
  }

  toString() {
    return `${this.name}: Area = ${this.getArea()}, Perimeter = ${this.getPerimeter()}`;
  }
}
