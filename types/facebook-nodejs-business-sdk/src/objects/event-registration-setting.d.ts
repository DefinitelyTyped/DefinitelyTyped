import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * EventRegistrationSetting

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EventRegistrationSetting extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<EventRegistrationSetting>;
}
