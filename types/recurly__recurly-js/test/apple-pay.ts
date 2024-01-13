import {
  ApplePayPaymentRequest,
  ApplePayLineItem,
  ApplePayPaymentMethodSelectedEvent,
  ApplePaySelectionUpdate,
} from '@recurly/recurly-js';

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
function getTaxes ({ paymentMethod: { billingContact } }: ApplePayPaymentMethodSelectedEvent): ApplePaySelectionUpdate | void {
  if (billingContact?.postalCode === '12345') {
    return { newLineItems: [{ label: 'Tax', amount: '1.00' }] };
  }
}

export default function applePay () {
  window.recurly.ApplePay({
    country: 'US',
    currency: 'USD',
    label: 'My Subscription',
    total: '29.00',
    pricing: window.recurly.Pricing.Checkout()
  });

  const total: ApplePayLineItem = {
    label: 'My Subscription',
    paymentTiming: 'recurring',
    amount: '29.00',
    recurringPaymentIntervalUnit: 'month',
    recurringPaymentIntervalCount: 1,
    recurringPaymentStartDate: new Date(),
  };

  const paymentRequest: ApplePayPaymentRequest = {
    total,
    lineItems: [{ label: 'Subtotal', amount: '1.00' }],
    requiredShippingContactFields: ['email', 'phone'],
    billingContact: {
      givenName: 'Emmet',
      familyName: 'Brown',
      addressLines: ['1640 Riverside Drive', 'Suite 1'],
      locality: 'Hill Valley',
      administrativeArea: 'CA',
      postalCode: '91103',
      countryCode: 'US'
    },
    shippingContact: {
      phoneNumber: '1231231234',
      emailAddress: 'ebrown@example.com'
    },
    recurringPaymentRequest: {
      paymentDescription: 'A recurring subscription',
      regularBilling: total,
      billingAgreement: 'Will recur forever',
    },
  };

  const applePay = window.recurly.ApplePay({
    country: 'US',
    currency: 'USD',
    callbacks: {
      onPaymentMethodSelected: getTaxes,
    },
    paymentRequest,
  });

  applePay.ready(() => {});
  // @ts-expect-error
  applePay.ready(arg => ({ arg }));

  applePay.begin(() => {});
  // @ts-expect-error
  applePay.begin(arg => ({ arg }));

  applePay.on('error', () => {});
  applePay.on('token', () => {});
  // @ts-expect-error
  applePay.on('fake-event', () => {});
}
