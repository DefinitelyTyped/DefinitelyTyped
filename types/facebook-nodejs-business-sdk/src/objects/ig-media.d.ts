import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import BrandedContentShadowIGUserID from "./branded-content-shadow-ig-user-id";
import IGComment from "./ig-comment";
import ShadowIGMediaProductTags from "./shadow-ig-media-product-tags";
/**
 * IGMedia

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGMedia extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getBoostAdsList(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getBrandedContentPartnerPromote(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createBrandedContentPartnerPromote(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<BrandedContentShadowIGUserID>;
    getChildren(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCollaborators(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getComments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createComment(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<IGComment>;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    deleteProductTags(params?: Record<string, any>): Promise<any>;
    getProductTags(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createProductTag(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ShadowIGMediaProductTags>;
    get(fields: string[], params?: Record<string, any>): Promise<IGMedia>;    get(fields: string[], params?: Record<string, any>): Promise<IGMedia>;
}
