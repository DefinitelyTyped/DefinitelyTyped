import { NodeObject, Primitive } from "./types";

export interface StringifyOptions {
    linebreak?: string;
    indent?: string;
}

export function stringify<ID extends Primitive>(
    nodes: NodeObject<ID>[] | NodeObject<ID>,
    options?: StringifyOptions,
): string;
