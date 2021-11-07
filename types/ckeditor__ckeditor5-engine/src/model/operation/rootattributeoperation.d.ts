import Document from "../document";
import RootElement from "../rootelement";
import Operation from "./operation";

export default class RootAttributeOperation<O = any, N = any> extends Operation {
    readonly key: string;
    readonly newValue: N;
    readonly oldValue: O;
    readonly root: RootElement;

    static readonly className: "RootAttributeOperation";

    constructor(root: RootElement, key: string, oldValue: O, newValue: N, baseVersion: number | null);
    clone(): this;
    getReversed(): RootAttributeOperation;
    toJSON(): ReturnType<Operation["toJSON"]> & {
        __className: "RootAttributeOperation";
        key: string;
        newValue: N;
        oldValue: O;
        root: string;
    };

    static fromJSON(
        json: Partial<ReturnType<RootAttributeOperation["toJSON"]>>,
        document: Document,
    ): RootAttributeOperation;
}
