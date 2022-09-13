// Type definitions for braintree 3.3
// Project: https://github.com/braintree/braintree_node
// Definitions by: Sam Rubin <https://github.com/smrubin>
//                 Aaron Rose <https://github.com/acdr>
//                 Sanders DeNardi <https://github.com/sedenardi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

/// <reference types="node" />

export = braintree;
export as namespace braintree;
import * as stream from 'stream';

declare namespace braintree {
    /**
     * Braintree Config and Client
     */

    export enum Environment {
        Development = 'Development',
        Production = 'Production',
        Qa = 'Qa',
        Sandbox = 'Sandbox',
    }

    export type TextFieldSearchFn = () => {
        is: (input: string) => void;
        isNot: (input: string) => void;
        startsWith: (input: string) => void;
        endsWith: (input: string) => void;
        contains: (input: string) => void;
    };

    export type MultiValueSearchFn<T> = () => {
        is: (input: T) => void;
        in: (input: T[]) => void;
    };

    export type RangeFieldSearchFn<T> = () => {
        is: (input: T) => void;
        /** Inclusive */
        between: (lowerBound: T, upperBoundIncl: T) => void;
        min: (minimum: T) => void;
        max: (maximum: T) => void;
    };

    export type EqualitySearchFn<T> = () => {
        is: (input: T) => void;
        isNot: (input: T) => void;
    };

    export type PartialMatchSearchFn<T> = () => {
        startsWith: (input: T) => void;
        endsWith: (input: T) => void;
    };

    export type KeyValueSearchFn<T> = () => {
        is: (input: T) => void;
    };

    export type TransactionSearchFn = (search: {
        // text fields https://github.com/braintree/braintree_node/blob/master/lib/braintree/transaction_search.js#L9
        billingCompany: TextFieldSearchFn;
        billingCountryName: TextFieldSearchFn;
        billingExtendedAddress: TextFieldSearchFn;
        billingFirstName: TextFieldSearchFn;
        billingLastName: TextFieldSearchFn;
        billingLocality: TextFieldSearchFn;
        billingPostalCode: TextFieldSearchFn;
        billingRegion: TextFieldSearchFn;
        billingStreetAddress: TextFieldSearchFn;
        creditCardCardholderName: TextFieldSearchFn;
        creditCardUniqueIdentifier: TextFieldSearchFn;
        currency: TextFieldSearchFn;
        customerCompany: TextFieldSearchFn;
        customerEmail: TextFieldSearchFn;
        customerFax: TextFieldSearchFn;
        customerFirstName: TextFieldSearchFn;
        customerId: TextFieldSearchFn;
        customerLastName: TextFieldSearchFn;
        customerPhone: TextFieldSearchFn;
        customerWebsite: TextFieldSearchFn;
        id: TextFieldSearchFn;
        orderId: TextFieldSearchFn;
        paymentMethodToken: TextFieldSearchFn;
        paypalPayerEmail: TextFieldSearchFn;
        paypalPaymentId: TextFieldSearchFn;
        paypalAuthorizationId: TextFieldSearchFn;
        processorAuthorizationCode: TextFieldSearchFn;
        settlementBatchId: TextFieldSearchFn;
        shippingCompany: TextFieldSearchFn;
        shippingCountryName: TextFieldSearchFn;
        shippingExtendedAddress: TextFieldSearchFn;
        shippingFirstName: TextFieldSearchFn;
        shippingLastName: TextFieldSearchFn;
        shippingLocality: TextFieldSearchFn;
        shippingPostalCode: TextFieldSearchFn;
        shippingRegion: TextFieldSearchFn;
        shippingStreetAddress: TextFieldSearchFn;
        storeId: TextFieldSearchFn;

        creditCardExpirationDate: EqualitySearchFn<string>;
        creditCardNumber: PartialMatchSearchFn<string>;

        createdUsing: MultiValueSearchFn<typeof Transaction.CreatedUsing[keyof typeof Transaction.CreatedUsing]>;
        creditcardCardType: MultiValueSearchFn<
            typeof CreditCard.CardType[keyof Omit<typeof CreditCard.CardType, 'All'>]
        >;
        creditCardCustomerLocation: MultiValueSearchFn<CustomerLocation>;

        ids: MultiValueSearchFn<string>;
        user: MultiValueSearchFn<string>;
        paymentInstrumentType: MultiValueSearchFn<string>;
        merchantAccountId: MultiValueSearchFn<string>;
        status: MultiValueSearchFn<TransactionStatus>;
        source: MultiValueSearchFn<TransactionSource | string>;
        type: MultiValueSearchFn<typeof Transaction.Type[keyof Omit<typeof Transaction.Type, 'All'>]>;
        storeIds: MultiValueSearchFn<string>;

        refund: KeyValueSearchFn<boolean>;

        // range fields
        amount: RangeFieldSearchFn<string>;
        authorizationExpiredAt: RangeFieldSearchFn<Date>;
        authorizedAt: RangeFieldSearchFn<Date>;
        createdAt: RangeFieldSearchFn<Date>;
        disbursementDate: RangeFieldSearchFn<Date>;
        disputeDate: RangeFieldSearchFn<Date>;
        failedAt: RangeFieldSearchFn<Date>;
        gatewayRejectedAt: RangeFieldSearchFn<Date>;
        processorDeclinedAt: RangeFieldSearchFn<Date>;
        settledAt: RangeFieldSearchFn<Date>;
        submittedForSettlementAt: RangeFieldSearchFn<Date>;
        voidedAt: RangeFieldSearchFn<Date>;
    }) => void;

    export type GatewayConfig = KeyGatewayConfig | ClientGatewayConfig | AccessTokenGatewayConfig;

    export interface KeyGatewayConfig {
        environment: Environment;
        merchantId: string;
        publicKey: string;
        privateKey: string;
    }

    export interface ClientGatewayConfig {
        clientId: string;
        clientSecret: string;
    }

    export interface AccessTokenGatewayConfig {
        accessToken: string;
    }

    export class BraintreeGateway {
        constructor(config: GatewayConfig);
        config: any;
        addOn: AddOnGateway;
        address: AddressGateway;
        clientToken: ClientTokenGateway;
        creditCard: CreditCardGateway;
        creditCardVerification: CreditCardVerificationGateway;
        customer: CustomerGateway;
        discount: DiscountGateway;
        dispute: DisputeGateway;
        merchantAccount: MerchantAccountGateway;
        oauth: OAuthGateway;
        paymentMethod: PaymentMethodGateway;
        paymentMethodNonce: PaymentMethodNonceGateway;
        plan: PlanGateway;
        settlementBatchSummary: SettlementBatchSummaryGateway;
        subscription: SubscriptionGateway;
        testing: TestingGateway;
        transaction: TransactionGateway;
        transactionLineItem: TransactionLineItemGateway;
        webhookNotification: WebhookNotificationGateway;
        webhookTesting: WebhookTestingGateway;
    }

    interface ValidatedResponse<T> {
        success: boolean;
        errors: ValidationErrorsCollection;
        message: string;
        params: Record<string, any>;
        address: T extends Address ? Address : never;
        creditCard: T extends CreditCard ? CreditCard : never;
        customer: T extends Customer ? Customer : never;
        dispute: T extends Dispute ? Dispute : never;
        merchantAccount: T extends MerchantAccount ? MerchantAccount : never;
        paymentMethod: T extends PaymentMethod ? PaymentMethod : never;
        paymentMethodNonce: T extends PaymentMethodNonce ? PaymentMethodNonce : never;
        settlementBatchSumary: T extends SettlementBatchSummary ? SettlementBatchSummary : never;
        subscription: T extends Subscription ? Subscription : never;
        transaction: T extends Transaction ? Transaction : never;
        clientToken: T extends ClientToken ? string : never;
        credentials: T extends OAuthToken ? OAuthToken : never;
    }

    /**
     * Gateways
     */

    interface AddOnGateway {
        all(): Promise<AddOn[]>;
    }

    interface AddressGateway {
        create(request: AddressCreateRequest): Promise<ValidatedResponse<Address>>;
        delete(customerId: string, addressId: string): Promise<void>;
        find(customerId: string, addressId: string): Promise<Address>;
        update(
            customerId: string,
            addressId: string,
            updates: AddressUpdateRequest,
        ): Promise<ValidatedResponse<Address>>;
    }

    interface ClientTokenGateway {
        generate(request: ClientTokenRequest): Promise<ValidatedResponse<ClientToken>>;
    }

    interface CreditCardGateway {
        create(request: CreditCardCreateRequest): Promise<ValidatedResponse<CreditCard>>;
        delete(creditCardToken: string): Promise<void>;
        expiringBetween(startDate: Date, endDate: Date): Promise<CreditCard>;
        find(creditCardToken: string): Promise<CreditCard>;
        update(creditCardToken: string, updates: CreditCardUpdateRequest): Promise<ValidatedResponse<CreditCard>>;
    }

