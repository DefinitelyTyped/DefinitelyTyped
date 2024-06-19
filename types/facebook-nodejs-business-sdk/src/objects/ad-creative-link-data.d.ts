import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeLinkData
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkData extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get FormatOption(): Record<string, any>;
}
