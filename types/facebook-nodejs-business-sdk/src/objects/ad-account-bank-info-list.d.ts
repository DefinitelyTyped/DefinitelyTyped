import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountBankInfoList
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountBankInfoList extends AbstractCrudObject {
    static get Fields(): Readonly<{
        banks: "banks";
    }>;
}
