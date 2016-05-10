// Type definitions for ArcGIS API for JavaScript v4.0
// Project: http://js.arcgis.com
// Definitions by: Esri <http://www.esri.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

declare namespace __esri {
  export interface Text {
    type: string;
    text: string;
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

  export type WatchCallback = (newValue: any, oldValue: any, propertyName: string, target: Accessor) => void;

  export type EventAttachedCallback = (target: any, propName: string, obj: Accessor, eventName: string) => void;

  export interface PromisedWatchHandle extends IPromise<any> {
    remove(): void;
  }

  export interface PopupTemplateActions extends Collection {
    className: string;
    image: string;
    id: string;
    title: string;
    visible: boolean;
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

  export interface WebMapVersion {
    major: number;
    minor: number;
  }

  export interface WebSceneVersion {
    major: number;
    minor: number;
  }

  export interface IdentityManagerBaseGenerateTokenOptions {
    isAdmin: boolean;
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
    isAdmin: boolean;
  }

  export interface IdentityManagerSetOAuthRedirectionHandlerHandlerFunction {
    authorizeParams: IdentityManagerSetOAuthRedirectionHandlerHandlerFunctionAuthorizeParams;
    authorizeUrl: string;
    oAuthInfo: OAuthInfo;
    resourceUrl: string;
    serverInfo: ServerInfo;
  }

  export interface IdentityManagerSetOAuthRedirectionHandlerHandlerFunctionAuthorizeParams {
    client_id: string;
    response_type: string;
    state: string;
    expiration: number;
    locale: string;
    redirect_uri: string;
  }

  export interface FeatureLayerElevationInfo {
    mode: string;
    offset: number;
  }

  export interface GraphicsLayerElevationInfo {
    mode: string;
    offset: number;
  }

  export interface LayerFromArcGISServerUrlParams {
    url: string;
    properties?: any;
  }

  export interface LayerFromPortalItemParams {
    portalItem: PortalItem;
  }

  export interface SceneLayerVersion {
    major: number;
    minor: number;
    versionString: string;
  }

  export interface CodedValueDomainCodedValues {
    name: string;
    code: string | number;
  }

  export interface LabelClassLabelExpressionInfo {
    value: string;
  }

  export interface LabelClassSizeInfo {
    field: string;
    maxDataValue: number;
    minDataValue: number;
    minSize: number;
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

  export interface UniqueValueRendererUniqueValueInfos {
    value: string;
    symbol: Symbol;
    label: string;
  }

  export interface FillSymbol3DLayerOutline {
    color: Color;
    size: number;
  }

  export interface IconSymbol3DLayerOutline {
    color: Color;
    size: number;
  }

  export interface IconSymbol3DLayerResource {
    primitive: string;
    href: string;
  }

  export interface ObjectSymbol3DLayerResource {
    primitive: string;
    href: string;
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
    magicKeg: string;
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
    lods: LOD[];
    minScale: number;
    maxScale: number;
    minZoom: number;
    maxZoom: number;
    snapToZoom: boolean;
    rotationEnabled: boolean;
    effectiveLODs: number;
    effectiveMinZoom: number;
    effectiveMaxZoom: number;
    effectiveMinScale: number;
    effectiveMaxScale: number;
  }

  export interface MapViewGoToOptions {
    animate?: boolean;
    duration?: number;
    easing?: string | Function;
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

  export interface LegendLayerInfos {
    title: string;
    layer: Layer;
  }

  export interface PopupActions extends Collection {
    className: string;
    image: string;
    id: string;
    title: string;
    visible: boolean;
  }

  export interface PopupDockOptions {
    breakpoint: any | boolean;
    buttonEnabled: boolean;
    position: string;
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

  export interface PopupViewModelActions extends Collection {
    className: string;
    image: string;
    id: string;
    title: string;
    visible: boolean;
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

  export interface ArcGISDynamicServiceGetExportImageParametersOptions {
    extent: Extent;
    width: number;
    height: number;
    rotation?: number;
  }

  export interface ArcGISDynamicServiceSublayersProperties {
    definitionExpression?: string;
    id?: number;
    minScale?: number;
    maxScale?: number;
    visible?: boolean;
    sublayers?: Accessor[];
  }
  export interface ArcGISDynamicServiceSublayers extends Accessor {
    definitionExpression: string;
    id: number;
    minScale: number;
    maxScale: number;
    visible: boolean;
    sublayers: Accessor[];
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
    corsEnabledServers: string[];
    forceProxy: boolean;
    maxUrlLength: number;
    proxyUrl: string;
    timeout: number;
    useCors: boolean;
    proxyRules: configRequestProxyRules[];
  }

  export interface configRequestProxyRules {
    proxyUrl: string;
    urlPrefix: string;
  }

  export interface requestEsriRequestOptions {
    callbackParamName?: string;
    query?: any;
    responseType?: string;
    timeout?: number;
    method?: string;
    useProxy?: boolean;
    cacheBust?: boolean;
  }

  export interface urlUtilsAddProxyRuleRule {
    proxyUrl: string;
    urlPrefix: string;
  }

  interface Evented {
    on(name: string, callback: Function): IHandle;
    emit(type: string, event: any): IHandle;
  }

  interface EventedConstructor {
    new(): Evented;


    on(type: string, listener: Function): any;
    hasEventListener(type: string): boolean;
  }

  export const Evented: EventedConstructor;

  interface Basemap extends Accessor, Loadable {
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

  interface Camera extends Accessor {
    position: Point;
    heading: number;
    tilt: number;
    fov: number;

    clone(): Camera;
    toJSON(): any;
  }

  interface CameraConstructor {
    new(properties?: CameraProperties): Camera;

    fromJSON(json: any): Camera;
  }

  export const Camera: CameraConstructor;

  interface CameraProperties {
    position?: PointProperties;
    heading?: number;
    tilt?: number;
    fov?: number;
  }

  interface Color {
    a: number;
    b: number;
    g: number;
    r: number;

    toCss(includeAlpha?: boolean): string;
    toJSON(color: Color): any;
    toRgba(): number[];
    toRgb(): number[];
    toHex(): string;
    setColor(color: string | number[] | any): Color;
    clone(): Color;
  }

  interface ColorConstructor {
    new(color: string | number[] | any): Color;

    blendColors(start: Color, end: Color, weight: number, obj?: Color): Color;
    fromString(str: string, obj?: Color): Color;
    fromArray(a: number, obj?: Color): Color;
    fromHex(color: string, obj?: Color): Color;
    fromRgb(color: string, obj?: Color): Color;
    fromJSON(json: any): Color;
  }

  export const Color: ColorConstructor;

  interface Graphic extends Accessor {
    attributes: any;
    geometry: Geometry;
    popupTemplate: PopupTemplate;
    symbol: Symbol;
    visible: boolean;

    getAttribute(name: string): any;
    setAttribute(name: string, newValue: any): void;
    getEffectivePopupTemplate(): PopupTemplate;
    toJSON(): any;
    clone(): Graphic;
  }

  interface GraphicConstructor {
    new(properties?: GraphicProperties): Graphic;

    fromJSON(json: any): Graphic;
  }

  export const Graphic: GraphicConstructor;

  interface GraphicProperties {
    attributes?: any;
    geometry?: GeometryProperties;
    popupTemplate?: PopupTemplateProperties;
    symbol?: SymbolProperties;
    visible?: boolean;
  }

  interface Ground extends Accessor {
    layers: Collection;
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
    ground: Ground | string;
  }

  interface MapConstructor {
    new(properties?: MapProperties): Map;
  }

  export const Map: MapConstructor;

  interface MapProperties extends LayersMixinProperties {
    allLayers?: Collection;
    basemap?: BasemapProperties;
    ground?: Ground | string;
  }

  interface PopupTemplate extends Accessor {
    actions: PopupTemplateActions;
    content: any[];
    fieldInfos: PopupTemplateFieldInfos[];
    overwriteActions: boolean;
    title: string;

    clone(): PopupTemplate;
    toJSON(): any;
  }

  interface PopupTemplateConstructor {
    new(properties?: PopupTemplateProperties): PopupTemplate;

    fromJSON(json: any): PopupTemplate;
  }

  export const PopupTemplate: PopupTemplateConstructor;

  interface PopupTemplateProperties {
    actions?: PopupTemplateActions;
    content?: any[];
    fieldInfos?: PopupTemplateFieldInfos[];
    overwriteActions?: boolean;
    title?: string;
  }

  interface Viewpoint extends Accessor {
    rotation: number;
    scale: number;
    targetGeometry: Geometry;
    camera: Camera;

    toJSON(): any;
    clone(): Viewpoint;
  }

  interface ViewpointConstructor {
    new(properties?: ViewpointProperties): Viewpoint;

    fromJSON(json: any): Viewpoint;
  }

  export const Viewpoint: ViewpointConstructor;

  interface ViewpointProperties {
    rotation?: number;
    scale?: number;
    targetGeometry?: GeometryProperties;
    camera?: CameraProperties;
  }

  interface WebMap extends Map, corePromise {
    loadStatus: string;
    applicationProperties: any;
    initialViewProperties: InitialViewProperties;
    loaded: boolean;
    loadError: Error;
    bookmarks: any[];
    portalItem: PortalItem;
    presentation: any;
    tables: any[];
    version: WebMapVersion;
    widgets: any;

    load(): IPromise<any>;
  }

  interface WebMapConstructor {
    new(properties?: WebMapProperties): WebMap;
  }

  export const WebMap: WebMapConstructor;

  interface WebMapProperties extends MapProperties {
    loadStatus?: string;
    applicationProperties?: any;
    initialViewProperties?: InitialViewPropertiesProperties;
    loaded?: boolean;
    loadError?: Error;
    bookmarks?: any[];
    portalItem?: PortalItemProperties;
    presentation?: any;
    tables?: any[];
    version?: WebMapVersion;
    widgets?: any;
  }

  interface WebScene extends Map, corePromise {
    clippingArea: Extent;
    clippingEnabled: boolean;
    loaded: boolean;
    loadError: Error;
    loadStatus: string;
    version: WebSceneVersion;
    presentation: Presentation;
    initialViewProperties: websceneInitialViewProperties;
    portalItem: PortalItem;

    load(): IPromise<any>;
  }

  interface WebSceneConstructor {
    new(properties?: WebSceneProperties): WebScene;
  }

  export const WebScene: WebSceneConstructor;

  interface WebSceneProperties extends MapProperties {
    clippingArea?: ExtentProperties;
    clippingEnabled?: boolean;
    loaded?: boolean;
    loadError?: Error;
    loadStatus?: string;
    version?: WebSceneVersion;
    presentation?: PresentationProperties;
    initialViewProperties?: websceneInitialViewPropertiesProperties;
    portalItem?: PortalItemProperties;
  }

  interface Accessor {
    get(path: string): any;
    hasOwnProperty(propertyName: string): boolean;
    set(path: string | any, value: any): any;
    watch(path: string | string[], callback: WatchCallback): WatchHandle;
  }

  interface AccessorConstructor {
    new(): Accessor;
  }

  export const Accessor: AccessorConstructor;

  interface Collection extends Accessor, Evented {
    length: number;

    map(callback: Function): Collection;
    addMany(items: any[] | Collection, index?: number): void;
    removeAll(): void;
    clone(): Collection;
    concat(value: any[] | Collection): Collection;
    every(callback: Function): boolean;
    filter(callback: Function): Collection;
    find(callback: Function): any;
    findIndex(callback: Function): number;
    forEach(callback: Function): void;
    getItemAt(index: number): any;
    includes(searchElement: any): boolean;
    indexOf(searchElement: any, fromIndex?: number): number;
    join(separator?: string): string;
    lastIndexOf(searchElement: any, fromIndex?: number): number;
    add(item: any, index?: number): void;
    reorder(item: any, index: number): any;
    pop(): any;
    push(item: any): number;
    reduce(callback: Function, initialValue?: any): any;
    reduceRight(callback: Function, initialValue?: any): any;
    remove(item: any): void;
    removeAt(index: number): any;
    removeMany(items: any[] | Collection): any;
    shift(): any;
    slice(begin?: number, end?: number): Collection;
    some(callback: Function): boolean;
    sort(compareFunction?: Function): void;
    toArray(): any[];
    unshift(items: any): number;
  }

