import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * AdStudyObjective
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdStudyObjective extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        is_primary: "is_primary";
        last_updated_results: "last_updated_results";
        name: "name";
        results: "results";
        type: "type";
    }>;
    static get Type(): Readonly<{
        brand: "BRAND";
        brandlift: "BRANDLIFT";
        conversions: "CONVERSIONS";
        ftl: "FTL";
        mae: "MAE";
        mai: "MAI";
        mpc_conversion: "MPC_CONVERSION";
        nonsales: "NONSALES";
        partner: "PARTNER";
        sales: "SALES";
        telco: "TELCO";
    }>;
    getAdsPixels(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getApplications(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getBrandRequests(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCustomConversions(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getOfflineConversionDataSets(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getPartnerPrivateStudies(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getPartnerStudies(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<any, any>): AdStudyObjective;
    update(fields: Array<string>, params?: Record<any, any>): AdStudyObjective;
}
