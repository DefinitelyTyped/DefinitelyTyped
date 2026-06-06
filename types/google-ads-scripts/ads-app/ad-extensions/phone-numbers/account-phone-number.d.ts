declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface AccountPhoneNumber extends PhoneNumber {}

        interface AccountPhoneNumberIterator extends Base.Iterator<AccountPhoneNumber> {}

        interface AccountPhoneNumberSelector
            extends
                Base.Selector<AccountPhoneNumberIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit
        {}
    }
}
