// Type definitions for scrivito 1.16
// Project: https://www.scrivito.com/
// Definitions by: Julian Krieger <https://github.com/juliankrieger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

import { CSSProperties, Component, FC } from 'react';

/**
 * Attribute definitions
 */
type Attribute =
    'date' |
    'datetime' |
    'enum' |
    'multienum' |
    'html' |
    'string' |
    'stringlist' |
    'integer' |
    'float' |
    'binary' |
    'link' |
    'linklist' |
    'reference' |
    'referencelist' |
    'widgetlist';

interface AttributeOptions {
    values?: any[];
    only?: string | string[];
}

type AttributeWithOptions = [Attribute, AttributeOptions];

interface OptimizeDefinition {
    width: number | string;
    height: number | string;
    fit: "resize" | "crop";
    // Fix this being able to be filled when using fit = resize
    crop: "center" | "top" | "left" | "right" | "bottom";
}

/**
 * Binary definitions
 */

export class Binary {
    private constructor();
    static upload(source: Blob | File, options: { filename: string, contentType?: string }): FutureBinary;
    static uplload(source: File, options?: { filename?: string, contentType?: string }): FutureBinary;
    contentLength(): number;
    contentType(): string;
    copy(options?: { filename?: string; contentType?: string }): FutureBinary;
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
    attachment?: CSSProperties['backgroundAttachment'];
    clip?: CSSProperties['backgroundClip'];
    color?: CSSProperties['backgroundColor'];
    origin?: CSSProperties['backgroundOrigin'];
    position?: CSSProperties['backgroundPosition'];
    repeat?: CSSProperties['backgroundRepeat'];
    size?: CSSProperties['backgroundSize'];
}

type CSSPropsWithoutBackground =
    Omit<CSSProperties,
        'background' |
        'backgroundAttachment' |
        'backgroundClip' |
        'backgroundColor' |
        'backgroundPosition' |
        'backgroundRepeat' |
        'backgroundSize'
    >;

interface BackgroundImageBackgroundProp {
    background: CSSImageStyleBackgroundProps | CSSImageStyleBackgroundProps[];
}

interface BackgroundImageTagProps {
    tag?: string;
    style: CSSPropsWithoutBackground & BackgroundImageBackgroundProp;
    className?: string;
}
export class BackgroundImageTag extends Component<BackgroundImageTagProps, any> { }

interface ChildListTagProps {
    parent?: Obj;
    tag?: string;
    // TODO: hard to type
    renderChild?: (child: any) => any;
}

export class ChildListTag extends Component<ChildListTag, any> { }

interface ContentTagProps extends React.HTMLAttributes<any> {
    attribute: string;
    content: Obj | Widget;
    tag?: string;
    widgetProps?: object;
}

export class ContentTag extends Component<ContentTagProps, any> { }

export class CurrentPage extends Component<{}, any> { }

interface ImageTagProps extends React.HTMLAttributes<HTMLImageElement> {
    attribute: string;
    content: Binary | Obj | Widget;
    alt?: string;
}

export class ImageTag extends Component<ImageTagProps, any> { }

export class InPlaceEditingOff extends Component<any, any> { }

interface LinkTagProps extends React.HTMLAttributes<HTMLAnchorElement> {
    to: Obj | Link;
    params?: object;
    onClick?: (event: React.MouseEvent) => void;
}
export class LinkTag extends Component<LinkTagProps, any> { }

export class NotFoundErrorPage extends Component<{}, any> { }

export class RestoreInPlaceEditing extends Component<{}, any> { }

interface WidgetTagProps extends React.HTMLAttributes<any> {
    tag: string;
    [key: string]: any;
}

export class WidgetTag extends Component<WidgetTagProps, any> { }

/**
 * Config definitions
 */

interface ConfigOptions {
    tenant: string;
    homepage: () => Obj;
    origin?: string;
    routingBasePath?: string;
    visitorAuthentication?: boolean;
    // Hard to type
    constraintsValidation?: (constraints: any) => any;
    endpoint?: string;
}

