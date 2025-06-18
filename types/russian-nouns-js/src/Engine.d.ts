/* tslint:disable:no-redundant-jsdoc-2 */

import { Case } from "./Case";
import { Lemma, LemmaOptions } from "./Lemma";
import StressDictionary from "./StressDictionary";

export default class Engine {
    /**
     * @description Словарь ударений. Его можно редактировать в рантайме.
     */
    readonly sd: StressDictionary;

    constructor();

    /**
     * @param {RussianNouns.Lemma|Object} lemma Слово в именительном падеже с метаинформацией.
     * @param {string} grammaticalCase Падеж.
     * @param {string} pluralForm Форма во множественном числе.
     * Если указана, результат будет тоже во множественном.
     * У pluralia tantum игнорируется.
     * @returns {Array} Список, т.к. бывают вторые родительный, винительный падежи. Существительные
     * женского рода в творительном могут иметь как окончания -ей -ой, так и -ею -ою.
     * Второй предложный падеж (местный падеж, локатив) не включен в предложный.
     */
    decline(lemma: LemmaOptions | Lemma, grammaticalCase?: Case[keyof Case], pluralForm?: string): [string];

    /**
     * @param {RussianNouns.Lemma|Object} lemma
     * @returns {Array}
     */
    pluralize(lemma: LemmaOptions | Lemma): [string];
}
