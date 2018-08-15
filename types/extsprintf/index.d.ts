// Type definitions for extsprintf 1.4
// Project: https://github.com/joyent/node-extsprintf#readme
// Definitions by: Alex Hankins <https://github.com/AlexHankins>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Stream {
    write(str: string): void;
}

export function fprintf(stream: Stream, format: string, ...args: any[]): any;
export function printf(format: string, ...args: any[]): any;
export function sprintf(format: string, ...args: any[]): string;