  interface CollectionConstructor {
    new(properties?: CollectionProperties): Collection;


    ofType(type: any): any;
  }

  export const Collection: CollectionConstructor;

  interface CollectionProperties {
    length?: number;
  }

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
    mmin: number;
    center: Point;
    width: number;
    xmin: number;
    ymin: number;
    height: number;
    zmin: number;
    xmax: number;
    ymax: number;
    mmax: number;
    zmax: number;

    centerAt(point: Point): Extent;
    contains(geometry: Point | Extent): boolean;
    equals(extent: Extent): boolean;
    expand(factor: number): Extent;
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
    mmin?: number;
    center?: PointProperties;
    width?: number;
    xmin?: number;
    ymin?: number;
    height?: number;
    zmin?: number;
    xmax?: number;
    ymax?: number;
    mmax?: number;
    zmax?: number;
  }

  interface Geometry extends Accessor {
    cache: any;
    extent: Extent;
    hasM: boolean;
    hasZ: boolean;
    spatialReference: SpatialReference;
    type: string;

    clone(): Geometry;
    toJSON(): any;
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
    x: number;
    y: number;
    z: number;
    m: number;

    copy(other: Point): void;
    equals(point: Point): boolean;
    distance(other: Point): number;
  }

  interface PointConstructor {
    new(properties?: PointProperties): Point;

    fromJSON(json: any): Point;
  }

  export const Point: PointConstructor;

  interface PointProperties extends GeometryProperties {
    latitude?: number;
    longitude?: number;
    x?: number;
    y?: number;
    z?: number;
    m?: number;
  }

  interface Polygon extends Geometry {
    centroid: Point;
    isSelfIntersecting: boolean;
    rings: number[][][];

    addRing(ring: Point[] | number[][]): Polygon;
    contains(point: Point): boolean;
    isClockwise(ring: Point[] | number[][]): boolean;
    getPoint(ringIndex: number, pointIndex: number): Point;
    insertPoint(ringIndex: number, pointIndex: number, point: Point): Polygon;
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

  interface SpatialReference extends Accessor {
    isWGS84: boolean;
    isWebMercator: boolean;
    isWrappable: boolean;
    wkid: number;
    wkt: string;
    WGS84: SpatialReference;
    WebMercator: SpatialReference;

    clone(): SpatialReference;
    equals(spatialReference: SpatialReference): boolean;
    toJSON(): any;
  }

  interface SpatialReferenceConstructor {
    new(properties?: SpatialReferenceProperties): SpatialReference;

    fromJSON(json: any): SpatialReference;
  }

  export const SpatialReference: SpatialReferenceConstructor;

  interface SpatialReferenceProperties {
    isWGS84?: boolean;
    isWebMercator?: boolean;
    isWrappable?: boolean;
    wkid?: number;
    wkt?: string;
    WGS84?: SpatialReferenceProperties;
    WebMercator?: SpatialReferenceProperties;
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

    getCredential(url: string, options?: IdentityManagerBaseGetCredentialOptions): IPromise<any>;
    registerServers(serverInfos: ServerInfo[]): void;
    registerToken(properties: IdentityManagerBaseRegisterTokenProperties): void;
    toJSON(): any;
    initialize(json: any): any;
    findServerInfo(url: string): ServerInfo;
    findOAuthInfo(url: string): OAuthInfo;
    findCredential(url: string, userId?: string): Credential;
    registerOAuthInfos(oAuthInfos: OAuthInfo[]): void;
    generateToken(serverInfo: ServerInfo, userInfo: any, options?: IdentityManagerBaseGenerateTokenOptions): IPromise<any>;
    isBusy(): boolean;
    checkSignInStatus(resUrl: string): IPromise<any>;
    setRedirectionHandler(handlerFunction: IdentityManagerBaseSetRedirectionHandlerHandlerFunction): void;
    setProtocolErrorHandler(handlerFunction: IdentityManagerBaseSetProtocolErrorHandlerHandlerFunction): void;
    signIn(url: string, serverInfo: ServerInfo, options?: IdentityManagerBaseSignInOptions): IPromise<any>;
    oAuthSignIn(resUrl: string, serverInfo: ServerInfo, oAuthInfo: OAuthInfo, options?: IdentityManagerBaseOAuthSignInOptions): IPromise<any>;
    destroyCredentials(): void;
  }

  interface IdentityManagerBaseConstructor {
    new(): IdentityManagerBase;
  }

  export const IdentityManagerBase: IdentityManagerBaseConstructor;

  interface IdentityManager extends IdentityManagerBase {
    dialog: any;

    setOAuthRedirectionHandler(handlerFunction: IdentityManagerSetOAuthRedirectionHandlerHandlerFunction): void;
    setOAuthResponseHash(hash: string): void;
  }

  interface IdentityManagerConstructor {
    new(): IdentityManager;
  }

  export const IdentityManager: IdentityManagerConstructor;

  interface OAuthInfo {
    appId: string;
    expiration: number;
    locale: string;
    minTimeUntilExpiration: number;
    portalUrl: string;
    authNamespace: string;
    showSocialLogins: boolean;
    popup: boolean;
    popupCallbackUrl: string;
    popupWindowFeatures: string;

    toJSON(): any;
  }

  interface OAuthInfoConstructor {
    new(properties?: any): OAuthInfo;
  }

  export const OAuthInfo: OAuthInfoConstructor;

  interface ServerInfo {
    server: string;
    tokenServiceUrl: string;
    adminTokenServiceUrl: string;
    shortLivedTokenValidity: number;
    currentVersion: number;

    toJSON(): any;
  }

  interface ServerInfoConstructor {
    new(properties?: any): ServerInfo;
  }

  export const ServerInfo: ServerInfoConstructor;

  interface ElevationLayer extends Layer, ArcGISMapService, ArcGISCachedService, PortalLayer, TiledLayer {
    url: string;
  }

  interface ElevationLayerConstructor {
    new(properties?: ElevationLayerProperties): ElevationLayer;

    fromJSON(json: any): ElevationLayer;
  }

  export const ElevationLayer: ElevationLayerConstructor;

  interface ElevationLayerProperties extends LayerProperties, ArcGISMapServiceProperties, ArcGISCachedServiceProperties, PortalLayerProperties, TiledLayerProperties {
    url?: string;
  }

  interface ImageryLayer extends Layer, ArcGISImageService {
    maxScale: number;
    minScale: number;
    popupEnabled: boolean;
    pixelFilter: Function;
    portalItem: PortalItem;
    token: string;

    redraw(): void;
  }

  interface ImageryLayerConstructor {
    new(properties?: ImageryLayerProperties): ImageryLayer;

    fromJSON(json: any): ImageryLayer;
  }

  export const ImageryLayer: ImageryLayerConstructor;

  interface ImageryLayerProperties extends LayerProperties, ArcGISImageServiceProperties {
    maxScale?: number;
    minScale?: number;
    popupEnabled?: boolean;
    pixelFilter?: Function;
    portalItem?: PortalItemProperties;
    token?: string;
  }

  interface MapImageLayer extends Layer, ArcGISMapService, ArcGISDynamicService, PortalLayer, DynamicLayer {
    url: string;
  }

  interface MapImageLayerConstructor {
    new(properties?: MapImageLayerProperties): MapImageLayer;

    fromJSON(json: any): MapImageLayer;
  }

  export const MapImageLayer: MapImageLayerConstructor;

  interface MapImageLayerProperties extends LayerProperties, ArcGISMapServiceProperties, ArcGISDynamicServiceProperties, PortalLayerProperties {
    url?: string;
  }

  interface TileLayer extends Layer, ArcGISMapService, ArcGISCachedService, PortalLayer, TiledLayer {
    attributionDataUrl: string;
    hasAttributionData: boolean;
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
    tileServers?: string[];
    url?: string;
  }

  interface FeatureLayer extends Layer, PortalLayer {
    maxScale: number;
    copyright: string;
    elevationInfo: FeatureLayerElevationInfo;
    fields: Field[];
    geometryType: string;
    hasAttachments: boolean;
    hasM: boolean;
    hasZ: boolean;
    labelsVisible: boolean;
    labelingInfo: LabelClass[];
    layerId: number;
    minScale: number;
    definitionExpression: string;
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

    createQueryParameters(): Query;
    queryFeatures(params?: Query): IPromise<any>;
    queryObjectIds(params?: Query): IPromise<any>;
    queryFeatureCount(params?: Query): IPromise<any>;
    queryExtent(params?: Query): IPromise<any>;
  }

  interface FeatureLayerConstructor {
    new(properties?: FeatureLayerProperties): FeatureLayer;
  }

  export const FeatureLayer: FeatureLayerConstructor;

  interface FeatureLayerProperties extends LayerProperties, PortalLayerProperties {
    maxScale?: number;
    copyright?: string;
    elevationInfo?: FeatureLayerElevationInfo;
    fields?: Field[];
    geometryType?: string;
    hasAttachments?: boolean;
    hasM?: boolean;
    hasZ?: boolean;
    labelsVisible?: boolean;
    labelingInfo?: LabelClass[];
    layerId?: number;
    minScale?: number;
    definitionExpression?: string;
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
  }

  interface GraphicsLayer extends Layer {
    elevationInfo: GraphicsLayerElevationInfo;
    graphics: Collection;
    maxScale: number;
    minScale: number;

    add(graphic: Graphic): void;
    addMany(graphics: Graphic[]): void;
    removeAll(): void;
    remove(graphic: Graphic): void;
    removeMany(graphics: Graphic[]): void;
  }

  interface GraphicsLayerConstructor {
    new(properties?: GraphicsLayerProperties): GraphicsLayer;
  }

  export const GraphicsLayer: GraphicsLayerConstructor;

  interface GraphicsLayerProperties extends LayerProperties {
    elevationInfo?: GraphicsLayerElevationInfo;
    graphics?: Collection;
    maxScale?: number;
    minScale?: number;
  }

  interface GroupLayer extends Layer, LayersMixin, PortalLayer {
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

  interface Layer extends Accessor, Loadable, Evented {
    fullExtent: Extent;
    id: string;
    legendEnabled: boolean;
    listMode: string;
    loaded: boolean;
    opacity: number;
    title: string;
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
    legendEnabled?: boolean;
    listMode?: string;
    loaded?: boolean;
    opacity?: number;
    title?: string;
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

  interface SceneLayer extends Layer, PortalLayer {
    copyright: string;
    popupEnabled: boolean;
    layerId: number;
    version: SceneLayerVersion;
    fields: Field[];
    renderer: Renderer;
    spatialReference: SpatialReference;
    popupTemplate: PopupTemplate;
    url: string;
    token: string;
  }

  interface SceneLayerConstructor {
    new(properties?: SceneLayerProperties): SceneLayer;
  }

  export const SceneLayer: SceneLayerConstructor;

  interface SceneLayerProperties extends LayerProperties, PortalLayerProperties {
    copyright?: string;
    popupEnabled?: boolean;
    layerId?: number;
    version?: SceneLayerVersion;
    fields?: Field[];
    renderer?: RendererProperties;
    spatialReference?: SpatialReferenceProperties;
    popupTemplate?: PopupTemplateProperties;
    url?: string;
    token?: string;
  }

  interface StreamLayer extends FeatureLayer {
    geometryDefinition: Extent;
    maximumTrackPoints: number;
    purgeOptions: any;
  }

  interface StreamLayerConstructor {
    new(properties?: StreamLayerProperties): StreamLayer;
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

  interface VectorTileLayer extends Layer, PortalLayer, TiledLayer {
    ACCESS_TOKEN: string;
    minScale: number;
    maxScale: number;
    style: any;
    spatialReference: SpatialReference;
    token: string;
    url: string | any;

    loadStyle(styleUrl: string | any): IPromise<any>;
  }

  interface VectorTileLayerConstructor {
    new(properties?: VectorTileLayerProperties): VectorTileLayer;

