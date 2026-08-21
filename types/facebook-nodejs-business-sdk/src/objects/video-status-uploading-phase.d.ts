import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VideoStatusUploadingPhase
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoStatusUploadingPhase extends AbstractCrudObject {
    static get Fields(): Readonly<{
        bytes_transferred: "bytes_transferred";
        errors: "errors";
        source_file_size: "source_file_size";
        status: "status";
    }>;
}
