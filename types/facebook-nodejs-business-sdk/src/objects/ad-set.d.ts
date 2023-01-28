import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import AdReportRun from './ad-report-run';
export default class AdSet extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get BidStrategy(): Record<string, any>;
    static get BillingEvent(): Record<string, any>;
    static get ConfiguredStatus(): Record<string, any>;
    static get EffectiveStatus(): Record<string, any>;
    static get OptimizationGoal(): Record<string, any>;
    static get Status(): Record<string, any>;
    static get DatePreset(): Record<string, any>;
    static get DestinationType(): Record<string, any>;
    static get ExecutionOptions(): Record<string, any>;
    static get FullFunnelExplorationMode(): Record<string, any>;
    static get MultiOptimizationGoalWeight(): Record<string, any>;
    static get OptimizationSubEvent(): Record<string, any>;
    static get TuneForCategory(): Record<string, any>;
    static get Operator(): Record<string, any>;
    static get StatusOption(): Record<string, any>;
    getActivities(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getActivities(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getActivities(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdStudies(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdStudies(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdStudies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdCreatives(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdCreatives(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdCreatives(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteAdLabels(params?: Record<string, any>): Promise<any>;
    createAdLabel(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdSet>;
    getAdRulesGoverned(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdRulesGoverned(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdRulesGoverned(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAds(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAds(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAds(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAsyncAdRequests(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAsyncAdRequests(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAsyncAdRequests(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCopies(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCopies(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCopies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCopy(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdSet>;
    getDeliveryEstimate(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getDeliveryEstimate(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getDeliveryEstimate(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getInsights(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getInsights(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getInsightsAsync(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AdReportRun>;
    getTargetingSentenceLines(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getTargetingSentenceLines(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getTargetingSentenceLines(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<AdSet>;
    update(fields: string[], params?: Record<string, any>): Promise<AdSet>;
}
