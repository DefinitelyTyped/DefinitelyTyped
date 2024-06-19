import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import HighDemandPeriod from "./high-demand-period";
import AdReportRun from "./ad-report-run";
/**
 * Campaign
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Campaign extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get BidStrategy(): Record<string, any>;
    static get ConfiguredStatus(): Record<string, any>;
    static get EffectiveStatus(): Record<string, any>;
    static get Status(): Record<string, any>;
    static get DatePreset(): Record<string, any>;
    static get ExecutionOptions(): Record<string, any>;
    static get Objective(): Record<string, any>;
    static get SmartPromotionType(): Record<string, any>;
    static get SpecialAdCategories(): Record<string, any>;
    static get SpecialAdCategoryCountry(): Record<string, any>;
    static get Operator(): Record<string, any>;
    static get SpecialAdCategory(): Record<string, any>;
    static get StatusOption(): Record<string, any>;
    getAdStudies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createAdLabel(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<Campaign>;
    getAdRulesGoverned(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAds(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAdSets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createBudgetSchedule(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<HighDemandPeriod>;
    getCopies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createCopy(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<Campaign>;
    getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getInsightsAsync(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AdReportRun>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): Campaign;
    update(fields: Array<string>, params?: Record<string, any>): Campaign;
}
