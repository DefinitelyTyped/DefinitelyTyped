import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * AdsConversionGoal

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsConversionGoal extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getConversionEvents(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsConversionGoal>;
}
