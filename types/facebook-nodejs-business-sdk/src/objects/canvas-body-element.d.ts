import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CanvasBodyElement
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CanvasBodyElement extends AbstractCrudObject {
    static get Fields(): Readonly<{
        element: "element";
    }>;
}
