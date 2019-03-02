import commandLineArgs = require('command-line-args');

const optionDefinitions: commandLineArgs.OptionDefinition[] = [
    {
        name: 'something',
        alias: 's',
        type: String,
        defaultValue: '1',
        multiple: true,
        lazyMultiple: true,
        defaultOption: true,
        group: 'one'
    }
];

const options = commandLineArgs(optionDefinitions, {
    argv: [ '--one', '1' ],
    partial: true,
    stopAtFirstUnknown: true,
    camelCase: true
});

const unknown = options._unknown;
const something = options.something;
