// Type definitions for formdata 0.10
// Project: https://github.com/node-file-api/FormData
// Definitions by: Ciarán Ingle <https://github.com/inglec-arista>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';

declare class FormData {
    nodeChunkedEncoding: boolean;

    boundary?: string;
    type?: string;

    append(key: keyof any, value: unknown): Error | undefined;
    getContentType(): string;
    serialize(intendedType?: string): EventEmitter | undefined;
    setNodeChunkedEncoding(val: boolean): void;
}

export = FormData;
