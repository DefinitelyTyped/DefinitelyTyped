import { StylesProcessor } from '../stylesmap';

/**
 * Adds a background CSS styles processing rules.
 *
 *    editor.data.addStyleProcessorRules( addBackgroundRules );
 *
 * The normalized value is stored as:
 *
 *    const styles = {
 *      background: {
 *        color,
 *        repeat,
 *        position,
 *        attachment,
 *        image
 *      }
 *    };
 *
 * **Note**: Currently only `'background-color'` longhand value is parsed besides `'background'` shorthand. The reducer also supports only
 * `'background-color'` value.
 */
export function addBackgroundRules(stylesProcessor: StylesProcessor): void;
