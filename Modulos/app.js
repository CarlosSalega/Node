/*
const greeting = require('./hello');

console.log(greeting.hello('Charly'));
console.log(greeting.goodbye());
*/

const { hello, goodbye } = require('./hello');

console.log(hello('Charly'));
console.log(goodbye());