    interface CreditCardVerificationGateway {
        search(searchFn: any): stream.Readable;
    }

    interface CustomerGateway {
        create(request: CustomerCreateRequest): Promise<ValidatedResponse<Customer>>;
        delete(customerId: string): Promise<void>;
        find(customerId: string): Promise<Customer>;
        search(searchFn: any): stream.Readable;
        update(customerId: string, updates: CustomerUpdateRequest): Promise<ValidatedResponse<Customer>>;
    }

    interface DiscountGateway {
        all(): Promise<Discount[]>;
    }

    interface DisputeGateway {
        accept(disputeId: string): Promise<ValidatedResponse<Dispute>>;
        addFileEvidence(
            disputeId: string,
            evidence: { documentId: string; category?: string | undefined },
        ): Promise<ValidatedResponse<Evidence>>;
        addTextEvidence(
            disputeId: string,
            evidence: { content: string; category?: string | undefined },
        ): Promise<ValidatedResponse<Evidence>>;
        finalize(disputeId: string): Promise<ValidatedResponse<Dispute>>;
        find(disputeId: string): Promise<Dispute>;
        removeEvidence(disputeId: string, evidenceId: string): Promise<ValidatedResponse<Dispute>>;
        search(searchFn: any): stream.Readable;
    }

    interface MerchantAccountGateway {
        all(): Promise<MerchantAccount[]>;
        create(request: MerchantAccountCreateRequest): Promise<ValidatedResponse<MerchantAccount>>;
        createForCurrency(currency: string, id?: string): Promise<ValidatedResponse<MerchantAccount>>;
        update(
            merchantAccountId: string,
            updates: MerchantAccountUpdateRequest,
        ): Promise<ValidatedResponse<MerchantAccount>>;
        find(merchantAccountId: string): Promise<MerchantAccount>;
    }

    interface OAuthGateway {
        createTokenFromCode(request: OAuthCreateTokenFromCodeRequest): Promise<ValidatedResponse<OAuthToken>>;
        createTokenFromRefreshToken(
            request: OAuthCreateTokenFromRefreshTokenRequest,
        ): Promise<ValidatedResponse<OAuthToken>>;
        revokeAccessToken(accessToken: string): Promise<ValidatedResponse<void>>;
        connectUrl(urlRequest: OAuthConnectUrlRequest): string;
    }

    interface PaymentMethodGateway {
        create(request: PaymentMethodCreateRequest): Promise<ValidatedResponse<PaymentMethod>>;
        delete(token: string): Promise<void>;
        find(token: string): Promise<PaymentMethod>;
        grant(
            sharedPaymentMethodToken: string,
            options: {
                allowVaulting?: boolean | undefined;
                includeBillingPostalCode?: boolean | undefined;
                revokeAfter?: Date | undefined;
            },
        ): Promise<ValidatedResponse<PaymentMethodNonce>>;
        revoke(sharedPaymentMethodToken: string): Promise<void>;
        update(token: string, updates: PaymentMethodUpdateRequest): Promise<ValidatedResponse<PaymentMethod>>;
    }

    interface PaymentMethodNonceGateway {
        create(paymentMethodToken: string): Promise<ValidatedResponse<PaymentMethodNonce>>;
        find(paymentMethodNonce: string): Promise<PaymentMethodNonce>;
    }

    interface PlanGateway {
        all(): Promise<{ plans: Plan[] }>;
    }

    interface SettlementBatchSummaryGateway {
        generate(request: {
            settlementDate: string;
            groupByCustomField?: string | undefined;
        }): Promise<SettlementBatchSummary>;
    }

    interface SubscriptionGateway {
        cancel(subscriptionId: string): Promise<void>;
        create(request: SubscriptionCreateRequest): Promise<ValidatedResponse<Subscription>>;
        find(subscriptionId: string): Promise<Subscription>;
        retryCharge(
            subscriptionId: string,
            amount?: string,
            submitForSettlement?: boolean,
        ): Promise<ValidatedResponse<Subscription>>;
        search(searchFn: any): stream.Readable;
        update(subscriptionId: string, updates: SubscriptionUpdateRequest): Promise<ValidatedResponse<Subscription>>;
    }

    interface TestingGateway {
        settle(transactionId: string): Promise<ValidatedResponse<Transaction>>;
        settlementConfirm(transactionId: string): Promise<ValidatedResponse<Transaction>>;
        settlementDecline(transactionId: string): Promise<ValidatedResponse<Transaction>>;
        settlementOperationWithEnvironmentCheck(transactionId: string): Promise<ValidatedResponse<Transaction>>;
        settlementPending(transactionId: string): Promise<ValidatedResponse<Transaction>>;
    }

    interface TransactionGateway {
        cancelRelease(transactionId: string): Promise<void>;
        cloneTransaction(
            transactionId: string,
            options: { amount: string; options: { submitForSettlement: boolean } },
        ): Promise<void>;
        find(transactionId: string): Promise<Transaction>;
        holdInEscrow(transactionId: string): Promise<Transaction>;
        refund(transactionId: string, amount?: string): Promise<ValidatedResponse<Transaction>>;
        releaseFromEscrow(transactionId: string): Promise<Transaction>;
        sale(request: TransactionRequest): Promise<ValidatedResponse<Transaction>>;
        search(searchFn: TransactionSearchFn): stream.Readable;
        submitForPartialSettlement(
            authorizedTransactionId: string,
            amount: string,
        ): Promise<ValidatedResponse<Transaction>>;
        submitForSettlement(transactionId: string, amount?: string): Promise<ValidatedResponse<Transaction>>;
        adjustAuthorization(transactionID: string, amount?: string): Promise<ValidatedResponse<Transaction>>;
        void(transactionId: string): Promise<ValidatedResponse<Transaction>>;
    }

    interface TransactionLineItemGateway {
        findAll(transactionId: string): Promise<TransactionLineItem[]>;
    }

    interface WebhookNotificationGateway {
        parse(signature: string, payload: string): Promise<WebhookNotification>;
    }

    interface WebhookTestingGateway {
        sampleNotification(kind: WebhookNotificationKind, id: string): Promise<SampleNotification>;
    }

    /**
     * Request and Response Objects
     */

    /**
     * Add-On
     */

    export class AddOn {
        amount?: string | undefined;
        currentBillingCycle?: number | undefined;
        description?: string | undefined;
        id: string;
        kind?: string | undefined;
        name: string;
        neverExpires?: boolean | undefined;
        numberOfBillingCycles?: number | undefined;
        quantity?: number | undefined;
    }

    export interface AddOnAddRequest {
        amount?: string | undefined;
        inheritedFromId: string;
        neverExpires?: boolean | undefined;
        numberOfBillingCycles?: number | undefined;
        quantity?: number | undefined;
    }

    export interface AddOnUpdateRequest {
        amount?: string | undefined;
        existingId: string;
        neverExpires?: boolean | undefined;
        numberOfBillingCycles?: number | undefined;
        quantity?: number | undefined;
    }

    /**
     * Address
     */

    export class Address {
        company?: string | undefined;
        countryCodeAlpha2?: string | undefined;
        countryCodeAlpha3?: string | undefined;
        countryCodeNumeric?: string | undefined;
        countryName?: string | undefined;
        createdAt: string;
        customerId: string;
        extendedAddress?: string | undefined;
        firstName?: string | undefined;
        id: string;
        lastName?: string | undefined;
        locality?: string | undefined;
        postalCode?: string | undefined;
        region?: string | undefined;
        streetAddress?: string | undefined;
        updatedAt: string;
    }

    export interface AddressCreateRequest {
        company?: string | undefined;
        countryCodeAlpha2?: string | undefined;
        countryCodeAlpha3?: string | undefined;
        countryCodeNumeric?: string | undefined;
        countryName?: string | undefined;
        customerId: string;
        extendedAddress?: string | undefined;
        firstName?: string | undefined;
        lastName?: string | undefined;
        locality?: string | undefined;
        postalCode?: string | undefined;
        region?: string | undefined;
        streetAddress?: string | undefined;
    }

    export interface AddressUpdateRequest {
        company?: string | undefined;
        countryCodeAlpha2?: string | undefined;
        countryCodeAlpha3?: string | undefined;
        countryCodeNumeric?: string | undefined;
        countryName?: string | undefined;
        extendedAddress?: string | undefined;
        firstName?: string | undefined;
        lastName?: string | undefined;
        locality?: string | undefined;
        postalCode?: string | undefined;
        region?: string | undefined;
        streetAddress?: string | undefined;
    }

    /**
     * Client Token
     */

