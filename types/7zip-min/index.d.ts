// Type definitions for 7zip-min 1.3
// Project: https://github.com/onikienko/7zip-min
// Definitions by: Tanandara <https://github.com/Tanandara>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

export function unpack(pathToArchive: string, whereToUnpack: string, errorCallback: (err: any) => void): void;
export function unpack(pathToArchive: string, errorCallback: (err: any) => void): void;
export function pack(pathToDirOrFile: string, pathToArchive: string, errorCallback: (err: any) => void): void;
export function list(pathToArchive: string, callback: (err: any, result: Result[]) => void): void;
export function cmd(command: string[], errorCallback: (err: any) => void): void;
export interface Result {
    name: string;
    date: string;
    time: string;
    attr: string;
    size: string;
    compressed: string;
    dateTime: string;
    crc: string;
    method: string;
    block: string;
    encrypted: string;
}
