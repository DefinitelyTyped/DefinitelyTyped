import { DefaultContext, DefaultState, Middleware } from 'koa';
import { UploadOptions } from './';

/* tslint:disable:no-unnecessary-generics */

export { UploadOptions };

export default function graphqlUploadKoa<StateT = DefaultState, ContextT = DefaultContext>(
    uploadOptions?: UploadOptions,
): Middleware<StateT, ContextT>;
