import braintree = require('braintree');
import {
    BraintreeGateway,
    Address,
    AddressCreateRequest,
    CreditCard,
    Customer,
    PayPalAccount,
    ApplePayCard,
    AndroidPayCard,
    VisaCheckoutCard,
    SamsungPayCard,
    MasterpassCard,
    PaymentMethod,
    PaymentMethodNonce,
    Transaction,
    WebhookNotificationKind,
    MerchantAccountCreateRequest,
    Plan,
} from 'braintree';

/**
 * Gateway
 */
const gateway: BraintreeGateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: 'abc123',
    publicKey: 'def456',
    privateKey: 'xyz789',
});

/**
 * Request / Response
 */
(async () => {
    const addressRequest: AddressCreateRequest = {
        customerId: '123456',
        streetAddress: '222 Oak Street',
    };
    const response = await gateway.address.create(addressRequest).catch(console.error);
    if (!response) return;
    const { id, customerId }: Address = response.address;
})();

(async () => {
    const creditCardRequest = {
        cardholderName: 'Johnny Dogood',
        cvv: '123',
    };
    const response = await gateway.creditCard.update('abcdef', creditCardRequest).catch(console.error);
    if (!response) return;
    const { bin, maskedNumber, last4 }: CreditCard = response.creditCard;
})();

(async () => {
    const response = await gateway.customer.find('abcdef').catch(console.error);
    if (!response) return;
    const { id, paymentMethods }: Customer = response;
})();

(async () => {
    const paymentMethodRequest = {
        customerId: '123456',
        paymentMethodNonce: 'i-am-a-nonce',
    };
    const response = await gateway.paymentMethod.create(paymentMethodRequest).catch(console.error);
    if (!response) return;
    const { token }: PaymentMethod = response.paymentMethod;
    const applePayCard = <ApplePayCard> response.paymentMethod;
    const paypalAccount = <PayPalAccount> response.paymentMethod;
    const androidPayCard = <AndroidPayCard> response.paymentMethod;
    const creditCard = <CreditCard> response.paymentMethod;
    const venmoAccount = <braintree.VenmoAccount> response.paymentMethod;
    const visaCheckoutCard = <VisaCheckoutCard> response.paymentMethod;
    const samsungPayCard = <SamsungPayCard> response.paymentMethod;
    const masterpassCard = <MasterpassCard> response.paymentMethod;
})();

(async () => {
    const response = await gateway.paymentMethodNonce.create('token').catch(console.error);
    if (!response) return;
    const nonce: PaymentMethodNonce = response.paymentMethodNonce;
})();

(async () => {
    const transactionRequest: braintree.TransactionRequest = {
        amount: '128.00',
    };
    const response = await gateway.transaction.sale(transactionRequest).catch(console.error);
    if (!response) return;
    const { amount, billing, escrowStatus, gatewayRejectionReason, type, status, id }: Transaction = response.transaction;

    // Assert overlap between transaction type and static field
    type === Transaction.Type.Credit;
    type === Transaction.Type.Sale;

    // Assert overlap between transaction status and static field
    status === Transaction.Status.AuthorizationExpired;
    status === Transaction.Status.Authorized;
    status === Transaction.Status.Authorizing;
    status === Transaction.Status.Failed;
    status === Transaction.Status.GatewayRejected;
    status === Transaction.Status.ProcessorDeclined;
    status === Transaction.Status.Settled;
    status === Transaction.Status.SettlementConfirmed;
    status === Transaction.Status.SettlementDeclined;
    status === Transaction.Status.SettlementPending;
    status === Transaction.Status.Settling;
    status === Transaction.Status.SubmittedForSettlement;
    status === Transaction.Status.Voided;

    // Assert overlap between gateway rejection reason and static field
    gatewayRejectionReason === Transaction.GatewayRejectionReason.ApplicationIncomplete;
    gatewayRejectionReason === Transaction.GatewayRejectionReason.Avs;
    gatewayRejectionReason === Transaction.GatewayRejectionReason.Cvv;
    gatewayRejectionReason === Transaction.GatewayRejectionReason.AvsAndCvv;
    gatewayRejectionReason === Transaction.GatewayRejectionReason.Duplicate;
    gatewayRejectionReason === Transaction.GatewayRejectionReason.Fraud;
    gatewayRejectionReason === Transaction.GatewayRejectionReason.RiskThreshold;
    gatewayRejectionReason === Transaction.GatewayRejectionReason.ThreeDSecure;
    gatewayRejectionReason === Transaction.GatewayRejectionReason.TokenIssuance;

    // Assert overlap between escrow status and static field
    escrowStatus === Transaction.EscrowStatus.HoldPending;
    escrowStatus === Transaction.EscrowStatus.Held;
    escrowStatus === Transaction.EscrowStatus.ReleasePending;
    escrowStatus === Transaction.EscrowStatus.Released;
    escrowStatus === Transaction.EscrowStatus.Refunded;

    // Cannot assign to var
    await gateway.transaction
        .cloneTransaction(id, { amount: '100.00', options: { submitForSettlement: true } })
        .catch(console.error);

    const transactions: Transaction[] = [];
    gateway.transaction.search(() => true).on('data', transactions.push);
})();

