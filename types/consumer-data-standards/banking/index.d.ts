import { BankingProductCategory, BankingScheduledPaymentRecurrenceEventBasedType, BankingTransactionExtensionServiceType, BankingTransactionExtensionUType, BankingTransactionStatus, BankingTransactionType, DepositRateType, DiscountEligibilityType, DiscountType, InterestPaymentDueType, LendingRateType, LoanPurposeType, MaturityInstructionType, NonBusinessDayTreatmentType, PayeeAccountUType, PayeeIdType, PayeeType, PayeeUType, ProductConstraintType, ProductEligibilityType, ProductFeatureType, ProductFeeType, RateApplicationMethodType, RepaymentType, ScheduledPaymentStatusType, UnitOfMeasureType } from "./enums";

declare namespace CdsBanking {

    interface BankingAccount {
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

    interface BankingAccountDetail {
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
        addresses?: CommonPhysicalAddress[] | null;
    }

    interface Feature extends BankingProductFeature {
        isActivated: boolean;
    }
    interface BankingAuthorisedEntity {
        description?: string;
        financialInstitution?: string;
        abn?: string;
        acn?: string;
        arbn?: string;
    }
    interface BankingBalance {
        accountId: string;
        currentBalance: string;
        availableBalance: string;
        creditLimit?: string;
        amortisedLimit?: string;
        currency?: string;
        purses?: BankingBalancePurse[] | null;
    }
    interface BankingBalancePurse {
        amount: string;
        currency?: string;
    }
    interface BankingBillerPayee {
        billerCode: string;
        crn?: string;
        billerName: string;
    }
    interface BankingCreditCardAccount {
        minPaymentAmount: string;
        paymentDueAmount: string;
        paymentCurrency?: string;
        paymentDueDate: string;
    }
    interface BankingDirectDebit {
        accountId: string;
        authorisedEntity: BankingAuthorisedEntity;
        lastDebitDateTime?: string;
        lastDebitAmount?: string;
    }
    interface BankingDomesticPayee {
        payeeAccountUType: PayeeAccountUType;
        account?: BankingDomesticPayeeAccount;
        card?: BankingDomesticPayeeCard;
        payId?: BankingDomesticPayeePayId;
    }
    interface BankingDomesticPayeeAccount {
        accountName?: string;
        bsb: string;
        accountNumber: string;
    }
    interface BankingDomesticPayeeCard {
        cardNumber: string;
    }
    interface BankingDomesticPayeePayId {
        name?: string;
        identifier: string;
        type: PayeeIdType;
    }
    interface BankingInternationalPayee {
        beneficiaryDetails: BeneficiaryDetails;
        bankDetails: BankDetails;
    }
    interface BeneficiaryDetails {
        name?: string;
        country: string;
        message?: string;
    }
    interface BankDetails {
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
    interface BankAddress {
        name: string;
        address: string;
    }
    interface BankingLoanAccount {
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
    interface BankingPayee {
        payeeId: string;
        nickname: string;
        description?: string;
        type: PayeeType;
        creationDate?: string;
    }
    interface BankingPayeeDetail extends BankingPayee {
        payeeUType: PayeeUType;
        domestic?: BankingDomesticPayee;
        biller?: BankingBillerPayee;
        international?: BankingInternationalPayee;
    }
    interface BankingProductBundle {
        name: string;
        description: string;
        additionalInfo?: string;
        additionalInfoUri?: string;
        productIds?: string[] | null;
    }
    interface BankingProductCondition {
        additionalInfo: string;
        additionalInfoUri: string;
    }

