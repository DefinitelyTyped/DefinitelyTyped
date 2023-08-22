import * as stream from 'stream';
import { Context } from 'barnard59-core';

export interface Callback<From, To> {
    (this: Context, chunk: From, encoding: string): Promise<To> | To;
}

export default function map<From, To>(
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    cb: Callback<From, To>,
): stream.Transform;
