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
    getAdCreatives(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdLabel(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null): Promise<Ad>;
    getAdRulesGoverned(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCopies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCopy(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null): Promise<Ad>;
    getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInsightsAsync(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AdReportRun>;
    getLeads(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPreViews(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getTargetingSentenceLines(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<Ad>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<Ad>;
}
