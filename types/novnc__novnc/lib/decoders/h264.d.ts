import Display from "../display";
import WebSock from "../websock";

export class H264Parser {
    constructor(data: Uint8Array);
    profileIdc: number | null;
    constraintSet: number | null;
    levelIdc: number | null;
    parse(): { frame: Uint8Array, key: boolean } | null;
}

export interface PendingFrame {
    timestamp: number;
    promise: Promise<void>;
    resolve: (() => void) | null;
    frame: VideoFrame | null;
    ready: boolean;
    keep: boolean;
}
export class H264Context {
    constructor(width: number, height: number);
    lastUsed: number;
    decode(payload: Uint8Array): PendingFrame | null;
}
export default class H264Decoder {
    decodeRect(x: number, y: number, width: number, height: number, sock: WebSock, display: Display, depth: number): boolean;
}
