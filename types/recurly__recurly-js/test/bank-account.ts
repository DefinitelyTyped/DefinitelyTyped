import { TokenHandler, BacsBillingInfo, BecsBillingInfo } from '@recurly/recurly-js';

export default function bankAccount() {
  const handleToken: TokenHandler = (err, token) => {
    if (err) {
      err.message;
      err.code;
    } else {
      token.id;
      token.type;
    }
  };

  const formEl = document.querySelector('form');

  if (formEl) {
    window.recurly.bankAccount.token(formEl, handleToken);
  }

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

  window.recurly.bankAccount.token(billingInfo, handleToken);

  const div = document.querySelector('div');

  if (div) {
    // $ExpectError
    window.recurly.bankAccount.token(document.querySelector('div'), handleToken);
  }

  // $ExpectError
  window.recurly.bankAccount.token('selector', handleToken);

  const minimalBacsBillingInfo: BacsBillingInfo = {
    type: 'bacs',
    account_number: '1234',
    account_number_confirmation: '1234',
    sort_code: '1234',
    name_on_account: '1234'
  };

  window.recurly.bankAccount.token(minimalBacsBillingInfo, handleToken);

  const minimalBecsBillingInfo: BecsBillingInfo = {
    type: 'becs',
    account_number: '1234',
    account_number_confirmation: '1234',
    branch_code: '1234',
    name_on_account: '1234',
  };

  window.recurly.bankAccount.token(minimalBecsBillingInfo, handleToken);

  // $ExpectError
  const missingNameOnAccountBacsBillingInfo: BacsBillingInfo = {
    type: 'bacs',
    account_number: '1234',
    account_number_confirmation: '1234',
    sort_code: '1234',
  };

  const wrongTypeOnAccountBacsBillingInfo: BacsBillingInfo = {
    // $ExpectError
    type: 'becs',
    account_number: '1234',
    account_number_confirmation: '1234',
    sort_code: '1234',
  };

  const addressBecsBillingInfo: BecsBillingInfo = {
    type: 'becs',
    name_on_account: '1234',
    account_number: '1234',
    account_number_confirmation: '1234',
    branch_code: '1234',
    address1: 'asdf',
    address2: 'asdf',
    city: 'asdf',
    state: 'asdf',
    postal_code: 'asdf',
    country: 'asdf',
    vat_number: 'asdf'
  };

  window.recurly.bankAccount.token(addressBecsBillingInfo, handleToken);

  const sepaBillingInfo = {
    iban: 'my-iban-number',
    name_on_account: 'name'
  };

  window.recurly.bankAccount.token(sepaBillingInfo, handleToken);
}