    fromJSON(json: any): VectorTileLayer;
  }

  export const VectorTileLayer: VectorTileLayerConstructor;

  interface VectorTileLayerProperties extends LayerProperties, PortalLayerProperties, TiledLayerProperties {
    ACCESS_TOKEN?: string;
    minScale?: number;
    maxScale?: number;
    style?: any;
    spatialReference?: SpatialReferenceProperties;
    token?: string;
    url?: string | any;
  }

  interface WebTileLayer extends Layer, TiledLayer {
    copyright: string;
    minScale: number;
    maxScale: number;
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

  interface WebTileLayerProperties extends LayerProperties, TiledLayerProperties {
    copyright?: string;
    minScale?: number;
    maxScale?: number;
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
    variableName: string;
    dimensionName: string;
    values: any[];
    isSlice: boolean;

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

  interface Field {
    alias: string;
    domain: Domain;
    editable: boolean;
    length: number;
    name: string;
    nullable: boolean;
    type: string;
  }

  interface FieldConstructor {
    new(): Field;
  }

  export const Field: FieldConstructor;

  interface ImageParameters {
    layerDefinitions: string[];

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

  interface LabelClass extends Accessor {
    labelExpression: string;
    labelExpressionInfo: LabelClassLabelExpressionInfo;
    labelPlacement: string;
    maxScale: number;
    minScale: number;
    sizeInfo: LabelClassSizeInfo;
    symbol: TextSymbol | LabelSymbol3D;
    useCodedValues: boolean;

    toJSON(): any;
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
    sizeInfo?: LabelClassSizeInfo;
    symbol?: TextSymbol | LabelSymbol3D;
    useCodedValues?: boolean;
  }

  interface LOD extends Accessor {
    level: number;
    resolution: number;
    scale: number;

    toJSON(): any;
  }

  interface LODConstructor {
    new(properties?: LODProperties): LOD;

    fromJSON(json: any): LOD;
  }

  export const LOD: LODConstructor;

  interface LODProperties {
    level?: number;
    resolution?: number;
    scale?: number;
  }

  interface MapImage extends Accessor {
    extent: Extent;
    height: number;
    href: number;
    scale: number;
    width: number;
    visible: boolean;
    opacity: number;
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
    scale?: number;
    width?: number;
    visible?: boolean;
    opacity?: number;
  }

  interface MosaicRule {
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

    getPlaneCount(): number;
    addData(planeData: PixelBlockAddDataPlaneData): void;
    getAsRGBA(): number[];
    getAsRGBAFloat(): number[];
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

  interface RasterFunction {
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

  interface TileInfo extends Accessor {
    lods: LOD[];
    origin: Point;
    spatialReference: SpatialReference;
    format: string;
    dpi: number;
    width: number;
    height: number;

    toJSON(): any;
  }

  interface TileInfoConstructor {
    new(properties?: TileInfoProperties): TileInfo;

    fromJSON(json: any): TileInfo;
  }

  export const TileInfo: TileInfoConstructor;

  interface TileInfoProperties {
    lods?: LOD[];
    origin?: PointProperties;
    spatialReference?: SpatialReferenceProperties;
    format?: string;
    dpi?: number;
    width?: number;
    height?: number;
  }

  interface Portal extends Accessor, Loadable {
    httpPort: number;
    access: string;
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
    defaultExtent: any;
    description: string;
    featuredGroups: PortalFeaturedGroups[];
    featuredItemsGroupQuery: string;
    galleryTemplatesGroupQuery: string;
    homePageFeaturedContent: string;
    homePageFeaturedContentCount: number;
    allSSL: boolean;
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
    httpPort?: number;
    access?: string;
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
    defaultExtent?: any;
    description?: string;
    featuredGroups?: PortalFeaturedGroups[];
    featuredItemsGroupQuery?: string;
    galleryTemplatesGroupQuery?: string;
    homePageFeaturedContent?: string;
    homePageFeaturedContentCount?: number;
    allSSL?: boolean;
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
    owner: string;
    access: string;
    description: string;
    id: string;
    isInvitationOnly: boolean;
    modified: Date;
    created: Date;
    portal: Portal;
    snippet: string;
    tags: string[];
    title: string;
    url: string;

    fetchMembers(): IPromise<any>;
    queryItems(queryParams: PortalQueryParams): IPromise<any>;
  }

  interface PortalGroupConstructor {
    new(properties?: PortalGroupProperties): PortalGroup;
  }

  export const PortalGroup: PortalGroupConstructor;

  interface PortalGroupProperties {
    owner?: string;
    access?: string;
    description?: string;
    id?: string;
    isInvitationOnly?: boolean;
    modified?: Date;
    created?: Date;
    portal?: PortalProperties;
    snippet?: string;
    tags?: string[];
    title?: string;
    url?: string;
  }

  interface PortalItem extends Accessor, Loadable {
    name: string;
    created: Date;
    extent: Extent;
    id: string;
    isLayer: boolean;
    itemControl: string;
    itemUrl: string;
    loaded: boolean;
    modified: Date;
    description: string;
    portal: Portal;
    snippet: string;
    tags: string[];
    thumbnailUrl: string;
    title: string;
    type: string;
    typeKeywords: string[];
    url: string;

    fetchData(responseType?: string): IPromise<any>;
    fetchRelatedItems(params: PortalItemFetchRelatedItemsParams): IPromise<any>;
    update(params?: PortalItemUpdateParams): IPromise<any>;
    toJSON(): any;
  }

  interface PortalItemConstructor {
    new(properties?: PortalItemProperties): PortalItem;

    fromJSON(json: any): PortalItem;
  }

  export const PortalItem: PortalItemConstructor;

  interface PortalItemProperties extends LoadableProperties {
    name?: string;
    created?: Date;
    extent?: ExtentProperties;
    id?: string;
    isLayer?: boolean;
    itemControl?: string;
    itemUrl?: string;
    loaded?: boolean;
    modified?: Date;
    description?: string;
    portal?: PortalProperties;
    snippet?: string;
    tags?: string[];
    thumbnailUrl?: string;
    title?: string;
    type?: string;
    typeKeywords?: string[];
    url?: string;
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
    created: Date;
    modified: Date;
    portal: Portal;
    thumbnailUrl: string;
    userContentUrl: string;
    username: string;

    addItem(params: PortalUserAddItemParams): IPromise<any>;
    deleteItem(item: PortalItem): IPromise<any>;
    fetchFolders(): IPromise<any>;
    fetchItems(params: PortalUserFetchItemsParams): IPromise<any>;
    queryFavorites(queryParams?: PortalQueryParams): IPromise<any>;
  }

  interface PortalUserConstructor {
    new(properties?: PortalUserProperties): PortalUser;
  }

  export const PortalUser: PortalUserConstructor;

  interface PortalUserProperties {
    created?: Date;
    modified?: Date;
    portal?: PortalProperties;
    thumbnailUrl?: string;
    userContentUrl?: string;
    username?: string;
  }

  interface ClassBreaksRenderer extends Renderer {
    type: string;
    field: string | Function;
    backgroundFillSymbol: FillSymbol;
    classificationMethod: string;
    defaultSymbol: Symbol;
    classBreakInfos: ClassBreaksRendererClassBreakInfos[];
    isMaxInclusive: boolean;
    normalizationField: string;
    normalizationTotal: number;
    normalizationType: string;

    addClassBreakInfo(min: number | any, max: number, symbol: Symbol): void;
    removeClassBreakInfo(min: number, max: number): void;
    getClassBreakInfo(graphic: Graphic): any;
    clone(): ClassBreaksRenderer;
  }

  interface ClassBreaksRendererConstructor {
    new(properties?: ClassBreaksRendererProperties): ClassBreaksRenderer;

    fromJSON(json: any): ClassBreaksRenderer;
  }

  export const ClassBreaksRenderer: ClassBreaksRendererConstructor;

  interface ClassBreaksRendererProperties extends RendererProperties {
    type?: string;
    field?: string | Function;
    backgroundFillSymbol?: FillSymbolProperties;
    classificationMethod?: string;
    defaultSymbol?: SymbolProperties;
    classBreakInfos?: ClassBreaksRendererClassBreakInfos[];
    isMaxInclusive?: boolean;
    normalizationField?: string;
    normalizationTotal?: number;
    normalizationType?: string;
  }

  interface Renderer extends Accessor {
    toJSON(): any;
  }

  interface RendererConstructor {
    new(properties?: RendererProperties): Renderer;

    fromJSON(json: any): Renderer;
  }

  export const Renderer: RendererConstructor;

  interface RendererProperties {

  }

  interface SimpleRenderer extends Renderer {
    type: string;
    label: string;
    symbol: Symbol;

    clone(): SimpleRenderer;
  }

  interface SimpleRendererConstructor {
    new(properties?: SimpleRendererProperties): SimpleRenderer;

    fromJSON(json: any): SimpleRenderer;
  }

  export const SimpleRenderer: SimpleRendererConstructor;

  interface SimpleRendererProperties extends RendererProperties {
    type?: string;
    label?: string;
    symbol?: SymbolProperties;
  }

  interface UniqueValueRenderer extends Renderer {
    type: string;
    field: string | Function;
    field2: string;
    field3: string;
    defaultLabel: string;
    defaultSymbol: Symbol;
    fieldDelimiter: string;
    uniqueValueInfos: UniqueValueRendererUniqueValueInfos[];

    addUniqueValueInfo(valueOrInfo: string | any, symbol: Symbol): void;
    removeUniqueValueInfo(value: string): void;
    getUniqueValueInfo(graphic: Graphic): any;
    clone(): UniqueValueRenderer;
  }

  interface UniqueValueRendererConstructor {
    new(properties?: UniqueValueRendererProperties): UniqueValueRenderer;

    fromJSON(json: any): UniqueValueRenderer;
  }

  export const UniqueValueRenderer: UniqueValueRendererConstructor;

  interface UniqueValueRendererProperties extends RendererProperties {
    type?: string;
    field?: string | Function;
    field2?: string;
    field3?: string;
    defaultLabel?: string;
    defaultSymbol?: SymbolProperties;
    fieldDelimiter?: string;
    uniqueValueInfos?: UniqueValueRendererUniqueValueInfos[];
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

  interface Font extends Accessor {
    toJSON(): any;
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
    resource: IconSymbol3DLayerResource;
    size: number;
    anchor: string;
    outline: IconSymbol3DLayerOutline;

    clone(): IconSymbol3DLayer;
  }

  interface IconSymbol3DLayerConstructor {
    new(properties?: IconSymbol3DLayerProperties): IconSymbol3DLayer;

    fromJSON(json: any): IconSymbol3DLayer;
  }

  export const IconSymbol3DLayer: IconSymbol3DLayerConstructor;

  interface IconSymbol3DLayerProperties extends Symbol3DLayerProperties {
    resource?: IconSymbol3DLayerResource;
    size?: number;
    anchor?: string;
    outline?: IconSymbol3DLayerOutline;
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
    size: number;

    clone(): LineSymbol3DLayer;
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
    resource: ObjectSymbol3DLayerResource;
    width: number;
    height: number;
    depth: number;
    anchor: string;

    clone(): ObjectSymbol3DLayer;
  }

  interface ObjectSymbol3DLayerConstructor {
    new(properties?: ObjectSymbol3DLayerProperties): ObjectSymbol3DLayer;

    fromJSON(json: any): ObjectSymbol3DLayer;
  }

  export const ObjectSymbol3DLayer: ObjectSymbol3DLayerConstructor;

  interface ObjectSymbol3DLayerProperties extends Symbol3DLayerProperties {
    resource?: ObjectSymbol3DLayerResource;
    width?: number;
    height?: number;
    depth?: number;
    anchor?: string;
  }

  interface PictureFillSymbol extends FillSymbol {
    width: number;
    xscale: number;
    yscale: number;
    height: number;
    xoffset: number;
    yoffset: number;
    url: string;
  }

  interface PictureFillSymbolConstructor {
    new(properties?: PictureFillSymbolProperties): PictureFillSymbol;

