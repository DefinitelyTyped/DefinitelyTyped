import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativeInsights
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeInsights extends AbstractCrudObject {
    static get Fields(): Readonly<{
        aesthetics: "aesthetics";
    }>;
}