    export interface ClientTokenRequest {
        customerId?: string | undefined;
        merchantAccountId?: string | undefined;
        options?:
            | {
                  failOnDuplicatePaymentMethod?: boolean | undefined;
                  makeDefault?: boolean | undefined;
                  verifyCard?: boolean | undefined;
              }
            | undefined;
        version?: string | undefined;
    }

    /**
     * Credit Card
     */

    export class CreditCard {
        static CardType: {
            AmEx: 'American Express';
            CarteBlanche: 'Carte Blanche';
            ChinaUnionPay: 'China UnionPay';
            DinersClubInternational: 'Diners Club';
            Discover: 'Discover';
            Elo: 'Elo';
            JCB: 'JCB';
            Laser: 'Laser';
            UKMaestro: 'UK Maestro';
            Maestro: 'Maestro';
            MasterCard: 'MasterCard';
            Solo: 'Solo';
            Switch: 'Switch';
            Visa: 'Visa';
            Unknown: 'Unknown';
            All: () => Array<typeof CreditCard.CardType[keyof Omit<typeof CreditCard.CardType, 'All'>]>;
        };

        static CustomerLocation: {
            International: 'international';
            US: 'us';
        };

        static CardTypeIndicator: {
            Yes: 'Yes';
            No: 'No';
            Unknown: 'Unknown';
        };

        billingAddress?: Address | undefined;
        bin: string;
        cardholderName?: string | undefined;
        cardType: string;
        commercial: Commercial;
        countryOfIssuance: string;
        createdAt: string;
        customerId: string;
        customerLocation: CustomerLocation;
        debit: string;
        default: boolean;
        durbinRegulated: DurbinRegulated;
        expirationDate?: string | undefined;
        expirationMonth?: string | undefined;
        expirationYear?: string | undefined;
        expired: boolean;
        healthcare: HealthCare;
        imageUrl: string;
        issuingBank: string;
        last4: string;
        maskedNumber: string;
        payroll: Payroll;
        prepaid: Prepaid;
        productId: string;
        subscriptions?: Subscription[] | undefined;
        token: string;
        uniqueNumberIdentifier: string;
        updatedAt: string;
        verification?: CreditCardVerification | undefined;
    }

    export interface CreditCardCreateRequest {
        billingAddress?:
            | {
                  company?: string | undefined;
                  countryCodeAlpha2?: string | undefined;
                  countryCodeAlpha3?: string | undefined;
                  countryCodeNumeric?: string | undefined;
                  countryName?: string | undefined;
                  extendedAddress?: string | undefined;
                  firstName?: string | undefined;
                  lastName?: string | undefined;
                  locality?: string | undefined;
                  postalCode?: string | undefined;
                  region?: string | undefined;
                  streetAddress?: string | undefined;
              }
            | undefined;
        billingAddressId?: string | undefined;
        cardholderName?: string | undefined;
        customerId: string;
        cvv?: string | undefined;
        expirationDate?: string | undefined;
        expirationMonth?: string | undefined;
        expirationYear?: string | undefined;
        number?: string | undefined;
        options?:
            | {
                  failOnDuplicatePaymentMethod?: boolean | undefined;
                  makeDefault?: boolean | undefined;
                  verificationAmount?: string | undefined;
                  verificationMerchantAccountId?: string | undefined;
                  verifyCard?: boolean | undefined;
              }
            | undefined;
        paymentMethodNonce?: string | undefined;
        token?: string | undefined;
    }

    export interface CreditCardUpdateRequest {
        billingAddress?:
            | {
                  company?: string | undefined;
                  countryCodeAlpha2?: string | undefined;
                  countryCodeAlpha3?: string | undefined;
                  countryCodeNumeric?: string | undefined;
                  countryName?: string | undefined;
                  extendedAddress?: string | undefined;
                  firstName?: string | undefined;
                  lastName?: string | undefined;
                  locality?: string | undefined;
                  postalCode?: string | undefined;
                  region?: string | undefined;
                  streetAddress?: string | undefined;
                  options?:
                      | {
                            updateExisting?: boolean | undefined;
                        }
                      | undefined;
              }
            | undefined;
        cardholderName?: string | undefined;
        cvv?: string | undefined;
        expirationDate?: string | undefined;
        expirationMonth?: string | undefined;
        expirationYear?: string | undefined;
        number?: string | undefined;
    }

    /**
     * Credit Card Verification
     */

    export class CreditCardVerification {
        amount: string;
        avsErrorResponseCode?: string | undefined;
        avsPostalCodeResponseCode?: string | undefined;
        avsStreetAddressResponseCode?: string | undefined;
        billing?:
            | {
                  company?: string | undefined;
                  countryName?: string | undefined;
                  extendedAddress?: string | undefined;
                  firstName?: string | undefined;
                  lastName?: string | undefined;
                  locality?: string | undefined;
                  postalCode?: string | undefined;
                  region?: string | undefined;
                  streetAddress?: string | undefined;
              }
            | undefined;
        createdAt: string;
        creditCard?:
            | {
                  bin: string;
                  cardholderName?: string | undefined;
                  cardType: string;
                  commercial: Commercial;
                  countryOfIssuance: string;
                  customerLocation: CustomerLocation;
                  debit: string;
                  durbinRegulated: DurbinRegulated;
                  expirationDate?: string | undefined;
                  expirationMonth?: string | undefined;
                  expirationYear?: string | undefined;
                  healthcare: HealthCare;
                  issuingBank: string;
                  last4: string;
                  payroll: Payroll;
                  prepaid: Prepaid;
                  productId: string;
                  token: string;
                  uniqueNumberIdentifier: string;
              }
            | undefined;
        currencyIsoCode: string;
        cvvResponseCode: string;
        gatewayRejectionReason?: string | undefined;
        id: string;
        merchantAccountId: string;
        processorResponseCode: string;
        processorResponseText: string;
        processorResponseType: string;
        riskData?: TransactionRiskData | undefined;
        status: string;
    }

    /**
     * Customer
     */

    export class Customer {
        addresses?: Address[] | undefined;
        androidPayCards?: AndroidPayCard[] | undefined;
        applePayCards?: ApplePayCard[] | undefined;
        company?: string | undefined;
        createdAt: string;
        creditCards?: CreditCard[] | undefined;
        customFields?: any;
        email?: string | undefined;
        fax?: string | undefined;
        firstName?: string | undefined;
        id: string;
        lastName?: string | undefined;
        masterpassCards?: MasterpassCard[] | undefined;
        paymentMethods?: PaymentMethod[] | undefined;
        paypalAccounts?: PayPalAccount[] | undefined;
        phone?: string | undefined;
        samsungPayCards?: SamsungPayCard[] | undefined;
        updatedAt: string;
        venmoAccounts?: VenmoAccount[] | undefined;
        visaCheckoutCards?: VisaCheckoutCard[] | undefined;
        website?: string | undefined;
    }

    export interface CustomerCreateRequest {
        company?: string | undefined;
        creditCard?: CreditCardCreateRequest | undefined;
        customFields?: any;
        deviceData?: string | undefined;
        email?: string | undefined;
        fax?: string | undefined;
        firstName?: string | undefined;
        id?: string | undefined;
        lastName?: string | undefined;
        paymentMethodNonce?: string | undefined;
        phone?: string | undefined;
        riskData?: CustomerRiskData | undefined;
        website?: string | undefined;
    }

    export interface CustomerUpdateRequest {
        company?: string | undefined;
        creditCard?: CreditCardUpdateRequest | undefined;
        customFields?: any;
        defaultPaymentMethodToken?: string | undefined;
        deviceData?: string | undefined;
        email?: string | undefined;
        fax?: string | undefined;
        firstName?: string | undefined;
        lastName?: string | undefined;
        paymentMethodNonce?: string | undefined;
        phone?: string | undefined;
        riskData?: CustomerRiskData | undefined;
        website?: string | undefined;
    }

    export interface CustomerRiskData {
        customerBrowser?: string | undefined;
        customerIp?: string | undefined;
    }

    /**
     * Discount
     */

    export class Discount {
        amount?: string | undefined;
        currentBillingCycle?: number | undefined;
        description?: string | undefined;
        id: string;
        kind?: string | undefined;
        name: string;
        neverExpires?: boolean | undefined;
        numberOfBillingCycles?: number | undefined;
        quantity?: number | undefined;
    }

    export interface DiscountAddRequest {
        amount?: string | undefined;
        inheritedFromId: string;
        neverExpires?: boolean | undefined;
        numberOfBillingCycles?: number | undefined;
        quantity?: number | undefined;
    }

    export interface DiscountUpdateRequest {
        amount?: string | undefined;
        existingId: string;
        neverExpires?: boolean | undefined;
        numberOfBillingCycles?: number | undefined;
        quantity?: number | undefined;
    }

    /**
     * Dispute
     */

