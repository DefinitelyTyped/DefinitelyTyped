/// <reference path="replace-ext.d.ts" />
import replaceExt = require('replace-ext');

var path: string = '/some/dir/file.js';
var npath: string = replaceExt(path, '.coffee');
