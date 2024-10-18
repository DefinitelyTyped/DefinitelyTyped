declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface AccountCallout extends Callout {}

        interface AccountCalloutIterator extends Base.Iterator<AccountCallout> {}

        interface AccountCalloutSelector
            extends
                Base.Selector<AccountCalloutIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit
        {}
    }
}
