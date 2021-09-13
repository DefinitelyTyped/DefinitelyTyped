import * as React from 'react';

export interface ParamOptions {
    /**
     * `IntlVariations.GENDER_*` Pass the gender of the parameter for correctly variated text.
     */
    gender?: IntlVariationsGender;
    /**
     * Passing a value of type `number` into the `number` option uses that value as the input for which we determine the [CLDR plural value](http://cldr.unicode.org/index/cldr-spec/plural-rules).
     * You can pass `true` to simply use the parameter value (the same value that replaces the token).
     */
    number?: number | true;
}

export interface PronounOptions {
    /**
     * Whether to elide the NOT_A_PERSON option in the text variations generated.
     */
    human?: boolean;
    /**
     * Whether to capitalize the pronoun in the source string.
     */
    capitalize?: boolean;
}

export interface PluralOptions {
    /**
     * Represents the plural form of the string in English. Default is `{singular} + 's'`
     */
    many?: string;
    /**
     * `"yes"|"no"|"ifMany"`: Whether to show the `{number}` in the string.
     *
     * > Note that the singular phrase never has a token, but inlines to `1`.
     * ? This is to account for languages like Hebrew for which showing the actual number isn't appropriate
     *
     *  - "no": (DEFAULT) Don't show the count
     *  - "ifMany": Show the count only in plural case
     *  - "yes": Show the count in all cases
     */
    showCount?: 'yes' | 'no' | 'ifMany';
    /**
     * Name of the token where count shows up. (Default: `"number"`)
     */
    name?: string;
    /**
     * For overriding the displayed number
     */
    value?: unknown;
}

export interface FbtOptions {
    /**
     * Text author
     */
    author?: string;
    /**
     *  Use a "common" string repository
     *  To use the strings at runtime, there is the fbt.c(...) function call or the <fbt common=true>...</fbt> JSX API.
     *  NOTE: The transform will throw if it encounters a common string not in the map provided.
     *  See: https://facebook.github.io/fbt/docs/common#runtime-api
     */
    common?: boolean;
    /**
     *  Informs [collection](https://facebook.github.io/fbt/docs/collection/) to skip this string (useful for tests/mocks)
     */
    doNotExtract?: boolean;
    /**
     *  (Default: false) FBT normally consolidates whitespace down to one space (' '). Turn this off by setting this to true
     */
    preserveWhitespace?: boolean;
    /**
     * Project to which the text belongs
     */
    project?: string;
    /**
     * IntlVariations.GENDER_*: Pass an [implicit subject](https://facebook.github.io/fbt/docs/implicit_params/) gender to a partially formed text
     */
    subject?: IntlVariationsGender;
}

export interface Output {
    fbt: string[];
    params: string;
}

export interface Fbt {
    (text: string, description: string, options?: FbtOptions): Output['fbt'];

    param(name: string, value: unknown, options?: ParamOptions): Output['params'];

    sameParam(name: string): Output['params'];

    name(tokenName: string, value: unknown, gender: IntlVariationsGender): Output['params'];

    plural(singularPhrase: string, count: number, options?: PluralOptions): Output['params'];

    enum<Range extends { [enumKey: string]: string }>(enumKey: keyof Range, enumRange: Range): Output['params'];

    enum(index: string, range: string[]): Output['params'];

    pronoun(type: PronounType, gender: GenderConst, options?: PronounOptions): Output['params'];

    //
    /**
     * To use the strings at runtime, there is the `fbt.c(...)` function call or the <fbt common=true>...</fbt> JSX API.
     * NOTE: The transform will throw if it encounters a common string not in the map provided.
     * https://facebook.github.io/fbt/docs/common#runtime-api
     */
    c: (text: string) => Output['fbt'];

    // https://github.com/facebook/fbt/blob/d14af3e7dcf775562d4c4d27e62861bd9394ea6b/runtime/shared/fbt.js#L453-L455
    // Only used in React Native in fbsource
    enableJsonExportMode: () => void;
    // Only used in React Native in fbsource
    disableJsonExportMode: () => void;
    isFbtInstance: (value: unknown) => boolean;
}

export interface IntlViewerContext {
    GENDER: IntlVariationsGender;
    locale: string;
}

export interface TranslationDict {
    [locale: string]: {
        [hashKey: string]: unknown;
    };
}

export const FbtTranslations: {
    getTranslatedInput: (input: unknown) => unknown;
    getRegisteredTranslations: () => TranslationDict;
    registerTranslations: (translations: TranslationDict) => void;
    mergeTranslations: (newTranslations: TranslationDict) => void;
};

