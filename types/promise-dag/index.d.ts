export type Step = string | ((...args: any[]) => PromiseLike<any>);

export type Run<P extends PromiseLike<any>> = (
    steps: { [name: string]: Step[] },
    required?: string[],
) => { [name: string]: P };

export interface PromiseImplementation<P extends PromiseLike<any>> {
    resolve(value: any): P;
    reject(value: any): P;
    all(values: any[]): P;
}

export const run: Run<Promise<any>>;

export function implement<P extends PromiseLike<any>>(implementation: PromiseImplementation<P>): Run<P>;
