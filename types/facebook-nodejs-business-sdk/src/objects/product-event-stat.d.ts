import { AbstractCrudObject } from "./../abstract-crud-object";
export default class ProductEventStat extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get DeviceType(): Record<string, any>;
    static get Event(): Record<string, any>;
    static get Breakdowns(): Record<string, any>;
}
