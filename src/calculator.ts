// Generic function to add two numbers of any numeric type
export function add<T extends number>(a: T, b: T): T {
    return (a + b) as T;
}

// Generic function that can work with arrays of numbers
export function addArray<T extends number>(numbers: T[]): T {
    return numbers.reduce((sum, current) => (sum + current) as T, 0 as T);
}

// Generic class with number type parameter
export class Calculator<T extends number> {
    constructor(private initialValue: T) {}

    add(value: number): Calculator<T> {
        this.initialValue = (this.initialValue + value) as T;
        return this;
    }

    subtract(value: number): Calculator<T> {
        this.initialValue = (this.initialValue - value) as T;
        return this;
    }

    getValue(): T {
        return this.initialValue;
    }
}
