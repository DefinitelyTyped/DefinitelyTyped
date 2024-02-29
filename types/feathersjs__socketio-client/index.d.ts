/// <reference types="socket.io-client" />

export default function feathersSocketIOClient(
    socket: SocketIOClient.Socket,
    options?: FeathersSocketIOClientOptions,
): () => void;

export interface FeathersSocketIOClientOptions {
    timeout?: number | undefined;
}
