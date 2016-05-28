/// <reference path="javascript-obfuscator" />

import { JavaScriptObfuscator } from 'javascript-obfuscator';

let sourceCode1: string = JavaScriptObfuscator.obfuscate('var foo = 1;');
let sourceCode2: string = JavaScriptObfuscator.obfuscate('var foo = 1;', {
  rotateUnicodeArray: false
});