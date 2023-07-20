import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
import Comment from './comment';
import Photo from './photo';
export default class Album extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getComments(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getComments(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getComments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createComment(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Comment>;
    getLikes(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getLikes(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getLikes(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createLike(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Album>;
    getPhotos(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPhotos(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPhotos(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createPhoto(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Photo>;
    getPicture(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPicture(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPicture(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<Album>;
}
