export interface ArcWebSocket {
    send({ id, payload }: { id: string; payload: any }): Promise<void>;
}
