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
        interface Callout {
            clearEndDate(): void;
            clearStartDate(): void;
            getEndDate(): GoogleAdsDate;
            getEntityType(): String;
            getId(): number;
            getSchedules(): ExtensionSchedule[];
            getStartDate(): GoogleAdsDate;
            /** Returns stats for the specified date range. */
            getStatsFor(dateRange: Base.DateRange): Stats;
            /** Returns stats for the specified date range. */
            getStatsFor(dateFrom: string | GoogleAdsDate, dateTo: string | GoogleAdsDate): Stats;
            getText(): string;
            isMobilePreferred(): boolean;
            setEndDate(date: string | GoogleAdsDate): void;
            setMobilePreferred(isMobilePreferred: boolean): void;
            setSchedules(schedules: ExtensionScheduleLiteral[]): void;
            setStartDate(date: string | GoogleAdsDate): void;
            setText(text: string): void;
        }

        interface CalloutBuilder extends Base.Builder<CalloutOperation> {
            withEndDate(date: string | GoogleAdsDate): this;
            withMobilePreferred(isMobilePreferred: boolean): this;
            withSchedules(schedules: ExtensionScheduleLiteral[]): this;
            withStartDate(date: string | GoogleAdsDate): this;
            withText(text: string): this;
        }

        interface CalloutIterator extends Base.Iterator<Callout> {}

        interface CalloutOperation extends Base.Operation<Callout> {}

        interface CalloutSelector
            extends Base.Selector<CalloutIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
