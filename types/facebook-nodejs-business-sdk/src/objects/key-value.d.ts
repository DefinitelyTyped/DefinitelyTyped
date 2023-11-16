import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * KeyValue
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class KeyValue extends AbstractCrudObject {
    static get Fields(): Readonly<{
        key: "key";
        value: "value";
    }>;
}
