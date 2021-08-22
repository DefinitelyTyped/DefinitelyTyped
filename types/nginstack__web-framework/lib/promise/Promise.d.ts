export = Promise;
declare function Promise(executor: ((arg0: () => any, arg1: () => any) => any) | null): void;
declare class Promise {
    constructor(executor: ((arg0: () => any, arg1: () => any) => any) | null);
    private listeners_;
    private state_;
    private value_;
    private logger_;
    private resolve_;
    private reject_;
    then(onFulfilled: (arg0: any) => any, onRejected: (arg0: any) => any): Promise;
    catch(onRejected: (arg0: any) => any): Promise;
    finally(handler: (arg0: any) => any): Promise;
}
declare namespace Promise {
    function resolve(value: any): Promise;
    function reject(reason: any): Promise;
    function all(promises: Promise[]): Promise;
    function processEventQueue(): void;
}
