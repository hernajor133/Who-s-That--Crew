const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, name, email, office) {
        super(id, name, email, 'Office');
        this.office = office;
    }

    getoffice() {
        return this.office;
    }
};

module.exports = Manager;