// Generic interface for shapes
export interface Shape {
    calculateArea(): number;
    calculatePerimeter(): number;
    getType(): string;
}

// Generic class for handling different shape types
export class ShapeCalculator<T extends Shape> {
    private shapes: T[] = [];

    addShape(shape: T): void {
        this.shapes.push(shape);
    }

    getAllShapes(): T[] {
        return this.shapes;
    }

    getTotalArea(): number {
        return this.shapes.reduce((total, shape) => total + shape.calculateArea(), 0);
    }

    getTotalPerimeter(): number {
        return this.shapes.reduce((total, shape) => total + shape.calculatePerimeter(), 0);
    }
}

// Implementation classes
export class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }

    getType(): string {
        return 'Rectangle';
    }
}

export class Circle implements Shape {
    constructor(private radius: number) {}

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    getType(): string {
        return 'Circle';
    }
}

// Generic function to print shape details
export function printShapeDetails<T extends Shape>(shape: T): void {
    console.log(`Shape Type: ${shape.getType()}`);
    console.log(`Area: ${shape.calculateArea().toFixed(2)}`);
    console.log(`Perimeter: ${shape.calculatePerimeter().toFixed(2)}`);
}
