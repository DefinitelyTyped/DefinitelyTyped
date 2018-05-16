import * as reCAPTCHA from 'recaptcha2';

const recaptcha = new reCAPTCHA({
  siteKey: 'your-site-key',
  secretKey: 'your-secret-key'
});

const key = 'invalid';

recaptcha.validate(key)
  .then(() => {
    // validated and secure
  })
  .catch((errorCodes) => {
    // translate error codes to human readable text
    const message = recaptcha.translateErrors(errorCodes);
  });

const formSnippet = recaptcha.formElement('recaptcha');
