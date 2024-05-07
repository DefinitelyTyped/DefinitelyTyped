import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativeTextData
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeTextData extends AbstractCrudObject {
    static get Fields(): Readonly<{
        message: "message";
    }>;
}
