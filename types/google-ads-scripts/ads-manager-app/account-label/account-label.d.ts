// Type definitions for Google Ads Scripts
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../../base.d.ts" />

declare namespace GoogleAdsScripts {
    namespace AdsManagerApp {
        interface AccountLabel {
            /** Returns the selector of all accounts to which the account label is applied. */
            accounts(): ManagedAccountSelector;
            /** Returns the type of this entity as a String, in this case, "AccountLabel" */
            getEntityType(): string;
            /** Returns the ID of the account label. */
            getId(): string;
            /** Returns the name of the account label. */
            getName(): string;
            /** Removes the account label. */
            remove(): void;
            /** Changes the name of the account label. */
            setName(name: string): void;
        }

        interface AccountLabelIterator extends Base.Iterator<AccountLabel> {}

        interface AccountLabelSelector
            extends Base.Selector<AccountLabelIterator>,
                Base.SelectorWithCondition,
                Base.SelectorWithIds {}
    }
}
