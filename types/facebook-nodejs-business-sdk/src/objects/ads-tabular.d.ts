import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsTabular
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsTabular extends AbstractCrudObject {
    static get Fields(): Readonly<{
        rows: "rows";
    }>;
}
