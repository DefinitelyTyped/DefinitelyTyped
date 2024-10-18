declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface AccountMessage extends Message {}

        interface AccountMessageIterator extends Base.Iterator<AccountMessage> {}

        interface AccountMessageSelector
            extends
                Base.Selector<AccountMessageIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit
        {}
    }
}
