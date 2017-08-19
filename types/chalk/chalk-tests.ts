import chalk = require('chalk');

var str = '';
var bool = false;
var chain: chalk.ChalkChain;

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

chain = chalk.green;
chain = chain.underline;
str = chain('someString');

chalk.enabled = chalk.supportsColor = bool;

var chalkObj = new chalk.constructor({enabled: false});

chain = chalkObj.green;
chain = chalkObj.underline;
chalkObj.enabled = true;
str = chain('foo');
