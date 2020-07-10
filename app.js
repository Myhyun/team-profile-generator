const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const questions = [
    {
        type: "input",
        message: "Enter your name",
        name: "name"
    },
    {
        type: "input",
        message: "Please enter your ID number",
        name: "id"
    },
    {
        type: "input",
        message: "Please enter your email",
        name: "email"
    },
    {
        type: "list",
        message: "Please choose your role",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"],
    }
];

const internQ = [
    {
        type: "input",
        message: "Enter the name of your school",
        name: "school"
    }
];

const managerQ = [
    {
        type: "input",
        message: "Enter your office number",
        name: "officeNumber"
    }
];

const engineerQ = [
    {
        type: "input",
        message: "Enter your Github name",
        name: "github"
    }
];

// function writeToFile(filename, data) {
//     fs.writeFile(filename, data, function (err) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log("Success!");
//     });
// }
function addIntern(answers) {
    inquirer.prompt(internQ).then((answers) => {
        return answers;
    })
}

function addManager(answers) {
    inquirer.prompt(managerQ).then((answers) => {
        return answers;
    })
}

function addEngineer(answers) {
    inquirer.prompt(engineerQ).then((answers) => {
        return answers;
    })
}


function init() {
    inquirer.prompt(questions).then((answers) => {
        //const writeFile =
        switch (answers.role) {
            case "Manager":
                addManager(answers);
                break;
            case "Engineer":
                addEngineer(answers);
                break;
            case "Intern":
                addIntern(answers)
        };
        render(employees);
    })
}

init();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.


