import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductEventStat
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductEventStat extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get DeviceType(): Record<string, any>;
    static get Event(): Record<string, any>;
    static get Breakdowns(): Record<string, any>;
}
