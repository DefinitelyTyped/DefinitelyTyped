import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * DogNotificationSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DogNotificationSettings extends AbstractCrudObject {
    static get Fields(): Readonly<{
        dog_check_key: "dog_check_key";
        id: "id";
        subscription_status_per_channel: "subscription_status_per_channel";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<DogNotificationSettings>;
}
