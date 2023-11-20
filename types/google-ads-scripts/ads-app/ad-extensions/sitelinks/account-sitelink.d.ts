declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface AccountSitelink extends Sitelink {}

        interface AccountSitelinkIterator extends Base.Iterator<AccountSitelink> {}

        interface AccountSitelinkSelector
            extends
                Base.Selector<AccountSitelinkIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit
        {}
    }
}
