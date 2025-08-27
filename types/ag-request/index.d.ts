declare namespace AGRequest {
    interface Socket {
        // FIXME Add typed options
        sendObject(responseData: unknown, options?: unknown): void;
    }
}

declare class AGRequest {
    socket: unknown;
    id: unknown;
    procedure: string;
    data: unknown;
    sent: boolean;

    constructor(socket: AGRequest.Socket, id: unknown, procedureName: string, data: unknown);

    // FIXME Add typed options
    end: (data: unknown) => void;
    error: (error: unknown) => void;
}

export = AGRequest;
