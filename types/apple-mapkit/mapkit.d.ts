import type * as GeoJSONTypes from "geojson";

/**
 * Base class supporting {@link LookAround} and LookAroundPreview.
 *
 * @categoryDescription SPI
 * These are only exposed when `spi-look-around` is loaded.
 *
 * @public
 */
declare abstract class AbstractLookAround extends EventTarget {
    #private;

    /**
     * @ignore
     *
     * @param parent The containing DOM element.
     * @param location The starting point of the look around. Set it to `null` or `undefined` to initialize the view without specifying an scene.
     * @param options Look around options
     */
    constructor(
        parent?: HTMLElement,
        location?: null | Coordinate | Place | LookAroundScene,
        options?: CommonLookAroundOptions
    );
    /**
     * Ready States
     *   * `loading`: the view is loading the requested look around imagery.
     *   * `complete`: the view has loaded completed.
     *   * `error`: the view encountered a recoverable error, either because of an invalid location or the loading has failed.
     *   * `destroyed`: the view was destroyed, either manually or because an unrecoverable error was encountered.
     */
    static ReadyStates: typeof LookAroundReadyState;

    /**
     * Containing DOM element of the view.
     */
    get element(): HTMLDivElement;

    /**
     * The current look around scene.
     */
    get scene(): LookAroundScene | null;
    set scene(value: LookAroundScene);
    /**
     * The state of the modal, full screen dialog.
     * Set it to `true` to expand the look around view.
     */
    get openDialog(): boolean;
    set openDialog(value: boolean);
    /**
     * Current ready state.
     */
    get readyState(): LookAroundReadyState;
    /**
     * Enables navigation.
     */
    get isNavigationEnabled(): boolean;
    set isNavigationEnabled(value: boolean);
    /**
     * Determines whether the user is allowed to zoom the view.
     */
    get isZoomEnabled(): boolean;
    set isZoomEnabled(value: boolean);
    /**
     * Determines whether the user is allowed to pan the view.
     */
    get isScrollEnabled(): boolean;
    set isScrollEnabled(value: boolean);

    /**
     * Determines whether to show the road labels.
     */
    get showsRoadLabels(): boolean;
    set showsRoadLabels(value: boolean);

    /**
     * Determines whether to show the point of interest labels.
     */
    get showsPointsOfInterest(): boolean;
    set showsPointsOfInterest(value: boolean);

    /**
     * The view's inset margins.
     *
     * @privateRemarks
     *
     * Internal component should access `#adjustedPadding` which
     * considers the current view size and negative values user sets.
     */
    get padding(): Padding;
    set padding(value: Padding);
    /**
     * Destroy the view.
     *
     * @privateRemarks This method is can be called again and it will attempt
     * to destroy owning objects again while skipping the ones that are already
     * destroyed.
     * We are doing this for external callers, and also for ourselves
     * when we are in the middle of initializing munin LookAroundView.
     */
    destroy(): void;
}

/**
 * The categories of address components that users can search for with an address filter.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.addresscategory Read more.}
 * @public
 * @enum
 */
export declare const AddressCategory: Readonly<{
    /**
     * Countries and regions.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.addresscategory/country Read more.}
     * @public
     */
    readonly Country: "Country";
    /**
     * The primary administrative divisions of countries or regions.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.addresscategory/administrativearea Read more.}
     * @public
     */
    readonly AdministrativeArea: "AdministrativeArea";
    /**
     * The secondary administrative divisions of countries or regions.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.addresscategory/subadministrativearea Read more.}
     * @public
     */
    readonly SubAdministrativeArea: "SubAdministrativeArea";
    /**
     * Local administrative divisions, postal cities, and populated places.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.addresscategory/locality Read more.}
     * @public
     */
    readonly Locality: "Locality";
    /**
     * Local administrative subdivisions, postal city subdistricts, and neighborhoods.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.addresscategory/sublocality Read more.}
     * @public
     */
    readonly SubLocality: "SubLocality";
    /**
     * An address code for mail sorting and delivery.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.addresscategory/postalcode Read more.}
     * @public
     */
    readonly PostalCode: "PostalCode";
}>;

/**
 * The categories of address components that users can search for with an address filter.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.addresscategory Read more.}
 * @public
 */
export declare type AddressCategory = Enum.Values<typeof AddressCategory>;

/**
 * An object that filters which address options to include or exclude in search results.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.addressfilter Read more.}
 * @public
 */
export declare class AddressFilter {
    constructor(options: AddressFilterOptions);
    /**
     * A Boolean value that indicates whether to include a category from a search.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.addressfilter/includescategory Read more.}
     * @public
     */
    includesCategory(category: AddressCategory): boolean | undefined;
    /**
     * A Boolean value that indicates whether to exclude a category from a search.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.addressfilter/excludescategory Read more.}
     * @public
     */
    excludesCategory(category: AddressCategory): boolean | undefined;
    /**
     * A value that excludes all address categories.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.addressfilter/excludingallcategories Read more.}
     * @public
     */
    static excludingAllCategories: () => AddressFilter;
    /**
     * A value that includes all address categories.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.addressfilter/includingallcategories Read more.}
     * @public
     */
    static includingAllCategories: () => AddressFilter;
    /**
     * A list of categories to include in a search.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.addressfilter/including Read more.}
     * @public
     */
    static including(categories: AddressCategory[]): AddressFilter;
    /**
     * A list of categories to exclude from a search.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.addressfilter/excluding Read more.}
     * @public
     */
    static excluding(categories: AddressCategory[]): AddressFilter;
}

/**
 * @public
 */
declare interface AddressFilterOptions {
    includes?: AddressCategory[];
    excludes?: AddressCategory[];
}

/**
 * The base annotation object for creating custom annotations.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation Read more.}
 * @public
 */
export declare class Annotation extends MapKitEventTarget {
    /**
     * Creates a new annotation given its location and initialization options.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/mapkit.annotation Read more.}
     * @param location The coordinate where the annotation appears.
     * @param factory A factory function that returns a DOM element that represents the annotation.
     * @param options A hash of properties MapKit JS uses to initialize the annotation.
     * @public
     */
    constructor(
        coordinate: Coordinate | Place | SearchAutocompleteResult,
        factory: (
            coordinate?: Coordinate,
            options?: AnnotationConstructorOptions
        ) => HTMLElement,
        options?: AnnotationConstructorOptions
    );

    /**
     * @public
     */
    static DisplayPriority: typeof DisplayPriority;
    /**
     * @public
     */
    static CollisionMode: typeof CollisionMode;
    /**
     * The map that the framework adds the annotation to.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/map Read more.}
     * @public
     */
    get map(): Map | null;
    set map(_: Map | null);
    /**
     * The annotation's element in the DOM.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/element Read more.}
     * @public
     */
    get element(): HTMLElement;
    set element(_: HTMLElement);
    /**
     * The annotation's coordinate.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/coordinate Read more.}
     * @public
     */
    get coordinate(): Coordinate;
    set coordinate(value: Coordinate);
    get id(): string | undefined;
    /**
     * A Boolean value that determines whether the annotation is visible or hidden.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/visible Read more.}
     * @public
     */
    get visible(): boolean;
    set visible(value: boolean);
    /**
     * A CSS animation that runs when the annotation appears on the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/appearanceanimation Read more.}
     * @public
     */
    get appearanceAnimation(): string;
    set appearanceAnimation(appearanceAnimation: string);
    /**
     * The text to display in the annotation's callout.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/title Read more.}
     * @public
     */
    get title(): string | undefined;
    set title(value: string | undefined);
    /**
     * The text to display as a subtitle on the second line of an annotation's callout.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/subtitle Read more.}
     * @public
     */
    get subtitle(): string | undefined;
    set subtitle(value: string | undefined);
    /**
     * Accessibility text for the annotation.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/accessibilitylabel Read more.}
     * @public
     */
    get accessibilityLabel(): string | null | undefined;
    set accessibilityLabel(value: string | null | undefined);
    /**
     * Data that you define that's specific to an annotation.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/data Read more.}
     * @public
     */
    get data(): {};
    set data(data: {});
    /**
     * A Boolean value that determines whether the annotation responds to user interaction.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/enabled Read more.}
     * @public
     */
    get enabled(): boolean;
    set enabled(value: boolean);
    /**
     * A Boolean value that determines whether the map shows an annotation's callout.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/calloutenabled Read more.}
     * @public
     */
    get calloutEnabled(): boolean;
    set calloutEnabled(value: boolean);
    /**
     * An accessory that displays place information when a person selects a place.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/selectionaccessory Read more.}
     * @public
     */
    get selectionAccessory(): PlaceSelectionAccessory | null;
    set selectionAccessory(value: PlaceSelectionAccessory | null);
    /**
     * An offset that changes the selection accessory's default anchor point.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/selectionaccessoryoffset Read more.}
     * @public
     */
    get selectionAccessoryOffset(): DOMPoint | undefined;
    set selectionAccessoryOffset(value: DOMPoint | undefined);
    /**
     * A Boolean value that indicates whether the map shows the annotation in a selected state.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/selected Read more.}
     * @public
     */
    get selected(): boolean;
    set selected(value: boolean);
    /**
     * A Boolean value that determines whether the framework animates the annotation.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/animates Read more.}
     * @public
     */
    get animates(): boolean;
    set animates(value: boolean);
    /**
     * An offset that changes the annotation's default anchor point.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/anchoroffset Read more.}
     * @public
     */
    get anchorOffset(): DOMPoint;
    set anchorOffset(value: DOMPoint);
    /**
     * An offset that changes the annotation callout's default placement.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/calloutoffset Read more.}
     * @public
     */
    get calloutOffset(): DOMPoint | undefined;
    set calloutOffset(value: DOMPoint | undefined);
    /**
     * A delegate that enables you to customize the annotation's callout.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/callout Read more.}
     * @public
     */
    get callout(): AnnotationCalloutDelegate | null;
    set callout(callout: AnnotationCalloutDelegate | null);
    /**
     * A Boolean value that determines whether the user can drag the annotation.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/draggable Read more.}
     * @public
     */
    get draggable(): boolean;
    set draggable(value: boolean);
    /**
     * The desired dimensions of the annotation, in CSS pixels.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/size Read more.}
     * @public
     */
    get size(): Size_2 | undefined;
    set size(value: Size_2);
    /**
     * A numeric hint that the map uses to prioritize how it displays annotations.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/displaypriority Read more.}
     * @public
     */
    get displayPriority(): number;
    set displayPriority(value: number);
    /**
     * A mode that determines the shape of the collision frame.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/collisionmode Read more.}
     * @public
     */
    get collisionMode(): CollisionMode;
    set collisionMode(value: CollisionMode);
    /**
     * An identifier for grouping annotations into the same cluster.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/clusteringidentifier Read more.}
     * @public
     */
    get clusteringIdentifier(): string | null;
    set clusteringIdentifier(value: string | null);
    /**
     * Spacing to add around the annotation when showing items.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/padding Read more.}
     * @public
     */
    get padding(): Padding;
    set padding(value: Padding);
    /**
     * An array of annotations that the framework groups together in a cluster.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.annotation/memberannotations Read more.}
     * @public
     */
    get memberAnnotations(): Annotation[] | undefined;
}

/**
 * Methods for customizing the behavior and appearance of an annotation callout.
 * {@link https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate Read more.}
 * @public
 */
declare interface AnnotationCalloutDelegate {
    /**
     * Returns a point determining the callout's anchor offset.
     * {@link https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutanchoroffsetforannotation Read more.}
     * @param annotation The annotation for the callout.
     * @param size The width and height of the callout element, which MapKit JS determines.
     * @public
     */
    calloutAnchorOffsetForAnnotation?(
        annotation: Annotation,
        size: Size_2
    ): DOMPoint;
    /**
     * Determines whether the callout appears for an annotation.
     * {@link https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutshouldappearforannotation Read more.}
     * @param annotation The annotation for the callout.
     * @public
     */
    calloutShouldAppearForAnnotation?(annotation: Annotation): boolean;
    /**
     * Determines whether the callout animates.
     * {@link https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutshouldanimateforannotation Read more.}
     * @param annotation The annotation for the callout.
     * @public
     */
    calloutShouldAnimateForAnnotation?(annotation: Annotation): boolean;
    /**
     * Returns a CSS animation to use when the callout appears.
     * {@link https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutappearanceanimationforannotation Read more.}
     * @param annotation The annotation for the callout.
     * @public
     */
    calloutAppearanceAnimationForAnnotation?(annotation: Annotation): string;
    /**
     * Returns custom content for the callout bubble.
     * {@link https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutcontentforannotation Read more.}
     * @param annotation The annotation for the callout.
     * @public
     */
    calloutContentForAnnotation?(annotation: Annotation): HTMLElement;
    /**
     * Returns an element representing a custom callout.
     * {@link https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutelementforannotation Read more.}
     * @param annotation The annotation for the callout.
     * @public
     */
    calloutElementForAnnotation?(annotation: Annotation): HTMLElement;
    /**
     * Returns an element to use as a custom accessory on the left side of the callout content area.
     * {@link https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutleftaccessoryforannotation Read more.}
     * @param annotation The annotation for the callout.
     * @public
     */
    calloutLeftAccessoryForAnnotation?(annotation: Annotation): HTMLElement;
    /**
     * Returns an element to use as a custom accessory on the right side of the callout content area.
     * {@link https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutrightaccessoryforannotation Read more.}
     * @param annotation The annotation for the callout.
     * @public
     */
    calloutRightAccessoryForAnnotation?(annotation: Annotation): HTMLElement;
}

/**
 * An object that contains options for creating annotation features.
 * {@link https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions Read more.}
 * @public
 */
declare interface AnnotationConstructorOptions {
    element?: HTMLElement;
    map?: Map;
    coordinate?: Coordinate;
    /**
     * A Place ID that uniquely identifies a feature.
     * @public
     */
    id?: string;
    /**
     * An object that allows a custom annotation to potentially supersede a point of interest at the same map coordinates.
     * @public
     */
    place?: Place | SearchAutocompleteResult;
    /**
     * The text to display in the annotation's callout.
     * @public
     */
    title?: string;
    /**
     * The text to display as a subtitle on the second line of an annotation's callout.
     * @public
     */
    subtitle?: string;
    /**
     * Data that you define and assign to the annotation.
     * @public
     */
    data?: object;
    /**
     * Accessibility text for the annotation.
     * @public
     */
    accessibilityLabel?: string;
    /**
     * The offset, in CSS pixels, of the element from the bottom center.
     * @public
     */
    anchorOffset?: DOMPoint;
    /**
     * The offset, in CSS pixels, of a callout from the top center of the element.
     * @public
     */
    calloutOffset?: DOMPoint;
    /**
     * The desired dimensions of the annotation, in CSS pixels.
     * @public
     */
    size?: Size_2;
    /**
     * A delegate that enables you to customize the annotation's callout.
     * @public
     */
    callout?: AnnotationCalloutDelegate | null;
    selectionAccessory?: PlaceSelectionAccessory | null;
    selectionAccessoryOffset?: DOMPoint;
    /**
     * A Boolean value that determines whether the annotation is visible or hidden.
     * @public
     */
    visible?: boolean;
    /**
     * A Boolean value that determines whether the annotation responds to user interaction.
     * @public
     */
    enabled?: boolean;
    /**
     * A Boolean value that determines whether the map displays the annotation in a selected state.
     * @public
     */
    selected?: boolean;
    /**
     * A Boolean value that determines whether the map shows a callout.
     * @public
     */
    calloutEnabled?: boolean;
    /**
     * A Boolean value that determines whether the map animates the annotation.
     * @public
     */
    animates?: boolean;
    /**
     * A CSS animation that runs when the annotation appears on the map.
     * @public
     */
    appearanceAnimation?: string;
    /**
     * A mode that determines the shape of the collision frame.
     * @public
     */
    collisionMode?: string;
    /**
     * Spacing to add around the annotation when showing items.
     * @public
     */
    padding?: Padding;
    /**
     * A Boolean value that determines whether the user can drag the annotation.
     * @public
     */
    draggable?: boolean;
    /**
     * A hint the map uses to prioritize displaying the annotation.
     * @public
     */
    displayPriority?: number;
    /**
     * An identifier for grouping annotations into the same cluster.
     * @public
     */
    clusteringIdentifier?: string | null;
}

/**
 * A rectangular area on a map, which coordinates of the rectangle's northeast and southwest corners define.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.boundingregion Read more.}
 * @public
 */
