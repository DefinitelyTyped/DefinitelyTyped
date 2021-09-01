export interface BankingAccount {
    accountId: string;
    creationDate?: string;
    displayName: string;
    nickname?: string;
    openStatus?: string;
    isOwned?: boolean;
    maskedNumber: string;
    productCategory: BankingProductCategory;
    productName: string;
}

export interface BankingAccountDetail {
    accountId: string;
    creationDate?: string;
    displayName: string;
    nickname?: string;
    openStatus?: string;
    isOwned?: boolean;
    maskedNumber: string;
    productCategory: BankingProductCategory;
    productName: string;
    bsb?: string;
    accountNumber?: string;
    bundleName?: string;
    specificAccountUType?: string;
    termDeposit?: BankingTermDepositAccount[] | null;
    creditCard?: BankingCreditCardAccount | null;
    loan?: BankingLoanAccount | null;
    depositRate?: string;
    lendingRate?: string;
    depositRates?: BankingProductDepositRate[] | null;
    lendingRates?: BankingProductLendingRateV2[] | null;
    features?: Feature[] | null;
    fees?: BankingProductFee[] | null;
    // addresses?: CommonPhysicalAddress[] | null;
}

export interface Feature extends BankingProductFeature {
    isActivated: boolean;
}
export interface BankingAuthorisedEntity {
    description?: string;
    financialInstitution?: string;
    abn?: string;
    acn?: string;
    arbn?: string;
}
export interface BankingBalance {
    accountId: string;
    currentBalance: string;
    availableBalance: string;
    creditLimit?: string;
    amortisedLimit?: string;
    currency?: string;
    purses?: BankingBalancePurse[] | null;
}
export interface BankingBalancePurse {
    amount: string;
    currency?: string;
}
export interface BankingBillerPayee {
    billerCode: string;
    crn?: string;
    billerName: string;
}
export interface BankingCreditCardAccount {
    minPaymentAmount: string;
    paymentDueAmount: string;
    paymentCurrency?: string;
    paymentDueDate: string;
}
export interface BankingDirectDebit {
    accountId: string;
    authorisedEntity: BankingAuthorisedEntity;
    lastDebitDateTime?: string;
    lastDebitAmount?: string;
}
export interface BankingDomesticPayee {
    payeeAccountUType: PayeeAccountUType;
    account?: BankingDomesticPayeeAccount;
    card?: BankingDomesticPayeeCard;
    payId?: BankingDomesticPayeePayId;
}
export interface BankingDomesticPayeeAccount {
    accountName?: string;
    bsb: string;
    accountNumber: string;
}
export interface BankingDomesticPayeeCard {
    cardNumber: string;
}
export interface BankingDomesticPayeePayId {
    name?: string;
    identifier: string;
    type: PayeeIdType;
}
export interface BankingInternationalPayee {
    beneficiaryDetails: BeneficiaryDetails;
    bankDetails: BankDetails;
}
export interface BeneficiaryDetails {
    name?: string;
    country: string;
    message?: string;
}
export interface BankDetails {
    country: string;
    accountNumber: string;
    bankAddress?: BankAddress;
    beneficiaryBankBIC?: string;
    fedWireNumber?: string;
    sortCode?: string;
    chipNumber?: string;
    routingNumber?: string;
    legalEntityIdentifier?: string;
}
export interface BankAddress {
    name: string;
    address: string;
}
export interface BankingLoanAccount {
    originalStartDate?: string;
    originalLoanAmount?: string;
    originalLoanCurrency?: string;
    loanEndDate: string;
    nextInstalmentDate: string;
    minInstalmentAmount?: string;
    minInstalmentCurrency?: string;
    maxRedraw?: string;
    maxRedrawCurrency?: string;
    minRedraw?: string;
    minRedrawCurrency?: string;
    offsetAccountEnabled?: boolean;
    offsetAccountIds?: string[] | null;
    repaymentType?: string;
    repaymentFrequency?: string;
}
export interface BankingPayee {
    payeeId: string;
    nickname: string;
    description?: string;
    type: PayeeType;
    creationDate?: string;
}
export interface BankingPayeeDetail extends BankingPayee {
    payeeUType: PayeeUType;
    domestic?: BankingDomesticPayee;
    biller?: BankingBillerPayee;
    international?: BankingInternationalPayee;
}
export interface BankingProductBundle {
    name: string;
    description: string;
    additionalInfo?: string;
    additionalInfoUri?: string;
    productIds?: string[] | null;
}
export interface BankingProductCondition {
    additionalInfo: string;
    additionalInfoUri: string;
}

