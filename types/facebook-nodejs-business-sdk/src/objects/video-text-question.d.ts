import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VideoTextQuestion
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoTextQuestion extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        question_target_id: "question_target_id";
        question_text: "question_text";
        status: "status";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): VideoTextQuestion;
}
