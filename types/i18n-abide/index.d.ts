// Type definitions for i18n-abide 0.0
// Project: https://github.com/mozilla/i18n-abide
// Definitions by: Steven Bell <https://github.com/smbell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { RequestHandler } from "express";

export function abide(options?: AbideOptions): RequestHandler;
export function parseAcceptLanguage(header?: string): Array<{ lang: string; quality: number }>;
export function bestLanguage(
    languages: Array<{ lang: string; quality: number }>,
    supported_languages: string[],
    defaultLanguage: string,
): string;
export function localeFrom(language?: string): string;
export function languageFrom(locale?: string): string;
export function normalizeLanguage(language?: string): string;
export function normalizeLocale(locale?: string): string;
export function format(fmt: string, obj?: any, named?: boolean): string;
export function getLocales(): string[];

export interface AbideOptions {
    gettext_alias?: string | undefined;
    supported_languages?: string[] | undefined;
    default_lang?: string | undefined;
    debug_lang?: string | undefined;
    disable_locale_check?: boolean | undefined;
    translation_directory?: string | undefined;
    logger?: { warn(msg: string): void; error(msg: string): void } | undefined;
}
