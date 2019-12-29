import { ApplePay } from "braintree-web";
import * as braintree from "braintree-web";

let version: string = braintree.VERSION;

let clientToken: string = "eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiI0YjlhYzVmYmI4ZTNkYzQzMmFkZjJhNzBlNjZlMWNjY2M5ODRkYzE4ZTM4YmY4NjYzZTM5NjM3NWZjYmQzY2U5fGNyZWF0ZWRfYXQ9MjAxNi0wOS0wOFQwNTowMzo0MC4xNjk1NTUwMzUrMDAwMFx1MDAyNm1lcmNoYW50X2lkPTM0OHBrOWNnZjNiZ3l3MmJcdTAwMjZwdWJsaWNfa2V5PTJuMjQ3ZHY4OWJxOXZtcHIiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvMzQ4cGs5Y2dmM2JneXcyYi9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbXSwiZW52aXJvbm1lbnQiOiJzYW5kYm94IiwiY2xpZW50QXBpVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzLzM0OHBrOWNnZjNiZ3l3MmIvY2xpZW50X2FwaSIsImFzc2V0c1VybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXV0aFVybCI6Imh0dHBzOi8vYXV0aC52ZW5tby5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIiwiYW5hbHl0aWNzIjp7InVybCI6Imh0dHBzOi8vY2xpZW50LWFuYWx5dGljcy5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tLzM0OHBrOWNnZjNiZ3l3MmIifSwidGhyZWVEU2VjdXJlRW5hYmxlZCI6dHJ1ZSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImRpc3BsYXlOYW1lIjoiQWNtZSBXaWRnZXRzLCBMdGQuIChTYW5kYm94KSIsImNsaWVudElkIjpudWxsLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjp0cnVlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6ImFjbWV3aWRnZXRzbHRkc2FuZGJveCIsImN1cnJlbmN5SXNvQ29kZSI6IlVTRCJ9LCJjb2luYmFzZUVuYWJsZWQiOmZhbHNlLCJtZXJjaGFudElkIjoiMzQ4cGs5Y2dmM2JneXcyYiIsInZlbm1vIjoib2ZmIn0=";

