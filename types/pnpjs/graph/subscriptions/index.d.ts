import { ISubscriptions } from "./types";
export { ISubscription, ISubAddResult, ISubscriptions, Subscription, Subscriptions, } from "./types";
declare module "../rest" {
    interface GraphRest {
        readonly subscriptions: ISubscriptions;
    }
}
//# sourceMappingURL=index.d.ts.map