export declare class BoundingRegion {
    /**
     * The north latitude of the bounding region.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.boundingregion/northlatitude Read more.}
     * @public
     */
    northLatitude: number;
    /**
     * The east longitude of the bounding region.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.boundingregion/eastlongitude Read more.}
     * @public
     */
    eastLongitude: number;
    /**
     * The south latitude of the bounding region.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.boundingregion/southlatitude Read more.}
     * @public
     */
    southLatitude: number;
    /**
     * The west longitude of the bounding region.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.boundingregion/westlongitude Read more.}
     * @public
     */
    westLongitude: number;
    /**
     * Creates a rectangular bounding region, which the latitude and longitude coordinates of the rectangle's northeast and southwest corners define.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.boundingregion/mapkit.boundingregion Read more.}
     * @param northLatitude The north latitude of the bounding region.
     * @param eastLongitude The east longitude of the bounding region.
     * @param southLatitude The south latitude of the bounding region.
     * @param westLongitude The west longitude of the bounding region.
     * @public
     */
    constructor(
        northLatitude?: number,
        eastLongitude?: number,
        southLatitude?: number,
        westLongitude?: number
    );
    /**
     * Returns a copy of the calling bounding region.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.boundingregion/copy Read more.}
     * @returns A {@link BoundingRegion} that is a copy of the calling bounding region.
     * @public
     */
    copy(): BoundingRegion;
    toString(): string;
    /**
     * Returns the coordinate region that corresponds to the calling bounding region.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.boundingregion/tocoordinateregion Read more.}
     * @returns A {@link CoordinateRegion} that corresponds to the calling {@link BoundingRegion}.
     * @public
     */
    toCoordinateRegion(): CoordinateRegion;
}

/**
 * An object literal containing at least one property defining an area on the map.
 * The `CameraBoundaryDescription` can contain the `mapRect` or `region` properties, or both. Both properties describe a rectangular area on the map.
 * {@link https://developer.apple.com/documentation/mapkitjs/cameraboundarydescription Read more.}
 * @public
 */
declare interface CameraBoundaryDescription {
    /**
     * A rectangular area on a map, defined by coordinates of the rectangle's northeast and southwest corners.
     * @public
     */
    region: CoordinateRegion;
    /**
     * A rectangular area on a two-dimensional map projection.
     * @public
     */
    mapRect: MapRect;
}

/**
 * A minimum and maximum camera distance, in meters, from the center of the map.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.camerazoomrange Read more.}
 * @public
 */
export declare class CameraZoomRange {
    /**
     * Describes the minimum and maximum camera distance in meters.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.camerazoomrange/mapkit.camerazoomrange Read more.}
     * @public
     */
    constructor();
    /**
     * Describes the minimum and maximum camera distance in meters.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.camerazoomrange/mapkit.camerazoomrange Read more.}
     * @public
     */
    constructor(rangeParams: CameraZoomRangeConstructorOptions);
    /**
     * Describes the minimum and maximum camera distance in meters.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.camerazoomrange/mapkit.camerazoomrange Read more.}
     * @public
     */
    constructor(min: number, max: number);
    /**
     * The minimum allowed distance of the camera from the center of the map in meters.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.camerazoomrange/mincameradistance Read more.}
     * @public
     */
    get minCameraDistance(): number;
    /**
     * The maximum allowed distance of the camera from the center of the map in meters.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.camerazoomrange/maxcameradistance Read more.}
     * @public
     */
    get maxCameraDistance(): number;
    copy(): CameraZoomRange;
}

/**
 * Initialization options for the camera zoom range.
 * {@link https://developer.apple.com/documentation/mapkitjs/camerazoomrangeconstructoroptions Read more.}
 * @public
 */
declare interface CameraZoomRangeConstructorOptions {
    /**
     * The minimum allowed distance of the camera from the center of the map in meters.
     * @public
     */
    minCameraDistance?: number;
    /**
     * The maximum allowed distance of the camera from the center of the map in meters.
     * @public
     */
    maxCameraDistance?: number;
}

/**
 * A circular overlay with a configurable radius that centers on a specific geographic coordinate.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.circleoverlay Read more.}
 * @public
 */
export declare class CircleOverlay extends Overlay {
    /**
     * Creates a circle overlay with a center coordinate, radius, and style options.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.circleoverlay/mapkit.circleoverlay Read more.}
     * @param coordinate The required coordinate of the circle's center.
     * @param radius The circle's required radius, in meters.
     * @param options An optional object literal of overlay properties for initializing the circle.
     * @public
     */
    constructor(
        coordinate: Coordinate,
        radius: number,
        options: OverlayOptions
    );
    /**
     * The coordinate of the circle overlay's center.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.circleoverlay/coordinate Read more.}
     * @public
     */
    get coordinate(): Coordinate;
    set coordinate(coordinate: Coordinate);
    /**
     * The circle overlay's radius, in meters.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.circleoverlay/radius Read more.}
     * @public
     */
    get radius(): number;
    set radius(radius: number);
}

/**
 * @public
 */
declare class ClusterAnnotation extends MarkerAnnotation {
    get memberAnnotations(): Annotation[];
}

/**
 * @enum
 * @public
 */
declare const CollisionMode: Readonly<{
    readonly Rectangle: "rectangle";
    readonly Circle: "circle";
    readonly None: "none";
}>;

/**
 * @public
 */
declare type CollisionMode = Enum.Values<typeof CollisionMode>;

/**
 * @enum
 * @public
 */
declare const ColorScheme: Readonly<{
    readonly Dark: "dark";
    readonly Light: "light";
    readonly Adaptive: "adaptive";
}>;

/**
 * @public
 */
declare type ColorScheme = Enum.Values<typeof ColorScheme>;

/**
 * Options shared between {@link LookAround} and {@link LookAroundPreview} constructors.
 *
 * @public
 *
 * @categoryDescription SPI
 * These are only exposed when `spi-look-around` is loaded.
 */
declare interface CommonLookAroundOptions {
    /**
     * The view's inset margins.
     */
    padding?: Padding;
    /**
     * Enables navigation.
     */
    isNavigationEnabled?: boolean;
    /**
     * Determines whether the user is allowed to zoom the view.
     */
    isZoomEnabled?: boolean;
    /**
     * Determines whether the user is allowed to pan the view.
     */
    isScrollEnabled?: boolean;
    /**
     * Determines whether to show the road labels.
     */
    showsRoadLabels?: boolean;

    /**
     * Determines whether to show the point of interest labels.
     */
    showsPointsOfInterest?: boolean;
    /**
     * The state of the modal, full screen dialog.
     * Set it to `true` to start the look around view in dialog.
     */
    openDialog?: boolean;
}

/**
 * An object representing the latitude and longitude for a point on the Earth's surface.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.coordinate Read more.}
 * @public
 */
export declare class Coordinate {
    /**
     * The latitude, in degrees.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.coordinate/latitude Read more.}
     * @public
     */
    latitude: number;
    /**
     * The longitude, in degrees.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.coordinate/longitude Read more.}
     * @public
     */
    longitude: number;
    /**
     * Creates a coordinate object with the specified latitude and longitude.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.coordinate/mapkit.coordinate Read more.}
     * @param latitude The latitude in degrees.
     * @param longitude The longitude in degrees.
     * @public
     */
    constructor(latitude?: number, longitude?: number);
    /**
     * Returns a copy of the coordinate.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.coordinate/copy Read more.}
     * @returns A copy of the coordinate.
     * @public
     */
    copy(): Coordinate;
    /**
     * Returns a Boolean value indicating whether two coordinates are equal.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.coordinate/equals Read more.}
     * @param anotherCoordinate The coordinate to compare.
     * @public
     */
    equals(anotherCoordinate: Coordinate): boolean;
    /**
     * Returns the map point that corresponds to the coordinate.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.coordinate/tomappoint Read more.}
     * @returns The map point value that corresponds to the coordinate on a two-dimensional map projection.
     * @public
     */
    toMapPoint(): MapPoint;
    /**
     * Returns the unwrapped map point that corresponds to the coordinate.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.coordinate/tounwrappedmappoint Read more.}
     * @returns The unwrapped map point value that corresponds to the coordinate on a two-dimensional map projection.
     * @public
     */
    toUnwrappedMapPoint(): MapPoint;
    toString(): string;
}

/**
 * A rectangular area on a map that a center coordinate and a span define, in degrees of latitude and longitude.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.coordinateregion Read more.}
 * @public
 */
export declare class CoordinateRegion {
    /**
     * The center point of the region.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.coordinateregion/center Read more.}
     * @public
     */
    center: Coordinate;
    /**
     * The horizontal and vertical span representing the amount of map to display.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.coordinateregion/span Read more.}
     * @public
     */
    span: CoordinateSpan;
    /**
     * A rectangular geographic region that centers around a latitude and longitude coordinate.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.coordinateregion/mapkit.coordinateregion Read more.}
     * @param center A {@link Coordinate} that's the center point of the region.
     * @param span A {@link CoordinateSpan} that represents the amount of map to display. The span also defines the current zoom level that the map object uses.
     * @public
     */
    constructor(center?: Coordinate, span?: CoordinateSpan);
    /**
     * Returns a copy of the calling coordinate region.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.coordinateregion/copy Read more.}
     * @returns A {@link CoordinateRegion} that is a copy of the calling coordinate region.
     * @public
     */
    copy(): CoordinateRegion;
    toString(): string;
    /**
     * Returns a Boolean value indicating whether two regions are equal.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.coordinateregion/equals Read more.}
     * @param anotherRegion The region to compare.
     * @public
     */
    equals(anotherRegion: CoordinateRegion): boolean;
    /**
     * Returns the bounding region that corresponds to the specified coordinate region.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.coordinateregion/toboundingregion Read more.}
     * @returns A {@link BoundingRegion}.
     * @public
     */
    toBoundingRegion(): BoundingRegion;
    /**
     * Returns the map rectangle that corresponds to the calling coordinate region.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.coordinateregion/tomaprect Read more.}
     * @returns A {@link MapRect} that corresponds to the calling {@link CoordinateRegion}.
     * @public
     */
    toMapRect(): MapRect;
    /**
     * The distance provided in meters or the longest distance derived from the center point to the region's bounding box.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.coordinateregion/radius Read more.}
     * @public
     */
    get radius(): number;
}

/**
 * The width and height of a map region.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.coordinatespan Read more.}
 * @public
 */
export declare class CoordinateSpan {
    /**
     * The amount of north-to-south distance (in degrees) to display for the map region.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.coordinatespan/latitudedelta Read more.}
     * @public
     */
    latitudeDelta: number;
    /**
     * The amount of east-to-west distance (in degrees) to display for the map region.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.coordinatespan/longitudedelta Read more.}
     * @public
     */
    longitudeDelta: number;
    /**
     * Creates a new coordinate span object with the specified latitude and longitude deltas.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.coordinatespan/mapkit.coordinatespan Read more.}
     * @param latitudeDelta The amount of north-to-south distance (in degrees) to display for the map region. Unlike longitudinal distances, which vary based on the latitude, one degree of latitude is always approximately 111 km (69 mi.).
     * @param longitudeDelta The amount of east-to-west distance (in degrees) to display for the map region. The number of kilometers (or miles) that a longitude range spans varies based on the latitude. For example, one degree of longitude spans a distance of approximately 111 km (69 miles mi.) at the equator, approximately 88 km (or 55mi.) at 37º north latitude (the latitude of San Francisco), and shrinks to 0 km (0 mi.) at the poles.
     * @public
     */
    constructor(latitudeDelta?: number, longitudeDelta?: number);
    /**
     * Returns a copy of the coordinate span.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.coordinatespan/copy Read more.}
     * @returns A copy of the coordinate span.
     * @public
     */
    copy(): CoordinateSpan;
    /**
     * Returns a Boolean value that indicates whether two spans are equal.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.coordinatespan/equals Read more.}
     * @param anotherSpan The span to compare.
     * @public
     */
    equals(anotherSpan: CoordinateSpan): boolean;
    toString(): string;
}

/**
 * An object that provides directions and estimated travel time based on the options you provide.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.directions Read more.}
 * @public
 */
export declare class Directions extends Service {
    /**
     * Creates a directions object with options you provide.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.directions/mapkit.directions Read more.}
     * @param options An object containing the options for creating a directions object. This parameter is optional.
     * @public
     */
    constructor(options?: DirectionsConstructorOptions);
    /**
     * Retrieves estimated arrival times to up to 10 destinations from a single starting point.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.directions/eta Read more.}
     * @param request An {@link EtaRequestOptions} object that specifies details for the server to provide estimated arrival times at one or more destinations.
     * @public
     */
    eta(
        request: EtaRequestOptions,
        callback: (error: Error | null, result?: EtaResponse) => void
    ): number | undefined;
    /**
     * Retrieves directions and estimated travel time based on the specified start and end points.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.directions/route Read more.}
     * @param request A {@link DirectionsRequest} object that specifies details for the directions you want to retrieve.
     * @param callback A callback function that receives the directions, returned asynchronously.
     * @public
     */
    route(
        request: DirectionsRequest,
        callback: (error: Error | null, result?: DirectionsResponse) => void
    ): number;
    static Transport: typeof TransportType;
}

/**
 * Options that you may provide when creating a directions object.
 *
 * Use `DirectionsConstructorOptions` to set options when creating a `mapkit.Directions/mapkit.Directions` object.
 * {@link https://developer.apple.com/documentation/mapkitjs/directionsconstructoroptions Read more.}
 * @public
 */
declare interface DirectionsConstructorOptions {
    /**
     * A language ID that determines the language for route information.
     * @public
     */
    language?: string;
}

/**
 * The requested start and end points for a route, as well as the planned mode of transportation.
 * {@link https://developer.apple.com/documentation/mapkitjs/directionsrequest Read more.}
 * @public
 */
declare interface DirectionsRequest {
    /**
     * The starting point for routing directions.
     * @public
     */
    origin: string | Coordinate | Place;
    /**
     * The end point for routing directions.
     * @public
     */
    destination: string | Coordinate | Place;
    /**
     * The mode of transportation the directions apply to.
     * @public
     */
    transportType?: TransportType;
    /**
     * The departure date for the trip.
     * @public
     */
    departureDate?: Date;
    /**
     * The arrival date for the trip.
     * @public
     */
    arrivalDate?: Date;
    /**
     * A Boolean value that prioritizes routes to avoid tolls.
     * @public
     */
    avoidTolls?: boolean;
    /**
     * A Boolean value that indicates whether the server returns multiple routes when they're available.
     * @public
     */
    requestsAlternateRoutes?: boolean;
}

/**
 * The directions and estimated travel time that return for a route.
 * {@link https://developer.apple.com/documentation/mapkitjs/directionsresponse Read more.}
 * @public
 */
declare interface DirectionsResponse {
    /**
     * The request object associated with the direction's response.
     * @public
     */
    request: object;
    /**
     * An optional starting point for routing directions.
     * @public
     */
    origin?: Coordinate | Place;
    /**
     * An optional end point for routing directions.
     * @public
     */
    destination?: Coordinate | Place;
    /**
     * An array of route objects.
     * @public
     */
    routes: Route[];
}

/**
 * @public
 */
declare const DisplayPriority: Readonly<{
    readonly Low: 250;
    readonly High: 750;
    readonly Required: 1000;
}>;

/**
 * @enum
 * @public
 */
declare type DisplayPriority = Enum.Values<typeof DisplayPriority>;

/**
 * @enum
 * @public
 */
declare const Distances: Readonly<{
    readonly Adaptive: "adaptive";
    readonly Metric: "metric";
    readonly Imperial: "imperial";
}>;

/**
 * @public
 */
declare type Distances = Enum.Values<typeof Distances>;

/**
 * @public
 */
declare function Enum<const T extends Record<string, unknown>>(
    values: T
): Readonly<T>;

/**
 * @public
 */
declare namespace Enum {
    type Values<T extends Record<string, unknown>> = T[keyof T];
}

/**
 * The options you may provide for requesting estimated arrival times.
 * {@link https://developer.apple.com/documentation/mapkitjs/etarequestoptions Read more.}
 * @public
 */
declare interface EtaRequestOptions {
    /**
     * The starting point for estimated arrival time requests.
     * @public
     */
    origin: Coordinate;
    /**
     * An array of coordinates that represent end points for estimated arrival time requests.
     * @public
     */
    destinations: Coordinate[];
    /**
     * The mode of transportation the server uses when estimating arrival times.
     * @public
     */
    transportType?: TransportType;
    /**
     * The time of departure used in an estimated arrival time request.
     * @public
     */
    departureDate?: Date;
    arrivalDate?: Date;
}

/**
 * The estimated arrival times for a set of destinations.
 * {@link https://developer.apple.com/documentation/mapkitjs/etaresponse Read more.}
 * @public
 */
declare interface EtaResponse {
    /**
     * The request object associated with the estimated time of arrival response.
     * @public
     */
    request: object;
    /**
     * The coordinates that represent the starting point for estimated arrival time requests.
     * @public
     */
    origin: Coordinate;
    /**
     * An array of estimated arrival times.
     * @public
     */
    etas: EtaResult[];
}

/**
 * The mode of transportation, distance, and travel time estimates for a single destination.
 * {@link https://developer.apple.com/documentation/mapkitjs/etaresult Read more.}
 * @public
 */
declare interface EtaResult {
    /**
     * The coordinates that represent the endpoint for estimated arrival time requests.
     * @public
     */
    destination?: Coordinate;
    /**
     * The mode of transportation used to estimate the arrival time.
     * @public
     */
    transportType: TransportType;
    /**
     * The route distance in meters.
     * @public
     */
    distance: number;
    /**
     * The estimated travel time in seconds, including delays due to traffic.
     * @public
     */
    expectedTravelTime: number;
    /**
     * The estimated travel time in seconds, excluding delays for traffic.
     * @public
     */
    staticTravelTime: number;
}

/**
 * Constants indicating the visibility of different adaptive map features.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.featurevisibility Read more.}
 * @public
 * @enum
 */
