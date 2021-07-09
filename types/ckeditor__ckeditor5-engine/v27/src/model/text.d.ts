import Node from "./node";
import { toMap } from "@ckeditor/ckeditor5-utils";

export default class Text extends Node {
    readonly data: string;

    constructor(data: string, attrs?: Parameters<typeof toMap>[0]);
    is(type: string): boolean;
    toJSON(): ReturnType<Node["toJSON"]> & {
        data: string;
        attributes: Record<string, string | number | boolean>;
    };

    static fromJSON(json: {
        data: string;
        attributes?: Record<string, string | number | boolean> | Array<[string, string | number | boolean]>;
    }): Text;
}
