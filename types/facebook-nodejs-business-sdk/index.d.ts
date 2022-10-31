// Type definitions for facebook-nodejs-business-sdk 15.0
// Project: https://github.com/facebook/facebook-nodejs-business-sdk
// Definitions by: Viktor Daiev <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'facebook-nodejs-business-sdk/src/http-status' {
    const _default: {
        OK: string;
        NOT_MODIFIED: string;
    };
    export default _default;
}
declare module 'facebook-nodejs-business-sdk/src/http' {
    export default class Http {
        static request(
            method: string,
            url: string,
            data: Record<string, any>,
            files: Record<string, any>,
            useMultipartFormData: Boolean,
            showHeader: Boolean,
        ): Promise<any>;
        static xmlHttpRequest(method: any, url: any, data: any): Promise<any>;
        static requestPromise(
            method: string,
            url: string,
            data: Record<string, any>,
            files: Record<string, any>,
            useMultipartFormData?: Boolean,
            showHeader?: Boolean,
        ): Promise<any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/exceptions' {
    class FacebookError extends Error {
        constructor(error: any);
    }

    class FacebookRequestError extends FacebookError {
        constructor(response: any, method: any, url: any, data: any);
    }

    export { FacebookRequestError };
}
declare module 'facebook-nodejs-business-sdk/src/crash-reporter' {
    export default class CrashReporter {
        static _instance: CrashReporter;
        _active: boolean;
        constructor();
        static enable(): void;
        static disable(): void;
    }
}
declare module 'facebook-nodejs-business-sdk/src/api' {
    export default class FacebookAdsApi {
        _debug: boolean;
        _showHeader: boolean;
        accessToken: string;
        locale: string;
        static _defaultApi: FacebookAdsApi;
        static get VERSION(): string;
        static get SDK_VERSION(): string;
        static get GRAPH(): string;
        static get GRAPH_VIDEO(): string;
        constructor(accessToken: string, locale?: string, crash_log?: boolean);
        static init(accessToken: string, locale?: string, crash_log?: boolean): FacebookAdsApi;
        static setDefaultApi(api: FacebookAdsApi): void;
        static getDefaultApi(): FacebookAdsApi;
        getAppID(): Promise<any>;
        setDebug(flag: boolean): FacebookAdsApi;
        setShowHeader(flag: boolean): FacebookAdsApi;
        call(
            method: string,
            path: string | Array<string> | String,
            params?: Record<string, any>,
            files?: Record<string, any>,
            useMultipartFormData?: boolean,
            urlOverride?: string,
        ): Promise<any>;
        static _encodeParams(params: Record<string, any>): string;
    }
}
declare module 'facebook-nodejs-business-sdk/src/abstract-object' {
    export default class AbstractObject {
        _data: any;
        _fields: Array<string>;
        $key: string;
        $value: unknown;
        static get Fields(): {};
        constructor();
        _defineProperty(field: string): void;
        set(field: string, value: unknown): AbstractObject;
        setData(data: Record<string, any>): AbstractObject;
        exportData(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/utils' {
    export default class Utils {
        static normalizeEndpoint(str: string): string;
        static removePreceedingSlash(str: string): string;
    }
}
declare module 'facebook-nodejs-business-sdk/src/cursor' {
    import FacebookAdsApi from 'facebook-nodejs-business-sdk/src/api';
    export default class Cursor extends Array<Record<string, any>> {
        sourceObject: Record<string, any>;
        _api: FacebookAdsApi;
        _targetClass: Record<string, any>;
        _loadPage: (path: string) => Promise<any>;
        _buildObjectsFromResponse: (response: Record<string, any>) => Array<Record<string, any>>;
        paging: any;
        summary: any;
        clear: () => void;
        next: () => Promise<any>;
        previous: () => Promise<any>;
        hasNext: () => boolean;
        hasPrevious: () => boolean;
        set: (array: Array<Record<string, any>>) => void;
        constructor(
            sourceObject: Record<string, any>,
            targetClass: Record<string, any>,
            params: Record<string, any>,
            endpoint: string | null | undefined,
        );
    }
}
declare module 'facebook-nodejs-business-sdk/src/abstract-crud-object' {
    import FacebookAdsApi from 'facebook-nodejs-business-sdk/src/api';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export class AbstractCrudObject extends AbstractObject {
        _parentId: string | null | undefined;
        _changes: Record<string, any>;
        _api: FacebookAdsApi;
        id: string;
        constructor(
            id: string | number | null | undefined,
            data: Record<string, any> | undefined,
            parentId: string | null | undefined,
            api: FacebookAdsApi | null | undefined,
        );
        _defineProperty(field: string): void;
        setData(data: Record<string, any>): AbstractCrudObject;
        exportData(): Record<string, any>;
        exportAllData(): Record<string, any>;
        clearHistory(): Record<string, any>;
        getId(): string;
        getParentId(): string;
        getNodePath(): string;
        getApi(): FacebookAdsApi;
        read(fields: Array<string>, params?: Record<string, any>): Promise<any>;
        update(params?: Record<string, any>): Promise<any>;
        delete(params?: Record<string, any>): Promise<any>;
        getEdge(
            targetClass: Record<string, any>,
            fields: Array<string>,
            params: Record<string, any> | undefined,
            fetchFirstPage: boolean | undefined,
            endpoint: string | null | undefined,
        ): Cursor;
        createEdge(
            endpoint: string,
            fields: Array<string>,
            params?: Record<string, any>,
            targetClassConstructor?: (...args: Array<any>) => any,
            pathOverride?: string | null | undefined,
        ): Promise<any>;
        deleteEdge(endpoint: string, params?: Record<string, any>): Promise<any>;
        static getByIds(
            ids: Array<number>,
            fields: Array<string>,
            params: Record<string, any> | undefined,
            api: FacebookAdsApi,
        ): Promise<any>;
    }
    export default AbstractCrudObject;
}
declare module 'facebook-nodejs-business-sdk/src/api-request' {
    class APIRequest {
        _nodeId: string;
        _method: string;
        _endpoint: string;
        _path: Array<string>;
        _fields: Array<string>;
        _params: Record<string, any>;
        _fileParams: Record<string, any>;
        _fileCounter: number;
        constructor(nodeId: string, method: string, endpoint: string);
        get nodeId(): string;
        get method(): string;
        get endpoint(): string;
        get path(): Array<string>;
        get fields(): Array<string>;
        get params(): Record<string, any>;
        get fileParams(): Record<string, any>;
        addFile(filePath: string): APIRequest;
        addFiles(filePaths: Array<string>): APIRequest;
        addField(field: string): APIRequest;
        addFields(fields: Array<string>): APIRequest;
        addParam(key: string, value: any): APIRequest;
        addParams(params: Record<string, any>): APIRequest;
    }
    export default APIRequest;
}
declare module 'facebook-nodejs-business-sdk/src/api-response' {
    class APIResponse {
        _body: Record<string, any>;
        _httpStatus: string;
        _headers: Record<string, any>;
        _call: Record<string, any>;
        _response: Record<string, any>;
        constructor(response: Record<string, any>, call?: Record<string, any>);
        get body(): any;
        get headers(): any;
        get etag(): any;
        get status(): string;
        get isSuccess(): boolean;
        get error(): any;
    }
    export default APIResponse;
}
declare module 'facebook-nodejs-business-sdk/src/api-batch' {
    import FacebookAdsApi from 'facebook-nodejs-business-sdk/src/api';
    import APIRequest from 'facebook-nodejs-business-sdk/src/api-request';
    class FacebookAdsApiBatch {
        _api: FacebookAdsApi;
        _files: Array<Record<string, any>>;
        _batch: Array<Record<string, any>>;
        _successCallbacks: Array<(...args: Array<any>) => any>;
        _failureCallbacks: Array<(...args: Array<any>) => any>;
        _requests: Array<APIRequest>;
        constructor(
            api: FacebookAdsApi,
            successCallback?: (...args: Array<any>) => any,
            failureCallback?: (...args: Array<any>) => any,
        );
        add(
            method: string,
            relativePath: Array<string> | string,
            params?: Record<string, any>,
            files?: Record<string, any>,
            successCallback?: (...args: Array<any>) => any,
            failureCallback?: (...args: Array<any>) => any,
            request?: APIRequest,
        ): {
            attachedFiles: undefined | string;
            body: undefined | string;
            method: string;
            name: any;
            relative_url: string;
        };
        addRequest(
            request: APIRequest,
            successCallback?: (...args: Array<any>) => any,
            failureCallback?: (...args: Array<any>) => any,
        ): {
            attachedFiles: undefined | string;
            body: undefined | string;
            method: string;
            name: any;
            relative_url: string;
        };
        execute(): Promise<unknown>;
    }
    export default FacebookAdsApiBatch;
}
declare module 'facebook-nodejs-business-sdk/src/objects/serverside/delivery-category' {
    const _default_1: Readonly<{
        IN_STORE: 'in_store';
        CURBSIDE: 'curbside';
        HOME_DELIVERY: 'home_delivery';
    }>;
    export default _default_1;
}
declare module 'facebook-nodejs-business-sdk/src/objects/serverside/utils' {
    export default class ServerSideUtils {
        static normalizeAndHash(input: string, field: string): any;
        static normalizeCountry(country: string): string;
        static normalizeCity(city: string): string;
        static normalizeCurrency(currency: string): string;
        static normalizeDeliveryCategory(input: string): string;
        static normalizeEmail(email: string): string;
        static normalizeGender(gender: string): string | null;
        static normalizeF5NameField(name: string): string;
        static normalizePhone(phone_number: string): string;
        static normalizeState(state: string): string;
        static normalizeZip(zip: string): string | null;
        static normalizeDobd(dobd: string): string;
        static normalizeDobm(dobm: string): string;
        static normalizeDoby(doby: string): string;
        static isInternationalPhoneNumber(phone_number: string): boolean;
        static toSHA256(input: string | null | undefined): any;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/serverside/content' {
    export default class Content {
        _id: string;
        _quantity: number;
        _item_price: number;
        _title: string;
        _description: string;
        _category: string;
        _brand: string;
        _delivery_category: string;
        constructor(
            id: string,
            quantity: number,
            item_price: number,
            title: string,
            description: string,
            brand: string,
            category: string,
            delivery_category: string,
        );
        get id(): string;
        set id(id: string);
        setId(id: string): Content;
        get quantity(): number;
        set quantity(quantity: number);
        setQuantity(quantity: number): Content;
        get item_price(): number;
        set item_price(item_price: number);
        setItemPrice(item_price: number): Content;
        get title(): string;
        set title(title: string);
        setTitle(title: string): Content;
        get description(): string;
        set description(description: string);
        setDescription(description: string): Content;
        get brand(): string;
        set brand(brand: string);
        setBrand(brand: string): Content;
        get category(): string;
        set category(category: string);
        setCategory(category: string): Content;
        get delivery_category(): string;
        set delivery_category(delivery_category: string);
        setDeliveryCategory(delivery_category: string): Content;
        normalize(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/serverside/custom-data' {
    import Content from 'facebook-nodejs-business-sdk/src/objects/serverside/content';
    export default class CustomData {
        _value: number;
        _currency: string;
        _content_name: string;
        _content_category: string;
        _content_ids: Array<string>;
        _contents: Array<Content>;
        _content_type: string;
        _order_id: string;
        _predicted_ltv: number;
        _num_items: number;
        _search_string: string;
        _status: string;
        _item_number: string;
        _delivery_category: string;
        _custom_properties: Record<string, any>;
        constructor(
            value: number,
            currency: string,
            content_name: string,
            content_category: string,
            content_ids: Array<string>,
            contents: Array<Content>,
            content_type: string,
            order_id: string,
            predicted_ltv: number,
            num_items: number,
            search_string: string,
            status: string,
            item_number: string,
            delivery_category: string,
            custom_properties: Record<string, any>,
        );
        get value(): number;
        set value(value: number);
        setValue(value: number): CustomData;
        get currency(): string;
        set currency(currency: string);
        setCurrency(currency: string): CustomData;
        get content_name(): string;
        set content_name(content_name: string);
        setContentName(content_name: string): CustomData;
        get content_category(): string;
        set content_category(content_category: string);
        setContentCategory(content_category: string): CustomData;
        get content_ids(): Array<string>;
        set content_ids(content_ids: Array<string>);
        setContentIds(content_ids: Array<string>): CustomData;
        get contents(): Array<Content>;
        set contents(contents: Array<Content>);
        setContents(contents: Array<Content>): CustomData;
        get content_type(): string;
        set content_type(content_type: string);
        setContentType(content_type: string): CustomData;
        get order_id(): string;
        set order_id(order_id: string);
        setOrderId(order_id: string): CustomData;
        get predicted_ltv(): number;
        set predicted_ltv(predicted_ltv: number);
        setPredictedLtv(predicted_ltv: number): CustomData;
        get num_items(): number;
        set num_items(num_items: number);
        setNumItems(num_items: number): CustomData;
        get search_string(): string;
        set search_string(search_string: string);
        setSearchString(search_string: string): CustomData;
        get item_number(): string;
        set item_number(item_number: string);
        setItemNumber(item_number: string): CustomData;
        get delivery_category(): string;
        set delivery_category(delivery_category: string);
        setDeliveryCategory(delivery_category: string): CustomData;
        get custom_properties(): Record<string, any>;
        set custom_properties(custom_properties: Record<string, any>);
        setCustomProperties(custom_properties: Record<string, any>): CustomData;
        get status(): string;
        set status(status: string);
        setStatus(status: string): CustomData;
        add_custom_property(key: string, value: string): void;
        normalize(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/assigned-user' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AssignedUser extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/da-check' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class DACheck extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get ConnectionMethod(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-activity' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdActivity extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get EventType(): Record<string, any>;
        static get Category(): Record<string, any>;
        static get DataSource(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-place-page-set' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdPlacePageSet extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get LocationTypes(): Record<string, any>;
        static get TargetedAreaType(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<AdPlacePageSet>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-insights' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativeInsights extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-preview' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdPreview extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get AdFormat(): Record<string, any>;
        static get RenderType(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
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
            pathOverride?: string | null | undefined,
        ): Promise<AdCreative>;
        getCreativeInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getPreViews(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<AdCreative>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<AdCreative>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-rule-history' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdRuleHistory extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Action(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-rule' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class AdRule extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Status(): Record<string, any>;
        static get UiCreationSource(): Record<string, any>;
        createExecute(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getHistory(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createPreview(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdRule>;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<AdRule>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<AdRule>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ads-insights' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdsInsights extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get ActionAttributionWindows(): Record<string, any>;
        static get ActionBreakdowns(): Record<string, any>;
        static get ActionReportTime(): Record<string, any>;
        static get Breakdowns(): Record<string, any>;
        static get DatePreset(): Record<string, any>;
        static get Level(): Record<string, any>;
        static get SummaryActionBreakdowns(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-report-run' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import FacebookAdsApi from 'facebook-nodejs-business-sdk/src/api';
    export default class AdReportRun extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<AdReportRun>;
        constructor(
            id: string | number | null | undefined,
            data: Record<string, any> | undefined,
            parentId: string | null | undefined,
            api: FacebookAdsApi | null | undefined,
        );
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/lead' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    export default class Lead extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<Lead>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/targeting-sentence-line' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class TargetingSentenceLine extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import AdReportRun from 'facebook-nodejs-business-sdk/src/objects/ad-report-run';
    export default class Ad extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get BidType(): Record<string, any>;
        static get ConfiguredStatus(): Record<string, any>;
        static get EffectiveStatus(): Record<string, any>;
        static get Status(): Record<string, any>;
        static get DatePreset(): Record<string, any>;
        static get ExecutionOptions(): Record<string, any>;
        static get Operator(): Record<string, any>;
        static get StatusOption(): Record<string, any>;
        getAdCreatives(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAdLabel(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Ad>;
        getAdRulesGoverned(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getCopies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createCopy(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Ad>;
        getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getInsightsAsync(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdReportRun>;
        getLeads(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getPreViews(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getTargetingSentenceLines(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<Ad>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<Ad>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-async-request' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    export default class AdAsyncRequest extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Statuses(): Record<string, any>;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<AdAsyncRequest>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-campaign-delivery-estimate' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCampaignDeliveryEstimate extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get OptimizationGoal(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-set' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import AdReportRun from 'facebook-nodejs-business-sdk/src/objects/ad-report-run';
    export default class AdSet extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get BidStrategy(): Record<string, any>;
        static get BillingEvent(): Record<string, any>;
        static get ConfiguredStatus(): Record<string, any>;
        static get EffectiveStatus(): Record<string, any>;
        static get OptimizationGoal(): Record<string, any>;
        static get Status(): Record<string, any>;
        static get DatePreset(): Record<string, any>;
        static get DestinationType(): Record<string, any>;
        static get ExecutionOptions(): Record<string, any>;
        static get FullFunnelExplorationMode(): Record<string, any>;
        static get MultiOptimizationGoalWeight(): Record<string, any>;
        static get OptimizationSubEvent(): Record<string, any>;
        static get TuneForCategory(): Record<string, any>;
        static get Operator(): Record<string, any>;
        static get StatusOption(): Record<string, any>;
        getActivities(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAdStudies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAdCreatives(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        deleteAdLabels(params?: Record<string, any>): Promise<any>;
        createAdLabel(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdSet>;
        getAdRulesGoverned(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAds(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAsyncAdRequests(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getCopies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createCopy(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdSet>;
        getDeliveryEstimate(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getInsightsAsync(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdReportRun>;
        getTargetingSentenceLines(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<AdSet>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<AdSet>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/campaign' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import AdReportRun from 'facebook-nodejs-business-sdk/src/objects/ad-report-run';
    export default class Campaign extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get BidStrategy(): Record<string, any>;
        static get ConfiguredStatus(): Record<string, any>;
        static get EffectiveStatus(): Record<string, any>;
        static get Status(): Record<string, any>;
        static get DatePreset(): Record<string, any>;
        static get ExecutionOptions(): Record<string, any>;
        static get Objective(): Record<string, any>;
        static get SmartPromotionType(): Record<string, any>;
        static get SpecialAdCategories(): Record<string, any>;
        static get SpecialAdCategoryCountry(): Record<string, any>;
        static get Operator(): Record<string, any>;
        static get SpecialAdCategory(): Record<string, any>;
        static get StatusOption(): Record<string, any>;
        getAdStudies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAdLabel(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Campaign>;
        getAdRulesGoverned(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAds(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAdSets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getCopies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createCopy(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Campaign>;
        getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getInsightsAsync(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdReportRun>;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<Campaign>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<Campaign>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-study-cell' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class AdStudyCell extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get CreationTemplate(): Record<string, any>;
        getAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAdSets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getCampaigns(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<AdStudyCell>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<AdStudyCell>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/private-lift-study-instance' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class PrivateLiftStudyInstance extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Operation(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<PrivateLiftStudyInstance>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<PrivateLiftStudyInstance>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-placement' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdPlacement extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<AdPlacement>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-network-analytics-sync-query-result' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdNetworkAnalyticsSyncQueryResult extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get AggregationPeriod(): Record<string, any>;
        static get Breakdowns(): Record<string, any>;
        static get Metrics(): Record<string, any>;
        static get OrderingColumn(): Record<string, any>;
        static get OrderingType(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-network-analytics-async-query-result' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdNetworkAnalyticsAsyncQueryResult extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/custom-conversion-stats-result' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CustomConversionStatsResult extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Aggregation(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/custom-conversion' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class CustomConversion extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get CustomEventType(): Record<string, any>;
        getStats(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<CustomConversion>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<CustomConversion>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/instagram-user' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class InstagramUser extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        getAgencies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAuthorizedAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAuthorizedAdAccount(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<InstagramUser>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<InstagramUser>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/custom-audience-session' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CustomAudienceSession extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/custom-audienceshared-account-info' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CustomAudiencesharedAccountInfo extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/custom-audience' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class CustomAudience extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get ClaimObjective(): Record<string, any>;
        static get ContentType(): Record<string, any>;
        static get CustomerFileSource(): Record<string, any>;
        static get Subtype(): Record<string, any>;
        static get ActionSource(): Record<string, any>;
        deleteAdAccounts(params?: Record<string, any>): Promise<any>;
        getAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAdAccount(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<CustomAudience>;
        getAds(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getSessions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getSharedAccountInfo(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        deleteUsers(params?: Record<string, any>): Promise<any>;
        createUser(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<CustomAudience>;
        createUsersReplace(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<CustomAudience>;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<CustomAudience>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<CustomAudience>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/offline-conversion-data-set-upload' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class OfflineConversionDataSetUpload extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Order(): Record<string, any>;
        static get SortBy(): Record<string, any>;
        getProgress(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getPullSessions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<OfflineConversionDataSetUpload>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/offline-conversion-data-set' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import OfflineConversionDataSetUpload from 'facebook-nodejs-business-sdk/src/objects/offline-conversion-data-set-upload';
    export default class OfflineConversionDataSet extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get PermittedRoles(): Record<string, any>;
        static get RelationshipType(): Record<string, any>;
        getAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAdAccount(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<OfflineConversionDataSet>;
        getAgencies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAgency(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<OfflineConversionDataSet>;
        getAudiences(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getCustomConversions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createEvent(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getStats(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getUploads(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createUpload(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<OfflineConversionDataSetUpload>;
        createValidate(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<OfflineConversionDataSet>;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<OfflineConversionDataSet>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<OfflineConversionDataSet>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/profile-picture-source' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ProfilePictureSource extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Type(): Record<string, any>;
        static get BreakingChange(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/profile' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class Profile extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get ProfileType(): Record<string, any>;
        static get Type(): Record<string, any>;
        getPicture(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<Profile>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/comment' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class Comment extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get CommentPrivacyValue(): Record<string, any>;
        static get Filter(): Record<string, any>;
        static get LiveFilter(): Record<string, any>;
        static get Order(): Record<string, any>;
        getComments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createComment(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Comment>;
        deleteLikes(params?: Record<string, any>): Promise<any>;
        getLikes(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createLike(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Comment>;
        getReactions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<Comment>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<Comment>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/rtb-dynamic-post' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class RTBDynamicPost extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        getComments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getLikes(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<RTBDynamicPost>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/insights-result' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class InsightsResult extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get DatePreset(): Record<string, any>;
        static get Period(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/post' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import Comment from 'facebook-nodejs-business-sdk/src/objects/comment';
    export default class Post extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get BackdatedTimeGranularity(): Record<string, any>;
        static get CheckinEntryPoint(): Record<string, any>;
        static get Formatting(): Record<string, any>;
        static get PlaceAttachmentSetting(): Record<string, any>;
        static get PostSurfacesBlacklist(): Record<string, any>;
        static get PostingToRedspace(): Record<string, any>;
        static get TargetSurface(): Record<string, any>;
        static get UnpublishedContentType(): Record<string, any>;
        static get FeedStoryVisibility(): Record<string, any>;
        static get TimelineVisibility(): Record<string, any>;
        getAttachments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getComments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createComment(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Comment>;
        getDynamicPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        deleteLikes(params?: Record<string, any>): Promise<any>;
        createLike(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Post>;
        getReactions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getSharedPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getSponsorTags(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getTo(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<Post>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<Post>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/page-post' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import Comment from 'facebook-nodejs-business-sdk/src/objects/comment';
    export default class PagePost extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get With(): Record<string, any>;
        static get BackdatedTimeGranularity(): Record<string, any>;
        static get FeedStoryVisibility(): Record<string, any>;
        static get TimelineVisibility(): Record<string, any>;
        getAttachments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getComments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createComment(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Comment>;
        getDynamicPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        deleteLikes(params?: Record<string, any>): Promise<any>;
        getLikes(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createLike(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<PagePost>;
        getReactions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getSharedPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getSponsorTags(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getTo(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<PagePost>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<PagePost>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/photo' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import Comment from 'facebook-nodejs-business-sdk/src/objects/comment';
    export default class Photo extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get BackdatedTimeGranularity(): Record<string, any>;
        static get UnpublishedContentType(): Record<string, any>;
        static get Type(): Record<string, any>;
        getComments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createComment(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Comment>;
        getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getLikes(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createLike(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Photo>;
        getSponsorTags(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<Photo>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/album' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import Comment from 'facebook-nodejs-business-sdk/src/objects/comment';
    import Photo from 'facebook-nodejs-business-sdk/src/objects/photo';
    export default class Album extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        getComments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createComment(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Comment>;
        getLikes(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createLike(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Album>;
        getPhotos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createPhoto(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Photo>;
        getPicture(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<Album>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/page-call-to-action' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    export default class PageCallToAction extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get AndroidDestinationType(): Record<string, any>;
        static get IphoneDestinationType(): Record<string, any>;
        static get Type(): Record<string, any>;
        static get WebDestinationType(): Record<string, any>;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<PageCallToAction>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<PageCallToAction>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/canvas-body-element' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CanvasBodyElement extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/text-with-entities' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class TextWithEntities extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/canvas' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class Canvas extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        getPreViews(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<Canvas>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<Canvas>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/chat-plugin' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ChatPlugin extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/url' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class URL extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Scopes(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<URL>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<URL>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/page-commerce-eligibility' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class PageCommerceEligibility extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/commerce-order' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class CommerceOrder extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Filters(): Record<string, any>;
        static get State(): Record<string, any>;
        static get ReasonCode(): Record<string, any>;
        createAcknowledgeOrder(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<CommerceOrder>;
        getCancellations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createCancellation(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<CommerceOrder>;
        createFulfillOrder(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<CommerceOrder>;
        getItems(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getPayments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getPromotionDetails(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getPromotions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getRefunds(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createRefund(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<CommerceOrder>;
        getReturns(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createReturn(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<CommerceOrder>;
        getShipments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createShipment(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<CommerceOrder>;
        createUpdateShipment(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<CommerceOrder>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<CommerceOrder>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/commerce-payout' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CommercePayout extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/commerce-order-transaction-detail' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class CommerceOrderTransactionDetail extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        getItems(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getTaxDetails(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ar-effects-batch-status' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AREffectsBatchStatus extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/catalog-item-channels-to-integrity-status' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CatalogItemChannelsToIntegrityStatus extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/automotive-model' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class AutomotiveModel extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get ImageFetchStatus(): Record<string, any>;
        getAugmentedRealitiesMetadata(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getChannelsToIntegrityStatus(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getVideosMetadata(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<AutomotiveModel>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-catalog-category' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ProductCatalogCategory extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get CategorizationCriteria(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/check-batch-request-status' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CheckBatchRequestStatus extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get ErrorPriority(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/collaborative-ads-share-settings' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CollaborativeAdsShareSettings extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<CollaborativeAdsShareSettings>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<CollaborativeAdsShareSettings>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-catalog-data-source' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ProductCatalogDataSource extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get IngestionSourceType(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/destination' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class Destination extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get ImageFetchStatus(): Record<string, any>;
        getAugmentedRealitiesMetadata(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getChannelsToIntegrityStatus(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getVideosMetadata(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<Destination>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-catalog-diagnostic-group' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ProductCatalogDiagnosticGroup extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get AffectedChannels(): Record<string, any>;
        static get AffectedEntity(): Record<string, any>;
        static get AffectedFeatures(): Record<string, any>;
        static get Severity(): Record<string, any>;
        static get Type(): Record<string, any>;
        static get AffectedEntities(): Record<string, any>;
        static get Severities(): Record<string, any>;
        static get Types(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-event-stat' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ProductEventStat extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get DeviceType(): Record<string, any>;
        static get Event(): Record<string, any>;
        static get Breakdowns(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/external-event-source' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ExternalEventSource extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/flight' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class Flight extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get ImageFetchStatus(): Record<string, any>;
        getAugmentedRealitiesMetadata(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getChannelsToIntegrityStatus(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getVideosMetadata(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<Flight>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<Flight>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/home-listing' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class HomeListing extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get ImageFetchStatus(): Record<string, any>;
        getAugmentedRealitiesMetadata(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getChannelsToIntegrityStatus(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getVideosMetadata(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<HomeListing>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<HomeListing>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-catalog-hotel-rooms-batch' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ProductCatalogHotelRoomsBatch extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/dynamic-price-config-by-date' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class DynamicPriceConfigByDate extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<DynamicPriceConfigByDate>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/hotel-room' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class HotelRoom extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        getPricingVariables(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<HotelRoom>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<HotelRoom>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/hotel' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class Hotel extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get ImageFetchStatus(): Record<string, any>;
        getAugmentedRealitiesMetadata(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getChannelsToIntegrityStatus(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getHotelRooms(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getVideosMetadata(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<Hotel>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<Hotel>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/media-title' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class MediaTitle extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get ImageFetchStatus(): Record<string, any>;
        static get ContentCategory(): Record<string, any>;
        getAugmentedRealitiesMetadata(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getChannelsToIntegrityStatus(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getVideosMetadata(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<MediaTitle>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<MediaTitle>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-catalog-pricing-variables-batch' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ProductCatalogPricingVariablesBatch extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/vehicle-offer' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class VehicleOffer extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get ImageFetchStatus(): Record<string, any>;
        getAugmentedRealitiesMetadata(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getChannelsToIntegrityStatus(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getVideosMetadata(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<VehicleOffer>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/vehicle' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class Vehicle extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get ImageFetchStatus(): Record<string, any>;
        static get Availability(): Record<string, any>;
        static get BodyStyle(): Record<string, any>;
        static get Condition(): Record<string, any>;
        static get Drivetrain(): Record<string, any>;
        static get FuelType(): Record<string, any>;
        static get StateOfVehicle(): Record<string, any>;
        static get Transmission(): Record<string, any>;
        static get VehicleType(): Record<string, any>;
        getAugmentedRealitiesMetadata(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getChannelsToIntegrityStatus(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getVideosMetadata(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<Vehicle>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<Vehicle>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-set' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class ProductSet extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        getAutomotiveModels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getDestinations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getFlights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getHomeListings(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getHotels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getMediaTitles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getProducts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getVehicleOffers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getVehicles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<ProductSet>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<ProductSet>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-item' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class ProductItem extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get AgeGroup(): Record<string, any>;
        static get Availability(): Record<string, any>;
        static get Condition(): Record<string, any>;
        static get Gender(): Record<string, any>;
        static get ImageFetchStatus(): Record<string, any>;
        static get ReviewStatus(): Record<string, any>;
        static get ShippingWeightUnit(): Record<string, any>;
        static get Visibility(): Record<string, any>;
        static get CommerceTaxCategory(): Record<string, any>;
        static get ErrorPriority(): Record<string, any>;
        static get ErrorType(): Record<string, any>;
        static get MarkedForProductLaunch(): Record<string, any>;
        static get OriginCountry(): Record<string, any>;
        static get WaComplianceCategory(): Record<string, any>;
        getChannelsToIntegrityStatus(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getProductSets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<ProductItem>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<ProductItem>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-feed-rule' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    export default class ProductFeedRule extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get RuleType(): Record<string, any>;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<ProductFeedRule>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<ProductFeedRule>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-feed-schedule' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ProductFeedSchedule extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get DayOfWeek(): Record<string, any>;
        static get Interval(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<ProductFeedSchedule>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-feed-upload-error-sample' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ProductFeedUploadErrorSample extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<ProductFeedUploadErrorSample>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-feed-rule-suggestion' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ProductFeedRuleSuggestion extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-feed-upload-error' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class ProductFeedUploadError extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get AffectedSurfaces(): Record<string, any>;
        static get Severity(): Record<string, any>;
        static get ErrorPriority(): Record<string, any>;
        getSamples(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getSuggestedRules(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<ProductFeedUploadError>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-feed-upload' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class ProductFeedUpload extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get InputMethod(): Record<string, any>;
        createErrorReport(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ProductFeedUpload>;
        getErrors(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<ProductFeedUpload>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-feed' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import ProductFeedRule from 'facebook-nodejs-business-sdk/src/objects/product-feed-rule';
    import ProductFeedUpload from 'facebook-nodejs-business-sdk/src/objects/product-feed-upload';
    export default class ProductFeed extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Delimiter(): Record<string, any>;
        static get IngestionSourceType(): Record<string, any>;
        static get QuotedFieldsMode(): Record<string, any>;
        static get Encoding(): Record<string, any>;
        static get FeedType(): Record<string, any>;
        static get ItemSubType(): Record<string, any>;
        static get OverrideType(): Record<string, any>;
        getAutomotiveModels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getDestinations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getFlights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getHomeListings(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getHotels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getMediaTitles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getProducts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getRules(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createRule(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ProductFeedRule>;
        createSupplementaryFeedAssoc(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getUploadSchedules(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createUploadSchedule(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ProductFeed>;
        getUploads(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createUpload(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ProductFeedUpload>;
        getVehicleOffers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getVehicles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<ProductFeed>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<ProductFeed>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-group' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import ProductItem from 'facebook-nodejs-business-sdk/src/objects/product-item';
    export default class ProductGroup extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        getProducts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createProduct(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ProductItem>;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<ProductGroup>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<ProductGroup>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-catalog-product-sets-batch' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ProductCatalogProductSetsBatch extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-catalog' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import ProductCatalogCategory from 'facebook-nodejs-business-sdk/src/objects/product-catalog-category';
    import HomeListing from 'facebook-nodejs-business-sdk/src/objects/home-listing';
    import Hotel from 'facebook-nodejs-business-sdk/src/objects/hotel';
    import MediaTitle from 'facebook-nodejs-business-sdk/src/objects/media-title';
    import ProductFeed from 'facebook-nodejs-business-sdk/src/objects/product-feed';
    import ProductGroup from 'facebook-nodejs-business-sdk/src/objects/product-group';
    import ProductSet from 'facebook-nodejs-business-sdk/src/objects/product-set';
    import ProductItem from 'facebook-nodejs-business-sdk/src/objects/product-item';
    import Vehicle from 'facebook-nodejs-business-sdk/src/objects/vehicle';
    export default class ProductCatalog extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Vertical(): Record<string, any>;
        static get PermittedRoles(): Record<string, any>;
        static get PermittedTasks(): Record<string, any>;
        static get Tasks(): Record<string, any>;
        static get Standard(): Record<string, any>;
        static get ItemSubType(): Record<string, any>;
        deleteAgencies(params?: Record<string, any>): Promise<any>;
        getAgencies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAgency(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ProductCatalog>;
        getArEffectsBatchStatus(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
        getAssignedUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAssignedUser(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ProductCatalog>;
        getAutomotiveModels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createBatch(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ProductCatalog>;
        createCatalogWebsiteSetting(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getCategories(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createCategory(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ProductCatalogCategory>;
        getCheckBatchRequestStatus(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getCollaborativeAdsLsbImageBank(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getCollaborativeAdsShareSettings(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        createCpasLsbImageBank(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getDataSources(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getDestinations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getDiagnostics(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getEventStats(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        deleteExternalEventSources(params?: Record<string, any>): Promise<any>;
        getExternalEventSources(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createExternalEventSource(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ProductCatalog>;
        getFlights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getHomeListings(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createHomeListing(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<HomeListing>;
        getHotelRoomsBatch(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createHotelRoomsBatch(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ProductCatalog>;
        getHotels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createHotel(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Hotel>;
        createItemsBatch(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ProductCatalog>;
        createLocalizedItemsBatch(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ProductCatalog>;
        getMediaTitles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createMediaTitle(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<MediaTitle>;
        getPricingVariablesBatch(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createPricingVariablesBatch(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ProductCatalog>;
        getProductFeeds(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createProductFeed(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ProductFeed>;
        getProductGroups(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createProductGroup(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ProductGroup>;
        getProductSets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createProductSet(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ProductSet>;
        getProductSetsBatch(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getProducts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createProduct(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ProductItem>;
        getVehicleOffers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getVehicles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createVehicle(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Vehicle>;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<ProductCatalog>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<ProductCatalog>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/commerce-merchant-settings-setup-status' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CommerceMerchantSettingsSetupStatus extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/shop' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class Shop extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<Shop>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/commerce-merchant-settings' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class CommerceMerchantSettings extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        createAcknowledgeOrder(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<CommerceMerchantSettings>;
        getCommerceOrders(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getCommercePayouts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getCommerceTransactions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getOnsiteConversionEvents(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getOrderManagementApps(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createOrderManagementApp(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<CommerceMerchantSettings>;
        getProductCatalogs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getReturns(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getSellerIssues(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getSetupStatus(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getShippingProfiles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createShippingProfile(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getShops(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getTaxSettings(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createWhatsappChannel(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<CommerceMerchantSettings>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/unified-thread' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class UnifiedThread extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Platform(): Record<string, any>;
        getMessages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<UnifiedThread>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/page-user-message-thread-label' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    export default class PageUserMessageThreadLabel extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        deleteLabel(params?: Record<string, any>): Promise<any>;
        createLabel(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<PageUserMessageThreadLabel>;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<PageUserMessageThreadLabel>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/custom-user-settings' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CustomUserSettings extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/null-node' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class NullNode extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/app-request-former-recipient' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AppRequestFormerRecipient extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/app-request' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    export default class AppRequest extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<AppRequest>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/business-user' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class BusinessUser extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Role(): Record<string, any>;
        getAssignedAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAssignedBusinessAssetGroups(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getAssignedPages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAssignedProductCatalogs(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<BusinessUser>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<BusinessUser>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/fundraiser-person-to-charity' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class FundraiserPersonToCharity extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get FundraiserType(): Record<string, any>;
        getDonations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createEndFundraiser(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getExternalDonations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createExternalDonation(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<FundraiserPersonToCharity>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<FundraiserPersonToCharity>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/game-item' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class GameItem extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Action(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<GameItem>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/video-thumbnail' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class VideoThumbnail extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/video-uploader' {
    import AdVideo from 'facebook-nodejs-business-sdk/src/objects/ad-video';
    import FacebookAdsApi from 'facebook-nodejs-business-sdk/src/api';
    class VideoUploader {
        _session: VideoUploadSession | null | undefined;
        constructor();
        upload(video: AdVideo, waitForEncoding: boolean): Record<string, any>;
    }
    interface SlideshowSpec {
        images_urls: Array<string>;
        duration_ms: number;
        transition_ms: number;
    }
    class VideoUploadSession {
        _accountId: string;
        _api: FacebookAdsApi;
        _endOffset: number;
        _filePath: string | null | undefined;
        _sessionId: string;
        _slideshowSpec: SlideshowSpec | null | undefined;
        _startOffset: number;
        _startRequestManager: VideoUploadStartRequestManager;
        _transferRequestManager: VideoUploadTransferRequestManager;
        _finishRequestManager: VideoUploadFinishRequestManager;
        _video: AdVideo;
        _waitForEncoding: boolean;
        constructor(video: AdVideo, waitForEncoding?: boolean);
        start(): Record<string, any>;
        getStartRequestContext(): VideoUploadRequestContext;
        getTransferRequestContext(): VideoUploadRequestContext;
        getFinishRequestContext(): VideoUploadRequestContext;
    }
    class VideoUploadRequestManager {
        _api: FacebookAdsApi;
        constructor(api: FacebookAdsApi);
        sendRequest(context: VideoUploadRequestContext): Record<string, any>;
        getParamsFromContext(context: VideoUploadRequestContext): Record<string, any>;
    }
    class VideoUploadStartRequestManager extends VideoUploadRequestManager {
        sendRequest(context: VideoUploadRequestContext): Record<string, any>;
        getParamsFromContext(context: VideoUploadRequestContext): Record<string, any>;
    }
    class VideoUploadTransferRequestManager extends VideoUploadRequestManager {
        _startOffset: number;
        _endOffset: number;
        sendRequest(context: VideoUploadRequestContext): Record<string, any>;
    }
    class VideoUploadFinishRequestManager extends VideoUploadRequestManager {
        sendRequest(context: VideoUploadRequestContext): Record<string, any>;
        getParamsFromContext(context: VideoUploadRequestContext): Record<string, any>;
    }
    class VideoUploadRequestContext {
        _accountId: string;
        _fileName: string;
        _filePath: string;
        _fileSize: number;
        _name: string;
        _sessionId: string;
        _startOffset: number;
        _endOffset: number;
        _slideshowSpec: SlideshowSpec;
        _videoFileChunk: string;
        get accountId(): string;
        set accountId(accountId: string);
        get fileName(): string;
        set fileName(fileName: string);
        get filePath(): string;
        set filePath(filePath: string);
        get fileSize(): number;
        set fileSize(fileSize: number);
        get name(): string;
        set name(name: string);
        get sessionId(): string;
        set sessionId(sessionId: string);
        get startOffset(): number;
        set startOffset(startOffset: number);
        get endOffset(): number;
        set endOffset(endOffset: number);
        get slideshowSpec(): SlideshowSpec;
        set slideshowSpec(slideshowSpec: SlideshowSpec);
        get videoFileChunk(): string;
        set videoFileChunk(videoFileChunk: string);
    }
    class VideoUploadRequest {
        _params: Record<string, any>;
        _files: Record<string, any>;
        _api: FacebookAdsApi;
        constructor(api: FacebookAdsApi);
        send(path: string | Array<string>): Record<string, any>;
        setParams(params: Record<string, any>, files?: Record<string, any>): void;
    }
    class VideoEncodingStatusChecker {
        static waitUntilReady(api: FacebookAdsApi, videoId: number, interval: number, timeout: number): Promise<void>;
        static getStatus(api: FacebookAdsApi, videoId: number): any;
    }
    export { VideoUploader, VideoUploadRequest, VideoEncodingStatusChecker };
    export type { SlideshowSpec };
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-video' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import FacebookAdsBatchApi from 'facebook-nodejs-business-sdk/src/api-batch';
    import type { SlideshowSpec } from 'facebook-nodejs-business-sdk/src/video-uploader';
    export default class AdVideo extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get filepath(): string;
        get slideshow_spec(): SlideshowSpec | null | undefined;
        create(
            batch: FacebookAdsBatchApi,
            failureHandler: (...args: Array<any>) => any,
            successHandler: (...args: Array<any>) => any,
        ): any;
        waitUntilEncodingReady(interval?: number, timeout?: number): void;
        getThumbnails(fields: Record<string, any>, params: Record<string, any>): Cursor;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/group' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import Album from 'facebook-nodejs-business-sdk/src/objects/album';
    import Post from 'facebook-nodejs-business-sdk/src/objects/post';
    import LiveVideo from 'facebook-nodejs-business-sdk/src/objects/live-video';
    import Photo from 'facebook-nodejs-business-sdk/src/objects/photo';
    import AdVideo from 'facebook-nodejs-business-sdk/src/objects/ad-video';
    export default class Group extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get JoinSetting(): Record<string, any>;
        static get PostPermissions(): Record<string, any>;
        static get Purpose(): Record<string, any>;
        static get GroupType(): Record<string, any>;
        deleteAdmins(params?: Record<string, any>): Promise<any>;
        createAdmin(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Group>;
        getAlbums(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAlbum(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Album>;
        getAttachmentSurfaces(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAttachmentSurface(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getDocs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getEvents(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getFeaturedCards(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createFeaturedCard(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getFeed(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createFeed(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Post>;
        getFiles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getGroups(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createGroup(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Group>;
        getLiveVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createLiveVideo(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<LiveVideo>;
        deleteMembers(params?: Record<string, any>): Promise<any>;
        createMember(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Group>;
        getOptedInMembers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createPhoto(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Photo>;
        getPicture(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createShiftSetting(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createVideo(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdVideo>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<Group>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<Group>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/user-id-for-app' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class UserIDForApp extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/user-id-for-page' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class UserIDForPage extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/payment-engine-payment' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class PaymentEnginePayment extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Reason(): Record<string, any>;
        createDispute(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<PaymentEnginePayment>;
        createRefund(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<PaymentEnginePayment>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<PaymentEnginePayment>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/permission' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class Permission extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Status(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/user' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import Page from 'facebook-nodejs-business-sdk/src/objects/page';
    import AdStudy from 'facebook-nodejs-business-sdk/src/objects/ad-study';
    import Business from 'facebook-nodejs-business-sdk/src/objects/business';
    import Post from 'facebook-nodejs-business-sdk/src/objects/post';
    import FundraiserPersonToCharity from 'facebook-nodejs-business-sdk/src/objects/fundraiser-person-to-charity';
    import GameItem from 'facebook-nodejs-business-sdk/src/objects/game-item';
    import LiveVideo from 'facebook-nodejs-business-sdk/src/objects/live-video';
    import Photo from 'facebook-nodejs-business-sdk/src/objects/photo';
    import AdVideo from 'facebook-nodejs-business-sdk/src/objects/ad-video';
    export default class User extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get LocalNewsMegaphoneDismissStatus(): Record<string, any>;
        static get LocalNewsSubscriptionStatus(): Record<string, any>;
        static get Filtering(): Record<string, any>;
        static get Type(): Record<string, any>;
        deleteAccessTokens(params?: Record<string, any>): Promise<any>;
        createAccessToken(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<User>;
        getAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAccount(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Page>;
        getAdStudies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAdStudy(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdStudy>;
        getAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAlbums(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createApplication(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<User>;
        getAppRequestFormerRecipients(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getAppRequests(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAssignedAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAssignedBusinessAssetGroups(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getAssignedPages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAssignedProductCatalogs(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getAvatars(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getBusinessUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        deleteBusinesses(params?: Record<string, any>): Promise<any>;
        getBusinesses(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createBusiness(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Business>;
        getConversations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getCustomLabels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getEvents(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getFeed(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createFeed(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Post>;
        getFriends(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getFundraisers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createFundraiser(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<FundraiserPersonToCharity>;
        createGameItem(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<GameItem>;
        createGameTime(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getGroups(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getIdsForApps(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getIdsForBusiness(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getIdsForPages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getLikes(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getLiveVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createLiveVideo(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<LiveVideo>;
        getMusic(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createNotification(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<User>;
        getPaymentTransactions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        deletePermissions(params?: Record<string, any>): Promise<any>;
        getPermissions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getPersonalAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getPhotos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createPhoto(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Photo>;
        getPicture(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getRichMediaDocuments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createStagingResource(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<User>;
        getVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createVideo(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdVideo>;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<User>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<User>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/live-video-error' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class LiveVideoError extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<LiveVideoError>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/live-video-input-stream' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class LiveVideoInputStream extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<LiveVideoInputStream>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/video-poll' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class VideoPoll extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Status(): Record<string, any>;
        static get Action(): Record<string, any>;
        getPollOptions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<VideoPoll>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<VideoPoll>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/live-video' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import LiveVideoInputStream from 'facebook-nodejs-business-sdk/src/objects/live-video-input-stream';
    import VideoPoll from 'facebook-nodejs-business-sdk/src/objects/video-poll';
    export default class LiveVideo extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Projection(): Record<string, any>;
        static get SpatialAudioFormat(): Record<string, any>;
        static get Status(): Record<string, any>;
        static get StereoscopicMode(): Record<string, any>;
        static get StreamType(): Record<string, any>;
        static get BroadcastStatus(): Record<string, any>;
        static get Source(): Record<string, any>;
        static get LiveCommentModerationSetting(): Record<string, any>;
        static get PersistentStreamKeyStatus(): Record<string, any>;
        getBlockedUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getComments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getCrosspostSharedPages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getCrosspostedBroadcasts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getErrors(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createInputStream(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<LiveVideoInputStream>;
        getPolls(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createPoll(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<VideoPoll>;
        getReactions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<LiveVideo>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<LiveVideo>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/event' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import LiveVideo from 'facebook-nodejs-business-sdk/src/objects/live-video';
    export default class Event extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Category(): Record<string, any>;
        static get OnlineEventFormat(): Record<string, any>;
        static get Type(): Record<string, any>;
        static get EventStateFilter(): Record<string, any>;
        static get TimeFilter(): Record<string, any>;
        getComments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getFeed(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getLiveVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createLiveVideo(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<LiveVideo>;
        getPhotos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getPicture(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getRoles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getTicketTiers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<Event>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/image-copyright' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    export default class ImageCopyright extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get GeoOwnership(): Record<string, any>;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<ImageCopyright>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<ImageCopyright>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/instant-article-insights-query-result' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class InstantArticleInsightsQueryResult extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Breakdown(): Record<string, any>;
        static get Period(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/instant-article' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class InstantArticle extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<InstantArticle>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/instant-articles-stats' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class InstantArticlesStats extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/leadgen-form' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import Lead from 'facebook-nodejs-business-sdk/src/objects/lead';
    export default class LeadgenForm extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Status(): Record<string, any>;
        static get Locale(): Record<string, any>;
        getLeads(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getTestLeads(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createTestLead(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Lead>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<LeadgenForm>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<LeadgenForm>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/media-fingerprint' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class MediaFingerprint extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get FingerprintContentType(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<MediaFingerprint>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<MediaFingerprint>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/messaging-feature-review' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class MessagingFeatureReview extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/messenger-profile' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class MessengerProfile extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/user-page-one-time-opt-in-token-settings' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class UserPageOneTimeOptInTokenSettings extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<UserPageOneTimeOptInTokenSettings>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/persona' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    export default class Persona extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<Persona>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/recommendation' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class Recommendation extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/page-settings' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class PageSettings extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/tab' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class Tab extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/page-thread-owner' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class PageThreadOwner extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/video-copyright-rule' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class VideoCopyrightRule extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Source(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<VideoCopyrightRule>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/video-copyright' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class VideoCopyright extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get ContentCategory(): Record<string, any>;
        static get MonitoringType(): Record<string, any>;
        getUpdateRecords(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<VideoCopyright>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<VideoCopyright>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/video-list' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class VideoList extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        getVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<VideoList>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/page' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import CanvasBodyElement from 'facebook-nodejs-business-sdk/src/objects/canvas-body-element';
    import Canvas from 'facebook-nodejs-business-sdk/src/objects/canvas';
    import PageUserMessageThreadLabel from 'facebook-nodejs-business-sdk/src/objects/page-user-message-thread-label';
    import ImageCopyright from 'facebook-nodejs-business-sdk/src/objects/image-copyright';
    import AdVideo from 'facebook-nodejs-business-sdk/src/objects/ad-video';
    import InstagramUser from 'facebook-nodejs-business-sdk/src/objects/instagram-user';
    import InstantArticle from 'facebook-nodejs-business-sdk/src/objects/instant-article';
    import LeadgenForm from 'facebook-nodejs-business-sdk/src/objects/leadgen-form';
    import LiveVideo from 'facebook-nodejs-business-sdk/src/objects/live-video';
    import MediaFingerprint from 'facebook-nodejs-business-sdk/src/objects/media-fingerprint';
    import Persona from 'facebook-nodejs-business-sdk/src/objects/persona';
    import Photo from 'facebook-nodejs-business-sdk/src/objects/photo';
    import ProfilePictureSource from 'facebook-nodejs-business-sdk/src/objects/profile-picture-source';
    import VideoCopyrightRule from 'facebook-nodejs-business-sdk/src/objects/video-copyright-rule';
    import VideoCopyright from 'facebook-nodejs-business-sdk/src/objects/video-copyright';
    export default class Page extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Attire(): Record<string, any>;
        static get FoodStyles(): Record<string, any>;
        static get PickupOptions(): Record<string, any>;
        static get TemporaryStatus(): Record<string, any>;
        static get PermittedTasks(): Record<string, any>;
        static get Tasks(): Record<string, any>;
        static get Alignment(): Record<string, any>;
        static get EntryPointIcon(): Record<string, any>;
        static get EntryPointLabel(): Record<string, any>;
        static get GreetingDialogDisplay(): Record<string, any>;
        static get GuestChatMode(): Record<string, any>;
        static get MobileChatDisplay(): Record<string, any>;
        static get BackdatedTimeGranularity(): Record<string, any>;
        static get CheckinEntryPoint(): Record<string, any>;
        static get Formatting(): Record<string, any>;
        static get PlaceAttachmentSetting(): Record<string, any>;
        static get PostSurfacesBlacklist(): Record<string, any>;
        static get PostingToRedspace(): Record<string, any>;
        static get TargetSurface(): Record<string, any>;
        static get UnpublishedContentType(): Record<string, any>;
        static get PublishStatus(): Record<string, any>;
        static get MessagingType(): Record<string, any>;
        static get NotificationType(): Record<string, any>;
        static get SenderAction(): Record<string, any>;
        static get Platform(): Record<string, any>;
        static get Model(): Record<string, any>;
        static get DeveloperAction(): Record<string, any>;
        static get SubscribedFields(): Record<string, any>;
        createAcknowledgeOrder(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Page>;
        getAdsPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        deleteAgencies(params?: Record<string, any>): Promise<any>;
        getAgencies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAgency(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Page>;
        getAlbums(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getArExperience(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
        getAssignedUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAssignedUser(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Page>;
        deleteBlocked(params?: Record<string, any>): Promise<any>;
        getBlocked(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createBlocked(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        createBusinessDatum(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getCallToActions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getCanvasElements(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createCanvasElement(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<CanvasBodyElement>;
        getCanvases(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createCanvase(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Canvas>;
        getChatPlugin(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createChatPlugin(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Page>;
        getClaimedUrls(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getCommerceEligibility(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getCommerceMerchantSettings(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getCommerceOrders(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getCommercePayouts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getCommerceTransactions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getConversations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createCopyrightManualClaim(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getCopyrightWhitelistedPartners(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getCrosspostWhitelistedPages(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getCustomLabels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createCustomLabel(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<PageUserMessageThreadLabel>;
        deleteCustomUserSettings(params?: Record<string, any>): Promise<any>;
        getCustomUserSettings(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createCustomUserSetting(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Page>;
        getEvents(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createExtendThreadControl(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Page>;
        getFantasyGames(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getFeed(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createFeed(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Page>;
        getGlobalBrandChildren(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getGroups(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getImageCopyrights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createImageCopyright(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ImageCopyright>;
        getIndexedVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getInstagramAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getInstantArticles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createInstantArticle(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<InstantArticle>;
        getInstantArticlesInsights(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        createInstantArticlesPublish(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Page>;
        getInstantArticlesStats(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getInvoiceAccessBankAccount(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        createInvoiceAccessInvoiceEdit(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getLeadGenForms(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createLeadGenForm(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<LeadgenForm>;
        getLikes(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getLiveVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createLiveVideo(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<LiveVideo>;
        deleteLocations(params?: Record<string, any>): Promise<any>;
        getLocations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createLocation(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Page>;
        getMediaFingerprints(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createMediaFingerprint(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<MediaFingerprint>;
        createMessageAttachment(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        createMessage(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Page>;
        getMessagingFeatureReview(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        deleteMessengerProfile(params?: Record<string, any>): Promise<any>;
        getMessengerProfile(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createMessengerProfile(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Page>;
        createNlpConfig(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Page>;
        getNotificationMessageTokens(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        createNotificationMessagesDevSupport(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Page>;
        getPageBackedInstagramAccounts(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        createPageBackedInstagramAccount(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<InstagramUser>;
        createPageWhatsappNumberVerification(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Page>;
        createPassThreadControl(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Page>;
        createPassThreadMetadatum(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Page>;
        getPersonas(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createPersona(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Persona>;
        getPhotos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createPhoto(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Photo>;
        getPicture(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createPicture(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ProfilePictureSource>;
        getPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getProductCatalogs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getPublishedPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getRatings(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createReleaseThreadControl(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Page>;
        createRequestThreadControl(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Page>;
        getRoles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getRtbDynamicPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getScheduledPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getSecondaryReceivers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getSettings(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createSetting(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Page>;
        getShopSetupStatus(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        deleteSubscribedApps(params?: Record<string, any>): Promise<any>;
        getSubscribedApps(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createSubscribedApp(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Page>;
        getTabs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getTagged(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createTakeThreadControl(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Page>;
        getThreadOwner(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getThreads(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createUnlinkAccount(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Page>;
        getVideoCopyrightRules(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createVideoCopyrightRule(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<VideoCopyrightRule>;
        createVideoCopyright(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<VideoCopyright>;
        getVideoLists(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getVideoReels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createVideoReel(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdVideo>;
        getVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createVideo(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdVideo>;
        getVisitorPosts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<Page>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<Page>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/business-asset-group' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class BusinessAssetGroup extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get AdaccountTasks(): Record<string, any>;
        static get OfflineConversionDataSetTasks(): Record<string, any>;
        static get PageTasks(): Record<string, any>;
        static get PixelTasks(): Record<string, any>;
        deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
        getAssignedUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAssignedUser(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<BusinessAssetGroup>;
        deleteContainedAdAccounts(params?: Record<string, any>): Promise<any>;
        getContainedAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createContainedAdAccount(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<BusinessAssetGroup>;
        deleteContainedApplications(params?: Record<string, any>): Promise<any>;
        getContainedApplications(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createContainedApplication(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<BusinessAssetGroup>;
        deleteContainedCustomConversions(params?: Record<string, any>): Promise<any>;
        getContainedCustomConversions(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        createContainedCustomConversion(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<BusinessAssetGroup>;
        deleteContainedInstagramAccounts(params?: Record<string, any>): Promise<any>;
        getContainedInstagramAccounts(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        createContainedInstagramAccount(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<BusinessAssetGroup>;
        deleteContainedOfflineConversionDataSets(params?: Record<string, any>): Promise<any>;
        getContainedOfflineConversionDataSets(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        createContainedOfflineConversionDataSet(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<BusinessAssetGroup>;
        deleteContainedPages(params?: Record<string, any>): Promise<any>;
        getContainedPages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createContainedPage(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<BusinessAssetGroup>;
        deleteContainedPixels(params?: Record<string, any>): Promise<any>;
        getContainedPixels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createContainedPixel(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<BusinessAssetGroup>;
        deleteContainedProductCatalogs(params?: Record<string, any>): Promise<any>;
        getContainedProductCatalogs(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        createContainedProductCatalog(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<BusinessAssetGroup>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<BusinessAssetGroup>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<BusinessAssetGroup>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/omega-customer-trx' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class OmegaCustomerTrx extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Type(): Record<string, any>;
        getCampaigns(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<OmegaCustomerTrx>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/whats-app-business-account' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import ProductCatalog from 'facebook-nodejs-business-sdk/src/objects/product-catalog';
    export default class WhatsAppBusinessAccount extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Tasks(): Record<string, any>;
        static get Category(): Record<string, any>;
        deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
        getAssignedUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAssignedUser(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<WhatsAppBusinessAccount>;
        getAudiences(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getConversationAnalytics(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        deleteMessageTemplates(params?: Record<string, any>): Promise<any>;
        getMessageTemplates(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createMessageTemplate(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<WhatsAppBusinessAccount>;
        getPhoneNumbers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createPhoneNumber(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        deleteProductCatalogs(params?: Record<string, any>): Promise<any>;
        getProductCatalogs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createProductCatalog(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ProductCatalog>;
        deleteSubscribedApps(params?: Record<string, any>): Promise<any>;
        getSubscribedApps(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createSubscribedApp(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<WhatsAppBusinessAccount>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<WhatsAppBusinessAccount>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/cpas-collaboration-request' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CPASCollaborationRequest extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get RequesterAgencyOrBrand(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<CPASCollaborationRequest>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/cpas-advertiser-partnership-recommendation' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CPASAdvertiserPartnershipRecommendation extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<CPASAdvertiserPartnershipRecommendation>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/cpas-business-setup-config' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class CPASBusinessSetupConfig extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        getAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<CPASBusinessSetupConfig>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<CPASBusinessSetupConfig>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/cpas-merchant-config' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CPASMerchantConfig extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<CPASMerchantConfig>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/credit-card' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CreditCard extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<CreditCard>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/event-source-group' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class EventSourceGroup extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        getSharedAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createSharedAccount(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<EventSourceGroup>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<EventSourceGroup>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<EventSourceGroup>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/extended-credit-invoice-group' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import AdAccount from 'facebook-nodejs-business-sdk/src/objects/ad-account';
    export default class ExtendedCreditInvoiceGroup extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        deleteAdAccounts(params?: Record<string, any>): Promise<any>;
        getAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAdAccount(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdAccount>;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<ExtendedCreditInvoiceGroup>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<ExtendedCreditInvoiceGroup>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/extended-credit-allocation-config' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    export default class ExtendedCreditAllocationConfig extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get LiabilityType(): Record<string, any>;
        static get PartitionType(): Record<string, any>;
        static get SendBillTo(): Record<string, any>;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<ExtendedCreditAllocationConfig>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<ExtendedCreditAllocationConfig>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/extended-credit' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import ExtendedCreditInvoiceGroup from 'facebook-nodejs-business-sdk/src/objects/extended-credit-invoice-group';
    import ExtendedCreditAllocationConfig from 'facebook-nodejs-business-sdk/src/objects/extended-credit-allocation-config';
    export default class ExtendedCredit extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        getExtendedCreditInvoiceGroups(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        createExtendedCreditInvoiceGroup(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ExtendedCreditInvoiceGroup>;
        getOwningCreditAllocationConfigs(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        createOwningCreditAllocationConfig(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ExtendedCreditAllocationConfig>;
        createWhatsappCreditSharingAndAttach(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<ExtendedCredit>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/business-asset-sharing-agreement' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class BusinessAssetSharingAgreement extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get RequestStatus(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<BusinessAssetSharingAgreement>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<BusinessAssetSharingAgreement>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/instagram-insights-result' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class InstagramInsightsResult extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Metric(): Record<string, any>;
        static get Period(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ig-comment' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class IGComment extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        getReplies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createReply(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<IGComment>;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<IGComment>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<IGComment>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/shadow-ig-media-product-tags' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ShadowIGMediaProductTags extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ig-media' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import IGComment from 'facebook-nodejs-business-sdk/src/objects/ig-comment';
    import ShadowIGMediaProductTags from 'facebook-nodejs-business-sdk/src/objects/shadow-ig-media-product-tags';
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
}
declare module 'facebook-nodejs-business-sdk/src/objects/ig-user' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import IGMedia from 'facebook-nodejs-business-sdk/src/objects/ig-media';
    export default class IGUser extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        getAvailableCatalogs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getCatalogProductSearch(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getContentPublishingLimit(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getLiveMedia(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getMedia(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createMedia(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<IGMedia>;
        createMediaPublish(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<IGMedia>;
        createMention(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getProductAppeal(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createProductAppeal(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getRecentlySearchedHashtags(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getStories(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getTags(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<IGUser>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/business-ad-account-request' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class BusinessAdAccountRequest extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/business-application-request' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class BusinessApplicationRequest extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/business-page-request' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class BusinessPageRequest extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/business-role-request' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    export default class BusinessRoleRequest extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Role(): Record<string, any>;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<BusinessRoleRequest>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<BusinessRoleRequest>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/system-user' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class SystemUser extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Role(): Record<string, any>;
        getAssignedAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAssignedBusinessAssetGroups(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getAssignedPages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAssignedProductCatalogs(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<SystemUser>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/business' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import AdStudy from 'facebook-nodejs-business-sdk/src/objects/ad-study';
    import AdAccount from 'facebook-nodejs-business-sdk/src/objects/ad-account';
    import Application from 'facebook-nodejs-business-sdk/src/objects/application';
    import AdsPixel from 'facebook-nodejs-business-sdk/src/objects/ads-pixel';
    import BusinessUser from 'facebook-nodejs-business-sdk/src/objects/business-user';
    import CustomConversion from 'facebook-nodejs-business-sdk/src/objects/custom-conversion';
    import ProductCatalog from 'facebook-nodejs-business-sdk/src/objects/product-catalog';
    import CPASCollaborationRequest from 'facebook-nodejs-business-sdk/src/objects/cpas-collaboration-request';
    import CPASBusinessSetupConfig from 'facebook-nodejs-business-sdk/src/objects/cpas-business-setup-config';
    import EventSourceGroup from 'facebook-nodejs-business-sdk/src/objects/event-source-group';
    import OfflineConversionDataSet from 'facebook-nodejs-business-sdk/src/objects/offline-conversion-data-set';
    import SystemUser from 'facebook-nodejs-business-sdk/src/objects/system-user';
    export default class Business extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get TwoFactorType(): Record<string, any>;
        static get Vertical(): Record<string, any>;
        static get PermittedTasks(): Record<string, any>;
        static get SurveyBusinessType(): Record<string, any>;
        static get PagePermittedTasks(): Record<string, any>;
        createAccessToken(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Business>;
        deleteAdAccounts(params?: Record<string, any>): Promise<any>;
        getAdStudies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAdStudy(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdStudy>;
        createAdAccount(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdAccount>;
        createAdNetworkApplication(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Application>;
        getAdNetworkAnalytics(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAdNetworkAnalytic(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Business>;
        getAdNetworkAnalyticsResults(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getAdsReportingMmmReports(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getAdsPixels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAdsPixel(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdsPixel>;
        deleteAgencies(params?: Record<string, any>): Promise<any>;
        getAgencies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAnPlacements(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createBlockListDraft(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Business>;
        getBusinessAssetGroups(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getBusinessInvoices(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getBusinessUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createBusinessUser(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<BusinessUser>;
        createClaimCustomConversion(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<CustomConversion>;
        getClientAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getClientApps(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createClientApp(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Business>;
        getClientOffsiteSignalContainerBusinessObjects(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getClientPages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createClientPage(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Business>;
        getClientPixels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getClientProductCatalogs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getClientWhatsAppBusinessAccounts(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        deleteClients(params?: Record<string, any>): Promise<any>;
        getClients(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getCollaborativeAdsCollaborationRequests(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        createCollaborativeAdsCollaborationRequest(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<CPASCollaborationRequest>;
        getCollaborativeAdsSuggestedPartners(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getCommerceMerchantSettings(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getCpasBusinessSetupConfig(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        createCpasBusinessSetupConfig(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<CPASBusinessSetupConfig>;
        getCpasMerchantConfig(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getCreditCards(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createCustomConversion(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<CustomConversion>;
        createDraftNegativeKeywordList(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getEventSourceGroups(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createEventSourceGroup(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<EventSourceGroup>;
        getExtendedCreditApplications(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getExtendedCredits(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getInitiatedAudienceSharingRequests(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        deleteInstagramAccounts(params?: Record<string, any>): Promise<any>;
        getInstagramAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getInstagramBusinessAccounts(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        deleteManagedBusinesses(params?: Record<string, any>): Promise<any>;
        createManagedBusiness(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Business>;
        createManagedPartnerBusinessSetup(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Business>;
        deleteManagedPartnerBusinesses(params?: Record<string, any>): Promise<any>;
        createManagedPartnerBusiness(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        createManagedPartnerChildBusinessAsset(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Business>;
        getNegativeKeywordLists(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getOfflineConversionDataSets(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        createOfflineConversionDataSet(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<OfflineConversionDataSet>;
        getOwnedAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createOwnedAdAccount(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Business>;
        getOwnedApps(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createOwnedApp(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Business>;
        deleteOwnedBusinesses(params?: Record<string, any>): Promise<any>;
        getOwnedBusinesses(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createOwnedBusiness(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Business>;
        getOwnedInstagramAccounts(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getOwnedOffsiteSignalContainerBusinessObjects(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getOwnedPages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createOwnedPage(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Business>;
        getOwnedPixels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getOwnedProductCatalogs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createOwnedProductCatalog(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ProductCatalog>;
        getOwnedWhatsAppBusinessAccounts(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        deletePages(params?: Record<string, any>): Promise<any>;
        createPartnerPremiumOption(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getPendingClientAdAccounts(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getPendingClientApps(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getPendingClientPages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getPendingOwnedAdAccounts(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getPendingOwnedPages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getPendingSharedOffsiteSignalContainerBusinessObjects(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getPendingUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getPicture(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createPixelTo(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getReceivedAudienceSharingRequests(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getSystemUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createSystemUser(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<SystemUser>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<Business>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<Business>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/application' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class Application extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get SupportedPlatforms(): Record<string, any>;
        static get AnPlatforms(): Record<string, any>;
        static get Platform(): Record<string, any>;
        static get RequestType(): Record<string, any>;
        static get MutationMethod(): Record<string, any>;
        static get PostMethod(): Record<string, any>;
        static get ScoreType(): Record<string, any>;
        static get SortOrder(): Record<string, any>;
        static get LoggingSource(): Record<string, any>;
        static get LoggingTarget(): Record<string, any>;
        deleteAccounts(params?: Record<string, any>): Promise<any>;
        getAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAccount(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        createActivity(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getAdPlacementGroups(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAdNetworkPlacements(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAdNetworkAnalytics(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAdNetworkAnalytic(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Application>;
        getAdNetworkAnalyticsResults(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getAemConversionConfigs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAemConversionFilter(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAemConversion(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        createAemSkanReadiness(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getAgencies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAggregateRevenue(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getAndroidDialogConfigs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAppEventTypes(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAppIndexing(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Application>;
        createAppIndexingSession(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Application>;
        getAppInstalledGroups(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAppPushDeviceToken(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Application>;
        getAppAssets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAsset(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Application>;
        getAuthorizedAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        deleteBanned(params?: Record<string, any>): Promise<any>;
        getButtonAutoDetectionDeviceSelection(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getCloudbridgeSettings(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createCodelessEventMapping(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Application>;
        getDaChecks(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getEvents(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getInsightsPushSchedule(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createInsightsPushSchedule(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getIosDialogConfigs(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createLeaderboardsCreate(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Application>;
        createLeaderboardsDeleteEntry(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Application>;
        createMmpAuditing(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getMobileSdkGk(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getMonetizedDigitalStoreObjects(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        createMonetizedDigitalStoreObject(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getObjectTypes(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createOccludesPopup(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        createPageActivity(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Application>;
        createPaymentCurrency(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Application>;
        getPermissions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getProducts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getPurchases(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getRoles(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getSubscribedDomains(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createSubscribedDomain(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Application>;
        getSubscribedDomainsPhishing(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        createSubscribedDomainsPhishing(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Application>;
        deleteSubscriptions(params?: Record<string, any>): Promise<any>;
        createSubscription(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        createUpload(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        createUserProperty(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<Application>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<Application>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/partner-study' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class PartnerStudy extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<PartnerStudy>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-study-objective' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class AdStudyObjective extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Type(): Record<string, any>;
        getAdsPixels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getApplications(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getCustomConversions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getOfflineConversionDataSets(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getPartnerStudies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<AdStudyObjective>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<AdStudyObjective>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-study' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import PrivateLiftStudyInstance from 'facebook-nodejs-business-sdk/src/objects/private-lift-study-instance';
    export default class AdStudy extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Type(): Record<string, any>;
        getCells(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createCheckPoint(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdStudy>;
        getInstances(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createInstance(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<PrivateLiftStudyInstance>;
        getObjectives(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<AdStudy>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<AdStudy>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/cloud-game' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CloudGame extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<CloudGame>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-image' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdImage extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Status(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<AdImage>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-label' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class AdLabel extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        getAdCreatives(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAds(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAdSets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getCampaigns(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<AdLabel>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<AdLabel>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/playable-content' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class PlayableContent extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<PlayableContent>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-account-ad-rules-history' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAccountAdRulesHistory extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Action(): Record<string, any>;
        static get EvaluationType(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-account-ad-volume' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAccountAdVolume extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get RecommendationType(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/async-request' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AsyncRequest extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Status(): Record<string, any>;
        static get Type(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-async-request-set' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class AdAsyncRequestSet extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get NotificationMode(): Record<string, any>;
        getRequests(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<AdAsyncRequestSet>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<AdAsyncRequestSet>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/broad-targeting-categories' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class BroadTargetingCategories extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/custom-audiences-tos' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CustomAudiencesTOS extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-account-delivery-estimate' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAccountDeliveryEstimate extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get OptimizationGoal(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-account-ios-fourteen-campaign-limits' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAccountIosFourteenCampaignLimits extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-account-matched-search-applications-edge-data' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAccountMatchedSearchApplicationsEdgeData extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get AppStore(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-account-max-bid' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAccountMaxBid extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/minimum-budget' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class MinimumBudget extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/business-owned-object-on-behalf-of-request' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class BusinessOwnedObjectOnBehalfOfRequest extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Status(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<BusinessOwnedObjectOnBehalfOfRequest>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/publisher-block-list' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class PublisherBlockList extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        createAppEndPublisherUrl(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getPagedWebPublishers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<PublisherBlockList>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<PublisherBlockList>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-account-reach-estimate' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAccountReachEstimate extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/reach-frequency-prediction' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ReachFrequencyPrediction extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Action(): Record<string, any>;
        static get BuyingType(): Record<string, any>;
        static get InstreamPackages(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<ReachFrequencyPrediction>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/saved-audience' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class SavedAudience extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<SavedAudience>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-account-subscribed-apps' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAccountSubscribedApps extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-account-targeting-unified' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAccountTargetingUnified extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get LimitType(): Record<string, any>;
        static get RegulatedCategories(): Record<string, any>;
        static get WhitelistedTypes(): Record<string, any>;
        static get AppStore(): Record<string, any>;
        static get Objective(): Record<string, any>;
        static get Mode(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-account-tracking-data' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAccountTrackingData extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-account-user' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAccountUser extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-account' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import AdPlacePageSet from 'facebook-nodejs-business-sdk/src/objects/ad-place-page-set';
    import AdCreative from 'facebook-nodejs-business-sdk/src/objects/ad-creative';
    import AdImage from 'facebook-nodejs-business-sdk/src/objects/ad-image';
    import AdLabel from 'facebook-nodejs-business-sdk/src/objects/ad-label';
    import PlayableContent from 'facebook-nodejs-business-sdk/src/objects/playable-content';
    import AdRule from 'facebook-nodejs-business-sdk/src/objects/ad-rule';
    import Ad from 'facebook-nodejs-business-sdk/src/objects/ad';
    import AdSet from 'facebook-nodejs-business-sdk/src/objects/ad-set';
    import AdsPixel from 'facebook-nodejs-business-sdk/src/objects/ads-pixel';
    import AdVideo from 'facebook-nodejs-business-sdk/src/objects/ad-video';
    import Campaign from 'facebook-nodejs-business-sdk/src/objects/campaign';
    import AdAsyncRequestSet from 'facebook-nodejs-business-sdk/src/objects/ad-async-request-set';
    import CustomAudience from 'facebook-nodejs-business-sdk/src/objects/custom-audience';
    import CustomConversion from 'facebook-nodejs-business-sdk/src/objects/custom-conversion';
    import AdReportRun from 'facebook-nodejs-business-sdk/src/objects/ad-report-run';
    import PublisherBlockList from 'facebook-nodejs-business-sdk/src/objects/publisher-block-list';
    import ReachFrequencyPrediction from 'facebook-nodejs-business-sdk/src/objects/reach-frequency-prediction';
    import AdAccountSubscribedApps from 'facebook-nodejs-business-sdk/src/objects/ad-account-subscribed-apps';
    export default class AdAccount extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Currency(): Record<string, any>;
        static get Tasks(): Record<string, any>;
        static get ClaimObjective(): Record<string, any>;
        static get ContentType(): Record<string, any>;
        static get Subtype(): Record<string, any>;
        getActivities(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAdPlacePageSets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAdPlacePageSet(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdPlacePageSet>;
        createAdPlacePageSetsAsync(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdPlacePageSet>;
        getAdSavedKeywords(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAdStudies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAdCloudPlayables(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAdCreatives(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAdCreative(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdCreative>;
        getAdCreativesByLabels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        deleteAdImages(params?: Record<string, any>): Promise<any>;
        getAdImages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAdImage(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdImage>;
        getAdLabels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAdLabel(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdLabel>;
        getAdPlayables(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAdPlayable(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<PlayableContent>;
        getAdRulesHistory(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAdRulesLibrary(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAdRulesLibrary(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdRule>;
        getAds(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAd(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Ad>;
        getAdsReportingMmmReports(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getAdsVolume(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAdsByLabels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAdSets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAdSet(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdSet>;
        getAdSetsByLabels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAdsPixels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAdsPixel(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdsPixel>;
        getAdvertisableApplications(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        deleteAdVideos(params?: Record<string, any>): Promise<any>;
        getAdVideos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAdVideo(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdVideo>;
        getAffectedAdSets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        deleteAgencies(params?: Record<string, any>): Promise<any>;
        getAgencies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getApplications(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
        getAssignedUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAssignedUser(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdAccount>;
        createAsyncBatchRequest(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Campaign>;
        getAsyncRequests(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getAsyncAdRequestSets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAsyncAdRequestSet(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdAsyncRequestSet>;
        createBlockListDraft(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdAccount>;
        getBroadTargetingCategories(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        deleteCampaigns(params?: Record<string, any>): Promise<any>;
        getCampaigns(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createCampaign(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Campaign>;
        getCampaignsByLabels(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getConnectedInstagramAccounts(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getCustomAudiences(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createCustomAudience(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<CustomAudience>;
        getCustomAudiencesTos(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createCustomAudiencesTo(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdAccount>;
        getCustomConversions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createCustomConversion(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<CustomConversion>;
        getDeliveryEstimate(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getDeprecatedTargetingAdSets(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getGeneratePreViews(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getImpactingAdStudies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getInsightsAsync(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdReportRun>;
        getInstagramAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getIosFourteenCampaignLimits(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        createManagedPartnerAd(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        getMatchedSearchApplications(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getMaxBid(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getMinimumBudgets(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getOfflineConversionDataSets(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getOnBehalfRequests(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createProductAudience(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<CustomAudience>;
        getPromotePages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getPublisherBlockLists(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createPublisherBlockList(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<PublisherBlockList>;
        getReachEstimate(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getReachFrequencyPredictions(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        createReachFrequencyPrediction(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<ReachFrequencyPrediction>;
        getSavedAudiences(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        deleteSubscribedApps(params?: Record<string, any>): Promise<any>;
        getSubscribedApps(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createSubscribedApp(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdAccountSubscribedApps>;
        getTargetingBrowse(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getTargetingSearch(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getTargetingSentenceLines(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getTargetingSuggestions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getTargetingValidation(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getTracking(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createTracking(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdAccount>;
        getUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        deleteUsersOfAnyAudience(params?: Record<string, any>): Promise<any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<AdAccount>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<AdAccount>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ads-pixel-stats-result' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdsPixelStatsResult extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Aggregation(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ads-pixel' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class AdsPixel extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get SortBy(): Record<string, any>;
        static get AutomaticMatchingFields(): Record<string, any>;
        static get DataUseSetting(): Record<string, any>;
        static get FirstPartyCookieStatus(): Record<string, any>;
        static get Tasks(): Record<string, any>;
        getAssignedUsers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAssignedUser(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdsPixel>;
        getDaChecks(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createEvent(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        createMeapitocapiconsolidationhelper(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        createShadowTrafficHelper(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        deleteSharedAccounts(params?: Record<string, any>): Promise<any>;
        getSharedAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createSharedAccount(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdsPixel>;
        getSharedAgencies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        getStats(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createTelemetry(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<AdsPixel>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<AdsPixel>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/serverside/event-response' {
    export default class EventResponse {
        _events_received: number;
        _messages: Array<string>;
        _fbtrace_id: string;
        _id: string;
        _num_processed_entries: number;
        constructor(
            events_received: number,
            messages: Array<string>,
            fbtrace_id: string,
            id: string,
            num_processed_entries: number,
        );
        get events_received(): number;
        set events_received(events_received: number);
        setEventsReceived(events_received: number): EventResponse;
        get messages(): Array<string>;
        set messages(messages: Array<string>);
        setMessages(messages: Array<string>): EventResponse;
        get fbtrace_id(): string;
        set fbtrace_id(fbtrace_id: string);
        setFbtraceId(fbtrace_id: string): EventResponse;
        get id(): string;
        set id(id: string);
        get num_processed_entries(): number;
        set num_processed_entries(num_processed_entries: number);
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/serverside/http-method' {
    const _default_2: Readonly<{
        POST: 'POST';
        PUT: 'PUT';
        GET: 'GET';
        DELETE: 'DELETE';
    }>;
    export default _default_2;
}
declare module 'facebook-nodejs-business-sdk/src/objects/serverside/http-service-interface' {
    export default class HttpServiceInterface {
        executeRequest(
            url: string,
            method: string,
            headers: Record<string, any>,
            params: Record<string, any>,
        ): Promise<Record<string, any>>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/serverside/http-service-client-config' {
    import HttpServiceInterface from 'facebook-nodejs-business-sdk/src/objects/serverside/http-service-interface';
    export default class HttpServiceClientConfig {
        static _client: HttpServiceInterface;
        static setClient(client: HttpServiceInterface): void;
        static getClient(): HttpServiceInterface;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/serverside/user-data' {
    export default class UserData {
        _emails: string[];
        _phones: string[];
        _genders: string[];
        _first_names: string[];
        _last_names: string[];
        _dates_of_birth: string[];
        _cities: string[];
        _states: string[];
        _zips: string[];
        _countries: string[];
        _external_ids: string[];
        _client_ip_address: string;
        _client_user_agent: string;
        _fbc: string;
        _fbp: string;
        _subscription_id: string;
        _fb_login_id: string;
        _lead_id: string;
        _f5first: string;
        _f5last: string;
        _fi: string;
        _dobd: string;
        _dobm: string;
        _doby: string;
        constructor(
            email: string,
            phone: string,
            gender: string,
            first_name: string,
            last_name: string,
            date_of_birth: string,
            city: string,
            state: string,
            zip: string,
            country: string,
            external_id: string,
            client_ip_address: string,
            client_user_agent: string,
            fbp: string,
            fbc: string,
            subscription_id: string,
            fb_login_id: string,
            lead_id: string,
            dobd: string,
            dobm: string,
            doby: string,
        );
        static get Gender(): Record<string, any>;
        get email(): string;
        get emails(): string[];
        set email(email: string);
        set emails(emails: string[]);
        setEmail(email: string): UserData;
        setEmails(emails: string[]): UserData;
        get phone(): string;
        get phones(): string[];
        set phone(phone: string);
        set phones(phones: string[]);
        setPhone(phone: string): UserData;
        setPhones(phones: string[]): UserData;
        get gender(): string;
        get genders(): string[];
        set gender(gender: string);
        set genders(genders: string[]);
        setGender(gender: string): UserData;
        setGenders(genders: string[]): UserData;
        get date_of_birth(): string;
        get dates_of_birth(): string[];
        set date_of_birth(date_of_birth: string);
        set dates_of_birth(dates_of_birth: string[]);
        setDateOfBirth(date_of_birth: string): UserData;
        setDatesOfBirth(dates_of_birth: string[]): UserData;
        get last_name(): string;
        get last_names(): string[];
        set last_name(last_name: string);
        set last_names(last_names: string[]);
        setLastName(last_name: string): UserData;
        setLastNames(last_names: string[]): UserData;
        get first_name(): string;
        get first_names(): string[];
        set first_name(first_name: string);
        set first_names(first_names: string[]);
        setFirstName(first_name: string): UserData;
        setFirstNames(first_names: string[]): UserData;
        get city(): string;
        get cities(): string[];
        set city(city: string);
        set cities(cities: string[]);
        setCity(city: string): UserData;
        setCities(cities: string[]): UserData;
        get zip(): string;
        get zips(): string[];
        set zip(zip: string);
        set zips(zips: string[]);
        setZip(zip: string): UserData;
        setZips(zips: string[]): UserData;
        get state(): string;
        get states(): string[];
        set state(state: string);
        set states(states: string[]);
        setState(state: string): UserData;
        setStates(states: string[]): UserData;
        get country(): string;
        get countries(): string[];
        set country(country: string);
        set countries(countries: string[]);
        setCountry(country: string): UserData;
        setCountries(countries: string[]): UserData;
        get external_id(): string;
        get external_ids(): string[];
        set external_id(external_id: string);
        set external_ids(external_ids: string[]);
        setExternalId(external_id: string): UserData;
        setExternalIds(external_ids: string[]): UserData;
        get client_ip_address(): string;
        set client_ip_address(client_ip_address: string);
        setClientIpAddress(client_ip_address: string): UserData;
        get client_user_agent(): string;
        set client_user_agent(client_user_agent: string);
        setClientUserAgent(client_user_agent: string): UserData;
        get fbc(): string;
        set fbc(fbc: string);
        setFbc(fbc: string): UserData;
        get fbp(): string;
        set fbp(fbp: string);
        setFbp(fbp: string): UserData;
        get subscription_id(): string;
        set subscription_id(subscription_id: string);
        setSubscriptionId(subscription_id: string): UserData;
        get fb_login_id(): string;
        set fb_login_id(fb_login_id: string);
        setFbLoginId(fb_login_id: string): UserData;
        get lead_id(): string;
        set lead_id(lead_id: string);
        setLeadId(lead_id: string): UserData;
        get f5first(): string;
        set f5first(f5first: string);
        setF5First(f5first: string): UserData;
        get f5last(): string;
        set f5last(f5last: string);
        setF5Last(f5last: string): UserData;
        get fi(): string;
        set fi(fi: string);
        setFi(fi: string): UserData;
        get dobd(): string;
        set dobd(dobd: string);
        setDobd(dobd: string): UserData;
        get dobm(): string;
        set dobm(dobm: string);
        setDobm(dobm: string): UserData;
        get doby(): string;
        set doby(doby: string);
        setDoby(doby: string): UserData;
        normalize(): Record<string, any>;
        normalizeAndHashMultiValues(arr: string[], fieldName: String): string[];
        dedupArray(arr: string[]): string[];
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/serverside/server-event' {
    import UserData from 'facebook-nodejs-business-sdk/src/objects/serverside/user-data';
    import CustomData from 'facebook-nodejs-business-sdk/src/objects/serverside/custom-data';
    export default class ServerEvent {
        _event_name: string;
        _event_time: number;
        _event_source_url: string;
        _event_id: string;
        _action_source: string;
        _opt_out: boolean;
        _user_data: UserData;
        _custom_data: CustomData;
        _data_processing_options: Array<string>;
        _data_processing_options_state: number;
        _data_processing_options_country: number;
        constructor(
            event_name: string,
            event_time: number,
            event_source_url: string,
            user_data: UserData,
            custom_data: CustomData,
            event_id: string,
            opt_out: boolean,
            action_source: string,
            data_processing_options: Array<string>,
            data_processing_options_country: number,
            data_processing_options_state: number,
        );
        get event_name(): string;
        set event_name(event_name: string);
        setEventName(event_name: string): ServerEvent;
        get event_time(): number;
        set event_time(event_time: number);
        setEventTime(event_time: number): ServerEvent;
        get event_source_url(): string;
        set event_source_url(event_source_url: string);
        setEventSourceUrl(event_source_url: string): ServerEvent;
        get event_id(): string;
        set event_id(event_id: string);
        setEventId(event_id: string): ServerEvent;
        get action_source(): string;
        set action_source(action_source: string);
        setActionSource(action_source: string): ServerEvent;
        get opt_out(): boolean;
        set opt_out(opt_out: boolean);
        setOptOut(opt_out: boolean): ServerEvent;
        get user_data(): UserData;
        set user_data(user_data: UserData);
        setUserData(user_data: UserData): ServerEvent;
        get custom_data(): CustomData;
        set custom_data(custom_data: CustomData);
        setCustomData(custom_data: CustomData): ServerEvent;
        get data_processing_options(): Array<string>;
        set data_processing_options(data_processing_options: Array<string>);
        setDataProcessingOptions(data_processing_options: Array<string>): ServerEvent;
        get data_processing_options_country(): number;
        set data_processing_options_country(data_processing_options_country: number);
        setDataProcessingOptionsCountry(data_processing_options_country: number): ServerEvent;
        get data_processing_options_state(): number;
        set data_processing_options_state(data_processing_options_state: number);
        setDataProcessingOptionsState(data_processing_options_state: number): ServerEvent;
        normalize(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/serverside/event-request' {
    import EventResponse from 'facebook-nodejs-business-sdk/src/objects/serverside/event-response';
    import HttpServiceInterface from 'facebook-nodejs-business-sdk/src/objects/serverside/http-service-interface';
    import ServerEvent from 'facebook-nodejs-business-sdk/src/objects/serverside/server-event';
    export default class EventRequest {
        _access_token: string;
        _pixel_id: string;
        _events: Array<ServerEvent>;
        _partner_agent: string | null | undefined;
        _test_event_code: string | null | undefined;
        _namespace_id: string | null | undefined;
        _upload_id: string | null | undefined;
        _upload_tag: string | null | undefined;
        _upload_source: string | null | undefined;
        _debug_mode: boolean;
        _api: Record<string, any>;
        _http_service: HttpServiceInterface | null | undefined;
        constructor(
            access_token: string,
            pixel_id: string,
            events?: Array<ServerEvent>,
            partner_agent?: string | null | undefined,
            test_event_code?: string | null | undefined,
            namespace_id?: string | null | undefined,
            upload_id?: string | null | undefined,
            upload_tag?: string | null | undefined,
            upload_source?: string | null | undefined,
            debug_mode_flag?: boolean,
            http_service?: HttpServiceInterface | null | undefined,
        );
        get events(): Array<ServerEvent>;
        set events(events: Array<ServerEvent>);
        setEvents(events: Array<ServerEvent>): EventRequest;
        get partner_agent(): string;
        set partner_agent(partner_agent: string);
        setPartnerAgent(partner_agent: string): EventRequest;
        get test_event_code(): string;
        set test_event_code(test_event_code: string);
        setTestEventCode(test_event_code: string): EventRequest;
        get debug_mode(): boolean;
        set debug_mode(debug_mode: boolean);
        setDebugMode(debug_mode: boolean): EventRequest;
        get access_token(): string;
        set access_token(access_token: string);
        setAccessToken(access_token: string): EventRequest;
        get pixel(): string;
        set pixel_id(pixel_id: string);
        setPixelId(pixel_id: string): EventRequest;
        get namespace_id(): string;
        set namespace_id(namespace_id: string);
        setNamespaceId(namespace_id: string): EventRequest;
        get upload_tag(): string;
        set upload_tag(upload_tag: string);
        setUploadTag(upload_tag: string): EventRequest;
        get upload_id(): string;
        set upload_id(upload_id: string);
        setUploadId(upload_id: string): EventRequest;
        get upload_source(): string;
        set upload_source(upload_source: string);
        setUploadSource(upload_source: string): EventRequest;
        get http_service(): HttpServiceInterface;
        set http_service(http_service: HttpServiceInterface);
        setHttpService(http_service: HttpServiceInterface): EventRequest;
        execute(): Promise<EventResponse>;
        cloneWithoutEvents(): EventRequest;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/serverside/batch-processor' {
    import ServerEvent from 'facebook-nodejs-business-sdk/src/objects/serverside/server-event';
    import EventRequest from 'facebook-nodejs-business-sdk/src/objects/serverside/event-request';
    import EventResponse from 'facebook-nodejs-business-sdk/src/objects/serverside/event-response';
    export default class BatchProcessor {
        _batch_size: number;
        _concurrent_requests: number;
        constructor(batch_size: number, concurrent_requests: number);
        processEventRequestsGenerator(
            event_requests: Array<EventRequest>,
        ): Generator<Array<Promise<EventResponse>>, void, EventRequest>;
        processEventRequests(event_requests: Array<EventRequest>): Promise<void>;
        processEventsGenerator(
            event_request_to_clone: EventRequest,
            all_events: Array<ServerEvent>,
        ): Generator<Array<Promise<EventResponse>>, void, EventRequest>;
        processEvents(event_request_to_clone: EventRequest, all_events: Array<ServerEvent>): Promise<void>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/businessdataapi/user-data' {
    export default class UserData {
        _email: string;
        _phone: string;
        _first_name: string;
        _last_name: string;
        _date_of_birth: string;
        _city: string;
        _state: string;
        _country: string;
        _zip: string;
        _external_id: string;
        _address: string;
        constructor(
            email: string,
            phone: string,
            first_name: string,
            last_name: string,
            date_of_birth: string,
            city: string,
            state: string,
            zip: string,
            country: string,
            external_id: string,
            address: string,
        );
        get email(): string;
        set email(email: string);
        setEmail(email: string): UserData;
        get phone(): string;
        set phone(phone: string);
        setPhone(phone: string): UserData;
        get date_of_birth(): string;
        set date_of_birth(date_of_birth: string);
        setDateOfBirth(date_of_birth: string): UserData;
        get last_name(): string;
        set last_name(last_name: string);
        setLastName(last_name: string): UserData;
        get first_name(): string;
        set first_name(first_name: string);
        setFirstName(first_name: string): UserData;
        get city(): string;
        set city(city: string);
        setCity(city: string): UserData;
        get zip(): string;
        set zip(zip: string);
        setZip(zip: string): UserData;
        get state(): string;
        set state(state: string);
        setState(state: string): UserData;
        get country(): string;
        set country(country: string);
        setCountry(country: string): UserData;
        get external_id(): string;
        set external_id(external_id: string);
        setExternalId(external_id: string): UserData;
        get address(): string;
        set address(address: string);
        setAddress(address: string): void;
        toJson(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/signal/utils' {
    export default class Utils {
        static constructResponse(server_return: any, bdapi_return: any): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/signal/user-data' {
    import BusinessDataUserData from 'facebook-nodejs-business-sdk/src/objects/businessdataapi/user-data';
    import ServerUserData from 'facebook-nodejs-business-sdk/src/objects/serverside/user-data';
    export default class UserData {
        _business_data_user_data: BusinessDataUserData;
        _server_user_data: ServerUserData;
        constructor(
            email: string,
            phone: string,
            first_name: string,
            last_name: string,
            date_of_birth: string,
            city: string,
            state: string,
            zip: string,
            country: string,
            external_id: string,
            gender: string,
            client_ip_address: string,
            client_user_agent: string,
            fbp: string,
            fbc: string,
            subscription_id: string,
            fb_login_id: string,
            lead_id: string,
            dobd: string,
            dobm: string,
            doby: string,
            f5first: string,
            f5last: string,
            fi: string,
            address: string,
        );
        get email(): string;
        set email(email: string);
        setEmail(email: string): UserData;
        get phone(): string;
        set phone(phone: string);
        setPhone(phone: string): UserData;
        get date_of_birth(): string;
        set date_of_birth(date_of_birth: string);
        setDateOfBirth(date_of_birth: string): UserData;
        get last_name(): string;
        set last_name(last_name: string);
        setLastName(last_name: string): UserData;
        get first_name(): string;
        set first_name(first_name: string);
        setFirstName(first_name: string): UserData;
        get city(): string;
        set city(city: string);
        setCity(city: string): UserData;
        get zip(): string;
        set zip(zip: string);
        setZip(zip: string): UserData;
        get state(): string;
        set state(state: string);
        setState(state: string): UserData;
        get country(): string;
        set country(country: string);
        setCountry(country: string): UserData;
        get external_id(): string;
        set external_id(external_id: string);
        setExternalId(external_id: string): UserData;
        get gender(): string;
        set gender(gender: string);
        setGender(gender: string): UserData;
        get client_ip_address(): string;
        set client_ip_address(client_ip_address: string);
        setClientIpAddress(client_ip_address: string): UserData;
        get client_user_agent(): string;
        set client_user_agent(client_user_agent: string);
        setClientUserAgent(client_user_agent: string): UserData;
        get fbc(): string;
        set fbc(fbc: string);
        setFbc(fbc: string): UserData;
        get fbp(): string;
        set fbp(fbp: string);
        setFbp(fbp: string): UserData;
        get subscription_id(): string;
        set subscription_id(subscription_id: string);
        setSubscriptionId(subscription_id: string): UserData;
        get fb_login_id(): string;
        set fb_login_id(fb_login_id: string);
        setFbLoginId(fb_login_id: string): UserData;
        get lead_id(): string;
        set lead_id(lead_id: string);
        setLeadId(lead_id: string): UserData;
        get f5first(): string;
        set f5first(f5first: string);
        setF5First(f5first: string): UserData;
        get f5last(): string;
        set f5last(f5last: string);
        setF5Last(f5last: string): UserData;
        get fi(): string;
        set fi(fi: string);
        setFi(fi: string): UserData;
        get dobd(): string;
        set dobd(dobd: string);
        setDobd(dobd: string): UserData;
        get dobm(): string;
        set dobm(dobm: string);
        setDobm(dobm: string): UserData;
        get doby(): string;
        set doby(doby: string);
        setDoby(doby: string): UserData;
        get address(): string;
        set address(address: string);
        setAddress(address: string): UserData;
        get business_data_user_data(): BusinessDataUserData;
        get server_user_data(): ServerUserData;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/businessdataapi/content' {
    export default class Content {
        _id: string;
        _quantity: number;
        _price: number;
        _title: string;
        _tax: number;
        _external_content_id: string;
        constructor(
            id: string,
            quantity: number,
            price: number,
            title: string,
            tax: number,
            external_content_id: string,
        );
        get id(): string;
        set id(id: string);
        setId(id: string): Content;
        get quantity(): number;
        set quantity(quantity: number);
        setQuantity(quantity: number): Content;
        get price(): number;
        set price(price: number);
        setPrice(price: number): Content;
        get title(): string;
        set title(title: string);
        setTitle(title: string): Content;
        get tax(): number;
        set tax(tax: number);
        setTax(tax: number): Content;
        get external_content_id(): string;
        set external_content_id(external_content_id: string);
        setExternalContentID(external_content_id: string): Content;
        toJson(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/signal/content' {
    import BusinessDataContent from 'facebook-nodejs-business-sdk/src/objects/businessdataapi/content';
    import ServerContent from 'facebook-nodejs-business-sdk/src/objects/serverside/content';
    export default class Content {
        _business_data_content: BusinessDataContent;
        _server_content: ServerContent;
        constructor(
            id: string,
            quantity: number,
            price: number,
            item_price: number,
            title: string,
            description: string,
            brand: string,
            category: string,
            delivery_category: string,
            tax: number,
            external_content_id: string,
        );
        get id(): string;
        set id(id: string);
        setId(id: string): Content;
        get quantity(): number;
        set quantity(quantity: number);
        setQuantity(quantity: number): Content;
        get item_price(): number;
        set item_price(item_price: number);
        setItemPrice(item_price: number): Content;
        get title(): string;
        set title(title: string);
        setTitle(title: string): Content;
        get description(): string;
        set description(description: string);
        setDescription(description: string): Content;
        get brand(): string;
        set brand(brand: string);
        setBrand(brand: string): Content;
        get category(): string;
        set category(category: string);
        setCategory(category: string): Content;
        get delivery_category(): string;
        set delivery_category(delivery_category: string);
        setDeliveryCategory(delivery_category: string): Content;
        get tax(): number;
        set tax(tax: number);
        setTax(tax: number): Content;
        get external_content_id(): string;
        set external_content_id(external_content_id: string);
        setExternalContentId(external_content_id: string): Content;
        get price(): number;
        set price(price: number);
        setPrice(price: number): Content;
        get business_data_content(): BusinessDataContent;
        get server_content(): ServerContent;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/businessdataapi/custom-data' {
    import Content from 'facebook-nodejs-business-sdk/src/objects/businessdataapi/content';
    import UserData from 'facebook-nodejs-business-sdk/src/objects/businessdataapi/user-data';
    export default class CustomData {
        _value: number;
        _currency: string;
        _contents: Array<Content>;
        _order_id: string;
        _status: string;
        _shipping_contact: UserData;
        _billing_contact: UserData;
        _external_order_id: string;
        _original_order_id: string;
        _message: string;
        constructor(
            value: number,
            currency: string,
            contents: Array<Content>,
            order_id: string,
            status: string,
            shipping_contact: UserData,
            billing_contact: UserData,
            external_order_id: string,
            original_order_id: string,
            message: string,
        );
        get value(): number;
        set value(value: number);
        setValue(value: number): CustomData;
        get currency(): string;
        set currency(currency: string);
        setCurrency(currency: string): CustomData;
        get contents(): Array<Content>;
        set contents(contents: Array<Content>);
        setContents(contents: Array<Content>): CustomData;
        get order_id(): string;
        set order_id(order_id: string);
        setOrderId(order_id: string): CustomData;
        get status(): string;
        set status(status: string);
        setStatus(status: string): CustomData;
        get shipping_contact(): UserData;
        set shipping_contact(shipping_contact: UserData);
        setShippingContact(shipping_contact: UserData): CustomData;
        get billing_contact(): UserData;
        set billing_contact(billing_contact: UserData);
        setBillingContact(billing_contact: UserData): CustomData;
        get external_order_id(): string;
        set external_order_id(external_order_id: string);
        setExternalOrderId(external_order_id: string): CustomData;
        get original_order_id(): string;
        set original_order_id(original_order_id: string);
        setOriginalOrderId(original_order_id: string): CustomData;
        get message(): string;
        set message(message: string);
        setMessage(message: string): CustomData;
        toJson(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/signal/custom-data' {
    import BusinessDataCustomData from 'facebook-nodejs-business-sdk/src/objects/businessdataapi/custom-data';
    import ServerCustomData from 'facebook-nodejs-business-sdk/src/objects/serverside/custom-data';
    import SignalUserData from 'facebook-nodejs-business-sdk/src/objects/signal/user-data';
    import SignalContent from 'facebook-nodejs-business-sdk/src/objects/signal/content';
    export default class CustomData {
        _business_data_custom_data: BusinessDataCustomData;
        _server_custom_data: ServerCustomData;
        constructor(
            value: number,
            currency: string,
            content_name: string,
            content_category: string,
            content_ids: Array<string>,
            contents: Array<SignalContent>,
            content_type: string,
            order_id: string,
            predicted_ltv: number,
            num_items: number,
            search_string: string,
            status: string,
            item_number: string,
            delivery_category: string,
            custom_properties: Record<string, any>,
            shipping_contact: SignalUserData,
            billing_contact: SignalUserData,
            external_order_id: string,
            original_order_id: string,
            message: string,
        );
        get value(): number;
        set value(value: number);
        setValue(value: number): CustomData;
        get currency(): string;
        set currency(currency: string);
        setCurrency(currency: string): CustomData;
        get contents(): Array<SignalContent>;
        set contents(contents: Array<SignalContent>);
        setContents(contents: Array<SignalContent>): CustomData;
        get order_id(): string;
        set order_id(order_id: string);
        setOrderId(order_id: string): CustomData;
        get status(): string;
        set status(status: string);
        setStatus(status: string): CustomData;
        get content_name(): string;
        set content_name(content_name: string);
        setContentName(content_name: string): CustomData;
        get content_category(): string;
        set content_category(content_category: string);
        setContentCategory(content_category: string): CustomData;
        get content_ids(): Array<string>;
        set content_ids(content_ids: Array<string>);
        setContentIds(content_ids: Array<string>): CustomData;
        get content_type(): string;
        set content_type(content_type: string);
        setContentType(content_type: string): CustomData;
        get predicted_ltv(): number;
        set predicted_ltv(predicted_ltv: number);
        setPredictedLtv(predicted_ltv: number): CustomData;
        get num_items(): number;
        set num_items(num_items: number);
        setNumItems(num_items: number): CustomData;
        get search_string(): string;
        set search_string(search_string: string);
        setSearchString(search_string: string): CustomData;
        get item_number(): string;
        set item_number(item_number: string);
        setItemNumber(item_number: string): CustomData;
        get delivery_category(): string;
        set delivery_category(delivery_category: string);
        setDeliveryCategory(delivery_category: string): CustomData;
        get custom_properties(): Record<string, any>;
        set custom_properties(custom_properties: Record<string, any>);
        setCustomProperties(custom_properties: Record<string, any>): CustomData;
        add_custom_property(key: string, value: string): void;
        get shipping_contact(): SignalUserData;
        set shipping_contact(shipping_contact: SignalUserData);
        setShippingContact(shipping_contact: SignalUserData): CustomData;
        get billing_contact(): SignalUserData;
        set billing_contact(billing_contact: SignalUserData);
        setBillingContact(billing_contact: SignalUserData): CustomData;
        get external_order_id(): string;
        set external_order_id(external_order_id: string);
        setExternalOrderId(external_order_id: string): CustomData;
        get original_order_id(): string;
        set original_order_id(original_order_id: string);
        setOriginalOrderId(original_order_id: string): CustomData;
        get message(): string;
        set message(message: string);
        setMessage(message: string): CustomData;
        get business_data_custom_data(): BusinessDataCustomData;
        get server_custom_data(): ServerCustomData;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/businessdataapi/event' {
    import UserData from 'facebook-nodejs-business-sdk/src/objects/businessdataapi/user-data';
    import CustomData from 'facebook-nodejs-business-sdk/src/objects/businessdataapi/custom-data';
    export default class Event {
        _event_name: string;
        _event_time: number;
        _event_id: string;
        _user_data: UserData;
        _custom_data: CustomData;
        _data_processing_options: Array<string>;
        _data_processing_options_state: number;
        _data_processing_options_country: number;
        constructor(
            event_name: string,
            event_time: number,
            user_data: UserData,
            custom_data: CustomData,
            event_id: string,
            data_processing_options: Array<string>,
            data_processing_options_country: number,
            data_processing_options_state: number,
        );
        get event_name(): string;
        set event_name(event_name: string);
        get event_time(): number;
        set event_time(event_time: number);
        get event_id(): string;
        set event_id(event_id: string);
        get user_data(): UserData;
        set user_data(user_data: UserData);
        get custom_data(): CustomData;
        set custom_data(custom_data: CustomData);
        get data_processing_options(): Array<string>;
        set data_processing_options(data_processing_options: Array<string>);
        get data_processing_options_country(): number;
        set data_processing_options_country(data_processing_options_country: number);
        get data_processing_options_state(): number;
        set data_processing_options_state(data_processing_options_state: number);
        toJson(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/signal/event' {
    import SignalUserData from 'facebook-nodejs-business-sdk/src/objects/signal/user-data';
    import SignalCustomData from 'facebook-nodejs-business-sdk/src/objects/signal/custom-data';
    import BusinessDataEvent from 'facebook-nodejs-business-sdk/src/objects/businessdataapi/event';
    import ServerEvent from 'facebook-nodejs-business-sdk/src/objects/serverside/server-event';
    export default class Event {
        _business_data_event: BusinessDataEvent;
        _server_event: ServerEvent;
        constructor(
            event_name: string,
            event_time: number,
            event_source_url: string,
            user_data: SignalUserData,
            custom_data: SignalCustomData,
            event_id: string,
            opt_out: boolean,
            action_source: string,
            data_processing_options: Array<string>,
            data_processing_options_country: number,
            data_processing_options_state: number,
        );
        get event_name(): string;
        set event_name(event_name: string);
        setEventName(event_name: string): Event;
        get event_time(): number;
        set event_time(event_time: number);
        setEventTime(event_time: number): Event;
        get event_source_url(): string;
        set event_source_url(event_source_url: string);
        setEventSourceUrl(event_source_url: string): Event;
        get event_id(): string;
        set event_id(event_id: string);
        setEventId(event_id: string): Event;
        get action_source(): string;
        set action_source(action_source: string);
        setActionSource(action_source: string): Event;
        get opt_out(): boolean;
        set opt_out(opt_out: boolean);
        setOptOut(opt_out: boolean): Event;
        get user_data(): SignalUserData;
        set user_data(user_data: SignalUserData);
        setUserData(user_data: SignalUserData): Event;
        get custom_data(): SignalCustomData;
        set custom_data(custom_data: SignalCustomData);
        setCustomData(custom_data: SignalCustomData): Event;
        get data_processing_options(): Array<string>;
        set data_processing_options(data_processing_options: Array<string>);
        setDataProcessingOptions(data_processing_options: Array<string>): Event;
        get data_processing_options_country(): number;
        set data_processing_options_country(data_processing_options_country: number);
        setDataProcessingOptionsCountry(data_processing_options_country: number): Event;
        get data_processing_options_state(): number;
        set data_processing_options_state(data_processing_options_state: number);
        setDataProcessingOptionsState(data_processing_options_state: number): Event;
        get business_data_event(): BusinessDataEvent;
        get server_event(): ServerEvent;
        toJson(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/businessdataapi/event-response' {
    export default class EventResponse {
        _events_received: number;
        _events_dropped: number;
        _message: Array<Record<string, any>>;
        constructor(events_received: number, events_dropped: number, message?: Array<Record<string, any>>);
        get events_received(): number;
        set events_received(events_received: number);
        setEventsReceived(events_received: number): EventResponse;
        get events_dropped(): number;
        set events_dropped(events_dropped: number);
        setEventsDropped(events_dropped: number): EventResponse;
        get message(): Array<Record<string, any>>;
        set message(message: Array<Record<string, any>>);
        setMessage(message: Array<Record<string, any>>): EventResponse;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/businessdataapi/event-request' {
    import Event from 'facebook-nodejs-business-sdk/src/objects/businessdataapi/event';
    import EventResponse from 'facebook-nodejs-business-sdk/src/objects/businessdataapi/event-response';
    export default class EventRequest {
        _access_token: string;
        _page_id: string;
        _events: Array<Event>;
        _partner_agent: string | null | undefined;
        _api: Record<string, any>;
        constructor(
            access_token: string,
            page_id: string,
            events?: Array<Event>,
            partner_agent?: string | null | undefined,
        );
        get events(): Array<Event>;
        set events(events: Array<Event>);
        setEvents(events: Array<Event>): EventRequest;
        get partner_agent(): string | null | undefined;
        set partner_agent(partner_agent: string | null | undefined);
        setPartnerAgent(partner_agent: string): EventRequest;
        get access_token(): string;
        set access_token(access_token: string);
        setAccessToken(access_token: string): EventRequest;
        get page_id(): string;
        set page_id(page_id: string);
        setPageId(page_id: string): EventRequest;
        execute(): Promise<EventResponse>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/signal/event-request' {
    import BusinessDataEventRequest from 'facebook-nodejs-business-sdk/src/objects/businessdataapi/event-request';
    import ServerEventRequest from 'facebook-nodejs-business-sdk/src/objects/serverside/event-request';
    import HttpServiceInterface from 'facebook-nodejs-business-sdk/src/objects/serverside/http-service-interface';
    import SignalEvent from 'facebook-nodejs-business-sdk/src/objects/signal/event';
    export default class EventRequest {
        _business_data_event_request: BusinessDataEventRequest;
        _server_event_request: ServerEventRequest;
        constructor(
            access_token: string,
            pixel_id: string,
            page_id: string,
            events?: Array<SignalEvent>,
            partner_agent?: string | null | undefined,
            test_event_code?: string | null | undefined,
            namespace_id?: string | null | undefined,
            upload_id?: string | null | undefined,
            upload_tag?: string | null | undefined,
            upload_source?: string | null | undefined,
            debug_mode_flag?: boolean,
            http_service?: HttpServiceInterface | null | undefined,
        );
        get events(): Array<SignalEvent>;
        set events(events: Array<SignalEvent>);
        setEvents(events: Array<SignalEvent>): EventRequest;
        get partner_agent(): string;
        set partner_agent(partner_agent: string);
        setPartnerAgent(partner_agent: string): EventRequest;
        get test_event_code(): string;
        set test_event_code(test_event_code: string);
        setTestEventCode(test_event_code: string): EventRequest;
        get debug_mode(): boolean;
        set debug_mode(debug_mode: boolean);
        setDebugMode(debug_mode: boolean): EventRequest;
        get access_token(): string;
        set access_token(access_token: string);
        setAccessToken(access_token: string): EventRequest;
        get pixel_id(): string;
        set pixel_id(pixel_id: string);
        setPixelId(pixel_id: string): EventRequest;
        get namespace_id(): string;
        set namespace_id(namespace_id: string);
        setNamespaceId(namespace_id: string): EventRequest;
        get upload_tag(): string;
        set upload_tag(upload_tag: string);
        setUploadTag(upload_tag: string): EventRequest;
        get upload_id(): string;
        set upload_id(upload_id: string);
        setUploadId(upload_id: string): EventRequest;
        get upload_source(): string;
        set upload_source(upload_source: string);
        setUploadSource(upload_source: string): EventRequest;
        get http_service(): HttpServiceInterface;
        set http_service(http_service: HttpServiceInterface);
        setHttpService(http_service: HttpServiceInterface): EventRequest;
        execute(): Promise<Record<string, any>>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-account-custom-audience' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAccountCustomAudience extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-account-default-destination' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAccountDefaultDestination extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-account-default-objective' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAccountDefaultObjective extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get DefaultObjectiveForUser(): Record<string, any>;
        static get ObjectiveForLevel(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-account-promotable-objects' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAccountPromotableObjects extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-account-recommended-camapaign-budget' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAccountRecommendedCamapaignBudget extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-asset-feed-spec' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAssetFeedSpec extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get CallToActionTypes(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-asset-feed-spec-asset-label' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAssetFeedSpecAssetLabel extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-asset-feed-spec-body' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAssetFeedSpecBody extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-asset-feed-spec-caption' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAssetFeedSpecCaption extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-asset-feed-spec-description' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAssetFeedSpecDescription extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-asset-feed-spec-group-rule' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAssetFeedSpecGroupRule extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-asset-feed-spec-image' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAssetFeedSpecImage extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-asset-feed-spec-link-url' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAssetFeedSpecLinkURL extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-asset-feed-spec-title' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAssetFeedSpecTitle extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-asset-feed-spec-video' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAssetFeedSpecVideo extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-async-request-set-notification-result' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdAsyncRequestSetNotificationResult extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-bid-adjustments' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdBidAdjustments extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-campaign-activity' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCampaignActivity extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get BidStrategyNew(): Record<string, any>;
        static get BidStrategyOld(): Record<string, any>;
        static get BillingEventNew(): Record<string, any>;
        static get BillingEventOld(): Record<string, any>;
        static get OptimizationGoalNew(): Record<string, any>;
        static get OptimizationGoalOld(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<AdCampaignActivity>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-campaign-bid-constraint' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCampaignBidConstraint extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-campaign-delivery-stats-unsupported-reasons' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCampaignDeliveryStatsUnsupportedReasons extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-campaign-frequency-control-specs' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCampaignFrequencyControlSpecs extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-campaign-issues-info' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCampaignIssuesInfo extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-campaign-learning-stage-info' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCampaignLearningStageInfo extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-campaign-optimization-event' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCampaignOptimizationEvent extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-campaign-paced-bid-info' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCampaignPacedBidInfo extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-ad-disclaimer' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativeAdDisclaimer extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-collection-thumbnail-info' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativeCollectionThumbnailInfo extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-interactive-components-spec' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativeInteractiveComponentsSpec extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-link-data' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativeLinkData extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get AttachmentStyle(): Record<string, any>;
        static get FormatOption(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-link-data-app-link-spec' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativeLinkDataAppLinkSpec extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-link-data-call-to-action' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativeLinkDataCallToAction extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Type(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-link-data-call-to-action-value' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativeLinkDataCallToActionValue extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-link-data-child-attachment' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativeLinkDataChildAttachment extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-link-data-image-layer-spec' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativeLinkDataImageLayerSpec extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get BlendingMode(): Record<string, any>;
        static get FrameSource(): Record<string, any>;
        static get ImageSource(): Record<string, any>;
        static get LayerType(): Record<string, any>;
        static get OverlayPosition(): Record<string, any>;
        static get OverlayShape(): Record<string, any>;
        static get TextFont(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-link-data-image-overlay-spec' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativeLinkDataImageOverlaySpec extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get CustomTextType(): Record<string, any>;
        static get OverlayTemplate(): Record<string, any>;
        static get Position(): Record<string, any>;
        static get TextFont(): Record<string, any>;
        static get TextType(): Record<string, any>;
        static get ThemeColor(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-link-data-sponsorship-info-spec' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativeLinkDataSponsorshipInfoSpec extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-link-data-template-video-spec' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativeLinkDataTemplateVideoSpec extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-object-story-spec' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativeObjectStorySpec extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-omnichannel-link-spec' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativeOmnichannelLinkSpec extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-photo-data' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativePhotoData extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-photo-data-media-elements' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativePhotoDataMediaElements extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-place-data' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativePlaceData extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-platform-customization' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativePlatformCustomization extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-portrait-customizations' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativePortraitCustomizations extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-post-click-configuration' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativePostClickConfiguration extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-recommender-settings' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativeRecommenderSettings extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-static-fallback-spec' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativeStaticFallbackSpec extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-template-url-spec' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativeTemplateURLSpec extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-text-data' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativeTextData extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-creative-video-data' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCreativeVideoData extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-customization-rule-spec' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdCustomizationRuleSpec extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-dynamic-creative' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdDynamicCreative extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-entity-target-spend' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdEntityTargetSpend extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-keywords' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdKeywords extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-monetization-property' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class AdMonetizationProperty extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        getAdNetworkAnalytics(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        createAdNetworkAnalytic(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<AdMonetizationProperty>;
        getAdNetworkAnalyticsResults(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<AdMonetizationProperty>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-place-page-set-metadata' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdPlacePageSetMetadata extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-promoted-object' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdPromotedObject extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get CustomEventType(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-recommendation' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdRecommendation extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Confidence(): Record<string, any>;
        static get Importance(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-recommendation-data' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdRecommendationData extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-rule-evaluation-spec' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdRuleEvaluationSpec extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get EvaluationType(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<AdRuleEvaluationSpec>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-rule-execution-options' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdRuleExecutionOptions extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Operator(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-rule-execution-spec' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdRuleExecutionSpec extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get ExecutionType(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<AdRuleExecutionSpec>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-rule-filters' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdRuleFilters extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Operator(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-rule-history-result' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdRuleHistoryResult extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get ObjectType(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-rule-history-result-action' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdRuleHistoryResultAction extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-rule-schedule' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdRuleSchedule extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-rule-schedule-spec' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdRuleScheduleSpec extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-rule-trigger' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdRuleTrigger extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Operator(): Record<string, any>;
        static get Type(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-study-objective-id' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdStudyObjectiveID extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ad-study-objective-offsite-datasets' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdStudyObjectiveOffsiteDatasets extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/adgroup-issues-info' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdgroupIssuesInfo extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/adgroup-metadata' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdgroupMetadata extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/adgroup-placement-specific-review-feedback' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdgroupPlacementSpecificReviewFeedback extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/adgroup-review-feedback' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdgroupReviewFeedback extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ads-action-stats' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdsActionStats extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ads-image-crops' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdsImageCrops extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ads-optimal-delivery-growth-opportunity' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdsOptimalDeliveryGrowthOpportunity extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ads-pixel-stats' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AdsPixelStats extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/age-range' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AgeRange extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/agency-client-declaration' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AgencyClientDeclaration extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/android-app-link' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AndroidAppLink extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/async-session' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AsyncSession extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<AsyncSession>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/attribution-spec' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AttributionSpec extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/audience-permission-for-actions' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class AudiencePermissionForActions extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/audio-copyright' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class AudioCopyright extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        getUpdateRecords(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<AudioCopyright>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/brand-safety-block-list-usage' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class BrandSafetyBlockListUsage extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/business-image' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class BusinessImage extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<BusinessImage>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/business-managed-partner-eligibility' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class BusinessManagedPartnerEligibility extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/business-partner-premium-options' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class BusinessPartnerPremiumOptions extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/crm-address' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CRMAddress extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<CRMAddress>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/campaign-group-brand-configuration' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CampaignGroupBrandConfiguration extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/campaign-group-collaborative-ads-partner-info' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CampaignGroupCollaborativeAdsPartnerInfo extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/canvas-ad-settings' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CanvasAdSettings extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/canvas-collection-thumbnail' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CanvasCollectionThumbnail extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/canvas-dynamic-setting' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CanvasDynamicSetting extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<CanvasDynamicSetting>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/catalog-based-targeting' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CatalogBasedTargeting extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/catalog-item-app-links' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CatalogItemAppLinks extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/catalog-item-appeal-status' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CatalogItemAppealStatus extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/catalog-sub-vertical-list' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CatalogSubVerticalList extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/child-event' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ChildEvent extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/collaborative-ads-partner-info-list-item' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CollaborativeAdsPartnerInfoListItem extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/commerce-settings' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CommerceSettings extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/connections-targeting' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ConnectionsTargeting extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/contextual-bundling-spec' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ContextualBundlingSpec extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/conversion-action-query' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ConversionActionQuery extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/copyright-audio-asset' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CopyrightAudioAsset extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<CopyrightAudioAsset>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/copyright-reference-container' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CopyrightReferenceContainer extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/cover-photo' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CoverPhoto extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/creative-history' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CreativeHistory extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/credit-partition-action-options' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CreditPartitionActionOptions extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/currency' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class Currency extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/currency-amount' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CurrencyAmount extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/custom-audience-ad-account' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CustomAudienceAdAccount extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/custom-audience-data-source' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CustomAudienceDataSource extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get SubType(): Record<string, any>;
        static get Type(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/custom-audience-sharing-status' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CustomAudienceSharingStatus extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/custom-audience-status' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class CustomAudienceStatus extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/day-part' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class DayPart extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/delivery-check' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class DeliveryCheck extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/delivery-check-extra-info' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class DeliveryCheckExtraInfo extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/delivery-window' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class DeliveryWindow extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/destination-catalog-settings' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class DestinationCatalogSettings extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<DestinationCatalogSettings>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/dynamic-post-child-attachment' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class DynamicPostChildAttachment extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/engagement' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class Engagement extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/entity-at-text-range' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class EntityAtTextRange extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Type(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/experience' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class Experience extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/fame-export-config' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class FAMEExportConfig extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/flexible-targeting' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class FlexibleTargeting extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/funding-source-details' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class FundingSourceDetails extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/funding-source-details-coupon' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class FundingSourceDetailsCoupon extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/id-name' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class IDName extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/igbc-ads-permission' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class IGBCAdsPermission extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<IGBCAdsPermission>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/instagram-insights-value' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class InstagramInsightsValue extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/ios-app-link' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class IosAppLink extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/jobs-job' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class JobsJob extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get ImageFetchStatus(): Record<string, any>;
        getAugmentedRealitiesMetadata(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getChannelsToIntegrityStatus(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        getVideosMetadata(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<JobsJob>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/key-value' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class KeyValue extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/lead-gen-appointment-booking-info' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class LeadGenAppointmentBookingInfo extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/lead-gen-conditional-questions-group-choices' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class LeadGenConditionalQuestionsGroupChoices extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/lead-gen-conditional-questions-group-questions' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class LeadGenConditionalQuestionsGroupQuestions extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/lead-gen-draft-question' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class LeadGenDraftQuestion extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/lead-gen-post-submission-check-result' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class LeadGenPostSubmissionCheckResult extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/lead-gen-question' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class LeadGenQuestion extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/lead-gen-question-option' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class LeadGenQuestionOption extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/life-event' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class LifeEvent extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        getLikes(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<LifeEvent>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/link' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    import Comment from 'facebook-nodejs-business-sdk/src/objects/comment';
    export default class Link extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        createComment(
            fields: Array<string>,
            params?: Record<string, any>,
            pathOverride?: string | null | undefined,
        ): Promise<Comment>;
        getLikes(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<Link>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/live-video-ad-break-config' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class LiveVideoAdBreakConfig extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/live-video-recommended-encoder-settings' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class LiveVideoRecommendedEncoderSettings extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/live-video-targeting' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class LiveVideoTargeting extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/local-service-business' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import Cursor from 'facebook-nodejs-business-sdk/src/cursor';
    export default class LocalServiceBusiness extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Availability(): Record<string, any>;
        static get Condition(): Record<string, any>;
        static get ImageFetchStatus(): Record<string, any>;
        getChannelsToIntegrityStatus(
            fields: Array<string>,
            params?: Record<string, any>,
            fetchFirstPage?: boolean,
        ): Cursor;
        get(fields: Array<string>, params?: Record<string, any>): Promise<LocalServiceBusiness>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/location' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class Location extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/lookalike-spec' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class LookalikeSpec extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/mailing-address' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class MailingAddress extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<MailingAddress>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/managed-partner-business' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ManagedPartnerBusiness extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/messaging-feature-status' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class MessagingFeatureStatus extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/messenger-destination-page-welcome-message' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class MessengerDestinationPageWelcomeMessage extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/music-video-copyright' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class MusicVideoCopyright extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<MusicVideoCopyright>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/offline-conversion-data-set-permissions' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class OfflineConversionDataSetPermissions extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/offline-conversion-data-set-usage' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class OfflineConversionDataSetUsage extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/offsite-pixel' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class OffsitePixel extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<OffsitePixel>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/open-graph-context' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class OpenGraphContext extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<OpenGraphContext>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/outcome-prediction-point' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class OutcomePredictionPoint extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/page-category' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class PageCategory extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/page-change-proposal' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class PageChangeProposal extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/page-parking' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class PageParking extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/page-payment-options' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class PagePaymentOptions extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/page-post-experiment' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class PagePostExperiment extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<PagePostExperiment>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/page-restaurant-services' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class PageRestaurantServices extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/page-restaurant-specialties' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class PageRestaurantSpecialties extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/page-saved-filter' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class PageSavedFilter extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<PageSavedFilter>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/page-start-info' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class PageStartInfo extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/page-upcoming-change' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class PageUpcomingChange extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<PageUpcomingChange>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<PageUpcomingChange>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/payment-pricepoints' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class PaymentPricepoints extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/payment-subscription' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class PaymentSubscription extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<PaymentSubscription>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/place' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class Place extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<Place>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/place-topic' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class PlaceTopic extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<PlaceTopic>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/platform-image-source' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class PlatformImageSource extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/privacy' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class Privacy extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-catalog-image-settings' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ProductCatalogImageSettings extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-catalog-image-settings-operation' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ProductCatalogImageSettingsOperation extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-feed-missing-feed-item-replacement' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ProductFeedMissingFeedItemReplacement extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-feed-upload-error-report' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ProductFeedUploadErrorReport extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-image' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ProductImage extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<ProductImage>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-item-ar-data' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ProductItemARData extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get Surfaces(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-item-commerce-insights' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ProductItemCommerceInsights extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-item-error' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ProductItemError extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-item-importer-address' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ProductItemImporterAddress extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-set-metadata' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ProductSetMetadata extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/product-variant' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ProductVariant extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/raw-custom-audience' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class RawCustomAudience extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/reach-frequency-activity' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ReachFrequencyActivity extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/reach-frequency-ad-format' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ReachFrequencyAdFormat extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/reach-frequency-curve-lower-confidence-range' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ReachFrequencyCurveLowerConfidenceRange extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/reach-frequency-curve-upper-confidence-range' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ReachFrequencyCurveUpperConfidenceRange extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/reach-frequency-day-part' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ReachFrequencyDayPart extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/reach-frequency-estimates-curve' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ReachFrequencyEstimatesCurve extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/reach-frequency-estimates-placement-breakdown' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ReachFrequencyEstimatesPlacementBreakdown extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/reach-frequency-spec' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ReachFrequencySpec extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/rev-share-policy' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class RevSharePolicy extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/rich-media-element' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class RichMediaElement extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/saved-message-response' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class SavedMessageResponse extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<SavedMessageResponse>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/security-settings' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class SecuritySettings extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/split-test-winner' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class SplitTestWinner extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/store-catalog-settings' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    import AbstractObject from 'facebook-nodejs-business-sdk/src/abstract-object';
    export default class StoreCatalogSettings extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<StoreCatalogSettings>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<StoreCatalogSettings>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/targeting' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class Targeting extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        static get DevicePlatforms(): Record<string, any>;
        static get EffectiveDevicePlatforms(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/targeting-dynamic-rule' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class TargetingDynamicRule extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/targeting-geo-location' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class TargetingGeoLocation extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/targeting-geo-location-city' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class TargetingGeoLocationCity extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/targeting-geo-location-custom-location' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class TargetingGeoLocationCustomLocation extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/targeting-geo-location-electoral-district' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class TargetingGeoLocationElectoralDistrict extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/targeting-geo-location-geo-entities' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class TargetingGeoLocationGeoEntities extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/targeting-geo-location-location-cluster' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class TargetingGeoLocationLocationCluster extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/targeting-geo-location-location-expansion' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class TargetingGeoLocationLocationExpansion extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/targeting-geo-location-market' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class TargetingGeoLocationMarket extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/targeting-geo-location-place' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class TargetingGeoLocationPlace extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/targeting-geo-location-political-district' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class TargetingGeoLocationPoliticalDistrict extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/targeting-geo-location-region' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class TargetingGeoLocationRegion extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/targeting-geo-location-zip' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class TargetingGeoLocationZip extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/targeting-product-audience-spec' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class TargetingProductAudienceSpec extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/targeting-product-audience-sub-spec' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class TargetingProductAudienceSubSpec extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/targeting-prospecting-audience' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class TargetingProspectingAudience extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/targeting-relaxation' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class TargetingRelaxation extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/tracking-and-conversion-with-defaults' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class TrackingAndConversionWithDefaults extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/user-cover-photo' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class UserCoverPhoto extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/user-device' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class UserDevice extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/user-lead-gen-disclaimer-response' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class UserLeadGenDisclaimerResponse extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/user-lead-gen-field-data' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class UserLeadGenFieldData extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/user-payment-mobile-pricepoints' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class UserPaymentMobilePricepoints extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/value-based-eligible-source' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class ValueBasedEligibleSource extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/video-copyright-condition-group' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class VideoCopyrightConditionGroup extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/video-copyright-geo-gate' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class VideoCopyrightGeoGate extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/video-copyright-segment' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class VideoCopyrightSegment extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/video-upload-limits' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class VideoUploadLimits extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/voip-info' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class VoipInfo extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/web-app-link' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class WebAppLink extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/whats-app-business-pre-verified-phone-number' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class WhatsAppBusinessPreVerifiedPhoneNumber extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<WhatsAppBusinessPreVerifiedPhoneNumber>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/whats-app-business-profile' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class WhatsAppBusinessProfile extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<WhatsAppBusinessProfile>;
        update(fields: Array<string>, params?: Record<string, any>): Promise<WhatsAppBusinessProfile>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/windows-app-link' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class WindowsAppLink extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/windows-phone-app-link' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class WindowsPhoneAppLink extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/woodhenge-purchased-payg-receipt' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class WoodhengePurchasedPAYGReceipt extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
        get(fields: Array<string>, params?: Record<string, any>): Promise<WoodhengePurchasedPAYGReceipt>;
    }
}
declare module 'facebook-nodejs-business-sdk/src/objects/work-user-frontline' {
    import { AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export default class WorkUserFrontline extends AbstractCrudObject {
        static get Fields(): Record<string, any>;
    }
}
declare module 'facebook-nodejs-business-sdk' {
    export { default as FacebookAdsApi } from 'facebook-nodejs-business-sdk/src/api';
    export { default as FacebookAdsApiBatch } from 'facebook-nodejs-business-sdk/src/api-batch';
    export { default as AbstractCrudObject } from 'facebook-nodejs-business-sdk/src/abstract-crud-object';
    export { default as APIRequest } from 'facebook-nodejs-business-sdk/src/api-request';
    export { default as APIResponse } from 'facebook-nodejs-business-sdk/src/api-response';
    export { default as CrashReporter } from 'facebook-nodejs-business-sdk/src/crash-reporter';
    export { default as Content } from 'facebook-nodejs-business-sdk/src/objects/serverside/content';
    export { default as CustomData } from 'facebook-nodejs-business-sdk/src/objects/serverside/custom-data';
    export { default as EventRequest } from 'facebook-nodejs-business-sdk/src/objects/serverside/event-request';
    export { default as EventResponse } from 'facebook-nodejs-business-sdk/src/objects/serverside/event-response';
    export { default as ServerEvent } from 'facebook-nodejs-business-sdk/src/objects/serverside/server-event';
    export { default as UserData } from 'facebook-nodejs-business-sdk/src/objects/serverside/user-data';
    export { default as DeliveryCategory } from 'facebook-nodejs-business-sdk/src/objects/serverside/delivery-category';
    export { default as HttpMethod } from 'facebook-nodejs-business-sdk/src/objects/serverside/http-method';
    export { default as HttpServiceClientConfig } from 'facebook-nodejs-business-sdk/src/objects/serverside/http-service-client-config';
    export { default as HttpServiceInterface } from 'facebook-nodejs-business-sdk/src/objects/serverside/http-service-interface';
    export { default as BatchProcessor } from 'facebook-nodejs-business-sdk/src/objects/serverside/batch-processor';
    export { default as ServerSideUtils } from 'facebook-nodejs-business-sdk/src/objects/serverside/utils';
    export { default as SignalUserData } from 'facebook-nodejs-business-sdk/src/objects/signal/user-data';
    export { default as SignalContent } from 'facebook-nodejs-business-sdk/src/objects/signal/content';
    export { default as SignalCustomData } from 'facebook-nodejs-business-sdk/src/objects/signal/custom-data';
    export { default as SignalEvent } from 'facebook-nodejs-business-sdk/src/objects/signal/event';
    export { default as SignalEventRequest } from 'facebook-nodejs-business-sdk/src/objects/signal/event-request';
    export { default as AREffectsBatchStatus } from 'facebook-nodejs-business-sdk/src/objects/ar-effects-batch-status';
    export { default as Ad } from 'facebook-nodejs-business-sdk/src/objects/ad';
    export { default as AdAccount } from 'facebook-nodejs-business-sdk/src/objects/ad-account';
    export { default as AdAccountAdRulesHistory } from 'facebook-nodejs-business-sdk/src/objects/ad-account-ad-rules-history';
    export { default as AdAccountAdVolume } from 'facebook-nodejs-business-sdk/src/objects/ad-account-ad-volume';
    export { default as AdAccountCustomAudience } from 'facebook-nodejs-business-sdk/src/objects/ad-account-custom-audience';
    export { default as AdAccountDefaultDestination } from 'facebook-nodejs-business-sdk/src/objects/ad-account-default-destination';
    export { default as AdAccountDefaultObjective } from 'facebook-nodejs-business-sdk/src/objects/ad-account-default-objective';
    export { default as AdAccountDeliveryEstimate } from 'facebook-nodejs-business-sdk/src/objects/ad-account-delivery-estimate';
    export { default as AdAccountIosFourteenCampaignLimits } from 'facebook-nodejs-business-sdk/src/objects/ad-account-ios-fourteen-campaign-limits';
    export { default as AdAccountMatchedSearchApplicationsEdgeData } from 'facebook-nodejs-business-sdk/src/objects/ad-account-matched-search-applications-edge-data';
    export { default as AdAccountMaxBid } from 'facebook-nodejs-business-sdk/src/objects/ad-account-max-bid';
    export { default as AdAccountPromotableObjects } from 'facebook-nodejs-business-sdk/src/objects/ad-account-promotable-objects';
    export { default as AdAccountReachEstimate } from 'facebook-nodejs-business-sdk/src/objects/ad-account-reach-estimate';
    export { default as AdAccountRecommendedCamapaignBudget } from 'facebook-nodejs-business-sdk/src/objects/ad-account-recommended-camapaign-budget';
    export { default as AdAccountSubscribedApps } from 'facebook-nodejs-business-sdk/src/objects/ad-account-subscribed-apps';
    export { default as AdAccountTargetingUnified } from 'facebook-nodejs-business-sdk/src/objects/ad-account-targeting-unified';
    export { default as AdAccountTrackingData } from 'facebook-nodejs-business-sdk/src/objects/ad-account-tracking-data';
    export { default as AdAccountUser } from 'facebook-nodejs-business-sdk/src/objects/ad-account-user';
    export { default as AdActivity } from 'facebook-nodejs-business-sdk/src/objects/ad-activity';
    export { default as AdAssetFeedSpec } from 'facebook-nodejs-business-sdk/src/objects/ad-asset-feed-spec';
    export { default as AdAssetFeedSpecAssetLabel } from 'facebook-nodejs-business-sdk/src/objects/ad-asset-feed-spec-asset-label';
    export { default as AdAssetFeedSpecBody } from 'facebook-nodejs-business-sdk/src/objects/ad-asset-feed-spec-body';
    export { default as AdAssetFeedSpecCaption } from 'facebook-nodejs-business-sdk/src/objects/ad-asset-feed-spec-caption';
    export { default as AdAssetFeedSpecDescription } from 'facebook-nodejs-business-sdk/src/objects/ad-asset-feed-spec-description';
    export { default as AdAssetFeedSpecGroupRule } from 'facebook-nodejs-business-sdk/src/objects/ad-asset-feed-spec-group-rule';
    export { default as AdAssetFeedSpecImage } from 'facebook-nodejs-business-sdk/src/objects/ad-asset-feed-spec-image';
    export { default as AdAssetFeedSpecLinkURL } from 'facebook-nodejs-business-sdk/src/objects/ad-asset-feed-spec-link-url';
    export { default as AdAssetFeedSpecTitle } from 'facebook-nodejs-business-sdk/src/objects/ad-asset-feed-spec-title';
    export { default as AdAssetFeedSpecVideo } from 'facebook-nodejs-business-sdk/src/objects/ad-asset-feed-spec-video';
    export { default as AdAsyncRequest } from 'facebook-nodejs-business-sdk/src/objects/ad-async-request';
    export { default as AdAsyncRequestSet } from 'facebook-nodejs-business-sdk/src/objects/ad-async-request-set';
    export { default as AdAsyncRequestSetNotificationResult } from 'facebook-nodejs-business-sdk/src/objects/ad-async-request-set-notification-result';
    export { default as AdBidAdjustments } from 'facebook-nodejs-business-sdk/src/objects/ad-bid-adjustments';
    export { default as AdCampaignActivity } from 'facebook-nodejs-business-sdk/src/objects/ad-campaign-activity';
    export { default as AdCampaignBidConstraint } from 'facebook-nodejs-business-sdk/src/objects/ad-campaign-bid-constraint';
    export { default as AdCampaignDeliveryEstimate } from 'facebook-nodejs-business-sdk/src/objects/ad-campaign-delivery-estimate';
    export { default as AdCampaignDeliveryStatsUnsupportedReasons } from 'facebook-nodejs-business-sdk/src/objects/ad-campaign-delivery-stats-unsupported-reasons';
    export { default as AdCampaignFrequencyControlSpecs } from 'facebook-nodejs-business-sdk/src/objects/ad-campaign-frequency-control-specs';
    export { default as AdCampaignIssuesInfo } from 'facebook-nodejs-business-sdk/src/objects/ad-campaign-issues-info';
    export { default as AdCampaignLearningStageInfo } from 'facebook-nodejs-business-sdk/src/objects/ad-campaign-learning-stage-info';
    export { default as AdCampaignOptimizationEvent } from 'facebook-nodejs-business-sdk/src/objects/ad-campaign-optimization-event';
    export { default as AdCampaignPacedBidInfo } from 'facebook-nodejs-business-sdk/src/objects/ad-campaign-paced-bid-info';
    export { default as AdCreative } from 'facebook-nodejs-business-sdk/src/objects/ad-creative';
    export { default as AdCreativeAdDisclaimer } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-ad-disclaimer';
    export { default as AdCreativeCollectionThumbnailInfo } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-collection-thumbnail-info';
    export { default as AdCreativeInsights } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-insights';
    export { default as AdCreativeInteractiveComponentsSpec } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-interactive-components-spec';
    export { default as AdCreativeLinkData } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-link-data';
    export { default as AdCreativeLinkDataAppLinkSpec } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-link-data-app-link-spec';
    export { default as AdCreativeLinkDataCallToAction } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-link-data-call-to-action';
    export { default as AdCreativeLinkDataCallToActionValue } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-link-data-call-to-action-value';
    export { default as AdCreativeLinkDataChildAttachment } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-link-data-child-attachment';
    export { default as AdCreativeLinkDataImageLayerSpec } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-link-data-image-layer-spec';
    export { default as AdCreativeLinkDataImageOverlaySpec } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-link-data-image-overlay-spec';
    export { default as AdCreativeLinkDataSponsorshipInfoSpec } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-link-data-sponsorship-info-spec';
    export { default as AdCreativeLinkDataTemplateVideoSpec } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-link-data-template-video-spec';
    export { default as AdCreativeObjectStorySpec } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-object-story-spec';
    export { default as AdCreativeOmnichannelLinkSpec } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-omnichannel-link-spec';
    export { default as AdCreativePhotoData } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-photo-data';
    export { default as AdCreativePhotoDataMediaElements } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-photo-data-media-elements';
    export { default as AdCreativePlaceData } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-place-data';
    export { default as AdCreativePlatformCustomization } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-platform-customization';
    export { default as AdCreativePortraitCustomizations } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-portrait-customizations';
    export { default as AdCreativePostClickConfiguration } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-post-click-configuration';
    export { default as AdCreativeRecommenderSettings } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-recommender-settings';
    export { default as AdCreativeStaticFallbackSpec } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-static-fallback-spec';
    export { default as AdCreativeTemplateURLSpec } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-template-url-spec';
    export { default as AdCreativeTextData } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-text-data';
    export { default as AdCreativeVideoData } from 'facebook-nodejs-business-sdk/src/objects/ad-creative-video-data';
    export { default as AdCustomizationRuleSpec } from 'facebook-nodejs-business-sdk/src/objects/ad-customization-rule-spec';
    export { default as AdDynamicCreative } from 'facebook-nodejs-business-sdk/src/objects/ad-dynamic-creative';
    export { default as AdEntityTargetSpend } from 'facebook-nodejs-business-sdk/src/objects/ad-entity-target-spend';
    export { default as AdImage } from 'facebook-nodejs-business-sdk/src/objects/ad-image';
    export { default as AdKeywords } from 'facebook-nodejs-business-sdk/src/objects/ad-keywords';
    export { default as AdLabel } from 'facebook-nodejs-business-sdk/src/objects/ad-label';
    export { default as AdMonetizationProperty } from 'facebook-nodejs-business-sdk/src/objects/ad-monetization-property';
    export { default as AdNetworkAnalyticsAsyncQueryResult } from 'facebook-nodejs-business-sdk/src/objects/ad-network-analytics-async-query-result';
    export { default as AdNetworkAnalyticsSyncQueryResult } from 'facebook-nodejs-business-sdk/src/objects/ad-network-analytics-sync-query-result';
    export { default as AdPlacePageSet } from 'facebook-nodejs-business-sdk/src/objects/ad-place-page-set';
    export { default as AdPlacePageSetMetadata } from 'facebook-nodejs-business-sdk/src/objects/ad-place-page-set-metadata';
    export { default as AdPlacement } from 'facebook-nodejs-business-sdk/src/objects/ad-placement';
    export { default as AdPreview } from 'facebook-nodejs-business-sdk/src/objects/ad-preview';
    export { default as AdPromotedObject } from 'facebook-nodejs-business-sdk/src/objects/ad-promoted-object';
    export { default as AdRecommendation } from 'facebook-nodejs-business-sdk/src/objects/ad-recommendation';
    export { default as AdRecommendationData } from 'facebook-nodejs-business-sdk/src/objects/ad-recommendation-data';
    export { default as AdReportRun } from 'facebook-nodejs-business-sdk/src/objects/ad-report-run';
    export { default as AdRule } from 'facebook-nodejs-business-sdk/src/objects/ad-rule';
    export { default as AdRuleEvaluationSpec } from 'facebook-nodejs-business-sdk/src/objects/ad-rule-evaluation-spec';
    export { default as AdRuleExecutionOptions } from 'facebook-nodejs-business-sdk/src/objects/ad-rule-execution-options';
    export { default as AdRuleExecutionSpec } from 'facebook-nodejs-business-sdk/src/objects/ad-rule-execution-spec';
    export { default as AdRuleFilters } from 'facebook-nodejs-business-sdk/src/objects/ad-rule-filters';
    export { default as AdRuleHistory } from 'facebook-nodejs-business-sdk/src/objects/ad-rule-history';
    export { default as AdRuleHistoryResult } from 'facebook-nodejs-business-sdk/src/objects/ad-rule-history-result';
    export { default as AdRuleHistoryResultAction } from 'facebook-nodejs-business-sdk/src/objects/ad-rule-history-result-action';
    export { default as AdRuleSchedule } from 'facebook-nodejs-business-sdk/src/objects/ad-rule-schedule';
    export { default as AdRuleScheduleSpec } from 'facebook-nodejs-business-sdk/src/objects/ad-rule-schedule-spec';
    export { default as AdRuleTrigger } from 'facebook-nodejs-business-sdk/src/objects/ad-rule-trigger';
    export { default as AdSet } from 'facebook-nodejs-business-sdk/src/objects/ad-set';
    export { default as AdStudy } from 'facebook-nodejs-business-sdk/src/objects/ad-study';
    export { default as AdStudyCell } from 'facebook-nodejs-business-sdk/src/objects/ad-study-cell';
    export { default as AdStudyObjective } from 'facebook-nodejs-business-sdk/src/objects/ad-study-objective';
    export { default as AdStudyObjectiveID } from 'facebook-nodejs-business-sdk/src/objects/ad-study-objective-id';
    export { default as AdStudyObjectiveOffsiteDatasets } from 'facebook-nodejs-business-sdk/src/objects/ad-study-objective-offsite-datasets';
    export { default as AdVideo } from 'facebook-nodejs-business-sdk/src/objects/ad-video';
    export { default as AdgroupIssuesInfo } from 'facebook-nodejs-business-sdk/src/objects/adgroup-issues-info';
    export { default as AdgroupMetadata } from 'facebook-nodejs-business-sdk/src/objects/adgroup-metadata';
    export { default as AdgroupPlacementSpecificReviewFeedback } from 'facebook-nodejs-business-sdk/src/objects/adgroup-placement-specific-review-feedback';
    export { default as AdgroupReviewFeedback } from 'facebook-nodejs-business-sdk/src/objects/adgroup-review-feedback';
    export { default as AdsActionStats } from 'facebook-nodejs-business-sdk/src/objects/ads-action-stats';
    export { default as AdsImageCrops } from 'facebook-nodejs-business-sdk/src/objects/ads-image-crops';
    export { default as AdsInsights } from 'facebook-nodejs-business-sdk/src/objects/ads-insights';
    export { default as AdsOptimalDeliveryGrowthOpportunity } from 'facebook-nodejs-business-sdk/src/objects/ads-optimal-delivery-growth-opportunity';
    export { default as AdsPixel } from 'facebook-nodejs-business-sdk/src/objects/ads-pixel';
    export { default as AdsPixelStats } from 'facebook-nodejs-business-sdk/src/objects/ads-pixel-stats';
    export { default as AdsPixelStatsResult } from 'facebook-nodejs-business-sdk/src/objects/ads-pixel-stats-result';
    export { default as AgeRange } from 'facebook-nodejs-business-sdk/src/objects/age-range';
    export { default as AgencyClientDeclaration } from 'facebook-nodejs-business-sdk/src/objects/agency-client-declaration';
    export { default as Album } from 'facebook-nodejs-business-sdk/src/objects/album';
    export { default as AndroidAppLink } from 'facebook-nodejs-business-sdk/src/objects/android-app-link';
    export { default as AppRequest } from 'facebook-nodejs-business-sdk/src/objects/app-request';
    export { default as AppRequestFormerRecipient } from 'facebook-nodejs-business-sdk/src/objects/app-request-former-recipient';
    export { default as Application } from 'facebook-nodejs-business-sdk/src/objects/application';
    export { default as AssignedUser } from 'facebook-nodejs-business-sdk/src/objects/assigned-user';
    export { default as AsyncRequest } from 'facebook-nodejs-business-sdk/src/objects/async-request';
    export { default as AsyncSession } from 'facebook-nodejs-business-sdk/src/objects/async-session';
    export { default as AttributionSpec } from 'facebook-nodejs-business-sdk/src/objects/attribution-spec';
    export { default as AudiencePermissionForActions } from 'facebook-nodejs-business-sdk/src/objects/audience-permission-for-actions';
    export { default as AudioCopyright } from 'facebook-nodejs-business-sdk/src/objects/audio-copyright';
    export { default as AutomotiveModel } from 'facebook-nodejs-business-sdk/src/objects/automotive-model';
    export { default as BrandSafetyBlockListUsage } from 'facebook-nodejs-business-sdk/src/objects/brand-safety-block-list-usage';
    export { default as BroadTargetingCategories } from 'facebook-nodejs-business-sdk/src/objects/broad-targeting-categories';
    export { default as Business } from 'facebook-nodejs-business-sdk/src/objects/business';
    export { default as BusinessAdAccountRequest } from 'facebook-nodejs-business-sdk/src/objects/business-ad-account-request';
    export { default as BusinessApplicationRequest } from 'facebook-nodejs-business-sdk/src/objects/business-application-request';
    export { default as BusinessAssetGroup } from 'facebook-nodejs-business-sdk/src/objects/business-asset-group';
    export { default as BusinessAssetSharingAgreement } from 'facebook-nodejs-business-sdk/src/objects/business-asset-sharing-agreement';
    export { default as BusinessImage } from 'facebook-nodejs-business-sdk/src/objects/business-image';
    export { default as BusinessManagedPartnerEligibility } from 'facebook-nodejs-business-sdk/src/objects/business-managed-partner-eligibility';
    export { default as BusinessOwnedObjectOnBehalfOfRequest } from 'facebook-nodejs-business-sdk/src/objects/business-owned-object-on-behalf-of-request';
    export { default as BusinessPageRequest } from 'facebook-nodejs-business-sdk/src/objects/business-page-request';
    export { default as BusinessPartnerPremiumOptions } from 'facebook-nodejs-business-sdk/src/objects/business-partner-premium-options';
    export { default as BusinessRoleRequest } from 'facebook-nodejs-business-sdk/src/objects/business-role-request';
    export { default as BusinessUser } from 'facebook-nodejs-business-sdk/src/objects/business-user';
    export { default as CPASAdvertiserPartnershipRecommendation } from 'facebook-nodejs-business-sdk/src/objects/cpas-advertiser-partnership-recommendation';
    export { default as CPASBusinessSetupConfig } from 'facebook-nodejs-business-sdk/src/objects/cpas-business-setup-config';
    export { default as CPASCollaborationRequest } from 'facebook-nodejs-business-sdk/src/objects/cpas-collaboration-request';
    export { default as CPASMerchantConfig } from 'facebook-nodejs-business-sdk/src/objects/cpas-merchant-config';
    export { default as CRMAddress } from 'facebook-nodejs-business-sdk/src/objects/crm-address';
    export { default as Campaign } from 'facebook-nodejs-business-sdk/src/objects/campaign';
    export { default as CampaignGroupBrandConfiguration } from 'facebook-nodejs-business-sdk/src/objects/campaign-group-brand-configuration';
    export { default as CampaignGroupCollaborativeAdsPartnerInfo } from 'facebook-nodejs-business-sdk/src/objects/campaign-group-collaborative-ads-partner-info';
    export { default as Canvas } from 'facebook-nodejs-business-sdk/src/objects/canvas';
    export { default as CanvasAdSettings } from 'facebook-nodejs-business-sdk/src/objects/canvas-ad-settings';
    export { default as CanvasBodyElement } from 'facebook-nodejs-business-sdk/src/objects/canvas-body-element';
    export { default as CanvasCollectionThumbnail } from 'facebook-nodejs-business-sdk/src/objects/canvas-collection-thumbnail';
    export { default as CanvasDynamicSetting } from 'facebook-nodejs-business-sdk/src/objects/canvas-dynamic-setting';
    export { default as CatalogBasedTargeting } from 'facebook-nodejs-business-sdk/src/objects/catalog-based-targeting';
    export { default as CatalogItemAppLinks } from 'facebook-nodejs-business-sdk/src/objects/catalog-item-app-links';
    export { default as CatalogItemAppealStatus } from 'facebook-nodejs-business-sdk/src/objects/catalog-item-appeal-status';
    export { default as CatalogItemChannelsToIntegrityStatus } from 'facebook-nodejs-business-sdk/src/objects/catalog-item-channels-to-integrity-status';
    export { default as CatalogSubVerticalList } from 'facebook-nodejs-business-sdk/src/objects/catalog-sub-vertical-list';
    export { default as ChatPlugin } from 'facebook-nodejs-business-sdk/src/objects/chat-plugin';
    export { default as CheckBatchRequestStatus } from 'facebook-nodejs-business-sdk/src/objects/check-batch-request-status';
    export { default as ChildEvent } from 'facebook-nodejs-business-sdk/src/objects/child-event';
    export { default as CloudGame } from 'facebook-nodejs-business-sdk/src/objects/cloud-game';
    export { default as CollaborativeAdsPartnerInfoListItem } from 'facebook-nodejs-business-sdk/src/objects/collaborative-ads-partner-info-list-item';
    export { default as CollaborativeAdsShareSettings } from 'facebook-nodejs-business-sdk/src/objects/collaborative-ads-share-settings';
    export { default as Comment } from 'facebook-nodejs-business-sdk/src/objects/comment';
    export { default as CommerceMerchantSettings } from 'facebook-nodejs-business-sdk/src/objects/commerce-merchant-settings';
    export { default as CommerceMerchantSettingsSetupStatus } from 'facebook-nodejs-business-sdk/src/objects/commerce-merchant-settings-setup-status';
    export { default as CommerceOrder } from 'facebook-nodejs-business-sdk/src/objects/commerce-order';
    export { default as CommerceOrderTransactionDetail } from 'facebook-nodejs-business-sdk/src/objects/commerce-order-transaction-detail';
    export { default as CommercePayout } from 'facebook-nodejs-business-sdk/src/objects/commerce-payout';
    export { default as CommerceSettings } from 'facebook-nodejs-business-sdk/src/objects/commerce-settings';
    export { default as ConnectionsTargeting } from 'facebook-nodejs-business-sdk/src/objects/connections-targeting';
    export { default as ContextualBundlingSpec } from 'facebook-nodejs-business-sdk/src/objects/contextual-bundling-spec';
    export { default as ConversionActionQuery } from 'facebook-nodejs-business-sdk/src/objects/conversion-action-query';
    export { default as CopyrightAudioAsset } from 'facebook-nodejs-business-sdk/src/objects/copyright-audio-asset';
    export { default as CopyrightReferenceContainer } from 'facebook-nodejs-business-sdk/src/objects/copyright-reference-container';
    export { default as CoverPhoto } from 'facebook-nodejs-business-sdk/src/objects/cover-photo';
    export { default as CreativeHistory } from 'facebook-nodejs-business-sdk/src/objects/creative-history';
    export { default as CreditCard } from 'facebook-nodejs-business-sdk/src/objects/credit-card';
    export { default as CreditPartitionActionOptions } from 'facebook-nodejs-business-sdk/src/objects/credit-partition-action-options';
    export { default as Currency } from 'facebook-nodejs-business-sdk/src/objects/currency';
    export { default as CurrencyAmount } from 'facebook-nodejs-business-sdk/src/objects/currency-amount';
    export { default as CustomAudience } from 'facebook-nodejs-business-sdk/src/objects/custom-audience';
    export { default as CustomAudienceAdAccount } from 'facebook-nodejs-business-sdk/src/objects/custom-audience-ad-account';
    export { default as CustomAudienceDataSource } from 'facebook-nodejs-business-sdk/src/objects/custom-audience-data-source';
    export { default as CustomAudienceSession } from 'facebook-nodejs-business-sdk/src/objects/custom-audience-session';
    export { default as CustomAudienceSharingStatus } from 'facebook-nodejs-business-sdk/src/objects/custom-audience-sharing-status';
    export { default as CustomAudienceStatus } from 'facebook-nodejs-business-sdk/src/objects/custom-audience-status';
    export { default as CustomAudiencesTOS } from 'facebook-nodejs-business-sdk/src/objects/custom-audiences-tos';
    export { default as CustomAudiencesharedAccountInfo } from 'facebook-nodejs-business-sdk/src/objects/custom-audienceshared-account-info';
    export { default as CustomConversion } from 'facebook-nodejs-business-sdk/src/objects/custom-conversion';
    export { default as CustomConversionStatsResult } from 'facebook-nodejs-business-sdk/src/objects/custom-conversion-stats-result';
    export { default as CustomUserSettings } from 'facebook-nodejs-business-sdk/src/objects/custom-user-settings';
    export { default as DACheck } from 'facebook-nodejs-business-sdk/src/objects/da-check';
    export { default as DayPart } from 'facebook-nodejs-business-sdk/src/objects/day-part';
    export { default as DeliveryCheck } from 'facebook-nodejs-business-sdk/src/objects/delivery-check';
    export { default as DeliveryCheckExtraInfo } from 'facebook-nodejs-business-sdk/src/objects/delivery-check-extra-info';
    export { default as DeliveryWindow } from 'facebook-nodejs-business-sdk/src/objects/delivery-window';
    export { default as Destination } from 'facebook-nodejs-business-sdk/src/objects/destination';
    export { default as DestinationCatalogSettings } from 'facebook-nodejs-business-sdk/src/objects/destination-catalog-settings';
    export { default as DynamicPostChildAttachment } from 'facebook-nodejs-business-sdk/src/objects/dynamic-post-child-attachment';
    export { default as DynamicPriceConfigByDate } from 'facebook-nodejs-business-sdk/src/objects/dynamic-price-config-by-date';
    export { default as Engagement } from 'facebook-nodejs-business-sdk/src/objects/engagement';
    export { default as EntityAtTextRange } from 'facebook-nodejs-business-sdk/src/objects/entity-at-text-range';
    export { default as Event } from 'facebook-nodejs-business-sdk/src/objects/event';
    export { default as EventSourceGroup } from 'facebook-nodejs-business-sdk/src/objects/event-source-group';
    export { default as Experience } from 'facebook-nodejs-business-sdk/src/objects/experience';
    export { default as ExtendedCredit } from 'facebook-nodejs-business-sdk/src/objects/extended-credit';
    export { default as ExtendedCreditAllocationConfig } from 'facebook-nodejs-business-sdk/src/objects/extended-credit-allocation-config';
    export { default as ExtendedCreditInvoiceGroup } from 'facebook-nodejs-business-sdk/src/objects/extended-credit-invoice-group';
    export { default as ExternalEventSource } from 'facebook-nodejs-business-sdk/src/objects/external-event-source';
    export { default as FAMEExportConfig } from 'facebook-nodejs-business-sdk/src/objects/fame-export-config';
    export { default as FlexibleTargeting } from 'facebook-nodejs-business-sdk/src/objects/flexible-targeting';
    export { default as Flight } from 'facebook-nodejs-business-sdk/src/objects/flight';
    export { default as FundingSourceDetails } from 'facebook-nodejs-business-sdk/src/objects/funding-source-details';
    export { default as FundingSourceDetailsCoupon } from 'facebook-nodejs-business-sdk/src/objects/funding-source-details-coupon';
    export { default as FundraiserPersonToCharity } from 'facebook-nodejs-business-sdk/src/objects/fundraiser-person-to-charity';
    export { default as GameItem } from 'facebook-nodejs-business-sdk/src/objects/game-item';
    export { default as Group } from 'facebook-nodejs-business-sdk/src/objects/group';
    export { default as HomeListing } from 'facebook-nodejs-business-sdk/src/objects/home-listing';
    export { default as Hotel } from 'facebook-nodejs-business-sdk/src/objects/hotel';
    export { default as HotelRoom } from 'facebook-nodejs-business-sdk/src/objects/hotel-room';
    export { default as IDName } from 'facebook-nodejs-business-sdk/src/objects/id-name';
    export { default as IGBCAdsPermission } from 'facebook-nodejs-business-sdk/src/objects/igbc-ads-permission';
    export { default as IGComment } from 'facebook-nodejs-business-sdk/src/objects/ig-comment';
    export { default as IGMedia } from 'facebook-nodejs-business-sdk/src/objects/ig-media';
    export { default as IGUser } from 'facebook-nodejs-business-sdk/src/objects/ig-user';
    export { default as ImageCopyright } from 'facebook-nodejs-business-sdk/src/objects/image-copyright';
    export { default as InsightsResult } from 'facebook-nodejs-business-sdk/src/objects/insights-result';
    export { default as InstagramInsightsResult } from 'facebook-nodejs-business-sdk/src/objects/instagram-insights-result';
    export { default as InstagramInsightsValue } from 'facebook-nodejs-business-sdk/src/objects/instagram-insights-value';
    export { default as InstagramUser } from 'facebook-nodejs-business-sdk/src/objects/instagram-user';
    export { default as InstantArticle } from 'facebook-nodejs-business-sdk/src/objects/instant-article';
    export { default as InstantArticleInsightsQueryResult } from 'facebook-nodejs-business-sdk/src/objects/instant-article-insights-query-result';
    export { default as InstantArticlesStats } from 'facebook-nodejs-business-sdk/src/objects/instant-articles-stats';
    export { default as IosAppLink } from 'facebook-nodejs-business-sdk/src/objects/ios-app-link';
    export { default as JobsJob } from 'facebook-nodejs-business-sdk/src/objects/jobs-job';
    export { default as KeyValue } from 'facebook-nodejs-business-sdk/src/objects/key-value';
    export { default as Lead } from 'facebook-nodejs-business-sdk/src/objects/lead';
    export { default as LeadGenAppointmentBookingInfo } from 'facebook-nodejs-business-sdk/src/objects/lead-gen-appointment-booking-info';
    export { default as LeadGenConditionalQuestionsGroupChoices } from 'facebook-nodejs-business-sdk/src/objects/lead-gen-conditional-questions-group-choices';
    export { default as LeadGenConditionalQuestionsGroupQuestions } from 'facebook-nodejs-business-sdk/src/objects/lead-gen-conditional-questions-group-questions';
    export { default as LeadGenDraftQuestion } from 'facebook-nodejs-business-sdk/src/objects/lead-gen-draft-question';
    export { default as LeadGenPostSubmissionCheckResult } from 'facebook-nodejs-business-sdk/src/objects/lead-gen-post-submission-check-result';
    export { default as LeadGenQuestion } from 'facebook-nodejs-business-sdk/src/objects/lead-gen-question';
    export { default as LeadGenQuestionOption } from 'facebook-nodejs-business-sdk/src/objects/lead-gen-question-option';
    export { default as LeadgenForm } from 'facebook-nodejs-business-sdk/src/objects/leadgen-form';
    export { default as LifeEvent } from 'facebook-nodejs-business-sdk/src/objects/life-event';
    export { default as Link } from 'facebook-nodejs-business-sdk/src/objects/link';
    export { default as LiveVideo } from 'facebook-nodejs-business-sdk/src/objects/live-video';
    export { default as LiveVideoAdBreakConfig } from 'facebook-nodejs-business-sdk/src/objects/live-video-ad-break-config';
    export { default as LiveVideoError } from 'facebook-nodejs-business-sdk/src/objects/live-video-error';
    export { default as LiveVideoInputStream } from 'facebook-nodejs-business-sdk/src/objects/live-video-input-stream';
    export { default as LiveVideoRecommendedEncoderSettings } from 'facebook-nodejs-business-sdk/src/objects/live-video-recommended-encoder-settings';
    export { default as LiveVideoTargeting } from 'facebook-nodejs-business-sdk/src/objects/live-video-targeting';
    export { default as LocalServiceBusiness } from 'facebook-nodejs-business-sdk/src/objects/local-service-business';
    export { default as Location } from 'facebook-nodejs-business-sdk/src/objects/location';
    export { default as LookalikeSpec } from 'facebook-nodejs-business-sdk/src/objects/lookalike-spec';
    export { default as MailingAddress } from 'facebook-nodejs-business-sdk/src/objects/mailing-address';
    export { default as ManagedPartnerBusiness } from 'facebook-nodejs-business-sdk/src/objects/managed-partner-business';
    export { default as MediaFingerprint } from 'facebook-nodejs-business-sdk/src/objects/media-fingerprint';
    export { default as MediaTitle } from 'facebook-nodejs-business-sdk/src/objects/media-title';
    export { default as MessagingFeatureReview } from 'facebook-nodejs-business-sdk/src/objects/messaging-feature-review';
    export { default as MessagingFeatureStatus } from 'facebook-nodejs-business-sdk/src/objects/messaging-feature-status';
    export { default as MessengerDestinationPageWelcomeMessage } from 'facebook-nodejs-business-sdk/src/objects/messenger-destination-page-welcome-message';
    export { default as MessengerProfile } from 'facebook-nodejs-business-sdk/src/objects/messenger-profile';
    export { default as MinimumBudget } from 'facebook-nodejs-business-sdk/src/objects/minimum-budget';
    export { default as MusicVideoCopyright } from 'facebook-nodejs-business-sdk/src/objects/music-video-copyright';
    export { default as NullNode } from 'facebook-nodejs-business-sdk/src/objects/null-node';
    export { default as OfflineConversionDataSet } from 'facebook-nodejs-business-sdk/src/objects/offline-conversion-data-set';
    export { default as OfflineConversionDataSetPermissions } from 'facebook-nodejs-business-sdk/src/objects/offline-conversion-data-set-permissions';
    export { default as OfflineConversionDataSetUpload } from 'facebook-nodejs-business-sdk/src/objects/offline-conversion-data-set-upload';
    export { default as OfflineConversionDataSetUsage } from 'facebook-nodejs-business-sdk/src/objects/offline-conversion-data-set-usage';
    export { default as OffsitePixel } from 'facebook-nodejs-business-sdk/src/objects/offsite-pixel';
    export { default as OmegaCustomerTrx } from 'facebook-nodejs-business-sdk/src/objects/omega-customer-trx';
    export { default as OpenGraphContext } from 'facebook-nodejs-business-sdk/src/objects/open-graph-context';
    export { default as OutcomePredictionPoint } from 'facebook-nodejs-business-sdk/src/objects/outcome-prediction-point';
    export { default as Page } from 'facebook-nodejs-business-sdk/src/objects/page';
    export { default as PageCallToAction } from 'facebook-nodejs-business-sdk/src/objects/page-call-to-action';
    export { default as PageCategory } from 'facebook-nodejs-business-sdk/src/objects/page-category';
    export { default as PageChangeProposal } from 'facebook-nodejs-business-sdk/src/objects/page-change-proposal';
    export { default as PageCommerceEligibility } from 'facebook-nodejs-business-sdk/src/objects/page-commerce-eligibility';
    export { default as PageParking } from 'facebook-nodejs-business-sdk/src/objects/page-parking';
    export { default as PagePaymentOptions } from 'facebook-nodejs-business-sdk/src/objects/page-payment-options';
    export { default as PagePost } from 'facebook-nodejs-business-sdk/src/objects/page-post';
    export { default as PagePostExperiment } from 'facebook-nodejs-business-sdk/src/objects/page-post-experiment';
    export { default as PageRestaurantServices } from 'facebook-nodejs-business-sdk/src/objects/page-restaurant-services';
    export { default as PageRestaurantSpecialties } from 'facebook-nodejs-business-sdk/src/objects/page-restaurant-specialties';
    export { default as PageSavedFilter } from 'facebook-nodejs-business-sdk/src/objects/page-saved-filter';
    export { default as PageSettings } from 'facebook-nodejs-business-sdk/src/objects/page-settings';
    export { default as PageStartInfo } from 'facebook-nodejs-business-sdk/src/objects/page-start-info';
    export { default as PageThreadOwner } from 'facebook-nodejs-business-sdk/src/objects/page-thread-owner';
    export { default as PageUpcomingChange } from 'facebook-nodejs-business-sdk/src/objects/page-upcoming-change';
    export { default as PageUserMessageThreadLabel } from 'facebook-nodejs-business-sdk/src/objects/page-user-message-thread-label';
    export { default as PartnerStudy } from 'facebook-nodejs-business-sdk/src/objects/partner-study';
    export { default as PaymentEnginePayment } from 'facebook-nodejs-business-sdk/src/objects/payment-engine-payment';
    export { default as PaymentPricepoints } from 'facebook-nodejs-business-sdk/src/objects/payment-pricepoints';
    export { default as PaymentSubscription } from 'facebook-nodejs-business-sdk/src/objects/payment-subscription';
    export { default as Permission } from 'facebook-nodejs-business-sdk/src/objects/permission';
    export { default as Persona } from 'facebook-nodejs-business-sdk/src/objects/persona';
    export { default as Photo } from 'facebook-nodejs-business-sdk/src/objects/photo';
    export { default as Place } from 'facebook-nodejs-business-sdk/src/objects/place';
    export { default as PlaceTopic } from 'facebook-nodejs-business-sdk/src/objects/place-topic';
    export { default as PlatformImageSource } from 'facebook-nodejs-business-sdk/src/objects/platform-image-source';
    export { default as PlayableContent } from 'facebook-nodejs-business-sdk/src/objects/playable-content';
    export { default as Post } from 'facebook-nodejs-business-sdk/src/objects/post';
    export { default as Privacy } from 'facebook-nodejs-business-sdk/src/objects/privacy';
    export { default as PrivateLiftStudyInstance } from 'facebook-nodejs-business-sdk/src/objects/private-lift-study-instance';
    export { default as ProductCatalog } from 'facebook-nodejs-business-sdk/src/objects/product-catalog';
    export { default as ProductCatalogCategory } from 'facebook-nodejs-business-sdk/src/objects/product-catalog-category';
    export { default as ProductCatalogDataSource } from 'facebook-nodejs-business-sdk/src/objects/product-catalog-data-source';
    export { default as ProductCatalogDiagnosticGroup } from 'facebook-nodejs-business-sdk/src/objects/product-catalog-diagnostic-group';
    export { default as ProductCatalogHotelRoomsBatch } from 'facebook-nodejs-business-sdk/src/objects/product-catalog-hotel-rooms-batch';
    export { default as ProductCatalogImageSettings } from 'facebook-nodejs-business-sdk/src/objects/product-catalog-image-settings';
    export { default as ProductCatalogImageSettingsOperation } from 'facebook-nodejs-business-sdk/src/objects/product-catalog-image-settings-operation';
    export { default as ProductCatalogPricingVariablesBatch } from 'facebook-nodejs-business-sdk/src/objects/product-catalog-pricing-variables-batch';
    export { default as ProductCatalogProductSetsBatch } from 'facebook-nodejs-business-sdk/src/objects/product-catalog-product-sets-batch';
    export { default as ProductEventStat } from 'facebook-nodejs-business-sdk/src/objects/product-event-stat';
    export { default as ProductFeed } from 'facebook-nodejs-business-sdk/src/objects/product-feed';
    export { default as ProductFeedMissingFeedItemReplacement } from 'facebook-nodejs-business-sdk/src/objects/product-feed-missing-feed-item-replacement';
    export { default as ProductFeedRule } from 'facebook-nodejs-business-sdk/src/objects/product-feed-rule';
    export { default as ProductFeedRuleSuggestion } from 'facebook-nodejs-business-sdk/src/objects/product-feed-rule-suggestion';
    export { default as ProductFeedSchedule } from 'facebook-nodejs-business-sdk/src/objects/product-feed-schedule';
    export { default as ProductFeedUpload } from 'facebook-nodejs-business-sdk/src/objects/product-feed-upload';
    export { default as ProductFeedUploadError } from 'facebook-nodejs-business-sdk/src/objects/product-feed-upload-error';
    export { default as ProductFeedUploadErrorReport } from 'facebook-nodejs-business-sdk/src/objects/product-feed-upload-error-report';
    export { default as ProductFeedUploadErrorSample } from 'facebook-nodejs-business-sdk/src/objects/product-feed-upload-error-sample';
    export { default as ProductGroup } from 'facebook-nodejs-business-sdk/src/objects/product-group';
    export { default as ProductImage } from 'facebook-nodejs-business-sdk/src/objects/product-image';
    export { default as ProductItem } from 'facebook-nodejs-business-sdk/src/objects/product-item';
    export { default as ProductItemARData } from 'facebook-nodejs-business-sdk/src/objects/product-item-ar-data';
    export { default as ProductItemCommerceInsights } from 'facebook-nodejs-business-sdk/src/objects/product-item-commerce-insights';
    export { default as ProductItemError } from 'facebook-nodejs-business-sdk/src/objects/product-item-error';
    export { default as ProductItemImporterAddress } from 'facebook-nodejs-business-sdk/src/objects/product-item-importer-address';
    export { default as ProductSet } from 'facebook-nodejs-business-sdk/src/objects/product-set';
    export { default as ProductSetMetadata } from 'facebook-nodejs-business-sdk/src/objects/product-set-metadata';
    export { default as ProductVariant } from 'facebook-nodejs-business-sdk/src/objects/product-variant';
    export { default as Profile } from 'facebook-nodejs-business-sdk/src/objects/profile';
    export { default as ProfilePictureSource } from 'facebook-nodejs-business-sdk/src/objects/profile-picture-source';
    export { default as PublisherBlockList } from 'facebook-nodejs-business-sdk/src/objects/publisher-block-list';
    export { default as RTBDynamicPost } from 'facebook-nodejs-business-sdk/src/objects/rtb-dynamic-post';
    export { default as RawCustomAudience } from 'facebook-nodejs-business-sdk/src/objects/raw-custom-audience';
    export { default as ReachFrequencyActivity } from 'facebook-nodejs-business-sdk/src/objects/reach-frequency-activity';
    export { default as ReachFrequencyAdFormat } from 'facebook-nodejs-business-sdk/src/objects/reach-frequency-ad-format';
    export { default as ReachFrequencyCurveLowerConfidenceRange } from 'facebook-nodejs-business-sdk/src/objects/reach-frequency-curve-lower-confidence-range';
    export { default as ReachFrequencyCurveUpperConfidenceRange } from 'facebook-nodejs-business-sdk/src/objects/reach-frequency-curve-upper-confidence-range';
    export { default as ReachFrequencyDayPart } from 'facebook-nodejs-business-sdk/src/objects/reach-frequency-day-part';
    export { default as ReachFrequencyEstimatesCurve } from 'facebook-nodejs-business-sdk/src/objects/reach-frequency-estimates-curve';
    export { default as ReachFrequencyEstimatesPlacementBreakdown } from 'facebook-nodejs-business-sdk/src/objects/reach-frequency-estimates-placement-breakdown';
    export { default as ReachFrequencyPrediction } from 'facebook-nodejs-business-sdk/src/objects/reach-frequency-prediction';
    export { default as ReachFrequencySpec } from 'facebook-nodejs-business-sdk/src/objects/reach-frequency-spec';
    export { default as Recommendation } from 'facebook-nodejs-business-sdk/src/objects/recommendation';
    export { default as RevSharePolicy } from 'facebook-nodejs-business-sdk/src/objects/rev-share-policy';
    export { default as RichMediaElement } from 'facebook-nodejs-business-sdk/src/objects/rich-media-element';
    export { default as SavedAudience } from 'facebook-nodejs-business-sdk/src/objects/saved-audience';
    export { default as SavedMessageResponse } from 'facebook-nodejs-business-sdk/src/objects/saved-message-response';
    export { default as SecuritySettings } from 'facebook-nodejs-business-sdk/src/objects/security-settings';
    export { default as ShadowIGMediaProductTags } from 'facebook-nodejs-business-sdk/src/objects/shadow-ig-media-product-tags';
    export { default as Shop } from 'facebook-nodejs-business-sdk/src/objects/shop';
    export { default as SplitTestWinner } from 'facebook-nodejs-business-sdk/src/objects/split-test-winner';
    export { default as StoreCatalogSettings } from 'facebook-nodejs-business-sdk/src/objects/store-catalog-settings';
    export { default as SystemUser } from 'facebook-nodejs-business-sdk/src/objects/system-user';
    export { default as Tab } from 'facebook-nodejs-business-sdk/src/objects/tab';
    export { default as Targeting } from 'facebook-nodejs-business-sdk/src/objects/targeting';
    export { default as TargetingDynamicRule } from 'facebook-nodejs-business-sdk/src/objects/targeting-dynamic-rule';
    export { default as TargetingGeoLocation } from 'facebook-nodejs-business-sdk/src/objects/targeting-geo-location';
    export { default as TargetingGeoLocationCity } from 'facebook-nodejs-business-sdk/src/objects/targeting-geo-location-city';
    export { default as TargetingGeoLocationCustomLocation } from 'facebook-nodejs-business-sdk/src/objects/targeting-geo-location-custom-location';
    export { default as TargetingGeoLocationElectoralDistrict } from 'facebook-nodejs-business-sdk/src/objects/targeting-geo-location-electoral-district';
    export { default as TargetingGeoLocationGeoEntities } from 'facebook-nodejs-business-sdk/src/objects/targeting-geo-location-geo-entities';
    export { default as TargetingGeoLocationLocationCluster } from 'facebook-nodejs-business-sdk/src/objects/targeting-geo-location-location-cluster';
    export { default as TargetingGeoLocationLocationExpansion } from 'facebook-nodejs-business-sdk/src/objects/targeting-geo-location-location-expansion';
    export { default as TargetingGeoLocationMarket } from 'facebook-nodejs-business-sdk/src/objects/targeting-geo-location-market';
    export { default as TargetingGeoLocationPlace } from 'facebook-nodejs-business-sdk/src/objects/targeting-geo-location-place';
    export { default as TargetingGeoLocationPoliticalDistrict } from 'facebook-nodejs-business-sdk/src/objects/targeting-geo-location-political-district';
    export { default as TargetingGeoLocationRegion } from 'facebook-nodejs-business-sdk/src/objects/targeting-geo-location-region';
    export { default as TargetingGeoLocationZip } from 'facebook-nodejs-business-sdk/src/objects/targeting-geo-location-zip';
    export { default as TargetingProductAudienceSpec } from 'facebook-nodejs-business-sdk/src/objects/targeting-product-audience-spec';
    export { default as TargetingProductAudienceSubSpec } from 'facebook-nodejs-business-sdk/src/objects/targeting-product-audience-sub-spec';
    export { default as TargetingProspectingAudience } from 'facebook-nodejs-business-sdk/src/objects/targeting-prospecting-audience';
    export { default as TargetingRelaxation } from 'facebook-nodejs-business-sdk/src/objects/targeting-relaxation';
    export { default as TargetingSentenceLine } from 'facebook-nodejs-business-sdk/src/objects/targeting-sentence-line';
    export { default as TextWithEntities } from 'facebook-nodejs-business-sdk/src/objects/text-with-entities';
    export { default as TrackingAndConversionWithDefaults } from 'facebook-nodejs-business-sdk/src/objects/tracking-and-conversion-with-defaults';
    export { default as URL } from 'facebook-nodejs-business-sdk/src/objects/url';
    export { default as UnifiedThread } from 'facebook-nodejs-business-sdk/src/objects/unified-thread';
    export { default as User } from 'facebook-nodejs-business-sdk/src/objects/user';
    export { default as UserCoverPhoto } from 'facebook-nodejs-business-sdk/src/objects/user-cover-photo';
    export { default as UserDevice } from 'facebook-nodejs-business-sdk/src/objects/user-device';
    export { default as UserIDForApp } from 'facebook-nodejs-business-sdk/src/objects/user-id-for-app';
    export { default as UserIDForPage } from 'facebook-nodejs-business-sdk/src/objects/user-id-for-page';
    export { default as UserLeadGenDisclaimerResponse } from 'facebook-nodejs-business-sdk/src/objects/user-lead-gen-disclaimer-response';
    export { default as UserLeadGenFieldData } from 'facebook-nodejs-business-sdk/src/objects/user-lead-gen-field-data';
    export { default as UserPageOneTimeOptInTokenSettings } from 'facebook-nodejs-business-sdk/src/objects/user-page-one-time-opt-in-token-settings';
    export { default as UserPaymentMobilePricepoints } from 'facebook-nodejs-business-sdk/src/objects/user-payment-mobile-pricepoints';
    export { default as ValueBasedEligibleSource } from 'facebook-nodejs-business-sdk/src/objects/value-based-eligible-source';
    export { default as Vehicle } from 'facebook-nodejs-business-sdk/src/objects/vehicle';
    export { default as VehicleOffer } from 'facebook-nodejs-business-sdk/src/objects/vehicle-offer';
    export { default as VideoCopyright } from 'facebook-nodejs-business-sdk/src/objects/video-copyright';
    export { default as VideoCopyrightConditionGroup } from 'facebook-nodejs-business-sdk/src/objects/video-copyright-condition-group';
    export { default as VideoCopyrightGeoGate } from 'facebook-nodejs-business-sdk/src/objects/video-copyright-geo-gate';
    export { default as VideoCopyrightRule } from 'facebook-nodejs-business-sdk/src/objects/video-copyright-rule';
    export { default as VideoCopyrightSegment } from 'facebook-nodejs-business-sdk/src/objects/video-copyright-segment';
    export { default as VideoList } from 'facebook-nodejs-business-sdk/src/objects/video-list';
    export { default as VideoPoll } from 'facebook-nodejs-business-sdk/src/objects/video-poll';
    export { default as VideoThumbnail } from 'facebook-nodejs-business-sdk/src/objects/video-thumbnail';
    export { default as VideoUploadLimits } from 'facebook-nodejs-business-sdk/src/objects/video-upload-limits';
    export { default as VoipInfo } from 'facebook-nodejs-business-sdk/src/objects/voip-info';
    export { default as WebAppLink } from 'facebook-nodejs-business-sdk/src/objects/web-app-link';
    export { default as WhatsAppBusinessAccount } from 'facebook-nodejs-business-sdk/src/objects/whats-app-business-account';
    export { default as WhatsAppBusinessPreVerifiedPhoneNumber } from 'facebook-nodejs-business-sdk/src/objects/whats-app-business-pre-verified-phone-number';
    export { default as WhatsAppBusinessProfile } from 'facebook-nodejs-business-sdk/src/objects/whats-app-business-profile';
    export { default as WindowsAppLink } from 'facebook-nodejs-business-sdk/src/objects/windows-app-link';
    export { default as WindowsPhoneAppLink } from 'facebook-nodejs-business-sdk/src/objects/windows-phone-app-link';
    export { default as WoodhengePurchasedPAYGReceipt } from 'facebook-nodejs-business-sdk/src/objects/woodhenge-purchased-payg-receipt';
    export { default as WorkUserFrontline } from 'facebook-nodejs-business-sdk/src/objects/work-user-frontline';
}
