import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
/**
 * HighDemandPeriod
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class HighDemandPeriod extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_object_id: "ad_object_id";
        budget_value: "budget_value";
        budget_value_type: "budget_value_type";
        id: "id";
        recurrence_type: "recurrence_type";
        time_end: "time_end";
        time_start: "time_start";
        weekly_schedule: "weekly_schedule";
    }>;
    static get BudgetValueType(): Readonly<{
        absolute: "ABSOLUTE";
        multiplier: "MULTIPLIER";
    }>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<HighDemandPeriod>;
    update(fields: string[], params?: Record<any, any>): Promise<HighDemandPeriod>;
}
