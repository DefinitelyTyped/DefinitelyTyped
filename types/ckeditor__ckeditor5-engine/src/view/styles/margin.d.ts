import { StylesProcessor } from '../stylesmap';

/**
 * Adds a margin CSS styles processing rules.
 *
 *    editor.data.addStyleProcessorRules( addMarginRules );
 *
 * The normalized value is stored as:
 *
 *    const styles = {
 *      margin: {
 *        top,
 *        right,
 *        bottom,
 *        left
 *      }
 *    };
 */
export function addMarginRules(stylesProcessor: StylesProcessor): void;
