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
  ApplePay: ApplePay;
  bankAccount: BankAccount;
  configure: Configure;
  Elements: Elements;
  giftCard: GiftCard;
  PayPal: PayPal;
  Pricing: Pricing;
  Risk: Risk;
  token: Token;
  validate: Validate;
}
