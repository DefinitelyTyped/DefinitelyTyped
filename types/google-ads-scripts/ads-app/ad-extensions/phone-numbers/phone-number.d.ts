declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface PhoneNumber extends Base.StatsFor {
            clearEndDate(): void;
            clearStartDate(): void;
            getCountry(): string;
            getEndDate(): GoogleAdsDate;
            getEntityType(): string;
            getId(): number;
            getPhoneNumber(): string;
            getSchedules(): ExtensionSchedule[];
            getStartDate(): GoogleAdsDate;
            isMobilePreferred(): boolean;
            setCountry(appId: string): void;
            setEndDate(date: string | GoogleAdsDate): void;
            setMobilePreferred(isMobilePreferred: boolean): void;
            setPhoneNumber(isMobilePreferred: boolean): void;
            setSchedules(schedules: ExtensionScheduleLiteral[]): void;
            setStartDate(date: string | GoogleAdsDate): void;
        }

        interface PhoneNumberBuilder extends Base.Builder<PhoneNumberOperation> {
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

        interface PhoneNumberIterator extends Base.Iterator<PhoneNumber> {}

        interface PhoneNumberOperation extends Base.Operation<PhoneNumber> {}

        interface PhoneNumberSelector
            extends Base.Selector<PhoneNumberIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
