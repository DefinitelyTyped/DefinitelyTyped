import { JavaScriptObfuscator } from 'javascript-obfuscator';

let sourceCode1: string = JavaScriptObfuscator.obfuscate('var foo = 1;');
let sourceCode2: string = JavaScriptObfuscator.obfuscate('var foo = 1;', {
  compact: true,
    debugProtection: false,
    debugProtectionInterval: false,
    disableConsoleOutput: true,
    encodeUnicodeLiterals: false,
    reservedNames: ['^foo$'],
    rotateUnicodeArray: true,
    selfDefending: true,
    unicodeArray: true,
    unicodeArrayThreshold: 0.8,
    wrapUnicodeArrayCalls: true
});
