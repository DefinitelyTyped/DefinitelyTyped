// Type definitions for fbt 0.16
// Project: https://github.com/reactjs/prop-types
// Definitions by: Alexander Nanberg <https://github.com/alexandernanberg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.2

import * as React from "react";

declare namespace FBT {
    type $Values<T> = T[keyof T];

    // https://github.com/facebookincubator/fbt/blob/e9c591f451dbfc91852e316869ae39ad41848c55/runtime/nonfb/GenderConst.js#L9-L23
    interface GenderConst {
        NOT_A_PERSON: 0;
        FEMALE_SINGULAR: 1;
        MALE_SINGULAR: 2;
        FEMALE_SINGULAR_GUESS: 3;
        MALE_SINGULAR_GUESS: 4;
        MIXED_SINGULAR: 5;
        MIXED_PLURAL: 5;
        NEUTER_SINGULAR: 6;
        UNKNOWN_SINGULAR: 7;
        FEMALE_PLURAL: 8;
        MALE_PLURAL: 9;
        NEUTER_PLURAL: 10;
        UNKNOWN_PLURAL: 11;
    }

    interface IntlVariationsGender {
        GENDER_MALE: 1;
        GENDER_FEMALE: 2;
        GENDER_UNKNOWN: 3;
    }

    // https://github.com/facebookincubator/fbt/blob/e9c591f451dbfc91852e316869ae39ad41848c55/runtime/nonfb/IntlVariations.js#L9-L21
    interface IntlVariations extends IntlVariationsGender {
        BITMASK_NUMBER: 28;
        BITMASK_GENDER: 3;
        NUMBER_ZERO: 16;
        NUMBER_ONE: 4;
        NUMBER_TWO: 8;
        NUMBER_FEW: 20;
        NUMBER_MANY: 12;
        NUMBER_OTHER: 24;
    }

    // https://github.com/facebookincubator/fbt/blob/c2d363a40b622d5aaf80ff1d249b38604fd869f6/transform/babel-plugin-fbt/FbtConstants.js#L22-L27
    type PronounType = "object" | "possessive" | "reflexive" | "subject";

    type IntlVariationsGenderValues = $Values<IntlVariationsGender>;

    interface IntlViewerContext {
        GENDER: IntlVariationsGenderValues;
        locale: string;
    }

    type IntlVariationsValues = $Values<IntlVariations>;
    type GenderConstValues = $Values<GenderConst>;

    interface Translations {
        [locale: string]: { [key: string]: string };
    }

    interface Options {
        author?: string;
        common?: boolean;
        doNotExtract?: boolean;
        preserveWhitespace?: boolean;
        project?: string;
        subject?: IntlVariationsGenderValues;
    }

    interface PluralOptions {
        many?: string;
        showCount?: "yes" | "no" | "ifMany";
        name?: string;
        value?: any;
    }

    interface ParamOptions {
        gender?: IntlVariationsGenderValues;
        number?: number | true;
    }

    interface PronounOptions {
        human?: boolean;
        capitalize?: boolean;
    }

    interface Props extends Options {
        desc: string;
        children: React.ReactNode | React.ReactNode[];
    }

    interface ParamProps extends ParamOptions {
        name: string;
        children: React.ReactNode;
    }

    interface EnumProps {
        "enum-range": string[] | { [enumKey: string]: string };
        value: string;
    }

    interface PluralProps extends PluralOptions {
        count: number;
        children: string;
    }

    interface PronounProps extends PronounOptions {
        type: PronounType;
        gender: GenderConstValues;
    }

    type NameProps = Omit<ParamOptions, "gender"> & {
        name: string;
        gender: IntlVariationsGenderValues;
        children: React.ReactNode;
    };

    interface SameNameProps {
        name: string;
    }

    interface FbtResult {
        toString: () => string;
    }
}

export const GenderConst: FBT.GenderConst;
export const IntlVariations: FBT.IntlVariations;
export const IntlViewerContext: FBT.IntlViewerContext;

// The Fbt* exports aren't real and is only used for syntax sugar.
// https://github.com/facebookincubator/fbt/blob/8607c1f2798ef18c6142a2cf1c5a9351c6d7df69/transform/babel-plugin-fbt/FbtUtil.js#L28-L40
export const Fbt: React.FC<FBT.Props>;
export const FbtEnum: React.FC<FBT.EnumProps>;
export const FbtParam: React.FC<FBT.ParamProps>;
export const FbtPlural: React.FC<FBT.PluralProps>;
export const FbtPronoun: React.FC<FBT.PronounProps>;
export const FbtName: React.FC<FBT.NameProps>;
export const FbtSameParam: React.FC<FBT.SameNameProps>;

export interface Fbt {
    (source: string, desc: string, options?: FBT.Options): FBT.FbtResult;
    param(paramName: string, value: any, options?: FBT.ParamOptions): FBT.FbtResult;
    sameParam(paramName: string): FBT.FbtResult;
    name(name: string, gender: FBT.IntlVariationsGenderValues): FBT.FbtResult;
    plural(singularPhrase: string, count: number, options?: FBT.PluralOptions): FBT.FbtResult;
    enum(index: string, enumRange: string[]): FBT.FbtResult;
    pronoun(type: FBT.PronounType, gender: FBT.GenderConstValues, options: FBT.PronounOptions): FBT.FbtResult;
}

export function init(options: { translations: FBT.Translations }): void;

export const fbt: Fbt;

export default fbt;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            fbt: FBT.Props;
            "fbt:param": FBT.ParamProps;
            "fbt:name": FBT.NameProps;
            "fbt:plural": FBT.PluralProps;
            "fbt:enum": FBT.EnumProps;
            "fbt:pronoun": FBT.PronounProps;
        }
    }
}
