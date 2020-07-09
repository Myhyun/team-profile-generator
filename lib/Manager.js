const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return "Manager"
    }
}

const manager = new Manager("Matt", 2, "mattyihyun@gmail.com", 1);
manager.printInfo();


module.exports = Manager;



