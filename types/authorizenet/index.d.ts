// Type definitions for authorizenet 1.0
// Project: https://github.com/AuthorizeNet/sdk-node
// Definitions by: Shahaed Hasan <https://github.com/shahaed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export namespace APIContracts {
    class ANetApiRequest {
        constructor(obj?: any, ...args: any[]);
        setMerchantAuthentication(p_merchantAuthentication: any): void;
        merchantAuthentication: any;
        getMerchantAuthentication(): any;
        setClientId(p_clientId: any): void;
        clientId: any;
        getClientId(): any;
        setRefId(p_refId: any): void;
        refId: any;
        getRefId(): any;
    }
    class ANetApiResponse {
        constructor(obj?: any, ...args: any[]);
        getJSON(): {
            ErrorResponse: ANetApiResponse;
        };
        setRefId(p_refId: any): void;
        refId: any;
        getRefId(): any;
        setMessages(p_messages: any): void;
        messages: any;
        getMessages(): any;
        setSessionToken(p_sessionToken: any): void;
        sessionToken: any;
        getSessionToken(): any;
    }
    class ARBGetSubscriptionListSorting {
        constructor(obj?: any, ...args: any[]);
        setOrderBy(p_orderBy: any): void;
        orderBy: any;
        getOrderBy(): any;
        setOrderDescending(p_orderDescending: any): void;
        orderDescending: any;
        getOrderDescending(): any;
    }
    class ARBSubscriptionMaskedType {
        constructor(obj?: any, ...args: any[]);
        setName(p_name: any): void;
        name: any;
        getName(): any;
        setPaymentSchedule(p_paymentSchedule: any): void;
        paymentSchedule: any;
        getPaymentSchedule(): any;
        setAmount(p_amount: any): void;
        amount: any;
        getAmount(): any;
        setTrialAmount(p_trialAmount: any): void;
        trialAmount: any;
        getTrialAmount(): any;
        setStatus(p_status: any): void;
        status: any;
        getStatus(): any;
        setProfile(p_profile: any): void;
        profile: any;
        getProfile(): any;
        setOrder(p_order: any): void;
        order: any;
        getOrder(): any;
        setArbTransactions(p_arbTransactions: any): void;
        arbTransactions: any;
        getArbTransactions(): any;
    }
    class ARBSubscriptionType {
        constructor(obj?: any, ...args: any[]);
        setName(p_name: any): void;
        name: any;
        getName(): any;
        setPaymentSchedule(p_paymentSchedule: any): void;
        paymentSchedule: any;
        getPaymentSchedule(): any;
        setAmount(p_amount: any): void;
        amount: any;
        getAmount(): any;
        setTrialAmount(p_trialAmount: any): void;
        trialAmount: any;
        getTrialAmount(): any;
        setPayment(p_payment: any): void;
        payment: any;
        getPayment(): any;
        setOrder(p_order: any): void;
        order: any;
        getOrder(): any;
        setCustomer(p_customer: any): void;
        customer: any;
        getCustomer(): any;
        setBillTo(p_billTo: any): void;
        billTo: any;
        getBillTo(): any;
        setShipTo(p_shipTo: any): void;
        shipTo: any;
        getShipTo(): any;
        setProfile(p_profile: any): void;
        profile: any;
        getProfile(): any;
    }
    class ARBTransactionList {
        constructor(obj?: any, ...args: any[]);
        setArbTransaction(p_arbTransaction: any): void;
        arbTransaction: any;
        getArbTransaction(): any;
    }
    class ArbTransaction {
        constructor(obj?: any, ...args: any[]);
        setTransId(p_transId: any): void;
        transId: any;
        getTransId(): any;
        setResponse(p_response: any): void;
        response: any;
        getResponse(): any;
        setSubmitTimeUTC(p_submitTimeUTC: any): void;
        submitTimeUTC: any;
        getSubmitTimeUTC(): any;
        setPayNum(p_payNum: any): void;
        payNum: any;
        getPayNum(): any;
        setAttemptNum(p_attemptNum: any): void;
        attemptNum: any;
        getAttemptNum(): any;
    }
    class ArrayOfAUResponseType {
        constructor(obj?: any, ...args: any[]);
        setAuResponse(p_auResponse: any): void;
        auResponse: any;
        getAuResponse(): any;
    }
    class ArrayOfBatchDetailsType {
        constructor(obj?: any, ...args: any[]);
        setBatch(p_batch: any): void;
        batch: any;
        getBatch(): any;
    }
    class ArrayOfBatchStatisticType {
        constructor(obj?: any, ...args: any[]);
        setStatistic(p_statistic: any): void;
        statistic: any;
        getStatistic(): any;
    }
    class ArrayOfCardType {
        constructor(obj?: any, ...args: any[]);
        setCardType(p_cardType: any): void;
        cardType: any;
        getCardType(): any;
    }
    class ArrayOfContactDetail {
        constructor(obj?: any, ...args: any[]);
        setContactDetail(p_contactDetail: any): void;
        contactDetail: any;
        getContactDetail(): any;
    }
    class ArrayOfCurrencyCode {
        constructor(obj?: any, ...args: any[]);
        setCurrency(p_currency: any): void;
        currency: any;
        getCurrency(): any;
    }
    class ArrayOfCustomerPaymentProfileListItemType {
        constructor(obj?: any, ...args: any[]);
        setPaymentProfile(p_paymentProfile: any): void;
        paymentProfile: any;
        getPaymentProfile(): any;
    }
    class ArrayOfFDSFilter {
        constructor(obj?: any, ...args: any[]);
        setFDSFilter(p_FDSFilter: any): void;
        FDSFilter: any;
        getFDSFilter(): any;
    }
    class ArrayOfFraudFilterType {
        constructor(obj?: any, ...args: any[]);
        setFraudFilter(p_fraudFilter: any): void;
        fraudFilter: any;
        getFraudFilter(): any;
    }
    class ArrayOfLineItem {
        constructor(obj?: any, ...args: any[]);
        setLineItem(p_lineItem: any): void;
        lineItem: any;
        getLineItem(): any;
    }
    class ArrayOfLong {
        constructor(obj?: any, ...args: any[]);
        setLong(p_long: any): void;
        long: any;
        getLong(): any;
    }
    class ArrayOfMarketType {
        constructor(obj?: any, ...args: any[]);
        setMarketType(p_marketType: any): void;
        marketType: any;
        getMarketType(): any;
    }
    class ArrayOfNumericString {
        constructor(obj?: any, ...args: any[]);
        setNumericString(p_numericString: any): void;
        numericString: any;
        getNumericString(): any;
    }
    class ArrayOfPaymentMethod {
        constructor(obj?: any, ...args: any[]);
        setPaymentMethod(p_paymentMethod: any): void;
        paymentMethod: any;
        getPaymentMethod(): any;
    }
    class ArrayOfPermissionType {
        constructor(obj?: any, ...args: any[]);
        setPermission(p_permission: any): void;
        permission: any;
        getPermission(): any;
    }
    class ArrayOfProcessorType {
        constructor(obj?: any, ...args: any[]);
        setProcessor(p_processor: any): void;
        processor: any;
        getProcessor(): any;
    }
    class ArrayOfProductCode {
        constructor(obj?: any, ...args: any[]);
        setProductCode(p_productCode: any): void;
        productCode: any;
        getProductCode(): any;
    }
    class ArrayOfReturnedItem {
        constructor(obj?: any, ...args: any[]);
        setReturnedItem(p_returnedItem: any): void;
        returnedItem: any;
        getReturnedItem(): any;
    }
    class ArrayOfSetting {
        constructor(obj?: any, ...args: any[]);
        setSetting(p_setting: any): void;
        setting: any;
        getSetting(): any;
    }
    class ArrayOfString {
        constructor(obj?: any, ...args: any[]);
        setString(p_string: any): void;
        string: any;
        getString(): any;
    }
    class ArrayOfSubscription {
        constructor(obj?: any, ...args: any[]);
        setSubscriptionDetail(p_subscriptionDetail: any): void;
        subscriptionDetail: any;
        getSubscriptionDetail(): any;
    }
    class ArrayOfTransactionSummaryType {
        constructor(obj?: any, ...args: any[]);
        setTransaction(p_transaction: any): void;
        transaction: any;
        getTransaction(): any;
    }
    class AuDetailsType {
        constructor(obj?: any, ...args: any[]);
        setCustomerProfileID(p_customerProfileID: any): void;
        customerProfileID: any;
        getCustomerProfileID(): any;
        setCustomerPaymentProfileID(p_customerPaymentProfileID: any): void;
        customerPaymentProfileID: any;
        getCustomerPaymentProfileID(): any;
        setFirstName(p_firstName: any): void;
        firstName: any;
        getFirstName(): any;
        setLastName(p_lastName: any): void;
        lastName: any;
        getLastName(): any;
        setUpdateTimeUTC(p_updateTimeUTC: any): void;
        updateTimeUTC: any;
        getUpdateTimeUTC(): any;
        setAuReasonCode(p_auReasonCode: any): void;
        auReasonCode: any;
        getAuReasonCode(): any;
        setReasonDescription(p_reasonDescription: any): void;
        reasonDescription: any;
        getReasonDescription(): any;
    }
    class AuResponseType {
        constructor(obj?: any, ...args: any[]);
        setAuReasonCode(p_auReasonCode: any): void;
        auReasonCode: any;
        getAuReasonCode(): any;
        setProfileCount(p_profileCount: any): void;
        profileCount: any;
        getProfileCount(): any;
        setReasonDescription(p_reasonDescription: any): void;
        reasonDescription: any;
        getReasonDescription(): any;
    }
    class AuthorizationIndicatorType {
        constructor(obj?: any, ...args: any[]);
        setAuthorizationIndicator(p_authorizationIndicator: any): void;
        authorizationIndicator: any;
        getAuthorizationIndicator(): any;
    }
    class BankAccountMaskedType {
        constructor(obj?: any, ...args: any[]);
        setAccountType(p_accountType: any): void;
        accountType: any;
        getAccountType(): any;
        setRoutingNumber(p_routingNumber: any): void;
        routingNumber: any;
        getRoutingNumber(): any;
        setAccountNumber(p_accountNumber: any): void;
        accountNumber: any;
        getAccountNumber(): any;
        setNameOnAccount(p_nameOnAccount: any): void;
        nameOnAccount: any;
        getNameOnAccount(): any;
        setEcheckType(p_echeckType: any): void;
        echeckType: any;
        getEcheckType(): any;
        setBankName(p_bankName: any): void;
        bankName: any;
        getBankName(): any;
    }
    class BankAccountType {
        constructor(obj?: any, ...args: any[]);
        setAccountType(p_accountType: any): void;
        accountType: any;
        getAccountType(): any;
        setRoutingNumber(p_routingNumber: any): void;
        routingNumber: any;
        getRoutingNumber(): any;
        setAccountNumber(p_accountNumber: any): void;
        accountNumber: any;
        getAccountNumber(): any;
        setNameOnAccount(p_nameOnAccount: any): void;
        nameOnAccount: any;
        getNameOnAccount(): any;
        setEcheckType(p_echeckType: any): void;
        echeckType: any;
        getEcheckType(): any;
        setBankName(p_bankName: any): void;
        bankName: any;
        getBankName(): any;
        setCheckNumber(p_checkNumber: any): void;
        checkNumber: any;
        getCheckNumber(): any;
    }
    class BatchDetailsType {
        constructor(obj?: any, ...args: any[]);
        setBatchId(p_batchId: any): void;
        batchId: any;
        getBatchId(): any;
        setSettlementTimeUTC(p_settlementTimeUTC: any): void;
        settlementTimeUTC: any;
        getSettlementTimeUTC(): any;
        setSettlementTimeLocal(p_settlementTimeLocal: any): void;
        settlementTimeLocal: any;
        getSettlementTimeLocal(): any;
        setSettlementState(p_settlementState: any): void;
        settlementState: any;
        getSettlementState(): any;
        setPaymentMethod(p_paymentMethod: any): void;
        paymentMethod: any;
        getPaymentMethod(): any;
        setMarketType(p_marketType: any): void;
        marketType: any;
        getMarketType(): any;
        setProduct(p_product: any): void;
        product: any;
        getProduct(): any;
        setStatistics(p_statistics: any): void;
        statistics: any;
        getStatistics(): any;
    }
    class BatchStatisticType {
        constructor(obj?: any, ...args: any[]);
        setAccountType(p_accountType: any): void;
        accountType: any;
        getAccountType(): any;
        setChargeAmount(p_chargeAmount: any): void;
        chargeAmount: any;
        getChargeAmount(): any;
        setChargeCount(p_chargeCount: any): void;
        chargeCount: any;
        getChargeCount(): any;
        setRefundAmount(p_refundAmount: any): void;
        refundAmount: any;
        getRefundAmount(): any;
        setRefundCount(p_refundCount: any): void;
        refundCount: any;
        getRefundCount(): any;
        setVoidCount(p_voidCount: any): void;
        voidCount: any;
        getVoidCount(): any;
        setDeclineCount(p_declineCount: any): void;
        declineCount: any;
        getDeclineCount(): any;
        setErrorCount(p_errorCount: any): void;
        errorCount: any;
        getErrorCount(): any;
        setReturnedItemAmount(p_returnedItemAmount: any): void;
        returnedItemAmount: any;
        getReturnedItemAmount(): any;
        setReturnedItemCount(p_returnedItemCount: any): void;
        returnedItemCount: any;
        getReturnedItemCount(): any;
        setChargebackAmount(p_chargebackAmount: any): void;
        chargebackAmount: any;
        getChargebackAmount(): any;
        setChargebackCount(p_chargebackCount: any): void;
        chargebackCount: any;
        getChargebackCount(): any;
        setCorrectionNoticeCount(p_correctionNoticeCount: any): void;
        correctionNoticeCount: any;
        getCorrectionNoticeCount(): any;
        setChargeChargeBackAmount(p_chargeChargeBackAmount: any): void;
        chargeChargeBackAmount: any;
        getChargeChargeBackAmount(): any;
        setChargeChargeBackCount(p_chargeChargeBackCount: any): void;
        chargeChargeBackCount: any;
        getChargeChargeBackCount(): any;
        setRefundChargeBackAmount(p_refundChargeBackAmount: any): void;
        refundChargeBackAmount: any;
        getRefundChargeBackAmount(): any;
        setRefundChargeBackCount(p_refundChargeBackCount: any): void;
        refundChargeBackCount: any;
        getRefundChargeBackCount(): any;
        setChargeReturnedItemsAmount(p_chargeReturnedItemsAmount: any): void;
        chargeReturnedItemsAmount: any;
        getChargeReturnedItemsAmount(): any;
        setChargeReturnedItemsCount(p_chargeReturnedItemsCount: any): void;
        chargeReturnedItemsCount: any;
        getChargeReturnedItemsCount(): any;
        setRefundReturnedItemsAmount(p_refundReturnedItemsAmount: any): void;
        refundReturnedItemsAmount: any;
        getRefundReturnedItemsAmount(): any;
        setRefundReturnedItemsCount(p_refundReturnedItemsCount: any): void;
        refundReturnedItemsCount: any;
        getRefundReturnedItemsCount(): any;
    }
    class CardArt {
        constructor(obj?: any, ...args: any[]);
        setCardBrand(p_cardBrand: any): void;
        cardBrand: any;
        getCardBrand(): any;
        setCardImageHeight(p_cardImageHeight: any): void;
        cardImageHeight: any;
        getCardImageHeight(): any;
        setCardImageUrl(p_cardImageUrl: any): void;
        cardImageUrl: any;
        getCardImageUrl(): any;
        setCardImageWidth(p_cardImageWidth: any): void;
        cardImageWidth: any;
        getCardImageWidth(): any;
        setCardType(p_cardType: any): void;
        cardType: any;
        getCardType(): any;
    }
    class CcAuthenticationType {
        constructor(obj?: any, ...args: any[]);
        setAuthenticationIndicator(p_authenticationIndicator: any): void;
        authenticationIndicator: any;
        getAuthenticationIndicator(): any;
        setCardholderAuthenticationValue(p_cardholderAuthenticationValue: any): void;
        cardholderAuthenticationValue: any;
        getCardholderAuthenticationValue(): any;
    }
    class ContactDetailType {
        constructor(obj?: any, ...args: any[]);
        setEmail(p_email: any): void;
        email: any;
        getEmail(): any;
        setFirstName(p_firstName: any): void;
        firstName: any;
        getFirstName(): any;
        setLastName(p_lastName: any): void;
        lastName: any;
        getLastName(): any;
    }
    class CreateProfileResponse {
        constructor(obj?: any, ...args: any[]);
        setMessages(p_messages: any): void;
        messages: any;
        getMessages(): any;
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setCustomerPaymentProfileIdList(p_customerPaymentProfileIdList: any): void;
        customerPaymentProfileIdList: any;
        getCustomerPaymentProfileIdList(): any;
        setCustomerShippingAddressIdList(p_customerShippingAddressIdList: any): void;
        customerShippingAddressIdList: any;
        getCustomerShippingAddressIdList(): any;
    }
    class CreditCardMaskedType {
        constructor(obj?: any, ...args: any[]);
        setCardNumber(p_cardNumber: any): void;
        cardNumber: any;
        getCardNumber(): any;
        setExpirationDate(p_expirationDate: any): void;
        expirationDate: any;
        getExpirationDate(): any;
        setCardType(p_cardType: any): void;
        cardType: any;
        getCardType(): any;
        setCardArt(p_cardArt: any): void;
        cardArt: any;
        getCardArt(): any;
        setIssuerNumber(p_issuerNumber: any): void;
        issuerNumber: any;
        getIssuerNumber(): any;
        setIsPaymentToken(p_isPaymentToken: any): void;
        isPaymentToken: any;
        getIsPaymentToken(): any;
    }
    class CreditCardSimpleType {
        constructor(obj?: any, ...args: any[]);
        setCardNumber(p_cardNumber: any): void;
        cardNumber: any;
        getCardNumber(): any;
        setExpirationDate(p_expirationDate: any): void;
        expirationDate: any;
        getExpirationDate(): any;
    }
    class CreditCardTrackType {
        constructor(obj?: any, ...args: any[]);
        setTrack1(p_track1: any): void;
        track1: any;
        getTrack1(): any;
        setTrack2(p_track2: any): void;
        track2: any;
        getTrack2(): any;
    }
    class CustomerDataType {
        constructor(obj?: any, ...args: any[]);
        setType(p_type: any): void;
        type: any;
        getType(): any;
        setId(p_id: any): void;
        id: any;
        getId(): any;
        setEmail(p_email: any): void;
        email: any;
        getEmail(): any;
        setDriversLicense(p_driversLicense: any): void;
        driversLicense: any;
        getDriversLicense(): any;
        setTaxId(p_taxId: any): void;
        taxId: any;
        getTaxId(): any;
    }
    class CustomerPaymentProfileBaseType {
        constructor(obj?: any, ...args: any[]);
        setCustomerType(p_customerType: any): void;
        customerType: any;
        getCustomerType(): any;
        setBillTo(p_billTo: any): void;
        billTo: any;
        getBillTo(): any;
    }
    class CustomerPaymentProfileListItemType {
        constructor(obj?: any, ...args: any[]);
        setDefaultPaymentProfile(p_defaultPaymentProfile: any): void;
        defaultPaymentProfile: any;
        getDefaultPaymentProfile(): any;
        setCustomerPaymentProfileId(p_customerPaymentProfileId: any): void;
        customerPaymentProfileId: any;
        getCustomerPaymentProfileId(): any;
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setBillTo(p_billTo: any): void;
        billTo: any;
        getBillTo(): any;
        setPayment(p_payment: any): void;
        payment: any;
        getPayment(): any;
        setOriginalNetworkTransId(p_originalNetworkTransId: any): void;
        originalNetworkTransId: any;
        getOriginalNetworkTransId(): any;
        setOriginalAuthAmount(p_originalAuthAmount: any): void;
        originalAuthAmount: any;
        getOriginalAuthAmount(): any;
    }
    class CustomerPaymentProfileSorting {
        constructor(obj?: any, ...args: any[]);
        setOrderBy(p_orderBy: any): void;
        orderBy: any;
        getOrderBy(): any;
        setOrderDescending(p_orderDescending: any): void;
        orderDescending: any;
        getOrderDescending(): any;
    }
    class CustomerProfileBaseType {
        constructor(obj?: any, ...args: any[]);
        setMerchantCustomerId(p_merchantCustomerId: any): void;
        merchantCustomerId: any;
        getMerchantCustomerId(): any;
        setDescription(p_description: any): void;
        description: any;
        getDescription(): any;
        setEmail(p_email: any): void;
        email: any;
        getEmail(): any;
    }
    class CustomerProfileIdType {
        constructor(obj?: any, ...args: any[]);
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setCustomerPaymentProfileId(p_customerPaymentProfileId: any): void;
        customerPaymentProfileId: any;
        getCustomerPaymentProfileId(): any;
        setCustomerAddressId(p_customerAddressId: any): void;
        customerAddressId: any;
        getCustomerAddressId(): any;
    }
    class CustomerProfilePaymentType {
        constructor(obj?: any, ...args: any[]);
        setCreateProfile(p_createProfile: any): void;
        createProfile: any;
        getCreateProfile(): any;
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setPaymentProfile(p_paymentProfile: any): void;
        paymentProfile: any;
        getPaymentProfile(): any;
        setShippingProfileId(p_shippingProfileId: any): void;
        shippingProfileId: any;
        getShippingProfileId(): any;
    }
    class CustomerProfileSummaryType {
        constructor(obj?: any, ...args: any[]);
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setDescription(p_description: any): void;
        description: any;
        getDescription(): any;
        setMerchantCustomerId(p_merchantCustomerId: any): void;
        merchantCustomerId: any;
        getMerchantCustomerId(): any;
        setEmail(p_email: any): void;
        email: any;
        getEmail(): any;
        setCreatedDate(p_createdDate: any): void;
        createdDate: any;
        getCreatedDate(): any;
    }
    class CustomerType {
        constructor(obj?: any, ...args: any[]);
        setType(p_type: any): void;
        type: any;
        getType(): any;
        setId(p_id: any): void;
        id: any;
        getId(): any;
        setEmail(p_email: any): void;
        email: any;
        getEmail(): any;
        setPhoneNumber(p_phoneNumber: any): void;
        phoneNumber: any;
        getPhoneNumber(): any;
        setFaxNumber(p_faxNumber: any): void;
        faxNumber: any;
        getFaxNumber(): any;
        setDriversLicense(p_driversLicense: any): void;
        driversLicense: any;
        getDriversLicense(): any;
        setTaxId(p_taxId: any): void;
        taxId: any;
        getTaxId(): any;
    }
    class DriversLicenseMaskedType {
        constructor(obj?: any, ...args: any[]);
        setNumber(p_number: any): void;
        number: any;
        getNumber(): any;
        setState(p_state: any): void;
        state: any;
        getState(): any;
        setDateOfBirth(p_dateOfBirth: any): void;
        dateOfBirth: any;
        getDateOfBirth(): any;
    }
    class DriversLicenseType {
        constructor(obj?: any, ...args: any[]);
        setNumber(p_number: any): void;
        number: any;
        getNumber(): any;
        setState(p_state: any): void;
        state: any;
        getState(): any;
        setDateOfBirth(p_dateOfBirth: any): void;
        dateOfBirth: any;
        getDateOfBirth(): any;
    }
    class EmvTag {
        constructor(obj?: any, ...args: any[]);
        setName(p_name: any): void;
        name: any;
        getName(): any;
        setValue(p_value: any): void;
        value: any;
        getValue(): any;
        setFormatted(p_formatted: any): void;
        formatted: any;
        getFormatted(): any;
    }
    class EncryptedTrackDataType {
        constructor(obj?: any, ...args: any[]);
        setFormOfPayment(p_FormOfPayment: any): void;
        FormOfPayment: any;
        getFormOfPayment(): any;
    }
    class EnumCollection {
        constructor(obj?: any, ...args: any[]);
        setCustomerProfileSummaryType(p_customerProfileSummaryType: any): void;
        customerProfileSummaryType: any;
        getCustomerProfileSummaryType(): any;
        setPaymentSimpleType(p_paymentSimpleType: any): void;
        paymentSimpleType: any;
        getPaymentSimpleType(): any;
        setAccountTypeEnum(p_accountTypeEnum: any): void;
        accountTypeEnum: any;
        getAccountTypeEnum(): any;
        setCardTypeEnum(p_cardTypeEnum: any): void;
        cardTypeEnum: any;
        getCardTypeEnum(): any;
        setFDSFilterActionEnum(p_FDSFilterActionEnum: any): void;
        FDSFilterActionEnum: any;
        getFDSFilterActionEnum(): any;
        setPermissionsEnum(p_permissionsEnum: any): void;
        permissionsEnum: any;
        getPermissionsEnum(): any;
        setSettingNameEnum(p_settingNameEnum: any): void;
        settingNameEnum: any;
        getSettingNameEnum(): any;
        setSettlementStateEnum(p_settlementStateEnum: any): void;
        settlementStateEnum: any;
        getSettlementStateEnum(): any;
        setTransactionStatusEnum(p_transactionStatusEnum: any): void;
        transactionStatusEnum: any;
        getTransactionStatusEnum(): any;
        setTransactionTypeEnum(p_transactionTypeEnum: any): void;
        transactionTypeEnum: any;
        getTransactionTypeEnum(): any;
    }
    class ExtendedAmountType {
        constructor(obj?: any, ...args: any[]);
        setAmount(p_amount: any): void;
        amount: any;
        getAmount(): any;
        setName(p_name: any): void;
        name: any;
        getName(): any;
        setDescription(p_description: any): void;
        description: any;
        getDescription(): any;
    }
    class FDSFilterType {
        constructor(obj?: any, ...args: any[]);
        setName(p_name: any): void;
        name: any;
        getName(): any;
        setAction(p_action: any): void;
        action: any;
        getAction(): any;
    }
    class FingerPrintType {
        constructor(obj?: any, ...args: any[]);
        setHashValue(p_hashValue: any): void;
        hashValue: any;
        getHashValue(): any;
        setSequence(p_sequence: any): void;
        sequence: any;
        getSequence(): any;
        setTimestamp(p_timestamp: any): void;
        timestamp: any;
        getTimestamp(): any;
        setCurrencyCode(p_currencyCode: any): void;
        currencyCode: any;
        getCurrencyCode(): any;
        setAmount(p_amount: any): void;
        amount: any;
        getAmount(): any;
    }
    class FraudInformationType {
        constructor(obj?: any, ...args: any[]);
        setFraudFilterList(p_fraudFilterList: any): void;
        fraudFilterList: any;
        getFraudFilterList(): any;
        setFraudAction(p_fraudAction: any): void;
        fraudAction: any;
        getFraudAction(): any;
    }
    class HeldTransactionRequestType {
        constructor(obj?: any, ...args: any[]);
        setAction(p_action: any): void;
        action: any;
        getAction(): any;
        setRefTransId(p_refTransId: any): void;
        refTransId: any;
        getRefTransId(): any;
    }
    class ImpersonationAuthenticationType {
        constructor(obj?: any, ...args: any[]);
        setPartnerLoginId(p_partnerLoginId: any): void;
        partnerLoginId: any;
        getPartnerLoginId(): any;
        setPartnerTransactionKey(p_partnerTransactionKey: any): void;
        partnerTransactionKey: any;
        getPartnerTransactionKey(): any;
    }
    class IsAliveRequest {
        constructor(obj?: any, ...args: any[]);
        getJSON(): {
            isAliveRequest: IsAliveRequest;
        };
        setRefId(p_refId: any): void;
        refId: any;
        getRefId(): any;
    }
    class KeyBlock {
        constructor(obj?: any, ...args: any[]);
        setValue(p_Value: any): void;
        Value: any;
        getValue(): any;
    }
    class KeyManagementScheme {
        constructor(obj?: any, ...args: any[]);
        setDUKPT(p_DUKPT: KeyManagementScheme.DUKPT): void;
        DUKPT: KeyManagementScheme.DUKPT;
        getDUKPT(): KeyManagementScheme.DUKPT;
    }
    namespace KeyManagementScheme {
        class DUKPT {
            constructor(obj?: any, ...args: any[]);
            setOperation(p_operation: any): void;
            Operation: any;
            getOperation(): any;
            setMode(p_mode: any): void;
            Mode: any;
            getMode(): any;
            setDeviceInfo(p_deviceInfo: any): void;
            DeviceInfo: any;
            getDeviceInfo(): any;
            setEncryptedData(p_encryptedData: any): void;
            EncryptedData: any;
            getEncryptedData(): any;
        }
    }
    class KeyValue {
        constructor(obj?: any, ...args: any[]);
        setEncoding(p_Encoding: any): void;
        Encoding: any;
        getEncoding(): any;
        setEncryptionAlgorithm(p_EncryptionAlgorithm: any): void;
        EncryptionAlgorithm: any;
        getEncryptionAlgorithm(): any;
        setScheme(p_Scheme: any): void;
        Scheme: any;
        getScheme(): any;
    }
    class LineItemType {
        constructor(obj?: any, ...args: any[]);
        setItemId(p_itemId: any): void;
        itemId: any;
        getItemId(): any;
        setName(p_name: any): void;
        name: any;
        getName(): any;
        setDescription(p_description: any): void;
        description: any;
        getDescription(): any;
        setQuantity(p_quantity: any): void;
        quantity: any;
        getQuantity(): any;
        setUnitPrice(p_unitPrice: any): void;
        unitPrice: any;
        getUnitPrice(): any;
        setTaxable(p_taxable: any): void;
        taxable: any;
        getTaxable(): any;
        setUnitOfMeasure(p_unitOfMeasure: any): void;
        unitOfMeasure: any;
        getUnitOfMeasure(): any;
        setTypeOfSupply(p_typeOfSupply: any): void;
        typeOfSupply: any;
        getTypeOfSupply(): any;
        setTaxRate(p_taxRate: any): void;
        taxRate: any;
        getTaxRate(): any;
        setTaxAmount(p_taxAmount: any): void;
        taxAmount: any;
        getTaxAmount(): any;
        setNationalTax(p_nationalTax: any): void;
        nationalTax: any;
        getNationalTax(): any;
        setLocalTax(p_localTax: any): void;
        localTax: any;
        getLocalTax(): any;
        setVatRate(p_vatRate: any): void;
        vatRate: any;
        getVatRate(): any;
        setAlternateTaxId(p_alternateTaxId: any): void;
        alternateTaxId: any;
        getAlternateTaxId(): any;
        setAlternateTaxType(p_alternateTaxType: any): void;
        alternateTaxType: any;
        getAlternateTaxType(): any;
        setAlternateTaxTypeApplied(p_alternateTaxTypeApplied: any): void;
        alternateTaxTypeApplied: any;
        getAlternateTaxTypeApplied(): any;
        setAlternateTaxRate(p_alternateTaxRate: any): void;
        alternateTaxRate: any;
        getAlternateTaxRate(): any;
        setAlternateTaxAmount(p_alternateTaxAmount: any): void;
        alternateTaxAmount: any;
        getAlternateTaxAmount(): any;
        setTotalAmount(p_totalAmount: any): void;
        totalAmount: any;
        getTotalAmount(): any;
        setCommodityCode(p_commodityCode: any): void;
        commodityCode: any;
        getCommodityCode(): any;
        setProductCode(p_productCode: any): void;
        productCode: any;
        getProductCode(): any;
        setProductSKU(p_productSKU: any): void;
        productSKU: any;
        getProductSKU(): any;
        setDiscountRate(p_discountRate: any): void;
        discountRate: any;
        getDiscountRate(): any;
        setDiscountAmount(p_discountAmount: any): void;
        discountAmount: any;
        getDiscountAmount(): any;
        setTaxIncludedInTotal(p_taxIncludedInTotal: any): void;
        taxIncludedInTotal: any;
        getTaxIncludedInTotal(): any;
        setTaxIsAfterDiscount(p_taxIsAfterDiscount: any): void;
        taxIsAfterDiscount: any;
        getTaxIsAfterDiscount(): any;
    }
    class ListOfAUDetailsType {
        constructor(obj?: any, ...args: any[]);
        setAuUpdateOrAuDelete(p_auUpdateOrAuDelete: any): void;
        auUpdateOrAuDelete: any;
        getAuUpdateOrAuDelete(): any;
    }

    interface MerchantAuthenticationTypeConstructor {
        name?: string;
        transactionKey?: string;
        sessionToken?: string;
        password?: string;
        impersonationAuthentication?: ImpersonationAuthenticationType;
        fingerprint?: object;
        clientKey?: string;
        accessToken?: string;
        mobileDeviceId?: string;
    }

    class MerchantAuthenticationType {
        name: string | null;
        transactionKey: string | null;
        sessionToken: string | null;
        password: string | null;
        impersonationAuthentication: ImpersonationAuthenticationType | null;
        fingerprint: object | null;
        clientKey: string | null;
        accessToken: string | null;
        mobileDeviceId: string | null;

        constructor(obj?: MerchantAuthenticationTypeConstructor);
        setName(p_name: string): void;
        getName(): string;
        setTransactionKey(p_transactionKey: string): void;
        getTransactionKey(): string;
        setSessionToken(p_sessionToken: string): void;
        getSessionToken(): string;
        setPassword(p_password: string): void;
        getPassword(): string;
        setImpersonationAuthentication(p_impersonationAuthentication: any): void;
        getImpersonationAuthentication(): any;
        setFingerPrint(p_fingerPrint: any): void;
        getFingerPrint(): any;
        setClientKey(p_clientKey: string): void;
        getClientKey(): string;
        setAccessToken(p_accessToken: string): void;
        getAccessToken(): string;
        setMobileDeviceId(p_mobileDeviceId: string): void;
        getMobileDeviceId(): string;
    }
    class MerchantContactType {
        constructor(obj?: {
            merchantName?: string;
            merchantAddress?: string;
            merchantCity?: string;
            merchantState?: string;
            merchantZip?: string;
            merchantPhone?: string;
        });
        setMerchantName(p_merchantName: string): void;
        merchantName: string;
        getMerchantName(): string;
        setMerchantAddress(p_merchantAddress: string): void;
        merchantAddress: string;
        getMerchantAddress(): string;
        setMerchantCity(p_merchantCity: string): void;
        merchantCity: string;
        getMerchantCity(): string;
        setMerchantState(p_merchantState: string): void;
        merchantState: string;
        getMerchantState(): string;
        setMerchantZip(p_merchantZip: string): void;
        merchantZip: string;
        getMerchantZip(): string;
        setMerchantPhone(p_merchantPhone: string): void;
        merchantPhone: string;
        getMerchantPhone(): string;
    }
    class MessagesType {
        constructor(obj?: { resultCode: string; message: Array<{ text?: string; code?: string }> });
        setResultCode(p_resultCode: string): void;
        resultCode: string | null;
        getResultCode(): string | null;
        setMessage(p_message: MessagesType.Message[]): void;
        message: MessagesType.Message[];
        getMessage(): MessagesType.Message[];
    }
    namespace MessagesType {
        class Message {
            constructor(obj?: { code?: string; text?: string });
            code: string | null;
            text: string | null;
            setCode(p_code: string): void;
            getCode(): string | null;
            setText(p_text: string): void;
            getText(): string | null;
        }
    }
    class MobileDeviceType {
        constructor(obj?: any, ...args: any[]);
        setMobileDeviceId(p_mobileDeviceId: any): void;
        mobileDeviceId: any;
        getMobileDeviceId(): any;
        setDescription(p_description: any): void;
        description: any;
        getDescription(): any;
        setPhoneNumber(p_phoneNumber: any): void;
        phoneNumber: any;
        getPhoneNumber(): any;
        setDevicePlatform(p_devicePlatform: any): void;
        devicePlatform: any;
        getDevicePlatform(): any;
        setDeviceActivation(p_deviceActivation: any): void;
        deviceActivation: any;
        getDeviceActivation(): any;
    }
    class NameAndAddressType {
        constructor(obj?: any, ...args: any[]);
        setFirstName(p_firstName: any): void;
        firstName: any;
        getFirstName(): any;
        setLastName(p_lastName: any): void;
        lastName: any;
        getLastName(): any;
        setCompany(p_company: any): void;
        company: any;
        getCompany(): any;
        setAddress(p_address: any): void;
        address: any;
        getAddress(): any;
        setCity(p_city: any): void;
        city: any;
        getCity(): any;
        setState(p_state: any): void;
        state: any;
        getState(): any;
        setZip(p_zip: any): void;
        zip: any;
        getZip(): any;
        setCountry(p_country: any): void;
        country: any;
        getCountry(): any;
    }
    class OpaqueDataType {
        constructor(obj?: any, ...args: any[]);
        setDataDescriptor(p_dataDescriptor: any): void;
        dataDescriptor: any;
        getDataDescriptor(): any;
        setDataValue(p_dataValue: any): void;
        dataValue: any;
        getDataValue(): any;
        setDataKey(p_dataKey: any): void;
        dataKey: any;
        getDataKey(): any;
        setExpirationTimeStamp(p_expirationTimeStamp: any): void;
        expirationTimeStamp: any;
        getExpirationTimeStamp(): any;
    }
    class OrderType {
        constructor(obj?: any, ...args: any[]);
        setInvoiceNumber(p_invoiceNumber: any): void;
        invoiceNumber: any;
        getInvoiceNumber(): any;
        setDescription(p_description: any): void;
        description: any;
        getDescription(): any;
        setDiscountAmount(p_discountAmount: any): void;
        discountAmount: any;
        getDiscountAmount(): any;
        setTaxIsAfterDiscount(p_taxIsAfterDiscount: any): void;
        taxIsAfterDiscount: any;
        getTaxIsAfterDiscount(): any;
        setTotalTaxTypeCode(p_totalTaxTypeCode: any): void;
        totalTaxTypeCode: any;
        getTotalTaxTypeCode(): any;
        setPurchaserVATRegistrationNumber(p_purchaserVATRegistrationNumber: any): void;
        purchaserVATRegistrationNumber: any;
        getPurchaserVATRegistrationNumber(): any;
        setMerchantVATRegistrationNumber(p_merchantVATRegistrationNumber: any): void;
        merchantVATRegistrationNumber: any;
        getMerchantVATRegistrationNumber(): any;
        setVatInvoiceReferenceNumber(p_vatInvoiceReferenceNumber: any): void;
        vatInvoiceReferenceNumber: any;
        getVatInvoiceReferenceNumber(): any;
        setPurchaserCode(p_purchaserCode: any): void;
        purchaserCode: any;
        getPurchaserCode(): any;
        setSummaryCommodityCode(p_summaryCommodityCode: any): void;
        summaryCommodityCode: any;
        getSummaryCommodityCode(): any;
        setPurchaseOrderDateUTC(p_purchaseOrderDateUTC: any): void;
        purchaseOrderDateUTC: any;
        getPurchaseOrderDateUTC(): any;
        setSupplierOrderReference(p_supplierOrderReference: any): void;
        supplierOrderReference: any;
        getSupplierOrderReference(): any;
        setAuthorizedContactName(p_authorizedContactName: any): void;
        authorizedContactName: any;
        getAuthorizedContactName(): any;
        setCardAcceptorRefNumber(p_cardAcceptorRefNumber: any): void;
        cardAcceptorRefNumber: any;
        getCardAcceptorRefNumber(): any;
        setAmexDataTAA1(p_amexDataTAA1: any): void;
        amexDataTAA1: any;
        getAmexDataTAA1(): any;
        setAmexDataTAA2(p_amexDataTAA2: any): void;
        amexDataTAA2: any;
        getAmexDataTAA2(): any;
        setAmexDataTAA3(p_amexDataTAA3: any): void;
        amexDataTAA3: any;
        getAmexDataTAA3(): any;
        setAmexDataTAA4(p_amexDataTAA4: any): void;
        amexDataTAA4: any;
        getAmexDataTAA4(): any;
    }
    class OtherTaxType {
        constructor(obj?: any, ...args: any[]);
        setNationalTaxAmount(p_nationalTaxAmount: any): void;
        nationalTaxAmount: any;
        getNationalTaxAmount(): any;
        setLocalTaxAmount(p_localTaxAmount: any): void;
        localTaxAmount: any;
        getLocalTaxAmount(): any;
        setAlternateTaxAmount(p_alternateTaxAmount: any): void;
        alternateTaxAmount: any;
        getAlternateTaxAmount(): any;
        setAlternateTaxId(p_alternateTaxId: any): void;
        alternateTaxId: any;
        getAlternateTaxId(): any;
        setVatTaxRate(p_vatTaxRate: any): void;
        vatTaxRate: any;
        getVatTaxRate(): any;
        setVatTaxAmount(p_vatTaxAmount: any): void;
        vatTaxAmount: any;
        getVatTaxAmount(): any;
    }
    class Paging {
        constructor(obj?: any, ...args: any[]);
        setLimit(p_limit: any): void;
        limit: any;
        getLimit(): any;
        setOffset(p_offset: any): void;
        offset: any;
        getOffset(): any;
    }
    class PayPalType {
        constructor(obj?: any, ...args: any[]);
        setSuccessUrl(p_successUrl: any): void;
        successUrl: any;
        getSuccessUrl(): any;
        setCancelUrl(p_cancelUrl: any): void;
        cancelUrl: any;
        getCancelUrl(): any;
        setPaypalLc(p_paypalLc: any): void;
        paypalLc: any;
        getPaypalLc(): any;
        setPaypalHdrImg(p_paypalHdrImg: any): void;
        paypalHdrImg: any;
        getPaypalHdrImg(): any;
        setPaypalPayflowcolor(p_paypalPayflowcolor: any): void;
        paypalPayflowcolor: any;
        getPaypalPayflowcolor(): any;
        setPayerID(p_payerID: any): void;
        payerID: any;
        getPayerID(): any;
    }
    class PaymentDetails {
        constructor(obj?: any, ...args: any[]);
        setCurrency(p_currency: any): void;
        currency: any;
        getCurrency(): any;
        setPromoCode(p_promoCode: any): void;
        promoCode: any;
        getPromoCode(): any;
        setMisc(p_misc: any): void;
        misc: any;
        getMisc(): any;
        setGiftWrap(p_giftWrap: any): void;
        giftWrap: any;
        getGiftWrap(): any;
        setDiscount(p_discount: any): void;
        discount: any;
        getDiscount(): any;
        setTax(p_tax: any): void;
        tax: any;
        getTax(): any;
        setShippingHandling(p_shippingHandling: any): void;
        shippingHandling: any;
        getShippingHandling(): any;
        setSubTotal(p_subTotal: any): void;
        subTotal: any;
        getSubTotal(): any;
        setOrderID(p_orderID: any): void;
        orderID: any;
        getOrderID(): any;
        setAmount(p_amount: any): void;
        amount: any;
        getAmount(): any;
    }
    class PaymentEmvType {
        constructor(obj?: any, ...args: any[]);
        setEmvData(p_emvData: any): void;
        emvData: any;
        getEmvData(): any;
        setEmvDescriptor(p_emvDescriptor: any): void;
        emvDescriptor: any;
        getEmvDescriptor(): any;
        setEmvVersion(p_emvVersion: any): void;
        emvVersion: any;
        getEmvVersion(): any;
    }
    class PaymentMaskedType {
        constructor(obj?: any, ...args: any[]);
        setCreditCard(p_creditCard: any): void;
        creditCard: any;
        getCreditCard(): any;
        setBankAccount(p_bankAccount: any): void;
        bankAccount: any;
        getBankAccount(): any;
        setTokenInformation(p_tokenInformation: any): void;
        tokenInformation: any;
        getTokenInformation(): any;
    }
    class PaymentProfile {
        constructor(obj?: any, ...args: any[]);
        setPaymentProfileId(p_paymentProfileId: any): void;
        paymentProfileId: any;
        getPaymentProfileId(): any;
        setCardCode(p_cardCode: any): void;
        cardCode: any;
        getCardCode(): any;
    }
    class PaymentScheduleType {
        constructor(obj?: {
            startDate: string;
            totalOccurrences: string | number;
            trialOccurrences: string | number;
            interval: {
                length: string;
                unit: string;
            };
        });
        setInterval(p_interval: PaymentScheduleType.Interval): void;
        interval: PaymentScheduleType.Interval;
        getInterval(): PaymentScheduleType.Interval;
        setStartDate(p_startDate: string): void;
        startDate: string;
        getStartDate(): string;
        setTotalOccurrences(p_totalOccurrences: string | number): void;
        totalOccurrences: string | number;
        getTotalOccurrences(): string | number;
        setTrialOccurrences(p_trialOccurrences: string | number): void;
        trialOccurrences: string | number;
        getTrialOccurrences(): string | number;
    }
    namespace PaymentScheduleType {
        class Interval {
            constructor(obj?: { length: string | number; unit: string });
            setLength(p_length: string | number): void;
            length: string;
            getLength(): string;
            setUnit(p_unit: string): void;
            unit: string;
            getUnit(): string;
        }
    }
    class PaymentSimpleType {
        constructor(obj?: any, ...args: any[]);
        setCreditCard(p_creditCard: any): void;
        creditCard: any;
        getCreditCard(): any;
        setBankAccount(p_bankAccount: any): void;
        bankAccount: any;
        getBankAccount(): any;
    }
    class PaymentType {
        constructor(obj?: any, ...args: any[]);
        setCreditCard(p_creditCard: any): void;
        creditCard: any;
        getCreditCard(): any;
        setBankAccount(p_bankAccount: any): void;
        bankAccount: any;
        getBankAccount(): any;
        setTrackData(p_trackData: any): void;
        trackData: any;
        getTrackData(): any;
        setEncryptedTrackData(p_encryptedTrackData: any): void;
        encryptedTrackData: any;
        getEncryptedTrackData(): any;
        setPayPal(p_payPal: any): void;
        payPal: any;
        getPayPal(): any;
        setOpaqueData(p_opaqueData: any): void;
        opaqueData: any;
        getOpaqueData(): any;
        setEmv(p_emv: any): void;
        emv: any;
        getEmv(): any;
        setDataSource(p_dataSource: any): void;
        dataSource: any;
        getDataSource(): any;
    }
    class PermissionType {
        constructor(obj?: any, ...args: any[]);
        setPermissionName(p_permissionName: any): void;
        permissionName: any;
        getPermissionName(): any;
    }
    class ProcessingOptions {
        constructor(obj?: any, ...args: any[]);
        setIsFirstRecurringPayment(p_isFirstRecurringPayment: any): void;
        isFirstRecurringPayment: any;
        getIsFirstRecurringPayment(): any;
        setIsFirstSubsequentAuth(p_isFirstSubsequentAuth: any): void;
        isFirstSubsequentAuth: any;
        getIsFirstSubsequentAuth(): any;
        setIsSubsequentAuth(p_isSubsequentAuth: any): void;
        isSubsequentAuth: any;
        getIsSubsequentAuth(): any;
        setIsStoredCredentials(p_isStoredCredentials: any): void;
        isStoredCredentials: any;
        getIsStoredCredentials(): any;
    }
    class ProcessorType {
        constructor(obj?: any, ...args: any[]);
        setName(p_name: any): void;
        name: any;
        getName(): any;
        setId(p_id: any): void;
        id: any;
        getId(): any;
        setCardTypes(p_cardTypes: any): void;
        cardTypes: any;
        getCardTypes(): any;
    }
    class ProfileTransAmountType {
        constructor(obj?: any, ...args: any[]);
        setAmount(p_amount: any): void;
        amount: any;
        getAmount(): any;
        setTax(p_tax: any): void;
        tax: any;
        getTax(): any;
        setShipping(p_shipping: any): void;
        shipping: any;
        getShipping(): any;
        setDuty(p_duty: any): void;
        duty: any;
        getDuty(): any;
        setLineItems(p_lineItems: any): void;
        lineItems: any;
        getLineItems(): any;
    }
    class ProfileTransVoidType {
        constructor(obj?: any, ...args: any[]);
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setCustomerPaymentProfileId(p_customerPaymentProfileId: any): void;
        customerPaymentProfileId: any;
        getCustomerPaymentProfileId(): any;
        setCustomerShippingAddressId(p_customerShippingAddressId: any): void;
        customerShippingAddressId: any;
        getCustomerShippingAddressId(): any;
        setTransId(p_transId: any): void;
        transId: any;
        getTransId(): any;
    }
    class ProfileTransactionType {
        constructor(obj?: any, ...args: any[]);
        setProfileTransAuthCapture(p_profileTransAuthCapture: any): void;
        profileTransAuthCapture: any;
        getProfileTransAuthCapture(): any;
        setProfileTransAuthOnly(p_profileTransAuthOnly: any): void;
        profileTransAuthOnly: any;
        getProfileTransAuthOnly(): any;
        setProfileTransPriorAuthCapture(p_profileTransPriorAuthCapture: any): void;
        profileTransPriorAuthCapture: any;
        getProfileTransPriorAuthCapture(): any;
        setProfileTransCaptureOnly(p_profileTransCaptureOnly: any): void;
        profileTransCaptureOnly: any;
        getProfileTransCaptureOnly(): any;
        setProfileTransRefund(p_profileTransRefund: any): void;
        profileTransRefund: any;
        getProfileTransRefund(): any;
        setProfileTransVoid(p_profileTransVoid: any): void;
        profileTransVoid: any;
        getProfileTransVoid(): any;
    }
    class ReturnedItemType {
        constructor(obj?: any, ...args: any[]);
        setId(p_id: any): void;
        id: any;
        getId(): any;
        setDateUTC(p_dateUTC: any): void;
        dateUTC: any;
        getDateUTC(): any;
        setDateLocal(p_dateLocal: any): void;
        dateLocal: any;
        getDateLocal(): any;
        setCode(p_code: any): void;
        code: any;
        getCode(): any;
        setDescription(p_description: any): void;
        description: any;
        getDescription(): any;
    }
    class SecurePaymentContainerErrorType {
        constructor(obj?: any, ...args: any[]);
        setCode(p_code: any): void;
        code: any;
        getCode(): any;
        setDescription(p_description: any): void;
        description: any;
        getDescription(): any;
    }
    class SettingType {
        constructor(obj?: any, ...args: any[]);
        setSettingName(p_settingName: any): void;
        settingName: any;
        getSettingName(): any;
        setSettingValue(p_settingValue: any): void;
        settingValue: any;
        getSettingValue(): any;
    }
    class SolutionType {
        constructor(obj?: any, ...args: any[]);
        setId(p_id: any): void;
        id: any;
        getId(): any;
        setName(p_name: any): void;
        name: any;
        getName(): any;
        setVendorName(p_vendorName: any): void;
        vendorName: any;
        getVendorName(): any;
    }
    class SubMerchantType {
        constructor(obj?: any, ...args: any[]);
        setIdentifier(p_identifier: any): void;
        identifier: any;
        getIdentifier(): any;
        setDoingBusinessAs(p_doingBusinessAs: any): void;
        doingBusinessAs: any;
        getDoingBusinessAs(): any;
        setPaymentServiceProviderName(p_paymentServiceProviderName: any): void;
        paymentServiceProviderName: any;
        getPaymentServiceProviderName(): any;
        setPaymentServiceFacilitator(p_paymentServiceFacilitator: any): void;
        paymentServiceFacilitator: any;
        getPaymentServiceFacilitator(): any;
        setStreetAddress(p_streetAddress: any): void;
        streetAddress: any;
        getStreetAddress(): any;
        setPhone(p_phone: any): void;
        phone: any;
        getPhone(): any;
        setEmail(p_email: any): void;
        email: any;
        getEmail(): any;
        setPostalCode(p_postalCode: any): void;
        postalCode: any;
        getPostalCode(): any;
        setCity(p_city: any): void;
        city: any;
        getCity(): any;
        setRegionCode(p_regionCode: any): void;
        regionCode: any;
        getRegionCode(): any;
        setCountryCode(p_countryCode: any): void;
        countryCode: any;
        getCountryCode(): any;
    }
    class SubscriptionDetail {
        constructor(obj?: any, ...args: any[]);
        setId(p_id: any): void;
        id: any;
        getId(): any;
        setName(p_name: any): void;
        name: any;
        getName(): any;
        setStatus(p_status: any): void;
        status: any;
        getStatus(): any;
        setCreateTimeStampUTC(p_createTimeStampUTC: any): void;
        createTimeStampUTC: any;
        getCreateTimeStampUTC(): any;
        setFirstName(p_firstName: any): void;
        firstName: any;
        getFirstName(): any;
        setLastName(p_lastName: any): void;
        lastName: any;
        getLastName(): any;
        setTotalOccurrences(p_totalOccurrences: any): void;
        totalOccurrences: any;
        getTotalOccurrences(): any;
        setPastOccurrences(p_pastOccurrences: any): void;
        pastOccurrences: any;
        getPastOccurrences(): any;
        setPaymentMethod(p_paymentMethod: any): void;
        paymentMethod: any;
        getPaymentMethod(): any;
        setAccountNumber(p_accountNumber: any): void;
        accountNumber: any;
        getAccountNumber(): any;
        setInvoice(p_invoice: any): void;
        invoice: any;
        getInvoice(): any;
        setAmount(p_amount: any): void;
        amount: any;
        getAmount(): any;
        setCurrencyCode(p_currencyCode: any): void;
        currencyCode: any;
        getCurrencyCode(): any;
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setCustomerPaymentProfileId(p_customerPaymentProfileId: any): void;
        customerPaymentProfileId: any;
        getCustomerPaymentProfileId(): any;
        setCustomerShippingProfileId(p_customerShippingProfileId: any): void;
        customerShippingProfileId: any;
        getCustomerShippingProfileId(): any;
    }
    class SubscriptionIdList {
        constructor(obj?: any, ...args: any[]);
        setSubscriptionId(p_subscriptionId: any): void;
        subscriptionId: any;
        getSubscriptionId(): any;
    }
    class SubscriptionPaymentType {
        constructor(obj?: { id: string; payNum: string });
        setId(p_id: string): void;
        id: string;
        getId(): string;
        setPayNum(p_payNum: string): void;
        payNum: string;
        getPayNum(): string;
    }
    class SubsequentAuthInformation {
        constructor(obj?: any, ...args: any[]);
        setOriginalNetworkTransId(p_originalNetworkTransId: any): void;
        originalNetworkTransId: any;
        getOriginalNetworkTransId(): any;
        setOriginalAuthAmount(p_originalAuthAmount: any): void;
        originalAuthAmount: any;
        getOriginalAuthAmount(): any;
        setReason(p_reason: any): void;
        reason: any;
        getReason(): any;
    }
    class TokenMaskedType {
        constructor(obj?: any, ...args: any[]);
        setTokenSource(p_tokenSource: any): void;
        tokenSource: any;
        getTokenSource(): any;
        setTokenNumber(p_tokenNumber: any): void;
        tokenNumber: any;
        getTokenNumber(): any;
        setExpirationDate(p_expirationDate: any): void;
        expirationDate: any;
        getExpirationDate(): any;
        setTokenRequestorId(p_tokenRequestorId: any): void;
        tokenRequestorId: any;
        getTokenRequestorId(): any;
    }
    class TransRetailInfoType {
        constructor(obj?: any, ...args: any[]);
        setMarketType(p_marketType: any): void;
        marketType: any;
        getMarketType(): any;
        setDeviceType(p_deviceType: any): void;
        deviceType: any;
        getDeviceType(): any;
        setCustomerSignature(p_customerSignature: any): void;
        customerSignature: any;
        getCustomerSignature(): any;
        setTerminalNumber(p_terminalNumber: any): void;
        terminalNumber: any;
        getTerminalNumber(): any;
    }
    class TransactionDetailsType {
        constructor(obj?: any, ...args: any[]);
        setTransId(p_transId: string): void;
        transId: string;
        getTransId(): string;
        setRefTransId(p_refTransId: string): void;
        refTransId: string;
        getRefTransId(): string;
        setSplitTenderId(p_splitTenderId: string): void;
        splitTenderId: string;
        getSplitTenderId(): string;
        setSubmitTimeUTC(p_submitTimeUTC: string): void;
        submitTimeUTC: string;
        getSubmitTimeUTC(): string;
        setSubmitTimeLocal(p_submitTimeLocal: string): void;
        submitTimeLocal: string;
        getSubmitTimeLocal(): string;
        setTransactionType(p_transactionType: string): void;
        transactionType: string;
        getTransactionType(): string;
        setTransactionStatus(p_transactionStatus: string): void;
        transactionStatus: string;
        getTransactionStatus(): string;
        setResponseCode(p_responseCode: string): void;
        responseCode: string;
        getResponseCode(): string;
        setResponseReasonCode(p_responseReasonCode: string): void;
        responseReasonCode: string;
        getResponseReasonCode(): string;
        setSubscription(p_subscription: SubscriptionPaymentType): void;
        subscription: SubscriptionPaymentType;
        getSubscription(): SubscriptionPaymentType;
        setResponseReasonDescription(p_responseReasonDescription: string): void;
        responseReasonDescription: string;
        getResponseReasonDescription(): string;
        setAuthCode(p_authCode: string): void;
        authCode: string;
        getAuthCode(): string;
        setAVSResponse(p_AVSResponse: string): void;
        AVSResponse: string;
        getAVSResponse(): string;
        setCardCodeResponse(p_cardCodeResponse: string): void;
        cardCodeResponse: string;
        getCardCodeResponse(): string;
        setCAVVResponse(p_CAVVResponse: string): void;
        CAVVResponse: string;
        getCAVVResponse(): string;
        setFDSFilterAction(p_FDSFilterAction: string): void;
        FDSFilterAction: string;
        getFDSFilterAction(): string;
        setFDSFilters(p_FDSFilters: ArrayOfFDSFilter): void;
        FDSFilters: ArrayOfFDSFilter;
        getFDSFilters(): ArrayOfFDSFilter;
        setBatch(p_batch: BatchDetailsType): void;
        batch: BatchDetailsType;
        getBatch(): BatchDetailsType;
        setOrder(p_order: OrderExType): void;
        order: OrderExType;
        getOrder(): OrderExType;
        setRequestedAmount(p_requestedAmount: string): void;
        requestedAmount: string;
        getRequestedAmount(): string;
        setAuthAmount(p_authAmount: string): void;
        authAmount: string;
        getAuthAmount(): string;
        setSettleAmount(p_settleAmount: string): void;
        settleAmount: string;
        getSettleAmount(): string;
        setTax(p_tax: string): void;
        tax: string;
        getTax(): string;
        setShipping(p_shipping: string): void;
        shipping: string;
        getShipping(): string;
        setDuty(p_duty: string): void;
        duty: string;
        getDuty(): string;
        setLineItems(p_lineItems: string): void;
        lineItems: string;
        getLineItems(): string;
        setPrepaidBalanceRemaining(p_prepaidBalanceRemaining: string): void;
        prepaidBalanceRemaining: string;
        getPrepaidBalanceRemaining(): string;
        setTaxExempt(p_taxExempt: string): void;
        taxExempt: string;
        getTaxExempt(): string;
        setPayment(p_payment: PaymentMaskedType): void;
        payment: PaymentMaskedType;
        getPayment(): PaymentMaskedType;
        setCustomer(p_customer: CustomerDataType): void;
        customer: CustomerDataType;
        getCustomer(): CustomerDataType;
        setBillTo(p_billTo: CustomerAddressType): void;
        billTo: CustomerAddressType;
        getBillTo(): CustomerAddressType;
        setShipTo(p_shipTo: NameAndAddressType): void;
        shipTo: NameAndAddressType;
        getShipTo(): NameAndAddressType;
        setRecurringBilling(p_recurringBilling: string): void;
        recurringBilling: string;
        getRecurringBilling(): string;
        setCustomerIP(p_customerIP: string): void;
        customerIP: string;
        getCustomerIP(): string;
        setProduct(p_product: string): void;
        product: string;
        getProduct(): string;
        setEntryMode(p_entryMode: string): void;
        entryMode: string;
        getEntryMode(): string;
        setMarketType(p_marketType: string): void;
        marketType: string;
        getMarketType(): string;
        setMobileDeviceId(p_mobileDeviceId: string): void;
        mobileDeviceId: string;
        getMobileDeviceId(): string;
        setCustomerSignature(p_customerSignature: string): void;
        customerSignature: string;
        getCustomerSignature(): string;
        setReturnedItems(p_returnedItems: ArrayOfReturnedItem): void;
        returnedItems: ArrayOfReturnedItem;
        getReturnedItems(): ArrayOfReturnedItem;
        setSolution(p_solution: SolutionType): void;
        solution: SolutionType;
        getSolution(): SolutionType;
        setEmvDetails(p_emvDetails: TransactionDetailsType.EmvDetails): void;
        emvDetails: TransactionDetailsType.EmvDetails;
        getEmvDetails(): TransactionDetailsType.EmvDetails;
        setProfile(p_profile: CustomerProfileIdType): void;
        profile: CustomerProfileIdType;
        getProfile(): CustomerProfileIdType;
        setSurcharge(p_surcharge: ExtendedAmountType): void;
        surcharge: ExtendedAmountType;
        getSurcharge(): ExtendedAmountType;
        setEmployeeId(p_employeeId: string): void;
        employeeId: string;
        getEmployeeId(): string;
        setTip(p_tip: ExtendedAmountType): void;
        tip: ExtendedAmountType;
        getTip(): ExtendedAmountType;
        setOtherTax(p_otherTax: OtherTaxType): void;
        otherTax: OtherTaxType;
        getOtherTax(): OtherTaxType;
        setShipFrom(p_shipFrom: NameAndAddressType): void;
        shipFrom: NameAndAddressType;
        getShipFrom(): NameAndAddressType;
        setNetworkTransId(p_networkTransId: string): void;
        networkTransId: string;
        getNetworkTransId(): string;
        setOriginalNetworkTransId(p_originalNetworkTransId: string): void;
        originalNetworkTransId: string;
        getOriginalNetworkTransId(): string;
        setOriginalAuthAmount(p_originalAuthAmount: string): void;
        originalAuthAmount: string;
        getOriginalAuthAmount(): string;
        setAuthorizationIndicator(p_authorizationIndicator: string): void;
        authorizationIndicator: string;
        getAuthorizationIndicator(): string;
    }
    namespace TransactionDetailsType {
        class EmvDetails {
            constructor(obj?: any);
            setTag(p_tag: string): void;
            tag: string;
            getTag(): string;
        }
    }
    class TransactionListSorting {
        constructor(obj?: any, ...args: any[]);
        setOrderBy(p_orderBy: any): void;
        orderBy: any;
        getOrderBy(): any;
        setOrderDescending(p_orderDescending: any): void;
        orderDescending: any;
        getOrderDescending(): any;
    }
    class TransactionRequestType {
        constructor(obj?: any, ...args: any[]);
        setTransactionType(p_transactionType: any): void;
        transactionType: any;
        getTransactionType(): any;
        setAmount(p_amount: any): void;
        amount: any;
        getAmount(): any;
        setCurrencyCode(p_currencyCode: any): void;
        currencyCode: any;
        getCurrencyCode(): any;
        setPayment(p_payment: any): void;
        payment: any;
        getPayment(): any;
        setProfile(p_profile: any): void;
        profile: any;
        getProfile(): any;
        setSolution(p_solution: any): void;
        solution: any;
        getSolution(): any;
        setCallId(p_callId: any): void;
        callId: any;
        getCallId(): any;
        setTerminalNumber(p_terminalNumber: any): void;
        terminalNumber: any;
        getTerminalNumber(): any;
        setAuthCode(p_authCode: any): void;
        authCode: any;
        getAuthCode(): any;
        setRefTransId(p_refTransId: any): void;
        refTransId: any;
        getRefTransId(): any;
        setSplitTenderId(p_splitTenderId: any): void;
        splitTenderId: any;
        getSplitTenderId(): any;
        setOrder(p_order: any): void;
        order: any;
        getOrder(): any;
        setLineItems(p_lineItems: any): void;
        lineItems: any;
        getLineItems(): any;
        setTax(p_tax: any): void;
        tax: any;
        getTax(): any;
        setDuty(p_duty: any): void;
        duty: any;
        getDuty(): any;
        setShipping(p_shipping: any): void;
        shipping: any;
        getShipping(): any;
        setTaxExempt(p_taxExempt: any): void;
        taxExempt: any;
        getTaxExempt(): any;
        setPoNumber(p_poNumber: any): void;
        poNumber: any;
        getPoNumber(): any;
        setCustomer(p_customer: any): void;
        customer: any;
        getCustomer(): any;
        setBillTo(p_billTo: any): void;
        billTo: any;
        getBillTo(): any;
        setShipTo(p_shipTo: any): void;
        shipTo: any;
        getShipTo(): any;
        setCustomerIP(p_customerIP: any): void;
        customerIP: any;
        getCustomerIP(): any;
        setCardholderAuthentication(p_cardholderAuthentication: any): void;
        cardholderAuthentication: any;
        getCardholderAuthentication(): any;
        setRetail(p_retail: any): void;
        retail: any;
        getRetail(): any;
        setEmployeeId(p_employeeId: any): void;
        employeeId: any;
        getEmployeeId(): any;
        setTransactionSettings(p_transactionSettings: any): void;
        transactionSettings: any;
        getTransactionSettings(): any;
        setUserFields(p_userFields: any): void;
        userFields: any;
        getUserFields(): any;
        setSurcharge(p_surcharge: any): void;
        surcharge: any;
        getSurcharge(): any;
        setMerchantDescriptor(p_merchantDescriptor: any): void;
        merchantDescriptor: any;
        getMerchantDescriptor(): any;
        setSubMerchant(p_subMerchant: any): void;
        subMerchant: any;
        getSubMerchant(): any;
        setTip(p_tip: any): void;
        tip: any;
        getTip(): any;
        setProcessingOptions(p_processingOptions: any): void;
        processingOptions: any;
        getProcessingOptions(): any;
        setSubsequentAuthInformation(p_subsequentAuthInformation: any): void;
        subsequentAuthInformation: any;
        getSubsequentAuthInformation(): any;
        setOtherTax(p_otherTax: any): void;
        otherTax: any;
        getOtherTax(): any;
        setShipFrom(p_shipFrom: any): void;
        shipFrom: any;
        getShipFrom(): any;
        setAuthorizationIndicatorType(p_authorizationIndicatorType: any): void;
        authorizationIndicatorType: any;
        getAuthorizationIndicatorType(): any;
    }
    namespace TransactionRequestType {
        class UserFields {
            constructor(obj?: any);
            setUserField(p_userField: string): void;
            userField: string;
            getUserField(): string;
        }
    }
    class TransactionResponse {
        constructor(obj?: any, ...args: any[]);
        setResponseCode(p_responseCode: any): void;
        responseCode: any;
        getResponseCode(): any;
        setRawResponseCode(p_rawResponseCode: any): void;
        rawResponseCode: any;
        getRawResponseCode(): any;
        setAuthCode(p_authCode: any): void;
        authCode: any;
        getAuthCode(): any;
        setAvsResultCode(p_avsResultCode: any): void;
        avsResultCode: any;
        getAvsResultCode(): any;
        setCvvResultCode(p_cvvResultCode: any): void;
        cvvResultCode: any;
        getCvvResultCode(): any;
        setCavvResultCode(p_cavvResultCode: any): void;
        cavvResultCode: any;
        getCavvResultCode(): any;
        setTransId(p_transId: any): void;
        transId: any;
        getTransId(): any;
        setRefTransID(p_refTransID: any): void;
        refTransID: any;
        getRefTransID(): any;
        setTransHash(p_transHash: any): void;
        transHash: any;
        getTransHash(): any;
        setTestRequest(p_testRequest: any): void;
        testRequest: any;
        getTestRequest(): any;
        setAccountNumber(p_accountNumber: any): void;
        accountNumber: any;
        getAccountNumber(): any;
        setEntryMode(p_entryMode: any): void;
        entryMode: any;
        getEntryMode(): any;
        setAccountType(p_accountType: any): void;
        accountType: any;
        getAccountType(): any;
        setSplitTenderId(p_splitTenderId: any): void;
        splitTenderId: any;
        getSplitTenderId(): any;
        setPrePaidCard(p_prePaidCard: any): void;
        prePaidCard: any;
        getPrePaidCard(): any;
        setMessages(p_messages: any): void;
        messages: any;
        getMessages(): any;
        setErrors(p_errors: any): void;
        errors: any;
        getErrors(): any;
        setSplitTenderPayments(p_splitTenderPayments: any): void;
        splitTenderPayments: any;
        getSplitTenderPayments(): any;
        setUserFields(p_userFields: any): void;
        userFields: any;
        getUserFields(): any;
        setShipTo(p_shipTo: any): void;
        shipTo: any;
        getShipTo(): any;
        setSecureAcceptance(p_secureAcceptance: any): void;
        secureAcceptance: any;
        getSecureAcceptance(): any;
        setEmvResponse(p_emvResponse: any): void;
        emvResponse: any;
        getEmvResponse(): any;
        setTransHashSha2(p_transHashSha2: any): void;
        transHashSha2: any;
        getTransHashSha2(): any;
        setProfile(p_profile: any): void;
        profile: any;
        getProfile(): any;
        setNetworkTransId(p_networkTransId: any): void;
        networkTransId: any;
        getNetworkTransId(): any;
    }
    namespace TransactionResponse {
        class EmvResponse {
            constructor(obj?: any);
            setTlvData(p_tlvData: any): void;
            tlvData: any;
            getTlvData(): any;
            setTags(p_tags: any): void;
            tags: any;
            getTags(): any;
        }
        class Errors {
            constructor(obj?: any);
            setError(p_error: any): void;
            error: any;
            getError(): any;
        }
        class Messages {
            constructor(obj?: any);
            setMessage(p_message: any): void;
            message: any;
            getMessage(): any;
        }

        class PrePaidCard {
            constructor(obj?: any);
            setRequestedAmount(p_requestedAmount: any): void;
            requestedAmount: any;
            getRequestedAmount(): any;
            setApprovedAmount(p_approvedAmount: any): void;
            approvedAmount: any;
            getApprovedAmount(): any;
            setBalanceOnCard(p_balanceOnCard: any): void;
            balanceOnCard: any;
            getBalanceOnCard(): any;
        }

        class SecureAcceptance {
            constructor(obj?: any);
            setSecureAcceptanceUrl(p_secureAcceptanceUrl: any): void;
            secureAcceptanceUrl: any;
            getSecureAcceptanceUrl(): any;
            setPayerID(p_payerID: any): void;
            payerID: any;
            getPayerID(): any;
            setPayerEmail(p_payerEmail: any): void;
            payerEmail: any;
            getPayerEmail(): any;
        }

        class SplitTenderPayments {
            constructor(obj?: any);
            setSplitTenderPayment(p_splitTenderPayment: any): void;
            splitTenderPayment: any;
            getSplitTenderPayment(): any;
        }

        class UserFields {
            constructor(obj?: any, ...args: any[]);
            setUserField(p_userField: any): void;
            userField: any;
            getUserField(): any;
        }
    }
    class TransactionSummaryType {
        constructor(obj?: any, ...args: any[]);
        setTransId(p_transId: any): void;
        transId: any;
        getTransId(): any;
        setSubmitTimeUTC(p_submitTimeUTC: any): void;
        submitTimeUTC: any;
        getSubmitTimeUTC(): any;
        setSubmitTimeLocal(p_submitTimeLocal: any): void;
        submitTimeLocal: any;
        getSubmitTimeLocal(): any;
        setTransactionStatus(p_transactionStatus: any): void;
        transactionStatus: any;
        getTransactionStatus(): any;
        setInvoiceNumber(p_invoiceNumber: any): void;
        invoiceNumber: any;
        getInvoiceNumber(): any;
        setFirstName(p_firstName: any): void;
        firstName: any;
        getFirstName(): any;
        setLastName(p_lastName: any): void;
        lastName: any;
        getLastName(): any;
        setAccountType(p_accountType: any): void;
        accountType: any;
        getAccountType(): any;
        setAccountNumber(p_accountNumber: any): void;
        accountNumber: any;
        getAccountNumber(): any;
        setSettleAmount(p_settleAmount: any): void;
        settleAmount: any;
        getSettleAmount(): any;
        setMarketType(p_marketType: any): void;
        marketType: any;
        getMarketType(): any;
        setProduct(p_product: any): void;
        product: any;
        getProduct(): any;
        setMobileDeviceId(p_mobileDeviceId: any): void;
        mobileDeviceId: any;
        getMobileDeviceId(): any;
        setSubscription(p_subscription: any): void;
        subscription: any;
        getSubscription(): any;
        setHasReturnedItems(p_hasReturnedItems: any): void;
        hasReturnedItems: any;
        getHasReturnedItems(): any;
        setFraudInformation(p_fraudInformation: any): void;
        fraudInformation: any;
        getFraudInformation(): any;
        setProfile(p_profile: any): void;
        profile: any;
        getProfile(): any;
    }
    class UserField {
        constructor(obj?: any, ...args: any[]);
        setName(p_name: any): void;
        name: any;
        getName(): any;
        setValue(p_value: any): void;
        value: any;
        getValue(): any;
    }
    class WebCheckOutDataType {
        constructor(obj?: any, ...args: any[]);
        setType(p_type: any): void;
        type: any;
        getType(): any;
        setId(p_id: any): void;
        id: any;
        getId(): any;
        setToken(p_token: any): void;
        token: any;
        getToken(): any;
        setBankToken(p_bankToken: any): void;
        bankToken: any;
        getBankToken(): any;
    }
    class WebCheckOutDataTypeToken {
        constructor(obj?: any, ...args: any[]);
        setCardNumber(p_cardNumber: any): void;
        cardNumber: any;
        getCardNumber(): any;
        setExpirationDate(p_expirationDate: any): void;
        expirationDate: any;
        getExpirationDate(): any;
        setCardCode(p_cardCode: any): void;
        cardCode: any;
        getCardCode(): any;
        setZip(p_zip: any): void;
        zip: any;
        getZip(): any;
        setFullName(p_fullName: any): void;
        fullName: any;
        getFullName(): any;
    }
    class ARBCancelSubscriptionRequest extends ANetApiRequest {
        getJSON(): {
            ARBCancelSubscriptionRequest: ARBCancelSubscriptionRequest;
        };
        setSubscriptionId(p_subscriptionId: any): void;
        subscriptionId: any;
        getSubscriptionId(): any;
    }
    class ARBCancelSubscriptionResponse extends ANetApiResponse {}
    class ARBCreateSubscriptionRequest extends ANetApiRequest {
        getJSON(): {
            ARBCreateSubscriptionRequest: ARBCreateSubscriptionRequest;
        };
        setSubscription(p_subscription: any): void;
        subscription: any;
        getSubscription(): any;
    }
    class ARBCreateSubscriptionResponse extends ANetApiResponse {
        setSubscriptionId(p_subscriptionId: any): void;
        subscriptionId: any;
        getSubscriptionId(): any;
        setProfile(p_profile: any): void;
        profile: any;
        getProfile(): any;
    }
    class ARBGetSubscriptionListRequest extends ANetApiRequest {
        getJSON(): {
            ARBGetSubscriptionListRequest: ARBGetSubscriptionListRequest;
        };
        setSearchType(p_searchType: any): void;
        searchType: any;
        getSearchType(): any;
        setSorting(p_sorting: any): void;
        sorting: any;
        getSorting(): any;
        setPaging(p_paging: any): void;
        paging: any;
        getPaging(): any;
    }
    class ARBGetSubscriptionListResponse extends ANetApiResponse {
        setTotalNumInResultSet(p_totalNumInResultSet: any): void;
        totalNumInResultSet: any;
        getTotalNumInResultSet(): any;
        setSubscriptionDetails(p_subscriptionDetails: any): void;
        subscriptionDetails: any;
        getSubscriptionDetails(): any;
    }
    class ARBGetSubscriptionRequest extends ANetApiRequest {
        getJSON(): {
            ARBGetSubscriptionRequest: ARBGetSubscriptionRequest;
        };
        setSubscriptionId(p_subscriptionId: any): void;
        subscriptionId: any;
        getSubscriptionId(): any;
        setIncludeTransactions(p_includeTransactions: any): void;
        includeTransactions: any;
        getIncludeTransactions(): any;
    }
    class ARBGetSubscriptionResponse extends ANetApiResponse {
        setSubscription(p_subscription: any): void;
        subscription: any;
        getSubscription(): any;
    }
    class ARBGetSubscriptionStatusRequest extends ANetApiRequest {
        getJSON(): {
            ARBGetSubscriptionStatusRequest: ARBGetSubscriptionStatusRequest;
        };
        setSubscriptionId(p_subscriptionId: any): void;
        subscriptionId: any;
        getSubscriptionId(): any;
    }
    class ARBGetSubscriptionStatusResponse extends ANetApiResponse {
        setStatus(p_status: any): void;
        status: any;
        getStatus(): any;
    }
    class ARBUpdateSubscriptionRequest extends ANetApiRequest {
        getJSON(): {
            ARBUpdateSubscriptionRequest: ARBUpdateSubscriptionRequest;
        };
        setSubscriptionId(p_subscriptionId: any): void;
        subscriptionId: any;
        getSubscriptionId(): any;
        setSubscription(p_subscription: any): void;
        subscription: any;
        getSubscription(): any;
    }
    class ARBUpdateSubscriptionResponse extends ANetApiResponse {
        setProfile(p_profile: any): void;
        profile: any;
        getProfile(): any;
    }
    class AuDeleteType extends AuDetailsType {
        setCreditCard(p_creditCard: any): void;
        creditCard: any;
        getCreditCard(): any;
    }
    class AuUpdateType extends AuDetailsType {
        setNewCreditCard(p_newCreditCard: any): void;
        newCreditCard: any;
        getNewCreditCard(): any;
        setOldCreditCard(p_oldCreditCard: any): void;
        oldCreditCard: any;
        getOldCreditCard(): any;
    }
    class AuthenticateTestRequest extends ANetApiRequest {
        getJSON(): {
            authenticateTestRequest: AuthenticateTestRequest;
        };
    }
    class AuthenticateTestResponse extends ANetApiResponse {}
    class CreateCustomerPaymentProfileRequest extends ANetApiRequest {
        getJSON(): {
            createCustomerPaymentProfileRequest: CreateCustomerPaymentProfileRequest;
        };
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setPaymentProfile(p_paymentProfile: any): void;
        paymentProfile: any;
        getPaymentProfile(): any;
        setValidationMode(p_validationMode: any): void;
        validationMode: any;
        getValidationMode(): any;
    }
    class CreateCustomerPaymentProfileResponse extends ANetApiResponse {
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setCustomerPaymentProfileId(p_customerPaymentProfileId: any): void;
        customerPaymentProfileId: any;
        getCustomerPaymentProfileId(): any;
        setValidationDirectResponse(p_validationDirectResponse: any): void;
        validationDirectResponse: any;
        getValidationDirectResponse(): any;
    }
    class CreateCustomerProfileFromTransactionRequest extends ANetApiRequest {
        getJSON(): {
            createCustomerProfileFromTransactionRequest: CreateCustomerProfileFromTransactionRequest;
        };
        setTransId(p_transId: any): void;
        transId: any;
        getTransId(): any;
        setCustomer(p_customer: any): void;
        customer: any;
        getCustomer(): any;
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setDefaultPaymentProfile(p_defaultPaymentProfile: any): void;
        defaultPaymentProfile: any;
        getDefaultPaymentProfile(): any;
        setDefaultShippingAddress(p_defaultShippingAddress: any): void;
        defaultShippingAddress: any;
        getDefaultShippingAddress(): any;
        setProfileType(p_profileType: any): void;
        profileType: any;
        getProfileType(): any;
    }
    class CreateCustomerProfileRequest extends ANetApiRequest {
        getJSON(): {
            createCustomerProfileRequest: CreateCustomerProfileRequest;
        };
        setProfile(p_profile: any): void;
        profile: any;
        getProfile(): any;
        setValidationMode(p_validationMode: any): void;
        validationMode: any;
        getValidationMode(): any;
    }
    class CreateCustomerProfileResponse extends ANetApiResponse {
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setCustomerPaymentProfileIdList(p_customerPaymentProfileIdList: any): void;
        customerPaymentProfileIdList: any;
        getCustomerPaymentProfileIdList(): any;
        setCustomerShippingAddressIdList(p_customerShippingAddressIdList: any): void;
        customerShippingAddressIdList: any;
        getCustomerShippingAddressIdList(): any;
        setValidationDirectResponseList(p_validationDirectResponseList: any): void;
        validationDirectResponseList: any;
        getValidationDirectResponseList(): any;
    }
    class CreateCustomerProfileTransactionRequest extends ANetApiRequest {
        getJSON(): {
            createCustomerProfileTransactionRequest: CreateCustomerProfileTransactionRequest;
        };
        setTransaction(p_transaction: any): void;
        transaction: any;
        getTransaction(): any;
        setExtraOptions(p_extraOptions: any): void;
        extraOptions: any;
        getExtraOptions(): any;
    }
    class CreateCustomerProfileTransactionResponse extends ANetApiResponse {
        setTransactionResponse(p_transactionResponse: any): void;
        transactionResponse: any;
        getTransactionResponse(): any;
        setDirectResponse(p_directResponse: any): void;
        directResponse: any;
        getDirectResponse(): any;
    }
    class CreateCustomerShippingAddressRequest extends ANetApiRequest {
        getJSON(): {
            createCustomerShippingAddressRequest: CreateCustomerShippingAddressRequest;
        };
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setAddress(p_address: any): void;
        address: any;
        getAddress(): any;
        setDefaultShippingAddress(p_defaultShippingAddress: any): void;
        defaultShippingAddress: any;
        getDefaultShippingAddress(): any;
    }
    class CreateCustomerShippingAddressResponse extends ANetApiResponse {
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setCustomerAddressId(p_customerAddressId: any): void;
        customerAddressId: any;
        getCustomerAddressId(): any;
    }
    class CreateTransactionRequest extends ANetApiRequest {
        getJSON(): {
            createTransactionRequest: CreateTransactionRequest;
        };
        setTransactionRequest(p_transactionRequest: any): void;
        transactionRequest: any;
        getTransactionRequest(): any;
    }
    class CreateTransactionResponse extends ANetApiResponse {
        setTransactionResponse(p_transactionResponse: any): void;
        transactionResponse: any;
        getTransactionResponse(): any;
        setProfileResponse(p_profileResponse: any): void;
        profileResponse: any;
        getProfileResponse(): any;
    }
    class CreditCardType extends CreditCardSimpleType {
        setCardCode(p_cardCode: any): void;
        cardCode: any;
        getCardCode(): any;
        setIsPaymentToken(p_isPaymentToken: any): void;
        isPaymentToken: any;
        getIsPaymentToken(): any;
        setCryptogram(p_cryptogram: any): void;
        cryptogram: any;
        getCryptogram(): any;
        setTokenRequestorName(p_tokenRequestorName: any): void;
        tokenRequestorName: any;
        getTokenRequestorName(): any;
        setTokenRequestorId(p_tokenRequestorId: any): void;
        tokenRequestorId: any;
        getTokenRequestorId(): any;
        setTokenRequestorEci(p_tokenRequestorEci: any): void;
        tokenRequestorEci: any;
        getTokenRequestorEci(): any;
    }
    class CustomerAddressType extends NameAndAddressType {
        setPhoneNumber(p_phoneNumber: any): void;
        phoneNumber: any;
        getPhoneNumber(): any;
        setFaxNumber(p_faxNumber: any): void;
        faxNumber: any;
        getFaxNumber(): any;
        setEmail(p_email: any): void;
        email: any;
        getEmail(): any;
    }
    class CustomerPaymentProfileMaskedType extends CustomerPaymentProfileBaseType {
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setCustomerPaymentProfileId(p_customerPaymentProfileId: any): void;
        customerPaymentProfileId: any;
        getCustomerPaymentProfileId(): any;
        setDefaultPaymentProfile(p_defaultPaymentProfile: any): void;
        defaultPaymentProfile: any;
        getDefaultPaymentProfile(): any;
        setPayment(p_payment: any): void;
        payment: any;
        getPayment(): any;
        setDriversLicense(p_driversLicense: any): void;
        driversLicense: any;
        getDriversLicense(): any;
        setTaxId(p_taxId: any): void;
        taxId: any;
        getTaxId(): any;
        setSubscriptionIds(p_subscriptionIds: any): void;
        subscriptionIds: any;
        getSubscriptionIds(): any;
        setOriginalNetworkTransId(p_originalNetworkTransId: any): void;
        originalNetworkTransId: any;
        getOriginalNetworkTransId(): any;
        setOriginalAuthAmount(p_originalAuthAmount: any): void;
        originalAuthAmount: any;
        getOriginalAuthAmount(): any;
    }
    class CustomerPaymentProfileType extends CustomerPaymentProfileBaseType {
        setPayment(p_payment: any): void;
        payment: any;
        getPayment(): any;
        setDriversLicense(p_driversLicense: any): void;
        driversLicense: any;
        getDriversLicense(): any;
        setTaxId(p_taxId: any): void;
        taxId: any;
        getTaxId(): any;
        setDefaultPaymentProfile(p_defaultPaymentProfile: any): void;
        defaultPaymentProfile: any;
        getDefaultPaymentProfile(): any;
        setSubsequentAuthInformation(p_subsequentAuthInformation: any): void;
        subsequentAuthInformation: any;
        getSubsequentAuthInformation(): any;
    }
    class CustomerProfileExType extends CustomerProfileBaseType {
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
    }
    class CustomerProfileType extends CustomerProfileBaseType {
        setPaymentProfiles(p_paymentProfiles: any): void;
        paymentProfiles: any;
        getPaymentProfiles(): any;
        setShipToList(p_shipToList: any): void;
        shipToList: any;
        getShipToList(): any;
        setProfileType(p_profileType: any): void;
        profileType: any;
        getProfileType(): any;
    }
    class DecryptPaymentDataRequest extends ANetApiRequest {
        getJSON(): {
            decryptPaymentDataRequest: DecryptPaymentDataRequest;
        };
        setOpaqueData(p_opaqueData: any): void;
        opaqueData: any;
        getOpaqueData(): any;
        setCallId(p_callId: any): void;
        callId: any;
        getCallId(): any;
    }
    class DecryptPaymentDataResponse extends ANetApiResponse {
        setShippingInfo(p_shippingInfo: any): void;
        shippingInfo: any;
        getShippingInfo(): any;
        setBillingInfo(p_billingInfo: any): void;
        billingInfo: any;
        getBillingInfo(): any;
        setCardInfo(p_cardInfo: any): void;
        cardInfo: any;
        getCardInfo(): any;
        setPaymentDetails(p_paymentDetails: any): void;
        paymentDetails: any;
        getPaymentDetails(): any;
    }
    class DeleteCustomerPaymentProfileRequest extends ANetApiRequest {
        getJSON(): {
            deleteCustomerPaymentProfileRequest: DeleteCustomerPaymentProfileRequest;
        };
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setCustomerPaymentProfileId(p_customerPaymentProfileId: any): void;
        customerPaymentProfileId: any;
        getCustomerPaymentProfileId(): any;
    }
    class DeleteCustomerPaymentProfileResponse extends ANetApiResponse {}
    class DeleteCustomerProfileRequest extends ANetApiRequest {
        getJSON(): {
            deleteCustomerProfileRequest: DeleteCustomerProfileRequest;
        };
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
    }
    class DeleteCustomerProfileResponse extends ANetApiResponse {}
    class DeleteCustomerShippingAddressRequest extends ANetApiRequest {
        getJSON(): {
            deleteCustomerShippingAddressRequest: DeleteCustomerShippingAddressRequest;
        };
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setCustomerAddressId(p_customerAddressId: any): void;
        customerAddressId: any;
        getCustomerAddressId(): any;
    }
    class DeleteCustomerShippingAddressResponse extends ANetApiResponse {}
    class EmailSettingsType extends ArrayOfSetting {
        setVersion(p_version: any): void;
        version: any;
        getVersion(): any;
    }
    class GetAUJobDetailsRequest extends ANetApiRequest {
        getJSON(): {
            getAUJobDetailsRequest: GetAUJobDetailsRequest;
        };
        setMonth(p_month: any): void;
        month: any;
        getMonth(): any;
        setModifiedTypeFilter(p_modifiedTypeFilter: any): void;
        modifiedTypeFilter: any;
        getModifiedTypeFilter(): any;
        setPaging(p_paging: any): void;
        paging: any;
        getPaging(): any;
    }
    class GetAUJobDetailsResponse extends ANetApiResponse {
        setTotalNumInResultSet(p_totalNumInResultSet: any): void;
        totalNumInResultSet: any;
        getTotalNumInResultSet(): any;
        setAuDetails(p_auDetails: any): void;
        auDetails: any;
        getAuDetails(): any;
    }
    class GetAUJobSummaryRequest extends ANetApiRequest {
        getJSON(): {
            getAUJobSummaryRequest: GetAUJobSummaryRequest;
        };
        setMonth(p_month: any): void;
        month: any;
        getMonth(): any;
    }
    class GetAUJobSummaryResponse extends ANetApiResponse {
        setAuSummary(p_auSummary: any): void;
        auSummary: any;
        getAuSummary(): any;
    }
    class GetBatchStatisticsRequest extends ANetApiRequest {
        getJSON(): {
            getBatchStatisticsRequest: GetBatchStatisticsRequest;
        };
        setBatchId(p_batchId: any): void;
        batchId: any;
        getBatchId(): any;
    }
    class GetBatchStatisticsResponse extends ANetApiResponse {
        setBatch(p_batch: any): void;
        batch: any;
        getBatch(): any;
    }
    class GetCustomerPaymentProfileListRequest extends ANetApiRequest {
        getJSON(): {
            getCustomerPaymentProfileListRequest: GetCustomerPaymentProfileListRequest;
        };
        setSearchType(p_searchType: any): void;
        searchType: any;
        getSearchType(): any;
        setMonth(p_month: any): void;
        month: any;
        getMonth(): any;
        setSorting(p_sorting: any): void;
        sorting: any;
        getSorting(): any;
        setPaging(p_paging: any): void;
        paging: any;
        getPaging(): any;
    }
    class GetCustomerPaymentProfileListResponse extends ANetApiResponse {
        setTotalNumInResultSet(p_totalNumInResultSet: any): void;
        totalNumInResultSet: any;
        getTotalNumInResultSet(): any;
        setPaymentProfiles(p_paymentProfiles: any): void;
        paymentProfiles: any;
        getPaymentProfiles(): any;
    }
    class GetCustomerPaymentProfileNonceRequest extends ANetApiRequest {
        getJSON(): {
            getCustomerPaymentProfileNonceRequest: GetCustomerPaymentProfileNonceRequest;
        };
        setConnectedAccessToken(p_connectedAccessToken: any): void;
        connectedAccessToken: any;
        getConnectedAccessToken(): any;
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setCustomerPaymentProfileId(p_customerPaymentProfileId: any): void;
        customerPaymentProfileId: any;
        getCustomerPaymentProfileId(): any;
    }
    class GetCustomerPaymentProfileNonceResponse extends ANetApiResponse {
        setOpaqueData(p_opaqueData: any): void;
        opaqueData: any;
        getOpaqueData(): any;
    }
    class GetCustomerPaymentProfileRequest extends ANetApiRequest {
        getJSON(): {
            getCustomerPaymentProfileRequest: GetCustomerPaymentProfileRequest;
        };
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setCustomerPaymentProfileId(p_customerPaymentProfileId: any): void;
        customerPaymentProfileId: any;
        getCustomerPaymentProfileId(): any;
        setUnmaskExpirationDate(p_unmaskExpirationDate: any): void;
        unmaskExpirationDate: any;
        getUnmaskExpirationDate(): any;
        setIncludeIssuerInfo(p_includeIssuerInfo: any): void;
        includeIssuerInfo: any;
        getIncludeIssuerInfo(): any;
    }
    class GetCustomerPaymentProfileResponse extends ANetApiResponse {
        setPaymentProfile(p_paymentProfile: any): void;
        paymentProfile: any;
        getPaymentProfile(): any;
    }
    class GetCustomerProfileIdsRequest extends ANetApiRequest {
        getJSON(): {
            getCustomerProfileIdsRequest: GetCustomerProfileIdsRequest;
        };
    }
    class GetCustomerProfileIdsResponse extends ANetApiResponse {
        setIds(p_ids: any): void;
        ids: any;
        getIds(): any;
    }
    class GetCustomerProfileRequest extends ANetApiRequest {
        getJSON(): {
            getCustomerProfileRequest: GetCustomerProfileRequest;
        };
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setMerchantCustomerId(p_merchantCustomerId: any): void;
        merchantCustomerId: any;
        getMerchantCustomerId(): any;
        setEmail(p_email: any): void;
        email: any;
        getEmail(): any;
        setUnmaskExpirationDate(p_unmaskExpirationDate: any): void;
        unmaskExpirationDate: any;
        getUnmaskExpirationDate(): any;
        setIncludeIssuerInfo(p_includeIssuerInfo: any): void;
        includeIssuerInfo: any;
        getIncludeIssuerInfo(): any;
    }
    class GetCustomerProfileResponse extends ANetApiResponse {
        setProfile(p_profile: any): void;
        profile: any;
        getProfile(): any;
        setSubscriptionIds(p_subscriptionIds: any): void;
        subscriptionIds: any;
        getSubscriptionIds(): any;
    }
    class GetCustomerShippingAddressRequest extends ANetApiRequest {
        getJSON(): {
            getCustomerShippingAddressRequest: GetCustomerShippingAddressRequest;
        };
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setCustomerAddressId(p_customerAddressId: any): void;
        customerAddressId: any;
        getCustomerAddressId(): any;
    }
    class GetCustomerShippingAddressResponse extends ANetApiResponse {
        setDefaultShippingAddress(p_defaultShippingAddress: any): void;
        defaultShippingAddress: any;
        getDefaultShippingAddress(): any;
        setAddress(p_address: any): void;
        address: any;
        getAddress(): any;
        setSubscriptionIds(p_subscriptionIds: any): void;
        subscriptionIds: any;
        getSubscriptionIds(): any;
    }
    class GetHostedPaymentPageRequest extends ANetApiRequest {
        getJSON(): {
            getHostedPaymentPageRequest: GetHostedPaymentPageRequest;
        };
        setTransactionRequest(p_transactionRequest: any): void;
        transactionRequest: any;
        getTransactionRequest(): any;
        setHostedPaymentSettings(p_hostedPaymentSettings: any): void;
        hostedPaymentSettings: any;
        getHostedPaymentSettings(): any;
    }
    class GetHostedPaymentPageResponse extends ANetApiResponse {
        setToken(p_token: any): void;
        token: any;
        getToken(): any;
    }
    class GetHostedProfilePageRequest extends ANetApiRequest {
        getJSON(): {
            getHostedProfilePageRequest: GetHostedProfilePageRequest;
        };
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setHostedProfileSettings(p_hostedProfileSettings: any): void;
        hostedProfileSettings: any;
        getHostedProfileSettings(): any;
    }
    class GetHostedProfilePageResponse extends ANetApiResponse {
        setToken(p_token: any): void;
        token: any;
        getToken(): any;
    }
    class GetMerchantDetailsRequest extends ANetApiRequest {
        getJSON(): {
            getMerchantDetailsRequest: GetMerchantDetailsRequest;
        };
    }
    class GetMerchantDetailsResponse extends ANetApiResponse {
        setIsTestMode(p_isTestMode: any): void;
        isTestMode: any;
        getIsTestMode(): any;
        setProcessors(p_processors: any): void;
        processors: any;
        getProcessors(): any;
        setMerchantName(p_merchantName: any): void;
        merchantName: any;
        getMerchantName(): any;
        setGatewayId(p_gatewayId: any): void;
        gatewayId: any;
        getGatewayId(): any;
        setMarketTypes(p_marketTypes: any): void;
        marketTypes: any;
        getMarketTypes(): any;
        setProductCodes(p_productCodes: any): void;
        productCodes: any;
        getProductCodes(): any;
        setPaymentMethods(p_paymentMethods: any): void;
        paymentMethods: any;
        getPaymentMethods(): any;
        setCurrencies(p_currencies: any): void;
        currencies: any;
        getCurrencies(): any;
        setPublicClientKey(p_publicClientKey: any): void;
        publicClientKey: any;
        getPublicClientKey(): any;
        setBusinessInformation(p_businessInformation: any): void;
        businessInformation: any;
        getBusinessInformation(): any;
        setMerchantTimeZone(p_merchantTimeZone: any): void;
        merchantTimeZone: any;
        getMerchantTimeZone(): any;
        setContactDetails(p_contactDetails: any): void;
        contactDetails: any;
        getContactDetails(): any;
    }
    class GetSettledBatchListRequest extends ANetApiRequest {
        getJSON(): {
            getSettledBatchListRequest: GetSettledBatchListRequest;
        };
        setIncludeStatistics(p_includeStatistics: any): void;
        includeStatistics: any;
        getIncludeStatistics(): any;
        setFirstSettlementDate(p_firstSettlementDate: any): void;
        firstSettlementDate: any;
        getFirstSettlementDate(): any;
        setLastSettlementDate(p_lastSettlementDate: any): void;
        lastSettlementDate: any;
        getLastSettlementDate(): any;
    }
    class GetSettledBatchListResponse extends ANetApiResponse {
        setBatchList(p_batchList: any): void;
        batchList: any;
        getBatchList(): any;
    }
    class GetTransactionDetailsRequest extends ANetApiRequest {
        getJSON(): {
            getTransactionDetailsRequest: GetTransactionDetailsRequest;
        };
        setTransId(p_transId: any): void;
        transId: any;
        getTransId(): any;
    }
    class GetTransactionDetailsResponse extends ANetApiResponse {
        setTransaction(p_transaction: any): void;
        transaction: any;
        getTransaction(): any;
        setClientId(p_clientId: any): void;
        clientId: any;
        getClientId(): any;
        setTransrefId(p_transrefId: any): void;
        transrefId: any;
        getTransrefId(): any;
    }
    class GetTransactionListForCustomerRequest extends ANetApiRequest {
        getJSON(): {
            getTransactionListForCustomerRequest: GetTransactionListForCustomerRequest;
        };
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setCustomerPaymentProfileId(p_customerPaymentProfileId: any): void;
        customerPaymentProfileId: any;
        getCustomerPaymentProfileId(): any;
        setSorting(p_sorting: any): void;
        sorting: any;
        getSorting(): any;
        setPaging(p_paging: any): void;
        paging: any;
        getPaging(): any;
    }
    class GetTransactionListRequest extends ANetApiRequest {
        getJSON(): {
            getTransactionListRequest: GetTransactionListRequest;
        };
        setBatchId(p_batchId: any): void;
        batchId: any;
        getBatchId(): any;
        setSorting(p_sorting: any): void;
        sorting: any;
        getSorting(): any;
        setPaging(p_paging: any): void;
        paging: any;
        getPaging(): any;
    }
    class GetTransactionListResponse extends ANetApiResponse {
        setTransactions(p_transactions: any): void;
        transactions: any;
        getTransactions(): any;
        setTotalNumInResultSet(p_totalNumInResultSet: any): void;
        totalNumInResultSet: any;
        getTotalNumInResultSet(): any;
    }
    class GetUnsettledTransactionListRequest extends ANetApiRequest {
        getJSON(): {
            getUnsettledTransactionListRequest: GetUnsettledTransactionListRequest;
        };
        setStatus(p_status: any): void;
        status: any;
        getStatus(): any;
        setSorting(p_sorting: any): void;
        sorting: any;
        getSorting(): any;
        setPaging(p_paging: any): void;
        paging: any;
        getPaging(): any;
    }
    class GetUnsettledTransactionListResponse extends ANetApiResponse {
        setTransactions(p_transactions: any): void;
        transactions: any;
        getTransactions(): any;
        setTotalNumInResultSet(p_totalNumInResultSet: any): void;
        totalNumInResultSet: any;
        getTotalNumInResultSet(): any;
    }
    class IsAliveResponse extends ANetApiResponse {}
    class LogoutRequest extends ANetApiRequest {
        getJSON(): {
            logoutRequest: LogoutRequest;
        };
    }
    class LogoutResponse extends ANetApiResponse {}
    class MobileDeviceLoginRequest extends ANetApiRequest {
        getJSON(): {
            mobileDeviceLoginRequest: MobileDeviceLoginRequest;
        };
    }
    class MobileDeviceLoginResponse extends ANetApiResponse {
        setMerchantContact(p_merchantContact: any): void;
        merchantContact: any;
        getMerchantContact(): any;
        setUserPermissions(p_userPermissions: any): void;
        userPermissions: any;
        getUserPermissions(): any;
        setMerchantAccount(p_merchantAccount: any): void;
        merchantAccount: any;
        getMerchantAccount(): any;
    }
    class MobileDeviceRegistrationRequest extends ANetApiRequest {
        getJSON(): {
            mobileDeviceRegistrationRequest: MobileDeviceRegistrationRequest;
        };
        setMobileDevice(p_mobileDevice: any): void;
        mobileDevice: any;
        getMobileDevice(): any;
    }
    class MobileDeviceRegistrationResponse extends ANetApiResponse {}
    class OrderExType extends OrderType {
        setPurchaseOrderNumber(p_purchaseOrderNumber: any): void;
        purchaseOrderNumber: any;
        getPurchaseOrderNumber(): any;
    }
    class ProfileTransOrderType extends ProfileTransAmountType {
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setCustomerPaymentProfileId(p_customerPaymentProfileId: any): void;
        customerPaymentProfileId: any;
        getCustomerPaymentProfileId(): any;
        setCustomerShippingAddressId(p_customerShippingAddressId: any): void;
        customerShippingAddressId: any;
        getCustomerShippingAddressId(): any;
        setOrder(p_order: any): void;
        order: any;
        getOrder(): any;
        setTaxExempt(p_taxExempt: any): void;
        taxExempt: any;
        getTaxExempt(): any;
        setRecurringBilling(p_recurringBilling: any): void;
        recurringBilling: any;
        getRecurringBilling(): any;
        setCardCode(p_cardCode: any): void;
        cardCode: any;
        getCardCode(): any;
        setSplitTenderId(p_splitTenderId: any): void;
        splitTenderId: any;
        getSplitTenderId(): any;
        setProcessingOptions(p_processingOptions: any): void;
        processingOptions: any;
        getProcessingOptions(): any;
        setSubsequentAuthInformation(p_subsequentAuthInformation: any): void;
        subsequentAuthInformation: any;
        getSubsequentAuthInformation(): any;
        setAuthorizationIndicatorType(p_authorizationIndicatorType: any): void;
        authorizationIndicatorType: any;
        getAuthorizationIndicatorType(): any;
    }
    class ProfileTransPriorAuthCaptureType extends ProfileTransAmountType {
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setCustomerPaymentProfileId(p_customerPaymentProfileId: any): void;
        customerPaymentProfileId: any;
        getCustomerPaymentProfileId(): any;
        setCustomerShippingAddressId(p_customerShippingAddressId: any): void;
        customerShippingAddressId: any;
        getCustomerShippingAddressId(): any;
        setTransId(p_transId: any): void;
        transId: any;
        getTransId(): any;
    }
    class ProfileTransRefundType extends ProfileTransAmountType {
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setCustomerPaymentProfileId(p_customerPaymentProfileId: any): void;
        customerPaymentProfileId: any;
        getCustomerPaymentProfileId(): any;
        setCustomerShippingAddressId(p_customerShippingAddressId: any): void;
        customerShippingAddressId: any;
        getCustomerShippingAddressId(): any;
        setCreditCardNumberMasked(p_creditCardNumberMasked: any): void;
        creditCardNumberMasked: any;
        getCreditCardNumberMasked(): any;
        setBankRoutingNumberMasked(p_bankRoutingNumberMasked: any): void;
        bankRoutingNumberMasked: any;
        getBankRoutingNumberMasked(): any;
        setBankAccountNumberMasked(p_bankAccountNumberMasked: any): void;
        bankAccountNumberMasked: any;
        getBankAccountNumberMasked(): any;
        setOrder(p_order: any): void;
        order: any;
        getOrder(): any;
        setTransId(p_transId: any): void;
        transId: any;
        getTransId(): any;
    }
    class SecurePaymentContainerRequest extends ANetApiRequest {
        getJSON(): {
            securePaymentContainerRequest: SecurePaymentContainerRequest;
        };
        setData(p_data: any): void;
        data: any;
        getData(): any;
    }
    class SecurePaymentContainerResponse extends ANetApiResponse {
        setOpaqueData(p_opaqueData: any): void;
        opaqueData: any;
        getOpaqueData(): any;
    }
    class SendCustomerTransactionReceiptRequest extends ANetApiRequest {
        getJSON(): {
            sendCustomerTransactionReceiptRequest: SendCustomerTransactionReceiptRequest;
        };
        setTransId(p_transId: any): void;
        transId: any;
        getTransId(): any;
        setCustomerEmail(p_customerEmail: any): void;
        customerEmail: any;
        getCustomerEmail(): any;
        setEmailSettings(p_emailSettings: any): void;
        emailSettings: any;
        getEmailSettings(): any;
    }
    class SendCustomerTransactionReceiptResponse extends ANetApiResponse {}
    class UpdateCustomerPaymentProfileRequest extends ANetApiRequest {
        getJSON(): {
            updateCustomerPaymentProfileRequest: UpdateCustomerPaymentProfileRequest;
        };
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setPaymentProfile(p_paymentProfile: any): void;
        paymentProfile: any;
        getPaymentProfile(): any;
        setValidationMode(p_validationMode: any): void;
        validationMode: any;
        getValidationMode(): any;
    }
    class UpdateCustomerPaymentProfileResponse extends ANetApiResponse {
        setValidationDirectResponse(p_validationDirectResponse: any): void;
        validationDirectResponse: any;
        getValidationDirectResponse(): any;
    }
    class UpdateCustomerProfileRequest extends ANetApiRequest {
        getJSON(): {
            updateCustomerProfileRequest: UpdateCustomerProfileRequest;
        };
        setProfile(p_profile: any): void;
        profile: any;
        getProfile(): any;
    }
    class UpdateCustomerProfileResponse extends ANetApiResponse {}
    class UpdateCustomerShippingAddressRequest extends ANetApiRequest {
        getJSON(): {
            updateCustomerShippingAddressRequest: UpdateCustomerShippingAddressRequest;
        };
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setAddress(p_address: any): void;
        address: any;
        getAddress(): any;
        setDefaultShippingAddress(p_defaultShippingAddress: any): void;
        defaultShippingAddress: any;
        getDefaultShippingAddress(): any;
    }
    class UpdateCustomerShippingAddressResponse extends ANetApiResponse {}
    class UpdateHeldTransactionRequest extends ANetApiRequest {
        getJSON(): {
            updateHeldTransactionRequest: UpdateHeldTransactionRequest;
        };
        setHeldTransactionRequest(p_heldTransactionRequest: any): void;
        heldTransactionRequest: any;
        getHeldTransactionRequest(): any;
    }
    class UpdateHeldTransactionResponse extends ANetApiResponse {
        setTransactionResponse(p_transactionResponse: any): void;
        transactionResponse: any;
        getTransactionResponse(): any;
    }
    class UpdateMerchantDetailsRequest extends ANetApiRequest {
        getJSON(): {
            updateMerchantDetailsRequest: UpdateMerchantDetailsRequest;
        };
        setIsTestMode(p_isTestMode: any): void;
        isTestMode: any;
        getIsTestMode(): any;
    }
    class UpdateMerchantDetailsResponse extends ANetApiResponse {}
    class UpdateSplitTenderGroupRequest extends ANetApiRequest {
        getJSON(): {
            updateSplitTenderGroupRequest: UpdateSplitTenderGroupRequest;
        };
        setSplitTenderId(p_splitTenderId: any): void;
        splitTenderId: any;
        getSplitTenderId(): any;
        setSplitTenderStatus(p_splitTenderStatus: any): void;
        splitTenderStatus: any;
        getSplitTenderStatus(): any;
    }
    class UpdateSplitTenderGroupResponse extends ANetApiResponse {}
    class ValidateCustomerPaymentProfileRequest extends ANetApiRequest {
        getJSON(): {
            validateCustomerPaymentProfileRequest: ValidateCustomerPaymentProfileRequest;
        };
        setCustomerProfileId(p_customerProfileId: any): void;
        customerProfileId: any;
        getCustomerProfileId(): any;
        setCustomerPaymentProfileId(p_customerPaymentProfileId: any): void;
        customerPaymentProfileId: any;
        getCustomerPaymentProfileId(): any;
        setCustomerShippingAddressId(p_customerShippingAddressId: any): void;
        customerShippingAddressId: any;
        getCustomerShippingAddressId(): any;
        setCardCode(p_cardCode: any): void;
        cardCode: any;
        getCardCode(): any;
        setValidationMode(p_validationMode: any): void;
        validationMode: any;
        getValidationMode(): any;
    }
    class ValidateCustomerPaymentProfileResponse extends ANetApiResponse {
        setDirectResponse(p_directResponse: any): void;
        directResponse: any;
        getDirectResponse(): any;
    }
    class CustomerAddressExType extends CustomerAddressType {
        setCustomerAddressId(p_customerAddressId: any): void;
        customerAddressId: any;
        getCustomerAddressId(): any;
    }
    class CustomerPaymentProfileExType extends CustomerPaymentProfileType {
        setCustomerPaymentProfileId(p_customerPaymentProfileId: any): void;
        customerPaymentProfileId: any;
        getCustomerPaymentProfileId(): any;
    }
    class CustomerProfileInfoExType extends CustomerProfileExType {
        setProfileType(p_profileType: any): void;
        profileType: any;
        getProfileType(): any;
    }
    class CustomerProfileMaskedType extends CustomerProfileExType {
        setPaymentProfiles(p_paymentProfiles: any): void;
        paymentProfiles: any;
        getPaymentProfiles(): any;
        setShipToList(p_shipToList: any): void;
        shipToList: any;
        getShipToList(): any;
        setProfileType(p_profileType: any): void;
        profileType: any;
        getProfileType(): any;
    }
    class ProfileTransAuthCaptureType extends ProfileTransOrderType {}
    class ProfileTransAuthOnlyType extends ProfileTransOrderType {}
    class ProfileTransCaptureOnlyType extends ProfileTransOrderType {
        setApprovalCode(p_approvalCode: any): void;
        approvalCode: any;
        getApprovalCode(): any;
    }
    class SubscriptionCustomerProfileType extends CustomerProfileExType {
        setPaymentProfile(p_paymentProfile: any): void;
        paymentProfile: any;
        getPaymentProfile(): any;
        setShippingProfile(p_shippingProfile: any): void;
        shippingProfile: any;
        getShippingProfile(): any;
    }
    namespace ARBGetSubscriptionListOrderFieldEnum {
        const ID: string;
        const NAME: string;
        const STATUS: string;
        const CREATETIMESTAMPUTC: string;
        const LASTNAME: string;
        const FIRSTNAME: string;
        const ACCOUNTNUMBER: string;
        const AMOUNT: string;
        const PASTOCCURRENCES: string;
    }
    namespace ARBGetSubscriptionListSearchTypeEnum {
        const CARDEXPIRINGTHISMONTH: string;
        const SUBSCRIPTIONACTIVE: string;
        const SUBSCRIPTIONEXPIRINGTHISMONTH: string;
        const SUBSCRIPTIONINACTIVE: string;
    }
    namespace ARBSubscriptionStatusEnum {
        const ACTIVE: string;
        const EXPIRED: string;
        const SUSPENDED: string;
        const CANCELED: string;
        const TERMINATED: string;
    }
    namespace ARBSubscriptionUnitEnum {
        const DAYS: string;
        const MONTHS: string;
    }
    namespace AUJobTypeEnum {
        const ALL: string;
        const UPDATES: string;
        const DELETES: string;
    }
    namespace AccountTypeEnum {
        const VISA: string;
        const MASTERCARD: string;
        const AMERICANEXPRESS: string;
        const DISCOVER: string;
        const JCB: string;
        const DINERSCLUB: string;
        const ECHECK: string;
    }
    namespace AfdsTransactionEnum {
        const APPROVE: string;
        const DECLINE: string;
    }
    namespace AuthIndicatorEnum {
        const PRE: string;
        const FINAL: string;
    }
    namespace BankAccountTypeEnum {
        const CHECKING: string;
        const SAVINGS: string;
        const BUSINESSCHECKING: string;
    }
    namespace CardTypeEnum {
        const VISA: string;
        const MASTERCARD: string;

        const AMERICANEXPRESS: string;

        const DISCOVER: string;

        const JCB: string;

        const DINERSCLUB: string;
    }
    namespace CustomerPaymentProfileOrderFieldEnum {
        const ID_1: string;
    }
    namespace CustomerPaymentProfileSearchTypeEnum {
        const CARDSEXPIRINGINMONTH: string;
    }
    namespace CustomerProfileTypeEnum {
        const REGULAR: string;
        const GUEST: string;
    }
    namespace CustomerTypeEnum {
        const INDIVIDUAL: string;
        const BUSINESS: string;
    }
    namespace DeviceActivationEnum {
        const ACTIVATE: string;
        const DISABLE: string;
    }
    namespace EcheckTypeEnum {
        const PPD: string;
        const WEB: string;
        const CCD: string;
        const TEL: string;
        const ARC: string;
        const BOC: string;
    }
    namespace EncodingType {
        const BASE64: string;
        const HEX: string;
    }
    namespace EncryptionAlgorithmType {
        const TDES: string;
        const AES: string;
        const RSA: string;
    }
    namespace FDSFilterActionEnum {
        const REJECT: string;
        const DECLINE: string;
        const HOLD: string;
        const AUTHANDHOLD: string;
        const REPORT: string;
    }
    namespace MerchantInitTransReasonEnum {
        const RESUBMISSION: string;
        const DELAYEDCHARGE: string;
        const REAUTHORIZATION: string;
        const NOSHOW: string;
    }
    namespace MessageTypeEnum {
        const OK: string;
        const ERROR: string;
    }
    namespace OperationType {
        const DECRYPT: string;
    }
    namespace PaymentMethodEnum {
        const CREDITCARD: string;
        const ECHECK: string;
        const PAYPAL: string;
    }
    namespace PaymentMethodsTypeEnum {
        const VISA: string;
        const MASTERCARD: string;
        const DISCOVER: string;
        const AMERICANEXPRESS: string;
        const DINERSCLUB: string;
        const JCB: string;
        const ENROUTE: string;
        const ECHECK: string;
        const PAYPAL_1: string;
        const VISACHECKOUT: string;
        const APPLEPAY: string;
        const ANDROIDPAY: string;
        const GOOGLEPAY: string;
    }
    namespace PermissionsEnum {
        const API_MERCHANT_BASICREPORTING: string;
        const SUBMIT_CHARGE: string;
        const SUBMIT_REFUND: string;
        const SUBMIT_UPDATE: string;
        const MOBILE_ADMIN: string;
    }
    namespace SettingNameEnum {
        const EMAILCUSTOMER: string;
        const MERCHANTEMAIL: string;
        const ALLOWPARTIALAUTH: string;
        const HEADEREMAILRECEIPT: string;
        const FOOTEREMAILRECEIPT: string;
        const RECURRINGBILLING: string;
        const DUPLICATEWINDOW: string;
        const TESTREQUEST: string;
        const HOSTEDPROFILERETURNURL: string;
        const HOSTEDPROFILERETURNURLTEXT: string;
        const HOSTEDPROFILEPAGEBORDERVISIBLE: string;
        const HOSTEDPROFILEIFRAMECOMMUNICATORURL: string;
        const HOSTEDPROFILEHEADINGBGCOLOR: string;
        const HOSTEDPROFILEVALIDATIONMODE: string;
        const HOSTEDPROFILEBILLINGADDRESSREQUIRED: string;
        const HOSTEDPROFILECARDCODEREQUIRED: string;
        const HOSTEDPROFILEBILLINGADDRESSOPTIONS: string;
        const HOSTEDPROFILEMANAGEOPTIONS: string;
        const HOSTEDPAYMENTIFRAMECOMMUNICATORURL: string;
        const HOSTEDPAYMENTBUTTONOPTIONS: string;
        const HOSTEDPAYMENTRETURNOPTIONS: string;
        const HOSTEDPAYMENTORDEROPTIONS: string;
        const HOSTEDPAYMENTPAYMENTOPTIONS: string;
        const HOSTEDPAYMENTBILLINGADDRESSOPTIONS: string;
        const HOSTEDPAYMENTSHIPPINGADDRESSOPTIONS: string;
        const HOSTEDPAYMENTSECURITYOPTIONS: string;
        const HOSTEDPAYMENTCUSTOMEROPTIONS: string;
        const HOSTEDPAYMENTSTYLEOPTIONS: string;
        const TYPEEMAILRECEIPT: string;
        const HOSTEDPROFILEPAYMENTOPTIONS: string;
        const HOSTEDPROFILESAVEBUTTONTEXT: string;
        const HOSTEDPAYMENTVISACHECKOUTOPTIONS: string;
    }
    namespace SettlementStateEnum {
        const SETTLEDSUCCESSFULLY: string;
        const SETTLEMENTERROR: string;
        const PENDINGSETTLEMENT: string;
    }
    namespace SplitTenderStatusEnum {
        const COMPLETED: string;
        const HELD: string;
        const VOIDED: string;
    }
    namespace TransactionGroupStatusEnum {
        const ANY: string;
        const PENDINGAPPROVAL: string;
    }
    namespace TransactionListOrderFieldEnum {
        const ID: string;
        const SUBMITTIMEUTC: string;
    }
    namespace TransactionStatusEnum {
        const AUTHORIZEDPENDINGCAPTURE: string;
        const CAPTUREDPENDINGSETTLEMENT: string;
        const COMMUNICATIONERROR: string;
        const REFUNDSETTLEDSUCCESSFULLY: string;
        const REFUNDPENDINGSETTLEMENT: string;
        const APPROVEDREVIEW: string;
        const DECLINED: string;
        const COULDNOTVOID: string;
        const EXPIRED: string;
        const GENERALERROR: string;
        const PENDINGFINALSETTLEMENT: string;
        const PENDINGSETTLEMENT: string;
        const FAILEDREVIEW: string;
        const SETTLEDSUCCESSFULLY: string;
        const SETTLEMENTERROR: string;
        const UNDERREVIEW: string;
        const UPDATINGSETTLEMENT: string;
        const VOIDED: string;
        const FDSPENDINGREVIEW: string;
        const FDSAUTHORIZEDPENDINGREVIEW: string;
        const RETURNEDITEM: string;
        const CHARGEBACK: string;
        const CHARGEBACKREVERSAL: string;
        const AUTHORIZEDPENDINGRELEASE: string;
    }
    namespace TransactionTypeEnum {
        const AUTHONLYTRANSACTION: string;
        const AUTHCAPTURETRANSACTION: string;
        const CAPTUREONLYTRANSACTION: string;
        const REFUNDTRANSACTION: string;
        const PRIORAUTHCAPTURETRANSACTION: string;
        const VOIDTRANSACTION: string;
        const GETDETAILSTRANSACTION: string;
        const AUTHONLYCONTINUETRANSACTION: string;
        const AUTHCAPTURECONTINUETRANSACTION: string;
    }
    namespace ValidationModeEnum {
        const NONE: string;
        const TESTMODE: string;
        const LIVEMODE: string;
        const OLDLIVEMODE: string;
    }
    namespace WebCheckOutTypeEnum {
        const PAN: string;
        const TOKEN: string;
    }
    class DUKPT {
        constructor(obj?: any, ...args: any[]);
        setOperation(p_Operation: any): void;
        Operation: any;
        getOperation(): any;
        setMode(p_Mode: any): void;
        Mode: any;
        getMode(): any;
        setDeviceInfo(p_DeviceInfo: any): void;
        DeviceInfo: any;
        getDeviceInfo(): any;
        setEncryptedData(p_EncryptedData: any): void;
        EncryptedData: any;
        getEncryptedData(): any;
    }
    class Message {
        constructor(obj?: any, ...args: any[]);
        setCode(p_code: any): void;
        code: any;
        getCode(): any;
        setText(p_text: any): void;
        text: any;
        getText(): any;
    }
    class Interval {
        constructor(obj?: any, ...args: any[]);
        setLength(p_length: any): void;
        length: any;
        getLength(): any;
        setUnit(p_unit: any): void;
        unit: any;
        getUnit(): any;
    }
    class EmvDetails {
        constructor(obj?: any, ...args: any[]);
        setTag(p_tag: any): void;
        tag: any;
        getTag(): any;
    }
    class UserFields_2 {
        constructor(obj?: any, ...args: any[]);
        setUserField(p_userField: any): void;
        userField: any;
        getUserField(): any;
    }
    class EmvResponse {
        constructor(obj?: any, ...args: any[]);
        setTlvData(p_tlvData: any): void;
        tlvData: any;
        getTlvData(): any;
        setTags(p_tags: any): void;
        tags: any;
        getTags(): any;
    }
    class Errors {
        constructor(obj?: any, ...args: any[]);
        setError(p_error: any): void;
        error: any;
        getError(): any;
    }
    class Messages {
        constructor(obj?: any, ...args: any[]);
        setMessage(p_message: any): void;
        message: any;
        getMessage(): any;
    }
    class PrePaidCard {
        constructor(obj?: any, ...args: any[]);
        setRequestedAmount(p_requestedAmount: any): void;
        requestedAmount: any;
        getRequestedAmount(): any;
        setApprovedAmount(p_approvedAmount: any): void;
        approvedAmount: any;
        getApprovedAmount(): any;
        setBalanceOnCard(p_balanceOnCard: any): void;
        balanceOnCard: any;
        getBalanceOnCard(): any;
    }
    class SecureAcceptance {
        constructor(obj?: any, ...args: any[]);
        setSecureAcceptanceUrl(p_SecureAcceptanceUrl: any): void;
        SecureAcceptanceUrl: any;
        getSecureAcceptanceUrl(): any;
        setPayerID(p_PayerID: any): void;
        PayerID: any;
        getPayerID(): any;
        setPayerEmail(p_PayerEmail: any): void;
        PayerEmail: any;
        getPayerEmail(): any;
    }
    class SplitTenderPayments {
        constructor(obj?: any, ...args: any[]);
        setSplitTenderPayment(p_splitTenderPayment: any): void;
        splitTenderPayment: any;
        getSplitTenderPayment(): any;
    }
    class UserFields_3 {
        constructor(obj?: any, ...args: any[]);
        setUserField(p_userField: any): void;
        userField: any;
        getUserField(): any;
    }
}

