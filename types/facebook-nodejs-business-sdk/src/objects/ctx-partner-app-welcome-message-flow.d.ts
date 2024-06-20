import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CTXPartnerAppWelcomeMessageFlow

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CTXPartnerAppWelcomeMessageFlow extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<CTXPartnerAppWelcomeMessageFlow>;
}
