import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ReachFrequencyAdFormat
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ReachFrequencyAdFormat extends AbstractCrudObject {
    static get Fields(): Readonly<{
        details: "details";
        type: "type";
    }>;
}
