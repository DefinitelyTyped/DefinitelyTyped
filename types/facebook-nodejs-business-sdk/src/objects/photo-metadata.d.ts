import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PhotoMetadata
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PhotoMetadata extends AbstractCrudObject {
    static get Fields(): Readonly<{
        camera_make: "camera_make";
        camera_model: "camera_model";
        datetime_modified: "datetime_modified";
        datetime_taken: "datetime_taken";
        exposure: "exposure";
        focal_length: "focal_length";
        fstop: "fstop";
        iso_speed: "iso_speed";
        offline_id: "offline_id";
        orientation: "orientation";
        original_height: "original_height";
        original_width: "original_width";
    }>;
}
