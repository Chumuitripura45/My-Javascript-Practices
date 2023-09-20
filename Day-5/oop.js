class personData{
    name;
    age;
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    show(){
        console.log(`my name ${this.name}`);
        console.log("my age " + this.age);
    }

}
const person  = new personData("Chumui Tripura", 35);
person.show();

/*
prototype
you can add methods to object prototype to share functionality among instances
*/

function personPrototype(name, age){
    this.name = name;
    this.age = age;
}

personPrototype.prototype.sayHello = function(){
    console.log(`hello, my name is ${this.name} and my age is ${this.age}`);
}

const person1 = new personPrototype("Ram", 23);
person1.sayHello();


/*
without constructor
*/ 

class withoutConstructor{
    show(){
        console.log(`hello, my name is ${this.name} and my age is ${this.age}`);
    }
}

const withoutCon = new withoutConstructor();
withoutCon.name = "chumui Tripura";
withoutCon.age = 22;

withoutCon.show();

var a=  10;
a = 20;
console.log(a);