    export class Dispute {
        amountDisputed: string;
        amountWon: string;
        caseNumber: string;
        createdAt: string;
        currencyIsoCode: string;
        evidence: Evidence;
        id: string;
        kind: string;
        merchantAccountId: string;
        originalDisputeId: string;
        processorComments: string;
        reason: string;
        reasonCode: string;
        reasonDescription: string;
        receivedDate: Date;
        referenceNumber: string;
        replyByDate: Date;
        status: DisputeStatus;
        statusHistory: DisputeStatusHistory[];
        transaction: {
            amount: string;
            createdAt: string;
            id: string;
            orderId: string;
            paymentInstrumentSubtype: string;
            purchaseOrderNumber: string;
        };
        updatedAt: string;
    }

    export type DisputeStatus = 'Accepted' | 'Disputed' | 'Expired' | 'Open' | 'Lost' | 'Won';

    export interface DisputeStatusHistory {
        disbursementDate: Date;
        effectiveDate: Date;
        status: DisputeStatus;
        timestamp: Date;
    }

    export interface Evidence {
        comment?: string | undefined;
        createdAt: string;
        id: string;
        sendToProcessorAt: Date;
        url?: string | undefined;
    }

    /**
     * Disbursement
     */

    export class Disbursement {
        static Types: {
            Credit: 'credit';
            Debit: 'debit';
        };

        id: string;
        amount: string;
        disbursementDate: Date;
        disbursementType: DisbursementType;
        transactionIds: string[];
        merchantAccount: DisbursementMerchantAccount;
        retry: boolean;
        success: boolean;
        exceptionMessage?: DisbursementExceptionMessage | undefined;
        followUpAction?: DisbursementFollowUpAction | undefined;
    }

    export type DisbursementType = 'credit' | 'debit';

    export interface DisbursementMerchantAccount {
        id: string;
        subMerchantAccount: boolean;
        status: 'active';
    }

    export type DisbursementExceptionMessage = 'bank_rejected' | 'insufficient_funds' | 'account_not_authorized';

    export type DisbursementFollowUpAction = 'contact_us' | 'update_funding_information' | 'none';

    /**
     * Merchant Account
     */

    export class MerchantAccount {
        static Status: {
            Pending: 'pending';
            Active: 'active';
            Suspended: 'suspended';
        };

        static FundingDestination: {
            Bank: 'bank';
            Email: 'email';
            MobilePhone: 'mobile_phone';
        };

        business?: MerchantBusinessResponse | undefined;
        currencyIsoCode: string;
        default: boolean;
        funding: MerchantFunding;
        id: string;
        individual: MerchantIndividualResponse;
        masterMerchantAccount?: MerchantAccount | undefined;
        status: MerchantAccountStatus;
    }

    export interface MerchantAccountCreateRequest {
        business?: MerchantBusinessRequest | undefined;
        funding: MerchantFunding;
        id?: string | undefined;
        individual: MerchantIndividualRequest;
        masterMerchantAccountId: string;
        tosAccepted: boolean;
    }

    export interface MerchantAccountUpdateRequest {
        business?: MerchantBusinessRequest | undefined;
        funding: MerchantFunding;
        id: string;
        individual: MerchantIndividualRequest;
        masterMerchantAccountId: string;
    }

    export interface MerchantBusinessRequest {
        address?: MerchantAddressDetails | undefined;
        dbaName?: string | undefined;
        legalName?: string | undefined;
        taxId?: string | undefined;
    }

    export interface MerchantBusinessResponse {
        addressDetails?: MerchantAddressDetails | undefined;
        dbaName?: string | undefined;
        legalName?: string | undefined;
        taxId?: string | undefined;
    }

    export interface MerchantAddressDetails {
        locality: string;
        postalCode: string;
        region: string;
        streetAddress: string;
    }

    export interface MerchantFunding {
        accountNumber?: string | undefined;
        accountNumberLast4?: string | undefined;
        descriptor?: string | undefined;
        destination: string;
        email?: string | undefined;
        mobilePhone?: string | undefined;
        routingNumber?: string | undefined;
    }

    export interface MerchantIndividualRequest {
        address: MerchantAddressDetails;
        dateOfBirth: string;
        email: string;
        firstName: string;
        lastName: string;
        phone?: string | undefined;
        ssn?: string | undefined;
        ssnLast4?: string | undefined;
    }

    export interface MerchantIndividualResponse {
        addressDetails: MerchantAddressDetails;
        dateOfBirth: string;
        email: string;
        firstName: string;
        lastName: string;
        phone?: string | undefined;
        ssn?: string | undefined;
        ssnLast4?: string | undefined;
    }

    export type MerchantAccountStatus = 'Pending' | 'Active' | 'Suspended';

    /**
     * OAuth
     */

    export interface OAuthToken {
        accessToken: string;
        expiresAt: string;
        refreshToken: string;
    }

    export interface OAuthCreateTokenFromCodeRequest {
        code: string;
    }

    export interface OAuthCreateTokenFromRefreshTokenRequest {
        refreshToken: string;
    }

    export interface OAuthConnectUrlRequest {
        redirectUri: string;
        scope: string;
        state?: string | undefined;
    }

    /**
     * Payment Method
     */

    // Payment method is an instance of one of these types
    export type PaymentMethod =
        | AndroidPayCard
        | ApplePayCard
        | PayPalAccount
        | CreditCard
        | SamsungPayCard
        | VenmoAccount
        | VisaCheckoutCard
        | MasterpassCard;

    export interface PaymentMethodCreateRequest {
        billingAddress?:
            | {
                  company?: string | undefined;
                  countryCodeAlpha2?: string | undefined;
                  countryCodeAlpha3?: string | undefined;
                  countryCodeNumeric?: string | undefined;
                  countryName?: string | undefined;
                  extendedAddress?: string | undefined;
                  firstName?: string | undefined;
                  lastName?: string | undefined;
                  locality?: string | undefined;
                  postalCode?: string | undefined;
                  region?: string | undefined;
                  streetAddress?: string | undefined;
              }
            | undefined;
        billingAddressId?: string | undefined;
        cardholderName?: string | undefined;
        customerId: string;
        cvv?: string | undefined;
        deviceData?: string | undefined;
        expirationDate?: string | undefined;
        expirationMonth?: string | undefined;
        expirationYear?: string | undefined;
        number?: string | undefined;
        options?:
            | {
                  failOnDuplicatePaymentMethod?: boolean | undefined;
                  makeDefault?: boolean | undefined;
                  verificationAmount?: string | undefined;
                  verificationMerchantAccountId?: string | undefined;
                  verifyCard?: boolean | undefined;
              }
            | undefined;
        paymentMethodNonce: string;
    }

    export interface PaymentMethodUpdateRequest {
        billingAddress?:
            | {
                  company?: string | undefined;
                  countryCodeAlpha2?: string | undefined;
                  countryCodeAlpha3?: string | undefined;
                  countryCodeNumeric?: string | undefined;
                  countryName?: string | undefined;
                  extendedAddress?: string | undefined;
                  firstName?: string | undefined;
                  lastName?: string | undefined;
                  locality?: string | undefined;
                  postalCode?: string | undefined;
                  region?: string | undefined;
                  streetAddress?: string | undefined;
                  options?:
                      | {
                            updateExisting?: boolean | undefined;
                        }
                      | undefined;
              }
            | undefined;
        billingAddressId?: string | undefined;
        cardholderName?: string | undefined;
        cvv?: string | undefined;
        deviceData?: string | undefined;
        expirationDate?: string | undefined;
        expirationMonth?: string | undefined;
        expirationYear?: string | undefined;
        number?: string | undefined;
        options?:
            | {
                  makeDefault?: boolean | undefined;
                  verificationAcmount?: string | undefined;
                  verificationMerchantAccountId?: string | undefined;
                  verifyCard?: boolean | undefined;
              }
            | undefined;
        paymentMethodNonce?: string | undefined;
    }

    /**
     * Payment Method Nonce
     */

    export class PaymentMethodNonce {
        binData?: BinData | undefined;
        default?: boolean | undefined;
        details?: NonceDetails | undefined;
        nonce: string;
        threeDSecureInfo?: TransactionThreeDSecureInfo | undefined;
        type?: PaymentMethodType | undefined;
    }

    export interface BinData {
        commercial?: Commercial | undefined;
        countryOfIssuance?: string | undefined;
        debit?: Debit | undefined;
        durbinRegulated?: DurbinRegulated | undefined;
        healthcare?: HealthCare | undefined;
        issuingBank?: string | undefined;
        payroll?: Payroll | undefined;
        prepaid?: Prepaid | undefined;
        productId?: string | undefined;
    }

    export interface NonceDetails {
        bin?: string | undefined;
        cardType?: string | undefined;
        lastTwo?: string | undefined;
    }

