import { PaymentData } from 'lib/google-pay/native';
import { PaymentAuthorizationResult } from 'lib/google-pay';

export default function googlePay() {
  const googlePaySimple = recurly.GooglePay({
    currency: 'USD',
    country: 'US',
    total: '1.00',
    googleMerchantId: 'RECURLY',
    googleBusinessName: 'RECURLY',
    gatewayCode: 'abc123',
    requireBillingAddress: true,
  });

  const googlePay = recurly.GooglePay({
    currency: 'USD',
    country: 'US',
    total: '1.00',
    requireBillingAddress: true,
    paymentDataRequest: {
      emailRequired: true,
      merchantInfo: {
        merchantId: 'RECURLY',
        merchantName: 'RECURLY',
      },
      transactionInfo: {
        displayItems: [
          { label: 'Subtotal', type: 'SUBTOTAL', price: '1.00' },
        ],
      }
    },
    buttonOptions: {
      buttonColor: 'black',
    },
    callbacks: {
      onPaymentAuthorized: (paymentData: PaymentData): Promise<PaymentAuthorizationResult> | void => {
        if (paymentData.email === 'test@example.com') {
          return Promise.reject({
            error: {
              intent: 'PAYMENT_AUTHORIZATION',
              message: 'Insufficient funds',
              reason: 'PAYMENT_DATA_INVALID'
            }
          });
        }
      },
    },
  });
}
