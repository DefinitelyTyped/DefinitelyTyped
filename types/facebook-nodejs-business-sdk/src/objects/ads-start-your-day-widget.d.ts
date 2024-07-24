import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsStartYourDayWidget
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsStartYourDayWidget extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        widget_id: "widget_id";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsStartYourDayWidget>;
}
