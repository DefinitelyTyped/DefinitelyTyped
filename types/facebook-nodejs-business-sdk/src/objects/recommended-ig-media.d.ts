import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * RecommendedIGMedia
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class RecommendedIGMedia extends AbstractCrudObject {
    static get Fields(): Readonly<{
        intent_score: "intent_score";
        media: "media";
    }>;
}
