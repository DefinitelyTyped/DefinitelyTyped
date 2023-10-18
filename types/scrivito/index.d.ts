import * as React from "react";

/**
 * Attribute definitions
 */
type Attribute =
    | "boolean"
    | "date"
    | "datetime"
    | "enum"
    | "multienum"
    | "html"
    | "string"
    | "stringlist"
    | "integer"
    | "float"
    | "binary"
    | "link"
    | "linklist"
    | "reference"
    | "referencelist"
    | "widgetlist";

interface AttributeOptions {
    values?: string[] | undefined;
    only?: string | string[] | undefined;
}

type AttributeWithOptions = [Attribute, AttributeOptions];

interface OptimizeFor {
    width?: number | string | undefined;
    height?: number | string | undefined;
}

interface OptimizeForFit extends OptimizeFor {
    fit: "crop";
    crop: "center" | "top" | "left" | "right" | "bottom";
}

interface OptimizeForResize extends OptimizeFor {
    fit: "resize";
}

type OptimizeDefinition = OptimizeForFit | OptimizeForResize;

/**
 * Binary definitions
 */

interface UploadOptions {
    filename: string;
    contentType?: string | undefined;
}

export class Binary {
    private constructor();
    static upload(source: Blob | File, options: UploadOptions): FutureBinary;
    contentLength(): number;
    contentType(): string;
    copy(options?: { filename?: string | undefined; contentType?: string | undefined }): FutureBinary;
    filename(): string;
    isPrivate(): boolean;
    metadata(): MetadataCollection;
    optimizeFor(definition: OptimizeDefinition): Binary;
    original(): Binary;
    raw(): Binary;
    url(): string;
}

export class FutureBinary {
    private constructor();
    into(target: Obj): Promise<Binary>;
}

/**
 * Component definitions
 */
interface CSSImageStyleBackgroundProps {
    image: Obj | Binary | string;
    attachment?: React.CSSProperties["backgroundAttachment"] | undefined;
    clip?: React.CSSProperties["backgroundClip"] | undefined;
    color?: React.CSSProperties["backgroundColor"] | undefined;
    origin?: React.CSSProperties["backgroundOrigin"] | undefined;
    position?: React.CSSProperties["backgroundPosition"] | undefined;
    repeat?: React.CSSProperties["backgroundRepeat"] | undefined;
    size?: React.CSSProperties["backgroundSize"] | undefined;
}

type CSSPropsWithoutBackground = Omit<
    React.CSSProperties,
    | "background"
    | "backgroundAttachment"
    | "backgroundClip"
    | "backgroundColor"
    | "backgroundPosition"
    | "backgroundRepeat"
    | "backgroundSize"
>;

interface BackgroundImageBackgroundProp {
    background: CSSImageStyleBackgroundProps | CSSImageStyleBackgroundProps[];
}

interface BackgroundImageTagProps {
    tag?: string | undefined;
    style: CSSPropsWithoutBackground & BackgroundImageBackgroundProp;
    className?: string | undefined;
}
export class BackgroundImageTag extends React.Component<BackgroundImageTagProps, any> {}

interface ChildListTagProps {
    parent?: Obj | undefined;
    tag?: string | undefined;
    renderChild?: ((child: Obj) => React.ReactElement) | undefined;
    className?: string | undefined;
}

export class ChildListTag extends React.Component<ChildListTagProps, any> {}

interface ContentTagProps extends Omit<React.AllHTMLAttributes<any>, "content"> {
    attribute: string;
    content?: Obj | Widget | undefined;
    tag?: string | undefined;
    page?: any;
    widgetProps?: object | undefined;
}

export class ContentTag extends React.Component<ContentTagProps, any> {}

export class CurrentPage extends React.Component<{}, any> {}

interface ImageTagProps extends Omit<React.HTMLAttributes<HTMLImageElement>, "content"> {
    attribute?: string | undefined;
    content: Binary | Obj | Widget;
    alt?: string | undefined;
}

export class ImageTag extends React.Component<ImageTagProps, any> {}

export class InPlaceEditingOff extends React.Component<any, any> {}

interface LinkTagProps extends React.HTMLAttributes<HTMLAnchorElement> {
    to: Obj | Link;
    params?: object | undefined;
    onClick?: ((event: React.MouseEvent) => void) | undefined;
}
export class LinkTag extends React.Component<LinkTagProps, any> {}

export class NotFoundErrorPage extends React.Component<{}, any> {}

export class RestoreInPlaceEditing extends React.Component<{}, any> {}

interface WidgetTagProps extends React.HTMLAttributes<any> {
    tag?: string | undefined;
    [key: string]: any;
}

export class WidgetTag extends React.Component<WidgetTagProps, any> {}

type Priority = "foreground" | "background";

/**
 * Config definitions
 */

