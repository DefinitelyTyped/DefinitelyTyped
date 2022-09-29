// Type definitions for eetase 4.0
// Project: https://github.com/SocketCluster/eetase
// Definitions by: Daniel Rose <https://github.com/DanielRose>
//                 Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import AsyncStreamEmitter = require('async-stream-emitter');

declare function eetase<T>(object: T): AsyncStreamEmitter<any> & T;

export = eetase;
