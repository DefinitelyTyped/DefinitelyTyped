import { IAttachments } from "./types";
declare module "../items/types" {
    interface _Item {
        readonly attachmentFiles: IAttachments;
    }
    interface IItem {
        /**
         * Read the attachment files data for an item
         */
        readonly attachmentFiles: IAttachments;
    }
}
//# sourceMappingURL=item.d.ts.map