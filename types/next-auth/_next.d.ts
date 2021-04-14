/// <reference types="node" />
// Copied from next@10.0

import { IncomingMessage, ServerResponse } from 'http';

export interface NextApiRequest extends IncomingMessage {
    query: {
        [key: string]: string | string[];
    };
    cookies: {
        [key: string]: string;
    };
    body: any;
    env: any;
    preview?: boolean;
    previewData?: any;
}

export type Send<T> = (body: T) => void;

export type NextApiResponse<T = any> = ServerResponse & {
    send: Send<T>;
    json: Send<T>;
    status: (statusCode: number) => NextApiResponse<T>;
    redirect(url: string): NextApiResponse<T>;
    redirect(status: number, url: string): NextApiResponse<T>;
    setPreviewData: (data: object | string, options?: {
        maxAge?: number;
    }) => NextApiResponse<T>;
    clearPreviewData: () => NextApiResponse<T>;
};

export type NextApiHandler<T = any> = (req: NextApiRequest, res: NextApiResponse<T>) => void | Promise<void>;
