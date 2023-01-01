import { Plugin } from '@ckeditor/ckeditor5-core';

/**
 * A set of helpers related to document lists.
 */
export default class DocumentListPropertiesUtils extends Plugin {
    static readonly pluginName: 'DocumentListPropertiesUtils';

    /**
     * Gets all the style types supported by given list type.
     */
    getAllSupportedStyleTypes(): string[];

    /**
     * Checks whether the given list-style-type is supported by numbered or bulleted list.
     */
    getListTypeFromListStyleType(listStyleType: string): 'bulleted' | 'numbered' | null;

    /**
     * Converts `type` attribute of `<ul>` or `<ol>` elements to `list-style-type` equivalent.
     */
    getListStyleTypeFromTypeAttribute(value: string): string | null;

    /**
     * Converts `list-style-type` style to `type` attribute of `<ul>` or `<ol>` elements.
     */
    getTypeAttributeFromListStyleType(value: string): string | null;
}
