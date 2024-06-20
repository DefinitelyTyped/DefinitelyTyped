import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * DogNotificationSettings

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DogNotificationSettings extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<DogNotificationSettings>;
}
