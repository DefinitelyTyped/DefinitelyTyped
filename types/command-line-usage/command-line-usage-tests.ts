import commandLineUsage = require("command-line-usage");

const sections = [
    {
        header: 'A typical app',
        content: 'Generates something {italic very} important.'
    },
    {
        header: 'Options',
        optionList: [
            {
                name: 'input',
                typeLabel: '{underline file}',
                description: 'The input to process.'
            },
            {
                name: 'help',
                description: 'Print this usage guide.'
            }
        ]
    }
];

const usage = commandLineUsage(sections);
