// Type definitions for mem-fs 1.1
// Project: https://github.com/sboudrias/mem-fs#readme
// Definitions by: My Food Bag <https://github.com/MyFoodBag>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import events = require('events');
import stream = require('stream');
import File = require('vinyl');

export function create(...args: any[]): create.Store;

export namespace create {
    interface Store extends events.EventEmitter {
        add: (file: File, content: string) => void;
        each: (callback: (file: File, index: number) => void) => void;
        get: (filepath: string) => File;
        stream: () => stream.Transform;
    }

    const prototype: {
    };
}
