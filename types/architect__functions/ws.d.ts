import { HttpResponse } from './http';

// https://arc.codes/docs/en/reference/app.arc/ws (current docs site, lacks detail)
// https://v6.arc.codes/primitives/ws (previous docs site, more info)
export interface WebsocketEvent {
    requestContext: {
        connectionId: string;
    };
    isBase64Encoded: boolean;
    body: string;
}

// WebSockets still respond with HTTP
// (usually just a 200 acknowledging the socket is connected)
export interface WebSocketHandler {
    (req: WebsocketEvent): Promise<HttpResponse | undefined>;
}

export interface ArcWs {
    handler: WebSocketHandler;
    event: WebsocketEvent;
}
