// Type definitions for promise-dag 1.0
// Project: https://github.com/vvvvalvalval/promise-dag#readme
// Definitions by: Sjoerd Diepen <https://github.com/OSjoerdWie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Step = string | ((...args: any[]) => PromiseLike<any>);

export type Run<P extends PromiseLike<any>> = (steps: { [name: string]: Step[]; }, required?: string[]) => { [name: string]: P; };

export interface PromiseImplementation<P extends PromiseLike<any>> {
    resolve(value: any): P;
    reject(value: any): P;
    all(values: any[]): P;
}

export const run: Run<Promise<any>>;

export function implement<P extends PromiseLike<any>>(implementation: PromiseImplementation<P>): Run<P>;
