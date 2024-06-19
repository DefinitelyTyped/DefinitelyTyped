import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import AdReportRun from "./ad-report-run";
/**
 * Ad
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Ad extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get BidType(): Record<string, any>;
    static get ConfiguredStatus(): Record<string, any>;
    static get EffectiveStatus(): Record<string, any>;
    static get Status(): Record<string, any>;
    static get DatePreset(): Record<string, any>;
    static get ExecutionOptions(): Record<string, any>;
    static get Operator(): Record<string, any>;
    static get StatusOption(): Record<string, any>;
    getAdCreatives(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAdLabel(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<Ad>;
    getAdRulesGoverned(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCopies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createCopy(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<Ad>;
    getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getInsightsAsync(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AdReportRun>;
    getLeads(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getPreviews(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getTargetingSentenceLines(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): Ad;
    update(fields: Array<string>, params?: Record<string, any>): Ad;
}
