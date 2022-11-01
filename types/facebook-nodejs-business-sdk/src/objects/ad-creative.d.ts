import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class AdCreative extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get CallToActionType(): Record<string, any>;
    static get ObjectType(): Record<string, any>;
    static get Status(): Record<string, any>;
    static get ApplinkTreatment(): Record<string, any>;
    static get AuthorizationCategory(): Record<string, any>;
    static get CategorizationCriteria(): Record<string, any>;
    static get CategoryMediaSource(): Record<string, any>;
    static get DynamicAdVoice(): Record<string, any>;
    static get Operator(): Record<string, any>;
    createAdLabel(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AdCreative>;
    getCreativeInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPreViews(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<AdCreative>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<AdCreative>;
}