    export type PaymentMethodType =
        | 'AndroidPayCard'
        | 'ApplePayCard'
        | 'CreditCard'
        | 'MasterpassCard'
        | 'PayPalAccount'
        | 'UsBankAccount'
        | 'VenmoAccount'
        | 'VisaCheckoutCard'
        | 'SamsungPayCard';

    /**
     * Account Updater
     */
    export class AccountUpdaterDailyReport {
        reportDate: Date;
        reportUrl: string;
    }

    /**
     * Webhooks
     */

    export interface SampleNotification {
        bt_signature: string;
        bt_payload: string;
    }

    export interface BaseWebhookNotification {
        kind: WebhookNotificationKind;
        timestamp: Date;
    }

    export interface TransactionNotification extends BaseWebhookNotification {
        kind: TransactionNotificationKind;
        transaction: Transaction;
    }

    export interface SubMerchantAccountApprovedNotification extends BaseWebhookNotification {
        kind: SubMerchantAccountApprovedNotificationKind;
        merchantAccount: MerchantAccount;
    }

    export interface SubMerchantAccountDeclinedNotification extends BaseWebhookNotification {
        kind: SubMerchantAccountDeclinedNotificationKind;
        merchantAccount: MerchantAccount;
    }

    export interface SubscriptionNotification extends BaseWebhookNotification {
        kind: SubscriptionNotificationKind;
        subscription: Subscription;
    }

    export interface DisputeNotification extends BaseWebhookNotification {
        kind: DisputeNotificationKind;
        dispute: Dispute;
    }

    export interface AccountUpdaterNotification extends BaseWebhookNotification {
        kind: AccountUpdaterNotificationKind;
        accountUpdaterDailyReport: AccountUpdaterDailyReport;
    }

    export interface PaymentMethodNotification extends BaseWebhookNotification {
        kind: PaymentMethodNotificationKind;
        revokedPaymentMethodMetadata: {
            token: string;
            customerId: string;
            revokedPaymentMethod: PaymentMethod;
        };
    }

    export interface DisbursementNotification extends BaseWebhookNotification {
        kind: DisbursementNotificationKind;
        disbursement: Disbursement;
    }

    export type WebhookNotification =
        | TransactionNotification
        | SubMerchantAccountApprovedNotification
        | SubMerchantAccountDeclinedNotification
        | SubscriptionNotification
        | DisputeNotification
        | AccountUpdaterNotification
        | PaymentMethodNotification
        | DisbursementNotification;

    export type AccountUpdaterNotificationKind = 'account_updater_daily_report';

    export type DisputeNotificationKind = 'dispute_opened' | 'dispute_lost' | 'dispute_won';

    export type SubscriptionNotificationKind =
        | 'subscription_canceled'
        | 'subscription_charged_successfully'
        | 'subscription_charged_unsuccessfully'
        | 'subscription_expired'
        | 'subscription_trial_ended'
        | 'subscription_went_active'
        | 'subscription_went_past_due';

    export type SubMerchantAccountApprovedNotificationKind = 'sub_merchant_account_approved';

    export type SubMerchantAccountDeclinedNotificationKind = 'sub_merchant_account_declined';

    export type TransactionNotificationKind =
        | 'transaction_disbursed'
        | 'transaction_settled'
        | 'transaction_settlement_declined';

    export type PaymentMethodNotificationKind = 'payment_method_revoked_by_customer';

    export type DisbursementNotificationKind = 'disbursement' | 'disbursement_exception';

    export type WebhookNotificationKind =
        | AccountUpdaterNotificationKind
        | DisputeNotificationKind
        | SubscriptionNotificationKind
        | SubMerchantAccountApprovedNotificationKind
        | SubMerchantAccountDeclinedNotificationKind
        | TransactionNotificationKind
        | PaymentMethodNotificationKind
        | DisbursementNotificationKind
        | 'check'
        | 'connected_merchant_paypal_status_changed'
        | 'connected_merchant_status_transitioned'
        | 'grantor_updated_granted_payment_method'
        | 'granted_payment_method_revoked'
        | 'local_payment_completed'
        | 'partner_merchant_connected'
        | 'partner_merchant_disconnected'
        | 'partner_merchant_declined'
        | 'oauth_access_revoked'
        | 'recipient_updated_granted_payment_method';

    /**
     * Plan
     */

    export class Plan {
        addOns?: AddOn[] | undefined;
        billingDayOfMonth: number;
        billingFrequency: number;
        createdAt: string;
        currencyIsoCode: string;
        description?: string | undefined;
        discounts?: Discount[] | undefined;
        id: string;
        name: string;
        numberOfBillingCycles: number;
        price: string;
        trialDuration?: number | undefined;
        trialDurationUnit?: string | undefined;
        trialPeriod?: boolean | undefined;
        updatedAt: string;
    }

    /**
     * Settlement Batch Summary
     */

    export class SettlementBatchSummary {
        records: Array<Record<string, any>>;
    }

    /**
     * Subscription
     */

    export class Subscription {
        static Status: {
            Active: 'Active';
            Canceled: 'Canceled';
            Expired: 'Expired';
            PastDue: 'Past Due';
            Pending: 'Pending';
            All: () => string[];
        };

        addOns?: AddOn[] | undefined;
        balance: string;
        billingDayOfMonth?: number | undefined;
        billingPeriodEndDate: string;
        billingPeriodStartDate: string;
        createdAt: string;
        currentBillingCycle: number;
        daysPastDue?: number | undefined;
        descriptor?: Descriptor | undefined;
        discounts?: Discount[] | undefined;
        failureCount?: number | undefined;
        firstBillingDate?: Date | undefined;
        id: string;
        merchantAccountId: string;
        neverExpires?: boolean | undefined;
        nextBillAmount: string;
        nextBillingDate: string;
        nextBillingPeriodAmount: string;
        numberOfBillingCycles?: number | undefined;
        paidThroughDate: Date;
        paymentMethodToken: string;
        planId: string;
        price?: string | undefined;
        status: SubscriptionStatus;
        statusHistory?: SubscriptionHistory[] | undefined;
        transactions?: Transaction[] | undefined;
        trialDuration?: number | undefined;
        trialDurationUnit?: string | undefined;
        trialPeriod?: boolean | undefined;
        updatedAt: string;
    }

    export interface SubscriptionRequest {
        addOns?:
            | {
                  add?: AddOnAddRequest[] | undefined;
                  remove?: string[] | undefined;
                  update?: AddOnUpdateRequest[] | undefined;
              }
            | undefined;
        descriptor?: Descriptor | undefined;
        discounts?:
            | {
                  add?: DiscountAddRequest[] | undefined;
                  remove?: string[] | undefined;
                  update?: DiscountUpdateRequest[] | undefined;
              }
            | undefined;
        firstBillingDate?: Date | undefined;
        id?: string | undefined;
        merchantAccountId?: string | undefined;
        neverExpires?: boolean | undefined;
        numberOfBillingCycles?: number | undefined;
        paymentMethodNonce?: string | undefined;
        paymentMethodToken?: string | undefined;
        planId: string;
        price?: string | undefined;
    }

    export interface SubscriptionCreateRequest extends SubscriptionRequest {
        billingDayOfMonth?: number | undefined;
        options?:
            | {
                  doNotInheritAddOnsOrDiscounts?: boolean | undefined;
                  paypal?:
                      | {
                            description?: string | undefined;
                        }
                      | undefined;
                  startImmediately?: boolean | undefined;
              }
            | undefined;
        trialDuration?: number | undefined;
        trialDurationUnit?: string | undefined;
        trialPeriod?: boolean | undefined;
    }

    export interface SubscriptionUpdateRequest extends SubscriptionRequest {
        options?:
            | {
                  paypal?:
                      | {
                            description?: string | undefined;
                        }
                      | undefined;
                  prorateCharges?: boolean | undefined;
                  replaceAllAddOnsAndDiscounts?: boolean | undefined;
                  revertSubscriptionOnProrationFailure: boolean | undefined;
              }
            | undefined;
    }

    export interface SubscriptionHistory {
        balance: string;
        price: string;
        status: SubscriptionStatus;
        subscriptionSource: SubscriptionSource;
    }

    export type SubscriptionStatus = 'Active' | 'Canceled' | 'Expired' | 'Past Due' | 'Pending';

    export type SubscriptionSource = 'api' | 'control_panel' | 'recurring';

    /**
     * Transaction
     */

    export class Transaction {
        static EscrowStatus: {
            HoldPending: 'hold_pending';
            Held: 'held';
            ReleasePending: 'release_pending';
            Released: 'released';
            Refunded: 'refunded';
        };

        static Type: {
            Credit: 'credit';
            Sale: 'sale';
            All: () => Array<typeof Transaction.Type[keyof Omit<typeof Transaction.Type, 'All'>]>;
        };

