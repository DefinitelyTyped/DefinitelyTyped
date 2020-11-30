import { IFile } from "./types";
declare module "../items/types" {
    interface _Item {
        readonly file: IFile;
    }
    interface IItem {
        /**
         * File in sharepoint site
         */
        readonly file: IFile;
    }
}
//# sourceMappingURL=item.d.ts.map