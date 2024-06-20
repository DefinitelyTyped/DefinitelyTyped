import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AnalyticsSegment

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AnalyticsSegment extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AnalyticsSegment>;
}
