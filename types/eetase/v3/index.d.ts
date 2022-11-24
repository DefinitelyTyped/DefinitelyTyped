// Type definitions for eetase 3.0
// Project: https://github.com/SocketCluster/eetase
// Definitions by: Daniel Rose <https://github.com/DanielRose>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

import AsyncStreamEmitter = require('async-stream-emitter');

declare function eetase<T>(object: T): AsyncStreamEmitter<any> & T;

export = eetase;
