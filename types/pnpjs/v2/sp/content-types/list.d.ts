import { IContentTypes } from "./types";
declare module "../lists/types" {
    interface _List {
        readonly contentTypes: IContentTypes;
    }
    interface IList {
        /**
         * Content types available on this list
         */
        readonly contentTypes: IContentTypes;
    }
}
//# sourceMappingURL=list.d.ts.map