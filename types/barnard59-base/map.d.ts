import { Context } from "barnard59-core";
import * as stream from "stream";

export interface Callback<From, To> {
    (this: Context, chunk: From, encoding: string): Promise<To> | To;
}

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export default function map<From, To>(
    cb: Callback<From, To>,
): stream.Transform;
