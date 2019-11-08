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
        group: 'one',
    },
];

interface CustomDefinition extends commandLineArgs.OptionDefinition {
    description: string;
}

const customOptionDefinitions: CustomDefinition[] = [
    {
        name: 'something',
        alias: 's',
        type: String,
        defaultValue: '1',
        multiple: true,
        lazyMultiple: true,
        defaultOption: true,
        group: 'one',
        description: 'Desc',
    },
];

const options = commandLineArgs(optionDefinitions, {
    argv: ['--one', '1'],
    partial: true,
    stopAtFirstUnknown: true,
    camelCase: true,
});

const customOptions = commandLineArgs(customOptionDefinitions, {
    argv: ['--one', '1'],
    partial: true,
    stopAtFirstUnknown: true,
    camelCase: true,
});

const unknown = options._unknown;
const something = options.something;

const customUnknown = customOptions._unknown;
const customSomething = customOptions.something;
