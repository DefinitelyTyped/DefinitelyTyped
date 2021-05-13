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
            setLanguage(language: PriceLanguageType): void;
            setMobilePreferred(isMobilePreferred: boolean): void;
            setPriceQualifier(priceQualifier: PriceQualifierType): void;
            setPriceType(priceType: PriceTypeType): void;
            setSchedules(schedules: ExtensionScheduleLiteral[]): void;
            setStartDate(date: string | GoogleAdsDate): void;
            setTrackingTemplate(trackingTemplate: string): void;
        }

        const PriceLanguage: {
            German: "de";
            English: "en";
            Spanish: "es";
            LatinAmericanSpanish: "es-419";
            French: "fr";
            Italian: "it";
            Japanese: "ja";
            Dutch: "nl";
            Polish: "pl";
            BrazilianPortuguese: "pt-BR";
            Portuguese: "pt-PT";
            Russian: "ru";
            Swedish: "sv";
        };

        type PriceLanguageType = typeof PriceLanguage[keyof typeof PriceLanguage];

        const PriceQualifier: {
            From: "FROM";
            UpTo: "UP_TO";
            Average: "AVERAGE";
            None: "NONE";
        };

        type PriceQualifierType = typeof PriceQualifier[keyof typeof PriceQualifier];

        const PriceType: {
            Brands: "BRANDS";
            Events: "EVENTS";
            Locations: "LOCATIONS";
            Neighborhoods: "NEIGHBORHOODS";
            ProductCategories: "PRODUCT_CATEGORIES";
            ProductTiers: "PRODUCT_TIERS";
            Services: "SERVICES";
            ServiceCategories: "SERVICE_CATEGORIES";
            ServiceTiers: "SERVICE_TIERS";
        };

        type PriceTypeType = typeof PriceType[keyof typeof PriceType];

        interface PriceBuilder extends Base.Builder<PriceOperation> {
            addPriceItem(priceItem: PriceItem): this;
            withEndDate(date: string | GoogleAdsDate): this;
            withLanguage(language: PriceLanguageType): this;
            withMobilePreferred(isMobilePreferred: boolean): this;
            withPriceQualifier(priceQualifier: PriceQualifierType): this;
            withPriceType(priceType: PriceTypeType): this;
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
