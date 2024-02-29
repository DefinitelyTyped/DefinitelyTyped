import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * Recommendation
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Recommendation extends AbstractCrudObject {
    static get Fields(): Readonly<{
        created_time: "created_time";
        has_rating: "has_rating";
        has_review: "has_review";
        open_graph_story: "open_graph_story";
        rating: "rating";
        recommendation_type: "recommendation_type";
        review_text: "review_text";
        reviewer: "reviewer";
    }>;
}
