import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
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
    getAdsPixels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getApplications(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getBrandRequests(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCustomConversions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getOfflineConversionDataSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getPartnerPrivateStudies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getPartnerStudies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<AdStudyObjective>;
    update(fields: string[], params?: Record<string, any>): Promise<AdStudyObjective>;
}
