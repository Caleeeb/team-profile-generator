const Employee = require("../lib/Employee");

let nameExample = "Kenneth Lay";
let idExample = "0001";
let emailExample = "klay@enron.com";
const employeeExample = new Employee(nameExample, idExample, emailExample);

describe("Employee", () => {
    it("should be an object with values name, id, and email", () => {

        expect(employeeExample.name).toEqual("Kenneth Lay");
        expect(employeeExample.id).toEqual("0001");
        expect(employeeExample.email).toEqual("klay@enron.com");
    });
});

describe("getName", () => {
    it("should return the name of the employee", () => {
        expect(employeeExample.getName()).toEqual("Kenneth Lay");
    });
});

describe("getId", () => {
    it("should return the id of the employee", () => {
        expect(employeeExample.getId()).toEqual("0001");
    });
});

describe("getRole", () => {
    it("should return the role 'Employee'", () => {
        expect(employeeExample.getRole()).toEqual('Employee');
    });
});