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

// $ExpectType CommandLineOptions
const options = commandLineArgs(optionDefinitions, {
    argv: [ '--one', '1' ],
    partial: true,
    stopAtFirstUnknown: true,
    camelCase: true,
    caseInsensitive: true,
});

const unknown = options._unknown;
const something = options.something;

// case insensitive option is not required
// $ExpectType CommandLineOptions
const optionsNoCaseInsensitiveFlag = commandLineArgs(optionDefinitions, {
    argv: [ '--one', '1' ],
    partial: true,
    stopAtFirstUnknown: true,
    camelCase: true,
});

// case insensitive option must be boolean | undefined
const parseOptionsIncorrectType: commandLineArgs.ParseOptions = {
    // @ts-expect-error
    caseInsensitive: "abc",
};
