import * as stream from 'stream';
import { Context } from 'barnard59-core';

// tslint:disable-next-line:no-unnecessary-generics
export default function map<From, To>(
    // tslint:disable-next-line:no-unnecessary-generics
    cb: (this: Context, chunk: From, encoding: string) => Promise<To> | To,
): stream.Transform;
