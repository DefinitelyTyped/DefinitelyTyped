import { IContentType } from "./types";
declare module "../items/types" {
    interface _Item {
        readonly contentType: IContentType;
    }
    interface IItem {
        /**
         * The content type of this item
         */
        readonly contentType: IContentType;
    }
}
//# sourceMappingURL=item.d.ts.map