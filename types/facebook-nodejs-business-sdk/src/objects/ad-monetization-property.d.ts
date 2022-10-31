import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class AdMonetizationProperty extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getAdNetworkAnalytics(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdNetworkAnalytic(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdMonetizationProperty>;
    getAdNetworkAnalyticsResults(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: Array<string>, params?: Record<string, any>): Promise<AdMonetizationProperty>;
}
