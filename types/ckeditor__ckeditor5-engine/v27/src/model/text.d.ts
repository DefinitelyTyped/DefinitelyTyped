import Node from "./node";

export default class Text extends Node {
    readonly data: string;

    protected constructor(data: string, attrs?: Record<string, string> | [string, string]);
    is(type: string): boolean;
    toJSON(): ReturnType<Node["toJSON"]> & {
        data: string;
        attributes: Record<string, string | number | boolean>;
    };

    static fromJSON(json: {
        data: string;
        attributes?: Record<string, string | number | boolean> | Array<[string, string | number | boolean]> | undefined;
    }): Text;
}
