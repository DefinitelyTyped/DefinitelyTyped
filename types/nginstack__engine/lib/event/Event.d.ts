export = Event;
declare function Event(
    type: string,
    opt_options?: {
        cancelable: boolean;
    }
): void;
declare class Event {
    constructor(
        type: string,
        opt_options?: {
            cancelable: boolean;
        }
    );
    type_: string;
    timeStamp_: number;
    cancelable_: boolean;
    listenerIndex: number;
    target: any;
    currentTarget: any;
    type: string;
    timeStamp: number;
    cancelable: boolean;
    immediateStopped: boolean;
    defaultPrevented: boolean;
    stopImmediatePropagation(): void;
    immediateStopped_: boolean;
    preventDefault(): void;
    defaultPrevented_: boolean;
}
