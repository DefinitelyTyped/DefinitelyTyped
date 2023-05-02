import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class ProductFeedUploadError extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get AffectedSurfaces(): Record<string, any>;
    static get Severity(): Record<string, any>;
    static get ErrorPriority(): Record<string, any>;
    getSamples(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getSamples(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getSamples(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getSuggestedRules(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getSuggestedRules(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getSuggestedRules(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductFeedUploadError>;
}
