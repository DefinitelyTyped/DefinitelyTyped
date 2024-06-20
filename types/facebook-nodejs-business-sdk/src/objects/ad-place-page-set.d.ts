import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdPlacePageSet

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdPlacePageSet extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get LocationTypes(): Record<string, any>;
    static get TargetedAreaType(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdPlacePageSet>;
}
