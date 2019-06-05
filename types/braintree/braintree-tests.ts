import braintree = require('braintree');
import { BraintreeGateway, Address, AddressCreateRequest,
    CreditCard, Customer, PayPalAccount, ApplePayCard, AndroidPayCard,
    VisaCheckoutCard, SamsungPayCard, MasterpassCard, PaymentMethod, Transaction
} from 'braintree';

/**
 * Gateway
 */
const gateway: BraintreeGateway = new braintree.BraintreeGateway({
    environment: 'Sandbox',
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
    const response = await gateway.address.create(addressRequest);
    const { id, customerId }: Address = response.address;
})();

(async () => {
    const creditCardRequest = {
        cardholderName: 'Johnny Dogood',
        cvv: '123',
    };
    const response = await gateway.creditCard.update('abcdef', creditCardRequest);
    const { bin, maskedNumber, last4 }: CreditCard = response.creditCard;
})();

(async () => {
    const response: Customer = await gateway.customer.find('abcdef');
    const { id, paymentMethods } = response;
})();

(async () => {
    const paymentMethodRequest = {
        customerId: '123456',
        paymentMethodNonce: 'i-am-a-nonce',
    };
    const response = await gateway.paymentMethod.create(paymentMethodRequest);
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
    const transactionRequest = {
        amount: '128.00',
    };
    const response = await gateway.transaction.sale(transactionRequest);
    const { amount, billing, id }: Transaction = response.transaction;

    // Cannot assign to var
    await gateway.transaction.cloneTransaction(id, { amount: '100.00' , options: {submitForSettlement: true }});

    const transactions: Transaction[] = await gateway.transaction.search(() => {
        return;
    });
})();
