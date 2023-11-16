import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * DynamicPriceConfigByDate
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DynamicPriceConfigByDate extends AbstractCrudObject {
    static get Fields(): Readonly<{
        checkin_date: "checkin_date";
        prices: "prices";
        prices_pretty: "prices_pretty";
        id: "id";
    }>;
    get(fields: Array<string>, params?: Record<any, any>): DynamicPriceConfigByDate;
}
