/// <reference types="node" />

import { EventEmitter } from "events";

export class VASTClient {
    constructor(
        cappingFreeLunch?: number,
        cappingMinimumTimeInterval?: number,
        customStorage?: Storage,
    );

    get(url: string, opts?: GetOptions): Promise<VastResponse>;
    parseVAST(
        vastXml: Document,
        opts?: ClientParseOptions,
    ): Promise<VastResponse>;
    hasRemainingAds(): boolean;
    getNextAds(): Promise<VastResponse>;
    getParser(): VASTParser;
    addURLTemplateFilter(filter: URLTemplateFilter): void;
    removeLastURLTemplateFilter(): void;
    countURLTemplateFilters(): number;
    clearURLTemplateFilters(): void;
}

export class VASTParser extends EventEmitter {
    on(type: VastParseEvent, listener: VastListener): this;
    trackVastError(
        urlTemplates: URLTemplate[],
        errorCode: GenericObject,
        ...data: GenericObject[]
    ): void;
    fetchVAST(
        url: string,
        wrapperDepth?: number,
        previousUrl?: string,
        wrapperAd?: Ad,
    ): Promise<string>;
    parseVAST(
        vastXml: Document,
        opts?: ParserParseOptions,
    ): Promise<VastResponse>;
    getEstimatedBitrate(): number;
}

export function parseDuration(duration: string): number;

export type GenericObject = Record<string, any>;

export class VASTTracker extends EventEmitter {
    constructor(
        client: VASTClient | null,
        ad: Ad,
        creative: Creative,
        variation?: CompanionAd | NonLinearAd | null,
        muted?: boolean,
    );

    error(macros?: Macros, isCustomCode?: boolean): void;
    load(macros?: Macros): void;
    complete(macros?: Macros): void;
    click(fallbackClickThroughURL?: string, macros?: Macros): void;
    close(macros?: Macros): void;
    skip(macros?: Macros): void;
    setDuration(duration: number): void;
    setExpand(expanded: boolean, macros?: Macros): void;
    setFullscreen(fullscreen: boolean, macros?: Macros): void;
    setMuted(muted: boolean, macros?: Macros): void;
    setPaused(paused: boolean, macros?: Macros): void;
    setProgress(progress: number, macros?: Macros, trackOnce?: boolean): void;
    setSkipDelay(delay: number): void;
    trackImpression(macros?: Macros): void;
    trackViewableImpression(macros?: Macros): void;
    trackNotViewableImpression(macros?: Macros): void;
    trackUndeterminedImpression(macros?: Macros): void;
    notUsed(macros?: Macros): void;
    otherAdInteraction(macros?: Macros): void;
    acceptInvitation(macros?: Macros): void;
    adExpand(macros?: Macros): void;
    adCollapse(macros?: Macros): void;
    minimize(macros?: Macros): void;
    convertToTimecode(seconds: number): string;
    overlayViewDuration(duration: string, macros?: Macros): void;
    verificationNotExecuted(macros?: Macros): void;
    track(eventName: string, macros?: Macros, once?: boolean): void;
}

export class Storage {
    getItem(key: string): string | undefined;
    setItem(key: string, value: any): void;
    removeItem(key: string): void;
    clear(): void;
}

export interface GetOptions {
    timeout?: number;
    withCredentials?: boolean;
    wrapperLimit?: number;
    urlHandler?: URLHandler;
    resolveAll?: boolean;
    allowMultipleAds?: boolean;
    followAdditionalWrappers?: boolean;
}

export interface ClientParseOptions {
    timeout?: number;
    withCredentials?: boolean;
    wrapperLimit?: number;
    urlHandler?: URLHandler;
    allowMultipleAds?: boolean;
    followAdditionalWrappers?: boolean;
    requestDuration?: number;
    byteLength?: number;
}

export interface ParserParseOptions {
    allowMultipleAds?: boolean;
    byteLength?: number;
    resolveAll?: boolean;
}

export interface URLHandler {
    get: (url: string, opts: URLHandlerOptions) => Promise<URLHandlerResponse>;
}

export interface URLHandlerOptions {
    timeout?: number;
    withCredentials?: boolean;
}

export interface URLHandlerResponse {
    error?: Error;
    statusCode?: number;
    xml?: Document;
    details?: URLHandlerResponseDetails;
}

export interface URLHandlerResponseDetails {
    byteLength: number;
    statusCode: number;
    rawXml: string;
}

export type Macros = Record<string, string>;

export type URLTemplateFilter = (url: string) => string;

export type VastParseEvent =
    | "VAST-error"
    | "VAST-warning"
    | "VAST-resolving"
    | "VAST-resolved"
    | "VAST-ad-parsed";

export interface VastResponse {
    ads: Ad[];
    errorURLTemplates: string[];
    version: string;
}

export interface Ad {
    id: string | null;
    sequence: number | null;
    adType: string | null;
    adServingId: string | null;
    categories: Category[];
    expires: number | null;
    viewableImpression: ViewableImpression[];
    system: AdSystem | null;
    title: string | null;
    description: string | null;
    advertiser: string | null;
    pricing: string | null;
    survey: Survey | null;
    errorURLTemplates: string[];
    impressionURLTemplates: URLTemplate[];
    creatives: Creative[];
    extensions: Extension[];
    adVerifications: AdVerification[];
    blockedAdCategories: BlockedAdCategories[];
    followAdditionalWrappers: boolean | null;
    allowMultipleAds: boolean | null;
    fallbackOnNoAd: boolean | null;
}

export interface AdSystem {
    value: string | null;
    version: string | null;
}

export interface URLTemplate {
    id: string | null;
    url: string;
}

