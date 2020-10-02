import { NamedFormatConfiguration } from '@wordpress/rich-text';

/**
 * Returns all the available format types.
 */
export function getFormatTypes(): NamedFormatConfiguration[];

/**
 * Returns a format type by name.
 */
export function getFormatType(name: string): NamedFormatConfiguration | undefined;

/**
 * Gets the format type, if any, that can handle a bare element (without a
 * data-format-type attribute), given the tag name of this element.
 */
export function getFormatTypeForBareElement(
    bareElementTagName: keyof HTMLElementTagNameMap
): NamedFormatConfiguration | undefined;

/**
 * Gets the format type, if any, that can handle an element, given its classes.
 */
export function getFormatTypeForClassName(elementClassName: string): NamedFormatConfiguration | undefined;
