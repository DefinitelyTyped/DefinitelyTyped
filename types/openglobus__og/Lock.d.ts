export class Lock {
    _lock: number;
    lock(key: any): void;
    free(key: any): void;
    isFree(): boolean;
    isLocked(): boolean;
}
export class Key {
    static set _staticCounter(arg: any);
    static get _staticCounter(): any;
    _id: number;
}
