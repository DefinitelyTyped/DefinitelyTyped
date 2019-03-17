// Type definitions for bser 2.0
// Project: https://facebook.github.io/watchman/docs/bser.html
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Accumulator {
    constructor(initsize: any);

    append(buf: any): void;

    assertReadableSize(size: any): void;

    peekDouble(): any;

    peekInt(size: any): any;

    peekString(size: any): any;

    readAdvance(size: any): void;

    readAvail(): any;

    readDouble(): any;

    readInt(bytes: any): any;

    readString(size: any): any;

    reserve(size: any): void;

    writeAvail(): any;

    writeByte(value: any): void;

    writeDouble(value: any): void;

    writeInt(value: any, size: any): void;

}

export class BunserBuf {
    constructor();

    append(buf: any, synchronous: any): any;

    decodeAny(): any;

    decodeArray(): any;

    decodeInt(relaxSizeAsserts: any): any;

    decodeObject(): any;

    decodeString(): any;

    decodeTemplate(): any;

    expectCode(expected: any): void;

    process(synchronous: any): any;

    processLater(): void;

    raise(reason: any): void;

}

export function dumpToBuffer(val: any): any;

export function loadFromBuffer(input: any): any;

export namespace Accumulator {
    namespace prototype {
        function append(buf: any): void;

        function assertReadableSize(size: any): void;

        function peekDouble(): any;

        function peekInt(size: any): any;

        function peekString(size: any): any;

        function readAdvance(size: any): void;

        function readAvail(): any;

        function readDouble(): any;

        function readInt(bytes: any): any;

        function readString(size: any): any;

        function reserve(size: any): void;

        function writeAvail(): any;

        function writeByte(value: any): void;

        function writeDouble(value: any): void;

        function writeInt(value: any, size: any): void;

        namespace append {
            const prototype: {
            };

        }

        namespace assertReadableSize {
            const prototype: {
            };

        }

        namespace peekDouble {
            const prototype: {
            };

        }

        namespace peekInt {
            const prototype: {
            };

        }

        namespace peekString {
            const prototype: {
            };

        }

        namespace readAdvance {
            const prototype: {
            };

        }

        namespace readAvail {
            const prototype: {
            };

        }

        namespace readDouble {
            const prototype: {
            };

        }

        namespace readInt {
            const prototype: {
            };

        }

        namespace readString {
            const prototype: {
            };

        }

        namespace reserve {
            const prototype: {
            };

        }

        namespace writeAvail {
            const prototype: {
            };

        }

        namespace writeByte {
            const prototype: {
            };

        }

        namespace writeDouble {
            const prototype: {
            };

        }

        namespace writeInt {
            const prototype: {
            };

        }

    }

}

export namespace BunserBuf {
    namespace prototype {
        function addListener(type: any, listener: any): any;

        function append(buf: any, synchronous: any): any;

        function decodeAny(): any;

        function decodeArray(): any;

        function decodeInt(relaxSizeAsserts: any): any;

        function decodeObject(): any;

        function decodeString(): any;

        function decodeTemplate(): any;

        function emit(type: any, args: any): any;

        function eventNames(): any;

        function expectCode(expected: any): void;

        function getMaxListeners(): any;

        function listenerCount(type: any): any;

        function listeners(type: any): any;

        function off(type: any, listener: any): any;

        function on(type: any, listener: any): any;

        function once(type: any, listener: any): any;

        function prependListener(type: any, listener: any): any;

        function prependOnceListener(type: any, listener: any): any;

        function process(synchronous: any): any;

        function processLater(): void;

        function raise(reason: any): void;

        function rawListeners(type: any): any;

        function removeAllListeners(type: any, ...args: any[]): any;

        function removeListener(type: any, listener: any): any;

        function setMaxListeners(n: any): any;

        namespace addListener {
            const prototype: {
            };

        }

        namespace append {
            const prototype: {
            };

        }

        namespace decodeAny {
            const prototype: {
            };

        }

        namespace decodeArray {
            const prototype: {
            };

        }

        namespace decodeInt {
            const prototype: {
            };

        }

        namespace decodeObject {
            const prototype: {
            };

        }

        namespace decodeString {
            const prototype: {
            };

        }

        namespace decodeTemplate {
            const prototype: {
            };

        }

        namespace emit {
            const prototype: {
            };

        }

        namespace eventNames {
            const prototype: {
            };

        }

        namespace expectCode {
            const prototype: {
            };

        }

        namespace getMaxListeners {
            const prototype: {
            };

        }

        namespace listenerCount {
            const prototype: {
            };

        }

        namespace listeners {
            const prototype: {
            };

        }

        namespace off {
            const prototype: {
            };

        }

        namespace on {
            const prototype: {
            };

        }

        namespace once {
            const prototype: {
            };

        }

        namespace prependListener {
            const prototype: {
            };

        }

        namespace prependOnceListener {
            const prototype: {
            };

        }

        namespace process {
            const prototype: {
            };

        }

        namespace processLater {
            const prototype: {
            };

        }

        namespace raise {
            const prototype: {
            };

        }

        namespace rawListeners {
            const prototype: {
            };

        }

        namespace removeAllListeners {
            const prototype: {
            };

        }

        namespace removeListener {
            const prototype: {
            };

        }

        namespace setMaxListeners {
            const prototype: {
            };

        }

    }

}

export namespace dumpToBuffer {
    const prototype: {
    };

}

export namespace loadFromBuffer {
    const prototype: {
    };

}

