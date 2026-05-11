import { ObfuscatorOptions } from "javascript-obfuscator";
import { Transform } from "readable-stream";

declare function gulpJavaScriptObfuscator(options?: ObfuscatorOptions): Transform;

export = gulpJavaScriptObfuscator;
