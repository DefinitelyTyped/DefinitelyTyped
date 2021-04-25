// Type definitions for node-netstat 1.8
// Project: https://github.com/danielkrainas/node-netstat#readme
// Definitions by: Nick Glazer <https://github.com/nickglazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace NodeNetstat {
    type Platforms = "darwin" | "linux" | "win32";

    interface Command {
        cmd: string;
        args: string[];
    }
    type Commands = {
        [platform in Platforms]: Command;
    };

    type State =
        | "SYN_SEND"
        | "SYN_RECEIVED"
        | "ESTABLISHED"
        | "LISTEN"
        | "FIN_WAIT_1"
        | "TIMED_WAIT"
        | "CLOSE_WAIT"
        | "FIN_WAIT_2"
        | "LAST_ACK"
        | "CLOSED";

    interface Address {
        address: string | null;
        port: number | null;
    }

    interface ParsedItem {
        protocol: string;
        local: Address;
        remote: Address;
        state: State;
        pid: number;
        processName?: string;
    }

    type LineHandler = (item: ParsedItem) => boolean | void;

    type RecursivePartial<T> = {
        [P in keyof T]?: RecursivePartial<T[P]>;
    };

    type Filter = RecursivePartial<ParsedItem>;
    interface Filters {
        limit(callback: LineHandler, limit: number): boolean | void;
        conditional(callback: LineHandler, conditions: Filter): boolean | void;
    }

    interface Options {
        sync?: boolean;
        done?: (error?: string) => void;
        platform?: string;
        limit?: number;
        filter?: Filter;
        watch?: boolean;
    }

    type SyncResult = any;
    interface AsyncResult {
        cancel: () => void;
    }
    type ActivatorResult = AsyncResult | SyncResult;

    interface ParserFactoryOptions {
        parseName?: boolean;
    }
    type Parser = (line: string, callback: LineHandler) => boolean | void;
    type ParserFactory = (options?: ParserFactoryOptions) => Parser;
    type ParserFactories = {
        [platform in Platforms]: ParserFactory;
    };
    type Parsers = {
        [platform in Platforms]: Parser;
    };

    interface RawItem {
        protocol: string;
        local: string;
        remote: string;
        state: string;
        pid: string;
        processName?: string;
    }

    interface Utils {
        noop: () => void;
        normalizeValues: (item: RawItem) => ParsedItem;
        emitLines: (stream: NodeJS.ReadableStream) => void;
        parseAddress: (raw: string) => Address;
    }

    const commands: Commands;
    const filters: Filters;
    const parsers: Parsers;
    const parserFactories: ParserFactories;
    const utils: Utils;
    const version: string;
}

declare function NodeNetstat(
    options: NodeNetstat.Options,
    callback: NodeNetstat.LineHandler,
): NodeNetstat.ActivatorResult;
export = NodeNetstat;
