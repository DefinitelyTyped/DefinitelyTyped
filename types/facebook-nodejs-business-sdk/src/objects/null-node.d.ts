import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * NullNode
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class NullNode extends AbstractCrudObject {
    static get Fields(): Readonly<{}>;
}
