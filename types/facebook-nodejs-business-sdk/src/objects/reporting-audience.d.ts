import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ReportingAudience
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ReportingAudience extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}
