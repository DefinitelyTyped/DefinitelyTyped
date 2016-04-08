/// <reference path='./blueimp-md5.d.ts' />

import blueimp = require('blueimp-md5');

function hash(): boolean {
    return blueimp.md5('hello world') === '5eb63bbbe01eeed093cb22bb8f5acdc3';
}
