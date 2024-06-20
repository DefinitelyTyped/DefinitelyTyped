import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ThirdPartyPartnerLiftRequest
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ThirdPartyPartnerLiftRequest extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Status(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<ThirdPartyPartnerLiftRequest>;
}
