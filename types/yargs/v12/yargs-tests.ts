/// <reference types="node" />

import yargs = require('yargs');
import yargsSingleton = require('yargs/yargs');

import * as fs from 'fs';
import * as path from 'path';

const stringVal = 'string';

// Examples taken from yargs website
// https://github.com/chevex/yargs

// With yargs, the options be just a hash!
function xup() {
    const argv = yargs.argv;

    if (typeof argv.rif === "number" && typeof argv.xup === "number" && argv.rif - 5 * argv.xup > 7.138) {
        console.log('Plunder more riffiwobbles!');
    } else {
        console.log('Drop the xupptumblers!');
    }
}

// And non-hyphenated options too! Just use argv._!
function nonopt() {
    const argv = yargs.argv;
    console.log('(%d,%d)', argv.x, argv.y);
    console.log(argv._);
}

// Yargs even counts your booleans!
function count() {
    const argv = yargs
        .count('verbose')
        .alias('v', 'verbose')
        .argv;

    const VERBOSE_LEVEL: number = argv.verbose;

    function WARN() { VERBOSE_LEVEL >= 0 && console.log.apply(console, arguments); }
    function INFO() { VERBOSE_LEVEL >= 1 && console.log.apply(console, arguments); }
    function DEBUG() { VERBOSE_LEVEL >= 2 && console.log.apply(console, arguments); }
}

// Tell users how to use yer options and make demands.
function divide() {
    const argv = yargs
        .usage('Usage: $0 -x [num] -y [num]')
        .demand(['x', 'y'])
        .number(['x', 'y'])
        .argv;

    console.log(argv.x / argv.y);
}

// After yer demands have been met, demand more! Ask for non-hypenated arguments!
function demand_count() {
    const argv = yargs
        .demand(2)
        .demand(2, false)
        .demand(2, 2)
        .demand(2, 2, "message")
        .argv;
    console.dir(argv);
}

// EVEN MORE SHIVER ME TIMBERS!
function default_singles() {
    const argv = yargs
        .default('x', 10)
        .default('y', 10)
        .argv
        ;
    console.log(argv.x + argv.y);
}

function default_hash() {
    const argv = yargs
        .default({ x: 10, y: 10 })
        .argv
        ;
    console.log(argv.x + argv.y);
}

// And if you really want to get all descriptive about it...
function boolean_single() {
    const argv = yargs
        .boolean('v')
        .argv
        ;
    console.dir(argv.v);
    console.dir(argv._);
}

function boolean_double() {
    const argv = yargs
        .boolean(['x', 'y', 'z'])
        .argv
        ;
    console.dir([argv.x, argv.y, argv.z]);
    console.dir(argv._);
}

// Yargs is here to help you...
function line_count() {
    const argv = yargs
        .usage('Count the lines in a file.\nUsage: $0')
        .example('$0 -f', 'count the lines in the given file')
        .demand('f')
        .alias('f', 'file')
        .describe('f', 'Load a file')
        .argv
        ;
}

// Below are tests for individual methods.
// Not all methods are covered yet, and neither are all possible invocations of methods.

function Argv$argv() {
    const argv = yargs.argv;
    console.log("command name: " + argv.$0);
    console.log("command: " + argv._[1]);
}

function Argv$parsing() {
    const argv1 = yargs.parse();
    const argv2 = yargs(['-x', '1', '-y', '2']).argv;
    const argv3 = yargs.parse(['-x', '1', '-y', '2']);
    const argv4 = yargs();
    console.log(argv1.x, argv2.x, argv3.x, argv4.x);

    // $ExpectType { [x: string]: unknown; _: string[]; $0: string; }
    yargs.parse();

    // $ExpectType { [x: string]: unknown; _: string[]; $0: string; }
    yargs([]).argv;

    // $ExpectType { [x: string]: unknown; _: string[]; $0: string; }
    yargs.argv;

    // $ExpectType { [x: string]: unknown; _: string[]; $0: string; }
    yargs();

    // $ExpectType { [x: string]: unknown; update: boolean | undefined; extern: boolean | undefined; _: string[]; $0: string; }
    yargs(['--update'])
        .boolean('update')
        .boolean('extern')
        .argv;
}

