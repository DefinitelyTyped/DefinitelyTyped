declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface Sitelink extends Base.StatsFor {
            clearDescription1(): void;
            clearDescription2(): void;
            clearEndDate(): void;
            clearLinkUrl(): void;
            clearStartDate(): void;
            getDescription1(): string;
            getDescription2(): string;
            getEndDate(): GoogleAdsDate;
            getEntityType(): string;
            getId(): number;
            getLinkText(): string;
            getSchedules(): ExtensionSchedule[];
            getStartDate(): GoogleAdsDate;
            getText(): string;
            isMobilePreferred(): boolean;
            setDescription1(description1: string): void;
            setDescription2(description2: string): void;
            setEndDate(date: string | GoogleAdsDate): void;
            setLinkText(linkText: string): void;
            setMobilePreferred(isMobilePreferred: boolean): void;
            setSchedules(schedules: ExtensionScheduleLiteral[]): void;
            setStartDate(date: string | GoogleAdsDate): void;
            urls(): SitelinkUrls;
        }

        interface SitelinkBuilder extends Base.Builder<SitelinkOperation> {
            withCustomParameters(customParameters: Record<string, string>): this;
            withDescription1(description1: string): this;
            withDescription2(description2: string): this;
            withEndDate(date: string | GoogleAdsDate): this;
            withFinalUrl(finalUrl: string): this;
            withFinalUrlSuffix(suffix: string): this;
            withLinkText(linkText: string): this;
            withMobileFinalUrl(mobileFinalUrl: string): this;
            withMobilePreferred(isMobilePreferred: boolean): this;
            withSchedules(schedules: ExtensionScheduleLiteral[]): this;
            withStartDate(date: string | GoogleAdsDate): this;
            withTrackingTemplate(text: string): this;
        }

        interface SitelinkIterator extends Base.Iterator<Sitelink> {}

        interface SitelinkOperation extends Base.Operation<Sitelink> {}

        interface SitelinkSelector
            extends Base.Selector<SitelinkIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}

        interface SitelinkUrls {
            clearFinalUrlSuffix(): void;
            clearMobileFinalUrl(): void;
            clearTrackingTemplate(): void;
            getCustomParameters(): Record<string, string>;
            getFinalUrl(): string;
            getFinalUrlSuffix(): string;
            getMobileFinalUrl(): string;
            getTrackingTemplate(): string;
            setCustomParameters(customParameters: Record<string, string>): void;
            setFinalUrl(finalUrl: string): void;
            setFinalUrlSuffix(suffix: string): void;
            setMobileFinalUrl(mobileFinalUrl: string): void;
            setTrackingTemplate(trackingTemplate: string): void;
        }
    }
}
