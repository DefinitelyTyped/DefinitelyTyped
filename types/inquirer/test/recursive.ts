import inquirer, { QuestionCollection } from 'inquirer';

/**
 * Recursive prompt example
 * Allows user to choose when to exit prompt
 */
const output: any[] = [];

const questions: QuestionCollection = [
    {
        type: 'input',
        name: 'tvShow',
        message: "What's your favorite TV show?",
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: 'Want to enter another TV show favorite (just hit enter for YES)?',
        default: true,
    },
];

function ask() {
    inquirer.prompt(questions).then(answers => {
        output.push(answers.tvShow);
        if (answers.askAgain) {
            ask();
        } else {
            console.log('Your favorite TV Shows:', output.join(', '));
        }
    });
}

ask();
