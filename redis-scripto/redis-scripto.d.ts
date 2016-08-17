// Type definitions for redis-scripto 0.1.3
// Project: https://github.com/arunoda/node-redis-scripto
// Definitions by: Seth Westphal <https://github.com/westy92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../redis/redis.d.ts" />

declare module "redis-scripto" {

  import * as redis from 'redis';

  class Scripto {

    constructor(redisClient: redis.RedisClient);

    eval(scriptName: string, keys: string[], args: any[], callback: (err: Error, result: any) => void): void;
    evalSha(scriptName: string, keys: string[], args: any[], callback: (err: Error, result: any) => void): void;

    load(scripts: Scripto.Scripts): void;
    loadFromDir(scriptsDir: string): void;
    loadFromFile(name: string, filepath: string): void;

    run(scriptName: string, keys: string[], args: any[], callback: (err: Error, result: any) => void): void;

  }

  namespace Scripto {

    export type Script = string;

    export interface Scripts {
      [scriptName: string]: Script;
    }
    
  }

  export = Scripto;

}
