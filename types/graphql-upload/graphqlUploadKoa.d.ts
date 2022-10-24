import { DefaultContext, DefaultState, Middleware } from 'koa';
import { UploadOptions } from './';

export { UploadOptions };

export default function graphqlUploadKoa<StateT = DefaultState, ContextT = DefaultContext>(
    uploadOptions?: UploadOptions,
): Middleware<StateT, ContextT>; // tslint:disable-line:no-unnecessary-generics
