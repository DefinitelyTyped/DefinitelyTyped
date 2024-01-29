import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CustomAudiencesTOS
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudiencesTOS extends AbstractCrudObject {
    static get Fields(): Readonly<{
        content: "content";
        id: "id";
        type: "type";
    }>;
}
