import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ThirdPartyPartnerViewabilityRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ThirdPartyPartnerViewabilityRequest extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Status(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): ThirdPartyPartnerViewabilityRequest;
}
