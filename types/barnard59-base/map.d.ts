import * as stream from 'stream';
import type { Context } from 'barnard59-core';

export default function map<From, To>(cb: (this: Context, chunk: From, encoding: string) => Promise<To> | To): stream.Transform;
