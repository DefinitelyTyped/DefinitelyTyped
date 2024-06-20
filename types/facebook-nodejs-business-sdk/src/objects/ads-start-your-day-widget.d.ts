import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsStartYourDayWidget

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsStartYourDayWidget extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsStartYourDayWidget>;
}
