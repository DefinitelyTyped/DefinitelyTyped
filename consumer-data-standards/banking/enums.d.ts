
declare namespace CdsBankingEnums {
    const enum BankingProductCategory {
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

    const enum ProductCategory {
        REGULATED_TRUST_ACCOUNTS = "REGULATED_TRUST_ACCOUNTS",
        TERM_DEPOSITS = "TERM_DEPOSITS",
        TRANS_AND_SAVINGS_ACCOUNTS = "TRANS_AND_SAVINGS_ACCOUNTS",
        TRAVEL_CARDS = "TRAVEL_CARDS"
    }

    const enum LendingProduct {
        BUSINESS_LOANS = "BUSINESS_LOANS",
        CRED_AND_CHRG_CARDS = "CRED_AND_CHRG_CARDS",
        LEASES = "LEASES",
        MARGIN_LOANS = "MARGIN_LOANS",
        OVERDRAFTS = "OVERDRAFTS",
        PERS_LOANS = "PERS_LOANS",
        TRADE_FINANCE = "LEATRADE_FINANCESES",
        RESIDENTIAL_MORTGAGES = "RESIDENTIAL_MORTGAGES"
    }

    const enum PayeeAccountUType {
        ACCOUNT = "account",
        CARD = "card",
        PAY_ID = "payId"
    }

    const enum PayeeIdType {
        ABN = "ABN",
        EMAIL = "EMAIL",
        ORG_IDENTIFIER = "ORG_IDENTIFIER",
        TELEPHONE = "TELEPHONE"
    }

    const enum PayeeType {
        BILLER = "BILLER",
        DOMESTIC = "DOMESTIC",
        INTERNATIONAL = "INTERNATIONAL"
    }

    const enum PayeeUType {
        BILLER = "biller",
        DOMESTIC = "domestic",
        INTERNATIONAL = "international"
    }

    const enum ProductConstraintType {
        MAX_BALANCE = "MAX_BALANCE",
        MAX_LIMIT = "MAX_LIMIT",
        MIN_BALANCE = "MIN_BALANCE",
        MIN_LIMIT = "MIN_LIMIT",
        OPENING_BALANCE = "OPENING_BALANCE"
    }

    const enum DepositRateType {
        BONUS = "BONUS",
        BUNDLE_BONUS = "BUNDLE_BONUS",
        FIXED = "FIXED",
        FLOATING = "FLOATING",
        INTRODUCTORY = "INTRODUCTORY",
        MARKET_LINKED = "MARKET_LINKED",
        VARIABLE = "VARIABLE"
    }

    const enum DiscountType {
        BALANCE = "BALANCE",
        DEPOSITS = "DEPOSITS",
        ELIGIBILITY_ONLY = "ELIGIBILITY_ONLY",
        FEE_CAP = "FEE_CAP",
        PAYMENTS = "PAYMENTS"
    }

    const enum DiscountEligibilityType {
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

    const enum ProductEligibilityType {
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

    const enum ProductFeatureType {
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

    const enum ProductFeeType {
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

    const enum LendingRateType {
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

    const enum InterestPaymentDueType {
        IN_ADVANCE = "IN_ADVANCE",
        IN_ARREARS = "IN_ARREARS",
    }

    const enum RepaymentType {
        INTEREST_ONLY = "INTEREST_ONLY",
        PRINCIPAL_AND_INTEREST = "PRINCIPAL_AND_INTEREST",
    }

    const enum LoanPurposeType {
        INVESTMENT = "INVESTMENT",
        OWNER_OCCUPIED = "OWNER_OCCUPIED"
    }

    const enum UnitOfMeasureType {
        DAY = "DAY",
        MONTH = "MONTH",
        DOLLAR = "DOLLAR",
        PERCENT = "PERCENT"
    }

    const enum RateApplicationMethodType {
        PER_TIER = "PER_TIER",
        WHOLE_BALANCE = "WHOLE_BALANCE"
    }

    const enum ScheduledPaymentStatusType {
        ACTIVE = "ACTIVE",
        INACTIVE = "INACTIVE",
        SKIP = "SKIP"
    }

    const enum BankingScheduledPaymentRecurrenceEventBasedType {
        EVENT_BASED = "eventBased",
        INTERVAL_SCHEDULE = "intervalSchedule",
        LAST_WEEKDAY = "lastWeekDay",
        ONCE_OFF = "onceOff"
    }

    const enum NonBusinessDayTreatmentType {
        AFTER = "AFTER",
        BEFORE = "BEFORE",
        ON = "ON",
        ONLY = "ONLY"
    }

    const enum MaturityInstructionType {
        HOLD_ON_MATURITY = "HOLD_ON_MATURITY",
        PAID_OUT_AT_MATURITY = "PAID_OUT_AT_MATURITY",
        ROLLED_OVER = "ROLLED_OVER"
    }

    const enum BankingTransactionType {
        DIRECT_DEBIT = "DIRECT_DEBIT",
        FEE = "FEE",
        INTEREST_CHARGED = "INTEREST_CHARGED",
        INTEREST_PAID = "INTEREST_PAID",
        OTHER = "OTHER",
        PAYMENT = "PAYMENT",
        TRANSFER_INCOMING = "TRANSFER_INCOMING",
        TRANSFER_OUTGOING = "TRANSFER_OUTGOING"
    }

    const enum BankingTransactionStatus {
        PENDING = "PENDING",
        POSTED = "POSTED",
    }

    const enum BankingTransactionExtensionUType {
        X2P101_PAYLOAD = "x2p101Payload",
    }

    const enum BankingTransactionExtensionServiceType {
        X2P101 = "X2P1.01",
    }
}
export = CdsBankingEnums;
