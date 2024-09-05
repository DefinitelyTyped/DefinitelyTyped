import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * RecommendedPagePost
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class RecommendedPagePost extends AbstractCrudObject {
    static get Fields(): Readonly<{
        intent_score: "intent_score";
        is_ig_media: "is_ig_media";
        post_id: "post_id";
    }>;
}
