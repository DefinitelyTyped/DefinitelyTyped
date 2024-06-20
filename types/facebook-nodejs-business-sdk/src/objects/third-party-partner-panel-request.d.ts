import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ThirdPartyPartnerPanelRequest
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ThirdPartyPartnerPanelRequest extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Status(): Record<string, any>;
    static get StudyType(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<ThirdPartyPartnerPanelRequest>;
}
