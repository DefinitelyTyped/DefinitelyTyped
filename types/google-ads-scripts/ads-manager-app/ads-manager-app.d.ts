// Type definitions for Google Ads Scripts
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./account-label/account-label.d.ts" />
/// <reference path="./managed-account/managed-account.d.ts" />

declare namespace GoogleAdsScripts {
    namespace AdsManagerApp {
        interface AdsManagerApp {
            /** Returns the selector of all account labels in the account. */
            accountLabels(): AccountLabelSelector;
            /** Returns the selector of accounts managed by this MCC account. */
            accounts(): ManagedAccountSelector;
            /**
             * Creates a new account label.
             * @param name The name of the new account label. Label names are case sensitive and must be unique. Max length is 40 characters. Any leading or trailing white spaces will be trimmed.
             */
            createAccountLabel(name: string): void;
            /**
             * Selects a ManagedAccount as the next account on which to operate.
             * This can be used to make changes to an account managed by this MCC.
             */
            select(account: ManagedAccount): void;
        }
    }

    enum ExecutionResultStatus {
        /** Execution has finished successfully. */
        Ok = 'OK',
        /** Execution has failed to finish due to an error. */
        Error = 'ERROR',
        /** Execution has failed to finish because it ran out of time. */
        TimeOut = 'TIMEOUT',
    }

    type ExecutionResultStatusType = `${ExecutionResultStatus}`;

    interface ExecutionResult {
        /** Returns the customer ID of the account. */
        getCustomerId(): string;
        /** Returns null if the execution completed successfully. */
        getError(): string;
        /** Returns null if no value was returned by the function that executed on the account. */
        getReturnValue(): string;
        /** Returns the status of the execution.. */
        getStatus(): ExecutionResultStatusType;
    }
}

declare var AdsManagerApp: GoogleAdsScripts.AdsManagerApp.AdsManagerApp;
declare var MccApp: GoogleAdsScripts.AdsManagerApp.AdsManagerApp;
