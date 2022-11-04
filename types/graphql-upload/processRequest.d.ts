import { IncomingMessage, ServerResponse } from 'http';
import { GraphQLOperation, UploadOptions } from './';

export { GraphQLOperation, UploadOptions };

export default function processRequest(
    request: IncomingMessage,
    response: ServerResponse,
    uploadOptions?: UploadOptions,
): Promise<GraphQLOperation | GraphQLOperation[]>;