    fromJSON(json: any): PictureFillSymbol;
  }

  export const PictureFillSymbol: PictureFillSymbolConstructor;

  interface PictureFillSymbolProperties extends FillSymbolProperties {
    width?: number;
    xscale?: number;
    yscale?: number;
    height?: number;
    xoffset?: number;
    yoffset?: number;
    url?: string;
  }

  interface PictureMarkerSymbol extends MarkerSymbol {
    url: string;
    height: number;
    width: number;

    clone(): PictureMarkerSymbol;
  }

  interface PictureMarkerSymbolConstructor {
    new(properties?: PictureMarkerSymbolProperties): PictureMarkerSymbol;

    fromJSON(json: any): PictureMarkerSymbol;
  }

  export const PictureMarkerSymbol: PictureMarkerSymbolConstructor;

  interface PictureMarkerSymbolProperties extends MarkerSymbolProperties {
    url?: string;
    height?: number;
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
    style: string;

    clone(): SimpleLineSymbol;
  }

  interface SimpleLineSymbolConstructor {
    new(properties?: SimpleLineSymbolProperties): SimpleLineSymbol;

    fromJSON(json: any): SimpleLineSymbol;
  }

  export const SimpleLineSymbol: SimpleLineSymbolConstructor;

  interface SimpleLineSymbolProperties extends LineSymbolProperties {
    style?: string;
  }

  interface SimpleMarkerSymbol extends MarkerSymbol {
    color: Color;
    style: string;
    size: number;
    path: string;
    outline: SimpleLineSymbol;

    clone(): SimpleMarkerSymbol;
  }

  interface SimpleMarkerSymbolConstructor {
    new(properties?: SimpleMarkerSymbolProperties): SimpleMarkerSymbol;

    fromJSON(json: any): SimpleMarkerSymbol;
  }

  export const SimpleMarkerSymbol: SimpleMarkerSymbolConstructor;

  interface SimpleMarkerSymbolProperties extends MarkerSymbolProperties {
    color?: Color;
    style?: string;
    size?: number;
    path?: string;
    outline?: SimpleLineSymbolProperties;
  }

  interface Symbol extends Accessor {
    type: string;

    toJSON(): any;
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
    symbolLayers: Collection;
  }

  interface Symbol3DConstructor {
    new(properties?: Symbol3DProperties): Symbol3D;

    fromJSON(json: any): Symbol3D;
  }

  export const Symbol3D: Symbol3DConstructor;

  interface Symbol3DProperties extends SymbolProperties {
    symbolLayers?: Collection;
  }

  interface Symbol3DLayer extends Accessor {
    type: string;
    material: any;

    toJSON(): any;
  }

  interface Symbol3DLayerConstructor {
    new(properties?: Symbol3DLayerProperties): Symbol3DLayer;

    fromJSON(json: any): Symbol3DLayer;
  }

  export const Symbol3DLayer: Symbol3DLayerConstructor;

  interface Symbol3DLayerProperties {
    type?: string;
    material?: any;
  }

  interface TextSymbol extends Symbol {
    haloColor: Color;
    font: Font;
    haloSize: number;
    horizontalAlignment: string;
    kerning: boolean;
    color: Color;
    rotated: boolean;
    text: string;
    xoffset: number;
    yoffset: number;
    angle: number;

    clone(): TextSymbol;
  }

  interface TextSymbolConstructor {
    new(properties?: TextSymbolProperties): TextSymbol;

    fromJSON(json: any): TextSymbol;
  }

  export const TextSymbol: TextSymbolConstructor;

  interface TextSymbolProperties extends SymbolProperties {
    haloColor?: Color;
    font?: FontProperties;
    haloSize?: number;
    horizontalAlignment?: string;
    kerning?: boolean;
    color?: Color;
    rotated?: boolean;
    text?: string;
    xoffset?: number;
    yoffset?: number;
    angle?: number;
  }

  interface TextSymbol3DLayer extends Symbol3DLayer {
    size: number;
    text: string;
    font: TextSymbol3DLayerFont;

    clone(): TextSymbol3DLayer;
  }

  interface TextSymbol3DLayerConstructor {
    new(properties?: TextSymbol3DLayerProperties): TextSymbol3DLayer;

    fromJSON(json: any): TextSymbol3DLayer;
  }

  export const TextSymbol3DLayer: TextSymbol3DLayerConstructor;

  interface TextSymbol3DLayerProperties extends Symbol3DLayerProperties {
    size?: number;
    text?: string;
    font?: TextSymbol3DLayerFont;
  }

  interface ClosestFacilityTask extends Task {
    solve(params: ClosestFacilityParameters): IPromise<any>;
  }

  interface ClosestFacilityTaskConstructor {
    new(properties?: ClosestFacilityTaskProperties): ClosestFacilityTask;
  }

  export const ClosestFacilityTask: ClosestFacilityTaskConstructor;

  interface ClosestFacilityTaskProperties extends TaskProperties {

  }

  interface FindTask extends Task {
    gdbVersion: string;

    execute(params: FindParameters): IPromise<any>;
  }

  interface FindTaskConstructor {
    new(properties?: FindTaskProperties): FindTask;
  }

  export const FindTask: FindTaskConstructor;

  interface FindTaskProperties extends TaskProperties {
    gdbVersion?: string;
  }

  interface GeometryService extends Task {
    areasAndLengths(areasAndLengthsParameters: AreasAndLengthsParameters): IPromise<any>;
    simplify(geometries: Geometry[]): IPromise<any>;
    convexHull(geometries: Geometry[]): IPromise<any>;
    union(geometries: Geometry[]): IPromise<any>;
    autoComplete(polygons: Polygon[], polylines: Polyline[]): IPromise<any>;
    reshape(targetGeometry: Geometry, reshaper: Geometry): IPromise<any>;
    cut(geometries: Geometry[], cutter: Polyline): IPromise<any>;
    intersect(geometries: Geometry[], intersector: Geometry): IPromise<any>;
    difference(geometries: Geometry[], geometry: Geometry): IPromise<any>;
    buffer(bufferParameters: BufferParameters): IPromise<any>;
    project(params: ProjectParameters): IPromise<any>;
    lengths(params: LengthsParameters): IPromise<any>;
    labelPoints(polygons: Polygon[]): IPromise<any>;
    relation(params: RelationParameters): IPromise<any>;
    trimExtend(__0: TrimExtendParameters): IPromise<any>;
    densify(densifyParameters: DensifyParameters): IPromise<any>;
    generalize(params: GeneralizeParameters): IPromise<any>;
    offset(params: OffsetParameters): IPromise<any>;
    distance(params: DistanceParameters): IPromise<any>;
    toGeoCoordinateString(params: GeometryServiceToGeoCoordinateStringParams): IPromise<any>;
    fromGeoCoordinateString(params: GeometryServiceFromGeoCoordinateStringParams): IPromise<any>;
  }

  interface GeometryServiceConstructor {
    new(properties?: GeometryServiceProperties): GeometryService;
  }

  export const GeometryService: GeometryServiceConstructor;

  interface GeometryServiceProperties extends TaskProperties {

  }

  interface Geoprocessor extends Task {
    updateDelay: number;
    processSpatialReference: SpatialReference;
    outSpatialReference: SpatialReference;

    submitJob(params: any): IPromise<any>;
    getResultData(jobId: string, resultName: string): IPromise<any>;
    checkJobStatus(jobId: string): IPromise<any>;
    cancelJob(jobId: string): IPromise<any>;
    execute(params: any): IPromise<any>;
    getResultImage(jobId: string, resultName: string, imageParams: ImageParameters): IPromise<any>;
    cancelJobStatusUpdates(jobId: string): void;
    getResultImageLayer(jobId: string, resultName: string, imageParams: ImageParameters): MapImageLayer;
  }

  interface GeoprocessorConstructor {
    new(properties?: GeoprocessorProperties): Geoprocessor;
  }

  export const Geoprocessor: GeoprocessorConstructor;

  interface GeoprocessorProperties extends TaskProperties {
    updateDelay?: number;
    processSpatialReference?: SpatialReferenceProperties;
    outSpatialReference?: SpatialReferenceProperties;
  }

  interface IdentifyTask extends Task {
    gdbVersion: string;

    execute(params: IdentifyParameters): IPromise<any>;
  }

  interface IdentifyTaskConstructor {
    new(properties?: IdentifyTaskProperties): IdentifyTask;
  }

  export const IdentifyTask: IdentifyTaskConstructor;

  interface IdentifyTaskProperties extends TaskProperties {
    gdbVersion?: string;
  }

  interface ImageServiceIdentifyTask extends Task {
    execute(params: ImageServiceIdentifyParameters): IPromise<any>;
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

    addressToLocations(params: LocatorAddressToLocationsParams, address?: any, outFields?: string[]): IPromise<any>;
    suggestLocations(params: LocatorSuggestLocationsParams): any;
    addressesToLocations(params: LocatorAddressesToLocationsParams): IPromise<any>;
    locationToAddress(location: Point, distance: number): IPromise<any>;
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

    execute(params: Query): IPromise<any>;
    executeRelationshipQuery(params: RelationshipQuery): IPromise<any>;
    executeForIds(params: Query): IPromise<any>;
    executeForCount(params: Query): IPromise<any>;
    executeForExtent(params: Query): IPromise<any>;
  }

  interface QueryTaskConstructor {
    new(properties?: QueryTaskProperties): QueryTask;
  }

  export const QueryTask: QueryTaskConstructor;

  interface QueryTaskProperties extends TaskProperties {
    gdbVersion?: string;
  }

  interface RouteTask extends Task {
    solve(params: RouteParameters): IPromise<any>;
  }

  interface RouteTaskConstructor {
    new(properties?: RouteTaskProperties): RouteTask;
  }

  export const RouteTask: RouteTaskConstructor;

  interface RouteTaskProperties extends TaskProperties {

  }

  interface ServiceAreaTask extends Task {
    solve(params: ServiceAreaParameters): IPromise<any>;
  }

  interface ServiceAreaTaskConstructor {
    new(properties?: ServiceAreaTaskProperties): ServiceAreaTask;
  }

  export const ServiceAreaTask: ServiceAreaTaskConstructor;

  interface ServiceAreaTaskProperties extends TaskProperties {

  }

  interface Task extends Accessor {
    url: string;
  }

  interface TaskConstructor {
    new(properties?: TaskProperties): Task;
  }

  export const Task: TaskConstructor;

  interface TaskProperties {
    url?: string;
  }

  interface AddressCandidate {
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
    polygons?: Polygon[];
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
    geometries?: Geometry[];
    outSpatialReference?: SpatialReferenceProperties;
    unionResults?: boolean;
    unit?: string;
  }

  interface ClosestFacilityParameters extends Accessor {
    outSpatialReference: SpatialReference | string;
    accumulateAttributes: string[];
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
    attributeParameterValues: ClosestFacilityParametersAttributeParameterValues[];
    pointBarriers: DataLayer | FeatureSet;
    polygonBarriers: DataLayer | FeatureSet;
    polylineBarriers: DataLayer | FeatureSet;
    restrictionAttributes: string[];
    restrictUTurns: string;
    returnDirections: boolean;
    returnFacilities: boolean;
    returnIncidents: boolean;
    returnPointBarriers: boolean;
    returnPolylgonBarriers: boolean;
    returnPolylineBarriers: boolean;
    returnRoutes: boolean;
    travelDirection: string;
    useHierarchy: boolean;
    timeOfDay: Date;
    timeOfDayUsage: string;

    toJSON(): any;
  }

  interface ClosestFacilityParametersConstructor {
    new(properties?: ClosestFacilityParametersProperties): ClosestFacilityParameters;
  }

  export const ClosestFacilityParameters: ClosestFacilityParametersConstructor;

