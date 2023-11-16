import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * Engagement
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Engagement extends AbstractCrudObject {
    static get Fields(): Readonly<{
        count: "count";
        count_string: "count_string";
        count_string_with_like: "count_string_with_like";
        count_string_without_like: "count_string_without_like";
        social_sentence: "social_sentence";
        social_sentence_with_like: "social_sentence_with_like";
        social_sentence_without_like: "social_sentence_without_like";
    }>;
}
