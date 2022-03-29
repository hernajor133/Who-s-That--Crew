const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id, name, email, gitHub) {
        super(id, name, email, 'Engineer');
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
};

module.exports = Engineer;