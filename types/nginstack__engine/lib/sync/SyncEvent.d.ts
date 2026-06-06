export = SyncEvent;
declare function SyncEvent(
    eventName: string,
    opt_manualReset?: boolean,
    opt_osScope?: boolean
): void;
declare class SyncEvent {
    constructor(eventName: string, opt_manualReset?: boolean, opt_osScope?: boolean);
    setEvent(): void;
    resetEvent(): void;
    wait(opt_timeout?: number): boolean;
}
