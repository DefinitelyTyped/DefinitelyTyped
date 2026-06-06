import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AppLinks
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AppLinks extends AbstractCrudObject {
    static get Fields(): Readonly<{
        android: "android";
        id: "id";
        ios: "ios";
        ipad: "ipad";
        iphone: "iphone";
        web: "web";
        windows: "windows";
        windows_phone: "windows_phone";
        windows_universal: "windows_universal";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AppLinks>;
}
