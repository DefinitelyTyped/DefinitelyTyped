import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
import Comment from './comment';
import Photo from './photo';
export default class Album extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getComments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createComment(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Comment>;
    getLikes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createLike(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Album>;
    getPhotos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createPhoto(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Photo>;
    getPicture(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: string[], params?: Record<string, any>): Promise<Album>;
}
