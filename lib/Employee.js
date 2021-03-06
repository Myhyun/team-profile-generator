class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    printInfo() {
        for (const key in this) {
            return(`${key}: ${this[key]}`);
        }
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }

}

module.exports = Employee; 