const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('../employees/Manager');
const Intern = require('../employees/Intern');
const Engineer = require('../employees/Engineer');


const employeeArray = [];

 
const addTeamMembers = [
    {
        type: 'list',
        message: "Do you want to add a crew member to the crew?",
        choices: ['Yes', 'No'],
        name: 'answer',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please choose to add a crew member or not.");
            }
            return true;
        }
    }
];

const roleQuestion = [
    {
        type: 'list',
        message: "What is the role of the crew member?",
        choices: ['Engineer', 'Intern'],
        name: 'role',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Required!");
            }
            return true;
        }
    }
];

const engineerQuestions = [
    {
        type: 'input',
        message: "Enter Name.",
        name: 'name',
        default: 'Jordi',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Required!");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Enter ID number.",
        name: 'id',
        default: '13',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Required!");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Enter email.",
        name: 'email',
        default: 'jordihernandez133@gmail.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Required!");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Enter GitHub username.",
        name: 'github',
        default: 'hernajor133',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Required!");
            }
            return true;
        }
    },

];

const internQuestions = [
    {
        type: 'input',
        message: "Enter Name.",
        name: 'name',
        default: 'Jordi',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Required!");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Enter ID number.",
        name: 'id',
        default: '13',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Required!");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Enter email.",
        name: 'email',
        default: 'jordihernandez133@gmail.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Required!");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Enter School Name.",
        name: 'school',
        default: 'Unversity of Washington',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Required!");
            }
            return true;
        }
    },

];

const managerQuestions = [
    {
        type: 'input',
        message: "Enter Name.",
        name: 'name',
        default: 'Jordi',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Required!");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Enter ID number.",
        name: 'id',
        default: '13',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Required!");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Enter office number.",
        name: 'office',
        default: '13',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Required!");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Enter email.",
        name: 'email',
        default: 'jordihernandez133@gmail.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Required!");
            }
            return true;
        }
    }
];

function askManager() {
    inquirer
        .prompt(managerQuestions)
        .then((response) => {
            console.log(response);
            const manager = new Manager(response.id, response.name, response.email, response.office);
            employeeArray.push(manager);
        })
        .then(askToAddTeamMembers)
};

function askEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((response) => {
            console.log(response);
            const engineer = new Engineer(response.id, response.name, response.email, response.github);
            employeeArray.push(engineer);
        })
        .then(askToAddTeamMembers)
};

function askIntern() {
    inquirer
        .prompt(internQuestions)
        .then((response) => {
            console.log(response);
            const intern = new Intern(response.id, response.name, response.email, response.school);
            employeeArray.push(intern);
        })
        .then(askToAddTeamMembers)
};


function askToAddTeamMembers() {
    inquirer
    .prompt(addTeamMembers)
    .then((input) => {
        if(input.answer == 'No') {
            console.log('Your crew is built!');
            fs.writeFile(
            'index.html', `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
                <link rel="stylesheet" href="./style.css">
                <title>Who's That Crew!</title>
            </head>
            <body>
                <div class="jumbotron">
                    <h1 class="display-4">My Crew</h1>
                    <p class="lead">Checkout the Crews info!</p>
                    <hr class="my-4">
                  </div>
                  <div id="card-container" class="container">
                  ${generateCards()}
                  </div>
                </div>
            </body>
            <script src="assets/index.js"></script>
            </html>`, function(err) {
                if (err) throw err;
                console.log('Congradulations!');
            }
            )} else if (input.answer == 'Yes') {
            askRole();
}


function generateCards() {
    return employeeArray.map((employee) => {
        return generateCard(employee);
    }).join("");
};

function generateCard(employee) {
    let characteristic = "";
    let cardTitle = "";
    let employeeIcon = "";

    if (employee instanceof Manager) {
        characteristic = `Office: ${employee.getOffice()}`;
        cardTitle = "Manager";
        employeeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup" viewBox="0 0 16 16">
        <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z"></path>
      </svg>`;
    } else if (employee instanceof Engineer) {
        characteristic = `GitHub: <a target="_blank" href="https://www.github.com/${employee.getGithub()}" class="card-link"> ${employee.getGithub()}</a>`;
        cardTitle = "Engineer";
        employeeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
        <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"></path>
      </svg>`;
    } else if (employee instanceof Intern) {
        characteristic = `School: ${employee.getSchool()}`;
        cardTitle = "Intern";
        employeeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"></path>
        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"></path>
      </svg>`;
    }

    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${cardTitle}</h5>
      ${employeeIcon}
      <p class="card-text">Name: ${employee.getName()}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${employee.getId()}</li>
      <li class="list-group-item"> Email: <a href="mailto:${employee.getEmail()}" class="card-link"> ${employee.getEmail()}</a></li>
      <li class="list-group-item">${characteristic}</li>
    </ul>
    <div class="card-body">
    </div>
  </div>`;
}


function askRole() {
    console.log("Time to create your crew!");
    inquirer
        .prompt(roleQuestion)
        .then((input) => {
            console.log(input);
            if (input.role == 'Engineer') {
                askEngineer();
            } else if (input.role == 'Intern') {
                askIntern();
            }
        })
    }
    })    
};


askManager();