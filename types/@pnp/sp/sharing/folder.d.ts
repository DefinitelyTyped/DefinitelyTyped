import { ISharingEmailData, ISharingResult, SharingRole, ISharedFuncs } from "./types";
declare module "../folders/types" {
    interface _Folder extends ISharedFuncs {
        shareWith(loginNames: string | string[], role?: SharingRole, requireSignin?: boolean, shareEverything?: boolean, emailData?: ISharingEmailData): Promise<ISharingResult>;
    }
    interface IFolder extends ISharedFuncs {
        shareWith(loginNames: string | string[], role?: SharingRole, requireSignin?: boolean, shareEverything?: boolean, emailData?: ISharingEmailData): Promise<ISharingResult>;
    }
}
//# sourceMappingURL=folder.d.ts.map