///<reference path="commander.d.ts"/>

// NOTE: import statement can not use in TypeScript 1.0.1
var program:commander.IExportedCommand = require('commander');

declare module commander {
    interface IExportedCommand {
        peppers:boolean;
        pineapple:boolean;
        bbq:boolean;
        cheese:string;
    }
}

program
    .version('0.0.1')
    .option('-p, --peppers', 'Add peppers')
    .option('-P, --pineapple', 'Add pineapple')
    .option('-b, --bbq', 'Add bbq sauce')
    .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
    .parse(process.argv);

console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbq) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);

function range(val:string) {
    return val.split('..').map(Number);
}

function list(val:string) {
    return val.split(',');
}

function collect(val:string, memo:string[]) {
    memo.push(val);
    return memo;
}

function increaseVerbosity(v:any, total:number) {
    return total + 1;
}

declare module commander {
    interface IExportedCommand {
        integer:number;
        float:number;
        optional:string;
        range:number[];
        list:string[];
        collect:string[];
        verbose:number;
    }
}

program
    .version('0.0.1')
    .usage('[options] <file ...>')
    .option('-i, --integer <n>', 'An integer argument', parseInt)
    .option('-f, --float <n>', 'A float argument', parseFloat)
    .option('-r, --range <a>..<b>', 'A range', range)
    .option('-l, --list <items>', 'A list', list)
    .option('-o, --optional [value]', 'An optional value')
    .option('-c, --collect [value]', 'A repeatable value', collect, [])
    .option('-v, --verbose', 'A value that can be increased', increaseVerbosity, 0)
    .parse(process.argv);

console.log(' int: %j', program.integer);
console.log(' float: %j', program.float);
console.log(' optional: %j', program.optional);
program.range = program.range || [];
console.log(' range: %j..%j', program.range[0], program.range[1]);
console.log(' list: %j', program.list);
console.log(' collect: %j', program.collect);
console.log(' verbosity: %j', program.verbose);
console.log(' args: %j', program.args);


program
    .version('0.0.1')
    .option('-f, --foo', 'enable some foo')
    .option('-b, --bar', 'enable some bar')
    .option('-B, --baz', 'enable some baz');

// must be before .parse() since
// node's emit() is immediate

program.on('--help', () => {
    console.log('  Examples:');
    console.log('');
    console.log('    $ custom-help --help');
    console.log('    $ custom-help -h');
    console.log('');
});

program.parse(process.argv);

console.log('stuff');
