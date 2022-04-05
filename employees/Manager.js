const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, name, email, office) {
        super(id, name, email, 'Manager');
        this.office = office;
    }

    getOffice() {
        return this.office;
    }
};

module.exports = Manager;