function Argv$options() {
    const argv1 = yargs
        .options('f', {
            alias: 'file',
            default: '/etc/passwd',
            defaultDescription: 'The /etc/passwd file',
            group: 'files',
            normalize: true,
            global: false,
            array: true,
            nargs: 3,
            implies: 'other-arg',
            conflicts: 'conflicting-arg',
        })
        .argv
        ;

    const argv2 = yargs
        .alias('f', 'file')
        .default('f', '/etc/passwd')
        .argv
        ;
}

function Argv$global() {
    const argv = yargs
        .global('foo')
        .global(['bar', 'baz', 'fizz', 'buzz']);
}

function Argv$group() {
    const argv = yargs
        .group('foo', 'foogroup')
        .group(['bing', 'bang', 'buzz'], 'onomatopoeia');
}

function Argv$env() {
    const argv = yargs
        .env('YARGS_PREFIX_')
        .env()
        .env(true);
}

function Argv$array() {
    const argv = yargs
        .array('foo')
        .array(['bar', 'baz']);
}

function Argv$nargs() {
    const argv = yargs
        .nargs('foo', 12)
        .nargs({ bing: 3, bang: 2, buzz: 4 });
}

function Argv$choices() {
    // example from documentation
    const argv = yargs
        .alias('i', 'ingredient')
        .describe('i', 'choose your sandwich ingredients')
        .choices('i', ['peanut-butter', 'jelly', 'banana', 'pickles'])
        .help('help')
        .argv;

    yargs
        .choices('i', [undefined, true, 'asdf', 'test'])
        .choices({
            test: [undefined, true, 'test-value']
        });
}

function Argv$usage_as_default_command() {
    const argv = yargs
        .usage(
        "$0 get",
        'make a get HTTP request',
        (yargs) => {
            return yargs.option('u', {
                alias: 'url',
                describe: 'the URL to make an HTTP request to'
            });
        },
        (argv) => {
            console.dir(argv.url);
        }
        )
        .argv;
}

function Argv$command() {
    const argv = yargs
        .usage('npm <command>')
        .command('install', 'tis a mighty fine package to install')
        .command('publish', 'shiver me timbers, should you be sharing all that', yargs =>
            yargs.option('f', {
                alias: 'force',
                description: 'yar, it usually be a bad idea'
            })
                .help('help')
        )
        .command("build", "arghh, build it mate", {
            tag: {
                default: true,
                demand: true,
                description: "Tag the build, mate!"
            },
            publish: {
                default: false,
                description: "Should i publish?"
            }
        })
        .command({
            command: "test",
            describe: "test package",
            builder: {
                mateys: {
                    demand: false
                }
            },
            handler: (args: any) => {
                /* handle me mateys! */
            }
        })
        .command("test", "test mateys", {
            handler: (args: any) => {
                /* handle me mateys! */
            }
        })
        .help('help')
        .argv;

    yargs
        .command('get', 'make a get HTTP request', (yargs) => {
            return yargs.option('url', {
                alias: 'u',
                default: 'http://yargs.js.org/'
            });
        })
        .help()
        .argv;

    yargs
        .command(
        'get',
        'make a get HTTP request',
        (yargs) => {
            return yargs.option('u', {
                alias: 'url',
                describe: 'the URL to make an HTTP request to'
            });
        },
        (argv) => {
            console.dir(argv.url);
        }
        )
        .help()
        .argv;

    yargs
        .command('get <source> [proxy]', 'make a get HTTP request', yargs => {
            yargs.positional('source', {
                describe: 'URL to fetch content from',
                type: 'string',
                default: 'http://www.google.com'
            }).positional('proxy', {
                describe: 'optional proxy URL'
            });
        })
        .help()
        .argv;
}

function Argv$positional() {
    const module: yargs.CommandModule<{}, { paths: string[] }> = {
        command: 'test <paths...>',
        builder(yargs) {
            return yargs.positional('paths', {
                type: 'string',
                array: true,
                demandOption: true
            });
        },
        handler(argv) {
            argv.paths.map((path) => path);
        }
    };
}