// Plan Gateway
(async () => {
    // $ExpectType { plans: Plan[]; }
    await gateway.plan.all();
})();

// Subscription
(async () => {
    // $ExpectType ValidatedResponse<Subscription>
    const result = await gateway.subscription.create({
        paymentMethodToken: 'token',
        planId: 'planId'
    });

    const { subscription } = result;

    // $ExpectType string
    subscription.nextBillingDate;

    // Assert overlap between subscription status and static field
    subscription.status === braintree.Subscription.Status.Active;
    subscription.status === braintree.Subscription.Status.Canceled;
    subscription.status === braintree.Subscription.Status.Expired;
    subscription.status === braintree.Subscription.Status.PastDue;
    subscription.status === braintree.Subscription.Status.Pending;
})();

// $ExpectType () => string[]
braintree.Subscription.Status.All;

(async () => {
    const kind: WebhookNotificationKind = 'subscription_canceled';
    const subscriptionId = '123456';

    const sampleResponse = await gateway.webhookTesting.sampleNotification(kind, subscriptionId).catch(console.error);
    if (!sampleResponse) return;

    const notification = await gateway.webhookNotification.parse(sampleResponse.bt_signature, sampleResponse.bt_payload).catch(console.error);
    if (!notification) return;

    // this should cause the type of `notification` to be narrowed to `SubscriptionNotification`
    if (notification.kind !== kind) return;

    const subscription = notification.subscription;
})();

(async () => {
    const kind: WebhookNotificationKind = 'payment_method_revoked_by_customer';
    const subscriptionId = '123456';

    const sampleResponse = await gateway.webhookTesting.sampleNotification(kind, subscriptionId).catch(console.error);
    if (!sampleResponse) return;

    const notification = await gateway.webhookNotification.parse(sampleResponse.bt_signature, sampleResponse.bt_payload).catch(console.error);
    if (!notification) return;

    // this should cause the type of `notification` to be narrowed to `PaymentMethodNotification`
    if (notification.kind !== kind) return;

    const metadata = notification.revokedPaymentMethodMetadata;
    if (!metadata.revokedPaymentMethod) return;
})();

(async () => {
    const kind: WebhookNotificationKind = 'account_updater_daily_report';
    const subscriptionId = '123456';

    const sampleResponse = await gateway.webhookTesting.sampleNotification(kind, subscriptionId).catch(console.error);
    if (!sampleResponse) return;

    const notification = await gateway.webhookNotification.parse(sampleResponse.bt_signature, sampleResponse.bt_payload).catch(console.error);
    if (!notification) return;

    // this should cause the type of `notification` to be narrowed to `AccountUpdaterNotification`
    if (notification.kind !== kind) return;

    const reportUrl = notification.accountUpdaterDailyReport.reportUrl;
    if (!reportUrl) return;
})();

/**
 * Gateway function helper
 */
const gateway2: BraintreeGateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: 'abc123',
    publicKey: 'def456',
    privateKey: 'xyz789',
});

(async () => {
    const merchantAccount: MerchantAccountCreateRequest = {
        individual: {
            address: {
                locality: 'New York',
                postalCode: '10001',
                region: 'New York',
                streetAddress: '222 Oak Street'
            },
            dateOfBirth: '20200214',
            email: 'merchant@example.com',
            firstName: 'Jane',
            lastName: 'Doe'
        },
        funding: {
            destination: braintree.MerchantAccount.FundingDestination.Bank, // <-- Test example present in https://developers.braintreepayments.com/guides/braintree-marketplace/onboarding/node
            accountNumber: '123456789',
            routingNumber: '021000021'
        },
        masterMerchantAccountId: 'master_merchant',
        tosAccepted: true
    };
    const response = await gateway2.merchantAccount.create(merchantAccount);
    if (!response) return;
    const id = response.merchantAccount.masterMerchantAccount?.id;
})();

/**
 * Disbursement webhook kind
 */
(async () => {
    const notification = await gateway.webhookTesting.sampleNotification('disbursement', 'disbursementId');
    const result = await gateway.webhookNotification.parse((notification).bt_signature, notification.bt_payload);

    if (result.kind === 'disbursement') {
        const id = result.disbursement.id;
        const amount = result.disbursement.amount;
        const disbursementDate = result.disbursement.disbursementDate;
        const disbursementType = result.disbursement.disbursementType;
        const transactionIds = result.disbursement.transactionIds;
        const merchantAccount = result.disbursement.merchantAccount;
        const retry = result.disbursement.retry;
        const success = result.disbursement.success;
        const exceptionMessage = result.disbursement.exceptionMessage;
        const followUpAction = result.disbursement.followUpAction;

        // Assert overlap between disbursement type and static field
        disbursementType === braintree.Disbursement.Types.Credit;
        disbursementType === braintree.Disbursement.Types.Debit;
    }
})();

// $ExpectType "bank"
braintree.MerchantAccount.FundingDestination.Bank;

// $ExpectType "email"
braintree.MerchantAccount.FundingDestination.Email;

// $ExpectType "mobile_phone"
braintree.MerchantAccount.FundingDestination.MobilePhone;
