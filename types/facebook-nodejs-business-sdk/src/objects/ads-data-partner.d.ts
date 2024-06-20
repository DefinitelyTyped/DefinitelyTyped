import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsDataPartner

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsDataPartner extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsDataPartner>;
}
