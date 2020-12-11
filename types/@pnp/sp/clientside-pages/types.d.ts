import { IQueryable } from "@pnp/odata";
import { ITypedHash } from "@pnp/common";
import { IFile } from "../files/types";
import { IItem } from "../items/types";
import { _SharePointQueryable, ISharePointQueryable } from "../sharepointqueryable";
import { IWeb } from "../webs/types";
import "../files/web";
import "../comments/item";
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
export declare type ClientsidePageLayoutType = "Article" | "Home" | "SingleWebPartAppPage" | "RepostPage";
/**
 * Column size factor. Max value is 12 (= one column), other options are 8,6,4 or 0
 */
export declare type CanvasColumnFactor = 0 | 2 | 4 | 6 | 8 | 12;
/**
 * Represents the data and methods associated with client side "modern" pages
 */
export declare class _ClientsidePage extends _SharePointQueryable implements IClientsidePage {
    protected json?: Partial<IPageData>;
    sections: CanvasSection[];
    commentsDisabled: boolean;
    private _pageSettings;
    private _layoutPart;
    private _bannerImageDirty;
    private _bannerImageThumbnailUrlDirty;
    /**
     * PLEASE DON'T USE THIS CONSTRUCTOR DIRECTLY, thank you 🐇
     */
    constructor(baseUrl: string | ISharePointQueryable, path?: string, json?: Partial<IPageData>, noInit?: boolean, sections?: CanvasSection[], commentsDisabled?: boolean);
    private static getDefaultLayoutPart;
    pageLayout: ClientsidePageLayoutType;
    bannerImageUrl: string;
    thumbnailUrl: string;
    topicHeader: string;
    title: string;
    description: string;
    layoutType: LayoutType;
    headerTextAlignment: TextAlignment;
    showTopicHeader: boolean;
    showPublishDate: boolean;
    readonly hasVerticalSection: boolean;
    readonly authorByLine: string | null;
    readonly verticalSection: CanvasSection | null;
    /**
     * Add a section to this page
     */
    addSection(): CanvasSection;
    /**
     * Add a section to this page
     */
    addVerticalSection(): CanvasSection;
    /**
     * Loads this instance from the appropriate JSON data
     *
     * @param pageData JSON data to load (replaces any existing data)
     */
    fromJSON(pageData: Partial<IPageData>): this;
    /**
     * Loads this page's content from the server
     */
    load(): Promise<IClientsidePage>;
    /**
     * Persists the content changes (sections, columns, and controls) [does not work with batching]
     *
     * @param publish If true the page is published, if false the changes are persisted to SharePoint but not published [Default: true]
     */
    save(publish?: boolean): Promise<boolean>;
    /**
     * Discards the checkout of this page
     */
    discardPageCheckout(): Promise<void>;
    /**
     * Promotes this page as a news item
     */
    promoteToNews(): Promise<boolean>;
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
     * Creates a copy of this page
     *
     * @param web The web where we will create the copy
     * @param pageName The file name of the new page
     * @param title The title of the new page
     * @param publish If true the page will be published
     */
    copy(web: IWeb, pageName: string, title: string, publish?: boolean, promotedState?: PromotedState): Promise<IClientsidePage>;
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
    /**
     * Sets the authors for this page from the supplied list of user integer ids
     *
     * @param authorId The integer id of the user to set as the author
     */
    setAuthorById(authorId: number): Promise<void>;
    /**
     * Sets the authors for this page from the supplied list of user integer ids
     *
     * @param authorLoginName The login name of the user (ex: i:0#.f|membership|name@tenant.com)
     */
    setAuthorByLoginName(authorLoginName: string): Promise<void>;
    /**
     * Gets the list item associated with this clientside page
     *
     * @param selects Specific set of fields to include when getting the item
     */
    getItem<T>(...selects: string[]): Promise<IItem & T>;
    /**
     * Extends this queryable from the provided parent
     *
     * @param parent Parent queryable from which we will derive a base url
     * @param path Additional path
     */
    protected assign(parent: IQueryable<any>, path?: string): void;
    protected getCanvasContent1(): string;
    protected getLayoutWebpartsContent(): string;
    protected setControls(controls: IClientsideControlBaseData[]): void;
    protected getControls(): IClientsideControlBaseData[];
    private getEmphasisObj;
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
}
export interface IClientsidePage extends _ClientsidePage {
}
/**
 * Loads a client side page from the supplied IFile instance
 *
 * @param file Source IFile instance
 */