  interface ClosestFacilityParametersProperties {
    outSpatialReference?: SpatialReference | string;
    accumulateAttributes?: string[];
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
    attributeParameterValues?: ClosestFacilityParametersAttributeParameterValues[];
    pointBarriers?: DataLayer | FeatureSet;
    polygonBarriers?: DataLayer | FeatureSet;
    polylineBarriers?: DataLayer | FeatureSet;
    restrictionAttributes?: string[];
    restrictUTurns?: string;
    returnDirections?: boolean;
    returnFacilities?: boolean;
    returnIncidents?: boolean;
    returnPointBarriers?: boolean;
    returnPolylgonBarriers?: boolean;
    returnPolylineBarriers?: boolean;
    returnRoutes?: boolean;
    travelDirection?: string;
    useHierarchy?: boolean;
    timeOfDay?: Date;
    timeOfDayUsage?: string;
  }

  interface ClosestFacilitySolveResult {
    directions: DirectionsFeatureSet;
    facilities: Point[];
    incidents: Point[];
    messages: NAMessage[];
    pointBarriers: Point[];
    polylineBarriers: Polyline[];
    polygonBarriers: Polygon[];
    routes: Graphic[];
  }

  interface ClosestFacilitySolveResultConstructor {
    new(properties?: ClosestFacilitySolveResultProperties): ClosestFacilitySolveResult;

    fromJSON(json: any): ClosestFacilitySolveResult;
  }

  export const ClosestFacilitySolveResult: ClosestFacilitySolveResultConstructor;

  interface ClosestFacilitySolveResultProperties {
    directions?: DirectionsFeatureSetProperties;
    facilities?: Point[];
    incidents?: Point[];
    messages?: NAMessage[];
    pointBarriers?: Point[];
    polylineBarriers?: Polyline[];
    polygonBarriers?: Polygon[];
    routes?: Graphic[];
  }

  interface DataFile {
    itemId: string;
    url: string;

    toJSON(): any;
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

  interface supportDate {
    date: Date;
    format: string;

    toJSON(): any;
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
    geometries: Geometry[];
    geodesic: boolean;
    lengthUnit: string;
    maxSegmentLength: number;

    toJSON(): any;
  }

  interface DensifyParametersConstructor {
    new(properties?: DensifyParametersProperties): DensifyParameters;
  }

  export const DensifyParameters: DensifyParametersConstructor;

  interface DensifyParametersProperties {
    geometries?: Geometry[];
    geodesic?: boolean;
    lengthUnit?: string;
    maxSegmentLength?: number;
  }

  interface DirectionsFeatureSet extends FeatureSet {
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
    geometry1: Geometry[];
    geometry2: Geometry[];
    distanceUnit: string;
    geodesic: boolean;

    toJSON(): any;
  }

  interface DistanceParametersConstructor {
    new(properties?: DistanceParametersProperties): DistanceParameters;
  }

  export const DistanceParameters: DistanceParametersConstructor;

  interface DistanceParametersProperties {
    geometry1?: Geometry[];
    geometry2?: Geometry[];
    distanceUnit?: string;
    geodesic?: boolean;
  }

  interface FeatureSet {
    displayFieldName: string;
    exceededTransferLimit: boolean;
    features: Graphic[];
    geometryType: string;
    spatialReference: SpatialReference;

    toJSON(): any;
  }

  interface FeatureSetConstructor {
    new(properties?: FeatureSetProperties): FeatureSet;

    fromJSON(json: any): FeatureSet;
  }

  export const FeatureSet: FeatureSetConstructor;

  interface FeatureSetProperties {
    displayFieldName?: string;
    exceededTransferLimit?: boolean;
    features?: Graphic[];
    geometryType?: string;
    spatialReference?: SpatialReferenceProperties;
  }

  interface FindParameters extends Accessor {
    contains: boolean;
    dynamicLayerInfos: any[];
    layerDefinitions: string[];
    layerIds: number[];
    geometryPrecision: number;
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
    dynamicLayerInfos?: any[];
    layerDefinitions?: string[];
    layerIds?: number[];
    geometryPrecision?: number;
    maxAllowableOffset?: number;
    outSpatialReference?: SpatialReferenceProperties;
    returnGeometry?: boolean;
    searchFields?: string[];
    searchText?: string;
  }

  interface FindResult {
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
    geometries: Geometry[];
    deviationUnit: string;
    maxDeviation: number;

    toJSON(): any;
  }

  interface GeneralizeParametersConstructor {
    new(properties?: GeneralizeParametersProperties): GeneralizeParameters;
  }

  export const GeneralizeParameters: GeneralizeParametersConstructor;

  interface GeneralizeParametersProperties {
    geometries?: Geometry[];
    deviationUnit?: string;
    maxDeviation?: number;
  }

  interface GPMessage {
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
    mapExtent: Extent;
    geometry: Geometry;
    height: number;
    layerDefinitions: string[];
    layerIds: number[];
    layerOption: string;
    dpi: number;
    geometryPrecision: number;
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
    mapExtent?: ExtentProperties;
    geometry?: GeometryProperties;
    height?: number;
    layerDefinitions?: string[];
    layerIds?: number[];
    layerOption?: string;
    dpi?: number;
    geometryPrecision?: number;
    maxAllowableOffset?: number;
    returnGeometry?: boolean;
    spatialReference?: SpatialReferenceProperties;
    tolerance?: number;
    width?: number;
  }

  interface IdentifyResult {
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
    renderingRule: RasterFunction;
    pixelSizeX: number;
    pixelSizeY: number;
    pixelSize: Symbol;
    returnGeometry: boolean;
    returnCatalogItems: boolean;

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
    renderingRule?: RasterFunctionProperties;
    pixelSizeX?: number;
    pixelSizeY?: number;
    pixelSize?: SymbolProperties;
    returnGeometry?: boolean;
    returnCatalogItems?: boolean;
  }

  interface ImageServiceIdentifyResult {
    catalogItemVisibilities: number[];
    catalogItems: FeatureSet;
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
    catalogItemVisibilities?: number[];
    catalogItems?: FeatureSetProperties;
    location?: PointProperties;
    name?: string;
    objectId?: number;
    properties?: any;
    value?: string;
  }

  interface JobInfo {
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
    messages?: GPMessage[];
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
    polylines?: Polyline[];
  }

  interface LinearUnit {
    distance: number;
    units: string;

    toJSON(): any;
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

  interface NAMessage {
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
    geometries?: Geometry[];
    offsetDistance?: number;
    offsetHow?: string;
    offsetUnit?: string;
  }

  interface ParameterValue {
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
    geometries?: Geometry[];
    outSR?: SpatialReferenceProperties;
    transformation?: ProjectParametersTransformation;
    transformForward?: boolean;
  }

  interface Query extends Accessor {
    num: number;
    spatialRelationship: string;
    where: string;
    geometry: Geometry;
    geometryPrecision: number;
    groupByFieldsForStatistics: string[];
    objectIds: number[];
    returnGeometry: boolean;
    returnDistinctValues: boolean;
    maxAllowableOffset: number;
    multipatchOption: string;
    text: string;
    start: number;
    orderByFields: string[];
    outSpatialReference: SpatialReference;
    outFields: string[];
    outStatistics: StatisticDefinition[];
    relationParam: string;
    pixelSize: Symbol;
    distance: number;
    units: string;
    quantizationParameters: QueryQuantizationParameters;
    returnZ: boolean;

    toJSON(): any;
  }

  interface QueryConstructor {
    new(properties?: QueryProperties): Query;
  }

  export const Query: QueryConstructor;

  interface QueryProperties {
    num?: number;
    spatialRelationship?: string;
    where?: string;
    geometry?: GeometryProperties;
    geometryPrecision?: number;
    groupByFieldsForStatistics?: string[];
    objectIds?: number[];
    returnGeometry?: boolean;
    returnDistinctValues?: boolean;
    maxAllowableOffset?: number;
    multipatchOption?: string;
    text?: string;
    start?: number;
    orderByFields?: string[];
    outSpatialReference?: SpatialReferenceProperties;
    outFields?: string[];
    outStatistics?: StatisticDefinition[];
    relationParam?: string;
    pixelSize?: SymbolProperties;
    distance?: number;
    units?: string;
    quantizationParameters?: QueryQuantizationParameters;
    returnZ?: boolean;
  }

  interface RasterData {
    format: string;
    itemId: string;
    url: string;

    toJSON(): any;
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
    geometries1?: Geometry[];
    geometries2?: Geometry[];
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
    polylineBarriers: DataLayer | FeatureSet;
    accumulateAttributes: string[];
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
    outputLines: string;
    outputGeometryPrecision: number;
    outputGeometryPrecisionUnits: string;
    outSpatialReference: SpatialReference;
    polygonBarriers: DataLayer | FeatureSet;
    attributeParameterValues: AttributeParamValue;
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
    polylineBarriers?: DataLayer | FeatureSet;
    accumulateAttributes?: string[];
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
    outputLines?: string;
    outputGeometryPrecision?: number;
    outputGeometryPrecisionUnits?: string;
    outSpatialReference?: SpatialReferenceProperties;
    polygonBarriers?: DataLayer | FeatureSet;
    attributeParameterValues?: AttributeParamValue;
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

  interface RouteResult {
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
    stops?: Graphic[];
  }

  interface ServiceAreaParameters extends Accessor {
    polygonBarriers: DataLayer | FeatureSet;
    accumulateAttributes: string[];
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
    attributeParameterValues: any[];
    polylineBarriers: DataLayer | FeatureSet;
    restrictionAttributes: string[];
    restrictUTurns: string;
    returnFacilities: boolean;
    returnPointBarriers: boolean;
    returnPolygonBarriers: boolean;
    returnPolylineBarriers: boolean;
    splitLinesAtBreaks: boolean;
    splitPolygonsAtBreaks: boolean;
    travelDirection: string;
    trimOuterPolygon: boolean;
    trimPolygonDistance: number;
    trimPolygonDistanceUnits: string;
    useHierarchy: boolean;
    timeOfDay: Date;

    toJSON(): any;
  }

  interface ServiceAreaParametersConstructor {
    new(properties?: ServiceAreaParametersProperties): ServiceAreaParameters;
  }

  export const ServiceAreaParameters: ServiceAreaParametersConstructor;

  interface ServiceAreaParametersProperties {
    polygonBarriers?: DataLayer | FeatureSet;
    accumulateAttributes?: string[];
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
    attributeParameterValues?: any[];
    polylineBarriers?: DataLayer | FeatureSet;
    restrictionAttributes?: string[];
    restrictUTurns?: string;
    returnFacilities?: boolean;
    returnPointBarriers?: boolean;
    returnPolygonBarriers?: boolean;
    returnPolylineBarriers?: boolean;
    splitLinesAtBreaks?: boolean;
    splitPolygonsAtBreaks?: boolean;
    travelDirection?: string;
    trimOuterPolygon?: boolean;
    trimPolygonDistance?: number;
    trimPolygonDistanceUnits?: string;
    useHierarchy?: boolean;
    timeOfDay?: Date;
  }

  interface ServiceAreaSolveResult {
    facilities: Point[];
    messages: NAMessage[];
    pointBarriers: Point[];
    polylineBarriers: Polyline[];
    polygonBarriers: Polygon[];
    serviceAreaPolylines: Graphic[];
    serviceAreaPolygons: Graphic[];
  }

  interface ServiceAreaSolveResultConstructor {
    new(properties?: ServiceAreaSolveResultProperties): ServiceAreaSolveResult;

    fromJSON(json: any): ServiceAreaSolveResult;
  }

  export const ServiceAreaSolveResult: ServiceAreaSolveResultConstructor;

  interface ServiceAreaSolveResultProperties {
    facilities?: Point[];
    messages?: NAMessage[];
    pointBarriers?: Point[];
    polylineBarriers?: Polyline[];
    polygonBarriers?: Polygon[];
    serviceAreaPolylines?: Graphic[];
    serviceAreaPolygons?: Graphic[];
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
    extendHow: void;
    polylines: Polyline[];
    trimExtendTo: Polyline;

    toJSON(): any;
  }

  interface TrimExtendParametersConstructor {
    new(properties?: TrimExtendParametersProperties): TrimExtendParameters;
  }

  export const TrimExtendParameters: TrimExtendParametersConstructor;

  interface TrimExtendParametersProperties {
    extendHow?: void;
    polylines?: Polyline[];
    trimExtendTo?: PolylineProperties;
  }