export namespace APIControllers {
    class APIOperationBase {
        constructor(apiRequest: any);
        _request: any;
        _response: any;
        _endpoint: string;
        validateRequest(): void;
        validate(): void;
        getResponse(): any;
        getResultcode(): any;
        getMessagetype(): any;
        beforeExecute(): void;
        setClientId(): void;
        setEnvironment(env: any): void;
        execute(callback: any): void;
    }
    class ANetApiController extends APIOperationBase {
        getRequestType(): string;
    }
    class ARBCancelSubscriptionController extends APIOperationBase {
        getRequestType(): string;
    }
    class ARBCreateSubscriptionController extends APIOperationBase {
        getRequestType(): string;
    }
    class ARBGetSubscriptionController extends APIOperationBase {
        getRequestType(): string;
    }
    class ARBGetSubscriptionListController extends APIOperationBase {
        getRequestType(): string;
    }
    class ARBGetSubscriptionStatusController extends APIOperationBase {
        getRequestType(): string;
    }
    class ARBUpdateSubscriptionController extends APIOperationBase {
        getRequestType(): string;
    }
    class AuthenticateTestController extends APIOperationBase {
        getRequestType(): string;
    }
    class CreateCustomerPaymentProfileController extends APIOperationBase {
        getRequestType(): string;
    }
    class CreateCustomerProfileController extends APIOperationBase {
        getRequestType(): string;
    }
    class CreateCustomerProfileFromTransactionController extends APIOperationBase {
        getRequestType(): string;
    }
    class CreateCustomerProfileTransactionController extends APIOperationBase {
        getRequestType(): string;
    }
    class CreateCustomerShippingAddressController extends APIOperationBase {
        getRequestType(): string;
    }
    class CreateTransactionController extends APIOperationBase {
        getRequestType(): string;
    }
    class DecryptPaymentDataController extends APIOperationBase {
        getRequestType(): string;
    }
    class DeleteCustomerPaymentProfileController extends APIOperationBase {
        getRequestType(): string;
    }
    class DeleteCustomerProfileController extends APIOperationBase {
        getRequestType(): string;
    }
    class DeleteCustomerShippingAddressController extends APIOperationBase {
        getRequestType(): string;
    }
    class GetAUJobDetailsController extends APIOperationBase {
        getRequestType(): string;
    }
    class GetAUJobSummaryController extends APIOperationBase {
        getRequestType(): string;
    }
    class GetBatchStatisticsController extends APIOperationBase {
        getRequestType(): string;
    }
    class GetCustomerPaymentProfileController extends APIOperationBase {
        getRequestType(): string;
    }
    class GetCustomerPaymentProfileListController extends APIOperationBase {
        getRequestType(): string;
    }
    class GetCustomerPaymentProfileNonceController extends APIOperationBase {
        getRequestType(): string;
    }
    class GetCustomerProfileController extends APIOperationBase {
        getRequestType(): string;
    }
    class GetCustomerProfileIdsController extends APIOperationBase {
        getRequestType(): string;
    }
    class GetCustomerShippingAddressController extends APIOperationBase {
        getRequestType(): string;
    }
    class GetHostedPaymentPageController extends APIOperationBase {
        getRequestType(): string;
    }
    class GetHostedProfilePageController extends APIOperationBase {
        getRequestType(): string;
    }
    class GetMerchantDetailsController extends APIOperationBase {
        getRequestType(): string;
    }
    class GetSettledBatchListController extends APIOperationBase {
        getRequestType(): string;
    }
    class GetTransactionDetailsController extends APIOperationBase {
        getRequestType(): string;
    }
    class GetTransactionListController extends APIOperationBase {
        getRequestType(): string;
    }
    class GetTransactionListForCustomerController extends APIOperationBase {
        getRequestType(): string;
    }
    class GetUnsettledTransactionListController extends APIOperationBase {
        getRequestType(): string;
    }
    class IsAliveController extends APIOperationBase {
        getRequestType(): string;
    }
    class LogoutController extends APIOperationBase {
        getRequestType(): string;
    }
    class MobileDeviceLoginController extends APIOperationBase {
        getRequestType(): string;
    }
    class MobileDeviceRegistrationController extends APIOperationBase {
        getRequestType(): string;
    }
    class SecurePaymentContainerController extends APIOperationBase {
        getRequestType(): string;
    }
    class SendCustomerTransactionReceiptController extends APIOperationBase {
        getRequestType(): string;
    }
    class UpdateCustomerPaymentProfileController extends APIOperationBase {
        getRequestType(): string;
    }
    class UpdateCustomerProfileController extends APIOperationBase {
        getRequestType(): string;
    }
    class UpdateCustomerShippingAddressController extends APIOperationBase {
        getRequestType(): string;
    }
    class UpdateHeldTransactionController extends APIOperationBase {
        getRequestType(): string;
    }
    class UpdateMerchantDetailsController extends APIOperationBase {
        getRequestType(): string;
    }
    class UpdateSplitTenderGroupController extends APIOperationBase {
        getRequestType(): string;
    }
    class ValidateCustomerPaymentProfileController extends APIOperationBase {
        getRequestType(): string;
    }
}

export const Constants: {
    endpoint: {
        production: string;
        sandbox: string;
    };
};
