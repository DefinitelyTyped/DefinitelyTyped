import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * LeadGenThankYouPageGatedFile
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenThankYouPageGatedFile extends AbstractCrudObject {
    static get Fields(): Readonly<{
        file_cdn_url: "file_cdn_url";
        file_name: "file_name";
        file_size_bytes: "file_size_bytes";
        id: "id";
    }>;
}
