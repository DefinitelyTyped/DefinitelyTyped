// Type definitions for form-data
// Project: https://github.com/felixge/node-form-data
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>, Leon Yu <https://github.com/leonyu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/form-data.d.ts

export = FormData;

declare class FormData {
    append(key: string, value: any, options?: any): void;
    getHeaders(): FormData.Dictionary<string>;
    // TODO expand pipe
    pipe(to: any): any;
    submit(params: string | Object, callback: (error: any, response: any) => void): any;
    getBoundary(): string;
}

declare namespace FormData {
    interface Dictionary<T> {
        [key: string]: T;
    }
}
