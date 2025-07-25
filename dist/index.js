"use strict";
// Array declaration methods
const numbers1 = [1, 2, 3, 4, 5]; // Standard way
const numbers2 = new Array(1, 2, 3, 4, 5); // Using Array constructor
const fruits = ['apple', 'banana', 'orange']; // String array
console.log('\n=== Array Declaration Examples ===');
console.log('numbers1:', numbers1);
console.log('numbers2:', numbers2);
console.log('fruits:', fruits);
// Traditional array traversal (old way)
console.log('\n=== Traditional For Loop ===');
for (let i = 0; i < fruits.length; i++) {
    console.log(`fruits[${i}]:`, fruits[i]);
}
// Using for...in (indices)
console.log('\n=== For...in Loop (indices) ===');
for (let index in fruits) {
    console.log(`fruits[${index}]:`, fruits[index]);
}
// Modern array traversal methods
console.log('\n=== Modern For...of Loop ===');
for (let fruit of fruits) {
    console.log('fruit:', fruit);
}
console.log('\n=== forEach Method ===');
fruits.forEach((fruit, index) => {
    console.log(`fruits[${index}]:`, fruit);
});
// Modern array methods
console.log('\n=== Modern Array Methods ===');
// map: transform each element
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log('Uppercase fruits:', upperFruits);
// filter: get elements that match a condition
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log('Fruits with more than 5 characters:', longFruits);
// reduce: accumulate values
const totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log('Total length of all fruit names:', totalLength);
// Generic DataManager class to handle both Products and Orders
class DataManager {
    constructor() {
        this.items = [];
    }
    // Add an item
    add(item) {
        this.items.push(item);
    }
    // Get all items
    getAll() {
        return this.items;
    }
    // Find item by custom predicate
    find(predicate) {
        return this.items.find(predicate);
    }
    // Filter items by custom predicate
    filter(predicate) {
        return this.items.filter(predicate);
    }
}
// Create sample data
const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Smartphone", price: 699 },
    { id: 3, name: "Headphones", price: 199 }
];
const orders = [
    {
        id: 1,
        customerName: "John Doe",
        items: [products[0], products[2]]
    },
    {
        id: 2,
        customerName: "Jane Smith",
        items: [products[1]]
    }
];
// Demonstrate generic class usage
console.log('\n=== Generic Class Examples ===');
// Product manager
const productManager = new DataManager();
products.forEach(product => productManager.add(product));
// Order manager
const orderManager = new DataManager();
orders.forEach(order => orderManager.add(order));
// Example operations
console.log('\n=== Product Operations ===');
console.log('All products:', productManager.getAll());
console.log('Products over $500:', productManager.filter(p => p.price > 500));
console.log('Find Laptop:', productManager.find(p => p.name === "Laptop"));
console.log('\n=== Order Operations ===');
console.log('All orders:', orderManager.getAll());
console.log('Orders by John Doe:', orderManager.filter(o => o.customerName === "John Doe"));
// Calculate total value of all orders
const totalOrderValue = orderManager.getAll().reduce((total, order) => {
    return total + order.items.reduce((orderTotal, item) => orderTotal + item.price, 0);
}, 0);
console.log('Total value of all orders: $' + totalOrderValue);
// Advanced Generic Examples
console.log('\n=== Advanced Generic Examples ===');
class AdvancedDataManager {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    getById(id) {
        return this.data.find(item => item.id === id);
    }
    // Generic method within generic class
    transform(transformer) {
        return this.data.map(transformer);
    }
}
// Generic utility functions
function swap(pair) {
    return { first: pair.second, second: pair.first };
}
function createPair(first, second) {
    return { first, second };
}
// Using the advanced generic implementations
const advancedProductManager = new AdvancedDataManager();
products.forEach(product => advancedProductManager.add(product));
// Example of generic method usage
const productNames = advancedProductManager.transform(product => product.name);
console.log('Product names:', productNames);
// Example of generic utility function usage
const numberPair = createPair(1, "one");
console.log('Number-String pair:', numberPair);
const swappedProducts = swap({ first: products[0], second: products[1] });
console.log('Swapped products:', swappedProducts);
// Generic constraints example
function printOrderDetail(order) {
    console.log(`Order #${order.id} by ${order.customerName}`);
    console.log('Items:', order.items.map(item => item.name).join(', '));
}
console.log('\n=== Order Details with Generic Constraint ===');
orders.forEach(printOrderDetail);
function getPricedItemName(item) {
    return `${item.name} ($${item.price})`;
}
console.log('\n=== Products with Price and Name ===');
products.forEach(product => {
    console.log(getPricedItemName(product));
});
