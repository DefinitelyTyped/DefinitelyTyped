declare module "tty" {
    import * as net from "net";

    function isatty(fd: number): boolean;
    class ReadStream extends net.Socket {
        isRaw: boolean;
        setRawMode(mode: boolean): void;
        isTTY: boolean;
    }
    class WriteStream extends net.Socket {
        columns: number;
        rows: number;
        isTTY: boolean;
    }
}
