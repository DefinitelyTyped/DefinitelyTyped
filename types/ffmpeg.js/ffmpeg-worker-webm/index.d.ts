// Project: https://github.com/Kagami/ffmpeg.js
// Definitions by: Vladimir Grenaderov <https://github.com/VladimirGrenaderov>,
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {Worker as Interfaces} from '../index';

declare namespace Worker {
    export import Data = Interfaces.Data;
    export import PostMessageOptions = Interfaces.PostMessageOptions;
    export import OnMessageOptions = Interfaces.OnMessageOptions;
}

declare class Worker {
    constructor(someParam?: string);

    onmessage(opts: Worker.OnMessageOptions): void;
    postMessage(opts: Worker.PostMessageOptions): void;
    terminate(): void;
}

export = Worker;
