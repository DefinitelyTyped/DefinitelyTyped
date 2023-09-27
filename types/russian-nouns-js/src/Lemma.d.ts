/* tslint:disable:no-redundant-jsdoc-2 */

import { Gender } from "./Gender";

export interface LemmaOptions {
    text: string;
    gender?: Gender[keyof Gender] | undefined;
    indeclinable?: boolean | undefined;
    pluraleTantum?: boolean | undefined;
    animate?: boolean | undefined;
}

export class Lemma {
    constructor(o: LemmaOptions | Lemma);

    newText(f: (o: string) => string): Lemma;
    newGender(f: (o: string) => string): Lemma;
    equals(o: Lemma): boolean;
    fuzzyEquals(o: Lemma): boolean;
    text(): string;
    lower(): string;
    isPluraleTantum(): boolean;
    /**
     * @deprecated Используйте isPluraleTantum(), т.к. речь об одной лемме, а pluralia — во мн.ч. на латыни.
     * @returns {boolean}
     */
    isPluraliaTantum(): boolean;
    getGender(): string;
    isIndeclinable(): boolean;
    isAnimate(): boolean;
    isASurname(): boolean;
    isASurname(): boolean;
    isATransport(): boolean;
}
