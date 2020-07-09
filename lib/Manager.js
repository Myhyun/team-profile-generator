// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./employee");

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
}

const manager = new Manager("Matt", 2, "mattyihyun@gmail.com", 1);
manager.printInfo();
