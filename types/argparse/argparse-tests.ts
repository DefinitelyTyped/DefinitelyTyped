
// near copy of each of the tests from https://github.com/nodeca/argparse/tree/master/examples

import {ArgumentParser, RawDescriptionHelpFormatter} from 'argparse';
var args: any;

var simpleExample = new ArgumentParser({
  version: '0.0.1',
  addHelp: true,
  description: 'Argparse example',
});
simpleExample.addArgument(
  ['-f', '--foo'],
  {
    help: 'foo bar',
  }
);
simpleExample.addArgument(
  ['-b', '--bar'],
  {
    help: 'bar foo',
  }
);

simpleExample.printHelp();
console.log('-----------');

args = simpleExample.parseArgs('-f 1 -b2'.split(' '));
console.dir(args);
console.log('-----------');
args = simpleExample.parseArgs('-f=3 --bar=4'.split(' '));
console.dir(args);
console.log('-----------');
args = simpleExample.parseArgs('--foo 5 --bar 6'.split(' '));
console.dir(args);
console.log('-----------');




var choicesExample = new ArgumentParser({
  version: '0.0.1',
  addHelp: true,
  description: 'Argparse examples: choice'
});

choicesExample.addArgument(['foo'], { choices: 'abc' });

choicesExample.printHelp();
console.log('-----------');

args = choicesExample.parseArgs(['c']);
console.dir(args);
console.log('-----------');
// choicesExample.parseArgs(['X']);
// console.dir(args);




var constantExample = new ArgumentParser({
  version: '0.0.1',
  addHelp: true,
  description: 'Argparse examples: constant'
});

constantExample.addArgument(
  ['-a'],
  {
    action: 'storeConst',
    dest: 'answer',
    help: 'store constant',
    constant: 42
  }
);
constantExample.addArgument(
  ['--str'],
  {
    action: 'appendConst',
    dest: 'types',
    help: 'append constant "str" to types',
    constant: 'str'
  }
);
constantExample.addArgument(
  ['--int'],
  {
    action: 'appendConst',
    dest: 'types',
    help: 'append constant "int" to types',
    constant: 'int'
  }
);

constantExample.addArgument(
  ['--true'],
  {
    action: 'storeTrue',
    help: 'store true constant'
  }
);
constantExample.addArgument(
  ['--false'],
  {
    action: 'storeFalse',
    help: 'store false constant'
  }
);

constantExample.printHelp();
console.log('-----------');

args = constantExample.parseArgs('-a --str --int --true'.split(' '));
console.dir(args);




var nargsExample = new ArgumentParser({
  version: '0.0.1',
  addHelp: true,
  description: 'Argparse examples: nargs'
});
nargsExample.addArgument(
  ['-f', '--foo'],
  {
    help: 'foo bar',
    nargs: 1
  }
);
nargsExample.addArgument(
  ['-b', '--bar'],
  {
    help: 'bar foo',
    nargs: '*'
  }
);

nargsExample.printHelp();
console.log('-----------');

args = nargsExample.parseArgs('--foo a --bar c d'.split(' '));
console.dir(args);
console.log('-----------');
args = nargsExample.parseArgs('--bar b c f --foo a'.split(' '));
console.dir(args);




var parent_parser = new ArgumentParser({ addHelp: false });
// note addHelp:false to prevent duplication of the -h option
parent_parser.addArgument(
  ['--parent'],
  { type: 'int', help: 'parent' }
);

var foo_parser = new ArgumentParser({
  parents: [parent_parser],
  description: 'child1'
});
foo_parser.addArgument(['foo']);
args = foo_parser.parseArgs(['--parent', '2', 'XXX']);
console.log(args);

var bar_parser = new ArgumentParser({
  parents: [parent_parser],
  description: 'child2'
});
bar_parser.addArgument(['--bar']);
args = bar_parser.parseArgs(['--bar', 'YYY']);
console.log(args);




var prefixCharsExample = new ArgumentParser({
  version: '0.0.1',
  addHelp: true,
  description: 'Argparse examples: prefix_chars',
  prefixChars: '-+'
});
prefixCharsExample.addArgument(['+f', '++foo']);
prefixCharsExample.addArgument(['++bar'], { action: 'storeTrue' });

prefixCharsExample.printHelp();
console.log('-----------');

args = prefixCharsExample.parseArgs(['+f', '1']);
console.dir(args);
args = prefixCharsExample.parseArgs(['++bar']);
console.dir(args);
args = prefixCharsExample.parseArgs(['++foo', '2', '++bar']);
console.dir(args);




var subparserExample = new ArgumentParser({
  version: '0.0.1',
  addHelp: true,
  description: 'Argparse examples: sub-commands'
});

var subparsers = subparserExample.addSubparsers({
  title: 'subcommands',
  dest: "subcommand_name"
});

var bar = subparsers.addParser('c1', { addHelp: true, help: 'c1 help' });
bar.addArgument(
  ['-f', '--foo'],
  {
    action: 'store',
    help: 'foo3 bar3'
  }
);
var bar = subparsers.addParser(
  'c2',
  { aliases: ['co'], addHelp: true, help: 'c2 help' }
);
bar.addArgument(
  ['-b', '--bar'],
  {
    action: 'store',
    type: 'int',
    help: 'foo3 bar3'
  }
);
subparserExample.printHelp();
console.log('-----------');

args = subparserExample.parseArgs('c1 -f 2'.split(' '));
console.dir(args);
console.log('-----------');
args = subparserExample.parseArgs('c2 -b 1'.split(' '));
console.dir(args);
console.log('-----------');
args = subparserExample.parseArgs('co -b 1'.split(' '));
console.dir(args);
console.log('-----------');
subparserExample.parseArgs(['c1', '-h']);




var functionExample = new ArgumentParser({ description: 'Process some integers.' });
function sum(arr: number[]) {
  return arr.reduce(function(a, b) {
    return a + b;
  }, 0);
}
function max(arr: number[]) {
  return Math.max.apply(Math, arr);
}


functionExample.addArgument(['integers'], {
  metavar: 'N',
  type: 'int',
  nargs: '+',
  help: 'an integer for the accumulator'
});
functionExample.addArgument(['--sum'], {
  dest: 'accumulate',
  action: 'storeConst',
  constant: sum,
  defaultValue: max,
  help: 'sum the integers (default: find the max)'
});

args = functionExample.parseArgs('--sum 1 2 -1'.split(' '));
console.log(args.accumulate(args.integers));




var formatterExample = new ArgumentParser({
  prog: 'PROG',
  formatterClass: RawDescriptionHelpFormatter,
  description: 'Keep the formatting\n' +
  '    exactly as it is written\n' +
  '\n' +
  'here\n'
});

formatterExample.addArgument(['--foo'], {
  help: '  foo help should not\n' +
  '    retain this odd formatting'
});

formatterExample.addArgument(['spam'], {
  'help': 'spam help'
});

var group = formatterExample.addArgumentGroup({
  title: 'title',
  description: '    This text\n' +
  '  should be indented\n' +
  '    exactly like it is here\n'
});

group.addArgument(['--bar'], {
  help: 'bar help'
});
formatterExample.printHelp();
