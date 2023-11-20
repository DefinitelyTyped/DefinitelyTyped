export type Callback = (err: Error, stdout: string, stderr: string) => any;
export function compile(src: string, callback: Callback): void;
export function compile(src: string, options: { [k: string]: string | string[] }, callback: Callback): void;
