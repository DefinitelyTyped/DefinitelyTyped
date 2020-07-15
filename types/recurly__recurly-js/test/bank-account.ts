export default function bankAccount() {
  const formEl = document.querySelector('form');

  if (!formEl) return;

  window.recurly.bankAccount.token(formEl, (err, token) => {
    if (err) {
      err.message;
      err.code;
    } else {
      token.id;
      token.type;
    }
  });

  const billingInfo = {
    routing_number: '123456780',
    account_number: '111111111',
    account_number_confirmation: '111111111',
    account_type: 'checking',
    iban: '123',
    name_on_account: 'Pat Smith',
    address1: '123 Main St.',
    address2: 'Unit 1',
    city: 'Hope',
    state: 'WA',
    postal_code: '98552',
    country: 'US',
    vat_number: 'SE0000',
  };

  window.recurly.bankAccount.token(billingInfo, (err, token) => {
    if (err) {
      err.message;
      err.code;
    } else {
      token.id;
      token.type;
    }
  });

  // $ExpectError
  window.recurly.bankAccount.token(document.querySelector('div'), (err, token) => {
    if (err) {
      err.message;
      err.code;
    } else {
      token.id;
      token.type;
    }
  });

  // $ExpectError
  window.recurly.bankAccount.token('selector', (err, token) => {
    if (err) {
      err.message;
      err.code;
    } else {
      token.id;
      token.type;
    }
  });

  const minimalBacsBillingInfo = {
    type: 'bacs',
    account_number: "1234",
    account_number_confirmation: "1234",
    sort_code: "1234",
    name_on_account: "1234"
  };

  window.recurly.bankAccount.token(minimalBacsBillingInfo, (err, token) => {
    if (err) {
      err.message;
      err.code;
    } else {
      token.id;
      token.type;
    }
  });

  const missingNameOnAccountBacsBillingInfo = {
    type: 'bacs',
    account_number: "1234",
    account_number_confirmation: "1234",
    sort_code: "1234",
  };

  // $ExpectError
  window.recurly.bankAccount.token(missingNameOnAccountBacsBillingInfo, (err, token) => {
    if (err) {
      err.message;
      err.code;
    } else {
      token.id;
      token.type;
    }
  });
}
