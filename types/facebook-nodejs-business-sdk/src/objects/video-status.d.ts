import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VideoStatus
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoStatus extends AbstractCrudObject {
    static get Fields(): Readonly<{
        copyright_check_status: "copyright_check_status";
        processing_phase: "processing_phase";
        processing_progress: "processing_progress";
        publishing_phase: "publishing_phase";
        uploading_phase: "uploading_phase";
        video_status: "video_status";
    }>;
}