interface ConfigOptions {
    tenant: string;
    homepage?: (() => Obj | null) | undefined;
    origin?: string | undefined;
    routingBasePath?: string | undefined;
    visitorAuthentication?: boolean | undefined;
    // Hard to type
    constraintsValidation?: ((constraints: any) => any) | undefined;
    endpoint?: string | undefined;
    priority?: Priority | undefined;
    adoptUi?: boolean | undefined;
    baseUrlForSite?: ((siteId: string) => string | undefined) | undefined;
    siteForUrl?: ((url: string) => { siteId: string; baseUrl: string } | undefined) | undefined;
}

/**
 * EditingConfig definitions
 */

interface AttributeValue {
    value: string;
    title: string;
}

interface AttributeProps {
    title?: string | undefined;
    description?: string | undefined;
    values?: AttributeValue[] | undefined;
    options?: {
        toolbar: string[];
    } | undefined;
}

interface EditingConfigAttributes {
    [key: string]: AttributeProps;
}

// TODO talk about this with krishan
interface PropertiesGroup {
    title: string;
    component?: string | undefined;
    properties?: string[] | undefined;
}

export type ValidationReturnType = { message: string; severity: string } | string | undefined;

type AttributeValidationCallback = (
    current: any,
    options?: { obj?: Obj | undefined; widget?: Widget | undefined; content: any; name: string },
) => ValidationReturnType;

export type AttributeBasedValidation = [string, AttributeValidationCallback];

export type ClassBasedValidation = (target: Widget | Obj) => ValidationReturnType;

export type Validation = AttributeBasedValidation | ClassBasedValidation;

interface EditingConfig {
    title?: string | undefined;
    thumbnail?: string | undefined;
    description?: string | undefined;
    titleForContent?: ((instance: Obj | Widget) => string | void) | undefined;
    descriptionForContent?: ((instance: Obj | Widget) => string) | undefined;
    attributes?: EditingConfigAttributes | undefined;
    properties?: string[] | undefined;
    propertiesGroups?: PropertiesGroup[] | undefined;
    hideInSelectionDialogs?: boolean | undefined;
    initialContent?: Record<string, any> | undefined;
    initialize?: ((instance: Obj) => void) | undefined;
    initializeCopy?: ((originalInstance: Obj) => void) | undefined;
    validations?: Validation[] | undefined;
}

/**
 * Link definitions
 */
interface InternalLinkAttributes {
    hash?: string | undefined;
    obj: Obj;
    query?: string | undefined;
    rel?: string | undefined;
    target?: string | undefined;
    title?: string | undefined;
}

interface ExternalLinkAttributes {
    rel?: string | undefined;
    target?: string | undefined;
    title?: string | undefined;
    url: string;
}

// Less guarantees
export class Link extends __Link {
    constructor(attributes: InternalLinkAttributes | ExternalLinkAttributes);
    hash(): string | null;
    obj(): Obj | null;
    query(): string | null;
    url(): string | null;
}

declare class __Link {
    copy(attributes: InternalLinkAttributes): InternalLink;
    copy(attributes: ExternalLinkAttributes): ExternalLink;
    isExternal(): boolean;
    isInternal(): boolean;
    queryParamters(): any;
    rel(): string | null;
    target(): string | null;
    title(): string | null;
}

// There are just interfaces and not newable
interface InternalLink extends __Link {
    hash(): string;
    obj(): Obj;
    query(): string;
}

interface ExternalLink extends __Link {
    url(): string;
}

/**
 * MetadataCollection definitions
 */

export class MetadataCollection {
    private constructor();
    get(name: string): string | string[] | number | Date | null;
}

interface CreateAttributes {
    [key: string]: any;
}

type ObjSearchOperator =
    | "equals"
    | "contains"
    | "containsPrefix"
    | "equals"
    | "startsWith"
    | "isLessThan"
    | "isGreaterThan"
    | "linksTo"
    | "refersTo";

type ObjSearchSingleAttribute =
    | "*"
    | "id"
    | "_createdAt"
    | "_lastChanged"
    | "_objClass"
    | "_path"
    | "_permalink"
    | "_restriction"
    | "MetadataCollection"
    | string;

type ObjSearchValue = string | Date | number | Obj | any[];

type ObjSearchAttribute = ObjSearchSingleAttribute | ObjSearchSingleAttribute[];

interface ObjSearchAttributeBasedBoost {
    [key: string]: number;
}

type OrderParam = ObjSearchSingleAttribute | [ObjSearchSingleAttribute, "asc" | "desc"];

interface ObjFacetValue {
    count: () => number;
    includedObjs(): Obj[];
    name: () => string;
}