        static Source: {
            Api: 'Api';
            ControlPanel: 'ControlPanel';
            Recurring: 'Recurring';
        };

        static CreatedUsing: {
            Token: 'token';
            FullInformation: 'full_information';
        };

        static GatewayRejectionReason: {
            ApplicationIncomplete: 'application_incomplete';
            Avs: 'avs';
            Cvv: 'cvv';
            AvsAndCvv: 'avs_and_cvv';
            Duplicate: 'duplicate';
            Fraud: 'fraud';
            RiskThreshold: 'risk_threshold';
            ThreeDSecure: 'three_d_secure';
            TokenIssuance: 'token_issuance';
        };

        static Status: {
            AuthorizationExpired: 'authorization_expired';
            Authorizing: 'authorizing';
            Authorized: 'authorized';
            GatewayRejected: 'gateway_rejected';
            Failed: 'failed';
            ProcessorDeclined: 'processor_declined';
            Settled: 'settled';
            Settling: 'settling';
            SettlementConfirmed: 'settlement_confirmed';
            SettlementDeclined: 'settlement_declined';
            SettlementPending: 'settlement_pending';
            SubmittedForSettlement: 'submitted_for_settlement';
            Voided: 'voided';
            All: () => Array<typeof Transaction.Status[keyof Omit<typeof Transaction.Status, 'All'>]>;
        };

        addOns?: AddOn[] | undefined;
        additionalProccessorResponse: string;
        amount: string;
        androidPayCard?:
            | {
                  bin: string;
                  commercial: Commercial;
                  countryOfIssuance: string;
                  debit: Debit;
                  durbinRegulated: DurbinRegulated;
                  expirationMonth: string;
                  expirationYear: string;
                  googleTransactionId: string;
                  healthcare: HealthCare;
                  imageUrl: string;
                  payroll: Payroll;
                  prepaid: Prepaid;
                  productId: string;
                  sourceCardLast4: string;
                  sourceCardType: string;
                  sourceDescription: string;
                  token: string;
                  virtualCardLast4: string;
                  virtualCardType: string;
              }
            | undefined;
        applePayCard?:
            | {
                  bin: string;
                  cardType: string;
                  cardholderName: string;
                  commercial: Commercial;
                  countryOfIssuance: string;
                  debit: Debit;
                  durbinRegulated: DurbinRegulated;
                  expirationMonth: string;
                  expirationYear: string;
                  healthcare: HealthCare;
                  imageUrl: string;
                  issuingBank: string;
                  last4: string;
                  paymentInsuranceName: string;
                  payroll: Payroll;
                  prepaid: Prepaid;
                  productId: string;
                  sourceDescription: string;
                  token: string;
              }
            | undefined;
        authorizationAdjustments?: AuthorizationAdjustment[] | undefined;
        authorizationExpiresAt?: Date | undefined;
        avsErrorResponseCode: string;
        avsPostalCodeResponseCode: string;
        avsStreetAddressResponseCode: string;
        billing?:
            | {
                  company?: string | undefined;
                  countryCodeAlpha2?: string | undefined;
                  countryCodeAlpha3?: string | undefined;
                  countryCodeNumeric?: string | undefined;
                  countryName?: string | undefined;
                  extendedAddress?: string | undefined;
                  firstName?: string | undefined;
                  id?: string | undefined;
                  lastName?: string | undefined;
                  locality?: string | undefined;
                  postalCode?: string | undefined;
                  region?: string | undefined;
                  streetAddress?: string | undefined;
              }
            | undefined;
        channel?: string | undefined;
        createdAt: string;
        creditCard?:
            | {
                  bin: string;
                  cardholderName?: string | undefined;
                  cardType: string;
                  commercial: Commercial;
                  countryOfIssuance: string;
                  customerLocation: CustomerLocation;
                  debit: string;
                  durbinRegulated: DurbinRegulated;
                  expirationDate?: string | undefined;
                  expirationMonth?: string | undefined;
                  expirationYear?: string | undefined;
                  healthcare: HealthCare;
                  imageUrl?: string | undefined;
                  issuingBank: string;
                  last4: string;
                  maskedNumber?: string | undefined;
                  payroll: Payroll;
                  prepaid: Prepaid;
                  productId: string;
                  token: string;
                  uniqueNumberIdentifier: string;
              }
            | undefined;
        currencyIsoCode: string;
        customer: {
            company?: string | undefined;
            customFields?: any;
            email?: string | undefined;
            fax?: string | undefined;
            firstName?: string | undefined;
            id: string;
            lastName?: string | undefined;
            phone?: string | undefined;
            website?: string | undefined;
        };
        customFields?: Record<string, any> | undefined;
        cvvResponseCode: string;
        descriptor?: Descriptor | undefined;
        disbursementDetails?: DisbursementDetails | undefined;
        discountAmount?: string | undefined;
        discounts?: Discount[] | undefined;
        disputes?: Dispute[] | undefined;
        escrowStatus?: EscrowStatus | undefined;
        facilitatedDetails?: FacilitatedDetails | undefined;
        facilitatorDetails?: FacilitatorDetails | undefined;
        gatewayRejectionReason?: GatewayRejectionReason | undefined;
        id: string;
        lineItems?: TransactionLineItem[] | undefined;
        masterpassCardDetails?:
            | {
                  bin: string;
                  cardType: string;
                  cardholderName: string;
                  commercial: Commercial;
                  countryOfIssuance: string;
                  customerLocation: CustomerLocation;
                  debit: Debit;
                  durbinRegulated: DurbinRegulated;
                  expirationDate: string;
                  expirationMonth: string;
                  expirationYear: string;
                  healthcare: HealthCare;
                  imageUrl: string;
                  issuingBank: string;
                  last4: string;
                  maskedNumber: string;
                  payroll: Payroll;
                  prepaid: Prepaid;
                  productId: string;
                  token: string;
              }
            | undefined;
        merchantAccountId?: string | undefined;
        networkTransactionId?: string | undefined;
        orderId?: string | undefined;
        paymentInstrumentType: PaymentInstrumentType;
        paypalAccount?:
            | {
                  authorizationId: string;
                  captureId: string;
                  customField: string;
                  imageUrl: string;
                  payerEmail: string;
                  payerFirstName: string;
                  payerId: string;
                  payerLastName: string;
                  payerStatus: string;
                  paymentId: string;
                  refundFromTransactionFeeAmount: string;
                  refundFromTransactionFeeCurrencyIsoCode: string;
                  refundId: string;
                  sellerProtectionStatus: string;
                  taxId: string;
                  taxIdType: string;
                  token: string;
                  transactionFeeAmount: string;
                  transactionFeeCurrencyIsoCode: string;
              }
            | undefined;
        planId?: string | undefined;
        processorAuthorizationCode: string;
        processorResponseCode: string;
        processorResponseText: string;
        processorResponseType: TransactionProcessorResponseType;
        processorSettlementResponseCode: string;
        processorSettlementResponseText: string;
        purchaseOrderNumber?: string | undefined;
        recurring?: boolean | undefined; // Deprecated
        refundIds?: string[] | undefined;
        refundedTransactionId?: string | undefined;
        riskData?: TransactionRiskData | undefined;
        samsungPayCardDetails?:
            | {
                  bin: string;
                  cardType: string;
                  cardholderName: string;
                  commercial: Commercial;
                  countryOfIssuance: string;
                  customerLocation: CustomerLocation;
                  debit: Debit;
                  durbinRegulated: DurbinRegulated;
                  expirationDate: string;
                  expirationMonth: string;
                  expirationYear: string;
                  healthcare: HealthCare;
                  imageUrl: string;
                  issuingBank: string;
                  last4: string;
                  maskedNumber: string;
                  payroll: Payroll;
                  prepaid: Prepaid;
                  productId: string;
                  sourceCardLast4: string;
                  token: string;
              }
            | undefined;
        serviceFeeAmount?: string | undefined;
        settlementBatchId?: string | undefined;
        shipping?:
            | {
                  company?: string | undefined;
                  countryCodeAlpha2?: string | undefined;
                  countryCodeAlpha3?: string | undefined;
                  countryCodeNumeric?: string | undefined;
                  countryName?: string | undefined;
                  extendedAddress?: string | undefined;
                  firstName?: string | undefined;
                  id?: string | undefined;
                  lastName?: string | undefined;
                  locality?: string | undefined;
                  postalCode?: string | undefined;
                  region?: string | undefined;
                  streetAddress?: string | undefined;
              }
            | undefined;
        shippingAmount?: string | undefined;
        shipsFromPostalCode?: string | undefined;
        status: TransactionStatus;
        statusHistory?: TransactionStatusHistory[] | undefined;
        subscription?:
            | {
                  billingPeriodEndDate: Date;
                  billingPeriodStartDate: Date;
              }
            | undefined;
        subscriptionId?: string | undefined;
        taxAmount?: string | undefined;
        taxExempt?: boolean | undefined;
        threeDSecureInfo?: TransactionThreeDSecureInfo | undefined;
        type: string;
        updatedAt: string;
        venmoAccount?:
            | {
                  imageUrl: string;
                  sourceDescription: string;
                  token: string;
                  username: string;
                  venmoUserId: string;
              }
            | undefined;
        visaCheckoutCardDetails?:
            | {
                  bin: string;
                  callId: string;
                  cardType: string;
                  cardholderName: string;
                  commercial: Commercial;
                  countryOfIssuance: string;
                  customerLocation: CustomerLocation;
                  debit: Debit;
                  durbinRegulated: DurbinRegulated;
                  expirationDate: string;
                  expirationMonth: string;
                  expirationYear: string;
                  healthcare: HealthCare;
                  imageUrl: string;
                  issuingBank: string;
                  last4: string;
                  maskedNumber: string;
                  payroll: Payroll;
                  prepaid: Prepaid;
                  productId: string;
                  token: string;
              }
            | undefined;
        voiceReferralNumber?: string | undefined;
    }

