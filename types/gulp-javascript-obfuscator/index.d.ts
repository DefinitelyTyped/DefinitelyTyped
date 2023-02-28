// Type definitions for gulp-javascript-obfuscator 1.1
// Project: https://github.com/javascript-obfuscator/gulp-javascript-obfuscator
// Definitions by: Adam Thompson-Sharpe <https://github.com/MysteryBlokHed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { Transform } from 'readable-stream';
import { ObfuscatorOptions } from 'javascript-obfuscator';

declare function gulpJavaScriptObfuscator(options?: ObfuscatorOptions): Transform;

export = gulpJavaScriptObfuscator;
