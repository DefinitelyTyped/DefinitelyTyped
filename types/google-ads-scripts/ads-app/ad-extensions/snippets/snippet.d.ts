// Type definitions for Google Ads Scripts 2021-02-26
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../../../base.d.ts" />
/// <reference path="../../common/google-ads-date.d.ts" />
/// <reference path="../../common/stats.d.ts" />
/// <reference path="../extension-schedule.d.ts" />

declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface Snippet {
            clearEndDate(): void;
            clearStartDate(): void;
            getEndDate(): GoogleAdsDate;
            getEntityType(): String;
            getHeader(): String;
            getId(): number;
            getSchedules(): ExtensionSchedule[];
            getStartDate(): GoogleAdsDate;
            /** Returns stats for the specified date range. */
            getStatsFor(dateRange: Base.DateRange): Stats;
            /** Returns stats for the specified date range. */
            getStatsFor(dateFrom: string | GoogleAdsDate, dateTo: string | GoogleAdsDate): Stats;
            getValues(): string[];
            isMobilePreferred(): boolean;
            setEndDate(date: string | GoogleAdsDate): void;
            setHeader(header: string): void;
            setMobilePreferred(isMobilePreferred: boolean): void;
            setSchedules(schedules: ExtensionScheduleLiteral[]): void;
            setStartDate(date: string | GoogleAdsDate): void;
            setValues(values: string[]): void;
        }

        interface SnippetBuilder extends Base.Builder<SnippetOperation> {
            withEndDate(date: string | GoogleAdsDate): this;
            withHeader(header: string): this;
            withMobilePreferred(isMobilePreferred: boolean): this;
            withSchedules(schedules: ExtensionScheduleLiteral[]): this;
            withStartDate(date: string | GoogleAdsDate): this;
            withValues(values: string[]): this;
        }

        interface SnippetIterator extends Base.Iterator<Snippet> {}

        interface SnippetOperation extends Base.Operation<Snippet> {}

        interface SnippetSelector
            extends Base.Selector<SnippetIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
