const {prompt} = require ("inquirer");
const logo = require ("asciiart-logo");
const db = require("./db");
const inquirer = require("inquirer");
require("console.table");

init();

function init() {
    // const logoText = logo ({ name: "Employee Manager"}).render();
    // console.log(logoText);
    loadMainPrompts();
}

async function oldloadMainPrompts() {
    const {choice }  = await prompt([
        {
            type: "list",
            name: "choice",
            message:"Whatcha wanna do?",
            choices: [
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "View A Emp By Dep",
                    value: "ViewEmpByDep"
                }
            ]
        }
    ]);

    
}

function  loadMainPrompts() {
    inquirer.prompt([
        {
        type: "input",
        name: "choice",
        message:"What would you like to do?",

        },
        {
        type:'input',
        message: 'Please enter something',
        name: "test"
        }
    
    ])

    .then((response) => {
        console.log("Got to then")
    });
}

    