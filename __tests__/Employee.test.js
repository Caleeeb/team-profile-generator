const Employee = require("../lib/Employee");

let nameExample = "Kenneth Lay";
let idExample = "0001";
let emailExample = "klay@enron.com";
const employee = new Employee(nameExample, idExample, emailExample);

describe("Employee", () => {
    it("should be an object with values name, id, and email", () => {

        expect(employee.name).toEqual("Kenneth Lay");
        expect(employee.id).toEqual("0001");
        expect(employee.email).toEqual("klay@enron.com");
    });
});

describe("getName", () => {
    it("should return the name of the employee", () => {
        expect(employee.getName()).toEqual("Kenneth Lay");
    });
});

describe("getId", () => {
    it("should return the id of the employee", () => {
        expect(employee.getId()).toEqual("0001");
    });
});

describe("getRole", () => {
    it("should return the role of the employee", () => {
        expect(employee.getRole()).toEqual('Employee');
    });
});