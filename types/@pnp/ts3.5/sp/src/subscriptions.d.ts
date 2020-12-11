import { SharePointQueryableCollection, SharePointQueryableInstance } from "./sharepointqueryable";
/**
 * Describes a collection of webhook subscriptions
 *
 */
export declare class Subscriptions extends SharePointQueryableCollection {
    /**
     * Returns all the webhook subscriptions or the specified webhook subscription
     *
     * @param subscriptionId The id of a specific webhook subscription to retrieve, omit to retrieve all the webhook subscriptions
     */
    getById(subscriptionId: string): Subscription;
    /**
     * Creates a new webhook subscription
     *
     * @param notificationUrl The url to receive the notifications
     * @param expirationDate The date and time to expire the subscription in the form YYYY-MM-ddTHH:mm:ss+00:00 (maximum of 6 months)
     * @param clientState A client specific string (optional)
     */
    add(notificationUrl: string, expirationDate: string, clientState?: string): Promise<SubscriptionAddResult>;
}
/**
 * Describes a single webhook subscription instance
 *
 */
export declare class Subscription extends SharePointQueryableInstance {
    /**
     * Renews this webhook subscription
     *
     * @param expirationDate The date and time to expire the subscription in the form YYYY-MM-ddTHH:mm:ss+00:00 (maximum of 6 months, optional)
     * @param notificationUrl The url to receive the notifications (optional)
     * @param clientState A client specific string (optional)
     */
    update(expirationDate?: string, notificationUrl?: string, clientState?: string): Promise<SubscriptionUpdateResult>;
    /**
     * Removes this webhook subscription
     *
     */
    delete(): Promise<void>;
}
export interface SubscriptionAddResult {
    subscription: Subscription;
    data: any;
}
export interface SubscriptionUpdateResult {
    subscription: Subscription;
    data: any;
}