  interface MapView extends View {
    resizeAlign: string;
    center: Point;
    constraints: MapViewConstraints;
    extent: Extent;
    rotation: number;
    scale: number;
    viewpoint: Viewpoint;
    zoom: number;

    goTo(target: number[] | Geometry | Geometry[] | Graphic | Graphic[] | Viewpoint | any, options?: MapViewGoToOptions): IPromise<any>;
    hitTest(screenPoint: ScreenPoint): IPromise<any>;
    toMap(screenPoint: ScreenPoint, mapPoint?: Point): Point;
    toScreen(point: Point, screenPoint?: ScreenPoint): ScreenPoint;
  }

  interface MapViewConstructor {
    new(properties?: MapViewProperties): MapView;
  }

  export const MapView: MapViewConstructor;

  interface MapViewProperties extends ViewProperties {
    resizeAlign?: string;
    center?: PointProperties;
    constraints?: MapViewConstraints;
    extent?: ExtentProperties;
    rotation?: number;
    scale?: number;
    viewpoint?: ViewpointProperties;
    zoom?: number;
  }

  interface SceneView extends View {
    extent: Extent;
    viewingMode: string;
    constraints: SceneViewConstraints;
    camera: Camera;
    viewpoint: Viewpoint;
    environment: SceneViewEnvironment;
    clippingArea: Extent;
    scale: number;
    zoom: number;
    center: Point;
    qualityProfile: string;

    toMap(screenPoint: ScreenPoint, mapPoint?: Point): Point;
    toScreen(point: Point, screenPoint?: ScreenPoint): ScreenPoint;
    hitTest(screenPoint: ScreenPoint): IPromise<any>;
    goTo(target: number[] | Geometry | Geometry[] | Graphic | Graphic[] | Viewpoint | Camera | any, options?: SceneViewGoToOptions): IPromise<any>;
  }

  interface SceneViewConstructor {
    new(properties?: SceneViewProperties): SceneView;
  }

  export const SceneView: SceneViewConstructor;

  interface SceneViewProperties extends ViewProperties {
    extent?: ExtentProperties;
    viewingMode?: string;
    constraints?: SceneViewConstraintsProperties;
    camera?: CameraProperties;
    viewpoint?: ViewpointProperties;
    environment?: SceneViewEnvironmentProperties;
    clippingArea?: ExtentProperties;
    scale?: number;
    zoom?: number;
    center?: PointProperties;
    qualityProfile?: string;
  }

  interface View extends Accessor, corePromise, Evented, DOMContainer, BreakpointsOwner {
    padding: ViewPadding;
    allLayerViews: Collection;
    container: string;
    graphics: Collection;
    interacting: boolean;
    layerViews: Collection;
    map: Map;
    animation: ViewAnimation;
    popup: Popup;
    ready: boolean;
    spatialReference: SpatialReference;
    stationary: boolean;
    type: string;
    ui: DefaultUI;
    updating: boolean;

    whenLayerView(layer: Layer): IPromise<any>;
  }

  interface ViewConstructor {
    new(properties?: ViewProperties): View;
  }

  export const View: ViewConstructor;

  interface ViewProperties extends DOMContainerProperties, BreakpointsOwnerProperties {
    padding?: ViewPadding;
    allLayerViews?: Collection;
    container?: string;
    graphics?: Collection;
    interacting?: boolean;
    layerViews?: Collection;
    map?: MapProperties;
    animation?: ViewAnimationProperties;
    popup?: Popup;
    ready?: boolean;
    spatialReference?: SpatialReferenceProperties;
    stationary?: boolean;
    type?: string;
    ui?: DefaultUIProperties;
    updating?: boolean;
  }

  interface ViewAnimation extends Accessor, corePromise {
    state: string;
    target: Viewpoint;

    stop(): void;
    finish(): void;
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
    queryFeatures(params?: Query): IPromise<any>;
    queryObjectIds(params?: Query): IPromise<any>;
    queryFeatureCount(params?: Query): IPromise<any>;
    queryExtent(params?: Query): IPromise<any>;
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
    padding: any | number;
    view: SceneView | MapView;
    width: number;

    add(component: any | any[], position?: string | any): void;
    remove(component: any | any[]): void;
    empty(position?: string): void;
    move(component: any, position?: string): void;
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
    ambientOcclusionEnabled: boolean;
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
    ambientOcclusionEnabled?: boolean;
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
    id: string;
    title: SlideTitle;
    description: SlideDescription;
    thumbnail: SlideThumbnail;
    viewpoint: Viewpoint;
    basemap: Basemap | string;
    visibleLayers: SlideVisibleLayers;
    environment: Environment;

    clone(): Slide;
    updateFrom(view: SceneView, options?: SlideUpdateFromOptions): IPromise<any>;
    applyTo(view: SceneView, options?: SlideApplyToOptions): void;
  }

  interface SlideConstructor {
    new(properties?: SlideProperties): Slide;


    createFrom(view: SceneView, options?: SlideCreateFromOptions): IPromise<any>;
  }

  export const Slide: SlideConstructor;

  interface SlideProperties {
    id?: string;
    title?: SlideTitleProperties;
    description?: SlideDescriptionProperties;
    thumbnail?: SlideThumbnailProperties;
    viewpoint?: ViewpointProperties;
    basemap?: Basemap | string;
    visibleLayers?: SlideVisibleLayers;
    environment?: EnvironmentProperties;
  }

  interface Attribution extends Widget {
    view: SceneView | MapView;
    viewModel: AttributionViewModel;
  }

  interface AttributionConstructor {
    new(properties?: any, srcNodeRef?: string | any): Attribution;
  }

  export const Attribution: AttributionConstructor;

  interface BasemapToggle extends Widget, Evented {
    activeBasemap: Basemap;
    nextBasemap: Basemap | string;
    titleVisible: boolean;
    view: SceneView | MapView;
    viewModel: BasemapToggleViewModel;

    toggle(): void;
  }

  interface BasemapToggleConstructor {
    new(properties?: any, srcNodeRef?: string | any): BasemapToggle;
  }

  export const BasemapToggle: BasemapToggleConstructor;

  interface Compass extends Widget {
    view: SceneView | MapView;
    viewModel: CompassViewModel;

    reset(): void;
  }

  interface CompassConstructor {
    new(properties?: any, srcNodeRef?: string | any): Compass;
  }

  export const Compass: CompassConstructor;

  interface Home extends Widget, Evented {
    view: MapView | SceneView;
    viewpoint: Viewpoint;
    viewModel: HomeViewModel;

    go(): void;
  }

  interface HomeConstructor {
    new(properties?: any, srcNodeRef?: string | any): Home;
  }

  export const Home: HomeConstructor;

  interface Legend extends Widget {
    layerInfos: LegendLayerInfos[];
    view: SceneView | MapView;
  }

  interface LegendConstructor {
    new(properties: any, srcNodeRef?: string | any): Legend;
  }

  export const Legend: LegendConstructor;

  interface Locate extends Widget, Evented {
    geolocationOptions: any;
    goToLocationEnabled: boolean;
    graphic: Graphic;
    view: MapView | SceneView;
    viewModel: LocateViewModel;

    locate(): IPromise<any>;
  }

  interface LocateConstructor {
    new(properties?: any, srcNodeRef?: string | any): Locate;
  }

  export const Locate: LocateConstructor;

  interface NavigationToggle extends Widget {
    layout: string;
    view: SceneView;
    viewModel: NavigationToggleViewModel;

    toggle(): void;
  }

  interface NavigationToggleConstructor {
    new(properties?: any, srcNodeRef?: string | any): NavigationToggle;
  }

  export const NavigationToggle: NavigationToggleConstructor;

  interface Popup extends Widget, Evented {
    features: Graphic[];
    viewModel: PopupViewModel;
    content: string | any;
    dockOptions: PopupDockOptions;
    dockEnabled: boolean;
    currentDockPosition: string;
    featureCount: number;
    actions: PopupActions;
    location: Geometry;
    promises: IPromise<any>[];
    selectedFeature: Graphic;
    selectedFeatureIndex: number;
    title: string;
    view: MapView | SceneView;
    visible: boolean;

    clear(): void;
    close(): void;
    next(): PopupViewModel;
    previous(): PopupViewModel;
    reposition(): void;
    open(options?: PopupOpenOptions): void;
    triggerAction(actionIndex: number): void;
  }

  interface PopupConstructor {
    new(properties?: any, srcNodeRef?: string | any): Popup;
  }

  export const Popup: PopupConstructor;

  interface Search extends Widget, Evented {
    popupEnabled: boolean;
    viewModel: SearchViewModel;
    activeSourceIndex: number;
    allPlaceholder: string;
    autoSelect: boolean;
    defaultSource: any;
    resultGraphic: Graphic;
    maxResults: number;
    maxSuggestions: number;
    minSuggestCharacters: number;
    activeSource: FeatureLayer | Locator;
    popupTemplate: PopupTemplate;
    searchAllEnabled: boolean;
    results: any[];
    selectedResult: any;
    popupOpenOnSelect: boolean;
    searchTerm: string;
    sources: SearchSources;
    suggestions: any[];
    suggestionsEnabled: boolean;
    view: MapView | SceneView;

    clear(): void;
    search(searchTerm?: string | Geometry | any | number[][]): IPromise<any>;
    suggest(value?: string): IPromise<any>;
  }

  interface SearchConstructor {
    new(properties?: any, srcNodeRef?: string | any): Search;
  }

  export const Search: SearchConstructor;

  interface Track extends Widget {
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
    new(properties?: any, srcNodeRef?: string | any): Track;
  }

  export const Track: TrackConstructor;

  interface Widget {
    visible: boolean;

    destroy(): void;
    startup(): void;
  }

  interface WidgetConstructor {
    new(): Widget;
  }

  export const Widget: WidgetConstructor;

  interface Zoom extends Widget {
    view: SceneView | MapView;
    viewModel: ZoomViewModel;

    zoomIn(): void;
    zoomOut(): void;
  }

  interface ZoomConstructor {
    new(properties?: any, srcNodeRef?: string | any): Zoom;
  }

  export const Zoom: ZoomConstructor;

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
    nextBasemap: Basemap | string;
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

  interface LocateViewModel extends Accessor, Evented {
    geolocationOptions: any;
    goToLocationEnabled: boolean;
    graphic: Graphic;
    state: string;
    view: MapView | SceneView;

    locate(): IPromise<any>;
  }

  interface LocateViewModelConstructor {
    new(properties?: LocateViewModelProperties): LocateViewModel;
  }

  export const LocateViewModel: LocateViewModelConstructor;

  interface LocateViewModelProperties {
    geolocationOptions?: any;
    goToLocationEnabled?: boolean;
    graphic?: GraphicProperties;
    state?: string;
    view?: MapView | SceneView;
  }

  interface NavigationToggleViewModel extends Accessor {
    state: string;
    navigationMode: string;
    view: SceneView;

    toggle(): void;
  }

  interface NavigationToggleViewModelConstructor {
    new(properties?: NavigationToggleViewModelProperties): NavigationToggleViewModel;
  }

  export const NavigationToggleViewModel: NavigationToggleViewModelConstructor;

  interface NavigationToggleViewModelProperties {
    state?: string;
    navigationMode?: string;
    view?: SceneViewProperties;
  }

  interface PopupViewModel extends Accessor, Evented {
    promises: IPromise<any>[];
    actions: PopupViewModelActions;
    featureCount: number;
    features: Graphic[];
    location: Geometry;
    pendingPromisesCount: number;
    content: string | any;
    selectedFeature: Graphic;
    selectedFeatureIndex: number;
    state: string;
    title: string;
    view: MapView | SceneView;

    clear(): void;
    triggerAction(actionIndex: number): void;
    next(): PopupViewModel;
    previous(): PopupViewModel;
  }

  interface PopupViewModelConstructor {
    new(properties?: PopupViewModelProperties): PopupViewModel;
  }

  export const PopupViewModel: PopupViewModelConstructor;

