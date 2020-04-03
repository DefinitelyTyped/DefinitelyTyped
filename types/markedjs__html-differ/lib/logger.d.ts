import { ChangeObject } from '../';

/**
 * @param result - the result of the work of the method `htmlDiffer.diffHtml`
 * @param [options]
 */
export function getDiffText(result: ChangeObject[], options?: LoggerOptions): string;

/**
 * @param result - the result of the work of the method `htmlDiffer.diffHtml`
 * @param [options]
 */
export function logDiffText(result: ChangeObject[], options?: LoggerOptions): string;

export interface LoggerOptions {
    /**
     * the number of characters around the diff result between two HTML
     * @default 40
     */
    charsAroundDiff?: number;
}
