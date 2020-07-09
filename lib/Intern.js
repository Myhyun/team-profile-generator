// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./employee");

class Intern extends Employee {
    constructor(Employee, school) {
        super(Employee);
            this.school = school;
    }
}

const intern = new Intern("Matt", 1, "matt@gmail.com", "UCSD");
getRole(intern);

