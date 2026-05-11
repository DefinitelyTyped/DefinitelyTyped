/// <reference types="node" />

/**
 * A section parsed from the input.
 */
interface Section {
    /** The key/name of the section (text after the opening delimiter) */
    key: string;
    /** The data content between the opening and closing delimiters */
    data: string;
    /** The content after the closing delimiter */
    content: string;
}

/**
 * Options for parsing sections.
 */
interface SectionMatterOptions {
    /**
     * Delimiter to use as the separator for sections.
     * @default '---'
     */
    section_delimiter?: string;

    /**
     * Function to be called on each section after it's parsed.
     * Can be used to transform the section data.
     */
    parse?: (section: Section, sections: Section[]) => void;
}

/**
 * Input object with content property.
 */
interface SectionMatterInput {
    content: string | Buffer;
    [key: string]: unknown;
}

/**
 * Result returned by section-matter.
 */
interface SectionMatterResult {
    /** Content before the first section */
    content: string;
    /** Array of parsed sections */
    sections: Section[];
    /** Additional properties from input object are preserved */
    [key: string]: unknown;
}

/**
 * Parse sections in the input with the given options.
 * Like front-matter, but supports multiple sections in a document.
 *
 * @param input - String, Buffer, or object with content property
 * @param options - Parse options or parse function
 * @returns Object with content string and sections array
 *
 * @example
 * ```javascript
 * var sections = require('section-matter');
 *
 * var result = sections('Content\n\n---one\ndata\n---\nSection content');
 * // { content: 'Content\n', sections: [{ key: 'one', data: 'data', content: 'Section content' }] }
 * ```
 */
declare function sectionMatter(
    input: string | Buffer | SectionMatterInput,
    options?: SectionMatterOptions | ((section: Section, sections: Section[]) => void),
): SectionMatterResult;

declare namespace sectionMatter {
    export { Section, SectionMatterInput, SectionMatterOptions, SectionMatterResult };
}

export = sectionMatter;
