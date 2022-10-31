import { AbstractCrudObject } from './../abstract-crud-object';
export default class DynamicPriceConfigByDate extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<DynamicPriceConfigByDate>;
}
