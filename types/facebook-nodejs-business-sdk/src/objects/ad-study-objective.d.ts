import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * AdStudyObjective
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
    getAdsPixels(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getApplications(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getBrandRequests(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCustomConversions(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getOfflineConversionDataSets(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getPartnerPrivateStudies(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getPartnerStudies(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<any, any>): AdStudyObjective;
    update(fields: string[], params?: Record<any, any>): Promise<AdStudyObjective>;
}
