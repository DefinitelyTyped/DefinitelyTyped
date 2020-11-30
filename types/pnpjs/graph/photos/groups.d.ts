import { IPhoto } from "./types";
declare module "../groups/types" {
    interface _Group {
        readonly photo: IPhoto;
    }
    interface IGroup {
        readonly photo: IPhoto;
    }
}
//# sourceMappingURL=groups.d.ts.map