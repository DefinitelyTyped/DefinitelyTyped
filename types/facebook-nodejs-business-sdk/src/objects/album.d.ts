import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
import Comment from './comment';
import Photo from './photo';
export default class Album extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getComments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createComment(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null): Promise<Comment>;
    getLikes(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createLike(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null): Promise<Album>;
    getPhotos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createPhoto(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null): Promise<Photo>;
    getPicture(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: Array<string>, params?: Record<string, any>): Promise<Album>;
}
