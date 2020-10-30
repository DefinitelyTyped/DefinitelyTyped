// near copy of each of the tests from https://github.com/nodeca/argparse/tree/master/examples

import {
    ArgumentParser,
    RawDescriptionHelpFormatter,
    Action,
    ActionConstructorOptions,
    Namespace,
    ONE_OR_MORE,
    ZERO_OR_MORE,
    OPTIONAL,
    SUPPRESS,
    REMAINDER,
} from 'argparse';
let args: any;

const simpleExample = new ArgumentParser({
    add_help: true,
    description: 'Argparse example',
});
simpleExample.add_argument(
    '-f', '--foo',
    {
        help: 'foo bar',
    }
);
simpleExample.add_argument(
    '-b', '--bar',
    {
        help: 'bar foo',
    }
);
simpleExample.add_argument(
    'positional',
    {
        help: 'bar foo',
    }
);

simpleExample.print_help();
console.log('-----------');

args = simpleExample.parse_args('-f 1 -b2'.split(' '));
console.dir(args);
console.log('-----------');
args = simpleExample.parse_args('-f=3 --bar=4'.split(' '));
console.dir(args);
console.log('-----------');
args = simpleExample.parse_args('--foo 5 --bar 6'.split(' '));
console.dir(args);
console.log('-----------');

const choicesExample = new ArgumentParser({
    add_help: true,
    description: 'Argparse examples: choice'
});

choicesExample.add_argument('foo', { choices: 'abc' });

choicesExample.print_help();
console.log('-----------');

args = choicesExample.parse_args(['c']);
console.dir(args);
console.log('-----------');
// choicesExample.parse_args(['X']);
// console.dir(args);

const constantExample = new ArgumentParser({
    add_help: true,
    description: 'Argparse examples: constant'
});

constantExample.add_argument(
    '-a',
    {
        action: 'store_const',
        dest: 'answer',
        help: 'store constant',
        const: 42
    }
);
constantExample.add_argument(
    '--str',
    {
        action: 'append_const',
        dest: 'types',
        help: 'append constant "str" to types',
        const: 'str'
    }
);
constantExample.add_argument(
    '--int',
    {
        action: 'append_const',
        dest: 'types',
        help: 'append constant "int" to types',
        const: 'int'
    }
);

constantExample.add_argument(
    '--true',
    {
        action: 'store_true',
        help: 'store true constant'
    }
);
constantExample.add_argument(
    '--false',
    {
        action: 'store_false',
        help: 'store false constant'
    }
);

constantExample.print_help();
console.log('-----------');

args = constantExample.parse_args('-a --str --int --true'.split(' '));
console.dir(args);

const nargsExample = new ArgumentParser({
    add_help: true,
    description: 'Argparse examples: nargs'
});
nargsExample.add_argument(
    '-f', '--foo',
    {
        help: 'foo bar',
        nargs: 1
    }
);
nargsExample.add_argument(
    '-b', '--bar',
    {
        help: 'bar foo',
        nargs: '*'
    }
);

nargsExample.print_help();
console.log('-----------');

args = nargsExample.parse_args('--foo a --bar c d'.split(' '));
console.dir(args);
console.log('-----------');
args = nargsExample.parse_args('--bar b c f --foo a'.split(' '));
console.dir(args);

const parent_parser = new ArgumentParser({ add_help: false });
// note add_help:false to prevent duplication of the -h option
parent_parser.add_argument(
    '--parent',
    { type: 'int', help: 'parent' }
);

const foo_parser = new ArgumentParser({
    parents: [parent_parser],
    description: 'child1'
});
foo_parser.add_argument('foo');
args = foo_parser.parse_args(['--parent', '2', 'XXX']);
console.log(args);

const bar_parser = new ArgumentParser({
    parents: [parent_parser],
    description: 'child2'
});
bar_parser.add_argument('--bar');
args = bar_parser.parse_args(['--bar', 'YYY']);
console.log(args);

const prefixCharsExample = new ArgumentParser({
    add_help: true,
    description: 'Argparse examples: prefix_chars',
    prefix_chars: '-+'
});
prefixCharsExample.add_argument('+f', '++foo');
prefixCharsExample.add_argument('++bar', { action: 'store_true' });

prefixCharsExample.print_help();
console.log('-----------');

