// Type definition tests for yargs
// Project: https://github.com/chevex/yargs
// Definitions by: Martin Poelstra <https://github.com/poelstra>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="yargs.d.ts" />
/// <reference path="../node/node.d.ts"/>

import * as yargs from 'yargs';

// Examples taken from yargs website
// https://github.com/chevex/yargs

// With yargs, the options be just a hash!
function xup() {
	var argv = yargs.argv;

	if (argv.rif - 5 * argv.xup > 7.138) {
		console.log('Plunder more riffiwobbles!');
	}
	else {
		console.log('Drop the xupptumblers!');
	}
}

// And non-hyphenated options too! Just use argv._!
function nonopt() {
	var argv = yargs.argv;
	console.log('(%d,%d)', argv.x, argv.y);
	console.log(argv._);
}

// Yargs even counts your booleans!
function count() {
	var argv = yargs
		.count('verbose')
		.alias('v', 'verbose')
		.argv;

	var VERBOSE_LEVEL: number = argv.verbose;

	function WARN() { VERBOSE_LEVEL >= 0 && console.log.apply(console, arguments); }
	function INFO() { VERBOSE_LEVEL >= 1 && console.log.apply(console, arguments); }
	function DEBUG() { VERBOSE_LEVEL >= 2 && console.log.apply(console, arguments); }
}

// Tell users how to use yer options and make demands.
function divide() {
	var argv = yargs
		.usage('Usage: $0 -x [num] -y [num]')
		.demand(['x', 'y'])
		.argv;

	console.log(argv.x / argv.y);
}

// After yer demands have been met, demand more! Ask for non-hypenated arguments!
function demand_count() {
	var argv = yargs
		.demand(2)
		.argv;
	console.dir(argv);
}

// EVEN MORE SHIVER ME TIMBERS!
function default_singles() {
	var argv = yargs
		.default('x', 10)
		.default('y', 10)
		.argv
		;
	console.log(argv.x + argv.y);
}
function default_hash() {
	var argv = yargs
		.default({ x: 10, y: 10 })
		.argv
		;
	console.log(argv.x + argv.y);
}

// And if you really want to get all descriptive about it...
function boolean_single() {
	var argv = yargs
		.boolean('v')
		.argv
		;
	console.dir(argv.v);
	console.dir(argv._);
}
function boolean_double() {
	var argv = yargs
		.boolean(['x', 'y', 'z'])
		.argv
		;
	console.dir([argv.x, argv.y, argv.z]);
	console.dir(argv._);
}

