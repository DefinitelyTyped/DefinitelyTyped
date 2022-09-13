import { Config } from './applyChangeToValue';

export type MarkupIterateeFunction = (
    match: string,
    index: number,
    plainTextIndex: number,
    id: string | number,
    display: string,
    childIndex: number,
    start: number,
) => void;

export type TextIterateeFunction = (substr: string, start: number, plainTextIndex: number) => void;

export function iterateMentionsMarkup(
    value: string,
    config: Config[],
    markupIteratee: MarkupIterateeFunction,
    textIteratee?: TextIterateeFunction,
): void;