braintree.client.create({
  authorization: clientToken
}, function (error: braintree.BraintreeError, clientInstance: braintree.Client) {

  var form: HTMLFormElement = document.getElementById('my-form-id') as HTMLFormElement;
  var data: { creditCard: braintree.CreditCardInfo } = {
    creditCard: {
      number: form['cc-number'].value,
      cvv: form['cc-cvv'].value,
      expirationDate: form['cc-date'].value,
      billingAddress: {
        postalCode: form['cc-postal'].value
      }
    }
  };

  braintree.threeDSecure
    .create({
      version: 2,
      client: clientInstance
    })
    .then((threeDSecureInstance) => {
      let testBin = '123456';
      threeDSecureInstance.prepareLookup({
        nonce: existingNonce,
        bin: testBin
      })
      .then(payload => {})
      .catch((err: braintree.BraintreeError) => {});
    });

  clientInstance.request({
    endpoint: 'payment_methods/credit_cards',
    method: 'post',
    data: data
  }, function (requestErr: braintree.BraintreeError, response: { creditCards: any[]; }) {
    if (requestErr) { throw new Error(requestErr.message); }

    console.log('Got nonce:', response.creditCards[0].nonce);
  });

  braintree.hostedFields.create({
    client: clientInstance,
    styles: {
      'input': {
        'font-size': '16pt',
        'color': '#3A3A3A'
      },

      '.number': {
        'font-family': 'monospace'
      },
      '.valid': {
        'color': 'green'
      }
    },
    fields: {
      number: {
        selector: '#card-number'
      },
      cvv: {
        selector: '#cvv',
        type: 'password'
      },
      expirationMonth: {
        selector: '#expiration-month',
        select: {
          options: ["01 - Jan", "02 - Feb", "03 - Mar", "04 - Apr", "05 - May", "06 - Jun", "07 - Jul", "08 - Aug", "09 - Sep", "10 - Oct", "11 - Nov", "12 - Dec"]
        }
      },
      expirationYear: {
        selector: '#expiration-year',
        select: true
      }
    }
  }, function (hostedFieldsErr?: braintree.BraintreeError, hostedFieldsInstance?: braintree.HostedFields) {

    if (hostedFieldsErr) {
      // Handle error in Hosted Fields creation
      console.log(`Error Code: ${error.code}, Type: ${error.type}, Message: ${error.message}, Details: ${error.details}`);
      return;
    }

    let form = new HTMLFormElement();

    form.addEventListener('submit', function (event: Event) {
      event.preventDefault();

      hostedFieldsInstance.tokenize(function (tokenizeErr: braintree.BraintreeError, payload: braintree.HostedFieldsTokenizePayload) {
        if (tokenizeErr) {
          // Handle error in Hosted Fields tokenization
          switch (tokenizeErr.code) {
            case 'HOSTED_FIELDS_FIELDS_EMPTY':
              console.error('All fields are empty! Please fill out the form.');
              break;
            case 'HOSTED_FIELDS_FIELDS_INVALID':
              console.error('Some fields are invalid:', tokenizeErr.details.invalidFieldKeys);
              break;
            case 'HOSTED_FIELDS_FAILED_TOKENIZATION':
              console.error('Tokenization failed server side. Is the card valid?');
              break;
            case 'HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR':
              console.error('Network error occurred when tokenizing.');
              break;
            default:
              console.error('Something bad happened!', tokenizeErr);
          }
          return;
        }

        // Put `payload.nonce` into the `payment-method-nonce` input, and then
        // submit the form. Alternatively, you could send the nonce to your server
        // with AJAX.
        (document.querySelector('input[name="payment-method-nonce"]') as HTMLInputElement).value = payload.nonce;
        form.submit();
      });
    }, false);

    hostedFieldsInstance.on('focus', function (event: braintree.HostedFieldsStateObject) {
      console.log(event.emittedBy, 'has been focused');
    });

    hostedFieldsInstance.teardown(function (teardownErr: braintree.BraintreeError) {
      if (teardownErr) {
        console.error('Could not tear down Hosted Fields!');
      } else {
        console.info('Hosted Fields has been torn down!');
      }
    });

    hostedFieldsInstance.tokenize({
      vault: true
    }, function (tokenizeErr: braintree.BraintreeError, payload: braintree.HostedFieldsTokenizePayload) {
      if (tokenizeErr) {
        console.error(tokenizeErr);
      } else {
        console.log('Got nonce:', payload.nonce);
      }
    });

    hostedFieldsInstance.addClass('number', 'custom-class', function (addClassErr: braintree.BraintreeError) {
      if (addClassErr) {
        console.error(addClassErr);
      }
    });

    hostedFieldsInstance.addClass('number', 'custom-class', function (addClassErr: braintree.BraintreeError) {
      if (addClassErr) {
        console.error(addClassErr);
        return;
      }

      // some time later...
      hostedFieldsInstance.removeClass('number', 'custom-class');
    });

    hostedFieldsInstance.setPlaceholder('number', '4111 1111 1111 1111', function (placeholderErr: braintree.BraintreeError) {
      if (placeholderErr) {
        console.error(placeholderErr);
      }
    });

    hostedFieldsInstance.on('cardTypeChange', function (event: braintree.HostedFieldsStateObject) {
      // Update the placeholder value if there is only one possible card type
      if (event.cards.length === 1) {
        braintree.hostedFields.setPlaceholder('cvv', event.cards[0].code.name, function (placeholderErr: braintree.BraintreeError) {
          if (placeholderErr) {
            // Handle errors, such as invalid field name
            console.error(placeholderErr);
          }
        });
      }
    });

    hostedFieldsInstance.clear('number', function (clearErr: braintree.BraintreeError) {
      if (clearErr) {
        console.error(clearErr);
      }
    });

    hostedFieldsInstance.clear('number');
    hostedFieldsInstance.clear('cvv');
    hostedFieldsInstance.clear('expirationDate');

    var state = braintree.hostedFields.getState();

    var formValid = Object.keys(state.fields).every(function (key) {
      return state.fields[key].isValid;
    });
  });

  braintree.applePay.create({ client: clientInstance }, function (createErr?: braintree.BraintreeError, applePayInstance?: ApplePay) {
    if (createErr) {
      // Handle error in client creation
      console.log(`Error Code: ${error.code}, Type: ${error.type}, Message: ${error.message}, Details: ${error.details}`);

      return;
    }

    let request = {
      countryCode: 'US',
      currencyCode: 'USD',
      supportedNetworks: ['visa', 'masterCard'],
      merchantCapabilities: ['supports3DS'],
      total: { label: 'Your Label', amount: '10.00' },
    };

    var paymentRequest = applePayInstance.createPaymentRequest(request);

    console.log(paymentRequest);
    // { total: { }, countryCode: 'US', currencyCode: 'USD', merchantCapabilities: [ ], supportedNetworks: [ ] }
  });

  braintree.applePay.create({ client: clientInstance }, function (createErr, applePayInstance) {
    let request = {
      countryCode: 'US',
      currencyCode: 'USD',
      supportedNetworks: ['visa', 'masterCard'],
      merchantCapabilities: ['supports3DS'],
      total: { label: 'Your Label', amount: '10.00' },
    };

    var session = new braintree.ApplePaySession(1, request);

    session.onvalidatemerchant = function (event: { validationURL: string }) {
      braintree.applePay.performValidation({
        validationURL: event.validationURL
      }, function (err, validationData) {
        if (err) {
          console.error(err);
          session.abort();
          return;
        }
        session.completeMerchantValidation(validationData);
      });
    };
  });

  braintree.applePay.create({ client: clientInstance }, function (createErr, applePayInstance) {
    let request = {
      countryCode: 'US',
      currencyCode: 'USD',
      supportedNetworks: ['visa', 'masterCard'],
      merchantCapabilities: ['supports3DS'],
      total: { label: 'Your Label', amount: '10.00' },
    };

    var session = new braintree.ApplePaySession(1, request);

    session.onpaymentauthorized = function (event) {
      braintree.applePay.tokenize({
        token: event.payment.token
      }, function (err, tokenizedPayload) {
        if (err) {
          session.completePayment(braintree.ApplePayStatusCodes.STATUS_FAILURE);
          return;
        }
        session.completePayment(braintree.ApplePayStatusCodes.STATUS_SUCCESS);

        // Send the tokenizedPayload to your server.
      });
    };
  });

  braintree.paypal.create({
    client: clientInstance
  }, function (createErr, paypalInstance) {
    if (createErr) {
      if (createErr.code === 'PAYPAL_BROWSER_NOT_SUPPORTED') {
        console.error('This browser is not supported.');
      } else {
        console.error('Error!', createErr);
      }
    }

    let button = new HTMLButtonElement();

    button.addEventListener('click', function () {
      // Disable the button so that we don't attempt to open multiple popups.
      button.setAttribute('disabled', 'disabled');

      // Because PayPal tokenization opens a popup, this must be called
      // as a result of a user action, such as a button click.
      paypalInstance.tokenize({
        flow: 'vault' // Required
        // Any other tokenization options
      }, function (tokenizeErr: braintree.BraintreeError, payload: braintree.PayPalTokenizePayload) {
        button.removeAttribute('disabled');

        if (tokenizeErr) {
          // Handle tokenization errors or premature flow closure

          switch (tokenizeErr.code) {
            case 'PAYPAL_POPUP_CLOSED':
              console.error('Customer closed PayPal popup.');
              break;
            case 'PAYPAL_ACCOUNT_TOKENIZATION_FAILED':
              console.error('PayPal tokenization failed. See details:', tokenizeErr.details);
              break;
            case 'PAYPAL_FLOW_FAILED':
              console.error('Unable to initialize PayPal flow. Are your options correct?', tokenizeErr.details);
              break;
            default:
              console.error('Error!', tokenizeErr);
          }
        } else {
          // Submit payload.nonce to your server
        }
      });
    });
  });

  braintree.unionpay.create({ client: clientInstance }, function (createErr, unionpayInstance) {
    if (createErr) {
      console.error(createErr);
      return;
    }

    unionpayInstance.fetchCapabilities({
      card: {
        number: '4111111111111111'
      }
    }, function (fetchErr: braintree.BraintreeError, cardCapabilities: braintree.UnionPayFetchCapabilitiesPayload) {
      if (fetchErr) {
        console.error(fetchErr);
        return;
      }

      if (cardCapabilities.isUnionPay) {
        if (cardCapabilities.unionPay && !cardCapabilities.unionPay.isSupported) {
          // Braintree cannot process this UnionPay card.
          // Ask the user for a different card.
          return;
        }

        if (cardCapabilities.isDebit) {
          // CVV and expiration date are not required
        } else {
          // CVV and expiration date are required
        }

        // Show mobile phone number field for enrollment
      }
    });

    unionpayInstance.enroll({
      card: {
        number: '4111111111111111',
        expirationMonth: '12',
        expirationYear: '2038'
      },
      mobile: {
        countryCode: '62',
        number: '111111111111'
      }
    }, function (enrollErr: braintree.BraintreeError, response: braintree.UnionPayEnrollPayload) {
      if (enrollErr) {
        console.error(enrollErr);
        return;
      }

      if (response.smsCodeRequired) {
        // If smsCodeRequired, wait for SMS auth code from customer
        // Then use response.enrollmentId during {@link UnionPay#tokenize}
      } else {
        // SMS code is not required from the user.
        // {@link UnionPay#tokenize} can be called immediately
      }
    });

    let enrollResponse: {
      enrollmentId: string
    };

    unionpayInstance.tokenize({
      card: {
        number: '4111111111111111',
        expirationMonth: '12',
        expirationYear: '2038',
        cvv: '123'
      },
      enrollmentId: enrollResponse.enrollmentId, // Returned from enroll
      smsCode: '11111' // Received by customer's phone, if SMS enrollment was required. Otherwise it should be omitted
    }, function (tokenizeErr: braintree.BraintreeError, response: braintree.UnionPayTokenizePayload) {
      if (tokenizeErr) {
        console.error(tokenizeErr);
        return;
      }

      // Send response.nonce to your server
    });

    unionpayInstance.teardown(function (teardownErr: braintree.BraintreeError) {
      if (teardownErr) {
        console.error('Could not tear down UnionPay.');
      } else {
        console.log('UnionPay has been torn down.');
      }
    });
  });
});

