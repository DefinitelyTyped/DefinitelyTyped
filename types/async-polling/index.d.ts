// Type definitions for AsyncPolling
// Project: https://github.com/cGuille/async-polling
// Definitions by: Zlatko Andonovski <https://github.com/Goldsmith42/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace AsyncPolling {
    export type EventName = "run"|"start"|"error"|"result"|"end"|"schedule"|"stop";
}

declare function AsyncPolling<Result>(pollingFunc: (end: (err?: Error, result?: Result) => any) => any, delay: number): {
    run: () => any;
    stop: () => any;
    on: (eventName: AsyncPolling.EventName, listener: Function) => any;
}

export = AsyncPolling;