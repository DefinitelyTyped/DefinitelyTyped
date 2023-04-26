// Type definitions for mercadopago's sdk-js 
// Project: https://github.com/mercadopago/sdk-js
// Definitions by: mercadopago
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { MercadoPagoCore, Options } from './core'

export {};

declare global {
  interface Window {
    MercadoPago: {
        new(publicKey: string, options: Options): MercadoPagoCore;
    };
  }
}
