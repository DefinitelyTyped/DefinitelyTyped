declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface Callout extends Base.StatsFor {
            clearEndDate(): void;
            clearStartDate(): void;
            getEndDate(): GoogleAdsDate;
            getEntityType(): string;
            getId(): number;
            getSchedules(): ExtensionSchedule[];
            getStartDate(): GoogleAdsDate;
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
