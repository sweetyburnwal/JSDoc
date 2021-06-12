// @ts-check

const { add, subtract, divide, multiply } = require('./calculator');

/**
 * @file index.js is the root file for this example app
 * @author Sweety Burnwal
 * @see <a href="https://facebook.com/swity.burnwal.3/">Sweety Burnwal</a>
 */

/**
 * @description Student Name
 * @type {string}
 */
const studentName = 'Sweety Kumari';

/**
 * @description Array of grades
 * @type {Array<number>}
 */
const grades = [98, 97, 95.5, 94];

/**
 * @description Info Object
 * @type {{name: string, age: number|string}}
 */
const info = {
    name: 'Sweety Kumari',
    age: 25,
};

/**
 * @description Calculate tax
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount, tax) => {
    return `$${amount + tax * amount}`;
}
console.log(calculateTax(100, 0.5));

/**
 * @description A student
 * @typedef {Object} Student
 * @property {number} id - Student id
 * @property {string} name - Student name
 * @property {number|string} [age] - Student age which is optional
 * @property {boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */
const student = {
    id: 1,
    name: 'Shimpi Burnwal',
    age: 24,
    isActive: false,
};

/** 
* @description Class to create a person object 
*/
class Person {
    /**
     * 
     * @param {Object} personInfo Information about the person
     */
    constructor(personInfo) {
        /**
         * @property {String} name Persons name
         */
        this.name = personInfo.name;
        /**
         * @property {String|Number} age Persons age
         */
        this.age = personInfo.age;
    }
 
    /**
     * @property {function} greet A greeting with name and age
     * @returns {void}
     */
    greet() {
        console.log(`Hello, my name is ${this.name}.I am ${this.age} years old.`);
    }
} 

/**
 * @description Person1
 * See {@link Person}
 * @returns {string}
 */
const person1 = new Person ({
    name: 'Sweety kumari',
    age: 25,
});
console.log(person1.greet());

console.log(add(20, 30));
