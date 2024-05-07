import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import AdReportRun from './ad-report-run';
/**
 * Ad
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Ad extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_id: "account_id";
        ad_active_time: "ad_active_time";
        ad_review_feedback: "ad_review_feedback";
        ad_schedule_end_time: "ad_schedule_end_time";
        ad_schedule_start_time: "ad_schedule_start_time";
        adlabels: "adlabels";
        adset: "adset";
        adset_id: "adset_id";
        bid_amount: "bid_amount";
        bid_info: "bid_info";
        bid_type: "bid_type";
        campaign: "campaign";
        campaign_id: "campaign_id";
        configured_status: "configured_status";
        conversion_domain: "conversion_domain";
        conversion_specs: "conversion_specs";
        created_time: "created_time";
        creative: "creative";
        demolink_hash: "demolink_hash";
        display_sequence: "display_sequence";
        effective_status: "effective_status";
        engagement_audience: "engagement_audience";
        failed_delivery_checks: "failed_delivery_checks";
        id: "id";
        issues_info: "issues_info";
        last_updated_by_app_id: "last_updated_by_app_id";
        name: "name";
        preview_shareable_link: "preview_shareable_link";
        priority: "priority";
        recommendations: "recommendations";
        source_ad: "source_ad";
        source_ad_id: "source_ad_id";
        status: "status";
        targeting: "targeting";
        tracking_and_conversion_with_defaults: "tracking_and_conversion_with_defaults";
        tracking_specs: "tracking_specs";
        updated_time: "updated_time";
    }>;
    static get BidType(): Readonly<{
        absolute_ocpm: "ABSOLUTE_OCPM";
        cpa: "CPA";
        cpc: "CPC";
        cpm: "CPM";
        multi_premium: "MULTI_PREMIUM";
    }>;
    static get ConfiguredStatus(): Readonly<{
        active: "ACTIVE";
        archived: "ARCHIVED";
        deleted: "DELETED";
        paused: "PAUSED";
    }>;
    static get EffectiveStatus(): Readonly<{
        active: "ACTIVE";
        adset_paused: "ADSET_PAUSED";
        archived: "ARCHIVED";
        campaign_paused: "CAMPAIGN_PAUSED";
        deleted: "DELETED";
        disapproved: "DISAPPROVED";
        in_process: "IN_PROCESS";
        paused: "PAUSED";
        pending_billing_info: "PENDING_BILLING_INFO";
        pending_review: "PENDING_REVIEW";
        preapproved: "PREAPPROVED";
        with_issues: "WITH_ISSUES";
    }>;
    static get Status(): Readonly<{
        active: "ACTIVE";
        archived: "ARCHIVED";
        deleted: "DELETED";
        paused: "PAUSED";
    }>;
    static get DatePreset(): Readonly<{
        data_maximum: "data_maximum";
        last_14d: "last_14d";
        last_28d: "last_28d";
        last_30d: "last_30d";
        last_3d: "last_3d";
        last_7d: "last_7d";
        last_90d: "last_90d";
        last_month: "last_month";
        last_quarter: "last_quarter";
        last_week_mon_sun: "last_week_mon_sun";
        last_week_sun_sat: "last_week_sun_sat";
        last_year: "last_year";
        maximum: "maximum";
        this_month: "this_month";
        this_quarter: "this_quarter";
        this_week_mon_today: "this_week_mon_today";
        this_week_sun_today: "this_week_sun_today";
        this_year: "this_year";
        today: "today";
        yesterday: "yesterday";
    }>;
    static get ExecutionOptions(): Readonly<{
        include_recommendations: "include_recommendations";
        synchronous_ad_review: "synchronous_ad_review";
        validate_only: "validate_only";
    }>;
    static get Operator(): Readonly<{
        all: "ALL";
        any: "ANY";
    }>;
    static get StatusOption(): Readonly<{
        active: "ACTIVE";
        inherited_from_source: "INHERITED_FROM_SOURCE";
        paused: "PAUSED";
    }>;
    getAdCreatives(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getAdCreatives(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getAdCreatives(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdLabel(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<Ad>;
    getAdRulesGoverned(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getAdRulesGoverned(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getAdRulesGoverned(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCopies(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getCopies(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getCopies(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCopy(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<Ad>;
    getInsights(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getInsights(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getInsights(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getInsightsAsync(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<AdReportRun>;
    getLeads(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getLeads(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getLeads(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getPreviews(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getPreviews(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getPreviews(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTargetingSentenceLines(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getTargetingSentenceLines(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getTargetingSentenceLines(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<Ad>;
    update(fields: string[], params?: Record<any, any>): Promise<Ad>;
}