    interface ClientToken {
        clientToken: string;
    }

    export interface TransactionRequest {
        amount: string;
        billing?:
            | {
                  company?: string | undefined;
                  countryName?: string | undefined;
                  extendedAddress?: string | undefined;
                  firstName?: string | undefined;
                  lastName?: string | undefined;
                  locality?: string | undefined;
                  postalCode?: string | undefined;
                  region?: string | undefined;
                  streetAddress?: string | undefined;
                  countryCodeAlpha2?: string | undefined;
                  countryCodeAlpha3?: string | undefined;
                  countryCodeNumeric?: string | undefined;
              }
            | undefined;
        billingAddressId?: string | undefined;
        channel?: string | undefined;
        creditCard?:
            | {
                  cardholderName?: string | undefined;
                  cvv?: string | undefined;
                  expirationDate?: string | undefined;
                  expirationMonth?: string | undefined;
                  expirationYear?: string | undefined;
                  number?: string | undefined;
                  token?: string | undefined;
              }
            | undefined;
        customer?:
            | {
                  company?: string | undefined;
                  customFields?: any;
                  email?: string | undefined;
                  fax?: string | undefined;
                  firstName?: string | undefined;
                  id?: string | undefined;
                  lastName?: string | undefined;
                  phone?: string | undefined;
                  website?: string | undefined;
              }
            | undefined;
        customerId?: string | undefined;
        customFields?: Record<string, any> | undefined;
        descriptor?: Descriptor | undefined;
        deviceData?: string | undefined;
        deviceSessionId?: string | undefined;
        discountAmount?: string | undefined;
        externalVault?:
            | {
                  previousNetworkTransactionId?: string | undefined;
                  status?: string | undefined;
              }
            | undefined;
        lineItems?: TransactionLineItem[] | undefined;
        merchantAccountId?: string | undefined;
        options?:
            | {
                  addBillingAddressToPaymentMethod?: boolean | undefined;
                  holdInEscrow?: boolean | undefined;
                  paypal?:
                      | {
                            customField?: string | undefined;
                            description?: string | undefined;
                        }
                      | undefined;
                  skipAdvancedFraudChecking?: boolean | undefined;
                  skipAvs?: boolean | undefined;
                  skipCvv?: boolean | undefined;
                  storeInVault?: boolean | undefined;
                  storeInVaultOnSuccess?: boolean | undefined;
                  storeShippingAddressInVault?: boolean | undefined;
                  submitForSettlement?: boolean | undefined;
                  threeDSecure?:
                      | {
                            required?: boolean | undefined;
                        }
                      | undefined;
                  venmo?:
                      | {
                            profileId?: string | undefined;
                        }
                      | undefined;
              }
            | undefined;
        orderId?: string | undefined;
        paymentMethodNonce?: string | undefined;
        paymentMethodToken?: string | undefined;
        purchaseOrderNumber?: string | undefined;
        recurring?: boolean | undefined; // Deprecated
        riskData?: CustomerRiskData | undefined;
        serviceFeeAmount?: string | undefined;
        sharedBillingAddressId?: string | undefined;
        sharedCustomerId?: string | undefined;
        sharedPaymentMethodNonce?: string | undefined;
        sharedPaymentMethodToken?: string | undefined;
        sharedShippingAddressId?: string | undefined;
        shipping?:
            | {
                  company?: string | undefined;
                  countryCodeAlpha2?: string | undefined;
                  countryCodeAlpha3?: string | undefined;
                  countryCodeNumeric?: string | undefined;
                  countryName?: string | undefined;
                  extendedAddress?: string | undefined;
                  firstName?: string | undefined;
                  lastName?: string | undefined;
                  locality?: string | undefined;
                  postalCode?: string | undefined;
                  region?: string | undefined;
                  streetAddress?: string | undefined;
              }
            | undefined;
        shippingAddressId?: string | undefined;
        shippingAmount?: string | undefined;
        shipsFromPostalCode?: string | undefined;
        taxAmount?: string | undefined;
        taxExempt?: boolean | undefined;
        threeDSecurePassThru?:
            | {
                  cavv?: string | undefined;
                  eciFlag: string;
                  threeDSecureVision?: string | undefined;
                  xid?: string | undefined;
              }
            | undefined;
        transactionSource?: TransactionRequestSource | undefined;
    }

    export interface AuthorizationAdjustment {
        amount: string;
        success: boolean;
        timestamp: Date;
        processorResponseType: string;
        processorResponseCode: string;
        processorResponseText: string;
    }

    export interface Descriptor {
        name: string;
        phone: string;
        url: string;
    }

    export interface DisbursementDetails {
        disbursementDate: Date;
        fundsHeld: boolean;
        settlementAmount: string;
        settlementCurrencyExchangeRate: string;
        settlementCurrencyIsoCode: string;
        success: boolean;
    }

    export type EscrowStatus = 'hold_pending' | 'held' | 'release_pending' | 'released' | 'refunded';

    export interface FacilitatedDetails {
        merchantId: string;
        merchantName: string;
        paymentMethodNonce: string;
    }

    export interface FacilitatorDetails {
        oauthApplicationClientId: string;
        oauthApplicationName: string;
        sourcePaymentMethodToken: string;
    }

    export type GatewayRejectionReason =
        | 'application_incomplete'
        | 'avs'
        | 'avs_and_cvv'
        | 'cvv'
        | 'duplicate'
        | 'fraud'
        | 'risk_threshold'
        | 'three_d_secure'
        | 'token_issuance';

    export type PaymentInstrumentType =
        | 'android_pay_card'
        | 'apple_pay_card'
        | 'credit_card'
        | 'masterpass_card'
        | 'paypal_account'
        | 'samsung_pay_card'
        | 'venmo_account'
        | 'visa_checkout_card';

    export type TransactionProcessorResponseType = 'approved' | 'soft_declined' | 'hard_declined';

    export type TransactionRequestSource = 'recurring' | 'unscheduled' | 'recurring_first' | 'moto';

    export interface TransactionRiskData {
        decision: string;
        deviceDataCaptured: boolean;
        fraudServiceProvider: string;
        id: string;
    }

    export type TransactionStatus =
        | 'authorization_expired'
        | 'authorized'
        | 'authorizing'
        | 'settlement_confirmed'
        | 'settlement_pending'
        | 'settlement_declined'
        | 'failed'
        | 'gateway_rejected'
        | 'processor_declined'
        | 'settled'
        | 'settling'
        | 'submitted_for_settlement'
        | 'voided';

    export interface TransactionStatusHistory {
        amount: string;
        status: TransactionStatus;
        timestamp: Date;
        transactionsource: TransactionSource;
        user: string;
    }

    export type TransactionSource = 'Api' | 'ControlPanel' | 'Recurring';

    export interface TransactionThreeDSecureInfo {
        enrolled: string;
        liabilityShiftPossible: boolean;
        liabilityShifted: boolean;
        status: string;
    }

    /**
     * Transaction Line Item
     */

    export class TransactionLineItem {
        commodityCode?: string | undefined;
        description?: string | undefined;
        discountAmount?: string | undefined;
        kind: string;
        name: string;
        productCode?: string | undefined;
        quantity: string;
        taxAmount?: string | undefined;
        totalAmount: string;
        unitAmount: string;
        unitOfMeasure?: string | undefined;
        unitTaxAmount?: string | undefined;
        url?: string | undefined;
    }

    /**
     * Payment Method Instances
     */

