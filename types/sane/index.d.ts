/// <reference types="node" />
import { EventEmitter } from "events";
import { Stats } from "fs";

export = sane;

declare function sane(dir: string, options?: sane.Options): sane.Watcher;

declare namespace sane {
    interface Options {
        glob?: string | string[] | undefined;
        poll?: boolean | undefined;
        watchman?: boolean | undefined;
        fsevents?: boolean | undefined;
        watcher?: string | undefined;
        dot?: boolean | undefined;
        ignored?: AnymatchMatcher | AnymatchMatcher[] | undefined;
    }

    const FSEventsWatcher: typeof SaneWatcher;
    const NodeWatcher: typeof SaneWatcher;
    const PollWatcher: typeof SaneWatcher;
    const WatchmanWatcher: typeof SaneWatcher;

    type Watcher = SaneWatcher;

    type AnymatchMatcher = string | RegExp | ((...testStrings: string[]) => boolean);
}

declare class SaneWatcher extends EventEmitter {
    readonly globs: string[];
    readonly dot: boolean;
    readonly ignored: sane.AnymatchMatcher | sane.AnymatchMatcher[];
    readonly hasIgnore: boolean;
    readonly root: string;

    constructor(dir: string, options?: sane.Options);
    close(callback?: () => void): void;

    addListener(event: "ready", listener: () => void): this;
    addListener(event: "error", listener: (error: Error) => void): this;
    addListener(
        event: "all",
        listener: (eventType: AllEventType, path: string, root: string, stat?: Stats) => void,
    ): this;
    addListener(event: "add" | "change", listener: (path: string, root: string, stat: Stats) => void): this;
    addListener(event: "delete", listener: (path: string, root: string) => void): this;
    on(event: "ready", listener: () => void): this;
    on(event: "error", listener: (error: Error) => void): this;
    on(event: "all", listener: (eventType: AllEventType, path: string, root: string, stat?: Stats) => void): this;
    on(event: "add" | "change", listener: (path: string, root: string, stat: Stats) => void): this;
    on(event: "delete", listener: (path: string, root: string) => void): this;
    once(event: "ready", listener: () => void): this;
    once(event: "error", listener: (error: Error) => void): this;
    once(event: "all", listener: (eventType: AllEventType, path: string, root: string, stat?: Stats) => void): this;
    once(event: "add" | "change", listener: (path: string, root: string, stat: Stats) => void): this;
    once(event: "delete", listener: (path: string, root: string) => void): this;
    prependListener(event: "ready", listener: () => void): this;
    prependListener(event: "error", listener: (error: Error) => void): this;
    prependListener(
        event: "all",
        listener: (eventType: AllEventType, path: string, root: string, stat?: Stats) => void,
    ): this;
    prependListener(event: "add" | "change", listener: (path: string, root: string, stat: Stats) => void): this;
    prependListener(event: "delete", listener: (path: string, root: string) => void): this;
    prependOnceListener(event: "ready", listener: () => void): this;
    prependOnceListener(event: "error", listener: (error: Error) => void): this;
    prependOnceListener(
        event: "all",
        listener: (eventType: AllEventType, path: string, root: string, stat?: Stats) => void,
    ): this;
    prependOnceListener(event: "add" | "change", listener: (path: string, root: string, stat: Stats) => void): this;
    prependOnceListener(event: "delete", listener: (path: string, root: string) => void): this;
    removeListener(event: "ready", listener: () => void): this;
    removeListener(event: "error", listener: (error: Error) => void): this;
    removeListener(
        event: "all",
        listener: (eventType: AllEventType, path: string, root: string, stat?: Stats) => void,
    ): this;
    removeListener(event: "add" | "change", listener: (path: string, root: string, stat: Stats) => void): this;
    removeListener(event: "delete", listener: (path: string, root: string) => void): this;
    removeAllListeners(event?: EventType): this;
    // tslint:disable-next-line ban-types
    listeners(event: EventType): Function[];
    emit(event: "ready"): boolean;
    emit(event: "error", error: Error): boolean;
    emit(event: "all", eventType: AllEventType, path: string, root: string, stat?: Stats): boolean;
    emit(event: "add" | "change", path: string, root: string, stat: Stats): boolean;
    emit(event: "delete", path: string, root: string): boolean;
    eventNames(): EventType[];
    listenerCount(type: EventType): number;
}

type EventType = "ready" | "error" | "all" | AllEventType;
type AllEventType = "add" | "change" | "delete";
