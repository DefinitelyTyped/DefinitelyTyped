declare namespace GoogleAdsScripts {
    namespace AdsManagerApp {
        interface ManagedAccount extends Base.StatsFor {
            /** Applies an account label to the managed account. */
            applyLabel(name: string): void;
            /**
             * Returns the currency code of the account. The returned values are in the three-letter ISO 4217 format, e.g. 'USD', 'CAD', 'JPY', etc.
             *
             * Please refer to [AdWords API Currency Codes](https://developers.google.com/adwords/api/docs/appendix/codes-formats#currency-codes)
             * for the full list of possible return values.
             */
            getCurrencyCode(): string; // TODO: Add currency code enum
            /** Returns the customer ID of the account. */
            getCustomerId(): string;
            /** Returns the type of this entity as a String, in this case, "Account". */
            getEntityType(): string;
            /** Returns the name of the account. */
            getName(): string;
            /**
             * Returns the POSIX time zone of the account.
             *
             * Returned values are in the standard time zone identifier form, such as 'America/Los_Angeles'.
             *
             * Please refer to [AdWords API Timezones](https://developers.google.com/adwords/api/docs/appendix/codes-formats#timezone-ids)
             * for the full list of possible return values.
             */
            getTimeZone(): string; // TODO: Add timezone enum
            /** Creates a selector of all account labels that exist in the MCC account. */
            labels(): AccountLabelSelector;
            /** Removes an account label from the managed account. */
            removeLabel(name: string): void;
        }

        /**
         * An iterator of accounts.
         *
         * Typical usage:
         *
         *
         *      while (accountIterator.hasNext()) {
         *        var account = accountIterator.next();
         *      }
         */
        interface ManagedAccountIterator extends Base.Iterator<ManagedAccount> {}

        /**
         * Fetches accounts. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *
         *      var accountSelector = AdsManagerApp
         *          .accounts()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var accountIterator = accountSelector.get();
         *      while (accountIterator.hasNext()) {
         *        var account = accountIterator.next();
         *      }
         */
        interface ManagedAccountSelector
            extends Base.Selector<ManagedAccountIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {
            /**
             * Executes the function specified by functionName on each ManagedAccount that the AccountSelector matches.
             * Once all the accounts have been processed, the callback function, if specified by `optionalCallbackFunctionName`, is executed once.
             * The input, if specified by `optionalInput`, will be passed into the function specified by `functionName`. For example,
             *
             *      accountSelector.executeInParallel(functionName, optionalCallbackFunctionName, optionalInput)
             *
             * The input can then be accessed in the function like this:
             *
             *      function functionName(optionalInput) {
             *        Logger.log(optionalInput);
             *      }
             * The function specified by functionName can optionally return a string. For example,
             *
             *      return "Account name";
             *      return "$100.22";
             *      return "client@companyA.com";
             *      return "5";
             *
             * `JSON.stringify(value)` can be used to convert a value to JSON and then return the string. For example,
             *
             *
             *       return JSON.stringify({value:10, list:[1,2,3,4,5,6], name: "Joe Smith"});
             *
             * These will be passed into the callback function in a list of ExecutionResult objects.
             * If `JSON.stringify(value)` is used in the callback function, the value can then be turned back into a JavaScript object with `JSON.parse(returnValue)`.
             *
             * For example,
             *
             *
             *      function optionalCallbackFunctionName(results) {
             *        for (var i = 0; i < results.length; i++) {
             *          object = JSON.parse(results[i].getReturnValue());
             *        }
             *      }
             *
             * `executeInParallel` can operate simultaneously on up to 50 accounts.
             * If the selector contains more than 50 accounts, an exception is thrown and no accounts are processed.
             * You can limit the number of accounts for the executeInParallel method using `accountSelector.withLimit(accountLimit)`.
             *
             * The signature for the optionalCallbackFunctionName should be:
             *
             *
             *      function callbackMethod(results: ExecutionResult[]) {
             *
             *      }
             *
             * @param functionName The name of the function to execute for each ManagedAccount in the selector.
             * @param optionalCallbackFunctionName Optional. The name of the function to execute, in the scope of the MCC account,
             * once processing of the accounts in the selector has completed. This function will only be executed once.
             * @param optionalInput Optional. A string that can be specified that will be passed into the function being executed for each account.
             */
            executeInParallel(
                functionName: string,
                optionalCallbackFunctionName?: string,
                optionalInput?: string,
            ): void;
            /**
             * Restricts this selector to return only customers with the given customer IDs.
             *
             *      var customerIds = ['123-456-7890', '234-567-8901', '345-678-9012'];
             *      selector = selector.withIds(customerIds);
             *
             * The resulting selector can be further refined by applying additional conditions to it.
             * The ID-based condition will then be AND-ed together with all the other conditions, including any other ID-based conditions. So, for instance, the following selector:
             *
             *      AdsManagerApp.accounts()
             *         .withIds(['123-456-7890', '234-567-8901', '345-678-9012'])
             *         .withIds(['345-678-9012', '456-789-0123', '567-890-1234']);
             *
             * will only get the customer with ID 345-678-9012, since it would be the only customer that satisfies both ID conditions.
             *
             * The customer IDs can be passed in either as numbers, or as hyphen-separated strings. The following two calls do the same thing:
             *
             *      accounts.withIds(['123-456-7890', '234-567-8901', '345-678-9012']);
             *      accounts.withIds([1234567890, 2345678901, 3456789012]);
             */
            withIds(ids: number | string[]): this;
        }
    }
}
