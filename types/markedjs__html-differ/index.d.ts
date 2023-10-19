export class HtmlDiffer {
    constructor(options?: Options);
    constructor(preset: Preset | CustomPreset);

    diffHtml(html1: string, html2: string): ChangeObject[];
    isEqual(html1: string, html2: string): boolean;
}

export interface Options {
    /**
     * Sets what kind of respective attributes' content will be ignored during the comparison:
     * @default []
     */
    ignoreAttributes?: string[] | undefined;
    /**
     * Sets what kind of respective attributes' content will be compared as JSON objects, but not as strings.
     * In cases when the value of the attribute is an invalid JSON or can not be wrapped into a function, it will be compared as undefined.
     * @default []
     */
    compareAttributesAsJSON?: any[] | undefined;
    /**
     * Makes html-differ ignore whitespaces (spaces, tabs, new lines etc.) during the comparison.
     * @default true
     */
    ignoreWhitespaces?: boolean | undefined;
    /**
     * Makes html-differ ignore HTML comments during the comparison.
     * @default true
     */
    ignoreComments?: boolean | undefined;
    /**
     * Makes html-differ ignore end tags during the comparison.
     * @default false
     */
    ignoreEndTags?: boolean | undefined;
    /**
     * Makes html-differ ignore tags' duplicate attributes during the comparison.
     * From the list of the same tag's attributes,
     * the attribute which goes the first will be taken for comparison, others will be ignored
     * @default false
     */
    ignoreDuplicateAttributes?: boolean | undefined;
}

/**
 * Custom preset
 */
export interface CustomPreset extends Options {
    preset: Preset;
}

export type Preset = "bem" | string;

/**
 * Note that some cases may omit a particular flag field.
 * Comparison on the flag fields should always be done in a truthy or falsy manner.
 */
export interface ChangeObject {
    /** Text content */
    readonly value?: string | undefined;
    /** True if the value was inserted into the new string */
    readonly added?: boolean | undefined;
    /** True if the value was removed from the old string */
    readonly removed?: boolean | undefined;
}
