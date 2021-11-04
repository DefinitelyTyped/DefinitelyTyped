// Type definitions for isstream 0.1
// Project: https://github.com/rvagg/isstream
// Definitions by: Matthew Peveler <https://github.com/MasterOdin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function isStream(obj: any): boolean;
declare namespace isStream {
    function isReadable(obj: any): boolean;
    function isWritable(obj: any): boolean;
    function isDuplex(obj: any): boolean;
}

export = isStream;