export interface BankingProductConstraint {
    constraintType: ProductConstraintType;
    additionalValue?: string;
    additionalInfo?: string;
    additionalInfoUri?: string;
}
export interface BankingProductDepositRate {
    depositRateType: DepositRateType;
    rate: string;
    calculationFrequency?: string;
    applicationFrequency?: string;
    tiers?: BankingProductRateTierV3[] | null;
    additionalValue?: string;
    additionalInfo?: string;
    additionalInfoUri?: string;
}
export interface BankingProductDetailV3 extends BankingProductV3 {
    bundles?: BankingProductBundle[] | null;
    features?: BankingProductFeature[] | null;
    constraints?: BankingProductConstraint[] | null;
    eligibility?: BankingProductEligibility[] | null;
    fees?: BankingProductFee[] | null;
    depositRates?: BankingProductDepositRate[] | null;
    lendingRates?: BankingProductLendingRateV2[] | null;
}
export interface BankingProductDiscount {
    description: string;
    discountType: DiscountType;
    amount?: string;
    balanceRate?: string;
    transactionRate?: string;
    accruedRate?: string;
    feeRate?: string;
    additionalValue?: string;
    additionalInfo?: string;
    additionalInfoUri?: string;
    eligibility?: BankingProductDiscountEligibility[] | null;
}
export interface BankingProductDiscountEligibility {
    discountEligibilityType: DiscountEligibilityType;
    additionalValue?: string;
    additionalInfo?: string;
    additionalInfoUri?: string;
}
export interface BankingProductEligibility {
    eligibilityType: ProductEligibilityType;
    additionalValue?: string;
    additionalInfo?: string;
    additionalInfoUri?: string;
}
export interface BankingProductFeature {
    featureType: ProductFeatureType;
    additionalValue?: string;
    additionalInfo?: string;
    additionalInfoUri?: string;
}
export interface BankingProductFee {
    name: string;
    feeType: ProductFeeType;
    amount?: string;
    balanceRate?: string;
    transactionRate?: string;
    accruedRate?: string;
    accrualFrequency?: string;
    currency?: string;
    additionalValue?: string;
    additionalInfo?: string;
    additionalInfoUri?: string;
    discounts?: BankingProductDiscount[] | null;
}
export interface BankingProductLendingRateV2 {
    lendingRateType: LendingRateType;
    rate: string;
    comparisonRate?: string;
    calculationFrequency?: string;
    applicationFrequency?: string;
    interestPaymentDue?: InterestPaymentDueType;
    repaymentType?: RepaymentType;
    loanPurpose?: LoanPurposeType;
    tiers?: BankingProductRateTierV3[] | null;
    additionalValue?: string;
    additionalInfo?: string;
    additionalInfoUri?: string;
}
export interface BankingProductRateCondition {
    additionalInfo?: string;
    additionalInfoUri?: string;
}
export interface BankingProductRateTierV3 {
    name: string;
    unitOfMeasure: UnitOfMeasureType;
    minimumValue: number;
    maximumValue?: number;
    rateApplicationMethod?: RateApplicationMethodType;
    applicabilityConditions?: BankingProductRateCondition;
    additionalInfo?: string;
    additionalInfoUri?: string;
}
export interface BankingProductV3 {
    productId: string;
    effectiveFrom?: string;
    effectiveTo?: string;
    lastUpdated: string;
    productCategory: BankingProductCategory;
    name: string;
    description: string;
    brand: string;
    brandName?: string;
    applicationUri?: string;
    isTailored: boolean;
    additionalInformation?: AdditionalInformation | null;
    cardArt?: CardArt[] | null;
}

