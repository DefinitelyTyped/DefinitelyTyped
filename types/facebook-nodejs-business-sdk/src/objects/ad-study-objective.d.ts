import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class AdStudyObjective extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Type(): Record<string, any>;
    getAdsPixels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getApplications(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCustomConversions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getOfflineConversionDataSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPartnerStudies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: string[], params?: Record<string, any>): Promise<AdStudyObjective>;
    update(fields: string[], params?: Record<string, any>): Promise<AdStudyObjective>;
}
