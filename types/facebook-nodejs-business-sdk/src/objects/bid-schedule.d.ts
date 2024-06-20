import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BidSchedule

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BidSchedule extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<BidSchedule>;
}
