/* tslint:disable:no-redundant-jsdoc-2 */

import { Case as CaseEnum } from "./src/Case";
import Engine from "./src/Engine";
import { Gender as GenderEnum } from "./src/Gender";
import { Lemma, LemmaOptions } from "./src/Lemma";

export as namespace RussianNounsJS;

/**
 * Case
 */
export const Case: { [key in keyof typeof CaseEnum]: typeof CaseEnum[key] };

/**
 * Grammatical gender
 */
export const Gender: { [key in keyof typeof GenderEnum]: typeof GenderEnum[key] };

/**
 * Cases
 */
export const CASES: Array<typeof CaseEnum[keyof typeof CaseEnum]>;

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
 * Склонение существительного.
 *
 * Возможные значения:
 * + -1 — несклоняемые, в основном заимствованные слова;
 * + 0 — разносклоняемые "путь" и "дитя";
 * + 1 — мужской и средний род без окончания;
 * + 2 — слова на "а", "я" (м., ж. и общий род);
 * + 3 — жен. род без окончания; слова, оканчивающиеся на "мя".
 *
 * Понятие "склонение" сложно применить к словам pluralia tantum,
 * поэтому этот метод возвращает для них undefined.
 *
 * @param {RussianNouns.Lemma|Object} lemma
 * @returns {number|undefined}
 */
export function getDeclension(lemma: Lemma | object): number | undefined;

/**
 * «Названия „первое склонение“ и „второе склонение“ в школьной практике и вузовском преподавании
 * нередко закрепляются за разными разрядами слов. В школьных учебниках первым склонением называют изменение
 * слов с окончанием -а (вода), во многих вузовских пособиях и академических грамматиках — слов мужского
 * рода (стол) и среднего рода (окно)».
 *
 * Современный русский язык. Морфология — Камынина А.А., 1999, стр. 67
 *
 * Почти везде указывают это число. Например, в Викисловаре.
 * Иногда в школьных учебниках 10 слов на «-мя» относят к разносклоняемым.
 * Здесь это третье склонение.
 *
 * Понятие "склонение" сложно применить к словам pluralia tantum,
 * поэтому этот метод возвращает для них undefined.
 *
 * @param lemma
 * @returns {number} «Школьный» вариант склонения:
 * «вода» — 1; «стол», «окно» — 2,
 * разносклоняемые — 0; несклоняемые — минус единица.
 */
export function getSchoolDeclension(lemma: Lemma): number;

export { Engine, Lemma };
