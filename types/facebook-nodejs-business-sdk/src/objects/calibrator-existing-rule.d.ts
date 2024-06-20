import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CalibratorExistingRule

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CalibratorExistingRule extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<CalibratorExistingRule>;
}
