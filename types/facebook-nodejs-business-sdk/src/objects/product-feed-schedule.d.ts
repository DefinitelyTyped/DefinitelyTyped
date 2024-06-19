import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductFeedSchedule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedSchedule extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Interval(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): ProductFeedSchedule;
}
