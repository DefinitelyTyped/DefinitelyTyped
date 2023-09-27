// Type definitions for non-npm package mercadopago's sdk-js-browser 2.0
// Project: https://github.com/mercadopago/sdk-js
// Definitions by: mercadopago <https://github.com/mercadopago>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 5.0

/// <reference path="core.d.ts" />

declare namespace mercadopago {
    interface MercadoPago {
        new(publicKey: string, options?: mercadopagocore.Options): mercadopagocore.MercadoPagoCore;
    }
}

declare var MercadoPago: mercadopago.MercadoPago;
