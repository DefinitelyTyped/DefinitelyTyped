// Type definitions for Node.js debugger API
// Project: http://nodejs.org/
// Definitions by: Basarat Ali Syed <https://github.com/basarat>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module NodeJS {
    export module _debugger {
        export interface Packet {
            raw: string;
            headers: string[];
            body: Message;
        }

        export interface Message {
            seq: number;
            type: string;
        }

        export interface RequestInfo {
            command: string;
            arguments: any;
        }

        export interface Request extends Message, RequestInfo {
        }

        export interface Event extends Message {
            event: string;
            body?: any;
        }

        export interface Response extends Message {
            request_seq: number;
            success: boolean;
            /** Contains error message if success === false. */
            message?: string;
            /** Contains message body if success === true. */
            body?: any;
        }

        export interface BreakpointMessageBody {
            type: string;
            target: number;
            line: number;
        }

        export class Protocol {
            res: Packet;
            state: string;
            execute(data: string): void;
            serialize(rq: Request): string;
            onResponse: (pkt: Packet) => void;
        }

        export var NO_FRAME: number;
        export var port: number;

        export interface ScriptDesc {
            name: string;
            id: number;
            isNative?: boolean;
            handle?: number;
            type: string;
            lineOffset?: number;
            columnOffset?: number;
            lineCount?: number;
        }

        export interface Breakpoint {
            id: number;
            scriptId: number;
            script: ScriptDesc;
            line: number;
            condition?: string;
            scriptReq?: string;
        }

        export interface RequestHandler {
            (err: boolean, body: Message, res: Packet): void;
            request_seq?: number;
        }

        export interface ResponseBodyHandler {
            (err: boolean, body?: any): void;
            request_seq?: number;
        }

        export interface ExceptionInfo {
            text: string;
        }

        export interface BreakResponse {
            script?: ScriptDesc;
            exception?: ExceptionInfo;
            sourceLine: number;
            sourceLineText: string;
            sourceColumn: number;
        }

        export function SourceInfo(body: BreakResponse): string;

        export interface ClientInstance extends EventEmitter {
            protocol: Protocol;
            scripts: ScriptDesc[];
            handles: ScriptDesc[];
            breakpoints: Breakpoint[];
            currentSourceLine: number;
            currentSourceColumn: number;
            currentSourceLineText: string;
            currentFrame: number;
            currentScript: string;

            connect(port: number, host: string): void;
            req(req: any, cb: RequestHandler): void;
            reqFrameEval(code: string, frame: number, cb: RequestHandler): void;
            mirrorObject(obj: any, depth: number, cb: ResponseBodyHandler): void;
            setBreakpoint(rq: BreakpointMessageBody, cb: RequestHandler): void;
            clearBreakpoint(rq: Request, cb: RequestHandler): void;
            listbreakpoints(cb: RequestHandler): void;
            reqSource(from: number, to: number, cb: RequestHandler): void;
            reqScripts(cb: any): void;
            reqContinue(cb: RequestHandler): void;
        }

        export var Client : {
            new (): ClientInstance
        }
    }
}

declare module "_debugger"{
    export = NodeJS._debugger;
}
