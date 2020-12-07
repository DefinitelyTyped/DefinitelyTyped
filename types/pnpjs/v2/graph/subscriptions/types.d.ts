import { _GraphQueryableInstance, _GraphQueryableCollection } from "../graphqueryable";
import { Subscription as ISubscriptionType } from "@microsoft/microsoft-graph-types";
import { IDeleteable, IUpdateable, IGetById } from "../decorators";
/**
 * Subscription
 */
export declare class _Subscription extends _GraphQueryableInstance<ISubscriptionType> {
}
export interface ISubscription extends _Subscription, IDeleteable, IUpdateable<ISubscriptionType> {
}
export declare const Subscription: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => ISubscription;
/**
 * Subscriptions
 */
export declare class _Subscriptions extends _GraphQueryableCollection<ISubscriptionType[]> {
    /**
     * Create a new Subscription.
     *
     * @param changeType Indicates the type of change in the subscribed resource that will raise a notification. The supported values are: created, updated, deleted.
     * @param notificationUrl The URL of the endpoint that will receive the notifications. This URL must make use of the HTTPS protocol.
     * @param resource Specifies the resource that will be monitored for changes. Do not include the base URL (https://graph.microsoft.com/v1.0/).
     * @param expirationDateTime Specifies the date and time when the webhook subscription expires. The time is in UTC.
     * @param props A plain object collection of additional properties you want to set on the new subscription
     *
     */
    add(changeType: string, notificationUrl: string, resource: string, expirationDateTime: string, props?: ISubscriptionType): Promise<ISubAddResult>;
}
export interface ISubscriptions extends _Subscriptions, IGetById<ISubscription> {
}
export declare const Subscriptions: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => ISubscriptions;
/**
 * ISubAddResult
 */
export interface ISubAddResult {
    data: ISubscriptionType;
    subscription: ISubscription;
}
//# sourceMappingURL=types.d.ts.map