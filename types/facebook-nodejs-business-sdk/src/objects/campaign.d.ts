import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import AdReportRun from './ad-report-run';
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
    getAdStudies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdLabel(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Campaign>;
    getAdRulesGoverned(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAds(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdSets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCopies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCopy(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Campaign>;
    getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getInsightsAsync(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AdReportRun>;
    delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<Campaign>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<Campaign>;
}
