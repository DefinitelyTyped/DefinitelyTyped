import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * PageSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageSettings extends AbstractCrudObject {
    static get Fields(): Readonly<{
        setting: "setting";
        value: "value";
    }>;
}