export interface AdditionalInformation {
    overviewUri?: string;
    termsUri?: string;
    eligibilityUri?: string;
    feesAndPricingUri?: string;
    bundleUri?: string;
}

export interface CardArt {
    title?: string;
    imageUri: string;
}
export interface BankingScheduledPayment {
    scheduledPaymentId: string;
    nickname?: string;
    payerReference: string;
    payeeReference?: string;
    status: ScheduledPaymentStatusType;
    from: BankingScheduledPaymentFrom;
    paymentSet: BankingScheduledPaymentSet[] | null;
    recurrence: BankingScheduledPaymentRecurrence;
}
export interface BankingScheduledPaymentFrom {
    accountId: string;
}
export interface BankingScheduledPaymentRecurrence {
    nextPaymentDate?: string;
    recurrenceUType: BankingScheduledPaymentRecurrenceEventBasedType;
    onceOff?: BankingScheduledPaymentRecurrenceOnceOff;
    intervalSchedule?: BankingScheduledPaymentRecurrenceIntervalSchedule;
    lastWeekDay?: BankingScheduledPaymentRecurrenceLastWeekday;
    eventBased: BankingScheduledPaymentRecurrenceEventBased;
}

export interface BankingScheduledPaymentRecurrenceLastWeekday {
    finalPaymentDate: string;
    paymentsRemaining: number;
    interval: string;
    lastWeekDay: string;
    nonBusinessDayTreatment: string;
}

export interface BankingScheduledPaymentRecurrenceEventBased {
    description: string;
}
export interface BankingScheduledPaymentRecurrenceIntervalSchedule {
    finalPaymentDate?: string;
    paymentsRemaining?: number;
    nonBusinessDayTreatment?: NonBusinessDayTreatmentType;
    intervals?: BankingScheduledPaymentInterval[] | null;
}

export interface BankingScheduledPaymentInterval {
    interval: string;
    dayInInterval?: string;
}
export interface BankingScheduledPaymentRecurrenceOnceOff {
    paymentDate: string;
}
export interface BankingScheduledPaymentSet {
    to: BankingScheduledPaymentTo;
    isAmountCalculated?: boolean;
    amount?: string;
    currency?: string;
}
export interface BankingScheduledPaymentTo {
    toUType: string;
    accountId?: string;
    payeeId?: string;
    nickname?: string;
    payeeReference?: string;
    domestic?: BankingDomesticPayee;
    biller?: BankingBillerPayee;
    international?: BankingInternationalPayee;
}
export interface BankingTermDepositAccount {
    lodgementDate: string;
    maturityDate: string;
    maturityAmount?: string;
    maturityCurrency?: string;
    maturityInstructions: MaturityInstructionType;
}
export interface BankingTransaction {
    accountId: string;
    transactionId?: string;
    isDetailAvailable: boolean;
    type: BankingTransactionType;
    status: BankingTransactionStatus;
    description: string;
    postingDateTime?: string;
    valueDateTime?: string;
    executionDateTime?: string;
    amount: string;
    currency?: string;
    reference: string;
    merchantName?: string;
    merchantCategoryCode?: string;
    billerCode?: string;
    billerName?: string;
    crn?: string;
    apcaNumber?: string;
}
export interface BankingTransactionDetail extends BankingTransaction {
    extendedData: ExtendedData;
}

export interface ExtendedData {
    payer?: string;
    payee?: string;
    extensionUType?: BankingTransactionExtensionUType;
    x2p101Payload?: X2p101Payload;
    service: BankingTransactionExtensionServiceType;
}

