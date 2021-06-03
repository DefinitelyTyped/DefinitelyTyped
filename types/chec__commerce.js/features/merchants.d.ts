import Commerce = require('@chec/commerce.js');
import { Merchant } from '../types/merchant';

export class Merchants {
  constructor(commerce: Commerce);

  about(): Promise<Merchant>;
}
