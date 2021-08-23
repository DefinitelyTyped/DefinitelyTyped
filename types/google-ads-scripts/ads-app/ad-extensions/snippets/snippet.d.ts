declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface Snippet extends Base.StatsFor {
            clearEndDate(): void;
            clearStartDate(): void;
            getEndDate(): GoogleAdsDate;
            getEntityType(): string;
            getHeader(): string;
            getId(): number;
            getSchedules(): ExtensionSchedule[];
            getStartDate(): GoogleAdsDate;
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
