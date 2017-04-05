/**
 * WebAssembly v1 (MVP) declaration file for TypeScript
 * Definitions by: 01alchemist (https://twitter.com/01alchemist)
 *                 and Wink Saville <wink@saville.com>
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
