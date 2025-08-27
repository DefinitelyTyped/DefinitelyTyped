/// <reference path="core.d.ts" />

declare namespace mercadopago {
    interface MercadoPago {
        new(publicKey: string, options?: mercadopagocore.Options): mercadopagocore.MercadoPagoCore;
    }
}

declare var MercadoPago: mercadopago.MercadoPago;
