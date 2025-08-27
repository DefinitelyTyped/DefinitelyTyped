/* tslint:disable:no-redundant-jsdoc-2 */

import { Case } from "./Case";
import { Lemma, LemmaOptions } from "./Lemma";

export default class StressDictionary {
    constructor();

    /**
     * Строка задаётся в формате 1234567-123456.
     * До дефиса — единственное число, после дефиса — множественное.
     * Номер символа — номер падежа в RussianNouns.CASES.
     * Возможные значения каждого символа:
     * S — ударение только на основу;
     * s — чаще на основу;
     * b — оба варианта употребляются одинаково часто;
     * e — чаще на окончание;
     * E — только на окончание.
     *
     * @throws {Error} Если некорректный формат строки.
     */
    put(lemma: LemmaOptions | Lemma, settings: string): void;

    hasStressedEndingSingular(lemma: Lemma, grCase: Case): boolean[];

    hasStressedEndingPlural(lemma: Lemma, grCase: Case): boolean[];
}
