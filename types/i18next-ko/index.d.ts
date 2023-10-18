/// <reference types="knockout"/>

import * as i18next from 'i18next';

export const i18n: i18next.i18n;

export function init(resourceStore: i18nextkoResourceStore, language: string, ko: KnockoutStatic): void;

export function setLanguage(language: string): void;

export function t(key: string): KnockoutComputed<string>;

export interface i18nextkoResourceStore {
    [language: string]: {
        translation: {
            [key: string]: string
        }
    };
}
