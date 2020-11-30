import { ISubscriptions } from "./types";
declare module "../lists/types" {
    interface _List {
        readonly subscriptions: ISubscriptions;
    }
    interface IList {
        /**
         * Gets the collection of webhooks created for this list
         *
         */
        readonly subscriptions: ISubscriptions;
    }
}
//# sourceMappingURL=list.d.ts.map