import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VideoTextQuestion
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoTextQuestion extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<VideoTextQuestion>;
}
