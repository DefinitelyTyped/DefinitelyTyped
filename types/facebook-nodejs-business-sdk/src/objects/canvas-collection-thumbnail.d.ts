import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CanvasCollectionThumbnail
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CanvasCollectionThumbnail extends AbstractCrudObject {
    static get Fields(): Readonly<{
        element_child_index: "element_child_index";
        element_id: "element_id";
        photo: "photo";
    }>;
}
