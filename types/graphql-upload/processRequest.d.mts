import { IncomingMessage, ServerResponse } from "http";

export interface UploadOptions {
    maxFieldSize?: number | undefined;
    maxFileSize?: number | undefined;
    maxFiles?: number | undefined;
}

export interface GraphQLOperation {
    query: string;
    operationName?: null | string | undefined;
    variables?: null | unknown | undefined;
}

export default function processRequest(
    request: IncomingMessage,
    response: ServerResponse,
    uploadOptions?: UploadOptions,
): Promise<GraphQLOperation | GraphQLOperation[]>;
