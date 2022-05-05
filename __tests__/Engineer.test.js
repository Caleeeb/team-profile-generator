const Engineer = require('../lib/Engineer');

let nameExample = "Alexey Pazhitnov";
let idExample = "4444";
let emailExample = "apazhitnov@tetris.com";
let githubExample = "TetrisMaster";
const engineerExample = new Engineer(nameExample, idExample, emailExample, githubExample);

describe("engineer", () => {
    it("should be an object with values name, id, email and github", () => {
        expect(engineerExample.name).toEqual("Alexey Pazhitnov");
        expect(engineerExample.id).toEqual("4444");
        expect(engineerExample.email).toEqual("apazhitnov@tetris.com");
        expect(engineerExample.github).toEqual("TetrisMaster");
    });
});

describe("getGithub", () => {
    it("should return github username", () => {
        expect(engineerExample.getGithub()).toEqual("TetrisMaster");
    });
});

describe("getRole", () => {
    it("should return the role 'Engineer'", () => {
        expect(engineerExample.getRole()).toEqual('Engineer');
    });
});


