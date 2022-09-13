import { StylesProcessor } from '../stylesmap';

/**
 * Adds a border CSS styles processing rules.
 *
 *    editor.data.addStyleProcessorRules( addBorderRules );
 *
 * This rules merges all [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border) styles notation shorthands:
 *
 * - border
 * - border-top
 * - border-right
 * - border-bottom
 * - border-left
 * - border-color
 * - border-style
 * - border-width
 *
 * and all corresponding longhand forms (like `border-top-color`, `border-top-style`, etc).
 *
 * It does not handle other shorthands (like `border-radius` or `border-image`).
 *
 * The normalized model stores border values as:
 *
 *    const styles = {
 *      border: {
 *        color: { top, right, bottom, left },
 *        style: { top, right, bottom, left },
 *        width: { top, right, bottom, left },
 *      }
 *    };
 *
 */
export function addBorderRules(stylesProcessor: StylesProcessor): void;