function Argv$commandModule() {
    class CommandOne implements yargs.CommandModule {
        handler(args: yargs.Arguments): void {
            console.log("one");
        }
    }

    const CommandTwo: yargs.CommandModule<{ a: string }, { b: number }> = {
        builder: yargs => {
            // $ExpectType: string
            yargs.argv.a;
            return yargs.number("b").default("b", parseInt(yargs.argv.a, 10));
        },

        handler: argv => {
            // $ExpectType: number
            argv.b;
        }
    };

    class Configure implements yargs.CommandModule<{ verbose: boolean }, { verbose: boolean, key: string, value: boolean }> {
        command = 'configure <key> [value]';
        aliases = ['config', 'cfg'];
        describe = 'Set a config variable';

        builder(yargs: yargs.Argv<{ verbose: boolean }>) {
            return yargs.positional('key', { default: '' }).positional('value', { default: true });
        }

        handler(argv: yargs.Arguments<{ verbose: boolean, key: string, value: string | boolean }>) {
            if (argv.verbose) {
                console.log(`setting ${argv.key} to ${argv.value}`);
            }
        }
    }

    const Configure2: yargs.CommandModule<{ verbose: boolean }, { verbose: boolean, key: string, value: boolean }> = {
        command: 'configure <key> [value]',
        aliases: ['config', 'cfg'],
        describe: 'Set a config variable',

        builder: yargs => {
            return yargs.positional('key', { default: '' }).positional('value', { default: true });
        },

        handler: argv => {
            if (argv.verbose) {
                console.log(`setting ${argv.key} to ${argv.value}`);
            }
        }
    };

    const command = 'import-file <file>';
    const describe = 'run the importer on a single file';
    const builder = (yargs: yargs.Argv) => {
        return yargs
            .positional('file', {
                describe: 'path to file to import'
            })
            .options({
                cleanDestination: {
                    boolean: true,
                    describe: 'Clean the destination folder from previously generated files before proceeding.'
                }
            });
    };

    const commandArgs = builder(yargs).argv;

    // $ExpectType: { [x: string]: unknown; file: unknown; cleanDestination: boolean | undefined; _: string[]; $0: string; }
    commandArgs;

    // Backwards compatibility with older types
    const builder2: yargs.CommandBuilder = builder;
    const commandArgs2: yargs.Arguments = builder(yargs).argv;
    const commandArgs3: yargs.Arguments = builder2(yargs).argv;
}

function Argv$completion_sync() {
    const argv = yargs
        .completion('completion', (current, argv) => {
            // 'current' is the current command being completed.
            // 'argv' is the parsed arguments so far.
            // simply return an array of completions.
            return [
                'foo',
                'bar'
            ];
        })
        .argv;
}

function Argv$completion_async() {
    const argv = yargs
        .completion('completion', (current: string, argv: any, done: (completion: string[]) => void) => {
            setTimeout(() => {
                done([
                    'apple',
                    'banana'
                ]);
            }, 500);
        })
        .argv;
}

function Argv$help() {
    const argv = yargs
        .usage("$0 -operand1 number -operand2 number -operation [add|subtract]")
        .help()
        .argv;
}

function Argv$showHelpOnFail() {
    const argv = yargs
        .usage('Count the lines in a file.\nUsage: $0')
        .demand('f')
        .alias('f', 'file')
        .describe('f', 'Load a file')
        .showHelpOnFail(false, "Specify --help for available options")
        .argv;
}

function Argv$showHelp() {
    const yargs1 = yargs
        .usage("$0 -operand1 number -operand2 number -operation [add|subtract]");
    yargs1.showHelp();
}

function Argv$version() {
    const argv1 = yargs
        .version();

    const argv2 = yargs
        .version('1.0.0');

    const argv3 = yargs
        .version('--version', '1.0.0');

    const argv4 = yargs
        .version('--version', 'Show version', '1.0.0');

    const argv5 = yargs
        .version(false);
}

function Argv$wrap() {
    const argv1 = yargs
        .wrap(null);

    const argv2 = yargs
        .wrap(yargs.terminalWidth());
}

function Argv$locale() {
    const argv = yargs
        .usage('./$0 - follow ye instructions true')
        .option('option', {
            alias: 'o',
            describe: "'tis a mighty fine option",
            demand: true
        })
        .command('run', "Arrr, ya best be knowin' what yer doin'")
        .example('$0 run foo', "shiver me timbers, here's an example for ye")
        .help('help')
        .wrap(70)
        .locale('pirate')
        .argv;
}

function Argv$epilogue() {
    const argv = yargs
        .epilogue('for more information, find our manual at http://example.com');
}

