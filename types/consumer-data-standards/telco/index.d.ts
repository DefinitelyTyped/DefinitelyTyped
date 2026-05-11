/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface ErrorV2 {
    /**
     * The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the _meta_ object. Otherwise, the value is the error code URN.
     */
    code: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     */
    detail: string;
    /**
     * Additional data for customised error codes.
     */
    meta?: {
        /**
         * The CDR error code URN which the application-specific error code extends. Mandatory if the error _code_ is an application-specific error rather than a standardised error code.
         */
        urn?: string | null;
    } | null;
    /**
     * A short, human-readable summary of the problem that **MUST NOT** change from occurrence to occurrence of the problem represented by the error code.
     */
    title: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface Links {
    /**
     * Fully qualified link that generated the current response document.
     */
    self: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface LinksPaginated {
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page.
     */
    first?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page.
     */
    last?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page.
     */
    next?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page.
     */
    prev?: string | null;
    /**
     * Fully qualified link that generated the current response document.
     */
    self: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface Meta {}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface MetaPaginated {
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface RequestAccountIdListV1 {
    data: {
        /**
         * Array of _accountId_ values to obtain data for.
         */
        accountIds: string[];
    };
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface RequestServiceIdListV1 {
    data: {
        /**
         * Array of _serviceId_ values to obtain data for.
         */
        serviceIds: string[];
    };
    meta: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface ResponseErrorListV2 {
    /**
     * List of errors.
     */
    errors: ErrorV2[];
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoAccountBase {
    /**
     * Unique identifier for the account.
     */
    accountId?: string;
    /**
     * Masked identifier of the account as defined by the data holder. This must be the value presented on physical statements (required if it exists) and must not be used for the value of the _accountId_.
     */
    accountNumber?: string | null;
    /**
     * The retail name of the brand.
     */
    brand?: string | null;
    /**
     * The date that the account was created or opened. Mandatory if _openStatus_ is `OPEN`.
     */
    creationDate?: string | null;
    /**
     * An optional display name for the account if one exists or can be derived. The content of this field is at the discretion of the data holder.
     */
    displayName?: string | null;
    /**
     * The date and time which the account was last updated.
     */
    lastUpdated?: string | null;
    /**
     * Open or closed status for the account. If not present then `OPEN` is assumed.
     */
    openStatus?: ("CLOSED" | "OPEN") | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoAccountDetailResponse {
    data: TelcoAccountBase & {
        /**
         * The array of plans containing services and associated plan details.
         */
        plans: (TelcoAccountPlanBase & {
            /**
             * Detail on the plan applicable to this account. Mandatory if _openStatus_ is `OPEN`.
             */
            planDetail?: {
                /**
                 * Charges for metering included in the plan.
                 */
                charges: TelcoProductDetailMeteringCharges[];
            };
        })[];
    };
    links: Links;
    meta: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export type TelcoAccountDetailResponseData = TelcoAccountBase & {
    /**
     * The array of plans containing services and associated plan details.
     */
    plans: (TelcoAccountPlanBase & {
        /**
         * Detail on the plan applicable to this account. Mandatory if _openStatus_ is `OPEN`.
         */
        planDetail?: {
            /**
             * Charges for metering included in the plan.
             */
            charges: TelcoProductDetailMeteringCharges[];
        };
    })[];
};
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * A unique identifier for a Telco account, generated according to [CDR ID Permanence](#id-permanence) requirements.
 */
export type TelcoAccountId = string;
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoAccountListResponse {
    data: {
        /**
         * Array of accounts.
         */
        accounts: (TelcoAccountBase & {
            /**
             * The array of plans containing services and associated plan details.
             */
            plans: TelcoAccountPlanBase[];
        })[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoAccountPlanBase {
    /**
     * The billing type of the plan.
     */
    billingType: "PRE_PAID" | "POST_PAID" | "UPFRONT_PAID" | "OTHER";
    /**
     * Optional display name for the plan provided by the customer to help differentiate multiple plans.
     */
    nickname?: string | null;
    /**
     * Mandatory if _openStatus_ is `OPEN`.
     */
    planOverview?: TelcoAccountPlanOverview;
    /**
     * List of _serviceId_ values.
     */
    serviceIds: string[];
    /**
     * The type of the plan. The type of plan. A [`MOBILE`](https://www.legislation.gov.au/Details/C2022C00170/Html/Volume_1#_Toc95898745) service or `BROADBAND` fixed internet service.
     */
    type: "MOBILE" | "BROADBAND";
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export type TelcoAccountPlanDetail = TelcoAccountPlanBase & {
    /**
     * Detail on the plan applicable to this account. Mandatory if _openStatus_ is `OPEN`.
     */
    planDetail?: {
        /**
         * Charges for metering included in the plan.
         */
        charges: TelcoProductDetailMeteringCharges[];
    };
};
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoAccountPlanOverview {
    /**
     * The name of the plan if one exists.
     */
    displayName?: string | null;
    /**
     * The end date of the applicability of this plan.
     */
    endDate?: string | null;
    /**
     * The start date of the applicability of this plan.
     */
    startDate: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export type TelcoAccountResponseData = TelcoAccountBase & {
    /**
     * The array of plans containing services and associated plan details.
     */
    plans: TelcoAccountPlanBase[];
};
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoAccountUsage {
    /**
     * Unique identifier for the account.
     */
    accountId: string;
    /**
     * List of services that are part of the account.
     */
    services: {
        service: TelcoServiceUsage;
    }[];
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Object that contains links to additional information on specific topics.
 */
export interface TelcoAdditionalInformation {
    /**
     * A link to detail on bundles that this plan can be a part of.
     */
    bundleUri?: string | null;
    /**
     * A link to detail on eligibility criteria for the plan.
     */
    eligibilityUri?: string | null;
    /**
     * A link to a general overview of the plan.
     */
    overviewUri?: string | null;
    /**
     * A link to detail on pricing for the plan.
     */
    pricingUri?: string | null;
    /**
     * A link to terms and conditions for the plan.
     */
    termsUri?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoBalanceListResponse {
    data: {
        /**
         * Array of account balances.
         */
        balances: TelcoBalanceResponseData[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoBalanceResponse {
    /**
     * Object containing account service usage summary.
     */
    data: {
        /**
         * List of services that are part of the account.
         */
        services: TelcoServiceBalance[];
    };
    links: Links;
    meta: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoBalanceResponseData {
    /**
     * Unique identifier for the account.
     */
    accountId: string;
    /**
     * Array of account balances.
     */
    balance: {
        /**
         * List of services that are part of the account.
         */
        services?: TelcoServiceBalance[] | null;
    };
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoBillingAccountTransaction {
    /**
     * Optional array of adjustments arising for this transaction.
     */
    adjustments?: TelcoBillingAccountTransactionAdjustments[] | null;
    /**
     * The amount charged or credited for this transaction prior to any adjustments being applied. A negative value indicates a credit.
     */
    amount: string;
    /**
     * Optional description of the transaction that can be used for display purposes.
     */
    description?: string | null;
    /**
     * Date and time when the usage period ends.
     */
    endDate: string;
    /**
     * The number of the invoice in which this transaction is included if it has been issued.
     */
    invoiceNumber?: string | null;
    /**
     * Array list of service identifiers to which this transaction applies if any. E.g., a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements.
     */
    serviceIds?: string | null;
    /**
     * Date and time when the usage period starts.
     */
    startDate: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoBillingAccountTransactionAdjustments {
    /**
     * The amount of the adjustment.
     */
    amount: string;
    /**
     * A free text description of the adjustment.
     */
    description: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoBillingOnceOffTransaction {
    /**
     * The amount of the charge or credit. A positive value indicates a charge and a negative value indicates a credit.
     */
    amount: string;
    /**
     * A free text description of the item.
     */
    description: string;
    /**
     * The number of the invoice in which this transaction is included if it has been issued.
     */
    invoiceNumber?: string | null;
    /**
     * Unique identifier for the service. A _serviceId_ is an [ID Permanence](#id-permanence) representation of a unique service identifier such as a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g., [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf)
     */
    serviceId?: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoBillingOtherTransaction {
    /**
     * Optional array of adjustments arising for this transaction.
     */
    adjustments?: TelcoBillingAccountTransactionAdjustments[] | null;
    /**
     * The amount of the charge.
     */
    amount: string;
    /**
     * A free text description of the item.
     */
    description: string;
    /**
     * Optional end date for the application of the charge.
     */
    endDate?: string | null;
    /**
     * The number of the invoice in which this transaction is included if it has been issued.
     */
    invoiceNumber?: string | null;
    /**
     * Unique identifier for the service. A _serviceId_ is an [ID Permanence](#id-permanence) representation of a unique service identifier such as a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g., [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf)
     */
    serviceId?: string;
    /**
     * Optional start date for the application of the charge.
     */
    startDate?: string | null;
    /**
     * Type of charge. Assumed to be `OTHER` if absent.
     */
    type?: ("SERVICE" | "NETWORK" | "EQUIPMENT" | "METERING" | "OTHER") | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoBillingPaymentTransaction {
    /**
     * The amount paid.
     */
    amount: string;
    /**
     * The method of payment.
     */
    method: "DIRECT_DEBIT" | "CARD" | "TRANSFER" | "BPAY" | "CASH" | "CHEQUE" | "VOUCHER" | "OTHER";
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoBillingTransaction {
    account?: TelcoBillingAccountTransaction;
    /**
     * Unique identifier for the account.
     */
    accountId: string;
    /**
     * The date and time that the transaction occurred.
     */
    executionDateTime: string;
    /**
     * The GST incurred in the transaction. Should not be included for credits or payments. If absent then zero is assumed.
     */
    gst?: string | null;
    onceOff?: TelcoBillingOnceOffTransaction;
    otherCharges?: TelcoBillingOtherTransaction;
    payment?: TelcoBillingPaymentTransaction;
    /**
     * Indicator of the type of transaction object present in this record.
     */
    transactionUType: "account" | "onceOff" | "otherCharges" | "payment";
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoConcession {
    /**
     * Display text providing more information on the concession.
     */
    additionalInfo?: string | null;
    /**
     * Optional link to additional information regarding the concession.
     */
    additionalInfoUri?: string | null;
    /**
     * Conditional attribute for the amount of discount for the concession - required if _type_ is `FIXED_AMOUNT`.
     */
    amount?: string | null;
    /**
     * Array of ENUM's to specify what the concession applies to. Multiple ENUM values can be provided. If absent, `USAGE` is assumed.
     */
    appliedTo?: ("INVOICE" | "USAGE")[] | null;
    /**
     * Conditional attribute for frequency at which a concession is applied. Required if _type_ is `FIXED_AMOUNT` or `FIXED_PERCENTAGE`. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
     */
    discountFrequency?: string | null;
    /**
     * The display name of the concession.
     */
    displayName: string;
    /**
     * Optional end date for the application of the concession.
     */
    endDate?: string | null;
    /**
     * Conditional attribute for the percentage of discount of concession - required if _type_ is `FIXED_PERCENTAGE`.
     */
    percentage?: string | null;
    /**
     * Optional start date for the application of the concession.
     */
    startDate: string;
    /**
     * The concession type.
     */
    type: "CONCESSION" | "REBATE" | "GRANT";
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoConcessionsResponse {
    data: {
        /**
         * Array may be empty if no concessions exist.
         */
        concessions: TelcoConcession[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of the contract details. Mandatory if the billing type is `POST_PAID` and a contract agreement is required with the service provider for the plan.
 */
export interface TelcoContract {
    /**
     * URI of the contract conditions.
     */
    contractUri?: string | null;
    /**
     * Description of the contract.
     */
    description?: string | null;
    /**
     * Minimum contract duration in months.
     */
    duration: number;
    /**
     * Name of the contract.
     */
    name: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoInvoice {
    accountCharges?: TelcoInvoiceAccountCharges;
    /**
     * Unique identifier for the account.
     */
    accountId: string;
    accountUsage?: TelcoUsage;
    /**
     * The account balance at the time the invoice was issued.
     */
    balanceAtIssue: string;
    /**
     * The date that the invoice is due to be paid.
     */
    dueDate?: string | null;
    /**
     * The total GST amount for this invoice. If absent then zero is assumed.
     */
    gstAmount?: string | null;
    /**
     * The net amount due for this invoice regardless of previous balance.
     */
    invoiceAmount?: string | null;
    /**
     * The number assigned to this invoice by the telco Retailer.
     */
    invoiceNumber: string;
    /**
     * The date that the invoice was actually issued (as opposed to generated or calculated).
     */
    issueDate: string;
    payOnTimeDiscount?: TelcoInvoicePayOnTimeDiscount;
    /**
     * Indicator of the payment status for the invoice.
     */
    paymentStatus: "PAID" | "PARTIALLY_PAID" | "NOT_PAID";
    period?: TelcoInvoicePeriod;
    /**
     * An array of _serviceId_ values to which this invoice applies. May be empty if the invoice contains no usage related charges.
     */
    services: string[];
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Object contain charges and credits related to usage.
 */
export interface TelcoInvoiceAccountCharges {
    otherCharges?: TelcoInvoiceAccountChargesOtherCharges;
    /**
     * The aggregate total of account level discounts or credits for the period covered by the invoice.
     */
    totalDiscounts: string;
    /**
     * The total GST for all account level charges. If absent then zero is assumed.
     */
    totalGst?: string | null;
    /**
     * The aggregate total of any once off charges arising from usage for the period covered by the invoice (exclusive of GST).
     */
    totalOnceOffCharges: string;
    /**
     * The aggregate total of usage charges for the period covered by the invoice (exclusive of GST).
     */
    totalUsageCharges: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Optional array of charges that may be part of the invoice (for example services fees) (exclusive of GST).
 */
export interface TelcoInvoiceAccountChargesOtherCharges {
    /**
     * The aggregate total of charges for this item (exclusive of GST).
     */
    amount: string;
    /**
     * A free text description of the charge.
     */
    description: string;
    /**
     * Type of charge.
     */
    type?:
        | (
            | "SERVICE"
            | "EQUIPMENT"
            | "NETWORK"
            | "HANDSET"
            | "DEVICE"
            | "ENTERTAINMENT"
            | "SUBSCRIPTION"
            | "SOFTWARE"
            | "OTHER"
        )
        | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoInvoiceListResponse {
    data: {
        /**
         * Array of invoices sorted by issue date in descending order.
         */
        invoices: TelcoInvoice[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * A discount for on time payment.
 */
export interface TelcoInvoicePayOnTimeDiscount {
    /**
     * The date by which the invoice must be paid to receive the pay on time discount.
     */
    date: string;
    /**
     * The amount that will be discounted if the invoice is paid by the date specified.
     */
    discountAmount: string;
    /**
     * The GST amount that will be discounted if the invoice is paid by the date specified. If absent then zero is assumed.
     */
    gstAmount?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Object containing the start and end date for the period covered by the invoice. Mandatory if any usage based charges are included in the invoice.
 */
export interface TelcoInvoicePeriod {
    /**
     * The end date of the period covered by this invoice.
     */
    endDate: string;
    /**
     * The start date of the period covered by this invoice.
     */
    startDate: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoInvoiceResponse {
    data: {
        /**
         * Array of invoices sorted by issue date in descending order.
         */
        invoices: TelcoInvoice[];
    };
    links: Links;
    meta: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoPaymentSchedule {
    /**
     * Optional payment amount indicating that a constant payment amount is scheduled to be paid (used in bill smoothing scenarios).
     */
    amount?: string | null;
    cardDebit?: TelcoPaymentScheduleCardDebit;
    digitalWallet?: TelcoPaymentScheduleDigitalWallet;
    directDebit?: TelcoPaymentScheduleDirectDebit;
    manualPayment?: TelcoPaymentScheduleManualPayment;
    /**
     * The type of object present in this response.
     */
    paymentScheduleUType: "cardDebit" | "directDebit" | "manualPayment" | "digitalWallet";
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Represents a regular credit card payment schedule. Mandatory if _paymentScheduleUType_ is set to `cardDebit`.
 */
export interface TelcoPaymentScheduleCardDebit {
    /**
     * The mechanism by which the payment amount is calculated. Explanation of values are as follows:<br/><ul><li>`STATIC`: Indicates a consistent, static amount, per payment</li><li>`BALANCE`: Indicates that the outstanding balance for the account is paid per period</li><li>`CALCULATED`: Indicates that the payment amount is variable and calculated using a pre-defined algorithm.</li></ul>
     */
    calculationType: "STATIC" | "BALANCE" | "CALCULATED";
    /**
     * The type of credit card held on file.
     */
    cardScheme: "VISA" | "MASTERCARD" | "AMEX" | "DINERS" | "OTHER" | "UNKNOWN";
    /**
     * The frequency that payments will occur. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
     */
    paymentFrequency: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Represents a regular payment from a digital wallet. Mandatory if _paymentScheduleUType_ is set to `digitalWallet`.
 */
export interface TelcoPaymentScheduleDigitalWallet {
    /**
     * The mechanism by which the payment amount is calculated. Explanation of values are as follows:<br/><ul><li>`STATIC`: Indicates a consistent, static amount, per payment</li><li>`BALANCE`: Indicates that the outstanding balance for the account is paid per period</li><li>`CALCULATED`: Indicates that the payment amount is variable and calculated using a pre-defined algorithm.</li></ul>
     */
    calculationType: "STATIC" | "BALANCE" | "CALCULATED";
    /**
     * The identifier of the digital wallet (dependent on type).
     */
    identifier: string;
    /**
     * The display name of the wallet as given by the customer, else a default value defined by the data holder.
     */
    name: string;
    /**
     * The frequency that payments will occur. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
     */
    paymentFrequency: string;
    /**
     * The provider of the digital wallet.
     */
    provider: "PAYPAL_AU" | "OTHER";
    /**
     * The type of the digital wallet identifier.
     */
    type: "EMAIL" | "CONTACT_NAME" | "TELEPHONE";
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Represents a regular direct debit from a specified bank account. Mandatory if _paymentScheduleUType_ is set to `directDebit`.
 */
export interface TelcoPaymentScheduleDirectDebit {
    /**
     * The unmasked account number for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces. Is required if _isTokenised_ is absent or `false`.
     */
    accountNumber?: string | null;
    /**
     * The unmasked BSB for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces. Is required if _isTokenised_ is absent or `false`.
     */
    bsb?: string | null;
    /**
     * The mechanism by which the payment amount is calculated. Explanation of values are as follows:<br/><ul><li>`STATIC`: Indicates a consistent, static amount, per payment</li><li>`BALANCE`: Indicates that the outstanding balance for the account is paid per period</li><li>`CALCULATED`: Indicates that the payment amount is variable and calculated using a pre-defined algorithm.</li></ul>
     */
    calculationType: "STATIC" | "BALANCE" | "CALCULATED";
    /**
     * Flag indicating that the account details are tokenised and cannot be shared. `false` if absent.
     */
    isTokenised?: boolean | null;
    /**
     * The frequency that payments will occur. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
     */
    paymentFrequency: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Represents a manual payment schedule where the customer pays in response to a delivered statement. Mandatory if _paymentScheduleUType_ is set to `manualPayment`.
 */
export interface TelcoPaymentScheduleManualPayment {
    /**
     * The frequency with which a bill will be issued. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
     */
    billFrequency: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoPaymentScheduleResponse {
    data: {
        /**
         * Array may be empty if no payment schedules exist.
         */
        paymentSchedules: TelcoPaymentSchedule[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Plan type for this feature.<ul><li>`METERED`: A plan is charged by usage for the feature<li>`UNMETERED`: A plan with no limits for a feature<li>`LIMITED`: Where plan limit inclusions apply<li>`UNSUPPORTED`: Feature is not supported.</ul>
 */
export type TelcoPlanType = "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProduct {
    additionalInformation?: TelcoAdditionalInformation;
    /**
     * A link to an application web page where this plan can be applied for.
     */
    applicationUri?: string | null;
    /**
     * The type of product.
     */
    billingType: "PRE_PAID" | "POST_PAID" | "UPFRONT_PAID" | "OTHER";
    /**
     * The ID of the brand under which this product is offered.
     */
    brand: string;
    /**
     * The display name of the brand under which this product is offered.
     */
    brandName: string;
    /**
     * Required if part of a bundle. If not present `false` is assumed.
     */
    bundle?: boolean | null;
    contract?: TelcoContract;
    /**
     * A description of the product.
     */
    description?: string | null;
    /**
     * The display name of the product.
     */
    displayName?: string | null;
    /**
     * The date and time from which this product is effective (i.e. is available for origination). Used to enable the articulation of products to the regime before they are available for customers to originate.
     */
    effectiveFrom?: string | null;
    /**
     * The date and time at which this product will be retired and will no longer be offered. Used to enable the managed deprecation of plans.
     */
    effectiveTo?: string | null;
    /**
     * The last date and time that the information for this plan was changed (or the creation date for the plan if it has never been altered).
     */
    lastUpdated?: string | null;
    /**
     * List of pricing details for the product plan.
     */
    pricing: TelcoProductPricing[];
    /**
     * A data holder-specific unique identifier for a Telco product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.
     */
    productId: string;
    /**
     * The purpose type of the product. If absent, then the value `PERSONAL` is assumed.
     */
    purpose?: ("PERSONAL" | "BUSINESS" | "ALL") | null;
    /**
     * The ID of the Third-Party through which this product may be originated.
     */
    thirdPartyAgentId?: string | null;
    /**
     * The display name of the Third-Party through which this product may be originated.
     */
    thirdPartyAgentName?: string | null;
    /**
     * The type of product. [`MOBILE`](https://www.legislation.gov.au/Details/C2022C00170/Html/Volume_1#_Toc95898745) service or `BROADBAND` fixed internet service.
     */
    type: "MOBILE" | "BROADBAND";
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export type TelcoProductDetail = TelcoProduct & {
    /**
     * Charges for metering included in the plan.
     */
    meteringCharges?: TelcoProductDetailMeteringCharges[];
    /**
     * Bundles the product can be part of.
     */
    bundles?: TelcoProductDetailBundles[];
    /**
     * Plans associated to the product.
     */
    plans?: TelcoProductDetailPlan[];
    /**
     * Discounts associated to the product.
     */
    discounts?: TelcoProductDetailDiscounts[];
    /**
     * Incentives associated to the product.
     */
    incentives?: TelcoProductDetailIncentives[];
};
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductDetailBundles {
    /**
     * The URI of the product bundle.
     */
    bundleUri?: string | null;
    /**
     * The description of the product bundle.
     */
    description?: string | null;
    /**
     * The display name of the product bundle.
     */
    displayName: string;
    /**
     * Optional list of features of the bundle.
     */
    features?: TelcoProductDetailFeature[] | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductDetailDiscountFeature {
    /**
     * The description of the discount feature.
     */
    description?: string | null;
    /**
     * The display name of the discount feature.
     */
    displayName: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductDetailDiscounts {
    /**
     * The description name of the product plan.
     */
    description?: string | null;
    /**
     * The URI of the discount.
     */
    discountUri?: string | null;
    /**
     * The display name of the product plan.
     */
    displayName: string;
    /**
     * Optional list of features of the discount.
     */
    features?: TelcoProductDetailDiscountFeature[] | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductDetailFeature {
    /**
     * The type of the feature.
     */
    category?:
        | (
            | "DATA"
            | "VOICE"
            | "MESSAGING"
            | "HANDSET"
            | "DEVICE"
            | "NETWORK"
            | "ENTERTAINMENT"
            | "SUBSCRIPTION"
            | "SOFTWARE"
            | "OTHER"
        )
        | null;
    /**
     * The description of the feature.
     */
    description?: string | null;
    /**
     * The display name of the feature.
     */
    displayName: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductDetailIncentiveFeature {
    /**
     * The description of the incentive feature.
     */
    description?: string | null;
    /**
     * The display name of the incentive feature.
     */
    displayName: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductDetailIncentives {
    /**
     * The description of the incentive.
     */
    description?: string | null;
    /**
     * The display name of the incentive.
     */
    displayName: string;
    /**
     * Optional list of features of the incentive.
     */
    features?: TelcoProductDetailIncentiveFeature[] | null;
    /**
     * The URI of the incentive.
     */
    incentiveUri?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductDetailMeteringCharges {
    /**
     * Description of the charge.
     */
    description?: string | null;
    /**
     * Display name of the charge.
     */
    displayName: string;
    /**
     * The upper limit of the charge if the charge could occur in a range.
     */
    maximumValue?: string | null;
    /**
     * Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified.
     */
    minimumValue: string;
    /**
     * The charges that occur on a schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
     */
    period?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductDetailPlan {
    /**
     * The display name of the product plan.
     */
    description?: string | null;
    /**
     * The display name of the product plan.
     */
    displayName: string;
    /**
     * Optional list of features of the plan.
     */
    features?: TelcoProductDetailPlanFeature[] | null;
    /**
     * The URI of the product plan.
     */
    planUri?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductDetailPlanFeature {
    /**
     * The description of the feature.
     */
    description?: string | null;
    /**
     * The display name of the feature.
     */
    displayName: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * A data holder-specific unique identifier for a Telco product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.
 */
export type TelcoProductId = string;
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductListResponse {
    data: {
        /**
         * Array of Products.
         */
        plans: TelcoProduct[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductPricing {
    /**
     * The amount charged for the duration period.
     */
    amount: string;
    /**
     * The description of the pricing.
     */
    description: string;
    /**
     * The display name of the pricing.
     */
    name: string;
    /**
     * The duration that occurs on a pricing schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
     */
    period?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductResponse {
    data: TelcoProduct & {
        /**
         * Charges for metering included in the plan.
         */
        meteringCharges?: TelcoProductDetailMeteringCharges[];
        /**
         * Bundles the product can be part of.
         */
        bundles?: TelcoProductDetailBundles[];
        /**
         * Plans associated to the product.
         */
        plans?: TelcoProductDetailPlan[];
        /**
         * Discounts associated to the product.
         */
        discounts?: TelcoProductDetailDiscounts[];
        /**
         * Incentives associated to the product.
         */
        incentives?: TelcoProductDetailIncentives[];
    };
    links: Links;
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoServiceBalance {
    balance: TelcoServiceBalances;
    /**
     * Optional description of the service used for display purposes.
     */
    displayName?: string | null;
    /**
     * Date when the balance period ends.
     */
    endDate?: string | null;
    /**
     * Required if the service includes a phone number.
     */
    phoneNumber?: string | null;
    /**
     * Unique identifier for the service. A _serviceId_ is an [ID Permanence](#id-permanence) representation of a unique service identifier such as a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g., [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf)
     */
    serviceId: string;
    /**
     * Date when the balance period started.
     */
    startDate: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of data balances.
 */
export interface TelcoServiceBalanceData {
    /**
     * Remaining value amount of data available. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
     */
    amount?: string | null;
    /**
     * An overview of plan limits. Required unless _planType_ is `UNSUPPORTED`.
     */
    description?: string | null;
    /**
     * Remaining download data in megabytes (MB). Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
     */
    download?: number | null;
    /**
     * Plan type for this feature.<ul><li>`METERED`: A plan is charged by usage for the feature<li>`UNMETERED`: A plan with no limits for a feature<li>`LIMITED`: Where plan limit inclusions apply<li>`UNSUPPORTED`: Feature is not supported.</ul>
     */
    planType: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
    roaming?: TelcoServiceBalanceDataRoaming;
    /**
     * Remaining upload data in megabytes (MB). Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
     */
    upload?: number | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Balance of data roaming charges. Required unless _planType_ is `UNSUPPORTED`.
 */
export interface TelcoServiceBalanceDataRoaming {
    /**
     * Amount value of data roaming charges. Required unless _planType_ is `UNSUPPORTED`.
     */
    amount?: string | null;
    /**
     * An overview of plan limits. Required unless _planType_ is `UNSUPPORTED`.
     */
    description?: string | null;
    /**
     * Amount of data used overseas in megabytes (MB). Required unless _planType_ is `UNSUPPORTED`.
     */
    download?: number | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of messaging. Required if messaging services are included in the product plan.
 */
export interface TelcoServiceBalanceMessaging {
    mms?: TelcoServiceBalanceMessagingMms;
    /**
     * Plan type for this feature.<ul><li>`METERED`: A plan is charged by usage for the feature<li>`UNMETERED`: A plan with no limits for a feature<li>`LIMITED`: Where plan limit inclusions apply<li>`UNSUPPORTED`: Feature is not supported.</ul>
     */
    planType?: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
    sms?: TelcoServiceBalanceMessagingSms;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of MMS Balance. Required if the service plan supports MMS messaging.
 */
export interface TelcoServiceBalanceMessagingMms {
    /**
     * Amount value of MMS messages remaining. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
     */
    amount?: string | null;
    /**
     * An overview of plan limits. Required unless _planType_ is `UNSUPPORTED`.
     */
    description?: string | null;
    /**
     * Number of international MMS messages remaining. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
     */
    international?: number | null;
    /**
     * Number of national MMS messages remaining. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
     */
    national?: number | null;
    /**
     * Number of roaming MMS messages remaining. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
     */
    roaming?: number | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of SMS Balance. Required if the service plan supports SMS messaging.
 */
export interface TelcoServiceBalanceMessagingSms {
    /**
     * Amount value of SMS messages remaining. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
     */
    amount?: string | null;
    /**
     * An overview of plan limits. Required unless _planType_ is `UNSUPPORTED`.
     */
    description?: string | null;
    /**
     * Number of international SMS messages remaining. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
     */
    international?: number | null;
    /**
     * Number of national SMS messages remaining. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
     */
    national?: number | null;
    /**
     * Number of roaming SMS messages remaining. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
     */
    roaming?: number | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * A summary of Service balances.
 */
export interface TelcoServiceBalances {
    data?: TelcoServiceBalanceData;
    messaging?: TelcoServiceBalanceMessaging;
    voice?: TelcoServiceBalanceVoice;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of voice balances. Required if voice calls are included in product plan.
 */
export interface TelcoServiceBalanceVoice {
    international?: TelcoServiceBalanceVoiceInternational;
    national?: TelcoServiceBalanceVoiceNational;
    /**
     * Plan type for this feature.<ul><li>`METERED`: A plan is charged by usage for the feature<li>`UNMETERED`: A plan with no limits for a feature<li>`LIMITED`: Where plan limit inclusions apply<li>`UNSUPPORTED`: Feature is not supported.</ul>
     */
    planType: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
    roaming?: TelcoServiceBalanceVoiceRoaming;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * International voice calls.
 */
export interface TelcoServiceBalanceVoiceInternational {
    /**
     * Amount value of international calls available. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
     */
    amount?: string | null;
    /**
     * An overview of plan limits. Required unless _planType_ is `UNSUPPORTED`.
     */
    description?: string | null;
    /**
     * Total duration (hours, minutes, and seconds) of international voice calls available. Not limited to 24hrs. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
     */
    duration?: string | null;
    /**
     * Number of international voice calls available Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
     */
    number?: number | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * National voice calls.
 */
export interface TelcoServiceBalanceVoiceNational {
    /**
     * Amount balance of national calls. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
     */
    amount?: string | null;
    /**
     * An overview of plan limits. Required unless _planType_ is `UNSUPPORTED`.
     */
    description?: string | null;
    /**
     * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
     */
    duration?: string | null;
    /**
     * Number of national voice calls. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
     */
    number?: number | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Roaming voice calls.
 */
export interface TelcoServiceBalanceVoiceRoaming {
    /**
     * Amount value of roaming calls available. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
     */
    amount?: string | null;
    /**
     * An overview of plan limits. Required unless _planType_ is `UNSUPPORTED`.
     */
    description?: string | null;
    /**
     * Total duration (hours, minutes, and seconds) of roaming voice calls available. Not limited to 24hrs. Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
     */
    duration?: string | null;
    /**
     * Number of roaming voice calls available Required unless _planType_ is `UNSUPPORTED` or `UNMETERED`.
     */
    number?: number | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * A unique identifier for a Telco service, generated according to [CDR ID Permanence](#id-permanence) requirements.
 */
export type TelcoServiceId = string;
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoServiceUsage {
    /**
     * Optional description of the service used for display purposes.
     */
    displayName?: string | null;
    /**
     * Date when the usage period ends.
     */
    endDate?: string | null;
    /**
     * Required if the service includes a phone number.
     */
    phoneNumber?: string | null;
    /**
     * Unique identifier for the service. A _serviceId_ is an [ID Permanence](#id-permanence) representation of a unique service identifier such as a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g., [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf)
     */
    serviceId: string;
    /**
     * Date when the usage period started.
     */
    startDate: string;
    usage?: TelcoUsage;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoServiceUsageResponse {
    data: TelcoServiceUsage;
    links: Links;
    meta: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoTransactionListResponse {
    data: {
        /**
         * Array of transactions sorted by date and time in descending order.
         */
        transactions: TelcoBillingTransaction[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Object containing usage summary.
 */
export interface TelcoUsage {
    data?: TelcoUsageData;
    messaging?: TelcoUsageMessaging;
    voice?: TelcoUsageVoice;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of data usage.
 */
export interface TelcoUsageData {
    /**
     * Cost amount of data usage.
     */
    amount: string;
    /**
     * Amount of data downloaded in megabytes (MB).
     */
    download: number;
    /**
     * Required if roaming is supported.
     */
    roaming?: TelcoUsageDataRoaming;
    /**
     * Number of data sessions.
     */
    sessions?: number | null;
    /**
     * Amount of data uploaded in megabytes (MB).
     */
    upload: number;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Roaming Data Usage.
 */
export interface TelcoUsageDataRoaming {
    /**
     * Amount value of data roaming charges.
     */
    amount?: string | null;
    /**
     * Amount of data used while roaming in megabytes (MB).
     */
    download?: number | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoUsageListResponse {
    data: {
        /**
         * Array of usage on accounts.
         */
        accounts: TelcoAccountUsage[];
    };
    links: Links;
    meta: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of messaging. Required if messaging services is included in the product plan.
 */
export interface TelcoUsageMessaging {
    mms: TelcoUsageMessagingMms;
    sms: TelcoUsageMessagingSms;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of MMS usage.
 */
export interface TelcoUsageMessagingMms {
    /**
     * Cost amount of MMS messages.
     */
    amount: string;
    /**
     * Number of international MMS messages sent.
     */
    international?: number | null;
    /**
     * Number of national MMS messages sent.
     */
    national: number;
    /**
     * Number of roaming SMS messages sent. Including premium SMS services.
     */
    roaming?: number | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of SMS usage.
 */
export interface TelcoUsageMessagingSms {
    /**
     * Cost amount of SMS messages. Including premium SMS services.
     */
    amount: string;
    /**
     * Number of international SMS messages sent. Including premium SMS services.
     */
    international?: number | null;
    /**
     * Number of national SMS messages sent. Including premium SMS services.
     */
    national: number;
    /**
     * Number of roaming SMS messages sent. Including premium SMS services.
     */
    roaming?: number | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoUsageResponse {
    data: TelcoAccountUsage;
    links: Links;
    meta: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of voice calls. Required if voice calls are included in product plan.
 */
export interface TelcoUsageVoice {
    international: TelcoUsageVoiceInternational;
    national: TelcoUsageVoiceNational;
    roaming: TelcoUsageVoiceRoaming;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * International voice calls. Required if international calling is supported.
 */
export interface TelcoUsageVoiceInternational {
    /**
     * Cost amount of international voice calls.
     */
    amount: string;
    /**
     * Total duration (hours, minutes, and seconds) of international voice calls. Not limited to 24hrs.
     */
    duration: string;
    /**
     * Number of international voice calls.
     */
    number: number;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * National voice calls.
 */
export interface TelcoUsageVoiceNational {
    /**
     * Cost amount of national calls.
     */
    amount: string;
    /**
     * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs.
     */
    duration: string;
    /**
     * Number of national voice calls.
     */
    number: number;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Roaming voice calls, Required if roaming is supported.
 */
export interface TelcoUsageVoiceRoaming {
    /**
     * Cost amount of roaming voice calls.
     */
    amount: string;
    /**
     * Total duration (hours, minutes, and seconds) of roaming voice calls. Not limited to 24hrs.
     */
    duration: string;
    /**
     * Number of roaming voice calls.
     */
    number: number;
}
