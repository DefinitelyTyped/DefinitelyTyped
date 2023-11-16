import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CopyrightReferenceContainer
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CopyrightReferenceContainer extends AbstractCrudObject {
    static get Fields(): Readonly<{
        content_type: "content_type";
        copyright_creation_time: "copyright_creation_time";
        download_hd_url: "download_hd_url";
        duration_in_sec: "duration_in_sec";
        id: "id";
        iswc: "iswc";
        metadata: "metadata";
        published_time: "published_time";
        thumbnail_url: "thumbnail_url";
        title: "title";
        universal_content_id: "universal_content_id";
        writer_names: "writer_names";
    }>;
}
