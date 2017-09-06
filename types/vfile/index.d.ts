// Type definitions for vfile 2.2
// Project: https://github.com/vfile/vfile#readme
// Definitions by: Junyoung Choi <https://github.com/rokt33r>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace vfile {
    type Contents = string | Buffer;

    interface Point {
        line: number;
        column: number;
    }

    interface Position {
        start: Point;
        end: Point;
    }

    interface Node {
        type: string;
        data?: {};
        position?: Position;
    }

    interface VFileParams {
        contents?: Contents;
        path?: string;
        basename?: string;
        stem?: string;
        extname?: string;
        dirname?: string;
        cwd?: string;
    }

    interface VFileError {
        ruleId: string | null;
        name: string;
        file: string;
        reason: string;
        line: number | null;
        column: number | null;
        location: Position;
        source: string | null;
        fatal?: boolean | null;
    }

    type StringifiablePosition = Point | Position | Node;

    type Message = (reason: string, position?: StringifiablePosition, ruleId?: string) => VFileError;

    type Fail = (reason?: string, position?: StringifiablePosition, ruleId?: string) => void;

    type Info = (reason?: string, position?: StringifiablePosition, ruleId?: string) => void;

    type ToString = (encoding?: BufferEncoding) => string;

    interface VFile {
        (input?: Contents | VFile | VFileParams): VFile;
        message: Message;
        fail: Fail;
        info: Info;
        history: string[];
        data: {};
        messages: VFileError[];
        contents: Contents;
        path?: string;
        dirname?: string;
        basename?: string;
        stem?: string;
        extname?: string;
        cwd: string;
        toString: ToString;
    }
}

declare const vfile: vfile.VFile;

export = vfile;