export declare const FeatureVisibility: Readonly<{
    /**
     * A constant indicating that feature visibility adapts to the current map state.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.featurevisibility/adaptive Read more.}
     * @public
     */
    readonly Adaptive: "adaptive";
    /**
     * A constant indicating that the feature is always hidden.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.featurevisibility/hidden Read more.}
     * @public
     */
    readonly Hidden: "hidden";
    /**
     * A constant indicating that the feature is always visible.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.featurevisibility/visible Read more.}
     * @public
     */
    readonly Visible: "visible";
}>;

/**
 * Constants indicating the visibility of different adaptive map features.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.featurevisibility Read more.}
 * @public
 */
export declare type FeatureVisibility = Enum.Values<typeof FeatureVisibility>;

/**
 * A geocoder that converts human-readable addresses to geographic coordinates, and vice versa.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.geocoder Read more.}
 * @public
 */
export declare class Geocoder extends Service {
    /**
     * Creates a geocoder object and sets optional language and user location properties.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.geocoder/mapkit.geocoder Read more.}
     * @public
     */
    constructor(options?: ServiceOptions);
    /**
     * Converts an address to geographic coordinates.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.geocoder/lookup Read more.}
     * @param place A case-insensitive string MapKit JS converts to geographic coordinates, such as: "`450 Serra Mall`", "`450 Serra Mall, Stanford`", "`450 Serra Mall, Stanford, CA USA`". Delimiter characters are optional.
     * @param callback MapKit JS returns geocoding results asynchronously through a callback function. MapKit JS invokes the callback function with two arguments, `error` on failure and `data` on success.
     * @public
     */
    lookup(
        address: string,
        callback: (error: Error | null, result?: GeocoderResponse) => void,
        options?: GeocoderLookupOptions
    ): number;
    /**
     * Converts a geographic coordinate to an address.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.geocoder/reverselookup Read more.}
     * @param coordinate The coordinate to convert to a human-readable address. For example, `new` {@link Coordinate}`(37.37, -122.04)`.
     * @param callback MapKit JS invokes this callback function with two arguments, `error` on failure and `data` on success. If you cancel the request before you receive a response, the framework doesn't call this function.
     * @public
     */
    reverseLookup(
        coordinate: Coordinate,
        callback: (error: Error | null, result?: GeocoderResponse) => void,
        options?: GeocoderReverseLookupOptions
    ): number;
}

/**
 * Options that constrain geocoder lookup results to a specific area or a specific language.
 * {@link https://developer.apple.com/documentation/mapkitjs/geocoderlookupoptions Read more.}
 * @public
 */
declare interface GeocoderLookupOptions {
    /**
     * The language to use when displaying the lookup results.
     * @public
     */
    language?: string;
    /**
     * A region for constraining lookup results.
     * @public
     */
    region?: CoordinateRegion;
    /**
     * Coordinates for constraining the lookup results.
     * @public
     */
    coordinate?: Coordinate;
    /**
     * A list of countries for constraining the lookup results.
     * @public
     */
    limitToCountries?: string;
}

/**
 * The response from a geocoder lookup or reverse lookup.
 * {@link https://developer.apple.com/documentation/mapkitjs/geocoderresponse Read more.}
 * @public
 */
declare interface GeocoderResponse {
    /**
     * An array of places that returns from a geocoder lookup or reverse lookup.
     * @public
     */
    results: Place[];
}

/**
 * An option that constrains reverse lookup results to a specific language.
 * {@link https://developer.apple.com/documentation/mapkitjs/geocoderreverselookupoptions Read more.}
 * @public
 */
declare interface GeocoderReverseLookupOptions {
    /**
     * The language to use when displaying the reverse lookup results.
     * @public
     */
    language?: string;
}

/**
 * A delegate object that controls a GeoJSON import to override default behavior and provide custom style.
 * {@link https://developer.apple.com/documentation/mapkitjs/geojsondelegate Read more.}
 * @public
 */
declare interface GeoJSONDelegate {
    /**
     * Overrides a multipoint object.
     * {@link https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemformultipoint Read more.}
     * @param itemCollection A collection containing associated annotations.
     * @param geoJSON The original GeoJSON object for the `MultiPoint`. This contains an array of geometries.
     * @public
     */
    itemForMultiPoint?<D extends GeoJSONTypes.MultiPoint>(
        item: ItemCollection<D>,
        object: D
    ): ItemCollection<D> | Item[] | null;
    /**
     * Overrides a multiline string.
     * {@link https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemformultilinestring Read more.}
     * @param itemCollection An item collection containing associated overlays.
     * @param geoJSON The original GeoJSON object for the `MultiLineString`. This contains an array of geometries.
     * @public
     */
    itemForMultiLineString?<D extends GeoJSONTypes.MultiLineString>(
        item: ItemCollection<D>,
        object: D
    ): ItemCollection<D> | Item[] | null;
    /**
     * Overrides a multipolygon.
     * {@link https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemformultipolygon Read more.}
     * @param itemCollection A collection containing associated overlays.
     * @param geoJSON The original GeoJSON object for the `MultiPolygon`. It contains an array of geometries.
     * @public
     */
    itemForMultiPolygon?<D extends GeoJSONTypes.MultiPolygon>(
        item: ItemCollection<D>,
        object: D
    ): ItemCollection<D> | Item[] | null;
    /**
     * Overrides a point.
     * {@link https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemforpoint Read more.}
     * @param coordinate A GeoJSON `Point` generates the coordinate. You can use the coordinate to instantiate an item to return.
     * @param geoJSON The original GeoJSON object for the `Point`. This object may be a simple `Point` or a `Feature` with the `Point` geometry type.
     * @public
     */
    itemForPoint?(item: Coordinate, object: GeoJSONTypes.Point): Item | null;
    /**
     * Overrides a line string.
     * {@link https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemforlinestring Read more.}
     * @param overlay A {@link PolylineOverlay} object.
     * @param geoJSON The original GeoJSON object for the `LineString` object.
     * @public
     */
    itemForLineString?(
        item: PolylineOverlay,
        object: GeoJSONTypes.LineString
    ): PolylineOverlay | null;
    /**
     * Overrides a polygon.
     * {@link https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemforpolygon Read more.}
     * @param overlay You can customize the provided overlay before returning it, or you can completely replace the overlay.
     * @param geoJSON The original GeoJSON object for the polygon.
     * @public
     */
    itemForPolygon?(
        item: PolygonOverlay,
        object: GeoJSONTypes.Polygon
    ): PolygonOverlay | null;
    /**
     * Overrides a feature.
     * {@link https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemforfeature Read more.}
     * @param item An item the system creates for the geometry of the feature, or `null` for features with `null` geometry.
     * @param geoJSON The original GeoJSON object for the `feature`.
     * @public
     */
    itemForFeature?(
        item: Item | null,
        object: GeoJSONTypes.Feature
    ): Item | null;
    /**
     * Overrides a feature collection.
     * {@link https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemforfeaturecollection Read more.}
     * @param itemCollection A collection containing associated annotations and overlays.
     * @param geoJSON The original GeoJSON object for the `FeatureCollection`. This contains an array of `feature` types.
     * @public
     */
    itemForFeatureCollection?<D extends GeoJSONTypes.FeatureCollection>(
        item: ItemCollection<D>,
        object: D
    ): ItemCollection<D> | Item[] | null;
    itemForGeometryCollection?<D extends GeoJSONTypes.GeometryCollection>(
        item: ItemCollection<D>,
        object: D
    ): ItemCollection<D> | Item[] | null;
    /**
     * Overrides the style of overlays.
     * {@link https://developer.apple.com/documentation/mapkitjs/geojsondelegate/styleforoverlay Read more.}
     * @param overlay The overlay to style.
     * @param geoJSON The original GeoJSON for the `feature` or `geometry` object`.`
     * @public
     */
    styleForOverlay?(
        overlay: PolylineOverlay | PolygonOverlay,
        object: GeoJSONTypes.LineString | GeoJSONTypes.Polygon
    ): Style;
    /**
     * Completes the GeoJSON import.
     * {@link https://developer.apple.com/documentation/mapkitjs/geojsondelegate/geojsondidcomplete Read more.}
     * @param result The mapped item collection.
     * @param geoJSON The original parsed GeoJSON object.
     * @public
     */
    geoJSONDidComplete?<D extends GeoJSONTypes.GeoJSON>(
        items: ItemCollection<D>,
        object: D
    ): void;
    /**
     * Indicates when the GeoJSON import fails.
     * {@link https://developer.apple.com/documentation/mapkitjs/geojsondelegate/geojsondiderror Read more.}
     * @param error An `Error` instance related to the last blocking error.
     * @param geoJSON The original parsed GeoJSON object.
     * @public
     */
    geoJSONDidError?(
        error: GeoJSONImportError | Error,
        object?: GeoJSONTypes.GeoJSON
    ): void;
}

/**
 * @public
 */
declare type GeoJSONImporterCallback = (
    ...args:
        | [GeoJSONImportError, GeoJSONTypes.GeoJSON | undefined]
        | [null, ItemCollection]
) => void;

/**
 * @public
 */
declare class GeoJSONImportError extends Error {
    constructor(message: string);
}

/**
 * A customized annotation with image resources that you provide.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.imageannotation Read more.}
 * @public
 */
export declare class ImageAnnotation extends Annotation {
    /**
     * Creates an image annotation with a URL to its image and a coordinate.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.imageannotation/mapkit.imageannotation Read more.}
     * @param location The coordinate where this annotation appears.
     * @param options A hash of properties that initialize the annotation. The `options` hash needs to include {@link ImageAnnotationConstructorOptions.url}. MapKit JS displays an optional `title` and `subtitle` in a callout if they're present.
     * @public
     */
    constructor(
        coordinate: Coordinate | Place | SearchAutocompleteResult,
        options: ImageAnnotationOptions
    );
    /**
     * An object containing URLs for the image assets in multiple resolutions.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.imageannotation/url Read more.}
     * @public
     */
    get url(): ImageDelegate | ImageHashObject;
    set url(value: ImageDelegate | ImageHashObject);
}

/**
 * An object containing options for creating an image annotation.
 * {@link https://developer.apple.com/documentation/mapkitjs/imageannotationconstructoroptions Read more.}
 * @public
 */
declare interface ImageAnnotationOptions extends AnnotationConstructorOptions {
    /**
     * An object containing URLs for the image assets in multiple resolutions.
     * @public
     */
    url: ImageDelegate | ImageHashObject;
}

/**
 * An object you use to specify image URLs.
 * {@link https://developer.apple.com/documentation/mapkitjs/imagedelegate Read more.}
 * @public
 */
declare interface ImageDelegate {
    /**
     * Returns the URL to an image of the specified scale.
     * {@link https://developer.apple.com/documentation/mapkitjs/imagedelegate/getimageurl Read more.}
     * @public
     */
    getImageUrl(ratio: number, callback: (url?: string) => void): void;
}

/**
 * @public
 */
declare type ImageHashObject = {
    [ratio: string]: string | undefined;
} & {};

/**
 * @public
 */
declare function importGeoJSON(
    dataOrURI: string | GeoJSONTypes.GeoJSON,
    callbackOrDelegate?: GeoJSONDelegate | GeoJSONImporterCallback
):
    | ItemCollection<
          GeoJSONTypes.GeoJSON<
              GeoJSONTypes.Geometry,
              GeoJSONTypes.GeoJsonProperties
          >
      >
    | undefined;

/**
 * @public
 */
declare type Item = Annotation | Overlay | ItemCollection;

/**
 * A tree structure containing annotations, overlays, and nested item collection objects.
 * {@link https://developer.apple.com/documentation/mapkitjs/itemcollection Read more.}
 * @public
 */
declare class ItemCollection<D = any> {
    /**
     * The raw GeoJSON data.
     * {@link https://developer.apple.com/documentation/mapkitjs/itemcollection/data Read more.}
     * @public
     */
    get data(): D | undefined;
    set data(data: D | undefined);
    /**
     * A nested list of annotations, overlays, and other item collections.
     * {@link https://developer.apple.com/documentation/mapkitjs/itemcollection/items Read more.}
     * @public
     */
    get items(): Item[];
    set items(items: Item | Item[] | null);
    /**
     * A flattened array of items that includes annotations and overlays.
     * {@link https://developer.apple.com/documentation/mapkitjs/itemcollection/getflatteneditemlist Read more.}
     * @public
     */
    getFlattenedItemList(): (Annotation | Overlay)[];
}

/**
 * A line that displays with a gradient along the length of the line.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.linegradient Read more.}
 * @public
 */
export declare class LineGradient {
    /**
     * Creates a style that renders a gradient along the length of a line.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.linegradient/mapkit.linegradient Read more.}
     * @param options A JavaScript object with unit distance values as keys with matched CSS colors.
     * @public
     */
    constructor(colorStops?: { [key: number]: string });
    /**
     * Adds a color transition point to the gradient.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.linegradient/addcolorstop Read more.}
     * @param offset The unit distance at which to add the color.
     * @param color The CSS color at the transition point.
     * @public
     */
    addColorStop(offset: number, color: string): void;
    /**
     * Adds a color transition at the index point in the list of points within a polyline.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.linegradient/addcolorstopatindex Read more.}
     * @param index A valid index into a polyline's {@link PolylineOverlay.points}.
     * @param color The CSS color at the index point.
     * @public
     */
    addColorStopAtIndex(index: number, color: string): void;
    toString(): string;
}

/**
 * @enum
 * @public
 */
declare const LoadPriorities: Readonly<{
    readonly LandCover: "LandCover";
    readonly PointsOfInterest: "PointsOfInterest";
    readonly None: null;
}>;

/**
 * @public
 */
declare type LoadPriorities = Enum.Values<typeof LoadPriorities>;

/**
 * Provide an interactive look around view on the page.
 *
 * Requires `spi-look-around` or `look-around` library.
 *
 * @public
 *
 * @categoryDescription SPI
 * These are only exposed when `spi-look-around` is loaded.
 */
export declare class LookAround extends AbstractLookAround {
    #private;
    /**
     * Public constructor for developers.
     *
     * @param parent The containing DOM element.
     * @param location The starting point of the look around.
     * @param options Look around options
     */
    constructor(
        parent?: HTMLElement,
        location?: Coordinate | Place | LookAroundScene,
        options?: LookAroundOptions
    );

    /**
     * Ready States
     *   * `loading`: the view is loading the requested look around imagery.
     *   * `complete`: the view has loaded completed.
     *   * `error`: the view encountered a recoverable error, either because of an invalid location or the loading has failed.
     *   * `destroyed`: the view was destroyed, either manually or because an unrecoverable error was encountered.
     */
    static ReadyStates: typeof LookAroundReadyState;

    /**
     * Shows a button that allows the user to enter or exit
     * the modal, full screen dialog.
     */
    get showsDialogControl(): boolean;
    set showsDialogControl(value: boolean);
    /**
     * Shows a button that can be handled when the user wants to close the
     * view.
     * When user clicks on the button, a `close` event is dispatched.
     * The view is destroyed if the event is not cancelled.
     */
    get showsCloseControl(): boolean;
    set showsCloseControl(value: boolean);
}

/**
 * @enum
 * @public
 */
declare const LookAroundBadgePosition: Readonly<{
    readonly TopLeading: "topLeading";
    readonly TopTrailing: "topTrailing";
    readonly BottomTrailing: "bottomTrailing";
}>;

/**
 * @public
 */
declare type LookAroundBadgePosition = Enum.Values<
    typeof LookAroundBadgePosition
>;

/**
 * @enum
 * @public
 */
declare const LookAroundErrorType: Readonly<{
    /**
     * Imagery was not available for the look location.
     */
    readonly AvailabilityError: "availability-error";
    /**
     * The browser was not able to meet look around requirements (e.g. WebAssembly or WebGL 2 support).
     */
    readonly BrowserError: "browser-error";
    /**
     * There was an error communicating with the service (e.g. the manifest download failed).
     */
    readonly ServiceError: "service-error";
    /**
     * There was some other type of internal error.
     */
    readonly UnknownError: "unknown-error";
}>;

/**
 * @public
 */
declare type LookAroundErrorType =
    (typeof LookAroundErrorType)[keyof typeof LookAroundErrorType];

/**
 * Options for {@link LookAround} constructor.
 *
 * @categoryDescription SPI
 * These are only exposed when `spi-look-around` is loaded.
 *
 * @public
 */
declare interface LookAroundOptions extends CommonLookAroundOptions {
    /**
     * Shows a button that allows the user to enter or exit
     * the modal, full screen dialog.
     */
    showsDialogControl?: boolean;
    /**
     * Shows a button that can be handled when the user wants to close the
     * view.
     * When user clicks on the button, a `close` event is dispatched.
     * The view is destroyed if the event is not cancelled.
     */
    showsCloseControl?: boolean;
}

/**
 * Provide an look around view that allows the user to enter a full page dialog interactive view.
 *
 * Requires `look-around` library.
 *
 * @categoryDescription SPI
 * These are only exposed when `spi-look-around` is loaded.
 *
 * @public
 */
