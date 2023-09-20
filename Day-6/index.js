class Employee{
    name;
    id;
    constructor(name, id){
        this.name = name;
        this.id = id;
    }

    getSalary(noOfDay, salaryPerDay){
        return noOfDay * salaryPerDay;
    }
}
// const emp = new Employee("chumui", 35);
// emp.getSalary();

class Manager extends Employee{
    name;
    id;
    noOfDay;
    salaryPerDay;
    constructor(name, id){
        super(name, id);
        this.name = name;
        this.id = id;
        this.noOfDay = this.noOfDay;
        this.salaryPerDay = this.salaryPerDay;
    }
    getSalary(noOfDay, salaryPerDay){
        return super.getSalary(noOfDay, salaryPerDay)*1.1;
    }
}

const manager = new Manager("Ram",1);
const salaryValue = manager.getSalary(2000, 2);
console.log(`emp salary ${salaryValue}`);