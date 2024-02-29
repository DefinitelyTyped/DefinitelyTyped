import AsyncStreamEmitter = require("async-stream-emitter");

declare function eetase<T>(object: T): AsyncStreamEmitter<any> & T;

export = eetase;
