const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should be an object with values name, id, and email", () => {
        let nameExample = "Kanneth Lay";
        let idExample = "0001";
        let emailExample = "klay@enron.com";
        const employee = new Employee(nameExample, idExample, emailExample);

        expect(employee.name).toEqual("Kanneth Lay");
        expect(employee.id).toEqual("0001");
        expect(employee.email).toEqual("klay@enron.com");
    });
});