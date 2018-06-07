// Type definitions for i18next-ko 3.0
// Project: https://github.com/leMaik/i18next-ko
// Definitions by: Daniel Waxweiler <https://github.com/dwaxweiler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="knockout"/>

declare module 'i18nextko' {
    import i18next = require('i18next');

    const i18n: i18next.i18n;

    function init(resourceStore: i18nextkoResourceStore, language: string, ko: KnockoutStatic): void;

    function setLanguage(language: string): void;

    function t(key: string): KnockoutComputed<string>;

    interface i18nextkoResourceStore {
        [language: string]: {
            translation: {
                [key: string]: string
            }
        };
    }
}
