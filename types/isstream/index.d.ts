// Type definitions for isstream 0.1
// Project: https://github.com/rvagg/isstream
// Definitions by: Matthew Peveler <https://github.com/MasterOdin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const isStream: {
    (obj: any): boolean;
    isReadable(obj: any): boolean;
    isWritable(obj: any): boolean;
    isDuplex(obj: any): boolean;
};

export = isStream;
