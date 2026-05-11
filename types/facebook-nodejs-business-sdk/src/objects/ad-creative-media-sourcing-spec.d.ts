import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeMediaSourcingSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeMediaSourcingSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        bodies: "bodies";
        descriptions: "descriptions";
        images: "images";
        push_metadata_ids: "push_metadata_ids";
        related_media: "related_media";
        titles: "titles";
        videos: "videos";
    }>;
}
