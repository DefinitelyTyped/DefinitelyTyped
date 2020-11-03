// Type definitions for braintree 2.22
// Project: https://github.com/braintree/braintree_node
// Definitions by: Sam Rubin <https://github.com/smrubin>,
//                 Mohamed Elsharnouby <https://github.com/sharno>,
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

    export function connect(config: GatewayConfig): BraintreeGateway;

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
            evidence: { documentId: string; category?: string },
        ): Promise<ValidatedResponse<Evidence>>;
        addTextEvidence(
            disputeId: string,
            evidence: { content: string; category?: string },
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
        createTokenFromRefreshToken(request: OAuthCreateTokenFromRefreshTokenRequest): Promise<ValidatedResponse<OAuthToken>>;
        revokeAccessToken(accessToken: string): Promise<ValidatedResponse<void>>;
        connectUrl(urlRequest: OAuthConnectUrlRequest): string;
    }

    interface PaymentMethodGateway {
        create(request: PaymentMethodCreateRequest): Promise<ValidatedResponse<PaymentMethod>>;
        delete(token: string): Promise<void>;
        find(token: string): Promise<PaymentMethod>;
        grant(
            sharedPaymentMethodToken: string,
            options: { allowVaulting?: boolean; includeBillingPostalCode?: boolean; revokeAfter?: Date },
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
        generate(request: { settlementDate: string; groupByCustomField?: string }): Promise<SettlementBatchSummary>;
    }

    interface SubscriptionGateway {
        cancel(subscriptionId: string): Promise<void>;
        create(request: SubscriptionRequest): Promise<ValidatedResponse<Subscription>>;
        find(subscriptionId: string): Promise<Subscription>;
        retryCharge(
            subscriptionId: string,
            amount?: string,
            submitForSettlement?: boolean,
        ): Promise<ValidatedResponse<Subscription>>;
        search(searchFn: any): stream.Readable;
        update(subscriptionId: string, updates: SubscriptionRequest): Promise<ValidatedResponse<Subscription>>;
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
        search(searchFn: any): stream.Readable;
        submitForPartialSettlement(
            authorizedTransactionId: string,
            amount: string,
        ): Promise<ValidatedResponse<Transaction>>;
        submitForSettlement(transactionId: string, amount?: string): Promise<ValidatedResponse<Transaction>>;
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
        amount?: string;
        currentBillingCycle?: number;
        description?: string;
        id: string;
        kind?: string;
        name: string;
        neverExpires?: boolean;
        numberOfBillingCycles?: number;
        quantity?: number;
    }

    export interface AddOnAddRequest {
        amount?: string;
        inheritedFromId: string;
        neverExpires?: boolean;
        numberOfBillingCycles?: number;
        quantity?: number;
    }

    export interface AddOnUpdateRequest {
        amount?: string;
        existingId: string;
        neverExpires?: boolean;
        numberOfBillingCycles?: number;
        quantity?: number;
    }

    /**
     * Address
     */

    export class Address {
        company?: string;
        countryCodeAlpha2?: string;
        countryCodeAlpha3?: string;
        countryCodeNumeric?: string;
        countryName?: string;
        createdAt: Date;
        customerId: string;
        extendedAddress?: string;
        firstName?: string;
        id: string;
        lastName?: string;
        locality?: string;
        postalCode?: string;
        region?: string;
        streetAddress?: string;
        updatedAt: Date;
    }

    export interface AddressCreateRequest {
        company?: string;
        countryCodeAlpha2?: string;
        countryCodeAlpha3?: string;
        countryCodeNumeric?: string;
        countryName?: string;
        customerId: string;
        extendedAddress?: string;
        firstName?: string;
        lastName?: string;
        locality?: string;
        postalCode?: string;
        region?: string;
        streetAddress?: string;
    }

    export interface AddressUpdateRequest {
        company?: string;
        countryCodeAlpha2?: string;
        countryCodeAlpha3?: string;
        countryCodeNumeric?: string;
        countryName?: string;
        extendedAddress?: string;
        firstName?: string;
        lastName?: string;
        locality?: string;
        postalCode?: string;
        region?: string;
        streetAddress?: string;
    }

    /**
     * Client Token
     */

    export interface ClientTokenRequest {
        customerId?: string;
        merchantAccountId?: string;
        options?: {
            failOnDuplicatePaymentMethod?: boolean;
            makeDefault?: boolean;
            verifyCard?: boolean;
        };
        version?: string;
    }

    /**
     * Credit Card
     */

    export class CreditCard {
        billingAddress?: Address;
        bin: string;
        cardholderName?: string;
        cardType: string;
        commercial: Commercial;
        countryOfIssuance: string;
        createdAt: Date;
        customerId: string;
        customerLocation: CustomerLocation;
        debit: string;
        default: boolean;
        durbinRegulated: DurbinRegulated;
        expirationDate?: string;
        expirationMonth?: string;
        expirationYear?: string;
        expired: boolean;
        healthcare: HealthCare;
        imageUrl: string;
        issuingBank: string;
        last4: string;
        maskedNumber: string;
        payroll: Payroll;
        prepaid: Prepaid;
        productId: string;
        subscriptions?: Subscription[];
        token: string;
        uniqueNumberIdentifier: string;
        updatedAt: Date;
        verification?: CreditCardVerification;
    }

    export interface CreditCardCreateRequest {
        billingAddress?: {
            company?: string;
            countryCodeAlpha2?: string;
            countryCodeAlpha3?: string;
            countryCodeNumeric?: string;
            countryName?: string;
            extendedAddress?: string;
            firstName?: string;
            lastName?: string;
            locality?: string;
            postalCode?: string;
            region?: string;
            streetAddress?: string;
        };
        billingAddressId?: string;
        cardholderName?: string;
        customerId: string;
        cvv?: string;
        expirationDate?: string;
        expirationMonth?: string;
        expirationYear?: string;
        number?: string;
        options?: {
            failOnDuplicatePaymentMethod?: boolean;
            makeDefault?: boolean;
            verificationAmount?: string;
            verificationMerchantAccountId?: string;
            verifyCard?: boolean;
        };
        paymentMethodNonce?: string;
        token?: string;
    }

    export interface CreditCardUpdateRequest {
        billingAddress?: {
            company?: string;
            countryCodeAlpha2?: string;
            countryCodeAlpha3?: string;
            countryCodeNumeric?: string;
            countryName?: string;
            extendedAddress?: string;
            firstName?: string;
            lastName?: string;
            locality?: string;
            postalCode?: string;
            region?: string;
            streetAddress?: string;
            options?: {
                updateExisting?: boolean;
            };
        };
        cardholderName?: string;
        cvv?: string;
        expirationDate?: string;
        expirationMonth?: string;
        expirationYear?: string;
        number?: string;
    }

    /**
     * Credit Card Verification
     */

    export class CreditCardVerification {
        amount: string;
        avsErrorResponseCode?: string;
        avsPostalCodeResponseCode?: string;
        avsScreetAddressResponseCode?: string;
        billing?: {
            company?: string;
            countryName?: string;
            extendedAddress?: string;
            firstName?: string;
            lastName?: string;
            locality?: string;
            postalCode?: string;
            region?: string;
            streetAddress?: string;
        };
        createdAt: Date;
        creditCard?: {
            bin: string;
            cardholderName?: string;
            cardType: string;
            commercial: Commercial;
            countryOfIssuance: string;
            customerLocation: CustomerLocation;
            debit: string;
            durbinRegulated: DurbinRegulated;
            expirationDate?: string;
            expirationMonth?: string;
            expirationYear?: string;
            healthcare: HealthCare;
            issuingBank: string;
            last4: string;
            payroll: Payroll;
            prepaid: Prepaid;
            productId: string;
            token: string;
            uniqueNumberIdentifier: string;
        };
        currencyIsoCode: string;
        cvvResponseCode: string;
        gatewayRejectionReason?: string;
        id: string;
        merchantAccountId: string;
        processorResponseCode: string;
        processorResponseText: string;
        processorResponseType: string;
        riskData?: TransactionRiskData;
        status: string;
    }

    /**
     * Customer
     */

    export class Customer {
        addresses?: Address[];
        androidPayCards?: AndroidPayCard[];
        applePayCards?: ApplePayCard[];
        company?: string;
        createdAt: Date;
        creditCards?: CreditCard[];
        customFields?: any;
        email?: string;
        fax?: string;
        firstName?: string;
        id: string;
        lastName?: string;
        masterpassCards?: MasterpassCard[];
        paymentMethods?: PaymentMethod[];
        paypalAccounts?: PayPalAccount[];
        phone?: string;
        samsungPayCards?: SamsungPayCard[];
        updatedAt: Date;
        venmoAccounts?: VenmoAccount[];
        visaCheckoutCards?: VisaCheckoutCard[];
        website?: string;
    }

    export interface CustomerCreateRequest {
        company?: string;
        creditCard?: CreditCardCreateRequest;
        customFields?: any;
        deviceData?: string;
        email?: string;
        fax?: string;
        firstName?: string;
        id?: string;
        lastName?: string;
        paymentMethodNonce?: string;
        phone?: string;
        riskData?: CustomerRiskData;
        website?: string;
    }

    export interface CustomerUpdateRequest {
        company?: string;
        creditCard?: CreditCardUpdateRequest;
        customFields?: any;
        defaultPaymentMethodToken?: string;
        deviceData?: string;
        email?: string;
        fax?: string;
        firstName?: string;
        lastName?: string;
        paymentMethodNonce?: string;
        phone?: string;
        riskData?: CustomerRiskData;
        website?: string;
    }

    export interface CustomerRiskData {
        customerBrowser?: string;
        customerIp?: string;
    }

    /**
     * Discount
     */

    export class Discount {
        amount?: string;
        currentBillingCycle?: number;
        description?: string;
        id: string;
        kind?: string;
        name: string;
        neverExpires?: boolean;
        numberOfBillingCycles?: number;
        quantity?: number;
    }

    export interface DiscountAddRequest {
        amount?: string;
        inheritedFromId: string;
        neverExpires?: boolean;
        numberOfBillingCycles?: number;
        quantity?: number;
    }

    export interface DiscountUpdateRequest {
        amount?: string;
        existingId: string;
        neverExpires?: boolean;
        numberOfBillingCycles?: number;
        quantity?: number;
    }

    /**
     * Dispute
     */

    export class Dispute {
        amountDisputed: string;
        amountWon: string;
        caseNumber: string;
        createdAt: Date;
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
            createdAt: Date;
            id: string;
            orderId: string;
            paymentInstrumentSubtype: string;
            purchaseOrderNumber: string;
        };
        updatedAt: Date;
    }

    export type DisputeStatus = 'Accepted' | 'Disputed' | 'Expired' | 'Open' | 'Lost' | 'Won';

    export interface DisputeStatusHistory {
        disbursementDate: Date;
        effectiveDate: Date;
        status: DisputeStatus;
        timestamp: Date;
    }

    export interface Evidence {
        comment?: string;
        createdAt: Date;
        id: string;
        sendToProcessorAt: Date;
        url?: string;
    }

    /**
     * Merchant Account
     */

    export class MerchantAccount {
        business?: MerchantBusinessResponse;
        currencyIsoCode: string;
        default: boolean;
        funding: MerchantFunding;
        id: string;
        individual: MerchantIndividualResponse;
        masterMerchantAccount?: MerchantAccount;
        status: MerchantAccountStatus;
    }

    export interface MerchantAccountCreateRequest {
        business?: MerchantBusinessRequest;
        funding: MerchantFunding;
        id?: string;
        individual: MerchantIndividualRequest;
        masterMerchantAccountId: string;
        tosAccepted: boolean;
    }

    export interface MerchantAccountUpdateRequest {
        business?: MerchantBusinessRequest;
        funding: MerchantFunding;
        id: string;
        individual: MerchantIndividualRequest;
        masterMerchantAccountId: string;
    }

    export interface MerchantBusinessRequest {
        address?: MerchantAddressDetails;
        dbaName?: string;
        legalName?: string;
        taxId?: string;
    }

    export interface MerchantBusinessResponse {
        addressDetails?: MerchantAddressDetails;
        dbaName?: string;
        legalName?: string;
        taxId?: string;
    }

    export interface MerchantAddressDetails {
        locality: string;
        postalCode: string;
        region: string;
        streetAddress: string;
    }

    export interface MerchantFunding {
        accountNumber?: string;
        accountNumberLast4?: string;
        descriptor?: string;
        destination: string;
        email?: string;
        mobilePhone?: string;
        routingNumber?: string;
    }

    export interface MerchantIndividualRequest {
        address: MerchantAddressDetails;
        dateOfBirth: string;
        email: string;
        firstName: string;
        lastName: string;
        phone?: string;
        ssn?: string;
        ssnLast4?: string;
    }

    export interface MerchantIndividualResponse {
        addressDetails: MerchantAddressDetails;
        dateOfBirth: string;
        email: string;
        firstName: string;
        lastName: string;
        phone?: string;
        ssn?: string;
        ssnLast4?: string;
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
        state?: string;
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
        billingAddress?: {
            company?: string;
            countryCodeAlpha2?: string;
            countryCodeAlpha3?: string;
            countryCodeNumeric?: string;
            countryName?: string;
            extendedAddress?: string;
            firstName?: string;
            lastName?: string;
            locality?: string;
            postalCode?: string;
            region?: string;
            streetAddress?: string;
        };
        billingAddressId?: string;
        cardholderName?: string;
        customerId: string;
        cvv?: string;
        deviceData?: string;
        expirationDate?: string;
        expirationMonth?: string;
        expirationYear?: string;
        number?: string;
        options?: {
            failOnDuplicatePaymentMethod?: boolean;
            makeDefault?: boolean;
            verificationAmount?: string;
            verificationMerchantAccountId?: string;
            verifyCard?: boolean;
        };
        paymentMethodNonce: string;
    }

    export interface PaymentMethodUpdateRequest {
        billingAddress?: {
            company?: string;
            countryCodeAlpha2?: string;
            countryCodeAlpha3?: string;
            countryCodeNumeric?: string;
            countryName?: string;
            extendedAddress?: string;
            firstName?: string;
            lastName?: string;
            locality?: string;
            postalCode?: string;
            region?: string;
            streetAddress?: string;
            options?: {
                updateExisting?: boolean;
            };
        };
        billingAddressId?: string;
        cardholderName?: string;
        cvv?: string;
        deviceData?: string;
        expirationDate?: string;
        expirationMonth?: string;
        expirationYear?: string;
        number?: string;
        options?: {
            makeDefault?: boolean;
            verificationAcmount?: string;
            verificationMerchantAccountId?: string;
            verifyCard?: boolean;
        };
        paymentMethodNonce?: string;
    }

    /**
     * Payment Method Nonce
     */

    export class PaymentMethodNonce {
        binData?: BinData;
        default?: boolean;
        details?: NonceDetails;
        nonce: string;
        threeDSecureInfo?: TransactionThreeDSecureInfo;
        type?: PaymentMethodType;
    }

    export interface BinData {
        commercial?: Commercial;
        countryOfIssuance?: string;
        debit?: Debit;
        durbinRegulated?: DurbinRegulated;
        healthcare?: HealthCare;
        issuingBank?: string;
        payroll?: Payroll;
        prepaid?: Prepaid;
        productId?: string;
    }

    export interface NonceDetails {
        bin?: string;
        cardType?: string;
        lastTwo?: string;
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

    export type WebhookNotification =
        | TransactionNotification
        | SubMerchantAccountApprovedNotification
        | SubMerchantAccountDeclinedNotification
        | SubscriptionNotification
        | DisputeNotification
        | AccountUpdaterNotification
        | PaymentMethodNotification;

    export type AccountUpdaterNotificationKind =
        | 'account_updater_daily_report';

    export type DisputeNotificationKind =
        | 'dispute_opened'
        | 'dispute_lost'
        | 'dispute_won';

    export type SubscriptionNotificationKind =
        | 'subscription_canceled'
        | 'subscription_charged_successfully'
        | 'subscription_charged_unsuccessfully'
        | 'subscription_expired'
        | 'subscription_trial_ended'
        | 'subscription_went_active'
        | 'subscription_went_past_due';

    export type SubMerchantAccountApprovedNotificationKind =
        | 'sub_merchant_account_approved';

    export type SubMerchantAccountDeclinedNotificationKind =
        | 'sub_merchant_account_declined';

    export type TransactionNotificationKind =
        | 'transaction_disbursed'
        | 'transaction_settled'
        | 'transaction_settlement_declined';

    export type PaymentMethodNotificationKind =
        | 'payment_method_revoked_by_customer';

    export type WebhookNotificationKind =
        | AccountUpdaterNotificationKind
        | DisputeNotificationKind
        | SubscriptionNotificationKind
        | SubMerchantAccountApprovedNotificationKind
        | SubMerchantAccountDeclinedNotificationKind
        | TransactionNotificationKind
        | PaymentMethodNotificationKind
        | 'check'
        | 'connected_merchant_paypal_status_changed'
        | 'connected_merchant_status_transitioned'
        | 'disbursement'
        | 'disbursement_exception'
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
        addOns?: AddOn[];
        billingDayOfMonth: number;
        billingFrequency: number;
        createdAt: Date;
        currencyIsoCode: string;
        description?: string;
        discounts?: Discount[];
        id: string;
        name: string;
        numberOfBillingCycles: number;
        price: string;
        trialDuration?: number;
        trialDurationUnit?: string;
        trialPeriod?: boolean;
        updatedAt: Date;
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
        addOns?: AddOn[];
        balance: string;
        billingDayOfMonth?: number;
        billingPeriodEndDate: Date;
        billingPeriodStartDate: Date;
        createdAt: Date;
        currentBillingCycle: number;
        daysPastDue?: number;
        descriptor?: Descriptor;
        discounts?: Discount[];
        failureCount?: number;
        firstBillingDate?: Date;
        id: string;
        merchantAccountId: string;
        neverExpires?: boolean;
        nextBillAmount: string;
        nextBillingDate: string;
        nextBillingPeriodAmount: string;
        numberOfBillingCycles?: number;
        paidThroughDate: Date;
        paymentMethodToken: string;
        planId: string;
        price?: string;
        status: SubscriptionStatus;
        statusHistory?: SubscriptionHistory[];
        transactions?: Transaction[];
        trialDuration?: number;
        trialDurationUnit?: string;
        trialPeriod?: boolean;
        updatedAt: Date;
    }

    export interface SubscriptionRequest {
        addOns?: {
            add?: AddOnAddRequest[];
            remove?: string[];
            update?: AddOnUpdateRequest[];
        };
        billingDayOfMonth?: number;
        descriptor?: Descriptor;
        discounts?: {
            add?: DiscountAddRequest[];
            remove?: string[];
            update?: DiscountUpdateRequest[];
        };
        firstBillingDate?: Date;
        id?: string;
        merchantAccountId?: string;
        neverExpires?: boolean;
        numberOfBillingCycles?: number;
        options?: {
            doNotInheritAddOnsOrDiscounts?: boolean;
            paypal?: {
                description?: string;
            };
            startImmediately?: boolean;
        };
        paymentMethodNonce?: string;
        paymentMethodToken: string;
        planId: string;
        price?: string;
        trialDuration?: number;
        trialDurationUnit?: string;
        trialPeriod?: boolean;
    }

    export interface SubscriptionHistory {
        balance: string;
        price: string;
        status: SubscriptionStatus;
        subscriptionSource: SubscriptionSource;
    }

    export type SubscriptionStatus = 'Active' | 'Canceled' | 'Expired' | 'PastDue' | 'Pending';

    export type SubscriptionSource = 'api' | 'control_panel' | 'recurring';

    /**
     * Transaction
     */

    export class Transaction {
        addOns?: AddOn[];
        additionalProccessorResponse: string;
        amount: string;
        androidPayCard?: {
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
        };
        applePayCard?: {
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
        };
        authorizationAdjustments?: AuthorizationAdjustment[];
        authorizationExpiresAt?: Date;
        avsErrorResponseCode: string;
        avsPostalCodeResponseCode: string;
        avsStreetAddressResponseCode: string;
        billing?: {
            company?: string;
            countryCodeAlpha2?: string;
            countryCodeAlpha3?: string;
            countryCodeNumeric?: string;
            countryName?: string;
            extendedAddress?: string;
            firstName?: string;
            id?: string;
            lastName?: string;
            locality?: string;
            postalCode?: string;
            region?: string;
            streetAddress?: string;
        };
        channel?: string;
        createdAt: Date;
        creditCard?: {
            bin: string;
            cardholderName?: string;
            cardType: string;
            commercial: Commercial;
            countryOfIssuance: string;
            customerLocation: CustomerLocation;
            debit: string;
            durbinRegulated: DurbinRegulated;
            expirationDate?: string;
            expirationMonth?: string;
            expirationYear?: string;
            healthcare: HealthCare;
            imageUrl?: string;
            issuingBank: string;
            last4: string;
            maskedNumber?: string;
            payroll: Payroll;
            prepaid: Prepaid;
            productId: string;
            token: string;
            uniqueNumberIdentifier: string;
        };
        currencyIsoCode: string;
        customer: {
            company?: string;
            customFields?: any;
            email?: string;
            fax?: string;
            firstName?: string;
            id: string;
            lastName?: string;
            phone?: string;
            website?: string;
        };
        customFields?: Record<string, any>;
        cvvResponseCode: string;
        descriptor?: Descriptor;
        disbursementDetails?: DisbursementDetails;
        discountAmount?: string;
        discounts?: Discount[];
        disputes?: Dispute[];
        escrowStatus?: EscrowStatus;
        facilitatedDetails?: FacilitatedDetails;
        facilitatorDetails?: FacilitatorDetails;
        gatewayRejectionReason?: GatewayRejectionReason;
        id: string;
        lineItems?: TransactionLineItem[];
        masterpassCardDetails?: {
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
        };
        merchantAccountId?: string;
        networkTransactionId?: string;
        orderId?: string;
        paymentInstrumentType: PaymentInstrumentType;
        paypalAccount?: {
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
        };
        planId?: string;
        processorAuthorizationCode: string;
        processorResponseCode: string;
        processorResponseText: string;
        processorResponseType: TransactionProcessorResponseType;
        processorSettlementResponseCode: string;
        processorSettlementResponseText: string;
        purchaseOrderNumber?: string;
        recurring?: boolean; // Deprecated
        refundIds?: string[];
        refundedTransactionId?: string;
        riskData?: TransactionRiskData;
        samsungPayCardDetails?: {
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
        };
        serviceFeeAmount?: string;
        settlementBatchId?: string;
        shipping?: {
            company?: string;
            countryCodeAlpha2?: string;
            countryCodeAlpha3?: string;
            countryCodeNumeric?: string;
            countryName?: string;
            extendedAddress?: string;
            firstName?: string;
            id?: string;
            lastName?: string;
            locality?: string;
            postalCode?: string;
            region?: string;
            streetAddress?: string;
        };
        shippingAmount?: string;
        shipsFromPostalCode?: string;
        status: TransactionStatus;
        statusHistory?: TransactionStatusHistory[];
        subscription?: {
            billingPeriodEndDate: Date;
            billingPeriodStartDate: Date;
        };
        subscriptionId?: string;
        taxAmount?: string;
        taxExempt?: boolean;
        threeDSecureInfo?: TransactionThreeDSecureInfo;
        type: string;
        updatedAt: Date;
        venmoAccount?: {
            imageUrl: string;
            sourceDescription: string;
            token: string;
            username: string;
            venmoUserId: string;
        };
        visaCheckoutCardDetails?: {
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
        };
        voiceReferralNumber?: string;
    }

    interface ClientToken {
        clientToken: string;
    }

    export interface TransactionRequest {
        amount: string;
        billing?: {
            company?: string;
            countryName?: string;
            extendedAddress?: string;
            firstName?: string;
            lastName?: string;
            locality?: string;
            postalCode?: string;
            region?: string;
            streetAddress?: string;
            countryCodeAlpha2?: string;
            countryCodeAlpha3?: string;
            countryCodeNumeric?: string;
        };
        billingAddressId?: string;
        channel?: string;
        creditCard?: {
            cardholderName?: string;
            cvv?: string;
            expirationDate?: string;
            expirationMonth?: string;
            expirationYear?: string;
            number?: string;
            token?: string;
        };
        customer?: {
            company?: string;
            customFields?: any;
            email?: string;
            fax?: string;
            firstName?: string;
            id?: string;
            lastName?: string;
            phone?: string;
            website?: string;
        };
        customerId?: string;
        customFields?: Record<string, any>;
        descriptor?: Descriptor;
        deviceData?: string;
        deviceSessionId?: string;
        discountAmount?: string;
        externalVault?: {
            previousNetworkTransactionId?: string;
            status?: string;
        };
        lineItems?: TransactionLineItem[];
        merchantAccountId?: string;
        options?: {
            addBillingAddressToPaymentMethod?: boolean;
            holdInEscrow?: boolean;
            paypal?: {
                customField?: string;
                description?: string;
            };
            skipAdvancedFraudChecking?: boolean;
            skipAvs?: boolean;
            skipCvv?: boolean;
            storeInVault?: boolean;
            storeInVaultOnSuccess?: boolean;
            storeShippingAddressInVault?: boolean;
            submitForSettlement?: boolean;
            threeDSecure?: {
                required?: boolean;
            };
            venmo?: {
                profileId?: string;
            };
        };
        orderId?: string;
        paymentMethodNonce?: string;
        paymentMethodToken?: string;
        purchaseOrderNumber?: string;
        recurring?: boolean; // Deprecated
        riskData?: CustomerRiskData;
        serviceFeeAmount?: string;
        sharedBillingAddressId?: string;
        sharedCustomerId?: string;
        sharedPaymentMethodNonce?: string;
        sharedPaymentMethodToken?: string;
        sharedShippingAddressId?: string;
        shipping?: {
            company?: string;
            countryCodeAlpha2?: string;
            countryCodeAlpha3?: string;
            countryCodeNumeric?: string;
            countryName?: string;
            extendedAddress?: string;
            firstName?: string;
            lastName?: string;
            locality?: string;
            postalCode?: string;
            region?: string;
            streetAddress?: string;
        };
        shippingAddressId?: string;
        shippingAmount?: string;
        shipsFromPostalCode?: string;
        taxAmount?: string;
        taxExempt?: boolean;
        threeDSecurePassThru?: {
            cavv?: string;
            eciFlag: string;
            threeDSecureVision?: string;
            xid?: string;
        };
        transactionSource?: TransactionRequestSource;
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

    export enum TransactionRequestSource {
        recurring = 'recurring',
        unscheduled = 'unscheduled',
        recurring_first = 'recurring_first',
        moto = 'moto',
    }

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
        commodityCode?: string;
        description?: string;
        discountAmount?: string;
        kind: string;
        name: string;
        productCode?: string;
        quantity: string;
        taxAmount?: string;
        totalAmount: string;
        unitAmount: string;
        unitOfMeasure?: string;
        unitTaxAmount?: string;
        url?: string;
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
        createdAt: Date;
        customerId: string;
        default: boolean;
        expirationMonth: string;
        expirationYear: string;
        googleTransactionId: string;
        imageUrl: string;
        sourceCardLast4: string;
        sourceCardType: string;
        sourceDescription: string;
        subscriptions?: Subscription[];
        token: string;
        updatedAt: Date;
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
        createdAt: Date;
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
        subscriptions?: Subscription[];
        updatedAt: Date;
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
        createdAt: Date;
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
        subscriptions?: Subscription[];
        uniqueNumberIdentifier: string;
        updatedAt: Date;
    }

    /**
     * PayPal Account
     */

    export class PayPalAccount {
        imageUrl: string;
        payerId: string;
        token: string;
        billingAgreementId: string;
        createdAt: Date;
        customerId: string;
        default: boolean;
        email: string;
        revokedAt: string;
        subscriptions?: Subscription[];
        updatedAt: Date;
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
        createdAt: Date;
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
        subscriptions?: Subscription[];
        token: string;
        uniqueNumberIdentifier: string;
        updatedAt: Date;
    }

    /**
     * Venmo Account
     */

    export class VenmoAccount {
        createdAt: Date;
        customerId: string;
        default: boolean;
        imageUrl: string;
        sourceDescription: string;
        subscriptions?: Subscription[];
        token: string;
        username: string;
        updatedAt: Date;
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
        createdAt: Date;
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
        subscriptions?: Subscription[];
        token: string;
        uniqueNumberIdentifier: string;
        updatedAt: Date;
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
    export interface DownForMaintenanceError extends Error {}
    export interface InvalidChallengeError extends Error {}
    export interface InvalidKeysError extends Error {}
    export interface InvalidSignatureError extends Error {}
    export interface InvalidTransparentRedirectHashError extends Error {}
    export interface NotFoundError extends Error {}
    export interface ServerError extends Error {}
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