let existingNonce = "fake-valid-nonce";
let submitNonceToServer: (nonce: string) => void;

braintree.threeDSecure.verifyCard({
  nonce: existingNonce,
  amount: 123.45, // $ExpectType number
  addFrame: function (err, iframe) {
    // Set up your UI and add the iframe.
    let my3DSContainer = document.createElement('div');
    my3DSContainer.appendChild(iframe);
    document.body.appendChild(my3DSContainer);
  },
  removeFrame: function () {
    let my3DSContainer = document.createElement('div');

    // Remove UI that you added in addFrame.
    document.body.removeChild(my3DSContainer);
  }
}, function (err: braintree.BraintreeError, payload: braintree.ThreeDSecureVerifyPayload) {
  if (err) {
    console.error(err);
    return;
  }

  if (payload.liabilityShifted) {
    // Liablity has shifted
    submitNonceToServer(payload.nonce);
  } else if (payload.liabilityShiftPossible) {
    // Liablity may still be shifted
    // Decide if you want to submit the nonce
  } else {
    // Liablity has not shifted and will not shift
    // Decide if you want to submit the nonce
  }
});

braintree.threeDSecure.cancelVerifyCard(function (err: braintree.BraintreeError, verifyPayload: braintree.ThreeDSecureVerifyPayload) {
  if (err) {
    // Handle error
    console.log(err.message); // No verification payload available
    return;
  }

  verifyPayload.nonce; // The nonce returned from the 3ds lookup call
  verifyPayload.liabilityShifted; // boolean
  verifyPayload.liabilityShiftPossible; // boolean
});

