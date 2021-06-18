import Operation from "./operation";
import Range from "../range";
import Document from "../document";

export default class AttributeOperation<O = any, N = any> extends Operation {
    readonly key: string;
    readonly newValue: N;
    readonly oldValue: O;
    readonly range: Range;
    static readonly className: "AttributeOperation";

    constructor(range: Range, key: string, oldValue: O, newValue: N, baseVersion: number | null);
    clone(): this;
    getReversed(): AttributeOperation;
    toJSON(): ReturnType<Operation["toJSON"]> & {
        __className: "AttributeOperation";
        key: string;
        newValue: string;
        oldValue: string | null;
        range: ReturnType<Range["toJSON"]>;
    };

    static fromJSON(json: Partial<ReturnType<AttributeOperation["toJSON"]>>, document?: Document): AttributeOperation;
}
