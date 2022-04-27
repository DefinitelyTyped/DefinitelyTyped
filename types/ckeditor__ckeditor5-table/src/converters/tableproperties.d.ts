import { Conversion } from '@ckeditor/ckeditor5-engine';

/**
 * Conversion helper for upcasting attributes using normalized styles.
 */
export function upcastStyleToAttribute(
    conversion: Conversion,
    options: {
        modelAttribute: string;
        styleName: string;
        viewElement: string;
        defaultValue?: string;
        reduceBoxSides?: boolean;
    },
): void;

/**
 * Conversion helper for upcasting border styles for view elements.
 */
export function upcastBorderStyles(
    conversion: Conversion,
    viewElementName: string,
    modelAttributes: { color: string; style: string; width: string },
    defaultBorder: { color: string; style: string; width: string },
): void;

/**
 * Conversion helper for downcasting an attribute to a style.
 */
export function downcastAttributeToStyle(
    conversion: Conversion,
    options: { modelElement: string; modelAttribute: string; styleName: string },
): void;

/**
 * Conversion helper for downcasting attributes from the model table to a view table (not to `<figure>`).
 */
export function downcastTableAttribute(
    conversion: Conversion,
    options: { modelAttribute: string; styleName: string },
): void;
