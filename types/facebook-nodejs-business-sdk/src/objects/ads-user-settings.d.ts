import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsUserSettings

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsUserSettings extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsUserSettings>;
}