    interface BankingProductConstraint {
        constraintType: ProductConstraintType;
        additionalValue?: string;
        additionalInfo?: string;
        additionalInfoUri?: string;
    }
    interface BankingProductDepositRate {
        depositRateType: DepositRateType;
        rate: string;
        calculationFrequency?: string;
        applicationFrequency?: string;
        tiers?: BankingProductRateTierV3[] | null;
        additionalValue?: string;
        additionalInfo?: string;
        additionalInfoUri?: string;
    }
    interface BankingProductDetailV3 extends BankingProductV3 {
        bundles?: BankingProductBundle[] | null;
        features?: BankingProductFeature[] | null;
        constraints?: BankingProductConstraint[] | null;
        eligibility?: BankingProductEligibility[] | null;
        fees?: BankingProductFee[] | null;
        depositRates?: BankingProductDepositRate[] | null;
        lendingRates?: BankingProductLendingRateV2[] | null;
    }
    interface BankingProductDiscount {
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
    interface BankingProductDiscountEligibility {
        discountEligibilityType: DiscountEligibilityType;
        additionalValue?: string;
        additionalInfo?: string;
        additionalInfoUri?: string;
    }
    interface BankingProductEligibility {
        eligibilityType: ProductEligibilityType;
        additionalValue?: string;
        additionalInfo?: string;
        additionalInfoUri?: string;
    }
    interface BankingProductFeature {
        featureType: ProductFeatureType;
        additionalValue?: string;
        additionalInfo?: string;
        additionalInfoUri?: string;
    }
    interface BankingProductFee {
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
    interface BankingProductLendingRateV2 {
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
    interface BankingProductRateCondition {
        additionalInfo?: string;
        additionalInfoUri?: string;
    }
    interface BankingProductRateTierV3 {
        name: string;
        unitOfMeasure: UnitOfMeasureType;
        minimumValue: number;
        maximumValue?: number;
        rateApplicationMethod?: RateApplicationMethodType;
        applicabilityConditions?: BankingProductRateCondition;
        additionalInfo?: string;
        additionalInfoUri?: string;
    }
    interface BankingProductV3 {
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

    interface AdditionalInformation {
        overviewUri?: string;
        termsUri?: string;
        eligibilityUri?: string;
        feesAndPricingUri?: string;
        bundleUri?: string;
    }

    interface CardArt {
        title?: string;
        imageUri: string;
    }
    interface BankingScheduledPayment {
        scheduledPaymentId: string;
        nickname?: string;
        payerReference: string;
        payeeReference?: string;
        status: ScheduledPaymentStatusType;
        from: BankingScheduledPaymentFrom;
        paymentSet: BankingScheduledPaymentSet[] | null;
        recurrence: BankingScheduledPaymentRecurrence;
    }
    interface BankingScheduledPaymentFrom {
        accountId: string;
    }
    interface BankingScheduledPaymentRecurrence {
        nextPaymentDate?: string;
        recurrenceUType: BankingScheduledPaymentRecurrenceEventBasedType;
        onceOff?: BankingScheduledPaymentRecurrenceOnceOff;
        intervalSchedule?: BankingScheduledPaymentRecurrenceIntervalSchedule;
        lastWeekDay?: BankingScheduledPaymentRecurrenceLastWeekday;
        eventBased: BankingScheduledPaymentRecurrenceEventBased;
    }

    interface BankingScheduledPaymentRecurrenceLastWeekday {
        finalPaymentDate: string;
        paymentsRemaining: number;
        interval: string;
        lastWeekDay: string;
        nonBusinessDayTreatment: string;
    }

    interface BankingScheduledPaymentRecurrenceEventBased {
        description: string;
    }
    interface BankingScheduledPaymentRecurrenceIntervalSchedule {
        finalPaymentDate?: string;
        paymentsRemaining?: number;
        nonBusinessDayTreatment?: NonBusinessDayTreatmentType;
        intervals?: BankingScheduledPaymentInterval[] | null;
    }

    interface BankingScheduledPaymentInterval {
        interval: string;
        dayInInterval?: string;
    }
    interface BankingScheduledPaymentRecurrenceOnceOff {
        paymentDate: string;
    }
    interface BankingScheduledPaymentSet {
        to: BankingScheduledPaymentTo;
        isAmountCalculated?: boolean;
        amount?: string;
        currency?: string;
    }
    interface BankingScheduledPaymentTo {
        toUType: string;
        accountId?: string;
        payeeId?: string;
        nickname?: string;
        payeeReference?: string;
        domestic?: BankingDomesticPayee;
        biller?: BankingBillerPayee;
        international?: BankingInternationalPayee;
    }
    interface BankingTermDepositAccount {
        lodgementDate: string;
        maturityDate: string;
        maturityAmount?: string;
        maturityCurrency?: string;
        maturityInstructions: MaturityInstructionType;
    }
    interface BankingTransaction {
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
    interface BankingTransactionDetail extends BankingTransaction {
        extendedData: ExtendedData;
    }

    interface ExtendedData {
        payer?: string;
        payee?: string;
        extensionUType?: BankingTransactionExtensionUType;
        x2p101Payload?: X2p101Payload;
        service: BankingTransactionExtensionServiceType;
    }

    interface X2p101Payload {
        extendedDescription: string;
        endToEndId?: string;
        purposeCode?: string;
    }
}

export = CdsBanking;

