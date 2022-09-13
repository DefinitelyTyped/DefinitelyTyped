declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface MobileApp extends Base.StatsFor {
            clearEndDate(): void;
            clearLinkUrl(): void;
            clearStartDate(): void;
            getAppId(): string;
            getEndDate(): GoogleAdsDate;
            getEntityType(): string;
            getExtensionText(): string;
            getId(): number;
            getLinkText(): string;
            getSchedules(): ExtensionSchedule[];
            getStartDate(): GoogleAdsDate;
            getStore(): string;
            isMobilePreferred(): boolean;
            setAppId(appId: string): void;
            setEndDate(date: string | GoogleAdsDate): void;
            setLinkText(linkText: string): void;
            setMobilePreferred(isMobilePreferred: boolean): void;
            setSchedules(schedules: ExtensionScheduleLiteral[]): void;
            setStartDate(date: string | GoogleAdsDate): void;
            setStore(store: string): void;
            urls(): MobileAppUrls;
        }

        interface MobileAppBuilder extends Base.Builder<MobileAppOperation> {
            withAppId(appId: string): this;
            withCustomParameters(customParameters: string): this;
            withEndDate(date: string | GoogleAdsDate): this;
            withFinalUrl(finalUrl: string): this;
            withFinalUrlSuffix(suffix: string): this;
            withLinkText(linkText: string): this;
            withMobileFinalUrl(mobileFinalUrl: string): this;
            withMessageText(messageText: string): this;
            withMobilePreferred(isMobilePreferred: boolean): this;
            withSchedules(schedules: ExtensionScheduleLiteral[]): this;
            withStartDate(date: string | GoogleAdsDate): this;
            withStore(store: string): this;
            withTrackingTemplate(trackingTemplate: string): this;
        }

        interface MobileAppIterator extends Base.Iterator<MobileApp> {}

        interface MobileAppOperation extends Base.Operation<MobileApp> {}

        interface MobileAppSelector
            extends Base.Selector<MobileAppIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}

        interface MobileAppUrls {
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
