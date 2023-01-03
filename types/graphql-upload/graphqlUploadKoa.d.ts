import { DefaultContext, DefaultState, Middleware } from 'koa';

export interface UploadOptions {
    maxFieldSize?: number | undefined;
    maxFileSize?: number | undefined;
    maxFiles?: number | undefined;
}

export default function graphqlUploadKoa<StateT = DefaultState, ContextT = DefaultContext>(
    uploadOptions?: UploadOptions,
): Middleware<StateT, ContextT>; // eslint-disable-line no-unnecessary-generics
