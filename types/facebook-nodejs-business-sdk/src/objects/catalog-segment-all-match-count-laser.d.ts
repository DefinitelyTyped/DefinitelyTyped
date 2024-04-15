import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CatalogSegmentAllMatchCountLaser
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogSegmentAllMatchCountLaser extends AbstractCrudObject {
    static get Fields(): Readonly<{
        date_start: "date_start";
        date_stop: "date_stop";
        event: "event";
        source: "source";
        total_matched_content_ids: "total_matched_content_ids";
        unique_matched_content_ids: "unique_matched_content_ids";
    }>;
}
