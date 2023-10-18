export function fromCallback(fn: (...args: any[]) => any): (...args: any[]) => Promise<any> | void;
export function fromPromise(fn: (...args: any[]) => any): (...args: any[]) => Promise<any> | void;
