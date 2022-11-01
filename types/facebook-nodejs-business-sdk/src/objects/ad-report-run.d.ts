import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
import FacebookAdsApi from './../api';
export default class AdReportRun extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: string[], params?: Record<string, any>): Promise<AdReportRun>;
    constructor(
        id: string | number | null | undefined,
        data: Record<string, any> | undefined,
        parentId: string | null | undefined,
        api: FacebookAdsApi | null | undefined,
    );
}
