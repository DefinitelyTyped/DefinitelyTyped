// Type definitions for extenso 2.0
// Project: https://github.com/theuves/extenso.js#readme
// Definitions by: fer22f <https://github.com/fer22f>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Extenso {
    interface BaseOptions {
        negative?: 'formal' | 'informal';
        locale?: 'br' | 'pt';
        scale?: 'short' | 'long';
    }

    interface NumberModeOptions extends BaseOptions {
        mode?: 'number';
        number?: {
            gender?: 'm' | 'f';
            decimal?: 'formal' | 'informal';
        };
    }

    interface CurrencyModeOptions extends BaseOptions {
        mode: 'currency';
        currency?: {
            type?: 'BRL' | 'EUR';
        };
    }

    type Options = NumberModeOptions | CurrencyModeOptions;
}

declare function extenso(number: number | string, options?: Extenso.Options): string;

export = extenso;
