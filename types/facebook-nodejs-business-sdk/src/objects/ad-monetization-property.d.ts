import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * AdMonetizationProperty

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdMonetizationProperty extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getAdNetworkAnalytics(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAdNetworkAnalytic(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdMonetizationProperty>;
    getAdNetworkAnalyticsResults(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdMonetizationProperty>;
}