function Argv$reset() {
    const ya = yargs
        .usage('$0 command')
        .command('hello', 'hello command')
        .command('world', 'world command')
        .demand(1, 'must provide a valid command');
    const argv = yargs.argv;
    const command = argv._[0];

    if (command === 'hello') {
        ya.reset()
            .usage('$0 hello')
            .help('h')
            .example('$0 hello', 'print the hello message!')
            .argv;

        console.log('hello!');
    } else if (command === 'world') {
        ya.reset()
            .usage('$0 world')
            .help('h')
            .example('$0 world', 'print the world message!')
            .argv;

        console.log('world!');
    } else {
        ya.showHelp();
    }
}

// http://yargs.js.org/docs/#methods-commanddirdirectory-opts
function Argv$commandDir() {
    const ya = yargs
        .commandDir('.')
        .argv;
}

// http://yargs.js.org/docs/#methods-commanddirdirectory-opts
function Argv$commandDirWithOptions() {
    const ya = yargs
        .commandDir('.', {
            recurse: false,
            extensions: ['js'],
            visit: (commandObject: any, pathToFile?: string, filename?: string) => void 0,
            include: /.*\.js$/,
            exclude: /.*\.spec.js$/,
        })
        .argv;
}

function Argv$normalize() {
    const ya = yargs
        .normalize('path')
        .normalize(['user', 'group'])
        .argv;
}

// From http://yargs.js.org/docs/#methods-coercekey-fn
function Argv$coerce() {
    const ya = yargs
        .coerce('file', (arg: string) => {
            return fs.readFileSync(arg, 'utf8');
        })
        .argv;
}
function Argv$coerces() {
    const ya = yargs
        .coerce({
            date: Date.parse,
            json: JSON.parse
        })
        .argv;
}
function Argv$coerceWithKeys() {
    const ya = yargs
        .coerce(['src', 'dest'], path.resolve)
        .argv;
}

// From http://yargs.js.org/docs/#methods-failfn
function Argv$fail() {
    const ya = yargs
        .fail((msg, err, { help }) => {
            if (err) throw err; // preserve stack
            console.error('You broke it!');
            console.error(msg);
            console.error(help());
            process.exit(1);
        })
        .argv;
}

function Argv$implies() {
    const ya = yargs
        .implies('foo', 'snuh')
        .implies({
            x: 'y'
        })
        .argv;
}

function Argv$count() {
    const ya = yargs
        .count('size')
        .count(['w', 'h'])
        .argv;
}

function Argv$number() {
    const ya = yargs
        .number('n')
        .number(['width', 'height'])
        .argv;
}

function Argv$updateStrings() {
    const ya = yargs
        .command('run', 'the run command')
        .help('help')
        .updateStrings({
            'Commands:': 'My Commands -->\n'
        })
        .wrap(null)
        .argv;
}

function Argv$default() {
    const ya = yargs
        .default('random', function randomValue() {
            return Math.random() * 256;
        })
        .argv;
}

function Argv$configObject() {
    const ya = yargs
        .config({ foo: 1, bar: 2 })
        .argv;
}

function Argv$configParseFunction() {
    const ya = yargs
        .config('settings', (configPath) => {
            return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
        })
        .config('settings', 'description', (configPath) => {
            return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
        })
        .argv;
}

function Argv$helpDescriptionExplicit() {
    const ya = yargs
        .help('help', 'description', true)
        .argv;
}

function Argv$showHelpConsoleLevel() {
    yargs.showHelp("log"); // prints to stdout using console.log()
}

function Argv$getCompletion() {
    const ya = yargs
        .option('foobar', {})
        .option('foobaz', {})
        .completion()
        .getCompletion(['./test.js', '--foo'], (completions) => {
            console.log(completions);
        })
        .argv;
}

function Argv$pkgConf() {
    const ya = yargs
        .pkgConf(['key1', 'key2'], 'configFile.json')
        .argv;
}

function Argv$recommendCommands() {
    const ya = yargs
        .recommendCommands()
        .argv;
}

function Argv$showCompletionScript() {
    const ya = yargs
        .showCompletionScript()
        .argv;
}

function Argv$skipValidation() {
    const ya = yargs
        .skipValidation('arg1')
        .skipValidation(['arg2', 'arg3'])
        .argv;
}