export interface X2p101Payload {
    extendedDescription: string;
    endToEndId?: string;
    purposeCode?: string;
}

export interface RequestAccountIds {
    data: RequestAccountIdsData;
    meta?: any;
}

export interface RequestAccountIdsData {
    accountIds: string[];
}
export interface ResponseBankingAccountBalanceList {
    data: ResponseBankingAccountBalanceListData;
    links: LinksPaginated;
    meta: MetaPaginated;
}

export interface ResponseBankingAccountBalanceListData {
    balances?: BankingBalance[] | null;
}

export interface ResponseBankingAccountById {
    data: BankingAccountDetail;
    links: Links;
    meta?: any;
}
export interface ResponseBankingAccountList {
    data: ResponseBankingAccountListData;
    links: LinksPaginated;
    meta: MetaPaginated;
}
export interface ResponseBankingAccountListData {
    accounts?: BankingAccount[] | null;
}
export interface ResponseBankingDirectDebitAuthorisationList {
    data: ResponseBankingDirectDebitAuthorisationListData;
    links: LinksPaginated;
    meta: MetaPaginated;
}
export interface ResponseBankingDirectDebitAuthorisationListData {
    directDebitAuthorisations?: BankingDirectDebit[] | null;
}
export interface ReponseBankingPayeeById {
    data: BankingPayeeDetail;
    links: Links;
    meta?: any;
}
export interface ReponseBankingPayeeList {
    data: RespPayeeList;
    links: LinksPaginated;
    meta: MetaPaginated;
}
export interface RespPayeeList {
    payees?: BankingPayee[] | null;
}
export interface ResponseBankingProductById {
    data: BankingProductV3;
    links: Links;
    meta?: any;
}
export interface BankingProductList {
    data: RespProdList;
    links: LinksPaginated;
    meta: MetaPaginated;
}
export interface RespProdList {
    products?: BankingProductV3[];
}
export interface ResponseBankingScheduledPaymentsList {
    data: RespPaymentList;
    links: LinksPaginated;
    meta: MetaPaginated;
}
export interface RespPaymentList {
    scheduledPayments?: BankingScheduledPayment[] | null;
}
export interface ResponseBankingTransactionById {
    data: BankingTransactionDetail;
    links: Links;
    meta?: any;
}
export interface BankingTransactionList {
    data: RespTransList;
    links: LinksPaginated;
    meta: MetaPaginated;
}
export interface RespTransList {
    transactions?: BankingTransactionDetail[] | null;
}

export interface RequestAccountIds {
    data: RequestAccountIdsData;
    meta?: any;
}

export interface RequestAccountIdsData {
    accountIds: string[];
}
export interface ResponseBankingAccountBalanceList {
    data: ResponseBankingAccountBalanceListData;
    links: LinksPaginated;
    meta: MetaPaginated;
}

export interface ResponseBankingAccountBalanceListData {
    balances?: BankingBalance[] | null;
}

