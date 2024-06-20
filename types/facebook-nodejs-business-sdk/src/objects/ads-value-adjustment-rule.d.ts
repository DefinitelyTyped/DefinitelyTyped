import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * AdsValueAdjustmentRule

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsValueAdjustmentRule extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getCriterias(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsValueAdjustmentRule>;
}
