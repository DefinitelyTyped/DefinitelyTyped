import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
import IGComment from './ig-comment';
import ShadowIGMediaProductTags from './shadow-ig-media-product-tags';
export default class IGMedia extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getChildren(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getComments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createComment(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<IGComment>;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteProductTags(params?: Record<string, any>): Promise<any>;
    getProductTags(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createProductTag(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ShadowIGMediaProductTags>;
    get(fields: string[], params?: Record<string, any>): Promise<IGMedia>;
    update(fields: string[], params?: Record<string, any>): Promise<IGMedia>;
}
