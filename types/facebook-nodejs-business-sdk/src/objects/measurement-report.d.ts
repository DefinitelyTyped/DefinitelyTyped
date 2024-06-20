import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MeasurementReport

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MeasurementReport extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<MeasurementReport>;
}