function Argv$commandObject() {
    const options: yargs.Options = {
        alias: "string",
        array: true,
        boolean: true,
        choices: [undefined, true, "a", "b", "c"],
        coerce: f => JSON.stringify(f),
        config: true,
        configParser: t => JSON.parse(fs.readFileSync(t, "utf8")),
        count: true,
        default: "myvalue",
        defaultDescription: "description",
        demand: true,
        demandOption: true,
        desc: "desc",
        describe: "describe",
        description: "description",
        global: false,
        group: "group",
        nargs: 1,
        normalize: false,
        number: true,
        requiresArg: true,
        skipValidation: false,
        string: true,
        type: "string"
    };
    const ya = yargs.command("commandname", "description", { arg: options });
}

function Argv$demandCommand() {
    const ya = yargs
        .demandCommand(1)
        .demandCommand(1, 'at least 1 command required')
        .demandCommand(1, 2)
        .demandCommand(1, 2, 'at least 1 command required')
        .demandCommand(1, 2, 'at least 1 command required', 'at most 2 commands required')
        .argv;
}

function Argv$demandOption() {
    const ya = yargs
        .demandOption('a')
        .demandOption('a', 'a is required')
        .demandOption('a', true)
        .demandOption(['a', 'b'])
        .demandOption(['a', 'b'], 'a and b are required')
        .demandOption(['a', 'b'], true)
        .argv;
}

function Argv$conflicts() {
    const ya = yargs
        .conflicts('a', 'b')
        .conflicts({
            a: 'b'
        })
        .argv;
}

function Argv$commandArray() {
    const ya = yargs
        .command(['commandName', 'commandAlias'], 'command description')
        .argv;
}

function Argv$check() {
    const ya = yargs
        .check((argv, aliases) => void 0)
        .check((argv, aliases) => void 0, false);
}

function Argv$hide() {
    const ya = yargs
        .hide('a');
}

function Argv$showHidden() {
    const ya = yargs
        .showHidden()
        .showHidden(true)
        .showHidden('show-hidden')
        .showHidden('show-hidden', 'Show hidden options');
}

function Argv$scriptName() {
    const ya = yargs
        .scriptName("my-script");
}

type Color = "red" | "blue" | "green";
const colors: ReadonlyArray<Color> = ["red", "blue", "green"];

function Argv$inferOptionTypes() {
    // $ExpectType { [x: string]: unknown; a: (string | number)[] | undefined; b: boolean | undefined; c: number; n: number | undefined; s: string | undefined; _: string[]; $0: string; }
    yargs
        .option("a", { type: "array" })
        .option("b", { type: "boolean" })
        .option("c", { type: "count" })
        .option("n", { type: "number" })
        .option("s", { type: "string" })
        .argv;

    // $ExpectType { [x: string]: unknown; a: number; b: boolean; c: string; _: string[]; $0: string; }
    yargs
        .option("a", { default: 42 })
        .option("b", { default: false })
        .option("c", { default: "tmp" })
        .argv;

    // $ExpectType { [x: string]: unknown; a: (string | number)[] | undefined; b: boolean | undefined; n: number | undefined; s: string | undefined; _: string[]; $0: string; }
    yargs
        .option("a", { array: true })
        .option("b", { boolean: true })
        .option("n", { number: true })
        .option("s", { string: true })
        .argv;

    // $ExpectType { [x: string]: unknown; choices: Color; coerce: Date | undefined; count: number; normalize: string | undefined; _: string[]; $0: string; }
    yargs
        .option("choices", { choices: colors, required: true })
        .option("coerce", { coerce: () => new Date() })
        .option("count", { count: true })
        .option("normalize", { normalize: true })
        .argv;

    // $ExpectType (string | number)[] | undefined
    yargs.array("x").argv.x;

    // $ExpectType boolean | undefined
    yargs.boolean("x").argv.x;

    // $ExpectType "red" | "blue" | "green" | undefined
    yargs.choices("x", colors).argv.x;

    // $ExpectType number | undefined
    yargs.coerce("x", Date.parse).argv.x;

    // $ExpectType number
    yargs.count("x").argv.x;

    // $ExpectType Date
    yargs.default("x", new Date()).argv.x;

    // $ExpectType string | undefined
    yargs.normalize("x").argv.x;

    // $ExpectType number | undefined
    yargs.number("x").argv.x;

    // $ExpectType string | undefined
    yargs.string("x").argv.x;
}