export declare class LookAroundPreview extends AbstractLookAround {
    #private;
    /**
     * Public constructor for developers.
     *
     * @param parent The containing DOM element.
     * @param location The starting point of the look around.
     * @param options Look around options
     */
    constructor(
        parent?: HTMLElement,
        location?: Coordinate | Place | LookAroundScene,
        options?: LookAroundPreviewOptions
    );

    /**
     * Ready States
     *   * `loading`: the view is loading the requested look around imagery.
     *   * `complete`: the view has loaded completed.
     *   * `error`: the view encountered a recoverable error, either because of an invalid location or the loading has failed.
     *   * `destroyed`: the view was destroyed, either manually or because an unrecoverable error was encountered.
     */
    static ReadyStates: typeof LookAroundReadyState;

    static BadgePositions: typeof LookAroundBadgePosition;
    get badgePosition(): LookAroundBadgePosition;
    set badgePosition(value: LookAroundBadgePosition);
    destroy(): void;
}

/**
 * Options for {@link LookAroundPreview} constructor.
 *
 * @categoryDescription SPI
 * These are only exposed when `spi-look-around` is loaded.
 *
 * @public
 */
declare interface LookAroundPreviewOptions extends CommonLookAroundOptions {
    /**
     * Sets the badge position of the preview view.
     */
    badgePosition?: LookAroundBadgePosition;
}

/**
 * @enum
 * @public
 */
declare const LookAroundReadyState: Readonly<{
    readonly Loading: "loading";
    readonly Complete: "complete";
    readonly Error: "error";
    readonly Destroyed: "destroyed";
}>;

/**
 * @public
 */
declare type LookAroundReadyState = Enum.Values<typeof LookAroundReadyState>;

/**
 * Represent a look around scene. This class was previously named `LookAroundEntryPoint`.
 * SPI user can initialize this class directly while API user can only receive an object from
 * LookAround with resolved collection point.
 *
 * @privateRemarks
 *
 * When a collection is resolved, the `containsResolvedCollectionPoint` will flip to
 * `true` with camera position saved in primitive values (coordinate, heading, pitch, and altitude),
 * regardless of how the scene was initialized.
 *
 * @categoryDescription SPI
 * These are only exposed when `spi-look-around` is loaded.
 *
 * @public
 */
export declare class LookAroundScene {
    #private;

    /**
     * Return a copy of the scene instance.
     */
    copy(): LookAroundScene;
}

/**
 * An embeddable interactive map that you add to a webpage.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map Read more.}
 * @public
 */
declare class Map extends MapKitEventTarget {
    /**
     * Creates a map you embed on a webpage and initializes it with the constructor options you choose.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/mapkit.map Read more.}
     * @param parent A DOM element, or the ID of a DOM element, to use as your map's container.
     * @param options Options that {@link MapConstructorOptions} defines for initializing the properties of your map.
     * @public
     */
    constructor(parent?: HTMLElement | null, options?: MapConstructorOptions);
    static MapTypes: typeof MapTypes;
    static ColorSchemes: typeof ColorScheme;
    static Distances: typeof Distances;
    static LoadPriorities: typeof LoadPriorities;
    /**
     * The map's inset margins.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/padding Read more.}
     * @public
     */
    get padding(): Padding;
    set padding(padding: Padding);
    /**
     * A Boolean value that determines whether the user can cause the map to scroll with a pointing device or with gestures on a touchscreen.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/isscrollenabled Read more.}
     * @public
     */
    get isScrollEnabled(): boolean;
    set isScrollEnabled(value: boolean);
    /**
     * A Boolean value that determines whether the user may zoom in and out on the map using pinch gestures or the zoom control.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/iszoomenabled Read more.}
     * @public
     */
    get isZoomEnabled(): boolean;
    set isZoomEnabled(value: boolean);
    /**
     * A Boolean value that determines whether to display a control for zooming in and zooming out on a map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/showszoomcontrol Read more.}
     * @public
     */
    get showsZoomControl(): boolean;
    set showsZoomControl(showsZoomControl: boolean);
    /**
     * A feature visibility setting that determines when the map displays the map's scale indicator.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/showsscale Read more.}
     * @public
     */
    get showsScale(): FeatureVisibility;
    set showsScale(showsScale: FeatureVisibility);
    /**
     * The type of data that the map displays.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/maptype Read more.}
     * @public
     */
    get mapType(): MapType;
    set mapType(mapType: MapType);
    /**
     * The map's color scheme when displaying standard or muted standard map types.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/colorscheme Read more.}
     * @public
     */
    get colorScheme(): ColorScheme;
    set colorScheme(colorScheme: ColorScheme);
    /**
     * The system of measurement that displays on the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/distances Read more.}
     * @public
     */
    get distances(): Distances;
    set distances(distances: Distances);

    /**
     * A value MapKit JS uses for prioritizing the visibility of specific map features before the underlaying map tiles.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/loadpriority Read more.}
     * @public
     */
    get loadPriority(): LoadPriorities;
    set loadPriority(value: LoadPriorities);
    /**
     * An array of all of the map's tile overlays.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/tileoverlays Read more.}
     * @public
     */
    get tileOverlays(): TileOverlay[];
    set tileOverlays(tileOverlays: TileOverlay[]);
    /**
     * Adds a tile overlay to the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/addtileoverlay Read more.}
     * @param tileOverlay The tile overlay to add.
     * @public
     */
    addTileOverlay(tileOverlay: TileOverlay): TileOverlay;
    /**
     * Adds an array of tile overlays to the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/addtileoverlays Read more.}
     * @param tileOverlays An array of tile overlays to add.
     * @public
     */
    addTileOverlays(tileOverlays: TileOverlay[]): TileOverlay[];
    /**
     * Removes a tile overlay from the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/removetileoverlay Read more.}
     * @param tileOverlay The tile overlay to remove.
     * @public
     */
    removeTileOverlay(tileOverlay: TileOverlay): TileOverlay;
    /**
     * Removes an array of tile overlays from the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/removetileoverlays Read more.}
     * @param tileOverlays An array of tile overlays to remove.
     * @public
     */
    removeTileOverlays(tileOverlays: TileOverlay[]): TileOverlay[];
    /**
     * A Boolean value that determines whether to display a control that lets users choose the map type.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/showsmaptypecontrol Read more.}
     * @public
     */
    get showsMapTypeControl(): boolean;
    set showsMapTypeControl(showsMapTypeControl: boolean);
    /**
     * A Boolean value that determines whether the user location control is visible.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/showsuserlocationcontrol Read more.}
     * @public
     */
    get showsUserLocationControl(): boolean;
    set showsUserLocationControl(showsUserLocationControl: boolean);
    /**
     * A Boolean value that determines whether the map displays points of interest.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/showspointsofinterest Read more.}
     * @public
     */
    get showsPointsOfInterest(): boolean;
    set showsPointsOfInterest(showsPointsOfInterest: boolean);
    /**
     * The filter that determines the points of interest that display on the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/pointofinterestfilter Read more.}
     * @public
     */
    get pointOfInterestFilter(): PointOfInterestFilter | null;
    set pointOfInterestFilter(filter: PointOfInterestFilter | null);
    /**
     * The map's DOM element.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/element Read more.}
     * @public
     */
    get element(): HTMLDivElement | null;
    set element(_: HTMLDivElement | null);
    /**
     * The visible area of the map, in map units.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/visiblemaprect Read more.}
     * @public
     */
    get visibleMapRect(): MapRect;
    set visibleMapRect(visibleMapRect: MapRect);
    /**
     * Changes the map's visible map rectangle to the specified map rectangle.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/setvisiblemaprectanimated Read more.}
     * @param mapRect The map's new visible area, in map units.
     * @param animate A Boolean value that determines whether MapKit JS animates the visible area change. The default value is `true`.
     * @public
     */
    setVisibleMapRectAnimated(visibleMapRect: MapRect, animated?: boolean): Map;
    /**
     * The area the map is displaying.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/region Read more.}
     * @public
     */
    get region(): CoordinateRegion;
    set region(region: CoordinateRegion);
    /**
     * Changes the map's region to the provided region, with optional animation.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/setregionanimated Read more.}
     * @param region A new {@link Map.region} for the map to display.
     * @param animate A Boolean value that determines whether MapKit JS animates the region change. The default value is `true`.
     * @public
     */
    setRegionAnimated(region: CoordinateRegion, animated?: boolean): Map;
    /**
     * A Boolean value that indicates whether map rotation is available.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/isrotationavailable Read more.}
     * @public
     */
    get isRotationAvailable(): boolean | undefined;
    set isRotationAvailable(_: boolean | undefined);
    /**
     * A Boolean value that determines whether the user may rotate the map using the compass control or a rotate gesture.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/isrotationenabled Read more.}
     * @public
     */
    get isRotationEnabled(): boolean;
    set isRotationEnabled(value: boolean);
    /**
     * The map's rotation, in degrees.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/rotation Read more.}
     * @public
     */
    get rotation(): number;
    set rotation(rotation: number);
    /**
     * A feature visibility setting that determines when the compass is visible.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/showscompass Read more.}
     * @public
     */
    get showsCompass(): FeatureVisibility;
    set showsCompass(value: FeatureVisibility);
    /**
     * Changes the map's rotation setting to the number of specified degrees.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/setrotationanimated Read more.}
     * @param degrees The map's rotation, in degrees.
     * @param animate A Boolean value that determines whether the rotation change animates. The default value is `true`.
     * @public
     */
    setRotationAnimated(degrees: number, animated?: boolean): Map | undefined;
    /**
     * The map coordinate at the center of the map view.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/center Read more.}
     * @public
     */
    get center(): Coordinate;
    set center(center: Coordinate);
    /**
     * Centers the map to the provided coordinate, with optional animation.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/setcenteranimated Read more.}
     * @param coordinate The map's new {@link Map.center}.
     * @param animate A Boolean value that determines whether MapKit JS animates the center change. The default value is `true`.
     * @public
     */
    setCenterAnimated(center: Coordinate, animated?: boolean): Map;
    /**
     * The minimum and maximum distances of the camera from the map center.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/camerazoomrange Read more.}
     * @public
     */
    get cameraZoomRange(): CameraZoomRange;
    set cameraZoomRange(value: CameraZoomRange);
    /**
     * Changes the map's camera zoom range with an animated transition.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/setcamerazoomrangeanimated Read more.}
     * @param cameraZoomRange A {@link CameraZoomRange} instance, which is an object containing the {@link CameraZoomRange.minCameraDistance} and {@link CameraZoomRange.maxCameraDistance} properties.
     * @param animate A Boolean value that determines whether MapKit JS animates the visible area change. The default value is `true`.
     * @public
     */
    setCameraZoomRangeAnimated(
        zoomRange: CameraZoomRange,
        animated?: boolean
    ): Map;
    /**
     * The altitude of the camera relative to the elevation of the center of the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/cameradistance Read more.}
     * @public
     */
    get cameraDistance(): number;
    set cameraDistance(value: number);
    /**
     * Changes the map's camera distance with an animated transition.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/setcameradistanceanimated Read more.}
     * @param distance The altitude of the camera from the center of the map. It's value needs to be greater than or equal to `0`.
     * @param animate A Boolean value that determines whether MapKit JS animates the visible area change. The default value is `true`.
     * @public
     */
    setCameraDistanceAnimated(distance: number, animated?: boolean): Map;
    /**
     * A constraint of the location of the center of the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/cameraboundary Read more.}
     * @returns An object containing both {@link CoordinateRegion} and {@link MapRect} instances.
     * @public
     */
    get cameraBoundary(): CameraBoundaryDescription | null;
    set cameraBoundary(cameraBoundary: null | CoordinateRegion | MapRect);
    /**
     * Changes the map's camera boundary with an animated transition.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/setcameraboundaryanimated Read more.}
     * @param mapRect This can be an instance of {@link CoordinateRegion} or {@link MapRect}.
     * @param animate A Boolean value that determines whether MapKit JS animates the visible area change. The default value is `true`.
     * @public
     */
    setCameraBoundaryAnimated(
        cameraBoundary: null | CoordinateRegion | MapRect,
        animated?: boolean
    ): Map;
    /**
     * An array of all of the map's overlays.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/overlays Read more.}
     * @public
     */
    get overlays(): Overlay[];
    set overlays(overlays: Overlay[]);
    /**
     * The selected overlay on the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/selectedoverlay Read more.}
     * @public
     */
    get selectedOverlay(): Overlay | null;
    set selectedOverlay(overlay: Overlay | null);
    /**
     * Adds an overlay to the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/addoverlay Read more.}
     * @param overlay The overlay to add.
     * @public
     */
    addOverlay(overlay: Overlay): Overlay | undefined;
    /**
     * Adds multiple overlays to the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/addoverlays Read more.}
     * @param overlays An array of overlays to add.
     * @public
     */
    addOverlays(overlays: Overlay[]): Overlay[];
    /**
     * Removes an overlay from the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/removeoverlay Read more.}
     * @param overlay The overlay to remove.
     * @public
     */
    removeOverlay(overlay: Overlay): Overlay;
    /**
     * Removes multiple overlays from the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/removeoverlays Read more.}
     * @param overlays An array of overlays to remove.
     * @public
     */
    removeOverlays(overlays: Overlay[]): Overlay[];
    /**
     * Returns the topmost overlay at a given point on the webpage.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/topoverlayatpoint Read more.}
     * @param point A point in the page's coordinate system, such as `new DOMPoint(event.pageX, event.pageY)` when handling a mouse event.
     * @public
     */
    topOverlayAtPoint(point: DOMPoint): Overlay | undefined;
    /**
     * Returns an array of overlays at a given point on the webpage.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/overlaysatpoint Read more.}
     * @param point A point in the page's coordinate system, such as `new DOMPoint(event.pageX, event.pageY)`, when handling a mouse event.
     * @public
     */
    overlaysAtPoint(point: DOMPoint): Overlay[];
    /**
     * An array of all the annotations on the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/annotations Read more.}
     * @public
     */
    get annotations(): Annotation[];
    set annotations(annotations: Annotation[]);
    /**
     * The selected annotation.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/selectedannotation Read more.}
     * @public
     */
    get selectedAnnotation(): Annotation | null;
    set selectedAnnotation(annotation: Annotation | null);
    /**
     * Adds an annotation to the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/addannotation Read more.}
     * @param annotation The annotation to add.
     * @public
     */
    addAnnotation(annotation: Annotation): Annotation | undefined;
    /**
     * Adds an array of annotations to the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/addannotations Read more.}
     * @param annotations An array of annotations to add.
     * @public
     */
    addAnnotations(annotations: Annotation[]): Annotation[];
    /**
     * Removes an annotation from the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/removeannotation Read more.}
     * @param annotation The annotation to remove.
     * @public
     */
    removeAnnotation(annotation: Annotation): Annotation;
    /**
     * Removes multiple annotations from the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/removeannotations Read more.}
     * @param annotations An array of annotations to remove.
     * @public
     */
    removeAnnotations(annotations: Annotation[]): Annotation[];
    /**
     * Adjusts the map's visible region to bring the specified overlays and annotations into view.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/showitems Read more.}
     * @param items An array of annotations and overlays to make visible.
     * @param options Options that {@link MapShowItemsOptions} defines that let you determine animation, padding, and the minimum span of the map's region.
     * @public
     */
    showItems(
        items: (Overlay | Annotation)[],
        options?: MapShowItemsOptions
    ): (Annotation | Overlay)[];
    /**
     * Adds a collection of annotations, overlays, or other item collections to the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/additems Read more.}
     * @param items An array of annotations, overlays, or the data returned from {@link mapkit.importGeoJSON} to display on the map.
     * @public
     */
    addItems(items: (Overlay | Annotation)[]): (Annotation | Overlay)[];
    /**
     * Removes a collection of annotations, overlays, or other item collections from the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/removeitems Read more.}
     * @param items An array of annotations, overlays, or the data returned from {@link mapkit.importGeoJSON} to display on the map.
     * @public
     */
    removeItems(items: (Overlay | Annotation)[]): (Annotation | Overlay)[];
    /**
     * Returns the list of annotation objects within the specified map rectangle.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/annotationsinmaprect Read more.}
     * @param mapRect The portion of the map in which to look for annotations.
     * @public
     */
    annotationsInMapRect(mapRect: MapRect): Annotation[];
    /**
     * @deprecated Map now resizes itself automatically.
     */
    updateSize(): Map;
    /**
     * Converts a coordinate on the map to a point in the page's coordinate system.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/convertcoordinatetopointonpage Read more.}
     * @param coordinate The coordinate that displays on the map.
     * @public
     */
    convertCoordinateToPointOnPage(coordinate: Coordinate): DOMPoint;
    /**
     * Converts a point in page coordinates to the corresponding map coordinate.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/convertpointonpagetocoordinate Read more.}
     * @param point A point in the page's coordinate system, such as `new DOMPoint(event.pageX, event.pageY),` when handling a mouse event.
     * @public
     */
    convertPointOnPageToCoordinate(point: DOMPoint): Coordinate;
    /**
     * A Boolean value that determines whether to show the user's location on the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/showsuserlocation Read more.}
     * @public
     */
    get showsUserLocation(): boolean;
    set showsUserLocation(value: boolean);
    /**
     * An annotation that indicates the user's location on the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/userlocationannotation Read more.}
     * @public
     */
    get userLocationAnnotation(): UserLocationAnnotation | null;
    /**
     * A Boolean value that determines whether to center the map on the user's location.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/tracksuserlocation Read more.}
     * @public
     */
    get tracksUserLocation(): boolean;
    set tracksUserLocation(value: boolean);
    /**
     * The CSS color that MapKit JS uses for user interface controls on the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/tintcolor Read more.}
     * @public
     */
    get tintColor(): string;
    set tintColor(value: string);
    /**
     * Removes the map's element from the DOM and releases internal references to the map to free up memory.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/destroy Read more.}
     * @returns This method returns no value.
     * @public
     */
    destroy(): void;
    /**
     * A delegate method for modifying an annotation that represents a group of annotations that the framework combines into a cluster.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/annotationforcluster Read more.}
     * @param clusterAnnotation An annotation that represents a group of annotations that MapKit JS combines into a cluster.
     * @public
     */
    get annotationForCluster():
        | ((clusterAnnotation: ClusterAnnotation) => Annotation | undefined)
        | null;
    set annotationForCluster(
        value:
            | ((clusterAnnotation: ClusterAnnotation) => Annotation | undefined)
            | null
    );
    /**
     * An array of map features that users can select from the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/selectablemapfeatures Read more.}
     * @public
     */
    get selectableMapFeatures(): MapFeatureType[];
    set selectableMapFeatures(value: MapFeatureType[]);
    /**
     * An accessory for displaying place information when a person selects a map feature.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/selectablemapfeatureselectionaccessory Read more.}
     * @public
     */
    get selectableMapFeatureSelectionAccessory(): PlaceSelectionAccessory | null;
    set selectableMapFeatureSelectionAccessory(
        value: PlaceSelectionAccessory | null
    );
    /**
     * The method MapKit JS calls when the framework creates a map feature annotation.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.map/annotationformapfeature Read more.}
     * @public
     */
    get annotationForMapFeature():
        | ((
              mapFeatureAnnotation: MapFeatureAnnotation
          ) => Annotation | undefined)
        | undefined;
    set annotationForMapFeature(
        value:
            | ((
                  mapFeatureAnnotation: MapFeatureAnnotation
              ) => Annotation | undefined)
            | undefined
    );
}
export { Map as Map };

