import { ApiGatewayManagementApi } from 'aws-sdk';
import { GetConnectionResponse } from "aws-sdk/clients/apigatewaymanagementapi";

export interface ArcWebSocket {
    send({ id, payload }: { id: string, payload: any }): Promise<void>;
    send({ id, payload }: { id: string, payload: any }, callback: (error?: Error) => void): void;
    close({ id }: { id: string }): Promise<void>;
    close({ id }: { id: string }, callback: (error?: Error) => void): void;
    info({ id }: { id: string }): Promise<GetConnectionResponse>;
    info({ id }: { id: string }, callback: (error: Error | undefined, data: GetConnectionResponse) => void): void;
    _api: ApiGatewayManagementApi;
}
