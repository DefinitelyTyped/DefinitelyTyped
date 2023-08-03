import cliWidth = require('cli-width');
import tty = require('tty');

const test1: number = cliWidth();
const test2: number = cliWidth({ defaultWidth: 80 });
const test3: number = cliWidth({ output: process.stdout });
const test4: number = cliWidth({ tty });
