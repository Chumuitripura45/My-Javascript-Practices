/*
object :- everything can be an object and
objects do have properties and properties have value.
*/

// const person = {};

const rectangle = {
    length: 20,
    width: 200
}

console.log(rectangle);

const person = {
    firstName : 'Chumui',
    lastName : 'Tripura',
    age : 22,
    country: 'India',
    skills: [
        'Javascript','CSS','Python','Angular','C++'
    ],
    isMarried : false,
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    },
    //to print the all the details create a function and insert the value using the backtick and function
    getAllDetails: function(){
        return `${this.firstName} ${this.lastName} ${this.age} ${this.skills}`
    }
}
console.log(person.getFullName());
console.log(person.getAllDetails());

person.nationality = 'Indian';
person.title = 'Teacher';
person.skills.push('HTML');



