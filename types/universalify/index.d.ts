// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export function fromCallback(fn: (...args: any[]) => any): (...args: any[]) => Promise<any> | void;
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export function fromPromise(fn: (...args: any[]) => any): (...args: any[]) => Promise<any> | void;
