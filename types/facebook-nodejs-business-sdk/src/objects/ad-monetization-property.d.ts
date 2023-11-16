import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * AdMonetizationProperty
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdMonetizationProperty extends AbstractCrudObject {
    static get Fields(): Readonly<{
        owner_business: "owner_business";
        id: "id";
    }>;
    getAdNetworkAnalytics(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAdNetworkAnalytic(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<AdMonetizationProperty>;
    getAdNetworkAnalyticsResults(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<any, any>): AdMonetizationProperty;
}
