/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export type BankingAccountDetailV3 = BankingAccountV2 & {
    /**
     * The unmasked BSB for the account. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.
     */
    bsb?: string;
    /**
     * The unmasked account number for the account. Should not be supplied if the account number is a PAN requiring PCI compliance. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.
     */
    accountNumber?: string;
    /**
     * Optional field to indicate if this account is part of a bundle that is providing additional benefit to the customer.
     */
    bundleName?: string;
    /**
     * The type of structure to present account specific fields.
     */
    specificAccountUType?: "creditCard" | "loan" | "termDeposit";
    termDeposit?: BankingTermDepositAccount[];
    creditCard?: BankingCreditCardAccount;
    loan?: BankingLoanAccountV2;
    /**
     * Current rate to calculate interest earned being applied to deposit balances as it stands at the time of the API call.
     */
    depositRate?: string;
    /**
     * The current rate to calculate interest payable being applied to lending balances as it stands at the time of the API call.
     */
    lendingRate?: string;
    /**
     * Fully described deposit rates for this account based on the equivalent structure in Product Reference.
     */
    depositRates?: BankingProductDepositRate[];
    /**
     * Fully described lending rates for this account based on the equivalent structure in Product Reference.
     */
    lendingRates?: BankingProductLendingRateV2[];
    /**
     * Array of features of the account based on the equivalent structure in Product Reference with the following additional field.
     */
    features?: (BankingProductFeatureV2 & {
        /**
         * `true` if the feature is already activated and `false` if the feature is available for activation. Defaults to `true` if absent.<br>Note: this is an additional field appended to the feature object defined in the Product Reference payload.
         */
        isActivated?: boolean;
    })[];
    /**
     * Fees and charges applicable to the account based on the equivalent structure in Product Reference.
     */
    fees?: BankingProductFee[];
    /**
     * The addresses for the account to be used for correspondence.
     */
    addresses?: CommonPhysicalAddress[];
};
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export type BankingAccountDetailV4 = BankingAccountV2 & {
    /**
     * The unmasked BSB for the account. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.
     */
    bsb?: string;
    /**
     * The unmasked account number for the account. Should not be supplied if the account number is a PAN requiring PCI compliance. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.
     */
    accountNumber?: string;
    /**
     * Optional field to indicate if this account is part of a bundle that is providing additional benefit to the customer.
     */
    bundleName?: string;
    /**
     * The type of structure to present account specific fields.
     */
    specificAccountUType?: "creditCard" | "loan" | "termDeposit";
    /**
     * Mandatory if the _specificAccountUType_ value is `termDeposit`.
     */
    termDeposit?: BankingTermDepositAccount[];
    /**
     * Mandatory if the _specificAccountUType_ value is `creditCard`.
     */
    creditCard?: BankingCreditCardAccount;
    /**
     * Mandatory if the _specificAccountUType_ value is `loan`.
     */
    loan?: BankingLoanAccountV3;
    /**
     * Current rate to calculate interest earned being applied to deposit balances as it stands at the time of the API call.
     */
    depositRate?: string;
    /**
     * The current rate to calculate interest payable being applied to lending balances as it stands at the time of the API call.
     */
    lendingRate?: string;
    /**
     * Fully described deposit rates for this account based on the equivalent structure in Product Reference.
     */
    depositRates?: BankingProductDepositRateV2[];
    /**
     * Fully described lending rates for this account based on the equivalent structure in Product Reference.
     */
    lendingRates?: BankingProductLendingRateV3[];
    /**
     * Array of features of the account based on the equivalent structure in Product Reference with the following additional field.
     */
    features?: (BankingProductFeatureV3 & {
        /**
         * <ul><li>`ACTIVATED` if the feature has been activated by the customer or is a standard feature of the product</li><li>`NOT_ACTIVATED` if the feature is not activated but is available for activation</li><li>`UNKNOWN` or absent if the activation state is unknown.</ul>**Note:** This is an additional field appended to the feature structure defined in the Product Reference payload.
         */
        isActivated?: "ACTIVATED" | "NOT_ACTIVATED" | "UNKNOWN";
    })[];
    /**
     * Fees and charges applicable to the account based on the equivalent structure in Product Reference.
     */
    fees?: BankingProductFeeV2[];
    /**
     * The addresses for the account to be used for correspondence.
     */
    addresses?: CommonPhysicalAddress[];
};
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export type BankingAccountDetailV5 = BankingAccountV3 & {
    /**
     * The unmasked BSB for the account. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.
     */
    bsb?: string;
    /**
     * The unmasked account number for the account. Should not be supplied if the account number is a PAN requiring PCI compliance. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.
     */
    accountNumber?: string;
    /**
     * Optional field to indicate if this account is part of a bundle that is providing additional benefit to the customer.
     */
    bundleName?: string;
    instalments?: BankingProductInstalments;
    /**
     * The type of structure to present account specific fields.
     */
    specificAccountUType?: "creditCard" | "loan" | "termDeposit";
    /**
     * Mandatory if the _specificAccountUType_ value is `termDeposit`.
     */
    termDeposit?: BankingTermDepositAccount[];
    /**
     * Mandatory if the _specificAccountUType_ value is `creditCard`.
     */
    creditCard?: BankingCreditCardAccount;
    /**
     * Mandatory if the _specificAccountUType_ value is `loan`.
     */
    loan?: BankingLoanAccountV3;
    /**
     * Current rate to calculate interest earned being applied to deposit balances as it stands at the time of the API call.
     */
    depositRate?: string;
    /**
     * The current rate to calculate interest payable being applied to lending balances as it stands at the time of the API call.
     */
    lendingRate?: string;
    /**
     * Fully described deposit rates for this account based on the equivalent structure in Product Reference.
     */
    depositRates?: BankingProductDepositRateV2[];
    /**
     * Fully described lending rates for this account based on the equivalent structure in Product Reference.
     */
    lendingRates?: BankingProductLendingRateV3[];
    /**
     * Array of features of the account based on the equivalent structure in Product Reference with the following additional field.
     */
    features?: (BankingProductFeatureV4 & {
        /**
         * <ul><li>`ACTIVATED` if the feature has been activated by the customer or is a standard feature of the product</li><li>`NOT_ACTIVATED` if the feature is not activated but is available for activation</li><li>`UNKNOWN` or absent if the activation state is unknown.</ul>**Note:** This is an additional field appended to the feature structure defined in the Product Reference payload.
         */
        isActivated?: "ACTIVATED" | "NOT_ACTIVATED" | "UNKNOWN";
    })[];
    /**
     * Fees and charges applicable to the account based on the equivalent structure in Product Reference.
     */
    fees?: BankingProductFeeV2[];
    /**
     * The addresses for the account to be used for correspondence.
     */
    addresses?: CommonPhysicalAddress[];
};
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * A unique identifier for a Banking account, generated according to [CDR ID Permanence](#id-permanence) requirements.
 */
export type BankingAccountId = string;
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingAccountV2 {
    /**
     * Unique identifier for the account.
     */
    accountId: string;
    /**
     * Value indicating the number of customers that have ownership of the account, according to the data holder's definition of account ownership. Does not indicate that all account owners are eligible consumers.
     */
    accountOwnership: "UNKNOWN" | "ONE_PARTY" | "TWO_PARTY" | "MANY_PARTY" | "OTHER";
    /**
     * Date that the account was created (if known).
     */
    creationDate?: string | null;
    /**
     * The display name of the account as defined by the bank. This should not incorporate account numbers or PANs. If it does the values should be masked according to the rules of the [MaskedAccountString](#common-field-types) common type.
     */
    displayName: string;
    /**
     * Flag indicating that the customer associated with the authorisation is an owner of the account. Does not indicate sole ownership, however. If not present then `true` is assumed.
     */
    isOwned?: boolean | null;
    /**
     * A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number.
     */
    maskedNumber: string;
    /**
     * A customer supplied nickname for the account.
     */
    nickname?: string | null;
    /**
     * Open or closed status for the account. If not present then `OPEN` is assumed.
     */
    openStatus?: ("CLOSED" | "OPEN") | null;
    /**
     * The category to which a product or account belongs. See [here](#product-categories) for more details.
     */
    productCategory:
        | "BUSINESS_LOANS"
        | "CRED_AND_CHRG_CARDS"
        | "LEASES"
        | "MARGIN_LOANS"
        | "OVERDRAFTS"
        | "PERS_LOANS"
        | "REGULATED_TRUST_ACCOUNTS"
        | "RESIDENTIAL_MORTGAGES"
        | "TERM_DEPOSITS"
        | "TRADE_FINANCE"
        | "TRANS_AND_SAVINGS_ACCOUNTS"
        | "TRAVEL_CARDS";
    /**
     * The unique identifier of the account as defined by the data holder (akin to model number for the account).
     */
    productName: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingAccountV3 {
    /**
     * Unique identifier for the account.
     */
    accountId: string;
    /**
     * Value indicating the number of customers that have ownership of the account, according to the data holder's definition of account ownership. Does not indicate that all account owners are eligible consumers.
     */
    accountOwnership: "UNKNOWN" | "ONE_PARTY" | "TWO_PARTY" | "MANY_PARTY" | "OTHER";
    /**
     * Date that the account was created (if known).
     */
    creationDate?: string | null;
    /**
     * The display name of the account as defined by the bank. This should not incorporate account numbers or PANs. If it does the values should be masked according to the rules of the [MaskedAccountString](#common-field-types) common type.
     */
    displayName: string;
    /**
     * `true` if any active or inactive instalment plans are available in the Get Instalment Plans endpoints. `false` if instalment plans are not applicable to the account.
     */
    isInstalmentDetailAvailable?: boolean | null;
    /**
     * Flag indicating that the customer associated with the authorisation is an owner of the account. Does not indicate sole ownership, however. If not present then `true` is assumed.
     */
    isOwned?: boolean | null;
    /**
     * A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number.
     */
    maskedNumber: string;
    /**
     * A customer supplied nickname for the account.
     */
    nickname?: string | null;
    /**
     * Open or closed status for the account. If not present then `OPEN` is assumed.
     */
    openStatus?: ("CLOSED" | "OPEN") | null;
    /**
     * The category to which a product or account belongs. See [here](#product-categories) for more details.
     */
    productCategory:
        | "BUSINESS_LOANS"
        | "BUY_NOW_PAY_LATER"
        | "CRED_AND_CHRG_CARDS"
        | "LEASES"
        | "MARGIN_LOANS"
        | "OVERDRAFTS"
        | "PERS_LOANS"
        | "REGULATED_TRUST_ACCOUNTS"
        | "RESIDENTIAL_MORTGAGES"
        | "TERM_DEPOSITS"
        | "TRADE_FINANCE"
        | "TRANS_AND_SAVINGS_ACCOUNTS"
        | "TRAVEL_CARDS";
    /**
     * The unique identifier of the account as defined by the data holder (akin to model number for the account).
     */
    productName: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingAuthorisedEntity {
    /**
     * Australian Business Number for the authorised entity.
     */
    abn?: string | null;
    /**
     * Australian Company Number for the authorised entity.
     */
    acn?: string | null;
    /**
     * Australian Registered Body Number for the authorised entity.
     */
    arbn?: string | null;
    /**
     * Description of the authorised entity derived from previously executed direct debits.
     */
    description?: string | null;
    /**
     * Name of the financial institution through which the direct debit will be executed. Is required unless the payment is made via a credit card scheme.
     */
    financialInstitution?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingBalance {
    /**
     * Unique identifier for the account.
     */
    accountId: string;
    /**
     * Object representing the available limit amortised according to payment schedule. Assumed to be zero if absent.
     */
    amortisedLimit?: string | null;
    /**
     * Balance representing the amount of funds available for transfer. Assumed to be zero or positive.
     */
    availableBalance: string;
    /**
     * Object representing the maximum amount of credit that is available for this account. Assumed to be zero if absent.
     */
    creditLimit?: string | null;
    /**
     * The currency for the balance amounts. If absent assumed to be `AUD`.
     */
    currency?: string | null;
    /**
     * The balance of the account at this time. Should align to the balance available via other channels such as Internet Banking. Assumed to be negative if the customer has money owing.
     */
    currentBalance: string;
    /**
     * Optional array of balances for the account in other currencies. Included to support accounts that support multi-currency purses such as Travel Cards.
     */
    purses?: BankingBalancePurse[] | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingBalancePurse {
    /**
     * The balance available for this additional currency purse.
     */
    amount: string;
    /**
     * The currency for the purse.
     */
    currency?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingBillerPayee {
    /**
     * BPAY Biller Code of the Biller.
     */
    billerCode: string;
    /**
     * Name of the Biller.
     */
    billerName: string;
    /**
     * BPAY CRN of the Biller (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for [MaskedPANString](#common-field-types). If the contents are otherwise sensitive, then it should be masked using the rules applicable for the [MaskedAccountString](#common-field-types) common type.
     */
    crn?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingCreditCardAccount {
    /**
     * The minimum payment amount due for the next card payment.
     */
    minPaymentAmount: string;
    /**
     * If absent assumes `AUD`.
     */
    paymentCurrency?: string | null;
    /**
     * The amount due for the next card payment.
     */
    paymentDueAmount: string;
    /**
     * Date that the next payment for the card is due.
     */
    paymentDueDate: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingDigitalWalletPayee {
    /**
     * The identifier of the digital wallet (dependent on type).
     */
    identifier: string;
    /**
     * The display name of the wallet as given by the customer, else a default value defined by the data holder.
     */
    name: string;
    /**
     * The provider of the digital wallet.
     */
    provider: "PAYPAL_AU" | "OTHER";
    /**
     * The type of the digital wallet identifier.
     */
    type: "EMAIL" | "CONTACT_NAME" | "TELEPHONE";
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingDirectDebit {
    /**
     * Unique identifier for the account.
     */
    accountId: string;
    authorisedEntity: BankingAuthorisedEntity;
    /**
     * The amount of the last debit executed under this authorisation.
     */
    lastDebitAmount?: string | null;
    /**
     * The date and time of the last debit executed under this authorisation.
     */
    lastDebitDateTime?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingDomesticPayee {
    account?: BankingDomesticPayeeAccount;
    card?: BankingDomesticPayeeCard;
    payId?: BankingDomesticPayeePayId;
    /**
     * Type of account object included. Valid values are: <ul><li>`account` A standard Australian account defined by BSB/Account Number.<li>`card` A credit or charge card to pay to (note that PANs are masked).<li>`payId` A PayID recognised by NPP.</ul>
     */
    payeeAccountUType: "account" | "card" | "payId";
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingDomesticPayeeAccount {
    /**
     * Name of the account to pay to.
     */
    accountName?: string | null;
    /**
     * Number of the account to pay to.
     */
    accountNumber: string;
    /**
     * BSB of the account to pay to.
     */
    bsb: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingDomesticPayeeCard {
    /**
     * Name of the account to pay to.
     */
    cardNumber: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingDomesticPayeePayId {
    /**
     * The identifier of the PayID (dependent on type).
     */
    identifier: string;
    /**
     * The name assigned to the PayID by the owner of the PayID.
     */
    name?: string | null;
    /**
     * The type of the PayID.
     */
    type: "ABN" | "EMAIL" | "ORG_IDENTIFIER" | "TELEPHONE";
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingFeeAmount {
    /**
     * The specific amount charged for the fee each time it is incurred.
     */
    amount: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingFeeDiscountAmount {
    /**
     * The specific amount discounted from the fee each time it is incurred.
     */
    amount: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * A minimum or maximum fee discount amount where a specific fixed amount is not known until the fee is incurred.
 */
export interface BankingFeeDiscountRange {
    /**
     * The maximum fee discount that will be applied per occurrence.
     */
    discountMaximum?: string | null;
    /**
     * The minimum fee discount that will be applied per occurrence.
     */
    discountMinimum?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingFeeDiscountRate {
    amountRange?: BankingFeeDiscountRange;
    /**
     * The fee rate discount calculated according to the _rateType_.
     */
    rate: string;
    /**
     * Type of fee rate discount calculation.<ul><li>`BALANCE` A fee rate discount based on a balance</li><li>`FEE` A fee rate discount based on the fee to which the discount is attached</li><li>`INTEREST_ACCRUED` A fee rate discount based on interest accrued</li><li>`TRANSACTION` A fee rate discount based on a transaction.</li></ul>
     */
    rateType: "BALANCE" | "FEE" | "INTEREST_ACCRUED" | "TRANSACTION";
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * A minimum or maximum fee amount where a specific fixed amount is not known until the fee is incurred.
 */
export interface BankingFeeRange {
    /**
     * The maximum fee that will be charged per occurrence.
     */
    feeMaximum?: string | null;
    /**
     * The minimum fee that will be charged per occurrence.
     */
    feeMinimum?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingFeeRate {
    /**
     * The indicative frequency with which the fee is calculated on the account if applicable. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
     */
    accrualFrequency?: string | null;
    amountRange?: BankingFeeRange;
    /**
     * The fee rate calculated according to the _rateType_.
     */
    rate: string;
    /**
     * Type of fee rate calculation.<ul><li>`BALANCE` A fee rate based on a balance</li><li>`INTEREST_ACCRUED` A fee rate based on interest accrued</li><li>`TRANSACTION` A fee rate based on a transaction.</li></ul>
     */
    rateType: "BALANCE" | "INTEREST_ACCRUED" | "TRANSACTION";
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingInstalmentPlan {
    /**
     * Unique identifier for the account.
     */
    accountId: string;
    /**
     * The original transaction amount the instalment plan was created for, including any upfront payment. E.g., For a $100 purchase split into four repayments, this would be `100.00`.
     */
    amount: string;
    /**
     * The date the plan was created.
     */
    creationDate: string;
    /**
     * The expected repayment period as at the creation of the plan. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax). E.g., For a further three fortnightly repayments from the _creationDate_, this would be `P6W`.
     */
    duration: string;
    /**
     * The expected repayment interval. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax). E.g., For fortnightly repayments, this would be `P2W`.
     */
    instalmentInterval: string;
    /**
     * The merchant category code (MCC) for the merchant associated with the instalment plan.
     */
    merchantCategoryCode?: string | null;
    /**
     * Name of the merchant associated with the instalment plan.
     */
    merchantName: string;
    /**
     * Any charges incorporated into the scheduled amounts due, excluding other fees. E.g., If the consumer agrees to repay a $100 purchase plus a $5 charge split across four instalments, this would be `5.00`.
     */
    planCharge?: string | null;
    /**
     * The currency of the plan amount. If absent assumed to be `AUD`.
     */
    planCurrency?: string | null;
    /**
     * Unique identifier for this plan in accordance with ID Permanence requirements.
     */
    planId: string;
    /**
     * The short display name of the plan as provided by the customer. Where a customer has not provided a nickname, a display name derived by the data holder consistent with other channels.
     */
    planNickname: string;
    /**
     * If displayed to the consumer, the percentage value of any charges incorporated into the scheduled amounts due, excluding other fees. E.g., If the consumer agrees to repay a $1000 purchase plus 10% interest split across twelve instalments, this would be `0.1`.
     */
    planRate?: string | null;
    /**
     * Unique purchase or order number for this plan, aligned to other channels.
     */
    planReference: string;
    /**
     * Array of scheduled repayment amounts and dates.
     */
    schedule: BankingInstalmentPlanSchedule[];
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * A unique identifier for a Banking instalment plan, generated according to [CDR ID Permanence](#id-permanence) requirements.
 */
export type BankingInstalmentPlanId = string;
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingInstalmentPlanSchedule {
    /**
     * Amount due with this repayment.
     */
    amountDue: string;
    /**
     * Date this repayment is or was due.
     */
    dueDate: string;
    /**
     * Whether the associated _amountDue_ has been paid or is otherwise considered as not outstanding. `false` is assumed if absent.
     */
    isPaid?: boolean | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingInternationalPayee {
    bankDetails: {
        /**
         * Account Targeted for payment.
         */
        accountNumber: string;
        bankAddress?: {
            /**
             * Address of the recipient Bank.
             */
            address: string;
            /**
             * Name of the recipient Bank.
             */
            name: string;
        } | null;
        /**
         * Swift bank code. Aligns with standard [ISO 9362](https://www.iso.org/standard/60390.html).
         */
        beneficiaryBankBIC?: string | null;
        /**
         * Number for the Clearing House Interbank Payments System.
         */
        chipNumber?: string | null;
        /**
         * Country of the recipient institution. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code.
         */
        country: string;
        /**
         * Number for Fedwire payment (Federal Reserve Wire Network).
         */
        fedWireNumber?: string | null;
        /**
         * The legal entity identifier (LEI) for the beneficiary. Aligns with [ISO 17442](https://www.iso.org/standard/59771.html).
         */
        legalEntityIdentifier?: string | null;
        /**
         * International bank routing number.
         */
        routingNumber?: string | null;
        /**
         * Sort code used for account identification in some jurisdictions.
         */
        sortCode?: string | null;
    };
    beneficiaryDetails: {
        /**
         * Country where the beneficiary resides. A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code.
         */
        country: string;
        /**
         * Response message for the payment.
         */
        message?: string | null;
        /**
         * Name of the beneficiary.
         */
        name?: string | null;
    };
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingLoanAccountV2 {
    /**
     * Date that the loan is due to be repaid in full.
     */
    loanEndDate?: string | null;
    /**
     * Maximum amount of funds that can be redrawn. If not present redraw is not available even if the feature exists for the account.
     */
    maxRedraw?: string | null;
    /**
     * If absent assumes `AUD`.
     */
    maxRedrawCurrency?: string | null;
    /**
     * Minimum amount of next instalment.
     */
    minInstalmentAmount?: string | null;
    /**
     * If absent assumes `AUD`.
     */
    minInstalmentCurrency?: string | null;
    /**
     * Minimum redraw amount.
     */
    minRedraw?: string | null;
    /**
     * If absent assumes `AUD`.
     */
    minRedrawCurrency?: string | null;
    /**
     * Next date that an instalment is required.
     */
    nextInstalmentDate?: string | null;
    /**
     * Set to `true` if one or more offset accounts are configured for this loan account.
     */
    offsetAccountEnabled?: boolean | null;
    /**
     * The _accountId_ values of the configured offset accounts attached to this loan. Only offset accounts that can be accessed under the current authorisation should be included. It is expected behaviour that _offsetAccountEnabled_ is set to `true` but the _offsetAccountIds_ field is absent or empty. This represents a situation where an offset account exists but details can not be accessed under the current authorisation.
     */
    offsetAccountIds?: string[] | null;
    /**
     * Optional original loan value.
     */
    originalLoanAmount?: string | null;
    /**
     * If absent assumes `AUD`.
     */
    originalLoanCurrency?: string | null;
    /**
     * Optional original start date for the loan.
     */
    originalStartDate?: string | null;
    /**
     * The expected or required repayment frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
     */
    repaymentFrequency?: string | null;
    /**
     * Options in place for repayments. If absent defaults to `PRINCIPAL_AND_INTEREST`.
     */
    repaymentType?: ("INTEREST_ONLY" | "PRINCIPAL_AND_INTEREST") | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingLoanAccountV3 {
    /**
     * Date that the loan is due to be repaid in full.
     */
    loanEndDate?: string | null;
    /**
     * Maximum amount of funds that can be redrawn. If not present redraw is not available even if the feature exists for the account.
     */
    maxRedraw?: string | null;
    /**
     * If absent assumes `AUD`.
     */
    maxRedrawCurrency?: string | null;
    /**
     * Minimum amount of next instalment.
     */
    minInstalmentAmount?: string | null;
    /**
     * If absent assumes `AUD`.
     */
    minInstalmentCurrency?: string | null;
    /**
     * Minimum redraw amount.
     */
    minRedraw?: string | null;
    /**
     * If absent assumes `AUD`.
     */
    minRedrawCurrency?: string | null;
    /**
     * Next date that an instalment is required.
     */
    nextInstalmentDate?: string | null;
    /**
     * Set to `true` if one or more offset accounts are configured for this loan account.
     */
    offsetAccountEnabled?: boolean | null;
    /**
     * The _accountId_ values of the configured offset accounts attached to this loan. Only offset accounts that can be accessed under the current authorisation should be included. It is expected behaviour that _offsetAccountEnabled_ is set to `true` but the _offsetAccountIds_ field is absent or empty. This represents a situation where an offset account exists but details can not be accessed under the current authorisation.
     */
    offsetAccountIds?: string[] | null;
    /**
     * Optional original loan value.
     */
    originalLoanAmount?: string | null;
    /**
     * If absent assumes `AUD`.
     */
    originalLoanCurrency?: string | null;
    /**
     * Optional original start date for the loan.
     */
    originalStartDate?: string | null;
    /**
     * The expected or required repayment frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
     */
    repaymentFrequency?: string | null;
    /**
     * Option in place for repayments.
     */
    repaymentType: "INTEREST_ONLY" | "OTHER" | "PRINCIPAL_AND_INTEREST" | "UNCONSTRAINED";
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export type BankingPayeeDetailV2 = BankingPayeeV2 & {
    /**
     * Type of object included that describes the payee in detail.
     */
    payeeUType: "biller" | "digitalWallet" | "domestic" | "international";
    biller?: BankingBillerPayee;
    domestic?: BankingDomesticPayee;
    digitalWallet?: BankingDigitalWalletPayee;
    international?: BankingInternationalPayee;
};
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * A unique identifier for a Banking payee, generated according to [CDR ID Permanence](#id-permanence) requirements.
 */
export type BankingPayeeId = string;
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingPayeeV2 {
    /**
     * The date the payee was created by the customer.
     */
    creationDate?: string | null;
    /**
     * A description of the payee provided by the customer.
     */
    description?: string | null;
    /**
     * The short display name of the payee as provided by the customer. Where a customer has not provided a nickname, a display name derived by the bank for the payee consistent with existing digital banking channels.
     */
    nickname: string;
    /**
     * Unique identifier for the payee.
     */
    payeeId: string;
    /**
     * The type of payee.<ul><li>`DOMESTIC` means a registered payee for domestic payments including NPP.<li>`INTERNATIONAL` means a registered payee for international payments.<li>`BILLER` means a registered payee for BPAY.<li>`DIGITAL_WALLET` means a registered payee for a bank's digital wallet.</ul>
     */
    type: "BILLER" | "DIGITAL_WALLET" | "DOMESTIC" | "INTERNATIONAL";
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Object that contains links to additional information on specific topics.
 */
export interface BankingProductAdditionalInformationV2 {
    /**
     * An array of additional bundles for the product, if applicable. To be treated as secondary documents to the _bundleUri_. Only to be used if there is a primary _bundleUri_.
     */
    additionalBundleUris?: BankingProductAdditionalInformationV2AdditionalInformationUris[] | null;
    /**
     * An array of additional eligibility rules and criteria for the product, if applicable. To be treated as secondary documents to the _eligibilityUri_. Only to be used if there is a primary _eligibilityUri_.
     */
    additionalEligibilityUris?: BankingProductAdditionalInformationV2AdditionalInformationUris[] | null;
    /**
     * An array of additional fees, pricing, discounts, exemptions and bonuses for the product, if applicable. To be treated as secondary documents to the _feesAndPricingUri_. Only to be used if there is a primary _feesAndPricingUri_.
     */
    additionalFeesAndPricingUris?: BankingProductAdditionalInformationV2AdditionalInformationUris[] | null;
    /**
     * An array of additional general overviews for the product or features of the product, if applicable. To be treated as secondary documents to the _overviewUri_. Only to be used if there is a primary _overviewUri_.
     */
    additionalOverviewUris?: BankingProductAdditionalInformationV2AdditionalInformationUris[] | null;
    /**
     * An array of additional terms and conditions for the product, if applicable. To be treated as secondary documents to the _termsUri_. Only to be used if there is a primary _termsUri_.
     */
    additionalTermsUris?: BankingProductAdditionalInformationV2AdditionalInformationUris[] | null;
    /**
     * Description of a bundle that this product can be part of. Mandatory if _additionalBundleUris_ includes one or more supporting documents.
     */
    bundleUri?: string | null;
    /**
     * Eligibility rules and criteria for the product. Mandatory if _additionalEligibilityUris_ includes one or more supporting documents.
     */
    eligibilityUri?: string | null;
    /**
     * Description of fees, pricing, discounts, exemptions and bonuses for the product. Mandatory if _additionalFeesAndPricingUris_ includes one or more supporting documents.
     */
    feesAndPricingUri?: string | null;
    /**
     * General overview of the product. Mandatory if _additionalOverviewUris_ includes one or more supporting documents.
     */
    overviewUri?: string | null;
    /**
     * Terms and conditions for the product. Mandatory if _additionalTermsUris_ includes one or more supporting documents.
     */
    termsUri?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductAdditionalInformationV2AdditionalInformationUris {
    /**
     * The URI describing the additional information.
     */
    additionalInfoUri: string;
    /**
     * Display text providing more information about the document URI.
     */
    description?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductBundle {
    /**
     * Display text providing more information on the bundle.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on the bundle criteria and benefits.
     */
    additionalInfoUri?: string | null;
    /**
     * Description of the bundle.
     */
    description: string;
    /**
     * Name of the bundle.
     */
    name: string;
    /**
     * Array of _productID_ values for products included in the bundle that are available via the product endpoints. Note that this array is not intended to represent a comprehensive model of the products included in the bundle and some products available for the bundle may not be available via the product reference endpoints.
     */
    productIds?: string[] | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductCardArt {
    /**
     * Card scheme available with the account.
     */
    cardScheme: "AMEX" | "EFTPOS" | "MASTERCARD" | "VISA" | "OTHER";
    /**
     * Card type available with the account.
     */
    cardType: "CHARGE" | "CREDIT" | "DEBIT";
    /**
     * URI reference to a PNG, JPG or GIF image with proportions defined by ISO 7810 ID-1 and width no greater than 512 pixels. The URI reference may be a link or url-encoded data URI according to **[[RFC2397]](#nref-RFC2397)**.
     */
    imageUri: string;
    /**
     * Display label for the specific image.
     */
    title?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * The category to which a product or account belongs. See [here](#product-categories) for more details.
 */
export type BankingProductCategory =
    | "BUSINESS_LOANS"
    | "CRED_AND_CHRG_CARDS"
    | "LEASES"
    | "MARGIN_LOANS"
    | "OVERDRAFTS"
    | "PERS_LOANS"
    | "REGULATED_TRUST_ACCOUNTS"
    | "RESIDENTIAL_MORTGAGES"
    | "TERM_DEPOSITS"
    | "TRADE_FINANCE"
    | "TRANS_AND_SAVINGS_ACCOUNTS"
    | "TRAVEL_CARDS";
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * The category to which a product or account belongs. See [here](#product-categories) for more details.
 */
export type BankingProductCategoryV2 =
    | "BUSINESS_LOANS"
    | "BUY_NOW_PAY_LATER"
    | "CRED_AND_CHRG_CARDS"
    | "LEASES"
    | "MARGIN_LOANS"
    | "OVERDRAFTS"
    | "PERS_LOANS"
    | "REGULATED_TRUST_ACCOUNTS"
    | "RESIDENTIAL_MORTGAGES"
    | "TERM_DEPOSITS"
    | "TRADE_FINANCE"
    | "TRANS_AND_SAVINGS_ACCOUNTS"
    | "TRAVEL_CARDS";
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductConstraint {
    /**
     * Display text providing more information on the constraint.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on the constraint.
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [_constraintType_](#tocSproductconstrainttypedoc) specified. Whether mandatory or not is dependent on the value of [_constraintType_](#tocSproductconstrainttypedoc).
     */
    additionalValue?: string | null;
    /**
     * The type of constraint described. For further details, refer to [Product Constraint Types](#tocSproductconstrainttypedoc).
     */
    constraintType: "MAX_BALANCE" | "MAX_LIMIT" | "MIN_BALANCE" | "MIN_LIMIT" | "OPENING_BALANCE";
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductConstraintV2 {
    /**
     * Display text providing more information on the constraint.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on the constraint.
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [_constraintType_](#tocSproductconstrainttypedoc) specified. Whether mandatory or not is dependent on the value of [_constraintType_](#tocSproductconstrainttypedoc).
     */
    additionalValue?: string | null;
    /**
     * The type of constraint described. For further details, refer to [Product Constraint Types](#tocSproductconstrainttypedoc).
     */
    constraintType:
        | "MAX_BALANCE"
        | "MAX_LIMIT"
        | "MAX_LVR"
        | "MIN_BALANCE"
        | "MIN_LIMIT"
        | "MIN_LVR"
        | "OPENING_BALANCE";
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductConstraintV3 {
    /**
     * Display text providing more information on the constraint. Mandatory if the [_constraintType_](#tocSproductconstrainttypedoc) value is `OTHER`.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on the constraint.
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [_constraintType_](#tocSproductconstrainttypedoc) specified. Whether mandatory or not is dependent on the value of [_constraintType_](#tocSproductconstrainttypedoc).
     */
    additionalValue?: string | null;
    /**
     * The type of constraint described. For further details, refer to [Product Constraint Types](#tocSproductconstrainttypedoc).
     */
    constraintType:
        | "MAX_BALANCE"
        | "MAX_LIMIT"
        | "MAX_LVR"
        | "MIN_BALANCE"
        | "MIN_LIMIT"
        | "MIN_LVR"
        | "OPENING_BALANCE"
        | "OTHER";
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductDepositRate {
    /**
     * Display text providing more information on the rate.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this rate.
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [_depositRateType_](#tocSproductdepositratetypedoc) specified. Whether mandatory or not is dependent on the value of [_depositRateType_](#tocSproductdepositratetypedoc).
     */
    additionalValue?: string | null;
    /**
     * The period after which the calculated amount(s) (see _calculationFrequency_) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
     */
    applicationFrequency?: string | null;
    /**
     * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see _applicationFrequency_). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
     */
    calculationFrequency?: string | null;
    /**
     * The type of rate (`FIXED`, `VARIABLE`, `BONUS`, etc.) For further details, refer to [Product Deposit Rate Types](#tocSproductdepositratetypedoc).
     */
    depositRateType: "BONUS" | "BUNDLE_BONUS" | "FIXED" | "FLOATING" | "INTRODUCTORY" | "MARKET_LINKED" | "VARIABLE";
    /**
     * The rate to be applied.
     */
    rate: string;
    /**
     * Rate tiers applicable for this rate.
     */
    tiers?: BankingProductRateTierV3[] | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductDepositRateV2 {
    /**
     * Display text providing more information on the rate.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this rate.
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [_depositRateType_](#tocSproductdepositratetypedoc) specified. Whether mandatory or not is dependent on the value of [_depositRateType_](#tocSproductdepositratetypedoc).
     */
    additionalValue?: string | null;
    /**
     * Applicability conditions for the rate.
     */
    applicabilityConditions?: BankingProductRateConditionV2[] | null;
    /**
     * The period after which the calculated amount(s) (see _calculationFrequency_) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax). Mandatory if the _applicationType_ value is `PERIODIC`.
     */
    applicationFrequency?: string | null;
    /**
     * The type of approach used to apply the rate to the account.
     */
    applicationType: "MATURITY" | "PERIODIC" | "UPFRONT";
    /**
     * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see _applicationFrequency_). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
     */
    calculationFrequency?: string | null;
    /**
     * The type of rate (`FIXED`, `VARIABLE`, `BONUS`, etc.) For further details, refer to [Product Deposit Rate Types](#tocSproductdepositratetypedoc).
     */
    depositRateType: "BONUS" | "BUNDLE_BONUS" | "FIXED" | "FLOATING" | "INTRODUCTORY" | "MARKET_LINKED" | "VARIABLE";
    /**
     * The rate to be applied.
     */
    rate: string;
    /**
     * Qualifying criteria or conditions relevant to the associated rate.
     */
    tiers?: BankingProductRateTierV4[] | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export type BankingProductDetailV4 = BankingProductV4 & {
    /**
     * An array of bundles that this product participates in. Each bundle is described by free form information but also by a list of product IDs of the other products that are included in the bundle. It is assumed that the current product is included in the bundle also.
     */
    bundles?: BankingProductBundle[];
    /**
     * Array of features available for the product.
     */
    features?: BankingProductFeatureV2[];
    /**
     * Constraints on the application for or operation of the product such as minimum balances or limit thresholds.
     */
    constraints?: BankingProductConstraint[];
    /**
     * Eligibility criteria for the product.
     */
    eligibility?: BankingProductEligibility[];
    /**
     * Fees applicable to the product.
     */
    fees?: BankingProductFee[];
    /**
     * Interest rates available for deposits.
     */
    depositRates?: BankingProductDepositRate[];
    /**
     * Interest rates charged against lending balances.
     */
    lendingRates?: BankingProductLendingRateV2[];
};
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export type BankingProductDetailV5 = BankingProductV4 & {
    /**
     * An array of bundles that this product participates in. Each bundle is described by free form information but also by a list of product IDs of the other products that are included in the bundle. It is assumed that the current product is included in the bundle also.
     */
    bundles?: BankingProductBundle[];
    /**
     * Array of features available for the product.
     */
    features?: BankingProductFeatureV2[];
    /**
     * Constraints on the application for or operation of the product such as minimum balances or limit thresholds.
     */
    constraints?: BankingProductConstraintV2[];
    /**
     * Eligibility criteria for the product.
     */
    eligibility?: BankingProductEligibility[];
    /**
     * Fees applicable to the product.
     */
    fees?: BankingProductFee[];
    /**
     * Interest rates available for deposits.
     */
    depositRates?: BankingProductDepositRate[];
    /**
     * Interest rates charged against lending balances.
     */
    lendingRates?: BankingProductLendingRateV2[];
};
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export type BankingProductDetailV6 = BankingProductV5 & {
    /**
     * An array of bundles that this product participates in. Each bundle is described by free form information but also by a list of _productID_ values of the other products that are included in the bundle. It is assumed that the current product is included in the bundle also.
     */
    bundles?: BankingProductBundle[];
    /**
     * Array of features and limitations of the product.
     */
    features?: BankingProductFeatureV3[];
    /**
     * Constraints on the application for the product such as minimum balances or limit thresholds.
     */
    constraints?: BankingProductConstraintV3[];
    /**
     * Eligibility criteria for the product.
     */
    eligibility?: BankingProductEligibilityV2[];
    /**
     * Fees applicable to the product.
     */
    fees?: BankingProductFeeV2[];
    /**
     * Interest rates available for deposits.
     */
    depositRates?: BankingProductDepositRateV2[];
    /**
     * Interest rates charged against lending balances.
     */
    lendingRates?: BankingProductLendingRateV3[];
};
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export type BankingProductDetailV7 = BankingProductV6 & {
    /**
     * An array of bundles that this product participates in. Each bundle is described by free form information but also by a list of _productID_ values of the other products that are included in the bundle. It is assumed that the current product is included in the bundle also.
     */
    bundles?: BankingProductBundle[];
    /**
     * Array of features and limitations of the product.
     */
    features?: BankingProductFeatureV4[];
    /**
     * Constraints on the application for the product such as minimum balances or limit thresholds.
     */
    constraints?: BankingProductConstraintV3[];
    /**
     * Eligibility criteria for the product.
     */
    eligibility?: BankingProductEligibilityV2[];
    /**
     * Fees applicable to the product.
     */
    fees?: BankingProductFeeV2[];
    /**
     * Interest rates available for deposits.
     */
    depositRates?: BankingProductDepositRateV2[];
    /**
     * Interest rates charged against lending balances.
     */
    lendingRates?: BankingProductLendingRateV3[];
    instalments?: BankingProductInstalments;
};
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductDiscount {
    /**
     * A discount rate calculated based on a proportion of the calculated interest accrued on the account. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of _amount_, _balanceRate_, _transactionRate_, _accruedRate_ and _feeRate_ is mandatory. Unless noted in _additionalInfo_, assumes the application and calculation frequency are the same as the corresponding fee.
     */
    accruedRate?: string | null;
    /**
     * Display text providing more information on the discount.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this discount.
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [_discountType_](#tocSproductdiscounttypedoc) specified. Whether mandatory or not is dependent on the value of [_discountType_](#tocSproductdiscounttypedoc).
     */
    additionalValue?: string | null;
    /**
     * Dollar value of the discount. One of _amount_, _balanceRate_, _transactionRate_, _accruedRate_ and _feeRate_ is mandatory.
     */
    amount?: string | null;
    /**
     * A discount rate calculated based on a proportion of the balance. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of _amount_, _balanceRate_, _transactionRate_, _accruedRate_ and _feeRate_ is mandatory. Unless noted in _additionalInfo_, assumes the application and calculation frequency are the same as the corresponding fee.
     */
    balanceRate?: string | null;
    /**
     * Description of the discount.
     */
    description: string;
    /**
     * The type of discount. For further details, refer to [Product Discount Types](#tocSproductdiscounttypedoc).
     */
    discountType: "BALANCE" | "DEPOSITS" | "ELIGIBILITY_ONLY" | "FEE_CAP" | "PAYMENTS";
    /**
     * Eligibility constraints that apply to this discount. Mandatory if _discountType_ is `ELIGIBILITY_ONLY`.
     */
    eligibility?: BankingProductDiscountEligibility[] | null;
    /**
     * A discount rate calculated based on a proportion of the fee to which this discount is attached. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of _amount_, _balanceRate_, _transactionRate_, _accruedRate_ and _feeRate_ is mandatory. Unless noted in _additionalInfo_, assumes the application and calculation frequency are the same as the corresponding fee.
     */
    feeRate?: string | null;
    /**
     * A discount rate calculated based on a proportion of a transaction. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of _amount_, _balanceRate_, _transactionRate_, _accruedRate_ and _feeRate_ is mandatory.
     */
    transactionRate?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductDiscountEligibility {
    /**
     * Display text providing more information on this eligibility constraint. Mandatory if the [_discountEligibilityType_](#tocSproductdiscounteligibilitydoc) value is `OTHER`.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this eligibility constraint.
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [_discountEligibilityType_](#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of [_discountEligibilityType_](#tocSproductdiscounteligibilitydoc).
     */
    additionalValue?: string | null;
    /**
     * The type of the specific eligibility constraint for a discount. For further details, refer to [Product Discount Eligibility Types](#tocSproductdiscounteligibilitydoc).
     */
    discountEligibilityType:
        | "BUSINESS"
        | "EMPLOYMENT_STATUS"
        | "INTRODUCTORY"
        | "MAX_AGE"
        | "MIN_AGE"
        | "MIN_INCOME"
        | "MIN_TURNOVER"
        | "NATURAL_PERSON"
        | "OTHER"
        | "PENSION_RECIPIENT"
        | "RESIDENCY_STATUS"
        | "STAFF"
        | "STUDENT";
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Note that the currency of the fee discount is expected to be the same as the currency of the fee itself.
 */
export interface BankingProductDiscountV2 {
    /**
     * Display text providing more information on the discount.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this discount.
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [_discountType_](#tocSproductdiscounttypedoc) specified. Whether mandatory or not is dependent on the value of [_discountType_](#tocSproductdiscounttypedoc).
     */
    additionalValue?: string | null;
    /**
     * Description of the discount.
     */
    description: string;
    /**
     * Reference to the applicable fee discount method structure.
     */
    discountMethodUType: "fixedAmount" | "rateBased";
    /**
     * The type of discount. For further details, refer to [Product Discount Types](#tocSproductdiscounttypedoc).
     */
    discountType: "BALANCE" | "DEPOSITS" | "ELIGIBILITY_ONLY" | "FEE_CAP" | "PAYMENTS";
    /**
     * Eligibility constraints that apply to this discount. Mandatory if the [_discountType_](#tocSproductdiscounttypedoc) value is `ELIGIBILITY_ONLY`.
     */
    eligibility?: BankingProductDiscountEligibility[] | null;
    /**
     * Mandatory if the _discountMethodUType_ value is `fixedAmount`. Where the discount is a specific amount.
     */
    fixedAmount?: BankingFeeDiscountAmount;
    /**
     * Mandatory if the _discountMethodUType_ value is `rateBased`. Where the discount is based on a type of rate. Unless noted in _additionalInfo_, assumes the application and calculation frequency are the same as the corresponding fee.
     */
    rateBased?: BankingFeeDiscountRate;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductEligibility {
    /**
     * Display text providing more information on the [eligibility](#tocSproducteligibilitytypedoc) criteria. Mandatory if the field is set to `OTHER`.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this eligibility criteria.
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [_eligibilityType_](#tocSproducteligibilitytypedoc) specified. Whether mandatory or not is dependent on the value of [_eligibilityType_](#tocSproducteligibilitytypedoc).
     */
    additionalValue?: string | null;
    /**
     * The type of eligibility criteria described. For further details, refer to [Product Eligibility Types](#tocSproducteligibilitytypedoc).
     */
    eligibilityType:
        | "BUSINESS"
        | "EMPLOYMENT_STATUS"
        | "MAX_AGE"
        | "MIN_AGE"
        | "MIN_INCOME"
        | "MIN_TURNOVER"
        | "NATURAL_PERSON"
        | "OTHER"
        | "PENSION_RECIPIENT"
        | "RESIDENCY_STATUS"
        | "STAFF"
        | "STUDENT";
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductEligibilityV2 {
    /**
     * Display text providing more information on the [eligibility](#tocSproducteligibilitytypedoc) criteria. Mandatory if the [_eligibilityType_](#tocSproducteligibilitytypedoc) value is `OTHER`.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this eligibility criteria.
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [_eligibilityType_](#tocSproducteligibilitytypedoc) specified. Whether mandatory or not is dependent on the value of [_eligibilityType_](#tocSproducteligibilitytypedoc).
     */
    additionalValue?: string | null;
    /**
     * The type of eligibility criteria described. For further details, refer to [Product Eligibility Types](#tocSproducteligibilitytypedoc).
     */
    eligibilityType:
        | "BUSINESS"
        | "EMPLOYMENT_STATUS"
        | "MAX_AGE"
        | "MIN_AGE"
        | "MIN_INCOME"
        | "MIN_TURNOVER"
        | "NATURAL_PERSON"
        | "OTHER"
        | "PENSION_RECIPIENT"
        | "RESIDENCY_STATUS"
        | "STAFF"
        | "STUDENT";
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductFeatureV2 {
    /**
     * Display text providing more information on the feature. Mandatory if [_featureType_](#tocSproductfeaturetypedoc) is set to `OTHER`.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this feature.
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [_featureType_](#tocSproductfeaturetypedoc) specified. Whether mandatory or not is dependent on the value of the [_featureType_](#tocSproductfeaturetypedoc).
     */
    additionalValue?: string | null;
    /**
     * The type of feature described. For further details, refer to [Product Feature Types](#tocSproductfeaturetypedoc).
     */
    featureType:
        | "ADDITIONAL_CARDS"
        | "BALANCE_TRANSFERS"
        | "BILL_PAYMENT"
        | "BONUS_REWARDS"
        | "CARD_ACCESS"
        | "CASHBACK_OFFER"
        | "COMPLEMENTARY_PRODUCT_DISCOUNTS"
        | "DIGITAL_BANKING"
        | "DIGITAL_WALLET"
        | "DONATE_INTEREST"
        | "EXTRA_REPAYMENTS"
        | "FRAUD_PROTECTION"
        | "FREE_TXNS"
        | "FREE_TXNS_ALLOWANCE"
        | "GUARANTOR"
        | "INSURANCE"
        | "INSTALMENT_PLAN"
        | "INTEREST_FREE"
        | "INTEREST_FREE_TRANSFERS"
        | "LOYALTY_PROGRAM"
        | "NOTIFICATIONS"
        | "NPP_ENABLED"
        | "NPP_PAYID"
        | "OFFSET"
        | "OTHER"
        | "OVERDRAFT"
        | "REDRAW"
        | "RELATIONSHIP_MANAGEMENT"
        | "UNLIMITED_TXNS";
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductFeatureV3 {
    /**
     * Display text providing more information on the feature. Mandatory if [_featureType_](#tocSproductfeaturetypedoc) is set to `OTHER`.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this feature.
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [_featureType_](#tocSproductfeaturetypedoc) specified. Whether mandatory or not is dependent on the value of the [_featureType_](#tocSproductfeaturetypedoc).
     */
    additionalValue?: string | null;
    /**
     * The type of feature described. For further details, refer to [Product Feature Types](#tocSproductfeaturetypedoc).
     */
    featureType:
        | "ADDITIONAL_CARDS"
        | "BALANCE_TRANSFERS"
        | "BILL_PAYMENT"
        | "BONUS_REWARDS"
        | "CARD_ACCESS"
        | "CASHBACK_OFFER"
        | "COMPLEMENTARY_PRODUCT_DISCOUNTS"
        | "DIGITAL_BANKING"
        | "DIGITAL_WALLET"
        | "DONATE_INTEREST"
        | "EXTRA_REPAYMENTS"
        | "FRAUD_PROTECTION"
        | "FREE_TXNS"
        | "FREE_TXNS_ALLOWANCE"
        | "FUNDS_AVAILABLE_AFTER"
        | "GUARANTOR"
        | "INSTALMENT_PLAN"
        | "INSURANCE"
        | "INTEREST_FREE"
        | "INTEREST_FREE_TRANSFERS"
        | "LOYALTY_PROGRAM"
        | "NOTIFICATIONS"
        | "NPP_ENABLED"
        | "NPP_PAYID"
        | "OFFSET"
        | "OTHER"
        | "OVERDRAFT"
        | "REDRAW"
        | "RELATIONSHIP_MANAGEMENT"
        | "UNLIMITED_TXNS";
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductFeatureV4 {
    /**
     * Display text providing more information on the feature. Mandatory if the [_featureType_](#tocSproductfeaturetypedoc) value is `OTHER`.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this feature.
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [_featureType_](#tocSproductfeaturetypedoc) specified. Whether mandatory or not is dependent on the value of the [_featureType_](#tocSproductfeaturetypedoc).
     */
    additionalValue?: string | null;
    /**
     * The type of feature described. For further details, refer to [Product Feature Types](#tocSproductfeaturetypedoc).
     */
    featureType:
        | "ADDITIONAL_CARDS"
        | "BALANCE_TRANSFERS"
        | "BILL_PAYMENT"
        | "BONUS_REWARDS"
        | "CARD_ACCESS"
        | "CASHBACK_OFFER"
        | "COMPLEMENTARY_PRODUCT_DISCOUNTS"
        | "EXTRA_DOWN_PAYMENT"
        | "DIGITAL_BANKING"
        | "DIGITAL_WALLET"
        | "DONATE_INTEREST"
        | "EXTRA_REPAYMENTS"
        | "FRAUD_PROTECTION"
        | "FREE_TXNS"
        | "FREE_TXNS_ALLOWANCE"
        | "FUNDS_AVAILABLE_AFTER"
        | "GUARANTOR"
        | "INSTALMENT_PLAN"
        | "INSURANCE"
        | "INTEREST_FREE"
        | "INTEREST_FREE_TRANSFERS"
        | "LOYALTY_PROGRAM"
        | "NOTIFICATIONS"
        | "NPP_ENABLED"
        | "NPP_PAYID"
        | "OFFSET"
        | "OTHER"
        | "OVERDRAFT"
        | "REDRAW"
        | "RELATIONSHIP_MANAGEMENT"
        | "UNLIMITED_TXNS";
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductFee {
    /**
     * The indicative frequency with which the fee is calculated on the account. Only applies if _balanceRate_ or _accruedRate_ is also present. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
     */
    accrualFrequency?: string | null;
    /**
     * A fee rate calculated based on a proportion of the calculated interest accrued on the account. One of _amount_, _balanceRate_, _transactionRate_ and _accruedRate_ is mandatory unless the _feeType_ `VARIABLE` is supplied.
     */
    accruedRate?: string | null;
    /**
     * Display text providing more information on the fee.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this fee.
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [_feeType_](#tocSproductfeetypedoc) specified. Whether mandatory or not is dependent on the value of [_feeType_](#tocSproductfeetypedoc).
     */
    additionalValue?: string | null;
    /**
     * The amount charged for the fee. One of _amount_, _balanceRate_, _transactionRate_ and _accruedRate_ is mandatory unless the _feeType_ `VARIABLE` is supplied.
     */
    amount?: string | null;
    /**
     * A fee rate calculated based on a proportion of the balance. One of _amount_, _balanceRate_, _transactionRate_ and _accruedRate_ is mandatory unless the _feeType_ `VARIABLE` is supplied.
     */
    balanceRate?: string | null;
    /**
     * The currency the fee will be charged in. Assumes `AUD` if absent.
     */
    currency?: string | null;
    /**
     * An optional list of discounts to this fee that may be available.
     */
    discounts?: BankingProductDiscount[] | null;
    /**
     * The type of fee. For further details, refer to [Product Fee Types](#tocSproductfeetypedoc).
     */
    feeType:
        | "DEPOSIT"
        | "EVENT"
        | "EXIT"
        | "PAYMENT"
        | "PERIODIC"
        | "PURCHASE"
        | "TRANSACTION"
        | "UPFRONT"
        | "VARIABLE"
        | "WITHDRAWAL";
    /**
     * Name of the fee.
     */
    name: string;
    /**
     * A fee rate calculated based on a proportion of a transaction. One of _amount_, _balanceRate_, _transactionRate_ and _accruedRate_ is mandatory unless the _feeType_ `VARIABLE` is supplied.
     */
    transactionRate?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductFeeV2 {
    /**
     * Display text providing more information on the fee. Mandatory if the [_feeType_](#tocSproductfeetypedoc) value is `OTHER`.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this fee.
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [_feeType_](#tocSproductfeetypedoc) specified. Whether mandatory or not is dependent on the value of [_feeType_](#tocSproductfeetypedoc).
     */
    additionalValue?: string | null;
    /**
     * The currency the fee will be charged in. Assumes `AUD` if absent.
     */
    currency?: string | null;
    /**
     * An optional list of discounts to this fee that may be available.
     */
    discounts?: BankingProductDiscountV2[] | null;
    /**
     * The cap amount if multiple occurrences of the fee are capped to a limit.
     */
    feeCap?: string | null;
    /**
     * Specifies a duration over which multiple occurrences of the fee will be capped. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
     */
    feeCapPeriod?: string | null;
    /**
     * Reference to the applicable fee charging method structure.
     */
    feeMethodUType: "fixedAmount" | "rateBased" | "variable";
    /**
     * The type of fee. For further details, refer to [Product Fee Types](#tocSproductfeetypedoc).
     */
    feeType:
        | "CASH_ADVANCE"
        | "DEPOSIT"
        | "DISHONOUR"
        | "ENQUIRY"
        | "EVENT"
        | "EXIT"
        | "LATE_PAYMENT"
        | "OTHER"
        | "PAYMENT"
        | "PERIODIC"
        | "PURCHASE"
        | "REPLACEMENT"
        | "TRANSACTION"
        | "UPFRONT"
        | "UPFRONT_PER_PLAN"
        | "VARIATION"
        | "WITHDRAWAL";
    /**
     * Mandatory if the _feeMethodUType_ value is `fixedAmount`. Where the fee is a specific amount.
     */
    fixedAmount?: BankingFeeAmount;
    /**
     * Name of the fee.
     */
    name: string;
    /**
     * Mandatory if the _feeMethodUType_ value is `rateBased`. Where the fee is based on a type of rate.
     */
    rateBased?: BankingFeeRate;
    /**
     * Mandatory if the _feeMethodUType_ value is `variable`. Where the amount or rate may not be known until the fee is incurred.
     */
    variable?: BankingFeeRange;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * A data holder-specific unique identifier for a Banking product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.
 */
export type BankingProductId = string;
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Details of instalment features on the account.
 */
export interface BankingProductInstalments {
    /**
     * Maximum combined limit of all instalment plans that may be created on the account. If `null` or not present, an opened account balance _creditLimit_ may be assumed to provide a maximum limit for instalments.
     */
    instalmentsLimit?: string | null;
    /**
     * Maximum number of concurrent active instalment plans that may be created on the account. If `null`, there is no predetermined maximum number.
     */
    maximumConcurrentPlans?: number | null;
    /**
     * Maximum value that can be opened as an instalment plan. If `null` or not present, _instalmentsLimit_ is assumed to be the maximum individual plan value.
     */
    maximumPlanValue?: string | null;
    /**
     * Maximum number of instalment payments a plan can be created with.
     */
    maximumSplit: number;
    /**
     * Minimum value that can be opened as an instalment plan.
     */
    minimumPlanValue?: string | null;
    /**
     * Minimum number of instalment payments a plan can be created with.
     */
    minimumSplit: number;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductLendingRateV2 {
    /**
     * Display text providing more information on the rate.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this rate.
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [_lendingRateType_](#tocSproductlendingratetypedoc) specified. Whether mandatory or not is dependent on the value of [_lendingRateType_](#tocSproductlendingratetypedoc).
     */
    additionalValue?: string | null;
    /**
     * The period after which the calculated amount(s) (see _calculationFrequency_) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
     */
    applicationFrequency?: string | null;
    /**
     * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see _applicationFrequency_). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
     */
    calculationFrequency?: string | null;
    /**
     * A comparison rate equivalent for this rate.
     */
    comparisonRate?: string | null;
    /**
     * When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered.
     */
    interestPaymentDue?: ("IN_ADVANCE" | "IN_ARREARS") | null;
    /**
     * The type of rate (`FIXED`, `VARIABLE`, etc.) For further details, refer to [Product Lending Rate Types](#tocSproductlendingratetypedoc).
     */
    lendingRateType:
        | "BUNDLE_DISCOUNT_FIXED"
        | "BUNDLE_DISCOUNT_VARIABLE"
        | "CASH_ADVANCE"
        | "DISCOUNT"
        | "FIXED"
        | "FLOATING"
        | "INTRODUCTORY"
        | "MARKET_LINKED"
        | "PENALTY"
        | "PURCHASE"
        | "VARIABLE";
    /**
     * The reason for taking out the loan. If absent, the lending rate is applicable to all loan purposes.
     */
    loanPurpose?: ("INVESTMENT" | "OWNER_OCCUPIED") | null;
    /**
     * The rate to be applied.
     */
    rate: string;
    /**
     * Options in place for repayments. If absent, the lending rate is applicable to all repayment types.
     */
    repaymentType?: ("INTEREST_ONLY" | "PRINCIPAL_AND_INTEREST") | null;
    /**
     * Rate tiers applicable for this rate.
     */
    tiers?: BankingProductRateTierV3[] | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductLendingRateV3 {
    /**
     * Display text providing more information on the rate.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this rate.
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the [_lendingRateType_](#tocSproductlendingratetypedoc) specified. Whether mandatory or not is dependent on the value of [_lendingRateType_](#tocSproductlendingratetypedoc).
     */
    additionalValue?: string | null;
    /**
     * Applicability conditions for the rate.
     */
    applicabilityConditions?: BankingProductRateConditionV2[] | null;
    /**
     * The period after which the calculated amount(s) (see _calculationFrequency_) are 'applied' (i.e. debited or credited) to the account. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax). Mandatory if the _applicationType_ value is `PERIODIC`.
     */
    applicationFrequency?: string | null;
    /**
     * The type of approach used to apply the rate to the account.
     */
    applicationType: "MATURITY" | "PERIODIC" | "UPFRONT";
    /**
     * The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see _applicationFrequency_). Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
     */
    calculationFrequency?: string | null;
    /**
     * A comparison rate equivalent for this rate.
     */
    comparisonRate?: string | null;
    /**
     * When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered.
     */
    interestPaymentDue?: ("IN_ADVANCE" | "IN_ARREARS") | null;
    /**
     * The type of rate (`FIXED`, `VARIABLE`, etc.) For further details, refer to [Product Lending Rate Types](#tocSproductlendingratetypedoc).
     */
    lendingRateType:
        | "BALANCE_TRANSFER"
        | "BUNDLE_DISCOUNT_FIXED"
        | "BUNDLE_DISCOUNT_VARIABLE"
        | "CASH_ADVANCE"
        | "DISCOUNT"
        | "FIXED"
        | "FLOATING"
        | "INTRODUCTORY"
        | "MARKET_LINKED"
        | "PENALTY"
        | "PURCHASE"
        | "VARIABLE";
    /**
     * The reason for taking out the loan.
     */
    loanPurpose: "INVESTMENT" | "OTHER" | "OWNER_OCCUPIED" | "UNCONSTRAINED";
    /**
     * The rate to be applied.
     */
    rate: string;
    /**
     * Option in place for repayments.
     */
    repaymentType: "INTEREST_ONLY" | "OTHER" | "PRINCIPAL_AND_INTEREST" | "UNCONSTRAINED";
    /**
     * Qualifying criteria or conditions relevant to the associated rate.
     */
    tiers?: BankingProductRateTierV4[] | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Defines a condition for the applicability of a tiered rate.
 */
export interface BankingProductRateCondition {
    /**
     * Display text providing more information on the condition.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this condition.
     */
    additionalInfoUri?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Defines a condition for the applicability of a rate.
 */
export interface BankingProductRateConditionV2 {
    /**
     * Display text providing more information on the condition. Mandatory if the [_rateApplicabilityType_](#tocSbankingproductrateconditiondoc) value is `OTHER`.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this condition.
     */
    additionalInfoUri?: string | null;
    /**
     * Generic field containing additional information relevant to the _rateApplicabilityType_ specified. Whether mandatory or not is dependent on the value of [_rateApplicabilityType_](#tocSbankingproductrateconditiondoc).
     */
    additionalValue?: string | null;
    /**
     * Category of applicability condition associated with the rate. For more information refer to [Rate and Tier Applicability Types](#tocSbankingproductrateconditiondoc).
     */
    rateApplicabilityType:
        | "MIN_DEPOSITS"
        | "MIN_DEPOSIT_AMOUNT"
        | "DEPOSIT_BALANCE_INCREASED"
        | "EXISTING_CUST"
        | "NEW_ACCOUNTS"
        | "NEW_CUSTOMER"
        | "NEW_CUSTOMER_TO_GROUP"
        | "ONLINE_ONLY"
        | "OTHER"
        | "MIN_PURCHASES"
        | "MAX_WITHDRAWALS"
        | "MAX_WITHDRAWAL_AMOUNT";
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Defines the criteria and conditions for which a rate applies.
 */
export interface BankingProductRateTierV3 {
    /**
     * Display text providing more information on the rate tier.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this rate tier.
     */
    additionalInfoUri?: string | null;
    applicabilityConditions?: BankingProductRateCondition;
    /**
     * The number of _unitOfMeasure_ units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g., 1 month) this must be the same as _minimumValue_. Where this is the same as the _minimumValue_ value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
     */
    maximumValue?: number | null;
    /**
     * The number of _unitOfMeasure_ units that form the lower bound of the tier. The tier should be inclusive of this value.
     */
    minimumValue: number;
    /**
     * A display name for the tier.
     */
    name: string;
    /**
     * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps').
     */
    rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
    /**
     * The unit of measure that applies to the _minimumValue_ and _maximumValue_ values e.g.,<ul><li>`DOLLAR` amount.<li>`PERCENT` (in the case of loan-to-value ratio or LVR).<li>Tier term period representing a discrete number of `MONTH`(s) or `DAY`(s) (in the case of term deposit tiers).</ul>
     */
    unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Defines the criteria and conditions for which a rate applies.
 */
export interface BankingProductRateTierV4 {
    /**
     * Display text providing more information on the rate tier.
     */
    additionalInfo?: string | null;
    /**
     * Link to a web page with more information on this rate tier.
     */
    additionalInfoUri?: string | null;
    /**
     * Applicability conditions for the rate tier.
     */
    applicabilityConditions?: BankingProductRateConditionV2[] | null;
    /**
     * The number of _unitOfMeasure_ units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g., 1 month) this must be the same as _minimumValue_. Where this is the same as the _minimumValue_ value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If absent the tier's range has no upper bound.
     */
    maximumValue?: string | null;
    /**
     * The number of _unitOfMeasure_ units that form the lower bound of the tier. The tier should be inclusive of this value.
     */
    minimumValue: string;
    /**
     * A display name for the tier.
     */
    name: string;
    /**
     * The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps').
     */
    rateApplicationMethod?: ("PER_TIER" | "WHOLE_BALANCE") | null;
    /**
     * The unit of measure that applies to the _minimumValue_ and _maximumValue_ values, e.g.,<ul><li>`DOLLAR` for a dollar amount (with values in AmountString format)<li>`PERCENT` for Loan-to-Value Ratio or LVR (with values in RateString format)<li>`MONTH` or `DAY` for a period representing a discrete number of months or days for a fixed-term deposit or loan (with values as a string containing a positive integer).</ul>
     */
    unitOfMeasure: "DAY" | "DOLLAR" | "MONTH" | "PERCENT";
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductV4 {
    additionalInformation?: BankingProductAdditionalInformationV2;
    /**
     * A link to an application web page where this product can be applied for.
     */
    applicationUri?: string | null;
    /**
     * A label of the brand for the product. Able to be used for filtering. For data holders with single brands this value is still required.
     */
    brand: string;
    /**
     * An optional display name of the brand.
     */
    brandName?: string | null;
    /**
     * An array of card art images.
     */
    cardArt?:
        | {
            /**
             * URI reference to a PNG, JPG or GIF image with proportions defined by ISO 7810 ID-1 and width no greater than 512 pixels. The URI reference may be a link or url-encoded data URI according to **[[RFC2397]](#nref-RFC2397)**.
             */
            imageUri: string;
            /**
             * Display label for the specific image.
             */
            title?: string;
        }[]
        | null;
    /**
     * A description of the product.
     */
    description: string;
    /**
     * The date and time from which this product is effective (i.e. is available for origination). Used to enable the articulation of products to the regime before they are available for customers to originate.
     */
    effectiveFrom?: string | null;
    /**
     * The date and time at which this product will be retired and will no longer be offered. Used to enable the managed deprecation of products.
     */
    effectiveTo?: string | null;
    /**
     * Indicates whether the product is specifically tailored to a circumstance. In this case fees and prices are significantly negotiated depending on context. While all products are open to a degree of tailoring this flag indicates that tailoring is expected and thus that the provision of specific fees and rates is not applicable.
     */
    isTailored: boolean;
    /**
     * The last date and time that the information for this product was changed (or the creation date for the product if it has never been altered).
     */
    lastUpdated: string;
    /**
     * The display name of the product.
     */
    name: string;
    /**
     * The category to which a product or account belongs. See [here](#product-categories) for more details.
     */
    productCategory:
        | "BUSINESS_LOANS"
        | "CRED_AND_CHRG_CARDS"
        | "LEASES"
        | "MARGIN_LOANS"
        | "OVERDRAFTS"
        | "PERS_LOANS"
        | "REGULATED_TRUST_ACCOUNTS"
        | "RESIDENTIAL_MORTGAGES"
        | "TERM_DEPOSITS"
        | "TRADE_FINANCE"
        | "TRANS_AND_SAVINGS_ACCOUNTS"
        | "TRAVEL_CARDS";
    /**
     * A data holder specific unique identifier for this product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.
     */
    productId: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductV5 {
    additionalInformation?: BankingProductAdditionalInformationV2;
    /**
     * A link to an application web page where this product can be applied for.
     */
    applicationUri?: string | null;
    /**
     * A label of the brand for the product. Able to be used for filtering. For data holders with single brands this value is still required.
     */
    brand: string;
    /**
     * An optional display name of the brand.
     */
    brandName?: string | null;
    /**
     * Information about any cards available with the account.
     */
    cardArt?: BankingProductCardArt[] | null;
    /**
     * A description of the product.
     */
    description: string;
    /**
     * The date and time from which this product is effective (i.e. is available for origination). Used to enable the articulation of products to the regime before they are available for customers to originate.
     */
    effectiveFrom?: string | null;
    /**
     * The date and time at which this product will be retired and will no longer be offered. Used to enable the managed deprecation of products.
     */
    effectiveTo?: string | null;
    /**
     * Indicates whether the product is specifically tailored to a circumstance. In this case fees and prices are significantly negotiated depending on context. While all products are open to a degree of tailoring this flag indicates that tailoring is expected and thus that the provision of specific fees and rates is not applicable.
     */
    isTailored: boolean;
    /**
     * The last date and time that the information for this product was changed (or the creation date for the product if it has never been altered).
     */
    lastUpdated: string;
    /**
     * The display name of the product.
     */
    name: string;
    /**
     * The category to which a product or account belongs. See [here](#product-categories) for more details.
     */
    productCategory:
        | "BUSINESS_LOANS"
        | "CRED_AND_CHRG_CARDS"
        | "LEASES"
        | "MARGIN_LOANS"
        | "OVERDRAFTS"
        | "PERS_LOANS"
        | "REGULATED_TRUST_ACCOUNTS"
        | "RESIDENTIAL_MORTGAGES"
        | "TERM_DEPOSITS"
        | "TRADE_FINANCE"
        | "TRANS_AND_SAVINGS_ACCOUNTS"
        | "TRAVEL_CARDS";
    /**
     * A data holder-specific unique identifier for a Banking product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.
     */
    productId: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingProductV6 {
    additionalInformation?: BankingProductAdditionalInformationV2;
    /**
     * A link to an application web page where this product can be applied for.
     */
    applicationUri?: string | null;
    /**
     * A label of the brand for the product. Able to be used for filtering. For data holders with single brands this value is still required.
     */
    brand: string;
    /**
     * An optional display name of the brand.
     */
    brandName?: string | null;
    /**
     * Information about any cards available with the account.
     */
    cardArt?: BankingProductCardArt[] | null;
    /**
     * A description of the product.
     */
    description: string;
    /**
     * The date and time from which this product is effective (i.e. is available for origination). Used to enable the articulation of products to the regime before they are available for customers to originate.
     */
    effectiveFrom?: string | null;
    /**
     * The date and time at which this product will be retired and will no longer be offered. Used to enable the managed deprecation of products.
     */
    effectiveTo?: string | null;
    /**
     * Indicates whether the product is specifically tailored to a circumstance. In this case fees and prices are significantly negotiated depending on context. While all products are open to a degree of tailoring this flag indicates that tailoring is expected and thus that the provision of specific fees and rates is not applicable.
     */
    isTailored: boolean;
    /**
     * The last date and time that the information for this product was changed (or the creation date for the product if it has never been altered).
     */
    lastUpdated: string;
    /**
     * The display name of the product.
     */
    name: string;
    /**
     * The category to which a product or account belongs. See [here](#product-categories) for more details.
     */
    productCategory:
        | "BUSINESS_LOANS"
        | "BUY_NOW_PAY_LATER"
        | "CRED_AND_CHRG_CARDS"
        | "LEASES"
        | "MARGIN_LOANS"
        | "OVERDRAFTS"
        | "PERS_LOANS"
        | "REGULATED_TRUST_ACCOUNTS"
        | "RESIDENTIAL_MORTGAGES"
        | "TERM_DEPOSITS"
        | "TRADE_FINANCE"
        | "TRANS_AND_SAVINGS_ACCOUNTS"
        | "TRAVEL_CARDS";
    /**
     * A data holder-specific unique identifier for a Banking product. This identifier must be unique to a product but does not otherwise need to adhere to ID permanence guidelines.
     */
    productId: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Object containing details of the source of the payment. Currently only specifies an _accountId_ but provided as an object to facilitate future extensibility and consistency with the _to_ object.
 */
export interface BankingScheduledPaymentFrom {
    /**
     * Unique identifier for the account.
     */
    accountId: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * A unique identifier for a Banking scheduled payment, generated according to [CDR ID Permanence](#id-permanence) requirements.
 */
export type BankingScheduledPaymentId = string;
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingScheduledPaymentInterval {
    /**
     * Uses an interval to define the ordinal day within the interval defined by the interval field on which the payment occurs. If the resulting duration is 0 days in length or larger than the number of days in the interval then the payment will occur on the last day of the interval. A duration of 1 day indicates the first day of the interval. If absent the assumed value is `P1D`. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. The first day of a week is considered to be Monday.
     */
    dayInInterval?: string | null;
    /**
     * An interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with _nextPaymentDate_.
     */
    interval: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Object containing the detail of the schedule for the payment.
 */
export interface BankingScheduledPaymentRecurrence {
    eventBased?: BankingScheduledPaymentRecurrenceEventBased;
    intervalSchedule?: BankingScheduledPaymentRecurrenceIntervalSchedule;
    lastWeekDay?: BankingScheduledPaymentRecurrenceLastWeekday;
    /**
     * The date of the next payment under the recurrence schedule.
     */
    nextPaymentDate?: string | null;
    onceOff?: BankingScheduledPaymentRecurrenceOnceOff;
    /**
     * The type of recurrence used to define the schedule.
     */
    recurrenceUType: "eventBased" | "intervalSchedule" | "lastWeekDay" | "onceOff";
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Indicates that the schedule of payments is defined according to an external event that cannot be predetermined. Mandatory if the _recurrenceUType_ value is `eventBased`.
 */
export interface BankingScheduledPaymentRecurrenceEventBased {
    /**
     * Description of the event and conditions that will result in the payment. Expected to be formatted for display to a customer.
     */
    description: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Indicates that the schedule of payments is defined by a series of intervals. Mandatory if the _recurrenceUType_ value is `intervalSchedule`.
 */
export interface BankingScheduledPaymentRecurrenceIntervalSchedule {
    /**
     * The limit date after which no more payments should be made using this schedule. If both _finalPaymentDate_ and _paymentsRemaining_ are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely.
     */
    finalPaymentDate?: string | null;
    /**
     * An array of interval objects defining the payment schedule. Each entry in the array is additive, in that it adds payments to the overall payment schedule. If multiple intervals result in a payment on the same day then only one payment will be made. Must have at least one entry.
     */
    intervals: BankingScheduledPaymentInterval[];
    /**
     * Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be `ON`.<ul><li>`AFTER` - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<li>`BEFORE` - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<li>`ON` - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<li>`ONLY` - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored.</ul>
     */
    nonBusinessDayTreatment?: ("AFTER" | "BEFORE" | "ON" | "ONLY") | null;
    /**
     * Indicates the number of payments remaining in the schedule. If both _finalPaymentDate_ and _paymentsRemaining_ are present then payments will stop according to the most constraining value, If neither field is present the payments will continue indefinitely.
     */
    paymentsRemaining?: number | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Indicates that the schedule of payments is defined according to the last occurrence of a specific weekday in an interval. Mandatory if the _recurrenceUType_ value is `lastWeekDay`.
 */
export interface BankingScheduledPaymentRecurrenceLastWeekday {
    /**
     * The limit date after which no more payments should be made using this schedule. If both _finalPaymentDate_ and _paymentsRemaining_ are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely.
     */
    finalPaymentDate?: string | null;
    /**
     * The interval for the payment. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) with components less than a day in length ignored. This duration defines the period between payments starting with _nextPaymentDate_.
     */
    interval: string;
    /**
     * The weekDay specified. The payment will occur on the last occurrence of this weekday in the interval.
     */
    lastWeekDay: "FRI" | "MON" | "SAT" | "SUN" | "THU" | "TUE" | "WED";
    /**
     * Enumerated field giving the treatment where a scheduled payment date is not a business day. If absent assumed to be `ON`.<ul><li>`AFTER` - If a scheduled payment date is a non-business day the payment will be made on the first business day after the scheduled payment date.<li>`BEFORE` - If a scheduled payment date is a non-business day the payment will be made on the first business day before the scheduled payment date.<li>`ON` - If a scheduled payment date is a non-business day the payment will be made on that day regardless.<li>`ONLY` - Payments only occur on business days. If a scheduled payment date is a non-business day the payment will be ignored.</ul>
     */
    nonBusinessDayTreatment?: ("AFTER" | "BEFORE" | "ON" | "ONLY") | null;
    /**
     * Indicates the number of payments remaining in the schedule. If both _finalPaymentDate_ and _paymentsRemaining_ are present then payments will stop according to the most constraining value. If neither field is present the payments will continue indefinitely.
     */
    paymentsRemaining?: number | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Indicates that the payment is a once off payment on a specific future date. Mandatory if the _recurrenceUType_ value is `onceOff`.
 */
export interface BankingScheduledPaymentRecurrenceOnceOff {
    /**
     * The scheduled date for the once off payment.
     */
    paymentDate: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * The set of payment amounts and destination accounts for this payment accommodating multi-part payments. A single entry indicates a simple payment with one destination account. Must have at least one entry.
 */
export interface BankingScheduledPaymentSetV2 {
    /**
     * The amount of the next payment if known. Mandatory unless the _isAmountCalculated_ field is set to `true`. Must be zero or positive if present.
     */
    amount?: string | null;
    /**
     * The currency for the payment. `AUD` assumed if not present.
     */
    currency?: string | null;
    /**
     * Flag indicating whether the amount of the payment is calculated based on the context of the event. For instance a payment to reduce the balance of a credit card to zero. If absent then `false` is assumed.
     */
    isAmountCalculated?: boolean | null;
    to: BankingScheduledPaymentToV2;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Object containing details of the destination of the payment. Used to specify a variety of payment destination types.
 */
export interface BankingScheduledPaymentToV2 {
    /**
     * Present if _toUType_ is set to `accountId`. Indicates that the payment is to another account that is accessible under the current consent.
     */
    accountId?: string;
    biller?: BankingBillerPayee;
    digitalWallet?: BankingDigitalWalletPayee;
    domestic?: BankingDomesticPayee;
    international?: BankingInternationalPayee;
    /**
     * The short display name of the payee as provided by the customer unless _toUType_ is set to `payeeId`. Where a customer has not provided a nickname, a display name derived by the bank for payee should be provided that is consistent with existing digital banking channels.
     */
    nickname?: string | null;
    /**
     * Present if _toUType_ is set to `payeeId`. Indicates that the payment is to registered payee that can be accessed using the payee endpoint. If the Bank Payees scope has not been consented to then a _payeeId_ should not be provided and the full payee details should be provided instead.
     */
    payeeId?: string;
    /**
     * The reference for the transaction, if applicable, that will be provided by the originating institution for the specific payment. If not empty, it overrides the value provided at the BankingScheduledPayment level.
     */
    payeeReference?: string | null;
    /**
     * The type of object provided that specifies the destination of the funds for the payment.
     */
    toUType: "accountId" | "biller" | "digitalWallet" | "domestic" | "international" | "payeeId";
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingScheduledPaymentV2 {
    from: BankingScheduledPaymentFrom;
    /**
     * The short display name of the scheduled payment as provided by the customer if provided. Where a customer has not provided a nickname, a display name derived by the bank for the scheduled payment should be provided that is consistent with existing digital banking channels.
     */
    nickname?: string | null;
    /**
     * The reference for the transaction, if applicable, that will be provided by the originating institution for all payments in the payment set. Empty string if no data provided.
     */
    payeeReference?: string | null;
    /**
     * The reference for the transaction that will be used by the originating institution for the purposes of constructing a statement narrative on the payer’s account. Empty string if no data provided.
     */
    payerReference: string;
    paymentSet: BankingScheduledPaymentSetV2[];
    recurrence: BankingScheduledPaymentRecurrence;
    /**
     * Unique identifier for the scheduled payment.
     */
    scheduledPaymentId: string;
    /**
     * Indicates whether the schedule is currently active. The value `SKIP` is equivalent to `ACTIVE` except that the customer has requested the next normal occurrence to be skipped.
     */
    status: "ACTIVE" | "INACTIVE" | "SKIP";
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingTermDepositAccount {
    /**
     * The lodgement date of the original deposit.
     */
    lodgementDate: string;
    /**
     * Amount to be paid upon maturity. If absent it implies the amount to paid is variable and cannot currently be calculated.
     */
    maturityAmount?: string | null;
    /**
     * If absent assumes `AUD`.
     */
    maturityCurrency?: string | null;
    /**
     * Maturity date for the term deposit.
     */
    maturityDate: string;
    /**
     * Current instructions on action to be taken at maturity. This includes default actions that may be specified in the terms and conditions for the product e.g., roll-over to the same term and frequency of interest payments.
     */
    maturityInstructions: "HOLD_ON_MATURITY" | "PAID_OUT_AT_MATURITY" | "ROLLED_OVER";
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingTransaction {
    /**
     * Unique identifier for the account.
     */
    accountId: string;
    /**
     * The value of the transaction. Negative values mean money was outgoing from the account.
     */
    amount: string;
    /**
     * 6 Digit APCA number for the initiating institution. The field is fixed-width and padded with leading zeros if applicable.
     */
    apcaNumber?: string | null;
    /**
     * BPAY Biller Code for the transaction (if available).
     */
    billerCode?: string | null;
    /**
     * Name of the BPAY biller for the transaction (if available).
     */
    billerName?: string | null;
    /**
     * BPAY CRN for the transaction (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for [MaskedPANString](#common-field-types). If the contents are otherwise sensitive, then it should be masked using the rules applicable for the [MaskedAccountString](#common-field-types) common type.
     */
    crn?: string | null;
    /**
     * The currency for the transaction amount. `AUD` assumed if not present.
     */
    currency?: string | null;
    /**
     * The transaction description as applied by the financial institution.
     */
    description: string;
    /**
     * The time the transaction was executed by the originating customer, if available.
     */
    executionDateTime?: string | null;
    /**
     * `true` if extended information is available using the transaction detail endpoint. `false` if extended data is not available.
     */
    isDetailAvailable: boolean;
    /**
     * The merchant category code (or MCC) for an outgoing payment to a merchant.
     */
    merchantCategoryCode?: string | null;
    /**
     * Name of the merchant for an outgoing payment to a merchant.
     */
    merchantName?: string | null;
    /**
     * The time the transaction was posted. This field is Mandatory if the transaction has status `POSTED`. This is the time that appears on a standard statement.
     */
    postingDateTime?: string | null;
    /**
     * The reference for the transaction provided by the originating institution. Empty string if no data provided.
     */
    reference: string;
    /**
     * Status of the transaction whether pending or posted. Note that there is currently no provision in the standards to guarantee the ability to correlate a pending transaction with an associated posted transaction.
     */
    status: "PENDING" | "POSTED";
    /**
     * Unique identifier for the transaction. This is mandatory (through hashing if necessary) unless there are specific and justifiable technical reasons why a transaction cannot be uniquely identified for a particular account type. Mandatory if the _isDetailAvailable_ value is `true`.
     */
    transactionId?: string;
    /**
     * The type of the transaction.
     */
    type:
        | "DIRECT_DEBIT"
        | "FEE"
        | "INTEREST_CHARGED"
        | "INTEREST_PAID"
        | "OTHER"
        | "PAYMENT"
        | "TRANSFER_INCOMING"
        | "TRANSFER_OUTGOING";
    /**
     * Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.
     */
    valueDateTime?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export type BankingTransactionDetail = BankingTransaction & {
    extendedData: {
        /**
         * Label of the originating payer. Mandatory for inbound payment.
         */
        payer?: string;
        /**
         * Label of the target PayID. Mandatory for an outbound payment. The name assigned to the BSB/Account Number or PayID (by the owner of the PayID).
         */
        payee?: string;
        /**
         * Optional extended data specific to transactions originated via NPP.
         */
        extensionUType?: "x2p101Payload";
        x2p101Payload?: {
            /**
             * An extended string description. Required if the _extensionUType_ field is `x2p101Payload`.
             */
            extendedDescription?: string;
            /**
             * An end to end ID for the payment created at initiation.
             */
            endToEndId?: string;
            /**
             * Purpose of the payment. Format is defined by NPP standards for the x2p1.01 overlay service.
             */
            purposeCode?: string;
        };
        /**
         * Identifier of the applicable overlay service. Valid values are: `X2P1.01`.
         */
        service: "X2P1.01";
    };
};
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export type BankingTransactionDetailV2 = BankingTransaction & {
    extendedData: {
        /**
         * Label of the originating payer. Mandatory for inbound payment.
         */
        payer?: string;
        /**
         * Label of the target PayID. Mandatory for an outbound payment. The name assigned to the BSB/Account Number or PayID (by the owner of the PayID).
         */
        payee?: string;
        /**
         * Optional extended data specific to transactions. Currently extended data is supported for NPP service overlays.
         */
        extensionUType?: "nppPayload";
        /**
         * Required if the _extensionUType_ value is `nppPayload`.
         */
        nppPayload?: {
            /**
             * An extended string description. Required if the _extensionUType_ value is `nppPayload`.
             */
            extendedDescription?: string;
            /**
             * An end to end ID for the payment created at initiation.
             */
            endToEndId?: string;
            /**
             * Purpose of the payment. Format is defined by the NPP standards for the NPP overlay services including Osko (X2P1).
             */
            purposeCode?: string;
            /**
             * Identifier of the applicable overlay service. The _service_ is used in conjunction with the _serviceVersion_. See [here](#npp-services) for more details.
             */
            service: "X2P1" | "IFTI" | "BSCT" | "CATSCT";
            /**
             * Two-digit NPP service overlay version with leading zero.
             */
            serviceVersion: string;
        };
    };
};
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export type BankingTransactionDetailV3 = BankingTransactionV2 & {
    extendedData: {
        /**
         * Label of the originating payer. Mandatory for inbound payment.
         */
        payer?: string;
        /**
         * Label of the target PayID. Mandatory for an outbound payment. The name assigned to the BSB/Account Number or PayID (by the owner of the PayID).
         */
        payee?: string;
        /**
         * Optional extended data specific to transactions. Currently extended data is supported for NPP service overlays.
         */
        extensionUType?: "nppPayload";
        /**
         * Mandatory if the _extensionUType_ value is `nppPayload`.
         */
        nppPayload?: {
            /**
             * An extended string description. Mandatory if the _extensionUType_ value is `nppPayload`.
             */
            extendedDescription?: string;
            /**
             * An end to end ID for the payment created at initiation.
             */
            endToEndId?: string;
            /**
             * Purpose of the payment. Format is defined by the NPP standards for the NPP overlay services including Osko (X2P1).
             */
            purposeCode?: string;
            /**
             * Identifier of the applicable overlay service. The _service_ is used in conjunction with the _serviceVersion_. See [here](#npp-services) for more details.
             */
            service: "X2P1" | "IFTI" | "BSCT" | "CATSCT";
            /**
             * Two-digit NPP service overlay version with leading zero.
             */
            serviceVersion: string;
        };
    };
};
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * A unique identifier for a Banking transaction, generated according to [CDR ID Permanence](#id-permanence) requirements.
 */
export type BankingTransactionId = string;
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingTransactionV2 {
    /**
     * Unique identifier for the account.
     */
    accountId: string;
    /**
     * The value of the transaction. Negative values mean money was outgoing from the account.
     */
    amount: string;
    /**
     * 6 Digit APCA number for the initiating institution. The field is fixed-width and padded with leading zeros if applicable.
     */
    apcaNumber?: string | null;
    /**
     * BPAY Biller Code for the transaction (if available).
     */
    billerCode?: string | null;
    /**
     * Name of the BPAY biller for the transaction (if available).
     */
    billerName?: string | null;
    /**
     * BPAY CRN for the transaction (if available).<br/>Where the CRN contains sensitive information, it should be masked in line with how the Data Holder currently displays account identifiers in their existing online banking channels. If the contents of the CRN match the format of a Credit Card PAN they should be masked according to the rules applicable for [MaskedPANString](#common-field-types). If the contents are otherwise sensitive, then it should be masked using the rules applicable for the [MaskedAccountString](#common-field-types) common type.
     */
    crn?: string | null;
    /**
     * The currency for the transaction amount. `AUD` assumed if not present.
     */
    currency?: string | null;
    /**
     * The transaction description as applied by the financial institution.
     */
    description: string;
    /**
     * The time the transaction was executed by the originating customer, if available.
     */
    executionDateTime?: string | null;
    /**
     * If the transaction is associated with an instalment plan, the corresponding _planId_ value. It should be noted that if the transaction is for a fee associated with a plan, or any amount of repayment, the _amount_ of the transaction may not match a scheduled instalment amount.
     */
    instalmentPlanId?: string;
    /**
     * `true` if extended information is available using the transaction detail endpoint. `false` if extended data is not available.
     */
    isDetailAvailable: boolean;
    /**
     * The merchant category code (or MCC) for an outgoing payment to a merchant.
     */
    merchantCategoryCode?: string | null;
    /**
     * Name of the merchant for an outgoing payment to a merchant.
     */
    merchantName?: string | null;
    /**
     * The time the transaction was posted. This field is Mandatory if the transaction has status `POSTED`. This is the time that appears on a standard statement.
     */
    postingDateTime?: string | null;
    /**
     * The reference for the transaction provided by the originating institution. Empty string if no data provided.
     */
    reference: string;
    /**
     * Status of the transaction whether pending or posted. Note that there is currently no provision in the standards to guarantee the ability to correlate a pending transaction with an associated posted transaction.
     */
    status: "PENDING" | "POSTED";
    /**
     * Unique identifier for the transaction. This is mandatory (through hashing if necessary) unless there are specific and justifiable technical reasons why a transaction cannot be uniquely identified for a particular account type. Mandatory if the _isDetailAvailable_ value is `true`.
     */
    transactionId?: string;
    /**
     * The type of the transaction.
     */
    type:
        | "DIRECT_DEBIT"
        | "FEE"
        | "INTEREST_CHARGED"
        | "INTEREST_PAID"
        | "OTHER"
        | "PAYMENT"
        | "TRANSFER_INCOMING"
        | "TRANSFER_OUTGOING";
    /**
     * Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.
     */
    valueDateTime?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). Mandatory if the _addressUType_ value is `paf`.
 */
export interface CommonPAFAddress {
    /**
     * Building/Property name 1.
     */
    buildingName1?: string | null;
    /**
     * Building/Property name 2.
     */
    buildingName2?: string | null;
    /**
     * Unique identifier for an address as defined by Australia Post. Also known as Delivery Point Identifier.
     */
    dpid?: string | null;
    /**
     * Unit number (including suffix, if applicable).
     */
    flatUnitNumber?: string | null;
    /**
     * Type of flat or unit for the address.
     */
    flatUnitType?: string | null;
    /**
     * Floor or level number (including alpha characters).
     */
    floorLevelNumber?: string | null;
    /**
     * Type of floor or level for the address.
     */
    floorLevelType?: string | null;
    /**
     * Full name of locality.
     */
    localityName: string;
    /**
     * Allotment number for the address.
     */
    lotNumber?: string | null;
    /**
     * Postal delivery number if the address is a postal delivery type.
     */
    postalDeliveryNumber?: number | null;
    /**
     * Postal delivery number prefix related to the postal delivery number.
     */
    postalDeliveryNumberPrefix?: string | null;
    /**
     * Postal delivery number suffix related to the postal delivery number.
     */
    postalDeliveryNumberSuffix?: string | null;
    /**
     * Postal delivery type. (e.g., PO BOX). Valid enumeration defined by Australia Post PAF code file.
     */
    postalDeliveryType?: string | null;
    /**
     * Postcode for the locality.
     */
    postcode: string;
    /**
     * State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). `NSW`, `QLD`, `VIC`, `NT`, `WA`, `SA`, `TAS`, `ACT`, `AAT`.
     */
    state: string;
    /**
     * The name of the street.
     */
    streetName?: string | null;
    /**
     * The street type suffix. Valid enumeration defined by Australia Post PAF code file.
     */
    streetSuffix?: string | null;
    /**
     * The street type. Valid enumeration defined by Australia Post PAF code file.
     */
    streetType?: string | null;
    /**
     * Thoroughfare number for a property (first number in a property ranged address).
     */
    thoroughfareNumber1?: number | null;
    /**
     * Suffix for the thoroughfare number. Only relevant if _thoroughfareNumber1_ is populated.
     */
    thoroughfareNumber1Suffix?: string | null;
    /**
     * Second thoroughfare number (only used if the property has a ranged address, e.g., 23-25).
     */
    thoroughfareNumber2?: number | null;
    /**
     * Suffix for the second thoroughfare number. Only relevant if _thoroughfareNumber2_ is populated.
     */
    thoroughfareNumber2Suffix?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface CommonPhysicalAddress {
    /**
     * The type of address object present.
     */
    addressUType: "paf" | "simple";
    paf?: CommonPAFAddress;
    simple?: CommonSimpleAddress;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Mandatory if the _addressUType_ value is `simple`.
 */
export interface CommonSimpleAddress {
    /**
     * First line of the standard address object.
     */
    addressLine1: string;
    /**
     * Second line of the standard address object.
     */
    addressLine2?: string | null;
    /**
     * Third line of the standard address object.
     */
    addressLine3?: string | null;
    /**
     * Name of the city or locality.
     */
    city: string;
    /**
     * A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (`AUS`) is assumed if country is not present.
     */
    country?: string | null;
    /**
     * Name of the individual or business formatted for inclusion in an address used for physical mail.
     */
    mailingName?: string | null;
    /**
     * Mandatory for Australian addresses.
     */
    postcode?: string | null;
    /**
     * Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. `NSW`, `QLD`, `VIC`, `NT`, `WA`, `SA`, `TAS`, `ACT`, `AAT`.
     */
    state: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface Links {
    /**
     * Fully qualified link that generated the current response document.
     */
    self: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface Meta {}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Additional data for customised error codes.
 */
export interface MetaError {
    /**
     * The CDR error code URN which the application-specific error code extends. Mandatory if the error _code_ is an application-specific error rather than a standardised error code.
     */
    urn?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

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
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export type MetaPaginatedTransaction = MetaPaginated & {
    /**
     * `true` if _text_ query parameter is not supported.
     */
    isQueryParamUnsupported?: boolean;
};
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

/**
 * Identifier of the applicable overlay service. The _service_ is used in conjunction with the _serviceVersion_. See [here](#npp-services) for more details.
 */
export type NppPaymentService = "X2P1" | "IFTI" | "BSCT" | "CATSCT";
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface RequestAccountIdListV1 {
    data: {
        /**
         * Array of _accountId_ values to obtain data for.
         */
        accountIds: string[];
    };
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface RequestAccountIds {
    data: {
        /**
         * Array of _accountId_ values.
         */
        accountIds: string[];
    };
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingAccountByIdV3 {
    data: BankingAccountV2 & {
        /**
         * The unmasked BSB for the account. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.
         */
        bsb?: string;
        /**
         * The unmasked account number for the account. Should not be supplied if the account number is a PAN requiring PCI compliance. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.
         */
        accountNumber?: string;
        /**
         * Optional field to indicate if this account is part of a bundle that is providing additional benefit to the customer.
         */
        bundleName?: string;
        /**
         * The type of structure to present account specific fields.
         */
        specificAccountUType?: "creditCard" | "loan" | "termDeposit";
        termDeposit?: BankingTermDepositAccount[];
        creditCard?: BankingCreditCardAccount;
        loan?: BankingLoanAccountV2;
        /**
         * Current rate to calculate interest earned being applied to deposit balances as it stands at the time of the API call.
         */
        depositRate?: string;
        /**
         * The current rate to calculate interest payable being applied to lending balances as it stands at the time of the API call.
         */
        lendingRate?: string;
        /**
         * Fully described deposit rates for this account based on the equivalent structure in Product Reference.
         */
        depositRates?: BankingProductDepositRate[];
        /**
         * Fully described lending rates for this account based on the equivalent structure in Product Reference.
         */
        lendingRates?: BankingProductLendingRateV2[];
        /**
         * Array of features of the account based on the equivalent structure in Product Reference with the following additional field.
         */
        features?: (BankingProductFeatureV2 & {
            /**
             * `true` if the feature is already activated and `false` if the feature is available for activation. Defaults to `true` if absent.<br>Note: this is an additional field appended to the feature object defined in the Product Reference payload.
             */
            isActivated?: boolean;
        })[];
        /**
         * Fees and charges applicable to the account based on the equivalent structure in Product Reference.
         */
        fees?: BankingProductFee[];
        /**
         * The addresses for the account to be used for correspondence.
         */
        addresses?: CommonPhysicalAddress[];
    };
    links: Links;
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingAccountByIdV4 {
    data: BankingAccountV2 & {
        /**
         * The unmasked BSB for the account. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.
         */
        bsb?: string;
        /**
         * The unmasked account number for the account. Should not be supplied if the account number is a PAN requiring PCI compliance. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.
         */
        accountNumber?: string;
        /**
         * Optional field to indicate if this account is part of a bundle that is providing additional benefit to the customer.
         */
        bundleName?: string;
        /**
         * The type of structure to present account specific fields.
         */
        specificAccountUType?: "creditCard" | "loan" | "termDeposit";
        /**
         * Mandatory if the _specificAccountUType_ value is `termDeposit`.
         */
        termDeposit?: BankingTermDepositAccount[];
        /**
         * Mandatory if the _specificAccountUType_ value is `creditCard`.
         */
        creditCard?: BankingCreditCardAccount;
        /**
         * Mandatory if the _specificAccountUType_ value is `loan`.
         */
        loan?: BankingLoanAccountV3;
        /**
         * Current rate to calculate interest earned being applied to deposit balances as it stands at the time of the API call.
         */
        depositRate?: string;
        /**
         * The current rate to calculate interest payable being applied to lending balances as it stands at the time of the API call.
         */
        lendingRate?: string;
        /**
         * Fully described deposit rates for this account based on the equivalent structure in Product Reference.
         */
        depositRates?: BankingProductDepositRateV2[];
        /**
         * Fully described lending rates for this account based on the equivalent structure in Product Reference.
         */
        lendingRates?: BankingProductLendingRateV3[];
        /**
         * Array of features of the account based on the equivalent structure in Product Reference with the following additional field.
         */
        features?: (BankingProductFeatureV3 & {
            /**
             * <ul><li>`ACTIVATED` if the feature has been activated by the customer or is a standard feature of the product</li><li>`NOT_ACTIVATED` if the feature is not activated but is available for activation</li><li>`UNKNOWN` or absent if the activation state is unknown.</ul>**Note:** This is an additional field appended to the feature structure defined in the Product Reference payload.
             */
            isActivated?: "ACTIVATED" | "NOT_ACTIVATED" | "UNKNOWN";
        })[];
        /**
         * Fees and charges applicable to the account based on the equivalent structure in Product Reference.
         */
        fees?: BankingProductFeeV2[];
        /**
         * The addresses for the account to be used for correspondence.
         */
        addresses?: CommonPhysicalAddress[];
    };
    links: Links;
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingAccountByIdV5 {
    data: BankingAccountV3 & {
        /**
         * The unmasked BSB for the account. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.
         */
        bsb?: string;
        /**
         * The unmasked account number for the account. Should not be supplied if the account number is a PAN requiring PCI compliance. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.
         */
        accountNumber?: string;
        /**
         * Optional field to indicate if this account is part of a bundle that is providing additional benefit to the customer.
         */
        bundleName?: string;
        instalments?: BankingProductInstalments;
        /**
         * The type of structure to present account specific fields.
         */
        specificAccountUType?: "creditCard" | "loan" | "termDeposit";
        /**
         * Mandatory if the _specificAccountUType_ value is `termDeposit`.
         */
        termDeposit?: BankingTermDepositAccount[];
        /**
         * Mandatory if the _specificAccountUType_ value is `creditCard`.
         */
        creditCard?: BankingCreditCardAccount;
        /**
         * Mandatory if the _specificAccountUType_ value is `loan`.
         */
        loan?: BankingLoanAccountV3;
        /**
         * Current rate to calculate interest earned being applied to deposit balances as it stands at the time of the API call.
         */
        depositRate?: string;
        /**
         * The current rate to calculate interest payable being applied to lending balances as it stands at the time of the API call.
         */
        lendingRate?: string;
        /**
         * Fully described deposit rates for this account based on the equivalent structure in Product Reference.
         */
        depositRates?: BankingProductDepositRateV2[];
        /**
         * Fully described lending rates for this account based on the equivalent structure in Product Reference.
         */
        lendingRates?: BankingProductLendingRateV3[];
        /**
         * Array of features of the account based on the equivalent structure in Product Reference with the following additional field.
         */
        features?: (BankingProductFeatureV4 & {
            /**
             * <ul><li>`ACTIVATED` if the feature has been activated by the customer or is a standard feature of the product</li><li>`NOT_ACTIVATED` if the feature is not activated but is available for activation</li><li>`UNKNOWN` or absent if the activation state is unknown.</ul>**Note:** This is an additional field appended to the feature structure defined in the Product Reference payload.
             */
            isActivated?: "ACTIVATED" | "NOT_ACTIVATED" | "UNKNOWN";
        })[];
        /**
         * Fees and charges applicable to the account based on the equivalent structure in Product Reference.
         */
        fees?: BankingProductFeeV2[];
        /**
         * The addresses for the account to be used for correspondence.
         */
        addresses?: CommonPhysicalAddress[];
    };
    links: Links;
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingAccountListV2 {
    data: {
        /**
         * The list of accounts returned. If the filter results in an empty set then this array may have no records.
         */
        accounts: BankingAccountV2[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingAccountListV3 {
    data: {
        /**
         * The list of accounts returned. If the filter results in an empty set then this array may have no records.
         */
        accounts: BankingAccountV3[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingAccountsBalanceById {
    data: BankingBalance;
    links: Links;
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingAccountsBalanceList {
    data: {
        /**
         * The list of balances returned.
         */
        balances: BankingBalance[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingDirectDebitAuthorisationList {
    data: {
        /**
         * The list of authorisations returned.
         */
        directDebitAuthorisations: BankingDirectDebit[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingInstalmentPlanList {
    data: {
        /**
         * Array of instalment plans. An instalment plan describes the terms of repayment for a specified loan amount such as a Buy Now, Pay Later (BNPL) purchase or a specific card transaction.
         */
        plans: BankingInstalmentPlan[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingPayeeByIdV2 {
    data: BankingPayeeV2 & {
        /**
         * Type of object included that describes the payee in detail.
         */
        payeeUType: "biller" | "digitalWallet" | "domestic" | "international";
        biller?: BankingBillerPayee;
        domestic?: BankingDomesticPayee;
        digitalWallet?: BankingDigitalWalletPayee;
        international?: BankingInternationalPayee;
    };
    links: Links;
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingPayeeListV2 {
    data: {
        /**
         * The list of payees returned.
         */
        payees: BankingPayeeV2[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingProductByIdV4 {
    data: BankingProductV4 & {
        /**
         * An array of bundles that this product participates in. Each bundle is described by free form information but also by a list of product IDs of the other products that are included in the bundle. It is assumed that the current product is included in the bundle also.
         */
        bundles?: BankingProductBundle[];
        /**
         * Array of features available for the product.
         */
        features?: BankingProductFeatureV2[];
        /**
         * Constraints on the application for or operation of the product such as minimum balances or limit thresholds.
         */
        constraints?: BankingProductConstraint[];
        /**
         * Eligibility criteria for the product.
         */
        eligibility?: BankingProductEligibility[];
        /**
         * Fees applicable to the product.
         */
        fees?: BankingProductFee[];
        /**
         * Interest rates available for deposits.
         */
        depositRates?: BankingProductDepositRate[];
        /**
         * Interest rates charged against lending balances.
         */
        lendingRates?: BankingProductLendingRateV2[];
    };
    links: Links;
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingProductByIdV5 {
    data: BankingProductV4 & {
        /**
         * An array of bundles that this product participates in. Each bundle is described by free form information but also by a list of product IDs of the other products that are included in the bundle. It is assumed that the current product is included in the bundle also.
         */
        bundles?: BankingProductBundle[];
        /**
         * Array of features available for the product.
         */
        features?: BankingProductFeatureV2[];
        /**
         * Constraints on the application for or operation of the product such as minimum balances or limit thresholds.
         */
        constraints?: BankingProductConstraintV2[];
        /**
         * Eligibility criteria for the product.
         */
        eligibility?: BankingProductEligibility[];
        /**
         * Fees applicable to the product.
         */
        fees?: BankingProductFee[];
        /**
         * Interest rates available for deposits.
         */
        depositRates?: BankingProductDepositRate[];
        /**
         * Interest rates charged against lending balances.
         */
        lendingRates?: BankingProductLendingRateV2[];
    };
    links: Links;
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingProductByIdV6 {
    data: BankingProductV5 & {
        /**
         * An array of bundles that this product participates in. Each bundle is described by free form information but also by a list of _productID_ values of the other products that are included in the bundle. It is assumed that the current product is included in the bundle also.
         */
        bundles?: BankingProductBundle[];
        /**
         * Array of features and limitations of the product.
         */
        features?: BankingProductFeatureV3[];
        /**
         * Constraints on the application for the product such as minimum balances or limit thresholds.
         */
        constraints?: BankingProductConstraintV3[];
        /**
         * Eligibility criteria for the product.
         */
        eligibility?: BankingProductEligibilityV2[];
        /**
         * Fees applicable to the product.
         */
        fees?: BankingProductFeeV2[];
        /**
         * Interest rates available for deposits.
         */
        depositRates?: BankingProductDepositRateV2[];
        /**
         * Interest rates charged against lending balances.
         */
        lendingRates?: BankingProductLendingRateV3[];
    };
    links: Links;
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingProductByIdV7 {
    data: BankingProductV6 & {
        /**
         * An array of bundles that this product participates in. Each bundle is described by free form information but also by a list of _productID_ values of the other products that are included in the bundle. It is assumed that the current product is included in the bundle also.
         */
        bundles?: BankingProductBundle[];
        /**
         * Array of features and limitations of the product.
         */
        features?: BankingProductFeatureV4[];
        /**
         * Constraints on the application for the product such as minimum balances or limit thresholds.
         */
        constraints?: BankingProductConstraintV3[];
        /**
         * Eligibility criteria for the product.
         */
        eligibility?: BankingProductEligibilityV2[];
        /**
         * Fees applicable to the product.
         */
        fees?: BankingProductFeeV2[];
        /**
         * Interest rates available for deposits.
         */
        depositRates?: BankingProductDepositRateV2[];
        /**
         * Interest rates charged against lending balances.
         */
        lendingRates?: BankingProductLendingRateV3[];
        instalments?: BankingProductInstalments;
    };
    links: Links;
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingProductListV2 {
    data: {
        /**
         * The list of products returned. If the filter results in an empty set then this array may have no records.
         */
        products: BankingProductV4[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingProductListV3 {
    data: {
        /**
         * The list of products returned. If the filter results in an empty set then this array may have no records.
         */
        products: BankingProductV5[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingProductListV4 {
    data: {
        /**
         * The list of products returned. If the filter results in an empty set then this array may have no records.
         */
        products: BankingProductV6[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingScheduledPaymentsListV2 {
    data: {
        /**
         * The list of scheduled payments to return.
         */
        scheduledPayments: BankingScheduledPaymentV2[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingTransactionById {
    data: BankingTransaction & {
        extendedData: {
            /**
             * Label of the originating payer. Mandatory for inbound payment.
             */
            payer?: string;
            /**
             * Label of the target PayID. Mandatory for an outbound payment. The name assigned to the BSB/Account Number or PayID (by the owner of the PayID).
             */
            payee?: string;
            /**
             * Optional extended data specific to transactions originated via NPP.
             */
            extensionUType?: "x2p101Payload";
            x2p101Payload?: {
                /**
                 * An extended string description. Required if the _extensionUType_ field is `x2p101Payload`.
                 */
                extendedDescription?: string;
                /**
                 * An end to end ID for the payment created at initiation.
                 */
                endToEndId?: string;
                /**
                 * Purpose of the payment. Format is defined by NPP standards for the x2p1.01 overlay service.
                 */
                purposeCode?: string;
            };
            /**
             * Identifier of the applicable overlay service. Valid values are: `X2P1.01`.
             */
            service: "X2P1.01";
        };
    };
    links: Links;
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingTransactionByIdV2 {
    data: BankingTransaction & {
        extendedData: {
            /**
             * Label of the originating payer. Mandatory for inbound payment.
             */
            payer?: string;
            /**
             * Label of the target PayID. Mandatory for an outbound payment. The name assigned to the BSB/Account Number or PayID (by the owner of the PayID).
             */
            payee?: string;
            /**
             * Optional extended data specific to transactions. Currently extended data is supported for NPP service overlays.
             */
            extensionUType?: "nppPayload";
            /**
             * Required if the _extensionUType_ value is `nppPayload`.
             */
            nppPayload?: {
                /**
                 * An extended string description. Required if the _extensionUType_ value is `nppPayload`.
                 */
                extendedDescription?: string;
                /**
                 * An end to end ID for the payment created at initiation.
                 */
                endToEndId?: string;
                /**
                 * Purpose of the payment. Format is defined by the NPP standards for the NPP overlay services including Osko (X2P1).
                 */
                purposeCode?: string;
                /**
                 * Identifier of the applicable overlay service. The _service_ is used in conjunction with the _serviceVersion_. See [here](#npp-services) for more details.
                 */
                service: "X2P1" | "IFTI" | "BSCT" | "CATSCT";
                /**
                 * Two-digit NPP service overlay version with leading zero.
                 */
                serviceVersion: string;
            };
        };
    };
    links: Links;
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingTransactionByIdV3 {
    data: BankingTransactionV2 & {
        extendedData: {
            /**
             * Label of the originating payer. Mandatory for inbound payment.
             */
            payer?: string;
            /**
             * Label of the target PayID. Mandatory for an outbound payment. The name assigned to the BSB/Account Number or PayID (by the owner of the PayID).
             */
            payee?: string;
            /**
             * Optional extended data specific to transactions. Currently extended data is supported for NPP service overlays.
             */
            extensionUType?: "nppPayload";
            /**
             * Mandatory if the _extensionUType_ value is `nppPayload`.
             */
            nppPayload?: {
                /**
                 * An extended string description. Mandatory if the _extensionUType_ value is `nppPayload`.
                 */
                extendedDescription?: string;
                /**
                 * An end to end ID for the payment created at initiation.
                 */
                endToEndId?: string;
                /**
                 * Purpose of the payment. Format is defined by the NPP standards for the NPP overlay services including Osko (X2P1).
                 */
                purposeCode?: string;
                /**
                 * Identifier of the applicable overlay service. The _service_ is used in conjunction with the _serviceVersion_. See [here](#npp-services) for more details.
                 */
                service: "X2P1" | "IFTI" | "BSCT" | "CATSCT";
                /**
                 * Two-digit NPP service overlay version with leading zero.
                 */
                serviceVersion: string;
            };
        };
    };
    links: Links;
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingTransactionList {
    data: {
        transactions: BankingTransaction[];
    };
    links: LinksPaginated;
    meta: MetaPaginated & {
        /**
         * `true` if _text_ query parameter is not supported.
         */
        isQueryParamUnsupported?: boolean;
    };
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseBankingTransactionListV2 {
    data: {
        transactions: BankingTransactionV2[];
    };
    links: LinksPaginated;
    meta: MetaPaginated & {
        /**
         * `true` if _text_ query parameter is not supported.
         */
        isQueryParamUnsupported?: boolean;
    };
}
/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface ResponseErrorListV2 {
    /**
     * List of errors.
     */
    errors: ErrorV2[];
}