/**
 * An object that contains options for creating a map's features.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions Read more.}
 * @public
 */
declare interface MapConstructorOptions {
    /**
     * A value MapKit JS uses for prioritizing the visibility of specific map features before the underlaying map tiles.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/loadpriority Read more.}
     * @public
     */
    loadPriority?: LoadPriorities;

    /**
     * The type of data that the map view displays.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/maptype Read more.}
     * @public
     */
    mapType?: MapType;
    /**
     * The map's color scheme when displaying standard or muted standard map types.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/colorscheme Read more.}
     * @public
     */
    colorScheme?: ColorScheme;

    /**
     * A Boolean value that determines whether the user may scroll the map with a pointing device or gestures on a touchscreen.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/isscrollenabled Read more.}
     * @public
     */
    isScrollEnabled?: boolean;
    /**
     * A Boolean value that determines whether the user may zoom in and out on the map using pinch gestures or the zoom control.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/iszoomenabled Read more.}
     * @public
     */
    isZoomEnabled?: boolean;
    /**
     * A Boolean value that determines whether the user may rotate the map using the compass control or a rotate gesture.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/isrotationenabled Read more.}
     * @public
     */
    isRotationEnabled?: boolean;
    selectableMapFeatures?: MapFeatureType[];
    /**
     * The filter that determines the points of interest that display on the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/pointofinterestfilter Read more.}
     * @public
     */
    pointOfInterestFilter?: PointOfInterestFilter;
    /**
     * A Boolean value that determines whether the map displays points of interest.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/showspointsofinterest Read more.}
     * @public
     */
    showsPointsOfInterest?: boolean;

    /**
     * A Boolean value that determines whether to display a control for zooming in and zooming out on a map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/showszoomcontrol Read more.}
     * @public
     */
    showsZoomControl?: boolean;
    /**
     * A Boolean value that determines whether to display a control that lets users choose the map type.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/showsmaptypecontrol Read more.}
     * @public
     */
    showsMapTypeControl?: boolean;
    /**
     * A Boolean value that determines whether the user location control is visible.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/showsuserlocationcontrol Read more.}
     * @public
     */
    showsUserLocationControl?: boolean;
    /**
     * A feature visibility setting that allows you to determine when to display the map's scale.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/showsscale Read more.}
     * @public
     */
    showsScale?: FeatureVisibility;
    /**
     * A feature visibility setting that determines when the compass is visible.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/showscompass Read more.}
     * @public
     */
    showsCompass?: FeatureVisibility;
    /**
     * The map's inset margins.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/padding Read more.}
     * @public
     */
    padding?: Padding;
    cameraZoomRange?: CameraZoomRange;
    cameraBoundary?: CoordinateRegion | MapRect | null;
    /**
     * The visible area of the map, in map units.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/visiblemaprect Read more.}
     * @public
     */
    visibleMapRect?: MapRect;
    /**
     * The area the map is displaying.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/region Read more.}
     * @public
     */
    region?: CoordinateRegion;
    /**
     * The map coordinate at the center of the map view.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/center Read more.}
     * @public
     */
    center?: Coordinate;
    cameraDistance?: number;
    /**
     * The map's rotation, in degrees.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/rotation Read more.}
     * @public
     */
    rotation?: number;
    /**
     * An array that contains all of the map's overlays.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/overlays Read more.}
     * @public
     */
    overlays?: Overlay[];
    /**
     * An array holding all the annotations on the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/annotations Read more.}
     * @public
     */
    annotations?: Annotation[];
    /**
     * The selected overlay on the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/selectedoverlay Read more.}
     * @public
     */
    selectedOverlay?: Overlay;
    /**
     * The selected annotation on the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/selectedannotation Read more.}
     * @public
     */
    selectedAnnotation?: Annotation;
    distances?: Distances;
    /**
     * The CSS color that MapKit JS uses for the user interface controls on the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/tintcolor Read more.}
     * @public
     */
    tintColor?: string;
    /**
     * A Boolean value that determines whether to show the user's location on the map.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/showsuserlocation Read more.}
     * @public
     */
    showsUserLocation?: boolean;
    /**
     * A Boolean value that determines whether to center the map on the user's location.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/tracksuserlocation Read more.}
     * @public
     */
    tracksUserLocation?: boolean;
    tileOverlays?: TileOverlay[];
    /**
     * Modifies cluster annotations.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/annotationforcluster Read more.}
     * @public
     */
    annotationForCluster?: (
        clusterAnnotation: ClusterAnnotation
    ) => Annotation | undefined;
    annotationForMapFeature?: (
        mapFeatureAnnotation: MapFeatureAnnotation
    ) => Annotation | undefined;
}

/**
 * An object that represents a map feature that the user selects.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.mapfeatureannotation Read more.}
 * @public
 */
export declare class MapFeatureAnnotation extends PlaceAnnotation {
    constructor(
        coordinate: Coordinate | Place | SearchAutocompleteResult,
        options?: MarkerAnnotationConstructorOptions
    );
    /**
     * A value that describes the type of place the feature represents.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.mapfeatureannotation/featuretype Read more.}
     * @public
     */
    get featureType(): "" | MapFeatureType;
    /**
     * Fetches the place object associated with the map feature.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.mapfeatureannotation/fetchplace Read more.}
     * @param callback Required. The framework invokes appropriate methods on {@link FetchDelegate}, or the callback function with two arguments, `error` and `data,` on success or failure:
     * @public
     */
    fetchPlace(callback: (error: Error | null, result?: Place) => void): number;
    /**
     * The point-of-interest category of the feature.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.mapfeatureannotation/pointofinterestcategory Read more.}
     * @public
     */
    get pointOfInterestCategory(): PointOfInterestCategory | null;
    get map(): Map | null;
    get collisionMode(): CollisionMode;
    get title(): string | undefined;
    get subtitle(): string | undefined;
    get titleVisibility(): FeatureVisibility;
    get subtitleVisibility(): FeatureVisibility;
    get accessibilityLabel(): string | null | undefined;
}

/**
 * An object that describes map feature annotation images.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.mapfeatureannotationglyphimage Read more.}
 * @public
 */
declare class MapFeatureAnnotationGlyphImage {
    /**
     * Returns the image URL of the map feature.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.mapfeatureannotationglyphimage/getimageurl Read more.}
     * @public
     */
    getImageUrl(
        scale: number | undefined,
        callback: (url?: string) => void
    ): void;
}

/**
 * Values that describe the feature type of a point of interest.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.mapfeaturetype Read more.}
 * @public
 * @enum
 */
export declare const MapFeatureType: Readonly<{
    /**
     * A feature that describes a point of interest, such as a museum, park, or cafe.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.mapfeaturetype/pointofinterest Read more.}
     * @public
     */
    readonly PointOfInterest: "PointOfInterest";
    /**
     * A feature that describes a territory, such as a region or neighborhood.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.mapfeaturetype/territory Read more.}
     * @public
     */
    readonly Territory: "Territory";
    /**
     * A physical feature on the Earth such as a mountain range, river, or ocean basin.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.mapfeaturetype/physicalfeature Read more.}
     * @public
     */
    readonly PhysicalFeature: "PhysicalFeature";
}>;

/**
 * Values that describe the feature type of a point of interest.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.mapfeaturetype Read more.}
 * @public
 */
export declare type MapFeatureType = Enum.Values<typeof MapFeatureType>;

/**
 * @public
 */
export declare class MapKit extends MapKitEventTarget {
    /**
     * Initialize MapKit with JavaScript.
     *
     * You do not need to call this method if MapKit is already
     * initialized from HTML with the `data-token` attribute.
     */
    init(options: MapKitInitializationOptions): void;
    /**
     * The version of MapKit
     */
    get version(): string;
    /**
     * The build string
     */
    get build(): string;
    /**
     * A language ID indicating the selected language
     */
    get language(): string;
    set language(language: string);

    /**
     * The list of available libraries.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit/libraries Read more.}
     * @public
     */
    get Libraries(): string[] | undefined;
    /**
     * A string that describes the list of loaded libraries.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit/loadedlibraries Read more.}
     * @public
     */
    get loadedLibraries(): string[] | undefined;
    /**
     * Tells MapKit JS which libraries to load.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit/load Read more.}
     * @public
     */
    load?(libraryNames: string[]): void;
    /**
     * @category GeoJSON
     */
    get importGeoJSON(): typeof importGeoJSON;
    /**
     * @category Enumerations
     */
    get FeatureVisibility(): typeof FeatureVisibility;
    /**
     * @category Data Types
     */
    get CoordinateRegion(): typeof CoordinateRegion;
    /**
     * @category Data Types
     */
    get CoordinateSpan(): typeof CoordinateSpan;
    /**
     * @category Data Types
     */
    get Coordinate(): typeof Coordinate;
    /**
     * @category Data Types
     */
    get BoundingRegion(): typeof BoundingRegion;
    /**
     * @category Data Types
     */
    get MapPoint(): typeof MapPoint;
    /**
     * @category Data Types
     */
    get MapRect(): typeof MapRect;
    /**
     * @category Data Types
     */
    get MapSize(): typeof MapSize;
    /**
     * @category Data Types
     */
    get Padding(): typeof Padding;
    /**
     * @category Data Types
     */
    get CameraZoomRange(): typeof CameraZoomRange;
    /**
     * @category Data Types
     */
    get MapFeatureType(): typeof MapFeatureType;
    /**
     * @category Overlays
     */
    get Style(): typeof Style;
    /**
     * @category Overlays
     */
    get LineGradient(): typeof LineGradient;
    /**
     * @category Overlays
     */
    get CircleOverlay(): typeof CircleOverlay;
    /**
     * @category Overlays
     */
    get PolylineOverlay(): typeof PolylineOverlay;
    /**
     * @category Overlays
     */
    get PolygonOverlay(): typeof PolygonOverlay;
    /**
     * @category Services
     */
    get Geocoder(): typeof Geocoder;
    /**
     * @category Services
     */
    get Search(): typeof Search;
    /**
     * @category Services
     */
    get PlaceLookup(): typeof PlaceLookup;
    /**
     * @category Services
     */
    get Directions(): typeof Directions;
    /**
     * @category Services
     */
    get PointsOfInterestSearch(): typeof PointsOfInterestSearch;
    /**
     * @category Map
     */
    get Map(): typeof Map;
    /**
     * @category Map
     */
    get maps(): InstanceType<typeof Map>[];
    /**
     * @category Annotations
     */
    get Annotation(): typeof Annotation;
    /**
     * @category Annotations
     */
    get PlaceAnnotation(): typeof PlaceAnnotation;

    /**
     * @category Annotations
     */
    get ImageAnnotation(): typeof ImageAnnotation;
    /**
     * @category Annotations
     */
    get MarkerAnnotation(): typeof MarkerAnnotation;
    /**
     * @category Annotations
     */
    get MapFeatureAnnotation(): typeof MapFeatureAnnotation;
    /**
     * @category Overlays
     */
    get TileOverlay(): typeof TileOverlay;
    /**
     * @category Places
     */
    get Place(): typeof Place;
    /**
     * @category Places
     */
    get SearchAutocompleteResult(): typeof SearchAutocompleteResult;
    /**
     * @category Enumerations
     */
    get PointOfInterestCategory(): typeof PointOfInterestCategory;
    /**
     * @category Data Types
     */
    get PointOfInterestFilter(): typeof PointOfInterestFilter;
    /**
     * @category Data Types
     */
    get filterIncludingAllCategories(): InstanceType<
        typeof PointOfInterestFilter
    >;
    /**
     * @category Data Types
     */
    get filterExcludingAllCategories(): InstanceType<
        typeof PointOfInterestFilter
    >;
    /**
     * @category Enumerations
     */
    get AddressCategory(): typeof AddressCategory;
    /**
     * @category Data Types
     */
    get AddressFilter(): typeof AddressFilter;
    /**
     * @category Places
     */
    get PlaceDetail(): typeof PlaceDetail;
    /**
     * @category Places
     */
    get PlaceSelectionAccessory(): typeof PlaceSelectionAccessory;
    /**
     * @category Look Around
     */
    get LookAround(): typeof LookAround;
    /**
     * @category Look Around
     */
    get LookAroundPreview(): typeof LookAroundPreview;
    /**
     * @category Look Around
     */
    get LookAroundScene(): typeof LookAroundScene;
    /**
     * @category Look Around
     */
    get lookAroundViews(): InstanceType<typeof AbstractLookAround>[];
}

/**
 * @public
 */
declare interface MapKitEvent {
    get target(): MapKitEventTarget | null;
    get type(): string;
    get defaultPrevented(): boolean;
    stopPropagation(): void;
    preventDefault(): void;
}

/**
 * @public
 */
declare type MapKitEventListener<T extends MapKitEvent = MapKitEvent> =
    | ((event: T) => void)
    | {
          handleEvent<T>(event: T): void;
      };

/**
 * @public
 */
declare class MapKitEventTarget {
    addEventListener(
        eventType: string,
        listener: MapKitEventListener,
        thisObject?: object | null
    ): boolean;
    removeEventListener(
        eventType?: string,
        listener?: MapKitEventListener,
        thisObject?: object | null
    ): boolean;
    /**
     * Dispatches an event object, calling any listeners for that type.
     * @param event the event object to dispatch
     * @return true if dispatch completed, false if it was prevented
     */
    dispatchEvent(event: MapKitEvent): boolean;
}

/**
 * Initialization options for MapKit JS.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkitinitoptions Read more.}
 * @public
 */
declare interface MapKitInitializationOptions {
    /**
     * A callback function that obtains a token.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkitinitoptions/authorizationcallback Read more.}
     * @param done A function that completes the MapKit JS token request. Called after creating a new token.
     * @public
     */
    authorizationCallback?: (this: null, done: (token: string) => void) => void;
    /**
     * An ID that indicates the preferred language to use when displaying map labels, controls, directions, and other text.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkitinitoptions/language Read more.}
     * @public
     */
    language?: string | null;

    /**
     * An array of libraries to load at initialization.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkitinitoptions/libraries Read more.}
     * @public
     */
    libraries?: string[];
}

/**
 * A location, in map units, of a point on the Earth's surface projected onto a 2D map.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.mappoint Read more.}
 * @public
 */
export declare class MapPoint {
    /**
     * The location of the map point along the map's x-axis.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.mappoint/x Read more.}
     * @public
     */
    x: number;
    /**
     * The location of the map point along the map's y-axis.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.mappoint/y Read more.}
     * @public
     */
    y: number;
    z: number;
    w: number;
    /**
     * Creates a map location.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.mappoint/mapkit.mappoint Read more.}
     * @param x The point along the east-west axis of the map projection.
     * @param y The point along the north-south axis of the map projection.
     * @public
     */
    constructor(x?: number, y?: number);
    toString(): string;
    /**
     * Returns a copy of the location.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.mappoint/copy Read more.}
     * @returns A MapPoint object that is a copy of the map location.
     * @public
     */
    copy(): MapPoint;
    /**
     * Indicates whether two map points are equal.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.mappoint/equals Read more.}
     * @param anotherPoint A map location to use for comparison.
     * @public
     */
    equals(anotherPoint: MapPoint): boolean;
    /**
     * Converts a map point into a coordinate with latitude and longitude.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.mappoint/tocoordinate Read more.}
     * @returns A coordinate that contains the latitude and longitude corresponding to the location.
     * @public
     */
    toCoordinate(): Coordinate;
}