export interface ResponseBankingAccountById {
    data: BankingAccountDetail;
    links: Links;
    meta?: any;
}
export interface ResponseBankingAccountList {
    data: ResponseBankingAccountListData;
    links: LinksPaginated;
    meta: MetaPaginated;
}
export interface ResponseBankingAccountListData {
    accounts?: BankingAccount[] | null;
}
export interface ResponseBankingDirectDebitAuthorisationList {
    data: ResponseBankingDirectDebitAuthorisationListData;
    links: LinksPaginated;
    meta: MetaPaginated;
}
export interface ResponseBankingDirectDebitAuthorisationListData {
    directDebitAuthorisations?: BankingDirectDebit[] | null;
}
export interface ReponseBankingPayeeById {
    data: BankingPayeeDetail;
    links: Links;
    meta?: any;
}
export interface ReponseBankingPayeeList {
    data: RespPayeeList;
    links: LinksPaginated;
    meta: MetaPaginated;
}
export interface RespPayeeList {
    payees?: BankingPayee[] | null;
}
export interface ResponseBankingProductById {
    data: BankingProductV3;
    links: Links;
    meta?: any;
}
export interface BankingProductList {
    data: RespProdList;
    links: LinksPaginated;
    meta: MetaPaginated;
}
export interface RespProdList {
    products?: BankingProductV3[];
}
export interface ResponseBankingScheduledPaymentsList {
    data: RespPaymentList;
    links: LinksPaginated;
    meta: MetaPaginated;
}
export interface RespPaymentList {
    scheduledPayments?: BankingScheduledPayment[] | null;
}
export interface ResponseBankingTransactionById {
    data: BankingTransactionDetail;
    links: Links;
    meta?: any;
}
export interface BankingTransactionList {
    data: RespTransList;
    links: LinksPaginated;
    meta: MetaPaginated;
}
export interface RespTransList {
    transactions?: BankingTransactionDetail[] | null;
}
export interface MetaError {
    urn?: string;
}
export interface MetaPaginated {
    totalRecords: number;
    totalPages: number;
}
export interface Links {
    self: string;
}
export interface LinksPaginated {
    self: string;
    first?: string;
    prev?: string;
    next?: string;
    last?: string;
}

export const enum BankingProductCategory {
    BUSINESS_LOANS = "BUSINES_LOANS",
    CRED_AND_CHRG_CARDS = "CRED_AND_CHRG_CARDS",
    LEASES = "LEASES",
    MARGIN_LOANS = "MARGIN_LOANS",
    OVERDRAFTS = "OVERDRAFTS",
    PERS_LOANS = "PERS_LOANS",
    REGULATED_TRUST_ACCOUNTS = "REGULATED_TRUST_ACCOUNTS",
    RESIDENTIAL_MORTGAGES = "RESIDENTIAL_MORTGAGES",
    TERM_DEPOSITS = "TERM_DEPOSITS",
    TRADE_FINANCE = "TRADE_FINANCE",
    TRANS_AND_SAVINGS_ACCOUNTS = "TRANS_AND_SAVINGS_ACCOUNTS",
    TRAVEL_CARDS = "TRAVEL_CARDS"
}

export const enum ProductCategory {
    REGULATED_TRUST_ACCOUNTS = "REGULATED_TRUST_ACCOUNTS",
    TERM_DEPOSITS = "TERM_DEPOSITS",
    TRANS_AND_SAVINGS_ACCOUNTS = "TRANS_AND_SAVINGS_ACCOUNTS",
    TRAVEL_CARDS = "TRAVEL_CARDS"
}

export const enum LendingProduct {
    BUSINESS_LOANS = "BUSINESS_LOANS",
    CRED_AND_CHRG_CARDS = "CRED_AND_CHRG_CARDS",
    LEASES = "LEASES",
    MARGIN_LOANS = "MARGIN_LOANS",
    OVERDRAFTS = "OVERDRAFTS",
    PERS_LOANS = "PERS_LOANS",
    TRADE_FINANCE = "LEATRADE_FINANCESES",
    RESIDENTIAL_MORTGAGES = "RESIDENTIAL_MORTGAGES"
}

export const enum PayeeAccountUType {
    ACCOUNT = "account",
    CARD = "card",
    PAY_ID = "payId"
}

export const enum PayeeIdType {
    ABN = "ABN",
    EMAIL = "EMAIL",
    ORG_IDENTIFIER = "ORG_IDENTIFIER",
    TELEPHONE = "TELEPHONE"
}

export const enum PayeeType {
    BILLER = "BILLER",
    DOMESTIC = "DOMESTIC",
    INTERNATIONAL = "INTERNATIONAL"
}

export const enum PayeeUType {
    BILLER = "biller",
    DOMESTIC = "domestic",
    INTERNATIONAL = "international"
}