    export type Commercial = 'Yes' | 'No' | 'Unknown';
    export type CustomerLocation = 'US' | 'International';
    export type Debit = 'Yes' | 'No' | 'Unknown';
    export type DurbinRegulated = 'Yes' | 'No' | 'Unknown';
    export type HealthCare = 'Yes' | 'No' | 'Unknown';
    export type Payroll = 'Yes' | 'No' | 'Unknown';
    export type Prepaid = 'Yes' | 'No' | 'Unknown';

    /**
     * Android Pay Card
     */

    export class AndroidPayCard {
        bin: string;
        createdAt: string;
        customerId: string;
        default: boolean;
        expirationMonth: string;
        expirationYear: string;
        googleTransactionId: string;
        imageUrl: string;
        sourceCardLast4: string;
        sourceCardType: string;
        sourceDescription: string;
        subscriptions?: Subscription[] | undefined;
        token: string;
        updatedAt: string;
        virtualCardLast4: string;
        virtualCardType: string;
    }

    /**
     * Apple Pay Card
     */

    export class ApplePayCard {
        bin: string;
        cardType: string;
        cardholderName: string;
        createdAt: string;
        customerId: string;
        default: boolean;
        expirationMonth: string;
        expirationYear: string;
        expired: boolean;
        imageUrl: string;
        last4: string;
        paymentInsuranceName: string;
        sourceDescription: string;
        token: string;
        subscriptions?: Subscription[] | undefined;
        updatedAt: string;
    }

    /**
     * Masterpass Card
     */

    export class MasterpassCard {
        billingAddress: Address;
        bin: string;
        cardType: string;
        cardholderName: string;
        commercial: Commercial;
        countryOfIssuance: string;
        createdAt: string;
        customerId: string;
        customerLocation: CustomerLocation;
        debit: Debit;
        durbinRegulated: DurbinRegulated;
        expirationDate: string;
        expirationMonth: string;
        expirationYear: string;
        expired: boolean;
        healthcare: HealthCare;
        imageUrl: string;
        issuingBank: string;
        last4: string;
        maskedNumber: string;
        payroll: Payroll;
        prepaid: Prepaid;
        productId: string;
        token: string;
        subscriptions?: Subscription[] | undefined;
        uniqueNumberIdentifier: string;
        updatedAt: string;
    }

    /**
     * PayPal Account
     */

    export class PayPalAccount {
        imageUrl: string;
        payerId: string;
        token: string;
        billingAgreementId: string;
        createdAt: string;
        customerId: string;
        default: boolean;
        email: string;
        revokedAt: string;
        subscriptions?: Subscription[] | undefined;
        updatedAt: string;
    }

    /**
     * Samsung Pay Card
     */

    export class SamsungPayCard {
        billingAddress: Address;
        bin: string;
        cardType: string;
        cardholderName: string;
        commercial: Commercial;
        countryOfIssuance: string;
        createdAt: string;
        customerId: string;
        customerLocation: CustomerLocation;
        debit: Debit;
        durbinRegulated: DurbinRegulated;
        expirationDate: string;
        expirationMonth: string;
        expirationYear: string;
        expired: boolean;
        healthcare: HealthCare;
        imageUrl: string;
        issuingBank: string;
        last4: string;
        maskedNumber: string;
        payroll: Payroll;
        prepaid: Prepaid;
        productId: string;
        sourceCardLast4: string;
        subscriptions?: Subscription[] | undefined;
        token: string;
        uniqueNumberIdentifier: string;
        updatedAt: string;
    }

    /**
     * Venmo Account
     */

    export class VenmoAccount {
        createdAt: string;
        customerId: string;
        default: boolean;
        imageUrl: string;
        sourceDescription: string;
        subscriptions?: Subscription[] | undefined;
        token: string;
        username: string;
        updatedAt: string;
        venmoUserId: string;
    }

    /**
     * Visa Checkout Card
     */

    export class VisaCheckoutCard {
        billingAddress: Address;
        bin: string;
        callId: string;
        cardType: string;
        cardholderName: string;
        commercial: Commercial;
        countryOfIssuance: string;
        createdAt: string;
        customerId: string;
        customerLocation: CustomerLocation;
        debit: Debit;
        default: boolean;
        durbinRegulated: DurbinRegulated;
        expirationDate: string;
        expirationMonth: string;
        expirationYear: string;
        expired: boolean;
        healthcare: HealthCare;
        imageUrl: string;
        issuingBank: string;
        last4: string;
        maskedNumber: string;
        payroll: Payroll;
        prepaid: Prepaid;
        productId: string;
        subscriptions?: Subscription[] | undefined;
        token: string;
        uniqueNumberIdentifier: string;
        updatedAt: string;
    }

    /**
     * Test
     */

    export class Test {
        CreditCardDefaults: {
            CountryOfIssuance: string;
            IssuingBank: string;
        };
        CreditCardNumbers: {
            AmexPayWithPoints: {
                IneligibleCard: string;
                InsufficientPoints: string;
                Success: string;
            };
            CardTypeIndicators: {
                Commercial: string;
                CountryOfIssuance: string;
                Debit: string;
                DurbinRegulated: string;
                Fraud: string;
                Healthcare: string;
                Hiper: string;
                HiperCard: string;
                IssuingBank: string;
                No: string;
                Payroll: string;
                Prepaid: string;
                Unknown: string;
            };
            Dispute: {
                Chargeback: string;
            };
        };
        MerchantAccountTest: {
            AccountNotAuthorizedContactUs: string;
            AnotherUsBankMerchantAccount: string;
            Approve: string;
            BankRejectedNone: string;
            BankRejectedUpdateFundingInformation: string;
            InsufficientFundsContactUs: string;
            UsBankMerchantAccount: string;
        };
        Nonces: {
            AbstractTransactable: string;
            AmexExpressCheckout: string;
            AndroidPay: string;
            AndroidPayAmEx: string;
            AndroidPayDiscover: string;
            AndroidPayMasterCard: string;
            AndroidPayVisa: string;
            ApplePayAmEx: string;
            ApplePayMasterCard: string;
            ApplePayVisa: string;
            Coinbase: string;
            Consumed: string;
            Europe: string;
            GatewayRejectedFraud: string;
            LuhnInvalid: string;
            MasterpassAmEx: string;
            MasterpassDiscover: string;
            MasterpassMasterCard: string;
            MasterpassVisa: string;
            PayPalBillingAgreement: string;
            PayPalFuturePayment: string;
            PayPalFuturePaymentRefreshToken: string;
            PayPalOneTimePayment: string;
            ProcessorDeclinedAmEx: string;
            ProcessorDeclinedDiscover: string;
            ProcessorDeclinedMasterCard: string;
            ProcessorDeclinedVisa: string;
            ProcessorFailureJCB: string;
            SEPA: string;
            SamsungPayAmEx: string;
            SamsungPayDiscover: string;
            SamsungPayMasterCard: string;
            SamsungPayVisa: string;
            Transactable: string;
            TransactableAmEx: string;
            TransactableCommercial: string;
            TransactableCountryOfIssuanceCAD: string;
            TransactableCountryOfIssuanceUSA: string;
            TransactableDebit: string;
            TransactableDinersClub: string;
            TransactableDiscover: string;
            TransactableDurbinRegulated: string;
            TransactableHealthcare: string;
            TransactableIssuingBankNetworkOnly: string;
            TransactableJCB: string;
            TransactableMaestro: string;
            TransactableMasterCard: string;
            TransactableNoIndicators: string;
            TransactablePayroll: string;
            TransactablePrepaid: string;
            TransactableUnknownIndicators: string;
            TransactableVisa: string;
            VenmoAccount: string;
            VisaCheckoutAmEx: string;
            VisaCheckoutDiscover: string;
            VisaCheckoutMasterCard: string;
            VisaCheckoutVisa: string;
        };
        TransactionAmounts: {
            Authorize: string;
            Decline: string;
            Fail: string;
        };
    }

    /**
     * Errors
     */

    export interface AuthenticationError extends Error {}
    export interface AuthorizationError extends Error {}
    export interface GatewayTimeoutError extends Error {}
    export interface InvalidChallengeError extends Error {}
    export interface InvalidKeysError extends Error {}
    export interface InvalidSignatureError extends Error {}
    export interface NotFoundError extends Error {}
    export interface RequestTimeoutError extends Error {}
    export interface ServerError extends Error {}
    export interface ServiceUnavailableError extends Error {}
    export interface TestOperationPerformedInProductionError extends Error {}
    export interface TooManyRequestsError extends Error {}
    export interface UnexpectedError extends Error {}
    export interface UpgradeRequired extends Error {}

    /**
     * Validation errors
     */

    export interface ValidationError {
        attribute: string;
        code: string;
        message: string;
    }

    export interface ValidationErrorsCollection {
        deepErrors(): ValidationError[];
        for(name: string): ValidationErrorsCollection;
        forIndex(index: number): ValidationErrorsCollection;
        on(name: string): ValidationError;
    }
}
