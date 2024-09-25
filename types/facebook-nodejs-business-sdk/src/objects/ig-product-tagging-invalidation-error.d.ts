import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IGProductTaggingInvalidationError
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGProductTaggingInvalidationError extends AbstractCrudObject {
    static get Fields(): Readonly<{
        description: "description";
        taggability_state: "taggability_state";
        title: "title";
    }>;
}
