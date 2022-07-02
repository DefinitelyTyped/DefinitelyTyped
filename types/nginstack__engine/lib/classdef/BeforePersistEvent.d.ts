export = BeforePersistEvent;
declare function BeforePersistEvent(...args: any[]): void;
declare class BeforePersistEvent {
    constructor(...args: any[]);
    transaction: any;
    beforeValues: any;
    afterValues: any;
}
