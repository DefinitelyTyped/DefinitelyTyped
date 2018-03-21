// Type definitions for mem-fs 1.1
// Project: https://github.com/SBoudrias/mem-fs
// Definitions by: My Food Bag <https://github.com/MyFoodBag>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import events = require('events');
import stream = require('stream');
import File = require('vinyl');

declare namespace FileSystem {
    interface Store extends events.EventEmitter {
        add: (file: File, content: string) => void;
        each: (callback: (file: File, index: number) => void) => void;
        get: (filepath: string) => File;
        stream: () => stream.Transform;
    }

    export function create(): Store;
}

export = FileSystem;
