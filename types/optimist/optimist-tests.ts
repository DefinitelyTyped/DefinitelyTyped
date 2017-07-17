
import optimist = require('optimist');

var checkFn: (argv: any) => any;
var logFn: (message: string) => void;
var str: string;
var value: any;
var num: number;

var argv: any;
var opt: optimist.Opt;
var parser: optimist.Parser;

argv = parser.argv;
argv = optimist([str]);
argv = optimist.parse([str]);

parser = parser.alias(str, str);
parser = parser.alias(str, [str]);
parser = parser.alias({});

parser = parser.default(str, value);
parser = parser.default({});

parser = parser.demand(str);
parser = parser.demand(num);
parser = parser.demand([str]);

parser = parser.describe(str, str);
parser = parser.describe({});

parser = parser.options(str, opt);
parser = parser.options({});

parser = parser.usage(str);

parser = parser.check(checkFn);

parser = parser.boolean(str);
parser = parser.boolean([str]);

parser = parser.string(str);
parser = parser.string([str]);

parser = parser.wrap(num);

parser.help();
parser.showHelp(logFn);
