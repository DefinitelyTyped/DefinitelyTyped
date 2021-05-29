/* tslint:disable:no-redundant-jsdoc-2 */

import { Gender } from './Gender';

export interface LemmaOptions {
    text: string;
    gender?: Gender[keyof Gender];
    indeclinable?: boolean;
    pluraleTantum?: boolean;
    animate?: boolean;
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
