import { Checkout } from './lib/checkout';

declare global {
  interface Window {
    checkout: Checkout;
  }

  const checkout: Checkout;
}

export * from './lib/pricing/checkout';
export * from './lib/pricing/promise';
export * from './lib/pricing/subscription';
export * from './lib/pricing/index';
export * from './lib/3d-secure';
export * from './lib/address';
export * from './lib/adyen';
export * from './lib/bank-redirect';
export * from './lib/apple-pay/index';
export * from './lib/amazon-pay';
export * from './lib/google-pay/index';
export * from './lib/bank-account';
export * from './lib/configure';
export * from './lib/elements';
export * from './lib/error';
export * from './lib/gift-card';
export * from './lib/paypal';
export * from './lib/checkout';
export * from './lib/token';
export * from './lib/validate';
