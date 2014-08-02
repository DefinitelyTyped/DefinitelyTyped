/// <reference path="chalk.d.ts" />

import chalk = require('chalk');

var str: string;
var bool: boolean;

chalk.enabled = bool;
str = chalk.stripColor(str);

bool = chalk.supportsColor;
bool = chalk.hasColor(str);

// style a string
console.log(  chalk.blue('Hello world!')  );

// combine styled and normal strings
console.log(  chalk.blue('Hello'), 'World' + chalk.red('!')  );

// compose multiple styles using the chainable API
console.log(  chalk.blue.bgRed.bold('Hello world!')  );

// pass in multiple arguments
console.log(  chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz')  );

// nest styles
console.log(  chalk.red('Hello', chalk.underline.bgBlue('world') + '!')  );

// nest styles of the same type even (color, underline, background)
console.log(  chalk.green('I am a green line ' + chalk.blue('with a blue substring') + ' that becomes green again!')  );
