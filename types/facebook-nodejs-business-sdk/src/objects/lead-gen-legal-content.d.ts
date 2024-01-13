import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * LeadGenLegalContent
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenLegalContent extends AbstractCrudObject {
    static get Fields(): Readonly<{
        custom_disclaimer: "custom_disclaimer";
        id: "id";
        privacy_policy: "privacy_policy";
    }>;
}
