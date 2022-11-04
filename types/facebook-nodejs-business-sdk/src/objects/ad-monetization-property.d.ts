import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class AdMonetizationProperty extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getAdNetworkAnalytics(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdNetworkAnalytic(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AdMonetizationProperty>;
    getAdNetworkAnalyticsResults(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: string[], params?: Record<string, any>): Promise<AdMonetizationProperty>;
}
