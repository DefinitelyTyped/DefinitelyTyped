import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
import FacebookAdsApi from './../api';
export default class AdReportRun extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getInsights(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getInsights(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<AdReportRun>;
    constructor(
        id?: string | number | null,
        data?: Record<string, any>,
        parentId?: string | null,
        api?: FacebookAdsApi | null,
    );
}
