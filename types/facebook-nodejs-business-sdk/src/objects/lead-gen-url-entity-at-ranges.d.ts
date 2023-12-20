import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * LeadGenURLEntityAtRanges
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenURLEntityAtRanges extends AbstractCrudObject {
    static get Fields(): Readonly<{
        length: "length";
        offset: "offset";
        url: "url";
    }>;
}
