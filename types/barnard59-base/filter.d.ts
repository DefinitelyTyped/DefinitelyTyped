import * as stream from 'stream';
import { Context } from 'barnard59-core';

// tslint:disable-next-line:no-unnecessary-generics
export default function filter<T>(func: (this: Context, chunk: T, encoding: string) => boolean): stream.Transform;
