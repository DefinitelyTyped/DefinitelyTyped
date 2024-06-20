import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WifiInformation

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WifiInformation extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<WifiInformation>;
}
