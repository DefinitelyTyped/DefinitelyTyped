import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdPlacePageSet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdPlacePageSet extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get LocationTypes(): Record<string, any>;
    static get TargetedAreaType(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): AdPlacePageSet;
}
