// Type definitions for intl-tel-input 14.0
// Project: https://github.com/jackocnr/intl-tel-input
// Definitions by: Fidan Hakaj <https://github.com/fdnhkj>
//                 Leonard Thieu <https://github.com/leonard-thieu>
//                 Márton Molnár <https://github.com/molnarm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference path="global.d.ts" />

export as namespace intlTelInput;

export = IntlTelInput;

/**
 * initialise the plugin with optional options.
 * @param options options that can be provided during initialization.
 */
declare function IntlTelInput(node: Element, options?: IntlTelInput.Options): IntlTelInput.Plugin;
