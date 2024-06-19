import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import Comment from "./comment";
import Photo from "./photo";
/**
 * Album
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Album extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getComments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createComment(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<Comment>;
    getLikes(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createLike(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<Album>;
    getPhotos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createPhoto(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<Photo>;
    getPicture(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): Album;
}