  interface PopupViewModelProperties {
    promises?: IPromise<any>[];
    actions?: PopupViewModelActions;
    featureCount?: number;
    features?: Graphic[];
    location?: GeometryProperties;
    pendingPromisesCount?: number;
    content?: string | any;
    selectedFeature?: GraphicProperties;
    selectedFeatureIndex?: number;
    state?: string;
    title?: string;
    view?: MapView | SceneView;
  }

  interface SearchViewModel extends Accessor, Evented {
    placeholder: string;
    activeSource: FeatureLayer | Locator;
    allPlaceholder: string;
    autoSelect: boolean;
    popupEnabled: boolean;
    defaultSource: any;
    resultGraphic: Graphic;
    maxInputLength: number;
    maxResults: number;
    maxSuggestions: number;
    minSuggestCharacters: number;
    activeSourceIndex: number;
    popupTemplate: PopupTemplate;
    results: any[];
    searchAllEnabled: boolean;
    selectedResult: any;
    popupOpenOnSelect: boolean;
    searchTerm: string;
    sources: SearchViewModelSources[];
    suggestionDelay: number;
    suggestions: any[];
    suggestionsEnabled: boolean;
    view: MapView | SceneView;

    clear(): void;
    search(searchTerm?: string | Geometry | any | number[][]): IPromise<any>;
    suggest(value?: string): IPromise<any>;
    cancelSuggest(): void;
  }

  interface SearchViewModelConstructor {
    new(properties?: SearchViewModelProperties): SearchViewModel;
  }

  export const SearchViewModel: SearchViewModelConstructor;

  interface SearchViewModelProperties {
    placeholder?: string;
    activeSource?: FeatureLayer | Locator;
    allPlaceholder?: string;
    autoSelect?: boolean;
    popupEnabled?: boolean;
    defaultSource?: any;
    resultGraphic?: GraphicProperties;
    maxInputLength?: number;
    maxResults?: number;
    maxSuggestions?: number;
    minSuggestCharacters?: number;
    activeSourceIndex?: number;
    popupTemplate?: PopupTemplateProperties;
    results?: any[];
    searchAllEnabled?: boolean;
    selectedResult?: any;
    popupOpenOnSelect?: boolean;
    searchTerm?: string;
    sources?: SearchViewModelSources[];
    suggestionDelay?: number;
    suggestions?: any[];
    suggestionsEnabled?: boolean;
    view?: MapView | SceneView;
  }

  interface TrackViewModel extends Accessor, Evented {
    geolocationOptions: any;
    goToLocationEnabled: boolean;
    state: string;
    tracking: boolean;
    view: MapView | SceneView;

    start(): void;
    stop(): void;
  }

  interface TrackViewModelConstructor {
    new(properties?: TrackViewModelProperties): TrackViewModel;
  }

  export const TrackViewModel: TrackViewModelConstructor;

  interface TrackViewModelProperties {
    geolocationOptions?: any;
    goToLocationEnabled?: boolean;
    state?: string;
    tracking?: boolean;
    view?: MapView | SceneView;
  }

  interface ZoomViewModel extends Accessor {
    state: string;
    view: SceneView | MapView;
    canZoomIn: boolean;
    canZoomOut: boolean;

    zoomIn(): void;
    zoomOut(): void;
  }

  interface ZoomViewModelConstructor {
    new(properties?: ZoomViewModelProperties): ZoomViewModel;
  }

  export const ZoomViewModel: ZoomViewModelConstructor;

  interface ZoomViewModelProperties {
    state?: string;
    view?: SceneView | MapView;
    canZoomIn?: boolean;
    canZoomOut?: boolean;
  }

  interface LayersMixin {
    layers: Collection;

    findLayerById(layerId: string): Layer;
    add(layers: Layer, index?: number): void;
    addMany(layers: Layer[], index?: number): void;
    remove(layer: Layer): Layer;
    removeMany(layers: Layer[]): Layer[];
    removeAll(): Layer[];
    reorder(layer: Layer, index: number): Layer;
  }

  interface LayersMixinConstructor {
    new(): LayersMixin;
  }

  export const LayersMixin: LayersMixinConstructor;

  interface LayersMixinProperties {
    layers?: Collection;
  }

  interface JSONSupporter {
    fromJSON(json: any): this;
  }

  interface JSONSupporterConstructor {
    new(): JSONSupporter;
  }

  export const JSONSupporter: JSONSupporterConstructor;

  interface Loadable {
    loadError: Error;
    loadStatus: string;

    load(): IPromise<any>;
    cancelLoad(): void;
    always(callbackOrErrback?: Function): IPromise<any>;
    then(callback?: Function, errback?: Function, progback?: Function): IPromise<any>;
    isResolved(): boolean;
    isRejected(): boolean;
    isFulfilled(): boolean;
    otherwise(errback?: Function): IPromise<any>;
  }

  interface LoadableConstructor {
    new(): Loadable;
  }

  export const Loadable: LoadableConstructor;

  interface LoadableProperties {
    loadError?: Error;
    loadStatus?: string;
  }

  interface corePromise {
    always(callbackOrErrback?: Function): IPromise<any>;
    then(callback?: Function, errback?: Function, progback?: Function): IPromise<any>;
    isResolved(): boolean;
    isRejected(): boolean;
    isFulfilled(): boolean;
    otherwise(errback?: Function): IPromise<any>;
  }

  interface corePromiseConstructor {
    new(): corePromise;
  }

  export const corePromise: corePromiseConstructor;

  interface DynamicLayer {
    getImageUrl(extent: Extent, width: number, height: number, callback: Function): string;
  }

  interface DynamicLayerConstructor {
    new(): DynamicLayer;
  }

  export const DynamicLayer: DynamicLayerConstructor;

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
    resampling: boolean;
    supportsBlankTile: boolean;
    tileInfo: TileInfo;
  }

  interface ArcGISCachedServiceConstructor {
    new(properties?: ArcGISCachedServiceProperties): ArcGISCachedService;

    fromJSON(json: any): ArcGISCachedService;
  }

  export const ArcGISCachedService: ArcGISCachedServiceConstructor;

  interface ArcGISCachedServiceProperties {
    resampling?: boolean;
    supportsBlankTile?: boolean;
    tileInfo?: TileInfoProperties;
  }

  interface ArcGISDynamicService {
    dpi: number;
    gdbVersion: string;
    imageFormat: string;
    imageTransparency: boolean;
    sublayers: ArcGISDynamicServiceSublayers[];

    findSublayerById(id: number): any;
    getExportImageParameters(options: ArcGISDynamicServiceGetExportImageParametersOptions): any;
    fromJSON(json: any): this;
  }

  interface ArcGISDynamicServiceConstructor {
    new(properties?: ArcGISDynamicServiceProperties): ArcGISDynamicService;

    fromJSON(json: any): ArcGISDynamicService;
  }

  export const ArcGISDynamicService: ArcGISDynamicServiceConstructor;

  interface ArcGISDynamicServiceProperties {
    dpi?: number;
    gdbVersion?: string;
    imageFormat?: string;
    imageTransparency?: boolean;
    sublayers?: ArcGISDynamicServiceSublayers[];
  }

  interface ArcGISImageService {
    multidimensionalInfo: any;
    compressionTolerance: number;
    definitionExpression: string;
    domainFields: Field[];
    fields: Field[];
    fullExtent: Extent;
    format: string;
    hasRasterAttributeTable: boolean;
    hasMultidimensions: boolean;
    mosaicRule: MosaicRule;
    copyright: string;
    pixelType: string;
    popupTemplate: PopupTemplate;
    rasterAttributeTable: any;
    rasterAttributeTableFieldPrefix: string;
    rasterFields: Field[];
    renderingRule: RasterFunction;
    spatialReference: SpatialReference;
    url: string;
    version: number;

    fromJSON(json: any): this;
  }

  interface ArcGISImageServiceConstructor {
    new(properties?: ArcGISImageServiceProperties): ArcGISImageService;

    fromJSON(json: any): ArcGISImageService;
  }

  export const ArcGISImageService: ArcGISImageServiceConstructor;

  interface ArcGISImageServiceProperties {
    multidimensionalInfo?: any;
    compressionTolerance?: number;
    definitionExpression?: string;
    domainFields?: Field[];
    fields?: Field[];
    fullExtent?: ExtentProperties;
    format?: string;
    hasRasterAttributeTable?: boolean;
    hasMultidimensions?: boolean;
    mosaicRule?: MosaicRuleProperties;
    copyright?: string;
    pixelType?: string;
    popupTemplate?: PopupTemplateProperties;
    rasterAttributeTable?: any;
    rasterAttributeTableFieldPrefix?: string;
    rasterFields?: Field[];
    renderingRule?: RasterFunctionProperties;
    spatialReference?: SpatialReferenceProperties;
    url?: string;
    version?: number;
  }

  interface ArcGISMapService {
    copyright: string;
    fullExtent: Extent;
    maxScale: number;
    minScale: number;
    spatialReference: SpatialReference;
    token: string;
    version: number;
  }

  interface ArcGISMapServiceConstructor {
    new(properties?: ArcGISMapServiceProperties): ArcGISMapService;

    fromJSON(json: any): ArcGISMapService;
  }

  export const ArcGISMapService: ArcGISMapServiceConstructor;

  interface ArcGISMapServiceProperties {
    copyright?: string;
    fullExtent?: ExtentProperties;
    maxScale?: number;
    minScale?: number;
    spatialReference?: SpatialReferenceProperties;
    token?: string;
    version?: number;
  }

  interface PortalLayer {
    portalItem: PortalItem;
  }

  interface PortalLayerConstructor {
    new(): PortalLayer;
  }

  export const PortalLayer: PortalLayerConstructor;

  interface PortalLayerProperties {
    portalItem?: PortalItem;
  }

  interface SpatialRelationship {
    SPATIAL_REL_INTERSECTS: void;
    SPATIAL_REL_CONTAINS: void;
    SPATIAL_REL_CROSSES: void;
    SPATIAL_REL_ENVELOPEINTERSECTS: void;
    SPATIAL_REL_INDEXINTERSECTS: void;
    SPATIAL_REL_OVERLAPS: void;
    SPATIAL_REL_TOUCHES: void;
    SPATIAL_REL_WITHIN: void;
    SPATIAL_REL_RELATION: void;
  }

  interface SpatialRelationshipConstructor {
    new(): SpatialRelationship;
  }

  export const SpatialRelationship: SpatialRelationshipConstructor;

  interface BreakpointsOwner {
    breakpoints: BreakpointsOwnerBreakpoints;
    orientation: string;
    widthBreakpoint: string;
    heightBreakpoint: string;
  }

  interface BreakpointsOwnerConstructor {
    new(): BreakpointsOwner;
  }

  export const BreakpointsOwner: BreakpointsOwnerConstructor;

  interface BreakpointsOwnerProperties {
    breakpoints?: BreakpointsOwnerBreakpoints;
    orientation?: string;
    widthBreakpoint?: string;
    heightBreakpoint?: string;
  }

  interface DOMContainer {
    size: number[];
    height: number;
    resizing: boolean;
    suspended: boolean;
    width: number;
  }

  interface DOMContainerConstructor {
    new(): DOMContainer;
  }

  export const DOMContainer: DOMContainerConstructor;

  interface DOMContainerProperties {
    size?: number[];
    height?: number;
    resizing?: boolean;
    suspended?: boolean;
    width?: number;
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

  export const request: request;

  interface lang {
    clone(elem: any): any;
  }

  export const lang: lang;

  interface urlUtils {
    urlToObject(url: string): any;
    addProxyRule(rule: urlUtilsAddProxyRuleRule): number;
    getProxyRule(url: string): any;
  }

  export const urlUtils: urlUtils;

