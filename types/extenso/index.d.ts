// Type definitions for extenso 2.0
// Project: https://github.com/theuves/extenso.js#readme
// Definitions by: fer22f <https://github.com/fer22f>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Extenso {
    interface BaseOptions {
        negative?: "formal" | "informal" | undefined;
        locale?: "br" | "pt" | undefined;
        scale?: "short" | "long" | undefined;
    }

    interface NumberModeOptions extends BaseOptions {
        mode?: "number" | undefined;
        number?: {
            gender?: "m" | "f" | undefined;
            decimal?: "formal" | "informal" | undefined;
        } | undefined;
    }

    interface CurrencyModeOptions extends BaseOptions {
        mode: "currency";
        currency?: {
            type?: "BRL" | "EUR" | undefined;
        } | undefined;
    }

    type Options = NumberModeOptions | CurrencyModeOptions;
}

declare function extenso(number: number | string, options?: Extenso.Options): string;

export = extenso;
