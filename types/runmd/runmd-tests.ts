/// <reference types="node" />
import path = require('path');
import { Options, render } from 'runmd';

// $ExpectType string
render('# Development', { lame: true, inputName: `test/${path.basename(__filename)}` });
// $ExpectType string
render('# Development', {});
// $ExpectType string
render('# Development');

const options: Options = {
    lame: true,
    inputName: `test/${path.basename(__filename)}`,
    outputName: `test/output/${path.basename(__filename)}`,
};

const { inputName, outputName, lame } = options;

inputName; // $ExpectType string | undefined
outputName; // $ExpectType string | undefined
lame; // $ExpectType boolean | undefined
