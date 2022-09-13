declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface Message extends Base.StatsFor {
            clearEndDate(): void;
            clearStartDate(): void;
            getBusinessName(): string;
            getCountryCode(): string;
            getEndDate(): GoogleAdsDate;
            getEntityType(): string;
            getExtensionText(): string;
            getId(): number;
            getMessageText(): string;
            getPhoneNumber(): string;
            getSchedules(): ExtensionSchedule[];
            getStartDate(): GoogleAdsDate;
            isMobilePreferred(): boolean;
            setBusinessName(businessName: string): void;
            setCountryCode(countryCode: string): void;
            setEndDate(date: string | GoogleAdsDate): void;
            setExtensionText(extensionText: string): void;
            setMessageText(messageText: string): void;
            setMobilePreferred(isMobilePreferred: boolean): void;
            setPhoneNumber(phoneNumber: string): void;
            setSchedules(schedules: ExtensionScheduleLiteral[]): void;
            setStartDate(date: string | GoogleAdsDate): void;
        }

        interface MessageBuilder extends Base.Builder<MessageOperation> {
            withBusinessName(businessName: string): this;
            withCountryCode(countryCode: string): this;
            withEndDate(date: string | GoogleAdsDate): this;
            withExtensionText(extensionText: string): this;
            withMessageText(messageText: string): this;
            withMobilePreferred(isMobilePreferred: boolean): this;
            withPhoneNumber(phoneNumber: string): this;
            withSchedules(schedules: ExtensionScheduleLiteral[]): this;
            withStartDate(date: string | GoogleAdsDate): this;
        }

        interface MessageIterator extends Base.Iterator<Message> {}

        interface MessageOperation extends Base.Operation<Message> {}

        interface MessageSelector
            extends Base.Selector<MessageIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
