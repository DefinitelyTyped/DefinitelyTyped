import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * FBLiteToNTTransitions
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FBLiteToNTTransitions extends AbstractCrudObject {
    static get Fields(): Readonly<{
        transition: "transition";
    }>;
}
