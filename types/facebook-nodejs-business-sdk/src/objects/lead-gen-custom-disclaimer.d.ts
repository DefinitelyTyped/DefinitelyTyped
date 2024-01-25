import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * LeadGenCustomDisclaimer
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenCustomDisclaimer extends AbstractCrudObject {
    static get Fields(): Readonly<{
        body: "body";
        checkboxes: "checkboxes";
        title: "title";
    }>;
}
