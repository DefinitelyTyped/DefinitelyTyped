import { Risk } from './3d-secure';
import { Adyen } from './adyen';
import { ApplePay } from './apple-pay';
import { BankAccount } from './bank-account';
import { Configure } from './configure';
import { Elements } from './elements';
import { Emitter } from './emitter';
import { GiftCard } from './gift-card';
import { PayPal } from './paypal';
import { Pricing } from './pricing';
import { Token } from './token';
import { Validate } from './validate';

export type RecurlyEvent = 'change' | 'field:submit' | 'error';

export interface Recurly extends Emitter<RecurlyEvent> {
  Adyen: Adyen;

  /**
   * Use Recurly.js to process Apple Pay transactions.
   *
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#apple-pay|ApplePay}
   */
  ApplePay: ApplePay;

  /**
   * Tokenize your users’ bank account information.
   *
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#us-bank-accounts|US Bank Accounts}
   */
   bankAccount: BankAccount;

  /**
   * This identifies your site to Recurly servers.
   *
   * You can find your public key in the {@link https://app.recurly.com/go/developer/api_access|API Access section}
   * of your admin app.
   *
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#configure|Configure}
   */
  configure: Configure;

  /**
   * Elements allow sensitive customer payment information to be securely accepted via iframes.
   * They are controlled in groups by an Elements instance.
   *
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#elements|Elements}
   */
  Elements: Elements;
  giftCard: GiftCard;

  /**
   * Use Recurly to process PayPal transactions using PayPal Business or Braintree.
   *
   * A PayPal transaction is handled entirely within the PayPal checkout flow in a new window.
   * Your customer will authorize a transaction within PayPal. Recurly will then record the authorization and return a
   * Recurly token to you as it does for other payment methods.
   *
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#paypal|PayPal}
   */
  PayPal: PayPal;

  /**
   * Recurly automates complicated subscriptions, with many factors influencing the total price at checkout. With this
   * in mind, Recurly.js provides a robust `recurly.Pricing.Checkout` class designed to make determining the actual
   * checkout costs as simple and flexible as possible.
   *
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#pricing|Pricing}
   */
  Pricing: Pricing;

  /**
   * Strong customer authentication for your users.
   *
   * Recurly.js provides a set of utilities that allow you to support 3-D Secure authentication on your checkout page
   * seamlessly. For more information on 3-D Secure, see our
   * {@link https://docs.recurly.com/docs/revised-payment-services-directive-psd2|Introduction to Strong Customer Authentication}
   *
   * Recurly’s support for 3-D Secure utilizes both Recurly.js and our API. For a complete guide to this integration and
   * get started, start with our
   * {@link https://docs.recurly.com/docs/revised-payment-services-directive-psd2|Strong Customer Authentication (SCA) Integration Guide}
   *
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#3d-secure|3D-Secure}
   */
  Risk: Risk;

  /**
   * Recurly.js works with tokens, which represent secure and temporary storage for your customer’s sensitive billing
   * information. They are stored directly on Recurly servers to reduce your PCI exposure.
   *
   * When your customers submit your billing form, you’ll need to interrupt the submit and ask Recurly.js to create a
   * token from the form.
   *
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#getting-a-token|Token}
   */
  token: Token;

  /**
   * Recurly.js bundles a few helpful methods for validating payment information prior to processing. These methods are
   * used when generating tokens, but you can also use them to enhance your form validations and checkout flow.
   *
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#validation|Validation}
   */
  validate: Validate;
}
