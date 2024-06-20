import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ThirdPartyPartnerViewabilityRequest
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ThirdPartyPartnerViewabilityRequest extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Status(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<ThirdPartyPartnerViewabilityRequest>;
}