/**
 * A rectangular region, in map units, of a two-dimensional map projection.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.maprect Read more.}
 * @public
 */
export declare class MapRect {
    /**
     * The origin point of a rectangle.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.maprect/origin Read more.}
     * @public
     */
    origin: MapPoint;
    /**
     * The width and height of a rectangle, starting from the origin point.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.maprect/size Read more.}
     * @public
     */
    size: MapSize;
    /**
     * Creates an object that represents a rectangular region of the map projection.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.maprect/mapkit.maprect Read more.}
     * @param x The origin point along the east-west axis of the map projection.
     * @param y The origin point along the north-south axis of the map projection.
     * @param width The distance, in map units, along the east-west axis of the map projection.
     * @param height The distance, in map units, along the north-south axis of the map projection.
     * @public
     */
    constructor(x?: number, y?: number, width?: number, height?: number);
    toString(): string;
    /**
     * Returns a copy of a map rectangle.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.maprect/copy Read more.}
     * @returns A MapRect object that is a copy of the original.
     * @public
     */
    copy(): MapRect;
    /**
     * Compares whether two map rectangles are equal.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.maprect/equals Read more.}
     * @param anotherRect The map rectangle to use for comparison.
     * @public
     */
    equals(anotherRect: MapRect): boolean;
    /**
     * Returns the minimum x-axis value of a rectangle.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.maprect/minx Read more.}
     * @public
     */
    minX(): number;
    /**
     * Returns the minimum y-axis value of a rectangle.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.maprect/miny Read more.}
     * @public
     */
    minY(): number;
    /**
     * Returns the midpoint along the x-axis of a rectangle.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.maprect/midx Read more.}
     * @public
     */
    midX(): number;
    /**
     * Returns the midpoint along the y-axis of a rectangle.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.maprect/midy Read more.}
     * @public
     */
    midY(): number;
    /**
     * Returns the maximum x-axis value of a rectangle.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.maprect/maxx Read more.}
     * @public
     */
    maxX(): number;
    /**
     * Returns the maximum y-axis value of a rectangle.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.maprect/maxy Read more.}
     * @public
     */
    maxY(): number;
    /**
     * Returns a scaled map rectangle for a map location.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.maprect/scale Read more.}
     * @param scaleFactor The scale factor.
     * @param scaleCenter The center map point for scaling.
     * @public
     */
    scale(scaleFactor: number, scaleCenter?: MapPoint): MapRect;
    /**
     * Returns the region that corresponds to a map rectangle.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.maprect/tocoordinateregion Read more.}
     * @returns A {@link CoordinateRegion} object that corresponds to a map rectangle.
     * @public
     */
    toCoordinateRegion(): CoordinateRegion;
}

/**
 * Options that determine the map parameters to use when showing items.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapshowitemsoptions Read more.}
 * @public
 */
declare interface MapShowItemsOptions {
    /**
     * A Boolean value that determines whether the map animates as the map region changes to show the items.
     * @public
     */
    animate?: boolean;
    /**
     * Spacing that the framework adds around the computed map region when showing items.
     * @public
     */
    padding?: Padding;
    /**
     * The minimum longitudinal and latitudinal span the map displays.
     * @public
     */
    minimumSpan?: CoordinateSpan;
    cameraDistance?: number;
}

/**
 * A pair of values, in map units, that define the width and height of a rectangular area of a map projection.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.mapsize Read more.}
 * @public
 */
export declare class MapSize {
    /**
     * The width of the map size in map units.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.mapsize/width Read more.}
     * @public
     */
    width: number;
    /**
     * The height of the map size in map units.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.mapsize/height Read more.}
     * @public
     */
    height: number;
    /**
     * Creates an object containing the width and height of a projected coordinate span.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.mapsize/mapkit.mapsize Read more.}
     * @param width The distance in map units along the east-west axis of the map projection.
     * @param height The distance in map units along the north-south axis of the map projection.
     * @public
     */
    constructor(width?: number, height?: number);
    toString(): string;
    /**
     * Returns a copy of the map size object.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.mapsize/copy Read more.}
     * @returns A MapSize object that is a copy of the original.
     * @public
     */
    copy(): MapSize;
    /**
     * Compares the sizes of two maps and indicates whether they're of equal value.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.mapsize/equals Read more.}
     * @param anotherSize The map size to use for comparison.
     * @public
     */
    equals(anotherSize: MapSize): boolean;
}

/**
 * @public
 */
declare type MapType = Enum.Values<typeof MapTypes>;

/**
 * @enum
 * @public
 */
declare const MapTypes: Readonly<{
    readonly Satellite: "satellite";
    readonly Hybrid: "hybrid";
    readonly MutedStandard: "mutedStandard";
    readonly Standard: "standard";
}>;

/**
 * An annotation that displays a balloon-shaped marker at the designated location.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.markerannotation Read more.}
 * @public
 */
export declare class MarkerAnnotation extends Annotation {
    /**
     * Creates a marker annotation at the coordinate location with provided options.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.markerannotation/mapkit.markerannotation Read more.}
     * @param location The coordinate where the annotation appears.
     * @param options A hash of properties to create the annotation with.
     * @public
     */
    constructor(
        coordinate: Coordinate | Place | SearchAutocompleteResult,
        options?: MarkerAnnotationConstructorOptions
    );
    get size(): Size_2;
    set size(_: Size_2);
    /**
     * The background color of the balloon.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.markerannotation/color Read more.}
     * @public
     */
    get color(): string;
    set color(value: string);
    /**
     * The fill color of the glyph.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.markerannotation/glyphcolor Read more.}
     * @public
     */
    get glyphColor(): string;
    set glyphColor(value: string);
    /**
     * The image to display in the marker balloon.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.markerannotation/glyphimage Read more.}
     * @public
     */
    get glyphImage(): ImageDelegate | ImageHashObject | null;
    set glyphImage(value: ImageDelegate | ImageHashObject | null);
    /**
     * The image to display in the marker balloon when the user selects the marker.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.markerannotation/selectedglyphimage Read more.}
     * @public
     */
    get selectedGlyphImage(): ImageDelegate | ImageHashObject | null;
    set selectedGlyphImage(value: ImageDelegate | ImageHashObject | null);
    /**
     * The text to display in the marker balloon.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.markerannotation/glyphtext Read more.}
     * @public
     */
    get glyphText(): string;
    set glyphText(value: string);
    /**
     * A value that determines the behavior of the title's visibility.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.markerannotation/titlevisibility Read more.}
     * @public
     */
    get titleVisibility(): FeatureVisibility;
    set titleVisibility(value: FeatureVisibility);
    /**
     * A value that determines the behavior of the subtitle's visibility.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.markerannotation/subtitlevisibility Read more.}
     * @public
     */
    get subtitleVisibility(): FeatureVisibility;
    set subtitleVisibility(value: FeatureVisibility);
}

/**
 * An object containing the options that create a marker annotation.
 * {@link https://developer.apple.com/documentation/mapkitjs/markerannotationconstructoroptions Read more.}
 * @public
 */
declare interface MarkerAnnotationConstructorOptions
    extends AnnotationConstructorOptions {
    /**
     * The background color of the balloon.
     * @public
     */
    color?: string;
    /**
     * The fill color of the glyph.
     * @public
     */
    glyphColor?: string;
    /**
     * The image to display in the marker balloon.
     * @public
     */
    glyphImage?: ImageDelegate | ImageHashObject | null;
    /**
     * The image to display in the balloon when the user selects the marker.
     * @public
     */
    selectedGlyphImage?: ImageDelegate | ImageHashObject | null;
    /**
     * The text to display in the marker balloon.
     * @public
     */
    glyphText?: string;
    /**
     * A value that determines the behavior of the title's visibility.
     * @public
     */
    titleVisibility?: boolean;
    /**
     * A value that determines the behavior of the subtitle's visibility.
     * @public
     */
    subtitleVisibility?: boolean;
}

/**
 * An abstract base object that defines the methods and attributes for map overlays.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.overlay Read more.}
 * @public
 */
declare abstract class Overlay extends MapKitEventTarget {
    /**
     * Style properties to apply to the overlay.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.overlay/style Read more.}
     * @public
     */
    get style(): Style;
    set style(style: Style);

    /**
     * The map you add the overlay to.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.overlay/map Read more.}
     * @public
     */
    get map(): Map | null;
    set map(_: Map | null);
    /**
     * Custom data to associate with the overlay.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.overlay/data Read more.}
     * @public
     */
    get data(): {};
    set data(data: {});
    /**
     * A Boolean value that determines whether an overlay is visible.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.overlay/visible Read more.}
     * @public
     */
    get visible(): boolean;
    set visible(visible: boolean);
    /**
     * A Boolean value that determines whether the overlay responds to user interaction.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.overlay/enabled Read more.}
     * @public
     */
    get enabled(): boolean;
    set enabled(value: boolean);
    /**
     * A Boolean value that indicates whether the user selects the overlay.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.overlay/selected Read more.}
     * @public
     */
    get selected(): boolean;
    set selected(value: boolean);
}

/**
 * A dictionary of options that determines an overlay's data, and indicates whether it's visible, in an enabled state, and in a selected state.
 * {@link https://developer.apple.com/documentation/mapkitjs/overlayoptions Read more.}
 * @public
 */
declare interface OverlayOptions {
    /**
     * A Boolean value that determines if an overlay is visible.
     * @public
     */
    visible?: boolean;
    /**
     * A Boolean value that determines whether the overlay responds to user interaction.
     * @public
     */
    enabled?: boolean;
    /**
     * A Boolean value that indicates whether the overlay is in a selected state.
     * @public
     */
    selected?: boolean;
    /**
     * Custom data to associate with the overlay.
     * @public
     */
    data?: object;
    /**
     * @public
     */
    style?: Style;
}

/**
 * The values that define content padding within the map view frame.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.padding Read more.}
 * @public
 */
export declare class Padding {
    /**
     * The amount of padding, in CSS pixels, to inset the map from the top edge.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.padding/top Read more.}
     * @public
     */
    top: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the right edge.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.padding/right Read more.}
     * @public
     */
    right: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the bottom edge.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.padding/bottom Read more.}
     * @public
     */
    bottom: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the left edge.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.padding/left Read more.}
     * @public
     */
    left: number;
    /**
     * Creates a padding object and initializes its inset margin properties.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.padding/mapkit.padding Read more.}
     * @param top An object literal with the keys defined in {@link PaddingConstructorOptions}, or a list of four numbers that represent inset margin values. The numbers represent the top, right, bottom, and left insets, respectively.
     * @public
     */
    constructor();
    /**
     * Creates a padding object and initializes its inset margin properties.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.padding/mapkit.padding Read more.}
     * @param top An object literal with the keys defined in {@link PaddingConstructorOptions}, or a list of four numbers that represent inset margin values. The numbers represent the top, right, bottom, and left insets, respectively.
     * @public
     */
    constructor(paddings: PaddingConstructorOptions);
    /**
     * Creates a padding object and initializes its inset margin properties.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.padding/mapkit.padding Read more.}
     * @param top An object literal with the keys defined in {@link PaddingConstructorOptions}, or a list of four numbers that represent inset margin values. The numbers represent the top, right, bottom, and left insets, respectively.
     * @public
     */
    constructor(top: number);
    /**
     * Creates a padding object and initializes its inset margin properties.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.padding/mapkit.padding Read more.}
     * @param top An object literal with the keys defined in {@link PaddingConstructorOptions}, or a list of four numbers that represent inset margin values. The numbers represent the top, right, bottom, and left insets, respectively.
     * @public
     */
    constructor(top: number, right: number);
    /**
     * Creates a padding object and initializes its inset margin properties.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.padding/mapkit.padding Read more.}
     * @param top An object literal with the keys defined in {@link PaddingConstructorOptions}, or a list of four numbers that represent inset margin values. The numbers represent the top, right, bottom, and left insets, respectively.
     * @public
     */
    constructor(top: number, right: number, bottom: number);
    /**
     * Creates a padding object and initializes its inset margin properties.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.padding/mapkit.padding Read more.}
     * @param top An object literal with the keys defined in {@link PaddingConstructorOptions}, or a list of four numbers that represent inset margin values. The numbers represent the top, right, bottom, and left insets, respectively.
     * @public
     */
    constructor(top: number, right: number, bottom: number, left: number);
    /**
     * Object representing no paddings.
     * */
    static readonly Zero: Padding;
    /**
     * Return string representation of Padding object.
     * @example
     * Padding(5, 10, 0, 25)
     * */
    toString(): string;
    /**
     * Return a cloned copy of this padding object.
     * */
    copy(): Padding;
    /**
     * Check if given padding object equals to this one.
     */
    equals(anotherPadding: Padding): boolean;
}

/**
 * Initial values of the edge insets for padding.
 * {@link https://developer.apple.com/documentation/mapkitjs/paddingconstructoroptions Read more.}
 * @public
 */
declare interface PaddingConstructorOptions {
    /**
     * The amount of padding, in CSS pixels, to inset the map from the top edge.
     * @public
     */
    top: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the right edge.
     * @public
     */
    right: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the bottom edge.
     * @public
     */
    bottom: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the left edge.
     * @public
     */
    left: number;
}

/**
 * A place object that returns from a geocoder lookup, a reverse lookup, or a fetch request for points of interest.
 * {@link https://developer.apple.com/documentation/mapkitjs/place Read more.}
 * @public
 */
export declare class Place {
    #private;
    /**
     * The Place ID referencing a feature.
     * @public
     */
    id?: string;
    /**
     * A list of alternate Place IDs referencing a feature.
     * @public
     */
    alternateIds?: string[];

    /**
     * The category of the place.
     * @public
     */
    pointOfInterestCategory?: string;
    /**
     * The name of the place.
     * @public
     */
    name?: string;

    /**
     * The geographic region associated with the place.
     * @public
     */
    region?: CoordinateRegion;
    /**
     * The latitude and longitude for the place.
     * @public
     */
    coordinate?: Coordinate;
    /**
     * The address of the place, formatted using its conventions of its country or region.
     * @public
     */
    formattedAddress?: string;
    /**
     * The country or region associated with the place.
     * @public
     */
    countryCode?: string;

    /**
     * The country or region of the place.
     * @public
     */
    country?: string;
    /**
     * The state or province of the place.
     * @public
     */
    administrativeArea?: string;
    /**
     * The short code for the state or area.
     * @public
     */
    administrativeAreaCode?: string;
    /**
     * The city of the place.
     * @public
     */
    locality?: string;
    /**
     * The postal code of the place.
     * @public
     */
    postCode?: string;
    /**
     * The name of the area within the locality.
     * @public
     */
    subLocality?: string;
    /**
     * The street name at the place.
     * @public
     */
    thoroughfare?: string;
    /**
     * The number on the street at the place.
     * @public
     */
    subThoroughfare?: string;
    /**
     * A combination of thoroughfare and subthoroughfare.
     * @public
     */
    fullThoroughfare?: string;
    /**
     * Common names of the area in which the place resides.
     * @public
     */
    areasOfInterest?: string[];
    /**
     * Common names for the local area or neighborhood of the place.
     * @public
     */
    dependentLocalities?: string[];
}

/**
 * An annotation for a place.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.placeannotation Read more.}
 * @public
 */
export declare class PlaceAnnotation extends MarkerAnnotation {
    /**
     * Creates a new place annotation.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.placeannotation/mapkit.placeannotation Read more.}
     * @public
     */
    constructor(
        coordinate: Coordinate | Place | SearchAutocompleteResult,
        options?: MarkerAnnotationConstructorOptions
    );
    get element(): HTMLElement;
    get coordinate(): Coordinate;
    get draggable(): boolean;
    get appearanceAnimation(): string;
    get anchorOffset(): DOMPoint;
    get padding(): Padding;
    get size(): Size_2;
    get glyphText(): string;
    get color(): string;
    get glyphColor(): string;
    get glyphImage(): MapFeatureAnnotationGlyphImage | null;
    get selectedGlyphImage(): MapFeatureAnnotationGlyphImage | null;
}

/**
 * An interactive view that displays information about a place.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.placedetail Read more.}
 * @public
 */
export declare class PlaceDetail {
    #private;
    /**
     * A representation of a place detail.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.placedetail/mapkit.placedetail Read more.}
     * @public
     */
    constructor(
        parent: HTMLElement,
        place?: Place | null,
        options?: PlaceDetailOptions
    );
    /**
     * The place detail's DOM element.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.placedetail/element Read more.}
     * @public
     */
    get element(): HTMLElement;
    /**
     * The place that the place detail displays.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.placedetail/place Read more.}
     * @public
     */
    get place(): Place | null;
    set place(value: Place | null);
    /**
     * The color scheme when displaying a place detail.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.placedetail/colorscheme Read more.}
     * @public
     */
    get colorScheme(): ColorScheme;
    set colorScheme(colorScheme: ColorScheme);
    /**
     * A Boolean value that indicates whether to display the map in the place detail.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.placedetail/displaysmap Read more.}
     * @public
     */
    get displaysMap(): boolean;
    set displaysMap(displaysMap: boolean);
    /**
     * Terminates a place detail.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.placedetail/destroy Read more.}
     * @public
     */
    destroy(): void;
    static ColorSchemes: typeof ColorScheme;
}

