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
    .then(({ response }) => {
        response.id, response.create_time, response.intent, response.state;
    })
    .catch(error => {});
