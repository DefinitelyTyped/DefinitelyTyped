import { RequestHandler } from 'express';
import { UploadOptions } from './';

export { UploadOptions };

export default function graphqlUploadExpress(uploadOptions?: UploadOptions): RequestHandler;
