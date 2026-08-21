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
    private type_;
    private timeStamp_;
    private cancelable_;
    listenerIndex: number;
    target: any;
    currentTarget: any;
    type: string;
    timeStamp: number;
    cancelable: boolean;
    immediateStopped: boolean;
    defaultPrevented: boolean;
    stopImmediatePropagation(): void;
    private immediateStopped_;
    preventDefault(): void;
    private defaultPrevented_;
}