export declare const ClientsidePageFromFile: (file: IFile) => Promise<IClientsidePage>;
/**
 * Creates a new client side page
 *
 * @param web The web or list
 * @param pageName The name of the page (filename)
 * @param title The page's title
 * @param PageLayoutType Layout to use when creating the page
 */
export declare const CreateClientsidePage: (web: IWeb, pageName: string, title: string, PageLayoutType?: ClientsidePageLayoutType, promotedState?: PromotedState) => Promise<IClientsidePage>;
export declare class CanvasSection {
    protected page: IClientsidePage;
    columns: CanvasColumn[];
    private _emphasis;
    /**
     * Used to track this object inside the collection at runtime
     */
    private _memId;
    private _order;
    private _layoutIndex;
    constructor(page: IClientsidePage, order: number, layoutIndex: number, columns?: CanvasColumn[], _emphasis?: 0 | 1 | 2 | 3);
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
    protected json: IClientsidePageColumnData;
    controls: ColumnControl<any>[];
    static Default: IClientsidePageColumnData;
    private _section;
    private _memId;
    constructor(json?: IClientsidePageColumnData, controls?: ColumnControl<any>[]);
    readonly data: IClientsidePageColumnData;
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
export declare class ClientsideText extends ColumnControl<IClientsideTextData> {
    static Default: IClientsideTextData;
    constructor(text: string, json?: IClientsideTextData);
    text: string;
    order: number;
    protected onColumnChange(col: CanvasColumn): void;
}
export declare class ClientsideWebpart extends ColumnControl<IClientsideWebPartData> {
    static Default: IClientsideWebPartData;
    constructor(json?: IClientsideWebPartData);
    static fromComponentDef(definition: IClientsidePageComponent): ClientsideWebpart;
    title: string;
    description: string;
    order: number;
    height: number;
    width: number;
    dataVersion: string;
    setProperties<T = any>(properties: T): this;
    getProperties<T = any>(): T;
    protected onColumnChange(col: CanvasColumn): void;
    protected import(component: IClientsidePageComponent): void;
}
export interface IPageData {
    readonly "odata.metadata": string;
    readonly "odata.type": "SP.Publishing.SitePage";
    readonly "odata.id": string;
    readonly "odata.editLink": string;
    AbsoluteUrl: string;
    AuthorByline: string[] | null;
    BannerImageUrl: string;
    BannerThumbnailUrl: string;
    ContentTypeId: null | string;
    Description: string;
    DoesUserHaveEditPermission: boolean;
    FileName: string;
    readonly FirstPublished: string;
    readonly Id: number;
    IsPageCheckedOutToCurrentUser: boolean;
    IsWebWelcomePage: boolean;
    readonly Modified: string;
    PageLayoutType: ClientsidePageLayoutType;
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
export interface IClientsidePageComponent {
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
export interface IClientsideControlBaseData {
    controlType: number;
}
export interface ICanvasControlBaseData extends IClientsideControlBaseData {
    id: string;
    emphasis: IClientControlEmphasis;
    displayMode: number;
}
export interface IClientsidePageSettingsSlice extends IClientsideControlBaseData {
    htmlAttributes?: string[];
    pageSettingsSlice: {
        "isDefaultDescription": boolean;
        "isDefaultThumbnail": boolean;
    };
}
export interface IClientsidePageColumnData extends IClientsideControlBaseData {
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
export interface IClientsideTextData extends ICanvasControlBaseData {
    controlType: 4;
    position: IPosition;
    anchorComponentId: string;
    editorType: "CKEditor";
    addedFromPersistedData: boolean;
    innerHTML: string;
}
export interface IClientsideWebPartData<PropertiesType = any> extends ICanvasControlBaseData {
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
            "htmlStrings": ITypedHash<string>;
            "searchablePlainTexts": ITypedHash<string>;
            "imageSources": ITypedHash<string>;
            "links": ITypedHash<string>;
        };
        dataVersion: string;
        properties: PropertiesType;
    };
}
export interface IClientControlEmphasis {
    zoneEmphasis?: 0 | 1 | 2 | 3;
}
export declare type LayoutType = "FullWidthImage" | "NoImage" | "ColorBlock" | "CutInShape";
export declare type TextAlignment = "Left" | "Center";
export {};
//# sourceMappingURL=types.d.ts.map