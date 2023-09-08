import * as stream from 'stream';
import { Context } from 'barnard59-core';

export interface Filter<T> {
    (this: Context, chunk: T, encoding: string): boolean | Promise<boolean>;
}

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export default function filter<T>(func: Filter<T>): stream.Transform;
