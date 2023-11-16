import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * UserDevice
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserDevice extends AbstractCrudObject {
    static get Fields(): Readonly<{
        hardware: "hardware";
        os: "os";
    }>;
}