export class FbtResult {
    constructor(contents: unknown[], errorListener?: unknown);
    getContents(): unknown;
    // This relies on toString() which contains i18n logging logic to track impressions.
    // I.e. If you use this, i18n will register the string as displayed!
    toJSON(): string;
    // Hack for allowing FBTResult to play nice in React components
    _store?: {
        validated: boolean;
    };
}

// https://github.com/facebook/fbt/blob/d14af3e7dcf775562d4c4d27e62861bd9394ea6b/packages/babel-plugin-fbt/src/FbtConstants.js#L70-L75
export type PronounType = 'object' | 'possessive' | 'reflexive' | 'subject';

// https://github.com/facebook/fbt/blob/d14af3e7dcf775562d4c4d27e62861bd9394ea6b/runtime/nonfb/GenderConst.js#L17-L32
export enum GenderConst {
    NOT_A_PERSON = 0,
    FEMALE_SINGULAR = 1,
    MALE_SINGULAR = 2,
    FEMALE_SINGULAR_GUESS = 3,
    MALE_SINGULAR_GUESS = 4,
    MIXED_UNKNOWN = 5,
    NEUTER_SINGULAR = 6,
    UNKNOWN_SINGULAR = 7,
    FEMALE_PLURAL = 8,
    MALE_PLURAL = 9,
    NEUTER_PLURAL = 10,
    UNKNOWN_PLURAL = 11,
}

// https://github.com/facebook/fbt/blob/d14af3e7dcf775562d4c4d27e62861bd9394ea6b/runtime/nonfb/IntlVariations.js#L17-L31
export enum IntlVariations {
    BITMASK_NUMBER = 28,
    BITMASK_GENDER = 3,
    NUMBER_ZERO = 16,
    NUMBER_ONE = 4,
    NUMBER_TWO = 8,
    NUMBER_FEW = 20,
    NUMBER_MANY = 12,
    NUMBER_OTHER = 24,
    GENDER_MALE = 1,
    GENDER_FEMALE = 2,
    GENDER_UNKNOWN = 3,
}

export type IntlVariationsGender =
    | IntlVariations.GENDER_MALE
    | IntlVariations.GENDER_FEMALE
    | IntlVariations.GENDER_UNKNOWN;

export interface FbtResolvedPayload {
    contents: unknown;
    errorListener: unknown;
    patternString: string;
    patternHash?: string;
}

export interface FbtRuntimeCallInput {
    table: unknown;
    args?: unknown;
    options?: unknown;
}

export interface FbtErrorContext {
    hash?: string;
    translation: string;
}

interface FbtHookRegistrations {
    errorListener?: (context: FbtErrorContext) => unknown;
    getFbsResult?: (input: FbtResolvedPayload) => unknown;
    getFbtResult?: (input: FbtResolvedPayload) => unknown;
    getTranslatedInput?: (input: FbtRuntimeCallInput) => unknown;
    getViewerContext?: () => IntlViewerContext;
    logImpression?: (hash: string) => void;
    onTranslationOverride?: (hash: string) => void;
}

export function init(options: { hooks?: FbtHookRegistrations; translations: TranslationDict }): void;

export const fbt: Fbt;

export default fbt;

/**
 * The next exports (FbtEnum, FbtParam, FbtPlural...) isn't real!
 * It is only syntax abstraction
 * See: https://github.com/facebook/fbt/blob/d14af3e7dcf775562d4c4d27e62861bd9394ea6b/packages/babel-plugin-fbt/src/FbtUtil.js#L84-L94
 */
export interface FbtEnumProps {
    'enum-range': string[] | { [enumKey: string]: string };
    value: string;
}
export const FbtEnum: React.FC<FbtEnumProps>;

export interface FbtParamProps extends ParamOptions {
    name: string;
}
export const FbtParam: React.FC<FbtParamProps>;

interface FbtPluralProps extends PluralOptions {
    count: number;
}
export const FbtPlural: React.FC<FbtPluralProps>;

interface FbtPronounProps extends PronounOptions {
    type: PronounType;
    gender: GenderConst;
}
export const FbtPronoun: React.FC<FbtPronounProps>;

export interface FbtNameProps {
    name: string;
    gender: IntlVariationsGender;
}
export const FbtName: React.FC<FbtNameProps>;

export interface FbtSameParamProps {
    name: string;
}
export const FbtSameParam: React.FC<FbtSameParamProps>;

export interface FbtProps extends FbtOptions {
    desc: string;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            fbt: FbtProps & { children?: React.ReactNode | undefined };
        }
    }
}
