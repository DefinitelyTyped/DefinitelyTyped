/* tslint:disable:no-redundant-jsdoc-2 */

import { Lemma, LemmaOptions } from "./Lemma";

export default class StressDictionary {
    data: {};

    constructor();

    /**
     * @param {RussianNouns.Lemma|Object} lemma
     * @param {string} settings Строка настроек в формате 1234567-123456.
     * До дефиса — единственное число, после дефиса — множественное.
     * Номер символа — номер падежа в {@link RussianNouns.CASES}.
     * Возможные значения каждого символа:
     * S — ударение только на основу;
     * s — чаще на основу;
     * b — оба варианта употребляются одинаково часто;
     * e — чаще на окончание;
     * E — только на окончание.
     * @throws {RussianNouns.StressDictionaryException}
     */
    put(lemma: LemmaOptions | Lemma, settings: string): void;

    /**
     * @param {RussianNouns.Lemma|Object} lemma
     * @param {boolean} fuzzy Если не найдено, игнорировать букву Ё и второстепенные поля у леммы.
     * @returns {*} Строка настроек или undefined.
     */
    get(lemma: LemmaOptions | Lemma, fuzzy: boolean): string | undefined;

    remove(lemma: LemmaOptions | Lemma): void;

    hasStressedEndingSingular(lemma: LemmaOptions | Lemma, grCase: string): boolean[];

    hasStressedEndingPlural(lemma: LemmaOptions | Lemma, grCase: string): boolean[];

    /**
     * Благодаря этому методу, словарь можно использовать для других целей.
     * Например, если там есть слово, можно посмотреть его род и признаки.
     *
     * @param word Слово, по которому производится поиск.
     * Буква Ё и регистр игнорируются.
     * @returns {Array} Список лемм.
     */
    find(word: string): string[];
}