export interface CreativeBase {
    id: string | null;
    adId: string | null;
    sequence: number | null;
    apiFramework: string | null;
    universalAdIds: UniversalAdId[];
    creativeExtensions?: Extension[];
}

export interface CreativeLinear extends CreativeBase {
    type: string;
    duration: number;
    skipDelay: number | null;
    mediaFiles: MediaFile[];
    mezzanine: Mezzanine | null;
    interactiveCreativeFile: InteractiveCreativeFile | null;
    closedCaptionFiles: ClosedCaptionFile[];
    videoClickThroughURLTemplate: URLTemplate | null;
    videoClickTrackingURLTemplates: URLTemplate[];
    videoCustomClickURLTemplates: URLTemplate[];
    adParameters: AdParameters | null;
    icons: Icon[];
    trackingEvents: TrackingEvents;
}

export type TrackingEvents = Record<string, string[]>;

export interface CreativeNonLinear extends CreativeBase {
    type: string;
    variations: NonLinearAd[];
    trackingEvents: TrackingEvents;
}

export interface CreativeCompanion extends CreativeBase {
    type: string;
    required: string | null;
    variations: CompanionAd[];
}

export type Creative = CreativeLinear | CreativeNonLinear | CreativeCompanion;

export interface MediaFile {
    id: string | null;
    fileURL: string | null;
    deliveryType: string;
    mimeType: string | null;
    codec: string | null;
    bitrate: number;
    minBitrate: number;
    maxBitrate: number;
    width: number;
    height: number;
    fileSize: number | null;
    mediaType: string | null;
    apiFramework: string | null;
    scalable: boolean | null;
    maintainAspectRatio: boolean | null;
}

export interface Mezzanine {
    delivery: string;
    type: string;
    width: number;
    height: number;
    codec: string | null;
    id: string | null;
    fileSize: number | null;
    mediaType: string | null;
    fileURL: string | null;
}

export interface InteractiveCreativeFile {
    type: string | null;
    apiFramework: string | null;
    variableDuration: boolean | null;
    fileURL: string | null;
}

export interface ClosedCaptionFile {
    type: string | null;
    language: string | null;
    fileURL: string | null;
}

export interface NonLinearAd {
    id: string | null;
    width: number;
    height: number;
    expandedWidth: number;
    expandedHeight: number;
    scalable: boolean;
    maintainAspectRatio: boolean;
    minSuggestedDuration: number;
    apiFramework: string;
    type: string | null;
    staticResource: string | null;
    htmlResource: string | null;
    iframeResource: string | null;
    nonlinearClickThroughURLTemplate: URLTemplate | null;
    nonlinearClickTrackingURLTemplates: URLTemplate[];
    adParameters: AdParameters | null;
}

export interface CompanionAd {
    id: string | null;
    width: number;
    height: number;
    assetWidth: number | null;
    assetHeight: number | null;
    expandedWidth: number | null;
    expandedHeight: number | null;
    apiFramework: string | null;
    adSlotId: string | null;
    pxratio: string;
    renderingMode: string;
    staticResources: StaticResource[];
    htmlResources: string[];
    iframeResources: string[];
    altText: string | null;
    companionClickThroughURLTemplate: URLTemplate | null;
    companionClickTrackingURLTemplates: URLTemplate[];
    trackingEvents: TrackingEvents;
    adParameters: AdParameters | null;
}

export interface StaticResource {
    url: string;
    creativeType: string | null;
}

export interface Icon {
    program: string | null;
    height: number;
    width: number;
    xPosition: number;
    yPosition: number;
    apiFramework: string | null;
    offset: string | null;
    duration: number;
    type: string | null;
    pxratio: string;
    staticResource: string | null;
    htmlResource: string | null;
    iframeResource: string | null;
    iconClickThroughURLTemplate: URLTemplate | null;
    iconClickTrackingURLTemplates: URLTemplate[];
    iconViewTrackingURLTemplate: URLTemplate | null;
    iconClickFallbackImages: IconClickFallbackImage[];
    altText: string | null;
    hoverText: string | null;
}

export interface Extension {
    name: string | null;
    value: string | null;
    attributes: ExtensionAttributes;
    children: Extension[];
}

export interface ExtensionAttributes {
    type?: string | null;
    vendor?: string | null;
    apiFramework?: string | null;
    browserOptional?: string | null;
}

export interface UniversalAdId {
    idRegistry: string;
    idValue: string;
}

export interface AdVerification {
    apiFramework: string | null;
    browserOptional: boolean;
    resource: string | null;
    vendor: string | null;
    type: string | null;
    parameters: string | null;
    trackingEvents: TrackingEvents;
}

export interface Category {
    authority: string;
    value: string;
}

export interface ViewableImpression {
    id: string | null;
    viewable: string[];
    notViewable: string[];
    viewUndetermined: string[];
}

export interface BlockedAdCategories {
    authority: string;
    value: string;
}

export interface AdParameters {
    value: string;
    xmlEncoded: string | null;
}

export interface Survey {
    value: string;
    type: string | null;
}

export interface IconClickFallbackImage {
    url: string | null;
    width: string | null;
    height: string | null;
}

export type VastListener = (values: EventValues) => void;

export interface EventValues {
    ERRORCODE?: number;
    ERRORMESSAGE?: string;
    extensions?: Extension[];
    system?: AdSystem;
    message?: string;
    parentElement?: string;
    specVersion?: number;
    url?: string;
    previousUrl?: string;
    wrapperDepth?: number;
    maxWrapperDepth?: number;
    timeout?: number;
    wrapperAd?: Ad;
    error?: Error;
    duration?: number;
    byteLength?: number;
    statusCode?: number;
    type?: string;
    adIndex?: number;
}
