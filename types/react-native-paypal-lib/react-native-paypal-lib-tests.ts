import RNPaypal from 'react-native-paypal-lib';

RNPaypal.paymentRequest({
    clientId: 'sandbox_client_id',
    acceptCreditCards: false,
    currency: 'BRL',
    description: 'Payment Description',
    environment: RNPaypal.ENVIRONMENT.SANDBOX,
    intent: RNPaypal.INTENT.SALE,
    price: 100,
})
    .then(response => { })
    .catch(error => { });