function Argv$inferRequiredOptionTypes() {
    // $ExpectType string
    yargs.string("x").demand("x").argv.x;

    // $ExpectType string
    yargs.demand("x").string("x").argv.x;

    // $ExpectType string
    yargs.string("x").demandOption("x").argv.x;

    // $ExpectType string | undefined
    yargs.string("x").demandOption("x", false).argv.x;

    // $ExpectType { [x: string]: unknown; x: string; y: number; _: string[]; $0: string; }
    yargs.string("x").number("y").demandOption(["x", "y"]).argv;

    // $ExpectType { [x: string]: unknown; x: string; y: number; _: string[]; $0: string; }
    yargs.string("x").number("y").demandOption(["x", "y"], true).argv;

    // $ExpectType { [x: string]: unknown; x: string | undefined; y: number | undefined; _: string[]; $0: string; }
    yargs.string("x").number("y").demandOption(["x", "y"], false).argv;

    // $ExpectType { [x: string]: unknown; x: string; y: number; _: string[]; $0: string; }
    yargs.demandOption(["x", "y"]).string("x").number("y").argv;

    // $ExpectType { [x: string]: unknown; x: string; y: number; _: string[]; $0: string; }
    yargs.demandOption(["x", "y"], true).string("x").number("y").argv;

    // $ExpectType { [x: string]: unknown; x: string | undefined; y: number | undefined; _: string[]; $0: string; }
    yargs.demandOption(["x", "y"], false).string("x").number("y").argv;

    // $ExpectType string
    yargs.option("x", { string: true, require: true }).argv.x;

    // $ExpectType string
    yargs.option("x", { string: true, required: true }).argv.x;

    // $ExpectType string
    yargs.option("x", { string: true, demand: true }).argv.x;

    // $ExpectType string
    yargs.option("x", { string: true, demandOption: true }).argv.x;

    // $ExpectType string | undefined
    yargs.option("x", { string: true, demandOption: false }).argv.x;

    // $ExpectType number
    yargs.option("x", { count: true }).argv.x;

    // $ExpectType number
    yargs.option("x", { number: true, default: 42 }).argv.x;

    // $ExpectType (string | number)[]
    yargs.option("x", { array: true, demandOption: true }).argv.x;
}

function Argv$inferMultipleOptionTypes() {
    // $ExpectType { [x: string]: unknown; a: string; b: boolean; c: number; d: number; e: number; _: string[]; $0: string; }
    yargs
        .option({ a: { default: "a" }, b: { default: false } })
        .number(["c", "d", "e"])
        .demandOption(["c", "d", "e"])
        .argv;

    // $ExpectType { [x: string]: unknown; a: string; b: boolean; c: number; d: number; e: number; _: string[]; $0: string; }
    yargs
        .options({ a: { default: "a" }, b: { default: false } })
        .number(["c", "d", "e"])
        .demandOption(["c", "d", "e"])
        .argv;

    // $ExpectType { [x: string]: unknown; a: number; b: string; c: boolean; _: string[]; $0: string; }
    yargs
        .default({ a: 42, b: "b", c: false })
        .argv;

    // $ExpectType { [x: string]: unknown; a: number; b: string; c: Date; _: string[]; $0: string; }
    yargs
        .coerce({ a: Date.parse, b: String.prototype.toLowerCase, c: (s: string) => new Date(s) })
        .demandOption(["a", "b", "c"])
        .argv;

    // $ExpectType { [x: string]: unknown; a: number | undefined; b: string | undefined; c: Color; _: string[]; $0: string; }
    yargs
        .choices({ a: [1, 2, 3], b: ["black", "white"], c: colors })
        .demandOption("c")
        .argv;
}

function Argv$inferOptionTypesForAliases() {
    // $ExpectType { [x: string]: unknown; u: string | undefined; url: string | undefined; _: string[]; $0: string; }
    yargs
        .option("u", { type: "string" })
        .alias("u", "url")
        .argv;

    // $ExpectType { [x: string]: unknown; v: boolean; loud: boolean; noisy: boolean; verbose: boolean; n: boolean; _: string[]; $0: string; }
    yargs
        .option("v", { default: false })
        .alias("v", ["loud", "noisy", "verbose"])
        .alias("n", "noisy")
        .argv;

    // $ExpectType { [x: string]: unknown; n: number; count: number; num: number; _: string[]; $0: string; }
    yargs
        .option("n", { number: true, demandOption: true })
        .alias("n", "count")
        .alias("num", ["n", "count"])
        .argv;
}

