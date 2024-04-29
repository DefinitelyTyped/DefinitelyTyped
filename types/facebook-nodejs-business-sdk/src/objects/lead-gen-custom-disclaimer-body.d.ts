import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * LeadGenCustomDisclaimerBody
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenCustomDisclaimerBody extends AbstractCrudObject {
    static get Fields(): Readonly<{
        text: "text";
        url_entities: "url_entities";
    }>;
}
