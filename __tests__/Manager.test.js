const Manager = require('../lib/Manager');

let nameExample = "Elizabeth Holmes";
let idExample = "0001";
let emailExample = "eholmes@theranos.com";
let officeNumberExample = "666";
const managerExample = new Manager(nameExample, idExample, emailExample, officeNumberExample);

describe("Manager", () => {
    it("should be an object with values name, id, email, and office number", () => {
        expect(managerExample.name).toEqual("Elizabeth Holmes");
        expect(managerExample.id).toEqual("0001");
        expect(managerExample.email).toEqual("eholmes@theranos.com");
        expect(managerExample.officeNumber).toEqual("666");
    });
});

describe("getRole", () => {
    it("should return the role 'Manager'", () => {
        expect(managerExample.getRole()).toEqual("Manager");
    });
});