export interface ObjSearch {
    and: (
        attribute: ObjSearchAttribute,
        operator: ObjSearchOperator,
        value: ObjSearchValue,
        boost?: ObjSearchAttributeBasedBoost,
    ) => ObjSearch;
    andNot: (
        attribute: ObjSearchAttribute,
        operator: Extract<ObjSearchOperator, "equals" | "startsWith" | "isGreaterThan" | "isLessThan">,
        value: ObjSearchValue,
    ) => ObjSearch;
    boost: (
        attribute: ObjSearchAttribute,
        operator: ObjSearchOperator,
        value: ObjSearchValue,
        factor: number,
    ) => ObjSearch;
    count: () => number;
    facet: (attribute: ObjSearchSingleAttribute, option?: { limit: number; includeObjs: number }) => ObjFacetValue;
    first: () => Obj | null;
    offset: (offSet: number) => ObjSearch;
    order: (attributeOrAttributes: OrderParam | OrderParam[], direction: "asc" | "desc") => ObjSearch;
    suggest: (prefix: string, options?: { limit: number; attributes: ObjSearchSingleAttribute[] }) => string[];
    take: (count?: number) => Obj[];
    toArray: () => Obj[];
}

export class Obj {
    private constructor(arg: object);

    private readonly _createdAt: Date;
    private readonly _firstPublishedAt: Date;
    private readonly _lastChanged: Date;
    private readonly _objClass: string;
    private readonly _path: string;
    private readonly _permalink: string;
    private readonly _publishedAt: Date;
    private readonly _siteId: string | null;
    private readonly _language: string;

    // Static methods
    static all(): ObjSearch;
    static create(attributes?: CreateAttributes): Obj;
    static createFromFile(file: File, attributes: CreateAttributes): Promise<Obj>;
    static get(id: string): Obj | null;
    static getByPath(path: string): Obj | null;
    static getByPermalink(permalink: string): Obj | null;
    static root(): Obj | null;
    static where(
        attribute: ObjSearchSingleAttribute,
        operator: ObjSearchOperator,
        value: ObjSearchValue,
        boost?: any,
    ): ObjSearch;
    static onSite(siteId: string): SiteContext;
    static onAllSites(): SiteContext;

    // Instance methods
    id(): string;
    ancestors(): Obj[];
    backlinks(): Obj[];
    children(): Obj[];
    contentLength(): number;
    contentType(): string;
    contentUrl(): string;
    copy(): Promise<Obj>;
    createdAt(): Date;
    destroy(): void;
    firstPublishedAt(): Date | null;
    get(attributeName: string): any;
    isBinary(): boolean;
    isRestricted(): boolean;
    lastChanged(): Date | null;
    metadata(): MetadataCollection;
    modification(): null | "new" | "edited" | "deleted";
    objClass(): string;
    parent(): Obj | null;
    path(): string | null;
    permalink(): string | null;
    publishedAt(): Date | null;
    restrict(): void;
    slug(): string;
    unrestrict(): void;
    update(attributes: any): void;
    widget(id: string): Widget | null;
    widgets(): Widget[];
    updateReferences(mapping: (refId: string) => string | undefined): Promise<void>;
    finishSaving(): Promise<void>;
    onAllSites(): SiteContext;
    onSite(siteId: string): SiteContext;
    siteId(): string | null;
    language(): string | null;
}

type ExtractableTextAttributes = "string" | "html" | "widgetlist" | "blob:text";

interface SiteContext {
    all(): ObjSearch;
    create(attributes: object): Obj;
    createFromFile(file: File, attributes: object): Promise<void>;
    get(id: string): Obj | null;
    getByPath(path: string): Obj | null;
    getByPermalink(permalink: string): Obj | null;
    root(): Obj | null;
    where(attribute: ObjSearchSingleAttribute, operator: ObjSearchOperator, value: string, boost?: any): ObjSearch;
}

interface ObjClassOptions {
    attributes: Record<string, Attribute | AttributeWithOptions>;
    extractTextAttributes?: string[] | undefined;
    extend?: ObjClass | undefined;
    onlyChildren: string | string[];
    onlyInside: string | string[];
}

export type ObjClass = typeof Obj;

declare abstract class AbstractObjClass {}

/**
 * Widget definitions
 */

export class Widget {
    constructor(arg: object);
    private readonly _id: string;
    private _objClass: string;

    // Instace methods
    container(): Obj | Widget;
    copy(): void;
    destroy(): void;
    get(attributeName: string): any;
    id(): string;
    obj(): Obj;
    objClass(): string;
    update(attributes: any): void;
}

interface WidgetClassOptions {
    attributes: Record<string, Attribute | AttributeWithOptions>;
    extractTextAttributes?: string[] | undefined;
    extend?: WidgetClass | undefined;
    onlyInside?: string | string[] | undefined;
}

type WidgetClass = typeof Widget;

declare abstract class AbstractWidgetClass {}

