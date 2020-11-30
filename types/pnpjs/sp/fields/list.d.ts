import { IFields } from "./types";
declare module "../lists/types" {
    interface _List {
        readonly fields: IFields;
    }
    interface IList {
        /**
         * This list's collection of fields
         */
        readonly fields: IFields;
    }
}
//# sourceMappingURL=list.d.ts.map