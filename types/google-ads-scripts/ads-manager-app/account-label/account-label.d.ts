declare namespace GoogleAdsScripts {
    namespace AdsManagerApp {
        /** Represents a Google Ads account-level label. */
        interface AccountLabel {
            /** Returns the selector of all accounts to which the account label is applied. */
            accounts(): ManagedAccountSelector;
            /** Returns the type of this entity as a String, in this case, "AccountLabel" */
            getEntityType(): string;
            /** Returns the ID of the account label. */
            getId(): number;
            /** Returns the name of the account label. */
            getName(): string;
            /** Removes the account label. */
            remove(): void;
            /** Changes the name of the account label. */
            setName(name: string): void;
        }

        /**
         * An iterator of account labels.
         *
         * Typical usage:
         *
         *
         *      while (accountLabelIterator.hasNext()) {
         *        var accountLabel = accountLabelIterator.next();
         *      }
         */
        interface AccountLabelIterator extends Base.Iterator<AccountLabel> {}

        /**
         * Fetches account labels. Supports filtering.
         *
         * Typical usage:
         *
         *
         *      var accountLabelSelector = AdsManagerApp.accountLabels()
         *          .withCondition("Name CONTAINS 'priority'");
         *
         *      var accountLabelIterator = accountLabelSelector.get();
         *      while (accountLabelIterator.hasNext()) {
         *        var accountLabel = accountLabelIterator.next();
         *      }
         */
        interface AccountLabelSelector
            extends Base.Selector<AccountLabelIterator>,
                Base.SelectorWithCondition,
                Base.SelectorWithIds {}
    }
}
