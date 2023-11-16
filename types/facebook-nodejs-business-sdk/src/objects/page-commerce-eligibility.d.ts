import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * PageCommerceEligibility
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageCommerceEligibility extends AbstractCrudObject {
    static get Fields(): Readonly<{
        offsite: "offsite";
        onsite: "onsite";
    }>;
}
