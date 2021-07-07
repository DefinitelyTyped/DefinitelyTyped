// Type definitions for node-netstat 1.8
// Project: https://github.com/danielkrainas/node-netstat#readme
// Definitions by: Nick Glazer <https://github.com/nickglazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = nodeNetstat;

declare function nodeNetstat(
    options: nodeNetstat.Options,
    callback: nodeNetstat.LineHandler,
): nodeNetstat.ActivatorResult;

declare namespace nodeNetstat {
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

    type LineHandler = (item: ParsedItem) => boolean | void;
    type RecursivePartial<T> = {
        [P in keyof T]?: RecursivePartial<T[P]>;
    };

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

    interface ParsedItem {
        protocol: string;
        local: Address;
        remote: Address;
        state: State;
        pid: number;
        processName?: string;
    }

    interface RawItem {
        protocol: string;
        local: string;
        remote: string;
        state: string;
        pid: string;
        processName?: string;
    }

    type Filter = RecursivePartial<ParsedItem>;

    interface ParserFactoryOptions {
        parseName?: boolean;
    }
    type ParserFactory = (options?: ParserFactoryOptions) => Parser;

    type Parser = (line: string, callback: LineHandler) => boolean | void;

    const commands: Commands;
    const version: string;

    namespace filters {
        function conditional(callback: LineHandler, conditions: Filter): boolean | void;
        function limit(callback: LineHandler, limit: number): boolean | void;
    }

    namespace parserFactories {
        const darwin: ParserFactory;
        const linux: ParserFactory;
        const win32: ParserFactory;
    }

    namespace parsers {
        const darwin: Parser;
        const linux: Parser;
        const win32: Parser;
    }

    namespace utils {
        function emitLines(stream: NodeJS.ReadableStream): void;
        function noop(): void;
        function normalizeValues(item: RawItem): ParsedItem;
        function parseAddress(raw: string): Address;
        function parseLines(source: string): string[];
    }
}
