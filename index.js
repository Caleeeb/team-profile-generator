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
    ]).then(({managerName, managerEmail, managerId, managerOfficeNumber, addEmployee} = response) => {
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
}
            // use a switch or prompt question into if statement in 'then'???? 
    // then in class creation

// generate html file

// call function to initiate application