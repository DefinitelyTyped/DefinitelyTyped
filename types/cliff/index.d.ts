export function inspect(obj: any): string;
export function stringifyRows(rows: string[][], colors?: string[]): string;
export function stringifyObjectRows(rows: Array<{}>, keys: string[], colors?: string[]): string;
export function putRows(level: string, rows: string[][], colors?: string[]): void;
export function putObjectRows(level: string, rows: Array<{}>, keys: string[], colors?: string[]): void;
export function putObject(level: string, object: any, rewriters?: any, padding?: any): void;
