import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
/**
 * Persona
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Persona extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        name: "name";
        profile_picture_url: "profile_picture_url";
    }>;
    delete(fields: Array<string>, params?: Record<any, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<any, any>): Persona;
}
