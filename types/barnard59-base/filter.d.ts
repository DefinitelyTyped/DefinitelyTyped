import * as stream from 'stream';
import type { Context } from 'barnard59-core';

export default function filter<T>(func: (this: Context, chunk: T, encoding: string) => boolean): stream.Transform;
