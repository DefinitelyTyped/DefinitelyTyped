// This file describes helper functions to create definitions for EventEmitter
// prototype overloads.

import { flattenArgs } from "./utils";

/**
 * Information needed to generate definitions.
 */
export interface Event {
    comment?: string[];
    name: string;
    args: Array<{
        name: string,
        type: string,
    }>;
}

const createEmitStatement = (event: Event): string[] => {
    const argsStr = event.args.map(arg => `${arg.name}: ${arg.type}`).join(", ");
    return [
        `emit(event: "${event.name}"${event.args.length > 0 ? ", " : ""}${argsStr}): boolean;`,
    ];
};

const createEmitBlock = (events: Event[]): string[] => {
    return [
        `emit(event: string | symbol, ...args: any[]): boolean;`,
        ...events.map(createEmitStatement).reduce(flattenArgs(), []),
    ];
};

const createListenerFn = (fnName: string) => (event: Event): string[] => {
    const argsStr = event.args.map(arg => `${arg.name}: ${arg.type}`).join(", ");
    return [
        ...event.comment && event.comment.length > 0 ? [""] : [],
        ...event.comment || [],
        `${fnName}(event: "${event.name}", listener: (${argsStr}) => void): this;`,
        ...event.comment && event.comment.length > 0 ? [""] : [],
    ];
};

const createListenerBlockFn = (fnName: string) => (events: Event[]): string[] => {
    return [
        `${fnName}(event: string, listener: (...args: any[]) => void): this;`,
        ...events.map(createListenerFn(fnName)).reduce(flattenArgs(), []),
    ];
};

/**
 * Given an array of Event objects, return a set of type definitions for
 * overloads of addListener, emit, on, once, prependListener, and
 * prependOnceListener as an array of lines.
 * @param events The array of Event objects to transform into type definitions.
 */
export const createListeners = (events: Event[]): string[] => {
    return [
        ...createListenerBlockFn("addListener")(events),
        "",
        ...createEmitBlock(events),
        "",
        ...createListenerBlockFn("on")(events),
        "",
        ...createListenerBlockFn("once")(events),
        "",
        ...createListenerBlockFn("prependListener")(events),
        "",
        ...createListenerBlockFn("prependOnceListener")(events),
    ].reduce((acc, next, index, arr) => {
        // removes trailing and consecutive empty lines
        const isLast = index === arr.length - 1;
        const followsEmptyLine = acc.length > 0 && acc[acc.length - 1] === "";
        if ((isLast || followsEmptyLine) && next === "") {
            return acc;
        } else {
            acc.push(next);
            return acc;
        }
    }, []);
};
