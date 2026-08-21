/// <reference types="node"/>

export = detectCharacterEncoding;

declare function detectCharacterEncoding(buf: Buffer): detectCharacterEncoding.Result | null;

declare namespace detectCharacterEncoding {
    interface Result {
        encoding: string;
        confidence: number;
    }
}
