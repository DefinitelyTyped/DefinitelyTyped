// Type definitions for Google Ads Scripts 2021-02-26
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../../../base.d.ts" />
/// <reference path="../../common/google-ads-date.d.ts" />
/// <reference path="../../common/stats.d.ts" />
/// <reference path="../extension-schedule.d.ts" />
/// <reference path="./price-item.d.ts" />

declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface Price {
            addPriceItem(priceItem: PriceItem): void;
            clearEndDate(): void;
            clearStartDate(): void;
            clearTrackingTemplate(): void;
            getEndDate(): GoogleAdsDate;
            getEntityType(): string;
            getId(): number;
            getLanguage(): string;
            getPriceItems(): PriceItem[];
            getPriceQualifier(): string;
            getPriceType(): string;
            getSchedules(): ExtensionSchedule[];
            getStartDate(): GoogleAdsDate;
            /** Returns stats for the specified date range. */
            getStatsFor(dateRange: Base.DateRange): Stats;
            /** Returns stats for the specified date range. */
            getStatsFor(dateFrom: string | GoogleAdsDate, dateTo: string | GoogleAdsDate): Stats;
            getTrackingTemplate(): string;
            isMobilePreferred(): boolean;
            setEndDate(date: string | GoogleAdsDate): void;
            setLanguage(language: string): void; // TODO: Add language type literal && enum
            setMobilePreferred(isMobilePreferred: boolean): void;
            setPriceQualifier(priceQualifier: string): void; // TODO: Add price qualifier type literal && enum
            setPriceType(priceType: string): void; // TODO: Add price type type literal && enum
            setSchedules(schedules: ExtensionScheduleLiteral[]): void;
            setStartDate(date: string | GoogleAdsDate): void;
            setTrackingTemplate(trackingTemplate: string): void;
        }

        interface PriceBuilder extends Base.Builder<PriceOperation> {
            addPriceItem(priceItem: PriceItem): this;
            withEndDate(date: string | GoogleAdsDate): this;
            withLanguage(language: string): this; // TODO: Add language type literal && enum
            withMobilePreferred(isMobilePreferred: boolean): this;
            withPriceQualifier(priceQualifier: string): this; // TODO: Add price qualifier type literal && enum
            withPriceType(priceType: string): this; // TODO: Add price type type literal && enum
            withSchedules(schedules: ExtensionScheduleLiteral[]): this;
            withStartDate(date: string | GoogleAdsDate): this;
            withTrackingTemplate(trackingTemplate: string): this;
        }

        interface PriceIterator extends Base.Iterator<Price> {}

        interface PriceOperation extends Base.Operation<Price> {}

        interface PriceSelector
            extends Base.Selector<PriceIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
