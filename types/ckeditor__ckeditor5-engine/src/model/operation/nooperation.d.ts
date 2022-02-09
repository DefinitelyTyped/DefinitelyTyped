import Document from "../document";
import Operation from "./operation";

export default class NoOperation extends Operation {
    clone(): this;
    getReversed(): NoOperation;

    toJSON(): ReturnType<Operation["toJSON"]> & {
        __className: "NoOperation";
    };
    static readonly className: "NoOperation";

    static fromJSON(json: Partial<ReturnType<NoOperation["toJSON"]>>, doc: Document): NoOperation;
}
