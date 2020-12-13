import { File } from "./files";
import { ItemUpdateResult } from "./items";
import { TypedHash } from "@pnp/common";
import { SharePointQueryable } from "./sharepointqueryable";
import { List } from "./lists";
import { Web } from "./webs";
/**
 * Page promotion state
 */
export declare const enum PromotedState {
    /**
     * Regular client side page
     */
    NotPromoted = 0,
    /**
     * Page that will be promoted as news article after publishing
     */
    PromoteOnPublish = 1,
    /**
     * Page that is promoted as news article
     */
    Promoted = 2
}
/**
 * Type describing the available page layout types for client side "modern" pages
 */
export declare type ClientSidePageLayoutType = "Article" | "Home" | "SingleWebPartAppPage" | "RepostPage";
/**
 * Column size factor. Max value is 12 (= one column), other options are 8,6,4 or 0
 */
export declare type CanvasColumnFactor = 0 | 2 | 4 | 6 | 8 | 12;
/**
 * Represents the data and methods associated with client side "modern" pages
 */
export declare class ClientSidePage extends SharePointQueryable {
    private json?;
    sections: CanvasSection[];
    commentsDisabled: boolean;
    private _pageSettings;
    private _layoutPart;
    private _bannerImageDirty;
    /**
     * PLEASE DON'T USE THIS CONSTRUCTOR DIRECTLY
     *
     */
    constructor(baseUrl: string | SharePointQueryable, path?: string, json?: Partial<IPageData>, noInit?: boolean, sections?: CanvasSection[], commentsDisabled?: boolean);
    /**
     * Creates a new blank page within the supplied library [does not work with batching]
     *
     * @param web Parent web in which we will create the page (we allow list here too matching the old api)
     * @param pageName Filename of the page, such as "page"
     * @param title The display title of the page
     * @param pageLayoutType Layout type of the page to use
     * @param promotedState Allows you to set the promoted state of a page when creating
     */
    static create(web: Web | List, pageName: string, title: string, pageLayoutType?: ClientSidePageLayoutType, promotedState?: PromotedState): Promise<ClientSidePage>;
    /**
     * Creates a new ClientSidePage instance from the provided html content string
     *
     * @param html HTML markup representing the page
     */
    static fromFile(file: File): Promise<ClientSidePage>;
    private static getDefaultLayoutPart;
    private static initFrom;
    pageLayout: ClientSidePageLayoutType;
    bannerImageUrl: string;
    bannerImageSourceType: number;
    topicHeader: string;
    title: string;
    layoutType: LayoutType;
    headerTextAlignment: TextAlignment;
    showTopicHeader: boolean;
    showPublishDate: boolean;
    readonly hasVerticalSection: boolean;
    readonly verticalSection: CanvasSection | null;
    /**
     * Add a section to this page
     */
    addSection(): CanvasSection;
    /**
     * Add a section to this page
     */
    addVerticalSection(): CanvasSection;
    fromJSON(pageData: Partial<IPageData>): this;
    /**
     * Loads this page's content from the server
     */
    load(): Promise<ClientSidePage>;
    /**
     * Persists the content changes (sections, columns, and controls) [does not work with batching]
     *
     * @param publish If true the page is published, if false the changes are persisted to SharePoint but not published
     */
    save(publish?: boolean): Promise<boolean>;
    discardPageCheckout(): Promise<void>;
    promoteToNews(): Promise<boolean>;
    /**
     * Enables comments on this page
     */
    enableComments(): Promise<ItemUpdateResult>;
    /**
     * Disables comments on this page
     */
    disableComments(): Promise<ItemUpdateResult>;
    /**
     * Finds a control by the specified instance id
     *
     * @param id Instance id of the control to find
     */
    findControlById<T extends ColumnControl<any> = ColumnControl<any>>(id: string): T;
    /**
     * Finds a control within this page's control tree using the supplied predicate
     *
     * @param predicate Takes a control and returns true or false, if true that control is returned by findControl
     */
    findControl<T extends ColumnControl<any> = ColumnControl<any>>(predicate: (c: ColumnControl<any>) => boolean): T;
    /**
     * Like the modern site page
     */
    like(): Promise<void>;
    /**
     * Unlike the modern site page
     */
    unlike(): Promise<void>;
    /**
     * Get the liked by information for a modern site page
     */
    getLikedByInformation(): Promise<any>;
    /**
     * Creates a copy of this page
     *
     * @param web The web where we will create the copy
     * @param pageName The file name of the new page
     * @param title The title of the new page
     * @param publish If true the page will be published
     * @param promotedState Allows you to set the promoted state of a page when making a copy
     */
    copyPage(web: Web | List, pageName: string, title: string, publish?: boolean, promotedState?: PromotedState): Promise<ClientSidePage>;
    /**
     * Sets the modern page banner image
     *
     * @param url Url of the image to display
     * @param altText Alt text to describe the image
     * @param bannerProps Additional properties to control display of the banner
     */
    setBannerImage(url: string, props?: {
        altText?: string;
        imageSourceType?: number;
        translateX?: number;
        translateY?: number;
    }): void;
    protected getCanvasContent1(): string;
    protected getLayoutWebpartsContent(): string;
    protected setControls(controls: IClientSideControlBaseData[]): void;
    protected getControls(): IClientSideControlBaseData[];
    private getEmphasisObj;
    /**
     * Sets the comments flag for a page
     *
     * @param on If true comments are enabled, false they are disabled
     */
    private setCommentsOn;
    private promoteNewsImpl;
    /**
     * Merges the control into the tree of sections and columns for this page
     *
     * @param control The control to merge
     */
    private mergePartToTree;
    /**
     * Merges the supplied column into the tree
     *
     * @param column Column to merge
     * @param position The position data for the column
     */
    private mergeColumnToTree;
    /**
     * Handle the logic to get or create a section based on the supplied order and layoutIndex
     *
     * @param order Section order
     * @param layoutIndex Layout Index (1 === normal, 2 === vertical section)
     * @param emphasis The section emphasis
     */
    private getOrCreateSection;
    private getItem;
}
export declare class CanvasSection {
    protected page: ClientSidePage;
    columns: CanvasColumn[];
    private _emphasis;
    /**
     * Used to track this object inside the collection at runtime
     */
    private _memId;
    private _order;
    private _layoutIndex;
    constructor(page: ClientSidePage, order: number, layoutIndex: number, columns?: CanvasColumn[], _emphasis?: 0 | 1 | 2 | 3);
    order: number;
    layoutIndex: number;
    /**
     * Default column (this.columns[0]) for this section
     */
    readonly defaultColumn: CanvasColumn;
    /**
     * Adds a new column to this section
     */
    addColumn(factor: CanvasColumnFactor, layoutIndex?: number): CanvasColumn;
    /**
     * Adds a control to the default column for this section
     *
     * @param control Control to add to the default column
     */
    addControl(control: ColumnControl<any>): this;
    emphasis: 0 | 1 | 2 | 3;
    /**
     * Removes this section and all contained columns and controls from the collection
     */
    remove(): void;
}
export declare class CanvasColumn {
    protected json: IClientSidePageColumnData;
    controls: ColumnControl<any>[];
    static Default: IClientSidePageColumnData;
    private _section;
    private _memId;
    constructor(json?: IClientSidePageColumnData, controls?: ColumnControl<any>[]);
    readonly data: IClientSidePageColumnData;
    section: CanvasSection;
    order: number;
    factor: CanvasColumnFactor;
    addControl(control: ColumnControl<any>): this;
    getControl<T extends ColumnControl<any>>(index: number): T;
    remove(): void;
}
export declare abstract class ColumnControl<T extends ICanvasControlBaseData> {
    protected json: T;
    private _column;
    constructor(json: T);
    abstract order: number;
    readonly id: string;
    readonly data: T;
    column: CanvasColumn | null;
    remove(): void;
    protected setData(data: T): void;
    protected abstract onColumnChange(col: CanvasColumn): void;
}
export declare class ClientSideText extends ColumnControl<IClientSideTextData> {
    static Default: IClientSideTextData;
    constructor(text: string, json?: IClientSideTextData);
    text: string;
    order: number;
    protected onColumnChange(col: CanvasColumn): void;
}
export declare class ClientSideWebpart extends ColumnControl<IClientSideWebPartData> {
    static Default: IClientSideWebPartData;
    constructor(json?: IClientSideWebPartData);
    static fromComponentDef(definition: ClientSidePageComponent): ClientSideWebpart;
    title: string;
    description: string;
    order: number;
    height: number;
    width: number;
    dataVersion: string;
    setProperties<T = any>(properties: T): this;
    getProperties<T = any>(): T;
    protected onColumnChange(col: CanvasColumn): void;
    protected import(component: ClientSidePageComponent): void;
}
export interface IPageData {
    readonly "odata.metadata": string;
    readonly "odata.type": "SP.Publishing.SitePage";
    readonly "odata.id": string;
    readonly "odata.editLink": string;
    AbsoluteUrl: string;
    AuthorByline: string[] | null;
    BannerImageUrl: string;
    ContentTypeId: null | string;
    Description: string;
    DoesUserHaveEditPermission: boolean;
    FileName: string;
    readonly FirstPublished: string;
    readonly Id: number;
    IsPageCheckedOutToCurrentUser: boolean;
    IsWebWelcomePage: boolean;
    readonly Modified: string;
    PageLayoutType: ClientSidePageLayoutType;
    Path: {
        DecodedUrl: string;
    };
    PromotedState: number;
    Title: string;
    TopicHeader: null | string;
    readonly UniqueId: string;
    Url: string;
    readonly Version: string;
    readonly VersionInfo: {
        readonly LastVersionCreated: string;
        readonly LastVersionCreatedBy: string;
    };
    AlternativeUrlMap: string;
    CanvasContent1: string;
    LayoutWebpartsContent: string;
}
/**
 * Client side webpart object (retrieved via the _api/web/GetClientSideWebParts REST call)
 */