export const enum ProductConstraintType {
    MAX_BALANCE = "MAX_BALANCE",
    MAX_LIMIT = "MAX_LIMIT",
    MIN_BALANCE = "MIN_BALANCE",
    MIN_LIMIT = "MIN_LIMIT",
    OPENING_BALANCE = "OPENING_BALANCE"
}

export const enum DepositRateType {
    BONUS = "BONUS",
    BUNDLE_BONUS = "BUNDLE_BONUS",
    FIXED = "FIXED",
    FLOATING = "FLOATING",
    INTRODUCTORY = "INTRODUCTORY",
    MARKET_LINKED = "MARKET_LINKED",
    VARIABLE = "VARIABLE"
}

export const enum DiscountType {
    BALANCE = "BALANCE",
    DEPOSITS = "DEPOSITS",
    ELIGIBILITY_ONLY = "ELIGIBILITY_ONLY",
    FEE_CAP = "FEE_CAP",
    PAYMENTS = "PAYMENTS"
}

export const enum DiscountEligibilityType {
    BUSINESS = "BUSINESS",
    EMPLOYMENT_STATUS = "EMPLOYMENT_STATUS",
    INTRODUCTORY = "INTRODUCTORY",
    MAX_AGE = "MAX_AGE",
    MIN_AGE = "MIN_AGE",
    MIN_INCOME = "MIN_INCOME",
    MIN_TURNOVER = "MIN_TURNOVER",
    NATURAL_PERSON = "NATURAL_PERSON",
    OTHER = "OTHER",
    PENSION_RECIPIENT = "PENSION_RECIPIENT",
    RESIDENCY_STATUS = "RESIDENCY_STATUS",
    STAFF = "STAFF",
    STUDENT = "STUDENT"
}

export const enum ProductEligibilityType {
    BUSINESS = "BUSINESS",
    EMPLOYMENT_STATUS = "EMPLOYMENT_STATUS",
    MAX_AGE = "MAX_AGE",
    MIN_AGE = "MIN_AGE",
    MIN_INCOME = "MIN_INCOME",
    MIN_TURNOVER = "MIN_TURNOVER",
    NATURAL_PERSON = "NATURAL_PERSON",
    OTHER = "OTHER",
    PENSION_RECIPIENT = "PENSION_RECIPIENT",
    RESIDENCY_STATUS = "RESIDENCY_STATUS",
    STAFF = "STAFF",
    STUDENT = "STUDENT"
}

export const enum ProductFeatureType {
    ADDITIONAL_CARDS = "ADDITIONAL_CARDS",
    BALANCE_TRANSFERS = "BALANCE_TRANSFERS",
    BILL_PAYMENT = "BILL_PAYMENT",
    BONUS_REWARDS = "BONUS_REWARDS",
    CARD_ACCESS = "CARD_ACCESS",
    COMPLEMENTARY_PRODUCT_DISCOUNTS = "COMPLEMENTARY_PRODUCT_DISCOUNTS",
    DIGITAL_BANKING = "DIGITAL_BANKING",
    DIGITAL_WALLET = "DIGITAL_WALLET",
    DONATE_INTEREST = "DONATE_INTEREST",
    FREE_TXNS = "FREE_TXNS",
    FREE_TXNS_ALLOWANCE = "FREE_TXNS_ALLOWANCE",
    INSURANCE = "INSURANCE",
    INTEREST_FREE = "INTEREST_FREE",
    INTEREST_FREE_TRANSFERS = "INTEREST_FREE_TRANSFERS",
    LOYALTY_PROGRAM = "LOYALTY_PROGRAM",
    NOTIFICATIONS = "NOTIFICATIONS",
    NPP_ENABLED = "NPP_ENABLED",
    NPP_PAYID = "NPP_PAYID",
    OFFSET = "OFFSET",
    OTHER = "OTHER",
    OVERDRAFT = "OVERDRAFT",
    REDRAW = "REDRAW",
    UNLIMITED_TXNS = "UNLIMITED_TXNS"
}

