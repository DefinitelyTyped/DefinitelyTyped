/* tslint:disable:no-redundant-jsdoc-2 */

import { Case } from "./Case";
import { Lemma, LemmaOptions } from "./Lemma";
import { LocativeForm } from "./LocativeForm";
import StressDictionary from "./StressDictionary";

export default class Engine {
    /**
     * @description Словарь ударений. Его можно редактировать в рантайме.
     */
    readonly sd: StressDictionary;

    constructor();

    /**
     * Просклонять лемму в указанном падеже.
     * Метод возвращает список, т.к. бывают вторые родительный, винительный падежи,
     * и просто в некоторых падежах слова могут иметь по два окончания (например, -ой, -ою).
     * Второй предложный падеж (местный падеж, локатив) не включен в предложный.
     */
    decline(lemma: LemmaOptions | Lemma, grammaticalCase: Case, pluralForm?: string): [string];

    /**
     * Получить формы множественного числа в именительном падеже.
     */
    pluralize(lemma: LemmaOptions | Lemma): [string];

    /**
     * Возвращает формы слов с условиями их использования (там смешаны
     * семантические классы и некоторые синтаксические обстоятельства).
     *
     * Экспериментальная возможность.
     * Заточено под ед. число.
     */
    getLocativeForms(lemma: LemmaOptions | Lemma): [LocativeForm];
}
