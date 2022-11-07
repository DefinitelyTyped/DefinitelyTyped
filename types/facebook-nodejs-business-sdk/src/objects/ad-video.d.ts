import { AbstractCrudObject } from '../abstract-crud-object';
import Cursor from '../cursor';
import FacebookAdsBatchApi from '../api-batch';
import type { SlideshowSpec } from '../video-uploader';
export default class AdVideo extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get filepath(): string;
    get slideshow_spec(): SlideshowSpec | null | undefined;
    create(
        batch: FacebookAdsBatchApi,
        failureHandler: (...args: any[]) => any,
        successHandler: (...args: any[]) => any,
    ): any;
    waitUntilEncodingReady(interval?: number, timeout?: number): void;
    getThumbnails(fields: Record<string, any>, params: Record<string, any>): Cursor;
}
