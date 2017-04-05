// Type definitions for WebAssembly v1 (MVP)
// Project: https://github.com/winksaville/test-webassembly-js-ts
// Definitions by: 01alchemist <https://twitter.com/01alchemist>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * WebAssembly v1 (MVP) declaration file for TypeScript
 *
 * Authors: 01alchemist <https://twitter.com/01alchemist>
 *          and Wink Saville <wink@saville.com>
 *
 * ## Installation
 * ```
 * npm install @types/webassembly-js-api --save-dev
 * ```
 *
 * The WebAssembly namespace will now be available to your code TypeScript code.
 * See [WebAssembly JS API](http://webassembly.org/getting-started/js-api/) and the contents of
 * @types/webassembly-js-api/index.d.ts for more details.
 *
 * Do not use an `import * as WebAssembly from "webassembly-js-api"` as this will cause
 * the `tsc` to emit a `require` statement for the WebAssembly module which doesn't exist as
 * WebAssembly is part of the global namespace.
 *
 * Instead use a `///<reference path="./node_modules/@types/webassembly-js-api"/>` statement.
 * Note: this `<reference path="..."/>` maybe optional, but YMMV.
 */

declare namespace WebAssembly {
    /**
     * WebAssembly.Module
     */
    class Module {
        constructor(bufferSource: ArrayBuffer | Uint8Array);
        static customSections(module: Module, sectionName: string): ArrayBuffer[];
        static exports(module: Module): Array<{
            name: string;
            kind: string;
        }>;
        static imports(module: Module): Array<{
            module: string;
            name: string;
            kind: string;
        }>;
    }

    /**
     * WebAssembly.Instance
     */
    class Instance {
        readonly exports: any;
        constructor(module: Module, importObject?: any);
    }

    /**
     * WebAssembly.Memory
     * Note: A WebAssembly page has a constant size of 65,536 bytes, i.e., 64KiB.
     */
    interface MemoryDescriptor {
        initial: number;
        maximum?: number;
    }

    class Memory {
        readonly buffer: ArrayBuffer;
        constructor(memoryDescriptor: MemoryDescriptor);
        grow(numPages: number): number;
    }

    /**
     * WebAssembly.Table
     */
    interface TableDescriptor {
        element: "anyfunc";
        initial: number;
        maximum?: number;
    }

    class Table {
        readonly length: number;
        constructor(tableDescriptor: TableDescriptor);
        get(index: number): (args: any[]) => any;
        grow(numElements: number): number;
        set(index: number, value: (args: any[]) => any): void;
    }

    /**
     * Errors
     */
    class CompileError extends Error {
        readonly fileName: string;
        readonly lineNumber: string;
        readonly columnNumber: string;
        constructor(message?: string, fileName?: string, lineNumber?: number);
        toString(): string;
    }

    class LinkError extends Error {
        readonly fileName: string;
        readonly lineNumber: string;
        readonly columnNumber: string;
        constructor(message?: string, fileName?: string, lineNumber?: number);
        toString(): string;
    }

    class RuntimeError extends Error {
        readonly fileName: string;
        readonly lineNumber: string;
        readonly columnNumber: string;
        constructor(message?: string, fileName?: string, lineNumber?: number);
        toString(): string;
    }

    function compile(bufferSource: ArrayBuffer | Uint8Array): Promise<Module>;

    interface ResultObject {
        module: Module;
        instance: Instance;
    }

    function instantiate(bufferSource: ArrayBuffer | Uint8Array, importObject?: any): Promise<ResultObject>;
    function instantiate(module: Module, importObject?: any): Promise<Instance>;

    function validate(bufferSource: ArrayBuffer | Uint8Array): boolean;
}
