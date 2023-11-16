import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativeCollectionThumbnailInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeCollectionThumbnailInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        element_child_index: "element_child_index";
        element_crops: "element_crops";
        element_id: "element_id";
    }>;
}