/**
 * scrivito top-level definitions
 */

interface WidgetComponentProps {
    widget: Widget;
    [key: string]: any;
}

interface ObjComponentProps {
    page: Obj;
    params: {};
    [key: string]: any;
}

type WidgetComponent = React.ComponentType<WidgetComponentProps>;
type ObjComponent = React.ComponentType<ObjComponentProps>;

export interface AuthGroupsOptions {
    [groupName: string]: string;
}

export class Editor {
    private constructor();
    id(): string;
    name(): string;
    teams(): Team[];
}

export class Team {
    private constructor();
    description(): string;
    id(): string;
    name(): string;
}

interface MenuPosition {
    before: string;
    after: string;
}

interface MenuInsertParameters {
    id: string;
    title: string;
    icon?: string | undefined;
    description?: string | undefined;
    position?: MenuPosition | undefined;
    group?: string | undefined;
    onClick: () => void;
    enabled?: boolean | undefined;
}

type MenuModifyParameters = Pick<MenuInsertParameters, "id" | "group" | "icon" | "position" | "title">;

interface Menu {
    insert: (params: MenuInsertParameters) => void;
    remove: (id: string) => void;
    modify: (params: MenuModifyParameters) => void;
}

export type ValidationResultSeverity = "error" | "warning" | "info";

export interface ValidationResult {
    message: string;
    severity: ValidationResultSeverity;
}

declare class Workspace {
    private constructor();
    id(): string;
    title(): string;
}

export function canWrite(): boolean;
export function configure(options: ConfigOptions): void;
export function configureContentBrowser(options: any): void;
export function connect<C extends React.ComponentType<any>>(component: C): C;
export function currentPage(): Obj;
export function currentPageParams(): any;
export function extendMenu(menuCallback: (menu: Menu) => void): void;
export function extractText(obj: Obj, options: { length: number }): string;
export function finishLoading(): Promise<{}>;
export function getClass(name: string): ObjClass | WidgetClass | null;
export function isEditorLoggedIn(): boolean;
export function isInPlaceEditingActive(): boolean;
export function load<T>(functionToLoad: () => T): Promise<T>;
export function navigateTo(
    target: (() => Obj | Link) | Obj | Link,
    options?: { hash?: string | undefined; params?: any },
): void;
export function openDialog(name: string): void;
export function preload(preloadDump: any): Promise<{ dumpLoaded: boolean }>;
export function provideComponent(className: string, component: WidgetComponent | ObjComponent): void;
export function provideEditingConfig(name: string, editingConfig: EditingConfig): void;
export function provideAuthGroups(options: AuthGroupsOptions): void;
export function createObjClass(options: ObjClassOptions): Obj;
export function createWidgetClass(options: WidgetClassOptions): AbstractWidgetClass;
export function provideObjClass(name: string, contentClassOrOptions: ObjClassOptions | AbstractObjClass): ObjClass;
export function provideWidgetClass(
    name: string,
    contentClassOrOptions: WidgetClassOptions | AbstractWidgetClass,
): WidgetClass;
export function registerComponent(name: string, component: WidgetComponent | ObjComponent): void;
export function renderPage(page: Obj, renderFunction: () => void): Promise<{ result: Obj; preloadDump: any }>;
export function setVisitorIdToken(idToken: string): void;
export function updateContent(): void;
export function updateMenuExtensions(): void;
export function urlFor(
    target: Obj | Binary | Link,
    options?: { query?: string | undefined; hash?: string | undefined },
): string;
export function useHistory(history: History): void;
export function validationResultsFor(model: Obj | Widget, attribute: string): ValidationResult[];
export function isComparisonActive(): boolean;
export function currentWorkspaceId(): string;
export function currentWorkspace(): Workspace;
export function currentEditor(): Editor | null;
export function configureObjClassForContentType(mapping?: { [key: string]: string }): void;

// utility types

type AttributeKeys<T extends WidgetClassOptions | ObjClassOptions> = {
    [Property in keyof T["attributes"]]: any;
};

export type {
    AttributeKeys,
    AttributeOptions,
    AttributeProps,
    AttributeValue,
    BackgroundImageBackgroundProp,
    BackgroundImageTagProps,
    ChildListTagProps,
    ConfigOptions,
    ContentTagProps,
    CreateAttributes,
    CSSImageStyleBackgroundProps,
    EditingConfig,
    EditingConfigAttributes,
    ExternalLink,
    ExternalLinkAttributes,
    ImageTagProps,
    InternalLink,
    InternalLinkAttributes,
    LinkTagProps,
    ObjClassOptions,
    ObjComponentProps,
    OptimizeDefinition,
    PropertiesGroup,
    SiteContext,
    WidgetClassOptions,
    WidgetComponentProps,
    WidgetTagProps,
};

// Disables automatic exports
export {};
