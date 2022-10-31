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
    getActivities(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdStudies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdCreatives(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteAdLabels(params?: Record<string, any>): Promise<any>;
    createAdLabel(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdSet>;
    getAdRulesGoverned(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAds(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAsyncAdRequests(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCopies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCopy(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdSet>;
    getDeliveryEstimate(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInsightsAsync(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdReportRun>;
    getTargetingSentenceLines(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<AdSet>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<AdSet>;
}
