import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
import IGComment from './ig-comment';
import ShadowIGMediaProductTags from './shadow-ig-media-product-tags';
export default class IGMedia extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getChildren(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getComments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createComment(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<IGComment>;
    getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    deleteProductTags(params?: Record<string, any>): Promise<any>;
    getProductTags(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createProductTag(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<ShadowIGMediaProductTags>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<IGMedia>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<IGMedia>;
}
