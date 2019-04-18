declare module "tty" {
    import * as net from "net";

    export function isatty(fd: number): boolean;
    export class ReadStream extends net.Socket {
        isRaw: boolean;
        setRawMode(mode: boolean): void;
        isTTY: boolean;
    }
    export class WriteStream extends net.Socket {
        columns: number;
        rows: number;
        isTTY: boolean;
    }
}
