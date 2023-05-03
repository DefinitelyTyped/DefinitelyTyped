// Type definitions for non-npm package mercadopago's sdk-js-browser 2.0
// Project: https://github.com/mercadopago/sdk-js
// Definitions by: mercadopago <https://github.com/mercadopago>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { mercadopagocore } from './core';

export namespace mercadopago {
  interface MercadoPago {
      new(publicKey: string, options: mercadopagocore.Options): mercadopagocore.MercadoPagoCore;
  }
}

export const MercadoPago: mercadopago.MercadoPago;
