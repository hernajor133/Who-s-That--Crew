const Intern = require("../../employees/Intern");

const employee = new Intern(8, "Paco", "paco@gmail.com", "Washington State University");

describe("Intern class", () => {
    describe("getName method", () => {
        it("returns the name of the employee", () => {
            expect(employee.getName()).toBe("Paco");
        });
    });
    describe("getSchool method", () => {
        it("returns the name of the intern's school", () => {
            expect(employee.getSchool()).toBe("Washington State University");
        });
    });
    describe("getId method", () => {
        it("returns the ID number of the employee", () => {
            expect(employee.getId()).toBe(9);
        });
    });
    describe("getEmail method", () => {
        it("returns the email of the employee", () => {
            expect(employee.getEmail()).toBe("paco@gmail.com");
        });
    });
    describe("getRole method", () => {
        it("returns the role of the employee", () => {
            expect(employee.getRole()).toBe("Intern");
        });
    });
});