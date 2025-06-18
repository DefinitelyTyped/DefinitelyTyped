declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /**
         * Represents a Google Ads budget order. Budget orders are used for managing client budgets at the account level.
         * Each budget order is associated with a billing account which can take invoices for consolidated billing.
         * For details about budget orders and billing accounts, see Budget Order Service.
         */
        interface BudgetOrder {
            /** Returns the associated billing account. */
            getBillingAccount(): BillingAccount;
            /** Returns the budget order's end date or null if there is no end date. */
            getEndDateTime(): GoogleAdsDate;
            /** Returns the ID of the budget order. */
            getId(): number;
            /** Returns the name of the budget order. */
            getName(): string;
            /** Returns the purchase order number. */
            getPoNumber(): number;
            /** Returns the effective spending limit in the account's currency, including all adjustments that have been applied to the budget order. */
            getSpendingLimit(): number;
            /** Returns the budget order's start date. */
            getStartDateTime(): GoogleAdsDate;
            /** Returns the total adjustments that have been applied to the spending limit, in the account's currency. */
            getTotalAdjustments(): number;
        }

        /**
         * An iterator of budgetOrders.
         *
         * Typical usage:
         *
         *      while (budgetOrderIterator.hasNext()) {
         *        var budgetOrder = budgetOrderIterator.next();
         *      }
         */
        interface BudgetOrderIterator extends Base.Iterator<BudgetOrder> {}

        /**
         * Fetches budget orders.
         *
         * Typical usage:
         *
         *      var budgetOrderIterator = AdsApp.budgetOrders()
         *        .withCondition("Status = ACTIVE")
         *        .get();
         */
        interface BudgetOrderSelector extends Base.Selector<BudgetOrderIterator>, Base.SelectorWithCondition {}
    }
}
