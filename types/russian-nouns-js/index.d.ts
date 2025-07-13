/* tslint:disable:no-redundant-jsdoc-2 */

import { Case } from "./src/Case";
import Engine from "./src/Engine";
import { Gender } from "./src/Gender";
import { Lemma, LemmaOptions } from "./src/Lemma";
import { LocativeForm, LocativeFormAttribute } from "./src/LocativeForm";

export as namespace RussianNounsJS;

export { Case, Gender };

/**
 * Падежи в обычном порядке.
 */
export const CASES: [Case];

/**
 * Интерфейс с именованными параметрами для создания лемм.
 * Если параметр — уже лемма, вернет тот же объект, а не копию.
 *
 * @param {RussianNouns.Lemma|Object} o
 * @throws {Error} Ошибки из конструктора леммы.
 * @returns {RussianNouns.Lemma} Иммутабельный объект.
 */
export function createLemma(o: Lemma | LemmaOptions): Lemma;

/**
 * Безопасное создание леммы с минимальными накладными расходами.
 *
 * @param {Object} options
 * @returns {RussianNouns.Lemma|null}
 */
export function createLemmaOrNull(options: LemmaOptions): Lemma | null;

/**
 * @deprecated since version 2.3.0
 */
export function getDeclension(lemma: Lemma | object): number;

/**
 * @deprecated since version 2.3.0
 */
export function getSchoolDeclension(lemma: Lemma): number;

export { Engine, Lemma, LocativeForm, LocativeFormAttribute };
