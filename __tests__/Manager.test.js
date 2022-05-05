const Manager = require('../lib/Manager');

let nameExample = "Elizabeth Holmes";
let idExample = "0001";
let emailExample = "eholmes@theranos.com";
let officeNumberExample = "666";
const manager = new Manager(nameExample, idExample, emailExample, officeNumberExample);

describe("Manager", () => {
    it("should create an object with values name, id, email, and office number", () => {
        expect(manager.name).toEqual("Elizabeth Holmes");
        expect(manager.id).toEqual("0001");
        expect(manager.email).toEqual("eholmes@theranos.com");
        expect(manager.officeNumber).toEqual("666");
    });
});

describe("getRole", () => {
    it("should return the 'Manager'", () => {
        expect(manager.getRole).toEqual("Manager");
    });
});

