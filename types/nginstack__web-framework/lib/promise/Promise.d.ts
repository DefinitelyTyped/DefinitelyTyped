export = Promise;
declare function Promise(executor: ((arg0: () => any, arg1: () => any) => any) | null): void;
declare class Promise {
    constructor(executor: ((arg0: () => any, arg1: () => any) => any) | null);
    listeners_: Array<{
        onFulfilled: (arg0: any) => any;
        onRejected: (arg0: any) => any;
        promise: Promise;
    }>;
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
    const STATE_PENDING_: number;
    const STATE_FULFILLED_: number;
    const STATE_REJECTED_: number;
    function resolveListener_(
        listener: {
            onFulfilled: (arg0: any) => any;
            onRejected: (arg0: any) => any;
            promise: Promise;
        },
        value: any
    ): void;
    function rejectListener_(
        listener: {
            onFulfilled: (arg0: any) => any;
            onRejected: (arg0: any) => any;
            promise: Promise;
        },
        reason: any
    ): void;
    function resolve(value: any): Promise;
    function reject(reason: any): Promise;
    function all(promises: Promise[]): Promise;
    const eventQueue_: Array<() => any>;
    function processEventQueue(): void;
    function soon_(fn: () => any): void;
}
