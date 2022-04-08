/**
 * Applies a change from the plain text textarea to the underlying marked up
 * value guided by the textarea text selection ranges before and after the
 * change
 */

import { MentionProps } from '../../index';

export type Config = Pick<MentionProps, 'markup' | 'regex' | 'displayTransform'>;

export interface Options {
    selectionStartBefore?: number;
    selectionEndBefore?: number;
    selectionEndAfter?: number;
}

export function applyChangeToValue(
    value: string,
    plainTextValue: string,
    options: Options,
    config: Array<Partial<Config>>,
): string;
