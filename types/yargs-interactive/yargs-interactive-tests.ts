/// <reference types="node" />

import yargsInteractive = require('yargs-interactive');

const options: yargsInteractive.Option = {
    name: {
        describe: 'What is your name?',
        prompt: 'always',
        type: 'input',
        default: 'Nano',
    },
    color: {
        describe: 'What is your favorite color?',
        prompt: 'always',
        type: 'list',
        choices: ['Blue', 'Red', 'Yellow'],
        default: 'Blue',
    },
};

yargsInteractive()
    .usage('$0 <command> [args]')
    .interactive(options)
    .then((result: any) => {
        console.log(result);
    });
