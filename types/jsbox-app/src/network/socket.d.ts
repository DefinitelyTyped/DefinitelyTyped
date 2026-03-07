// JSBox Socket API TypeScript Declaration

declare namespace SocketTypes {
    interface SocketOptions {
        url: string;
        protocols?: string[];
        allowsUntrustedSSLCertificates?: boolean;
    }

    interface CloseOptions {
        code?: number;
        reason?: string;
    }

    interface SendOptions {
        data: NSData;
        noCopy?: boolean;
    }

    interface SocketEventHandlers {
        didOpen?: (sock: Socket) => void;
        didFail?: (sock: Socket, error: NSError) => void;
        didClose?: (sock: Socket, code: number, reason: string, wasClean: boolean) => void;
        didReceiveString?: (sock: Socket, string: string) => void;
        didReceiveData?: (sock: Socket, data: NSData) => void;
        didReceivePing?: (sock: Socket, data: NSData) => void;
        didReceivePong?: (sock: Socket, data: NSData) => void;
    }

    interface Socket {
        listen(eventHandlers: SocketEventHandlers): void;
        open(): void;
        close(closeOptions?: CloseOptions): void;
        send(data: string | SendOptions): { result: boolean; error?: NSError };
        ping(data: NSData): { result: boolean; error?: NSError };
        readyState: number; // 0: connecting, 1: open, 2: closing, 3: closed
    }
}

interface JBSocket {
    new: (options: SocketTypes.SocketOptions | string) => SocketTypes.Socket;
}

declare const $socket: JBSocket;