export const enum ProductFeeType {
    DEPOSIT = "DEPOSIT",
    EVENT = "EVENT",
    EXIT = "EXIT",
    PAYMENT = "PAYMENT",
    PERIODIC = "PERIODIC",
    PURCHASE = "PURCHASE",
    TRANSACTION = "TRANSACTION",
    UPFRONT = "UPFRONT",
    VARIABLE = "VARIABLE",
    WITHDRAWAL = "WITHDRAWAL"
}

export const enum LendingRateType {
    BUNDLE_DISCOUNT_FIXED = "BUNDLE_DISCOUNT_FIXED",
    BUNDLE_DISCOUNT_VARIABLE = "BUNDLE_DISCOUNT_VARIABLE",
    CASH_ADVANCE = "CASH_ADVANCE",
    DISCOUNT = "DISCOUNT",
    FIXED = "FIXED",
    FLOATING = "FLOATING",
    INTRODUCTORY = "INTRODUCTORY",
    MARKET_LINKED = "MARKET_LINKED",
    PURCHASE = "PURCHASE",
    VARIABLE = "VARIABLE",
    IN_ADVANCE = "IN_ADVANCE",
    IN_ARREARS = "IN_ARREARS",
    INTEREST_ONLY = "INTEREST_ONLY",
    PRINCIPAL_AND_INTEREST = "PRINCIPAL_AND_INTEREST",
    INVESTMENT = "INVESTMENT",
    OWNER_OCCUPIED = "OWNER_OCCUPIED"
}

export const enum InterestPaymentDueType {
    IN_ADVANCE = "IN_ADVANCE",
    IN_ARREARS = "IN_ARREARS",
}

export const enum RepaymentType {
    INTEREST_ONLY = "INTEREST_ONLY",
    PRINCIPAL_AND_INTEREST = "PRINCIPAL_AND_INTEREST",
}

export const enum LoanPurposeType {
    INVESTMENT = "INVESTMENT",
    OWNER_OCCUPIED = "OWNER_OCCUPIED"
}

export const enum UnitOfMeasureType {
    DAY = "DAY",
    MONTH = "MONTH",
    DOLLAR = "DOLLAR",
    PERCENT = "PERCENT"
}

export const enum RateApplicationMethodType {
    PER_TIER = "PER_TIER",
    WHOLE_BALANCE = "WHOLE_BALANCE"
}

export const enum ScheduledPaymentStatusType {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    SKIP = "SKIP"
}

export const enum BankingScheduledPaymentRecurrenceEventBasedType {
    EVENT_BASED = "eventBased",
    INTERVAL_SCHEDULE = "intervalSchedule",
    LAST_WEEKDAY = "lastWeekDay",
    ONCE_OFF = "onceOff"
}

export const enum NonBusinessDayTreatmentType {
    AFTER = "AFTER",
    BEFORE = "BEFORE",
    ON = "ON",
    ONLY = "ONLY"
}

export const enum MaturityInstructionType {
    HOLD_ON_MATURITY = "HOLD_ON_MATURITY",
    PAID_OUT_AT_MATURITY = "PAID_OUT_AT_MATURITY",
    ROLLED_OVER = "ROLLED_OVER"
}

export const enum BankingTransactionType {
    DIRECT_DEBIT = "DIRECT_DEBIT",
    FEE = "FEE",
    INTEREST_CHARGED = "INTEREST_CHARGED",
    INTEREST_PAID = "INTEREST_PAID",
    OTHER = "OTHER",
    PAYMENT = "PAYMENT",
    TRANSFER_INCOMING = "TRANSFER_INCOMING",
    TRANSFER_OUTGOING = "TRANSFER_OUTGOING"
}

export const enum BankingTransactionStatus {
    PENDING = "PENDING",
    POSTED = "POSTED",
}

export const enum BankingTransactionExtensionUType {
    X2P101_PAYLOAD = "x2p101Payload",
}

export const enum BankingTransactionExtensionServiceType {
    X2P101 = "X2P1.01",
}
