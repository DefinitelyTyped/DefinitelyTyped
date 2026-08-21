export = BeforePersistEvent;
declare function BeforePersistEvent(...args: any[]): void;
declare class BeforePersistEvent {
    constructor(...args: any[]);
    transaction: Transaction;
    beforeValues: any;
    afterValues: any;
}
declare namespace BeforePersistEvent {
    export { Transaction };
}
type Transaction = import('../dataset/Transaction');
