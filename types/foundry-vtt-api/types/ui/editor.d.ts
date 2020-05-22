declare function createEditor(options: DataCue, initialContent: object): any;

/**
 * Enrich HTML content by replacing or augmenting components of it
 * @param content	The original HTML content (as a string)
 * @param secrets	Remove secret tags?
 * @param entities	Replace dynamic entity links?
 * @param links		Replace hyperlink content?
 * @return			The enriched HTML content
 */
declare function enrichHTML(content: string, { secrets, entities, links }: { secrets: boolean, entities: boolean, links: boolean }): string;
