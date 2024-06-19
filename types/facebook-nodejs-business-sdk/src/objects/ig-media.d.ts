import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import BrandedContentShadowIGUserID from "./branded-content-shadow-ig-user-id";
import IGComment from "./ig-comment";
import ShadowIGMediaProductTags from "./shadow-ig-media-product-tags";
/**
 * IGMedia
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGMedia extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getBoostAdsList(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getBrandedContentPartnerPromote(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createBrandedContentPartnerPromote(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<BrandedContentShadowIGUserID>;
    getChildren(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCollaborators(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getComments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createComment(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<IGComment>;
    getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    deleteProductTags(params?: Record<string, any>): Promise<any>;
    getProductTags(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createProductTag(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<ShadowIGMediaProductTags>;
    get(fields: Array<string>, params?: Record<string, any>): IGMedia;
    update(fields: Array<string>, params?: Record<string, any>): IGMedia;
}
