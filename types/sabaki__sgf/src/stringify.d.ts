import { Types } from "../index";

export interface StringifyOptions {
    linebreak?: string;
    indent?: string;
}

export function stringify<ID extends Types.Primitive>(
    nodes: Types.NodeObject<ID>[] | Types.NodeObject<ID>,
    options?: StringifyOptions,
): string;
