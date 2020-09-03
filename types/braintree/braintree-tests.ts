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
    MerchantAccountCreateRequest, Plan,
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
    const transactionRequest = {
        amount: '128.00',
    };
    const response = await gateway.transaction.sale(transactionRequest).catch(console.error);
    if (!response) return;
    const { amount, billing, id }: Transaction = response.transaction;

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
})();

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
            destination: 'Bank',
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
