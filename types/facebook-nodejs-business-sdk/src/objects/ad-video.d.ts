import { AbstractCrudObject } from '../abstract-crud-object';
import Cursor from '../cursor';
import FacebookAdsBatchApi from '../api-batch';
import type { SlideshowSpec } from "../video-uploader";
/**
 * AdVideo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdVideo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        filepath: "filepath";
        id: "id";
        slideshow_spec: "slideshow_spec";
    }>;
    get filepath(): string;
    get slideshow_spec(): SlideshowSpec | null | undefined;
    /**
     * Uploads filepath and creates the AdVideo object from it.
     * It requires 'filepath' property to be defined.
     */
    create(batch: FacebookAdsBatchApi, failureHandler: any, successHandler: any): any;
    waitUntilEncodingReady(interval?: number, timeout?: number): void;
    /**
     *  Returns all the thumbnails associated with the ad video
     */
    getThumbnails(fields: Record<any, any>, params: Record<any, any>): Cursor | Promise<any>;
}
