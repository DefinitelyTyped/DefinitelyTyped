import { GraphQueryableInstance, GraphQueryableCollection } from "./graphqueryable";
import { TypedHash } from "@pnp/common";
import { Subscription as ISubscription } from "@microsoft/microsoft-graph-types";
export declare class Subscriptions extends GraphQueryableCollection<ISubscription[]> {
    getById(id: string): Subscription;
    /**
     * Create a new Subscription.
     *
     * @param changeType Indicates the type of change in the subscribed resource that will raise a notification. The supported values are: created, updated, deleted.
     * @param notificationUrl The URL of the endpoint that will receive the notifications. This URL must make use of the HTTPS protocol.
     * @param resource Specifies the resource that will be monitored for changes. Do not include the base URL (https://graph.microsoft.com/v1.0/).
     * @param expirationDateTime Specifies the date and time when the webhook subscription expires. The time is in UTC.
     * @param additionalProperties A plain object collection of additional properties you want to set on the new subscription
     *
     */
    add(changeType: string, notificationUrl: string, resource: string, expirationDateTime: string, additionalProperties?: TypedHash<any>): Promise<SubAddResult>;
}
export declare class Subscription extends GraphQueryableInstance<ISubscription> {
    /**
     * Deletes this Subscription
     */
    delete(): Promise<void>;
    /**
     * Update the properties of a Subscription
     *
     * @param properties Set of properties of this Subscription to update
     */
    update(properties: ISubscription): Promise<void>;
}
export interface SubAddResult {
    data: ISubscription;
    subscription: Subscription;
}
