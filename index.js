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
            name: 'managerID'
        },
        { 
            type: 'input',
            message: "What is the manager's office number?",
            name: 'managerOfficeNumber'
        },
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerEmail, answers.managerID, answers.managerOfficeNumber);
        workforce.push(manager);
        
    }) 
}
        // engineer or intern prompts or finish application.
            // use a switch or prompt question into if statement in 'then'???? 
    // then in class creation

// generate html file

// call function to initiate application