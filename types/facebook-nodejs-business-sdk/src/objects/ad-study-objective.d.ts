import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class AdStudyObjective extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Type(): Record<string, any>;
    getAdsPixels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getApplications(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCustomConversions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getOfflineConversionDataSets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPartnerStudies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: Array<string>, params?: Record<string, any>): Promise<AdStudyObjective>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<AdStudyObjective>;
}
