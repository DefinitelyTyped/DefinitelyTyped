import { IFiles } from "./types";
declare module "../folders/types" {
    interface _Folder {
        readonly files: IFiles;
    }
    interface IFolder {
        /**
         * Folder containing files
         */
        readonly files: IFiles;
    }
}
//# sourceMappingURL=folder.d.ts.map