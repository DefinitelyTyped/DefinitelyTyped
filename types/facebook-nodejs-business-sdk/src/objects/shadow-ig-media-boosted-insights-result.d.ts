import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ShadowIGMediaBoostedInsightsResult
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShadowIGMediaBoostedInsightsResult extends AbstractCrudObject {
    static get Fields(): Readonly<{
        description: "description";
        name: "name";
        organic_media_id: "organic_media_id";
        source_type: "source_type";
        title: "title";
        values: "values";
    }>;
}
