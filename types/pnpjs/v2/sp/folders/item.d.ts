import { IFolder } from "./types";
declare module "../items/types" {
    interface _Item {
        readonly folder: IFolder;
    }
    interface IItem {
        readonly folder: IFolder;
    }
}
//# sourceMappingURL=item.d.ts.map