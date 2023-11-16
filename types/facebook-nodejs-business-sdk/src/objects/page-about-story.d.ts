import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * PageAboutStory
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageAboutStory extends AbstractCrudObject {
    static get Fields(): Readonly<{
        composed_text: "composed_text";
        cover_photo: "cover_photo";
        entity_map: "entity_map";
        id: "id";
        is_published: "is_published";
        page_id: "page_id";
        title: "title";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<PageAboutStory>;
}
