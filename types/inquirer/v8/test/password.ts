import inquirer = require('inquirer');

/**
 * Password prompt example
 */
const requireLetterAndNumber: inquirer.Validator = value => {
    if (/\w/.test(value) && /\d/.test(value)) {
        return true;
    }

    return 'Password need to have at least a letter and a number';
};

inquirer
    .prompt([
        {
            type: 'password',
            message: 'Enter a password',
            name: 'password1',
            validate: requireLetterAndNumber,
        },
        {
            type: 'password',
            message: 'Enter a masked password',
            name: 'password2',
            mask: '*',
            validate: requireLetterAndNumber,
        },
    ])
    .then(answers => console.log(JSON.stringify(answers, null, '  ')));
