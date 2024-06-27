import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WifiInformation
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WifiInformation extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        name: "name";
        network_access_type: "network_access_type";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<WifiInformation>;
}
