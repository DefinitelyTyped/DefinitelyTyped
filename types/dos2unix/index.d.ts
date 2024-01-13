import { EventEmitter } from "events";
import { IOptions as GlobOptions } from "glob";

interface Options {
    glob?: GlobOptions | undefined;
    maxConcurrency?: number | undefined;
}

interface Stats {
    error: number;
    fix: number;
    skip: number;
}

interface FileData {
    file: string;
}

interface MessageData extends FileData {
    message: string;
}

declare class Dos2UnixConverter extends EventEmitter {
    constructor(defaultOptions?: Options);
    process(globPatterns: string[], options?: Options): void;

    on(event: "end", cb: (stats: Stats) => void): this;
    on(event: "error", cb: (error?: Error) => void): this;
    on(event: "convert.error" | "processing.error" | "processing.skip", cb: (data: MessageData) => void): this;
    on(
        event: "convert.start" | "convert.end" | "processing.start" | "processing.end",
        cb: (data: FileData) => void,
    ): this;
    on(event: "start", cb: () => void): this;
}

export { Dos2UnixConverter as dos2unix, Options };
