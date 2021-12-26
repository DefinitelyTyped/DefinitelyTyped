declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        // tslint:disable-next-line: no-empty-interface
        interface AccountMobileApp extends MobileApp {}

        interface AccountMobileAppIterator extends Base.Iterator<AccountMobileApp> {}

        interface AccountMobileAppSelector
            extends Base.Selector<AccountMobileAppIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
