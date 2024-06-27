import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * SmartPixelInsights
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SmartPixelInsights extends AbstractCrudObject {
    static get Fields(): Readonly<{
        source: "source";
        stats: "stats";
    }>;
}
