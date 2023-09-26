import { EventEmitter } from "events";

declare class FormData {
    nodeChunkedEncoding: boolean;

    boundary?: string | undefined;
    type?: string | undefined;

    append(key: keyof any, value: unknown): Error | undefined;
    getContentType(): string;
    serialize(intendedType?: string): EventEmitter | undefined;
    setNodeChunkedEncoding(val: boolean): void;
}

export = FormData;
