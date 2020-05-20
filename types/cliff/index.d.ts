// Type definitions for cliff 0.1.10
// Project: https://github.com/flatiron/cliff
// Definitions by: bryn austin bellomy <https://github.com/brynbellomy>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

export function inspect(obj: any): string;
export function stringifyRows(rows: string[][], colors?: string[]): string;
export function stringifyObjectRows(rows: Array<{}>, keys: string[], colors?: string[]): string;
export function putRows(level: string, rows: string[][], colors?: string[]): void;
export function putObjectRows(level: string, rows: Array<{}>, keys: string[], colors?: string[]): void;
export function putObject(level: string, object: any, rewriters?: any, padding?: any): void;