/**
 * EditingConfig definitions
 */

interface AttributeValue {
    value: string;
    title: string;
}

interface AttributeProps {
    title?: string;
    description?: string;
    values?: AttributeValue[];
    options?: {
        toolbar: string[]
    };
}

interface EditingConfigAttributes {
    [key: string]: AttributeProps;
}

// TODO talk about this with krishan
interface PropertiesGroup {
    title: string;
    component?: string;
    properties?: string[];
}

type ValidationReturnType = { message: string, severity: string } | string | undefined;

type AttributeValidationCallback = (current: any, options: { obj?: Obj, widget?: Widget, content: any, name: string }) => ValidationReturnType;

type AttributeBasedValidation = [string, AttributeValidationCallback];

type ClassBasedValidation = (target: Widget | Obj) => ValidationReturnType;

type Validation = (AttributeBasedValidation | ClassBasedValidation);

interface EditingConfig {
    title?: string;
    thumbnail?: string;
    description?: string;
    titleForContent?: (instance: Obj | Widget) => string | void;
    descriptionForContent?: (instance: Obj | Widget) => string;
    attributes?: EditingConfigAttributes;
    properties?: string[];
    propertiesGroups?: PropertiesGroup[];
    hideInSelectionDialogs?: boolean;
    initialContent?: Record<string, any>;
    initializeCopy?: (originalInstance: Obj) => void;
    validations?: Validation[];
}

/**
 * Link definitions
 */
interface InternalLinkAttributes {
    hash?: string;
    obj: Obj;
    query?: string;
    rel?: string;
    target?: string;
    title?: string;
}

interface ExternalLinkAttributes {
    rel?: string;
    target?: string;
    title?: string;
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

/**
 * Obj definitions
 */

interface CreateAttributes {
    attributes: any;
}

type ObjSearchOperator = 'equals'|'contains'|'containsPrefix'|'equals'|'startsWith'|'isLessThan'|'isGreaterThan'|'linksTo'|'refersTo';

type ObjSearchSingleAttribute = '*'|'id'|'_createdAt'|'_lastChanged'|'_objClass'|'_path'|'_permalink'|'_restriction'|'MetadataCollection'|string;

type ObjSearchValue = string|Date|number|Obj|[any];

type ObjSearchAttribute = ObjSearchSingleAttribute | ObjSearchSingleAttribute[];

interface ObjSearchAttributeBasedBoost {
    [key: string]: number;
}

type OrderParam = ObjSearchSingleAttribute | [ObjSearchSingleAttribute, 'asc' | 'desc'];

interface ObjFacetValue {
    count: () => number;
    includedObjs(): Obj[];
    name: () => string;
}

interface ObjSearch {
    and: (attribute: ObjSearchAttribute, operator: ObjSearchOperator, value: ObjSearchValue, boost: ObjSearchAttributeBasedBoost) => ObjSearch;
    andNot: (attribute: ObjSearchAttribute, operator: Extract<ObjSearchOperator, 'equals' | 'startsWith' |  'isGreaterThan' | 'isLessThan'>, value: ObjSearchValue) => ObjSearch;
    boost: (attribute: ObjSearchAttribute, operator: ObjSearchOperator, value: ObjSearchValue, factor: number) => ObjSearch;
    count: () => number;
    facet: (attribute: ObjSearchSingleAttribute, option?: {limit: number, includeObjs: number}) => ObjFacetValue;
    first: () => Obj | null;
    offset: (offSet: number) => ObjSearch;
    order: (attributeOrAttributes: OrderParam | OrderParam[], direction: 'asc' | 'desc') => ObjSearch;
    suggest: (prefix: string, options?: {limit: number, attributes: ObjSearchSingleAttribute[]}) => string[];
    take: (count?: number) => Obj[];
    toArray: () => Obj[];
}

export class Obj {
    constructor(arg: object);