// Yargs is here to help you...
function line_count() {
	var argv = yargs
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

function Argv_parsing() {
	var argv1 = yargs.argv;
	var argv2 = yargs(['-x', '1', '-y', '2']).argv;
	var argv3 = yargs.parse(['-x', '1', '-y', '2']);
	console.log(argv1.x, argv2.x, argv3.x);
}

function Argv$options() {
	var argv1 = yargs
		.options('f', {
			alias: 'file',
			default: '/etc/passwd',
			defaultDescription: 'The /etc/passwd file',
			group: 'files',
			normalize: true,
			global: false,
			array: true,
			nargs: 3
		})
		.argv
		;

	var argv2 = yargs
		.alias('f', 'file')
		.default('f', '/etc/passwd')
		.argv
		;
}

function Argv$global() {
	var argv = yargs
		.global('foo')
		.global(['bar', 'baz', 'fizz', 'buzz'])
}

function Argv$group() {
	var argv = yargs
		.group('foo', 'foogroup')
		.group(['bing', 'bang', 'buzz'], 'onomatopoeia')
}

function Argv$env() {
	var argv = yargs
		.env('YARGS_PREFIX_')
		.env()
		.env(true);
}

function Argv$array() {
	var argv = yargs
		.array('foo')
		.array(['bar', 'baz'])
}

function Argv$nargs() {
	var argv = yargs
		.nargs('foo', 12)
		.nargs({ 'bing': 3, 'bang': 2, 'buzz': 4 })
}

function Argv$choices() {
	// example from documentation
	var argv = yargs
		.alias('i', 'ingredient')
		.describe('i', 'choose your sandwich ingredients')
		.choices('i', ['peanut-butter', 'jelly', 'banana', 'pickles'])
		.help('help')
		.argv
}

function command() {
	var argv = yargs
		.usage('npm <command>')
		.command('install', 'tis a mighty fine package to install')
		.command('publish', 'shiver me timbers, should you be sharing all that', yargs => {
			argv = yargs.option('f', {
				alias: 'force',
				description: 'yar, it usually be a bad idea'
			})
				.help('help')
				.argv;
		})
		.command("build", "arghh, build it mate", {
			tag: {
				default: true,
				demand: true,
				description: "Tag the build, mate!"
			},
			publish: {
				default: false,
				description:"Should i publish?"
			}
		})
		.help('help')
		.argv;
}

function completion_sync() {
	var argv = yargs
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

function completion_async() {
	var argv = yargs
		.completion('completion', (current, argv, done) => {
			setTimeout(function () {
				done([
					'apple',
					'banana'
				]);
			}, 500);
		})
		.argv;
}

function Argv$help() {
	var argv = yargs
		.usage("$0 -operand1 number -operand2 number -operation [add|subtract]")
		.help()
		.argv;
}

function Argv$showHelpOnFail() {
	var argv = yargs
		.usage('Count the lines in a file.\nUsage: $0')
		.demand('f')
		.alias('f', 'file')
		.describe('f', 'Load a file')
		.showHelpOnFail(false, "Specify --help for available options")
		.argv;
}

function Argv$showHelp() {
	var yargs1 = yargs
		.usage("$0 -operand1 number -operand2 number -operation [add|subtract]");
	yargs1.showHelp();
}

function Argv$version() {
	var argv1 = yargs
		.version('1.0.0');

	var argv2 = yargs
		.version('1.0.0', '--version');

	var argv3 = yargs
		.version('1.0.0', '--version', 'description');

	var argv4 = yargs
		.version(function () { return '1.0.0'; }, '--version', 'description');
}

function Argv$wrap() {
	var argv1 = yargs
		.wrap(null);

	var argv2 = yargs
		.wrap(yargs.terminalWidth());
}

function Argv$locale() {
	var argv = yargs
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
		.argv
}

function Argv$epilogue() {
	var argv = yargs
		.epilogue('for more information, find our manual at http://example.com');
}

function Argv$reset() {
	var ya = yargs
		.usage('$0 command')
		.command('hello', 'hello command')
		.command('world', 'world command')
		.demand(1, 'must provide a valid command'),
		argv = yargs.argv,
		command = argv._[0];

	if (command === 'hello') {
		ya.reset()
			.usage('$0 hello')
			.help('h')
			.example('$0 hello', 'print the hello message!')
			.argv

		console.log('hello!');
	} else if (command === 'world') {
		ya.reset()
			.usage('$0 world')
			.help('h')
			.example('$0 world', 'print the world message!')
			.argv

		console.log('world!');
	} else {
		ya.showHelp();
	}
}

// http://yargs.js.org/docs/#methods-commanddirdirectory-opts
function Argv$commandDir() {
	var ya = yargs
		.commandDir('.')
		.argv
}


// http://yargs.js.org/docs/#methods-commanddirdirectory-opts
function Argv$commandDirWithOptions() {
	var ya = yargs
		.commandDir('.', {
			recurse: false,
			extensions: ['js'],
			visit: (commandObject: any, pathToFile: string, filename: string) => { },
			include: /.*\.js$/,
			exclude: /.*\.spec.js$/,
		})
		.argv
}

// http://yargs.js.org/docs/#methods-failfn
function Argv$fail() {
	var argv = yargs
		.fail(function (msg, err) {
			if (err) throw err // preserve stack
			console.error('You broke it!')
			console.error(msg)
			process.exit(1)
		})
		.argv
}
