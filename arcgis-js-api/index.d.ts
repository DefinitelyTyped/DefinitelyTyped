// Type definitions for ArcGIS API for JavaScript 4.2
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
    destroyed: boolean;
    initialized: boolean;
    declaredClass: string;
    destroy(): void;
    get<T>(propertyName: string): T;
    get(propertyName: string): any;
    set<T>(propertyName: string, value: T): this;
    set(props: HashMap<any>): this;
    protected notifyChange(propertyName: string): void;
    protected _get(propertyName: string): any;
    protected _get<T>(propertyName: string): T;
    protected _set<T>(propertyName: string, value: T): this;
  }

  export interface Text {
    type: string;
    text: string;
  }

  export interface Media {
    type: string;
    mediaInfos: any[];
  }

  export interface Fields {
    type: string;
    fieldInfos: any[];
  }

  export interface Attachments {
    type: string;
  }

  export interface WatchHandle {
    remove(): void;
  }

  export interface PausableWatchHandle {
    remove(): void;
    pause(): void;
    resume(): void;
  }

  export interface AttributeParamValue {
    attributeName: string;
    parameterName: string;
    value: string;
  }

  export interface ExternalRenderer {
    setup(): void;
    render(): void;
  }

  export interface RenderContext {
    gl: any;
    camera: any;
    sunLight: any;

    resetWebGLState(): void;
    bindRenderTarget(): void;
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
    diffuse: any;
    ambient: any;
  }

  export interface ColorAndIntensity {
    color: any;
    intensity: number;
  }

  export interface LocatorSource {
    categories: string[];
    countryCode: string;
    localSearchOptions: any;
    locationToAddressDistance: number;
    searchTemplate: string;
    locator: Locator;
    singleLineFieldName: string;
  }

  export interface FeatureLayerSource {
    displayField: string;
    exactMatch: boolean;
    featureLayer: FeatureLayer;
    searchFields: string[];
    searchQueryParams: any;
    suggestQueryParams: any;
    suggestionTemplate: string;
  }

  export interface SearchViewModelLocatorSource {
    categories: string[];
    countryCode: string;
    localSearchOptions: any;
    locationToAddressDistance: number;
    searchTemplate: string;
    locator: Locator;
    singleLineFieldName: string;
  }

  export interface SearchViewModelFeatureLayerSource {
    displayField: string;
    exactMatch: boolean;
    featureLayer: FeatureLayer;
    searchFields: string[];
    searchQueryParams: any;
    suggestQueryParams: any;
    suggestionTemplate: string;
  }

  export type GetHeader = (headerName: string) => string;

  export type WatchCallback = (newValue: any, oldValue: any, propertyName: string, target: Accessor) => void;

  export type ItemCallback = (item: any, index: number) => void;

  export type ItemTestCallback = (item: any, index: number) => boolean;

  export type ItemMapCallback = (item: any, index: number) => any;

  export type ItemReduceCallback = (previousValue: any, currentValue: any, index: number) => any;

  export type ItemCompareCallback = (firstItem: any, secondItem: any) => number;

  export type EventAttachedCallback = (target: any, propName: string, obj: Accessor, eventName: string) => void;

  export type HandlerCallback = (authorizeParams: any, authorizeUrl: string, oAuthInfo: OAuthInfo, resourceUrl: string, serverInfo: ServerInfo) => void;

  export type EasingFunction = (t: number, duration: number) => number;

  export interface PromisedWatchHandle extends IPromise<any> {
    remove(): void;
  }

  export interface GroundQueryElevationOptions {
    returnSampleInfo?: boolean;
    noDataValue?: number;
  }

  export interface PopupTemplateFieldInfos {
    fieldName: string;
    format: PopupTemplateFieldInfosFormat;
    isEditable: boolean;
    label: string;
    stringFieldOption: string;
    tooltip: string;
    visible: boolean;
  }

  export interface PopupTemplateFieldInfosFormat {
    dateFormat: string;
    digitSeparator: boolean;
    places: number;
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

  export interface IdentityManagerBaseGenerateTokenOptions {
    serverUrl: string;
    token: string;
    ssl: boolean;
  }

  export interface IdentityManagerBaseGetCredentialOptions {
    error: Error;
    oAuthPopupConfirmation: boolean;
    retry: boolean;
    token: string;
  }

  export interface IdentityManagerBaseOAuthSignInOptions {
    error: Error;
    oAuthPopupConfirmation: boolean;
    token: string;
  }

  export interface IdentityManagerBaseRegisterTokenProperties {
    expires: number;
    server: string;
    ssl: boolean;
    token: string;
    useId: string;
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

  export interface ElevationLayerQueryElevationOptions {
    demResolution?: number | string;
    returnSampleInfo?: boolean;
    noDataValue?: number;
  }

  export interface CSVLayerElevationInfo {
    mode: string;
    offset?: number;
  }

  export interface FeatureLayerElevationInfo {
    mode: string;
    offset?: number;
  }

  export interface GraphicsLayerElevationInfo {
    mode: string;
    offset?: number;
  }

  export interface LayerFromArcGISServerUrlParams {
    url: string;
    properties?: any;
  }

  export interface LayerFromPortalItemParams {
    portalItem: PortalItem;
  }

  export interface SceneLayerElevationInfo {
    mode: string;
    offset?: number;
  }

  export interface VectorTileLayerCurrentStyleInfo {
    serviceUrl: string;
    styleUrl: string;
    spriteUrl: string;
    glyphsUrl: string;
    style: any;
    layerDefinition: any;
  }

  export interface CodedValueDomainCodedValues {
    name: string;
    code: string | number;
  }

  export interface LabelClassLabelExpressionInfo {
    value: string;
  }

  export interface PixelBlockAddDataPlaneData {
    pixels: number[][];
    statistics: any[];
  }

  export interface PixelBlockStatistics {
    maxValue: number;
    minValue: number;
    noDataValue: number;
  }

  export interface PortalFeaturedGroups {
    owner: string;
    title: string;
  }

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

  export interface ClassBreaksRendererClassBreakInfos {
    minValue: number;
    maxValue: number;
    symbol: Symbol;
    label: string;
  }

  export interface ClassBreaksRendererLegendOptions {
    title: string;
  }

  export interface UniqueValueRendererLegendOptions {
    title: string;
  }

  export interface UniqueValueRendererUniqueValueInfos {
    value: string;
    symbol: Symbol;
    label: string;
  }

  export interface PointCloudClassBreaksRendererColorClassBreakInfos {
    minValue: number;
    maxValue: number;
    color: Color;
    label: string;
  }

  export interface PointCloudStretchRendererStops {
    value: number;
    label: string;
    color: Color;
  }

  export interface PointCloudUniqueValueRendererColorUniqueValueInfos {
    values: number[];
    color: Color;
    label: string;
  }

  export interface FillSymbol3DLayerOutline {
    color: Color | string;
    size: number | string;
  }

  export interface IconSymbol3DLayerOutline {
    color: Color | string;
    size: number | string;
  }

  export interface IconSymbol3DLayerResource {
    primitive?: string;
    href?: string;
  }

  export interface ObjectSymbol3DLayerResource {
    primitive?: string;
    href?: string;
  }

  export interface Symbol3DStyleOrigin {
    styleName: string;
    styleUrl: string;
    name: string;
  }

  export interface TextSymbol3DLayerFont {
    family: string;
    weight: string;
    style: string;
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

  export interface ClosestFacilityParametersAttributeParameterValues {
    attributeName: string;
    parameterName: string;
    value: string;
  }

  export interface PrintTemplateExportOptions {
    width: number;
    height: number;
    dpi: number;
  }

  export interface PrintTemplateLayoutOptions {
    titleText: string;
    authorText: string;
    copyrightText: string;
    scalebarUnit: string;
    legendLayers: LegendLayer[];
    customTextElements: any[];
  }

  export interface ProjectParametersTransformation {
    wkid: number;
  }

  export interface QueryQuantizationParameters {
    extent: Extent;
    mode: string;
    originPosition: string;
    tolerance: number;
  }

  export interface MapViewConstraints {
    lods?: LOD[];
    minScale?: number;
    maxScale?: number;
    minZoom?: number;
    maxZoom?: number;
    snapToZoom?: boolean;
    rotationEnabled?: boolean;
    effectiveLODs?: number;
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

  export interface SceneViewConstraintsProperties {
    altitude?: SceneViewConstraintsAltitudeProperties;
    clipDistance?: SceneViewConstraintsClipDistanceProperties;
    collision?: SceneViewConstraintsCollision;
    tilt?: SceneViewConstraintsTiltProperties;
  }
  export interface SceneViewConstraints extends Accessor {
    altitude: SceneViewConstraintsAltitude;
    clipDistance: SceneViewConstraintsClipDistance;
    collision: SceneViewConstraintsCollision;
    tilt: SceneViewConstraintsTilt;
  }

  export interface SceneViewConstraintsAltitudeProperties {
    min?: number;
    max?: number;
  }
  export interface SceneViewConstraintsAltitude extends Accessor {
    min: number;
    max: number;
  }

  export interface SceneViewConstraintsClipDistanceProperties {
    near?: number;
    far?: number;
    mode?: string;
  }
  export interface SceneViewConstraintsClipDistance extends Accessor {
    near: number;
    far: number;
    mode: string;
  }

  export interface SceneViewConstraintsCollision {
    enabled: boolean;
  }

  export interface SceneViewConstraintsTiltProperties {
    max?: number;
    mode?: string;
  }
  export interface SceneViewConstraintsTilt extends Accessor {
    max: number;
    mode: string;
  }

  export interface SceneViewEnvironmentProperties {
    lighting?: SceneViewEnvironmentLightingProperties;
    atmosphereEnabled?: boolean;
    atmosphere?: SceneViewEnvironmentAtmosphereProperties;
    starsEnabled?: boolean;
  }
  export interface SceneViewEnvironment extends Accessor {
    lighting: SceneViewEnvironmentLighting;
    atmosphereEnabled: boolean;
    atmosphere: SceneViewEnvironmentAtmosphere;
    starsEnabled: boolean;
  }

  export interface SceneViewEnvironmentAtmosphereProperties {
    quality?: string;
  }
  export interface SceneViewEnvironmentAtmosphere extends Accessor {
    quality: string;
  }

  export interface SceneViewEnvironmentLightingProperties {
    date?: Date;
    directShadowsEnabled?: boolean;
    ambientOcclusionEnabled?: boolean;
    cameraTrackingEnabled?: boolean;
  }
  export interface SceneViewEnvironmentLighting extends Accessor {
    date: Date;
    directShadowsEnabled: boolean;
    ambientOcclusionEnabled: boolean;
    cameraTrackingEnabled: boolean;
  }

  export interface SceneViewGoToOptions {
    animate?: boolean;
    speedFactor?: number;
    duration?: number;
    maxDuration?: number;
    easing?: string | EasingFunction;
  }

  export interface SceneViewHitTestScreenPoint {
    x: number;
    y: number;
  }

  export interface ViewPadding {
    left: number;
    top: number;
    right: number;
    bottom: number;
  }

  export interface ImageryLayerViewPixelData {
    extent: Extent;
    pixelBlock: PixelBlock;
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
    text: string;
  }

  export interface SlideThumbnailProperties {
    url?: string;
  }
  export interface SlideThumbnail extends Accessor {
    url: string;
  }

  export interface SlideTitleProperties {
    text?: string;
  }
  export interface SlideTitle extends Accessor {
    text: string;
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
    title: string;
    layer: Layer;
  }

  export interface PopupDockOptions {
    breakpoint: any | boolean;
    buttonEnabled: boolean;
    position: string | Function;
  }

  export interface PopupOpenOptions {
    title?: string;
    content?: string;
    location?: Geometry;
    features?: Graphic[];
    promises?: IPromise<any>[];
    updateLocationEnabled?: boolean;
  }

  export interface SearchSources extends Collection {
    autoNavigate: boolean;
    resultGraphicEnabled: boolean;
    resultSymbol: Symbol;
    popupEnabled: boolean;
    suggestionsEnabled: boolean;
    popup: Popup;
    maxResults: number;
    maxSuggestions: number;
    minSuggestCharacters: number;
    name: string;
    outFields: string[];
    placeholder: string;
    prefix: string;
    searchExtent: Extent[];
    popupOpenOnSelect: boolean;
    suffix: string;
    withinViewEnabled: boolean;
    zoomScale: number;
  }

  export interface SearchViewModelSources {
    autoNavigate: boolean;
    resultGraphicEnabled: boolean;
    resultSymbol: Symbol;
    popupEnabled: boolean;
    suggestionsEnabled: boolean;
    popup: Popup;
    maxResults: number;
    maxSuggestions: number;
    minSuggestCharacters: number;
    name: string;
    outFields: string[];
    placeholder: string;
    prefix: string;
    searchExtent: Extent[];
    popupOpenOnSelect: boolean;
    suffix: string;
    withinViewEnabled: boolean;
    zoomScale: number;
  }

  export interface ArcGISDynamicMapServiceGetExportImageParametersOptions {
    extent: Extent;
    width: number;
    height: number;
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
    corsDetection: boolean;
    corsDetectionTimeout: number;
    corsEnabledServers: Array<string | configRequestCorsEnabledServers>;
    forceProxy: boolean;
    httpsDomains: string[];
    maxUrlLength: number;
    proxyUrl: string;
    timeout: number;
    useCors: string | boolean;
    proxyRules: configRequestProxyRules[];
  }

  export interface configRequestCorsEnabledServers {
    host: string;
    withCredentials: boolean;
  }

  export interface configRequestProxyRules {
    proxyUrl: string;
    urlPrefix: string;
  }

  export interface requestEsriRequestOptions {
    callbackParamName?: string;
    query?: any;
    responseType?: string;
    headers?: any;
    timeout?: number;
    method?: string;
    useProxy?: boolean;
    cacheBust?: boolean;
    allowImageDataAccess?: boolean;
  }

  export interface urlUtilsAddProxyRuleRule {
    proxyUrl: string;
    urlPrefix: string;
  }

  export interface decoratorsPropertyPropertyMetadata {
    dependsOn?: string[];
    type?: Function;
    cast?: Function;
    readOnly?: boolean;
    aliasOf?: string;
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

  export interface sizeCreateVisualVariableParams {
    layer: FeatureLayer | SceneLayer;
    field: string;
    normalizationField?: string;
    basemap?: string | Basemap;
    sizeScheme?: any | any | any;
    legendOptions?: sizeCreateVisualVariableParamsLegendOptions;
    statistics?: any;
    minValue?: number;
    maxValue?: number;
    view?: SceneView;
    worldScale?: boolean;
  }

  export interface sizeCreateVisualVariableParamsLegendOptions {
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

  interface Evented {
    emit(type: string, event: any): IHandle;
    on(name: string, callback: Function): IHandle;
  }

  interface EventedConstructor {
    new(): Evented;


    hasEventListener(type: string): boolean;
    on(type: string, listener: Function): any;
  }

  export const Evented: EventedConstructor;

  interface Basemap extends Accessor, Loadable, JSONSupport {
    baseLayers: Collection;
    id: string;
    loaded: boolean;
    portalItem: PortalItem;
    referenceLayers: Collection;
    thumbnailUrl: string;
    title: string;

    clone(): Basemap;
  }

  interface BasemapConstructor {
    new(properties?: BasemapProperties): Basemap;


    fromId(id: string): Basemap;

    fromJSON(json: any): Basemap;
  }

  export const Basemap: BasemapConstructor;

  interface BasemapProperties extends LoadableProperties {
    baseLayers?: Collection;
    id?: string;
    loaded?: boolean;
    portalItem?: PortalItemProperties;
    referenceLayers?: Collection;
    thumbnailUrl?: string;
    title?: string;
  }

  interface Camera extends Accessor, JSONSupport {
    fov: number;
    heading: number;
    position: Point;
    tilt: number;

    clone(): Camera;
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

    clone(): Color;
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
    fromArray(a: number, obj?: Color): Color;
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

    clone(): Graphic;
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

    clone(): Ground;
    queryElevation(geometry: Point | Multipoint | Polyline, options?: GroundQueryElevationOptions): IPromise<any>;
  }

  interface GroundConstructor {
    new(properties?: GroundProperties): Ground;
  }

  export const Ground: GroundConstructor;

  interface GroundProperties {
    layers?: Collection;
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
    allLayers?: Collection;
    basemap?: BasemapProperties;
    ground?: GroundProperties;
  }

  interface PopupTemplate extends Accessor, JSONSupport {
    actions: Collection;
    content: string;
    fieldInfos: PopupTemplateFieldInfos[];
    overwriteActions: boolean;
    title: string;

    clone(): PopupTemplate;
  }

  interface PopupTemplateConstructor {
    new(properties?: PopupTemplateProperties): PopupTemplate;

    fromJSON(json: any): PopupTemplate;
  }

  export const PopupTemplate: PopupTemplateConstructor;

  interface PopupTemplateProperties {
    actions?: Collection;
    content?: string | any[] | Function;
    fieldInfos?: PopupTemplateFieldInfos[];
    overwriteActions?: boolean;
    title?: string | Function;
  }

  interface Viewpoint extends Accessor, JSONSupport {
    camera: Camera;
    rotation: number;
    scale: number;
    targetGeometry: Geometry;

    clone(): Viewpoint;
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
    clone(): Collection;
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

    clone(): Geometry;
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

    clone(): SpatialReference;
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
    initialize(json: any): any;
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
  }

  interface IdentityManagerConstructor {
    new(): IdentityManager;
  }

  export const IdentityManager: IdentityManagerConstructor;

  interface OAuthInfo {
    appId: string;
    authNamespace: string;
    expiration: number;
    locale: string;
    minTimeUntilExpiration: number;
    popup: boolean;
    popupCallbackUrl: string;
    popupWindowFeatures: string;
    portalUrl: string;
    showSocialLogins: boolean;

    toJSON(): any;
  }

  interface OAuthInfoConstructor {
    new(properties?: any): OAuthInfo;
  }

  export const OAuthInfo: OAuthInfoConstructor;

  interface ServerInfo {
    adminTokenServiceUrl: string;
    currentVersion: number;
    server: string;
    shortLivedTokenValidity: number;
    tokenServiceUrl: string;

    toJSON(): any;
  }

  interface ServerInfoConstructor {
    new(properties?: any): ServerInfo;
  }

  export const ServerInfo: ServerInfoConstructor;

  interface ElevationLayer extends Layer, ArcGISMapService, ArcGISCachedService, PortalLayer, TiledLayer {
    url: string;

    fetchTile(level: number, row: number, column: number, noDataValue?: number): IPromise<any>;
    queryElevation(geometry: Point | Multipoint | Polyline, options?: ElevationLayerQueryElevationOptions): IPromise<any>;
  }

  interface ElevationLayerConstructor {
    new(properties?: ElevationLayerProperties): ElevationLayer;

    fromJSON(json: any): ElevationLayer;
  }

  export const ElevationLayer: ElevationLayerConstructor;

  interface ElevationLayerProperties extends LayerProperties, ArcGISMapServiceProperties, ArcGISCachedServiceProperties, PortalLayerProperties, TiledLayerProperties {
    url?: string;
  }

  interface ImageryLayer extends Layer, ArcGISImageService, ScaleRangeLayer {
    pixelFilter: Function;
    popupEnabled: boolean;
    portalItem: PortalItem;
    token: string;

    redraw(): void;
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

  interface MapImageLayer extends Layer, ArcGISMapService, ArcGISDynamicMapService, DynamicLayer {
  }

  interface MapImageLayerConstructor {
    new(properties?: MapImageLayerProperties): MapImageLayer;

    fromJSON(json: any): MapImageLayer;
  }

  export const MapImageLayer: MapImageLayerConstructor;

  interface MapImageLayerProperties extends LayerProperties, ArcGISMapServiceProperties, ArcGISDynamicMapServiceProperties, DynamicLayerProperties {

  }

  interface TileLayer extends Layer, ArcGISMapService, ArcGISCachedService, PortalLayer, TiledLayer {
    attributionDataUrl: string;
    hasAttributionData: boolean;
    legendEnabled: boolean;
    tileServers: string[];
    url: string;
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

  interface CSVLayer extends Layer {
    copyright: string;
    delimiter: string;
    elevationInfo: CSVLayerElevationInfo;
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
    url: string;
  }

  interface CSVLayerConstructor {
    new(properties?: CSVLayerProperties): CSVLayer;
  }

  export const CSVLayer: CSVLayerConstructor;

  interface CSVLayerProperties extends LayerProperties {
    copyright?: string;
    delimiter?: string;
    elevationInfo?: CSVLayerElevationInfo;
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
    url?: string;
  }

  interface FeatureLayer extends Layer, PortalLayer, ScaleRangeLayer {
    copyright: string;
    definitionExpression: string;
    elevationInfo: FeatureLayerElevationInfo;
    fields: Field[];
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
    source: Collection;
    spatialReference: SpatialReference;
    token: string;
    url: string;
    version: number;

    createQuery(): Query;
    queryExtent(params?: Query): IPromise<any>;
    queryFeatureCount(params?: Query): IPromise<any>;
    queryFeatures(params?: Query): IPromise<any>;
    queryObjectIds(params?: Query): IPromise<any>;
  }

  interface FeatureLayerConstructor {
    new(properties?: FeatureLayerProperties): FeatureLayer;

    fromJSON(json: any): FeatureLayer;
  }

  export const FeatureLayer: FeatureLayerConstructor;

  interface FeatureLayerProperties extends LayerProperties, PortalLayerProperties, ScaleRangeLayerProperties {
    copyright?: string;
    definitionExpression?: string;
    elevationInfo?: FeatureLayerElevationInfo;
    fields?: FieldProperties[];
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
    source?: Collection;
    spatialReference?: SpatialReferenceProperties;
    token?: string;
    url?: string;
    version?: number;
  }

  interface GraphicsLayer extends Layer, ScaleRangeLayer {
    elevationInfo: GraphicsLayerElevationInfo;
    graphics: Collection;

    add(graphic: Graphic): void;
    addMany(graphics: Graphic[]): void;
    remove(graphic: Graphic): void;
    removeAll(): void;
    removeMany(graphics: Graphic[]): void;
  }

  interface GraphicsLayerConstructor {
    new(properties?: GraphicsLayerProperties): GraphicsLayer;
  }

  export const GraphicsLayer: GraphicsLayerConstructor;

  interface GraphicsLayerProperties extends LayerProperties, ScaleRangeLayerProperties {
    elevationInfo?: GraphicsLayerElevationInfo;
    graphics?: Collection;
  }

  interface GroupLayer extends Layer, LayersMixin, JSONSupport, PortalLayer {
    visibilityMode: string;
  }

  interface GroupLayerConstructor {
    new(properties?: GroupLayerProperties): GroupLayer;

    fromJSON(json: any): GroupLayer;
  }

  export const GroupLayer: GroupLayerConstructor;

  interface GroupLayerProperties extends LayerProperties, LayersMixinProperties, PortalLayerProperties {
    visibilityMode?: string;
  }

  interface IntegratedMeshLayer extends Layer, SceneService, PortalLayer {
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

  interface OpenStreetMapLayer extends WebTileLayer {
  }

  interface OpenStreetMapLayerConstructor {
    new(properties?: OpenStreetMapLayerProperties): OpenStreetMapLayer;

    fromJSON(json: any): OpenStreetMapLayer;
  }

  export const OpenStreetMapLayer: OpenStreetMapLayerConstructor;

  interface OpenStreetMapLayerProperties extends WebTileLayerProperties {

  }

  interface PointCloudLayer extends Layer, SceneService, PortalLayer {
    fields: Field[];
    renderer: PointCloudRenderer;
  }

  interface PointCloudLayerConstructor {
    new(properties?: PointCloudLayerProperties): PointCloudLayer;

    fromJSON(json: any): PointCloudLayer;
  }

  export const PointCloudLayer: PointCloudLayerConstructor;

  interface PointCloudLayerProperties extends LayerProperties, SceneServiceProperties, PortalLayerProperties {
    fields?: FieldProperties[];
    renderer?: PointCloudRendererProperties;
  }

  interface SceneLayer extends Layer, SceneService, PortalLayer {
    elevationInfo: SceneLayerElevationInfo;
    fields: Field[];
    geometryType: string;
    labelingInfo: LabelClass[];
    labelsVisible: boolean;
    legendEnabled: boolean;
    objectIdField: string;
    popupEnabled: boolean;
    popupTemplate: PopupTemplate;
    renderer: Renderer;

    getFieldUsageInfo(fieldName: string): any;
    queryExtent(params?: Query): IPromise<any>;
    queryFeatureCount(params?: Query): IPromise<any>;
    queryFeatures(params?: Query): IPromise<any>;
    queryObjectIds(params?: Query): IPromise<any>;
  }

  interface SceneLayerConstructor {
    new(properties?: SceneLayerProperties): SceneLayer;

    fromJSON(json: any): SceneLayer;
  }

  export const SceneLayer: SceneLayerConstructor;

  interface SceneLayerProperties extends LayerProperties, SceneServiceProperties, PortalLayerProperties {
    elevationInfo?: SceneLayerElevationInfo;
    fields?: FieldProperties[];
    geometryType?: string;
    labelingInfo?: LabelClassProperties[];
    labelsVisible?: boolean;
    legendEnabled?: boolean;
    objectIdField?: string;
    popupEnabled?: boolean;
    popupTemplate?: PopupTemplateProperties;
    renderer?: RendererProperties;
  }

  interface StreamLayer extends FeatureLayer {
    geometryDefinition: Extent;
    maximumTrackPoints: number;
    purgeOptions: any;
  }

  interface StreamLayerConstructor {
    new(properties?: StreamLayerProperties): StreamLayer;

    fromJSON(json: any): StreamLayer;
  }

  export const StreamLayer: StreamLayerConstructor;

  interface StreamLayerProperties extends FeatureLayerProperties {
    geometryDefinition?: ExtentProperties;
    maximumTrackPoints?: number;
    purgeOptions?: any;
  }

  interface UnknownLayer extends Layer {
  }

  interface UnknownLayerConstructor {
    new(properties?: UnknownLayerProperties): UnknownLayer;
  }

  export const UnknownLayer: UnknownLayerConstructor;

  interface UnknownLayerProperties extends LayerProperties {

  }

  interface UnsupportedLayer extends Layer {
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

  interface CodedValueDomain extends Domain {
    codedValues: CodedValueDomainCodedValues[];
  }

  interface CodedValueDomainConstructor {
    new(properties?: any): CodedValueDomain;

    getName(code: string | number): string;
  }

  export const CodedValueDomain: CodedValueDomainConstructor;

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

  interface Domain {
    name: string;
    type: string;

    toJSON(): any;
  }

  interface DomainConstructor {
    new(): Domain;
  }

  export const Domain: DomainConstructor;

  interface Field extends JSONSupport {
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
    domain?: Domain;
    editable?: boolean;
    length?: number;
    name?: string;
    nullable?: boolean;
    type?: string;
  }

  interface ImageParameters {
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
    new(properties?: any): ImageParameters;
  }

  export const ImageParameters: ImageParametersConstructor;

  interface InheritedDomain extends Domain {
  }

  interface InheritedDomainConstructor {
    new(): InheritedDomain;
  }

  export const InheritedDomain: InheritedDomainConstructor;

  interface LabelClass extends Accessor, JSONSupport {
    labelExpression: string;
    labelExpressionInfo: LabelClassLabelExpressionInfo;
    labelPlacement: string;
    maxScale: number;
    minScale: number;
    symbol: TextSymbol | LabelSymbol3D;
    useCodedValues: boolean;
    where: string;
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

  interface MosaicRule extends JSONSupport {
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

  interface PixelBlock {
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
    new(properties?: any): PixelBlock;
  }

  export const PixelBlock: PixelBlockConstructor;

  interface RangeDomain extends Domain {
    maxValue: number;
    minValue: number;
  }

  interface RangeDomainConstructor {
    new(): RangeDomain;
  }

  export const RangeDomain: RangeDomainConstructor;

  interface RasterFunction extends JSONSupport {
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

    clone(): Sublayer;
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
    maxScale?: number;
    minScale?: number;
    opacity?: number;
    popupTemplate?: PopupTemplateProperties;
    renderer?: RendererProperties;
    source?: any | any;
    sublayers?: Collection;
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

  interface Portal extends Accessor, Loadable {
    access: string;
    allSSL: boolean;
    authMode: string;
    authorizedCrossOriginDomains: string[];
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
    description: string;
    featuredGroups: PortalFeaturedGroups[];
    featuredItemsGroupQuery: string;
    galleryTemplatesGroupQuery: string;
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
    description?: string;
    featuredGroups?: PortalFeaturedGroups[];
    featuredItemsGroupQuery?: string;
    galleryTemplatesGroupQuery?: string;
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
    title: string;
    url: string;

    fetchMembers(): IPromise<any>;
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

    clone(): PortalQueryParams;
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
    userContentUrl: string;
    username: string;

    addItem(params: PortalUserAddItemParams): IPromise<any>;
    deleteItem(item: PortalItem): IPromise<any>;
    fetchFolders(): IPromise<any>;
    fetchGroups(): IPromise<any>;
    fetchItems(params: PortalUserFetchItemsParams): IPromise<any>;
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
    clone(): ClassBreaksRenderer;
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

    clone(): SimpleRenderer;
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

    addUniqueValueInfo(valueOrInfo: string | any, symbol: Symbol): void;
    clone(): UniqueValueRenderer;
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
    pointsPerInch: number;
  }

  interface PointCloudRendererConstructor {
    new(properties?: PointCloudRendererProperties): PointCloudRenderer;

    fromJSON(json: any): PointCloudRenderer;
  }

  export const PointCloudRenderer: PointCloudRendererConstructor;

  interface PointCloudRendererProperties {
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

  interface ExtrudeSymbol3DLayer extends Symbol3DLayer {
    size: number;

    clone(): ExtrudeSymbol3DLayer;
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

    clone(): FillSymbol3DLayer;
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
    clone(): Font;
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
    size: number | string;

    clone(): IconSymbol3DLayer;
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
    size?: number | string;
  }

  interface LabelSymbol3D extends Symbol3D {
    clone(): LabelSymbol3D;
  }

  interface LabelSymbol3DConstructor {
    new(properties?: LabelSymbol3DProperties): LabelSymbol3D;

    fromJSON(json: any): LabelSymbol3D;
  }

  export const LabelSymbol3D: LabelSymbol3DConstructor;

  interface LabelSymbol3DProperties extends Symbol3DProperties {

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
    clone(): LineSymbol3D;
  }

  interface LineSymbol3DConstructor {
    new(properties?: LineSymbol3DProperties): LineSymbol3D;

    fromJSON(json: any): LineSymbol3D;
  }

  export const LineSymbol3D: LineSymbol3DConstructor;

  interface LineSymbol3DProperties extends Symbol3DProperties {

  }

  interface LineSymbol3DLayer extends Symbol3DLayer {
    size: number | string;

    clone(): LineSymbol3DLayer;
  }

  interface LineSymbol3DLayerConstructor {
    new(properties?: LineSymbol3DLayerProperties): LineSymbol3DLayer;

    fromJSON(json: any): LineSymbol3DLayer;
  }

  export const LineSymbol3DLayer: LineSymbol3DLayerConstructor;

  interface LineSymbol3DLayerProperties extends Symbol3DLayerProperties {
    size?: number | string;
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
    clone(): MeshSymbol3D;
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
    width: number;

    clone(): ObjectSymbol3DLayer;
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

    clone(): PictureMarkerSymbol;
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

    clone(): PathSymbol3DLayer;
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
    clone(): PointSymbol3D;
  }

  interface PointSymbol3DConstructor {
    new(properties?: PointSymbol3DProperties): PointSymbol3D;

    fromJSON(json: any): PointSymbol3D;
  }

  export const PointSymbol3D: PointSymbol3DConstructor;

  interface PointSymbol3DProperties extends Symbol3DProperties {

  }

  interface PolygonSymbol3D extends Symbol3D {
    clone(): PolygonSymbol3D;
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

    clone(): SimpleFillSymbol;
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

    clone(): SimpleLineSymbol;
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

    clone(): SimpleMarkerSymbol;
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
    symbolLayers?: Collection;
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

    clone(): TextSymbol;
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
    size: number | string;
    text: string;

    clone(): TextSymbol3DLayer;
  }

  interface TextSymbol3DLayerConstructor {
    new(properties?: TextSymbol3DLayerProperties): TextSymbol3DLayer;

    fromJSON(json: any): TextSymbol3DLayer;
  }

  export const TextSymbol3DLayer: TextSymbol3DLayerConstructor;

  interface TextSymbol3DLayerProperties extends Symbol3DLayerProperties {
    font?: TextSymbol3DLayerFont;
    size?: number | string;
    text?: string;
  }

  interface WebStyleSymbol extends Symbol {
    name: string;
    portal: Portal;
    styleName: string;
    styleUrl: string;

    clone(): WebStyleSymbol;
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
    hitTest(screenPoint: MapViewHitTestScreenPoint): IPromise<any>;
    on(type: string | string[], modifiersOrHandler: string[] | Function, handler?: Function): any;
    toMap(screenPoint: ScreenPoint, mapPoint?: Point): Point;
    toScreen(point: Point, screenPoint?: ScreenPoint): ScreenPoint;
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
    qualityProfile: string;
    scale: number;
    viewingMode: string;
    viewpoint: Viewpoint;
    zoom: number;

    goTo(target: number[] | Geometry | Geometry[] | Graphic | Graphic[] | Viewpoint | Camera | any, options?: SceneViewGoToOptions): IPromise<any>;
    hitTest(screenPoint: SceneViewHitTestScreenPoint): IPromise<any>;
    on(type: string | string[], modifiersOrHandler: string[] | Function, handler?: Function): any;
    toMap(screenPoint: ScreenPoint, mapPoint?: Point): Point;
    toScreen(point: Point, screenPoint?: ScreenPoint): ScreenPoint;
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
    qualityProfile?: string;
    scale?: number;
    viewingMode?: string;
    viewpoint?: ViewpointProperties;
    zoom?: number;
  }

  interface View extends Accessor, corePromise, Evented, BreakpointsOwner, DOMContainer {
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
    allLayerViews?: Collection;
    animation?: ViewAnimationProperties;
    graphics?: Collection;
    interacting?: boolean;
    layerViews?: Collection;
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

  interface FeatureLayerView extends LayerView {
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

  interface UI extends Accessor {
    container: any;
    height: number;
    padding: any;
    view: SceneView | MapView;
    width: number;

    add(component: any | any[], position?: string | any): void;
    empty(position?: string): void;
    move(component: any | any[], position?: string): void;
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
    view?: SceneView | MapView;
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

    clone(): InitialViewProperties;
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

    clone(): Environment;
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

    clone(): websceneInitialViewProperties;
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

    clone(): Lighting;
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

    clone(): Presentation;
  }

  interface PresentationConstructor {
    new(properties?: PresentationProperties): Presentation;
  }

  export const Presentation: PresentationConstructor;

  interface PresentationProperties {
    slides?: Collection;
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

    applyTo(view: SceneView, options?: SlideApplyToOptions): void;
    clone(): Slide;
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

  interface Attribution extends Accessor {
    view: SceneView | MapView;
    viewModel: AttributionViewModel;
  }

  interface AttributionConstructor {
    new(properties?: AttributionProperties): Attribution;
  }

  export const Attribution: AttributionConstructor;

  interface AttributionProperties {
    view?: SceneView | MapView;
    viewModel?: AttributionViewModel;
  }

  interface BasemapToggle extends Accessor, Evented {
    activeBasemap: Basemap;
    nextBasemap: Basemap;
    titleVisible: boolean;
    view: SceneView | MapView;
    viewModel: BasemapToggleViewModel;

    toggle(): void;
  }

  interface BasemapToggleConstructor {
    new(properties?: BasemapToggleProperties): BasemapToggle;
  }

  export const BasemapToggle: BasemapToggleConstructor;

  interface BasemapToggleProperties {
    activeBasemap?: BasemapProperties;
    nextBasemap?: Basemap | string;
    titleVisible?: boolean;
    view?: SceneView | MapView;
    viewModel?: BasemapToggleViewModelProperties;
  }

  interface ColorSlider extends Accessor {
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

  interface ColorSliderProperties {
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

  interface Compass extends Accessor {
    view: SceneView | MapView;
    viewModel: CompassViewModel;

    reset(): void;
  }

  interface CompassConstructor {
    new(properties?: CompassProperties): Compass;
  }

  export const Compass: CompassConstructor;

  interface CompassProperties {
    view?: SceneView | MapView;
    viewModel?: CompassViewModelProperties;
  }

  interface Home extends Accessor, Evented {
    view: MapView | SceneView;
    viewModel: HomeViewModel;
    viewpoint: Viewpoint;

    go(): void;
  }

  interface HomeConstructor {
    new(properties?: HomeProperties): Home;
  }

  export const Home: HomeConstructor;

  interface HomeProperties {
    view?: MapView | SceneView;
    viewModel?: HomeViewModelProperties;
    viewpoint?: ViewpointProperties;
  }

  interface LayerList extends Widget {
    createActionsFunction: Function;
    view: SceneView | MapView;
    viewModel: LayerListViewModel;

    render(): any;
  }

  interface LayerListConstructor {
    new(properties?: LayerListProperties): LayerList;
  }

  export const LayerList: LayerListConstructor;

  interface LayerListProperties extends WidgetProperties {
    createActionsFunction?: Function;
    view?: SceneView | MapView;
    viewModel?: LayerListViewModelProperties;
  }

  interface Legend extends Accessor {
    layerInfos: LegendLayerInfos[];
    view: SceneView | MapView;
  }

  interface LegendConstructor {
    new(properties?: LegendProperties): Legend;
  }

  export const Legend: LegendConstructor;

  interface LegendProperties {
    layerInfos?: LegendLayerInfos[];
    view?: SceneView | MapView;
  }

  interface Locate extends Accessor, Evented {
    geolocationOptions: any;
    goToLocationEnabled: boolean;
    graphic: Graphic;
    view: MapView | SceneView;
    viewModel: LocateViewModel;

    locate(): IPromise<any>;
  }

  interface LocateConstructor {
    new(properties?: LocateProperties): Locate;
  }

  export const Locate: LocateConstructor;

  interface LocateProperties {
    geolocationOptions?: any;
    goToLocationEnabled?: boolean;
    graphic?: GraphicProperties;
    view?: MapView | SceneView;
    viewModel?: LocateViewModelProperties;
  }

  interface NavigationToggle extends Accessor {
    layout: string;
    view: SceneView;
    viewModel: NavigationToggleViewModel;

    toggle(): void;
  }

  interface NavigationToggleConstructor {
    new(properties?: NavigationToggleProperties): NavigationToggle;
  }

  export const NavigationToggle: NavigationToggleConstructor;

  interface NavigationToggleProperties {
    layout?: string;
    view?: SceneViewProperties;
    viewModel?: NavigationToggleViewModelProperties;
  }

  interface Popup extends Accessor, Evented {
    actions: Collection;
    content: string;
    currentDockPosition: string;
    dockEnabled: boolean;
    dockOptions: PopupDockOptions;
    featureCount: number;
    features: Graphic[];
    location: Point;
    promises: IPromise<any>[];
    rendered: boolean;
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

  interface PopupProperties {
    actions?: Collection;
    content?: string | any;
    currentDockPosition?: string;
    dockEnabled?: boolean;
    dockOptions?: PopupDockOptions;
    featureCount?: number;
    features?: GraphicProperties[];
    location?: PointProperties;
    promises?: IPromise<any>[];
    rendered?: boolean;
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

  interface Search extends Accessor, Evented {
    activeSource: FeatureLayer | Locator;
    activeSourceIndex: number;
    allPlaceholder: string;
    autoSelect: boolean;
    defaultSource: any;
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
    searchTerm: string;
    selectedResult: any;
    sources: SearchSources;
    suggestions: any[];
    suggestionsEnabled: boolean;
    view: MapView | SceneView;
    viewModel: SearchViewModel;

    clear(): void;
    search(searchTerm?: string | Geometry | any | number[][]): IPromise<any>;
    suggest(value?: string): IPromise<any>;
  }

  interface SearchConstructor {
    new(properties?: SearchProperties): Search;
  }

  export const Search: SearchConstructor;

  interface SearchProperties {
    activeSource?: FeatureLayer | Locator;
    activeSourceIndex?: number;
    allPlaceholder?: string;
    autoSelect?: boolean;
    defaultSource?: any;
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
    searchTerm?: string;
    selectedResult?: any;
    sources?: SearchSources;
    suggestions?: any[];
    suggestionsEnabled?: boolean;
    view?: MapView | SceneView;
    viewModel?: SearchViewModelProperties;
  }

  interface SizeSlider extends Accessor {
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

  interface SizeSliderProperties {
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

  interface Track extends Accessor {
    geolocationOptions: any;
    goToLocationEnabled: boolean;
    graphic: Graphic;
    tracking: boolean;
    view: MapView | SceneView;
    viewModel: TrackViewModel;

    start(): void;
    stop(): void;
  }

  interface TrackConstructor {
    new(properties?: TrackProperties): Track;
  }

  export const Track: TrackConstructor;

  interface TrackProperties {
    geolocationOptions?: any;
    goToLocationEnabled?: boolean;
    graphic?: GraphicProperties;
    tracking?: boolean;
    view?: MapView | SceneView;
    viewModel?: TrackViewModelProperties;
  }

  interface UnivariateColorSizeSlider extends Accessor {
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

  interface UnivariateColorSizeSliderProperties {
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
    postInitialize(): void;
    scheduleRender(): void;
    startup(): void;
  }

  interface WidgetConstructor {
    new(properties?: WidgetProperties): Widget;
  }

  export const Widget: WidgetConstructor;

  interface WidgetProperties {
    container?: string;
    destroyed?: boolean;
    id?: string;
  }

  interface Zoom extends Accessor {
    view: SceneView | MapView;
    viewModel: ZoomViewModel;

    zoomIn(): void;
    zoomOut(): void;
  }

  interface ZoomConstructor {
    new(properties?: ZoomProperties): Zoom;
  }

  export const Zoom: ZoomConstructor;

  interface ZoomProperties {
    view?: SceneView | MapView;
    viewModel?: ZoomViewModelProperties;
  }

  interface AttributionViewModel {
    attributionText: string;
    itemDelimiter: string;
    state: string;
    view: SceneView | MapView;
  }

  interface AttributionViewModelConstructor {
    new(properties?: any): AttributionViewModel;
  }

  export const AttributionViewModel: AttributionViewModelConstructor;

  interface BasemapToggleViewModel extends Accessor, Evented {
    activeBasemap: Basemap;
    nextBasemap: Basemap;
    state: string;
    view: SceneView | MapView;

    toggle(): void;
  }

  interface BasemapToggleViewModelConstructor {
    new(properties?: BasemapToggleViewModelProperties): BasemapToggleViewModel;
  }

  export const BasemapToggleViewModel: BasemapToggleViewModelConstructor;

  interface BasemapToggleViewModelProperties {
    activeBasemap?: BasemapProperties;
    nextBasemap?: Basemap | string;
    state?: string;
    view?: SceneView | MapView;
  }

  interface CompassViewModel extends Accessor {
    state: string;
    view: SceneView | MapView;

    reset(): void;
  }

  interface CompassViewModelConstructor {
    new(properties?: CompassViewModelProperties): CompassViewModel;
  }

  export const CompassViewModel: CompassViewModelConstructor;

  interface CompassViewModelProperties {
    state?: string;
    view?: SceneView | MapView;
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
    operationalItems: Collection;
    state: string;
    view: SceneView | MapView;

    triggerAction(actionIndex: number): void;
  }

  interface LayerListViewModelConstructor {
    new(properties?: LayerListViewModelProperties): LayerListViewModel;
  }

  export const LayerListViewModel: LayerListViewModelConstructor;

  interface LayerListViewModelProperties {
    createActionsFunction?: Function;
    operationalItems?: Collection;
    state?: string;
    view?: SceneView | MapView;
  }

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
    actions?: Collection;
    content?: string | any;
    featureCount?: number;
    features?: GraphicProperties[];
    location?: PointProperties;
    pendingPromisesCount?: number;
    promises?: IPromise<any>[];
    selectedFeature?: GraphicProperties;
    selectedFeatureIndex?: number;
    state?: string;
    title?: string;
    view?: MapView | SceneView;
  }

  interface SearchViewModel extends Accessor, Evented {
    activeSource: FeatureLayer | Locator;
    activeSourceIndex: number;
    allPlaceholder: string;
    autoSelect: boolean;
    defaultSource: any;
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
    sources: SearchViewModelSources[];
    suggestionDelay: number;
    suggestions: any[];
    suggestionsEnabled: boolean;
    view: MapView | SceneView;

    cancelSuggest(): void;
    clear(): void;
    search(searchTerm?: string | Geometry | any | number[][]): IPromise<any>;
    suggest(value?: string): IPromise<any>;
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
    defaultSource?: any;
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
    sources?: SearchViewModelSources[];
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
    view: SceneView | MapView;

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
    view?: SceneView | MapView;
  }

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

    getImageUrl(extent: Extent, width: number, height: number, callback: Function): string;
  }

  interface DynamicLayerConstructor {
    new(): DynamicLayer;
  }

  export const DynamicLayer: DynamicLayerConstructor;

  interface DynamicLayerProperties {
    portalItem?: PortalItem;
    url?: string;
  }

  interface TiledLayer {
    tileInfo: TileInfo;

    getTileUrl(level: number, row: number, col: number): string;
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
    imageTransparency: boolean;
    sublayers: Collection;

    createServiceSublayers(): Collection;
    findSublayerById(id: number): Sublayer;
    getExportImageParameters(options: ArcGISDynamicMapServiceGetExportImageParametersOptions): any;
  }

  interface ArcGISDynamicMapServiceConstructor {
    new(): ArcGISDynamicMapService;
  }

  export const ArcGISDynamicMapService: ArcGISDynamicMapServiceConstructor;

  interface ArcGISDynamicMapServiceProperties {
    allSublayers?: Collection;
    dpi?: number;
    gdbVersion?: string;
    imageFormat?: string;
    imageTransparency?: boolean;
    sublayers?: Collection;
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
    layers?: Collection;
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
    container: string;
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
    container?: string;
    height?: number;
    popup?: Popup;
    resizing?: boolean;
    size?: number[];
    suspended?: boolean;
    ui?: DefaultUI;
    width?: number;
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
    graphic?: Graphic;
    view?: MapView | SceneView;
  }

  interface config {
    geometryServiceUrl: string;
    portalUrl: string;
    request: configRequest;
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
    eachAlways(promises: IPromise<any>[]): IPromise<any>[];
    reject(error?: any): IPromise<any>;
    resolve(value?: any): IPromise<any>;
  }

  export const promiseUtils: promiseUtils;

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
    cast(classFunction: Function): void;
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
    createVisualVariable(params: sizeCreateVisualVariableParams): IPromise<any>;
  }

  export const size: size;

  interface univariateColorSize {
    createContinuousRenderer(params: univariateColorSizeCreateContinuousRendererParams): IPromise<any>;
    createVisualVariables(params: univariateColorSizeCreateVisualVariablesParams): IPromise<any>;
  }

  export const univariateColorSize: univariateColorSize;

  interface classBreaks {
    classBreaks(params: classBreaksClassBreaksParams): IPromise<any>;
  }

  export const classBreaks: classBreaks;

  interface histogram {
    histogram(params: histogramHistogramParams): IPromise<any>;
  }

  export const histogram: histogram;

  interface summaryStatistics {
    summaryStatistics(params: summaryStatisticsSummaryStatisticsParams): IPromise<any>;
  }

  export const summaryStatistics: summaryStatistics;

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

  interface supportJsonUtils {
    fromJSON(json: any): Renderer;
  }

  export const supportJsonUtils: supportJsonUtils;

  interface Action {
    className: string;
    id: string;
    image: string;
    title: string;
    visible: boolean;
  }

  export const Action: Action;

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
    jsxFactory(selector: string, properties?: any, children?: any): any;
    renderable(propertyName?: string | string[]): Function;
    vmEvent(eventNames: string | string[]): Function;
  }

  export const widget: widget;

  interface ListItem {
    actionsOpen: boolean;
    actionsSections: Collection;
    children: Collection;
    error: Error;
    open: boolean;
    title: string;
    updating: boolean;
    visibilityMode: string;
    visible: boolean;
    visibleAtCurrentScale: boolean;
  }

  export const ListItem: ListItem;
}

declare module "esri" {
  export import Text = __esri.Text;

  export import Media = __esri.Media;

  export import Fields = __esri.Fields;

  export import Attachments = __esri.Attachments;

  export import WatchHandle = __esri.WatchHandle;

  export import PausableWatchHandle = __esri.PausableWatchHandle;

  export import AttributeParamValue = __esri.AttributeParamValue;

  export import ExternalRenderer = __esri.ExternalRenderer;

  export import RenderContext = __esri.RenderContext;

  export import RenderCamera = __esri.RenderCamera;

  export import SunLight = __esri.SunLight;

  export import ColorAndIntensity = __esri.ColorAndIntensity;

  export import LocatorSource = __esri.LocatorSource;

  export import FeatureLayerSource = __esri.FeatureLayerSource;

  export import SearchViewModelLocatorSource = __esri.SearchViewModelLocatorSource;

  export import SearchViewModelFeatureLayerSource = __esri.SearchViewModelFeatureLayerSource;

  export import GetHeader = __esri.GetHeader;

  export import WatchCallback = __esri.WatchCallback;

  export import ItemCallback = __esri.ItemCallback;

  export import ItemTestCallback = __esri.ItemTestCallback;

  export import ItemMapCallback = __esri.ItemMapCallback;

  export import ItemReduceCallback = __esri.ItemReduceCallback;

  export import ItemCompareCallback = __esri.ItemCompareCallback;

  export import EventAttachedCallback = __esri.EventAttachedCallback;

  export import HandlerCallback = __esri.HandlerCallback;

  export import EasingFunction = __esri.EasingFunction;

  export import PromisedWatchHandle = __esri.PromisedWatchHandle;

  export import GroundQueryElevationOptions = __esri.GroundQueryElevationOptions;

  export import PopupTemplateFieldInfos = __esri.PopupTemplateFieldInfos;

  export import PopupTemplateFieldInfosFormat = __esri.PopupTemplateFieldInfosFormat;

  export import WebMapSourceVersion = __esri.WebMapSourceVersion;

  export import WebSceneSaveAsOptions = __esri.WebSceneSaveAsOptions;

  export import WebSceneSaveOptions = __esri.WebSceneSaveOptions;

  export import WebSceneSourceVersion = __esri.WebSceneSourceVersion;

  export import WebSceneUpdateFromOptions = __esri.WebSceneUpdateFromOptions;

  export import IdentityManagerBaseGenerateTokenOptions = __esri.IdentityManagerBaseGenerateTokenOptions;

  export import IdentityManagerBaseGetCredentialOptions = __esri.IdentityManagerBaseGetCredentialOptions;

  export import IdentityManagerBaseOAuthSignInOptions = __esri.IdentityManagerBaseOAuthSignInOptions;

  export import IdentityManagerBaseRegisterTokenProperties = __esri.IdentityManagerBaseRegisterTokenProperties;

  export import IdentityManagerBaseSetProtocolErrorHandlerHandlerFunction = __esri.IdentityManagerBaseSetProtocolErrorHandlerHandlerFunction;

  export import IdentityManagerBaseSetRedirectionHandlerHandlerFunction = __esri.IdentityManagerBaseSetRedirectionHandlerHandlerFunction;

  export import IdentityManagerBaseSignInOptions = __esri.IdentityManagerBaseSignInOptions;

  export import ElevationLayerQueryElevationOptions = __esri.ElevationLayerQueryElevationOptions;

  export import CSVLayerElevationInfo = __esri.CSVLayerElevationInfo;

  export import FeatureLayerElevationInfo = __esri.FeatureLayerElevationInfo;

  export import GraphicsLayerElevationInfo = __esri.GraphicsLayerElevationInfo;

  export import LayerFromArcGISServerUrlParams = __esri.LayerFromArcGISServerUrlParams;

  export import LayerFromPortalItemParams = __esri.LayerFromPortalItemParams;

  export import SceneLayerElevationInfo = __esri.SceneLayerElevationInfo;

  export import VectorTileLayerCurrentStyleInfo = __esri.VectorTileLayerCurrentStyleInfo;

  export import CodedValueDomainCodedValues = __esri.CodedValueDomainCodedValues;

  export import LabelClassLabelExpressionInfo = __esri.LabelClassLabelExpressionInfo;

  export import PixelBlockAddDataPlaneData = __esri.PixelBlockAddDataPlaneData;

  export import PixelBlockStatistics = __esri.PixelBlockStatistics;

  export import PortalFeaturedGroups = __esri.PortalFeaturedGroups;

  export import PortalItemFetchRelatedItemsParams = __esri.PortalItemFetchRelatedItemsParams;

  export import PortalItemUpdateParams = __esri.PortalItemUpdateParams;

  export import PortalUserAddItemParams = __esri.PortalUserAddItemParams;

  export import PortalUserFetchItemsParams = __esri.PortalUserFetchItemsParams;

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

  export import Symbol3DStyleOrigin = __esri.Symbol3DStyleOrigin;

  export import TextSymbol3DLayerFont = __esri.TextSymbol3DLayerFont;

  export import GeometryServiceFromGeoCoordinateStringParams = __esri.GeometryServiceFromGeoCoordinateStringParams;

  export import GeometryServiceToGeoCoordinateStringParams = __esri.GeometryServiceToGeoCoordinateStringParams;

  export import LocatorAddressToLocationsParams = __esri.LocatorAddressToLocationsParams;

  export import LocatorAddressesToLocationsParams = __esri.LocatorAddressesToLocationsParams;

  export import LocatorSuggestLocationsParams = __esri.LocatorSuggestLocationsParams;

  export import ClosestFacilityParametersAttributeParameterValues = __esri.ClosestFacilityParametersAttributeParameterValues;

  export import PrintTemplateExportOptions = __esri.PrintTemplateExportOptions;

  export import PrintTemplateLayoutOptions = __esri.PrintTemplateLayoutOptions;

  export import ProjectParametersTransformation = __esri.ProjectParametersTransformation;

  export import QueryQuantizationParameters = __esri.QueryQuantizationParameters;

  export import MapViewConstraints = __esri.MapViewConstraints;

  export import MapViewGoToOptions = __esri.MapViewGoToOptions;

  export import MapViewHitTestScreenPoint = __esri.MapViewHitTestScreenPoint;

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

  export import SceneViewHitTestScreenPoint = __esri.SceneViewHitTestScreenPoint;

  export import ViewPadding = __esri.ViewPadding;

  export import ImageryLayerViewPixelData = __esri.ImageryLayerViewPixelData;

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

  export import SearchSources = __esri.SearchSources;

  export import SearchViewModelSources = __esri.SearchViewModelSources;

  export import ArcGISDynamicMapServiceGetExportImageParametersOptions = __esri.ArcGISDynamicMapServiceGetExportImageParametersOptions;

  export import SceneServiceVersion = __esri.SceneServiceVersion;

  export import BreakpointsOwnerBreakpoints = __esri.BreakpointsOwnerBreakpoints;

  export import configRequest = __esri.configRequest;

  export import configRequestCorsEnabledServers = __esri.configRequestCorsEnabledServers;

  export import configRequestProxyRules = __esri.configRequestProxyRules;

  export import requestEsriRequestOptions = __esri.requestEsriRequestOptions;

  export import urlUtilsAddProxyRuleRule = __esri.urlUtilsAddProxyRuleRule;

  export import decoratorsPropertyPropertyMetadata = __esri.decoratorsPropertyPropertyMetadata;

  export import colorCreateContinuousRendererParams = __esri.colorCreateContinuousRendererParams;

  export import colorCreateContinuousRendererParamsLegendOptions = __esri.colorCreateContinuousRendererParamsLegendOptions;

  export import colorCreateVisualVariableParams = __esri.colorCreateVisualVariableParams;

  export import colorCreateVisualVariableParamsLegendOptions = __esri.colorCreateVisualVariableParamsLegendOptions;

  export import locationCreateRendererParams = __esri.locationCreateRendererParams;

  export import sizeCreateContinuousRendererParams = __esri.sizeCreateContinuousRendererParams;

  export import sizeCreateContinuousRendererParamsLegendOptions = __esri.sizeCreateContinuousRendererParamsLegendOptions;

  export import sizeCreateVisualVariableParams = __esri.sizeCreateVisualVariableParams;

  export import sizeCreateVisualVariableParamsLegendOptions = __esri.sizeCreateVisualVariableParamsLegendOptions;

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

  export import colorGetSchemesParams = __esri.colorGetSchemesParams;

  export import locationGetSchemesParams = __esri.locationGetSchemesParams;

  export import sizeGetSchemesParams = __esri.sizeGetSchemesParams;
}

declare module "esri/core/Evented" {
  import Evented = __esri.Evented;
  export = Evented;
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

declare module "esri/layers/ElevationLayer" {
  import ElevationLayer = __esri.ElevationLayer;
  export = ElevationLayer;
}

declare module "esri/layers/ImageryLayer" {
  import ImageryLayer = __esri.ImageryLayer;
  export = ImageryLayer;
}

declare module "esri/layers/MapImageLayer" {
  import MapImageLayer = __esri.MapImageLayer;
  export = MapImageLayer;
}

declare module "esri/layers/TileLayer" {
  import TileLayer = __esri.TileLayer;
  export = TileLayer;
}

declare module "esri/layers/CSVLayer" {
  import CSVLayer = __esri.CSVLayer;
  export = CSVLayer;
}

declare module "esri/layers/FeatureLayer" {
  import FeatureLayer = __esri.FeatureLayer;
  export = FeatureLayer;
}

declare module "esri/layers/GraphicsLayer" {
  import GraphicsLayer = __esri.GraphicsLayer;
  export = GraphicsLayer;
}

declare module "esri/layers/GroupLayer" {
  import GroupLayer = __esri.GroupLayer;
  export = GroupLayer;
}

declare module "esri/layers/IntegratedMeshLayer" {
  import IntegratedMeshLayer = __esri.IntegratedMeshLayer;
  export = IntegratedMeshLayer;
}

declare module "esri/layers/Layer" {
  import Layer = __esri.Layer;
  export = Layer;
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

declare module "esri/widgets/BasemapToggle/BasemapToggleViewModel" {
  import BasemapToggleViewModel = __esri.BasemapToggleViewModel;
  export = BasemapToggleViewModel;
}

declare module "esri/widgets/Compass/CompassViewModel" {
  import CompassViewModel = __esri.CompassViewModel;
  export = CompassViewModel;
}

declare module "esri/widgets/Home/HomeViewModel" {
  import HomeViewModel = __esri.HomeViewModel;
  export = HomeViewModel;
}

declare module "esri/widgets/LayerList/LayerListViewModel" {
  import LayerListViewModel = __esri.LayerListViewModel;
  export = LayerListViewModel;
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

declare module "esri/renderers/support/jsonUtils" {
  import supportJsonUtils = __esri.supportJsonUtils;
  export = supportJsonUtils;
}

declare module "esri/support/Action" {
  import Action = __esri.Action;
  export = Action;
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

declare module "esri/widgets/LayerList/ListItem" {
  import ListItem = __esri.ListItem;
  export = ListItem;
}
