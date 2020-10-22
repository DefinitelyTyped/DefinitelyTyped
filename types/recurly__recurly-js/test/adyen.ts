export default function adyen() {
  const adyen = window.recurly.Adyen();

  // $ExpectError
  adyen.on('fake-event', () => {});
  adyen.on('token', () => {});
  adyen.start({ invoiceUuid: 'invoice-uuid' });
  adyen.start({
    invoiceUuid: 'invoice-uuid',
    skinCode: 'skin-code',
    countryCode: 'PL',
    shopperLocale: 'en_PL'
  });

  // $ExpectError
  adyen.start();
}
