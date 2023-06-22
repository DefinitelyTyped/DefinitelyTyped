import inquirer, { QuestionCollection } from 'inquirer';

/**
 * Editor prompt example
 */
const questions: QuestionCollection = [
    {
        type: 'editor',
        name: 'bio',
        message: 'Please write a short bio of at least 3 lines.',
        validate(text) {
            if (text.split('\n').length < 3) {
                return 'Must be at least 3 lines.';
            }
            return true;
        },
    },
];

inquirer.prompt(questions).then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
});
