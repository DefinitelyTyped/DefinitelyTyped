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
    /**
     * Not for external use.
     * Please use createLemma or createLemmaOrNull instead of the constructor.
     */
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

    /**
     * Склонение существительного.
     *
     * Возможные значения:
     * -1 (несклоняемые, в основном заимствованные слова);
     * 0 (разносклоняемые "путь" и "дитя");
     * 1 (мужской и средний род без окончания);
     * 2 (слова на "а", "я" — м., ж. и общий род);
     * 3 (жен. род без окончания; слова, оканчивающиеся на "мя").
     *
     * Понятие «склонение» сложно применить к словам plurale tantum,
     * поэтому этот метод возвращает для них -2 (вместо undefined).
     */
    getDeclension(): number;

    /**
     * Возвращает «школьный» вариант склонения:
     * «вода» — первое склонение; «стол», «окно» — второе склонение.
     */
    getSchoolDeclension(): number;
}
