
import read = require('read');

var opts: read.Options;
opts = {
    prompt: 'please enter...',
    silent: true,
    replace: '*',
    timeout: 1500,
    default: 'nothing',
    edit: false,
    terminal: true,
    input: {x: 'thing'},
    output: {y: 'thang'}
};

read(opts, function (error, result, isDefault) { });
