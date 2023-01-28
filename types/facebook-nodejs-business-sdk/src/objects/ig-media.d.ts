import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
import IGComment from './ig-comment';
import ShadowIGMediaProductTags from './shadow-ig-media-product-tags';
export default class IGMedia extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getChildren(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getChildren(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getChildren(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getComments(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getComments(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getComments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createComment(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<IGComment>;
    getInsights(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getInsights(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteProductTags(params?: Record<string, any>): Promise<any>;
    getProductTags(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getProductTags(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getProductTags(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createProductTag(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ShadowIGMediaProductTags>;
    get(fields: string[], params?: Record<string, any>): Promise<IGMedia>;
    update(fields: string[], params?: Record<string, any>): Promise<IGMedia>;
}
