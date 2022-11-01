import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import AdReportRun from './ad-report-run';
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
    getAdCreatives(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdLabel(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Ad>;
    getAdRulesGoverned(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCopies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCopy(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Ad>;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInsightsAsync(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AdReportRun>;
    getLeads(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPreViews(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getTargetingSentenceLines(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<Ad>;
    update(fields: string[], params?: Record<string, any>): Promise<Ad>;
}
