// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole(){
        return "Engineer";
    }

    getGithub(){
        return this.github;
    }
}

const engineer = new Engineer("Matt", 2, "mattyihyun@gmail.com", "myhyun");
engineer.printInfo();

module.exports = Engineer;