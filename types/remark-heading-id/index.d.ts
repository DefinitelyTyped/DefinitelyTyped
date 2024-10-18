import { Transformer } from "unified";

declare namespace remarkHeadingId {
    interface RemarkHeadingIdOptions {
        defaults?: boolean;
        uniqueDefaults?: boolean;
    }
}

declare function remarkHeadingId(options?: remarkHeadingId.RemarkHeadingIdOptions): Transformer;
export = remarkHeadingId;
