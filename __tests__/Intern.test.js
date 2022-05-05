const Intern = require("../lib/Intern");

let nameExample = "Nancy Jane Meyers";
let idExample = "2015";
let emailExample = "nmeyers@imdb.com";
let schoolExample = "American University";
const internExample = new Intern(nameExample, idExample, emailExample, schoolExample);

describe("Intern", () => {
    it("should be an object with values name, id, email, school", () => {
        expect(internExample.name).toEqual("Nancy Jane Meyers");
        expect(internExample.id).toEqual("2015");
        expect(internExample.email).toEqual("nmeyers@imdb.com");
        expect(internExample.school).toEqual("American University");
    });
});

describe("getSchool", () => {
    it("should return the name of the school the intern goes to", () => {
        expect(internExample.getSchool()).toEqual("American University");
    });
});

describe("getRole", () => {
    it("should return the role 'Intern'", () => {
        expect(internExample.getRole()).toEqual('Intern');
    });
});