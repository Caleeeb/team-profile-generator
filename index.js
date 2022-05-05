// npm packages
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

// class definitions for each position
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// declare an empty array for team members
let workforce = [];

// inquirer prompts about each team member to create class:
// manager prompts
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the manager's name?",
            name: 'managerName'
        },
        {
            type: 'input',
            message: "What is the manager's email?",
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: "What is the manager's employee ID?",
            name: 'managerId'
        },
        {
            type: 'input',
            message: "What is the manager's office number?",
            name: 'managerOfficeNumber'
        },
        {
            type: 'confirm',
            message: "Would you like to add another team member?",
            name: 'addEmployee',
            default: true,
        }

        // destructure responses
    ]).then(({ managerName, managerEmail, managerId, managerOfficeNumber, addEmployee } = response) => {
        // push specific to create manager class
        workforce.push(new Manager(managerName, managerEmail, managerId, managerOfficeNumber));
        // engineer or intern prompts or finish application.
        // user selects to add a new team member
        if (addEmployee === true) {
            addTeamMember();
        }
        // when user is done adding team members
        else {
            createHTML();
        }
    })
}
// prompts to get data for Engineer and Intern classes
const addTeamMember = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: "What is the position this team member?",
            name: 'employeeRole',
            editableList: false,
            choice: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            message: "What is the team member's name?",
            name: 'employeeName'
        },
        {
            type: 'input',
            message: "What is the team member's ID number?",
            name: 'employeeId'
        },
        {
            type: 'input',
            message: "What is the team member's email address?",
            name: 'employeeEmail'
        },
        {
            type: 'input',
            message: "What is this engineer's GitHub username?",
            name: 'engineerGitHub',
            // use 'when' so certain prompts are shown based on which employee role is chosen by user
            when: answers => answers.employeeRole == 'Intern'
        },
        {
            type: 'input',
            message: "What school does this intern attend?",
            name: 'internSchool',
            when: answers => answers.employeeRole == 'Engineer'
        },
        {
            type: 'confirm',
            message: "Would you like to add another team member?",
            name: 'addEmployee',
            default: 'true'
        },
    ])
        .then(({ employeeRole, employeeName, employeeId, employeeEmail, engineerGitHub, internSchool, addEmployee } = addMember) => {
            // if chosen, create engineer class constructor
            if (employeeRole == "Engineer") {
                workforce.push(new Engineer(employeeId, employeeName, employeeEmail, engineerGitHub));
            }
            // if chosen, create intern class constructor
            else if (employeeRole == "Intern") {
                workforce.push(new Intern(employeeId, employeeName, employeeEmail, internSchool));
            }
            // if user chose to make another team member, restart team member prompts
            if (addEmployee === true) {
                addTeamMember();
            }
            else {
                createHTML();
            }
        })
}
// function that creates HTML file
function createHTML() {
    fs.writeFile('./dist/teamprofile.html',
        `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <header class=""main_header bg-red text-white>The Team</header>
        <section class=""main_container"></section> 
    </body>
    </html>
    `,
        (err) => err ? console.error(err) : console.log('A whoopsy has occurred'));
}

    // then in class creation

// generate html file

// call function to initiate application