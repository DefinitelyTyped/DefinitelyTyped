import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IGResumableVideoUploadStatus
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGResumableVideoUploadStatus extends AbstractCrudObject {
    static get Fields(): Readonly<{
        processing_phase: "processing_phase";
        uploading_phase: "uploading_phase";
    }>;
}
