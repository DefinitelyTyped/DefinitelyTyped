import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdLimitSetting
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdLimitSetting extends AbstractCrudObject {
    static get Fields(): Readonly<{
        limit_allocation_by_page_advertisers: "limit_allocation_by_page_advertisers";
    }>;
}
