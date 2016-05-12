// Type definitions for redis-scripto
// Project: https://www.npmjs.org/package/redis-scripto
// Definitions by: Peter Harris <https://github.com/codeanimal>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../redis/redis.d.ts" />

declare module "redis-scripto" {
  import redis = require("redis");

  class Scripto {
    constructor(client: redis.RedisClient);

    /**
     * Load scripts using a key-value object. The key will be used as the script's name.
     */
    load(scripts: Object): void;

    /**
     * Load a single script from a file and specify the name to use.
     * 
     * The file is expected to be UTF-8 encoded.
     */
    loadFromFile(name: string, filepath: string): void;

    /**
     * Load multiple scripts from a directory, the file name without ".lua" extension is used as the script's name.
     * 
     * The file is expected to be UTF-8 encoded.
     */
    loadFromDir(scriptsDir: string): void;

    /**
     * Run a previously loaded script by name.
     * 
     * @param keys      An array of redis key names used in this lua script.
     * @param args      An array of arguments that this script will use.
     * @param callback  The callback method, which is called when the lua script has ran, with any errors or results.
     */
    run(scriptName: string, keys: string[], args: any[], callback: (err: Error, result?: any) => void): void;

    /**
     * Run a previously loaded script, forcing an eval command, rather than using the scripts SHA hash.
     * 
     * @see run
     */
    eval(scriptName: string, keys: string[], args: any[], callback: (err: Error, result?: any) => void): void;

    /**
     * Run a previously loaded script, forcing an evalsha command, rather than trying to eval the script if it has not already loaded.
     * 
     * @see run
     */
    evalSha(scriptName: string, keys: string[], args: any[], callback: (err: Error, result?: any) => void): void;
  }

  export = Scripto;
}