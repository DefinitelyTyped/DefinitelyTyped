import inquirer = require("inquirer");

/**
 * Nested Inquirer call
 */
inquirer
    .prompt({
        type: 'list',
        name: 'chocolate',
        message: "What's your favorite chocolate?",
        choices: ['Mars', 'Oh Henry', 'Hershey']
    })
    .then(() => {
        inquirer.prompt({
            type: 'list',
            name: 'beverage',
            message: 'And your favorite beverage?',
            choices: ['Pepsi', 'Coke', '7up', 'Mountain Dew', 'Red Bull']
        });
    });
