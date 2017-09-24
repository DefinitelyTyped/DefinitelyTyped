// Type definitions for ArcGIS API for JavaScript 4.4
// Project: http://js.arcgis.com
// Definitions by: Esri <https://github.com/Esri>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface HashMap<T> {
  [index: string]: T;
}

interface IPromise<T> {
  always<U>(callback?: (valueOrError: T) => IPromise<U> | U | void): IPromise<U>;
  cancel?<U>(reason?: U, strict?: boolean): U;
  isCanceled?(): boolean;
  isFulfilled(): boolean;
  isRejected(): boolean;
  isResolved(): boolean;
  otherwise<U>(errback?: (reason: any) => IPromise<U> | U | void): IPromise<T | U>;
  then<U>(callback?: (value: T) => IPromise<U> | U | void, errback?: (reason: any) => IPromise<U> | U | void, progback?: (update: any) => IPromise<U> | U | void): IPromise<U>;
}

interface IHandle {
  remove(): void;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elementName: string]: any;
  }

  interface Element {}
}

declare namespace __esri {
  export class Accessor {
    constructor(obj?: any);

    destroyed: boolean;
    initialized: boolean;
    declaredClass: string;
    destroy(): void;

    get<T>(propertyName: string): T;
    get(propertyName: string): any;
    set<T>(propertyName: string, value: T): this;
    set(props: HashMap<any>): this;
    watch(path: string | string[], callback: WatchCallback, sync?: boolean): WatchHandle;

    protected notifyChange(propertyName: string): void;
    protected _get(propertyName: string): any;
    protected _get<T>(propertyName: string): T;
    protected _set<T>(propertyName: string, value: T): this;
  }

  export interface PromisedWatchHandle extends IPromise<any> {
    remove(): void;
  }
  export type ItemCallback = (item: any, index: number) => void;

  export type ItemCompareCallback = (firstItem: any, secondItem: any) => number;

  export type ItemMapCallback = (item: any, index: number) => any;

  export type ItemReduceCallback = (previousValue: any, currentValue: any, index: number) => any;

  export type ItemTestCallback = (item: any, index: number) => boolean;

  export interface PortalItemFetchRelatedItemsParams {
    relationshipType: string;
    direction?: string;
  }

  export interface PortalItemUpdateParams {
    data: string | any;
  }

  export interface PortalUserAddItemParams {
    item: PortalItem;
    data?: string | any;
    folder?: PortalFolder;
  }

  export interface PortalUserFetchItemsParams {
    folder: PortalFolder;
    num: number;
    start: number;
  }

  export interface PortalFeaturedGroups {
    owner: string;
    title: string;
  }

  export interface GroundQueryElevationOptions {
    returnSampleInfo?: boolean;
    noDataValue?: number;
  }

  export interface PopupTemplateExpressionInfos {
    name: string;
    title?: string;
    expression: string;
    returnType?: string;
  }

  export interface PopupTemplateFieldInfos {
    fieldName: string;
    format?: PopupTemplateFieldInfosFormat;
    isEditable?: boolean;
    label?: string;
    stringFieldOption?: string;
    tooltip?: string;
    visible?: boolean;
  }

  export interface PopupTemplateFieldInfosFormat {
    dateFormat?: string;
    digitSeparator?: boolean;
    places?: number;
  }

  export interface FeatureLayerApplyEditsEdits {
    addFeatures?: Graphic[];
    updateFeatures?: Graphic[];
    deleteFeatures?: Graphic[] | any[];
  }

  export interface FeatureLayerCapabilities {
    data: FeatureLayerCapabilitiesData;
    editing: FeatureLayerCapabilitiesEditing;
    operations: FeatureLayerCapabilitiesOperations;
    query: FeatureLayerCapabilitiesQuery;
    queryRelated: FeatureLayerCapabilitiesQueryRelated;
  }

  export interface FeatureLayerCapabilitiesData {
    supportsAttachment: boolean;
    supportsM: boolean;
    supportsZ: boolean;
  }

  export interface FeatureLayerCapabilitiesEditing {
    supportsDeleteByAnonymous: boolean;
    supportsDeleteByOthers: boolean;
    supportsGeometryUpdate: boolean;
    supportsGlobalId: boolean;
    supportsRollbackOnFailure: boolean;
    supportsUpdateByAnonymous: boolean;
    supportsUpdateByOthers: boolean;
    supportsUpdateWithoutM: boolean;
    supportsUploadWithItemId: boolean;
  }

  export interface FeatureLayerCapabilitiesOperations {
    supportsAdd: boolean;
    supportsDelete: boolean;
    supportsUpdate: boolean;
    supportsEditing: boolean;
    supportsCalculate: boolean;
    supportsQuery: boolean;
    supportsValidateSql: boolean;
  }

  export interface FeatureLayerCapabilitiesQuery {
    supportsCentroid: boolean;
    supportsDistance: boolean;
    supportsDistinct: boolean;
    supportsExtent: boolean;
    supportsGeometryProperties: boolean;
    supportsOrderBy: boolean;
    supportsPagination: boolean;
    supportsQuantization: boolean;
    supportsResultType: boolean;
    supportsSqlExpression: boolean;
    supportsStandardizedQueriesOnly: boolean;
    supportsStatistics: boolean;
  }

  export interface FeatureLayerCapabilitiesQueryRelated {
    supportsCount: boolean;
    supportsOrderBy: boolean;
    supportsPagination: boolean;
  }

  export interface FeatureLayerElevationInfo {
    mode: string;
    offset?: number;
  }

  export interface FeatureLayerFeatureReduction {
    type: string;
  }

  export interface FeatureLayerGetFieldDomainOptions {
    feature: Graphic;
  }

  export interface FeatureLayerLayerviewCreateEvent {
    view: View;
    layerView: LayerView;
  }

  export type FeatureLayerLayerviewCreateEventHandler = (event: FeatureLayerLayerviewCreateEvent) => void;

  export interface FeatureLayerLayerviewDestroyEvent {
    view: View;
    layerView: LayerView;
  }

  export type FeatureLayerLayerviewDestroyEventHandler = (event: FeatureLayerLayerviewDestroyEvent) => void;

  export interface GraphicsLayerElevationInfo {
    mode: string;
    offset?: number;
  }

  export interface GraphicsLayerLayerviewCreateEvent {
    view: View;
    layerView: LayerView;
  }

  export type GraphicsLayerLayerviewCreateEventHandler = (event: GraphicsLayerLayerviewCreateEvent) => void;

  export interface GraphicsLayerLayerviewDestroyEvent {
    view: View;
    layerView: LayerView;
  }

  export type GraphicsLayerLayerviewDestroyEventHandler = (event: GraphicsLayerLayerviewDestroyEvent) => void;

  export interface LayerFromArcGISServerUrlParams {
    url: string;
    properties?: any;
  }

  export interface LayerFromPortalItemParams {
    portalItem: PortalItem;
  }

  export interface FeatureTemplateThumbnail {
    contentType: any;
    imageData: string;
    height: number;
    width: number;
  }

  export interface LabelClassLabelExpressionInfo {
    value?: string;
  }

  export interface LabelSymbol3DVerticalOffsetProperties {
    screenLength?: number;
    minWorldLength?: number;
    maxWorldLength?: number;
  }
  export interface LabelSymbol3DVerticalOffset extends Accessor {
    screenLength: number;
    minWorldLength?: number;
    maxWorldLength?: number;
  }

  export interface QueryQuantizationParameters {
    extent?: Extent;
    mode?: string;
    originPosition?: string;
    tolerance?: number;
  }

  export interface ViewPadding {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
  }

  export interface WebMapSourceVersion {
    major: number;
    minor: number;
  }

  export interface WebSceneSaveAsOptions {
    folder?: PortalFolder;
    ignoreUnsupported?: boolean;
  }

  export interface WebSceneSaveOptions {
    ignoreUnsupported?: boolean;
  }

  export interface WebSceneSourceVersion {
    major: number;
    minor: number;
  }

  export interface WebSceneUpdateFromOptions {
    environmentExcluded?: boolean;
    viewpointExcluded?: boolean;
  }

  export type EventHandler = (event: any) => void;

  export interface SceneViewDragEventOrigin {
    x: number;
    y: number;
  }

  export interface SceneViewClickEvent {
    mapPoint: Point;
    x: number;
    y: number;
    button: number;
    type: string;
    stopPropagation: Function;
    timestamp: number;
    native: any;
  }

  export type SceneViewClickEventHandler = (event: SceneViewClickEvent) => void;

  export interface SceneViewDoubleClickEvent {
    mapPoint: Point;
    x: number;
    y: number;
    button: number;
    type: string;
    stopPropagation: Function;
    timestamp: number;
    native: any;
  }

  export type SceneViewDoubleClickEventHandler = (event: SceneViewDoubleClickEvent) => void;

  export interface SceneViewDragEvent {
    action: string;
    x: number;
    y: number;
    origin: SceneViewDragEventOrigin;
    type: string;
    stopPropagation: Function;
    timestamp: number;
    native: any;
  }

  export type SceneViewDragEventHandler = (event: SceneViewDragEvent) => void;

  export type EasingFunction = (t: number, duration: number) => number;

  export interface SceneViewHoldEvent {
    mapPoint: Point;
    x: number;
    y: number;
    button: number;
    type: string;
    stopPropagation: Function;
    timestamp: number;
    native: any;
  }

  export type SceneViewHoldEventHandler = (event: SceneViewHoldEvent) => void;

  export interface SceneViewKeyDownEvent {
    repeat: boolean;
    key: string;
    type: string;
    stopPropagation: Function;
    timestamp: number;
    native: any;
  }

  export type SceneViewKeyDownEventHandler = (event: SceneViewKeyDownEvent) => void;

  export interface SceneViewKeyUpEvent {
    type: string;
    stopPropagation: Function;
    timestamp: number;
    native: any;
  }

  export type SceneViewKeyUpEventHandler = (event: SceneViewKeyUpEvent) => void;

  export interface SceneViewLayerviewCreateEvent {
    layer: Layer;
    layerView: LayerView;
  }

  export type SceneViewLayerviewCreateEventHandler = (event: SceneViewLayerviewCreateEvent) => void;

  export interface SceneViewLayerviewDestroyEvent {
    layer: Layer;
    layerView: LayerView;
  }

  export type SceneViewLayerviewDestroyEventHandler = (event: SceneViewLayerviewDestroyEvent) => void;

  export interface SceneViewMouseWheelEvent {
    x: number;
    y: number;
    deltaY: number;
    type: string;
    stopPropagation: Function;
    timestamp: number;
    native: any;
  }

  export type SceneViewMouseWheelEventHandler = (event: SceneViewMouseWheelEvent) => void;

  export interface SceneViewPointerDownEvent {
    pointerId: number;
    pointerType: string;
    x: number;
    y: number;
    type: string;
    stopPropagation: Function;
    timestamp: number;
    native: any;
  }

  export type SceneViewPointerDownEventHandler = (event: SceneViewPointerDownEvent) => void;

  export interface SceneViewPointerMoveEvent {
    pointerId: number;
    pointerType: string;
    x: number;
    y: number;
    type: string;
    stopPropagation: Function;
    timestamp: number;
    native: any;
  }

  export type SceneViewPointerMoveEventHandler = (event: SceneViewPointerMoveEvent) => void;

  export interface SceneViewPointerUpEvent {
    pointerId: number;
    pointerType: string;
    x: number;
    y: number;
    type: string;
    stopPropagation: Function;
    timestamp: number;
    native: any;
  }

  export type SceneViewPointerUpEventHandler = (event: SceneViewPointerUpEvent) => void;

  export interface SceneViewResizeEvent {
    oldWidth: number;
    oldHeight: number;
    width: number;
    height: number;
  }

  export type SceneViewResizeEventHandler = (event: SceneViewResizeEvent) => void;

  export interface SceneViewConstraintsProperties {
    altitude?: SceneViewConstraintsAltitudeProperties;
    clipDistance?: SceneViewConstraintsClipDistanceProperties;
    collision?: SceneViewConstraintsCollision;
    tilt?: SceneViewConstraintsTiltProperties;
  }
  export interface SceneViewConstraints extends Accessor {
    altitude?: SceneViewConstraintsAltitude;
    clipDistance?: SceneViewConstraintsClipDistance;
    collision?: SceneViewConstraintsCollision;
    tilt?: SceneViewConstraintsTilt;
  }

  export interface SceneViewConstraintsAltitudeProperties {
    min?: number;
    max?: number;
  }
  export interface SceneViewConstraintsAltitude extends Accessor {
    min?: number;
    max?: number;
  }

  export interface SceneViewConstraintsClipDistanceProperties {
    near?: number;
    far?: number;
    mode?: string;
  }
  export interface SceneViewConstraintsClipDistance extends Accessor {
    near?: number;
    far?: number;
    mode?: string;
  }

  export interface SceneViewConstraintsCollision {
    enabled?: boolean;
  }

  export interface SceneViewConstraintsTiltProperties {
    max?: number;
    mode?: string;
  }
  export interface SceneViewConstraintsTilt extends Accessor {
    max?: number;
    mode?: string;
  }

  export interface SceneViewEnvironmentProperties {
    lighting?: SceneViewEnvironmentLightingProperties;
    atmosphereEnabled?: boolean;
    atmosphere?: SceneViewEnvironmentAtmosphereProperties;
    starsEnabled?: boolean;
  }
  export interface SceneViewEnvironment extends Accessor {
    lighting?: SceneViewEnvironmentLighting;
    atmosphereEnabled?: boolean;
    atmosphere?: SceneViewEnvironmentAtmosphere;
    starsEnabled?: boolean;
  }

  export interface SceneViewEnvironmentAtmosphereProperties {
    quality?: string;
  }
  export interface SceneViewEnvironmentAtmosphere extends Accessor {
    quality?: string;
  }

  export interface SceneViewEnvironmentLightingProperties {
    date?: Date;
    directShadowsEnabled?: boolean;
    ambientOcclusionEnabled?: boolean;
    cameraTrackingEnabled?: boolean;
  }
  export interface SceneViewEnvironmentLighting extends Accessor {
    date?: Date;
    directShadowsEnabled?: boolean;
    ambientOcclusionEnabled?: boolean;
    cameraTrackingEnabled?: boolean;
  }

  export interface SceneViewGoToOptions {
    animate?: boolean;
    speedFactor?: number;
    duration?: number;
    maxDuration?: number;
    easing?: string | EasingFunction;
  }

  export interface SceneViewHighlightOptions {
    color?: Color;
    haloOpacity?: number;
    fillOpacity?: number;
  }

  export interface SceneViewHitTestScreenPoint {
    x: number;
    y: number;
  }

  export interface SceneViewToMapScreenPoint {
    x: number;
    y: number;
  }

  export interface WatchHandle {
    remove(): void;
  }

  export type WatchCallback = (newValue: any, oldValue: any, propertyName: string, target: Accessor) => void;

  export interface IdentityManagerBaseGenerateTokenOptions {
    serverUrl: string;
    token: string;
    ssl: boolean;
  }

  export interface IdentityManagerBaseGetCredentialOptions {
    error?: Error;
    oAuthPopupConfirmation?: boolean;
    retry?: boolean;
    token?: string;
  }

  export interface IdentityManagerBaseOAuthSignInOptions {
    error: Error;
    oAuthPopupConfirmation: boolean;
    token: string;
  }

  export interface IdentityManagerBaseRegisterTokenProperties {
    expires?: number;
    server: string;
    ssl?: boolean;
    token: string;
    userId?: string;
  }

  export interface IdentityManagerBaseSetProtocolErrorHandlerHandlerFunction {
    resourceUrl: string;
    serverInfo: ServerInfo;
  }

  export interface IdentityManagerBaseSetRedirectionHandlerHandlerFunction {
    resourceUrl: string;
    returnUrlParamName: string;
    serverInfo: ServerInfo;
    signInPage: string;
  }

  export interface IdentityManagerBaseSignInOptions {
    error: Error;
  }

  export interface IdentityManagerCredentialCreateEvent {
    credential: Credential;
  }

  export type IdentityManagerCredentialCreateEventHandler = (event: IdentityManagerCredentialCreateEvent) => void;

  export interface IdentityManagerCredentialsDestroyEvent {
  }

  export type IdentityManagerCredentialsDestroyEventHandler = (event: IdentityManagerCredentialsDestroyEvent) => void;

  export type HandlerCallback = (authorizeParams: any, authorizeUrl: string, oAuthInfo: OAuthInfo, resourceUrl: string, serverInfo: ServerInfo) => void;

  export interface BaseElevationLayerFetchTileOptions {
    noDataValue?: number;
  }

  export interface BaseElevationLayerLayerviewCreateEvent {
    view: View;
    layerView: LayerView;
  }

  export type BaseElevationLayerLayerviewCreateEventHandler = (event: BaseElevationLayerLayerviewCreateEvent) => void;

  export interface BaseElevationLayerLayerviewDestroyEvent {
    view: View;
    layerView: LayerView;
  }

  export type BaseElevationLayerLayerviewDestroyEventHandler = (event: BaseElevationLayerLayerviewDestroyEvent) => void;

  export interface CSVLayerElevationInfo {
    mode: string;
    offset?: number;
  }

  export interface CSVLayerFeatureReduction {
    type: string;
  }

  export interface CSVLayerLayerviewCreateEvent {
    view: View;
    layerView: LayerView;
  }

  export type CSVLayerLayerviewCreateEventHandler = (event: CSVLayerLayerviewCreateEvent) => void;

  export interface CSVLayerLayerviewDestroyEvent {
    view: View;
    layerView: LayerView;
  }

  export type CSVLayerLayerviewDestroyEventHandler = (event: CSVLayerLayerviewDestroyEvent) => void;

  export interface ElevationLayerQueryElevationOptions {
    demResolution?: number | string;
    returnSampleInfo?: boolean;
    noDataValue?: number;
  }

  export interface ElevationLayerLayerviewCreateEvent {
    view: View;
    layerView: LayerView;
  }

  export type ElevationLayerLayerviewCreateEventHandler = (event: ElevationLayerLayerviewCreateEvent) => void;

  export interface ElevationLayerLayerviewDestroyEvent {
    view: View;
    layerView: LayerView;
  }

  export type ElevationLayerLayerviewDestroyEventHandler = (event: ElevationLayerLayerviewDestroyEvent) => void;

  export interface GeoRSSLayerLayerviewCreateEvent {
    view: View;
    layerView: LayerView;
  }

  export type GeoRSSLayerLayerviewCreateEventHandler = (event: GeoRSSLayerLayerviewCreateEvent) => void;

  export interface GeoRSSLayerLayerviewDestroyEvent {
    view: View;
    layerView: LayerView;
  }

  export type GeoRSSLayerLayerviewDestroyEventHandler = (event: GeoRSSLayerLayerviewDestroyEvent) => void;

  export interface GroupLayerLayerviewCreateEvent {
    view: View;
    layerView: LayerView;
  }

  export type GroupLayerLayerviewCreateEventHandler = (event: GroupLayerLayerviewCreateEvent) => void;

  export interface GroupLayerLayerviewDestroyEvent {
    view: View;
    layerView: LayerView;
  }

  export type GroupLayerLayerviewDestroyEventHandler = (event: GroupLayerLayerviewDestroyEvent) => void;

  export interface ImageryLayerLayerviewCreateEvent {
    view: View;
    layerView: LayerView;
  }

  export type ImageryLayerLayerviewCreateEventHandler = (event: ImageryLayerLayerviewCreateEvent) => void;

  export interface ImageryLayerLayerviewDestroyEvent {
    view: View;
    layerView: LayerView;
  }

  export type ImageryLayerLayerviewDestroyEventHandler = (event: ImageryLayerLayerviewDestroyEvent) => void;

  export interface IntegratedMeshLayerLayerviewCreateEvent {
    view: View;
    layerView: LayerView;
  }

  export type IntegratedMeshLayerLayerviewCreateEventHandler = (event: IntegratedMeshLayerLayerviewCreateEvent) => void;

  export interface IntegratedMeshLayerLayerviewDestroyEvent {
    view: View;
    layerView: LayerView;
  }

  export type IntegratedMeshLayerLayerviewDestroyEventHandler = (event: IntegratedMeshLayerLayerviewDestroyEvent) => void;

  export interface MapImageLayerLayerviewCreateEvent {
    view: View;
    layerView: LayerView;
  }

  export type MapImageLayerLayerviewCreateEventHandler = (event: MapImageLayerLayerviewCreateEvent) => void;

  export interface MapImageLayerLayerviewDestroyEvent {
    view: View;
    layerView: LayerView;
  }

  export type MapImageLayerLayerviewDestroyEventHandler = (event: MapImageLayerLayerviewDestroyEvent) => void;

  export interface MapNotesLayerLayerviewCreateEvent {
    view: View;
    layerView: LayerView;
  }

  export type MapNotesLayerLayerviewCreateEventHandler = (event: MapNotesLayerLayerviewCreateEvent) => void;

  export interface MapNotesLayerLayerviewDestroyEvent {
    view: View;
    layerView: LayerView;
  }

  export type MapNotesLayerLayerviewDestroyEventHandler = (event: MapNotesLayerLayerviewDestroyEvent) => void;

  export interface OpenStreetMapLayerLayerviewCreateEvent {
    view: View;
    layerView: LayerView;
  }

  export type OpenStreetMapLayerLayerviewCreateEventHandler = (event: OpenStreetMapLayerLayerviewCreateEvent) => void;

  export interface OpenStreetMapLayerLayerviewDestroyEvent {
    view: View;
    layerView: LayerView;
  }

  export type OpenStreetMapLayerLayerviewDestroyEventHandler = (event: OpenStreetMapLayerLayerviewDestroyEvent) => void;

  export interface PointCloudLayerLayerviewCreateEvent {
    view: View;
    layerView: LayerView;
  }

  export type PointCloudLayerLayerviewCreateEventHandler = (event: PointCloudLayerLayerviewCreateEvent) => void;

  export interface PointCloudLayerLayerviewDestroyEvent {
    view: View;
    layerView: LayerView;
  }

  export type PointCloudLayerLayerviewDestroyEventHandler = (event: PointCloudLayerLayerviewDestroyEvent) => void;

  export interface PointCloudLayerElevationInfo {
    mode: string;
    offset?: number;
  }

  export interface PointCloudRendererColorModulation {
    field: string;
    minValue: number;
    maxValue: number;
  }

  export interface PointCloudRendererPointSizeAlgorithm {
    type?: string;
    useRealWorldSymbolSizes?: boolean;
    size?: number;
    scaleFactor?: number;
    minSize?: number;
  }

  export interface SceneLayerLayerviewCreateEvent {
    view: View;
    layerView: LayerView;
  }

  export type SceneLayerLayerviewCreateEventHandler = (event: SceneLayerLayerviewCreateEvent) => void;

  export interface SceneLayerLayerviewDestroyEvent {
    view: View;
    layerView: LayerView;
  }

  export type SceneLayerLayerviewDestroyEventHandler = (event: SceneLayerLayerviewDestroyEvent) => void;

  export interface SceneLayerElevationInfo {
    mode: string;
    offset?: number;
  }

  export interface SceneLayerFeatureReduction {
    type: string;
  }

  export interface StreamLayerLayerviewCreateEvent {
    view: View;
    layerView: LayerView;
  }

  export type StreamLayerLayerviewCreateEventHandler = (event: StreamLayerLayerviewCreateEvent) => void;

  export interface StreamLayerLayerviewDestroyEvent {
    view: View;
    layerView: LayerView;
  }

  export type StreamLayerLayerviewDestroyEventHandler = (event: StreamLayerLayerviewDestroyEvent) => void;

  export interface StreamLayerFilter {
    geometry?: Extent;
    where?: string;
  }

  export interface StreamLayerPurgeOptions {
    displayCount: number;
    age: number;
  }

  export interface StreamLayerUpdateFilterFilterChanges {
    geometry: Extent;
    where: string;
  }

  export interface TileLayerLayerviewCreateEvent {
    view: View;
    layerView: LayerView;
  }

  export type TileLayerLayerviewCreateEventHandler = (event: TileLayerLayerviewCreateEvent) => void;

  export interface TileLayerLayerviewDestroyEvent {
    view: View;
    layerView: LayerView;
  }

  export type TileLayerLayerviewDestroyEventHandler = (event: TileLayerLayerviewDestroyEvent) => void;

  export interface TileLayerFetchTileOptions {
    allowImageDataAccess?: boolean;
  }

  export interface UnknownLayerLayerviewCreateEvent {
    view: View;
    layerView: LayerView;
  }

  export type UnknownLayerLayerviewCreateEventHandler = (event: UnknownLayerLayerviewCreateEvent) => void;

  export interface UnknownLayerLayerviewDestroyEvent {
    view: View;
    layerView: LayerView;
  }

  export type UnknownLayerLayerviewDestroyEventHandler = (event: UnknownLayerLayerviewDestroyEvent) => void;

  export interface UnsupportedLayerLayerviewCreateEvent {
    view: View;
    layerView: LayerView;
  }

  export type UnsupportedLayerLayerviewCreateEventHandler = (event: UnsupportedLayerLayerviewCreateEvent) => void;

  export interface UnsupportedLayerLayerviewDestroyEvent {
    view: View;
    layerView: LayerView;
  }

  export type UnsupportedLayerLayerviewDestroyEventHandler = (event: UnsupportedLayerLayerviewDestroyEvent) => void;

  export interface VectorTileLayerLayerviewCreateEvent {
    view: View;
    layerView: LayerView;
  }

  export type VectorTileLayerLayerviewCreateEventHandler = (event: VectorTileLayerLayerviewCreateEvent) => void;

  export interface VectorTileLayerLayerviewDestroyEvent {
    view: View;
    layerView: LayerView;
  }

  export type VectorTileLayerLayerviewDestroyEventHandler = (event: VectorTileLayerLayerviewDestroyEvent) => void;

  export interface VectorTileLayerCurrentStyleInfo {
    serviceUrl: string;
    styleUrl: string;
    spriteUrl: string;
    glyphsUrl: string;
    style: any;
    layerDefinition: any;
  }

  export interface WebTileLayerLayerviewCreateEvent {
    view: View;
    layerView: LayerView;
  }

  export type WebTileLayerLayerviewCreateEventHandler = (event: WebTileLayerLayerviewCreateEvent) => void;

  export interface WebTileLayerLayerviewDestroyEvent {
    view: View;
    layerView: LayerView;
  }

  export type WebTileLayerLayerviewDestroyEventHandler = (event: WebTileLayerLayerviewDestroyEvent) => void;

  export interface WMSLayerLayerviewCreateEvent {
    view: View;
    layerView: LayerView;
  }

  export type WMSLayerLayerviewCreateEventHandler = (event: WMSLayerLayerviewCreateEvent) => void;

  export interface WMSLayerLayerviewDestroyEvent {
    view: View;
    layerView: LayerView;
  }

  export type WMSLayerLayerviewDestroyEventHandler = (event: WMSLayerLayerviewDestroyEvent) => void;

  export interface WMSLayerFetchImageOptions {
    allowImageDataAccess?: boolean;
    pixelRatio?: number;
    rotation?: number;
  }

  export interface WMTSLayerLayerviewCreateEvent {
    view: View;
    layerView: LayerView;
  }

  export type WMTSLayerLayerviewCreateEventHandler = (event: WMTSLayerLayerviewCreateEvent) => void;

  export interface WMTSLayerLayerviewDestroyEvent {
    view: View;
    layerView: LayerView;
  }

  export type WMTSLayerLayerviewDestroyEventHandler = (event: WMTSLayerLayerviewDestroyEvent) => void;

  export interface BaseDynamicLayerFetchImageOptions {
    allowImageDataAccess?: boolean;
  }

  export interface BaseDynamicLayerLayerviewCreateEvent {
    view: View;
    layerView: LayerView;
  }

  export type BaseDynamicLayerLayerviewCreateEventHandler = (event: BaseDynamicLayerLayerviewCreateEvent) => void;

  export interface BaseDynamicLayerLayerviewDestroyEvent {
    view: View;
    layerView: LayerView;
  }

  export type BaseDynamicLayerLayerviewDestroyEventHandler = (event: BaseDynamicLayerLayerviewDestroyEvent) => void;

  export interface BaseTileLayerFetchTileOptions {
    allowImageDataAccess?: boolean;
  }

  export interface BaseTileLayerLayerviewCreateEvent {
    view: View;
    layerView: LayerView;
  }

  export type BaseTileLayerLayerviewCreateEventHandler = (event: BaseTileLayerLayerviewCreateEvent) => void;

  export interface BaseTileLayerLayerviewDestroyEvent {
    view: View;
    layerView: LayerView;
  }

  export type BaseTileLayerLayerviewDestroyEventHandler = (event: BaseTileLayerLayerviewDestroyEvent) => void;

  export interface CodedValueDomainCodedValues {
    name: string;
    code: string | number;
  }

  export interface PixelBlockAddDataPlaneData {
    pixels: number[][];
    statistics: any[];
  }

  export interface PixelBlockStatistics {
    maxValue?: number;
    minValue?: number;
    noDataValue?: number;
  }

  export interface ClassBreaksRendererClassBreakInfos {
    minValue: number;
    maxValue: number;
    symbol: Symbol;
    label?: string;
  }

  export interface ClassBreaksRendererLegendOptions {
    title: string;
  }

  export interface UniqueValueRendererLegendOptions {
    title?: string;
  }

  export interface UniqueValueRendererUniqueValueInfos {
    value: string | number;
    symbol: Symbol;
    label?: string;
  }

  export interface PointCloudClassBreaksRendererColorClassBreakInfos {
    minValue: number;
    maxValue: number;
    color: Color;
    label?: string;
  }

  export interface PointCloudStretchRendererStops {
    value: number;
    label?: string;
    color: Color;
  }

  export interface PointCloudUniqueValueRendererColorUniqueValueInfos {
    values: number[];
    color: Color;
    label?: string;
  }

  export interface FillSymbol3DLayerOutline {
    color: Color;
    size: number;
  }

  export interface IconSymbol3DLayerOutline {
    color?: Color;
    size?: number;
  }

  export interface IconSymbol3DLayerResource {
    primitive?: string;
    href?: string;
  }

  export interface ObjectSymbol3DLayerResource {
    primitive?: string;
    href?: string;
  }

  export interface PointSymbol3DVerticalOffsetProperties {
    screenLength?: number;
    minWorldLength?: number;
    maxWorldLength?: number;
  }
  export interface PointSymbol3DVerticalOffset extends Accessor {
    screenLength: number;
    minWorldLength?: number;
    maxWorldLength?: number;
  }

  export interface Symbol3DStyleOrigin {
    styleName?: string;
    styleUrl?: string;
    name: string;
  }

  export interface TextSymbol3DLayerFont {
    family?: string;
    weight?: string;
    style?: string;
  }

  export interface TextSymbol3DLayerHalo {
    color?: Color;
    size?: number;
  }

  export interface LineCallout3DBorderProperties {
    color?: Color;
  }
  export interface LineCallout3DBorder extends Accessor {
    color?: Color;
  }

  export interface ClosestFacilityParametersAttributeParameterValues {
    attributeName: string;
    parameterName: string;
    value: string;
  }

  export interface GeometryServiceFromGeoCoordinateStringParams {
    strings: string[];
    sr: SpatialReference | string;
    conversionType: string;
    conversionMode?: string;
  }

  export interface GeometryServiceToGeoCoordinateStringParams {
    sr: SpatialReference | string;
    coordinates: number[][];
    conversionType: string;
    conversionMode?: string;
    numOfDigits?: number;
    rounding?: boolean;
    addSpaces?: boolean;
  }

  export interface ProjectParametersTransformation {
    wkid?: number;
    wkt?: string;
  }

  export interface LocatorAddressToLocationsParams {
    address: any;
    categories: string[];
    countryCode: string;
    distance: number;
    forStorage: boolean;
    location: Point;
    magicKey: string;
    maxLocations: number;
    outFields: string[];
    searchExtent: Extent;
  }

  export interface LocatorAddressesToLocationsParams {
    addresses: any[];
    countryCode: string;
    categories: string[];
  }

  export interface LocatorSuggestLocationsParams {
    categories: string[];
    distance: number;
    location: Point;
    text: string;
  }

  export interface PrintTemplateExportOptions {
    width?: number;
    height?: number;
    dpi?: number;
  }

  export interface PrintTemplateLayoutOptions {
    titleText: string;
    authorText: string;
    copyrightText: string;
    scalebarUnit: string;
    legendLayers: LegendLayer[];
    customTextElements: any[];
  }

  export interface MapViewDragEventOrigin {
    x: number;
    y: number;
  }

  export interface MapViewClickEvent {
    mapPoint: Point;
    x: number;
    y: number;
    button: number;
    type: string;
    stopPropagation: Function;
    timestamp: number;
    native: any;
  }

  export type MapViewClickEventHandler = (event: MapViewClickEvent) => void;

  export interface MapViewDoubleClickEvent {
    mapPoint: Point;
    x: number;
    y: number;
    button: number;
    type: string;
    stopPropagation: Function;
    timestamp: number;
    native: any;
  }

  export type MapViewDoubleClickEventHandler = (event: MapViewDoubleClickEvent) => void;

  export interface MapViewDragEvent {
    action: string;
    x: number;
    y: number;
    origin: MapViewDragEventOrigin;
    type: string;
    stopPropagation: Function;
    timestamp: number;
    native: any;
  }

  export type MapViewDragEventHandler = (event: MapViewDragEvent) => void;

  export interface MapViewHoldEvent {
    mapPoint: Point;
    x: number;
    y: number;
    button: number;
    type: string;
    stopPropagation: Function;
    timestamp: number;
    native: any;
  }

  export type MapViewHoldEventHandler = (event: MapViewHoldEvent) => void;

  export interface MapViewKeyDownEvent {
    repeat: boolean;
    key: string;
    type: string;
    stopPropagation: Function;
    timestamp: number;
    native: any;
  }

  export type MapViewKeyDownEventHandler = (event: MapViewKeyDownEvent) => void;

  export interface MapViewKeyUpEvent {
    type: string;
    stopPropagation: Function;
    timestamp: number;
    native: any;
  }

  export type MapViewKeyUpEventHandler = (event: MapViewKeyUpEvent) => void;

  export interface MapViewLayerviewCreateEvent {
    layer: Layer;
    layerView: LayerView;
  }

  export type MapViewLayerviewCreateEventHandler = (event: MapViewLayerviewCreateEvent) => void;

  export interface MapViewLayerviewDestroyEvent {
    layer: Layer;
    layerView: LayerView;
  }

  export type MapViewLayerviewDestroyEventHandler = (event: MapViewLayerviewDestroyEvent) => void;

  export interface MapViewConstraints {
    lods?: LOD[];
    minScale?: number;
    maxScale?: number;
    minZoom?: number;
    maxZoom?: number;
    snapToZoom?: boolean;
    rotationEnabled?: boolean;
    effectiveLODs?: LOD[];
    effectiveMinZoom?: number;
    effectiveMaxZoom?: number;
    effectiveMinScale?: number;
    effectiveMaxScale?: number;
  }

  export interface MapViewGoToOptions {
    animate?: boolean;
    duration?: number;
    easing?: string | Function;
  }

  export interface MapViewHitTestScreenPoint {
    x: number;
    y: number;
  }

  export interface MapViewToMapScreenPoint {
    x: number;
    y: number;
  }

  export interface MapViewMouseWheelEvent {
    x: number;
    y: number;
    deltaY: number;
    type: string;
    stopPropagation: Function;
    timestamp: number;
    native: any;
  }

  export type MapViewMouseWheelEventHandler = (event: MapViewMouseWheelEvent) => void;

  export interface MapViewPointerDownEvent {
    pointerId: number;
    pointerType: string;
    x: number;
    y: number;
    type: string;
    stopPropagation: Function;
    timestamp: number;
    native: any;
  }

  export type MapViewPointerDownEventHandler = (event: MapViewPointerDownEvent) => void;

  export interface MapViewPointerMoveEvent {
    pointerId: number;
    pointerType: string;
    x: number;
    y: number;
    type: string;
    stopPropagation: Function;
    timestamp: number;
    native: any;
  }

  export type MapViewPointerMoveEventHandler = (event: MapViewPointerMoveEvent) => void;

  export interface MapViewPointerUpEvent {
    pointerId: number;
    pointerType: string;
    x: number;
    y: number;
    type: string;
    stopPropagation: Function;
    timestamp: number;
    native: any;
  }

  export type MapViewPointerUpEventHandler = (event: MapViewPointerUpEvent) => void;

  export interface MapViewResizeEvent {
    oldWidth: number;
    oldHeight: number;
    width: number;
    height: number;
  }

  export type MapViewResizeEventHandler = (event: MapViewResizeEvent) => void;

  export interface AttributeParamValue {
    attributeName: string;
    parameterName: string;
    value: string;
  }

  export interface ConfigurationTaskGetDataWorkspaceDetailsParams {
    dataWorkspaceId: string;
    user: string;
  }

  export interface ConfigurationTaskGetUserJobQueryDetailsParams {
    queryId: number;
    user: string;
  }

  export interface AuxRecordDescription {
    properties: any;
    recordId: number;
    tableName: string;
  }

  export interface JobCreationParameters {
    loi: Geometry;
    assignedTo: string;
    autoCommitWorkflow: boolean;
    autoExecute: boolean;
    dataWorkspaceId: string;
    description: string;
    dueDate: Date;
    jobTypeId: number;
    assignedType: string;
    name: string;
    numJobs: string;
    ownedBy: string;
    parentJobId: number;
    parentVersion: string;
    priority: number;
    startDate: Date;
    user: string;
  }

  export interface JobQueryParameters {
    aliases: string;
    fields: string;
    orderBy: string;
    tables: string;
    where: string;
    user: string;
  }

  export interface JobTaskAddEmbeddedAttachmentParams {
    jobId: number;
    form: any;
    user: string;
  }

  export interface JobTaskAddLinkedAttachmentParams {
    jobId: number;
    attachmentType: number;
    path: string;
    user: string;
  }

  export interface JobTaskAddLinkedRecordParams {
    jobId: number;
    tableName: string;
    user: string;
  }

  export interface JobTaskAssignJobsParams {
    jobIds: number[];
    assignedType: string;
    assignedTo: string;
    user: string;
  }

  export interface JobTaskCloseJobsParams {
    jobIds: number[];
    user: string;
  }

  export interface JobTaskCreateDependencyParams {
    jobId: number;
    heldOnType: string;
    heldOnValue: number;
    depJobId: number;
    depOnType: string;
    depOnValue: number;
    user: string;
  }

  export interface JobTaskCreateHoldParams {
    jobId: number;
    holdTypeId: number;
    comments: string;
    user: string;
  }

  export interface JobTaskCreateJobVersionParams {
    jobId: number;
    name: string;
    parent: string;
    user: string;
  }

  export interface JobTaskDeleteAttachmentParams {
    jobId: number;
    attachmentId: number;
    user: string;
  }

  export interface JobTaskDeleteDependencyParams {
    jobId: number;
    dependencyId: number;
    user: string;
  }

  export interface JobTaskDeleteJobsParams {
    jobIds: number[];
    deleteHistory?: boolean;
    user: string;
  }

  export interface JobTaskDeleteLinkedRecordParams {
    jobId: number;
    tableName: string;
    recordId: number;
    user: string;
  }

  export interface JobTaskGetAttachmentContentUrlParams {
    jobId: number;
    attachmentId: number;
  }

  export interface JobTaskListFieldValuesParams {
    jobId: number;
    tableName: string;
    field: string;
    user: string;
  }

  export interface JobTaskListMultiLevelFieldValuesParams {
    field: string;
    previousSelectedValues: string[];
    user: string;
  }

  export interface JobTaskLogActionParams {
    jobId: number;
    activityTypeId: number;
    comments: string;
    user: string;
  }

  export interface JobTaskQueryJobsParams {
    queryId: number;
    user: string;
  }

  export interface JobTaskQueryMultiLevelSelectedValuesParams {
    field: string;
    user: string;
  }

  export interface JobTaskReleaseHoldParams {
    jobId: number;
    holdId: number;
  }

  export interface JobTaskReopenClosedJobsParams {
    jobIds: number[];
    user: string;
  }

  export interface JobTaskSearchJobsParams {
    text: string;
    user: string;
  }

  export interface JobTaskUnassignJobsParams {
    jobIds: number[];
    user: string;
  }

  export interface JobTaskUpdateNotesParams {
    jobId: number;
    notes: string;
    user: string;
  }

  export interface JobTaskUpdateRecordParams {
    jobId: number;
    record: AuxRecordDescription;
    user: string;
  }

  export interface JobUpdateParameters {
    ownedBy: string;
    assignedTo: string;
    dataWorkspaceId: string;
    description: string;
    dueDate: Date;
    loi: Geometry;
    jobId: number;
    name: string;
    assignedType: string;
    parentJobId: number;
    parentVersion: string;
    percent: number;
    priority: number;
    startDate: Date;
    status: number;
    versionName: string;
    user: string;
  }

  export interface ChangeRule {
    description: string;
    evaluators: any[];
    id: number;
    name: string;
    notifier: any;
    summarize: boolean;
  }

  export interface NotificationTaskAddChangeRuleParams {
    rule: ChangeRule;
    user: string;
  }

  export interface NotificationTaskDeleteChangeRuleParams {
    ruleId: string;
    user: string;
  }

  export interface NotificationTaskNotifySessionParams {
    sessionid: string;
    deleteAfter: boolean;
    user: string;
  }

  export interface NotificationTaskQueryChangeRulesParams {
    name: string;
    description: string;
    searchType: string;
    user: string;
  }

  export interface NotificationTaskRunSpatialNotificationOnHistoryParams {
    dataWorkspaceId: string;
    from: Date;
    to: Date;
    logMatches: boolean;
    send: boolean;
    user: string;
  }

  export interface NotificationTaskSendNotificationParams {
    jobId: number;
    notificationType: string;
    user: string;
  }

  export interface NotificationTaskSubscribeToNotificationParams {
    notificationTypeId: number;
    email: string;
    user: string;
  }

  export interface NotificationTaskUnsubscribeFromNotificationParams {
    notificationTypeId: number;
    email: string;
    user: string;
  }

  export interface ReportTaskGenerateReportParams {
    reportId: number;
    user: string;
  }

  export interface ReportTaskGetReportContentUrlParams {
    reportId: number;
    user: number;
  }

  export interface ReportTaskGetReportDataParams {
    reportId: number;
    user: string;
  }

  export interface TokenTaskParseTokensParams {
    jobId: any;
    stringToParse: string;
    user: string;
  }

  export interface WorkflowTaskCanRunStepParams {
    jobId: number;
    stepId: number;
    user: string;
  }

  export interface WorkflowTaskExecuteStepsParams {
    jobId: number;
    stepIds: number[];
    auto: boolean;
    user: string;
  }

  export interface WorkflowTaskGetStepDescriptionParams {
    jobId: number;
    stepId: number;
  }

  export interface WorkflowTaskGetStepFileUrlParams {
    jobId: number;
    stepId: number;
  }

  export interface WorkflowTaskGetStepParams {
    jobId: number;
    stepId: number;
  }

  export interface WorkflowTaskMarkStepsAsDoneParams {
    jobId: number;
    stepIds: number[];
    user: string;
  }

  export interface WorkflowTaskMoveToNextStepParams {
    jobId: number;
    stepId: number;
    returnCode: number;
    user: string;
  }

  export interface WorkflowTaskRecreateWorkflowParams {
    jobId: number;
    user: string;
  }

  export interface WorkflowTaskResolveConflictParams {
    jobId: number;
    stepId: number;
    optionReturnCode: number;
    optionStepIds: number[];
    user: string;
  }

  export interface WorkflowTaskSetCurrentStepParams {
    jobId: number;
    stepId: number;
    user: string;
  }

  export interface ImageryLayerViewPixelData {
    extent?: Extent;
    pixelBlock: PixelBlock;
  }

  export interface StreamLayerViewDataReceivedEvent {
  }

  export type StreamLayerViewDataReceivedEventHandler = (event: StreamLayerViewDataReceivedEvent) => void;

  export interface StreamLayerViewFilter {
    geometry?: Extent;
    where?: string;
  }

  export interface StreamLayerViewUpdateFilterFilter {
    geometry?: Extent;
    where?: string;
  }

  export interface SlideApplyToOptions {
    animate: boolean;
    speedFactor?: number;
    duration?: number;
    maxDuration?: number;
    easing?: string | EasingFunction;
  }

  export interface SlideCreateFromOptions {
    screenshot: SlideCreateFromOptionsScreenshot;
  }

  export interface SlideCreateFromOptionsScreenshot {
    format: string;
    quality: number;
    width: number;
    height: number;
  }

  export interface SlideDescriptionProperties {
    text?: string;
  }
  export interface SlideDescription extends Accessor {
    text?: string;
  }

  export interface SlideThumbnailProperties {
    url?: string;
  }
  export interface SlideThumbnail extends Accessor {
    url?: string;
  }

  export interface SlideTitleProperties {
    text?: string;
  }
  export interface SlideTitle extends Accessor {
    text?: string;
  }

  export interface SlideUpdateFromOptions {
    screenshot: SlideUpdateFromOptionsScreenshot;
  }

  export interface SlideUpdateFromOptionsScreenshot {
    format: string;
    quality: number;
    width: number;
    height: number;
  }

  export interface SlideVisibleLayers extends Collection {
    id: string;
  }

  export interface ColorSliderValues {
    color: Color;
    value: number;
    label: string;
  }

  export interface LegendLayerInfos {
    title?: string;
    layer: Layer;
  }

  export interface PopupDockOptions {
    breakpoint?: any | boolean;
    buttonEnabled?: boolean;
    position?: string | Function;
  }

  export interface PopupOpenOptions {
    title?: string;
    content?: string;
    location?: Geometry;
    features?: Graphic[];
    promises?: IPromise<any>[];
    updateLocationEnabled?: boolean;
  }

  export interface SearchViewModelSearchCompleteEventResults {
    results: SearchViewModelSearchCompleteEventResultsResults[];
    sourceIndex: number;
    source: any[];
  }

  export interface SearchViewModelSearchCompleteEventResultsResults {
    extent: Extent;
    feature: Graphic;
    name: string;
  }

  export interface SearchViewModelSelectResultEventResult {
    extent: Extent;
    feature: Graphic;
    name: string;
  }

  export interface SearchViewModelSuggestCompleteEventResults {
    results: SearchViewModelSuggestCompleteEventResultsResults[];
    sourceIndex: number;
    source: any;
  }

  export interface SearchViewModelSuggestCompleteEventResultsResults {
    extent: Extent;
    feature: Graphic;
    name: string;
    isCollection: boolean;
    magicKey: string;
    text: string;
  }

  export interface SearchViewModelLoadEvent {
  }

  export type SearchViewModelLoadEventHandler = (event: SearchViewModelLoadEvent) => void;

  export interface SearchViewModelSearchClearEvent {
  }

  export type SearchViewModelSearchClearEventHandler = (event: SearchViewModelSearchClearEvent) => void;

  export interface SearchViewModelSearchCompleteEvent {
    activeSourceIndex: number;
    errors: Error[];
    numResults: number;
    searchTerm: string;
    results: SearchViewModelSearchCompleteEventResults[];
  }

  export type SearchViewModelSearchCompleteEventHandler = (event: SearchViewModelSearchCompleteEvent) => void;

  export interface SearchViewModelSearchStartEvent {
  }

  export type SearchViewModelSearchStartEventHandler = (event: SearchViewModelSearchStartEvent) => void;

  export interface SearchViewModelSelectResultEvent {
    result: SearchViewModelSelectResultEventResult;
    source: any;
    sourceIndex: number;
  }

  export type SearchViewModelSelectResultEventHandler = (event: SearchViewModelSelectResultEvent) => void;

  export interface SearchViewModelSuggestCompleteEvent {
    activeSourceIndex: number;
    errors: Error[];
    numResults: number;
    searchTerm: string;
    results: SearchViewModelSuggestCompleteEventResults[];
  }

  export type SearchViewModelSuggestCompleteEventHandler = (event: SearchViewModelSuggestCompleteEvent) => void;

  export interface SearchViewModelSuggestStartEvent {
  }

  export type SearchViewModelSuggestStartEventHandler = (event: SearchViewModelSuggestStartEvent) => void;

  export interface DynamicLayerFetchImageOptions {
    allowImageDataAccess?: boolean;
    rotation?: number;
    pixelRatio?: number;
  }

  export interface DynamicLayerGetImageUrlOptions {
    pixelRatio?: number;
    rotation?: number;
  }

  export interface ArcGISDynamicMapServiceGetExportImageParametersOptions {
    rotation?: number;
  }

  export interface SceneServiceVersion {
    major: number;
    minor: number;
    versionString: string;
  }

  export interface BreakpointsOwnerBreakpoints {
    xsmall: number;
    small: number;
    medium: number;
    large: number;
  }

  export interface configRequest {
    corsDetection?: boolean;
    corsDetectionTimeout?: number;
    corsEnabledServers?: Array<string | configRequestCorsEnabledServers>;
    forceProxy?: boolean;
    httpsDomains?: string[];
    maxUrlLength?: number;
    proxyUrl?: string;
    timeout?: number;
    useCors?: string | boolean;
    proxyRules?: configRequestProxyRules[];
  }

  export interface configRequestCorsEnabledServers {
    host?: string;
    withCredentials?: boolean;
  }

  export interface configRequestProxyRules {
    proxyUrl?: string;
    urlPrefix?: string;
  }

  export interface configWorkers {
    loaderConfig?: configWorkersLoaderConfig;
  }

  export interface configWorkersLoaderConfig {
    has?: any;
    paths?: any;
    map?: any;
    packages?: any[];
  }

  export interface requestEsriRequestOptions {
    callbackParamName?: string;
    query?: any;
    responseType?: string;
    headers?: any;
    timeout?: number;
    method?: string;
    body?: any | any | string;
    useProxy?: boolean;
    cacheBust?: boolean;
    allowImageDataAccess?: boolean;
  }

  export interface EachAlwaysResult {
    promise: IPromise<any>;
    value: any;
    error: any;
  }

  export interface urlUtilsAddProxyRuleRule {
    proxyUrl: string;
    urlPrefix: string;
  }

  export type EventAttachedCallback = (target: any, propName: string, obj: Accessor, eventName: string) => void;

  export interface PausableWatchHandle {
    remove(): void;
    pause(): void;
    resume(): void;
  }

  export interface decoratorsPropertyPropertyMetadata {
    dependsOn?: string[];
    type?: Function;
    cast?: Function;
    readOnly?: boolean;
    aliasOf?: string;
    value?: any;
  }

  export interface colorCreateContinuousRendererParams {
    layer: FeatureLayer | SceneLayer;
    field: string;
    normalizationField?: string;
    basemap?: string | Basemap;
    theme?: string;
    colorScheme?: any;
    legendOptions?: colorCreateContinuousRendererParamsLegendOptions;
    statistics?: any;
    minValue?: number;
    maxValue?: number;
    defaultSymbolEnabled?: boolean;
    view?: SceneView;
    symbolType?: string;
    colorMixMode?: string;
  }

  export interface colorCreateContinuousRendererParamsLegendOptions {
    title: string;
  }

  export interface colorCreateVisualVariableParams {
    layer: FeatureLayer | SceneLayer;
    field: string;
    normalizationField?: string;
    basemap?: string | Basemap;
    theme?: string;
    colorScheme?: any;
    legendOptions?: colorCreateVisualVariableParamsLegendOptions;
    statistics?: any;
    minValue?: number;
    maxValue?: number;
    view?: SceneView;
    worldScale?: boolean;
  }

  export interface colorCreateVisualVariableParamsLegendOptions {
    title: string;
  }

  export interface locationCreateRendererParams {
    layer: FeatureLayer | SceneLayer;
    basemap?: string | Basemap;
    locationScheme?: any | any | any;
    view?: SceneView;
    symbolType?: string;
    colorMixMode?: string;
  }

  export interface sizeCreateContinuousRendererParams {
    layer: FeatureLayer | SceneLayer;
    field: string;
    normalizationField?: string;
    basemap?: string | Basemap;
    sizeScheme?: any | any | any;
    legendOptions?: sizeCreateContinuousRendererParamsLegendOptions;
    statistics?: any;
    minValue?: number;
    maxValue?: number;
    defaultSymbolEnabled?: boolean;
    view?: SceneView;
    symbolType?: string;
  }

  export interface sizeCreateContinuousRendererParamsLegendOptions {
    title: string;
  }

  export interface sizeCreateVisualVariablesParams {
    layer: FeatureLayer | SceneLayer;
    field: string;
    normalizationField?: string;
    basemap?: string | Basemap;
    sizeScheme?: any | any | any;
    legendOptions?: sizeCreateVisualVariablesParamsLegendOptions;
    statistics?: any;
    minValue?: number;
    maxValue?: number;
    view?: SceneView;
    worldScale?: boolean;
    axis?: boolean;
  }

  export interface sizeCreateVisualVariablesParamsLegendOptions {
    title: string;
  }

  export interface typeCreateRendererParams {
    layer: FeatureLayer | SceneLayer;
    field: string;
    basemap?: string | Basemap;
    numTypes?: number;
    sortBy?: string;
    typeScheme?: any | any | any;
    legendOptions?: typeCreateRendererParamsLegendOptions;
    defaultSymbolEnabled?: boolean;
    view?: SceneView;
    symbolType?: string;
    statistics?: any;
    colorMixMode?: string;
  }

  export interface typeCreateRendererParamsLegendOptions {
    title: string;
  }

  export interface univariateColorSizeCreateContinuousRendererParams {
    layer: FeatureLayer | SceneLayer;
    basemap?: string | Basemap;
    field: string;
    normalizationField?: string;
    statistics?: any;
    minValue?: number;
    maxValue?: number;
    defaultSymbolEnabled?: boolean;
    colorOptions?: univariateColorSizeCreateContinuousRendererParamsColorOptions;
    sizeOptions?: univariateColorSizeCreateContinuousRendererParamsSizeOptions;
    view?: SceneView;
    symbolType?: string;
  }

  export interface univariateColorSizeCreateContinuousRendererParamsColorOptions {
    theme?: string;
    colorScheme?: any;
    legendOptions?: univariateColorSizeCreateContinuousRendererParamsColorOptionsLegendOptions;
  }

  export interface univariateColorSizeCreateContinuousRendererParamsColorOptionsLegendOptions {
    title: string;
  }

  export interface univariateColorSizeCreateContinuousRendererParamsSizeOptions {
    sizeScheme?: any | any | any;
    legendOptions?: univariateColorSizeCreateContinuousRendererParamsSizeOptionsLegendOptions;
  }

  export interface univariateColorSizeCreateContinuousRendererParamsSizeOptionsLegendOptions {
    title: string;
  }

  export interface univariateColorSizeCreateVisualVariablesParams {
    layer: FeatureLayer | SceneLayer;
    basemap?: string | Basemap;
    field: string;
    normalizationField?: string;
    statistics?: any;
    minValue?: number;
    maxValue?: number;
    colorOptions?: univariateColorSizeCreateVisualVariablesParamsColorOptions;
    sizeOptions?: univariateColorSizeCreateVisualVariablesParamsSizeOptions;
    view?: SceneView;
    worldScale?: boolean;
  }

  export interface univariateColorSizeCreateVisualVariablesParamsColorOptions {
    theme?: string;
    colorScheme?: any;
    legendOptions?: univariateColorSizeCreateVisualVariablesParamsColorOptionsLegendOptions;
  }

  export interface univariateColorSizeCreateVisualVariablesParamsColorOptionsLegendOptions {
    title: string;
  }

  export interface univariateColorSizeCreateVisualVariablesParamsSizeOptions {
    axis?: boolean;
    sizeScheme?: any | any | any;
    legendOptions?: univariateColorSizeCreateVisualVariablesParamsSizeOptionsLegendOptions;
  }

  export interface univariateColorSizeCreateVisualVariablesParamsSizeOptionsLegendOptions {
    title: string;
  }

  export interface classBreaksClassBreaksParams {
    layer: FeatureLayer | SceneLayer;
    field?: string;
    normalizationField?: string;
    classificationMethod?: string;
    standardDeviationInterval?: number;
    minValue?: number;
    maxValue?: number;
    numClasses?: number;
  }

  export interface histogramHistogramParams {
    layer: FeatureLayer | SceneLayer;
    field?: string;
    normalizationField?: string;
    classificationMethod?: string;
    standardDeviationInterval?: number;
    minValue?: number;
    maxValue?: number;
    numBins?: number;
  }

  export interface summaryStatisticsSummaryStatisticsParams {
    layer: FeatureLayer | SceneLayer;
    field?: string;
    normalizationField?: string;
    features?: Graphic[];
    minValue?: number;
    maxValue?: number;
  }

  export interface uniqueValuesUniqueValuesParams {
    layer: FeatureLayer | SceneLayer;
    field: string;
    features?: Graphic[];
    returnAllCodedValues?: boolean;
  }

  export interface colorGetSchemesParams {
    basemap: string | Basemap;
    geometryType: string;
    theme: string;
    view?: SceneView;
    worldScale?: boolean;
  }

  export interface locationGetSchemesParams {
    basemap: string | Basemap;
    geometryType: string;
    view?: SceneView;
    worldScale?: boolean;
  }

  export interface sizeGetSchemesParams {
    basemap: string | Basemap;
    geometryType: string;
    view?: SceneView;
    worldScale?: boolean;
  }

  export interface typeGetSchemesParams {
    basemap: string | Basemap;
    geometryType: string;
    worldScale?: boolean;
    view?: SceneView;
  }

  export interface JobQuery {
    id: number;
    name: string;
  }

  export interface GroupMembership {
    id: number;
    name: string;
  }

  export interface JobQueryContainer {
    containers: JobQueryContainer[];
    id: number;
    name: string;
    queries: JobQuery[];
  }

  export interface Privilege {
    description: string;
    id: number;
    name: string;
  }

  export interface DataWorkspace {
    id: string;
    name: string;
  }

  export interface HoldType {
    description: string;
    id: number;
    name: string;
  }

  export interface JobPriority {
    description: string;
    name: string;
    value: number;
  }

  export interface JobStatus {
    caption: string;
    description: string;
    id: number;
    name: string;
  }

  export interface JobType {
    category: string;
    description: string;
    id: string;
    name: string;
    state: string;
  }

  export interface ActivityType {
    desription: string;
    id: number;
    message: string;
    name: string;
  }

  export interface NotificationType {
    attachJobAttachments: boolean;
    id: number;
    message: string;
    senderEmail: string;
    senderName: string;
    subject: string;
    subscribers: string[];
    type: string;
  }

  export interface AuxRecord {
    displayProperty: any;
    id: number;
    recordvalues: AuxRecordValue;
  }

  export interface AuxRecordValue {
    filter: string;
    alias: string;
    data: any;
    dataType: string;
    displayOrder: number;
    displayType: string;
    domain: string;
    canUpdate: boolean;
    length: number;
    name: string;
    required: boolean;
    tableListClass: string;
    tableListDisplayField: string;
    tableListStoreField: string;
    userVisible: boolean;
  }

  export interface JobVersionInfo {
    dataWorkspaceId: string;
    name: string;
    parent: string;
    created: boolean;
    owner: string;
  }

  export interface QueryFieldInfo {
    alias: string;
    length: string;
    name: string;
    type: string;
  }

  export interface DatasetConfiguration {
    changeCondition: number;
    changeFields: string;
    dataset: string;
    dataWorkspaceId: string;
    name: string;
    whereConditions: WhereCondition[];
  }

  export interface WhereCondition {
    compareValue: any;
    field: string;
    operator: string;
  }

  export interface ReportDataGroup {
    aggregateLabel: string;
    aggregateValue: string;
    row: string[];
    value: string;
  }

  export interface WorkflowConflicts {
    jobID: number;
    options: WorkflowOption[];
    spawnsConcurrency: boolean;
    stepId: number;
  }

  export interface WorkflowOption {
    returnCode: number;
    steps: WorkflowStepInfo[];
  }

  export interface WorkflowStepInfo {
    id: number;
    name: string;
  }

  export interface StepType {
    program: string;
    arguments: string;
    executionType: string;
    id: number;
    name: string;
    description: string;
    stepDescriptionLink: string;
    stepDescriptionType: string;
    stepIndicatorType: string;
    supportedPlatform: string;
    visible: boolean;
  }

  export interface WorkflowAnnotationDisplayDetails {
    centerX: number;
    centerY: number;
    fillColor: any;
    height: number;
    label: string;
    labelColor: any;
    OutlineColor: any;
    width: number;
  }

  export interface WorkflowPathDisplayDetails {
    destStepId: number;
    sourceStepID: number;
    label: string;
    labelColor: any;
    labelX: number;
    labelY: number;
    lineColor: any;
    pathObject: any;
  }

  export interface WorkflowStepDisplayDetails {
    labelColor: any;
    centerX: number;
    fillColor: any;
    height: number;
    label: string;
    centerY: number;
    OutlineColor: any;
    shape: string;
    stepId: number;
    stepType: string;
    width: number;
  }

  export interface ColorAndIntensity {
    color: any;
    intensity: number;
  }

  export interface RenderCamera {
    viewMatrix: any;
    viewInverseTransposeMatrix: any;
    projectionMatrix: any;
    eye: any;
    center: any;
    up: any;
    near: number;
    far: number;
    fovX: number;
    fovY: number;
  }

  export interface SunLight {
    direction: any;
    diffuse: ColorAndIntensity;
    ambient: ColorAndIntensity;
  }

  interface Basemap extends Accessor, Loadable, JSONSupport {
    baseLayers: Collection;
    id: string;
    loaded: boolean;
    portalItem: PortalItem;
    referenceLayers: Collection;
    thumbnailUrl: string;
    title: string;

    clone(): this;
  }

  interface BasemapConstructor {
    new(properties?: BasemapProperties): Basemap;


    fromId(id: string): Basemap;

    fromJSON(json: any): Basemap;
  }

  export const Basemap: BasemapConstructor;

  interface BasemapProperties extends LoadableProperties {
    baseLayers?: Collection | any[];
    id?: string;
    loaded?: boolean;
    portalItem?: PortalItemProperties;
    referenceLayers?: Collection | any[];
    thumbnailUrl?: string;
    title?: string;
  }

  interface Camera extends Accessor, JSONSupport {
    fov: number;
    heading: number;
    position: Point;
    tilt: number;

    clone(): this;
  }

  interface CameraConstructor {
    new(properties?: CameraProperties): Camera;

    fromJSON(json: any): Camera;
  }

  export const Camera: CameraConstructor;

  interface CameraProperties {
    fov?: number;
    heading?: number;
    position?: PointProperties;
    tilt?: number;
  }

  interface Color {
    a: number;
    b: number;
    g: number;
    r: number;

    clone(): this;
    setColor(color: string | number[] | any): Color;
    toCss(includeAlpha?: boolean): string;
    toHex(): string;
    toJSON(): any;
    toRgb(): number[];
    toRgba(): number[];
  }

  interface ColorConstructor {

    blendColors(start: Color, end: Color, weight: number, obj?: Color): Color;
    new(color: string | number[] | any): Color;
    fromArray(a: number[], obj?: Color): Color;
    fromHex(color: string, obj?: Color): Color;
    fromJSON(json: any): Color;
    fromRgb(color: string, obj?: Color): Color;
    fromString(str: string, obj?: Color): Color;
  }

  export const Color: ColorConstructor;

  interface Graphic extends Accessor, JSONSupport {
    attributes: any;
    geometry: Geometry;
    layer: FeatureLayer | GraphicsLayer;
    popupTemplate: PopupTemplate;
    symbol: Symbol;
    visible: boolean;

    clone(): this;
    getAttribute(name: string): any;
    getEffectivePopupTemplate(): PopupTemplate;
    setAttribute(name: string, newValue: any): void;
  }

  interface GraphicConstructor {
    new(properties?: GraphicProperties): Graphic;

    fromJSON(json: any): Graphic;
  }

  export const Graphic: GraphicConstructor;

  interface GraphicProperties {
    attributes?: any;
    geometry?: GeometryProperties;
    layer?: FeatureLayer | GraphicsLayer;
    popupTemplate?: PopupTemplateProperties;
    symbol?: SymbolProperties;
    visible?: boolean;
  }

  interface Ground extends Accessor {
    layers: Collection;

    clone(): this;
    queryElevation(geometry: Point | Multipoint | Polyline, options?: GroundQueryElevationOptions): IPromise<any>;
  }

  interface GroundConstructor {
    new(properties?: GroundProperties): Ground;
  }

  export const Ground: GroundConstructor;

  interface GroundProperties {
    layers?: Collection | any[];
  }

  interface Map extends Accessor, LayersMixin {
    allLayers: Collection;
    basemap: Basemap;
    ground: Ground;
  }

  interface MapConstructor {
    new(properties?: MapProperties): Map;
  }

  export const Map: MapConstructor;

  interface MapProperties extends LayersMixinProperties {
    allLayers?: Collection | any[];
    basemap?: BasemapProperties;
    ground?: GroundProperties;
  }

  interface PopupTemplate extends Accessor, JSONSupport {
    actions: Collection;
    content: string;
    expressionInfos: PopupTemplateExpressionInfos[];
    fieldInfos: PopupTemplateFieldInfos[];
    overwriteActions: boolean;
    title: string;

    clone(): this;
  }

  interface PopupTemplateConstructor {
    new(properties?: PopupTemplateProperties): PopupTemplate;

    fromJSON(json: any): PopupTemplate;
  }

  export const PopupTemplate: PopupTemplateConstructor;

  interface PopupTemplateProperties {
    actions?: Collection | any[];
    content?: string | any[] | Function | IPromise<any>;
    expressionInfos?: PopupTemplateExpressionInfos[];
    fieldInfos?: PopupTemplateFieldInfos[];
    overwriteActions?: boolean;
    title?: string | Function;
  }

  interface Viewpoint extends Accessor, JSONSupport {
    camera: Camera;
    rotation: number;
    scale: number;
    targetGeometry: Geometry;

    clone(): this;
  }

  interface ViewpointConstructor {
    new(properties?: ViewpointProperties): Viewpoint;

    fromJSON(json: any): Viewpoint;
  }

  export const Viewpoint: ViewpointConstructor;

  interface ViewpointProperties {
    camera?: CameraProperties;
    rotation?: number;
    scale?: number;
    targetGeometry?: GeometryProperties;
  }

  interface WebMap extends Map, corePromise {
    applicationProperties: any;
    bookmarks: any[];
    initialViewProperties: InitialViewProperties;
    loaded: boolean;
    loadError: Error;
    loadStatus: string;
    portalItem: PortalItem;
    presentation: any;
    sourceVersion: WebMapSourceVersion;
    tables: any[];
    widgets: any;

    load(): IPromise<any>;
  }

  interface WebMapConstructor {
    new(properties?: WebMapProperties): WebMap;
  }

  export const WebMap: WebMapConstructor;

  interface WebMapProperties extends MapProperties {
    applicationProperties?: any;
    bookmarks?: any[];
    initialViewProperties?: InitialViewPropertiesProperties;
    loaded?: boolean;
    loadError?: Error;
    loadStatus?: string;
    portalItem?: PortalItemProperties;
    presentation?: any;
    sourceVersion?: WebMapSourceVersion;
    tables?: any[];
    widgets?: any;
  }

  interface WebScene extends Map, corePromise {
    clippingArea: Extent;
    clippingEnabled: boolean;
    initialViewProperties: websceneInitialViewProperties;
    loaded: boolean;
    loadError: Error;
    loadStatus: string;
    portalItem: PortalItem;
    presentation: Presentation;
    sourceVersion: WebSceneSourceVersion;

    load(): IPromise<any>;
    save(options?: WebSceneSaveOptions): IPromise<any>;
    saveAs(portalItem: PortalItem, options?: WebSceneSaveAsOptions): IPromise<any>;
    toJSON(): any;
    updateFrom(view: SceneView, options?: WebSceneUpdateFromOptions): void;
  }

  interface WebSceneConstructor {
    new(properties?: WebSceneProperties): WebScene;


    fromJSON(json: any): any;
  }

  export const WebScene: WebSceneConstructor;

  interface WebSceneProperties extends MapProperties {
    clippingArea?: ExtentProperties;
    clippingEnabled?: boolean;
    initialViewProperties?: websceneInitialViewPropertiesProperties;
    loaded?: boolean;
    loadError?: Error;
    loadStatus?: string;
    portalItem?: PortalItemProperties;
    presentation?: PresentationProperties;
    sourceVersion?: WebSceneSourceVersion;
  }



  interface Collection extends Accessor, Evented {
    length: number;

    add(item: any, index?: number): void;
    addMany(items: any[] | Collection, index?: number): void;
    clone(): this;
    concat(value: any[] | Collection): Collection;
    every(callback: ItemTestCallback): boolean;
    filter(callback: ItemTestCallback): Collection;
    find(callback: ItemTestCallback): any;
    findIndex(callback: ItemTestCallback): number;
    flatten(callback: ItemCallback): Collection;
    forEach(callback: ItemCallback): void;
    getItemAt(index: number): any;
    includes(searchElement: any): boolean;
    indexOf(searchElement: any, fromIndex?: number): number;
    join(separator?: string): string;
    lastIndexOf(searchElement: any, fromIndex?: number): number;
    map(callback: ItemMapCallback): Collection;
    pop(): any;
    push(item: any): number;
    reduce(callback: ItemReduceCallback): any;
    reduceRight(callback: ItemReduceCallback, initialValue?: any): any;
    remove(item: any): void;
    removeAll(): void;
    removeAt(index: number): any;
    removeMany(items: any[] | Collection): any;
    reorder(item: any, index: number): any;
    reverse(): Collection;
    shift(): any;
    slice(begin?: number, end?: number): Collection;
    some(callback: ItemCallback): boolean;
    sort(compareFunction?: ItemCompareCallback): void;
    splice(start: number, deleteCount: number, items: any): any[];
    toArray(): any[];
    unshift(items: any): number;
  }

  interface CollectionConstructor {
    new(properties?: CollectionProperties): Collection;


    isCollection(value: any): boolean;
    ofType(type: any): any;
  }

  export const Collection: CollectionConstructor;

  interface CollectionProperties {
    length?: number;
  }

  interface Connection {
    broadcast(methodName: string, data?: any, buffers?: any[]): IPromise<any>[];
    close(): void;
    invoke(methodName: string, data?: any, buffers?: any[]): IPromise<any>;
  }

  interface ConnectionConstructor {
    new(client: any, id: number): Connection;
  }

  export const Connection: ConnectionConstructor;

  interface Circle extends Polygon {
    center: Point | number[];
    geodesic: boolean;
    numberOfPoints: number;
    radius: number;
    radiusUnit: string;
  }

  interface CircleConstructor {
    new(properties?: CircleProperties): Circle;

    fromJSON(json: any): Circle;
  }

  export const Circle: CircleConstructor;

  interface CircleProperties extends PolygonProperties {
    center?: Point | number[];
    geodesic?: boolean;
    numberOfPoints?: number;
    radius?: number;
    radiusUnit?: string;
  }

  interface Extent extends Geometry {
    center: Point;
    height: number;
    mmax: number;
    mmin: number;
    width: number;
    xmax: number;
    xmin: number;
    ymax: number;
    ymin: number;
    zmax: number;
    zmin: number;

    centerAt(point: Point): Extent;
    contains(geometry: Point | Extent): boolean;
    equals(extent: Extent): boolean;
    expand(factor: number): Extent;
    intersection(extent: Extent): Extent;
    intersects(geometry: Geometry): boolean;
    normalize(): Extent[];
    offset(dx: number, dy: number, dz: number): Extent;
    union(extent: Extent): Extent;
  }

  interface ExtentConstructor {
    new(properties?: ExtentProperties): Extent;

    fromJSON(json: any): Extent;
  }

  export const Extent: ExtentConstructor;

  interface ExtentProperties extends GeometryProperties {
    center?: PointProperties;
    height?: number;
    mmax?: number;
    mmin?: number;
    width?: number;
    xmax?: number;
    xmin?: number;
    ymax?: number;
    ymin?: number;
    zmax?: number;
    zmin?: number;
  }

  interface Geometry extends Accessor, JSONSupport {
    cache: any;
    extent: Extent;
    hasM: boolean;
    hasZ: boolean;
    spatialReference: SpatialReference;
    type: string;

    clone(): this;
  }

  interface GeometryConstructor {
    new(properties?: GeometryProperties): Geometry;

    fromJSON(json: any): Geometry;
  }

  export const Geometry: GeometryConstructor;

  interface GeometryProperties {
    cache?: any;
    extent?: ExtentProperties;
    hasM?: boolean;
    hasZ?: boolean;
    spatialReference?: SpatialReferenceProperties;
    type?: string;
  }

  interface Multipoint extends Geometry {
    points: number[][];

    addPoint(point: Point | number[]): Multipoint;
    getPoint(index: number): Point;
    removePoint(index: number): Point;
    setPoint(index: number, point: Point): Multipoint;
  }

  interface MultipointConstructor {
    new(properties?: MultipointProperties): Multipoint;

    fromJSON(json: any): Multipoint;
  }

  export const Multipoint: MultipointConstructor;

  interface MultipointProperties extends GeometryProperties {
    points?: number[][];
  }

  interface Point extends Geometry {
    latitude: number;
    longitude: number;
    m: number;
    x: number;
    y: number;
    z: number;

    copy(other: Point): void;
    distance(other: Point): number;
    equals(point: Point): boolean;
    normalize(): Point;
  }

  interface PointConstructor {
    new(properties?: PointProperties): Point;

    fromJSON(json: any): Point;
  }

  export const Point: PointConstructor;

  interface PointProperties extends GeometryProperties {
    latitude?: number;
    longitude?: number;
    m?: number;
    x?: number;
    y?: number;
    z?: number;
  }

  interface Polygon extends Geometry {
    centroid: Point;
    isSelfIntersecting: boolean;
    rings: number[][][];

    addRing(ring: Point[] | number[][]): Polygon;
    contains(point: Point): boolean;
    getPoint(ringIndex: number, pointIndex: number): Point;
    insertPoint(ringIndex: number, pointIndex: number, point: Point): Polygon;
    isClockwise(ring: Point[] | number[][]): boolean;
    removePoint(ringIndex: number, pointIndex: number): Point[];
    removeRing(index: number): Point[];
    setPoint(ringIndex: number, pointIndex: number, point: Point): Polygon;
  }

  interface PolygonConstructor {
    new(properties?: PolygonProperties): Polygon;


    fromExtent(extent: Extent): Polygon;

    fromJSON(json: any): Polygon;
  }

  export const Polygon: PolygonConstructor;

  interface PolygonProperties extends GeometryProperties {
    centroid?: PointProperties;
    isSelfIntersecting?: boolean;
    rings?: number[][][];
  }

  interface Polyline extends Geometry {
    paths: number[][][];

    addPath(points: number[][]): Polyline;
    getPoint(pathIndex: number, pointIndex: number): Point;
    insertPoint(pathIndex: number, pointIndex: number, point: Point): Polyline;
    removePath(index: number): Point[];
    removePoint(pathIndex: number, pointIndex: number): Point;
    setPoint(pathIndex: number, pointIndex: number, point: Point): Polyline;
  }

  interface PolylineConstructor {
    new(properties?: PolylineProperties): Polyline;

    fromJSON(json: any): Polyline;
  }

  export const Polyline: PolylineConstructor;

  interface PolylineProperties extends GeometryProperties {
    paths?: number[][][];
  }

  interface ScreenPoint extends Accessor {
    x: number;
    y: number;
  }

  interface ScreenPointConstructor {
    new(properties?: ScreenPointProperties): ScreenPoint;
  }

  export const ScreenPoint: ScreenPointConstructor;

  interface ScreenPointProperties {
    x?: number;
    y?: number;
  }

  interface SpatialReference extends Accessor, JSONSupport {
    isGeographic: boolean;
    isWebMercator: boolean;
    isWGS84: boolean;
    isWrappable: boolean;
    WebMercator: SpatialReference;
    WGS84: SpatialReference;
    wkid: number;
    wkt: string;

    clone(): this;
    equals(spatialReference: SpatialReference): boolean;
  }

  interface SpatialReferenceConstructor {
    new(properties?: SpatialReferenceProperties): SpatialReference;

    fromJSON(json: any): SpatialReference;
  }

  export const SpatialReference: SpatialReferenceConstructor;

  interface SpatialReferenceProperties {
    isGeographic?: boolean;
    isWebMercator?: boolean;
    isWGS84?: boolean;
    isWrappable?: boolean;
    WebMercator?: SpatialReferenceProperties;
    WGS84?: SpatialReferenceProperties;
    wkid?: number;
    wkt?: string;
  }

  interface Credential extends Accessor {
    expires: number;
    isAdmin: boolean;
    oAuthState: any;
    server: string;
    ssl: boolean;
    token: string;
    userId: string;

    destroy(): void;
    refreshToken(): void;
  }

  interface CredentialConstructor {
    new(properties?: CredentialProperties): Credential;
  }

  export const Credential: CredentialConstructor;

  interface CredentialProperties {
    expires?: number;
    isAdmin?: boolean;
    oAuthState?: any;
    server?: string;
    ssl?: boolean;
    token?: string;
    userId?: string;
  }

  interface IdentityManagerBase extends Evented {
    tokenValidity: number;

    checkSignInStatus(resUrl: string): IPromise<any>;
    destroyCredentials(): void;
    findCredential(url: string, userId?: string): Credential;
    findOAuthInfo(url: string): OAuthInfo;
    findServerInfo(url: string): ServerInfo;
    generateToken(serverInfo: ServerInfo, userInfo: any, options?: IdentityManagerBaseGenerateTokenOptions): IPromise<any>;
    getCredential(url: string, options?: IdentityManagerBaseGetCredentialOptions): IPromise<any>;
    initialize(json: any): void;
    isBusy(): boolean;
    oAuthSignIn(resUrl: string, serverInfo: ServerInfo, oAuthInfo: OAuthInfo, options?: IdentityManagerBaseOAuthSignInOptions): IPromise<any>;
    registerOAuthInfos(oAuthInfos: OAuthInfo[]): void;
    registerServers(serverInfos: ServerInfo[]): void;
    registerToken(properties: IdentityManagerBaseRegisterTokenProperties): void;
    setProtocolErrorHandler(handlerFunction: IdentityManagerBaseSetProtocolErrorHandlerHandlerFunction): void;
    setRedirectionHandler(handlerFunction: IdentityManagerBaseSetRedirectionHandlerHandlerFunction): void;
    signIn(url: string, serverInfo: ServerInfo, options?: IdentityManagerBaseSignInOptions): IPromise<any>;
    toJSON(): any;
  }

  interface IdentityManagerBaseConstructor {
    new(): IdentityManagerBase;
  }

  export const IdentityManagerBase: IdentityManagerBaseConstructor;

  interface IdentityManager extends IdentityManagerBase {
    dialog: any;

    setOAuthRedirectionHandler(handlerFunction: HandlerCallback): void;
    setOAuthResponseHash(hash: string): void;

    on(name: "credential-create", eventHandler: IdentityManagerCredentialCreateEventHandler): IHandle;
    on(name: "credential-create", modifiers: string[], eventHandler: IdentityManagerCredentialCreateEventHandler): IHandle;
    on(name: "credentials-destroy", eventHandler: IdentityManagerCredentialsDestroyEventHandler): IHandle;
    on(name: "credentials-destroy", modifiers: string[], eventHandler: IdentityManagerCredentialsDestroyEventHandler): IHandle;
  }

  interface IdentityManagerConstructor {
    new(): IdentityManager;
  }

  export const IdentityManager: IdentityManagerConstructor;

  interface OAuthInfo extends Accessor, JSONSupport {
    appId: string;
    authNamespace: string;
    expiration: number;
    locale: string;
    minTimeUntilExpiration: number;
    popup: boolean;
    popupCallbackUrl: string;
    popupWindowFeatures: string;
    portalUrl: string;

    clone(): this;
  }

  interface OAuthInfoConstructor {
    new(properties?: OAuthInfoProperties): OAuthInfo;

    fromJSON(json: any): OAuthInfo;
  }

  export const OAuthInfo: OAuthInfoConstructor;

  interface OAuthInfoProperties {
    appId?: string;
    authNamespace?: string;
    expiration?: number;
    locale?: string;
    minTimeUntilExpiration?: number;
    popup?: boolean;
    popupCallbackUrl?: string;
    popupWindowFeatures?: string;
    portalUrl?: string;
  }

  interface ServerInfo extends Accessor, JSONSupport {
    adminTokenServiceUrl: string;
    currentVersion: number;
    server: string;
    shortLivedTokenValidity: number;
    tokenServiceUrl: string;
  }

  interface ServerInfoConstructor {
    new(properties?: ServerInfoProperties): ServerInfo;

    fromJSON(json: any): ServerInfo;
  }

  export const ServerInfo: ServerInfoConstructor;

  interface ServerInfoProperties {
    adminTokenServiceUrl?: string;
    currentVersion?: number;
    server?: string;
    shortLivedTokenValidity?: number;
    tokenServiceUrl?: string;
  }

  interface BaseElevationLayer extends Layer {
    spatialReference: SpatialReference;
    tileInfo: TileInfo;

    addResolvingPromise(promiseToLoad: IPromise<any>): IPromise<any>;
    fetchTile(level: number, row: number, column: number, options?: BaseElevationLayerFetchTileOptions): IPromise<any>;
    getTileBounds(level: number, row: number, column: number, out?: number[]): number[];

    on(name: "layerview-create", eventHandler: BaseElevationLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: BaseElevationLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: BaseElevationLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: BaseElevationLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface BaseElevationLayerConstructor {
    new(properties?: BaseElevationLayerProperties): BaseElevationLayer;
  }

  export const BaseElevationLayer: BaseElevationLayerConstructor;

  interface BaseElevationLayerProperties extends LayerProperties {
    spatialReference?: SpatialReferenceProperties;
    tileInfo?: TileInfoProperties;
  }

  interface CSVLayer extends Layer {
    copyright: string;
    delimiter: string;
    elevationInfo: CSVLayerElevationInfo;
    featureReduction: CSVLayerFeatureReduction;
    fields: Field[];
    labelingInfo: LabelClass[];
    labelsVisible: boolean;
    latitudeField: string;
    legendEnabled: boolean;
    longitudeField: string;
    maxScale: number;
    minScale: number;
    outFields: string[];
    popupEnabled: boolean;
    popupTemplate: PopupTemplate;
    renderer: Renderer;
    screenSizePerspectiveEnabled: boolean;
    url: string;

    on(name: "layerview-create", eventHandler: CSVLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: CSVLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: CSVLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: CSVLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface CSVLayerConstructor {
    new(properties?: CSVLayerProperties): CSVLayer;
  }

  export const CSVLayer: CSVLayerConstructor;

  interface CSVLayerProperties extends LayerProperties {
    copyright?: string;
    delimiter?: string;
    elevationInfo?: CSVLayerElevationInfo;
    featureReduction?: CSVLayerFeatureReduction;
    fields?: FieldProperties[];
    labelingInfo?: LabelClassProperties[];
    labelsVisible?: boolean;
    latitudeField?: string;
    legendEnabled?: boolean;
    longitudeField?: string;
    maxScale?: number;
    minScale?: number;
    outFields?: string[];
    popupEnabled?: boolean;
    popupTemplate?: PopupTemplateProperties;
    renderer?: RendererProperties;
    screenSizePerspectiveEnabled?: boolean;
    url?: string;
  }

  interface ElevationLayer extends Layer, ArcGISMapService, ArcGISCachedService, PortalLayer, TiledLayer {
    url: string;

    fetchTile(level: number, row: number, column: number, noDataValue?: number): IPromise<any>;
    queryElevation(geometry: Point | Multipoint | Polyline, options?: ElevationLayerQueryElevationOptions): IPromise<any>;

    on(name: "layerview-create", eventHandler: ElevationLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: ElevationLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: ElevationLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: ElevationLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface ElevationLayerConstructor {
    new(properties?: ElevationLayerProperties): ElevationLayer;

    fromJSON(json: any): ElevationLayer;
  }

  export const ElevationLayer: ElevationLayerConstructor;

  interface ElevationLayerProperties extends LayerProperties, ArcGISMapServiceProperties, ArcGISCachedServiceProperties, PortalLayerProperties, TiledLayerProperties {
    url?: string;
  }

  interface FeatureLayer extends Layer, PortalLayer, ScaleRangeLayer {
    capabilities: FeatureLayerCapabilities;
    copyright: string;
    definitionExpression: string;
    displayField: string;
    elevationInfo: FeatureLayerElevationInfo;
    featureReduction: FeatureLayerFeatureReduction;
    fields: Field[];
    gdbVersion: string;
    geometryType: string;
    hasAttachments: boolean;
    hasM: boolean;
    hasZ: boolean;
    labelingInfo: LabelClass[];
    labelsVisible: boolean;
    layerId: number;
    legendEnabled: boolean;
    objectIdField: string;
    outFields: string[];
    popupEnabled: boolean;
    popupTemplate: PopupTemplate;
    renderer: Renderer;
    returnM: boolean;
    returnZ: boolean;
    screenSizePerspectiveEnabled: boolean;
    source: Collection;
    spatialReference: SpatialReference;
    templates: FeatureTemplate[];
    token: string;
    typeIdField: string;
    types: FeatureType[];
    url: string;
    version: number;

    applyEdits(edits: FeatureLayerApplyEditsEdits): IPromise<any>;
    createQuery(): Query;
    getFieldDomain(fieldName: string, options?: FeatureLayerGetFieldDomainOptions): Domain;
    queryExtent(params?: Query): IPromise<any>;
    queryFeatureCount(params?: Query): IPromise<any>;
    queryFeatures(params?: Query): IPromise<any>;
    queryObjectIds(params?: Query): IPromise<any>;

    on(name: "layerview-create", eventHandler: FeatureLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: FeatureLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: FeatureLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: FeatureLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface FeatureLayerConstructor {
    new(properties?: FeatureLayerProperties): FeatureLayer;

    fromJSON(json: any): FeatureLayer;
  }

  export const FeatureLayer: FeatureLayerConstructor;

  interface FeatureLayerProperties extends LayerProperties, PortalLayerProperties, ScaleRangeLayerProperties {
    capabilities?: FeatureLayerCapabilities;
    copyright?: string;
    definitionExpression?: string;
    displayField?: string;
    elevationInfo?: FeatureLayerElevationInfo;
    featureReduction?: FeatureLayerFeatureReduction;
    fields?: FieldProperties[];
    gdbVersion?: string;
    geometryType?: string;
    hasAttachments?: boolean;
    hasM?: boolean;
    hasZ?: boolean;
    labelingInfo?: LabelClassProperties[];
    labelsVisible?: boolean;
    layerId?: number;
    legendEnabled?: boolean;
    objectIdField?: string;
    outFields?: string[];
    popupEnabled?: boolean;
    popupTemplate?: PopupTemplateProperties;
    renderer?: RendererProperties;
    returnM?: boolean;
    returnZ?: boolean;
    screenSizePerspectiveEnabled?: boolean;
    source?: Collection | any[];
    spatialReference?: SpatialReferenceProperties;
    templates?: FeatureTemplateProperties[];
    token?: string;
    typeIdField?: string;
    types?: FeatureTypeProperties[];
    url?: string;
    version?: number;
  }

  interface GeoRSSLayer extends Layer {
    lineSymbol: SimpleLineSymbol;
    pointSymbol: PictureMarkerSymbol;
    polygonSymbol: SimpleFillSymbol;
    url: string;

    on(name: "layerview-create", eventHandler: GeoRSSLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: GeoRSSLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: GeoRSSLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: GeoRSSLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface GeoRSSLayerConstructor {
    new(properties?: GeoRSSLayerProperties): GeoRSSLayer;
  }

  export const GeoRSSLayer: GeoRSSLayerConstructor;

  interface GeoRSSLayerProperties extends LayerProperties {
    lineSymbol?: SimpleLineSymbolProperties;
    pointSymbol?: PictureMarkerSymbolProperties;
    polygonSymbol?: SimpleFillSymbolProperties;
    url?: string;
  }

  interface GraphicsLayer extends Layer, ScaleRangeLayer {
    elevationInfo: GraphicsLayerElevationInfo;
    graphics: Collection;
    screenSizePerspectiveEnabled: boolean;

    add(graphic: Graphic): void;
    addMany(graphics: Graphic[]): void;
    remove(graphic: Graphic): void;
    removeAll(): void;
    removeMany(graphics: Graphic[]): void;

    on(name: "layerview-create", eventHandler: GraphicsLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: GraphicsLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: GraphicsLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: GraphicsLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface GraphicsLayerConstructor {
    new(properties?: GraphicsLayerProperties): GraphicsLayer;
  }

  export const GraphicsLayer: GraphicsLayerConstructor;

  interface GraphicsLayerProperties extends LayerProperties, ScaleRangeLayerProperties {
    elevationInfo?: GraphicsLayerElevationInfo;
    graphics?: Collection | any[];
    screenSizePerspectiveEnabled?: boolean;
  }

  interface GroupLayer extends Layer, LayersMixin, PortalLayer {
    visibilityMode: string;

    on(name: "layerview-create", eventHandler: GroupLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: GroupLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: GroupLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: GroupLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface GroupLayerConstructor {
    new(properties?: GroupLayerProperties): GroupLayer;

    fromJSON(json: any): GroupLayer;
  }

  export const GroupLayer: GroupLayerConstructor;

  interface GroupLayerProperties extends LayerProperties, LayersMixinProperties, PortalLayerProperties {
    visibilityMode?: string;
  }

  interface ImageryLayer extends Layer, ArcGISImageService, ScaleRangeLayer {
    pixelFilter: Function;
    popupEnabled: boolean;
    portalItem: PortalItem;
    token: string;

    redraw(): void;

    on(name: "layerview-create", eventHandler: ImageryLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: ImageryLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: ImageryLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: ImageryLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface ImageryLayerConstructor {
    new(properties?: ImageryLayerProperties): ImageryLayer;

    fromJSON(json: any): ImageryLayer;
  }

  export const ImageryLayer: ImageryLayerConstructor;

  interface ImageryLayerProperties extends LayerProperties, ArcGISImageServiceProperties, ScaleRangeLayerProperties {
    pixelFilter?: Function;
    popupEnabled?: boolean;
    portalItem?: PortalItemProperties;
    token?: string;
  }

  interface IntegratedMeshLayer extends Layer, SceneService, PortalLayer {
    on(name: "layerview-create", eventHandler: IntegratedMeshLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: IntegratedMeshLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: IntegratedMeshLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: IntegratedMeshLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface IntegratedMeshLayerConstructor {
    new(properties?: IntegratedMeshLayerProperties): IntegratedMeshLayer;

    fromJSON(json: any): IntegratedMeshLayer;
  }

  export const IntegratedMeshLayer: IntegratedMeshLayerConstructor;

  interface IntegratedMeshLayerProperties extends LayerProperties, SceneServiceProperties, PortalLayerProperties {

  }

  interface Layer extends Accessor, Loadable, Evented {
    fullExtent: Extent;
    id: string;
    listMode: string;
    loaded: boolean;
    opacity: number;
    title: string;
    type: string;
    visible: boolean;

    fetchAttributionData(): IPromise<any>;
  }

  interface LayerConstructor {
    new(properties?: LayerProperties): Layer;


    fromArcGISServerUrl(params: LayerFromArcGISServerUrlParams): IPromise<any>;
    fromPortalItem(params: LayerFromPortalItemParams): IPromise<any>;
  }

  export const Layer: LayerConstructor;

  interface LayerProperties extends LoadableProperties {
    fullExtent?: ExtentProperties;
    id?: string;
    listMode?: string;
    loaded?: boolean;
    opacity?: number;
    title?: string;
    type?: string;
    visible?: boolean;
  }

  interface MapImageLayer extends Layer, ArcGISMapService, ArcGISDynamicMapService, DynamicLayer {
    on(name: "layerview-create", eventHandler: MapImageLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: MapImageLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: MapImageLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: MapImageLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface MapImageLayerConstructor {
    new(properties?: MapImageLayerProperties): MapImageLayer;

    fromJSON(json: any): MapImageLayer;
  }

  export const MapImageLayer: MapImageLayerConstructor;

  interface MapImageLayerProperties extends LayerProperties, ArcGISMapServiceProperties, ArcGISDynamicMapServiceProperties, DynamicLayerProperties {

  }

  interface MapNotesLayer extends Layer, PortalLayer {
    on(name: "layerview-create", eventHandler: MapNotesLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: MapNotesLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: MapNotesLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: MapNotesLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface MapNotesLayerConstructor {
    new(properties?: MapNotesLayerProperties): MapNotesLayer;

    fromJSON(json: any): MapNotesLayer;
  }

  export const MapNotesLayer: MapNotesLayerConstructor;

  interface MapNotesLayerProperties extends LayerProperties, PortalLayerProperties {

  }

  interface OpenStreetMapLayer extends WebTileLayer {
    on(name: "layerview-create", eventHandler: OpenStreetMapLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: OpenStreetMapLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: OpenStreetMapLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: OpenStreetMapLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface OpenStreetMapLayerConstructor {
    new(properties?: OpenStreetMapLayerProperties): OpenStreetMapLayer;

    fromJSON(json: any): OpenStreetMapLayer;
  }

  export const OpenStreetMapLayer: OpenStreetMapLayerConstructor;

  interface OpenStreetMapLayerProperties extends WebTileLayerProperties {

  }

  interface PointCloudLayer extends Layer, SceneService, PortalLayer {
    elevationInfo: PointCloudLayerElevationInfo;
    fields: Field[];
    renderer: PointCloudRenderer;

    on(name: "layerview-create", eventHandler: PointCloudLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: PointCloudLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: PointCloudLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: PointCloudLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface PointCloudLayerConstructor {
    new(properties?: PointCloudLayerProperties): PointCloudLayer;

    fromJSON(json: any): PointCloudLayer;
  }

  export const PointCloudLayer: PointCloudLayerConstructor;

  interface PointCloudLayerProperties extends LayerProperties, SceneServiceProperties, PortalLayerProperties {
    elevationInfo?: PointCloudLayerElevationInfo;
    fields?: FieldProperties[];
    renderer?: PointCloudRendererProperties;
  }

  interface SceneLayer extends Layer, SceneService, PortalLayer {
    definitionExpression: string;
    elevationInfo: SceneLayerElevationInfo;
    featureReduction: SceneLayerFeatureReduction;
    fields: Field[];
    geometryType: string;
    labelingInfo: LabelClass[];
    labelsVisible: boolean;
    legendEnabled: boolean;
    objectIdField: string;
    popupEnabled: boolean;
    popupTemplate: PopupTemplate;
    renderer: Renderer;
    screenSizePerspectiveEnabled: boolean;

    createQuery(): Query;
    getFieldUsageInfo(fieldName: string): any;
    queryExtent(params?: Query): IPromise<any>;
    queryFeatureCount(params?: Query): IPromise<any>;
    queryFeatures(params?: Query): IPromise<any>;
    queryObjectIds(params?: Query): IPromise<any>;

    on(name: "layerview-create", eventHandler: SceneLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: SceneLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: SceneLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: SceneLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface SceneLayerConstructor {
    new(properties?: SceneLayerProperties): SceneLayer;

    fromJSON(json: any): SceneLayer;
  }

  export const SceneLayer: SceneLayerConstructor;

  interface SceneLayerProperties extends LayerProperties, SceneServiceProperties, PortalLayerProperties {
    definitionExpression?: string;
    elevationInfo?: SceneLayerElevationInfo;
    featureReduction?: SceneLayerFeatureReduction;
    fields?: FieldProperties[];
    geometryType?: string;
    labelingInfo?: LabelClassProperties[];
    labelsVisible?: boolean;
    legendEnabled?: boolean;
    objectIdField?: string;
    popupEnabled?: boolean;
    popupTemplate?: PopupTemplateProperties;
    renderer?: RendererProperties;
    screenSizePerspectiveEnabled?: boolean;
  }

  interface StreamLayer extends FeatureLayer {
    filter: StreamLayerFilter;
    geometryDefinition: Extent;
    maximumTrackPoints: number;
    purgeOptions: StreamLayerPurgeOptions;

    updateFilter(filterChanges: StreamLayerUpdateFilterFilterChanges): IPromise<any>;

    on(name: "layerview-create", eventHandler: StreamLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: StreamLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: StreamLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: StreamLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface StreamLayerConstructor {
    new(properties?: StreamLayerProperties): StreamLayer;

    fromJSON(json: any): StreamLayer;
  }

  export const StreamLayer: StreamLayerConstructor;

  interface StreamLayerProperties extends FeatureLayerProperties {
    filter?: StreamLayerFilter;
    geometryDefinition?: ExtentProperties;
    maximumTrackPoints?: number;
    purgeOptions?: StreamLayerPurgeOptions;
  }

  interface TileLayer extends Layer, ArcGISMapService, ArcGISCachedService, PortalLayer, TiledLayer {
    attributionDataUrl: string;
    hasAttributionData: boolean;
    legendEnabled: boolean;
    tileServers: string[];
    url: string;

    fetchTile(level: number, row: number, column: number, options?: TileLayerFetchTileOptions): IPromise<any>;
    getTileUrl(level: number, row: number, col: number): string;

    on(name: "layerview-create", eventHandler: TileLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: TileLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: TileLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: TileLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface TileLayerConstructor {
    new(properties?: TileLayerProperties): TileLayer;

    fromJSON(json: any): TileLayer;
  }

  export const TileLayer: TileLayerConstructor;

  interface TileLayerProperties extends LayerProperties, ArcGISMapServiceProperties, ArcGISCachedServiceProperties, PortalLayerProperties, TiledLayerProperties {
    attributionDataUrl?: string;
    hasAttributionData?: boolean;
    legendEnabled?: boolean;
    tileServers?: string[];
    url?: string;
  }

  interface UnknownLayer extends Layer {
    on(name: "layerview-create", eventHandler: UnknownLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: UnknownLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: UnknownLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: UnknownLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface UnknownLayerConstructor {
    new(properties?: UnknownLayerProperties): UnknownLayer;
  }

  export const UnknownLayer: UnknownLayerConstructor;

  interface UnknownLayerProperties extends LayerProperties {

  }

  interface UnsupportedLayer extends Layer {
    on(name: "layerview-create", eventHandler: UnsupportedLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: UnsupportedLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: UnsupportedLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: UnsupportedLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface UnsupportedLayerConstructor {
    new(properties?: UnsupportedLayerProperties): UnsupportedLayer;
  }

  export const UnsupportedLayer: UnsupportedLayerConstructor;

  interface UnsupportedLayerProperties extends LayerProperties {

  }

  interface VectorTileLayer extends Layer, PortalLayer, ScaleRangeLayer, TiledLayer {
    attributionDataUrl: string;
    currentStyleInfo: VectorTileLayerCurrentStyleInfo;
    spatialReference: SpatialReference;
    token: string;
    url: string;

    loadStyle(style: string | any): IPromise<any>;

    on(name: "layerview-create", eventHandler: VectorTileLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: VectorTileLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: VectorTileLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: VectorTileLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface VectorTileLayerConstructor {
    new(properties?: VectorTileLayerProperties): VectorTileLayer;

    fromJSON(json: any): VectorTileLayer;
  }

  export const VectorTileLayer: VectorTileLayerConstructor;

  interface VectorTileLayerProperties extends LayerProperties, PortalLayerProperties, ScaleRangeLayerProperties, TiledLayerProperties {
    attributionDataUrl?: string;
    currentStyleInfo?: VectorTileLayerCurrentStyleInfo;
    spatialReference?: SpatialReferenceProperties;
    token?: string;
    url?: string | any;
  }

  interface WebTileLayer extends Layer, TiledLayer, ScaleRangeLayer {
    copyright: string;
    spatialReference: SpatialReference;
    subDomains: string[];
    tileServers: string[];
    urlTemplate: string;

    on(name: "layerview-create", eventHandler: WebTileLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: WebTileLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: WebTileLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: WebTileLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface WebTileLayerConstructor {
    new(properties?: WebTileLayerProperties): WebTileLayer;

    fromJSON(json: any): WebTileLayer;
  }

  export const WebTileLayer: WebTileLayerConstructor;

  interface WebTileLayerProperties extends LayerProperties, TiledLayerProperties, ScaleRangeLayerProperties {
    copyright?: string;
    spatialReference?: SpatialReferenceProperties;
    subDomains?: string[];
    tileServers?: string[];
    urlTemplate?: string;
  }

  interface WMSLayer extends Layer, PortalLayer {
    copyright: string;
    customLayerParameters: any;
    customParameters: any;
    description: string;
    featureInfoFormat: string;
    featureInfoUrl: string;
    fullExtents: Extent[];
    imageFormat: string;
    imageMaxHeight: number;
    imageMaxWidth: number;
    imageTransparency: boolean;
    spatialReference: SpatialReference;
    spatialReferences: number[];
    sublayers: Collection;
    version: string;

    fetchImage(extent: Extent, width: number, height: number, options?: WMSLayerFetchImageOptions): IPromise<any>;
    findSublayerById(id: number): WMSSublayer;

    on(name: "layerview-create", eventHandler: WMSLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: WMSLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: WMSLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: WMSLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface WMSLayerConstructor {
    new(properties?: WMSLayerProperties): WMSLayer;

    fromJSON(json: any): WMSLayer;
  }

  export const WMSLayer: WMSLayerConstructor;

  interface WMSLayerProperties extends LayerProperties, PortalLayerProperties {
    copyright?: string;
    customLayerParameters?: any;
    customParameters?: any;
    description?: string;
    featureInfoFormat?: string;
    featureInfoUrl?: string;
    fullExtents?: ExtentProperties[];
    imageFormat?: string;
    imageMaxHeight?: number;
    imageMaxWidth?: number;
    imageTransparency?: boolean;
    spatialReference?: SpatialReferenceProperties;
    spatialReferences?: number[];
    sublayers?: Collection | any[];
    version?: string;
  }

  interface WMTSLayer extends Layer, PortalLayer {
    activeLayer: WMTSSublayer;
    copyright: string;
    customLayerParameters: any;
    customParameters: any;
    serviceMode: string;
    sublayers: Collection;
    url: string;
    version: string;

    findSublayerById(id: string): WMTSSublayer;

    on(name: "layerview-create", eventHandler: WMTSLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: WMTSLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: WMTSLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: WMTSLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface WMTSLayerConstructor {
    new(properties?: WMTSLayerProperties): WMTSLayer;

    fromJSON(json: any): WMTSLayer;
  }

  export const WMTSLayer: WMTSLayerConstructor;

  interface WMTSLayerProperties extends LayerProperties, PortalLayerProperties {
    activeLayer?: WMTSSublayerProperties;
    copyright?: string;
    customLayerParameters?: any;
    customParameters?: any;
    serviceMode?: string;
    sublayers?: Collection | any[];
    url?: string;
    version?: string;
  }

  interface BaseDynamicLayer extends Layer {
    addResolvingPromise(promiseToLoad: IPromise<any>): IPromise<any>;
    fetchImage(extent: Extent, width: number, height: number, options?: BaseDynamicLayerFetchImageOptions): IPromise<any>;
    getImageUrl(extent: Extent, width: number, height: number): IPromise<any> | string;

    on(name: "layerview-create", eventHandler: BaseDynamicLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: BaseDynamicLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: BaseDynamicLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: BaseDynamicLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface BaseDynamicLayerConstructor {
    new(properties?: BaseDynamicLayerProperties): BaseDynamicLayer;
  }

  export const BaseDynamicLayer: BaseDynamicLayerConstructor;

  interface BaseDynamicLayerProperties extends LayerProperties {

  }

  interface BaseTileLayer extends Layer {
    spatialReference: SpatialReference;
    tileInfo: TileInfo;

    addResolvingPromise(promiseToLoad: IPromise<any>): IPromise<any>;
    fetchTile(level: number, row: number, column: number, options?: BaseTileLayerFetchTileOptions): IPromise<any>;
    getTileBounds(level: number, row: number, column: number, out?: number[]): number[];
    getTileUrl(level: number, row: number, column: number): string | IPromise<any>;

    on(name: "layerview-create", eventHandler: BaseTileLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: BaseTileLayerLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: BaseTileLayerLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: BaseTileLayerLayerviewDestroyEventHandler): IHandle;
  }

  interface BaseTileLayerConstructor {
    new(properties?: BaseTileLayerProperties): BaseTileLayer;
  }

  export const BaseTileLayer: BaseTileLayerConstructor;

  interface BaseTileLayerProperties extends LayerProperties {
    spatialReference?: SpatialReferenceProperties;
    tileInfo?: TileInfoProperties;
  }

  interface CodedValueDomain extends Domain {
    codedValues: CodedValueDomainCodedValues[];

    getName(code: string | number): string;
  }

  interface CodedValueDomainConstructor {
    new(properties?: CodedValueDomainProperties): CodedValueDomain;

    fromJSON(json: any): CodedValueDomain;
  }

  export const CodedValueDomain: CodedValueDomainConstructor;

  interface CodedValueDomainProperties extends DomainProperties {
    codedValues?: CodedValueDomainCodedValues[];
  }

  interface DimensionalDefinition {
    dimensionName: string;
    isSlice: boolean;
    values: any[];
    variableName: string;

    toJSON(): any;
  }

  interface DimensionalDefinitionConstructor {
    new(properties?: any): DimensionalDefinition;
  }

  export const DimensionalDefinition: DimensionalDefinitionConstructor;

  interface Domain extends Accessor, JSONSupport {
    name: string;
    type: string;
  }

  interface DomainConstructor {
    new(properties?: DomainProperties): Domain;

    fromJSON(json: any): Domain;
  }

  export const Domain: DomainConstructor;

  interface DomainProperties {
    name?: string;
    type?: string;
  }

  interface Field extends Accessor, JSONSupport {
    alias: string;
    domain: Domain;
    editable: boolean;
    length: number;
    name: string;
    nullable: boolean;
    type: string;
  }

  interface FieldConstructor {
    new(properties?: FieldProperties): Field;

    fromJSON(json: any): Field;
  }

  export const Field: FieldConstructor;

  interface FieldProperties {
    alias?: string;
    domain?: DomainProperties;
    editable?: boolean;
    length?: number;
    name?: string;
    nullable?: boolean;
    type?: string;
  }

  interface FeatureTemplate extends Accessor, JSONSupport {
    description: string;
    drawingTool: string;
    name: string;
    prototype: any;
    thumbnail: FeatureTemplateThumbnail;
  }

  interface FeatureTemplateConstructor {
    new(properties?: FeatureTemplateProperties): FeatureTemplate;

    fromJSON(json: any): FeatureTemplate;
  }

  export const FeatureTemplate: FeatureTemplateConstructor;

  interface FeatureTemplateProperties {
    description?: string;
    drawingTool?: string;
    name?: string;
    prototype?: any;
    thumbnail?: FeatureTemplateThumbnail;
  }

  interface FeatureType extends Accessor, JSONSupport {
    domains: any;
    id: number | string;
    name: string;
    templates: FeatureTemplate[];
  }

  interface FeatureTypeConstructor {
    new(properties?: FeatureTypeProperties): FeatureType;

    fromJSON(json: any): FeatureType;
  }

  export const FeatureType: FeatureTypeConstructor;

  interface FeatureTypeProperties {
    domains?: any;
    id?: number | string;
    name?: string;
    templates?: FeatureTemplateProperties[];
  }

  interface ImageParameters extends Accessor {
    dpi: number;
    extent: Extent;
    format: string;
    height: number;
    imageSpatialReference: SpatialReference;
    layerDefinitions: string[];
    layerIds: number[];
    layerOption: string;
    transparent: boolean;
    width: number;

    toJSON(): any;
  }

  interface ImageParametersConstructor {
    new(properties?: ImageParametersProperties): ImageParameters;
  }

  export const ImageParameters: ImageParametersConstructor;

  interface ImageParametersProperties {
    dpi?: number;
    extent?: ExtentProperties;
    format?: string;
    height?: number;
    imageSpatialReference?: SpatialReferenceProperties;
    layerDefinitions?: string[];
    layerIds?: number[];
    layerOption?: string;
    transparent?: boolean;
    width?: number;
  }

  interface InheritedDomain extends Domain {
  }

  interface InheritedDomainConstructor {
    new(properties?: InheritedDomainProperties): InheritedDomain;

    fromJSON(json: any): InheritedDomain;
  }

  export const InheritedDomain: InheritedDomainConstructor;

  interface InheritedDomainProperties extends DomainProperties {

  }

  interface LabelClass extends Accessor, JSONSupport {
    labelExpression: string;
    labelExpressionInfo: LabelClassLabelExpressionInfo;
    labelPlacement: string;
    maxScale: number;
    minScale: number;
    symbol: TextSymbol | LabelSymbol3D;
    useCodedValues: boolean;
    where: string;

    clone(): this;
  }

  interface LabelClassConstructor {
    new(properties?: LabelClassProperties): LabelClass;

    fromJSON(json: any): LabelClass;
  }

  export const LabelClass: LabelClassConstructor;

  interface LabelClassProperties {
    labelExpression?: string;
    labelExpressionInfo?: LabelClassLabelExpressionInfo;
    labelPlacement?: string;
    maxScale?: number;
    minScale?: number;
    symbol?: TextSymbol | LabelSymbol3D;
    useCodedValues?: boolean;
    where?: string;
  }

  interface LOD extends Accessor, JSONSupport {
    level: number;
    levelValue: string;
    resolution: number;
    scale: number;
  }

  interface LODConstructor {
    new(properties?: LODProperties): LOD;

    fromJSON(json: any): LOD;
  }

  export const LOD: LODConstructor;

  interface LODProperties {
    level?: number;
    levelValue?: string;
    resolution?: number;
    scale?: number;
  }

  interface MapImage extends Accessor, JSONSupport {
    extent: Extent;
    height: number;
    href: number;
    opacity: number;
    scale: number;
    visible: boolean;
    width: number;
  }

  interface MapImageConstructor {
    new(properties?: MapImageProperties): MapImage;

    fromJSON(json: any): MapImage;
  }

  export const MapImage: MapImageConstructor;

  interface MapImageProperties {
    extent?: ExtentProperties;
    height?: number;
    href?: number;
    opacity?: number;
    scale?: number;
    visible?: boolean;
    width?: number;
  }

  interface MosaicRule extends Accessor, JSONSupport {
    ascending: boolean;
    lockRasterIds: number[];
    method: string;
    multidimensionalDefinition: DimensionalDefinition[];
    objectIds: number[];
    operation: string;
    sortField: string;
    sortValue: string;
    viewpoint: Point;
    where: string;
  }

  interface MosaicRuleConstructor {
    new(properties?: MosaicRuleProperties): MosaicRule;

    fromJSON(json: any): MosaicRule;
  }

  export const MosaicRule: MosaicRuleConstructor;

  interface MosaicRuleProperties {
    ascending?: boolean;
    lockRasterIds?: number[];
    method?: string;
    multidimensionalDefinition?: DimensionalDefinition[];
    objectIds?: number[];
    operation?: string;
    sortField?: string;
    sortValue?: string;
    viewpoint?: PointProperties;
    where?: string;
  }

  interface PixelBlock extends Accessor {
    height: number;
    mask: number[];
    pixels: number[][];
    pixelType: string;
    statistics: PixelBlockStatistics[];
    width: number;

    addData(planeData: PixelBlockAddDataPlaneData): void;
    getAsRGBA(): number[];
    getAsRGBAFloat(): number[];
    getPlaneCount(): number;
  }

  interface PixelBlockConstructor {
    new(properties?: PixelBlockProperties): PixelBlock;
  }

  export const PixelBlock: PixelBlockConstructor;

  interface PixelBlockProperties {
    height?: number;
    mask?: number[];
    pixels?: number[][];
    pixelType?: string;
    statistics?: PixelBlockStatistics[];
    width?: number;
  }

  interface RangeDomain extends Domain {
    maxValue: number;
    minValue: number;
  }

  interface RangeDomainConstructor {
    new(properties?: RangeDomainProperties): RangeDomain;

    fromJSON(json: any): RangeDomain;
  }

  export const RangeDomain: RangeDomainConstructor;

  interface RangeDomainProperties extends DomainProperties {
    maxValue?: number;
    minValue?: number;
  }

  interface RasterFunction extends Accessor, JSONSupport {
    functionArguments: any;
    functionName: string;
    outputPixelType: string;
    variableName: any;
  }

  interface RasterFunctionConstructor {
    new(properties?: RasterFunctionProperties): RasterFunction;

    fromJSON(json: any): RasterFunction;
  }

  export const RasterFunction: RasterFunctionConstructor;

  interface RasterFunctionProperties {
    functionArguments?: any;
    functionName?: string;
    outputPixelType?: string;
    variableName?: any;
  }

  interface Sublayer extends Accessor {
    definitionExpression: string;
    id: number;
    labelingInfo: LabelClass[];
    labelsVisible: boolean;
    layer: MapImageLayer;
    legendEnabled: boolean;
    maxScale: number;
    minScale: number;
    opacity: number;
    popupTemplate: PopupTemplate;
    renderer: Renderer;
    source: any | any;
    sublayers: Collection;
    title: string;
    url: string;
    visible: boolean;

    clone(): this;
    createQuery(): Query;
    queryFeatures(params?: Query): IPromise<any>;
  }

  interface SublayerConstructor {
    new(properties?: SublayerProperties): Sublayer;
  }

  export const Sublayer: SublayerConstructor;

  interface SublayerProperties {
    definitionExpression?: string;
    id?: number;
    labelingInfo?: LabelClassProperties[];
    labelsVisible?: boolean;
    layer?: MapImageLayerProperties;
    legendEnabled?: boolean;
    maxScale?: number;
    minScale?: number;
    opacity?: number;
    popupTemplate?: PopupTemplateProperties;
    renderer?: RendererProperties;
    source?: any | any;
    sublayers?: Collection | any[];
    title?: string;
    url?: string;
    visible?: boolean;
  }

  interface TileInfo extends Accessor, JSONSupport {
    dpi: number;
    format: string;
    lods: LOD[];
    origin: Point;
    size: number[];
    spatialReference: SpatialReference;
  }

  interface TileInfoConstructor {
    new(properties?: TileInfoProperties): TileInfo;

    fromJSON(json: any): TileInfo;
  }

  export const TileInfo: TileInfoConstructor;

  interface TileInfoProperties {
    dpi?: number;
    format?: string;
    lods?: LODProperties[];
    origin?: PointProperties;
    size?: number[];
    spatialReference?: SpatialReferenceProperties;
  }

  interface TileMatrixSet extends Accessor, JSONSupport {
    fullExtent: Extent;
    id: string;
    tileInfo: TileInfo;

    clone(): this;
  }

  interface TileMatrixSetConstructor {
    new(properties?: TileMatrixSetProperties): TileMatrixSet;

    fromJSON(json: any): TileMatrixSet;
  }

  export const TileMatrixSet: TileMatrixSetConstructor;

  interface TileMatrixSetProperties {
    fullExtent?: ExtentProperties;
    id?: string;
    tileInfo?: TileInfoProperties;
  }

  interface WMSSublayer {
    description: string;
    fullExtent: Extent;
    id: number;
    layer: WMSLayer;
    name: string;
    popupEnabled: boolean;
    spatialReferences: number[];
    sublayers: Collection;
    title: string;
    visible: boolean;

    clone(): this;
  }

  interface WMSSublayerConstructor {
    new(properties?: any): WMSSublayer;
  }

  export const WMSSublayer: WMSSublayerConstructor;

  interface WMTSStyle extends Accessor, JSONSupport {
    description: string;
    id: string;
    legendUrl: string;
    title: string;

    clone(): this;
  }

  interface WMTSStyleConstructor {
    new(properties?: WMTSStyleProperties): WMTSStyle;

    fromJSON(json: any): WMTSStyle;
  }

  export const WMTSStyle: WMTSStyleConstructor;

  interface WMTSStyleProperties {
    description?: string;
    id?: string;
    legendUrl?: string;
    title?: string;
  }

  interface WMTSSublayer extends Accessor, JSONSupport {
    description: string;
    fullExtent: Extent;
    id: string;
    imageFormat: string;
    imageFormats: string[];
    layer: WMTSLayer;
    styleId: string;
    styles: Collection;
    tileMatrixSetId: string;
    tileMatrixSets: Collection;
    title: string;

    clone(): this;
  }

  interface WMTSSublayerConstructor {
    new(properties?: WMTSSublayerProperties): WMTSSublayer;

    fromJSON(json: any): WMTSSublayer;
  }

  export const WMTSSublayer: WMTSSublayerConstructor;

  interface WMTSSublayerProperties {
    description?: string;
    fullExtent?: ExtentProperties;
    id?: string;
    imageFormat?: string;
    imageFormats?: string[];
    layer?: WMTSLayerProperties;
    styleId?: string;
    styles?: Collection | any[];
    tileMatrixSetId?: string;
    tileMatrixSets?: Collection | any[];
    title?: string;
  }

  interface Portal extends Accessor, Loadable {
    access: string;
    allSSL: boolean;
    authMode: string;
    authorizedCrossOriginDomains: string[];
    basemapGalleryGroupQuery: string;
    bingKey: string;
    canListApps: boolean;
    canListData: boolean;
    canListPreProvisionedItems: boolean;
    canProvisionDirectPurchase: boolean;
    canSearchPublic: boolean;
    canShareBingPublic: boolean;
    canSharePublic: boolean;
    canSignInArcGIS: boolean;
    canSignInIDP: boolean;
    colorSetsGroupQuery: string;
    commentsEnabled: boolean;
    created: Date;
    culture: string;
    customBaseUrl: string;
    defaultBasemap: Basemap;
    defaultExtent: Extent;
    defaultVectorBasemap: Basemap;
    description: string;
    featuredGroups: PortalFeaturedGroups[];
    featuredItemsGroupQuery: string;
    galleryTemplatesGroupQuery: string;
    helperServices: any;
    homePageFeaturedContent: string;
    homePageFeaturedContentCount: number;
    httpPort: number;
    httpsPort: number;
    id: string;
    ipCntryCode: string;
    isOrganization: boolean;
    isPortal: boolean;
    layerTemplatesGroupQuery: string;
    loaded: boolean;
    maxTokenExpirationMinutes: number;
    modified: Date;
    name: string;
    portalHostname: string;
    portalMode: string;
    portalProperties: any;
    region: string;
    restUrl: string;
    rotatorPanels: any[];
    showHomePageDescription: boolean;
    supportsHostedServices: boolean;
    symbolSetsGroupQuery: string;
    templatesGroupQuery: string;
    thumbnailUrl: string;
    units: string;
    url: string;
    urlKey: string;
    user: PortalUser;
    useStandardizedQuery: boolean;
    useVectorBasemaps: boolean;
    vectorBasemapGalleryGroupQuery: string;

    fetchBasemaps(): IPromise<any>;
    fetchFeaturedGroups(): IPromise<any>;
    queryGroups(queryParams: PortalQueryParams): IPromise<any>;
    queryItems(queryParams: PortalQueryParams): IPromise<any>;
    queryUsers(queryParams: PortalQueryParams): IPromise<any>;
  }

  interface PortalConstructor {
    new(properties?: PortalProperties): Portal;


    getDefault(): Portal;
  }

  export const Portal: PortalConstructor;

  interface PortalProperties extends LoadableProperties {
    access?: string;
    allSSL?: boolean;
    authMode?: string;
    authorizedCrossOriginDomains?: string[];
    basemapGalleryGroupQuery?: string;
    bingKey?: string;
    canListApps?: boolean;
    canListData?: boolean;
    canListPreProvisionedItems?: boolean;
    canProvisionDirectPurchase?: boolean;
    canSearchPublic?: boolean;
    canShareBingPublic?: boolean;
    canSharePublic?: boolean;
    canSignInArcGIS?: boolean;
    canSignInIDP?: boolean;
    colorSetsGroupQuery?: string;
    commentsEnabled?: boolean;
    created?: Date;
    culture?: string;
    customBaseUrl?: string;
    defaultBasemap?: BasemapProperties;
    defaultExtent?: ExtentProperties;
    defaultVectorBasemap?: BasemapProperties;
    description?: string;
    featuredGroups?: PortalFeaturedGroups[];
    featuredItemsGroupQuery?: string;
    galleryTemplatesGroupQuery?: string;
    helperServices?: any;
    homePageFeaturedContent?: string;
    homePageFeaturedContentCount?: number;
    httpPort?: number;
    httpsPort?: number;
    id?: string;
    ipCntryCode?: string;
    isOrganization?: boolean;
    isPortal?: boolean;
    layerTemplatesGroupQuery?: string;
    loaded?: boolean;
    maxTokenExpirationMinutes?: number;
    modified?: Date;
    name?: string;
    portalHostname?: string;
    portalMode?: string;
    portalProperties?: any;
    region?: string;
    restUrl?: string;
    rotatorPanels?: any[];
    showHomePageDescription?: boolean;
    supportsHostedServices?: boolean;
    symbolSetsGroupQuery?: string;
    templatesGroupQuery?: string;
    thumbnailUrl?: string;
    units?: string;
    url?: string;
    urlKey?: string;
    user?: PortalUserProperties;
    useStandardizedQuery?: boolean;
    useVectorBasemaps?: boolean;
    vectorBasemapGalleryGroupQuery?: string;
  }

  interface PortalFolder extends Accessor {
    created: Date;
    id: string;
    portal: Portal;
    title: string;
    url: string;
  }

  interface PortalFolderConstructor {
    new(properties?: PortalFolderProperties): PortalFolder;
  }

  export const PortalFolder: PortalFolderConstructor;

  interface PortalFolderProperties {
    created?: Date;
    id?: string;
    portal?: PortalProperties;
    title?: string;
    url?: string;
  }

  interface PortalGroup extends Accessor {
    access: string;
    created: Date;
    description: string;
    id: string;
    isInvitationOnly: boolean;
    modified: Date;
    owner: string;
    portal: Portal;
    snippet: string;
    tags: string[];
    thumbnailUrl: string;
    title: string;
    url: string;

    fetchMembers(): IPromise<any>;
    getThumbnailUrl(width?: number): string;
    queryItems(queryParams?: PortalQueryParams): IPromise<any>;
  }

  interface PortalGroupConstructor {
    new(properties?: PortalGroupProperties): PortalGroup;
  }

  export const PortalGroup: PortalGroupConstructor;

  interface PortalGroupProperties {
    access?: string;
    created?: Date;
    description?: string;
    id?: string;
    isInvitationOnly?: boolean;
    modified?: Date;
    owner?: string;
    portal?: PortalProperties;
    snippet?: string;
    tags?: string[];
    thumbnailUrl?: string;
    title?: string;
    url?: string;
  }

  interface PortalItem extends Accessor, Loadable, JSONSupport {
    access: string;
    accessInformation: string;
    avgRating: number;
    created: Date;
    culture: string;
    description: string;
    extent: Extent;
    id: string;
    isLayer: boolean;
    itemControl: string;
    itemUrl: string;
    licenseInfo: string;
    loaded: boolean;
    modified: Date;
    name: string;
    numComments: number;
    numRatings: number;
    numViews: number;
    owner: string;
    portal: Portal;
    size: number;
    snippet: string;
    tags: string[];
    thumbnailUrl: string;
    title: string;
    type: string;
    typeKeywords: string[];
    url: string;

    addRating(rating: number | PortalRating): IPromise<any>;
    deleteRating(): IPromise<any>;
    fetchData(responseType?: string): IPromise<any>;
    fetchRating(): IPromise<any>;
    fetchRelatedItems(params: PortalItemFetchRelatedItemsParams): IPromise<any>;
    getThumbnailUrl(width?: number): string;
    update(params?: PortalItemUpdateParams): IPromise<any>;
  }

  interface PortalItemConstructor {
    new(properties?: PortalItemProperties): PortalItem;

    fromJSON(json: any): PortalItem;
  }

  export const PortalItem: PortalItemConstructor;

  interface PortalItemProperties extends LoadableProperties {
    access?: string;
    accessInformation?: string;
    avgRating?: number;
    created?: Date;
    culture?: string;
    description?: string;
    extent?: ExtentProperties;
    id?: string;
    isLayer?: boolean;
    itemControl?: string;
    itemUrl?: string;
    licenseInfo?: string;
    loaded?: boolean;
    modified?: Date;
    name?: string;
    numComments?: number;
    numRatings?: number;
    numViews?: number;
    owner?: string;
    portal?: PortalProperties;
    size?: number;
    snippet?: string;
    tags?: string[];
    thumbnailUrl?: string;
    title?: string;
    type?: string;
    typeKeywords?: string[];
    url?: string;
  }

  interface PortalRating extends Accessor {
    created: Date;
    rating: number;
  }

  interface PortalRatingConstructor {
    new(properties?: PortalRatingProperties): PortalRating;
  }

  export const PortalRating: PortalRatingConstructor;

  interface PortalRatingProperties {
    created?: Date;
    rating?: number;
  }

  interface PortalQueryParams extends Accessor {
    extent: Extent;
    num: number;
    query: string;
    sortField: string;
    sortOrder: string;
    start: number;

    clone(): this;
  }

  interface PortalQueryParamsConstructor {
    new(properties?: PortalQueryParamsProperties): PortalQueryParams;
  }

  export const PortalQueryParams: PortalQueryParamsConstructor;

  interface PortalQueryParamsProperties {
    extent?: ExtentProperties;
    num?: number;
    query?: string;
    sortField?: string;
    sortOrder?: string;
    start?: number;
  }

  interface PortalQueryResult extends Accessor {
    nextQueryParams: PortalQueryParams;
    queryParams: PortalQueryParams;
    results: any[];
    total: number;
  }

  interface PortalQueryResultConstructor {
    new(properties?: PortalQueryResultProperties): PortalQueryResult;
  }

  export const PortalQueryResult: PortalQueryResultConstructor;

  interface PortalQueryResultProperties {
    nextQueryParams?: PortalQueryParamsProperties;
    queryParams?: PortalQueryParamsProperties;
    results?: any[];
    total?: number;
  }

  interface PortalUser extends Accessor {
    access: string;
    created: Date;
    culture: string;
    description: string;
    email: string;
    fullName: string;
    modified: Date;
    orgId: string;
    portal: Portal;
    preferredView: string;
    region: string;
    role: string;
    roleId: string;
    thumbnailUrl: string;
    units: string;
    userContentUrl: string;
    username: string;

    addItem(params: PortalUserAddItemParams): IPromise<any>;
    deleteItem(item: PortalItem): IPromise<any>;
    fetchFolders(): IPromise<any>;
    fetchGroups(): IPromise<any>;
    fetchItems(params: PortalUserFetchItemsParams): IPromise<any>;
    getThumbnailUrl(width?: number): string;
    queryFavorites(queryParams?: PortalQueryParams): IPromise<any>;
  }

  interface PortalUserConstructor {
    new(properties?: PortalUserProperties): PortalUser;
  }

  export const PortalUser: PortalUserConstructor;

  interface PortalUserProperties {
    access?: string;
    created?: Date;
    culture?: string;
    description?: string;
    email?: string;
    fullName?: string;
    modified?: Date;
    orgId?: string;
    portal?: PortalProperties;
    preferredView?: string;
    region?: string;
    role?: string;
    roleId?: string;
    thumbnailUrl?: string;
    units?: string;
    userContentUrl?: string;
    username?: string;
  }

  interface ClassBreaksRenderer extends Renderer, VisualVariablesMixin {
    backgroundFillSymbol: FillSymbol;
    classBreakInfos: ClassBreaksRendererClassBreakInfos[];
    defaultSymbol: Symbol;
    field: string;
    isMaxInclusive: boolean;
    legendOptions: ClassBreaksRendererLegendOptions;
    normalizationField: string;
    normalizationTotal: number;
    normalizationType: string;
    type: string;
    valueExpression: string;
    valueExpressionTitle: string;

    addClassBreakInfo(min: number | any, max: number, symbol: Symbol): void;
    clone(): this;
    getClassBreakInfo(graphic: Graphic): any;
    removeClassBreakInfo(min: number, max: number): void;
  }

  interface ClassBreaksRendererConstructor {
    new(properties?: ClassBreaksRendererProperties): ClassBreaksRenderer;

    fromJSON(json: any): ClassBreaksRenderer;
  }

  export const ClassBreaksRenderer: ClassBreaksRendererConstructor;

  interface ClassBreaksRendererProperties extends RendererProperties, VisualVariablesMixinProperties {
    backgroundFillSymbol?: FillSymbolProperties;
    classBreakInfos?: ClassBreaksRendererClassBreakInfos[];
    defaultSymbol?: SymbolProperties;
    field?: string | Function;
    isMaxInclusive?: boolean;
    legendOptions?: ClassBreaksRendererLegendOptions;
    normalizationField?: string;
    normalizationTotal?: number;
    normalizationType?: string;
    type?: string;
    valueExpression?: string;
    valueExpressionTitle?: string;
  }

  interface Renderer extends Accessor, JSONSupport {
    authoringInfo: any;
  }

  interface RendererConstructor {
    new(properties?: RendererProperties): Renderer;

    fromJSON(json: any): Renderer;
  }

  export const Renderer: RendererConstructor;

  interface RendererProperties {
    authoringInfo?: any;
  }

  interface SimpleRenderer extends Renderer, VisualVariablesMixin {
    label: string;
    symbol: Symbol;
    type: string;

    clone(): this;
  }

  interface SimpleRendererConstructor {
    new(properties?: SimpleRendererProperties): SimpleRenderer;

    fromJSON(json: any): SimpleRenderer;
  }

  export const SimpleRenderer: SimpleRendererConstructor;

  interface SimpleRendererProperties extends RendererProperties, VisualVariablesMixinProperties {
    label?: string;
    symbol?: SymbolProperties;
    type?: string;
  }

  interface UniqueValueRenderer extends Renderer, VisualVariablesMixin {
    defaultLabel: string;
    defaultSymbol: Symbol;
    field: string;
    field2: string;
    field3: string;
    fieldDelimiter: string;
    legendOptions: UniqueValueRendererLegendOptions;
    type: string;
    uniqueValueInfos: UniqueValueRendererUniqueValueInfos[];
    valueExpression: string;
    valueExpressionTitle: string;

    addUniqueValueInfo(valueOrInfo: string | number | any, symbol?: Symbol): void;
    clone(): this;
    getUniqueValueInfo(graphic: Graphic): any;
    removeUniqueValueInfo(value: string): void;
  }

  interface UniqueValueRendererConstructor {
    new(properties?: UniqueValueRendererProperties): UniqueValueRenderer;

    fromJSON(json: any): UniqueValueRenderer;
  }

  export const UniqueValueRenderer: UniqueValueRendererConstructor;

  interface UniqueValueRendererProperties extends RendererProperties, VisualVariablesMixinProperties {
    defaultLabel?: string;
    defaultSymbol?: SymbolProperties;
    field?: string | Function;
    field2?: string;
    field3?: string;
    fieldDelimiter?: string;
    legendOptions?: UniqueValueRendererLegendOptions;
    type?: string;
    uniqueValueInfos?: UniqueValueRendererUniqueValueInfos[];
    valueExpression?: string;
    valueExpressionTitle?: string;
  }

  interface PointCloudRenderer extends Accessor, JSONSupport {
    colorModulation: PointCloudRendererColorModulation;
    pointSizeAlgorithm: PointCloudRendererPointSizeAlgorithm;
    pointsPerInch: number;

    clone(): this;
  }

  interface PointCloudRendererConstructor {
    new(properties?: PointCloudRendererProperties): PointCloudRenderer;

    fromJSON(json: any): PointCloudRenderer;
  }

  export const PointCloudRenderer: PointCloudRendererConstructor;

  interface PointCloudRendererProperties {
    colorModulation?: PointCloudRendererColorModulation;
    pointSizeAlgorithm?: PointCloudRendererPointSizeAlgorithm;
    pointsPerInch?: number;
  }

  interface PointCloudClassBreaksRenderer extends PointCloudRenderer {
    colorClassBreakInfos: PointCloudClassBreaksRendererColorClassBreakInfos[];
    field: string;
    fieldTransformType: string;
    type: string;
  }

  interface PointCloudClassBreaksRendererConstructor {
    new(properties?: PointCloudClassBreaksRendererProperties): PointCloudClassBreaksRenderer;

    fromJSON(json: any): PointCloudClassBreaksRenderer;
  }

  export const PointCloudClassBreaksRenderer: PointCloudClassBreaksRendererConstructor;

  interface PointCloudClassBreaksRendererProperties extends PointCloudRendererProperties {
    colorClassBreakInfos?: PointCloudClassBreaksRendererColorClassBreakInfos[];
    field?: string;
    fieldTransformType?: string;
    type?: string;
  }

  interface PointCloudRGBRenderer extends PointCloudRenderer {
    field: string;
    type: string;
  }

  interface PointCloudRGBRendererConstructor {
    new(properties?: PointCloudRGBRendererProperties): PointCloudRGBRenderer;

    fromJSON(json: any): PointCloudRGBRenderer;
  }

  export const PointCloudRGBRenderer: PointCloudRGBRendererConstructor;

  interface PointCloudRGBRendererProperties extends PointCloudRendererProperties {
    field?: string;
    type?: string;
  }

  interface PointCloudStretchRenderer extends PointCloudRenderer {
    field: string;
    fieldTransformType: string;
    stops: PointCloudStretchRendererStops[];
    type: string;
  }

  interface PointCloudStretchRendererConstructor {
    new(properties?: PointCloudStretchRendererProperties): PointCloudStretchRenderer;

    fromJSON(json: any): PointCloudStretchRenderer;
  }

  export const PointCloudStretchRenderer: PointCloudStretchRendererConstructor;

  interface PointCloudStretchRendererProperties extends PointCloudRendererProperties {
    field?: string;
    fieldTransformType?: string;
    stops?: PointCloudStretchRendererStops[];
    type?: string;
  }

  interface PointCloudUniqueValueRenderer extends PointCloudRenderer {
    colorUniqueValueInfos: PointCloudUniqueValueRendererColorUniqueValueInfos[];
    field: string;
    fieldTransformType: string;
    type: string;
  }

  interface PointCloudUniqueValueRendererConstructor {
    new(properties?: PointCloudUniqueValueRendererProperties): PointCloudUniqueValueRenderer;

    fromJSON(json: any): PointCloudUniqueValueRenderer;
  }

  export const PointCloudUniqueValueRenderer: PointCloudUniqueValueRendererConstructor;

  interface PointCloudUniqueValueRendererProperties extends PointCloudRendererProperties {
    colorUniqueValueInfos?: PointCloudUniqueValueRendererColorUniqueValueInfos[];
    field?: string;
    fieldTransformType?: string;
    type?: string;
  }

  interface Action extends Accessor {
    className: string;
    id: string;
    image: string;
    title: string;
    visible: boolean;

    clone(): this;
  }

  interface ActionConstructor {
    new(properties?: ActionProperties): Action;
  }

  export const Action: ActionConstructor;

  interface ActionProperties {
    className?: string;
    id?: string;
    image?: string;
    title?: string;
    visible?: boolean;
  }

  interface ExtrudeSymbol3DLayer extends Symbol3DLayer {
    size: number;

    clone(): this;
  }

  interface ExtrudeSymbol3DLayerConstructor {
    new(properties?: ExtrudeSymbol3DLayerProperties): ExtrudeSymbol3DLayer;

    fromJSON(json: any): ExtrudeSymbol3DLayer;
  }

  export const ExtrudeSymbol3DLayer: ExtrudeSymbol3DLayerConstructor;

  interface ExtrudeSymbol3DLayerProperties extends Symbol3DLayerProperties {
    size?: number;
  }

  interface FillSymbol extends Symbol {
    outline: SimpleLineSymbol;
  }

  interface FillSymbolConstructor {
    new(properties?: FillSymbolProperties): FillSymbol;

    fromJSON(json: any): FillSymbol;
  }

  export const FillSymbol: FillSymbolConstructor;

  interface FillSymbolProperties extends SymbolProperties {
    outline?: SimpleLineSymbolProperties;
  }

  interface FillSymbol3DLayer extends Symbol3DLayer {
    outline: FillSymbol3DLayerOutline;

    clone(): this;
  }

  interface FillSymbol3DLayerConstructor {
    new(properties?: FillSymbol3DLayerProperties): FillSymbol3DLayer;

    fromJSON(json: any): FillSymbol3DLayer;
  }

  export const FillSymbol3DLayer: FillSymbol3DLayerConstructor;

  interface FillSymbol3DLayerProperties extends Symbol3DLayerProperties {
    outline?: FillSymbol3DLayerOutline;
  }

  interface Font extends Accessor, JSONSupport {
    clone(): this;
  }

  interface FontConstructor {
    new(properties?: FontProperties): Font;

    fromJSON(json: any): Font;
  }

  export const Font: FontConstructor;

  interface FontProperties {

  }

  interface IconSymbol3DLayer extends Symbol3DLayer {
    anchor: string;
    outline: IconSymbol3DLayerOutline;
    resource: IconSymbol3DLayerResource;
    size: number;

    clone(): this;
  }

  interface IconSymbol3DLayerConstructor {
    new(properties?: IconSymbol3DLayerProperties): IconSymbol3DLayer;

    fromJSON(json: any): IconSymbol3DLayer;
  }

  export const IconSymbol3DLayer: IconSymbol3DLayerConstructor;

  interface IconSymbol3DLayerProperties extends Symbol3DLayerProperties {
    anchor?: string;
    outline?: IconSymbol3DLayerOutline;
    resource?: IconSymbol3DLayerResource;
    size?: number;
  }

  interface LabelSymbol3D extends Symbol3D {
    callout: Callout3D;
    verticalOffset: LabelSymbol3DVerticalOffset;

    clone(): this;
  }

  interface LabelSymbol3DConstructor {
    new(properties?: LabelSymbol3DProperties): LabelSymbol3D;

    fromJSON(json: any): LabelSymbol3D;
  }

  export const LabelSymbol3D: LabelSymbol3DConstructor;

  interface LabelSymbol3DProperties extends Symbol3DProperties {
    callout?: Callout3DProperties;
    verticalOffset?: LabelSymbol3DVerticalOffsetProperties;
  }

  interface LineSymbol extends Symbol {
    color: Color;
    width: number;
  }

  interface LineSymbolConstructor {
    new(properties?: LineSymbolProperties): LineSymbol;

    fromJSON(json: any): LineSymbol;
  }

  export const LineSymbol: LineSymbolConstructor;

  interface LineSymbolProperties extends SymbolProperties {
    color?: Color;
    width?: number;
  }

  interface LineSymbol3D extends Symbol3D {
    clone(): this;
  }

  interface LineSymbol3DConstructor {
    new(properties?: LineSymbol3DProperties): LineSymbol3D;

    fromJSON(json: any): LineSymbol3D;
  }

  export const LineSymbol3D: LineSymbol3DConstructor;

  interface LineSymbol3DProperties extends Symbol3DProperties {

  }

  interface LineSymbol3DLayer extends Symbol3DLayer {
    size: number;

    clone(): this;
  }

  interface LineSymbol3DLayerConstructor {
    new(properties?: LineSymbol3DLayerProperties): LineSymbol3DLayer;

    fromJSON(json: any): LineSymbol3DLayer;
  }

  export const LineSymbol3DLayer: LineSymbol3DLayerConstructor;

  interface LineSymbol3DLayerProperties extends Symbol3DLayerProperties {
    size?: number;
  }

  interface MarkerSymbol extends Symbol {
    angle: number;
    xoffset: number;
    yoffset: number;
  }

  interface MarkerSymbolConstructor {
    new(properties?: MarkerSymbolProperties): MarkerSymbol;

    fromJSON(json: any): MarkerSymbol;
  }

  export const MarkerSymbol: MarkerSymbolConstructor;

  interface MarkerSymbolProperties extends SymbolProperties {
    angle?: number;
    xoffset?: number;
    yoffset?: number;
  }

  interface MeshSymbol3D extends Symbol3D {
    clone(): this;
  }

  interface MeshSymbol3DConstructor {
    new(properties?: MeshSymbol3DProperties): MeshSymbol3D;

    fromJSON(json: any): MeshSymbol3D;
  }

  export const MeshSymbol3D: MeshSymbol3DConstructor;

  interface MeshSymbol3DProperties extends Symbol3DProperties {

  }

  interface ObjectSymbol3DLayer extends Symbol3DLayer {
    anchor: string;
    depth: number;
    heading: number;
    height: number;
    resource: ObjectSymbol3DLayerResource;
    roll: number;
    tilt: number;
    width: number;

    clone(): this;
  }

  interface ObjectSymbol3DLayerConstructor {
    new(properties?: ObjectSymbol3DLayerProperties): ObjectSymbol3DLayer;

    fromJSON(json: any): ObjectSymbol3DLayer;
  }

  export const ObjectSymbol3DLayer: ObjectSymbol3DLayerConstructor;

  interface ObjectSymbol3DLayerProperties extends Symbol3DLayerProperties {
    anchor?: string;
    depth?: number;
    heading?: number;
    height?: number;
    resource?: ObjectSymbol3DLayerResource;
    roll?: number;
    tilt?: number;
    width?: number;
  }

  interface PictureFillSymbol extends FillSymbol {
    height: number;
    url: string;
    width: number;
    xoffset: number;
    xscale: number;
    yoffset: number;
    yscale: number;

    clone(): this;
  }

  interface PictureFillSymbolConstructor {
    new(properties?: PictureFillSymbolProperties): PictureFillSymbol;

    fromJSON(json: any): PictureFillSymbol;
  }

  export const PictureFillSymbol: PictureFillSymbolConstructor;

  interface PictureFillSymbolProperties extends FillSymbolProperties {
    height?: number;
    url?: string;
    width?: number;
    xoffset?: number;
    xscale?: number;
    yoffset?: number;
    yscale?: number;
  }

  interface PictureMarkerSymbol extends MarkerSymbol {
    height: number;
    url: string;
    width: number;

    clone(): this;
  }

  interface PictureMarkerSymbolConstructor {
    new(properties?: PictureMarkerSymbolProperties): PictureMarkerSymbol;

    fromJSON(json: any): PictureMarkerSymbol;
  }

  export const PictureMarkerSymbol: PictureMarkerSymbolConstructor;

  interface PictureMarkerSymbolProperties extends MarkerSymbolProperties {
    height?: number;
    url?: string;
    width?: number;
  }

  interface PathSymbol3DLayer extends Symbol3DLayer {
    size: number;

    clone(): this;
  }

  interface PathSymbol3DLayerConstructor {
    new(properties?: PathSymbol3DLayerProperties): PathSymbol3DLayer;

    fromJSON(json: any): PathSymbol3DLayer;
  }

  export const PathSymbol3DLayer: PathSymbol3DLayerConstructor;

  interface PathSymbol3DLayerProperties extends Symbol3DLayerProperties {
    size?: number;
  }

  interface PointSymbol3D extends Symbol3D {
    callout: Callout3D;
    verticalOffset: PointSymbol3DVerticalOffset;

    clone(): this;
  }

  interface PointSymbol3DConstructor {
    new(properties?: PointSymbol3DProperties): PointSymbol3D;

    fromJSON(json: any): PointSymbol3D;
  }

  export const PointSymbol3D: PointSymbol3DConstructor;

  interface PointSymbol3DProperties extends Symbol3DProperties {
    callout?: Callout3DProperties;
    verticalOffset?: PointSymbol3DVerticalOffsetProperties;
  }

  interface PolygonSymbol3D extends Symbol3D {
    clone(): this;
  }

  interface PolygonSymbol3DConstructor {
    new(properties?: PolygonSymbol3DProperties): PolygonSymbol3D;

    fromJSON(json: any): PolygonSymbol3D;
  }

  export const PolygonSymbol3D: PolygonSymbol3DConstructor;

  interface PolygonSymbol3DProperties extends Symbol3DProperties {

  }

  interface SimpleFillSymbol extends FillSymbol {
    color: Color;
    style: string;

    clone(): this;
  }

  interface SimpleFillSymbolConstructor {
    new(properties?: SimpleFillSymbolProperties): SimpleFillSymbol;

    fromJSON(json: any): SimpleFillSymbol;
  }

  export const SimpleFillSymbol: SimpleFillSymbolConstructor;

  interface SimpleFillSymbolProperties extends FillSymbolProperties {
    color?: Color;
    style?: string;
  }

  interface SimpleLineSymbol extends LineSymbol {
    cap: string;
    join: string;
    miterLimit: number;
    style: string;

    clone(): this;
  }

  interface SimpleLineSymbolConstructor {
    new(properties?: SimpleLineSymbolProperties): SimpleLineSymbol;

    fromJSON(json: any): SimpleLineSymbol;
  }

  export const SimpleLineSymbol: SimpleLineSymbolConstructor;

  interface SimpleLineSymbolProperties extends LineSymbolProperties {
    cap?: string;
    join?: string;
    miterLimit?: number;
    style?: string;
  }

  interface SimpleMarkerSymbol extends MarkerSymbol {
    color: Color;
    outline: SimpleLineSymbol;
    path: string;
    size: number;
    style: string;

    clone(): this;
  }

  interface SimpleMarkerSymbolConstructor {
    new(properties?: SimpleMarkerSymbolProperties): SimpleMarkerSymbol;

    fromJSON(json: any): SimpleMarkerSymbol;
  }

  export const SimpleMarkerSymbol: SimpleMarkerSymbolConstructor;

  interface SimpleMarkerSymbolProperties extends MarkerSymbolProperties {
    color?: Color;
    outline?: SimpleLineSymbolProperties;
    path?: string;
    size?: number;
    style?: string;
  }

  interface Symbol extends Accessor, JSONSupport {
    type: string;
  }

  interface SymbolConstructor {
    new(properties?: SymbolProperties): Symbol;

    fromJSON(json: any): Symbol;
  }

  export const Symbol: SymbolConstructor;

  interface SymbolProperties {
    type?: string;
  }

  interface Symbol3D extends Symbol {
    styleOrigin: Symbol3DStyleOrigin;
    symbolLayers: Collection;
  }

  interface Symbol3DConstructor {
    new(properties?: Symbol3DProperties): Symbol3D;

    fromJSON(json: any): Symbol3D;
  }

  export const Symbol3D: Symbol3DConstructor;

  interface Symbol3DProperties extends SymbolProperties {
    styleOrigin?: Symbol3DStyleOrigin;
    symbolLayers?: Collection | any[];
  }

  interface Symbol3DLayer extends Accessor, JSONSupport {
    material: any;
    type: string;
  }

  interface Symbol3DLayerConstructor {
    new(properties?: Symbol3DLayerProperties): Symbol3DLayer;

    fromJSON(json: any): Symbol3DLayer;
  }

  export const Symbol3DLayer: Symbol3DLayerConstructor;

  interface Symbol3DLayerProperties {
    material?: any;
    type?: string;
  }

  interface TextSymbol extends Symbol {
    angle: number;
    backgroundColor: Color;
    borderLineColor: Color;
    borderLineSize: number;
    color: Color;
    font: Font;
    haloColor: Color;
    haloSize: number;
    horizontalAlignment: string;
    kerning: boolean;
    rotated: boolean;
    text: string;
    verticalAlignment: string;
    xoffset: number;
    yoffset: number;

    clone(): this;
  }

  interface TextSymbolConstructor {
    new(properties?: TextSymbolProperties): TextSymbol;

    fromJSON(json: any): TextSymbol;
  }

  export const TextSymbol: TextSymbolConstructor;

  interface TextSymbolProperties extends SymbolProperties {
    angle?: number;
    backgroundColor?: Color;
    borderLineColor?: Color;
    borderLineSize?: number;
    color?: Color;
    font?: FontProperties;
    haloColor?: Color;
    haloSize?: number;
    horizontalAlignment?: string;
    kerning?: boolean;
    rotated?: boolean;
    text?: string;
    verticalAlignment?: string;
    xoffset?: number;
    yoffset?: number;
  }

  interface TextSymbol3DLayer extends Symbol3DLayer {
    font: TextSymbol3DLayerFont;
    halo: TextSymbol3DLayerHalo;
    size: number;
    text: string;

    clone(): this;
  }

  interface TextSymbol3DLayerConstructor {
    new(properties?: TextSymbol3DLayerProperties): TextSymbol3DLayer;

    fromJSON(json: any): TextSymbol3DLayer;
  }

  export const TextSymbol3DLayer: TextSymbol3DLayerConstructor;

  interface TextSymbol3DLayerProperties extends Symbol3DLayerProperties {
    font?: TextSymbol3DLayerFont;
    halo?: TextSymbol3DLayerHalo;
    size?: number;
    text?: string;
  }

  interface WebStyleSymbol extends Symbol {
    name: string;
    portal: Portal;
    styleName: string;
    styleUrl: string;

    clone(): this;
    fetchSymbol(): IPromise<any>;
  }

  interface WebStyleSymbolConstructor {
    new(properties?: WebStyleSymbolProperties): WebStyleSymbol;

    fromJSON(json: any): WebStyleSymbol;
  }

  export const WebStyleSymbol: WebStyleSymbolConstructor;

  interface WebStyleSymbolProperties extends SymbolProperties {
    name?: string;
    portal?: PortalProperties;
    styleName?: string;
    styleUrl?: string;
  }

  interface Callout3D extends Accessor, JSONSupport {
    clone(): this;
  }

  interface Callout3DConstructor {
    new(properties?: Callout3DProperties): Callout3D;

    fromJSON(json: any): Callout3D;
  }

  export const Callout3D: Callout3DConstructor;

  interface Callout3DProperties {

  }

  interface LineCallout3D extends Callout3D {
    border: LineCallout3DBorder;
    color: Color;
    size: number;
    type: string;
  }

  interface LineCallout3DConstructor {
    new(properties?: LineCallout3DProperties): LineCallout3D;

    fromJSON(json: any): LineCallout3D;
  }

  export const LineCallout3D: LineCallout3DConstructor;

  interface LineCallout3DProperties extends Callout3DProperties {
    border?: LineCallout3DBorderProperties;
    color?: Color;
    size?: number;
    type?: string;
  }

  interface ClosestFacilityTask extends Task {
    solve(params: ClosestFacilityParameters, requestOptions?: any): IPromise<any>;
  }

  interface ClosestFacilityTaskConstructor {
    new(properties?: ClosestFacilityTaskProperties): ClosestFacilityTask;
  }

  export const ClosestFacilityTask: ClosestFacilityTaskConstructor;

  interface ClosestFacilityTaskProperties extends TaskProperties {

  }

  interface FindTask extends Task {
    gdbVersion: string;

    execute(params: FindParameters, requestOptions?: any): IPromise<any>;
  }

  interface FindTaskConstructor {
    new(properties?: FindTaskProperties): FindTask;
  }

  export const FindTask: FindTaskConstructor;

  interface FindTaskProperties extends TaskProperties {
    gdbVersion?: string;
  }

  interface GeometryService extends Task {
    areasAndLengths(areasAndLengthsParameters: AreasAndLengthsParameters, requestOptions?: any): IPromise<any>;
    autoComplete(polygons: Polygon[], polylines: Polyline[], requestOptions?: any): IPromise<any>;
    buffer(bufferParameters: BufferParameters, requestOptions?: any): IPromise<any>;
    convexHull(geometries: Geometry[], requestOptions?: any): IPromise<any>;
    cut(geometries: Geometry[], cutter: Polyline, requestOptions?: any): IPromise<any>;
    densify(densifyParameters: DensifyParameters, requestOptions?: any): IPromise<any>;
    difference(geometries: Geometry[], geometry: Geometry, requestOptions?: any): IPromise<any>;
    distance(params: DistanceParameters, requestOptions?: any): IPromise<any>;
    fromGeoCoordinateString(params: GeometryServiceFromGeoCoordinateStringParams, requestOptions?: any): IPromise<any>;
    generalize(params: GeneralizeParameters, requestOptions?: any): IPromise<any>;
    intersect(geometries: Geometry[], intersector: Geometry, requestOptions?: any): IPromise<any>;
    labelPoints(polygons: Polygon[], requestOptions?: any): IPromise<any>;
    lengths(params: LengthsParameters, requestOptions?: any): IPromise<any>;
    offset(params: OffsetParameters, requestOptions?: any): IPromise<any>;
    project(params: ProjectParameters, requestOptions?: any): IPromise<any>;
    relation(params: RelationParameters, requestOptions?: any): IPromise<any>;
    reshape(targetGeometry: Geometry, reshaper: Geometry, requestOptions?: any): IPromise<any>;
    simplify(geometries: Geometry[], requestOptions?: any): IPromise<any>;
    toGeoCoordinateString(params: GeometryServiceToGeoCoordinateStringParams, requestOptions?: any): IPromise<any>;
    trimExtend(params: TrimExtendParameters, requestOptions?: any): IPromise<any>;
    union(geometries: Geometry[], requestOptions?: any): IPromise<any>;
  }

  interface GeometryServiceConstructor {
    new(properties?: GeometryServiceProperties): GeometryService;
  }

  export const GeometryService: GeometryServiceConstructor;

  interface GeometryServiceProperties extends TaskProperties {

  }

  interface Geoprocessor extends Task {
    outSpatialReference: SpatialReference;
    processSpatialReference: SpatialReference;
    updateDelay: number;

    cancelJob(jobId: string, requestOptions?: any): IPromise<any>;
    cancelJobStatusUpdates(jobId: string): void;
    checkJobStatus(jobId: string, requestOptions?: any): IPromise<any>;
    execute(params: any, requestOptions?: any): IPromise<any>;
    getResultData(jobId: string, resultName: string, requestOptions?: any): IPromise<any>;
    getResultImage(jobId: string, resultName: string, imageParams: ImageParameters, requestOptions?: any): IPromise<any>;
    getResultMapImageLayer(jobId: string): MapImageLayer;
    submitJob(params: any, requestOptions?: any): IPromise<any>;
  }

  interface GeoprocessorConstructor {
    new(properties?: GeoprocessorProperties): Geoprocessor;
  }

  export const Geoprocessor: GeoprocessorConstructor;

  interface GeoprocessorProperties extends TaskProperties {
    outSpatialReference?: SpatialReferenceProperties;
    processSpatialReference?: SpatialReferenceProperties;
    updateDelay?: number;
  }

  interface IdentifyTask extends Task {
    gdbVersion: string;

    execute(params: IdentifyParameters, requestOptions?: any): IPromise<any>;
  }

  interface IdentifyTaskConstructor {
    new(properties?: IdentifyTaskProperties): IdentifyTask;
  }

  export const IdentifyTask: IdentifyTaskConstructor;

  interface IdentifyTaskProperties extends TaskProperties {
    gdbVersion?: string;
  }

  interface ImageServiceIdentifyTask extends Task {
    execute(params: ImageServiceIdentifyParameters, requestOptions?: any): IPromise<any>;
  }

  interface ImageServiceIdentifyTaskConstructor {
    new(properties?: ImageServiceIdentifyTaskProperties): ImageServiceIdentifyTask;
  }

  export const ImageServiceIdentifyTask: ImageServiceIdentifyTaskConstructor;

  interface ImageServiceIdentifyTaskProperties extends TaskProperties {

  }

  interface Locator extends Task {
    categories: string[];
    countryCode: string;
    outSpatialReference: SpatialReference;

    addressesToLocations(params: LocatorAddressesToLocationsParams, requestOptions?: any): IPromise<any>;
    addressToLocations(params: LocatorAddressToLocationsParams, requestOptions?: any): IPromise<any>;
    locationToAddress(location: Point, distance?: number, requestOptions?: any): IPromise<any>;
    suggestLocations(params: LocatorSuggestLocationsParams, requestOptions?: any): IPromise<any>;
  }

  interface LocatorConstructor {
    new(properties?: LocatorProperties): Locator;
  }

  export const Locator: LocatorConstructor;

  interface LocatorProperties extends TaskProperties {
    categories?: string[];
    countryCode?: string;
    outSpatialReference?: SpatialReferenceProperties;
  }

  interface QueryTask extends Task {
    gdbVersion: string;

    execute(params: Query, requestOptions?: any): IPromise<any>;
    executeForCount(params: Query, requestOptions?: any): IPromise<any>;
    executeForExtent(params: Query, requestOptions?: any): IPromise<any>;
    executeForIds(params: Query, requestOptions?: any): IPromise<any>;
    executeRelationshipQuery(params: RelationshipQuery, requestOptions?: any): IPromise<any>;
  }

  interface QueryTaskConstructor {
    new(properties?: QueryTaskProperties): QueryTask;
  }

  export const QueryTask: QueryTaskConstructor;

  interface QueryTaskProperties extends TaskProperties {
    gdbVersion?: string;
  }

  interface PrintTask extends Task {
    mode: string;
    updateDelay: number;

    execute(params: PrintParameters, requestOptions?: any): IPromise<any>;
  }

  interface PrintTaskConstructor {
    new(properties?: PrintTaskProperties): PrintTask;
  }

  export const PrintTask: PrintTaskConstructor;

  interface PrintTaskProperties extends TaskProperties {
    mode?: string;
    updateDelay?: number;
  }

  interface RouteTask extends Task {
    solve(params: RouteParameters, requestOptions?: any): IPromise<any>;
  }

  interface RouteTaskConstructor {
    new(properties?: RouteTaskProperties): RouteTask;
  }

  export const RouteTask: RouteTaskConstructor;

  interface RouteTaskProperties extends TaskProperties {

  }

  interface ServiceAreaTask extends Task {
    solve(params: ServiceAreaParameters, requestOptions?: any): IPromise<any>;
  }

  interface ServiceAreaTaskConstructor {
    new(properties?: ServiceAreaTaskProperties): ServiceAreaTask;
  }

  export const ServiceAreaTask: ServiceAreaTaskConstructor;

  interface ServiceAreaTaskProperties extends TaskProperties {

  }

  interface Task extends Accessor {
    requestOptions: any;
    url: string;
  }

  interface TaskConstructor {
    new(properties?: TaskProperties): Task;
  }

  export const Task: TaskConstructor;

  interface TaskProperties {
    requestOptions?: any;
    url?: string;
  }

  interface AddressCandidate extends Accessor, JSONSupport {
    address: string;
    attributes: any;
    extent: Extent;
    location: Point;
    score: number;
  }

  interface AddressCandidateConstructor {
    new(properties?: AddressCandidateProperties): AddressCandidate;

    fromJSON(json: any): AddressCandidate;
  }

  export const AddressCandidate: AddressCandidateConstructor;

  interface AddressCandidateProperties {
    address?: string;
    attributes?: any;
    extent?: ExtentProperties;
    location?: PointProperties;
    score?: number;
  }

  interface AreasAndLengthsParameters extends Accessor {
    areaUnit: string;
    calculationType: string;
    lengthUnit: string;
    polygons: Polygon[];

    toJSON(): any;
  }

  interface AreasAndLengthsParametersConstructor {
    new(properties?: AreasAndLengthsParametersProperties): AreasAndLengthsParameters;
  }

  export const AreasAndLengthsParameters: AreasAndLengthsParametersConstructor;

  interface AreasAndLengthsParametersProperties {
    areaUnit?: string;
    calculationType?: string;
    lengthUnit?: string;
    polygons?: PolygonProperties[];
  }

  interface BufferParameters extends Accessor {
    bufferSpatialReference: SpatialReference;
    distances: number[];
    geodesic: boolean;
    geometries: Geometry[];
    outSpatialReference: SpatialReference;
    unionResults: boolean;
    unit: string;

    toJSON(): any;
  }

  interface BufferParametersConstructor {
    new(properties?: BufferParametersProperties): BufferParameters;
  }

  export const BufferParameters: BufferParametersConstructor;

  interface BufferParametersProperties {
    bufferSpatialReference?: SpatialReferenceProperties;
    distances?: number[];
    geodesic?: boolean;
    geometries?: GeometryProperties[];
    outSpatialReference?: SpatialReferenceProperties;
    unionResults?: boolean;
    unit?: string;
  }

  interface ClosestFacilityParameters extends Accessor {
    accumulateAttributes: string[];
    attributeParameterValues: ClosestFacilityParametersAttributeParameterValues[];
    defaultCutoff: number;
    defaultTargetFacilityCount: number;
    directionsLanguage: string;
    directionsLengthUnits: string;
    directionsOutputType: string;
    directionsStyleName: string;
    directionsTimeAttribute: string;
    doNotLocateOnRestrictedElements: boolean;
    facilities: DataLayer | FeatureSet;
    impedanceAttribute: string;
    incidents: DataLayer | FeatureSet;
    outputGeometryPrecision: number;
    outputGeometryPrecisionUnits: string;
    outputLines: string;
    outSpatialReference: SpatialReference;
    pointBarriers: DataLayer | FeatureSet;
    polygonBarriers: DataLayer | FeatureSet;
    polylineBarriers: DataLayer | FeatureSet;
    restrictionAttributes: string[];
    restrictUTurns: string;
    returnDirections: boolean;
    returnFacilities: boolean;
    returnIncidents: boolean;
    returnPointBarriers: boolean;
    returnPolygonBarriers: boolean;
    returnPolylineBarriers: boolean;
    returnRoutes: boolean;
    timeOfDay: Date;
    timeOfDayUsage: string;
    travelDirection: string;
    useHierarchy: boolean;

    toJSON(): any;
  }

  interface ClosestFacilityParametersConstructor {
    new(properties?: ClosestFacilityParametersProperties): ClosestFacilityParameters;
  }

  export const ClosestFacilityParameters: ClosestFacilityParametersConstructor;

  interface ClosestFacilityParametersProperties {
    accumulateAttributes?: string[];
    attributeParameterValues?: ClosestFacilityParametersAttributeParameterValues[];
    defaultCutoff?: number;
    defaultTargetFacilityCount?: number;
    directionsLanguage?: string;
    directionsLengthUnits?: string;
    directionsOutputType?: string;
    directionsStyleName?: string;
    directionsTimeAttribute?: string;
    doNotLocateOnRestrictedElements?: boolean;
    facilities?: DataLayer | FeatureSet;
    impedanceAttribute?: string;
    incidents?: DataLayer | FeatureSet;
    outputGeometryPrecision?: number;
    outputGeometryPrecisionUnits?: string;
    outputLines?: string;
    outSpatialReference?: SpatialReference | string;
    pointBarriers?: DataLayer | FeatureSet;
    polygonBarriers?: DataLayer | FeatureSet;
    polylineBarriers?: DataLayer | FeatureSet;
    restrictionAttributes?: string[];
    restrictUTurns?: string;
    returnDirections?: boolean;
    returnFacilities?: boolean;
    returnIncidents?: boolean;
    returnPointBarriers?: boolean;
    returnPolygonBarriers?: boolean;
    returnPolylineBarriers?: boolean;
    returnRoutes?: boolean;
    timeOfDay?: Date;
    timeOfDayUsage?: string;
    travelDirection?: string;
    useHierarchy?: boolean;
  }

  interface ClosestFacilitySolveResult extends Accessor, JSONSupport {
    directions: DirectionsFeatureSet;
    facilities: Point[];
    incidents: Point[];
    messages: NAMessage[];
    pointBarriers: Point[];
    polygonBarriers: Polygon[];
    polylineBarriers: Polyline[];
    routes: Graphic[];
  }

  interface ClosestFacilitySolveResultConstructor {
    new(properties?: ClosestFacilitySolveResultProperties): ClosestFacilitySolveResult;

    fromJSON(json: any): ClosestFacilitySolveResult;
  }

  export const ClosestFacilitySolveResult: ClosestFacilitySolveResultConstructor;

  interface ClosestFacilitySolveResultProperties {
    directions?: DirectionsFeatureSetProperties;
    facilities?: PointProperties[];
    incidents?: PointProperties[];
    messages?: NAMessageProperties[];
    pointBarriers?: PointProperties[];
    polygonBarriers?: PolygonProperties[];
    polylineBarriers?: PolylineProperties[];
    routes?: GraphicProperties[];
  }

  interface DataFile extends Accessor, JSONSupport {
    itemId: string;
    url: string;
  }

  interface DataFileConstructor {
    new(properties?: DataFileProperties): DataFile;

    fromJSON(json: any): DataFile;
  }

  export const DataFile: DataFileConstructor;

  interface DataFileProperties {
    itemId?: string;
    url?: string;
  }

  interface DataLayer extends Accessor {
    geometry: Geometry;
    name: string;
    spatialRelationship: string;
    where: string;

    toJSON(): any;
  }

  interface DataLayerConstructor {
    new(properties?: DataLayerProperties): DataLayer;
  }

  export const DataLayer: DataLayerConstructor;

  interface DataLayerProperties {
    geometry?: GeometryProperties;
    name?: string;
    spatialRelationship?: string;
    where?: string;
  }

  interface supportDate extends Accessor, JSONSupport {
    date: Date;
    format: string;
  }

  interface supportDateConstructor {
    new(properties?: supportDateProperties): supportDate;

    fromJSON(json: any): supportDate;
  }

  export const supportDate: supportDateConstructor;

  interface supportDateProperties {
    date?: Date;
    format?: string;
  }

  interface DensifyParameters extends Accessor {
    geodesic: boolean;
    geometries: Geometry[];
    lengthUnit: string;
    maxSegmentLength: number;

    toJSON(): any;
  }

  interface DensifyParametersConstructor {
    new(properties?: DensifyParametersProperties): DensifyParameters;
  }

  export const DensifyParameters: DensifyParametersConstructor;

  interface DensifyParametersProperties {
    geodesic?: boolean;
    geometries?: GeometryProperties[];
    lengthUnit?: string;
    maxSegmentLength?: number;
  }

  interface DirectionsFeatureSet extends FeatureSet, Accessor {
    extent: Extent;
    mergedGeometry: Polyline;
    routeId: string;
    routeName: string;
    strings: any[];
    totalDriveTime: number;
    totalLength: number;
    totalTime: number;
  }

  interface DirectionsFeatureSetConstructor {
    new(properties?: DirectionsFeatureSetProperties): DirectionsFeatureSet;

    fromJSON(json: any): DirectionsFeatureSet;
  }

  export const DirectionsFeatureSet: DirectionsFeatureSetConstructor;

  interface DirectionsFeatureSetProperties extends FeatureSetProperties {
    extent?: ExtentProperties;
    mergedGeometry?: PolylineProperties;
    routeId?: string;
    routeName?: string;
    strings?: any[];
    totalDriveTime?: number;
    totalLength?: number;
    totalTime?: number;
  }

  interface DistanceParameters extends Accessor {
    distanceUnit: string;
    geodesic: boolean;
    geometry1: Geometry[];
    geometry2: Geometry[];

    toJSON(): any;
  }

  interface DistanceParametersConstructor {
    new(properties?: DistanceParametersProperties): DistanceParameters;
  }

  export const DistanceParameters: DistanceParametersConstructor;

  interface DistanceParametersProperties {
    distanceUnit?: string;
    geodesic?: boolean;
    geometry1?: GeometryProperties[];
    geometry2?: GeometryProperties[];
  }

  interface FeatureSet extends Accessor, JSONSupport {
    displayFieldName: string;
    exceededTransferLimit: boolean;
    features: Graphic[];
    fields: Field[];
    geometryType: string;
    spatialReference: SpatialReference;
  }

  interface FeatureSetConstructor {
    new(properties?: FeatureSetProperties): FeatureSet;

    fromJSON(json: any): FeatureSet;
  }

  export const FeatureSet: FeatureSetConstructor;

  interface FeatureSetProperties {
    displayFieldName?: string;
    exceededTransferLimit?: boolean;
    features?: GraphicProperties[];
    fields?: FieldProperties[];
    geometryType?: string;
    spatialReference?: SpatialReferenceProperties;
  }

  interface FindParameters extends Accessor {
    contains: boolean;
    geometryPrecision: number;
    layerIds: number[];
    maxAllowableOffset: number;
    outSpatialReference: SpatialReference;
    returnGeometry: boolean;
    searchFields: string[];
    searchText: string;

    toJSON(): any;
  }

  interface FindParametersConstructor {
    new(properties?: FindParametersProperties): FindParameters;
  }

  export const FindParameters: FindParametersConstructor;

  interface FindParametersProperties {
    contains?: boolean;
    geometryPrecision?: number;
    layerIds?: number[];
    maxAllowableOffset?: number;
    outSpatialReference?: SpatialReferenceProperties;
    returnGeometry?: boolean;
    searchFields?: string[];
    searchText?: string;
  }

  interface FindResult extends Accessor, JSONSupport {
    displayFieldName: string;
    feature: Graphic;
    foundFieldName: string;
    layerId: number;
    layerName: string;
    value: void;
  }

  interface FindResultConstructor {
    new(properties?: FindResultProperties): FindResult;

    fromJSON(json: any): FindResult;
  }

  export const FindResult: FindResultConstructor;

  interface FindResultProperties {
    displayFieldName?: string;
    feature?: GraphicProperties;
    foundFieldName?: string;
    layerId?: number;
    layerName?: string;
    value?: void;
  }

  interface GeneralizeParameters extends Accessor {
    deviationUnit: string;
    geometries: Geometry[];
    maxDeviation: number;

    toJSON(): any;
  }

  interface GeneralizeParametersConstructor {
    new(properties?: GeneralizeParametersProperties): GeneralizeParameters;
  }

  export const GeneralizeParameters: GeneralizeParametersConstructor;

  interface GeneralizeParametersProperties {
    deviationUnit?: string;
    geometries?: GeometryProperties[];
    maxDeviation?: number;
  }

  interface GPMessage extends Accessor, JSONSupport {
    description: string;
    type: string;
  }

  interface GPMessageConstructor {
    new(properties?: GPMessageProperties): GPMessage;

    fromJSON(json: any): GPMessage;
  }

  export const GPMessage: GPMessageConstructor;

  interface GPMessageProperties {
    description?: string;
    type?: string;
  }

  interface IdentifyParameters extends Accessor {
    dpi: number;
    geometry: Geometry;
    geometryPrecision: number;
    height: number;
    layerIds: number[];
    layerOption: string;
    mapExtent: Extent;
    maxAllowableOffset: number;
    returnGeometry: boolean;
    spatialReference: SpatialReference;
    tolerance: number;
    width: number;

    toJSON(): any;
  }

  interface IdentifyParametersConstructor {
    new(properties?: IdentifyParametersProperties): IdentifyParameters;
  }

  export const IdentifyParameters: IdentifyParametersConstructor;

  interface IdentifyParametersProperties {
    dpi?: number;
    geometry?: GeometryProperties;
    geometryPrecision?: number;
    height?: number;
    layerIds?: number[];
    layerOption?: string;
    mapExtent?: ExtentProperties;
    maxAllowableOffset?: number;
    returnGeometry?: boolean;
    spatialReference?: SpatialReferenceProperties;
    tolerance?: number;
    width?: number;
  }

  interface IdentifyResult extends Accessor, JSONSupport {
    displayFieldName: string;
    feature: Graphic;
    layerId: number;
    layerName: string;
  }

  interface IdentifyResultConstructor {
    new(properties?: IdentifyResultProperties): IdentifyResult;

    fromJSON(json: any): IdentifyResult;
  }

  export const IdentifyResult: IdentifyResultConstructor;

  interface IdentifyResultProperties {
    displayFieldName?: string;
    feature?: GraphicProperties;
    layerId?: number;
    layerName?: string;
  }

  interface ImageServiceIdentifyParameters extends Accessor {
    geometry: Point | Polygon;
    mosaicRule: MosaicRule;
    noData: string | number;
    pixelSize: Symbol;
    pixelSizeX: number;
    pixelSizeY: number;
    renderingRule: RasterFunction;
    returnCatalogItems: boolean;
    returnGeometry: boolean;

    toJSON(): any;
  }

  interface ImageServiceIdentifyParametersConstructor {
    new(properties?: ImageServiceIdentifyParametersProperties): ImageServiceIdentifyParameters;
  }

  export const ImageServiceIdentifyParameters: ImageServiceIdentifyParametersConstructor;

  interface ImageServiceIdentifyParametersProperties {
    geometry?: Point | Polygon;
    mosaicRule?: MosaicRuleProperties;
    noData?: string | number;
    pixelSize?: SymbolProperties;
    pixelSizeX?: number;
    pixelSizeY?: number;
    renderingRule?: RasterFunctionProperties;
    returnCatalogItems?: boolean;
    returnGeometry?: boolean;
  }

  interface ImageServiceIdentifyResult extends Accessor, JSONSupport {
    catalogItems: FeatureSet;
    catalogItemVisibilities: number[];
    location: Point;
    name: string;
    objectId: number;
    properties: any;
    value: string;
  }

  interface ImageServiceIdentifyResultConstructor {
    new(properties?: ImageServiceIdentifyResultProperties): ImageServiceIdentifyResult;

    fromJSON(json: any): ImageServiceIdentifyResult;
  }

  export const ImageServiceIdentifyResult: ImageServiceIdentifyResultConstructor;

  interface ImageServiceIdentifyResultProperties {
    catalogItems?: FeatureSetProperties;
    catalogItemVisibilities?: number[];
    location?: PointProperties;
    name?: string;
    objectId?: number;
    properties?: any;
    value?: string;
  }

  interface JobInfo extends Accessor, JSONSupport {
    jobId: string;
    jobStatus: string;
    messages: GPMessage[];
  }

  interface JobInfoConstructor {
    new(properties?: JobInfoProperties): JobInfo;

    fromJSON(json: any): JobInfo;
  }

  export const JobInfo: JobInfoConstructor;

  interface JobInfoProperties {
    jobId?: string;
    jobStatus?: string;
    messages?: GPMessageProperties[];
  }

  interface LegendLayer extends Accessor {
    layerId: string;
    subLayerIds: string[];
    title: string;
  }

  interface LegendLayerConstructor {
    new(properties?: LegendLayerProperties): LegendLayer;
  }

  export const LegendLayer: LegendLayerConstructor;

  interface LegendLayerProperties {
    layerId?: string;
    subLayerIds?: string[];
    title?: string;
  }

  interface LengthsParameters extends Accessor {
    calculationType: string;
    geodesic: boolean;
    lengthUnit: number | string;
    polylines: Polyline[];

    toJSON(): any;
  }

  interface LengthsParametersConstructor {
    new(properties?: LengthsParametersProperties): LengthsParameters;
  }

  export const LengthsParameters: LengthsParametersConstructor;

  interface LengthsParametersProperties {
    calculationType?: string;
    geodesic?: boolean;
    lengthUnit?: number | string;
    polylines?: PolylineProperties[];
  }

  interface LinearUnit extends Accessor, JSONSupport {
    distance: number;
    units: string;
  }

  interface LinearUnitConstructor {
    new(properties?: LinearUnitProperties): LinearUnit;

    fromJSON(json: any): LinearUnit;
  }

  export const LinearUnit: LinearUnitConstructor;

  interface LinearUnitProperties {
    distance?: number;
    units?: string;
  }

  interface NAMessage extends Accessor, JSONSupport {
    description: string;
    type: any;
  }

  interface NAMessageConstructor {
    new(properties?: NAMessageProperties): NAMessage;

    fromJSON(json: any): NAMessage;
  }

  export const NAMessage: NAMessageConstructor;

  interface NAMessageProperties {
    description?: string;
    type?: any;
  }

  interface OffsetParameters extends Accessor {
    bevelRatio: number;
    geometries: Geometry[];
    offsetDistance: number;
    offsetHow: string;
    offsetUnit: string;

    toJSON(): any;
  }

  interface OffsetParametersConstructor {
    new(properties?: OffsetParametersProperties): OffsetParameters;
  }

  export const OffsetParameters: OffsetParametersConstructor;

  interface OffsetParametersProperties {
    bevelRatio?: number;
    geometries?: GeometryProperties[];
    offsetDistance?: number;
    offsetHow?: string;
    offsetUnit?: string;
  }

  interface ParameterValue extends Accessor, JSONSupport {
    dataType: string;
    value: any;
  }

  interface ParameterValueConstructor {
    new(properties?: ParameterValueProperties): ParameterValue;

    fromJSON(json: any): ParameterValue;
  }

  export const ParameterValue: ParameterValueConstructor;

  interface ParameterValueProperties {
    dataType?: string;
    value?: any;
  }

  interface PrintParameters extends Accessor {
    extraParameters: any;
    outSpatialReference: SpatialReference;
    template: PrintTemplate;
    view: MapView;
  }

  interface PrintParametersConstructor {
    new(properties?: PrintParametersProperties): PrintParameters;
  }

  export const PrintParameters: PrintParametersConstructor;

  interface PrintParametersProperties {
    extraParameters?: any;
    outSpatialReference?: SpatialReferenceProperties;
    template?: PrintTemplateProperties;
    view?: MapViewProperties;
  }

  interface PrintTemplate extends Accessor {
    attributionVisible: boolean;
    exportOptions: PrintTemplateExportOptions;
    format: string;
    layout: string;
    layoutOptions: PrintTemplateLayoutOptions;
    outScale: number;
    preserveScale: boolean;
    showLabels: boolean;
  }

  interface PrintTemplateConstructor {
    new(properties?: PrintTemplateProperties): PrintTemplate;
  }

  export const PrintTemplate: PrintTemplateConstructor;

  interface PrintTemplateProperties {
    attributionVisible?: boolean;
    exportOptions?: PrintTemplateExportOptions;
    format?: string;
    layout?: string;
    layoutOptions?: PrintTemplateLayoutOptions;
    outScale?: number;
    preserveScale?: boolean;
    showLabels?: boolean;
  }

  interface ProjectParameters extends Accessor {
    geometries: Geometry[];
    outSpatialReference: SpatialReference;
    outSR: SpatialReference;
    transformation: ProjectParametersTransformation;
    transformForward: boolean;

    toJSON(): any;
  }

  interface ProjectParametersConstructor {
    new(properties?: ProjectParametersProperties): ProjectParameters;
  }

  export const ProjectParameters: ProjectParametersConstructor;

  interface ProjectParametersProperties {
    geometries?: GeometryProperties[];
    outSpatialReference?: SpatialReferenceProperties;
    outSR?: SpatialReferenceProperties;
    transformation?: ProjectParametersTransformation;
    transformForward?: boolean;
  }

  interface Query extends Accessor {
    distance: number;
    geometry: Geometry;
    geometryPrecision: number;
    groupByFieldsForStatistics: string[];
    maxAllowableOffset: number;
    multipatchOption: string;
    num: number;
    objectIds: number[];
    orderByFields: string[];
    outFields: string[];
    outSpatialReference: SpatialReference;
    outStatistics: StatisticDefinition[];
    pixelSize: Symbol;
    quantizationParameters: QueryQuantizationParameters;
    relationParam: string;
    returnDistinctValues: boolean;
    returnGeometry: boolean;
    returnZ: boolean;
    spatialRelationship: string;
    start: number;
    text: string;
    units: string;
    where: string;

    toJSON(): any;
  }

  interface QueryConstructor {
    new(properties?: QueryProperties): Query;
  }

  export const Query: QueryConstructor;

  interface QueryProperties {
    distance?: number;
    geometry?: GeometryProperties;
    geometryPrecision?: number;
    groupByFieldsForStatistics?: string[];
    maxAllowableOffset?: number;
    multipatchOption?: string;
    num?: number;
    objectIds?: number[];
    orderByFields?: string[];
    outFields?: string[];
    outSpatialReference?: SpatialReferenceProperties;
    outStatistics?: StatisticDefinitionProperties[];
    pixelSize?: SymbolProperties;
    quantizationParameters?: QueryQuantizationParameters;
    relationParam?: string;
    returnDistinctValues?: boolean;
    returnGeometry?: boolean;
    returnZ?: boolean;
    spatialRelationship?: string;
    start?: number;
    text?: string;
    units?: string;
    where?: string;
  }

  interface RasterData extends Accessor, JSONSupport {
    format: string;
    itemId: string;
    url: string;
  }

  interface RasterDataConstructor {
    new(properties?: RasterDataProperties): RasterData;

    fromJSON(json: any): RasterData;
  }

  export const RasterData: RasterDataConstructor;

  interface RasterDataProperties {
    format?: string;
    itemId?: string;
    url?: string;
  }

  interface RelationParameters extends Accessor {
    geometries1: Geometry[];
    geometries2: Geometry[];
    relation: string;
    relationParam: string;

    toJSON(): any;
  }

  interface RelationParametersConstructor {
    new(properties?: RelationParametersProperties): RelationParameters;
  }

  export const RelationParameters: RelationParametersConstructor;

  interface RelationParametersProperties {
    geometries1?: GeometryProperties[];
    geometries2?: GeometryProperties[];
    relation?: string;
    relationParam?: string;
  }

  interface RelationshipQuery extends Accessor {
    definitionExpression: string;
    geometryPrecision: number;
    maxAllowableOffset: number;
    objectIds: number[];
    outFields: string[];
    outSpatialReference: SpatialReference;
    relationshipId: number;
    returnGeometry: boolean;

    toJSON(): any;
  }

  interface RelationshipQueryConstructor {
    new(properties?: RelationshipQueryProperties): RelationshipQuery;
  }

  export const RelationshipQuery: RelationshipQueryConstructor;

  interface RelationshipQueryProperties {
    definitionExpression?: string;
    geometryPrecision?: number;
    maxAllowableOffset?: number;
    objectIds?: number[];
    outFields?: string[];
    outSpatialReference?: SpatialReferenceProperties;
    relationshipId?: number;
    returnGeometry?: boolean;
  }

  interface RouteParameters extends Accessor {
    accumulateAttributes: string[];
    attributeParameterValues: AttributeParamValue;
    barriers: DataLayer | FeatureSet;
    directionsLanguage: string;
    directionsLengthUnits: string;
    directionsOutputType: string;
    directionsStyleName: string;
    directionsTimeAttribute: string;
    doNotLocateOnRestrictedElements: boolean;
    findBestSequence: boolean;
    ignoreInvalidLocations: boolean;
    impedanceAttribute: string;
    outputGeometryPrecision: number;
    outputGeometryPrecisionUnits: string;
    outputLines: string;
    outSpatialReference: SpatialReference;
    polygonBarriers: DataLayer | FeatureSet;
    polylineBarriers: DataLayer | FeatureSet;
    preserveFirstStop: boolean;
    preserveLastStop: boolean;
    restrictionAttributes: string[];
    restrictUTurns: string;
    returnBarriers: boolean;
    returnDirections: boolean;
    returnPolygonBarriers: boolean;
    returnPolylineBarriers: boolean;
    returnRoutes: boolean;
    returnStops: boolean;
    returnZ: boolean;
    startTime: Date;
    startTimeIsUTC: boolean;
    stops: DataLayer | FeatureSet;
    useHierarchy: boolean;
    useTimeWindows: boolean;

    toJSON(): any;
  }

  interface RouteParametersConstructor {
    new(properties?: RouteParametersProperties): RouteParameters;
  }

  export const RouteParameters: RouteParametersConstructor;

  interface RouteParametersProperties {
    accumulateAttributes?: string[];
    attributeParameterValues?: AttributeParamValue;
    barriers?: DataLayer | FeatureSet;
    directionsLanguage?: string;
    directionsLengthUnits?: string;
    directionsOutputType?: string;
    directionsStyleName?: string;
    directionsTimeAttribute?: string;
    doNotLocateOnRestrictedElements?: boolean;
    findBestSequence?: boolean;
    ignoreInvalidLocations?: boolean;
    impedanceAttribute?: string;
    outputGeometryPrecision?: number;
    outputGeometryPrecisionUnits?: string;
    outputLines?: string;
    outSpatialReference?: SpatialReferenceProperties;
    polygonBarriers?: DataLayer | FeatureSet;
    polylineBarriers?: DataLayer | FeatureSet;
    preserveFirstStop?: boolean;
    preserveLastStop?: boolean;
    restrictionAttributes?: string[];
    restrictUTurns?: string;
    returnBarriers?: boolean;
    returnDirections?: boolean;
    returnPolygonBarriers?: boolean;
    returnPolylineBarriers?: boolean;
    returnRoutes?: boolean;
    returnStops?: boolean;
    returnZ?: boolean;
    startTime?: Date;
    startTimeIsUTC?: boolean;
    stops?: DataLayer | FeatureSet;
    useHierarchy?: boolean;
    useTimeWindows?: boolean;
  }

  interface RouteResult extends Accessor, JSONSupport {
    directions: DirectionsFeatureSet;
    route: Graphic;
    routeName: string;
    stops: Graphic[];
  }

  interface RouteResultConstructor {
    new(properties?: RouteResultProperties): RouteResult;

    fromJSON(json: any): RouteResult;
  }

  export const RouteResult: RouteResultConstructor;

  interface RouteResultProperties {
    directions?: DirectionsFeatureSetProperties;
    route?: GraphicProperties;
    routeName?: string;
    stops?: GraphicProperties[];
  }

  interface ServiceAreaParameters extends Accessor {
    accumulateAttributes: string[];
    attributeParameterValues: any[];
    defaultBreaks: number[];
    doNotLocateOnRestrictedElements: boolean;
    excludeSourcesFromPolygons: string[];
    facilities: DataLayer | FeatureSet;
    impedanceAttribute: string;
    mergeSimilarPolygonRanges: boolean;
    outputGeometryPrecision: number;
    outputGeometryPrecisionUnits: string;
    outputLines: string;
    outputPolygons: string;
    outSpatialReference: SpatialReference;
    overlapLines: boolean;
    overlapPolygons: boolean;
    pointBarriers: DataLayer | FeatureSet;
    polygonBarriers: DataLayer | FeatureSet;
    polylineBarriers: DataLayer | FeatureSet;
    restrictionAttributes: string[];
    restrictUTurns: string;
    returnFacilities: boolean;
    returnPointBarriers: boolean;
    returnPolygonBarriers: boolean;
    returnPolylineBarriers: boolean;
    splitLinesAtBreaks: boolean;
    splitPolygonsAtBreaks: boolean;
    timeOfDay: Date;
    travelDirection: string;
    trimOuterPolygon: boolean;
    trimPolygonDistance: number;
    trimPolygonDistanceUnits: string;
    useHierarchy: boolean;

    toJSON(): any;
  }

  interface ServiceAreaParametersConstructor {
    new(properties?: ServiceAreaParametersProperties): ServiceAreaParameters;
  }

  export const ServiceAreaParameters: ServiceAreaParametersConstructor;

  interface ServiceAreaParametersProperties {
    accumulateAttributes?: string[];
    attributeParameterValues?: any[];
    defaultBreaks?: number[];
    doNotLocateOnRestrictedElements?: boolean;
    excludeSourcesFromPolygons?: string[];
    facilities?: DataLayer | FeatureSet;
    impedanceAttribute?: string;
    mergeSimilarPolygonRanges?: boolean;
    outputGeometryPrecision?: number;
    outputGeometryPrecisionUnits?: string;
    outputLines?: string;
    outputPolygons?: string;
    outSpatialReference?: SpatialReferenceProperties;
    overlapLines?: boolean;
    overlapPolygons?: boolean;
    pointBarriers?: DataLayer | FeatureSet;
    polygonBarriers?: DataLayer | FeatureSet;
    polylineBarriers?: DataLayer | FeatureSet;
    restrictionAttributes?: string[];
    restrictUTurns?: string;
    returnFacilities?: boolean;
    returnPointBarriers?: boolean;
    returnPolygonBarriers?: boolean;
    returnPolylineBarriers?: boolean;
    splitLinesAtBreaks?: boolean;
    splitPolygonsAtBreaks?: boolean;
    timeOfDay?: Date;
    travelDirection?: string;
    trimOuterPolygon?: boolean;
    trimPolygonDistance?: number;
    trimPolygonDistanceUnits?: string;
    useHierarchy?: boolean;
  }

  interface ServiceAreaSolveResult extends Accessor, JSONSupport {
    facilities: Point[];
    messages: NAMessage[];
    pointBarriers: Point[];
    polygonBarriers: Polygon[];
    polylineBarriers: Polyline[];
    serviceAreaPolygons: Graphic[];
    serviceAreaPolylines: Graphic[];
  }

  interface ServiceAreaSolveResultConstructor {
    new(properties?: ServiceAreaSolveResultProperties): ServiceAreaSolveResult;

    fromJSON(json: any): ServiceAreaSolveResult;
  }

  export const ServiceAreaSolveResult: ServiceAreaSolveResultConstructor;

  interface ServiceAreaSolveResultProperties {
    facilities?: PointProperties[];
    messages?: NAMessageProperties[];
    pointBarriers?: PointProperties[];
    polygonBarriers?: PolygonProperties[];
    polylineBarriers?: PolylineProperties[];
    serviceAreaPolygons?: GraphicProperties[];
    serviceAreaPolylines?: GraphicProperties[];
  }

  interface StatisticDefinition extends Accessor {
    onStatisticField: string;
    outStatisticFieldName: string;
    statisticType: string;

    toJSON(): any;
  }

  interface StatisticDefinitionConstructor {
    new(properties?: StatisticDefinitionProperties): StatisticDefinition;
  }

  export const StatisticDefinition: StatisticDefinitionConstructor;

  interface StatisticDefinitionProperties {
    onStatisticField?: string;
    outStatisticFieldName?: string;
    statisticType?: string;
  }

  interface TrimExtendParameters extends Accessor {
    extendHow: string;
    polylines: Polyline[];
    trimExtendTo: Polyline;

    toJSON(): any;
  }

  interface TrimExtendParametersConstructor {
    new(properties?: TrimExtendParametersProperties): TrimExtendParameters;
  }

  export const TrimExtendParameters: TrimExtendParametersConstructor;

  interface TrimExtendParametersProperties {
    extendHow?: string;
    polylines?: PolylineProperties[];
    trimExtendTo?: PolylineProperties;
  }

  interface ConfigurationTask extends Task {
    url: string;

    getAllGroups(requestOptions?: any): IPromise<any>;
    getAllUsers(requestOptions?: any): IPromise<any>;
    getDataWorkspaceDetails(params: ConfigurationTaskGetDataWorkspaceDetailsParams, requestOptions?: any): IPromise<any>;
    getGroup(groupId: number, requestOptions?: any): IPromise<any>;
    getJobTypeDetails(jobTypeId: number, requestOptions?: any): IPromise<any>;
    getPublicJobQueryDetails(queryId: number, requestOptions?: any): IPromise<any>;
    getServiceInfo(requestOptions?: any): IPromise<any>;
    getTableRelationshipsDetails(requestOptions?: any): IPromise<any>;
    getUser(user: string, requestOptions?: any): IPromise<any>;
    getUserJobQueryDetails(params: ConfigurationTaskGetUserJobQueryDetailsParams, requestOptions?: any): IPromise<any>;
    getVisibleJobTypes(user: string, requestOptions?: any): IPromise<any>;
  }

  interface ConfigurationTaskConstructor {
    new(properties?: ConfigurationTaskProperties): ConfigurationTask;
  }

  export const ConfigurationTask: ConfigurationTaskConstructor;

  interface ConfigurationTaskProperties extends TaskProperties {
    url?: string;
  }

  interface JobTask extends Task {
    url: string;

    addEmbeddedAttachment(params: JobTaskAddEmbeddedAttachmentParams, requestOptions?: any): IPromise<any>;
    addLinkedAttachment(params: JobTaskAddLinkedAttachmentParams, requestOptions?: any): IPromise<any>;
    addLinkedRecord(params: JobTaskAddLinkedRecordParams, requestOptions?: any): IPromise<any>;
    assignJobs(params: JobTaskAssignJobsParams, requestOptions?: any): IPromise<any>;
    closeJobs(params: JobTaskCloseJobsParams, requestOptions?: any): IPromise<any>;
    createDependency(params: JobTaskCreateDependencyParams, requestOptions?: any): IPromise<any>;
    createHold(params: JobTaskCreateHoldParams, requestOptions?: any): IPromise<any>;
    createJobs(params: JobCreationParameters, requestOptions?: any): IPromise<any>;
    createJobVersion(params: JobTaskCreateJobVersionParams, requestOptions?: any): IPromise<any>;
    deleteAttachment(params: JobTaskDeleteAttachmentParams, requestOptions?: any): IPromise<any>;
    deleteDependency(params: JobTaskDeleteDependencyParams, requestOptions?: any): IPromise<any>;
    deleteJobs(params: JobTaskDeleteJobsParams, requestOptions?: any): IPromise<any>;
    deleteLinkedRecord(params: JobTaskDeleteLinkedRecordParams, requestOptions?: any): IPromise<any>;
    getActivityLog(jobId: number, requestOptions?: any): IPromise<any>;
    getAttachmentContentUrl(params: JobTaskGetAttachmentContentUrlParams): string;
    getAttachments(jobId: number, requestOptions?: any): IPromise<any>;
    getDependencies(jobId: number, requestOptions?: any): IPromise<any>;
    getExtendedProperties(jobId: number, requestOptions?: any): IPromise<any>;
    getHolds(jobId: number, requestOptions?: any): IPromise<any>;
    getJob(jobId: number, requestOptions?: any): IPromise<any>;
    getJobIds(requestOptions?: any): IPromise<any>;
    getNotes(jobId: number, requestOptions?: any): IPromise<any>;
    listFieldValues(params: JobTaskListFieldValuesParams, requestOptions?: any): IPromise<any>;
    listMultiLevelFieldValues(params: JobTaskListMultiLevelFieldValuesParams, requestOptions?: any): IPromise<any>;
    logAction(params: JobTaskLogActionParams, requestOptions?: any): IPromise<any>;
    queryJobs(params: JobTaskQueryJobsParams, requestOptions?: any): IPromise<any>;
    queryJobsAdHoc(params: JobQueryParameters, requestOptions?: any): IPromise<any>;
    queryMultiLevelSelectedValues(params: JobTaskQueryMultiLevelSelectedValuesParams, requestOptions?: any): IPromise<any>;
    releaseHold(params: JobTaskReleaseHoldParams, requestOptions?: any): IPromise<any>;
    reopenClosedJobs(params: JobTaskReopenClosedJobsParams, requestOptions?: any): IPromise<any>;
    searchJobs(params: JobTaskSearchJobsParams, requestOptions?: any): IPromise<any>;
    unassignJobs(params: JobTaskUnassignJobsParams, requestOptions?: any): IPromise<any>;
    updateJob(params: JobUpdateParameters, requestOptions?: any): IPromise<any>;
    updateNotes(params: JobTaskUpdateNotesParams, requestOptions?: any): IPromise<any>;
    updateRecord(params: JobTaskUpdateRecordParams, requestOptions?: any): IPromise<any>;
  }

  interface JobTaskConstructor {
    new(properties?: JobTaskProperties): JobTask;
  }

  export const JobTask: JobTaskConstructor;

  interface JobTaskProperties extends TaskProperties {
    url?: string;
  }

  interface NotificationTask extends Task {
    url: string;

    addChangeRule(params: NotificationTaskAddChangeRuleParams, requestOptions?: any): IPromise<any>;
    deleteChangeRule(params: NotificationTaskDeleteChangeRuleParams, requestOptions?: any): IPromise<any>;
    getAllChangeRules(requestOptions?: any): IPromise<any>;
    getChangeRule(ruleId: string, requestOptions?: any): IPromise<any>;
    getChangeRuleMatch(matchId: string, requestOptions?: any): IPromise<any>;
    getDatabaseTime(dataWorkspaceId: string, requestOptions?: any): IPromise<any>;
    getSessionMatches(sessionId: string, requestOptions?: any): IPromise<any>;
    notifySession(params: NotificationTaskNotifySessionParams, requestOptions?: any): IPromise<any>;
    queryChangeRules(params: NotificationTaskQueryChangeRulesParams, requestOptions?: any): IPromise<any>;
    runSpatialNotificationOnHistory(params: NotificationTaskRunSpatialNotificationOnHistoryParams, requestOptions?: any): IPromise<any>;
    sendNotification(params: NotificationTaskSendNotificationParams, requestOptions?: any): IPromise<any>;
    subscribeToNotification(params: NotificationTaskSubscribeToNotificationParams, requestOptions?: any): IPromise<any>;
    unsubscribeFromNotification(params: NotificationTaskUnsubscribeFromNotificationParams, requestOptions?: any): IPromise<any>;
  }

  interface NotificationTaskConstructor {
    new(properties?: NotificationTaskProperties): NotificationTask;
  }

  export const NotificationTask: NotificationTaskConstructor;

  interface NotificationTaskProperties extends TaskProperties {
    url?: string;
  }

  interface ReportTask extends Task {
    url: string;

    generateReport(params: ReportTaskGenerateReportParams, requestOptions?: any): IPromise<any>;
    getAllReports(requestOptions?: any): IPromise<any>;
    getReportContentUrl(params: ReportTaskGetReportContentUrlParams): string;
    getReportData(params: ReportTaskGetReportDataParams, requestOptions?: any): IPromise<any>;
    getReportStylesheet(reportId: number, requestOptions?: any): IPromise<any>;
  }

  interface ReportTaskConstructor {
    new(properties?: ReportTaskProperties): ReportTask;
  }

  export const ReportTask: ReportTaskConstructor;

  interface ReportTaskProperties extends TaskProperties {
    url?: string;
  }

  interface TokenTask extends Task {
    parseTokens(params: TokenTaskParseTokensParams, requestOptions?: any): IPromise<any>;
  }

  interface TokenTaskConstructor {
    new(properties?: TokenTaskProperties): TokenTask;
  }

  export const TokenTask: TokenTaskConstructor;

  interface TokenTaskProperties extends TaskProperties {

  }

  interface WorkflowTask extends Task {
    url: string;

    canRunStep(params: WorkflowTaskCanRunStepParams, requestOptions?: any): IPromise<any>;
    executeSteps(params: WorkflowTaskExecuteStepsParams, requestOptions?: any): IPromise<any>;
    getAllSteps(jobId: number, requestOptions?: any): IPromise<any>;
    getCurrentSteps(jobId: number, requestOptions?: any): IPromise<any>;
    getStep(params: WorkflowTaskGetStepParams, requestOptions?: any): IPromise<any>;
    getStepDescription(params: WorkflowTaskGetStepDescriptionParams, requestOptions?: any): IPromise<any>;
    getStepFileUrl(params: WorkflowTaskGetStepFileUrlParams): string;
    getWorkflowDisplayDetails(jobId: number, requestOptions?: any): IPromise<any>;
    getWorkflowImageUrl(jobId: number): string;
    markStepsAsDone(params: WorkflowTaskMarkStepsAsDoneParams, requestOptions?: any): IPromise<any>;
    moveToNextStep(params: WorkflowTaskMoveToNextStepParams, requestOptions?: any): IPromise<any>;
    recreateWorkflow(params: WorkflowTaskRecreateWorkflowParams, requestOptions?: any): IPromise<any>;
    resolveConflict(params: WorkflowTaskResolveConflictParams, requestOptions?: any): IPromise<any>;
    setCurrentStep(params: WorkflowTaskSetCurrentStepParams, requestOptions?: any): IPromise<any>;
  }

  interface WorkflowTaskConstructor {
    new(properties?: WorkflowTaskProperties): WorkflowTask;
  }

  export const WorkflowTask: WorkflowTaskConstructor;

  interface WorkflowTaskProperties extends TaskProperties {
    url?: string;
  }

  interface MapView extends View {
    center: Point;
    constraints: MapViewConstraints;
    extent: Extent;
    resizeAlign: string;
    rotation: number;
    scale: number;
    viewpoint: Viewpoint;
    zoom: number;

    goTo(target: number[] | Geometry | Geometry[] | Graphic | Graphic[] | Viewpoint | any, options?: MapViewGoToOptions): IPromise<any>;
    hasEventListener(type: string): boolean;
    hitTest(screenPoint: MapViewHitTestScreenPoint): IPromise<any>;
    on(type: string | string[], modifiersOrHandler: string[] | EventHandler, handler?: EventHandler): IHandle;
    toMap(screenPoint: MapViewToMapScreenPoint): Point;
    toScreen(point: Point, screenPoint?: ScreenPoint): ScreenPoint;

    on(name: "resize", eventHandler: MapViewResizeEventHandler): IHandle;
    on(name: "resize", modifiers: string[], eventHandler: MapViewResizeEventHandler): IHandle;
    on(name: "layerview-create", eventHandler: MapViewLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: MapViewLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: MapViewLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: MapViewLayerviewDestroyEventHandler): IHandle;
    on(name: "click", eventHandler: MapViewClickEventHandler): IHandle;
    on(name: "click", modifiers: string[], eventHandler: MapViewClickEventHandler): IHandle;
    on(name: "double-click", eventHandler: MapViewDoubleClickEventHandler): IHandle;
    on(name: "double-click", modifiers: string[], eventHandler: MapViewDoubleClickEventHandler): IHandle;
    on(name: "hold", eventHandler: MapViewHoldEventHandler): IHandle;
    on(name: "hold", modifiers: string[], eventHandler: MapViewHoldEventHandler): IHandle;
    on(name: "drag", eventHandler: MapViewDragEventHandler): IHandle;
    on(name: "drag", modifiers: string[], eventHandler: MapViewDragEventHandler): IHandle;
    on(name: "mouse-wheel", eventHandler: MapViewMouseWheelEventHandler): IHandle;
    on(name: "mouse-wheel", modifiers: string[], eventHandler: MapViewMouseWheelEventHandler): IHandle;
    on(name: "key-down", eventHandler: MapViewKeyDownEventHandler): IHandle;
    on(name: "key-down", modifiers: string[], eventHandler: MapViewKeyDownEventHandler): IHandle;
    on(name: "key-up", eventHandler: MapViewKeyUpEventHandler): IHandle;
    on(name: "key-up", modifiers: string[], eventHandler: MapViewKeyUpEventHandler): IHandle;
    on(name: "pointer-down", eventHandler: MapViewPointerDownEventHandler): IHandle;
    on(name: "pointer-down", modifiers: string[], eventHandler: MapViewPointerDownEventHandler): IHandle;
    on(name: "pointer-move", eventHandler: MapViewPointerMoveEventHandler): IHandle;
    on(name: "pointer-move", modifiers: string[], eventHandler: MapViewPointerMoveEventHandler): IHandle;
    on(name: "pointer-up", eventHandler: MapViewPointerUpEventHandler): IHandle;
    on(name: "pointer-up", modifiers: string[], eventHandler: MapViewPointerUpEventHandler): IHandle;
  }

  interface MapViewConstructor {
    new(properties?: MapViewProperties): MapView;
  }

  export const MapView: MapViewConstructor;

  interface MapViewProperties extends ViewProperties {
    center?: PointProperties;
    constraints?: MapViewConstraints;
    extent?: ExtentProperties;
    resizeAlign?: string;
    rotation?: number;
    scale?: number;
    viewpoint?: ViewpointProperties;
    zoom?: number;
  }

  interface SceneView extends View {
    camera: Camera;
    center: Point;
    clippingArea: Extent;
    constraints: SceneViewConstraints;
    environment: SceneViewEnvironment;
    extent: Extent;
    highlightOptions: SceneViewHighlightOptions;
    qualityProfile: string;
    scale: number;
    viewingMode: string;
    viewpoint: Viewpoint;
    zoom: number;

    goTo(target: number[] | Geometry | Geometry[] | Graphic | Graphic[] | Viewpoint | Camera | any, options?: SceneViewGoToOptions): IPromise<any>;
    hasEventListener(type: string): boolean;
    hitTest(screenPoint: SceneViewHitTestScreenPoint): IPromise<any>;
    on(type: string | string[], modifiersOrHandler: string[] | EventHandler, handler?: EventHandler): IHandle;
    toMap(screenPoint: SceneViewToMapScreenPoint, mapPoint?: Point): Point;
    toScreen(point: Point, screenPoint?: ScreenPoint): ScreenPoint;

    on(name: "resize", eventHandler: SceneViewResizeEventHandler): IHandle;
    on(name: "resize", modifiers: string[], eventHandler: SceneViewResizeEventHandler): IHandle;
    on(name: "layerview-create", eventHandler: SceneViewLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-create", modifiers: string[], eventHandler: SceneViewLayerviewCreateEventHandler): IHandle;
    on(name: "layerview-destroy", eventHandler: SceneViewLayerviewDestroyEventHandler): IHandle;
    on(name: "layerview-destroy", modifiers: string[], eventHandler: SceneViewLayerviewDestroyEventHandler): IHandle;
    on(name: "click", eventHandler: SceneViewClickEventHandler): IHandle;
    on(name: "click", modifiers: string[], eventHandler: SceneViewClickEventHandler): IHandle;
    on(name: "double-click", eventHandler: SceneViewDoubleClickEventHandler): IHandle;
    on(name: "double-click", modifiers: string[], eventHandler: SceneViewDoubleClickEventHandler): IHandle;
    on(name: "hold", eventHandler: SceneViewHoldEventHandler): IHandle;
    on(name: "hold", modifiers: string[], eventHandler: SceneViewHoldEventHandler): IHandle;
    on(name: "drag", eventHandler: SceneViewDragEventHandler): IHandle;
    on(name: "drag", modifiers: string[], eventHandler: SceneViewDragEventHandler): IHandle;
    on(name: "mouse-wheel", eventHandler: SceneViewMouseWheelEventHandler): IHandle;
    on(name: "mouse-wheel", modifiers: string[], eventHandler: SceneViewMouseWheelEventHandler): IHandle;
    on(name: "key-down", eventHandler: SceneViewKeyDownEventHandler): IHandle;
    on(name: "key-down", modifiers: string[], eventHandler: SceneViewKeyDownEventHandler): IHandle;
    on(name: "key-up", eventHandler: SceneViewKeyUpEventHandler): IHandle;
    on(name: "key-up", modifiers: string[], eventHandler: SceneViewKeyUpEventHandler): IHandle;
    on(name: "pointer-down", eventHandler: SceneViewPointerDownEventHandler): IHandle;
    on(name: "pointer-down", modifiers: string[], eventHandler: SceneViewPointerDownEventHandler): IHandle;
    on(name: "pointer-move", eventHandler: SceneViewPointerMoveEventHandler): IHandle;
    on(name: "pointer-move", modifiers: string[], eventHandler: SceneViewPointerMoveEventHandler): IHandle;
    on(name: "pointer-up", eventHandler: SceneViewPointerUpEventHandler): IHandle;
    on(name: "pointer-up", modifiers: string[], eventHandler: SceneViewPointerUpEventHandler): IHandle;
  }

  interface SceneViewConstructor {
    new(properties?: SceneViewProperties): SceneView;
  }

  export const SceneView: SceneViewConstructor;

  interface SceneViewProperties extends ViewProperties {
    camera?: CameraProperties;
    center?: PointProperties;
    clippingArea?: ExtentProperties;
    constraints?: SceneViewConstraintsProperties;
    environment?: SceneViewEnvironmentProperties;
    extent?: ExtentProperties;
    highlightOptions?: SceneViewHighlightOptions;
    qualityProfile?: string;
    scale?: number;
    viewingMode?: string;
    viewpoint?: ViewpointProperties;
    zoom?: number;
  }

  interface View extends Accessor, corePromise, BreakpointsOwner, DOMContainer {
    allLayerViews: Collection;
    animation: ViewAnimation;
    graphics: Collection;
    interacting: boolean;
    layerViews: Collection;
    map: Map;
    padding: ViewPadding;
    ready: boolean;
    spatialReference: SpatialReference;
    stationary: boolean;
    type: string;
    updating: boolean;

    whenLayerView(layer: Layer): IPromise<any>;
  }

  interface ViewConstructor {
    new(properties?: ViewProperties): View;
  }

  export const View: ViewConstructor;

  interface ViewProperties extends BreakpointsOwnerProperties, DOMContainerProperties {
    allLayerViews?: Collection | any[];
    animation?: ViewAnimationProperties;
    graphics?: Collection | any[];
    interacting?: boolean;
    layerViews?: Collection | any[];
    map?: MapProperties;
    padding?: ViewPadding;
    ready?: boolean;
    spatialReference?: SpatialReferenceProperties;
    stationary?: boolean;
    type?: string;
    updating?: boolean;
  }

  interface ViewAnimation extends Accessor, corePromise {
    state: string;
    target: Viewpoint;

    finish(): void;
    stop(): void;
  }

  interface ViewAnimationConstructor {
    new(properties?: ViewAnimationProperties): ViewAnimation;
  }

  export const ViewAnimation: ViewAnimationConstructor;

  interface ViewAnimationProperties {
    state?: string;
    target?: ViewpointProperties;
  }

  interface LayerView extends Accessor, corePromise {
    layer: Layer;
    suspended: boolean;
    updating: boolean;
    visible: boolean;
  }

  interface LayerViewConstructor {
    new(properties?: LayerViewProperties): LayerView;
  }

  export const LayerView: LayerViewConstructor;

  interface LayerViewProperties {
    layer?: LayerProperties;
    suspended?: boolean;
    updating?: boolean;
    visible?: boolean;
  }

  interface CSVLayerView extends LayerView {
    highlight(target?: Graphic | Graphic[]): any;
    queryExtent(params?: Query): IPromise<any>;
    queryFeatureCount(params?: Query): IPromise<any>;
    queryFeatures(params?: Query): IPromise<any>;
    queryObjectIds(params?: Query): IPromise<any>;
  }

  interface CSVLayerViewConstructor {
    new(properties?: CSVLayerViewProperties): CSVLayerView;
  }

  export const CSVLayerView: CSVLayerViewConstructor;

  interface CSVLayerViewProperties extends LayerViewProperties {

  }

  interface FeatureLayerView extends LayerView {
    highlight(target?: Graphic | Graphic[] | number | number[]): any;
    queryExtent(params?: Query): IPromise<any>;
    queryFeatureCount(params?: Query): IPromise<any>;
    queryFeatures(params?: Query): IPromise<any>;
    queryObjectIds(params?: Query): IPromise<any>;
  }

  interface FeatureLayerViewConstructor {
    new(properties?: FeatureLayerViewProperties): FeatureLayerView;
  }

  export const FeatureLayerView: FeatureLayerViewConstructor;

  interface FeatureLayerViewProperties extends LayerViewProperties {

  }

  interface GraphicsLayerView extends LayerView {
    highlight(target?: Graphic | Graphic[] | number | number[]): any;
    queryGraphics(): IPromise<any>;
  }

  interface GraphicsLayerViewConstructor {
    new(properties?: GraphicsLayerViewProperties): GraphicsLayerView;
  }

  export const GraphicsLayerView: GraphicsLayerViewConstructor;

  interface GraphicsLayerViewProperties extends LayerViewProperties {

  }

  interface ImageryLayerView extends LayerView {
    pixelData: ImageryLayerViewPixelData;
  }

  interface ImageryLayerViewConstructor {
    new(properties?: ImageryLayerViewProperties): ImageryLayerView;
  }

  export const ImageryLayerView: ImageryLayerViewConstructor;

  interface ImageryLayerViewProperties extends LayerViewProperties {
    pixelData?: ImageryLayerViewPixelData;
  }

  interface SceneLayerView extends LayerView {
    highlight(target?: Graphic | Graphic[] | number | number[]): any;
    queryExtent(params?: Query): IPromise<any>;
    queryFeatureCount(params?: Query): IPromise<any>;
    queryFeatures(params?: Query): IPromise<any>;
    queryObjectIds(params?: Query): IPromise<any>;
  }

  interface SceneLayerViewConstructor {
    new(properties?: SceneLayerViewProperties): SceneLayerView;
  }

  export const SceneLayerView: SceneLayerViewConstructor;

  interface SceneLayerViewProperties extends LayerViewProperties {

  }

  interface StreamLayerView extends Accessor, Evented {
    connectionError: Error;
    connectionStatus: string;
    filter: StreamLayerViewFilter;
    graphics: Collection;

    connect(): IPromise<any>;
    disconnect(): void;
    updateFilter(filter: StreamLayerViewUpdateFilterFilter): IPromise<any>;

    on(name: "data-received", eventHandler: StreamLayerViewDataReceivedEventHandler): IHandle;
    on(name: "data-received", modifiers: string[], eventHandler: StreamLayerViewDataReceivedEventHandler): IHandle;
  }

  interface StreamLayerViewConstructor {
    new(properties?: StreamLayerViewProperties): StreamLayerView;
  }

  export const StreamLayerView: StreamLayerViewConstructor;

  interface StreamLayerViewProperties {
    connectionError?: Error;
    connectionStatus?: string;
    filter?: StreamLayerViewFilter;
    graphics?: Collection | any[];
  }

  interface UI extends Accessor {
    container: any;
    height: number;
    padding: any;
    view: MapView | SceneView;
    width: number;

    add(component: Widget | any | string | any | any, position?: string | any): void;
    empty(position?: string): void;
    move(component: Widget | any | string | any | any, position?: string): void;
    remove(component: any | any[]): void;
  }

  interface UIConstructor {
    new(properties?: UIProperties): UI;
  }

  export const UI: UIConstructor;

  interface UIProperties {
    container?: any;
    height?: number;
    padding?: any | number;
    view?: MapView | SceneView;
    width?: number;
  }

  interface DefaultUI extends UI {
    components: string[];
  }

  interface DefaultUIConstructor {
    new(properties?: DefaultUIProperties): DefaultUI;
  }

  export const DefaultUI: DefaultUIConstructor;

  interface DefaultUIProperties extends UIProperties {
    components?: string[];
  }

  interface InitialViewProperties extends Accessor, corePromise {
    spatialReference: SpatialReference;
    viewpoint: Viewpoint;

    clone(): this;
  }

  interface InitialViewPropertiesConstructor {
    new(properties?: InitialViewPropertiesProperties): InitialViewProperties;
  }

  export const InitialViewProperties: InitialViewPropertiesConstructor;

  interface InitialViewPropertiesProperties {
    spatialReference?: SpatialReferenceProperties;
    viewpoint?: ViewpointProperties;
  }

  interface Environment extends Accessor {
    lighting: Lighting;

    clone(): this;
  }

  interface EnvironmentConstructor {
    new(properties?: EnvironmentProperties): Environment;
  }

  export const Environment: EnvironmentConstructor;

  interface EnvironmentProperties {
    lighting?: LightingProperties;
  }

  interface websceneInitialViewProperties extends Accessor, corePromise {
    environment: Environment;
    spatialReference: SpatialReference;
    viewingMode: string;
    viewpoint: Viewpoint;

    clone(): this;
  }

  interface websceneInitialViewPropertiesConstructor {
    new(properties?: websceneInitialViewPropertiesProperties): websceneInitialViewProperties;
  }

  export const websceneInitialViewProperties: websceneInitialViewPropertiesConstructor;

  interface websceneInitialViewPropertiesProperties {
    environment?: EnvironmentProperties;
    spatialReference?: SpatialReferenceProperties;
    viewingMode?: string;
    viewpoint?: ViewpointProperties;
  }

  interface Lighting extends Accessor, corePromise {
    date: Date;
    directShadowsEnabled: boolean;
    displayUTCOffset: number;

    clone(): this;
  }

  interface LightingConstructor {
    new(properties?: LightingProperties): Lighting;
  }

  export const Lighting: LightingConstructor;

  interface LightingProperties {
    date?: Date;
    directShadowsEnabled?: boolean;
    displayUTCOffset?: number;
  }

  interface Presentation extends Accessor {
    slides: Collection;

    clone(): this;
  }

  interface PresentationConstructor {
    new(properties?: PresentationProperties): Presentation;
  }

  export const Presentation: PresentationConstructor;

  interface PresentationProperties {
    slides?: Collection | any[];
  }

  interface Slide extends Accessor {
    basemap: Basemap;
    description: SlideDescription;
    environment: Environment;
    id: string;
    thumbnail: SlideThumbnail;
    title: SlideTitle;
    viewpoint: Viewpoint;
    visibleLayers: SlideVisibleLayers;

    applyTo(view: SceneView, options?: SlideApplyToOptions): IPromise<any>;
    clone(): this;
    updateFrom(view: SceneView, options?: SlideUpdateFromOptions): IPromise<any>;
  }

  interface SlideConstructor {
    new(properties?: SlideProperties): Slide;


    createFrom(view: SceneView, options?: SlideCreateFromOptions): IPromise<any>;
  }

  export const Slide: SlideConstructor;

  interface SlideProperties {
    basemap?: Basemap | string;
    description?: SlideDescriptionProperties;
    environment?: EnvironmentProperties;
    id?: string;
    thumbnail?: SlideThumbnailProperties;
    title?: SlideTitleProperties;
    viewpoint?: ViewpointProperties;
    visibleLayers?: SlideVisibleLayers;
  }

  interface Attribution extends Widget {
    view: MapView | SceneView;
    viewModel: AttributionViewModel;

    render(): any;
  }

  interface AttributionConstructor {
    new(properties?: AttributionProperties): Attribution;
  }

  export const Attribution: AttributionConstructor;

  interface AttributionProperties extends WidgetProperties {
    view?: MapView | SceneView;
    viewModel?: AttributionViewModel;
  }

  interface BasemapGallery extends Widget {
    activeBasemap: Basemap;
    source: LocalBasemapsSource | PortalBasemapsSource;
    view: MapView | SceneView;
    viewModel: BasemapGalleryViewModel;

    render(): any;
  }

  interface BasemapGalleryConstructor {
    new(properties?: BasemapGalleryProperties): BasemapGallery;
  }

  export const BasemapGallery: BasemapGalleryConstructor;

  interface BasemapGalleryProperties extends WidgetProperties {
    activeBasemap?: BasemapProperties;
    source?: LocalBasemapsSource | PortalBasemapsSource;
    view?: MapView | SceneView;
    viewModel?: BasemapGalleryViewModelProperties;
  }

  interface BasemapToggle extends Widget {
    activeBasemap: Basemap;
    nextBasemap: Basemap;
    titleVisible: boolean;
    view: MapView | SceneView;
    viewModel: BasemapToggleViewModel;

    render(): any;
    toggle(): void;
  }

  interface BasemapToggleConstructor {
    new(properties?: BasemapToggleProperties): BasemapToggle;
  }

  export const BasemapToggle: BasemapToggleConstructor;

  interface BasemapToggleProperties extends WidgetProperties {
    activeBasemap?: BasemapProperties;
    nextBasemap?: Basemap | string;
    titleVisible?: boolean;
    view?: MapView | SceneView;
    viewModel?: BasemapToggleViewModelProperties;
  }

  interface ColorSlider extends Accessor, Widgette {
    handlesVisible: boolean;
    histogram: any;
    histogramVisible: boolean;
    histogramWidth: number;
    labelsVisible: boolean;
    maxValue: number;
    minValue: number;
    numHandles: number;
    statistics: any;
    statisticsVisible: boolean;
    syncedHandles: boolean;
    ticksVisible: boolean;
    values: ColorSliderValues[];
    visualVariable: any;
  }

  interface ColorSliderConstructor {
    new(properties?: ColorSliderProperties): ColorSlider;
  }

  export const ColorSlider: ColorSliderConstructor;

  interface ColorSliderProperties extends WidgetteProperties {
    handlesVisible?: boolean;
    histogram?: any;
    histogramVisible?: boolean;
    histogramWidth?: number;
    labelsVisible?: boolean;
    maxValue?: number;
    minValue?: number;
    numHandles?: number;
    statistics?: any;
    statisticsVisible?: boolean;
    syncedHandles?: boolean;
    ticksVisible?: boolean;
    values?: ColorSliderValues[];
    visualVariable?: any;
  }

  interface Compass extends Widget {
    view: MapView | SceneView;
    viewModel: CompassViewModel;

    render(): any;
    reset(): void;
  }

  interface CompassConstructor {
    new(properties?: CompassProperties): Compass;
  }

  export const Compass: CompassConstructor;

  interface CompassProperties extends WidgetProperties {
    view?: MapView | SceneView;
    viewModel?: CompassViewModelProperties;
  }

  interface Expand extends Widget {
    autoCollapse: boolean;
    collapseIconClass: string;
    collapseTooltip: string;
    content: any;
    expanded: boolean;
    expandIconClass: string;
    expandTooltip: string;
    iconNumber: string;
    view: MapView | SceneView;
    viewModel: ExpandViewModel;

    collapse(): void;
    expand(): void;
    render(): any;
    toggle(): void;
  }

  interface ExpandConstructor {
    new(properties?: ExpandProperties): Expand;
  }

  export const Expand: ExpandConstructor;

  interface ExpandProperties extends WidgetProperties {
    autoCollapse?: boolean;
    collapseIconClass?: string;
    collapseTooltip?: string;
    content?: any | string | Widget;
    expanded?: boolean;
    expandIconClass?: string;
    expandTooltip?: string;
    iconNumber?: string;
    view?: MapView | SceneView;
    viewModel?: ExpandViewModelProperties;
  }

  interface Home extends Widget {
    view: MapView | SceneView;
    viewModel: HomeViewModel;
    viewpoint: Viewpoint;

    go(): void;
    render(): any;
  }

  interface HomeConstructor {
    new(properties?: HomeProperties): Home;
  }

  export const Home: HomeConstructor;

  interface HomeProperties extends WidgetProperties {
    view?: MapView | SceneView;
    viewModel?: HomeViewModelProperties;
    viewpoint?: ViewpointProperties;
  }

  interface LayerList extends Widget {
    createActionsFunction: Function;
    listItemCreatedFunction: Function;
    operationalItems: Collection;
    view: MapView | SceneView;
    viewModel: LayerListViewModel;

    render(): any;
    triggerAction(action: Action, item: ListItem): void;
  }

  interface LayerListConstructor {
    new(properties?: LayerListProperties): LayerList;
  }

  export const LayerList: LayerListConstructor;

  interface LayerListProperties extends WidgetProperties {
    createActionsFunction?: Function;
    listItemCreatedFunction?: Function;
    operationalItems?: Collection | any[];
    view?: MapView | SceneView;
    viewModel?: LayerListViewModelProperties;
  }

  interface Legend extends Widget {
    layerInfos: LegendLayerInfos[];
    view: MapView | SceneView;

    render(): any;
  }

  interface LegendConstructor {
    new(properties?: LegendProperties): Legend;
  }

  export const Legend: LegendConstructor;

  interface LegendProperties extends WidgetProperties {
    layerInfos?: LegendLayerInfos[];
    view?: MapView | SceneView;
  }

  interface Locate extends Widget {
    geolocationOptions: any;
    goToLocationEnabled: boolean;
    graphic: Graphic;
    view: MapView | SceneView;
    viewModel: LocateViewModel;

    locate(): IPromise<any>;
    render(): any;
  }

  interface LocateConstructor {
    new(properties?: LocateProperties): Locate;
  }

  export const Locate: LocateConstructor;

  interface LocateProperties extends WidgetProperties {
    geolocationOptions?: any;
    goToLocationEnabled?: boolean;
    graphic?: GraphicProperties;
    view?: MapView | SceneView;
    viewModel?: LocateViewModelProperties;
  }

  interface NavigationToggle extends Widget {
    layout: string;
    view: SceneView;
    viewModel: NavigationToggleViewModel;

    render(): any;
    toggle(): void;
  }

  interface NavigationToggleConstructor {
    new(properties?: NavigationToggleProperties): NavigationToggle;
  }

  export const NavigationToggle: NavigationToggleConstructor;

  interface NavigationToggleProperties extends WidgetProperties {
    layout?: string;
    view?: SceneViewProperties;
    viewModel?: NavigationToggleViewModelProperties;
  }

  interface Popup extends Accessor, Widgette, Evented {
    actions: Collection;
    content: string;
    currentDockPosition: string;
    dockEnabled: boolean;
    dockOptions: PopupDockOptions;
    featureCount: number;
    features: Graphic[];
    highlightEnabled: boolean;
    location: Point;
    promises: IPromise<any>[];
    selectedFeature: Graphic;
    selectedFeatureIndex: number;
    title: string;
    view: MapView | SceneView;
    viewModel: PopupViewModel;

    clear(): void;
    close(): void;
    next(): PopupViewModel;
    open(options?: PopupOpenOptions): void;
    previous(): PopupViewModel;
    reposition(): void;
    triggerAction(actionIndex: number): void;
  }

  interface PopupConstructor {
    new(properties?: PopupProperties): Popup;
  }

  export const Popup: PopupConstructor;

  interface PopupProperties extends WidgetteProperties {
    actions?: Collection | any[];
    content?: string | any;
    currentDockPosition?: string;
    dockEnabled?: boolean;
    dockOptions?: PopupDockOptions;
    featureCount?: number;
    features?: GraphicProperties[];
    highlightEnabled?: boolean;
    location?: PointProperties;
    promises?: IPromise<any>[];
    selectedFeature?: GraphicProperties;
    selectedFeatureIndex?: number;
    title?: string;
    view?: MapView | SceneView;
    viewModel?: PopupViewModelProperties;
  }

  interface Print extends Widget {
    printServiceUrl: string;
    view: MapView;
    viewModel: PrintViewModel;

    render(): any;
  }

  interface PrintConstructor {
    new(properties?: PrintProperties): Print;
  }

  export const Print: PrintConstructor;

  interface PrintProperties extends WidgetProperties {
    printServiceUrl?: string;
    view?: MapViewProperties;
    viewModel?: PrintViewModelProperties;
  }

  interface ScaleBar extends Widget {
    style: string;
    unit: string;
    view: MapView;
    viewModel: ScaleBarViewModel;

    render(): any;
  }

  interface ScaleBarConstructor {
    new(properties?: ScaleBarProperties): ScaleBar;
  }

  export const ScaleBar: ScaleBarConstructor;

  interface ScaleBarProperties extends WidgetProperties {
    style?: string;
    unit?: string;
    view?: MapViewProperties;
    viewModel?: ScaleBarViewModelProperties;
  }

  interface Search extends Widget {
    activeSource: FeatureLayer | Locator;
    activeSourceIndex: number;
    allPlaceholder: string;
    autoSelect: boolean;
    defaultSource: any | any;
    maxResults: number;
    maxSuggestions: number;
    minSuggestCharacters: number;
    popupEnabled: boolean;
    popupOpenOnSelect: boolean;
    popupTemplate: PopupTemplate;
    resultGraphic: Graphic;
    resultGraphicEnabled: boolean;
    results: any[];
    searchAllEnabled: boolean;
    searching: boolean;
    searchTerm: string;
    selectedResult: any;
    sources: Collection;
    suggestions: any[];
    suggestionsEnabled: boolean;
    view: MapView | SceneView;
    viewModel: SearchViewModel;

    blur(): void;
    clear(): void;
    focus(): void;
    render(): any;
    search(searchTerm?: string | Geometry | any | number[][]): IPromise<any>;
    suggest(value?: string): IPromise<any>;
  }

  interface SearchConstructor {
    new(properties?: SearchProperties): Search;
  }

  export const Search: SearchConstructor;

  interface SearchProperties extends WidgetProperties {
    activeSource?: FeatureLayer | Locator;
    activeSourceIndex?: number;
    allPlaceholder?: string;
    autoSelect?: boolean;
    defaultSource?: any | any;
    maxResults?: number;
    maxSuggestions?: number;
    minSuggestCharacters?: number;
    popupEnabled?: boolean;
    popupOpenOnSelect?: boolean;
    popupTemplate?: PopupTemplateProperties;
    resultGraphic?: GraphicProperties;
    resultGraphicEnabled?: boolean;
    results?: any[];
    searchAllEnabled?: boolean;
    searching?: boolean;
    searchTerm?: string;
    selectedResult?: any;
    sources?: Collection | any[];
    suggestions?: any[];
    suggestionsEnabled?: boolean;
    view?: MapView | SceneView;
    viewModel?: SearchViewModelProperties;
  }

  interface SizeSlider extends Accessor, Widgette {
    handlesVisible: boolean;
    histogram: any;
    histogramVisible: boolean;
    histogramWidth: number;
    labelsVisible: boolean;
    maxSize: number;
    maxValue: number;
    minSize: number;
    minValue: number;
    statistics: any;
    statisticsVisible: boolean;
    ticksVisible: boolean;
    values: number[];
    visualVariable: any;
  }

  interface SizeSliderConstructor {
    new(properties?: SizeSliderProperties): SizeSlider;
  }

  export const SizeSlider: SizeSliderConstructor;

  interface SizeSliderProperties extends WidgetteProperties {
    handlesVisible?: boolean;
    histogram?: any;
    histogramVisible?: boolean;
    histogramWidth?: number;
    labelsVisible?: boolean;
    maxSize?: number;
    maxValue?: number;
    minSize?: number;
    minValue?: number;
    statistics?: any;
    statisticsVisible?: boolean;
    ticksVisible?: boolean;
    values?: number[];
    visualVariable?: any;
  }

  interface Track extends Widget {
    geolocationOptions: any;
    goToLocationEnabled: boolean;
    graphic: Graphic;
    tracking: boolean;
    view: MapView | SceneView;
    viewModel: TrackViewModel;

    render(): any;
    start(): void;
    stop(): void;
  }

  interface TrackConstructor {
    new(properties?: TrackProperties): Track;
  }

  export const Track: TrackConstructor;

  interface TrackProperties extends WidgetProperties {
    geolocationOptions?: any;
    goToLocationEnabled?: boolean;
    graphic?: GraphicProperties;
    tracking?: boolean;
    view?: MapView | SceneView;
    viewModel?: TrackViewModelProperties;
  }

  interface UnivariateColorSizeSlider extends Accessor, Widgette {
    handlesVisible: boolean;
    histogram: any;
    histogramVisible: boolean;
    histogramWidth: number;
    labelsVisible: boolean;
    maxSize: number;
    maxValue: number;
    minSize: number;
    minValue: number;
    statistics: any;
    statisticsVisible: boolean;
    ticksVisible: boolean;
    values: number[];
    visualVariables: any[];
  }

  interface UnivariateColorSizeSliderConstructor {
    new(properties?: UnivariateColorSizeSliderProperties): UnivariateColorSizeSlider;
  }

  export const UnivariateColorSizeSlider: UnivariateColorSizeSliderConstructor;

  interface UnivariateColorSizeSliderProperties extends WidgetteProperties {
    handlesVisible?: boolean;
    histogram?: any;
    histogramVisible?: boolean;
    histogramWidth?: number;
    labelsVisible?: boolean;
    maxSize?: number;
    maxValue?: number;
    minSize?: number;
    minValue?: number;
    statistics?: any;
    statisticsVisible?: boolean;
    ticksVisible?: boolean;
    values?: number[];
    visualVariables?: any[];
  }

  interface Widget extends Accessor, Evented {
    container: string;
    destroyed: boolean;
    id: string;

    destroy(): void;
    own(handles: any[]): void;
    postInitialize(): void;
    renderNow(): void;
    scheduleRender(): void;
    startup(): void;
  }

  interface WidgetConstructor {
    new(properties?: WidgetProperties): Widget;
  }

  export const Widget: WidgetConstructor;

  interface WidgetProperties {
    container?: string | any;
    destroyed?: boolean;
    id?: string;
  }

  interface Zoom extends Widget {
    view: MapView | SceneView;
    viewModel: ZoomViewModel;

    render(): any;
    zoomIn(): void;
    zoomOut(): void;
  }

  interface ZoomConstructor {
    new(properties?: ZoomProperties): Zoom;
  }

  export const Zoom: ZoomConstructor;

  interface ZoomProperties extends WidgetProperties {
    view?: MapView | SceneView;
    viewModel?: ZoomViewModelProperties;
  }

  interface AttributionViewModel {
    attributionText: string;
    itemDelimiter: string;
    state: string;
    view: MapView | SceneView;
  }

  interface AttributionViewModelConstructor {
    new(properties?: any): AttributionViewModel;
  }

  export const AttributionViewModel: AttributionViewModelConstructor;

  interface BasemapGalleryViewModel extends Accessor {
    activeBasemap: Basemap;
    items: Collection;
    source: LocalBasemapsSource | PortalBasemapsSource;
    state: string;
    view: MapView | SceneView;

    basemapEquals(basemap1: Basemap, basemap2: Basemap): boolean;
  }

  interface BasemapGalleryViewModelConstructor {
    new(properties?: BasemapGalleryViewModelProperties): BasemapGalleryViewModel;
  }

  export const BasemapGalleryViewModel: BasemapGalleryViewModelConstructor;

  interface BasemapGalleryViewModelProperties {
    activeBasemap?: BasemapProperties;
    items?: Collection | any[];
    source?: LocalBasemapsSource | PortalBasemapsSource;
    state?: string;
    view?: MapView | SceneView;
  }

  interface BasemapToggleViewModel extends Accessor, Evented {
    activeBasemap: Basemap;
    nextBasemap: Basemap;
    state: string;
    view: MapView | SceneView;

    toggle(): void;
  }

  interface BasemapToggleViewModelConstructor {
    new(properties?: BasemapToggleViewModelProperties): BasemapToggleViewModel;


    getThumbnailUrl(basemap: Basemap): string;
  }

  export const BasemapToggleViewModel: BasemapToggleViewModelConstructor;

  interface BasemapToggleViewModelProperties {
    activeBasemap?: BasemapProperties;
    nextBasemap?: Basemap | string;
    state?: string;
    view?: MapView | SceneView;
  }

  interface CompassViewModel extends Accessor {
    orientation: any;
    state: string;
    view: MapView | SceneView;

    reset(): void;
  }

  interface CompassViewModelConstructor {
    new(properties?: CompassViewModelProperties): CompassViewModel;
  }

  export const CompassViewModel: CompassViewModelConstructor;

  interface CompassViewModelProperties {
    orientation?: any;
    state?: string;
    view?: MapView | SceneView;
  }

  interface ExpandViewModel extends Accessor {
    autoCollapse: boolean;
    expanded: boolean;
    state: string;
    view: MapView | SceneView;
  }

  interface ExpandViewModelConstructor {
    new(properties?: ExpandViewModelProperties): ExpandViewModel;
  }

  export const ExpandViewModel: ExpandViewModelConstructor;

  interface ExpandViewModelProperties {
    autoCollapse?: boolean;
    expanded?: boolean;
    state?: string;
    view?: MapView | SceneView;
  }

  interface HomeViewModel extends Accessor, Evented {
    state: string;
    view: MapView | SceneView;
    viewpoint: Viewpoint;

    go(): void;
  }

  interface HomeViewModelConstructor {
    new(properties?: HomeViewModelProperties): HomeViewModel;
  }

  export const HomeViewModel: HomeViewModelConstructor;

  interface HomeViewModelProperties {
    state?: string;
    view?: MapView | SceneView;
    viewpoint?: ViewpointProperties;
  }

  interface LayerListViewModel extends Accessor {
    createActionsFunction: Function;
    listItemCreatedFunction: Function;
    operationalItems: Collection;
    state: string;
    view: MapView | SceneView;

    triggerAction(action: Action, item: ListItem): void;
  }

  interface LayerListViewModelConstructor {
    new(properties?: LayerListViewModelProperties): LayerListViewModel;
  }

  export const LayerListViewModel: LayerListViewModelConstructor;

  interface LayerListViewModelProperties {
    createActionsFunction?: Function;
    listItemCreatedFunction?: Function;
    operationalItems?: Collection | any[];
    state?: string;
    view?: MapView | SceneView;
  }

  interface ListItem {
    actionsOpen: boolean;
    actionsSections: Collection;
    children: Collection;
    error: Error;
    layer: Layer;
    layerView: LayerView;
    open: boolean;
    title: string;
    updating: boolean;
    view: MapView | SceneView;
    visibilityMode: string;
    visible: boolean;
    visibleAtCurrentScale: boolean;

    clone(): this;
  }

  interface ListItemConstructor {
    new(): ListItem;
  }

  export const ListItem: ListItemConstructor;

  interface LocateViewModel extends Accessor, Evented, GeolocationPositioning {
    state: string;

    locate(): IPromise<any>;
  }

  interface LocateViewModelConstructor {
    new(properties?: LocateViewModelProperties): LocateViewModel;
  }

  export const LocateViewModel: LocateViewModelConstructor;

  interface LocateViewModelProperties extends GeolocationPositioningProperties {
    state?: string;
  }

  interface NavigationToggleViewModel extends Accessor {
    navigationMode: string;
    state: string;
    view: SceneView;

    toggle(): void;
  }

  interface NavigationToggleViewModelConstructor {
    new(properties?: NavigationToggleViewModelProperties): NavigationToggleViewModel;
  }

  export const NavigationToggleViewModel: NavigationToggleViewModelConstructor;

  interface NavigationToggleViewModelProperties {
    navigationMode?: string;
    state?: string;
    view?: SceneViewProperties;
  }

  interface PrintViewModel extends Accessor {
    printServiceUrl: string;
    updateDelay: number;
    view: MapView;

    print(printTemplate: PrintTemplate): IPromise<any>;
  }

  interface PrintViewModelConstructor {
    new(properties?: PrintViewModelProperties): PrintViewModel;
  }

  export const PrintViewModel: PrintViewModelConstructor;

  interface PrintViewModelProperties {
    printServiceUrl?: string;
    updateDelay?: number;
    view?: MapViewProperties;
  }

  interface PopupViewModel extends Accessor, Evented {
    actions: Collection;
    content: string;
    featureCount: number;
    features: Graphic[];
    highlightEnabled: boolean;
    location: Point;
    pendingPromisesCount: number;
    promises: IPromise<any>[];
    selectedFeature: Graphic;
    selectedFeatureIndex: number;
    state: string;
    title: string;
    view: MapView | SceneView;

    clear(): void;
    next(): PopupViewModel;
    previous(): PopupViewModel;
    triggerAction(actionIndex: number): void;
  }

  interface PopupViewModelConstructor {
    new(properties?: PopupViewModelProperties): PopupViewModel;
  }

  export const PopupViewModel: PopupViewModelConstructor;

  interface PopupViewModelProperties {
    actions?: Collection | any[];
    content?: string | any;
    featureCount?: number;
    features?: GraphicProperties[];
    highlightEnabled?: boolean;
    location?: PointProperties;
    pendingPromisesCount?: number;
    promises?: IPromise<any>[];
    selectedFeature?: GraphicProperties;
    selectedFeatureIndex?: number;
    state?: string;
    title?: string;
    view?: MapView | SceneView;
  }

  interface ScaleBarViewModel extends Accessor {
    view: MapView;
  }

  interface ScaleBarViewModelConstructor {
    new(properties?: ScaleBarViewModelProperties): ScaleBarViewModel;
  }

  export const ScaleBarViewModel: ScaleBarViewModelConstructor;

  interface ScaleBarViewModelProperties {
    view?: MapViewProperties;
  }

  interface SearchViewModel extends Accessor, Evented {
    activeSource: FeatureLayer | Locator;
    activeSourceIndex: number;
    allPlaceholder: string;
    autoSelect: boolean;
    defaultSource: any | any;
    maxInputLength: number;
    maxResults: number;
    maxSuggestions: number;
    minSuggestCharacters: number;
    placeholder: string;
    popupEnabled: boolean;
    popupOpenOnSelect: boolean;
    popupTemplate: PopupTemplate;
    resultGraphic: Graphic;
    resultGraphicEnabled: boolean;
    results: any[];
    searchAllEnabled: boolean;
    searchTerm: string;
    selectedResult: any;
    sources: Collection;
    suggestionDelay: number;
    suggestions: any[];
    suggestionsEnabled: boolean;
    view: MapView | SceneView;

    cancelSuggest(): void;
    clear(): void;
    search(searchTerm?: string | Geometry | any | number[][]): IPromise<any>;
    suggest(value?: string): IPromise<any>;

    on(name: "suggest-complete", eventHandler: SearchViewModelSuggestCompleteEventHandler): IHandle;
    on(name: "suggest-complete", modifiers: string[], eventHandler: SearchViewModelSuggestCompleteEventHandler): IHandle;
    on(name: "search-clear", eventHandler: SearchViewModelSearchClearEventHandler): IHandle;
    on(name: "search-clear", modifiers: string[], eventHandler: SearchViewModelSearchClearEventHandler): IHandle;
    on(name: "search-start", eventHandler: SearchViewModelSearchStartEventHandler): IHandle;
    on(name: "search-start", modifiers: string[], eventHandler: SearchViewModelSearchStartEventHandler): IHandle;
    on(name: "suggest-start", eventHandler: SearchViewModelSuggestStartEventHandler): IHandle;
    on(name: "suggest-start", modifiers: string[], eventHandler: SearchViewModelSuggestStartEventHandler): IHandle;
    on(name: "load", eventHandler: SearchViewModelLoadEventHandler): IHandle;
    on(name: "load", modifiers: string[], eventHandler: SearchViewModelLoadEventHandler): IHandle;
    on(name: "search-complete", eventHandler: SearchViewModelSearchCompleteEventHandler): IHandle;
    on(name: "search-complete", modifiers: string[], eventHandler: SearchViewModelSearchCompleteEventHandler): IHandle;
    on(name: "select-result", eventHandler: SearchViewModelSelectResultEventHandler): IHandle;
    on(name: "select-result", modifiers: string[], eventHandler: SearchViewModelSelectResultEventHandler): IHandle;
  }

  interface SearchViewModelConstructor {
    new(properties?: SearchViewModelProperties): SearchViewModel;
  }

  export const SearchViewModel: SearchViewModelConstructor;

  interface SearchViewModelProperties {
    activeSource?: FeatureLayer | Locator;
    activeSourceIndex?: number;
    allPlaceholder?: string;
    autoSelect?: boolean;
    defaultSource?: any | any;
    maxInputLength?: number;
    maxResults?: number;
    maxSuggestions?: number;
    minSuggestCharacters?: number;
    placeholder?: string;
    popupEnabled?: boolean;
    popupOpenOnSelect?: boolean;
    popupTemplate?: PopupTemplateProperties;
    resultGraphic?: GraphicProperties;
    resultGraphicEnabled?: boolean;
    results?: any[];
    searchAllEnabled?: boolean;
    searchTerm?: string;
    selectedResult?: any;
    sources?: Collection | any[];
    suggestionDelay?: number;
    suggestions?: any[];
    suggestionsEnabled?: boolean;
    view?: MapView | SceneView;
  }

  interface TrackViewModel extends Accessor, Evented, GeolocationPositioning {
    state: string;
    tracking: boolean;

    start(): void;
    stop(): void;
  }

  interface TrackViewModelConstructor {
    new(properties?: TrackViewModelProperties): TrackViewModel;
  }

  export const TrackViewModel: TrackViewModelConstructor;

  interface TrackViewModelProperties extends GeolocationPositioningProperties {
    state?: string;
    tracking?: boolean;
  }

  interface ZoomViewModel extends Accessor {
    canZoomIn: boolean;
    canZoomOut: boolean;
    state: string;
    view: MapView | SceneView;

    zoomIn(): void;
    zoomOut(): void;
  }

  interface ZoomViewModelConstructor {
    new(properties?: ZoomViewModelProperties): ZoomViewModel;
  }

  export const ZoomViewModel: ZoomViewModelConstructor;

  interface ZoomViewModelProperties {
    canZoomIn?: boolean;
    canZoomOut?: boolean;
    state?: string;
    view?: MapView | SceneView;
  }

  interface Evented {
    hasEventListener(type: string): boolean;
    on(type: string, listener: EventHandler): IHandle;
  }

  interface EventedConstructor {
    new(): Evented;
  }

  export const Evented: EventedConstructor;

  interface JSONSupport {
    toJSON(): any;
  }

  interface JSONSupportConstructor {
    new(): JSONSupport;


    fromJSON(json: any): any;
  }

  export const JSONSupport: JSONSupportConstructor;

  interface Loadable {
    loadError: Error;
    loadStatus: string;
    loadWarnings: any[];

    always(callbackOrErrback?: Function): IPromise<any>;
    cancelLoad(): void;
    isFulfilled(): boolean;
    isRejected(): boolean;
    isResolved(): boolean;
    load(): IPromise<any>;
    otherwise(errback?: Function): IPromise<any>;
    then(callback?: Function, errback?: Function, progback?: Function): IPromise<any>;
  }

  interface LoadableConstructor {
    new(): Loadable;
  }

  export const Loadable: LoadableConstructor;

  interface LoadableProperties {
    loadError?: Error;
    loadStatus?: string;
    loadWarnings?: any[];
  }

  interface corePromise {
    always(callbackOrErrback?: Function): IPromise<any>;
    isFulfilled(): boolean;
    isRejected(): boolean;
    isResolved(): boolean;
    otherwise(errback?: Function): IPromise<any>;
    then(callback?: Function, errback?: Function, progback?: Function): IPromise<any>;
  }

  interface corePromiseConstructor {
    new(): corePromise;
  }

  export const corePromise: corePromiseConstructor;

  interface DynamicLayer {
    portalItem: PortalItem;
    url: string;

    fetchImage(extent: Extent, width: number, height: number, options?: DynamicLayerFetchImageOptions): IPromise<any>;
    getImageUrl(extent: Extent, width: number, height: number, options?: DynamicLayerGetImageUrlOptions): IPromise<any> | string;
  }

  interface DynamicLayerConstructor {
    new(): DynamicLayer;
  }

  export const DynamicLayer: DynamicLayerConstructor;

  interface DynamicLayerProperties {
    portalItem?: PortalItemProperties;
    url?: string;
  }

  interface TiledLayer {
    tileInfo: TileInfo;
  }

  interface TiledLayerConstructor {
    new(properties?: TiledLayerProperties): TiledLayer;

    fromJSON(json: any): TiledLayer;
  }

  export const TiledLayer: TiledLayerConstructor;

  interface TiledLayerProperties {
    tileInfo?: TileInfoProperties;
  }

  interface ArcGISCachedService {
    maxScale: number;
    minScale: number;
    tileInfo: TileInfo;

    fromJSON(json: any): any;
    toJSON(): any;
  }

  interface ArcGISCachedServiceConstructor {
    new(properties?: ArcGISCachedServiceProperties): ArcGISCachedService;

    fromJSON(json: any): ArcGISCachedService;
  }

  export const ArcGISCachedService: ArcGISCachedServiceConstructor;

  interface ArcGISCachedServiceProperties {
    maxScale?: number;
    minScale?: number;
    tileInfo?: TileInfoProperties;
  }

  interface ArcGISDynamicMapService {
    allSublayers: Collection;
    dpi: number;
    gdbVersion: string;
    imageFormat: string;
    imageMaxHeight: number;
    imageMaxWidth: number;
    imageTransparency: boolean;
    sublayers: Collection;

    createServiceSublayers(): Collection;
    findSublayerById(id: number): Sublayer;
    getExportImageParameters(extent: Extent, width: number, height: number, options?: ArcGISDynamicMapServiceGetExportImageParametersOptions): any;
  }

  interface ArcGISDynamicMapServiceConstructor {
    new(): ArcGISDynamicMapService;
  }

  export const ArcGISDynamicMapService: ArcGISDynamicMapServiceConstructor;

  interface ArcGISDynamicMapServiceProperties {
    allSublayers?: Collection | any[];
    dpi?: number;
    gdbVersion?: string;
    imageFormat?: string;
    imageMaxHeight?: number;
    imageMaxWidth?: number;
    imageTransparency?: boolean;
    sublayers?: Collection | any[];
  }

  interface ArcGISImageService {
    compressionQuality: number;
    compressionTolerance: number;
    copyright: string;
    definitionExpression: string;
    domainFields: Field[];
    fields: Field[];
    format: string;
    fullExtent: Extent;
    hasMultidimensions: boolean;
    hasRasterAttributeTable: boolean;
    imageMaxHeight: number;
    imageMaxWidth: number;
    mosaicRule: MosaicRule;
    multidimensionalInfo: any;
    pixelType: string;
    popupTemplate: PopupTemplate;
    rasterAttributeTable: any;
    rasterAttributeTableFieldPrefix: string;
    rasterFields: Field[];
    renderingRule: RasterFunction;
    spatialReference: SpatialReference;
    url: string;
    version: number;

    fetchImage(extent: Extent, width: number, height: number): IPromise<any>;
    fromJSON(json: any): any;
    toJSON(): any;
  }

  interface ArcGISImageServiceConstructor {
    new(properties?: ArcGISImageServiceProperties): ArcGISImageService;

    fromJSON(json: any): ArcGISImageService;
  }

  export const ArcGISImageService: ArcGISImageServiceConstructor;

  interface ArcGISImageServiceProperties {
    compressionQuality?: number;
    compressionTolerance?: number;
    copyright?: string;
    definitionExpression?: string;
    domainFields?: FieldProperties[];
    fields?: FieldProperties[];
    format?: string;
    fullExtent?: ExtentProperties;
    hasMultidimensions?: boolean;
    hasRasterAttributeTable?: boolean;
    imageMaxHeight?: number;
    imageMaxWidth?: number;
    mosaicRule?: MosaicRuleProperties;
    multidimensionalInfo?: any;
    pixelType?: string;
    popupTemplate?: PopupTemplateProperties;
    rasterAttributeTable?: any;
    rasterAttributeTableFieldPrefix?: string;
    rasterFields?: FieldProperties[];
    renderingRule?: RasterFunctionProperties;
    spatialReference?: SpatialReferenceProperties;
    url?: string;
    version?: number;
  }

  interface ArcGISMapService {
    copyright: string;
    fullExtent: Extent;
    spatialReference: SpatialReference;
    token: string;
  }

  interface ArcGISMapServiceConstructor {
    new(properties?: ArcGISMapServiceProperties): ArcGISMapService;

    fromJSON(json: any): ArcGISMapService;
  }

  export const ArcGISMapService: ArcGISMapServiceConstructor;

  interface ArcGISMapServiceProperties {
    copyright?: string;
    fullExtent?: ExtentProperties;
    spatialReference?: SpatialReferenceProperties;
    token?: string;
  }

  interface PortalLayer {
    portalItem: PortalItem;
  }

  interface PortalLayerConstructor {
    new(properties?: PortalLayerProperties): PortalLayer;

    fromJSON(json: any): PortalLayer;
  }

  export const PortalLayer: PortalLayerConstructor;

  interface PortalLayerProperties {
    portalItem?: PortalItemProperties;
  }

  interface ScaleRangeLayer {
    maxScale: number;
    minScale: number;
  }

  interface ScaleRangeLayerConstructor {
    new(): ScaleRangeLayer;
  }

  export const ScaleRangeLayer: ScaleRangeLayerConstructor;

  interface ScaleRangeLayerProperties {
    maxScale?: number;
    minScale?: number;
  }

  interface SceneService {
    copyright: string;
    layerId: number;
    spatialReference: SpatialReference;
    token: string;
    url: string;
    version: SceneServiceVersion;
  }

  interface SceneServiceConstructor {
    new(properties?: SceneServiceProperties): SceneService;

    fromJSON(json: any): SceneService;
  }

  export const SceneService: SceneServiceConstructor;

  interface SceneServiceProperties {
    copyright?: string;
    layerId?: number;
    spatialReference?: SpatialReferenceProperties;
    token?: string;
    url?: string;
    version?: SceneServiceVersion;
  }

  interface VisualVariablesMixin {
    visualVariables: any[];
  }

  interface VisualVariablesMixinConstructor {
    new(): VisualVariablesMixin;
  }

  export const VisualVariablesMixin: VisualVariablesMixinConstructor;

  interface VisualVariablesMixinProperties {
    visualVariables?: any[];
  }

  interface LayersMixin {
    layers: Collection;

    add(layers: Layer, index?: number): void;
    addMany(layers: Layer[], index?: number): void;
    findLayerById(layerId: string): Layer;
    remove(layer: Layer): Layer;
    removeAll(): Layer[];
    removeMany(layers: Layer[]): Layer[];
    reorder(layer: Layer, index: number): Layer;
  }

  interface LayersMixinConstructor {
    new(): LayersMixin;
  }

  export const LayersMixin: LayersMixinConstructor;

  interface LayersMixinProperties {
    layers?: Collection | any[];
  }

  interface BreakpointsOwner {
    breakpoints: BreakpointsOwnerBreakpoints;
    heightBreakpoint: string;
    orientation: string;
    widthBreakpoint: string;
  }

  interface BreakpointsOwnerConstructor {
    new(): BreakpointsOwner;
  }

  export const BreakpointsOwner: BreakpointsOwnerConstructor;

  interface BreakpointsOwnerProperties {
    breakpoints?: BreakpointsOwnerBreakpoints;
    heightBreakpoint?: string;
    orientation?: string;
    widthBreakpoint?: string;
  }

  interface DOMContainer {
    container: HTMLDivElement | string;
    height: number;
    popup: Popup;
    resizing: boolean;
    size: number[];
    suspended: boolean;
    ui: DefaultUI;
    width: number;
  }

  interface DOMContainerConstructor {
    new(): DOMContainer;
  }

  export const DOMContainer: DOMContainerConstructor;

  interface DOMContainerProperties {
    container?: HTMLDivElement | string;
    height?: number;
    popup?: PopupProperties;
    resizing?: boolean;
    size?: number[];
    suspended?: boolean;
    ui?: DefaultUIProperties;
    width?: number;
  }

  interface Widgette {
    container: string | any;
    visible: boolean;

    destroy(): void;
  }

  interface WidgetteConstructor {
    new(): Widgette;
  }

  export const Widgette: WidgetteConstructor;

  interface WidgetteProperties {
    container?: string | any;
    visible?: boolean;
  }

  interface GeolocationPositioning {
    geolocationOptions: any;
    goToLocationEnabled: boolean;
    graphic: Graphic;
    view: MapView | SceneView;
  }

  interface GeolocationPositioningConstructor {
    new(): GeolocationPositioning;
  }

  export const GeolocationPositioning: GeolocationPositioningConstructor;

  interface GeolocationPositioningProperties {
    geolocationOptions?: any;
    goToLocationEnabled?: boolean;
    graphic?: GraphicProperties;
    view?: MapView | SceneView;
  }

  interface config {
    geometryServiceUrl: string;
    geoRSSServiceUrl: string;
    portalUrl: string;
    request: configRequest;
    workers: configWorkers;
  }

  export const config: config;

  interface kernel {
    version: string;
  }

  export const kernel: kernel;

  interface request {
    esriRequest(url: string, options?: requestEsriRequestOptions): IPromise<any>;
  }

  const __requestMapped: request;
  export const request: typeof __requestMapped.esriRequest;


  interface lang {
    clone(elem: any): any;
  }

  export const lang: lang;

  interface promiseUtils {
    eachAlways(promises: IPromise<any>[] | any): IPromise<EachAlwaysResult[]> | any;
    reject<T>(error?: any): IPromise<T>;
    resolve<T>(value?: T): IPromise<T>;
  }

  export const promiseUtils: promiseUtils;

  interface requireUtils {
    when(moduleRequire: any, moduleNames: string[] | string): IPromise<any>;
  }

  export const requireUtils: requireUtils;

  interface urlUtils {
    addProxyRule(rule: urlUtilsAddProxyRuleRule): number;
    getProxyRule(url: string): any;
    urlToObject(url: string): any;
  }

  export const urlUtils: urlUtils;

  interface watchUtils {
    init(obj: Accessor, propertyName: string | string[], callback: WatchCallback): WatchHandle;
    on(obj: Accessor, propertyName: string, eventName: string, eventHandler: Function, attachedHandler?: EventAttachedCallback, detachedHandler?: EventAttachedCallback): WatchHandle;
    once(obj: Accessor, propertyName: string, callback?: WatchCallback): PromisedWatchHandle;
    pausable(obj: Accessor, propertyName: string, callback?: WatchCallback): PausableWatchHandle;
    watch(obj: Accessor, propertyName: string, callback: WatchCallback): WatchHandle;
    when(obj: Accessor, propertyName: string, callback: WatchCallback): WatchHandle;
    whenDefined(obj: Accessor, propertyName: string, callback: WatchCallback): WatchHandle;
    whenDefinedOnce(obj: Accessor, propertyName: string, callback?: WatchCallback): PromisedWatchHandle;
    whenFalse(obj: Accessor, propertyName: string, callback: WatchCallback): WatchHandle;
    whenFalseOnce(obj: Accessor, propertyName: string, callback?: WatchCallback): PromisedWatchHandle;
    whenNot(obj: Accessor, propertyName: string, callback: WatchCallback): WatchHandle;
    whenNotOnce(obj: Accessor, propertyName: string, callback?: WatchCallback): PromisedWatchHandle;
    whenOnce(obj: Accessor, propertyName: string, callback?: WatchCallback): PromisedWatchHandle;
    whenTrue(obj: Accessor, propertyName: string, callback: WatchCallback): WatchHandle;
    whenTrueOnce(obj: Accessor, propertyName: string, callback?: WatchCallback): PromisedWatchHandle;
    whenUndefined(obj: Accessor, propertyName: string, callback: WatchCallback): WatchHandle;
    whenUndefinedOnce(obj: Accessor, propertyName: string, callback?: WatchCallback): PromisedWatchHandle;
  }

  export const watchUtils: watchUtils;

  interface decorators {
    aliasOf(propertyName: string): Function;
    cast(propertyName: string): Function;
    cast(classFunction: Function): Function;
    declared<T>(baseClass: T, ...mixinClasses: any[]): T;
    property(propertyMetadata?: decoratorsPropertyPropertyMetadata): Function;
    subclass(declaredClass?: string): Function;
  }

  export const decorators: decorators;

  interface workers {
    open(client: any, modulePath: string): IPromise<any>;
  }

  export const workers: workers;

  interface geometryEngine {
    buffer(geometry: Geometry | Geometry[], distance: number | number[], unit: string | number, unionResults?: boolean): Polygon | Polygon[];
    clip(geometry: Geometry, envelope: Extent): Geometry;
    contains(geometry1: Geometry, geometry2: Geometry): boolean;
    convexHull(geometry: Geometry, merge?: boolean): Geometry | Geometry[];
    crosses(geometry1: Geometry, geometry2: Geometry): boolean;
    cut(geometry: Geometry, cutter: Polyline): Geometry[];
    densify(geometry: Geometry, maxSegmentLength: number, maxSegmentLengthUnit: string | number): Geometry;
    difference(inputGeometry: Geometry | Geometry[], subtractor: Geometry): Geometry | Geometry[];
    disjoint(geometry1: Geometry, geometry2: Geometry): boolean;
    distance(geometry1: Geometry, geometry2: Geometry, distanceUnit: string | number): number;
    equals(geometry1: Geometry, geometry2: Geometry): boolean;
    extendedSpatialReferenceInfo(spatialReference: SpatialReference): any;
    flipHorizontal(geometry: Geometry, flipOrigin?: Point): Geometry;
    flipVertical(geometry: Geometry, flipOrigin?: Point): Geometry;
    generalize(geometry: Geometry, maxDeviation: number, removeDegenerateParts?: boolean, maxDeviationUnit?: string | number): Geometry;
    geodesicArea(geometry: Polygon, unit: string | number): number;
    geodesicBuffer(geometry: Geometry | Geometry[], distance: number | number[], unit: string | number, unionResults?: boolean): Polygon | Polygon[];
    geodesicDensify(geometry: Polyline | Polygon, maxSegmentLength: number, maxSegmentLengthUnit: string | number): Geometry;
    geodesicLength(geometry: Geometry, unit: string | number): number;
    intersect(geometry: Geometry | Geometry[], intersector: Geometry): Geometry | Geometry[];
    intersects(geometry1: Geometry, geometry2: Geometry): boolean;
    isSimple(geometry: Geometry): boolean;
    nearestCoordinate(geometry: Geometry, inputPoint: Point): any;
    nearestVertex(geometry: Geometry, inputPoint: Point): any;
    nearestVertices(geometry: Geometry, inputPoint: Point, searchRadius: number, maxVertexCountToReturn: number): any[];
    offset(geometry: Geometry | Geometry[], offsetDistance: number, offsetUnit: string | number, joinType: string, bevelRatio?: number, flattenError?: number): Geometry | Geometry[];
    overlaps(geometry1: Geometry, geometry2: Geometry): boolean;
    planarArea(geometry: Polygon, unit: string | number): number;
    planarLength(geometry: Geometry, unit: string | number): number;
    relate(geometry1: Geometry, geometry2: Geometry, relation: string): boolean;
    rotate(geometry: Geometry, angle: number, rotationOrigin?: Point): Geometry;
    simplify(geometry: Geometry): Geometry;
    symmetricDifference(leftGeometry: Geometry | Geometry[], rightGeometry: Geometry): Geometry | Geometry[];
    touches(geometry1: Geometry, geometry2: Geometry): boolean;
    union(geometries: Geometry[]): Geometry;
    within(geometry1: Geometry, geometry2: Geometry): boolean;
  }

  export const geometryEngine: geometryEngine;

  interface geometryEngineAsync {
    buffer(geometry: Geometry | Geometry[], distance: number | number[], unit: string | number, unionResults?: boolean): IPromise<any>;
    clip(geometry: Geometry, envelope: Extent): IPromise<any>;
    contains(geometry1: Geometry, geometry2: Geometry): IPromise<any>;
    convexHull(geometry: Geometry, merge?: boolean): IPromise<any>;
    crosses(geometry1: Geometry, geometry2: Geometry): IPromise<any>;
    cut(geometry: Geometry, cutter: Polyline): IPromise<any>;
    densify(geometry: Geometry, maxSegmentLength: number, maxSegmentLengthUnit: string | number): IPromise<any>;
    difference(inputGeometry: Geometry | Geometry[], subtractor: Geometry): IPromise<any>;
    disjoint(geometry1: Geometry, geometry2: Geometry): IPromise<any>;
    distance(geometry1: Geometry, geometry2: Geometry, distanceUnit: string | number): IPromise<any>;
    equals(geometry1: Geometry, geometry2: Geometry): IPromise<any>;
    extendedSpatialReferenceInfo(spatialReference: SpatialReference): IPromise<any>;
    flipHorizontal(geometry: Geometry, flipOrigin?: Point): IPromise<any>;
    flipVertical(geometry: Geometry, flipOrigin?: Point): IPromise<any>;
    generalize(geometry: Geometry, maxDeviation: number, removeDegenerateParts?: boolean, maxDeviationUnit?: string | number): IPromise<any>;
    geodesicArea(geometry: Polygon, unit: string | number): IPromise<any>;
    geodesicBuffer(geometry: Geometry | Geometry[], distance: number | number[], unit: string | number, unionResults?: boolean): IPromise<any>;
    geodesicDensify(geometry: Polyline | Polygon, maxSegmentLength: number, maxSegmentLengthUnit: string | number): IPromise<any>;
    geodesicLength(geometry: Geometry, unit: string | number): IPromise<any>;
    intersect(geometry: Geometry | Geometry[], intersector: Geometry): IPromise<any>;
    intersects(geometry1: Geometry, geometry2: Geometry): IPromise<any>;
    isSimple(geometry: Geometry): IPromise<any>;
    nearestCoordinate(geometry: Geometry, inputPoint: Point): IPromise<any>;
    nearestVertex(geometry: Geometry, inputPoint: Point): IPromise<any>;
    nearestVertices(geometry: Geometry, inputPoint: Point, searchRadius: number, maxVertexCountToReturn: number): IPromise<any>;
    offset(geometry: Geometry | Geometry[], offsetDistance: number, offsetUnit: string | number, joinType: string, bevelRatio?: number, flattenError?: number): IPromise<any>;
    overlaps(geometry1: Geometry, geometry2: Geometry): IPromise<any>;
    planarArea(geometry: Polygon, unit: string | number): IPromise<any>;
    planarLength(geometry: Geometry, unit: string | number): IPromise<any>;
    relate(geometry1: Geometry, geometry2: Geometry, relation: string): IPromise<any>;
    rotate(geometry: Geometry, angle: number, rotationOrigin?: Point): IPromise<any>;
    simplify(geometry: Geometry): IPromise<any>;
    symmetricDifference(leftGeometry: Geometry | Geometry[], rightGeometry: Geometry): IPromise<any>;
    touches(geometry1: Geometry, geometry2: Geometry): IPromise<any>;
    union(geometries: Geometry[]): IPromise<any>;
    within(geometry1: Geometry, geometry2: Geometry): IPromise<any>;
  }

  export const geometryEngineAsync: geometryEngineAsync;

  interface jsonUtils {
    fromJSON(json: any): Geometry;
    getJsonType(geometry: Geometry): string;
  }

  export const jsonUtils: jsonUtils;

  interface normalizeUtils {
    normalizeCentralMeridian(geometries: Geometry[], geometryService?: GeometryService): IPromise<any>;
  }

  export const normalizeUtils: normalizeUtils;

  interface webMercatorUtils {
    canProject(source: SpatialReference | any, target: SpatialReference | any): boolean;
    geographicToWebMercator(geometry: Geometry): Geometry;
    lngLatToXY(long: number, lat: number): number[];
    project(geometry: Geometry, spatialReference: SpatialReference | any): Geometry;
    webMercatorToGeographic(geometry: Geometry): Geometry;
    xyToLngLat(x: number, y: number): number[];
  }

  export const webMercatorUtils: webMercatorUtils;

  interface color {
    createContinuousRenderer(params: colorCreateContinuousRendererParams): IPromise<any>;
    createVisualVariable(params: colorCreateVisualVariableParams): IPromise<any>;
  }

  export const color: color;

  interface location {
    createRenderer(params: locationCreateRendererParams): IPromise<any>;
  }

  export const location: location;

  interface size {
    createContinuousRenderer(params: sizeCreateContinuousRendererParams): IPromise<any>;
    createVisualVariables(params: sizeCreateVisualVariablesParams): IPromise<any>;
  }

  export const size: size;

  interface type {
    createRenderer(params: typeCreateRendererParams): IPromise<any>;
  }

  export const type: type;

  interface univariateColorSize {
    createContinuousRenderer(params: univariateColorSizeCreateContinuousRendererParams): IPromise<any>;
    createVisualVariables(params: univariateColorSizeCreateVisualVariablesParams): IPromise<any>;
  }

  export const univariateColorSize: univariateColorSize;

  interface classBreaks {
    classBreaks(params: classBreaksClassBreaksParams): IPromise<any>;
  }

  const __classBreaksMapped: classBreaks;
  export const classBreaks: typeof __classBreaksMapped.classBreaks;


  interface histogram {
    histogram(params: histogramHistogramParams): IPromise<any>;
  }

  const __histogramMapped: histogram;
  export const histogram: typeof __histogramMapped.histogram;


  interface summaryStatistics {
    summaryStatistics(params: summaryStatisticsSummaryStatisticsParams): IPromise<any>;
  }

  const __summaryStatisticsMapped: summaryStatistics;
  export const summaryStatistics: typeof __summaryStatisticsMapped.summaryStatistics;


  interface uniqueValues {
    uniqueValues(params: uniqueValuesUniqueValuesParams): IPromise<any>;
  }

  const __uniqueValuesMapped: uniqueValues;
  export const uniqueValues: typeof __uniqueValuesMapped.uniqueValues;


  interface symbologyColor {
    cloneScheme(scheme: any): any;
    flipColors(scheme: any): any;
    getSchemes(params: colorGetSchemesParams): any;
    getThemes(basemap?: string | Basemap): any[];
  }

  export const symbologyColor: symbologyColor;

  interface symbologyLocation {
    cloneScheme(scheme: any | any | any): any | any | any;
    getSchemes(params: locationGetSchemesParams): any;
  }

  export const symbologyLocation: symbologyLocation;

  interface symbologySize {
    cloneScheme(scheme: any | any | any): any;
    getSchemes(params: sizeGetSchemesParams): any;
  }

  export const symbologySize: symbologySize;

  interface symbologyType {
    cloneScheme(scheme: any | any | any): any;
    getSchemes(params: typeGetSchemesParams): any;
  }

  export const symbologyType: symbologyType;

  interface supportJsonUtils {
    fromJSON(json: any): Renderer;
  }

  export const supportJsonUtils: supportJsonUtils;

  interface symbolsSupportJsonUtils {
    fromJSON(json: any): Symbol;
  }

  export const symbolsSupportJsonUtils: symbolsSupportJsonUtils;

  interface externalRenderers {
    add(view: SceneView, renderer: any): void;
    fromRenderCoordinates(view: SceneView, srcCoordinates: number[], srcStart: number, destCoordinates: number[], destStart: number, destSpatialReference: SpatialReference, count: number): number[];
    remove(view: SceneView, renderer: any): void;
    renderCoordinateTransformAt(view: SceneView, origin: number[], srcSpatialReference: SpatialReference, dest: number[]): number[];
    requestRender(view: SceneView): void;
    toRenderCoordinates(view: SceneView, srcCoordinates: number[], srcStart: number, srcSpatialReference: SpatialReference, destCoordinates: number[], destStart: number, count: number): number[];
  }

  export const externalRenderers: externalRenderers;

  interface widget {
    accessibleHandler(): Function;
    join(...classNames: string[]): string;
    renderable(propertyName?: string | string[]): Function;
    tsx(selector: string, properties?: any, children?: any): any;
    vmEvent(eventNames: string | string[]): Function;
  }

  export const widget: widget;

  interface BasemapGalleryItem {
    basemap: Basemap;
    error: Error;
    state: string;
    view: MapView | SceneView;
  }

  export const BasemapGalleryItem: BasemapGalleryItem;

  interface LocalBasemapsSource {
    basemaps: Collection;
    state: string;
  }

  export const LocalBasemapsSource: LocalBasemapsSource;

  interface PortalBasemapsSource {
    basemaps: Collection;
    filterFunction: Function;
    portal: Portal;
    state: string;
  }

  export const PortalBasemapsSource: PortalBasemapsSource;
}

declare module "esri" {
  export import PromisedWatchHandle = __esri.PromisedWatchHandle;
  export import ItemCallback = __esri.ItemCallback;

  export import ItemCompareCallback = __esri.ItemCompareCallback;

  export import ItemMapCallback = __esri.ItemMapCallback;

  export import ItemReduceCallback = __esri.ItemReduceCallback;

  export import ItemTestCallback = __esri.ItemTestCallback;

  export import PortalItemFetchRelatedItemsParams = __esri.PortalItemFetchRelatedItemsParams;

  export import PortalItemUpdateParams = __esri.PortalItemUpdateParams;

  export import PortalUserAddItemParams = __esri.PortalUserAddItemParams;

  export import PortalUserFetchItemsParams = __esri.PortalUserFetchItemsParams;

  export import PortalFeaturedGroups = __esri.PortalFeaturedGroups;

  export import GroundQueryElevationOptions = __esri.GroundQueryElevationOptions;

  export import PopupTemplateExpressionInfos = __esri.PopupTemplateExpressionInfos;

  export import PopupTemplateFieldInfos = __esri.PopupTemplateFieldInfos;

  export import PopupTemplateFieldInfosFormat = __esri.PopupTemplateFieldInfosFormat;

  export import FeatureLayerApplyEditsEdits = __esri.FeatureLayerApplyEditsEdits;

  export import FeatureLayerCapabilities = __esri.FeatureLayerCapabilities;

  export import FeatureLayerCapabilitiesData = __esri.FeatureLayerCapabilitiesData;

  export import FeatureLayerCapabilitiesEditing = __esri.FeatureLayerCapabilitiesEditing;

  export import FeatureLayerCapabilitiesOperations = __esri.FeatureLayerCapabilitiesOperations;

  export import FeatureLayerCapabilitiesQuery = __esri.FeatureLayerCapabilitiesQuery;

  export import FeatureLayerCapabilitiesQueryRelated = __esri.FeatureLayerCapabilitiesQueryRelated;

  export import FeatureLayerElevationInfo = __esri.FeatureLayerElevationInfo;

  export import FeatureLayerFeatureReduction = __esri.FeatureLayerFeatureReduction;

  export import FeatureLayerGetFieldDomainOptions = __esri.FeatureLayerGetFieldDomainOptions;

  export import FeatureLayerLayerviewCreateEvent = __esri.FeatureLayerLayerviewCreateEvent;

  export import FeatureLayerLayerviewCreateEventHandler = __esri.FeatureLayerLayerviewCreateEventHandler;

  export import FeatureLayerLayerviewDestroyEvent = __esri.FeatureLayerLayerviewDestroyEvent;

  export import FeatureLayerLayerviewDestroyEventHandler = __esri.FeatureLayerLayerviewDestroyEventHandler;

  export import GraphicsLayerElevationInfo = __esri.GraphicsLayerElevationInfo;

  export import GraphicsLayerLayerviewCreateEvent = __esri.GraphicsLayerLayerviewCreateEvent;

  export import GraphicsLayerLayerviewCreateEventHandler = __esri.GraphicsLayerLayerviewCreateEventHandler;

  export import GraphicsLayerLayerviewDestroyEvent = __esri.GraphicsLayerLayerviewDestroyEvent;

  export import GraphicsLayerLayerviewDestroyEventHandler = __esri.GraphicsLayerLayerviewDestroyEventHandler;

  export import LayerFromArcGISServerUrlParams = __esri.LayerFromArcGISServerUrlParams;

  export import LayerFromPortalItemParams = __esri.LayerFromPortalItemParams;

  export import FeatureTemplateThumbnail = __esri.FeatureTemplateThumbnail;

  export import LabelClassLabelExpressionInfo = __esri.LabelClassLabelExpressionInfo;

  export import LabelSymbol3DVerticalOffsetProperties = __esri.LabelSymbol3DVerticalOffsetProperties;
  export import LabelSymbol3DVerticalOffset = __esri.LabelSymbol3DVerticalOffset;

  export import QueryQuantizationParameters = __esri.QueryQuantizationParameters;

  export import ViewPadding = __esri.ViewPadding;

  export import WebMapSourceVersion = __esri.WebMapSourceVersion;

  export import WebSceneSaveAsOptions = __esri.WebSceneSaveAsOptions;

  export import WebSceneSaveOptions = __esri.WebSceneSaveOptions;

  export import WebSceneSourceVersion = __esri.WebSceneSourceVersion;

  export import WebSceneUpdateFromOptions = __esri.WebSceneUpdateFromOptions;

  export import EventHandler = __esri.EventHandler;

  export import SceneViewDragEventOrigin = __esri.SceneViewDragEventOrigin;

  export import SceneViewClickEvent = __esri.SceneViewClickEvent;

  export import SceneViewClickEventHandler = __esri.SceneViewClickEventHandler;

  export import SceneViewDoubleClickEvent = __esri.SceneViewDoubleClickEvent;

  export import SceneViewDoubleClickEventHandler = __esri.SceneViewDoubleClickEventHandler;

  export import SceneViewDragEvent = __esri.SceneViewDragEvent;

  export import SceneViewDragEventHandler = __esri.SceneViewDragEventHandler;

  export import EasingFunction = __esri.EasingFunction;

  export import SceneViewHoldEvent = __esri.SceneViewHoldEvent;

  export import SceneViewHoldEventHandler = __esri.SceneViewHoldEventHandler;

  export import SceneViewKeyDownEvent = __esri.SceneViewKeyDownEvent;

  export import SceneViewKeyDownEventHandler = __esri.SceneViewKeyDownEventHandler;

  export import SceneViewKeyUpEvent = __esri.SceneViewKeyUpEvent;

  export import SceneViewKeyUpEventHandler = __esri.SceneViewKeyUpEventHandler;

  export import SceneViewLayerviewCreateEvent = __esri.SceneViewLayerviewCreateEvent;

  export import SceneViewLayerviewCreateEventHandler = __esri.SceneViewLayerviewCreateEventHandler;

  export import SceneViewLayerviewDestroyEvent = __esri.SceneViewLayerviewDestroyEvent;

  export import SceneViewLayerviewDestroyEventHandler = __esri.SceneViewLayerviewDestroyEventHandler;

  export import SceneViewMouseWheelEvent = __esri.SceneViewMouseWheelEvent;

  export import SceneViewMouseWheelEventHandler = __esri.SceneViewMouseWheelEventHandler;

  export import SceneViewPointerDownEvent = __esri.SceneViewPointerDownEvent;

  export import SceneViewPointerDownEventHandler = __esri.SceneViewPointerDownEventHandler;

  export import SceneViewPointerMoveEvent = __esri.SceneViewPointerMoveEvent;

  export import SceneViewPointerMoveEventHandler = __esri.SceneViewPointerMoveEventHandler;

  export import SceneViewPointerUpEvent = __esri.SceneViewPointerUpEvent;

  export import SceneViewPointerUpEventHandler = __esri.SceneViewPointerUpEventHandler;

  export import SceneViewResizeEvent = __esri.SceneViewResizeEvent;

  export import SceneViewResizeEventHandler = __esri.SceneViewResizeEventHandler;

  export import SceneViewConstraintsProperties = __esri.SceneViewConstraintsProperties;
  export import SceneViewConstraints = __esri.SceneViewConstraints;

  export import SceneViewConstraintsAltitudeProperties = __esri.SceneViewConstraintsAltitudeProperties;
  export import SceneViewConstraintsAltitude = __esri.SceneViewConstraintsAltitude;

  export import SceneViewConstraintsClipDistanceProperties = __esri.SceneViewConstraintsClipDistanceProperties;
  export import SceneViewConstraintsClipDistance = __esri.SceneViewConstraintsClipDistance;

  export import SceneViewConstraintsCollision = __esri.SceneViewConstraintsCollision;

  export import SceneViewConstraintsTiltProperties = __esri.SceneViewConstraintsTiltProperties;
  export import SceneViewConstraintsTilt = __esri.SceneViewConstraintsTilt;

  export import SceneViewEnvironmentProperties = __esri.SceneViewEnvironmentProperties;
  export import SceneViewEnvironment = __esri.SceneViewEnvironment;

  export import SceneViewEnvironmentAtmosphereProperties = __esri.SceneViewEnvironmentAtmosphereProperties;
  export import SceneViewEnvironmentAtmosphere = __esri.SceneViewEnvironmentAtmosphere;

  export import SceneViewEnvironmentLightingProperties = __esri.SceneViewEnvironmentLightingProperties;
  export import SceneViewEnvironmentLighting = __esri.SceneViewEnvironmentLighting;

  export import SceneViewGoToOptions = __esri.SceneViewGoToOptions;

  export import SceneViewHighlightOptions = __esri.SceneViewHighlightOptions;

  export import SceneViewHitTestScreenPoint = __esri.SceneViewHitTestScreenPoint;

  export import SceneViewToMapScreenPoint = __esri.SceneViewToMapScreenPoint;

  export import WatchHandle = __esri.WatchHandle;

  export import WatchCallback = __esri.WatchCallback;

  export import IdentityManagerBaseGenerateTokenOptions = __esri.IdentityManagerBaseGenerateTokenOptions;

  export import IdentityManagerBaseGetCredentialOptions = __esri.IdentityManagerBaseGetCredentialOptions;

  export import IdentityManagerBaseOAuthSignInOptions = __esri.IdentityManagerBaseOAuthSignInOptions;

  export import IdentityManagerBaseRegisterTokenProperties = __esri.IdentityManagerBaseRegisterTokenProperties;

  export import IdentityManagerBaseSetProtocolErrorHandlerHandlerFunction = __esri.IdentityManagerBaseSetProtocolErrorHandlerHandlerFunction;

  export import IdentityManagerBaseSetRedirectionHandlerHandlerFunction = __esri.IdentityManagerBaseSetRedirectionHandlerHandlerFunction;

  export import IdentityManagerBaseSignInOptions = __esri.IdentityManagerBaseSignInOptions;

  export import IdentityManagerCredentialCreateEvent = __esri.IdentityManagerCredentialCreateEvent;

  export import IdentityManagerCredentialCreateEventHandler = __esri.IdentityManagerCredentialCreateEventHandler;

  export import IdentityManagerCredentialsDestroyEvent = __esri.IdentityManagerCredentialsDestroyEvent;

  export import IdentityManagerCredentialsDestroyEventHandler = __esri.IdentityManagerCredentialsDestroyEventHandler;

  export import HandlerCallback = __esri.HandlerCallback;

  export import BaseElevationLayerFetchTileOptions = __esri.BaseElevationLayerFetchTileOptions;

  export import BaseElevationLayerLayerviewCreateEvent = __esri.BaseElevationLayerLayerviewCreateEvent;

  export import BaseElevationLayerLayerviewCreateEventHandler = __esri.BaseElevationLayerLayerviewCreateEventHandler;

  export import BaseElevationLayerLayerviewDestroyEvent = __esri.BaseElevationLayerLayerviewDestroyEvent;

  export import BaseElevationLayerLayerviewDestroyEventHandler = __esri.BaseElevationLayerLayerviewDestroyEventHandler;

  export import CSVLayerElevationInfo = __esri.CSVLayerElevationInfo;

  export import CSVLayerFeatureReduction = __esri.CSVLayerFeatureReduction;

  export import CSVLayerLayerviewCreateEvent = __esri.CSVLayerLayerviewCreateEvent;

  export import CSVLayerLayerviewCreateEventHandler = __esri.CSVLayerLayerviewCreateEventHandler;

  export import CSVLayerLayerviewDestroyEvent = __esri.CSVLayerLayerviewDestroyEvent;

  export import CSVLayerLayerviewDestroyEventHandler = __esri.CSVLayerLayerviewDestroyEventHandler;

  export import ElevationLayerQueryElevationOptions = __esri.ElevationLayerQueryElevationOptions;

  export import ElevationLayerLayerviewCreateEvent = __esri.ElevationLayerLayerviewCreateEvent;

  export import ElevationLayerLayerviewCreateEventHandler = __esri.ElevationLayerLayerviewCreateEventHandler;

  export import ElevationLayerLayerviewDestroyEvent = __esri.ElevationLayerLayerviewDestroyEvent;

  export import ElevationLayerLayerviewDestroyEventHandler = __esri.ElevationLayerLayerviewDestroyEventHandler;

  export import GeoRSSLayerLayerviewCreateEvent = __esri.GeoRSSLayerLayerviewCreateEvent;

  export import GeoRSSLayerLayerviewCreateEventHandler = __esri.GeoRSSLayerLayerviewCreateEventHandler;

  export import GeoRSSLayerLayerviewDestroyEvent = __esri.GeoRSSLayerLayerviewDestroyEvent;

  export import GeoRSSLayerLayerviewDestroyEventHandler = __esri.GeoRSSLayerLayerviewDestroyEventHandler;

  export import GroupLayerLayerviewCreateEvent = __esri.GroupLayerLayerviewCreateEvent;

  export import GroupLayerLayerviewCreateEventHandler = __esri.GroupLayerLayerviewCreateEventHandler;

  export import GroupLayerLayerviewDestroyEvent = __esri.GroupLayerLayerviewDestroyEvent;

  export import GroupLayerLayerviewDestroyEventHandler = __esri.GroupLayerLayerviewDestroyEventHandler;

  export import ImageryLayerLayerviewCreateEvent = __esri.ImageryLayerLayerviewCreateEvent;

  export import ImageryLayerLayerviewCreateEventHandler = __esri.ImageryLayerLayerviewCreateEventHandler;

  export import ImageryLayerLayerviewDestroyEvent = __esri.ImageryLayerLayerviewDestroyEvent;

  export import ImageryLayerLayerviewDestroyEventHandler = __esri.ImageryLayerLayerviewDestroyEventHandler;

  export import IntegratedMeshLayerLayerviewCreateEvent = __esri.IntegratedMeshLayerLayerviewCreateEvent;

  export import IntegratedMeshLayerLayerviewCreateEventHandler = __esri.IntegratedMeshLayerLayerviewCreateEventHandler;

  export import IntegratedMeshLayerLayerviewDestroyEvent = __esri.IntegratedMeshLayerLayerviewDestroyEvent;

  export import IntegratedMeshLayerLayerviewDestroyEventHandler = __esri.IntegratedMeshLayerLayerviewDestroyEventHandler;

  export import MapImageLayerLayerviewCreateEvent = __esri.MapImageLayerLayerviewCreateEvent;

  export import MapImageLayerLayerviewCreateEventHandler = __esri.MapImageLayerLayerviewCreateEventHandler;

  export import MapImageLayerLayerviewDestroyEvent = __esri.MapImageLayerLayerviewDestroyEvent;

  export import MapImageLayerLayerviewDestroyEventHandler = __esri.MapImageLayerLayerviewDestroyEventHandler;

  export import MapNotesLayerLayerviewCreateEvent = __esri.MapNotesLayerLayerviewCreateEvent;

  export import MapNotesLayerLayerviewCreateEventHandler = __esri.MapNotesLayerLayerviewCreateEventHandler;

  export import MapNotesLayerLayerviewDestroyEvent = __esri.MapNotesLayerLayerviewDestroyEvent;

  export import MapNotesLayerLayerviewDestroyEventHandler = __esri.MapNotesLayerLayerviewDestroyEventHandler;

  export import OpenStreetMapLayerLayerviewCreateEvent = __esri.OpenStreetMapLayerLayerviewCreateEvent;

  export import OpenStreetMapLayerLayerviewCreateEventHandler = __esri.OpenStreetMapLayerLayerviewCreateEventHandler;

  export import OpenStreetMapLayerLayerviewDestroyEvent = __esri.OpenStreetMapLayerLayerviewDestroyEvent;

  export import OpenStreetMapLayerLayerviewDestroyEventHandler = __esri.OpenStreetMapLayerLayerviewDestroyEventHandler;

  export import PointCloudLayerLayerviewCreateEvent = __esri.PointCloudLayerLayerviewCreateEvent;

  export import PointCloudLayerLayerviewCreateEventHandler = __esri.PointCloudLayerLayerviewCreateEventHandler;

  export import PointCloudLayerLayerviewDestroyEvent = __esri.PointCloudLayerLayerviewDestroyEvent;

  export import PointCloudLayerLayerviewDestroyEventHandler = __esri.PointCloudLayerLayerviewDestroyEventHandler;

  export import PointCloudLayerElevationInfo = __esri.PointCloudLayerElevationInfo;

  export import PointCloudRendererColorModulation = __esri.PointCloudRendererColorModulation;

  export import PointCloudRendererPointSizeAlgorithm = __esri.PointCloudRendererPointSizeAlgorithm;

  export import SceneLayerLayerviewCreateEvent = __esri.SceneLayerLayerviewCreateEvent;

  export import SceneLayerLayerviewCreateEventHandler = __esri.SceneLayerLayerviewCreateEventHandler;

  export import SceneLayerLayerviewDestroyEvent = __esri.SceneLayerLayerviewDestroyEvent;

  export import SceneLayerLayerviewDestroyEventHandler = __esri.SceneLayerLayerviewDestroyEventHandler;

  export import SceneLayerElevationInfo = __esri.SceneLayerElevationInfo;

  export import SceneLayerFeatureReduction = __esri.SceneLayerFeatureReduction;

  export import StreamLayerLayerviewCreateEvent = __esri.StreamLayerLayerviewCreateEvent;

  export import StreamLayerLayerviewCreateEventHandler = __esri.StreamLayerLayerviewCreateEventHandler;

  export import StreamLayerLayerviewDestroyEvent = __esri.StreamLayerLayerviewDestroyEvent;

  export import StreamLayerLayerviewDestroyEventHandler = __esri.StreamLayerLayerviewDestroyEventHandler;

  export import StreamLayerFilter = __esri.StreamLayerFilter;

  export import StreamLayerPurgeOptions = __esri.StreamLayerPurgeOptions;

  export import StreamLayerUpdateFilterFilterChanges = __esri.StreamLayerUpdateFilterFilterChanges;

  export import TileLayerLayerviewCreateEvent = __esri.TileLayerLayerviewCreateEvent;

  export import TileLayerLayerviewCreateEventHandler = __esri.TileLayerLayerviewCreateEventHandler;

  export import TileLayerLayerviewDestroyEvent = __esri.TileLayerLayerviewDestroyEvent;

  export import TileLayerLayerviewDestroyEventHandler = __esri.TileLayerLayerviewDestroyEventHandler;

  export import TileLayerFetchTileOptions = __esri.TileLayerFetchTileOptions;

  export import UnknownLayerLayerviewCreateEvent = __esri.UnknownLayerLayerviewCreateEvent;

  export import UnknownLayerLayerviewCreateEventHandler = __esri.UnknownLayerLayerviewCreateEventHandler;

  export import UnknownLayerLayerviewDestroyEvent = __esri.UnknownLayerLayerviewDestroyEvent;

  export import UnknownLayerLayerviewDestroyEventHandler = __esri.UnknownLayerLayerviewDestroyEventHandler;

  export import UnsupportedLayerLayerviewCreateEvent = __esri.UnsupportedLayerLayerviewCreateEvent;

  export import UnsupportedLayerLayerviewCreateEventHandler = __esri.UnsupportedLayerLayerviewCreateEventHandler;

  export import UnsupportedLayerLayerviewDestroyEvent = __esri.UnsupportedLayerLayerviewDestroyEvent;

  export import UnsupportedLayerLayerviewDestroyEventHandler = __esri.UnsupportedLayerLayerviewDestroyEventHandler;

  export import VectorTileLayerLayerviewCreateEvent = __esri.VectorTileLayerLayerviewCreateEvent;

  export import VectorTileLayerLayerviewCreateEventHandler = __esri.VectorTileLayerLayerviewCreateEventHandler;

  export import VectorTileLayerLayerviewDestroyEvent = __esri.VectorTileLayerLayerviewDestroyEvent;

  export import VectorTileLayerLayerviewDestroyEventHandler = __esri.VectorTileLayerLayerviewDestroyEventHandler;

  export import VectorTileLayerCurrentStyleInfo = __esri.VectorTileLayerCurrentStyleInfo;

  export import WebTileLayerLayerviewCreateEvent = __esri.WebTileLayerLayerviewCreateEvent;

  export import WebTileLayerLayerviewCreateEventHandler = __esri.WebTileLayerLayerviewCreateEventHandler;

  export import WebTileLayerLayerviewDestroyEvent = __esri.WebTileLayerLayerviewDestroyEvent;

  export import WebTileLayerLayerviewDestroyEventHandler = __esri.WebTileLayerLayerviewDestroyEventHandler;

  export import WMSLayerLayerviewCreateEvent = __esri.WMSLayerLayerviewCreateEvent;

  export import WMSLayerLayerviewCreateEventHandler = __esri.WMSLayerLayerviewCreateEventHandler;

  export import WMSLayerLayerviewDestroyEvent = __esri.WMSLayerLayerviewDestroyEvent;

  export import WMSLayerLayerviewDestroyEventHandler = __esri.WMSLayerLayerviewDestroyEventHandler;

  export import WMSLayerFetchImageOptions = __esri.WMSLayerFetchImageOptions;

  export import WMTSLayerLayerviewCreateEvent = __esri.WMTSLayerLayerviewCreateEvent;

  export import WMTSLayerLayerviewCreateEventHandler = __esri.WMTSLayerLayerviewCreateEventHandler;

  export import WMTSLayerLayerviewDestroyEvent = __esri.WMTSLayerLayerviewDestroyEvent;

  export import WMTSLayerLayerviewDestroyEventHandler = __esri.WMTSLayerLayerviewDestroyEventHandler;

  export import BaseDynamicLayerFetchImageOptions = __esri.BaseDynamicLayerFetchImageOptions;

  export import BaseDynamicLayerLayerviewCreateEvent = __esri.BaseDynamicLayerLayerviewCreateEvent;

  export import BaseDynamicLayerLayerviewCreateEventHandler = __esri.BaseDynamicLayerLayerviewCreateEventHandler;

  export import BaseDynamicLayerLayerviewDestroyEvent = __esri.BaseDynamicLayerLayerviewDestroyEvent;

  export import BaseDynamicLayerLayerviewDestroyEventHandler = __esri.BaseDynamicLayerLayerviewDestroyEventHandler;

  export import BaseTileLayerFetchTileOptions = __esri.BaseTileLayerFetchTileOptions;

  export import BaseTileLayerLayerviewCreateEvent = __esri.BaseTileLayerLayerviewCreateEvent;

  export import BaseTileLayerLayerviewCreateEventHandler = __esri.BaseTileLayerLayerviewCreateEventHandler;

  export import BaseTileLayerLayerviewDestroyEvent = __esri.BaseTileLayerLayerviewDestroyEvent;

  export import BaseTileLayerLayerviewDestroyEventHandler = __esri.BaseTileLayerLayerviewDestroyEventHandler;

  export import CodedValueDomainCodedValues = __esri.CodedValueDomainCodedValues;

  export import PixelBlockAddDataPlaneData = __esri.PixelBlockAddDataPlaneData;

  export import PixelBlockStatistics = __esri.PixelBlockStatistics;

  export import ClassBreaksRendererClassBreakInfos = __esri.ClassBreaksRendererClassBreakInfos;

  export import ClassBreaksRendererLegendOptions = __esri.ClassBreaksRendererLegendOptions;

  export import UniqueValueRendererLegendOptions = __esri.UniqueValueRendererLegendOptions;

  export import UniqueValueRendererUniqueValueInfos = __esri.UniqueValueRendererUniqueValueInfos;

  export import PointCloudClassBreaksRendererColorClassBreakInfos = __esri.PointCloudClassBreaksRendererColorClassBreakInfos;

  export import PointCloudStretchRendererStops = __esri.PointCloudStretchRendererStops;

  export import PointCloudUniqueValueRendererColorUniqueValueInfos = __esri.PointCloudUniqueValueRendererColorUniqueValueInfos;

  export import FillSymbol3DLayerOutline = __esri.FillSymbol3DLayerOutline;

  export import IconSymbol3DLayerOutline = __esri.IconSymbol3DLayerOutline;

  export import IconSymbol3DLayerResource = __esri.IconSymbol3DLayerResource;

  export import ObjectSymbol3DLayerResource = __esri.ObjectSymbol3DLayerResource;

  export import PointSymbol3DVerticalOffsetProperties = __esri.PointSymbol3DVerticalOffsetProperties;
  export import PointSymbol3DVerticalOffset = __esri.PointSymbol3DVerticalOffset;

  export import Symbol3DStyleOrigin = __esri.Symbol3DStyleOrigin;

  export import TextSymbol3DLayerFont = __esri.TextSymbol3DLayerFont;

  export import TextSymbol3DLayerHalo = __esri.TextSymbol3DLayerHalo;

  export import LineCallout3DBorderProperties = __esri.LineCallout3DBorderProperties;
  export import LineCallout3DBorder = __esri.LineCallout3DBorder;

  export import ClosestFacilityParametersAttributeParameterValues = __esri.ClosestFacilityParametersAttributeParameterValues;

  export import GeometryServiceFromGeoCoordinateStringParams = __esri.GeometryServiceFromGeoCoordinateStringParams;

  export import GeometryServiceToGeoCoordinateStringParams = __esri.GeometryServiceToGeoCoordinateStringParams;

  export import ProjectParametersTransformation = __esri.ProjectParametersTransformation;

  export import LocatorAddressToLocationsParams = __esri.LocatorAddressToLocationsParams;

  export import LocatorAddressesToLocationsParams = __esri.LocatorAddressesToLocationsParams;

  export import LocatorSuggestLocationsParams = __esri.LocatorSuggestLocationsParams;

  export import PrintTemplateExportOptions = __esri.PrintTemplateExportOptions;

  export import PrintTemplateLayoutOptions = __esri.PrintTemplateLayoutOptions;

  export import MapViewDragEventOrigin = __esri.MapViewDragEventOrigin;

  export import MapViewClickEvent = __esri.MapViewClickEvent;

  export import MapViewClickEventHandler = __esri.MapViewClickEventHandler;

  export import MapViewDoubleClickEvent = __esri.MapViewDoubleClickEvent;

  export import MapViewDoubleClickEventHandler = __esri.MapViewDoubleClickEventHandler;

  export import MapViewDragEvent = __esri.MapViewDragEvent;

  export import MapViewDragEventHandler = __esri.MapViewDragEventHandler;

  export import MapViewHoldEvent = __esri.MapViewHoldEvent;

  export import MapViewHoldEventHandler = __esri.MapViewHoldEventHandler;

  export import MapViewKeyDownEvent = __esri.MapViewKeyDownEvent;

  export import MapViewKeyDownEventHandler = __esri.MapViewKeyDownEventHandler;

  export import MapViewKeyUpEvent = __esri.MapViewKeyUpEvent;

  export import MapViewKeyUpEventHandler = __esri.MapViewKeyUpEventHandler;

  export import MapViewLayerviewCreateEvent = __esri.MapViewLayerviewCreateEvent;

  export import MapViewLayerviewCreateEventHandler = __esri.MapViewLayerviewCreateEventHandler;

  export import MapViewLayerviewDestroyEvent = __esri.MapViewLayerviewDestroyEvent;

  export import MapViewLayerviewDestroyEventHandler = __esri.MapViewLayerviewDestroyEventHandler;

  export import MapViewConstraints = __esri.MapViewConstraints;

  export import MapViewGoToOptions = __esri.MapViewGoToOptions;

  export import MapViewHitTestScreenPoint = __esri.MapViewHitTestScreenPoint;

  export import MapViewToMapScreenPoint = __esri.MapViewToMapScreenPoint;

  export import MapViewMouseWheelEvent = __esri.MapViewMouseWheelEvent;

  export import MapViewMouseWheelEventHandler = __esri.MapViewMouseWheelEventHandler;

  export import MapViewPointerDownEvent = __esri.MapViewPointerDownEvent;

  export import MapViewPointerDownEventHandler = __esri.MapViewPointerDownEventHandler;

  export import MapViewPointerMoveEvent = __esri.MapViewPointerMoveEvent;

  export import MapViewPointerMoveEventHandler = __esri.MapViewPointerMoveEventHandler;

  export import MapViewPointerUpEvent = __esri.MapViewPointerUpEvent;

  export import MapViewPointerUpEventHandler = __esri.MapViewPointerUpEventHandler;

  export import MapViewResizeEvent = __esri.MapViewResizeEvent;

  export import MapViewResizeEventHandler = __esri.MapViewResizeEventHandler;

  export import AttributeParamValue = __esri.AttributeParamValue;

  export import ConfigurationTaskGetDataWorkspaceDetailsParams = __esri.ConfigurationTaskGetDataWorkspaceDetailsParams;

  export import ConfigurationTaskGetUserJobQueryDetailsParams = __esri.ConfigurationTaskGetUserJobQueryDetailsParams;

  export import AuxRecordDescription = __esri.AuxRecordDescription;

  export import JobCreationParameters = __esri.JobCreationParameters;

  export import JobQueryParameters = __esri.JobQueryParameters;

  export import JobTaskAddEmbeddedAttachmentParams = __esri.JobTaskAddEmbeddedAttachmentParams;

  export import JobTaskAddLinkedAttachmentParams = __esri.JobTaskAddLinkedAttachmentParams;

  export import JobTaskAddLinkedRecordParams = __esri.JobTaskAddLinkedRecordParams;

  export import JobTaskAssignJobsParams = __esri.JobTaskAssignJobsParams;

  export import JobTaskCloseJobsParams = __esri.JobTaskCloseJobsParams;

  export import JobTaskCreateDependencyParams = __esri.JobTaskCreateDependencyParams;

  export import JobTaskCreateHoldParams = __esri.JobTaskCreateHoldParams;

  export import JobTaskCreateJobVersionParams = __esri.JobTaskCreateJobVersionParams;

  export import JobTaskDeleteAttachmentParams = __esri.JobTaskDeleteAttachmentParams;

  export import JobTaskDeleteDependencyParams = __esri.JobTaskDeleteDependencyParams;

  export import JobTaskDeleteJobsParams = __esri.JobTaskDeleteJobsParams;

  export import JobTaskDeleteLinkedRecordParams = __esri.JobTaskDeleteLinkedRecordParams;

  export import JobTaskGetAttachmentContentUrlParams = __esri.JobTaskGetAttachmentContentUrlParams;

  export import JobTaskListFieldValuesParams = __esri.JobTaskListFieldValuesParams;

  export import JobTaskListMultiLevelFieldValuesParams = __esri.JobTaskListMultiLevelFieldValuesParams;

  export import JobTaskLogActionParams = __esri.JobTaskLogActionParams;

  export import JobTaskQueryJobsParams = __esri.JobTaskQueryJobsParams;

  export import JobTaskQueryMultiLevelSelectedValuesParams = __esri.JobTaskQueryMultiLevelSelectedValuesParams;

  export import JobTaskReleaseHoldParams = __esri.JobTaskReleaseHoldParams;

  export import JobTaskReopenClosedJobsParams = __esri.JobTaskReopenClosedJobsParams;

  export import JobTaskSearchJobsParams = __esri.JobTaskSearchJobsParams;

  export import JobTaskUnassignJobsParams = __esri.JobTaskUnassignJobsParams;

  export import JobTaskUpdateNotesParams = __esri.JobTaskUpdateNotesParams;

  export import JobTaskUpdateRecordParams = __esri.JobTaskUpdateRecordParams;

  export import JobUpdateParameters = __esri.JobUpdateParameters;

  export import ChangeRule = __esri.ChangeRule;

  export import NotificationTaskAddChangeRuleParams = __esri.NotificationTaskAddChangeRuleParams;

  export import NotificationTaskDeleteChangeRuleParams = __esri.NotificationTaskDeleteChangeRuleParams;

  export import NotificationTaskNotifySessionParams = __esri.NotificationTaskNotifySessionParams;

  export import NotificationTaskQueryChangeRulesParams = __esri.NotificationTaskQueryChangeRulesParams;

  export import NotificationTaskRunSpatialNotificationOnHistoryParams = __esri.NotificationTaskRunSpatialNotificationOnHistoryParams;

  export import NotificationTaskSendNotificationParams = __esri.NotificationTaskSendNotificationParams;

  export import NotificationTaskSubscribeToNotificationParams = __esri.NotificationTaskSubscribeToNotificationParams;

  export import NotificationTaskUnsubscribeFromNotificationParams = __esri.NotificationTaskUnsubscribeFromNotificationParams;

  export import ReportTaskGenerateReportParams = __esri.ReportTaskGenerateReportParams;

  export import ReportTaskGetReportContentUrlParams = __esri.ReportTaskGetReportContentUrlParams;

  export import ReportTaskGetReportDataParams = __esri.ReportTaskGetReportDataParams;

  export import TokenTaskParseTokensParams = __esri.TokenTaskParseTokensParams;

  export import WorkflowTaskCanRunStepParams = __esri.WorkflowTaskCanRunStepParams;

  export import WorkflowTaskExecuteStepsParams = __esri.WorkflowTaskExecuteStepsParams;

  export import WorkflowTaskGetStepDescriptionParams = __esri.WorkflowTaskGetStepDescriptionParams;

  export import WorkflowTaskGetStepFileUrlParams = __esri.WorkflowTaskGetStepFileUrlParams;

  export import WorkflowTaskGetStepParams = __esri.WorkflowTaskGetStepParams;

  export import WorkflowTaskMarkStepsAsDoneParams = __esri.WorkflowTaskMarkStepsAsDoneParams;

  export import WorkflowTaskMoveToNextStepParams = __esri.WorkflowTaskMoveToNextStepParams;

  export import WorkflowTaskRecreateWorkflowParams = __esri.WorkflowTaskRecreateWorkflowParams;

  export import WorkflowTaskResolveConflictParams = __esri.WorkflowTaskResolveConflictParams;

  export import WorkflowTaskSetCurrentStepParams = __esri.WorkflowTaskSetCurrentStepParams;

  export import ImageryLayerViewPixelData = __esri.ImageryLayerViewPixelData;

  export import StreamLayerViewDataReceivedEvent = __esri.StreamLayerViewDataReceivedEvent;

  export import StreamLayerViewDataReceivedEventHandler = __esri.StreamLayerViewDataReceivedEventHandler;

  export import StreamLayerViewFilter = __esri.StreamLayerViewFilter;

  export import StreamLayerViewUpdateFilterFilter = __esri.StreamLayerViewUpdateFilterFilter;

  export import SlideApplyToOptions = __esri.SlideApplyToOptions;

  export import SlideCreateFromOptions = __esri.SlideCreateFromOptions;

  export import SlideCreateFromOptionsScreenshot = __esri.SlideCreateFromOptionsScreenshot;

  export import SlideDescriptionProperties = __esri.SlideDescriptionProperties;
  export import SlideDescription = __esri.SlideDescription;

  export import SlideThumbnailProperties = __esri.SlideThumbnailProperties;
  export import SlideThumbnail = __esri.SlideThumbnail;

  export import SlideTitleProperties = __esri.SlideTitleProperties;
  export import SlideTitle = __esri.SlideTitle;

  export import SlideUpdateFromOptions = __esri.SlideUpdateFromOptions;

  export import SlideUpdateFromOptionsScreenshot = __esri.SlideUpdateFromOptionsScreenshot;

  export import SlideVisibleLayers = __esri.SlideVisibleLayers;

  export import ColorSliderValues = __esri.ColorSliderValues;

  export import LegendLayerInfos = __esri.LegendLayerInfos;

  export import PopupDockOptions = __esri.PopupDockOptions;

  export import PopupOpenOptions = __esri.PopupOpenOptions;

  export import SearchViewModelSearchCompleteEventResults = __esri.SearchViewModelSearchCompleteEventResults;

  export import SearchViewModelSearchCompleteEventResultsResults = __esri.SearchViewModelSearchCompleteEventResultsResults;

  export import SearchViewModelSelectResultEventResult = __esri.SearchViewModelSelectResultEventResult;

  export import SearchViewModelSuggestCompleteEventResults = __esri.SearchViewModelSuggestCompleteEventResults;

  export import SearchViewModelSuggestCompleteEventResultsResults = __esri.SearchViewModelSuggestCompleteEventResultsResults;

  export import SearchViewModelLoadEvent = __esri.SearchViewModelLoadEvent;

  export import SearchViewModelLoadEventHandler = __esri.SearchViewModelLoadEventHandler;

  export import SearchViewModelSearchClearEvent = __esri.SearchViewModelSearchClearEvent;

  export import SearchViewModelSearchClearEventHandler = __esri.SearchViewModelSearchClearEventHandler;

  export import SearchViewModelSearchCompleteEvent = __esri.SearchViewModelSearchCompleteEvent;

  export import SearchViewModelSearchCompleteEventHandler = __esri.SearchViewModelSearchCompleteEventHandler;

  export import SearchViewModelSearchStartEvent = __esri.SearchViewModelSearchStartEvent;

  export import SearchViewModelSearchStartEventHandler = __esri.SearchViewModelSearchStartEventHandler;

  export import SearchViewModelSelectResultEvent = __esri.SearchViewModelSelectResultEvent;

  export import SearchViewModelSelectResultEventHandler = __esri.SearchViewModelSelectResultEventHandler;

  export import SearchViewModelSuggestCompleteEvent = __esri.SearchViewModelSuggestCompleteEvent;

  export import SearchViewModelSuggestCompleteEventHandler = __esri.SearchViewModelSuggestCompleteEventHandler;

  export import SearchViewModelSuggestStartEvent = __esri.SearchViewModelSuggestStartEvent;

  export import SearchViewModelSuggestStartEventHandler = __esri.SearchViewModelSuggestStartEventHandler;

  export import DynamicLayerFetchImageOptions = __esri.DynamicLayerFetchImageOptions;

  export import DynamicLayerGetImageUrlOptions = __esri.DynamicLayerGetImageUrlOptions;

  export import ArcGISDynamicMapServiceGetExportImageParametersOptions = __esri.ArcGISDynamicMapServiceGetExportImageParametersOptions;

  export import SceneServiceVersion = __esri.SceneServiceVersion;

  export import BreakpointsOwnerBreakpoints = __esri.BreakpointsOwnerBreakpoints;

  export import configRequest = __esri.configRequest;

  export import configRequestCorsEnabledServers = __esri.configRequestCorsEnabledServers;

  export import configRequestProxyRules = __esri.configRequestProxyRules;

  export import configWorkers = __esri.configWorkers;

  export import configWorkersLoaderConfig = __esri.configWorkersLoaderConfig;

  export import requestEsriRequestOptions = __esri.requestEsriRequestOptions;

  export import EachAlwaysResult = __esri.EachAlwaysResult;

  export import urlUtilsAddProxyRuleRule = __esri.urlUtilsAddProxyRuleRule;

  export import EventAttachedCallback = __esri.EventAttachedCallback;

  export import PausableWatchHandle = __esri.PausableWatchHandle;

  export import decoratorsPropertyPropertyMetadata = __esri.decoratorsPropertyPropertyMetadata;

  export import colorCreateContinuousRendererParams = __esri.colorCreateContinuousRendererParams;

  export import colorCreateContinuousRendererParamsLegendOptions = __esri.colorCreateContinuousRendererParamsLegendOptions;

  export import colorCreateVisualVariableParams = __esri.colorCreateVisualVariableParams;

  export import colorCreateVisualVariableParamsLegendOptions = __esri.colorCreateVisualVariableParamsLegendOptions;

  export import locationCreateRendererParams = __esri.locationCreateRendererParams;

  export import sizeCreateContinuousRendererParams = __esri.sizeCreateContinuousRendererParams;

  export import sizeCreateContinuousRendererParamsLegendOptions = __esri.sizeCreateContinuousRendererParamsLegendOptions;

  export import sizeCreateVisualVariablesParams = __esri.sizeCreateVisualVariablesParams;

  export import sizeCreateVisualVariablesParamsLegendOptions = __esri.sizeCreateVisualVariablesParamsLegendOptions;

  export import typeCreateRendererParams = __esri.typeCreateRendererParams;

  export import typeCreateRendererParamsLegendOptions = __esri.typeCreateRendererParamsLegendOptions;

  export import univariateColorSizeCreateContinuousRendererParams = __esri.univariateColorSizeCreateContinuousRendererParams;

  export import univariateColorSizeCreateContinuousRendererParamsColorOptions = __esri.univariateColorSizeCreateContinuousRendererParamsColorOptions;

  export import univariateColorSizeCreateContinuousRendererParamsColorOptionsLegendOptions = __esri.univariateColorSizeCreateContinuousRendererParamsColorOptionsLegendOptions;

  export import univariateColorSizeCreateContinuousRendererParamsSizeOptions = __esri.univariateColorSizeCreateContinuousRendererParamsSizeOptions;

  export import univariateColorSizeCreateContinuousRendererParamsSizeOptionsLegendOptions = __esri.univariateColorSizeCreateContinuousRendererParamsSizeOptionsLegendOptions;

  export import univariateColorSizeCreateVisualVariablesParams = __esri.univariateColorSizeCreateVisualVariablesParams;

  export import univariateColorSizeCreateVisualVariablesParamsColorOptions = __esri.univariateColorSizeCreateVisualVariablesParamsColorOptions;

  export import univariateColorSizeCreateVisualVariablesParamsColorOptionsLegendOptions = __esri.univariateColorSizeCreateVisualVariablesParamsColorOptionsLegendOptions;

  export import univariateColorSizeCreateVisualVariablesParamsSizeOptions = __esri.univariateColorSizeCreateVisualVariablesParamsSizeOptions;

  export import univariateColorSizeCreateVisualVariablesParamsSizeOptionsLegendOptions = __esri.univariateColorSizeCreateVisualVariablesParamsSizeOptionsLegendOptions;

  export import classBreaksClassBreaksParams = __esri.classBreaksClassBreaksParams;

  export import histogramHistogramParams = __esri.histogramHistogramParams;

  export import summaryStatisticsSummaryStatisticsParams = __esri.summaryStatisticsSummaryStatisticsParams;

  export import uniqueValuesUniqueValuesParams = __esri.uniqueValuesUniqueValuesParams;

  export import colorGetSchemesParams = __esri.colorGetSchemesParams;

  export import locationGetSchemesParams = __esri.locationGetSchemesParams;

  export import sizeGetSchemesParams = __esri.sizeGetSchemesParams;

  export import typeGetSchemesParams = __esri.typeGetSchemesParams;

  export import JobQuery = __esri.JobQuery;

  export import GroupMembership = __esri.GroupMembership;

  export import JobQueryContainer = __esri.JobQueryContainer;

  export import Privilege = __esri.Privilege;

  export import DataWorkspace = __esri.DataWorkspace;

  export import HoldType = __esri.HoldType;

  export import JobPriority = __esri.JobPriority;

  export import JobStatus = __esri.JobStatus;

  export import JobType = __esri.JobType;

  export import ActivityType = __esri.ActivityType;

  export import NotificationType = __esri.NotificationType;

  export import AuxRecord = __esri.AuxRecord;

  export import AuxRecordValue = __esri.AuxRecordValue;

  export import JobVersionInfo = __esri.JobVersionInfo;

  export import QueryFieldInfo = __esri.QueryFieldInfo;

  export import DatasetConfiguration = __esri.DatasetConfiguration;

  export import WhereCondition = __esri.WhereCondition;

  export import ReportDataGroup = __esri.ReportDataGroup;

  export import WorkflowConflicts = __esri.WorkflowConflicts;

  export import WorkflowOption = __esri.WorkflowOption;

  export import WorkflowStepInfo = __esri.WorkflowStepInfo;

  export import StepType = __esri.StepType;

  export import WorkflowAnnotationDisplayDetails = __esri.WorkflowAnnotationDisplayDetails;

  export import WorkflowPathDisplayDetails = __esri.WorkflowPathDisplayDetails;

  export import WorkflowStepDisplayDetails = __esri.WorkflowStepDisplayDetails;

  export import ColorAndIntensity = __esri.ColorAndIntensity;

  export import RenderCamera = __esri.RenderCamera;

  export import SunLight = __esri.SunLight;
}

declare module "esri/Basemap" {
  import Basemap = __esri.Basemap;
  export = Basemap;
}

declare module "esri/Camera" {
  import Camera = __esri.Camera;
  export = Camera;
}

declare module "esri/Color" {
  import Color = __esri.Color;
  export = Color;
}

declare module "esri/Graphic" {
  import Graphic = __esri.Graphic;
  export = Graphic;
}

declare module "esri/Ground" {
  import Ground = __esri.Ground;
  export = Ground;
}

declare module "esri/Map" {
  import Map = __esri.Map;
  export = Map;
}

declare module "esri/PopupTemplate" {
  import PopupTemplate = __esri.PopupTemplate;
  export = PopupTemplate;
}

declare module "esri/Viewpoint" {
  import Viewpoint = __esri.Viewpoint;
  export = Viewpoint;
}

declare module "esri/WebMap" {
  import WebMap = __esri.WebMap;
  export = WebMap;
}

declare module "esri/WebScene" {
  import WebScene = __esri.WebScene;
  export = WebScene;
}

declare module "esri/core/Accessor" {
  import Accessor = __esri.Accessor;
  export = Accessor;
}

declare module "esri/core/Collection" {
  import Collection = __esri.Collection;
  export = Collection;
}

declare module "esri/core/workers/Connection" {
  import Connection = __esri.Connection;
  export = Connection;
}

declare module "esri/geometry/Circle" {
  import Circle = __esri.Circle;
  export = Circle;
}

declare module "esri/geometry/Extent" {
  import Extent = __esri.Extent;
  export = Extent;
}

declare module "esri/geometry/Geometry" {
  import Geometry = __esri.Geometry;
  export = Geometry;
}

declare module "esri/geometry/Multipoint" {
  import Multipoint = __esri.Multipoint;
  export = Multipoint;
}

declare module "esri/geometry/Point" {
  import Point = __esri.Point;
  export = Point;
}

declare module "esri/geometry/Polygon" {
  import Polygon = __esri.Polygon;
  export = Polygon;
}

declare module "esri/geometry/Polyline" {
  import Polyline = __esri.Polyline;
  export = Polyline;
}

declare module "esri/geometry/ScreenPoint" {
  import ScreenPoint = __esri.ScreenPoint;
  export = ScreenPoint;
}

declare module "esri/geometry/SpatialReference" {
  import SpatialReference = __esri.SpatialReference;
  export = SpatialReference;
}

declare module "esri/identity/Credential" {
  import Credential = __esri.Credential;
  export = Credential;
}

declare module "esri/identity/IdentityManagerBase" {
  import IdentityManagerBase = __esri.IdentityManagerBase;
  export = IdentityManagerBase;
}

declare module "esri/identity/IdentityManager" {
  const IdentityManager: __esri.IdentityManager;
  export = IdentityManager;
}

declare module "esri/identity/OAuthInfo" {
  import OAuthInfo = __esri.OAuthInfo;
  export = OAuthInfo;
}

declare module "esri/identity/ServerInfo" {
  import ServerInfo = __esri.ServerInfo;
  export = ServerInfo;
}

declare module "esri/layers/BaseElevationLayer" {
  import BaseElevationLayer = __esri.BaseElevationLayer;
  export = BaseElevationLayer;
}

declare module "esri/layers/CSVLayer" {
  import CSVLayer = __esri.CSVLayer;
  export = CSVLayer;
}

declare module "esri/layers/ElevationLayer" {
  import ElevationLayer = __esri.ElevationLayer;
  export = ElevationLayer;
}

declare module "esri/layers/FeatureLayer" {
  import FeatureLayer = __esri.FeatureLayer;
  export = FeatureLayer;
}

declare module "esri/layers/GeoRSSLayer" {
  import GeoRSSLayer = __esri.GeoRSSLayer;
  export = GeoRSSLayer;
}

declare module "esri/layers/GraphicsLayer" {
  import GraphicsLayer = __esri.GraphicsLayer;
  export = GraphicsLayer;
}

declare module "esri/layers/GroupLayer" {
  import GroupLayer = __esri.GroupLayer;
  export = GroupLayer;
}

declare module "esri/layers/ImageryLayer" {
  import ImageryLayer = __esri.ImageryLayer;
  export = ImageryLayer;
}

declare module "esri/layers/IntegratedMeshLayer" {
  import IntegratedMeshLayer = __esri.IntegratedMeshLayer;
  export = IntegratedMeshLayer;
}

declare module "esri/layers/Layer" {
  import Layer = __esri.Layer;
  export = Layer;
}

declare module "esri/layers/MapImageLayer" {
  import MapImageLayer = __esri.MapImageLayer;
  export = MapImageLayer;
}

declare module "esri/layers/MapNotesLayer" {
  import MapNotesLayer = __esri.MapNotesLayer;
  export = MapNotesLayer;
}

declare module "esri/layers/OpenStreetMapLayer" {
  import OpenStreetMapLayer = __esri.OpenStreetMapLayer;
  export = OpenStreetMapLayer;
}

declare module "esri/layers/PointCloudLayer" {
  import PointCloudLayer = __esri.PointCloudLayer;
  export = PointCloudLayer;
}

declare module "esri/layers/SceneLayer" {
  import SceneLayer = __esri.SceneLayer;
  export = SceneLayer;
}

declare module "esri/layers/StreamLayer" {
  import StreamLayer = __esri.StreamLayer;
  export = StreamLayer;
}

declare module "esri/layers/TileLayer" {
  import TileLayer = __esri.TileLayer;
  export = TileLayer;
}

declare module "esri/layers/UnknownLayer" {
  import UnknownLayer = __esri.UnknownLayer;
  export = UnknownLayer;
}

declare module "esri/layers/UnsupportedLayer" {
  import UnsupportedLayer = __esri.UnsupportedLayer;
  export = UnsupportedLayer;
}

declare module "esri/layers/VectorTileLayer" {
  import VectorTileLayer = __esri.VectorTileLayer;
  export = VectorTileLayer;
}

declare module "esri/layers/WebTileLayer" {
  import WebTileLayer = __esri.WebTileLayer;
  export = WebTileLayer;
}

declare module "esri/layers/WMSLayer" {
  import WMSLayer = __esri.WMSLayer;
  export = WMSLayer;
}

declare module "esri/layers/WMTSLayer" {
  import WMTSLayer = __esri.WMTSLayer;
  export = WMTSLayer;
}

declare module "esri/layers/BaseDynamicLayer" {
  import BaseDynamicLayer = __esri.BaseDynamicLayer;
  export = BaseDynamicLayer;
}

declare module "esri/layers/BaseTileLayer" {
  import BaseTileLayer = __esri.BaseTileLayer;
  export = BaseTileLayer;
}

declare module "esri/layers/support/CodedValueDomain" {
  import CodedValueDomain = __esri.CodedValueDomain;
  export = CodedValueDomain;
}

declare module "esri/layers/support/DimensionalDefinition" {
  import DimensionalDefinition = __esri.DimensionalDefinition;
  export = DimensionalDefinition;
}

declare module "esri/layers/support/Domain" {
  import Domain = __esri.Domain;
  export = Domain;
}

declare module "esri/layers/support/Field" {
  import Field = __esri.Field;
  export = Field;
}

declare module "esri/layers/support/FeatureTemplate" {
  import FeatureTemplate = __esri.FeatureTemplate;
  export = FeatureTemplate;
}

declare module "esri/layers/support/FeatureType" {
  import FeatureType = __esri.FeatureType;
  export = FeatureType;
}

declare module "esri/layers/support/ImageParameters" {
  import ImageParameters = __esri.ImageParameters;
  export = ImageParameters;
}

declare module "esri/layers/support/InheritedDomain" {
  import InheritedDomain = __esri.InheritedDomain;
  export = InheritedDomain;
}

declare module "esri/layers/support/LabelClass" {
  import LabelClass = __esri.LabelClass;
  export = LabelClass;
}

declare module "esri/layers/support/LOD" {
  import LOD = __esri.LOD;
  export = LOD;
}

declare module "esri/layers/support/MapImage" {
  import MapImage = __esri.MapImage;
  export = MapImage;
}

declare module "esri/layers/support/MosaicRule" {
  import MosaicRule = __esri.MosaicRule;
  export = MosaicRule;
}

declare module "esri/layers/support/PixelBlock" {
  import PixelBlock = __esri.PixelBlock;
  export = PixelBlock;
}

declare module "esri/layers/support/RangeDomain" {
  import RangeDomain = __esri.RangeDomain;
  export = RangeDomain;
}

declare module "esri/layers/support/RasterFunction" {
  import RasterFunction = __esri.RasterFunction;
  export = RasterFunction;
}

declare module "esri/layers/support/Sublayer" {
  import Sublayer = __esri.Sublayer;
  export = Sublayer;
}

declare module "esri/layers/support/TileInfo" {
  import TileInfo = __esri.TileInfo;
  export = TileInfo;
}

declare module "esri/layers/support/TileMatrixSet" {
  import TileMatrixSet = __esri.TileMatrixSet;
  export = TileMatrixSet;
}

declare module "esri/layers/support/WMSSublayer" {
  import WMSSublayer = __esri.WMSSublayer;
  export = WMSSublayer;
}

declare module "esri/layers/support/WMTSStyle" {
  import WMTSStyle = __esri.WMTSStyle;
  export = WMTSStyle;
}

declare module "esri/layers/support/WMTSSublayer" {
  import WMTSSublayer = __esri.WMTSSublayer;
  export = WMTSSublayer;
}

declare module "esri/portal/Portal" {
  import Portal = __esri.Portal;
  export = Portal;
}

declare module "esri/portal/PortalFolder" {
  import PortalFolder = __esri.PortalFolder;
  export = PortalFolder;
}

declare module "esri/portal/PortalGroup" {
  import PortalGroup = __esri.PortalGroup;
  export = PortalGroup;
}

declare module "esri/portal/PortalItem" {
  import PortalItem = __esri.PortalItem;
  export = PortalItem;
}

declare module "esri/portal/PortalRating" {
  import PortalRating = __esri.PortalRating;
  export = PortalRating;
}

declare module "esri/portal/PortalQueryParams" {
  import PortalQueryParams = __esri.PortalQueryParams;
  export = PortalQueryParams;
}

declare module "esri/portal/PortalQueryResult" {
  import PortalQueryResult = __esri.PortalQueryResult;
  export = PortalQueryResult;
}

declare module "esri/portal/PortalUser" {
  import PortalUser = __esri.PortalUser;
  export = PortalUser;
}

declare module "esri/renderers/ClassBreaksRenderer" {
  import ClassBreaksRenderer = __esri.ClassBreaksRenderer;
  export = ClassBreaksRenderer;
}

declare module "esri/renderers/Renderer" {
  import Renderer = __esri.Renderer;
  export = Renderer;
}

declare module "esri/renderers/SimpleRenderer" {
  import SimpleRenderer = __esri.SimpleRenderer;
  export = SimpleRenderer;
}

declare module "esri/renderers/UniqueValueRenderer" {
  import UniqueValueRenderer = __esri.UniqueValueRenderer;
  export = UniqueValueRenderer;
}

declare module "esri/renderers/PointCloudRenderer" {
  import PointCloudRenderer = __esri.PointCloudRenderer;
  export = PointCloudRenderer;
}

declare module "esri/renderers/PointCloudClassBreaksRenderer" {
  import PointCloudClassBreaksRenderer = __esri.PointCloudClassBreaksRenderer;
  export = PointCloudClassBreaksRenderer;
}

declare module "esri/renderers/PointCloudRGBRenderer" {
  import PointCloudRGBRenderer = __esri.PointCloudRGBRenderer;
  export = PointCloudRGBRenderer;
}

declare module "esri/renderers/PointCloudStretchRenderer" {
  import PointCloudStretchRenderer = __esri.PointCloudStretchRenderer;
  export = PointCloudStretchRenderer;
}

declare module "esri/renderers/PointCloudUniqueValueRenderer" {
  import PointCloudUniqueValueRenderer = __esri.PointCloudUniqueValueRenderer;
  export = PointCloudUniqueValueRenderer;
}

declare module "esri/support/Action" {
  import Action = __esri.Action;
  export = Action;
}

declare module "esri/symbols/ExtrudeSymbol3DLayer" {
  import ExtrudeSymbol3DLayer = __esri.ExtrudeSymbol3DLayer;
  export = ExtrudeSymbol3DLayer;
}

declare module "esri/symbols/FillSymbol" {
  import FillSymbol = __esri.FillSymbol;
  export = FillSymbol;
}

declare module "esri/symbols/FillSymbol3DLayer" {
  import FillSymbol3DLayer = __esri.FillSymbol3DLayer;
  export = FillSymbol3DLayer;
}

declare module "esri/symbols/Font" {
  import Font = __esri.Font;
  export = Font;
}

declare module "esri/symbols/IconSymbol3DLayer" {
  import IconSymbol3DLayer = __esri.IconSymbol3DLayer;
  export = IconSymbol3DLayer;
}

declare module "esri/symbols/LabelSymbol3D" {
  import LabelSymbol3D = __esri.LabelSymbol3D;
  export = LabelSymbol3D;
}

declare module "esri/symbols/LineSymbol" {
  import LineSymbol = __esri.LineSymbol;
  export = LineSymbol;
}

declare module "esri/symbols/LineSymbol3D" {
  import LineSymbol3D = __esri.LineSymbol3D;
  export = LineSymbol3D;
}

declare module "esri/symbols/LineSymbol3DLayer" {
  import LineSymbol3DLayer = __esri.LineSymbol3DLayer;
  export = LineSymbol3DLayer;
}

declare module "esri/symbols/MarkerSymbol" {
  import MarkerSymbol = __esri.MarkerSymbol;
  export = MarkerSymbol;
}

declare module "esri/symbols/MeshSymbol3D" {
  import MeshSymbol3D = __esri.MeshSymbol3D;
  export = MeshSymbol3D;
}

declare module "esri/symbols/ObjectSymbol3DLayer" {
  import ObjectSymbol3DLayer = __esri.ObjectSymbol3DLayer;
  export = ObjectSymbol3DLayer;
}

declare module "esri/symbols/PictureFillSymbol" {
  import PictureFillSymbol = __esri.PictureFillSymbol;
  export = PictureFillSymbol;
}

declare module "esri/symbols/PictureMarkerSymbol" {
  import PictureMarkerSymbol = __esri.PictureMarkerSymbol;
  export = PictureMarkerSymbol;
}

declare module "esri/symbols/PathSymbol3DLayer" {
  import PathSymbol3DLayer = __esri.PathSymbol3DLayer;
  export = PathSymbol3DLayer;
}

declare module "esri/symbols/PointSymbol3D" {
  import PointSymbol3D = __esri.PointSymbol3D;
  export = PointSymbol3D;
}

declare module "esri/symbols/PolygonSymbol3D" {
  import PolygonSymbol3D = __esri.PolygonSymbol3D;
  export = PolygonSymbol3D;
}

declare module "esri/symbols/SimpleFillSymbol" {
  import SimpleFillSymbol = __esri.SimpleFillSymbol;
  export = SimpleFillSymbol;
}

declare module "esri/symbols/SimpleLineSymbol" {
  import SimpleLineSymbol = __esri.SimpleLineSymbol;
  export = SimpleLineSymbol;
}

declare module "esri/symbols/SimpleMarkerSymbol" {
  import SimpleMarkerSymbol = __esri.SimpleMarkerSymbol;
  export = SimpleMarkerSymbol;
}

declare module "esri/symbols/Symbol" {
  import Symbol = __esri.Symbol;
  export = Symbol;
}

declare module "esri/symbols/Symbol3D" {
  import Symbol3D = __esri.Symbol3D;
  export = Symbol3D;
}

declare module "esri/symbols/Symbol3DLayer" {
  import Symbol3DLayer = __esri.Symbol3DLayer;
  export = Symbol3DLayer;
}

declare module "esri/symbols/TextSymbol" {
  import TextSymbol = __esri.TextSymbol;
  export = TextSymbol;
}

declare module "esri/symbols/TextSymbol3DLayer" {
  import TextSymbol3DLayer = __esri.TextSymbol3DLayer;
  export = TextSymbol3DLayer;
}

declare module "esri/symbols/WebStyleSymbol" {
  import WebStyleSymbol = __esri.WebStyleSymbol;
  export = WebStyleSymbol;
}

declare module "esri/symbols/callouts/Callout3D" {
  import Callout3D = __esri.Callout3D;
  export = Callout3D;
}

declare module "esri/symbols/callouts/LineCallout3D" {
  import LineCallout3D = __esri.LineCallout3D;
  export = LineCallout3D;
}

declare module "esri/tasks/ClosestFacilityTask" {
  import ClosestFacilityTask = __esri.ClosestFacilityTask;
  export = ClosestFacilityTask;
}

declare module "esri/tasks/FindTask" {
  import FindTask = __esri.FindTask;
  export = FindTask;
}

declare module "esri/tasks/GeometryService" {
  import GeometryService = __esri.GeometryService;
  export = GeometryService;
}

declare module "esri/tasks/Geoprocessor" {
  import Geoprocessor = __esri.Geoprocessor;
  export = Geoprocessor;
}

declare module "esri/tasks/IdentifyTask" {
  import IdentifyTask = __esri.IdentifyTask;
  export = IdentifyTask;
}

declare module "esri/tasks/ImageServiceIdentifyTask" {
  import ImageServiceIdentifyTask = __esri.ImageServiceIdentifyTask;
  export = ImageServiceIdentifyTask;
}

declare module "esri/tasks/Locator" {
  import Locator = __esri.Locator;
  export = Locator;
}

declare module "esri/tasks/QueryTask" {
  import QueryTask = __esri.QueryTask;
  export = QueryTask;
}

declare module "esri/tasks/PrintTask" {
  import PrintTask = __esri.PrintTask;
  export = PrintTask;
}

declare module "esri/tasks/RouteTask" {
  import RouteTask = __esri.RouteTask;
  export = RouteTask;
}

declare module "esri/tasks/ServiceAreaTask" {
  import ServiceAreaTask = __esri.ServiceAreaTask;
  export = ServiceAreaTask;
}

declare module "esri/tasks/Task" {
  import Task = __esri.Task;
  export = Task;
}

declare module "esri/tasks/support/AddressCandidate" {
  import AddressCandidate = __esri.AddressCandidate;
  export = AddressCandidate;
}

declare module "esri/tasks/support/AreasAndLengthsParameters" {
  import AreasAndLengthsParameters = __esri.AreasAndLengthsParameters;
  export = AreasAndLengthsParameters;
}

declare module "esri/tasks/support/BufferParameters" {
  import BufferParameters = __esri.BufferParameters;
  export = BufferParameters;
}

declare module "esri/tasks/support/ClosestFacilityParameters" {
  import ClosestFacilityParameters = __esri.ClosestFacilityParameters;
  export = ClosestFacilityParameters;
}

declare module "esri/tasks/support/ClosestFacilitySolveResult" {
  import ClosestFacilitySolveResult = __esri.ClosestFacilitySolveResult;
  export = ClosestFacilitySolveResult;
}

declare module "esri/tasks/support/DataFile" {
  import DataFile = __esri.DataFile;
  export = DataFile;
}

declare module "esri/tasks/support/DataLayer" {
  import DataLayer = __esri.DataLayer;
  export = DataLayer;
}

declare module "esri/tasks/support/Date" {
  import supportDate = __esri.supportDate;
  export = supportDate;
}

declare module "esri/tasks/support/DensifyParameters" {
  import DensifyParameters = __esri.DensifyParameters;
  export = DensifyParameters;
}

declare module "esri/tasks/support/DirectionsFeatureSet" {
  import DirectionsFeatureSet = __esri.DirectionsFeatureSet;
  export = DirectionsFeatureSet;
}

declare module "esri/tasks/support/DistanceParameters" {
  import DistanceParameters = __esri.DistanceParameters;
  export = DistanceParameters;
}

declare module "esri/tasks/support/FeatureSet" {
  import FeatureSet = __esri.FeatureSet;
  export = FeatureSet;
}

declare module "esri/tasks/support/FindParameters" {
  import FindParameters = __esri.FindParameters;
  export = FindParameters;
}

declare module "esri/tasks/support/FindResult" {
  import FindResult = __esri.FindResult;
  export = FindResult;
}

declare module "esri/tasks/support/GeneralizeParameters" {
  import GeneralizeParameters = __esri.GeneralizeParameters;
  export = GeneralizeParameters;
}

declare module "esri/tasks/support/GPMessage" {
  import GPMessage = __esri.GPMessage;
  export = GPMessage;
}

declare module "esri/tasks/support/IdentifyParameters" {
  import IdentifyParameters = __esri.IdentifyParameters;
  export = IdentifyParameters;
}

declare module "esri/tasks/support/IdentifyResult" {
  import IdentifyResult = __esri.IdentifyResult;
  export = IdentifyResult;
}

declare module "esri/tasks/support/ImageServiceIdentifyParameters" {
  import ImageServiceIdentifyParameters = __esri.ImageServiceIdentifyParameters;
  export = ImageServiceIdentifyParameters;
}

declare module "esri/tasks/support/ImageServiceIdentifyResult" {
  import ImageServiceIdentifyResult = __esri.ImageServiceIdentifyResult;
  export = ImageServiceIdentifyResult;
}

declare module "esri/tasks/support/JobInfo" {
  import JobInfo = __esri.JobInfo;
  export = JobInfo;
}

declare module "esri/tasks/support/LegendLayer" {
  import LegendLayer = __esri.LegendLayer;
  export = LegendLayer;
}

declare module "esri/tasks/support/LengthsParameters" {
  import LengthsParameters = __esri.LengthsParameters;
  export = LengthsParameters;
}

declare module "esri/tasks/support/LinearUnit" {
  import LinearUnit = __esri.LinearUnit;
  export = LinearUnit;
}

declare module "esri/tasks/support/NAMessage" {
  import NAMessage = __esri.NAMessage;
  export = NAMessage;
}

declare module "esri/tasks/support/OffsetParameters" {
  import OffsetParameters = __esri.OffsetParameters;
  export = OffsetParameters;
}

declare module "esri/tasks/support/ParameterValue" {
  import ParameterValue = __esri.ParameterValue;
  export = ParameterValue;
}

declare module "esri/tasks/support/PrintParameters" {
  import PrintParameters = __esri.PrintParameters;
  export = PrintParameters;
}

declare module "esri/tasks/support/PrintTemplate" {
  import PrintTemplate = __esri.PrintTemplate;
  export = PrintTemplate;
}

declare module "esri/tasks/support/ProjectParameters" {
  import ProjectParameters = __esri.ProjectParameters;
  export = ProjectParameters;
}

declare module "esri/tasks/support/Query" {
  import Query = __esri.Query;
  export = Query;
}

declare module "esri/tasks/support/RasterData" {
  import RasterData = __esri.RasterData;
  export = RasterData;
}

declare module "esri/tasks/support/RelationParameters" {
  import RelationParameters = __esri.RelationParameters;
  export = RelationParameters;
}

declare module "esri/tasks/support/RelationshipQuery" {
  import RelationshipQuery = __esri.RelationshipQuery;
  export = RelationshipQuery;
}

declare module "esri/tasks/support/RouteParameters" {
  import RouteParameters = __esri.RouteParameters;
  export = RouteParameters;
}

declare module "esri/tasks/support/RouteResult" {
  import RouteResult = __esri.RouteResult;
  export = RouteResult;
}

declare module "esri/tasks/support/ServiceAreaParameters" {
  import ServiceAreaParameters = __esri.ServiceAreaParameters;
  export = ServiceAreaParameters;
}

declare module "esri/tasks/support/ServiceAreaSolveResult" {
  import ServiceAreaSolveResult = __esri.ServiceAreaSolveResult;
  export = ServiceAreaSolveResult;
}

declare module "esri/tasks/support/StatisticDefinition" {
  import StatisticDefinition = __esri.StatisticDefinition;
  export = StatisticDefinition;
}

declare module "esri/tasks/support/TrimExtendParameters" {
  import TrimExtendParameters = __esri.TrimExtendParameters;
  export = TrimExtendParameters;
}

declare module "esri/tasks/workflow/ConfigurationTask" {
  import ConfigurationTask = __esri.ConfigurationTask;
  export = ConfigurationTask;
}

declare module "esri/tasks/workflow/JobTask" {
  import JobTask = __esri.JobTask;
  export = JobTask;
}

declare module "esri/tasks/workflow/NotificationTask" {
  import NotificationTask = __esri.NotificationTask;
  export = NotificationTask;
}

declare module "esri/tasks/workflow/ReportTask" {
  import ReportTask = __esri.ReportTask;
  export = ReportTask;
}

declare module "esri/tasks/workflow/TokenTask" {
  import TokenTask = __esri.TokenTask;
  export = TokenTask;
}

declare module "esri/tasks/workflow/WorkflowTask" {
  import WorkflowTask = __esri.WorkflowTask;
  export = WorkflowTask;
}

declare module "esri/views/MapView" {
  import MapView = __esri.MapView;
  export = MapView;
}

declare module "esri/views/SceneView" {
  import SceneView = __esri.SceneView;
  export = SceneView;
}

declare module "esri/views/View" {
  import View = __esri.View;
  export = View;
}

declare module "esri/views/ViewAnimation" {
  import ViewAnimation = __esri.ViewAnimation;
  export = ViewAnimation;
}

declare module "esri/views/layers/LayerView" {
  import LayerView = __esri.LayerView;
  export = LayerView;
}

declare module "esri/views/layers/CSVLayerView" {
  import CSVLayerView = __esri.CSVLayerView;
  export = CSVLayerView;
}

declare module "esri/views/layers/FeatureLayerView" {
  import FeatureLayerView = __esri.FeatureLayerView;
  export = FeatureLayerView;
}

declare module "esri/views/layers/GraphicsLayerView" {
  import GraphicsLayerView = __esri.GraphicsLayerView;
  export = GraphicsLayerView;
}

declare module "esri/views/layers/ImageryLayerView" {
  import ImageryLayerView = __esri.ImageryLayerView;
  export = ImageryLayerView;
}

declare module "esri/views/layers/SceneLayerView" {
  import SceneLayerView = __esri.SceneLayerView;
  export = SceneLayerView;
}

declare module "esri/views/layers/StreamLayerView" {
  import StreamLayerView = __esri.StreamLayerView;
  export = StreamLayerView;
}

declare module "esri/views/ui/UI" {
  import UI = __esri.UI;
  export = UI;
}

declare module "esri/views/ui/DefaultUI" {
  import DefaultUI = __esri.DefaultUI;
  export = DefaultUI;
}

declare module "esri/webmap/InitialViewProperties" {
  import InitialViewProperties = __esri.InitialViewProperties;
  export = InitialViewProperties;
}

declare module "esri/webscene/Environment" {
  import Environment = __esri.Environment;
  export = Environment;
}

declare module "esri/webscene/InitialViewProperties" {
  import websceneInitialViewProperties = __esri.websceneInitialViewProperties;
  export = websceneInitialViewProperties;
}

declare module "esri/webscene/Lighting" {
  import Lighting = __esri.Lighting;
  export = Lighting;
}

declare module "esri/webscene/Presentation" {
  import Presentation = __esri.Presentation;
  export = Presentation;
}

declare module "esri/webscene/Slide" {
  import Slide = __esri.Slide;
  export = Slide;
}

declare module "esri/widgets/Attribution" {
  import Attribution = __esri.Attribution;
  export = Attribution;
}

declare module "esri/widgets/BasemapGallery" {
  import BasemapGallery = __esri.BasemapGallery;
  export = BasemapGallery;
}

declare module "esri/widgets/BasemapToggle" {
  import BasemapToggle = __esri.BasemapToggle;
  export = BasemapToggle;
}

declare module "esri/widgets/ColorSlider" {
  import ColorSlider = __esri.ColorSlider;
  export = ColorSlider;
}

declare module "esri/widgets/Compass" {
  import Compass = __esri.Compass;
  export = Compass;
}

declare module "esri/widgets/Expand" {
  import Expand = __esri.Expand;
  export = Expand;
}

declare module "esri/widgets/Home" {
  import Home = __esri.Home;
  export = Home;
}

declare module "esri/widgets/LayerList" {
  import LayerList = __esri.LayerList;
  export = LayerList;
}

declare module "esri/widgets/Legend" {
  import Legend = __esri.Legend;
  export = Legend;
}

declare module "esri/widgets/Locate" {
  import Locate = __esri.Locate;
  export = Locate;
}

declare module "esri/widgets/NavigationToggle" {
  import NavigationToggle = __esri.NavigationToggle;
  export = NavigationToggle;
}

declare module "esri/widgets/Popup" {
  import Popup = __esri.Popup;
  export = Popup;
}

declare module "esri/widgets/Print" {
  import Print = __esri.Print;
  export = Print;
}

declare module "esri/widgets/ScaleBar" {
  import ScaleBar = __esri.ScaleBar;
  export = ScaleBar;
}

declare module "esri/widgets/Search" {
  import Search = __esri.Search;
  export = Search;
}

declare module "esri/widgets/SizeSlider" {
  import SizeSlider = __esri.SizeSlider;
  export = SizeSlider;
}

declare module "esri/widgets/Track" {
  import Track = __esri.Track;
  export = Track;
}

declare module "esri/widgets/UnivariateColorSizeSlider" {
  import UnivariateColorSizeSlider = __esri.UnivariateColorSizeSlider;
  export = UnivariateColorSizeSlider;
}

declare module "esri/widgets/Widget" {
  import Widget = __esri.Widget;
  export = Widget;
}

declare module "esri/widgets/Zoom" {
  import Zoom = __esri.Zoom;
  export = Zoom;
}

declare module "esri/widgets/Attribution/AttributionViewModel" {
  import AttributionViewModel = __esri.AttributionViewModel;
  export = AttributionViewModel;
}

declare module "esri/widgets/BasemapGallery/BasemapGalleryViewModel" {
  import BasemapGalleryViewModel = __esri.BasemapGalleryViewModel;
  export = BasemapGalleryViewModel;
}

declare module "esri/widgets/BasemapToggle/BasemapToggleViewModel" {
  import BasemapToggleViewModel = __esri.BasemapToggleViewModel;
  export = BasemapToggleViewModel;
}

declare module "esri/widgets/Compass/CompassViewModel" {
  import CompassViewModel = __esri.CompassViewModel;
  export = CompassViewModel;
}

declare module "esri/widgets/Expand/ExpandViewModel" {
  import ExpandViewModel = __esri.ExpandViewModel;
  export = ExpandViewModel;
}

declare module "esri/widgets/Home/HomeViewModel" {
  import HomeViewModel = __esri.HomeViewModel;
  export = HomeViewModel;
}

declare module "esri/widgets/LayerList/LayerListViewModel" {
  import LayerListViewModel = __esri.LayerListViewModel;
  export = LayerListViewModel;
}

declare module "esri/widgets/LayerList/ListItem" {
  import ListItem = __esri.ListItem;
  export = ListItem;
}

declare module "esri/widgets/Locate/LocateViewModel" {
  import LocateViewModel = __esri.LocateViewModel;
  export = LocateViewModel;
}

declare module "esri/widgets/NavigationToggle/NavigationToggleViewModel" {
  import NavigationToggleViewModel = __esri.NavigationToggleViewModel;
  export = NavigationToggleViewModel;
}

declare module "esri/widgets/Print/PrintViewModel" {
  import PrintViewModel = __esri.PrintViewModel;
  export = PrintViewModel;
}

declare module "esri/widgets/Popup/PopupViewModel" {
  import PopupViewModel = __esri.PopupViewModel;
  export = PopupViewModel;
}

declare module "esri/widgets/ScaleBar/ScaleBarViewModel" {
  import ScaleBarViewModel = __esri.ScaleBarViewModel;
  export = ScaleBarViewModel;
}

declare module "esri/widgets/Search/SearchViewModel" {
  import SearchViewModel = __esri.SearchViewModel;
  export = SearchViewModel;
}

declare module "esri/widgets/Track/TrackViewModel" {
  import TrackViewModel = __esri.TrackViewModel;
  export = TrackViewModel;
}

declare module "esri/widgets/Zoom/ZoomViewModel" {
  import ZoomViewModel = __esri.ZoomViewModel;
  export = ZoomViewModel;
}

declare module "esri/core/Evented" {
  import Evented = __esri.Evented;
  export = Evented;
}

declare module "esri/core/JSONSupport" {
  import JSONSupport = __esri.JSONSupport;
  export = JSONSupport;
}

declare module "esri/core/Loadable" {
  import Loadable = __esri.Loadable;
  export = Loadable;
}

declare module "esri/core/Promise" {
  import corePromise = __esri.corePromise;
  export = corePromise;
}

declare module "esri/layers/DynamicLayer" {
  import DynamicLayer = __esri.DynamicLayer;
  export = DynamicLayer;
}

declare module "esri/layers/TiledLayer" {
  import TiledLayer = __esri.TiledLayer;
  export = TiledLayer;
}

declare module "esri/layers/mixins/ArcGISCachedService" {
  import ArcGISCachedService = __esri.ArcGISCachedService;
  export = ArcGISCachedService;
}

declare module "esri/layers/mixins/ArcGISDynamicMapService" {
  import ArcGISDynamicMapService = __esri.ArcGISDynamicMapService;
  export = ArcGISDynamicMapService;
}

declare module "esri/layers/mixins/ArcGISImageService" {
  import ArcGISImageService = __esri.ArcGISImageService;
  export = ArcGISImageService;
}

declare module "esri/layers/mixins/ArcGISMapService" {
  import ArcGISMapService = __esri.ArcGISMapService;
  export = ArcGISMapService;
}

declare module "esri/layers/mixins/PortalLayer" {
  import PortalLayer = __esri.PortalLayer;
  export = PortalLayer;
}

declare module "esri/layers/mixins/ScaleRangeLayer" {
  import ScaleRangeLayer = __esri.ScaleRangeLayer;
  export = ScaleRangeLayer;
}

declare module "esri/layers/mixins/SceneService" {
  import SceneService = __esri.SceneService;
  export = SceneService;
}

declare module "esri/renderers/VisualVariablesMixin" {
  import VisualVariablesMixin = __esri.VisualVariablesMixin;
  export = VisualVariablesMixin;
}

declare module "esri/support/LayersMixin" {
  import LayersMixin = __esri.LayersMixin;
  export = LayersMixin;
}

declare module "esri/views/BreakpointsOwner" {
  import BreakpointsOwner = __esri.BreakpointsOwner;
  export = BreakpointsOwner;
}

declare module "esri/views/DOMContainer" {
  import DOMContainer = __esri.DOMContainer;
  export = DOMContainer;
}

declare module "esri/widgets/Widgette" {
  import Widgette = __esri.Widgette;
  export = Widgette;
}

declare module "esri/widgets/support/GeolocationPositioning" {
  import GeolocationPositioning = __esri.GeolocationPositioning;
  export = GeolocationPositioning;
}

declare module "esri/config" {
  import config = __esri.config;
  export = config;
}

declare module "esri/kernel" {
  import kernel = __esri.kernel;
  export = kernel;
}

declare module "esri/request" {
  import request = __esri.request;
  export = request;
}

declare module "esri/core/lang" {
  import lang = __esri.lang;
  export = lang;
}

declare module "esri/core/promiseUtils" {
  import promiseUtils = __esri.promiseUtils;
  export = promiseUtils;
}

declare module "esri/core/requireUtils" {
  import requireUtils = __esri.requireUtils;
  export = requireUtils;
}

declare module "esri/core/urlUtils" {
  import urlUtils = __esri.urlUtils;
  export = urlUtils;
}

declare module "esri/core/watchUtils" {
  import watchUtils = __esri.watchUtils;
  export = watchUtils;
}

declare module "esri/core/accessorSupport/decorators" {
  import decorators = __esri.decorators;
  export = decorators;
}

declare module "esri/core/workers" {
  import workers = __esri.workers;
  export = workers;
}

declare module "esri/geometry/geometryEngine" {
  import geometryEngine = __esri.geometryEngine;
  export = geometryEngine;
}

declare module "esri/geometry/geometryEngineAsync" {
  import geometryEngineAsync = __esri.geometryEngineAsync;
  export = geometryEngineAsync;
}

declare module "esri/geometry/support/jsonUtils" {
  import jsonUtils = __esri.jsonUtils;
  export = jsonUtils;
}

declare module "esri/geometry/support/normalizeUtils" {
  import normalizeUtils = __esri.normalizeUtils;
  export = normalizeUtils;
}

declare module "esri/geometry/support/webMercatorUtils" {
  import webMercatorUtils = __esri.webMercatorUtils;
  export = webMercatorUtils;
}

declare module "esri/renderers/smartMapping/creators/color" {
  import color = __esri.color;
  export = color;
}

declare module "esri/renderers/smartMapping/creators/location" {
  import location = __esri.location;
  export = location;
}

declare module "esri/renderers/smartMapping/creators/size" {
  import size = __esri.size;
  export = size;
}

declare module "esri/renderers/smartMapping/creators/type" {
  import type = __esri.type;
  export = type;
}

declare module "esri/renderers/smartMapping/creators/univariateColorSize" {
  import univariateColorSize = __esri.univariateColorSize;
  export = univariateColorSize;
}

declare module "esri/renderers/smartMapping/statistics/classBreaks" {
  import classBreaks = __esri.classBreaks;
  export = classBreaks;
}

declare module "esri/renderers/smartMapping/statistics/histogram" {
  import histogram = __esri.histogram;
  export = histogram;
}

declare module "esri/renderers/smartMapping/statistics/summaryStatistics" {
  import summaryStatistics = __esri.summaryStatistics;
  export = summaryStatistics;
}

declare module "esri/renderers/smartMapping/statistics/uniqueValues" {
  import uniqueValues = __esri.uniqueValues;
  export = uniqueValues;
}

declare module "esri/renderers/smartMapping/symbology/color" {
  import symbologyColor = __esri.symbologyColor;
  export = symbologyColor;
}

declare module "esri/renderers/smartMapping/symbology/location" {
  import symbologyLocation = __esri.symbologyLocation;
  export = symbologyLocation;
}

declare module "esri/renderers/smartMapping/symbology/size" {
  import symbologySize = __esri.symbologySize;
  export = symbologySize;
}

declare module "esri/renderers/smartMapping/symbology/type" {
  import symbologyType = __esri.symbologyType;
  export = symbologyType;
}

declare module "esri/renderers/support/jsonUtils" {
  import supportJsonUtils = __esri.supportJsonUtils;
  export = supportJsonUtils;
}

declare module "esri/symbols/support/jsonUtils" {
  import symbolsSupportJsonUtils = __esri.symbolsSupportJsonUtils;
  export = symbolsSupportJsonUtils;
}

declare module "esri/views/3d/externalRenderers" {
  import externalRenderers = __esri.externalRenderers;
  export = externalRenderers;
}

declare module "esri/widgets/support/widget" {
  import widget = __esri.widget;
  export = widget;
}

declare module "esri/widgets/BasemapGallery/BasemapGalleryItem" {
  import BasemapGalleryItem = __esri.BasemapGalleryItem;
  export = BasemapGalleryItem;
}

declare module "esri/widgets/BasemapGallery/support/LocalBasemapsSource" {
  import LocalBasemapsSource = __esri.LocalBasemapsSource;
  export = LocalBasemapsSource;
}

declare module "esri/widgets/BasemapGallery/support/PortalBasemapsSource" {
  import PortalBasemapsSource = __esri.PortalBasemapsSource;
  export = PortalBasemapsSource;
}