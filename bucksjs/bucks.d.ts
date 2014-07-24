// Type definitions for bucks.js 0.8.3
// Project: https://github.com/CyberAgent/bucks.js
// Definitions by: Shunsuke Ohtani <https://github.com/zaneli>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Bucks {

  interface BucksStatic {

    VERSION: string;

    DEBUG: boolean;

    running: Bucks[];

    living: Bucks[];

    new (): Bucks;

    onError(onError:(err:Error, bucks:Bucks)=>any): void;
  }

  interface Bucks {

    add(task: Task): Bucks;

    then(onSuccess: (res:any, next?:Next)=>any): Bucks;

    empty(): Bucks;

    error(onError: (err:Error, res:any, next?:Next)=>any): Bucks;

    parallel(tasks: Task[]): Bucks;

    waterfall(tasks: Task[]): Bucks;

    delay(ms: number): Bucks;

    dispose(): void;

    destroy(err: Error): Bucks;

    end(callback?: (err?:Error, res?:any)=>any, errback?: (err:Error)=>any): void;
  }

  interface Task {
    (err?: Error, res?: any, next?: Next): any;
  }

  interface Next {
    (err?: Error, res?: any): any;
  }
}

declare var Bucks: Bucks.BucksStatic;
