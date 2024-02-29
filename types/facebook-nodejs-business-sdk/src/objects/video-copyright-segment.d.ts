import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * VideoCopyrightSegment
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoCopyrightSegment extends AbstractCrudObject {
    static get Fields(): Readonly<{
        duration_in_sec: "duration_in_sec";
        media_type: "media_type";
        start_time_in_sec: "start_time_in_sec";
    }>;
}
