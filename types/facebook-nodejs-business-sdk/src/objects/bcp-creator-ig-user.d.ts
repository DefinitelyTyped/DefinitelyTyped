import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BCPCreatorIgUser
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BCPCreatorIgUser extends AbstractCrudObject {
    static get Fields(): Readonly<{
        email: "email";
        id: "id";
        is_paid_partnership_messages_enabled: "is_paid_partnership_messages_enabled";
        messaging_id: "messaging_id";
        portfolio_url: "portfolio_url";
        username: "username";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<BCPCreatorIgUser>;
}
