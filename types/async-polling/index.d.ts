declare namespace AsyncPolling {
    export type EventName = "run" | "start" | "error" | "result" | "end" | "schedule" | "stop";
}

declare function AsyncPolling<Result>(
    pollingFunc: (end: (err?: Error, result?: Result) => any) => any,
    delay: number,
): {
    run: () => any;
    stop: () => any;
    on: (eventName: AsyncPolling.EventName, listener: Function) => any;
};

export = AsyncPolling;
