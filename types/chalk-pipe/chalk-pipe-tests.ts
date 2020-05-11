import chalk from 'chalk';
import chalkPipe = require('chalk-pipe');

chalkPipe('blue.bold')('Hello world!');

{
    const link = chalkPipe('blue.underline');
    const error = chalkPipe('bgRed.#cccccc');
    const warning = chalkPipe('orange.bold');

    link('Link!');
    error('Error!');
    warning('Warning!');
}

{
    const blue = chalkPipe('blue');
    const link = blue.underline;

    link('Link!');

    const text =  chalkPipe('underline', chalk.blue)('Link!');

    text;
}
