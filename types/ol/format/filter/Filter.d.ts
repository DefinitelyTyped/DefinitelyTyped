export default abstract class Filter {
    constructor(tagName: string);
    /**
     * The XML tag name for a filter.
     */
    getTagName(): string;
}
