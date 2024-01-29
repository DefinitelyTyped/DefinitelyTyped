import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * Canvas
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Canvas extends AbstractCrudObject {
    static get Fields(): Readonly<{
        background_color: "background_color";
        body_elements: "body_elements";
        business_id: "business_id";
        canvas_link: "canvas_link";
        collection_hero_image: "collection_hero_image";
        collection_hero_video: "collection_hero_video";
        collection_thumbnails: "collection_thumbnails";
        dynamic_setting: "dynamic_setting";
        element_payload: "element_payload";
        elements: "elements";
        fb_body_elements: "fb_body_elements";
        id: "id";
        is_hidden: "is_hidden";
        is_published: "is_published";
        last_editor: "last_editor";
        linked_documents: "linked_documents";
        name: "name";
        owner: "owner";
        property_list: "property_list";
        source_template: "source_template";
        store_url: "store_url";
        style_list: "style_list";
        tags: "tags";
        ui_property_list: "ui_property_list";
        unused_body_elements: "unused_body_elements";
        update_time: "update_time";
        use_retailer_item_ids: "use_retailer_item_ids";
    }>;
    getPreviews(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getPreviews(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getPreviews(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<any, any>): Promise<Canvas>;
    update(fields: string[], params?: Record<any, any>): Promise<Canvas>;
}