export interface ClientSidePageComponent {
    /**
     * Component type for client side webpart object
     */
    ComponentType: number;
    /**
     * Id for client side webpart object
     */
    Id: string;
    /**
     * Manifest for client side webpart object
     */
    Manifest: string;
    /**
     * Manifest type for client side webpart object
     */
    ManifestType: number;
    /**
     * Name for client side webpart object
     */
    Name: string;
    /**
     * Status for client side webpart object
     */
    Status: number;
}
export interface IClientSideControlBaseData {
    controlType: number;
}
export interface ICanvasControlBaseData extends IClientSideControlBaseData {
    id: string;
    emphasis: IClientControlEmphasis;
    displayMode: number;
}
export interface IClientSidePageSettingsSlice extends IClientSideControlBaseData {
    pageSettingsSlice: {
        "isDefaultDescription": boolean;
        "isDefaultThumbnail": boolean;
    };
}
export interface IClientSidePageColumnData extends IClientSideControlBaseData {
    controlType: 0;
    displayMode: number;
    emphasis: IClientControlEmphasis;
    position: IPosition;
}
interface IPosition {
    zoneIndex: number;
    sectionIndex: number;
    controlIndex?: number;
    sectionFactor?: CanvasColumnFactor;
    layoutIndex: number;
}
export interface IClientSideTextData extends ICanvasControlBaseData {
    controlType: 4;
    position: IPosition;
    anchorComponentId: string;
    editorType: "CKEditor";
    addedFromPersistedData: boolean;
    innerHTML: string;
}
export interface IClientSideWebPartData<PropertiesType = any> extends ICanvasControlBaseData {
    controlType: 3;
    position: IPosition;
    webPartId: string;
    reservedHeight: number;
    reservedWidth: number;
    addedFromPersistedData: boolean;
    webPartData: {
        id: string;
        instanceId: string;
        title: string;
        description: string;
        serverProcessedContent?: {
            "htmlStrings": TypedHash<string>;
            "searchablePlainTexts": TypedHash<string>;
            "imageSources": TypedHash<string>;
            "links": TypedHash<string>;
        };
        dataVersion: string;
        properties: PropertiesType;
    };
}
export interface IClientControlEmphasis {
    zoneEmphasis?: 0 | 1 | 2 | 3;
}
export declare module ClientSideWebpartPropertyTypes {
    /**
     * Propereties for Embed (component id: 490d7c76-1824-45b2-9de3-676421c997fa)
     */
    interface Embed {
        embedCode: string;
        cachedEmbedCode?: string;
        shouldScaleWidth?: boolean;
        tempState?: any;
    }
    /**
     * Properties for Bing Map (component id: e377ea37-9047-43b9-8cdb-a761be2f8e09)
     */
    interface BingMap {
        center: {
            altitude?: number;
            altitudeReference?: number;
            latitude: number;
            longitude: number;
        };
        mapType: "aerial" | "birdseye" | "road" | "streetside";
        maxNumberOfPushPins?: number;
        pushPins?: {
            location: {
                latitude: number;
                longitude: number;
                altitude?: number;
                altitudeReference?: number;
            };
            address?: string;
            defaultAddress?: string;
            defaultTitle?: string;
            title?: string;
        }[];
        shouldShowPushPinTitle?: boolean;
        zoomLevel?: number;
    }
}
export declare type LayoutType = "FullWidthImage" | "NoImage" | "ColorBlock" | "CutInShape";
export declare type TextAlignment = "Left" | "Center";
export {};
