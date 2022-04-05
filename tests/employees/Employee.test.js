const Employee = require("../../employees/Employee");

const employee = new Employee(8, "Jordi", "jordihernandez133@gmail.com", "employee");

describe("Employee class", () => {
    describe("getName method", () => {
        it("returns the name of the employee", () => {
            expect(employee.getName()).toBe("Jordi");
        });
    });
    describe("getId method", () => {
        it("returns the ID number of the employee", () => {
            expect(employee.getId()).toBe(8);
        });
    });
    describe("getEmail method", () => {
        it("returns the email of the employee", () => {
            expect(employee.getEmail()).toBe("jordihernandez133@gmail.com");
        });
    });
    describe("getRole method", () => {
        it("returns the role of the employee", () => {
            expect(employee.getRole()).toBe("employee");
        });
    });
});