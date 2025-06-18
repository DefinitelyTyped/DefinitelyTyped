import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VideoTextQuestion
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoTextQuestion extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        question_target_id: "question_target_id";
        question_text: "question_text";
        status: "status";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<VideoTextQuestion>;
}
