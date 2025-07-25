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
