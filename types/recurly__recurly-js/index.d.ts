// Type definitions for non-npm package @recurly/recurly-js 4.16
// Project: https://github.com/recurly/recurly-js
// Definitions by: Dave Brudner <https://github.com/dbrudner>
//                 Chris Rogers <https://github.com/chrissrogers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1
import { Recurly } from './lib/recurly';

declare global {
  interface Window {
    recurly: Recurly;
  }

  const recurly: Recurly;
}

export * from './lib/pricing/checkout';
export * from './lib/pricing/promise';
export * from './lib/pricing/subscription';
export * from './lib/pricing/index';
export * from './lib/3d-secure';
export * from './lib/address';
export * from './lib/adyen';
export * from './lib/apple-pay';
export * from './lib/bank-account';
export * from './lib/configure';
export * from './lib/elements';
export * from './lib/error';
export * from './lib/gift-card';
export * from './lib/paypal';
export * from './lib/recurly';
export * from './lib/token';
export * from './lib/validate';