    private readonly _createdAt: Date;
    private readonly _firstPublishedAt: Date;
    private readonly _lastChanged: Date;
    private _objClass: string;
    private _path: string;
    private _permalink: string;
    private readonly _publishedAt: Date;

    // Static methods
    static all(): any;
    static create(attributes: CreateAttributes): void;
    static createFromFile(file: File, attributes: CreateAttributes): void;
    static get(id: string): Obj | null;
    static getByPath(path: string): Obj | null;
    static getByPermalink(permalink: string): Obj | null;
    static root(): Obj;
    static where(attribute: ObjSearchSingleAttribute, operator: ObjSearchOperator, value: string, boost?: any): ObjSearch;

    // Instance methods
    id(): string;
    ancestors(): Obj[];
    backlings(): Obj[];
    children(): Obj[];
    contentLength(): number;
    contentType(): string;
    contentUrl(): string;
    copy(): Promise<Obj>;
    createdAt(): Date;
    destroy(): void;
    firstPublishedAt(): Date | null;
    get(attributeName: string): unknown | null;
    isBinary(): boolean;
    isRestricted(): boolean;
    lastChanged(): Date | null;
    metadata(): any;
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
}

type ExtractableTextAttributes = 'string' | 'html' | 'widgetlist' | 'blob:text';

interface ObjClassOptions {
    attributes: Record<string, Attribute | AttributeWithOptions>;
    extractTextAttributes?: string[];
    extend?: ObjClass;
}

type ObjClass = typeof Obj;

declare abstract class AbstractObjClass {
}

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
    extractTextAttributes?: string[];
    extend?: WidgetClass;
    onlyInside?: string | string[];
}

type WidgetClass = typeof Widget;

declare abstract class AbstractWidgetClass {
}

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

type WidgetComponent = FC<WidgetComponentProps>;
type ObjComponent = FC<ObjComponentProps>;

export function canWrite(): boolean;
export function configure(options: ConfigOptions): void;
export function configureContentBrowser(options: any): void;
export function connect(component: React.ComponentClass | React.FunctionComponent): void;
export function currentPage(): Obj;
export function currentPageParams(): any;
export function extendMenu(menuCallback: any): void;
export function extractText(obj: Obj, options: { length: number }): string;
export function finishLoading(): Promise<{}>;
export function getClass(name: string): ObjClass | WidgetClass | null;
export function isEditorLoggedIn(): boolean;
export function isInPlaceEditingActive(): boolean;
export function load<T>(functionToLoad: () => T): Promise<T>;
export function navigateTo(target: (() => Obj | Link) | Obj | Link, options?: { hash?: string, params?: any }): void;
export function openDialog(name: string): void;
export function preload(preloadDump: any): Promise<{ dumpLoaded: boolean }>;
export function provideComponent(className: string, component: WidgetComponent | ObjComponent): void;
export function provideEditingConfig(name: string, editingConfig: EditingConfig): void;

export function createObjClass(options: ObjClassOptions): AbstractObjClass;
export function createWidgetClass(options: WidgetClassOptions): AbstractWidgetClass;
export function provideObjClass(name: string, contentClassOrOptions: ObjClassOptions | AbstractObjClass): ObjClass;
export function provideWidgetClass(name: string, contentClassOrOptions: WidgetClassOptions | AbstractWidgetClass): WidgetClass;

export function registerComponent(name: string, component: WidgetComponent | ObjComponent): void;
export function renderPage(page: any, renderFunction: () => void): Promise<{ result: Obj, preloadDump: any }>;
export function setVisitorIdToken(idToken: string): void;
export function updateContent(): void;
export function updateMenuExtensions(): void;
export function urlFor(target: Obj | Binary | Link, options?: { query?: string; hash?: string }): void;
export function useHistory(history: History): void;
export function validationResults(model: Obj | Widget, attribute: string): object[];

// Fix automatic exports

export type {
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
    WidgetClassOptions,
    WidgetComponentProps,
    WidgetTagProps
};

export {};
