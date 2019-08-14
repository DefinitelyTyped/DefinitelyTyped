import colors = require('ansi-colors');

colors.red('This is a red string!'); // $ExpectType string
colors.green('This is a red string!'); // $ExpectType string
colors.cyan('This is a cyan string!'); // $ExpectType string
colors.yellow('This is a yellow string!'); // $ExpectType string

colors.bold.red('this is a bold red message'); // $ExpectType string
colors.bold.yellow.italic('this is a bold yellow italicized message'); // $ExpectType string
colors.green.bold.underline('this is a bold green underlined message'); // $ExpectType string

colors.yellow(`foo ${colors.red.bold('red')} bar ${colors.cyan('cyan')} baz`); // $ExpectType string
colors.bold(`foo ${colors.red.dim('bar')} baz`); // $ExpectType string

colors.enabled = false;
colors.visible = false;

colors.hasAnsi(colors.blue('foo')); // $ExpectType boolean
colors.hasColor(colors.blue('foo')); // $ExpectType boolean

colors.unstyle(colors.blue.bold('foo bar baz')); // $ExpectType string
colors.stripColor(colors.blue.bold('foo bar baz')); // $ExpectType string

colors.none('foo'); // $ExpectType string
colors.clear('foo'); // $ExpectType string
colors.noop('foo'); // $ExpectType string

colors.define('reset', [0, 0], 'modifier');

colors.symbols.ballotCross; // $ExpectType string | undefined
colors.symbols.windows.ballotCross; // $ExpectError
colors.symbols.other.ballotCross; // $ExpectType string
colors.symbols.cross; // $ExpectType string
colors.symbols.windows.cross; // $ExpectType string
colors.symbols.other.cross; // $ExpectType string
