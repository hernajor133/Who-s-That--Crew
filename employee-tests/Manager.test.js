const Manager = require("../../employees/Manager");

const employee = new Manager(4, "Julia", "julia@gmail.com", 104);

describe("Manager class", () => {
    describe("getName method", () => {
        it("returns the name of the employee", () => {
            expect(employee.getName()).toBe("Julia");
        });
    });
    describe("getOffice method", () => {
        it("returns the manager's office number", () => {
            expect(employee.getOffice()).toBe(104);
        });
    });
    describe("getId method", () => {
        it("returns the ID number of the employee", () => {
            expect(employee.getId()).toBe(4);
        });
    });
    describe("getEmail method", () => {
        it("returns the email of the employee", () => {
            expect(employee.getEmail()).toBe("julia@gmail.com");
        });
    });
    describe("getRole method", () => {
        it("returns the role of the employee", () => {
            expect(employee.getRole()).toBe("Manager");
        });
    });
});