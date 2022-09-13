import inquirer from 'inquirer';

/**
 * List prompt example
 */
inquirer
    .prompt([
        {
            type: 'list',
            name: 'theme',
            message: 'What do you want to do?',
            choices: [
                'Order a pizza',
                'Make a reservation',
                new inquirer.Separator(),
                'Ask for opening hours',
                {
                    name: 'Contact support',
                    disabled: 'Unavailable at this time',
                },
                'Talk to the receptionist',
            ],
        },
        {
            type: 'list',
            name: 'size',
            message: 'What size do you need?',
            choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
            filter(val) {
                return val.toLowerCase();
            },
        },
    ])
    .then(answers => {
        console.log(JSON.stringify(answers, null, '  '));
    });
