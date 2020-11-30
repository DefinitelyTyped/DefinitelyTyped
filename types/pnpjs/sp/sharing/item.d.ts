import { ISharingEmailData, ISharingResult, SharingRole, ISharedFuncs } from "./types";
declare module "../items/types" {
    interface _Item extends ISharedFuncs {
        shareWith(loginNames: string | string[], role?: SharingRole, requireSignin?: boolean, emailData?: ISharingEmailData): Promise<ISharingResult>;
    }
    interface IItem extends ISharedFuncs {
        /**
         * Shares this item with one or more users
         *
         * @param loginNames string or string[] of resolved login names to which this item will be shared
         * @param role The role (View | Edit) applied to the share
         * @param emailData Optional, if inlucded an email will be sent. Note subject currently has no effect.
         */
        shareWith(loginNames: string | string[], role?: SharingRole, requireSignin?: boolean, emailData?: ISharingEmailData): Promise<ISharingResult>;
    }
}
//# sourceMappingURL=item.d.ts.map