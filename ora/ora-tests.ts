/// <reference path="ora.d.ts" />

import ora = require('ora');
const spinner = ora('Loading unicorns');

spinner.start();

setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = 'Loading rainbows';
}, 1000);
