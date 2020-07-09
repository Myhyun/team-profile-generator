const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email,);
            this.school = school;
    }
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
};

const intern = new Intern("Matt", 1, "matt@gmail.com", "UCSD");
intern.printInfo();
module.exports = Intern;