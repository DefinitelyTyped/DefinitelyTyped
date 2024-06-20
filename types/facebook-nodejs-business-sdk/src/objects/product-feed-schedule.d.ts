import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductFeedSchedule

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedSchedule extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Interval(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductFeedSchedule>;
}
