import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
/**
 * HighDemandPeriod

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class HighDemandPeriod extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get BudgetValueType(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<HighDemandPeriod>;    get(fields: string[], params?: Record<string, any>): Promise<HighDemandPeriod>;
}
