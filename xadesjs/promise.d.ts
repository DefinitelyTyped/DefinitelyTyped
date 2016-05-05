interface PromiseFunc {
    (resolve: (...args: any[]) => void, reject: (...args: any[]) => void): void;
}

declare class Promise {
    constructor(func: PromiseFunc);

    then(resolve: (...args: any[]) => any): Promise;
    then(resolve: (...args: any[]) => any, reject: (...args: any[]) => any): Promise;
    catch(reject: (...args: any[]) => any): void;

    static resolve(...args: any[]): Promise;
    static reject(...args: any[]): Promise;
}