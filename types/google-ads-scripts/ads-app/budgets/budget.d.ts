declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /**
         * Represents a Google Ads budget.
         * Budgets are used for managing the amount of money spent on Google Ads.
         * Budgets may be shared among a number of campaigns; use `Budget.campaigns()` to find the campaigns that are using the budget.
         * For more information on Shared Budgets, please see [AdWords API article](https://developers.google.com/adwords/api/docs/guides/budgets).
         */
        interface Budget extends Base.StatsFor {
            /** Returns the selector of all campaigns that share this budget. */
            campaigns(): CampaignSelector;
            /** Returns the amount of the budget, in the currency of the account. */
            getAmount(): number;
            /** Returns the delivery method of the budget. */
            getDeliveryMethod(): string;
            /** Returns the type of this entity as a String, in this case, "Budget". */
            getEntityType(): string;
            /** Returns the ID of the budget. */
            getId(): number;
            /** Returns the name of the budget. */
            getName(): string;
            /** Returns the total amount of the budget, in the currency of the account. */
            getTotalAmount(): number;
            /** Returns the type of the budget (also known as the period). */
            getType(): string;
            /** Returns true if the budget is explicitly shared, and false otherwise. */
            isExplicitlyShared(): boolean;
            /** Sets the budget's amount to the specified value, in the currency of the account. */
            setAmount(ammount: number): void;
            /** Sets the delivery method of the budget. */
            setDeliveryMethod(deliveryMethod: string): void;
            /** Sets the total budget's amount to the specified value, in the currency of the account. */
            setTotalAmount(totalAmount: number): void;
        }

        /**
         * An iterator of budgets.
         *
         * Typical usage:
         *
         *      while (budgetIterator.hasNext()) {
         *        var budget = budgetIterator.next();
         *      }
         */
        interface BudgetIterator extends Base.Iterator<Budget> {}

        /**
         * Fetches budgets. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var budgetSelector = AdsApp
         *          .budgets()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var budgetIterator = budgetSelector.get();
         *      while (budgetIterator.hasNext()) {
         *        var budget = budgetIterator.next();
         *      }
         */
        interface BudgetSelector
            extends Base.Selector<BudgetIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
