import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * DynamicPriceConfigByDate

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DynamicPriceConfigByDate extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<DynamicPriceConfigByDate>;
}
