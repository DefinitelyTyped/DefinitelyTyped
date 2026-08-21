/// <reference types="node" />

export function readFile(filePath: string, done: (err: Error | null, result: any) => void): void;
export function readFileSync(filePath: string): any;
export function register(): void;
export function updateFile(
    filePath: string,
    updater: (data: any) => any,
    done: (err: NodeJS.ErrnoException) => void,
): void;
export function updateFileSync(filePath: string, updater: (data: any) => any): void;
export function writeFile(filePath: string, data: any, done: (err: NodeJS.ErrnoException) => void): void;
export function writeFileSync(filePath: string, data: any): void;
export function writeFileSafe(filePath: string, data: any, done: (err: NodeJS.ErrnoException) => void): void;
export function writeFileSafeSync(filePath: string, data: any): void;
