const Engineer = require("../../employees/Engineer");

const employee = new Engineer(12, "Jordi", "jordihernandez133@gmail.com", "gitHubExample");

describe("Engineer class", () => {
    describe("getGitHub method", () => {
        describe("getName method", () => {
            it("returns the name of the employee", () => {
                expect(employee.getName()).toBe("Jordi");
            });
        });
        it("returns the name of the engineer's github", () => {
            expect(employee.getGithub()).toBe("gitHubExample");
        });
    });
    describe("getId method", () => {
        it("returns the ID number of the employee", () => {
            expect(employee.getId()).toBe(12);
        });
    });
    describe("getEmail method", () => {
        it("returns the email of the employee", () => {
            expect(employee.getEmail()).toBe("jordihernandez133@gmail.com");
        });
    });
    describe("getRole method", () => {
        it("returns the role of the employee", () => {
            expect(employee.getRole()).toBe("Engineer");
        });
    });
});