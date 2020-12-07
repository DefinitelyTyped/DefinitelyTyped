import { IUserCustomActions } from "./types";
declare module "../webs/types" {
    interface _Web {
        /**
         * Gets a newly refreshed collection of the SPWeb's SPUserCustomActionCollection
         */
        readonly userCustomActions: IUserCustomActions;
    }
    interface IWeb {
        /**
         * Gets a newly refreshed collection of the SPWeb's SPUserCustomActionCollection
         */
        readonly userCustomActions: IUserCustomActions;
    }
}
//# sourceMappingURL=web.d.ts.map