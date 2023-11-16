import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AgeRange
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AgeRange extends AbstractCrudObject {
    static get Fields(): Readonly<{
        max: "max";
        min: "min";
    }>;
}
