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
    getAdStudies(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdStudies(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdStudies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdLabel(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Campaign>;
    getAdRulesGoverned(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdRulesGoverned(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdRulesGoverned(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAds(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAds(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAds(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAdSets(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdSets(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCopies(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCopies(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCopies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCopy(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Campaign>;
    getInsights(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getInsights(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getInsightsAsync(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AdReportRun>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<Campaign>;
    update(fields: string[], params?: Record<string, any>): Promise<Campaign>;
}
