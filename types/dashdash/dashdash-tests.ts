/// <reference types="node" />
import dashdash = require('dashdash');
import path = require('path');
import { format } from 'util';

// api
const options = [
    {
        name: 'version',
        type: 'bool',
        help: 'Print tool version and exit.',
    },
    {
        names: ['help', 'h'],
        type: 'bool',
        help: 'Print this help and exit.',
    },
    {
        names: ['verbose', 'v'],
        type: 'arrayOfBool',
        help: 'Verbose output. Use multiple times for more verbose.',
    },
    {
        names: ['file', 'f'],
        type: 'string',
        help: 'File to process',
        helpArg: 'FILE',
    },
];

let opts = dashdash.parse({ options });

console.log('opts:', opts);
console.log('args:', opts._args);

const parser = dashdash.createParser({ options });
try {
    opts = parser.parse(process.argv);
} catch (e) {
    console.error('foo: error: %s', e.message);
    process.exit(1);
}

console.log('# opts:', opts);
console.log('# args:', opts._args);

if (opts.help) {
    const help = parser.help({ includeEnv: true }).trimRight();
    console.log(`usage: node foo.js [OPTIONS]
options:
${help}`);
    process.exit(0);
}

/** custom-option-arrayOfCommaSepString.js */ (() => {
    function parseCommaSepStringNoEmpties(option: any, optstr: any, arg: string) {
        return arg
            .trim()
            .split(/\s*,\s*/g)
            .filter(part => part);
    }

    dashdash.addOptionType({
        name: 'commaSepString',
        takesArg: true,
        helpArg: 'STRING',
        parseArg: parseCommaSepStringNoEmpties,
    });

    dashdash.addOptionType({
        name: 'arrayOfCommaSepString',
        takesArg: true,
        helpArg: 'STRING',
        parseArg: parseCommaSepStringNoEmpties,
        array: true,
        arrayFlatten: true,
    });

    const options = [
        { names: ['single', 's'], type: 'commaSepString' },
        { names: ['multi', 'm'], type: 'arrayOfCommaSepString' },
    ];

    try {
        const opts = dashdash.parse({ options });
    } catch (e) {
        console.error('%s: error: %s', path.basename(process.argv[1]), e.message);
        process.exit(1);
    }

    console.log('opts.single (-s): %j', opts.single);
    console.log('opts.multi (-m): %j', opts.multi);
})();

/** custom-option-duration.js */ (() => {
    const durationRe = /^([1-9]\d*)([smhd])$/;
    function parseDuration(option: any, optstr: string, arg: string) {
        const match = durationRe.exec(arg);
        if (!match) {
            throw new Error(format('arg for "%s" is not a valid duration: "%s"', optstr, arg));
        }
        const num = parseInt(match[1], 10);
        const scope = match[2];
        let t = 0;
        switch (scope) {
            case 's':
                t += num * 1000;
                break;
            case 'm':
                t += num * 60 * 1000;
                break;
            case 'h':
                t += num * 60 * 60 * 1000;
                break;
            case 'd':
                t += num * 24 * 60 * 60 * 1000;
                break;
        }
        return t;
    }

    dashdash.addOptionType({
        name: 'duration',
        takesArg: true,
        helpArg: 'DURATION',
        parseArg: parseDuration,
    });

    const options = [{ names: ['time', 't'], type: 'duration' }];

    try {
        const opts = dashdash.parse({ options });
    } catch (e) {
        console.error('%s: error: %s', path.basename(process.argv[1]), e.message);
        process.exit(1);
    }

    if (opts.time) {
        console.log('duration: %d ms', opts.time);
    }
})();

/** custom-option-fruit.js  */ (() => {
    const fruits = ['apple', 'pear', 'cherry', 'strawberry', 'banana'];
    function parseFruit(option: any, optstr: string, arg: string) {
        if (fruits.indexOf(arg) === -1) {
            throw new Error(format('arg for "%s" is not a known fruit: "%s"', optstr, arg));
        }
        return arg;
    }

    dashdash.addOptionType({
        name: 'fruit',
        takesArg: true,
        helpArg: 'FRUIT',
        parseArg: parseFruit,
        default: 'apple',
    });

    const options = [
        {
            names: ['help', 'h'],
            type: 'bool',
            help: 'Print this help and exit.',
        },
        { names: ['pie', 'p'], type: 'fruit', env: 'FRUIT' },
    ];

    const parser = dashdash.createParser({ options });
    try {
        const opts = parser.parse(process.argv);
    } catch (e) {
        console.error('%s: error: %s', path.basename(process.argv[1]), e.message);
        process.exit(1);
    }

    if (opts.help) {
        const help = parser
            .help({
                includeEnv: true,
                includeDefault: true,
            })
            .trimRight();
        console.log(`usage: node custom-option-fruit.js [OPTIONS]
options:
${help}`);
        process.exit(0);
    }

    console.log('pie fruit: %s', opts.pie);
})();
