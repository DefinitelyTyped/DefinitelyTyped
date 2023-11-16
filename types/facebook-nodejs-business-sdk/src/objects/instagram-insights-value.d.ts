import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * InstagramInsightsValue
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramInsightsValue extends AbstractCrudObject {
    static get Fields(): Readonly<{
        end_time: "end_time";
        value: "value";
    }>;
}
