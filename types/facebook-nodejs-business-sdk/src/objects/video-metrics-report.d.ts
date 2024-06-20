import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VideoMetricsReport
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoMetricsReport extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<VideoMetricsReport>;
}
