import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import Comment from "./comment";
import Photo from "./photo";
/**
 * Album

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Album extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getComments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createComment(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Comment>;
    getLikes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createLike(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Album>;
    getPhotos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createPhoto(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Photo>;
    getPicture(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<Album>;
}
