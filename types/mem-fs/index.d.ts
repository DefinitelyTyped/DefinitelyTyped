// Type definitions for mem-fs 1.1
// Project: https://github.com/sboudrias/mem-fs
// Definitions by: My Food Bag <https://github.com/MyFoodBag>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from 'events';
import { Transform } from 'stream';
import * as File from 'vinyl';

export function create(...args: any[]): memFs.Store;

export namespace memFs {
    interface Store extends EventEmitter {
        add: (file: File, content: string) => void;
        each: (callback: (file: File, index: number) => void) => void;
        get: (filepath: string) => File;
        stream: () => Transform;
    }
}
