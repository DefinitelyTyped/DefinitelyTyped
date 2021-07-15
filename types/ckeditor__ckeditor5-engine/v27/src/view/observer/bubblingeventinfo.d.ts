import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import Document from "../document";
import Node from "../node";
import Range from "../range";

export default class BubblingEventInfo extends EventInfo {
    readonly currentTarget: Document | Node | null;
    readonly eventPhase: "none" | "capturing" | "atTarget" | "bubbling";
    readonly startRange: Range;

    constructor(source: Document, name: string, startRange: Range);
}
