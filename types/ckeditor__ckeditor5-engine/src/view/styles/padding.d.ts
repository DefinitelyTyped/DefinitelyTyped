import { StylesProcessor } from '../stylesmap';

/**
 * Adds a margin CSS styles processing rules.
 *
 *    editor.data.addStyleProcessorRules( addPaddingRules );
 *
 * The normalized value is stored as:
 *
 *    const styles = {
 *      padding: {
 *        top,
 *        right,
 *        bottom,
 *        left
 *      }
 *    };
 */
export function addPaddingRules(stylesProcessor: StylesProcessor): void;
