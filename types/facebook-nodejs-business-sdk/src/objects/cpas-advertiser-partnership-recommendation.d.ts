import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CPASAdvertiserPartnershipRecommendation

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASAdvertiserPartnershipRecommendation extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<CPASAdvertiserPartnershipRecommendation>;
}
