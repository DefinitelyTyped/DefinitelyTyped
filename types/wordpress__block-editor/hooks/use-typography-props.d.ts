import { BlockAttributes } from "@wordpress/blocks";

/**
 * Provides the CSS class names and inline styles for a block's typography support
 * attributes.
 *
 * @param attributes              Block attributes.
 * @param fluidTypographySettings If boolean, whether the function should try to convert font sizes to fluid values,
 *                                                 otherwise an object containing theme fluid typography settings.
 *
 * @return Typography block support derived CSS classes & styles.
 */
export function getTypographyClassesAndStyles(
    attributes: BlockAttributes,
    fluidTypographySettings: { minFontSize?: string } | boolean,
): { className: string; style: Record<string, string> };
