import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * ProductFeedUploadError
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedUploadError extends AbstractCrudObject {
    static get Fields(): Readonly<{
        affected_surfaces: "affected_surfaces";
        description: "description";
        error_type: "error_type";
        id: "id";
        severity: "severity";
        summary: "summary";
        total_count: "total_count";
    }>;
    static get AffectedSurfaces(): Readonly<{
        dynamic_ads: "Dynamic Ads";
        marketplace: "Marketplace";
        us_marketplace: "US Marketplace";
    }>;
    static get Severity(): Readonly<{
        fatal: "fatal";
        warning: "warning";
    }>;
    static get ErrorPriority(): Readonly<{
        high: "HIGH";
        low: "LOW";
        medium: "MEDIUM";
    }>;
    getSamples(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getSamples(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getSamples(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getSuggestedRules(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getSuggestedRules(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getSuggestedRules(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<any, any>): Promise<ProductFeedUploadError>;
}