function Argv$inferArrayOptionTypes() {
    // $ExpectType (string | number)[]
    yargs.option("a", { array: true, demandOption: true }).argv.a;

    // $ExpectType string[]
    yargs.option("a", { array: true, string: true, demandOption: true }).argv.a;

    // $ExpectType number[]
    yargs.option("a", { array: true, number: true, demandOption: true }).argv.a;

    // $ExpectType string[]
    yargs.option("a", { array: true, normalize: true, demandOption: true }).argv.a;

    // $ExpectType string[] | undefined
    yargs.option("a", { array: true, type: "string" }).argv.a;

    // $ExpectType number[] | undefined
    yargs.option("a", { array: true, type: "number" }).argv.a;

    // $ExpectType string[] | undefined
    yargs.option("a", { array: true, normalize: true }).argv.a;

    // $ExpectType string[] | undefined
    yargs.option("a", { string: true, type: "array" }).argv.a;

    // $ExpectType number[] | undefined
    yargs.option("a", { number: true, type: "array" }).argv.a;

    // $ExpectType string[] | undefined
    yargs.option("a", { normalize: true, type: "array" }).argv.a;

    // $ExpectType string[] | undefined || ToArray<string | undefined>
    yargs.string("a").array("a").argv.a;

    // $ExpectType string[] | undefined || ToString<(string | number)[] | undefined>
    yargs.array("a").string("a").argv.a;

    // $ExpectType string[]
    yargs.string("a").array("a").demandOption("a").argv.a;

    // $ExpectType string[]
    yargs.array("a").string("a").demandOption("a").argv.a;

    // $ExpectType string[]
    yargs.string("a").demandOption("a").array("a").argv.a;

    // $ExpectType string[]
    yargs.array("a").demandOption("a").string("a").argv.a;

    // $ExpectType number[]
    yargs.number("a").array("a").demandOption("a").argv.a;

    // $ExpectType number[]
    yargs.array("a").number("a").demandOption("a").argv.a;

    // $ExpectType number[]
    yargs.array("a").demandOption("a").number("a").argv.a;

    // $ExpectType string[]
    yargs.normalize("a").array("a").demandOption("a").argv.a;

    // $ExpectType string[]
    yargs.array("a").normalize("a").demandOption("a").argv.a;

    // $ExpectType string[]
    yargs.array("a").demandOption("a").normalize("a").argv.a;
}

function Argv$inferRepeatedOptionTypes() {
    // $ExpectType boolean | undefined
    yargs.string("a").boolean("a").argv.a;

    // $ExpectType string | undefined
    yargs.number("a").string("a").argv.a;

    // $ExpectType number | undefined
    yargs.string("a").number("a").argv.a;

    // $ExpectType boolean | undefined
    yargs.string("a").option("a", { number: true }).boolean("a").argv.a;

    // $ExpectType boolean | undefined
    yargs.number("a").option("a", { string: true }).boolean("a").argv.a;

    // $ExpectType string | undefined
    yargs.boolean("a").option("a", { number: true }).option("a", { string: true }).argv.a;

    // $ExpectType number | undefined
    yargs.boolean("a").option("a", { string: true }).option("a", { number: true }).argv.a;
}

function Argv$fallbackToUnknownForUnknownOptions() {
    // $ExpectType unknown
    yargs.argv.bogus;

    // $ExpectType unknown
    yargs
        .option({a: { type: "string" }, b: { type: "boolean" } })
        .argv
        .bogus;

    const argv = yargs.option({ a: {}, b: {} }).option("c", {}).argv;
    // $ExpectType unknown
    argv.a;
    // $ExpectType unknown
    argv.b;
    // $ExpectType unknown
    argv.c;

    // $ExpectError
    const x: string = yargs.argv.x;
    return x;
}

function Argv$exit() {
    yargs.exit(1, new Error("oh no"));
}

function Argv$parsed() {
    const parsedArgs = yargs.parsed;
}

function makeSingleton() {
    yargsSingleton(process.argv.slice(2));
}