/**
 * @public
 */
declare interface PlaceDetailOptions {
    colorScheme?: ColorScheme;
    displaysMap?: boolean;
}

/**
 * An object that provides the ability to look up place information for a specified Place ID.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.placelookup Read more.}
 * @public
 */
export declare class PlaceLookup extends Service {
    /**
     * Creates a place lookup with a set of options.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.placelookup/mapkit.placelookup Read more.}
     * @public
     */
    constructor(options: ServiceOptions);
    /**
     * Obtains a place using its identifier.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.placelookup/getplace Read more.}
     * @public
     */
    getPlace(
        id: string,
        callback: (error: Error | null, result?: Place) => void,
        options: ServiceOptions
    ): number;
}

/**
 * The accessory that conveys information about a place associated with an annotation.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.placeselectionaccessory Read more.}
 * @public
 */
export declare class PlaceSelectionAccessory {
    static Styles: typeof PlaceSelectionAccessoryStyle;

    /**
     * Creates a new place selection accessory.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.placeselectionaccessory/mapkit.placeselectionaccessory Read more.}
     * @public
     */
    constructor({ style }?: PlaceSelectionAccessoryOptions);
    /**
     * The visual appearance of the place selection accessory.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.placeselectionaccessory/style Read more.}
     * @public
     */
    get style(): PlaceSelectionAccessoryStyle;
    set style(value: PlaceSelectionAccessoryStyle);
}

/**
 * The options for selection accessories.
 * {@link https://developer.apple.com/documentation/mapkitjs/placeselectionaccessoryoptions Read more.}
 * @public
 */
declare interface PlaceSelectionAccessoryOptions {
    /**
     * The visual presentation for the selection accessory.
     * @public
     */
    style?: PlaceSelectionAccessoryStyle;
}

/**
 * @enum
 * @public
 */
declare const PlaceSelectionAccessoryStyle: Readonly<{
    readonly Automatic: "automatic";
    readonly Callout: "callout";
    readonly FullCallout: "fullCallout";
    readonly CompactCallout: "compactCallout";
    readonly OpenInMaps: "openInMaps";
}>;

/**
 * @public
 */
declare type PlaceSelectionAccessoryStyle = Enum.Values<
    typeof PlaceSelectionAccessoryStyle
>;

/**
 * Point-of-interest categories.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory Read more.}
 * @public
 * @enum
 */
export declare const PointOfInterestCategory: Readonly<{
    /**
     * The point-of-interest category for airports.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/airport Read more.}
     * @public
     */
    readonly Airport: "Airport";
    /**
     * The point-of-interest category for amusement parks.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/amusementpark Read more.}
     * @public
     */
    readonly AmusementPark: "AmusementPark";
    readonly AnimalService: "AnimalService";
    /**
     * The point-of-interest category for aquariums.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/aquarium Read more.}
     * @public
     */
    readonly Aquarium: "Aquarium";
    /**
     * The point-of-interest category for ATMs.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/atm Read more.}
     * @public
     */
    readonly ATM: "ATM";
    readonly AutomotiveRepair: "AutomotiveRepair";
    /**
     * The point-of-interest category for bakeries.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/bakery Read more.}
     * @public
     */
    readonly Bakery: "Bakery";
    /**
     * The point-of-interest category for banks.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/bank Read more.}
     * @public
     */
    readonly Bank: "Bank";
    readonly Baseball: "Baseball";
    readonly Basketball: "Basketball";
    /**
     * The point-of-interest category for beaches.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/beach Read more.}
     * @public
     */
    readonly Beach: "Beach";
    readonly Beauty: "Beauty";
    readonly Bowling: "Bowling";
    /**
     * The point-of-interest category for breweries.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/brewery Read more.}
     * @public
     */
    readonly Brewery: "Brewery";
    /**
     * The point-of-interest category for cafes.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/cafe Read more.}
     * @public
     */
    readonly Cafe: "Cafe";
    /**
     * The point-of-interest category for campgrounds.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/campground Read more.}
     * @public
     */
    readonly Campground: "Campground";
    /**
     * The point-of-interest category for car rentals.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/carrental Read more.}
     * @public
     */
    readonly CarRental: "CarRental";
    readonly Castle: "Castle";
    readonly ConventionCenter: "ConventionCenter";
    readonly Distillery: "Distillery";
    /**
     * The point-of-interest category for EV chargers.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/evcharger Read more.}
     * @public
     */
    readonly EVCharger: "EVCharger";
    readonly Fairground: "Fairground";
    /**
     * The point-of-interest category for fire stations.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/firestation Read more.}
     * @public
     */
    readonly FireStation: "FireStation";
    readonly Fishing: "Fishing";
    /**
     * The point-of-interest category for fitness centers.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/fitnesscenter Read more.}
     * @public
     */
    readonly FitnessCenter: "FitnessCenter";
    /**
     * The point-of-interest category for food markets, supermarkets, grocery stores, and convenience stores.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/foodmarket Read more.}
     * @public
     */
    readonly FoodMarket: "FoodMarket";
    readonly Fortress: "Fortress";
    /**
     * The point-of-interest category for gas stations.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/gasstation Read more.}
     * @public
     */
    readonly GasStation: "GasStation";
    readonly GoKart: "GoKart";
    readonly Golf: "Golf";
    readonly Hiking: "Hiking";
    /**
     * The point-of-interest category for hospitals.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/hospital Read more.}
     * @public
     */
    readonly Hospital: "Hospital";
    /**
     * The point-of-interest category for hotels.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/hotel Read more.}
     * @public
     */
    readonly Hotel: "Hotel";
    readonly Kayaking: "Kayaking";
    readonly Landmark: "Landmark";
    /**
     * The point-of-interest category for laundries.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/laundry Read more.}
     * @public
     */
    readonly Laundry: "Laundry";
    /**
     * The point-of-interest category for libraries.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/library Read more.}
     * @public
     */
    readonly Library: "Library";
    readonly Mailbox: "Mailbox";
    /**
     * The point-of-interest category for marinas.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/marina Read more.}
     * @public
     */
    readonly Marina: "Marina";
    readonly MiniGolf: "MiniGolf";
    /**
     * The point-of-interest category for movie theaters.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/movietheater Read more.}
     * @public
     */
    readonly MovieTheater: "MovieTheater";
    /**
     * The point-of-interest category for museums.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/museum Read more.}
     * @public
     */
    readonly Museum: "Museum";
    readonly MusicVenue: "MusicVenue";
    readonly NationalMonument: "NationalMonument";
    /**
     * The point-of-interest category for national parks.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/nationalpark Read more.}
     * @public
     */
    readonly NationalPark: "NationalPark";
    /**
     * The point-of-interest category for nightlife.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/nightlife Read more.}
     * @public
     */
    readonly Nightlife: "Nightlife";
    /**
     * The point-of-interest category for parks.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/park Read more.}
     * @public
     */
    readonly Park: "Park";
    /**
     * The point-of-interest category for parking locations.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/parking Read more.}
     * @public
     */
    readonly Parking: "Parking";
    /**
     * The point-of-interest category for pharmacies.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/pharmacy Read more.}
     * @public
     */
    readonly Pharmacy: "Pharmacy";
    readonly Planetarium: "Planetarium";
    /**
     * The point-of-interest category for police.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/police Read more.}
     * @public
     */
    readonly Police: "Police";
    /**
     * The point-of-interest category for post offices.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/postoffice Read more.}
     * @public
     */
    readonly PostOffice: "PostOffice";
    /**
     * The point-of-interest category for locations of public transportation.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/publictransport Read more.}
     * @public
     */
    readonly PublicTransport: "PublicTransport";
    /**
     * The point-of-interest category for restaurants.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/restaurant Read more.}
     * @public
     */
    readonly Restaurant: "Restaurant";
    /**
     * The point-of-interest category for restrooms.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/restroom Read more.}
     * @public
     */
    readonly Restroom: "Restroom";
    readonly RockClimbing: "RockClimbing";
    readonly RVPark: "RVPark";
    /**
     * The point-of-interest category for schools.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/school Read more.}
     * @public
     */
    readonly School: "School";
    readonly SkatePark: "SkatePark";
    readonly Skating: "Skating";
    readonly Skiing: "Skiing";
    readonly Soccer: "Soccer";
    readonly Spa: "Spa";
    /**
     * The point-of-interest category for stadiums.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/stadium Read more.}
     * @public
     */
    readonly Stadium: "Stadium";
    /**
     * The point-of-interest category for stores.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/store Read more.}
     * @public
     */
    readonly Store: "Store";
    readonly Surfing: "Surfing";
    readonly Swimming: "Swimming";
    readonly Tennis: "Tennis";
    /**
     * The point-of-interest category for theaters.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/theater Read more.}
     * @public
     */
    readonly Theater: "Theater";
    /**
     * The point-of-interest category for universities.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/university Read more.}
     * @public
     */
    readonly University: "University";
    readonly Volleyball: "Volleyball";
    /**
     * The point-of-interest category for wineries.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/winery Read more.}
     * @public
     */
    readonly Winery: "Winery";
    /**
     * The point-of-interest category for zoos.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory/zoo Read more.}
     * @public
     */
    readonly Zoo: "Zoo";
}>;

/**
 * Point-of-interest categories.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestcategory Read more.}
 * @public
 */
export declare type PointOfInterestCategory = Enum.Values<
    typeof PointOfInterestCategory
>;

/**
 * A filter for determining the points of interest to include or exclude on a map or in a local search.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestfilter Read more.}
 * @public
 */
export declare class PointOfInterestFilter {
    constructor(options: PointOfInterestFilterOptions);

    /**
     * Returns a Boolean value that indicates whether the filter includes the provided point-of-interest category.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestfilter/includescategory Read more.}
     * @public
     */
    includesCategory(category: PointOfInterestCategory): boolean | undefined;
    /**
     * Returns a Boolean value that indicates whether the filter excludes the provided point-of-interest category.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestfilter/excludescategory Read more.}
     * @public
     */
    excludesCategory(category: PointOfInterestCategory): boolean | undefined;
    /**
     * A filter that excludes all point-of-interest categories.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestfilter/excludingallcategories Read more.}
     * @public
     */
    static excludingAllCategories: () => PointOfInterestFilter;
    /**
     * A filter that includes all point-of-interest categories.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestfilter/includingallcategories Read more.}
     * @public
     */
    static includingAllCategories: () => PointOfInterestFilter;
    /**
     * Creates a point of interest filter that includes categories from a list that you provide.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestfilter/including Read more.}
     * @public
     */
    static including(
        categories: PointOfInterestCategory[]
    ): PointOfInterestFilter;
    /**
     * Creates a point of interest filter that excludes categories from a list that you provide.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointofinterestfilter/excluding Read more.}
     * @public
     */
    static excluding(
        categories: PointOfInterestCategory[]
    ): PointOfInterestFilter;
}

/**
 * @public
 */
declare interface PointOfInterestFilterOptions {
    includes?: PointOfInterestCategory[];
    excludes?: PointOfInterestCategory[];
}

/**
 * An object that fetches points of interest within a specified region.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointsofinterestsearch Read more.}
 * @public
 */
export declare class PointsOfInterestSearch extends Service {
    /**
     * Creates a search object for fetching points of interest.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointsofinterestsearch/mapkit.pointsofinterestsearch Read more.}
     * @public
     */
    constructor(options?: PointsOfInterestSearchOptions);
    /**
     * The center point of the request represented as latitude and longitude.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointsofinterestsearch/center Read more.}
     * @public
     */
    get center(): Coordinate | null;
    set center(value: Coordinate | null);
    /**
     * The distance provided in meters, or the longest distance derived from the center point to the region's bounding box.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointsofinterestsearch/radius Read more.}
     * @public
     */
    get radius(): number | null;
    set radius(value: number | null);
    /**
     * The region that bounds the area in which to fetch points of interest.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointsofinterestsearch/region Read more.}
     * @public
     */
    get region(): CoordinateRegion | null;
    set region(value: CoordinateRegion | null);
    /**
     * A filter that lists points of interest categories to include or exclude.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointsofinterestsearch/pointofinterestfilter Read more.}
     * @public
     */
    get pointOfInterestFilter(): PointOfInterestFilter | null;
    set pointOfInterestFilter(value: PointOfInterestFilter | null);
    /**
     * Fetches points of interest.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointsofinterestsearch/search Read more.}
     * @param callback A callback function or delegate object with the following parameters:
     * @public
     */
    search(
        callback: PointsOfInterestSearchDelegate,
        options?: PointsOfInterestSearchOptions
    ): number | undefined;
    /**
     * The maximum distance to use from the center of the region for fetching points of interest.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.pointsofinterestsearch/maxradius Read more.}
     * @public
     */
    static readonly MaxRadius: number;
}

/**
 * An object or callback function that MapKit JS calls when fetching points of interest.
 * {@link https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchdelegate Read more.}
 * @public
 */
declare type PointsOfInterestSearchDelegate =
    | {
          /**
           * Tells the delegate that the search failed due to an error.
           * {@link https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchdelegate/searchdiderror Read more.}
           * @param error The error from a failed fetch for points of interest.
           * @public
           */
          searchDidError: (error: Error) => void;
          /**
           * Tells the delegate that the search completed.
           * {@link https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchdelegate/searchdidcomplete Read more.}
           * @param data The points of interest fetch results.
           * @public
           */
          searchDidComplete: (result: PointsOfInterestSearchResponse) => void;
      }
    | ((error: Error | null, result?: PointsOfInterestSearchResponse) => void);

/**
 * Options that you may provide when you create a points of interest search.
 * {@link https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchoptions Read more.}
 * @public
 */
declare interface PointsOfInterestSearchOptions extends ServiceOptions {
    /**
     * The center point of the request represented as latitude and longitude.
     * @public
     */
    center?: Coordinate;
    /**
     * The distance provided in meters, or the longest distance derived from the center point to the region's bounding box.
     * @public
     */
    radius?: number;
    /**
     * The region that bounds the area in which to fetch points of interest.
     * @public
     */
    region?: CoordinateRegion;
    /**
     * A filter that lists points of interest categories to include or exclude.
     * @public
     */
    pointOfInterestFilter?: PointOfInterestFilter;
}

/**
 * The result of a request used to fetch points of interest.
 * {@link https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchresponse Read more.}
 * @public
 */
declare interface PointsOfInterestSearchResponse {
    /**
     * The list of points of interest that match the request options.
     * @public
     */
    places: Place[];
}

/**
 * An overlay consisting of one or more points that forms a closed shape.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.polygonoverlay Read more.}
 * @public
 */
export declare class PolygonOverlay extends Overlay {
    /**
     * Creates a polygon overlay with an array of points and style options.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.polygonoverlay/mapkit.polygonoverlay Read more.}
     * @param points The points in the polygon as an array of arrays of {@link Coordinate}, or an array of {@link Coordinate}. For the latter, MapKit JS autowraps the array with an enclosing array.
     * @param options An optional object literal of options for initializing the polygon.
     * @public
     */
    constructor(points: Coordinate[][] | Coordinate[], options: OverlayOptions);
    /**
     * One or more arrays of coordinates that define the polygon overlay shape.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.polygonoverlay/points Read more.}
     * @public
     */
    get points(): Coordinate[][];
    set points(points: Coordinate[][]);
}

/**
 * An overlay of connected line segments that don't form a closed shape.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.polylineoverlay Read more.}
 * @public
 */
export declare class PolylineOverlay extends Overlay {
    /**
     * Creates a polyline overlay with coordinate points and style options.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.polylineoverlay/mapkit.polylineoverlay Read more.}
     * @param points The required points in the polyline as an array of {@link Coordinate}.
     * @param options An optional object literal of style options for initializing the polyline.
     * @public
     */
    constructor(points: Coordinate[], options?: OverlayOptions);
    /**
     * An array of coordinate points that define the polyline overlay's shape.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.polylineoverlay/points Read more.}
     * @public
     */
    get points(): Coordinate[];
    set points(points: Coordinate[]);
}

/**
 * @enum
 * @public
 */
declare const RegionPriority: Readonly<{
    readonly Default: "default";
    readonly Required: "required";
}>;

/**
 * @public
 */
declare type RegionPriority = Enum.Values<typeof RegionPriority>;

/**
 * Information about a route, including step-by-step instructions, distance, and estimated travel time.
 * {@link https://developer.apple.com/documentation/mapkitjs/route Read more.}
 * @public
 */
declare class Route {
    /**
     * The name assigned to the route.
     * @public
     */
    name: string;
    /**
     * The route distance, in meters.
     * @public
     */
    distance: number;
    /**
     * The expected travel time, in seconds.
     * @public
     */
    expectedTravelTime: number;
    /**
     * The overall route transport type.
     * @public
     */
    transportType?: string;
    /**
     * A Boolean value that indicates whether a route has tolls.
     * @public
     */
    hasTolls?: boolean;

    /**
     * An array of steps that compose the overall route.
     * @public
     */
    steps: Step[];

