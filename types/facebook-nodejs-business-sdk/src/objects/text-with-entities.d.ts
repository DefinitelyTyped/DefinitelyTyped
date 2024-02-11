import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * TextWithEntities
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TextWithEntities extends AbstractCrudObject {
    static get Fields(): Readonly<{
        text: "text";
    }>;
}
