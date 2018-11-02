import { DisplayTransformFunc } from "../";

/**
 * For the passed character index in the plain text string, returns the corresponding index in the marked up value string.
 * If the passed character index lies inside a mention, the value of `inMarkupCorrection` defines the correction to apply:
 * - 'START' to return the index of the mention markup's first char (default)
 * - 'END' to return the index after its last char
 * - 'NULL' to return null
 */
export function mapPlainTextIndex(
    value: string,
    markup: string,
    indexInPlainText: number,
    inMarkupCorrection: string,
    displayTransform: DisplayTransformFunc,
    regex: RegExp
): number;
