import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import FacebookAdsApi from "./../api";
/**
 * AdReportRun
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdReportRun extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): AdReportRun;
    constructor(id: string | number | null | undefined, data: Record<string, any> | undefined, parentId: string | null | undefined, api: FacebookAdsApi | null | undefined);
}
