export default function alternativePaymentMethods () {
  const apm = window.recurly.AlternativePaymentMethods({
    allowedPaymentMethods: ['ideal', 'sofort', 'cashapp'],
    blockedPaymentMethods: ['bacs'],
    containerSelector: '#payment-methods',
    amount: 1000,
    currency: 'EUR',
    countryCode: 'NL',
    returnURL: 'https://example.com/return',
    adyen: {
      publicKey: 'public-key',
    },
  });

  apm.on('error', () => {});
  // @ts-expect-error
  apm.start({});
  apm.start().then(() => {});
  apm.submit({}).then(() => {});
  apm.handleAction({}).then(() => {});
}
