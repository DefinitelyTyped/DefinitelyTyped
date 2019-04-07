// Type definitions for isstream 0.1
// Project: https://github.com/rvagg/isstream
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = isstream;

declare function isstream(obj: any): any;

declare namespace isstream {
    const prototype: {
    };

    function isDuplex(obj: any): any;

    function isReadable(obj: any): any;

    function isWritable(obj: any): any;

    namespace isDuplex {
        const prototype: {
        };

    }

    namespace isReadable {
        const prototype: {
        };

    }

    namespace isWritable {
        const prototype: {
        };

    }

}

