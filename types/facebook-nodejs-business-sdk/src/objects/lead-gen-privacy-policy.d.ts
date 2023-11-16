import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * LeadGenPrivacyPolicy
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenPrivacyPolicy extends AbstractCrudObject {
    static get Fields(): Readonly<{
        link_text: "link_text";
        url: "url";
    }>;
}
