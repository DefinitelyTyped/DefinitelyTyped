import { AbstractCrudObject } from './../abstract-crud-object';
export default class ProductFeedSchedule extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get DayOfWeek(): Record<string, any>;
    static get Interval(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductFeedSchedule>;
}
