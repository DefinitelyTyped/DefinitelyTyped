declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface Price extends Base.StatsFor {
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
