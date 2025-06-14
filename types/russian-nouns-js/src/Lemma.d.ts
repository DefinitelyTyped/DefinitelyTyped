/* tslint:disable:no-redundant-jsdoc-2 */

import { Gender } from "./Gender";

export interface LemmaOptions {
    text: string;

    pluraleTantum?: boolean | undefined;
    gender?: Gender | undefined;
    indeclinable?: boolean | undefined;
    animate?: boolean | undefined;

    surname?: boolean | undefined;
    name?: boolean | undefined;
    transport?: boolean | undefined;
}

export class Lemma {
    constructor(o: LemmaOptions | Lemma);

    /**
     * @deprecated since version 2.0.0
     */
    newText(f: (o: string) => string): Lemma;

    /**
     * @deprecated since version 2.0.0
     */
    newGender(f: (o: string) => string): Lemma;

    equals(o: Lemma): boolean;
    text(): string;
    lower(): string;

    isPluraleTantum(): boolean;
    getGender(): Gender | undefined;
    isIndeclinable(): boolean;
    isAnimate(): boolean;

    isASurname(): boolean;
    isAName(): boolean;
    isATransport(): boolean;
}
