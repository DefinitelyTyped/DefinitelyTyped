import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
/**
 * HighDemandPeriod
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class HighDemandPeriod extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get BudgetValueType(): Record<string, any>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): HighDemandPeriod;
    update(fields: Array<string>, params?: Record<string, any>): HighDemandPeriod;
}
