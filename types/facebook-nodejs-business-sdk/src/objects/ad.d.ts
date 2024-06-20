import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import AdReportRun from "./ad-report-run";
/**
 * Ad

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
    getAdCreatives(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAdLabel(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Ad>;
    getAdRulesGoverned(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCopies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createCopy(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Ad>;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getInsightsAsync(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdReportRun>;
    getLeads(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getPreviews(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getTargetingSentenceLines(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<Ad>;    get(fields: string[], params?: Record<string, any>): Promise<Ad>;
}
