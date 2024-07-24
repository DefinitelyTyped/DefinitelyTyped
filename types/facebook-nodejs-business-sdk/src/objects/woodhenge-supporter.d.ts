import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WoodhengeSupporter
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WoodhengeSupporter extends AbstractCrudObject {
    static get Fields(): Readonly<{
        creation_time: "creation_time";
        id: "id";
        is_gifted_subscription: "is_gifted_subscription";
        most_recent_subscription_time: "most_recent_subscription_time";
        number_of_months_subscribed: "number_of_months_subscribed";
        user: "user";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<WoodhengeSupporter>;
}
