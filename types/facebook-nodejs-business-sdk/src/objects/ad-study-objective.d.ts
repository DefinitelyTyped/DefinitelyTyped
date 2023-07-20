import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class AdStudyObjective extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Type(): Record<string, any>;
    getAdsPixels(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdsPixels(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdsPixels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getApplications(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getApplications(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getApplications(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCustomConversions(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCustomConversions(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCustomConversions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getOfflineConversionDataSets(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getOfflineConversionDataSets(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getOfflineConversionDataSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getPartnerStudies(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPartnerStudies(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPartnerStudies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<AdStudyObjective>;
    update(fields: string[], params?: Record<string, any>): Promise<AdStudyObjective>;
}
