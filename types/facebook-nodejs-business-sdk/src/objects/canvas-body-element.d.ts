import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CanvasBodyElement
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CanvasBodyElement extends AbstractCrudObject {
    static get Fields(): Readonly<{
        element: "element";
    }>;
}
