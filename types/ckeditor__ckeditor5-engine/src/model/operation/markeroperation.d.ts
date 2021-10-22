import MarkerCollection from "../markercollection";
import Range from "../range";
import Operation from "./operation";
import Document from "../document";

export default class MarkerOperation extends Operation {
    readonly name: string;
    readonly oldRange: Range;
    readonly newRange: Range;
    readonly affectsData: boolean;
    readonly type: "marker";
    static readonly className: "MarkerOperation";

    constructor(
        name: string,
        oldRange: Range | null,
        newRange: Range,
        markers: MarkerCollection,
        affectsData: boolean,
        baseVersion: number | null,
    );
    clone(): this;
    getReversed(): MarkerOperation;
    toJSON(): ReturnType<Operation["toJSON"]> & {
        oldRange: ReturnType<Range["toJSON"]> | null;
        newRange: ReturnType<Range["toJSON"]>;
        __className: "MarkerOperation";
        name: string;
        affectsData: boolean;
    };

    static fromJSON(json: Partial<ReturnType<MarkerOperation["toJSON"]>>, document?: Document): MarkerOperation;
}
