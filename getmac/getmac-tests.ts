/// <reference path="getmac.d.ts" />

import getmac = require('getmac');

let callback:(err:Error,macAddress:string)=>void;
let stringArg:string;

getmac.getMac(callback);
let booleanResult:boolean = getmac.isMac(stringArg);
