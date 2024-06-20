import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * AdsValueAdjustmentRuleCollection

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsValueAdjustmentRuleCollection extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getPersonas(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsValueAdjustmentRuleCollection>;
}
