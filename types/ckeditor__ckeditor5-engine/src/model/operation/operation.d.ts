import Batch from "../batch";
import Document from "../document";

export default abstract class Operation {
    baseVersion: number;
    batch: Batch | null;
    readonly isDocumentOperation: boolean;
    readonly type: string;

    static className: string;

    constructor(baseVersion: number);
    clone(): this;
    getReversed(): Operation;
    abstract toJSON(): {
        __className: string;
        baseVersion: number;
    };

    static fromJSON?(json: Partial<ReturnType<Operation["toJSON"]>>, doc: Document): Operation;
}
