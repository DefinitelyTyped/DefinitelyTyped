import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductDaEventSamplesBatch
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductDaEventSamplesBatch extends AbstractCrudObject {
    static get Fields(): Readonly<{
        samples: "samples";
        time_start: "time_start";
        time_stop: "time_stop";
    }>;
}
