import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * AdMonetizationProperty
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdMonetizationProperty extends AbstractCrudObject {
    static get Fields(): Readonly<{
        owner_business: "owner_business";
        id: "id";
    }>;
    getAdNetworkAnalytics(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAdNetworkAnalytic(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AdMonetizationProperty>;
    getAdNetworkAnalyticsResults(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): AdMonetizationProperty;
}
