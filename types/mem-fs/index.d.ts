// Type definitions for mem-fs 1.1
// Project: https://github.com/sboudrias/mem-fs
// Definitions by: My Food Bag <https://github.com/MyFoodBag>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from 'events';
import { Transform } from 'stream';
import * as File from 'vinyl';

export interface Store extends EventEmitter {
    get: (filepath: string) => File;
    add: (file: File) => this;
    each: (callback: (file: File, index: number) => void) => this;
    stream: () => Transform;
}

export function create(): Store;

export namespace memFs {
}