    /**
     * An array of coordinate objects representing the path of the route.
     * @public
     */
    get path(): Coordinate[][];

    /**
     * An instance of a polyline overlay that represents the path of a route.
     * @public
     */
    get polyline(): void;
}

/**
 * An object that retrieves map-based search results for a user-entered query.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.search Read more.}
 * @public
 */
export declare class Search extends Service {
    /**
     * Creates a search object with optional initial values that you provide.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.search/mapkit.search Read more.}
     * @public
     */
    constructor(options: SearchConstructorOptions);
    get coordinate(): Coordinate | null;
    set coordinate(value: Coordinate | null);
    get region(): CoordinateRegion | null;
    set region(value: CoordinateRegion | null);
    get regionPriority(): RegionPriority;
    set regionPriority(value: RegionPriority);
    get includeAddresses(): boolean;
    set includeAddresses(value: boolean);
    get includePointsOfInterest(): boolean;
    set includePointsOfInterest(value: boolean);
    get includePhysicalFeatures(): boolean;
    set includePhysicalFeatures(value: boolean);
    get includeQueries(): boolean;
    set includeQueries(value: boolean);
    get addressFilter(): AddressFilter | null;
    set addressFilter(value: AddressFilter | null);
    get pointOfInterestFilter(): PointOfInterestFilter | null;
    set pointOfInterestFilter(value: PointOfInterestFilter | null);
    get limitToCountries(): string | null;
    set limitToCountries(value: string | null);
    /**
     * Retrieves the results of a search query.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.search/search Read more.}
     * @param query  A `String` or a {@link SearchAutocompleteResult}.
     * @param callback A callback function or delegate object.
     * @param options With the `options` hash, you can constrain the search to a desired area using the `coordinate` or `region` properties. A coordinate or region you supply here overrides the same property you supply to the {@link Search} constructor. Another option is {@link mapkit.language}. For example, `{ language: 'fr-CA' }` tells the server to send results localized to Canadian French. If you set it, this option overrides the language the system provides to the search constructor.
     * @public
     */
    search(
        query: string | SearchAutocompleteResult,
        callback: SearchDelegate<SearchResponse>,
        options: SearchOptions
    ): number;
    /**
     * Retrieves a list of autocomplete results for the specified search query.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.search/autocomplete Read more.}
     * @param query A string that represents the user's search in progress.
     * @param callback A callback function or delegate object.
     * @param options With the {@link SearchAutocompleteOptions} hash, you have the option to constrain the search to a desired area using the {@link SearchConstructorOptions.coordinate} or {@link SearchConstructorOptions.region} properties. A coordinate or region you supply here overrides the same property you supply to the {@link Search} constructor. You also have the option to override the {@link mapkit.language} for the search constructor. For example, `{ language: 'fr-CA' }` tells the server to send results localized to Canadian French. For a complete list of options you can use to constrain your search, see {@link SearchAutocompleteOptions}.
     * @public
     */
    autocomplete(
        query: string,
        callback: SearchDelegate<SearchAutocompleteResponse>,
        options: SearchAutocompleteOptions
    ): number;
    static RegionPriority: typeof RegionPriority;
}

/**
 * Options you provide to constrain an autocomplete request.
 * {@link https://developer.apple.com/documentation/mapkitjs/searchautocompleteoptions Read more.}
 * @public
 */
declare interface SearchAutocompleteOptions {
    /**
     * A language ID that determines the language for the search result text.
     * @public
     */
    language?: string;
    /**
     * A map coordinate that provides a hint for the geographic area to search.
     * @public
     */
    coordinate?: Coordinate;
    /**
     * A map region that provides a hint for the geographic area to search.
     * @public
     */
    region?: CoordinateRegion;
    /**
     * A Boolean value that indicates whether the search results include addresses.
     * @public
     */
    includeAddresses?: boolean;
    /**
     * A Boolean value that indicates whether the search results include points of interest.
     * @public
     */
    includePointsOfInterest?: boolean;
    /**
     * A Boolean value that indicates whether the autocomplete search results include physical features, such as mountain ranges, rivers, and ocean basins.
     * @public
     */
    includePhysicalFeatures?: boolean;
    /**
     * A filter used to include or exclude point of interest categories in search results.
     * @public
     */
    pointOfInterestFilter?: PointOfInterestFilter;
    /**
     * A filter that lists which address options to include or exclude in search results.
     * @public
     */
    addressFilter?: AddressFilter;
    /**
     * A string that constrains search results to within the provided countries.
     * @public
     */
    limitToCountries?: string;
    /**
     * A filter that controls whether results occur outside, or strictly within, the region.
     * @public
     */
    regionPriority?: RegionPriority;
    /**
     * A Boolean value that indicates whether the search results include queries.
     * @public
     */
    includeQueries?: boolean;
}

/**
 * An object containing the response from an autocomplete request.
 * {@link https://developer.apple.com/documentation/mapkitjs/searchautocompleteresponse Read more.}
 * @public
 */
declare interface SearchAutocompleteResponse {
    /**
     * The query string used to perform the autocomplete request.
     * @public
     */
    query: string;
    /**
     * The results from an autocomplete request.
     * @public
     */
    results: SearchAutocompleteResult[];
}

/**
 * The result of an autocomplete query, including display lines and a coordinate.
 * {@link https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult Read more.}
 * @public
 */
export declare class SearchAutocompleteResult {
    /**
     * Lines of text to display to the user in an autocomplete menu.
     * @public
     */
    displayLines: string[];
    id?: string;
    alternateIds?: string[];
    muid?: string;
    /**
     * The coordinate of the result when it corresponds to a single place.
     * @public
     */
    coordinate?: Coordinate;

    name?: string | undefined;

    administrativeArea?: string;
    administrativeAreaCode?: string;
    locality?: string;
    postCode?: string;
    subLocality?: string;
    thoroughfare?: string;
    subThoroughfare?: string;
    fullThoroughfare?: string;
    areasOfInterest?: string[];
    dependentLocalities?: string[];
}

/**
 * Options you provide when you create a search object.
 * {@link https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions Read more.}
 * @public
 */
declare type SearchConstructorOptions = SearchAutocompleteOptions &
    ServiceOptions;

/**
 * An object or callback function the framework calls when performing a search or an autocomplete request.
 * {@link https://developer.apple.com/documentation/mapkitjs/searchdelegate Read more.}
 * @public
 */
declare type SearchDelegate<
    T extends SearchResponse | SearchAutocompleteResponse =
        | SearchResponse
        | SearchAutocompleteResponse
> =
    | {
          /**
           * Tells the delegate when the search fails due to an error.
           * {@link https://developer.apple.com/documentation/mapkitjs/searchdelegate/searchdiderror Read more.}
           * @param error The error from a failed search.
           * @public
           */
          searchDidError: (error: Error) => void;
          /**
           * Tells the delegate when the search completes.
           * {@link https://developer.apple.com/documentation/mapkitjs/searchdelegate/searchdidcomplete Read more.}
           * @param data The search results.
           * @public
           */
          searchDidComplete: (result: SearchResponse) => void;
          /**
           * Tells the delegate when the autocomplete request fails due to an error.
           * {@link https://developer.apple.com/documentation/mapkitjs/searchdelegate/autocompletediderror Read more.}
           * @param error The error from a failed autocomplete request.
           * @public
           */
          autocompleteDidError: (error: Error) => void;
          /**
           * Tells the delegate when the autocomplete request completes.
           * {@link https://developer.apple.com/documentation/mapkitjs/searchdelegate/autocompletedidcomplete Read more.}
           * @param data The results from the search autocomplete request.
           * @public
           */
          autocompleteDidComplete: (result: SearchAutocompleteResponse) => void;
      }
    | ((error: Error | null, result?: T) => void);

/**
 * An object that contains options to adjust a search.
 * {@link https://developer.apple.com/documentation/mapkitjs/searchoptions Read more.}
 * @public
 */
declare type SearchOptions = Omit<SearchAutocompleteOptions, "includeQueries">;

/**
 * The result of a search, including the original search query, the bounding region, and a list of places that match the query.
 * {@link https://developer.apple.com/documentation/mapkitjs/searchresponse Read more.}
 * @public
 */
declare interface SearchResponse {
    /**
     * The query string for performing the search.
     * @public
     */
    query?: string | SearchAutocompleteResult;
    /**
     * The region that encloses the places from the search results.
     * @public
     */
    boundingRegion?: CoordinateRegion;
    /**
     * A list of places that match the search query.
     * @public
     */
    places: Place[];
}

/**
 * @public
 */
declare class Service {
    get getsUserLocation(): boolean;
    set getsUserLocation(value: boolean);
    get language(): string | null;
    set language(value: string | null);
    cancel(id: number): boolean;
}

/**
 * @public
 */
declare interface ServiceOptions {
    language?: string;
    getsUserLocation?: boolean;
}

/**
 * @public
 */
declare interface Size_2 {
    width: number;
    height: number;
}

/**
 * A single step of the route between the requested start and end points.
 * {@link https://developer.apple.com/documentation/mapkitjs/routestep Read more.}
 * @public
 */
declare class Step {
    /**
     * The written instructions for following the path that the step represents.
     * @public
     */
    instructions: string;
    pathIndex: number;
    /**
     * The step distance, in meters.
     * @public
     */
    distance: number;
    /**
     * The transport type of the step.
     * @public
     */
    transportType?: string;
    /**
     * An array of coordinate objects representing the path of the route segment.
     * @public
     */
    path?: Coordinate[];
}

/**
 * A set of observable attributes for overlays, including the color and opacity of strokes and fills, and line styles.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.style Read more.}
 * @public
 */
export declare class Style {
    /**
     * Creates and initializes a style object.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.style/mapkit.style Read more.}
     * @param options A {@link StyleConstructorOptions} object of style properties.
     * @public
     */
    constructor(properties?: StyleConstructorOptions);
    /**
     * The stroke color of a line.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.style/strokecolor Read more.}
     * @public
     */
    get strokeColor(): string;
    set strokeColor(strokeColor: string);
    /**
     * The opacity of the stroke color.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.style/strokeopacity Read more.}
     * @public
     */
    get strokeOpacity(): number;
    set strokeOpacity(strokeOpacity: number);
    /**
     * The unit distance along the line where a stroke begins.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.style/strokestart Read more.}
     * @public
     */
    get strokeStart(): number;
    set strokeStart(strokeStart: number);
    /**
     * The unit distance along the line where a stroke ends.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.style/strokeend Read more.}
     * @public
     */
    get strokeEnd(): number;
    set strokeEnd(strokeEnd: number);
    /**
     * The width of a line's stroke, in CSS pixels.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.style/linewidth Read more.}
     * @public
     */
    get lineWidth(): number;
    set lineWidth(lineWidth: number);
    /**
     * The style to use when drawing line endings.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.style/linecap Read more.}
     * @public
     */
    get lineCap(): CanvasLineCap;
    set lineCap(lineCap: CanvasLineCap);
    /**
     * The corner style to apply when joining line segments.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.style/linejoin Read more.}
     * @public
     */
    get lineJoin(): CanvasLineJoin;
    set lineJoin(lineJoin: CanvasLineJoin);
    /**
     * An array of line and gap lengths for creating a dashed line.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.style/linedash Read more.}
     * @public
     */
    get lineDash(): number[];
    set lineDash(lineDash: number[]);
    /**
     * The number of CSS pixels to use as an offset when drawing a line's dash pattern.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.style/linedashoffset Read more.}
     * @public
     */
    get lineDashOffset(): number;
    set lineDashOffset(lineDashOffset: number);
    /**
     * The gradient to apply along the line.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.style/linegradient Read more.}
     * @public
     */
    get lineGradient(): LineGradient | null;
    set lineGradient(lineGradient: LineGradient | null);
    /**
     * The fill color of a shape.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.style/fillcolor Read more.}
     * @public
     */
    get fillColor(): string;
    set fillColor(fillColor: string);
    /**
     * The opacity of the fill color.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.style/fillopacity Read more.}
     * @public
     */
    get fillOpacity(): number;
    set fillOpacity(fillOpacity: number);
    /**
     * A rule for determining whether a point is inside or outside a polygon.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.style/fillrule Read more.}
     * @public
     */
    get fillRule(): CanvasFillRule;
    set fillRule(fillRule: CanvasFillRule);
    toString(): string;
}

/**
 * Initial values of options for applying style to overlays.
 * {@link https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions Read more.}
 * @public
 */
declare interface StyleConstructorOptions {
    /**
     * The stroke color of a line.
     * @public
     */
    strokeColor?: string;
    /**
     * The opacity of the stroke color.
     * @public
     */
    strokeOpacity?: number;
    /**
     * The unit distance along the line where a stroke begins.
     * @public
     */
    strokeStart?: number;
    /**
     * The unit distance along the line where a stroke ends.
     * @public
     */
    strokeEnd?: number;
    /**
     * The width of a line's stroke, in CSS pixels.
     * @public
     */
    lineWidth?: number;
    /**
     * The style to use when drawing line endings.
     * @public
     */
    lineCap?: CanvasLineCap;
    /**
     * The style to use when drawing joins between line segments.
     * @public
     */
    lineJoin?: CanvasLineJoin;
    /**
     * An array of line and gap lengths for creating a dashed line.
     * @public
     */
    lineDash?: number[];
    /**
     * The number of CSS pixels to use as the offset when drawing a line's dash pattern.
     * @public
     */
    lineDashOffset?: number;
    /**
     * The gradient to apply along the line.
     * @public
     */
    lineGradient?: LineGradient;
    /**
     * The fill color of a shape.
     * @public
     */
    fillColor?: string;
    /**
     * The opacity of the fill color.
     * @public
     */
    fillOpacity?: number;
    /**
     * A rule for determining whether a point is inside or outside a polygon.
     * @public
     */
    fillRule?: CanvasFillRule;
}

/**
 * An overlay that covers an area of the map with bitmapped tiles.
 * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.tileoverlay Read more.}
 * @public
 */
export declare class TileOverlay extends MapKitEventTarget {
    /**
     * Creates a tile overlay with a URL template and style options.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.tileoverlay/mapkit.tileoverlay Read more.}
     * @param urlTemplate The {@link TileOverlay.urlTemplate} can be in the format of a template URL string or a function that returns a URL string from a set of tile parameters. MapKit JS requests new tiles when the map zooms or pans, the display changes, or the custom {@link TileOverlay.data} properties change.
     * @public
     */
    constructor(
        urlTemplate: TileOverlayUrlTemplate,
        options?: TileOverlayConstructorOptions
    );
    /**
     * A string, or callback function that returns a string, with a URL that provides the requested tile.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.tileoverlay/urltemplate Read more.}
     * @public
     */
    get urlTemplate(): TileOverlayUrlTemplate;
    set urlTemplate(urlTemplate: TileOverlayUrlTemplate);
    /**
     * The minimum zoom level for a tile overlay.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.tileoverlay/minimumz Read more.}
     * @public
     */
    get minimumZ(): number | null;
    set minimumZ(minimumZ: number | null);
    /**
     * The maximum zoom level for a tile overlay.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.tileoverlay/maximumz Read more.}
     * @public
     */
    get maximumZ(): number | null;
    set maximumZ(maximumZ: number | null);
    /**
     * A number that indicates a tile's opacity.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.tileoverlay/opacity Read more.}
     * @public
     */
    get opacity(): number;
    set opacity(opacity: number);
    /**
     * A dictionary of custom properties to use with the URL template.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.tileoverlay/data Read more.}
     * @public
     */
    get data(): {
        [key: string]: any;
    };
    set data(data: { [key: string]: any });
    /**
     * Reloads the tile overlay for the displayed map region with the latest data values.
     * {@link https://developer.apple.com/documentation/mapkitjs/mapkit.tileoverlay/reload Read more.}
     * @public
     */
    reload(): void;
}

/**
 * Attributes for initializing a tile overlay, including minimum and maximum zoom, opacity, and custom data.
 * {@link https://developer.apple.com/documentation/mapkitjs/tileoverlayconstructoroptions Read more.}
 * @public
 */
declare interface TileOverlayConstructorOptions {
    /**
     * The minimum zoom level of the overlay.
     * @public
     */
    minimumZ: number;
    /**
     * The maximum zoom level of the overlay.
     * @public
     */
    maximumZ: number;
    /**
     * The opacity level of the overlay.
     * @public
     */
    opacity: number;
    /**
     * Custom data for populating the URL template.
     * @public
     */
    data: {
        [key: string]: any;
    };
}

/**
 * @public
 */
declare type TileOverlayUrlTemplate =
    | string
    | ((x: number, y: number, z: number, scale: number, data: any) => string);

/**
 * @enum
 * @public
 */
declare const TransportType: Readonly<{
    readonly Automobile: "AUTOMOBILE";
    readonly Walking: "WALKING";
    readonly Cycling: "CYCLING";
}>;

/**
 * @public
 */
declare type TransportType = Enum.Values<typeof TransportType>;

/**
 * @public
 */
declare class UserLocationAnnotation extends Annotation {
    set coordinate(coordinate: Coordinate);
    get coordinate(): Coordinate;
    get draggable(): boolean;
    set draggable(_: boolean);
    get size(): Size_2;
    set size(_: Size_2);
}

export {};