args = prefixCharsExample.parse_args(['+f', '1']);
console.dir(args);
args = prefixCharsExample.parse_args(['++bar']);
console.dir(args);
args = prefixCharsExample.parse_args(['++foo', '2', '++bar']);
console.dir(args);

const subparserExample = new ArgumentParser({
    add_help: true,
    description: 'Argparse examples: sub-commands'
});

const subparsers = subparserExample.add_subparsers({
    title: 'subcommands',
    dest: "subcommand_name"
});

let bar = subparsers.add_parser('c1', { add_help: true, help: 'c1 help' });
bar.add_argument(
    '-f', '--foo',
    {
        action: 'store',
        help: 'foo3 bar3'
    }
);
bar = subparsers.add_parser(
    'c2',
    { aliases: ['co'], add_help: true, help: 'c2 help' }
);
bar.add_argument(
    '-b', '--bar',
    {
        action: 'store',
        type: 'int',
        help: 'foo3 bar3'
    }
);
subparserExample.print_help();
console.log('-----------');

args = subparserExample.parse_args('c1 -f 2'.split(' '));
console.dir(args);
console.log('-----------');
args = subparserExample.parse_args('c2 -b 1'.split(' '));
console.dir(args);
console.log('-----------');
args = subparserExample.parse_args('co -b 1'.split(' '));
console.dir(args);
console.log('-----------');
subparserExample.parse_args(['c1', '-h']);

const functionExample = new ArgumentParser({ description: 'Process some integers.' });
function sum(arr: number[]) {
    return arr.reduce((a, b) => a + b, 0);
}
function max(arr: number[]) {
    return Math.max.apply(Math, arr);
}

functionExample.add_argument('integers', {
    metavar: 'N',
    type: 'int',
    nargs: '+',
    help: 'an integer for the accumulator'
});
functionExample.add_argument('--sum', {
    dest: 'accumulate',
    action: 'store_const',
    const: sum,
    default: max,
    help: 'sum the integers (default: find the max)'
});

args = functionExample.parse_args('--sum 1 2 -1'.split(' '));
console.log(args.accumulate(args.integers));

const formatterExample = new ArgumentParser({
    prog: 'PROG',
    formatter_class: RawDescriptionHelpFormatter,
    description: `Keep the formatting\nexactly as it is written\n\nhere\n`,
});

formatterExample.add_argument('--foo', {
    help: `foo help should not\nretain this odd formatting`,
});

formatterExample.add_argument('spam', {
    help: 'spam help',
});

const group = formatterExample.add_argument_group({
    title: 'title',
    description: `This text\nshould be indented\nexactly like it is here\n`,
});

group.add_argument('--bar', {
    help: 'bar help'
});
formatterExample.print_help();

class CustomAction1 extends Action {
    constructor(options: ActionConstructorOptions) {
        super(options);
    }
    call(parser: ArgumentParser, namespace: Namespace, values: string | string[], optionString: string | null) {
        console.log('custom action 1');
    }
}

class CustomAction2 extends Action {
    call(parser: ArgumentParser, namespace: Namespace, values: string | string[], optionString: string | null) {
        console.log('custom action 2');
    }
}

const customActionExample = new ArgumentParser({ add_help: false });
customActionExample.add_argument('--abc', {
    action: CustomAction1,
});
customActionExample.add_argument('--def', {
    action: CustomAction2,
});

const constExample = new ArgumentParser();
constExample.add_argument(
    '-f', '--foo',
    {
        help: 'foo bar',
        nargs: ONE_OR_MORE
    }
);
constExample.add_argument(
    '-b', '--bar',
    {
        help: 'bar foo',
        nargs: ZERO_OR_MORE
    }
);
constExample.add_argument(
    '--baz',
    {
        help: 'baz',
        nargs: OPTIONAL
    }
);
constExample.add_argument(
    '--qux',
    {
        help: SUPPRESS
    }
);
constExample.add_argument(
    'quux',
    {
        help: 'quux',
        nargs: REMAINDER
    }
);

constExample.print_help();
console.log('-----------');

args = constExample.parse_args('--foo x --bar --baz y --qux z a b c d e'.split(' '));
console.dir(args);
console.log('-----------');

const versionExample = new ArgumentParser({description: 'Add version'});
versionExample.add_argument('-v', '--v', {action: 'version', version: '1.0.0'});
versionExample.print_help();
console.log('-----------');
