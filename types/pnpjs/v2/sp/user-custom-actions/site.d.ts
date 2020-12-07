import { IUserCustomActions } from "./types";
declare module "../sites/types" {
    interface _Site {
        readonly userCustomActions: IUserCustomActions;
    }
    interface ISite {
        /**
         * Get all custom actions on a site collection
         */
        readonly userCustomActions: IUserCustomActions;
    }
}
//# sourceMappingURL=site.d.ts.map