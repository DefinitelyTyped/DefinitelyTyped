import { IUserCustomActions } from "./types";
declare module "../lists/types" {
    interface _List {
        readonly userCustomActions: IUserCustomActions;
    }
    interface IList {
        /**
         * Get all custom actions on a list
         */
        readonly userCustomActions: IUserCustomActions;
    }
}
//# sourceMappingURL=list.d.ts.map