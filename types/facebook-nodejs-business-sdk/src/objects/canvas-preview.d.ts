import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CanvasPreview
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CanvasPreview extends AbstractCrudObject {
    static get Fields(): Readonly<{
        body: "body";
    }>;
}