  interface watchUtils {
    whenTrueOnce(obj: Accessor, prop: string, callback?: WatchCallback): PromisedWatchHandle;
    init(obj: Accessor, prop: string, callback: WatchCallback): WatchHandle;
    once(obj: Accessor, prop: string, callback?: WatchCallback): PromisedWatchHandle;
    when(obj: Accessor, prop: string, callback: WatchCallback): WatchHandle;
    whenOnce(obj: Accessor, prop: string, callback?: WatchCallback): PromisedWatchHandle;
    whenNot(obj: Accessor, prop: string, callback: WatchCallback): WatchHandle;
    whenNotOnce(obj: Accessor, prop: string, callback?: WatchCallback): PromisedWatchHandle;
    whenTrue(obj: Accessor, prop: string, callback: WatchCallback): WatchHandle;
    watch(obj: Accessor, prop: string, callback: WatchCallback): WatchHandle;
    whenFalse(obj: Accessor, prop: string, callback: WatchCallback): WatchHandle;
    whenFalseOnce(obj: Accessor, prop: string, callback?: WatchCallback): PromisedWatchHandle;
    whenDefined(obj: Accessor, prop: string, callback: WatchCallback): WatchHandle;
    whenDefinedOnce(obj: Accessor, prop: string, callback?: WatchCallback): PromisedWatchHandle;
    whenUndefined(obj: Accessor, prop: string, callback: WatchCallback): WatchHandle;
    whenUndefinedOnce(obj: Accessor, prop: string, callback?: WatchCallback): PromisedWatchHandle;
    pausable(obj: Accessor, prop: string, callback?: WatchCallback): PausableWatchHandle;
    on(obj: Accessor, prop: string, eventName: string, eventHandler: Function, attachedHandler?: EventAttachedCallback, detachedHandler?: EventAttachedCallback): WatchHandle;
  }

  export const watchUtils: watchUtils;

  interface geometryEngine {
    geodesicLength(geometry: Geometry, unit: string | number): number;
    buffer(geometry: Geometry | Geometry[], distance: number | number[], unit: string | number, unionResults?: boolean): Polygon | Polygon[];
    geodesicBuffer(geometry: Geometry | Geometry[], distance: number | number[], unit: string | number, unionResults?: boolean): Polygon | Polygon[];
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
    geodesicDensify(geometry: Polyline | Polygon, maxSegmentLength: number, maxSegmentLengthUnit: string | number): Geometry;
    clip(geometry: Geometry, envelope: Extent): Geometry;
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
    geodesicLength(geometry: Geometry, unit: string | number): IPromise<any>;
    buffer(geometry: Geometry | Geometry[], distance: number | number[], unit: string | number, unionResults?: boolean): IPromise<any>;
    geodesicBuffer(geometry: Geometry | Geometry[], distance: number | number[], unit: string | number, unionResults?: boolean): IPromise<any>;
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
    geodesicDensify(geometry: Polyline | Polygon, maxSegmentLength: number, maxSegmentLengthUnit: string | number): IPromise<any>;
    clip(geometry: Geometry, envelope: Extent): IPromise<any>;
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
    project(geometry: Geometry, spatialReference: SpatialReference | any): Geometry;
    lngLatToXY(long: number, lat: number): number[];
    xyToLngLat(x: number, y: number): number[];
    geographicToWebMercator(geometry: Geometry): Geometry;
    webMercatorToGeographic(geometry: Geometry): Geometry;
  }

  export const webMercatorUtils: webMercatorUtils;

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
    remove(view: SceneView, renderer: any): void;
    requestRender(view: SceneView): void;
    toRenderCoordinates(view: SceneView, srcCoordinates: number[], srcStart: number, srcSpatialReference: SpatialReference, destCoordinates: number[], destStart: number, count: number): number[];
    fromRenderCoordinates(view: SceneView, srcCoordinates: number[], srcStart: number, destCoordinates: number[], destStart: number, destSpatialReference: SpatialReference, count: number): number[];
    renderCoordinateTransformAt(view: SceneView, origin: number[], srcSpatialReference: SpatialReference, dest: number[]): number[];
  }

  export const externalRenderers: externalRenderers;
}

declare module "esri" {
  export import Text = __esri.Text;

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

  export import WatchCallback = __esri.WatchCallback;

  export import EventAttachedCallback = __esri.EventAttachedCallback;

  export import PromisedWatchHandle = __esri.PromisedWatchHandle;

  export import PopupTemplateActions = __esri.PopupTemplateActions;

  export import PopupTemplateFieldInfos = __esri.PopupTemplateFieldInfos;

  export import PopupTemplateFieldInfosFormat = __esri.PopupTemplateFieldInfosFormat;

  export import WebMapVersion = __esri.WebMapVersion;

  export import WebSceneVersion = __esri.WebSceneVersion;

  export import IdentityManagerBaseGenerateTokenOptions = __esri.IdentityManagerBaseGenerateTokenOptions;

  export import IdentityManagerBaseGetCredentialOptions = __esri.IdentityManagerBaseGetCredentialOptions;

  export import IdentityManagerBaseOAuthSignInOptions = __esri.IdentityManagerBaseOAuthSignInOptions;

  export import IdentityManagerBaseRegisterTokenProperties = __esri.IdentityManagerBaseRegisterTokenProperties;

  export import IdentityManagerBaseSetProtocolErrorHandlerHandlerFunction = __esri.IdentityManagerBaseSetProtocolErrorHandlerHandlerFunction;

  export import IdentityManagerBaseSetRedirectionHandlerHandlerFunction = __esri.IdentityManagerBaseSetRedirectionHandlerHandlerFunction;

  export import IdentityManagerBaseSignInOptions = __esri.IdentityManagerBaseSignInOptions;

  export import IdentityManagerSetOAuthRedirectionHandlerHandlerFunction = __esri.IdentityManagerSetOAuthRedirectionHandlerHandlerFunction;

  export import IdentityManagerSetOAuthRedirectionHandlerHandlerFunctionAuthorizeParams = __esri.IdentityManagerSetOAuthRedirectionHandlerHandlerFunctionAuthorizeParams;

  export import FeatureLayerElevationInfo = __esri.FeatureLayerElevationInfo;

  export import GraphicsLayerElevationInfo = __esri.GraphicsLayerElevationInfo;

  export import LayerFromArcGISServerUrlParams = __esri.LayerFromArcGISServerUrlParams;

  export import LayerFromPortalItemParams = __esri.LayerFromPortalItemParams;

  export import SceneLayerVersion = __esri.SceneLayerVersion;

  export import CodedValueDomainCodedValues = __esri.CodedValueDomainCodedValues;

  export import LabelClassLabelExpressionInfo = __esri.LabelClassLabelExpressionInfo;

  export import LabelClassSizeInfo = __esri.LabelClassSizeInfo;

  export import PixelBlockAddDataPlaneData = __esri.PixelBlockAddDataPlaneData;

  export import PixelBlockStatistics = __esri.PixelBlockStatistics;

  export import PortalFeaturedGroups = __esri.PortalFeaturedGroups;

  export import PortalItemFetchRelatedItemsParams = __esri.PortalItemFetchRelatedItemsParams;

  export import PortalItemUpdateParams = __esri.PortalItemUpdateParams;

  export import PortalUserAddItemParams = __esri.PortalUserAddItemParams;

  export import PortalUserFetchItemsParams = __esri.PortalUserFetchItemsParams;

  export import ClassBreaksRendererClassBreakInfos = __esri.ClassBreaksRendererClassBreakInfos;

  export import UniqueValueRendererUniqueValueInfos = __esri.UniqueValueRendererUniqueValueInfos;

  export import FillSymbol3DLayerOutline = __esri.FillSymbol3DLayerOutline;

  export import IconSymbol3DLayerOutline = __esri.IconSymbol3DLayerOutline;

  export import IconSymbol3DLayerResource = __esri.IconSymbol3DLayerResource;

  export import ObjectSymbol3DLayerResource = __esri.ObjectSymbol3DLayerResource;

  export import TextSymbol3DLayerFont = __esri.TextSymbol3DLayerFont;

  export import GeometryServiceFromGeoCoordinateStringParams = __esri.GeometryServiceFromGeoCoordinateStringParams;

  export import GeometryServiceToGeoCoordinateStringParams = __esri.GeometryServiceToGeoCoordinateStringParams;

  export import LocatorAddressToLocationsParams = __esri.LocatorAddressToLocationsParams;

  export import LocatorAddressesToLocationsParams = __esri.LocatorAddressesToLocationsParams;

  export import LocatorSuggestLocationsParams = __esri.LocatorSuggestLocationsParams;

  export import ClosestFacilityParametersAttributeParameterValues = __esri.ClosestFacilityParametersAttributeParameterValues;

  export import ProjectParametersTransformation = __esri.ProjectParametersTransformation;

  export import QueryQuantizationParameters = __esri.QueryQuantizationParameters;

  export import MapViewConstraints = __esri.MapViewConstraints;

  export import MapViewGoToOptions = __esri.MapViewGoToOptions;

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

  export import LegendLayerInfos = __esri.LegendLayerInfos;

  export import PopupActions = __esri.PopupActions;

  export import PopupDockOptions = __esri.PopupDockOptions;

  export import PopupOpenOptions = __esri.PopupOpenOptions;

  export import SearchSources = __esri.SearchSources;

  export import PopupViewModelActions = __esri.PopupViewModelActions;

  export import SearchViewModelSources = __esri.SearchViewModelSources;

  export import ArcGISDynamicServiceGetExportImageParametersOptions = __esri.ArcGISDynamicServiceGetExportImageParametersOptions;

  export import ArcGISDynamicServiceSublayersProperties = __esri.ArcGISDynamicServiceSublayersProperties;
  export import ArcGISDynamicServiceSublayers = __esri.ArcGISDynamicServiceSublayers;

  export import BreakpointsOwnerBreakpoints = __esri.BreakpointsOwnerBreakpoints;

  export import configRequest = __esri.configRequest;

  export import configRequestProxyRules = __esri.configRequestProxyRules;

  export import requestEsriRequestOptions = __esri.requestEsriRequestOptions;

  export import urlUtilsAddProxyRuleRule = __esri.urlUtilsAddProxyRuleRule;
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

declare module "esri/layers/Layer" {
  import Layer = __esri.Layer;
  export = Layer;
}

declare module "esri/layers/OpenStreetMapLayer" {
  import OpenStreetMapLayer = __esri.OpenStreetMapLayer;
  export = OpenStreetMapLayer;
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

declare module "esri/widgets/Compass" {
  import Compass = __esri.Compass;
  export = Compass;
}

declare module "esri/widgets/Home" {
  import Home = __esri.Home;
  export = Home;
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

declare module "esri/widgets/Search" {
  import Search = __esri.Search;
  export = Search;
}

declare module "esri/widgets/Track" {
  import Track = __esri.Track;
  export = Track;
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

declare module "esri/widgets/Locate/LocateViewModel" {
  import LocateViewModel = __esri.LocateViewModel;
  export = LocateViewModel;
}

declare module "esri/widgets/NavigationToggle/NavigationToggleViewModel" {
  import NavigationToggleViewModel = __esri.NavigationToggleViewModel;
  export = NavigationToggleViewModel;
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

declare module "esri/LayersMixin" {
  import LayersMixin = __esri.LayersMixin;
  export = LayersMixin;
}

declare module "esri/core/JSONSupporter" {
  import JSONSupporter = __esri.JSONSupporter;
  export = JSONSupporter;
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

declare module "esri/layers/mixins/ArcGISDynamicService" {
  import ArcGISDynamicService = __esri.ArcGISDynamicService;
  export = ArcGISDynamicService;
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

declare module "esri/tasks/support/SpatialRelationship" {
  import SpatialRelationship = __esri.SpatialRelationship;
  export = SpatialRelationship;
}

declare module "esri/views/BreakpointsOwner" {
  import BreakpointsOwner = __esri.BreakpointsOwner;
  export = BreakpointsOwner;
}

declare module "esri/views/DOMContainer" {
  import DOMContainer = __esri.DOMContainer;
  export = DOMContainer;
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
  export = request.esriRequest;
}

declare module "esri/core/lang" {
  import lang = __esri.lang;
  export = lang;
}

declare module "esri/core/urlUtils" {
  import urlUtils = __esri.urlUtils;
  export = urlUtils;
}

declare module "esri/core/watchUtils" {
  import watchUtils = __esri.watchUtils;
  export = watchUtils;
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
