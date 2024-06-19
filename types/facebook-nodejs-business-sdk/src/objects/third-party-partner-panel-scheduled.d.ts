import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ThirdPartyPartnerPanelScheduled
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ThirdPartyPartnerPanelScheduled extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Status(): Record<string, any>;
    static get StudyType(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): ThirdPartyPartnerPanelScheduled;
}
