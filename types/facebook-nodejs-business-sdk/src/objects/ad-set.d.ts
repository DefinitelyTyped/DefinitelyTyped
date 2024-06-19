import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import HighDemandPeriod from "./high-demand-period";
import AdReportRun from "./ad-report-run";
/**
 * AdSet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
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
    static get RegionalRegulatedCategories(): Record<string, any>;
    static get TuneForCategory(): Record<string, any>;
    static get Operator(): Record<string, any>;
    static get StatusOption(): Record<string, any>;
    getActivities(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAdStudies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAdCreatives(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    deleteAdLabels(params?: Record<string, any>): Promise<any>;
    createAdLabel(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AdSet>;
    getAdRulesGoverned(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAds(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAsyncAdRequests(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createBudgetSchedule(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<HighDemandPeriod>;
    getCopies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createCopy(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AdSet>;
    getDeliveryEstimate(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getInsightsAsync(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AdReportRun>;
    getTargetingSentenceLines(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): AdSet;
    update(fields: Array<string>, params?: Record<string, any>): AdSet;
}
