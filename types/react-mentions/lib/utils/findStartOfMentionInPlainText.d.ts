/**
 * For a given indexInPlainText that lies inside a mention, returns a the index
 * of of the first char of the mention in the plain text. If indexInPlainText
 * does not lie inside a mention, returns indexInPlainText.
 */

import { Config } from "./applyChangeToValue";

export function findStartOfMentionInPlainText(
    value: string,
    config: Array<Partial<Config>>,
    indexInPlainText: number,
): number;
