/// <reference path="z85.d.ts" />

import z85 = require('z85');

let BufferArg:Buffer;

let StringResult:string = z85.encode(BufferArg);
let NumberArrayResult:number[] = z85.decode('stringArg');
