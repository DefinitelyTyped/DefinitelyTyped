import { RequestHandler } from 'express';

export interface UploadOptions {
    maxFieldSize?: number | undefined;
    maxFileSize?: number | undefined;
    maxFiles?: number | undefined;
}

export default function graphqlUploadExpress(uploadOptions?: UploadOptions): RequestHandler;
