import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * PageAboutStoryComposedBlock
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageAboutStoryComposedBlock extends AbstractCrudObject {
    static get Fields(): Readonly<{
        depth: "depth";
        entity_ranges: "entity_ranges";
        inline_style_ranges: "inline_style_ranges";
        text: "text";
        type: "type";
    }>;
}
