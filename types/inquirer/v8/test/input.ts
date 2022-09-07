import inquirer = require('inquirer');
import chalkPipe = require('chalk-pipe');

/**
 * Input prompt example
 */
const questions: inquirer.QuestionCollection = [
    {
        type: 'input',
        name: 'first_name',
        message: "What's your first name",
    },
    {
        type: 'input',
        name: 'last_name',
        message: "What's your last name",
        default() {
            return 'Doe';
        },
    },
    {
        type: 'input',
        name: 'fav_color',
        message: "What's your favorite color",
        transformer(color, answers, flags) {
            const text = chalkPipe(color)(color);
            if (flags.isFinal) {
                return text + '!';
            }

            return text;
        },
    },
    {
        type: 'input',
        name: 'phone',
        message: "What's your phone number",
        validate(value) {
            const pass = value.match(
                /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i,
            );
            if (pass) {
                return true;
            }

            return 'Please enter a valid phone number';
        },
    },
];

inquirer.prompt(questions).then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
});
