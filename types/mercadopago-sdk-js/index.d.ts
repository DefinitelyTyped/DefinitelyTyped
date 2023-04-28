// Type definitions for mercadopago's sdk-js 2.0
// Project: https://github.com/mercadopago/sdk-js
// Definitions by: mercadopago <https://github.com/mercadopago>
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
