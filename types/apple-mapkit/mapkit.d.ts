import type * as GeoJSONTypes from "geojson";

/**
 * An abstract class that provides a common interface for Look Around views.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround)
 *
 * @since 5.79.0
 */
declare abstract class AbstractLookAround extends EventTarget {
    #private;

    /**
     * A static property that allows you to access the Look Around ready state enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/readystates)
     *
     * @since 5.79.0
     */
    static ReadyStates: typeof LookAroundReadyState;

    /**
     * A property that represents the Look Around view's containing Document Object Model (DOM) element.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/element)
     *
     * @since 5.79.0
     */
    get element(): HTMLDivElement;

    /**
     * The Look Around scene the framework is displaying.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/scene)
     *
     * @since 5.79.0
     */
    get scene(): LookAroundScene | null;
    set scene(value: LookAroundScene);
    /**
     * Opens the Look Around view in a dialog.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/opendialog)
     *
     * @since 5.79.0
     */
    get openDialog(): boolean;
    set openDialog(value: boolean);
    /**
     * A value that represents the loading state of the Look Around object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/readystate)
     *
     * @since 5.79.0
     */
    get readyState(): LookAroundReadyState;
    /**
     * A Boolean value that indicates whether someone can navigate inside the Look Around view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/isnavigationenabled)
     *
     * @since 5.79.0
     */
    get isNavigationEnabled(): boolean;
    set isNavigationEnabled(value: boolean);
    /**
     * A Boolean value that indicates whether someone can zoom the Look Around view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/iszoomenabled)
     *
     * @since 5.79.0
     */
    get isZoomEnabled(): boolean;
    set isZoomEnabled(value: boolean);
    /**
     * A Boolean value that indicates whether someone can scroll the Look Around view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/isscrollenabled)
     *
     * @since 5.79.0
     */
    get isScrollEnabled(): boolean;
    set isScrollEnabled(value: boolean);

    /**
     * A Boolean value that indicates whether the Look Around view shows road labels.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/showsroadlabels)
     *
     * @since 5.79.0
     */
    get showsRoadLabels(): boolean;
    set showsRoadLabels(value: boolean);

    /**
     * A Boolean value that indicates whether the Look Around view shows points of interest (POIs).
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/showspointsofinterest)
     *
     * @since 5.79.0
     */
    get showsPointsOfInterest(): boolean;
    set showsPointsOfInterest(value: boolean);

    /**
     * The padding options for the Look Around view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/padding)
     *
     * @since 5.79.0
     */
    get padding(): Padding;
    set padding(value: Padding);
    /**
     * Releases the Look Around view and its resources from memory.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/destroy)
     *
     * @since 5.79.0
     */
    destroy(): void;
}

/**
 * The categories of address components that users can search for with an address filter.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addresscategory)
 *
 * @since 5.78.1
 */
export const AddressCategory: Readonly<{
    /**
     * Countries and regions.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addresscategory/country)
     *
     * @since 5.78.1
     */
    readonly Country: "Country";
    /**
     * The primary administrative divisions of countries or regions.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addresscategory/administrativearea)
     *
     * @since 5.78.1
     */
    readonly AdministrativeArea: "AdministrativeArea";
    /**
     * The secondary administrative divisions of countries or regions.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addresscategory/subadministrativearea)
     *
     * @since 5.78.1
     */
    readonly SubAdministrativeArea: "SubAdministrativeArea";
    /**
     * Local administrative divisions, postal cities, and populated places.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addresscategory/locality)
     *
     * @since 5.78.1
     */
    readonly Locality: "Locality";
    /**
     * Local administrative subdivisions, postal city subdistricts, and neighborhoods.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addresscategory/sublocality)
     *
     * @since 5.78.1
     */
    readonly SubLocality: "SubLocality";
    /**
     * An address code for mail sorting and delivery.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addresscategory/postalcode)
     *
     * @since 5.78.1
     */
    readonly PostalCode: "PostalCode";
}>;

export type AddressCategory = (typeof AddressCategory)[keyof typeof AddressCategory];

/**
 * An object that filters which address options to include or exclude in search results.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addressfilter)
 *
 * @since 5.78.1
 */
export class AddressFilter {
    /**
     * A Boolean value that indicates whether to include a category from a search.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addressfilter/includescategory)
     *
     * @param category The address category to check for inclusion.
     * @returns A Boolean value that indicates whether to include a category from a search.
     *
     * @since 5.78.1
     */
    includesCategory(category: AddressCategory): boolean;
    /**
     * A Boolean value that indicates whether to exclude a category from a search.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addressfilter/excludescategory)
     *
     * @param category The address category to check for exclusion.
     * @returns A Boolean value that indicates whether to exclude a category from a search.
     *
     * @since 5.78.1
     */
    excludesCategory(category: AddressCategory): boolean;
    /**
     * A value that includes all address categories.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addressfilter/includingallcategories)
     *
     * @since 5.78.1
     */
    static includingAllCategories: () => AddressFilter;
    /**
     * A value that excludes all address categories.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addressfilter/excludingallcategories)
     *
     * @since 5.78.1
     */
    static excludingAllCategories: () => AddressFilter;
    /**
     * A list of categories to include in a search.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addressfilter/including)
     *
     * @param categories The address categories to include in the filter.
     * @returns A new AddressFilter that includes the specified categories.
     *
     * @since 5.78.1
     */
    static including(categories: AddressCategory[]): AddressFilter;
    /**
     * A list of categories to exclude from a search.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addressfilter/excluding)
     *
     * @param categories The address categories to exclude from the filter.
     * @returns A new AddressFilter that excludes the specified categories.
     *
     * @since 5.78.1
     */
    static excluding(categories: AddressCategory[]): AddressFilter;
}

/**
 * The base annotation object for creating custom annotations.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation)
 *
 * @since 5.0.0
 */
export class Annotation extends MapKitEventTarget {
    /**
     * Creates a new annotation given its location and initialization options.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/annotationconstructor)
     *
     * @param location The coordinate where the annotation appears.
     * @param factory A factory function that returns a DOM element that represents the annotation.
     * @param options A hash of properties MapKit JS uses to initialize the annotation.
     *
     * @since 5.0.0
     */
    constructor(
        location: Coordinate | Place | SearchAutocompleteResult,
        factory: (
            location?: Coordinate,
            options?: AnnotationConstructorOptions,
        ) => HTMLElement,
        options?: AnnotationConstructorOptions,
    );

    /**
     * A static property that allows you to access the available display priority enumeration values.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/displaypriority-data.var)
     *
     * @since 5.0.0
     */
    static DisplayPriority: typeof DisplayPriority;
    /**
     * A static property that allows you to access the annotation's collision mode enumeration values.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/collisionmode-data.var)
     *
     * @since 5.0.0
     */
    static CollisionMode: typeof CollisionMode;
    /**
     * The map that the framework adds the annotation to.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/map)
     *
     * @since 5.0.0
     */
    get map(): Map | null;
    set map(_: Map | null);
    /**
     * The annotation's element in the DOM.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/element)
     *
     * @since 5.0.0
     */
    get element(): HTMLElement;
    set element(_: HTMLElement);
    /**
     * The annotation's coordinate.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/coordinate)
     *
     * @since 5.0.0
     */
    get coordinate(): Coordinate;
    set coordinate(value: Coordinate);
    /**
     * The place ID that references a place or a map feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/id)
     *
     * @since 5.0.0
     */
    get id(): string | undefined;
    /**
     * A Boolean value that determines whether the annotation is visible or hidden.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/visible)
     *
     * @since 5.0.0
     */
    get visible(): boolean;
    set visible(value: boolean);
    /**
     * A CSS animation that runs when the annotation appears on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/appearanceanimation)
     *
     * @since 5.0.0
     */
    get appearanceAnimation(): string;
    set appearanceAnimation(appearanceAnimation: string);
    /**
     * The text to display in the annotation's callout.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/title)
     *
     * @since 5.0.0
     */
    get title(): string | undefined;
    set title(value: string | undefined);
    /**
     * The text to display as a subtitle on the second line of an annotation's callout.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/subtitle)
     *
     * @since 5.0.0
     */
    get subtitle(): string | undefined;
    set subtitle(value: string | undefined);
    /**
     * Accessibility text for the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/accessibilitylabel)
     *
     * @since 5.0.0
     */
    get accessibilityLabel(): string | null | undefined;
    set accessibilityLabel(value: string | null | undefined);
    /**
     * Data that you define that's specific to an annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/data)
     *
     * @since 5.0.0
     */
    get data(): {};
    set data(data: {});
    /**
     * A Boolean value that determines whether the annotation responds to user interaction.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/enabled)
     *
     * @since 5.0.0
     */
    get enabled(): boolean;
    set enabled(value: boolean);
    /**
     * A Boolean value that determines whether the map shows an annotation's callout.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/calloutenabled)
     *
     * @since 5.0.0
     */
    get calloutEnabled(): boolean;
    set calloutEnabled(value: boolean);
    /**
     * An accessory that displays place information when a person selects a place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/selectionaccessory)
     *
     * @since 5.78.1
     */
    get selectionAccessory(): PlaceSelectionAccessory | null;
    set selectionAccessory(value: PlaceSelectionAccessory | null);
    /**
     * An offset that changes the selection accessory's default anchor point.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/selectionaccessoryoffset)
     *
     * @since 5.78.1
     */
    get selectionAccessoryOffset(): DOMPoint | undefined;
    set selectionAccessoryOffset(value: DOMPoint | undefined);
    /**
     * A Boolean value that indicates whether the map shows the annotation in a selected state.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/selected)
     *
     * @since 5.0.0
     */
    get selected(): boolean;
    set selected(value: boolean);
    /**
     * A Boolean value that determines whether the framework animates the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/animates)
     *
     * @since 5.0.0
     */
    get animates(): boolean;
    set animates(value: boolean);
    /**
     * An offset that changes the annotation's default anchor point.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/anchoroffset)
     *
     * @since 5.0.0
     */
    get anchorOffset(): DOMPoint;
    set anchorOffset(value: DOMPoint);
    /**
     * An offset that changes the annotation callout's default placement.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/calloutoffset)
     *
     * @since 5.0.0
     */
    get calloutOffset(): DOMPoint | undefined;
    set calloutOffset(value: DOMPoint | undefined);
    /**
     * A delegate that enables you to customize the annotation's callout.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/callout)
     *
     * @since 5.0.0
     */
    get callout(): AnnotationCalloutDelegate | null;
    set callout(callout: AnnotationCalloutDelegate | null);
    /**
     * A Boolean value that determines whether the user can drag the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/draggable)
     *
     * @since 5.0.0
     */
    get draggable(): boolean;
    set draggable(value: boolean);
    /**
     * The desired dimensions of the annotation, in CSS pixels.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/size)
     *
     * @since 5.0.0
     */
    get size(): Size | undefined;
    set size(value: Size);
    /**
     * A numeric hint that the map uses to prioritize how it displays annotations.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/displaypriority-data.property)
     *
     * @since 5.0.0
     */
    get displayPriority(): number;
    set displayPriority(value: number);
    /**
     * A mode that determines the shape of the collision frame.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/collisionmode-data.property)
     *
     * @since 5.0.0
     */
    get collisionMode(): CollisionMode;
    set collisionMode(value: CollisionMode);
    /**
     * An identifier for grouping annotations into the same cluster.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/clusteringidentifier)
     *
     * @since 5.0.0
     */
    get clusteringIdentifier(): string | null;
    set clusteringIdentifier(value: string | null);
    /**
     * Spacing to add around the annotation when showing items.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/padding)
     *
     * @since 5.16.0
     */
    get padding(): Padding;
    set padding(value: Padding);
    /**
     * An array of annotations that the framework groups together in a cluster.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/memberannotations)
     *
     * @since 5.0.0
     */
    get memberAnnotations(): Annotation[] | undefined;
}

/**
 * Methods for customizing the behavior and appearance of an annotation callout.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate)
 *
 * @since 5.0.0
 */
export interface AnnotationCalloutDelegate {
    /**
     * Returns a point determining the callout's anchor offset.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutanchoroffsetforannotation)
     *
     * @param annotation The annotation for the callout.
     * @param size The width and height of the callout element, which MapKit JS determines.
     * @returns A point determining the callout's anchor offset.
     *
     * @since 5.0.0
     */
    calloutAnchorOffsetForAnnotation?(
        annotation: Annotation,
        size: Size,
    ): DOMPoint;
    /**
     * Determines whether the callout appears for an annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutshouldappearforannotation)
     *
     * @param annotation The annotation for the callout.
     * @returns A Boolean value that determines whether the callout appears for an annotation.
     *
     * @since 5.0.0
     */
    calloutShouldAppearForAnnotation?(annotation: Annotation): boolean;
    /**
     * Determines whether the callout animates.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutshouldanimateforannotation)
     *
     * @param annotation The annotation for the callout.
     * @returns A Boolean value that determines whether the callout animates.
     *
     * @since 5.0.0
     */
    calloutShouldAnimateForAnnotation?(annotation: Annotation): boolean;
    /**
     * Returns a CSS animation to use when the callout appears.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutappearanceanimationforannotation)
     *
     * @param annotation The annotation for the callout.
     * @returns A CSS animation to use when the callout appears.
     *
     * @since 5.0.0
     */
    calloutAppearanceAnimationForAnnotation?(annotation: Annotation): string;
    /**
     * Returns custom content for the callout bubble.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutcontentforannotation)
     *
     * @param annotation The annotation for the callout.
     * @returns An HTML element with custom content for the callout bubble.
     *
     * @since 5.0.0
     */
    calloutContentForAnnotation?(annotation: Annotation): HTMLElement;
    /**
     * Returns an element representing a custom callout.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutelementforannotation)
     *
     * @param annotation The annotation for the callout.
     * @returns An HTML element representing a custom callout.
     *
     * @since 5.0.0
     */
    calloutElementForAnnotation?(annotation: Annotation): HTMLElement;
    /**
     * Returns an element to use as a custom accessory on the left side of the callout content area.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutleftaccessoryforannotation)
     *
     * @param annotation The annotation for the callout.
     * @returns An element to use as a custom accessory on the left side of the callout content area.
     *
     * @since 5.0.0
     */
    calloutLeftAccessoryForAnnotation?(annotation: Annotation): HTMLElement;
    /**
     * Returns an element to use as a custom accessory on the right side of the callout content area.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutrightaccessoryforannotation)
     *
     * @param annotation The annotation for the callout.
     * @returns An element to use as a custom accessory on the right side of the callout content area.
     *
     * @since 5.0.0
     */
    calloutRightAccessoryForAnnotation?(annotation: Annotation): HTMLElement;
}

/**
 * An object that contains options for creating annotation features.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions)
 *
 * @since 5.0.0
 */
export interface AnnotationConstructorOptions {
    /**
     * Sets the element of the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/element)
     *
     * @since 5.0.0
     */
    element?: HTMLElement;
    /**
     * Sets the annotation's map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/map)
     *
     * @since 5.0.0
     */
    map?: Map;
    /**
     * Sets the coordinate of the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/coordinate)
     *
     * @since 5.0.0
     */
    coordinate?: Coordinate;
    /**
     * A Place ID that uniquely identifies a feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/id)
     *
     * @since 5.78.1
     */
    id?: string;
    /**
     * An object that allows a custom annotation to potentially supersede a point-of-interest at the same map coordinates.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/place)
     *
     * @since 5.76.76
     */
    place?: Place | SearchAutocompleteResult;
    /**
     * The text to display in the annotation's callout.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/title)
     *
     * @since 5.0.0
     */
    title?: string;
    /**
     * The text to display as a subtitle on the second line of an annotation's callout.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/subtitle)
     *
     * @since 5.0.0
     */
    subtitle?: string;
    /**
     * Data that you define and assign to the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/data)
     *
     * @since 5.0.0
     */
    data?: object;
    /**
     * Accessibility text for the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/accessibilitylabel)
     *
     * @since 5.0.0
     */
    accessibilityLabel?: string;
    /**
     * The offset, in CSS pixels, of the element from the bottom center.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/anchoroffset)
     *
     * @since 5.0.0
     */
    anchorOffset?: DOMPoint;
    /**
     * The offset, in CSS pixels, of a callout from the top center of the element.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/calloutoffset)
     *
     * @since 5.0.0
     */
    calloutOffset?: DOMPoint;
    /**
     * The desired dimensions of the annotation, in CSS pixels.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/size)
     *
     * @since 5.0.0
     */
    size?: Size;
    /**
     * A delegate that enables you to customize the annotation's callout.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/callout)
     *
     * @since 5.0.0
     */
    callout?: AnnotationCalloutDelegate | null;
    /**
     * The accessory that displays place information when a person selects a place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/selectionaccessory)
     *
     * @since 5.0.0
     */
    selectionAccessory?: PlaceSelectionAccessory | null;
    /**
     * The offset that changes the selection accessory's default anchor point.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/selectionaccessoryoffset)
     *
     * @since 5.0.0
     */
    selectionAccessoryOffset?: DOMPoint;
    /**
     * A Boolean value that determines whether the annotation is visible or hidden.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/visible)
     *
     * @since 5.0.0
     */
    visible?: boolean;
    /**
     * A Boolean value that determines whether the annotation responds to user interaction.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/enabled)
     *
     * @since 5.0.0
     */
    enabled?: boolean;
    /**
     * A Boolean value that determines whether the map displays the annotation in a selected state.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/selected)
     *
     * @since 5.0.0
     */
    selected?: boolean;
    /**
     * A Boolean value that determines whether the map shows a callout.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/calloutenabled)
     *
     * @since 5.0.0
     */
    calloutEnabled?: boolean;
    /**
     * A Boolean value that determines whether the map animates the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/animates)
     *
     * @since 5.0.0
     */
    animates?: boolean;
    /**
     * A CSS animation that runs when the annotation appears on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/appearanceanimation)
     *
     * @since 5.0.0
     */
    appearanceAnimation?: string;
    /**
     * A mode that determines the shape of the collision frame.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/collisionmode)
     *
     * @since 5.0.0
     */
    collisionMode?: CollisionMode;
    /**
     * Spacing to add around the annotation when showing items.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/padding)
     *
     * @since 5.16.0
     */
    padding?: Padding;
    /**
     * A Boolean value that determines whether the user can drag the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/draggable)
     *
     * @since 5.0.0
     */
    draggable?: boolean;
    /**
     * A hint the map uses to prioritize displaying the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/displaypriority)
     *
     * @since 5.0.0
     */
    displayPriority?: number;
    /**
     * An identifier for grouping annotations into the same cluster.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/clusteringidentifier)
     *
     * @since 5.0.0
     */
    clusteringIdentifier?: string | null;
}

/**
 * An event that occurs when someone drags an annotation.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationdragevent)
 *
 * @since 5.0.0
 */
export class AnnotationDragEvent extends MapKitEvent {
    /**
     * The coordinate of the annotation while someone drags it.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationdragevent/coordinate)
     *
     * @since 5.0.0
     */
    readonly coordinate: Coordinate;
}

/**
 * A rectangular area on a map, which coordinates of the rectangle's northeast and southwest corners define.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/boundingregion)
 *
 * @since 5.0.0
 */
export class BoundingRegion {
    /**
     * The north latitude of the bounding region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/boundingregion/northlatitude)
     *
     * @since 5.0.0
     */
    northLatitude: number;
    /**
     * The east longitude of the bounding region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/boundingregion/eastlongitude)
     *
     * @since 5.0.0
     */
    eastLongitude: number;
    /**
     * The south latitude of the bounding region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/boundingregion/southlatitude)
     *
     * @since 5.0.0
     */
    southLatitude: number;
    /**
     * The west longitude of the bounding region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/boundingregion/westlongitude)
     *
     * @since 5.0.0
     */
    westLongitude: number;
    /**
     * Creates a rectangular bounding region, which the latitude and longitude coordinates of the rectangle's northeast and southwest corners define.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/boundingregion/boundingregionconstructor)
     *
     * @param northLatitude The north latitude of the bounding region.
     * @param eastLongitude The east longitude of the bounding region.
     * @param southLatitude The south latitude of the bounding region.
     * @param westLongitude The west longitude of the bounding region.
     *
     * @since 5.0.0
     */
    constructor(
        northLatitude?: number,
        eastLongitude?: number,
        southLatitude?: number,
        westLongitude?: number,
    );
    /**
     * Returns a copy of the calling bounding region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/boundingregion/copy)
     *
     * @returns A {@link BoundingRegion} that is a copy of the calling bounding region.
     *
     * @since 5.0.0
     */
    copy(): BoundingRegion;
    /**
     * Returns a string representation of the bounding region object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/boundingregion/tostring)
     *
     * @returns A string representation of the bounding region object.
     *
     * @since 5.0.0
     */
    toString(): string;
    /**
     * Returns the coordinate region that corresponds to the calling bounding region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/boundingregion/tocoordinateregion)
     *
     * @returns A {@link CoordinateRegion} that corresponds to the calling {@link BoundingRegion}.
     *
     * @since 5.0.0
     */
    toCoordinateRegion(): CoordinateRegion;
}

/**
 * An object literal that contains information defining an area on the map.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/cameraboundarydescription)
 *
 * @since 5.23.0
 */
interface CameraBoundaryDescription {
    /**
     * A rectangular area on a map, defined by coordinates of the rectangle's northeast and southwest corners.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/cameraboundarydescription/region)
     *
     * @since 5.23.0
     */
    region: CoordinateRegion;
    /**
     * A rectangular area on a two-dimensional map projection.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/cameraboundarydescription/maprect)
     *
     * @since 5.23.0
     */
    mapRect: MapRect;
}

/**
 * A minimum and maximum camera distance, in meters, from the center of the map.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/camerazoomrange)
 *
 * @since 5.23.0
 */
export class CameraZoomRange {
    /**
     * Constructs an instance of a camera zoom range object with no minimum or maximum camera distance.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/camerazoomrange/camerazoomrangeconstructor)
     *
     * @since 5.23.0
     */
    constructor();
    /**
     * Creates an instance of a camera zoom range object with an object literal.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/camerazoomrange/camerazoomrangeconstructor1)
     *
     * @param rangeParams Options for creating a camera zoom range.
     *
     * @since 5.23.0
     */
    constructor(rangeParams: CameraZoomRangeConstructorOptions);
    /**
     * Creates an instance of a camera zoom range object with the specified numeric arguments that specify minimum and maximum camera distances.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/camerazoomrange/camerazoomrangeconstructor2)
     *
     * @param min The minimum camera distance in meters.
     * @param max The maximum camera distance in meters.
     *
     * @since 5.23.0
     */
    constructor(min: number, max: number);
    /**
     * The minimum allowed distance of the camera from the center of the map in meters.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/camerazoomrange/mincameradistance)
     *
     * @since 5.23.0
     */
    get minCameraDistance(): number;
    /**
     * The maximum allowed distance of the camera from the center of the map in meters.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/camerazoomrange/maxcameradistance)
     *
     * @since 5.23.0
     */
    get maxCameraDistance(): number;
    /**
     * Returns a copy of the camera zoom region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/camerazoomrange/copy)
     *
     * @returns A copy of the camera zoom region.
     *
     * @since 5.23.0
     */
    copy(): CameraZoomRange;
}

/**
 * Initialization options for the camera zoom range.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/camerazoomrangeconstructoroptions)
 *
 * @since 5.23.0
 */
export interface CameraZoomRangeConstructorOptions {
    /**
     * The minimum allowed distance of the camera from the center of the map in meters.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/camerazoomrangeconstructoroptions/mincameradistance)
     *
     * @since 5.23.0
     */
    minCameraDistance?: number;
    /**
     * The maximum allowed distance of the camera from the center of the map in meters.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/camerazoomrangeconstructoroptions/maxcameradistance)
     *
     * @since 5.23.0
     */
    maxCameraDistance?: number;
}

/**
 * A circular overlay with a configurable radius that centers on a specific geographic coordinate.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/circleoverlay)
 *
 * @since 5.0.0
 */
export class CircleOverlay extends Overlay {
    /**
     * Creates a circle overlay with a center coordinate, radius, and style options.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/circleoverlay/circleoverlayconstructor)
     *
     * @param coordinate The required coordinate of the circle's center.
     * @param radius The circle's required radius, in meters.
     * @param options An optional object literal of overlay properties for initializing the circle.
     *
     * @since 5.0.0
     */
    constructor(
        coordinate: Coordinate,
        radius: number,
        options?: OverlayOptions,
    );
    /**
     * The coordinate of the circle overlay's center.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/circleoverlay/coordinate)
     *
     * @since 5.0.0
     */
    get coordinate(): Coordinate;
    set coordinate(coordinate: Coordinate);
    /**
     * The circle overlay's radius, in meters.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/circleoverlay/radius)
     *
     * @since 5.0.0
     */
    get radius(): number;
    set radius(radius: number);
}

/**
 * An annotation type that groups multiple annotations together.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/clusterannotation)
 *
 * @since 5.0.0
 */
declare class ClusterAnnotation extends MarkerAnnotation {
    /**
     * An array of annotations that the framework grouped together in a cluster.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/clusterannotation/memberannotations)
     *
     * @since 5.0.0
     */
    get memberAnnotations(): Annotation[];
}

/**
 * Constants that indicate whether an annotation collides and how to interpret the collision-frame rectangle of an annotation view.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/collisionmode)
 *
 * @since 5.0.0
 */
declare const CollisionMode: Readonly<{
    /**
     * A constant indicating that the map should use a full collision rectangle for detecting collisions.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/collisionmode/rectangle)
     *
     * @since 5.0.0
     */
    readonly Rectangle: "rectangle";
    /**
     * A constant indicating that the map should use a circle inscribed in the collision frame rectangle to determine collisions.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/collisionmode/circle)
     *
     * @since 5.0.0
     */
    readonly Circle: "circle";
    /**
     * A constant that indicates the annotation doesn't collide with other annotations.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/collisionmode/none)
     *
     * @since 5.50.0
     */
    readonly None: "none";
}>;

type CollisionMode = (typeof CollisionMode)[keyof typeof CollisionMode];

/**
 * Constants that indicate the color scheme of the map or a place detail.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/colorscheme)
 *
 * @since 5.13.0
 */
declare const ColorScheme: Readonly<{
    /**
     * A constant indicating a dark color scheme.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/colorscheme/dark)
     *
     * @since 5.13.0
     */
    readonly Dark: "dark";
    /**
     * A constant indicating a light color scheme.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/colorscheme/light)
     *
     * @since 5.13.0
     */
    readonly Light: "light";
    /**
     * A constant indicating a color scheme that follows the current system setting.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/colorscheme/adaptive)
     *
     * @since 5.78.1
     */
    readonly Adaptive: "adaptive";
}>;

type ColorScheme = (typeof ColorScheme)[keyof typeof ColorScheme];

/**
 * Options that control the behavior of Look Around views.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/commonlookaroundoptions)
 *
 * @since 5.79.0
 */
export interface CommonLookAroundOptions {
    /**
     * The values that define content padding within the Look Around view frame.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/commonlookaroundoptions/padding)
     *
     * @since 5.79.0
     */
    padding?: Padding;
    /**
     * A Boolean value that indicates whether someone can navigate inside the Look Around view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/commonlookaroundoptions/isnavigationenabled)
     *
     * @since 5.79.0
     */
    isNavigationEnabled?: boolean;
    /**
     * A Boolean value that indicates whether someone can scroll the Look Around view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/commonlookaroundoptions/iszoomenabled)
     *
     * @since 5.79.0
     */
    isZoomEnabled?: boolean;
    /**
     * A Boolean value that indicates whether someone can scroll the Look Around view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/commonlookaroundoptions/isscrollenabled)
     *
     * @since 5.79.0
     */
    isScrollEnabled?: boolean;
    /**
     * A Boolean value that indicates whether the Look Around view display road labels.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/commonlookaroundoptions/showsroadlabels)
     *
     * @since 5.79.0
     */
    showsRoadLabels?: boolean;

    /**
     * A Boolean value that indicates whether the Look Around view display points of interest (POIs).
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/commonlookaroundoptions/showspointsofinterest)
     *
     * @since 5.79.0
     */
    showsPointsOfInterest?: boolean;
    /**
     * A Boolean value that indicates whether someone can scroll the Look Around view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/commonlookaroundoptions/opendialog)
     *
     * @since 5.79.0
     */
    openDialog?: boolean;
}

/**
 * Values that represent the status of a configuration change.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/configurationchangestatus)
 *
 * @since 5.0.0
 */
declare const ConfigurationChangeStatus: Readonly<{
    /**
     * A status value that indicates the initialization of the configuration is successful.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/configurationchangestatus/initialized)
     *
     * @since 5.0.0
     */
    readonly Initialized: "Initialized";
    /**
     * A status value that indicates the configuration refresh is successful.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/configurationchangestatus/refreshed)
     *
     * @since 5.0.0
     */
    readonly Refreshed: "Refreshed";
}>;

type ConfigurationChangeStatus = (typeof ConfigurationChangeStatus)[keyof typeof ConfigurationChangeStatus];

/**
 * A value that represents the status of a configuration error.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/configurationerrorstatus)
 *
 * @since 5.0.0
 */
declare const ConfigurationErrorStatus: Readonly<{
    /**
     * An error status value that indicates the service returned a bad request response when initializing.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/configurationerrorstatus/badrequest)
     *
     * @since 5.0.0
     */
    readonly BadRequest: "Bad Request";
    /**
     * An error status that indicates the provided authorization token is invalid.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/configurationerrorstatus/unauthorized)
     *
     * @since 5.0.0
     */
    readonly Unauthorized: "Unauthorized";
    /**
     * An error status that indicates the Maps ID for the authorization token provided exceeded its allowed daily usage.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/configurationerrorstatus/toomanyrequests)
     *
     * @since 5.0.0
     */
    readonly TooManyRequests: "Too Many Requests";
    /**
     * An error status that indicates the service returned a malformed response when initializing.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/configurationerrorstatus/malformedresponse)
     *
     * @since 5.0.0
     */
    readonly MalformedResponse: "Malformed Response";
    /**
     * An error status that indicates the service timed out when initializing.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/configurationerrorstatus/timeout)
     *
     * @since 5.0.0
     */
    readonly Timeout: "Timeout";
    /**
     * An error status that indicates MapKit JS encountered a network error during initialization.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/configurationerrorstatus/networkerror)
     *
     * @since 5.0.0
     */
    readonly NetworkError: "Network Error";
    /**
     * An error status that indicates MapKit JS encountered an unknown error during initialization.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/configurationerrorstatus/unknown)
     *
     * @since 5.0.0
     */
    readonly Unknown: "Unknown";
}>;

type ConfigurationErrorStatus = (typeof ConfigurationErrorStatus)[keyof typeof ConfigurationErrorStatus];

/**
 * An object representing the latitude and longitude for a point on the Earth's surface.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinate)
 *
 * @since 5.0.0
 */
export class Coordinate {
    /**
     * The latitude, in degrees.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinate/latitude)
     *
     * @since 5.0.0
     */
    latitude: number;
    /**
     * The longitude, in degrees.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinate/longitude)
     *
     * @since 5.0.0
     */
    longitude: number;
    /**
     * Creates a coordinate object with the specified latitude and longitude.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinate/coordinateconstructor)
     *
     * @param latitude The latitude in degrees.
     * @param longitude The longitude in degrees.
     *
     * @since 5.0.0
     */
    constructor(latitude?: number, longitude?: number);
    /**
     * Returns a copy of the coordinate.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinate/copy)
     *
     * @returns A copy of the coordinate.
     *
     * @since 5.0.0
     */
    copy(): Coordinate;
    /**
     * Returns a Boolean value indicating whether two coordinates are equal.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinate/equals)
     *
     * @param anotherCoordinate The coordinate to compare.
     * @returns A Boolean value indicating whether two coordinates are equal.
     *
     * @since 5.0.0
     */
    equals(anotherCoordinate: Coordinate): boolean;
    /**
     * Returns the map point that corresponds to the coordinate.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinate/tomappoint)
     *
     * @returns The map point value that corresponds to the coordinate on a two-dimensional map projection.
     *
     * @since 5.0.0
     */
    toMapPoint(): MapPoint;
    /**
     * Returns the unwrapped map point that corresponds to the coordinate.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinate/tounwrappedmappoint)
     *
     * @returns The unwrapped map point value that corresponds to the coordinate on a two-dimensional map projection.
     *
     * @since 5.0.0
     */
    toUnwrappedMapPoint(): MapPoint;
    /**
     * Returns a string representation of the coordinate object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinate/tostring)
     *
     * @returns A string representation of the coordinate object.
     *
     * @since 5.0.0
     */
    toString(): string;
}

/**
 * A rectangular area on a map that a center coordinate and a span define, in degrees of latitude and longitude.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinateregion)
 *
 * @since 5.0.0
 */
export class CoordinateRegion {
    /**
     * The center point of the region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinateregion/center)
     *
     * @since 5.0.0
     */
    center: Coordinate;
    /**
     * The horizontal and vertical span representing the amount of map to display.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinateregion/span)
     *
     * @since 5.0.0
     */
    span: CoordinateSpan;
    /**
     * A rectangular geographic region that centers around a latitude and longitude coordinate.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinateregion/coordinateregionconstructor)
     *
     * @param center A {@link Coordinate} that's the center point of the region.
     * @param span A {@link CoordinateSpan} that represents the amount of map to display. The span also defines the current zoom level that the map object uses.
     *
     * @since 5.0.0
     */
    constructor(center?: Coordinate, span?: CoordinateSpan);
    /**
     * Returns a copy of the calling coordinate region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinateregion/copy)
     *
     * @returns A {@link CoordinateRegion} that is a copy of the calling coordinate region.
     *
     * @since 5.0.0
     */
    copy(): CoordinateRegion;
    /**
     * Returns a string representation of the coordinate region object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinateregion/tostring)
     *
     * @returns A string representation of the coordinate region object.
     *
     * @since 5.0.0
     */
    toString(): string;
    /**
     * Returns a Boolean value indicating whether two regions are equal.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinateregion/equals)
     *
     * @param anotherRegion The region to compare.
     * @returns A Boolean value indicating whether two regions are equal.
     *
     * @since 5.0.0
     */
    equals(anotherRegion: CoordinateRegion): boolean;
    /**
     * Returns the bounding region that corresponds to the specified coordinate region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinateregion/toboundingregion)
     *
     * @returns A {@link BoundingRegion}.
     *
     * @since 5.0.0
     */
    toBoundingRegion(): BoundingRegion;
    /**
     * Returns the map rectangle that corresponds to the calling coordinate region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinateregion/tomaprect)
     *
     * @returns A {@link MapRect} that corresponds to the calling {@link CoordinateRegion}.
     *
     * @since 5.0.0
     */
    toMapRect(): MapRect;
    /**
     * The distance provided in meters or the longest distance derived from the center point to the region's bounding box.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinateregion/radius)
     *
     * @since 5.45.0
     */
    get radius(): number;
}

/**
 * The width and height of a map region.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinatespan)
 *
 * @since 5.0.0
 */
export class CoordinateSpan {
    /**
     * The amount of north-to-south distance (in degrees) to display for the map region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinatespan/latitudedelta)
     *
     * @since 5.0.0
     */
    latitudeDelta: number;
    /**
     * The amount of east-to-west distance (in degrees) to display for the map region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinatespan/longitudedelta)
     *
     * @since 5.0.0
     */
    longitudeDelta: number;
    /**
     * Creates a new coordinate span object with the specified latitude and longitude deltas.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinatespan/coordinatespanconstructor)
     *
     * @param latitudeDelta The amount of north-to-south distance (in degrees) to display for the map region. Unlike longitudinal distances, which vary based on the latitude, one degree of latitude is always approximately 111 km (69 mi.).
     * @param longitudeDelta The amount of east-to-west distance (in degrees) to display for the map region. The number of kilometers (or miles) that a longitude range spans varies based on the latitude. For example, one degree of longitude spans a distance of approximately 111 km (69 miles mi.) at the equator, approximately 88 km (or 55mi.) at 37º north latitude (the latitude of San Francisco), and shrinks to 0 km (0 mi.) at the poles.
     *
     * @since 5.0.0
     */
    constructor(latitudeDelta?: number, longitudeDelta?: number);
    /**
     * Returns a copy of the coordinate span.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinatespan/copy)
     *
     * @returns A copy of the coordinate span.
     *
     * @since 5.0.0
     */
    copy(): CoordinateSpan;
    /**
     * Returns a Boolean value that indicates whether two spans are equal.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinatespan/equals)
     *
     * @param anotherSpan The span to compare.
     * @returns A Boolean value that indicates whether two spans are equal.
     *
     * @since 5.0.0
     */
    equals(anotherSpan: CoordinateSpan): boolean;
    /**
     * Returns a string representation of the coordinate span object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinatespan/tostring)
     *
     * @returns A string representation of the coordinate span object.
     *
     * @since 5.0.0
     */
    toString(): string;
}

/**
 * An object that provides directions and estimated travel time based on the options you provide.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directions)
 *
 * @since 5.0.0
 */
export class Directions extends Service {
    /**
     * Creates a directions object with options you provide.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directions/directionsconstructor)
     *
     * @param options An object containing the options for creating a directions object. This parameter is optional.
     *
     * @since 5.0.0
     */
    constructor(options?: DirectionsConstructorOptions);
    /**
     * Retrieves estimated arrival times to up to 10 destinations from a single starting point.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directions/eta)
     *
     * @param request An {@link EtaRequestOptions} object that specifies details for the server to provide estimated arrival times at one or more destinations.
     * @param callback A callback function that receives the estimated time response object, returned asynchronously.
     * @returns A promise that resolves with the ETA response.
     *
     * @since 5.46.0
     */
    eta(
        request: EtaRequestOptions,
        callback: (error: Error | null, result?: EtaResponse) => void,
    ): number;
    /**
     * Retrieves directions and estimated travel time based on the specified start and end points.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directions/route)
     *
     * @param request A {@link DirectionsRequest} object that specifies details for the directions you want to retrieve.
     * @param callback A callback function that receives the directions, returned asynchronously.
     * @returns A promise that resolves with the directions response.
     *
     * @since 5.0.0
     */
    route(
        request: DirectionsRequest,
        callback: (error: Error | null, result?: DirectionsResponse) => void,
    ): number;
    /**
     * A static property that refers to an object that describes the available transport type values.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directions/transport)
     *
     * @since 5.0.0
     */
    static Transport: typeof TransportType;
}

/**
 * Options that you may provide when creating a directions object.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsconstructoroptions)
 *
 * @since 5.0.0
 */
export interface DirectionsConstructorOptions {
    /**
     * A language ID that determines the language for route information.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsconstructoroptions/language)
     *
     * @since 5.0.0
     */
    language?: string;
}

/**
 * The requested start and end points for a route, as well as the planned mode of transportation.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsrequest)
 *
 * @since 5.0.0
 */
export interface DirectionsRequest {
    /**
     * The starting point for routing directions.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsrequest/origin)
     *
     * @since 5.0.0
     */
    origin: string | Coordinate | Place;
    /**
     * The end point for routing directions.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsrequest/destination)
     *
     * @since 5.0.0
     */
    destination: string | Coordinate | Place;
    /**
     * The mode of transportation the directions apply to.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsrequest/transporttype)
     *
     * @since 5.0.0
     */
    transportType?: TransportType;
    /**
     * The departure date for the trip.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsrequest/departuredate)
     *
     * @since 5.44.0
     */
    departureDate?: Date;
    /**
     * The arrival date for the trip.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsrequest/arrivaldate)
     *
     * @since 5.44.0
     */
    arrivalDate?: Date;
    /**
     * A Boolean value that prioritizes routes to avoid tolls.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsrequest/avoidtolls)
     *
     * @since 5.72.0
     */
    avoidTolls?: boolean;
    /**
     * A Boolean value that indicates whether the server returns multiple routes when they're available.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsrequest/requestsalternateroutes)
     *
     * @since 5.0.0
     */
    requestsAlternateRoutes?: boolean;
}

/**
 * The directions and estimated travel time that return for a route.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsresponse)
 *
 * @since 5.0.0
 */
export interface DirectionsResponse {
    /**
     * The request object associated with the direction's response.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsresponse/request)
     *
     * @since 5.0.0
     */
    request: object;
    /**
     * An optional starting point for routing directions.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsresponse/origin)
     *
     * @since 5.55.0
     */
    origin?: Coordinate | Place;
    /**
     * An optional end point for routing directions.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsresponse/destination)
     *
     * @since 5.55.0
     */
    destination?: Coordinate | Place;
    /**
     * An array of route objects.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsresponse/routes)
     *
     * @since 5.0.0
     */
    routes: Route[];
}

/**
 * Constant values that provide a hint the map uses to prioritize displaying annotations.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/displaypriority)
 *
 * @since 5.0.0
 */
declare const DisplayPriority: Readonly<{
    /**
     * A low display priority, with a preset value of 250 out of 1000.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/displaypriority/low)
     *
     * @since 5.0.0
     */
    readonly Low: 250;
    /**
     * A high display priority, with a preset value of 750 out of 1000.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/displaypriority/high)
     *
     * @since 5.0.0
     */
    readonly High: 750;
    /**
     * The highest display priority, with a preset value of 1000 out of 1000.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/displaypriority/required)
     *
     * @since 5.0.0
     */
    readonly Required: 1000;
}>;

type DisplayPriority = (typeof DisplayPriority)[keyof typeof DisplayPriority];

/**
 * Constants indicating the system of measurement that displays on the map.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/distance)
 *
 * @since 5.13.0
 */
declare const Distance: Readonly<{
    /**
     * A constant indicating the measurement system is adaptive, and determined based on the map's language.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/distance/adaptive)
     *
     * @since 5.13.0
     */
    readonly Adaptive: "adaptive";
    /**
     * A constant indicating the measurement system is metric.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/distance/metric)
     *
     * @since 5.13.0
     */
    readonly Metric: "metric";
    /**
     * A constant indicating the measurement system is imperial.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/distance/imperial)
     *
     * @since 5.13.0
     */
    readonly Imperial: "imperial";
}>;

type Distance = (typeof Distance)[keyof typeof Distance];

/**
 * The options you may provide for requesting estimated arrival times.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etarequestoptions)
 *
 * @since 5.46.0
 */
export interface EtaRequestOptions {
    /**
     * The starting point for estimated arrival time requests.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etarequestoptions/origin)
     *
     * @since 5.46.0
     */
    origin: Coordinate;
    /**
     * An array of coordinates that represent end points for estimated arrival time requests.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etarequestoptions/destinations)
     *
     * @since 5.46.0
     */
    destinations: Coordinate[];
    /**
     * The mode of transportation the server uses when estimating arrival times.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etarequestoptions/transporttype)
     *
     * @since 5.46.0
     */
    transportType?: TransportType;
    /**
     * The time of departure used in an estimated arrival time request.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etarequestoptions/departuredate)
     *
     * @since 5.46.0
     */
    departureDate?: Date;
    /**
     * The arrival date for the trip.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etarequestoptions/arrivaldate)
     *
     * @since 5.46.0
     */
    arrivalDate?: Date;
}

/**
 * The estimated arrival times for a set of destinations.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etaresponse)
 *
 * @since 5.46.0
 */
export interface EtaResponse {
    /**
     * The request object associated with the estimated time of arrival response.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etaresponse/request)
     *
     * @since 5.46.0
     */
    request: object;
    /**
     * The coordinates that represent the starting point for estimated arrival time requests.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etaresponse/origin)
     *
     * @since 5.55.0
     */
    origin: Coordinate;
    /**
     * An array of estimated arrival times.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etaresponse/etas)
     *
     * @since 5.46.0
     */
    etas: EtaResult[];
}

/**
 * The mode of transportation, distance, and travel time estimates for a single destination.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etaresult)
 *
 * @since 5.46.0
 */
export interface EtaResult {
    /**
     * The coordinates that represent the endpoint for estimated arrival time requests.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etaresult/destination)
     *
     * @since 5.55.0
     */
    destination?: Coordinate;
    /**
     * The mode of transportation used to estimate the arrival time.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etaresult/transporttype)
     *
     * @since 5.46.0
     */
    transportType: TransportType;
    /**
     * The route distance in meters.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etaresult/distance)
     *
     * @since 5.46.0
     */
    distance: number;
    /**
     * The estimated travel time in seconds, including delays due to traffic.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etaresult/expectedtraveltime)
     *
     * @since 5.46.0
     */
    expectedTravelTime: number;
    /**
     * The estimated travel time in seconds, excluding delays for traffic.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etaresult/statictraveltime)
     *
     * @since 5.46.0
     */
    staticTravelTime: number;
}

/**
 * Constants indicating the visibility of different adaptive map features.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/featurevisibility)
 *
 * @since 5.0.0
 */
export const FeatureVisibility: Readonly<{
    /**
     * A constant indicating that feature visibility adapts to the current map state.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/featurevisibility/adaptive)
     *
     * @since 5.0.0
     */
    readonly Adaptive: "adaptive";
    /**
     * A constant indicating that the feature is always hidden.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/featurevisibility/hidden)
     *
     * @since 5.0.0
     */
    readonly Hidden: "hidden";
    /**
     * A constant indicating that the feature is always visible.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/featurevisibility/visible)
     *
     * @since 5.0.0
     */
    readonly Visible: "visible";
}>;

export type FeatureVisibility = (typeof FeatureVisibility)[keyof typeof FeatureVisibility];

/**
 * A geocoder that converts human-readable addresses to geographic coordinates, and vice versa.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geocoder)
 *
 * @since 5.0.0
 */
export class Geocoder extends Service {
    /**
     * Creates a geocoder object and sets optional language and user location properties.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geocoder/geocoderconstructor)
     *
     * @param options An object containing the options for creating a geocoder object. This parameter is optional.
     *
     * @since 5.0.0
     */
    constructor(options?: ServiceConstructorOptions);
    /**
     * Converts an address to geographic coordinates.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geocoder/lookup)
     *
     * @param place A case-insensitive string MapKit JS converts to geographic coordinates, such as: "`450 Serra Mall`", "`450 Serra Mall, Stanford`", "`450 Serra Mall, Stanford, CA USA`". Delimiter characters are optional.
     * @param callback MapKit JS returns geocoding results asynchronously through a callback function. MapKit JS invokes the callback function with two arguments, `error` on failure and `data` on success.
     * @param options Options that constrain geocoder lookup results to a specific area or a specific language.
     * @returns A promise that resolves with the geocoder response.
     *
     * @since 5.0.0
     */
    lookup(
        place: string,
        callback: (error: Error | null, result?: GeocoderResponse) => void,
        options?: GeocoderLookupOptions,
    ): number;
    /**
     * Converts a geographic coordinate to an address.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geocoder/reverselookup)
     *
     * @param coordinate The coordinate to convert to a human-readable address. For example, `new` {@link Coordinate}`(37.37, -122.04)`.
     * @param callback MapKit JS invokes this callback function with two arguments, `error` on failure and `data` on success. If you cancel the request before you receive a response, the framework doesn't call this function.
     * @param options An option that constrains reverse lookup results to a specific language.
     * @returns A promise that resolves with the geocoder response.
     *
     * @since 5.0.0
     */
    reverseLookup(
        coordinate: Coordinate,
        callback: (error: Error | null, result?: GeocoderResponse) => void,
        options?: GeocoderReverseLookupOptions,
    ): number;
}

/**
 * Options that constrain geocoder lookup results to a specific area or a specific language.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geocoderlookupoptions)
 *
 * @since 5.0.0
 */
export interface GeocoderLookupOptions {
    /**
     * The language to use when displaying the lookup results.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geocoderlookupoptions/language)
     *
     * @since 5.0.0
     */
    language?: string;
    /**
     * A region for constraining lookup results.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geocoderlookupoptions/region)
     *
     * @since 5.0.0
     */
    region?: CoordinateRegion;
    /**
     * Coordinates for constraining the lookup results.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geocoderlookupoptions/coordinate)
     *
     * @since 5.0.0
     */
    coordinate?: Coordinate;
    /**
     * A list of countries for constraining the lookup results.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geocoderlookupoptions/limittocountries)
     *
     * @since 5.0.0
     */
    limitToCountries?: string;
}

/**
 * The response from a geocoder lookup or reverse lookup.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geocoderresponse)
 *
 * @since 5.0.0
 */
export interface GeocoderResponse {
    /**
     * An array of places that returns from a geocoder lookup or reverse lookup.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geocoderresponse/results)
     *
     * @since 5.0.0
     */
    results: Place[];
}

/**
 * An option that constrains reverse lookup results to a specific language.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geocoderreverselookupoptions)
 *
 * @since 5.0.0
 */
export interface GeocoderReverseLookupOptions {
    /**
     * The language to use when displaying the reverse lookup results.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geocoderreverselookupoptions/language)
     *
     * @since 5.0.0
     */
    language?: string;
}

/**
 * A delegate object that controls a GeoJSON import to override default behavior and provide custom style.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geojsondelegate)
 *
 * @since 5.0.0
 */
export interface GeoJSONDelegate {
    /**
     * Overrides a multipoint object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemformultipoint)
     *
     * @param itemCollection A collection containing associated annotations.
     * @param geoJSON The original GeoJSON object for the `MultiPoint`. This contains an array of geometries.
     * @returns An item collection, array of items, or null.
     *
     * @since 5.0.0
     */
    itemForMultiPoint?<D extends GeoJSONTypes.MultiPoint>(
        itemCollection: ItemCollection<D>,
        geoJSON: D,
    ): ItemCollection<D> | Item[] | null;
    /**
     * Overrides a multiline string.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemformultilinestring)
     *
     * @param itemCollection An item collection containing associated overlays.
     * @param geoJSON The original GeoJSON object for the `MultiLineString`. This contains an array of geometries.
     * @returns An item collection, array of items, or null.
     *
     * @since 5.0.0
     */
    itemForMultiLineString?<D extends GeoJSONTypes.MultiLineString>(
        itemCollection: ItemCollection<D>,
        geoJSON: D,
    ): ItemCollection<D> | Item[] | null;
    /**
     * Overrides a multipolygon.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemformultipolygon)
     *
     * @param itemCollection A collection containing associated overlays.
     * @param geoJSON The original GeoJSON object for the `MultiPolygon`. It contains an array of geometries.
     * @returns An item collection, array of items, or null.
     *
     * @since 5.0.0
     */
    itemForMultiPolygon?<D extends GeoJSONTypes.MultiPolygon>(
        itemCollection: ItemCollection<D>,
        geoJSON: D,
    ): ItemCollection<D> | Item[] | null;
    /**
     * Overrides a point.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemforpoint)
     *
     * @param coordinate A GeoJSON `Point` generates the coordinate. You can use the coordinate to instantiate an item to return.
     * @param geoJSON The original GeoJSON object for the `Point`. This object may be a simple `Point` or a `Feature` with the `Point` geometry type.
     * @returns An item or null.
     *
     * @since 5.0.0
     */
    itemForPoint?(
        coordinate: Coordinate,
        geoJSON: GeoJSONTypes.Point,
    ): Item | null;
    /**
     * Overrides a line string.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemforlinestring)
     *
     * @param overlay A {@link PolylineOverlay} object.
     * @param geoJSON The original GeoJSON object for the `LineString` object.
     * @returns A polyline overlay or null.
     *
     * @since 5.0.0
     */
    itemForLineString?(
        overlay: PolylineOverlay,
        geoJSON: GeoJSONTypes.LineString,
    ): PolylineOverlay | null;
    /**
     * Overrides a polygon.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemforpolygon)
     *
     * @param overlay You can customize the provided overlay before returning it, or you can completely replace the overlay.
     * @param geoJSON The original GeoJSON object for the polygon.
     * @returns A polygon overlay or null.
     *
     * @since 5.0.0
     */
    itemForPolygon?(
        overlay: PolygonOverlay,
        geoJSON: GeoJSONTypes.Polygon,
    ): PolygonOverlay | null;
    /**
     * Overrides a feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemforfeature)
     *
     * @param item An item the system creates for the geometry of the feature, or `null` for features with `null` geometry.
     * @param geoJSON The original GeoJSON object for the `feature`.
     * @returns An item or null.
     *
     * @since 5.0.0
     */
    itemForFeature?(
        item: Item | null,
        geoJSON: GeoJSONTypes.Feature,
    ): Item | null;
    /**
     * Overrides a feature collection.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemforfeaturecollection)
     *
     * @param itemCollection A collection containing associated annotations and overlays.
     * @param geoJSON The original GeoJSON object for the `FeatureCollection`. This contains an array of `feature` types.
     * @returns An item collection, array of items, or null.
     *
     * @since 5.0.0
     */
    itemForFeatureCollection?<D extends GeoJSONTypes.FeatureCollection>(
        itemCollection: ItemCollection<D>,
        geoJSON: D,
    ): ItemCollection<D> | Item[] | null;
    /**
     * Overrides a geometry collection with the provided item and object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geojsondelegate/itemforgeometrycollection)
     *
     * @param item An item the system creates for the geometry of the geometry collection.
     * @param object The original GeoJSON object for the feature.
     * @returns A map item for the geometry collection.
     *
     * @since 5.0.0
     */
    itemForGeometryCollection?<D extends GeoJSONTypes.GeometryCollection>(
        item: ItemCollection<D>,
        object: D,
    ): ItemCollection<D> | Item[] | null;
    /**
     * Overrides the style of overlays.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geojsondelegate/styleforoverlay)
     *
     * @param overlay The overlay to style.
     * @param geoJSON The original GeoJSON for the `feature` or `geometry` object`.`
     * @returns A style object or undefined.
     *
     * @since 5.0.0
     */
    styleForOverlay?(
        overlay: PolylineOverlay | PolygonOverlay,
        geoJSON: GeoJSONTypes.LineString | GeoJSONTypes.Polygon,
    ): Style;
    /**
     * Completes the GeoJSON import.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geojsondelegate/geojsondidcomplete)
     *
     * @param result The mapped item collection.
     * @param geoJSON The original parsed GeoJSON object.
     *
     * @since 5.0.0
     */
    geoJSONDidComplete?<D extends GeoJSONTypes.GeoJSON>(
        result: ItemCollection<D>,
        geoJSON: D,
    ): void;
    /**
     * Indicates when the GeoJSON import fails.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geojsondelegate/geojsondiderror)
     *
     * @param error An `Error` instance related to the last blocking error.
     * @param geoJSON The original parsed GeoJSON object.
     *
     * @since 5.0.0
     */
    geoJSONDidError?(
        error: GeoJSONImportError | Error,
        geoJSON?: GeoJSONTypes.GeoJSON,
    ): void;
}

/**
 * A callback function that MapKit JS invokes when importing a GeoJSON object.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geojsonimportercallback)
 *
 * @since 5.0.0
 */
type GeoJSONImporterCallback = (
    ...args:
        | [GeoJSONImportError, GeoJSONTypes.GeoJSON | undefined]
        | [null, ItemCollection]
) => void;

/**
 * An error object that indicates an error occurred while importing a GeoJSON object.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geojsonimporterror)
 *
 * @since 5.0.0
 */
declare class GeoJSONImportError extends Error {}

/**
 * A customized annotation with image resources that you provide.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/imageannotation)
 *
 * @since 5.0.0
 */
export class ImageAnnotation extends Annotation {
    /**
     * Creates an image annotation with a URL to its image and a coordinate.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/imageannotation/imageannotationconstructor)
     *
     * @param location The coordinate where this annotation appears.
     * @param options A hash of properties that initialize the annotation. The `options` hash needs to include {@link ImageAnnotationConstructorOptions.url}. MapKit JS displays an optional `title` and `subtitle` in a callout if they're present.
     *
     * @since 5.0.0
     */
    constructor(
        location: Coordinate | Place | SearchAutocompleteResult,
        options: ImageAnnotationConstructorOptions,
    );
    /**
     * An object containing URLs for the image assets in multiple resolutions.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/imageannotation/url)
     *
     * @since 5.0.0
     */
    get url(): ImageDelegate | ImageHashObject;
    set url(value: ImageDelegate | ImageHashObject);
}

/**
 * An object containing options for creating an image annotation.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/imageannotationconstructoroptions)
 *
 * @since 5.0.0
 */
export interface ImageAnnotationConstructorOptions extends AnnotationConstructorOptions {
    /**
     * An object containing URLs for the image assets in multiple resolutions.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/imageannotationconstructoroptions/url)
     *
     * @since 5.0.0
     */
    url: ImageDelegate | ImageHashObject;
}

/**
 * An object you use to specify image URLs.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/imagedelegate)
 *
 * @since 5.74.0
 */
export interface ImageDelegate {
    /**
     * Returns the URL to an image of the specified scale.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/imagedelegate/getimageurl)
     *
     * @param ratio The desired pixel ratio for the image.
     * @param callback A callback function to receive the image URL.
     * @returns void
     *
     * @since 5.74.0
     */
    getImageUrl(ratio: number, callback: (url?: string) => void): void;
}

/**
 * An object that defines a set of images URLs for different scales.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/imagehashobject)
 *
 * @since 5.0.0
 */
type ImageHashObject = {
    [ratio: string]: string | undefined;
} & {};

/**
 * A type alias that represents all objects that the framework sets in an item collection.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/item)
 *
 * @since 5.0.0
 */
type Item = Annotation | Overlay | ItemCollection;

/**
 * A tree structure containing annotations, overlays, and nested item collection objects.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/itemcollection)
 *
 * @since 5.0.0
 */
export class ItemCollection<D = any> {
    /**
     * The raw GeoJSON data.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/itemcollection/data)
     *
     * @since 5.0.0
     */
    get data(): D | undefined;
    set data(data: D | undefined);
    /**
     * A nested list of annotations, overlays, and other item collections.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/itemcollection/items)
     *
     * @since 5.0.0
     */
    get items(): Item[];
    set items(items: Item | Item[] | null);
    /**
     * A flattened array of items that includes annotations and overlays.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/itemcollection/getflatteneditemlist)
     *
     * @returns A flattened array of annotations and overlays, excluding nested item collections.
     *
     * @since 5.0.0
     */
    getFlattenedItemList(): (Annotation | Overlay)[];
}

/**
 * A line that displays with a gradient along the length of the line.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/linegradient)
 *
 * @since 5.45.0
 */
export class LineGradient {
    /**
     * Creates a style that renders a gradient along the length of a line.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/linegradient/linegradientconstructor)
     *
     * @param colorStops A JavaScript object with unit distance values as keys with matched CSS colors.
     *
     * @since 5.45.0
     */
    constructor(colorStops?: { [key: number]: string });
    /**
     * Adds a color transition point to the gradient.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/linegradient/addcolorstop)
     *
     * @param offset The unit distance at which to add the color.
     * @param color The CSS color at the transition point.
     *
     * @since 5.45.0
     */
    addColorStop(offset: number, color: string): void;
    /**
     * Adds a color transition at the index point in the list of points within a polyline.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/linegradient/addcolorstopatindex)
     *
     * @param index A valid index into a polyline's {@link PolylineOverlay.points}.
     * @param color The CSS color at the index point.
     *
     * @since 5.45.0
     */
    addColorStopAtIndex(index: number, color: string): void;
    /**
     * Returns a string representation of the line gradient object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/linegradient/tostring)
     *
     * @returns A string representation of the line gradient.
     *
     * @since 5.45.0
     */
    toString(): string;
}

/**
 * Values for prioritizing the visibility of specific map features while the map is loading.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/loadpriority)
 *
 * @since 5.0.0
 */
declare const LoadPriority: Readonly<{
    /**
     * Prioritizes loading of the map land cover and borders, without POIs or labels.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/loadpriority/landcover)
     *
     * @since 5.73.0
     */
    readonly LandCover: "LandCover";
    /**
     * Prioritizes loading of the full standard map, with rendered POIs.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/loadpriority/pointsofinterest)
     *
     * @since 5.73.0
     */
    readonly PointsOfInterest: "PointsOfInterest";
    /**
     * Signifies no preferences over what to prioritize when loading the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/loadpriority/none)
     *
     * @since 5.73.0
     */
    readonly None: null;
}>;

type LoadPriority = (typeof LoadPriority)[keyof typeof LoadPriority];

/**
 * A view that allows someone to see a street level view of a place.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaround)
 *
 * @since 5.79.0
 */
export class LookAround extends AbstractLookAround {
    #private;
    /**
     * Creates a Look Around object you embed on a webpage and initializes it with the constructor options you choose.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaround/lookaroundconstructor)
     *
     * @param parent The containing DOM element.
     * @param location The starting point of the look around.
     * @param options Look around options
     *
     * @since 5.79.0
     */
    constructor(
        parent?: HTMLElement,
        location?: Coordinate | Place | LookAroundScene,
        options?: LookAroundOptions,
    );

    /**
     * A static property that allows you to access the Look Around ready state.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaround/readystates)
     *
     * Ready States
     *   * `loading`: the view is loading the requested look around imagery.
     *   * `complete`: the view has loaded completed.
     *   * `error`: the view encountered a recoverable error, either because of an invalid location or the loading has failed.
     *   * `destroyed`: the view was destroyed, either manually or because an unrecoverable error was encountered.
     *
     * @since 5.79.0
     */
    static ReadyStates: typeof LookAroundReadyState;

    /**
     * A Boolean value that indicates whether the Look Around view displays shows a control that allow someone to expand the Look Around view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaround/showsdialogcontrol)
     *
     * @since 5.79.0
     */
    get showsDialogControl(): boolean;
    set showsDialogControl(value: boolean);
    /**
     * A Boolean value that indicates whether the Look Around view displays a close control.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaround/showsclosecontrol)
     *
     * @since 5.79.0
     */
    get showsCloseControl(): boolean;
    set showsCloseControl(value: boolean);
}

/**
 * Values that control the positions of a badge on a Look Around preview.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundbadgeposition)
 *
 * @since 5.79.0
 */
declare const LookAroundBadgePosition: Readonly<{
    /**
     * Places the badge on the top leading corner of the Look Around preview.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundbadgeposition/topleading)
     *
     * @since 5.79.0
     */
    readonly TopLeading: "topLeading";
    /**
     * Places the badge on the top trailing corner of the Look Around preview.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundbadgeposition/toptrailing)
     *
     * @since 5.79.0
     */
    readonly TopTrailing: "topTrailing";
    /**
     * Places the badge on the bottom trailing corner of the Look Around preview.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundbadgeposition/bottomtrailing)
     *
     * @since 5.79.0
     */
    readonly BottomTrailing: "bottomTrailing";
}>;

type LookAroundBadgePosition = (typeof LookAroundBadgePosition)[keyof typeof LookAroundBadgePosition];

/**
 * A custom event object that contains information about the error when starting a Look Around view.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookarounderrorevent)
 *
 * @since 5.79.0
 */
export type LookAroundErrorEvent = CustomEvent<{
    type: LookAroundErrorType;
    message: string;
}>;

/**
 * Values that describes errors than can occur when starting a Look Around view.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookarounderrortype)
 *
 * @since 5.79.0
 */
export const LookAroundErrorType: Readonly<{
    /**
     * An error type that indicates the requested Look Around view isn't available.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookarounderrortype/availabilityerror)
     *
     * @since 5.79.0
     */
    readonly AvailabilityError: "availability-error";
    /**
     * An error type that indicates the browser doesn't support the Look Around experience.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookarounderrortype/browsererror)
     *
     * @since 5.79.0
     */
    readonly BrowserError: "browser-error";
    /**
     * An error type that indicates the service supporting the Look Around view isn't available.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookarounderrortype/serviceerror)
     *
     * @since 5.79.0
     */
    readonly ServiceError: "service-error";
    /**
     * An error type that indicates the Look Around view encountered an unknown error.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookarounderrortype/unknownerror)
     *
     * @since 5.79.0
     */
    readonly UnknownError: "unknown-error";
}>;

export type LookAroundErrorType = (typeof LookAroundErrorType)[keyof typeof LookAroundErrorType];

/**
 * Options for initializing a LookAround view.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundoptions)
 *
 * @since 5.79.0
 */
export interface LookAroundOptions extends CommonLookAroundOptions {
    /**
     * A Boolean value that indicates whether the Look Around view displays shows a control that allow someone to expand the Look Around view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundoptions/showsdialogcontrol)
     */
    showsDialogControl?: boolean;
    /**
     * A Boolean value that indicates whether the Look Around view displays a close control.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundoptions/showsclosecontrol)
     */
    showsCloseControl?: boolean;
}

/**
 * A class that renders a preview of a Look Around view.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundpreview)
 *
 * @since 5.79.0
 */
export class LookAroundPreview extends AbstractLookAround {
    #private;
    /**
     * Creates a Look Around preview you embed on a webpage and initializes it with the constructor options you choose.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundpreview/lookaroundpreviewconstructor)
     *
     * @param parent The containing DOM element.
     * @param location The starting point of the look around.
     * @param options Look around options
     *
     * @since 5.79.0
     */
    constructor(
        parent?: HTMLElement,
        location?: Coordinate | Place | LookAroundScene,
        options?: LookAroundPreviewOptions,
    );

    /**
     * A static property that allows you to access to access the look around ready state enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundpreview/readystates)
     *
     * Ready States
     *   * `loading`: the view is loading the requested look around imagery.
     *   * `complete`: the view has loaded completed.
     *   * `error`: the view encountered a recoverable error, either because of an invalid location or the loading has failed.
     *   * `destroyed`: the view was destroyed, either manually or because an unrecoverable error was encountered.
     *
     * @since 5.79.0
     */
    static ReadyStates: typeof LookAroundReadyState;

    /**
     * A static property that allows you to access the Look Around ready state enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundpreview/badgepositions)
     *
     * @since 5.79.0
     */
    static BadgePositions: typeof LookAroundBadgePosition;
    /**
     * A value you set to specify the position of a badge on the Look Around preview.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundpreview/badgeposition)
     *
     * @since 5.79.0
     */
    get badgePosition(): LookAroundBadgePosition;
    set badgePosition(value: LookAroundBadgePosition);
    /**
     * Destroys the Look Around view and releases its resources.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundpreview/destroy)
     *
     * @since 5.79.0
     */
    destroy(): void;
}

/**
 * Options for initializing a LookAroundPreview object.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundpreviewoptions)
 *
 * @since 5.79.0
 */
export interface LookAroundPreviewOptions extends CommonLookAroundOptions {
    /**
     * A value you set to specific the position of a badge on the Look Around preview.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundpreviewoptions/badgeposition)
     */
    badgePosition?: LookAroundBadgePosition;
}

/**
 * Values that indicate the state of the Look Around object in the browser.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundreadystate)
 *
 * @since 5.79.0
 */
declare const LookAroundReadyState: Readonly<{
    /**
     * A value that indicates the Look Around view is loading.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundreadystate/loading)
     *
     * @since 5.79.0
     */
    readonly Loading: "loading";
    /**
     * A value that indicates the Look Around view has completed loading.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundreadystate/complete)
     *
     * @since 5.79.0
     */
    readonly Complete: "complete";
    /**
     * A value that indicates the Look Around view encountered an error while loading.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundreadystate/error)
     *
     * @since 5.79.0
     */
    readonly Error: "error";
    /**
     * A value that indicates the Look Around object is destroyed.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundreadystate/destroyed)
     *
     * @since 5.79.0
     */
    readonly Destroyed: "destroyed";
}>;

type LookAroundReadyState = (typeof LookAroundReadyState)[keyof typeof LookAroundReadyState];

/**
 * Object that represents the current location of the view.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundscene)
 *
 * @since 5.79.0
 */
export class LookAroundScene {
    #private;

    /**
     * Returns a copy of the Look Around scene object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundscene/copy)
     *
     * @returns A copy of the Look Around scene object.
     *
     * @since 5.79.0
     */
    copy(): LookAroundScene;
}

/**
 * An embeddable interactive map that you add to a webpage.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map)
 *
 * @since 5.0.0
 */
declare class Map extends MapKitEventTarget {
    /**
     * Creates a map you embed on a webpage and initializes it with the constructor options you choose.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/mapconstructor)
     *
     * @param parent A DOM element, or the ID of a DOM element, to use as your map's container.
     * @param options Options that {@link MapConstructorOptions} defines for initializing the properties of your map.
     *
     * @since 5.0.0
     */
    constructor(
        parent?: string | HTMLElement | null,
        options?: MapConstructorOptions,
    );
    /**
     * A static property that allows you to access the map type enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/maptypes)
     *
     * @since 5.0.0
     */
    static MapTypes: typeof MapType;
    /**
     * A static property that allows you to access to access the look color scheme enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/colorschemes)
     *
     * @since 5.13.0
     */
    static ColorSchemes: typeof ColorScheme;
    /**
     * A static property that allows you to access the distance enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/distances-data.var)
     *
     * @since 5.13.0
     */
    static Distances: typeof Distance;
    /**
     * A static property that allows you to access the load priority enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/loadpriorities)
     *
     * @since 5.73.0
     */
    static LoadPriorities: typeof LoadPriority;
    /**
     * The map's inset margins.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/padding)
     *
     * @since 5.0.0
     */
    get padding(): Padding;
    set padding(padding: Padding);
    /**
     * A Boolean value that determines whether the user can cause the map to scroll with a pointing device or with gestures on a touchscreen.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/isscrollenabled)
     *
     * @since 5.0.0
     */
    get isScrollEnabled(): boolean;
    set isScrollEnabled(value: boolean);
    /**
     * A Boolean value that determines whether the user may zoom in and out on the map using pinch gestures or the zoom control.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/iszoomenabled)
     *
     * @since 5.0.0
     */
    get isZoomEnabled(): boolean;
    set isZoomEnabled(value: boolean);
    /**
     * A Boolean value that determines whether to display a control for zooming in and zooming out on a map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/showszoomcontrol)
     *
     * @since 5.0.0
     */
    get showsZoomControl(): boolean;
    set showsZoomControl(showsZoomControl: boolean);
    /**
     * A feature visibility setting that determines when the map displays the map's scale indicator.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/showsscale)
     *
     * @since 5.0.0
     */
    get showsScale(): FeatureVisibility;
    set showsScale(showsScale: FeatureVisibility);
    /**
     * The type of data that the map displays.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/maptype)
     *
     * @since 5.0.0
     */
    get mapType(): MapType;
    set mapType(mapType: MapType);
    /**
     * The map's color scheme when displaying standard or muted standard map types.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/colorscheme)
     *
     * @since 5.13.0
     */
    get colorScheme(): ColorScheme;
    set colorScheme(colorScheme: ColorScheme);
    /**
     * The system of measurement that displays on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/distances-data.property)
     *
     * @since 5.13.0
     */
    get distances(): Distance;
    set distances(distances: Distance);

    /**
     * A value MapKit JS uses for prioritizing the visibility of specific map features before the underlaying map tiles.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/loadpriority)
     *
     * @since 5.73.0
     */
    get loadPriority(): LoadPriority;
    set loadPriority(value: LoadPriority);
    /**
     * An array of all of the map's tile overlays.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/tileoverlays)
     *
     * @since 5.0.0
     */
    get tileOverlays(): TileOverlay[];
    set tileOverlays(tileOverlays: TileOverlay[]);
    /**
     * Adds a tile overlay to the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/addtileoverlay)
     *
     * @param tileOverlay The tile overlay to add.
     * @returns void
     *
     * @since 5.0.0
     */
    addTileOverlay(tileOverlay: TileOverlay): TileOverlay;
    /**
     * Adds an array of tile overlays to the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/addtileoverlays)
     *
     * @param tileOverlays An array of tile overlays to add.
     * @returns The array of tile overlays that were added.
     *
     * @since 5.0.0
     */
    addTileOverlays(tileOverlays: TileOverlay[]): TileOverlay[];
    /**
     * Removes a tile overlay from the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/removetileoverlay)
     *
     * @param tileOverlay The tile overlay to remove.
     * @returns The tile overlay that was removed.
     *
     * @since 5.0.0
     */
    removeTileOverlay(tileOverlay: TileOverlay): TileOverlay;
    /**
     * Removes an array of tile overlays from the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/removetileoverlays)
     *
     * @param tileOverlays An array of tile overlays to remove.
     * @returns The array of tile overlays that were removed.
     *
     * @since 5.0.0
     */
    removeTileOverlays(tileOverlays: TileOverlay[]): TileOverlay[];
    /**
     * A Boolean value that determines whether to display a control that lets users choose the map type.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/showsmaptypecontrol)
     *
     * @since 5.0.0
     */
    get showsMapTypeControl(): boolean;
    set showsMapTypeControl(showsMapTypeControl: boolean);
    /**
     * A Boolean value that determines whether the user location control is visible.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/showsuserlocationcontrol)
     *
     * @since 5.0.0
     */
    get showsUserLocationControl(): boolean;
    set showsUserLocationControl(showsUserLocationControl: boolean);
    /**
     * A Boolean value that determines whether the map displays points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/showspointsofinterest)
     *
     * @since 5.0.0
     */
    get showsPointsOfInterest(): boolean;
    set showsPointsOfInterest(showsPointsOfInterest: boolean);
    /**
     * The filter that determines the points of interest that display on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/pointofinterestfilter)
     *
     * @since 5.32.2
     */
    get pointOfInterestFilter(): PointOfInterestFilter | null;
    set pointOfInterestFilter(filter: PointOfInterestFilter | null);
    /**
     * The map's DOM element.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/element)
     *
     * @since 5.0.0
     */
    get element(): HTMLDivElement | null;
    set element(_: HTMLDivElement | null);
    /**
     * The visible area of the map, in map units.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/visiblemaprect)
     *
     * @since 5.0.0
     */
    get visibleMapRect(): MapRect;
    set visibleMapRect(visibleMapRect: MapRect);
    /**
     * Changes the map's visible map rectangle to the specified map rectangle.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/setvisiblemaprectanimated)
     *
     * @param mapRect The map's new visible area, in map units.
     * @param animated A Boolean value that determines whether MapKit JS animates the visible area change. The default value is `true`.
     * @returns Returns the map object.
     *
     * @since 5.0.0
     */
    setVisibleMapRectAnimated(mapRect: MapRect, animated?: boolean): Map;
    /**
     * The area the map is displaying.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/region)
     *
     * @since 5.0.0
     */
    get region(): CoordinateRegion;
    set region(region: CoordinateRegion);
    /**
     * Changes the map's region to the provided region, with optional animation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/setregionanimated)
     *
     * @param region A new {@link Map.region} for the map to display.
     * @param animated A Boolean value that determines whether MapKit JS animates the region change. The default value is `true`.
     * @returns Returns the map object.
     *
     * @since 5.0.0
     */
    setRegionAnimated(region: CoordinateRegion, animated?: boolean): Map;
    /**
     * A Boolean value that indicates whether map rotation is available.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/isrotationavailable)
     *
     * @since 5.0.0
     */
    get isRotationAvailable(): boolean | undefined;
    set isRotationAvailable(_: boolean | undefined);
    /**
     * A Boolean value that determines whether the user may rotate the map using the compass control or a rotate gesture.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/isrotationenabled)
     *
     * @since 5.0.0
     */
    get isRotationEnabled(): boolean;
    set isRotationEnabled(value: boolean);
    /**
     * The map's rotation, in degrees.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/rotation)
     *
     * @since 5.0.0
     */
    get rotation(): number;
    set rotation(rotation: number);
    /**
     * A feature visibility setting that determines when the compass is visible.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/showscompass)
     *
     * @since 5.0.0
     */
    get showsCompass(): FeatureVisibility;
    set showsCompass(value: FeatureVisibility);
    /**
     * Changes the map's rotation setting to the number of specified degrees.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/setrotationanimated)
     *
     * @param degrees The map's rotation, in degrees.
     * @param animated A Boolean value that determines whether the rotation change animates. The default value is `true`.
     * @returns Returns the map object.
     *
     * @since 5.0.0
     */
    setRotationAnimated(degrees: number, animated?: boolean): Map | undefined;
    /**
     * The map coordinate at the center of the map view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/center)
     *
     * @since 5.0.0
     */
    get center(): Coordinate;
    set center(center: Coordinate);
    /**
     * Centers the map to the provided coordinate, with optional animation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/setcenteranimated)
     *
     * @param coordinate The map's new {@link Map.center}.
     * @param animated A Boolean value that determines whether MapKit JS animates the center change. The default value is `true`.
     * @returns Returns the map object.
     *
     * @since 5.0.0
     */
    setCenterAnimated(coordinate: Coordinate, animated?: boolean): Map;
    /**
     * The minimum and maximum distances of the camera from the map center.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/camerazoomrange)
     *
     * @since 5.23.0
     */
    get cameraZoomRange(): CameraZoomRange;
    set cameraZoomRange(value: CameraZoomRange);
    /**
     * Changes the map's camera zoom range with an animated transition.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/setcamerazoomrangeanimated)
     *
     * @param cameraZoomRange A {@link CameraZoomRange} instance, which is an object containing the {@link CameraZoomRange.minCameraDistance} and {@link CameraZoomRange.maxCameraDistance} properties.
     * @param animated A Boolean value that determines whether MapKit JS animates the visible area change. The default value is `true`.
     * @returns Returns this map object so calls can be chained.
     *
     * @since 5.23.0
     */
    setCameraZoomRangeAnimated(
        cameraZoomRange: CameraZoomRange,
        animated?: boolean,
    ): Map;
    /**
     * The altitude of the camera relative to the elevation of the center of the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/cameradistance)
     *
     * @since 5.23.0
     */
    get cameraDistance(): number;
    set cameraDistance(value: number);
    /**
     * Changes the map's camera distance with an animated transition.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/setcameradistanceanimated)
     *
     * @param distance The altitude of the camera from the center of the map. It's value needs to be greater than or equal to `0`.
     * @param animated A Boolean value that determines whether MapKit JS animates the visible area change. The default value is `true`.
     * @returns Returns this map object so calls can be chained.
     *
     * @since 5.23.0
     */
    setCameraDistanceAnimated(distance: number, animated?: boolean): Map;
    /**
     * A constraint of the location of the center of the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/cameraboundary)
     *
     * @returns An object containing both {@link CoordinateRegion} and {@link MapRect} instances.
     *
     * @since 5.23.0
     */
    get cameraBoundary(): CameraBoundaryDescription | null;
    set cameraBoundary(cameraBoundary: null | CoordinateRegion | MapRect);
    /**
     * Changes the map's camera boundary with an animated transition.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/setcameraboundaryanimated)
     *
     * @param cameraBoundary This can be an instance of {@link CoordinateRegion} or {@link MapRect}.
     * @param animated A Boolean value that determines whether MapKit JS animates the visible area change. The default value is `true`.
     * @returns The map instance for method chaining.
     *
     * @since 5.23.0
     */
    setCameraBoundaryAnimated(
        cameraBoundary: null | CoordinateRegion | MapRect,
        animated?: boolean,
    ): Map;
    /**
     * An array of all of the map's overlays.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/overlays)
     *
     * @since 5.0.0
     */
    get overlays(): Overlay[];
    set overlays(overlays: Overlay[]);
    /**
     * The selected overlay on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/selectedoverlay)
     *
     * @since 5.0.0
     */
    get selectedOverlay(): Overlay | null;
    set selectedOverlay(overlay: Overlay | null);
    /**
     * Adds an overlay to the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/addoverlay)
     *
     * @param overlay The overlay to add.
     * @returns The added overlay, or `undefined` if the overlay could not be added.
     *
     * @since 5.0.0
     */
    addOverlay(overlay: Overlay): Overlay | undefined;
    /**
     * Adds multiple overlays to the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/addoverlays)
     *
     * @param overlays An array of overlays to add.
     * @returns The array of overlays that were added.
     *
     * @since 5.0.0
     */
    addOverlays(overlays: Overlay[]): Overlay[];
    /**
     * Removes an overlay from the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/removeoverlay)
     *
     * @param overlay The overlay to remove.
     * @returns The overlay that was removed.
     *
     * @since 5.0.0
     */
    removeOverlay(overlay: Overlay): Overlay;
    /**
     * Removes multiple overlays from the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/removeoverlays)
     *
     * @param overlays An array of overlays to remove.
     * @returns The array of overlays that were removed.
     *
     * @since 5.0.0
     */
    removeOverlays(overlays: Overlay[]): Overlay[];
    /**
     * Returns the topmost overlay at a given point on the webpage.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/topoverlayatpoint)
     *
     * @param point A point in the page's coordinate system, such as `new DOMPoint(event.pageX, event.pageY)` when handling a mouse event.
     * @returns The topmost overlay at the given point, or `undefined` if no overlay is found.
     *
     * @since 5.0.0
     */
    topOverlayAtPoint(point: DOMPoint): Overlay | undefined;
    /**
     * Returns an array of overlays at a given point on the webpage.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/overlaysatpoint)
     *
     * @param point A point in the page's coordinate system, such as `new DOMPoint(event.pageX, event.pageY)`, when handling a mouse event.
     * @returns An array of overlays at the given point.
     *
     * @since 5.0.0
     */
    overlaysAtPoint(point: DOMPoint): Overlay[];
    /**
     * An array of all the annotations on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/annotations)
     *
     * @since 5.0.0
     */
    get annotations(): Annotation[];
    set annotations(annotations: Annotation[]);
    /**
     * The selected annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/selectedannotation)
     *
     * @since 5.0.0
     */
    get selectedAnnotation(): Annotation | null;
    set selectedAnnotation(annotation: Annotation | null);
    /**
     * Adds an annotation to the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/addannotation)
     *
     * @param annotation The annotation to add.
     * @returns The added annotation, or `undefined` if the annotation could not be added.
     *
     * @since 5.0.0
     */
    addAnnotation(annotation: Annotation): Annotation | undefined;
    /**
     * Adds an array of annotations to the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/addannotations)
     *
     * @param annotations An array of annotations to add.
     * @returns The array of annotations that were added.
     *
     * @since 5.0.0
     */
    addAnnotations(annotations: Annotation[]): Annotation[];
    /**
     * Removes an annotation from the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/removeannotation)
     *
     * @param annotation The annotation to remove.
     * @returns The annotation that was removed.
     *
     * @since 5.0.0
     */
    removeAnnotation(annotation: Annotation): Annotation;
    /**
     * Removes multiple annotations from the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/removeannotations)
     *
     * @param annotations An array of annotations to remove.
     * @returns The array of annotations that were removed.
     *
     * @since 5.0.0
     */
    removeAnnotations(annotations: Annotation[]): Annotation[];
    /**
     * Adjusts the map's visible region to bring the specified overlays and annotations into view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/showitems)
     *
     * @param items An array of annotations and overlays to make visible.
     * @param options Options that {@link MapShowItemsOptions} defines that let you determine animation, padding, and the minimum span of the map's region.
     * @returns Returns the items array that you pass.
     *
     * @since 5.0.0
     */
    showItems(
        items: (Overlay | Annotation)[],
        options?: MapShowItemsOptions,
    ): (Annotation | Overlay)[];
    /**
     * Adds a collection of annotations, overlays, or other item collections to the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/additems)
     *
     * @param items An array of annotations, overlays, or the data returned from {@link mapkit.importGeoJSON} to display on the map.
     * @returns The array of items that were added to the map.
     *
     * @since 5.0.0
     */
    addItems(items: (Overlay | Annotation)[]): (Annotation | Overlay)[];
    /**
     * Removes a collection of annotations, overlays, or other item collections from the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/removeitems)
     *
     * @param items An array of annotations, overlays, or the data returned from {@link mapkit.importGeoJSON} to display on the map.
     * @returns The array of items that were removed from the map.
     *
     * @since 5.0.0
     */
    removeItems(items: (Overlay | Annotation)[]): (Annotation | Overlay)[];
    /**
     * Returns the list of annotation objects within the specified map rectangle.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/annotationsinmaprect)
     *
     * @param mapRect The portion of the map in which to look for annotations.
     * @returns An array of annotations within the specified map rectangle.
     *
     * @since 5.0.0
     */
    annotationsInMapRect(mapRect: MapRect): Annotation[];

    /**
     * Converts a coordinate on the map to a point in the page's coordinate system.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/convertcoordinatetopointonpage)
     *
     * @param coordinate The coordinate that displays on the map.
     * @returns A point in the page's coordinate system corresponding to the map coordinate.
     *
     * @since 5.0.0
     */
    convertCoordinateToPointOnPage(coordinate: Coordinate): DOMPoint;
    /**
     * Converts a point in page coordinates to the corresponding map coordinate.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/convertpointonpagetocoordinate)
     *
     * @param point A point in the page's coordinate system, such as `new DOMPoint(event.pageX, event.pageY),` when handling a mouse event.
     * @returns The map coordinate corresponding to the page point.
     *
     * @since 5.0.0
     */
    convertPointOnPageToCoordinate(point: DOMPoint): Coordinate;
    /**
     * A Boolean value that determines whether to show the user's location on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/showsuserlocation)
     *
     * @since 5.0.0
     */
    get showsUserLocation(): boolean;
    set showsUserLocation(value: boolean);
    /**
     * An annotation that indicates the user's location on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/userlocationannotation)
     *
     * @since 5.0.0
     */
    get userLocationAnnotation(): UserLocationAnnotation | null;
    /**
     * A Boolean value that determines whether to center the map on the user's location.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/tracksuserlocation)
     *
     * @since 5.0.0
     */
    get tracksUserLocation(): boolean;
    set tracksUserLocation(value: boolean);
    /**
     * The CSS color that MapKit JS uses for user interface controls on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/tintcolor)
     *
     * @since 5.0.0
     */
    get tintColor(): string;
    set tintColor(value: string);
    /**
     * Removes the map's element from the DOM and releases internal references to the map to free up memory.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/destroy)
     *
     * @since 5.0.0
     */
    destroy(): void;
    /**
     * A delegate method for modifying an annotation that represents a group of annotations that the framework combines into a cluster.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/annotationforcluster)
     *
     * @since 5.0.0
     */
    get annotationForCluster():
        | ((clusterAnnotation: ClusterAnnotation) => Annotation | undefined)
        | null;
    set annotationForCluster(
        value:
            | ((clusterAnnotation: ClusterAnnotation) => Annotation | undefined)
            | null,
    );
    /**
     * An array of map features that users can select from the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/selectablemapfeatures)
     *
     * @since 5.74.1
     */
    get selectableMapFeatures(): MapFeatureType[];
    set selectableMapFeatures(value: MapFeatureType[]);
    /**
     * An accessory for displaying place information when a person selects a map feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/selectablemapfeatureselectionaccessory)
     *
     * @since 5.78.1
     */
    get selectableMapFeatureSelectionAccessory(): PlaceSelectionAccessory | null;
    set selectableMapFeatureSelectionAccessory(
        value: PlaceSelectionAccessory | null,
    );
    /**
     * The method MapKit JS calls when the framework creates a map feature annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/annotationformapfeature)
     *
     * @since 5.74.1
     */
    get annotationForMapFeature():
        | ((
            mapFeatureAnnotation: MapFeatureAnnotation,
        ) => Annotation | undefined)
        | undefined;
    set annotationForMapFeature(
        value:
            | ((
                mapFeatureAnnotation: MapFeatureAnnotation,
            ) => Annotation | undefined)
            | undefined,
    );
}
export { Map as Map };

/**
 * An event object that the map object dispatches when someone drags an annotation.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapannotationdragevent)
 *
 * @since 5.0.0
 */
export class MapAnnotationDragEvent extends MapKitEvent {
    /**
     * The annotation that a person dragged.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapannotationdragevent/annotation)
     *
     * @since 5.0.0
     */
    readonly annotation: Annotation;
    /**
     * The coordinate of the annotation while someone is dragging it.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapannotationdragevent/coordinate)
     *
     * @since 5.0.0
     */
    readonly coordinate?: Coordinate | undefined;
}

/**
 * An event object that the map object dispatches when someone selects or deselects an annotation.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapannotationselectionevent)
 *
 * @since 5.0.0
 */
export class MapAnnotationSelectionEvent extends MapKitEvent {
    /**
     * The annotation that someone selected or deselected.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapannotationselectionevent/annotation)
     *
     * @since 5.0.0
     */
    readonly annotation: Annotation;
}

/**
 * An object that contains options for creating a map's features.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions)
 *
 * @since 5.0.0
 */
export interface MapConstructorOptions {
    /**
     * A value MapKit JS uses for prioritizing the visibility of specific map features before the underlaying map tiles.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/loadpriority)
     *
     * @since 5.73.0
     */
    loadPriority?: LoadPriority;

    /**
     * The type of data that the map view displays.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/maptype)
     *
     * @since 5.0.0
     */
    mapType?: MapType;
    /**
     * The map's color scheme when displaying standard or muted standard map types.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/colorscheme)
     *
     * @since 5.13.0
     */
    colorScheme?: ColorScheme;

    /**
     * A Boolean value that determines whether the user may scroll the map with a pointing device or gestures on a touchscreen.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/isscrollenabled)
     *
     * @since 5.0.0
     */
    isScrollEnabled?: boolean;
    /**
     * A Boolean value that determines whether the user may zoom in and out on the map using pinch gestures or the zoom control.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/iszoomenabled)
     *
     * @since 5.0.0
     */
    isZoomEnabled?: boolean;
    /**
     * A Boolean value that determines whether the user may rotate the map using the compass control or a rotate gesture.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/isrotationenabled)
     *
     * @since 5.0.0
     */
    isRotationEnabled?: boolean;
    /**
     * An array of map features that someone can select from the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/selectablemapfeatures)
     *
     * @since 5.74.1
     */
    selectableMapFeatures?: MapFeatureType[];

    /**
     * The filter that determines the points of interest that display on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/pointofinterestfilter)
     *
     * @since 5.32.2
     */
    pointOfInterestFilter?: PointOfInterestFilter;
    /**
     * A Boolean value that determines whether the map displays points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/showspointsofinterest)
     *
     * @since 5.0.0
     */
    showsPointsOfInterest?: boolean;

    /**
     * A Boolean value that determines whether to display a control for zooming in and zooming out on a map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/showszoomcontrol)
     *
     * @since 5.0.0
     */
    showsZoomControl?: boolean;
    /**
     * A Boolean value that determines whether to display a control that lets users choose the map type.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/showsmaptypecontrol)
     *
     * @since 5.0.0
     */
    showsMapTypeControl?: boolean;
    /**
     * A Boolean value that determines whether the user location control is visible.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/showsuserlocationcontrol)
     *
     * @since 5.0.0
     */
    showsUserLocationControl?: boolean;
    /**
     * A feature visibility setting that allows you to determine when to display the map's scale.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/showsscale)
     *
     * @since 5.0.0
     */
    showsScale?: FeatureVisibility;
    /**
     * A feature visibility setting that determines when the compass is visible.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/showscompass)
     *
     * @since 5.0.0
     */
    showsCompass?: FeatureVisibility;
    /**
     * The map's inset margins.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/padding)
     *
     * @since 5.0.0
     */
    padding?: Padding;
    /**
     * Values that set the minimum and maximum distances of the camera from the map center.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/camerazoomrange)
     *
     * @since 5.23.0
     */
    cameraZoomRange?: CameraZoomRange;
    /**
     * The boundary of the area within which the map view's center needs to remain.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/cameraboundary)
     *
     * @since 5.23.0
     */
    cameraBoundary?: CoordinateRegion | MapRect | null;
    /**
     * The visible area of the map, in map units.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/visiblemaprect)
     *
     * @since 5.0.0
     */
    visibleMapRect?: MapRect;
    /**
     * The area the map is displaying.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/region)
     *
     * @since 5.0.0
     */
    region?: CoordinateRegion;
    /**
     * The map coordinate at the center of the map view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/center)
     *
     * @since 5.0.0
     */
    center?: Coordinate;
    /**
     * The altitude of the camera relative to the elevation of the center of the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/cameradistance)
     *
     * @since 5.23.0
     */
    cameraDistance?: number;
    /**
     * The map's rotation, in degrees.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/rotation)
     *
     * @since 5.0.0
     */
    rotation?: number;
    /**
     * An array that contains all of the map's overlays.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/overlays)
     *
     * @since 5.0.0
     */
    overlays?: Overlay[];
    /**
     * An array holding all the annotations on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/annotations)
     *
     * @since 5.0.0
     */
    annotations?: Annotation[];
    /**
     * The selected overlay on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/selectedoverlay)
     *
     * @since 5.0.0
     */
    selectedOverlay?: Overlay;
    /**
     * The selected annotation on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/selectedannotation)
     *
     * @since 5.0.0
     */
    selectedAnnotation?: Annotation;
    /**
     * The system of measurement that displays on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/distances)
     *
     * @since 5.13.0
     */
    distances?: Distance;
    /**
     * The CSS color that MapKit JS uses for the user interface controls on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/tintcolor)
     *
     * @since 5.0.0
     */
    tintColor?: string;
    /**
     * A Boolean value that determines whether to show the user's location on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/showsuserlocation)
     *
     * @since 5.0.0
     */
    showsUserLocation?: boolean;
    /**
     * A Boolean value that determines whether to center the map on the user's location.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/tracksuserlocation)
     *
     * @since 5.0.0
     */
    tracksUserLocation?: boolean;
    /**
     * An array of the map tile overlays.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/tileoverlays)
     *
     * @since 5.0.0
     */
    tileOverlays?: TileOverlay[];
    /**
     * Modifies cluster annotations.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/annotationforcluster)
     *
     * @since 5.0.0
     */
    annotationForCluster?: (
        clusterAnnotation: ClusterAnnotation,
    ) => Annotation | undefined;
    /**
     * The method MapKit JS calls when the framework creates a map feature annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/annotationformapfeature)
     *
     * @since 5.74.1
     */
    annotationForMapFeature?: (
        mapFeatureAnnotation: MapFeatureAnnotation,
    ) => Annotation | undefined;
}

/**
 * An object that represents a gesture the framework recognized on the map.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapevent)
 *
 * @since 5.18.0
 */
export class MapEvent extends MapKitEvent {
    /**
     * A DOM point with the coordinate of the event on the page.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapevent/pointonpage)
     *
     * @since 5.18.0
     */
    readonly pointOnPage?: DOMPoint;
    /**
     * An array of DOM event objects that list the low-level events that led to the recognized gesture.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapevent/domevents)
     *
     * @since 5.18.0
     */
    readonly domEvents?: Event[];
}

/**
 * An object that represents a map feature that the user selects.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotation)
 *
 * @since 5.74.1
 */
export class MapFeatureAnnotation extends PlaceAnnotation {
    /**
     * A value that describes the type of place the feature represents.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotation/featuretype)
     *
     * @since 5.74.1
     */
    get featureType(): "" | MapFeatureType;
    /**
     * Fetches the place object associated with the map feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotation/fetchplace)
     *
     * @param callback Required. The framework invokes appropriate methods on {@link FetchDelegate}, or the callback function with two arguments, `error` and `data,` on success or failure:
     * @returns The request ID that can be used to cancel the request.
     *
     * @since 5.74.1
     */
    fetchPlace(callback: (error: Error | null, result?: Place) => void): number;
    /**
     * The point-of-interest category of the feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotation/pointofinterestcategory)
     *
     * @since 5.74.1
     */
    get pointOfInterestCategory(): PointOfInterestCategory | null;
    /**
     * The map that the annotation is on.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotation/map)
     *
     * @since 5.74.1
     */
    get map(): Map | null;
    /**
     * A value that determines how the map handles collisions between annotations.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotation/collisionmode)
     *
     * @since 5.74.1
     */
    get collisionMode(): CollisionMode;
    /**
     * The title of the feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotation/title)
     *
     * @since 5.74.1
     */
    get title(): string | undefined;
    /**
     * The subtitle of the feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotation/subtitle)
     *
     * @since 5.74.1
     */
    get subtitle(): string | undefined;
    /**
     * A value that determines the behavior of the title's visibility.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotation/titlevisibility)
     *
     * @since 5.74.1
     */
    get titleVisibility(): FeatureVisibility;
    /**
     * A value that determines the subtitle's visibility.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotation/subtitlevisibility)
     *
     * @since 5.74.1
     */
    get subtitleVisibility(): FeatureVisibility;
    /**
     * The accessibility label for the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotation/accessibilitylabel)
     *
     * @since 5.74.1
     */
    get accessibilityLabel(): string | null | undefined;
}

/**
 * An object that describes map feature annotation images.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotationglyphimage)
 *
 * @since 5.74.1
 */
declare class MapFeatureAnnotationGlyphImage implements ImageDelegate {
    /**
     * Returns the image URL of the map feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotationglyphimage/getimageurl)
     *
     * @param scale The scale factor for the image, or undefined to use the current device pixel ratio.
     * @param callback The callback function that receives the generated image URL or undefined if generation fails.
     *
     * @since 5.74.1
     */
    getImageUrl(
        scale: number | undefined,
        callback: (url?: string) => void,
    ): void;
}

/**
 * Values that describe the feature type of a point-of-interest.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeaturetype)
 *
 * @since 5.74.1
 */
export const MapFeatureType: Readonly<{
    /**
     * A feature that describes a point-of-interest, such as a museum, park, or cafe.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeaturetype/pointofinterest)
     *
     * @since 5.74.1
     */
    readonly PointOfInterest: "PointOfInterest";
    /**
     * A feature that describes a territory, such as a region or neighborhood.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeaturetype/territory)
     *
     * @since 5.74.1
     */
    readonly Territory: "Territory";
    /**
     * A physical feature on the Earth such as a mountain range, river, or ocean basin.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeaturetype/physicalfeature)
     *
     * @since 5.75.52
     */
    readonly PhysicalFeature: "PhysicalFeature";
}>;

export type MapFeatureType = (typeof MapFeatureType)[keyof typeof MapFeatureType];

/**
 * The JavaScript API for embedding Apple Maps on your website.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit)
 *
 * @since 5.0.0
 */
export class MapKit extends MapKitEventTarget {
    /**
     * Initializes MapKit JS by providing an authorization callback function and optional language.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/init)
     *
     * @param options MapKit JS initialization options.
     *
     * @since 5.0.0
     */
    init(options: MapKitInitializationOptions): void;
    /**
     * The version of MapKit JS.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/version)
     *
     * @since 5.0.0
     */
    get version(): string;
    /**
     * The build string.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/build)
     *
     * @since 5.0.0
     */
    get build(): string;
    /**
     * A language ID indicating the selected language.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/language)
     *
     * @since 5.0.0
     */
    get language(): string;
    set language(language: string);

    /**
     * The list of available libraries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/libraries)
     *
     * @since 5.75.0
     */
    get Libraries(): string[] | undefined;
    /**
     * A string that describes the list of loaded libraries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/loadedlibraries)
     *
     * @since 5.75.0
     */
    get loadedLibraries(): string[] | undefined;
    /**
     * Tells MapKit JS which libraries to load.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/load)
     *
     * @param libraryNames The libraries to load
     *
     * @since 5.75.0
     */
    load?(libraryNames: string[]): void;
    /**
     * Converts imported GeoJSON data to MapKit JS compatible items.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/importgeojson)
     *
     * @param data The original GeoJSON data, either a URL to a GeoJSON file, or a GeoJSON object.
     * @param callback If the provided data is a GeoJSON object (not a URL), `mapkit.importGeoJSON()` can return the result directly. In this case, if a callback is still provided, it will be used. For GeoJSON file imports, a callback must be provided. The callback can also be a delegate object
     * @returns An ItemCollection containing the imported GeoJSON data as MapKit JS items, or undefined if data is a URL or import fails.
     *
     * @since 5.0.0
     */
    importGeoJSON(
        data: string | GeoJSONTypes.GeoJSON,
        callback?: GeoJSONDelegate | GeoJSONImporterCallback,
    ):
        | ItemCollection<
            GeoJSONTypes.GeoJSON<
                GeoJSONTypes.Geometry,
                GeoJSONTypes.GeoJsonProperties
            >
        >
        | undefined;
    /**
     * The getter to use to access the feature visibility enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/featurevisibility)
     *
     * @since 5.0.0
     */
    get FeatureVisibility(): typeof FeatureVisibility;
    /**
     * The getter to use to access the coordinate region class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/coordinateregion)
     *
     * @since 5.0.0
     */
    get CoordinateRegion(): typeof CoordinateRegion;
    /**
     * The getter to use to access the coordinate span class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/coordinatespan)
     *
     * @since 5.0.0
     */
    get CoordinateSpan(): typeof CoordinateSpan;
    /**
     * The getter to use to access the coordinate class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/coordinate)
     *
     * @since 5.0.0
     */
    get Coordinate(): typeof Coordinate;
    /**
     * The getter to use to access the the bounding region class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/boundingregion)
     *
     * @since 5.0.0
     */
    get BoundingRegion(): typeof BoundingRegion;
    /**
     * The getter to use to access the map point class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/mappoint)
     *
     * @since 5.0.0
     */
    get MapPoint(): typeof MapPoint;
    /**
     * The getter to use to access the map rect class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/maprect)
     *
     * @since 5.0.0
     */
    get MapRect(): typeof MapRect;
    /**
     * The getter to use to access the map size class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/mapsize)
     *
     * @since 5.0.0
     */
    get MapSize(): typeof MapSize;
    /**
     * The getter to use to access the padding class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/padding)
     *
     * @since 5.0.0
     */
    get Padding(): typeof Padding;
    /**
     * The getter to use to access the camera zoom range class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/camerazoomrange)
     *
     * @since 5.23.0
     */
    get CameraZoomRange(): typeof CameraZoomRange;
    /**
     * The getter to use to access the map feature type enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/mapfeaturetype)
     *
     * @since 5.74.1
     */
    get MapFeatureType(): typeof MapFeatureType;
    /**
     * The getter to use to access the style class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/style)
     *
     * @since 5.0.0
     */
    get Style(): typeof Style;
    /**
     * The getter to use to access the line gradient class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/linegradient)
     *
     * @since 5.45.0
     */
    get LineGradient(): typeof LineGradient;
    /**
     * The getter to use to access the circle overlay class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/circleoverlay)
     *
     * @since 5.0.0
     */
    get CircleOverlay(): typeof CircleOverlay;
    /**
     * The getter to use to access the polyline overlay class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/polylineoverlay)
     *
     * @since 5.0.0
     */
    get PolylineOverlay(): typeof PolylineOverlay;
    /**
     * The getter to use to access the polygon overlay class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/polygonoverlay)
     *
     * @since 5.0.0
     */
    get PolygonOverlay(): typeof PolygonOverlay;
    /**
     * The getter to use to access the geocoder class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/geocoder)
     *
     * @since 5.0.0
     */
    get Geocoder(): typeof Geocoder;
    /**
     * The getter to use to access the search class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/search)
     *
     * @since 5.0.0
     */
    get Search(): typeof Search;
    /**
     * The getter to use to access the place lookup class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/placelookup)
     *
     * @since 5.0.0
     */
    get PlaceLookup(): typeof PlaceLookup;
    /**
     * The getter to use to access the directions class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/directions)
     *
     * @since 5.0.0
     */
    get Directions(): typeof Directions;
    /**
     * The getter to use to access the points of interest search class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/pointsofinterestsearch)
     *
     * @since 5.45.0
     */
    get PointsOfInterestSearch(): typeof PointsOfInterestSearch;
    /**
     * The getter to use to access the map view class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/map)
     *
     * @since 5.0.0
     */
    get Map(): typeof Map;
    /**
     * An array that automatically adds and removes maps as the framework creates and destroys them.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/maps)
     *
     * @since 5.7.0
     */
    get maps(): Map[];
    /**
     * The getter to use to for access the annotation class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/annotation)
     *
     * @since 5.0.0
     */
    get Annotation(): typeof Annotation;
    /**
     * The getter to use to access the place annotation class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/placeannotation)
     *
     * @since 5.78.1
     */
    get PlaceAnnotation(): typeof PlaceAnnotation;

    /**
     * The getter to use to access the image annotation class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/imageannotation)
     *
     * @since 5.0.0
     */
    get ImageAnnotation(): typeof ImageAnnotation;
    /**
     * The getter to use to access the marker annotation class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/markerannotation)
     *
     * @since 5.0.0
     */
    get MarkerAnnotation(): typeof MarkerAnnotation;
    /**
     * The getter to use to access the map feature annotation class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/mapfeatureannotation)
     *
     * @since 5.74.1
     */
    get MapFeatureAnnotation(): typeof MapFeatureAnnotation;
    /**
     * The getter to use to access the tile overlay class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/tileoverlay)
     *
     * @since 5.0.0
     */
    get TileOverlay(): typeof TileOverlay;
    /**
     * The getter to use to access the place class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/place)
     *
     * @since 5.0.0
     */
    get Place(): typeof Place;
    /**
     * The getter to use to access the search autocomplete result class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/searchautocompleteresult)
     *
     * @since 5.0.0
     */
    get SearchAutocompleteResult(): typeof SearchAutocompleteResult;
    /**
     * The getter to use to access the point-of-interest category enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory)
     *
     * @since 5.33.1
     */
    get PointOfInterestCategory(): typeof PointOfInterestCategory;
    /**
     * The getter to use to access the point-of-interest filter class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestfilter)
     *
     * @since 5.33.1
     */
    get PointOfInterestFilter(): typeof PointOfInterestFilter;
    /**
     * A value that includes all point-of-interest categories.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/filterincludingallcategories)
     *
     * @since 5.78.1
     */
    get filterIncludingAllCategories(): PointOfInterestFilter;
    /**
     * A value that excludes all point-of-interest categories.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/filterexcludingallcategories)
     *
     * @since 5.78.1
     */
    get filterExcludingAllCategories(): PointOfInterestFilter;
    /**
     * The getter to use to access the address category enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/addresscategory)
     *
     * @since 5.78.1
     */
    get AddressCategory(): typeof AddressCategory;
    /**
     * The getter to use to access the address filter class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/addressfilter)
     *
     * @since 5.78.1
     */
    get AddressFilter(): typeof AddressFilter;
    /**
     * The getter to use to access the place detail class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/placedetail)
     *
     * @since 5.78.1
     */
    get PlaceDetail(): typeof PlaceDetail;
    /**
     * The getter to use to access the place selection accessory class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/placeselectionaccessory)
     *
     * @since 5.78.1
     */
    get PlaceSelectionAccessory(): typeof PlaceSelectionAccessory;
    /**
     * A list of all place detail objects that are currently active on a page.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/placedetails)
     *
     * @since 5.78.1
     */
    get placeDetails(): PlaceDetail[];
    /**
     * The getter to use to access the look around class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/lookaround)
     *
     * @since 5.79.0
     */
    get LookAround(): typeof LookAround;
    /**
     * The getter to use to access the look around preview class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/lookaroundpreview)
     *
     * @since 5.79.0
     */
    get LookAroundPreview(): typeof LookAroundPreview;
    /**
     * The getter to use to access the look around scene class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/lookaroundscene)
     *
     * @since 5.79.0
     */
    get LookAroundScene(): typeof LookAroundScene;
    /**
     * A list of all the Look Around objects that are currently active on a page.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/lookaroundviews)
     *
     * @since 5.0.0
     */
    get lookAroundViews(): AbstractLookAround[];
}

/**
 * An event that represents a configuration change.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitconfigurationchangeevent)
 *
 * @since 5.0.0
 */
export class MapKitConfigurationChangeEvent extends MapKitEvent {
    /**
     * The status of the configuration change.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitconfigurationchangeevent/status)
     *
     * @since 5.0.0
     */
    readonly status: ConfigurationChangeStatus;
}

/**
 * An event that represents a configuration error.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitconfigurationerrorevent)
 *
 * @since 5.0.0
 */
export class MapKitConfigurationErrorEvent extends MapKitEvent {
    /**
     * The status of the configuration error.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitconfigurationerrorevent/status)
     *
     * @since 5.0.0
     */
    readonly status: ConfigurationErrorStatus;
    /**
     * The message associated with the configuration error.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitconfigurationerrorevent/message)
     *
     * @since 5.0.0
     */
    readonly message?: string;
}

/**
 * A generic MapKit JS event object.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitevent)
 *
 * @since 5.0.0
 */
export class MapKitEvent {
    /**
     * The object that dispatched the event.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitevent/target)
     *
     * @since 5.0.0
     */
    target: MapKitEventTarget | null;
    /**
     * A string that represents the type of the event.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitevent/type)
     *
     * @since 5.0.0
     */
    type: string;
    /**
     * A Boolean value that indicates whether the app canceled the event.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitevent/defaultprevented)
     *
     * @since 5.0.0
     */
    defaultPrevented: boolean;

    /**
     * Stops further propagation of the event.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitevent/stoppropagation)
     *
     * @since 5.0.0
     */
    stopPropagation(): void;
    /**
     * Cancels the event if it's cancelable, without stopping further propagation of the event.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitevent/preventdefault)
     *
     * @since 5.0.0
     */
    preventDefault(): void;
}

/**
 * A type alias that represents a function or an object that receives a MapKit event.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkiteventlistener)
 *
 * @since 5.0.0
 */
export type MapKitEventListener<T extends MapKitEvent = MapKitEvent> =
    | ((event: T) => void)
    | {
        handleEvent(event: T): void;
    };

/**
 * An abstract class that defines the interface for objects that can dispatch events.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkiteventtarget)
 *
 * @since 5.0.0
 */
declare class MapKitEventTarget {
    /**
     * Subscribes a listener function to an event type.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkiteventtarget/addeventlistener)
     *
     * @param eventType the type of the event to listen for
     * @param listener add this
     * @param thisObject the `this` object to call `listener` with
     * @returns `true` if the listener was added, `false` otherwise
     *
     * @since 5.0.0
     */
    addEventListener(
        eventType: string,
        listener: MapKitEventListener,
        thisObject?: object | null,
    ): boolean;
    /**
     * Unsubscribes a listener function from an event type.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkiteventtarget/removeeventlistener)
     *
     * @param eventType the event type to remove the listener from
     * @param listener remove this
     * @param thisObject the `this` object `listener` is called with
     * @returns `true` if it was removed, `false` if it was not
     *
     * @since 5.0.0
     */
    removeEventListener(
        eventType?: string,
        listener?: MapKitEventListener,
        thisObject?: object | null,
    ): boolean;
    /**
     * Dispatches an event to registered listeners.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkiteventtarget/dispatchevent)
     *
     * @param event the event object to dispatch
     * @returns `true` if dispatch completed, `false` if it was prevented
     *
     * @since 5.0.0
     */
    dispatchEvent(event: MapKitEvent): boolean;
}

/**
 * Initialization options for MapKit JS.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitinitializationoptions)
 *
 * @since 5.0.0
 */
export interface MapKitInitializationOptions {
    /**
     * A callback function that obtains a token.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitinitializationoptions/authorizationcallback)
     *
     * @param done A function that completes the MapKit JS token request. Called after creating a new token.
     *
     * @since 5.0.0
     */
    authorizationCallback?: (this: null, done: (token: string) => void) => void;
    /**
     * An ID that indicates the preferred language to use when displaying map labels, controls, directions, and other text.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitinitializationoptions/language)
     *
     * @since 5.0.0
     */
    language?: string | null;

    /**
     * An array of libraries to load at initialization.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitinitializationoptions/libraries)
     *
     * @since 5.75.0
     */
    libraries?: string[];
}

/**
 * An event that occurs when the MapKit JS library is loaded or fails loading.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitlibraryloadevent)
 *
 * @since 5.75.0
 */
export class MapKitLibraryLoadEvent extends MapKitEvent {
    /**
     * The libraries that the framework loaded or failed to load.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitlibraryloadevent/libraries)
     *
     * @since 5.75.0
     */
    readonly libraries: string[];
}

/**
 * An event object that the map view dispatches when someone selects or deselects an overlay.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapoverlayselectionevent)
 *
 * @since 5.0.0
 */
export class MapOverlaySelectionEvent extends MapKitEvent {
    /**
     * The overlay that the framework selected or deselected.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapoverlayselectionevent/overlay)
     *
     * @since 5.0.0
     */
    readonly overlay: Overlay;
}

/**
 * A location, in map units, of a point on the Earth's surface projected onto a 2D map.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mappoint)
 *
 * @since 5.0.0
 */
export class MapPoint {
    /**
     * The location of the map point along the map's x-axis.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mappoint/x)
     *
     * @since 5.0.0
     */
    x: number;
    /**
     * The location of the map point along the map's y-axis.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mappoint/y)
     *
     * @since 5.0.0
     */
    y: number;
    /**
     * The z component of a map point.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mappoint/z)
     *
     * @since 5.0.0
     */
    z: number;
    /**
     * The w component of a map point.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mappoint/w)
     *
     * @since 5.0.0
     */
    w: number;
    /**
     * Creates a map location.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mappoint/mappointconstructor)
     *
     * @param x The point along the east-west axis of the map projection.
     * @param y The point along the north-south axis of the map projection.
     *
     * @since 5.0.0
     */
    constructor(x?: number, y?: number);
    /**
     * Returns a string representation of the map point object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mappoint/tostring)
     *
     * @returns A string representation of the map point object.
     *
     * @since 5.0.0
     */
    toString(): string;
    /**
     * Returns a copy of the location.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mappoint/copy)
     *
     * @returns A MapPoint object that is a copy of the map location.
     *
     * @since 5.0.0
     */
    copy(): MapPoint;
    /**
     * Indicates whether two map points are equal.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mappoint/equals)
     *
     * @param anotherPoint A map location to use for comparison.
     * @returns A Boolean value indicating whether two map points are equal.
     *
     * @since 5.0.0
     */
    equals(anotherPoint: MapPoint): boolean;
    /**
     * Converts a map point into a coordinate with latitude and longitude.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mappoint/tocoordinate)
     *
     * @returns A coordinate that contains the latitude and longitude corresponding to the location.
     *
     * @since 5.0.0
     */
    toCoordinate(): Coordinate;
}

/**
 * A rectangular region, in map units, of a two-dimensional map projection.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect)
 *
 * @since 5.0.0
 */
export class MapRect {
    /**
     * The origin point of a rectangle.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/origin)
     *
     * @since 5.0.0
     */
    origin: MapPoint;
    /**
     * The width and height of a rectangle, starting from the origin point.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/size)
     *
     * @since 5.0.0
     */
    size: MapSize;
    /**
     * Creates an object that represents a rectangular region of the map projection.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/maprectconstructor)
     *
     * @param x The origin point along the east-west axis of the map projection.
     * @param y The origin point along the north-south axis of the map projection.
     * @param width The distance, in map units, along the east-west axis of the map projection.
     * @param height The distance, in map units, along the north-south axis of the map projection.
     *
     * @since 5.0.0
     */
    constructor(x?: number, y?: number, width?: number, height?: number);
    /**
     * Returns a string representation of the map rectangle object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/tostring)
     *
     * @returns A string representation of the map rectangle object.
     *
     * @since 5.0.0
     */
    toString(): string;
    /**
     * Returns a copy of a map rectangle.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/copy)
     *
     * @returns A MapRect object that is a copy of the original.
     *
     * @since 5.0.0
     */
    copy(): MapRect;
    /**
     * Compares whether two map rectangles are equal.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/equals)
     *
     * @param anotherRect The map rectangle to use for comparison.
     * @returns A Boolean value indicating whether two map rectangles are equal.
     *
     * @since 5.0.0
     */
    equals(anotherRect: MapRect): boolean;
    /**
     * Returns the minimum x-axis value of a rectangle.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/minx)
     *
     * @returns The minimum x-axis value.
     *
     * @since 5.0.0
     */
    minX(): number;
    /**
     * Returns the minimum y-axis value of a rectangle.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/miny)
     *
     * @returns The minimum y-axis value.
     *
     * @since 5.0.0
     */
    minY(): number;
    /**
     * Returns the midpoint along the x-axis of a rectangle.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/midx)
     *
     * @returns The midpoint x-axis value.
     *
     * @since 5.0.0
     */
    midX(): number;
    /**
     * Returns the midpoint along the y-axis of a rectangle.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/midy)
     *
     * @returns The midpoint y-axis value.
     *
     * @since 5.0.0
     */
    midY(): number;
    /**
     * Returns the maximum x-axis value of a rectangle.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/maxx)
     *
     * @returns The maximum x-axis value.
     *
     * @since 5.0.0
     */
    maxX(): number;
    /**
     * Returns the maximum y-axis value of a rectangle.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/maxy)
     *
     * @returns The maximum y-axis value.
     *
     * @since 5.0.0
     */
    maxY(): number;
    /**
     * Returns a scaled map rectangle for a map location.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/scale)
     *
     * @param scaleFactor The scale factor.
     * @param scaleCenter The center map point for scaling.
     * @returns A new scaled map rectangle.
     *
     * @since 5.0.0
     */
    scale(scaleFactor: number, scaleCenter?: MapPoint): MapRect;
    /**
     * Returns the region that corresponds to a map rectangle.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/tocoordinateregion)
     *
     * @returns A {@link CoordinateRegion} object that corresponds to a map rectangle.
     *
     * @since 5.0.0
     */
    toCoordinateRegion(): CoordinateRegion;
}

/**
 * Options that determine the map parameters to use when showing items.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapshowitemsoptions)
 *
 * @since 5.0.0
 */
export interface MapShowItemsOptions {
    /**
     * A Boolean value that determines whether the map animates as the map region changes to show the items.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapshowitemsoptions/animate)
     *
     * @since 5.0.0
     */
    animate?: boolean;
    /**
     * Spacing that the framework adds around the computed map region when showing items.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapshowitemsoptions/padding)
     *
     * @since 5.0.0
     */
    padding?: Padding;
    /**
     * The minimum longitudinal and latitudinal span the map displays.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapshowitemsoptions/minimumspan)
     *
     * @since 5.0.0
     */
    minimumSpan?: CoordinateSpan;
    /**
     * The distance from the center of the map to the camera, when showing the items.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapshowitemsoptions/cameradistance)
     *
     * @since 5.23.0
     */
    cameraDistance?: number;
}

/**
 * A pair of values, in map units, that define the width and height of a rectangular area of a map projection.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapsize)
 *
 * @since 5.0.0
 */
export class MapSize {
    /**
     * The width of the map size in map units.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapsize/width)
     *
     * @since 5.0.0
     */
    width: number;
    /**
     * The height of the map size in map units.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapsize/height)
     *
     * @since 5.0.0
     */
    height: number;
    /**
     * Creates an object containing the width and height of a projected coordinate span.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapsize/mapsizeconstructor)
     *
     * @param width The distance in map units along the east-west axis of the map projection.
     * @param height The distance in map units along the north-south axis of the map projection.
     *
     * @since 5.0.0
     */
    constructor(width?: number, height?: number);
    /**
     * Returns a string representation of the map size object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapsize/tostring)
     *
     * @returns A string representation of the map size object.
     *
     * @since 5.0.0
     */
    toString(): string;
    /**
     * Returns a copy of the map size object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapsize/copy)
     *
     * @returns A MapSize object that is a copy of the original.
     *
     * @since 5.0.0
     */
    copy(): MapSize;
    /**
     * Compares the sizes of two maps and indicates whether they're of equal value.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapsize/equals)
     *
     * @param anotherSize The map size to use for comparison.
     * @returns A Boolean value indicating whether the sizes of two maps are equal.
     *
     * @since 5.0.0
     */
    equals(anotherSize: MapSize): boolean;
}

/**
 * Constants representing the type of map to display.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maptype)
 *
 * @since 5.0.0
 */
declare const MapType: Readonly<{
    /**
     * A satellite image of the area.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maptype/satellite)
     *
     * @since 5.0.0
     */
    readonly Satellite: "satellite";
    /**
     * A satellite image of the area with road and road name layers on top.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maptype/hybrid)
     *
     * @since 5.0.0
     */
    readonly Hybrid: "hybrid";
    /**
     * A street map that emphasizes your data over the underlying map details.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maptype/mutedstandard)
     *
     * @since 5.13.0
     */
    readonly MutedStandard: "mutedStandard";
    /**
     * A street map that shows the position of all roads and some road names.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maptype/standard)
     *
     * @since 5.0.0
     */
    readonly Standard: "standard";
}>;

type MapType = (typeof MapType)[keyof typeof MapType];

/**
 * An event that represents a change in a person's location.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapuserlocationchangeevent)
 *
 * @since 5.0.0
 */
export class MapUserLocationChangeEvent extends MapKitEvent {
    /**
     * The coordinate of a person's location.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapuserlocationchangeevent/coordinate)
     *
     * @since 5.0.0
     */
    readonly coordinate: Coordinate;
    /**
     * The timestamp that contains the time corresponding to the location acquisition.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapuserlocationchangeevent/timestamp)
     *
     * @since 5.0.0
     */
    readonly timestamp: Date;
    /**
     * The current floor the user is on.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapuserlocationchangeevent/floorlevel)
     *
     * @since 5.0.0
     */
    readonly floorLevel?: number;
}

/**
 * An event that indicates that MapKit JS is unable to acquire a person's location.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapuserlocationerrorevent)
 *
 * @since 5.0.0
 */
export class MapUserLocationErrorEvent extends MapKitEvent {
    /**
     * The code indicating why location acquisition failed.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapuserlocationerrorevent/code)
     *
     * @since 5.0.0
     */
    readonly code: number;
    /**
     * The human-readable error message of the user location error for the developer.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapuserlocationerrorevent/message)
     *
     * @since 5.0.0
     */
    readonly message: string;
}

/**
 * An annotation that displays a balloon-shaped marker at the designated location.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation)
 *
 * @since 5.0.0
 */
export class MarkerAnnotation extends Annotation {
    /**
     * Creates a marker annotation at the coordinate location with provided options.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/markerannotationconstructor)
     *
     * @param location The coordinate where the annotation appears.
     * @param options A hash of properties to create the annotation with.
     *
     * @since 5.0.0
     */
    constructor(
        location: Coordinate | Place | SearchAutocompleteResult,
        options?: MarkerAnnotationConstructorOptions,
    );
    /**
     * The dimensions of the annotation, in CSS pixels.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/size)
     *
     * @since 5.0.0
     */
    get size(): Size;
    set size(_: Size);
    /**
     * The background color of the balloon.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/color)
     *
     * @since 5.0.0
     */
    get color(): string;
    set color(value: string);
    /**
     * The fill color of the glyph.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/glyphcolor)
     *
     * @since 5.0.0
     */
    get glyphColor(): string;
    set glyphColor(value: string);
    /**
     * The image to display in the marker balloon.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/glyphimage)
     *
     * @since 5.0.0
     */
    get glyphImage(): ImageDelegate | ImageHashObject | null;
    set glyphImage(value: ImageDelegate | ImageHashObject | null);
    /**
     * The image to display in the marker balloon when the user selects the marker.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/selectedglyphimage)
     *
     * @since 5.0.0
     */
    get selectedGlyphImage(): ImageDelegate | ImageHashObject | null;
    set selectedGlyphImage(value: ImageDelegate | ImageHashObject | null);
    /**
     * The text to display in the marker balloon.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/glyphtext)
     *
     * @since 5.0.0
     */
    get glyphText(): string;
    set glyphText(value: string);
    /**
     * A value that determines the behavior of the title's visibility.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/titlevisibility)
     *
     * @since 5.0.0
     */
    get titleVisibility(): FeatureVisibility;
    set titleVisibility(value: FeatureVisibility);
    /**
     * A value that determines the behavior of the subtitle's visibility.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/subtitlevisibility)
     *
     * @since 5.0.0
     */
    get subtitleVisibility(): FeatureVisibility;
    set subtitleVisibility(value: FeatureVisibility);
}

/**
 * An object containing the options that create a marker annotation.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotationconstructoroptions)
 *
 * @since 5.0.0
 */
export interface MarkerAnnotationConstructorOptions extends AnnotationConstructorOptions {
    /**
     * The background color of the balloon.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotationconstructoroptions/color)
     *
     * @since 5.0.0
     */
    color?: string;
    /**
     * The fill color of the glyph.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotationconstructoroptions/glyphcolor)
     *
     * @since 5.0.0
     */
    glyphColor?: string;
    /**
     * The image to display in the marker balloon.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotationconstructoroptions/glyphimage)
     *
     * @since 5.0.0
     */
    glyphImage?: ImageDelegate | ImageHashObject | null;
    /**
     * The image to display in the balloon when the user selects the marker.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotationconstructoroptions/selectedglyphimage)
     *
     * @since 5.0.0
     */
    selectedGlyphImage?: ImageDelegate | ImageHashObject | null;
    /**
     * The text to display in the marker balloon.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotationconstructoroptions/glyphtext)
     *
     * @since 5.0.0
     */
    glyphText?: string;
    /**
     * A value that determines the behavior of the title's visibility.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotationconstructoroptions/titlevisibility)
     *
     * @since 5.0.0
     */
    titleVisibility?: FeatureVisibility;
    /**
     * A value that determines the behavior of the subtitle's visibility.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotationconstructoroptions/subtitlevisibility)
     *
     * @since 5.0.0
     */
    subtitleVisibility?: FeatureVisibility;
}

/**
 * An abstract base object that defines the methods and properties for map overlays.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlay)
 *
 * @since 5.0.0
 */
export abstract class Overlay extends MapKitEventTarget {
    /**
     * Style properties to apply to the overlay.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlay/style)
     *
     * @since 5.0.0
     */
    get style(): Style;
    set style(style: Style);

    /**
     * The map you add the overlay to.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlay/map)
     *
     * @since 5.0.0
     */
    get map(): Map | null;
    set map(_: Map | null);
    /**
     * Custom data to associate with the overlay.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlay/data)
     *
     * @since 5.0.0
     */
    get data(): {};
    set data(data: {});
    /**
     * A Boolean value that determines whether an overlay is visible.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlay/visible)
     *
     * @since 5.0.0
     */
    get visible(): boolean;
    set visible(visible: boolean);
    /**
     * A Boolean value that determines whether the overlay responds to user interaction.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlay/enabled)
     *
     * @since 5.0.0
     */
    get enabled(): boolean;
    set enabled(value: boolean);
    /**
     * A Boolean value that indicates whether the user selects the overlay.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlay/selected)
     *
     * @since 5.0.0
     */
    get selected(): boolean;
    set selected(value: boolean);
}

/**
 * A dictionary of options that determines an overlay's data, and indicates whether it's visible, in an enabled state, and in a selected state.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlayoptions)
 *
 * @since 5.0.0
 */
export interface OverlayOptions {
    /**
     * A Boolean value that determines if an overlay is visible.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlayoptions/visible)
     *
     * @since 5.0.0
     */
    visible?: boolean;
    /**
     * A Boolean value that determines whether the overlay responds to user interaction.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlayoptions/enabled)
     *
     * @since 5.0.0
     */
    enabled?: boolean;
    /**
     * A Boolean value that indicates whether the overlay is in a selected state.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlayoptions/selected)
     *
     * @since 5.0.0
     */
    selected?: boolean;
    /**
     * Custom data to associate with the overlay.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlayoptions/data)
     *
     * @since 5.0.0
     */
    data?: object;
    /**
     * An object literal of style properties.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlayoptions/style)
     *
     * @since 5.0.0
     */
    style?: Style;
}

/**
 * The values that define content padding within the map view frame.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding)
 *
 * @since 5.0.0
 */
export class Padding {
    /**
     * The amount of padding, in CSS pixels, to inset the map from the top edge.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/top)
     *
     * @since 5.0.0
     */
    top: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the right edge.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/right)
     *
     * @since 5.0.0
     */
    right: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the bottom edge.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/bottom)
     *
     * @since 5.0.0
     */
    bottom: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the left edge.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/left)
     *
     * @since 5.0.0
     */
    left: number;
    /**
     * Creates a padding object with no inset margins.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/paddingconstructor)
     *
     * @since 5.0.0
     */
    constructor();
    /**
     * Creates a padding object and initializes its values with the provided object literal.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/paddingconstructor1)
     *
     * @param paddings An object literal with the keys defined in {@link PaddingConstructorOptions}, or a list of four numbers that represent inset margin values. The numbers represent the top, right, bottom, and left insets, respectively.
     *
     * @since 5.0.0
     */
    constructor(paddings: PaddingConstructorOptions);
    /**
     * Creates a padding object and initializes its top inset margin with the provided value.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/paddingconstructor2)
     *
     * @param top The top inset margin.
     *
     * @since 5.0.0
     */
    constructor(top: number);
    /**
     * Creates a padding object and initializes it with the provided top and right side values.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/paddingconstructor3)
     *
     * @param top The top inset margin.
     * @param right The right inset margin.
     *
     * @since 5.0.0
     */
    constructor(top: number, right: number);
    /**
     * Creates a padding object and initializes it with the provided top, right, and bottom values.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/paddingconstructor4)
     *
     * @param top The top inset margin.
     * @param right The right inset margin.
     * @param bottom The bottom inset margin.
     *
     * @since 5.0.0
     */
    constructor(top: number, right: number, bottom: number);
    /**
     * Creates a padding object and initializes it with the provided values.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/paddingconstructor5)
     *
     * @param top The top inset margin.
     * @param right The right inset margin.
     * @param bottom The bottom inset margin.
     * @param left The left inset margin.
     *
     * @since 5.0.0
     */
    constructor(top: number, right: number, bottom: number, left: number);
    /**
     * An object that represents zero padding values.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/zero)
     *
     * @since 5.0.0
     */
    static readonly Zero: Padding;
    /**
     * Returns a string representation of the padding object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/tostring)
     *
     * @example
     * Padding(5, 10, 0, 25)
     *
     * @returns A string representation of the padding object.
     *
     * @since 5.0.0
     */
    toString(): string;
    /**
     * Returns a copy of the padding object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/copy)
     *
     * @returns A copy of the padding object.
     *
     * @since 5.0.0
     */
    copy(): Padding;
    /**
     * Compares whether two padding values are equal.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/equals)
     *
     * @param anotherPadding The padding to compare.
     * @returns A Boolean value indicating whether the padding values are equal.
     *
     * @since 5.0.0
     */
    equals(anotherPadding: Padding): boolean;
}

/**
 * Initial values of the edge insets for padding.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/paddingconstructoroptions)
 *
 * @since 5.0.0
 */
export interface PaddingConstructorOptions {
    /**
     * The amount of padding, in CSS pixels, to inset the map from the top edge.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/paddingconstructoroptions/top)
     *
     * @since 5.0.0
     */
    top: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the right edge.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/paddingconstructoroptions/right)
     *
     * @since 5.0.0
     */
    right: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the bottom edge.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/paddingconstructoroptions/bottom)
     *
     * @since 5.0.0
     */
    bottom: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the left edge.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/paddingconstructoroptions/left)
     *
     * @since 5.0.0
     */
    left: number;
}

/**
 * A place object that returns from a geocoder lookup, a reverse lookup, or a fetch request for points of interest.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place)
 *
 * @since 5.0.0
 */
export class Place {
    #private;
    /**
     * The Place ID referencing a feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/id)
     *
     * @since 5.0.0
     */
    id?: string;
    /**
     * A list of alternate Place IDs referencing a feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/alternateids)
     *
     * @since 5.78.1
     */
    alternateIds?: string[];

    /**
     * The category of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/pointofinterestcategory)
     *
     * @since 5.33.1
     */
    pointOfInterestCategory?: string;
    /**
     * The name of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/name)
     *
     * @since 5.0.0
     */
    name?: string;

    /**
     * The geographic region associated with the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/region)
     *
     * @since 5.23.0
     */
    region?: CoordinateRegion;
    /**
     * The latitude and longitude for the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/coordinate)
     *
     * @since 5.0.0
     */
    coordinate?: Coordinate;
    /**
     * The address of the place, formatted using its conventions of its country or region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/formattedaddress)
     *
     * @since 5.0.0
     */
    formattedAddress?: string;
    /**
     * The country or region associated with the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/countrycode)
     *
     * @since 5.0.0
     */
    countryCode?: string;

    /**
     * The country or region of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/country)
     *
     * @since 5.78.1
     */
    country?: string;
    /**
     * The state or province of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/administrativearea)
     *
     * @since 5.78.1
     */
    administrativeArea?: string;
    /**
     * The short code for the state or area.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/administrativeareacode)
     *
     * @since 5.41.1
     */
    administrativeAreaCode?: string;
    /**
     * The city of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/locality)
     *
     * @since 5.78.1
     */
    locality?: string;
    /**
     * The postal code of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/postcode)
     *
     * @since 5.41.1
     */
    postCode?: string;
    /**
     * The name of the area within the locality.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/sublocality)
     *
     * @since 5.78.1
     */
    subLocality?: string;
    /**
     * The street name at the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/thoroughfare)
     *
     * @since 5.41.1
     */
    thoroughfare?: string;
    /**
     * The number on the street at the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/subthoroughfare)
     *
     * @since 5.41.1
     */
    subThoroughfare?: string;
    /**
     * A combination of thoroughfare and subthoroughfare.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/fullthoroughfare)
     *
     * @since 5.41.1
     */
    fullThoroughfare?: string;
    /**
     * Common names of the area in which the place resides.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/areasofinterest)
     *
     * @since 5.41.1
     */
    areasOfInterest?: string[];
    /**
     * Common names for the local area or neighborhood of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/dependentlocalities)
     *
     * @since 5.41.1
     */
    dependentLocalities?: string[];
}

/**
 * An annotation for a place.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation)
 *
 * @since 5.78.1
 */
export class PlaceAnnotation extends MarkerAnnotation {
    /**
     * Creates a new place annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/placeannotationconstructor)
     *
     * @param coordinate The coordinate or place (containing the coordinate) at which this annotation should appear.
     * @param options The same options as MarkerAnnotation.
     *
     * @since 5.78.1
     */
    constructor(
        coordinate: Coordinate | Place | SearchAutocompleteResult,
        options?: MarkerAnnotationConstructorOptions,
    );
    /**
     * The annotation's element in the DOM.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/element)
     *
     * @since 5.78.1
     */
    get element(): HTMLElement;
    /**
     * The annotation's coordinate.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/coordinate)
     *
     * @since 5.78.1
     */
    get coordinate(): Coordinate;
    /**
     * A Boolean value that indicates whether the place annotation is draggable.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/draggable)
     *
     * @since 5.78.1
     */
    get draggable(): boolean;
    /**
     * A CSS animation that runs when the annotation appears on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/appearanceanimation)
     *
     * @since 5.78.1
     */
    get appearanceAnimation(): string;
    /**
     * An offset that changes the annotation's default anchor point.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/anchoroffset)
     *
     * @since 5.78.1
     */
    get anchorOffset(): DOMPoint;
    /**
     * The amount of spacing to add around the annotation when showing items.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/padding)
     *
     * @since 5.78.1
     */
    get padding(): Padding;
    /**
     * The dimensions of the annotation, in CSS pixels.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/size)
     *
     * @since 5.78.1
     */
    get size(): Size;
    /**
     * The glyph text for the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/glyphtext)
     *
     * @since 5.78.1
     */
    get glyphText(): string;
    /**
     * The color of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/color)
     *
     * @since 5.74.0
     */
    get color(): string;
    /**
     * The selected glyph color for the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/glyphcolor)
     *
     * @since 5.78.1
     */
    get glyphColor(): string;
    /**
     * The glyph image for the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/glyphimage)
     *
     * @since 5.74.0
     */
    get glyphImage(): MapFeatureAnnotationGlyphImage | null;
    /**
     * The selected glyph image for the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/selectedglyphimage)
     *
     * @since 5.74.0
     */
    get selectedGlyphImage(): MapFeatureAnnotationGlyphImage | null;
}

/**
 * An interactive view that displays information about a place.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placedetail)
 *
 * @since 5.78.1
 */
export class PlaceDetail {
    #private;
    /**
     * A representation of a place detail.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placedetail/placedetailconstructor)
     *
     * @param parent The DOM element to attach the place detail to.
     * @param place The place to display details for.
     * @param options Options for configuring the place detail view.
     *
     * @since 5.78.1
     */
    constructor(
        parent: HTMLElement,
        place?: Place | null,
        options?: PlaceDetailOptions,
    );
    /**
     * The place detail's DOM element.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placedetail/element)
     *
     * @since 5.78.1
     */
    get element(): HTMLElement;
    /**
     * The place that the place detail displays.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placedetail/place)
     *
     * @since 5.78.1
     */
    get place(): Place | null;
    set place(value: Place | null);
    /**
     * The color scheme when displaying a place detail.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placedetail/colorscheme)
     *
     * @since 5.78.1
     */
    get colorScheme(): ColorScheme;
    set colorScheme(colorScheme: ColorScheme);
    /**
     * A Boolean value that indicates whether to display the map in the place detail.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placedetail/displaysmap)
     *
     * @since 5.78.1
     */
    get displaysMap(): boolean;
    set displaysMap(displaysMap: boolean);
    /**
     * Terminates a place detail.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placedetail/destroy)
     *
     * @since 5.78.1
     */
    destroy(): void;
    /**
     * A static property that allows you to access the Look Around color scheme enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placedetail/colorschemes)
     *
     * @since 5.78.1
     */
    static ColorSchemes: typeof ColorScheme;
}

/**
 * Options that you may provide when constructing place detail views.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placedetailoptions)
 *
 * @since 5.78.1
 */
export interface PlaceDetailOptions {
    /**
     * The color scheme to use when displaying a place detail view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placedetailoptions/colorscheme)
     *
     * @since 5.78.1
     */
    colorScheme?: ColorScheme;
    /**
     * A Boolean value that indicates whether to display the map in the place detail view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placedetailoptions/displaysmap)
     *
     * @since 5.78.1
     */
    displaysMap?: boolean;
}

/**
 * An object that provides the ability to look up place information for a specified Place ID.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placelookup)
 *
 * @since 5.78.1
 */
export class PlaceLookup extends Service {
    /**
     * Creates a place lookup with a set of options.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placelookup/placelookupconstructor)
     *
     * @param options An object containing the options for creating a place lookup object. This parameter is optional.
     *
     * @since 5.78.1
     */
    constructor(options?: ServiceConstructorOptions);
    /**
     * Obtains a place using its identifier.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placelookup/getplace)
     *
     * @param id The Place ID referring to the Place object to fetch.
     * @param callback A callback function that is invoked with error and data parameters.
     * @param options Options that can overwrite the same options set on the property or supplied to the PlaceLookup constructor.
     * @returns The identifier of the request that was made.
     *
     * @since 5.78.1
     */
    getPlace(
        id: string,
        callback: (error: Error | null, result?: Place) => void,
        options?: ServiceConstructorOptions,
    ): number;
}

/**
 * The accessory that conveys information about a place associated with an annotation.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessory)
 *
 * @since 5.78.1
 */
export class PlaceSelectionAccessory {
    /**
     * A static property that allows you to access the place selection accessory style enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessory/styles)
     *
     * @since 5.78.1
     */
    static Styles: typeof PlaceSelectionAccessoryStyle;

    /**
     * Creates a new place selection accessory.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessory/placeselectionaccessoryconstructor)
     *
     * @param options Options for creating the place selection accessory.
     * @param options.style The visual appearance style for the accessory.
     *
     * @since 5.78.1
     */
    constructor({ style }?: PlaceSelectionAccessoryOptions);
    /**
     * The visual appearance of the place selection accessory.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessory/style)
     *
     * @since 5.78.1
     */
    get style(): PlaceSelectionAccessoryStyle;
    set style(value: PlaceSelectionAccessoryStyle);
}

/**
 * The options for selection accessories.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessoryoptions)
 *
 * @since 5.78.1
 */
export interface PlaceSelectionAccessoryOptions {
    /**
     * The visual presentation for the selection accessory.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessoryoptions/style)
     *
     * @since 5.78.1
     */
    style?: PlaceSelectionAccessoryStyle;
}

/**
 * The set of styles for configuring how a place selection accessory appears.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessorystyle)
 *
 * @since 5.78.1
 */
declare const PlaceSelectionAccessoryStyle: Readonly<{
    /**
     * A style that MapKit automatically chooses based on the size of the map view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessorystyle/automatic)
     *
     * @since 5.78.1
     */
    readonly Automatic: "automatic";
    /**
     * A style that selects between a full and compact presentation based on the map's size.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessorystyle/callout)
     *
     * @since 5.78.1
     */
    readonly Callout: "callout";
    /**
     * A style that displays a rich, detailed presentation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessorystyle/fullcallout)
     *
     * @since 5.78.1
     */
    readonly FullCallout: "fullCallout";
    /**
     * A style that displays a compact, space-saving presentation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessorystyle/compactcallout)
     *
     * @since 5.78.1
     */
    readonly CompactCallout: "compactCallout";
    /**
     * A style that displays a caption to open in Maps.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessorystyle/openinmaps)
     *
     * @since 5.78.1
     */
    readonly OpenInMaps: "openInMaps";
}>;

type PlaceSelectionAccessoryStyle = (typeof PlaceSelectionAccessoryStyle)[keyof typeof PlaceSelectionAccessoryStyle];

/**
 * Point-of-interest categories.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory)
 *
 * @since 5.33.1
 */
export const PointOfInterestCategory: Readonly<{
    /**
     * The point-of-interest category for airports.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/airport)
     *
     * @since 5.33.1
     */
    readonly Airport: "Airport";
    /**
     * The point-of-interest category for amusement parks.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/amusementpark)
     *
     * @since 5.33.1
     */
    readonly AmusementPark: "AmusementPark";
    /**
     * The point-of-interest category for animal services.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/animalservice)
     *
     * @since 5.78.112
     */
    readonly AnimalService: "AnimalService";
    /**
     * The point-of-interest category for aquariums.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/aquarium)
     *
     * @since 5.33.1
     */
    readonly Aquarium: "Aquarium";
    /**
     * The point-of-interest category for ATMs.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/atm)
     *
     * @since 5.78.112
     */
    readonly ATM: "ATM";
    /**
     * The point-of-interest category for automotive repair services.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/automotiverepair)
     *
     * @since 5.78.112
     */
    readonly AutomotiveRepair: "AutomotiveRepair";
    /**
     * The point-of-interest category for bakeries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/bakery)
     *
     * @since 5.33.1
     */
    readonly Bakery: "Bakery";
    /**
     * The point-of-interest category for banks.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/bank)
     *
     * @since 5.33.1
     */
    readonly Bank: "Bank";
    /**
     * The point-of-interest category for baseball parks.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/baseball)
     *
     * @since 5.78.112
     */
    readonly Baseball: "Baseball";
    /**
     * The point-of-interest category for basketball courts.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/basketball)
     *
     * @since 5.78.112
     */
    readonly Basketball: "Basketball";
    /**
     * The point-of-interest category for beaches.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/beach)
     *
     * @since 5.33.1
     */
    readonly Beach: "Beach";
    /**
     * The point-of-interest category for beauty services.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/beauty)
     *
     * @since 5.78.112
     */
    readonly Beauty: "Beauty";
    /**
     * The point-of-interest category for bowling lanes.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/bowling)
     *
     * @since 5.78.112
     */
    readonly Bowling: "Bowling";
    /**
     * The point-of-interest category for breweries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/brewery)
     *
     * @since 5.33.1
     */
    readonly Brewery: "Brewery";
    /**
     * The point-of-interest category for cafes.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/cafe)
     *
     * @since 5.33.1
     */
    readonly Cafe: "Cafe";
    /**
     * The point-of-interest category for campgrounds.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/campground)
     *
     * @since 5.33.1
     */
    readonly Campground: "Campground";
    /**
     * The point-of-interest category for car rentals.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/carrental)
     *
     * @since 5.33.1
     */
    readonly CarRental: "CarRental";
    /**
     * The point-of-interest category for castles.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/castle)
     *
     * @since 5.78.112
     */
    readonly Castle: "Castle";
    /**
     * The point-of-interest category for convention centers.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/conventioncenter)
     *
     * @since 5.78.112
     */
    readonly ConventionCenter: "ConventionCenter";
    /**
     * The point-of-interest category for distilleries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/distillery)
     *
     * @since 5.78.112
     */
    readonly Distillery: "Distillery";
    /**
     * The point-of-interest category for EV chargers.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/evcharger)
     *
     * @since 5.33.1
     */
    readonly EVCharger: "EVCharger";
    /**
     * The point-of-interest category for fairgrounds.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/fairground)
     *
     * @since 5.78.112
     */
    readonly Fairground: "Fairground";
    /**
     * The point-of-interest category for fire stations.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/firestation)
     *
     * @since 5.33.1
     */
    readonly FireStation: "FireStation";
    /**
     * The point-of-interest category for fishing locations.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/fishing)
     *
     * @since 5.78.112
     */
    readonly Fishing: "Fishing";
    /**
     * The point-of-interest category for fitness centers.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/fitnesscenter)
     *
     * @since 5.33.1
     */
    readonly FitnessCenter: "FitnessCenter";
    /**
     * The point-of-interest category for food markets, supermarkets, grocery stores, and convenience stores.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/foodmarket)
     *
     * @since 5.33.1
     */
    readonly FoodMarket: "FoodMarket";
    /**
     * The point-of-interest category for fortresses.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/fortress)
     *
     * @since 5.78.112
     */
    readonly Fortress: "Fortress";
    /**
     * The point-of-interest category for gas stations.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/gasstation)
     *
     * @since 5.33.1
     */
    readonly GasStation: "GasStation";
    /**
     * The point-of-interest category for go-kart services.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/gokart)
     *
     * @since 5.78.112
     */
    readonly GoKart: "GoKart";
    /**
     * The point-of-interest category for golf courses.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/golf)
     *
     * @since 5.78.112
     */
    readonly Golf: "Golf";
    /**
     * The point-of-interest category for hiking areas.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/hiking)
     *
     * @since 5.78.112
     */
    readonly Hiking: "Hiking";
    /**
     * The point-of-interest category for hospitals.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/hospital)
     *
     * @since 5.33.1
     */
    readonly Hospital: "Hospital";
    /**
     * The point-of-interest category for hotels.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/hotel)
     *
     * @since 5.33.1
     */
    readonly Hotel: "Hotel";
    /**
     * The point-of-interest category for kayaking locations.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/kayaking)
     *
     * @since 5.78.112
     */
    readonly Kayaking: "Kayaking";
    /**
     * The point-of-interest category for landmarks.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/landmark)
     *
     * @since 5.78.112
     */
    readonly Landmark: "Landmark";
    /**
     * The point-of-interest category for laundries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/laundry)
     *
     * @since 5.33.1
     */
    readonly Laundry: "Laundry";
    /**
     * The point-of-interest category for libraries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/library)
     *
     * @since 5.33.1
     */
    readonly Library: "Library";
    /**
     * The point-of-interest category for mailboxes.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/mailbox)
     *
     * @since 5.78.112
     */
    readonly Mailbox: "Mailbox";
    /**
     * The point-of-interest category for marinas.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/marina)
     *
     * @since 5.33.1
     */
    readonly Marina: "Marina";
    /**
     * The point-of-interest category for mini golf courses.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/minigolf)
     *
     * @since 5.78.112
     */
    readonly MiniGolf: "MiniGolf";
    /**
     * The point-of-interest category for movie theaters.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/movietheater)
     *
     * @since 5.33.1
     */
    readonly MovieTheater: "MovieTheater";
    /**
     * The point-of-interest category for museums.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/museum)
     *
     * @since 5.33.1
     */
    readonly Museum: "Museum";
    /**
     * The point-of-interest category for music venues.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/musicvenue)
     *
     * @since 5.78.112
     */
    readonly MusicVenue: "MusicVenue";
    /**
     * The point-of-interest category for national monuments.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/nationalmonument)
     *
     * @since 5.78.112
     */
    readonly NationalMonument: "NationalMonument";
    /**
     * The point-of-interest category for national parks.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/nationalpark)
     *
     * @since 5.33.1
     */
    readonly NationalPark: "NationalPark";
    /**
     * The point-of-interest category for nightlife.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/nightlife)
     *
     * @since 5.33.1
     */
    readonly Nightlife: "Nightlife";
    /**
     * The point-of-interest category for parks.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/park)
     *
     * @since 5.33.1
     */
    readonly Park: "Park";
    /**
     * The point-of-interest category for parking locations.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/parking)
     *
     * @since 5.33.1
     */
    readonly Parking: "Parking";
    /**
     * The point-of-interest category for pharmacies.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/pharmacy)
     *
     * @since 5.33.1
     */
    readonly Pharmacy: "Pharmacy";
    /**
     * The point-of-interest category for planetariums.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/planetarium)
     *
     * @since 5.78.112
     */
    readonly Planetarium: "Planetarium";
    /**
     * The point-of-interest category for police.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/police)
     *
     * @since 5.33.1
     */
    readonly Police: "Police";
    /**
     * The point-of-interest category for post offices.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/postoffice)
     *
     * @since 5.33.1
     */
    readonly PostOffice: "PostOffice";
    /**
     * The point-of-interest category for locations of public transportation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/publictransport)
     *
     * @since 5.33.1
     */
    readonly PublicTransport: "PublicTransport";
    /**
     * The point-of-interest category for restaurants.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/restaurant)
     *
     * @since 5.33.1
     */
    readonly Restaurant: "Restaurant";
    /**
     * The point-of-interest category for restrooms.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/restroom)
     *
     * @since 5.33.1
     */
    readonly Restroom: "Restroom";
    /**
     * The point-of-interest category for rock-climbing facilities.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/rockclimbing)
     *
     * @since 5.78.112
     */
    readonly RockClimbing: "RockClimbing";
    /**
     * The point-of-interest category for recreational vehicle (RV) parks.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/rvpark)
     *
     * @since 5.78.112
     */
    readonly RVPark: "RVPark";
    /**
     * The point-of-interest category for schools.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/school)
     *
     * @since 5.33.1
     */
    readonly School: "School";
    /**
     * The point-of-interest category for skate parks.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/skatepark)
     *
     * @since 5.78.112
     */
    readonly SkatePark: "SkatePark";
    /**
     * The point-of-interest category for skating facilities.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/skating)
     *
     * @since 5.78.112
     */
    readonly Skating: "Skating";
    /**
     * The point-of-interest category for skiing facilities.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/skiing)
     *
     * @since 5.78.112
     */
    readonly Skiing: "Skiing";
    /**
     * The point-of-interest category for soccer fields.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/soccer)
     *
     * @since 5.78.112
     */
    readonly Soccer: "Soccer";
    /**
     * The point-of-interest category for spas.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/spa)
     *
     * @since 5.78.112
     */
    readonly Spa: "Spa";
    /**
     * The point-of-interest category for stadiums.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/stadium)
     *
     * @since 5.33.1
     */
    readonly Stadium: "Stadium";
    /**
     * The point-of-interest category for stores.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/store)
     *
     * @since 5.33.1
     */
    readonly Store: "Store";
    /**
     * The point-of-interest category for surfing locations.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/surfing)
     *
     * @since 5.78.112
     */
    readonly Surfing: "Surfing";
    /**
     * The point-of-interest category for swimming facilities.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/swimming)
     *
     * @since 5.78.112
     */
    readonly Swimming: "Swimming";
    /**
     * The point-of-interest category for tennis facilities.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/tennis)
     *
     * @since 5.78.112
     */
    readonly Tennis: "Tennis";
    /**
     * The point-of-interest category for theaters.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/theater)
     *
     * @since 5.33.1
     */
    readonly Theater: "Theater";
    /**
     * The point-of-interest category for universities.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/university)
     *
     * @since 5.33.1
     */
    readonly University: "University";
    /**
     * The point-of-interest category for volleyball courts.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/volleyball)
     *
     * @since 5.78.112
     */
    readonly Volleyball: "Volleyball";
    /**
     * The point-of-interest category for wineries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/winery)
     *
     * @since 5.33.1
     */
    readonly Winery: "Winery";
    /**
     * The point-of-interest category for zoos.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/zoo)
     *
     * @since 5.33.1
     */
    readonly Zoo: "Zoo";
}>;

export type PointOfInterestCategory = (typeof PointOfInterestCategory)[keyof typeof PointOfInterestCategory];

/**
 * A filter for determining the points of interest to include or exclude on a map or in a local search.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestfilter)
 *
 * @since 5.33.1
 */
export class PointOfInterestFilter {
    /**
     * Returns a Boolean value that indicates whether the filter includes the provided point-of-interest category.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestfilter/includescategory)
     *
     * @param category The point-of-interest category to test.
     * @returns `true` if the filter includes the category, `false` if it excludes the category, or `undefined` if the category is neither included nor excluded.
     *
     * @since 5.33.1
     */
    includesCategory(category: PointOfInterestCategory): boolean | undefined;
    /**
     * Returns a Boolean value that indicates whether the filter excludes the provided point-of-interest category.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestfilter/excludescategory)
     *
     * @param category The point-of-interest category to test.
     * @returns `true` if the filter excludes the category, `false` if it includes the category, or `undefined` if the category is neither included nor excluded.
     *
     * @since 5.33.1
     */
    excludesCategory(category: PointOfInterestCategory): boolean | undefined;
    /**
     * A filter that excludes all point-of-interest categories.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestfilter/excludingallcategories)
     *
     * @since 5.33.1
     */
    static excludingAllCategories: () => PointOfInterestFilter;
    /**
     * A filter that includes all point-of-interest categories.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestfilter/includingallcategories)
     *
     * @since 5.33.1
     */
    static includingAllCategories: () => PointOfInterestFilter;
    /**
     * Creates a point-of-interest filter that includes categories from a list that you provide.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestfilter/including)
     *
     * @param categories An array of point-of-interest categories to include in the filter.
     * @returns A point-of-interest filter that includes only the specified categories.
     *
     * @since 5.33.1
     */
    static including(
        categories: PointOfInterestCategory[],
    ): PointOfInterestFilter;
    /**
     * Creates a point-of-interest filter that excludes categories from a list that you provide.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestfilter/excluding)
     *
     * @param categories An array of point-of-interest categories to exclude from the filter.
     * @returns A point-of-interest filter that excludes the specified categories.
     *
     * @since 5.33.1
     */
    static excluding(
        categories: PointOfInterestCategory[],
    ): PointOfInterestFilter;
}

/**
 * An object that fetches points of interest within a specified region.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearch)
 *
 * @since 5.45.0
 */
export class PointsOfInterestSearch extends Service {
    /**
     * Creates a search object for fetching points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearch/pointsofinterestsearchconstructor)
     *
     * @param options An object containing the options for creating a points of interest search object. This parameter is optional.
     *
     * @since 5.45.0
     */
    constructor(options?: PointsOfInterestSearchConstructorOptions);
    /**
     * The center point of the request represented as latitude and longitude.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearch/center)
     *
     * @since 5.45.0
     */
    get center(): Coordinate | null;
    set center(value: Coordinate | null);
    /**
     * The distance provided in meters, or the longest distance derived from the center point to the region's bounding box.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearch/radius)
     *
     * @since 5.45.0
     */
    get radius(): number | null;
    set radius(value: number | null);
    /**
     * The region that bounds the area in which to fetch points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearch/region)
     *
     * @since 5.45.0
     */
    get region(): CoordinateRegion | null;
    set region(value: CoordinateRegion | null);
    /**
     * A filter that lists points of interest categories to include or exclude.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearch/pointofinterestfilter)
     *
     * @since 5.45.0
     */
    get pointOfInterestFilter(): PointOfInterestFilter | null;
    set pointOfInterestFilter(value: PointOfInterestFilter | null);
    /**
     * Fetches points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearch/search)
     *
     * @param callback A callback function or delegate object with the following parameters:
     * @param options Options that can overwrite the same options set on the property or supplied to the PointsOfInterestSearch constructor.
     * @returns The identifier of the search request, or `undefined` if the request could not be made.
     *
     * @since 5.45.0
     */
    search(
        callback: PointsOfInterestSearchDelegate,
        options?: PointsOfInterestSearchOptions,
    ): number | undefined;
    /**
     * The maximum distance to use from the center of the region for fetching points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearch/maxradius)
     *
     * @since 5.45.0
     */
    static readonly MaxRadius: number;
}

/**
 * Options that you provide when creating a points-of-interest search.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchconstructoroptions)
 *
 * @since 5.45.0
 */
export interface PointsOfInterestSearchConstructorOptions extends ServiceConstructorOptions {
    /**
     * Sets the center point of the request represented as latitude and longitude.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchconstructoroptions/center)
     *
     * @since 5.45.0
     */
    center?: Coordinate;
    /**
     * Sets the distance provided in meters, or the longest distance derived from the center point to the region's bounding box.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchconstructoroptions/radius)
     *
     * @since 5.45.0
     */
    radius?: number;
    /**
     * Sets the region that bounds the area in which to fetch points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchconstructoroptions/region)
     *
     * @since 5.45.0
     */
    region?: CoordinateRegion;
    /**
     * Sets a filter that lists points of interest categories to include or exclude.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchconstructoroptions/pointofinterestfilter)
     *
     * @since 5.45.0
     */
    pointOfInterestFilter?: PointOfInterestFilter;
}

/**
 * An object or callback function that MapKit JS calls when fetching points of interest.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchdelegate)
 *
 * @since 5.45.0
 */
type PointsOfInterestSearchDelegate =
    | {
        /**
         * Tells the delegate that the search failed due to an error.
         *
         * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchdelegate/searchdiderror)
         *
         * @param error The error from a failed fetch for points of interest.
         */
        searchDidError: (error: Error) => void;
        /**
         * Tells the delegate that the search completed.
         *
         * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchdelegate/searchdidcomplete)
         *
         * @param result The points of interest fetch results.
         */
        searchDidComplete: (result: PointsOfInterestSearchResponse) => void;
    }
    | ((error: Error | null, result?: PointsOfInterestSearchResponse) => void);

/**
 * Options that you may provide when you create a points of interest search.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchoptions)
 *
 * @since 5.45.0
 */
export interface PointsOfInterestSearchOptions {
    /**
     * The center point of the request represented as latitude and longitude.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchoptions/center)
     *
     * @since 5.45.0
     */
    center?: Coordinate;
    /**
     * The distance provided in meters, or the longest distance derived from the center point to the region's bounding box.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchoptions/radius)
     *
     * @since 5.45.0
     */
    radius?: number;
    /**
     * The region that bounds the area in which to fetch points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchoptions/region)
     *
     * @since 5.45.0
     */
    region?: CoordinateRegion;
    /**
     * A filter that lists points of interest categories to include or exclude.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchoptions/pointofinterestfilter)
     *
     * @since 5.45.0
     */
    pointOfInterestFilter?: PointOfInterestFilter;
    /**
     * The language ID to use when fetching points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchoptions/language)
     *
     * @since 5.45.0
     */
    language?: string;
}

/**
 * The result of a request used to fetch points of interest.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchresponse)
 *
 * @since 5.45.0
 */
export interface PointsOfInterestSearchResponse {
    /**
     * The list of points of interest that match the request options.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchresponse/places)
     *
     * @since 5.45.0
     */
    places: Place[];
}

/**
 * An overlay consisting of one or more points that forms a closed shape.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/polygonoverlay)
 *
 * @since 5.0.0
 */
export class PolygonOverlay extends Overlay {
    /**
     * Creates a polygon overlay with an array of points and style options.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/polygonoverlay/polygonoverlayconstructor)
     *
     * @param points The points in the polygon as an array of arrays of {@link Coordinate}, or an array of {@link Coordinate}. For the latter, MapKit JS auto-wraps the array with an enclosing array.
     * @param options An optional object literal of options for initializing the polygon.
     *
     * @since 5.0.0
     */
    constructor(
        points: Coordinate[][] | Coordinate[],
        options?: OverlayOptions,
    );
    /**
     * One or more arrays of coordinates that define the polygon overlay shape.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/polygonoverlay/points)
     *
     * @since 5.0.0
     */
    get points(): Coordinate[][];
    set points(points: Coordinate[][]);
}

/**
 * An overlay of connected line segments that don't form a closed shape.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/polylineoverlay)
 *
 * @since 5.0.0
 */
export class PolylineOverlay extends Overlay {
    /**
     * Creates a polyline overlay with coordinate points and style options.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/polylineoverlay/polylineoverlayconstructor)
     *
     * @param points The required points in the polyline as an array of {@link Coordinate}.
     * @param options An optional object literal of style options for initializing the polyline.
     *
     * @since 5.0.0
     */
    constructor(points: Coordinate[], options?: OverlayOptions);
    /**
     * An array of coordinate points that define the polyline overlay's shape.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/polylineoverlay/points)
     *
     * @since 5.0.0
     */
    get points(): Coordinate[];
    set points(points: Coordinate[]);
}

/**
 * A value that indicates the importance of the configured region.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/regionpriority)
 *
 * @since 5.78.1
 */
declare const RegionPriority: Readonly<{
    /**
     * A value indicating that the results can originate from outside the specified region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/regionpriority/default)
     *
     * @since 5.78.1
     */
    readonly Default: "default";
    /**
     * A value indicating that no results can originate from outside the specified region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/regionpriority/required)
     *
     * @since 5.78.1
     */
    readonly Required: "required";
}>;

type RegionPriority = (typeof RegionPriority)[keyof typeof RegionPriority];

/**
 * Information about a route, including step-by-step instructions, distance, and estimated travel time.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/route)
 *
 * @since 5.0.0
 */
declare class Route {
    /**
     * The name assigned to the route.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/route/name)
     *
     * @since 5.0.0
     */
    name: string;
    /**
     * The route distance, in meters.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/route/distance)
     *
     * @since 5.0.0
     */
    distance: number;
    /**
     * The expected travel time, in seconds.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/route/expectedtraveltime)
     *
     * @since 5.0.0
     */
    expectedTravelTime: number;
    /**
     * The overall route transport type.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/route/transporttype)
     *
     * @since 5.0.0
     */
    transportType?: string;
    /**
     * A Boolean value that indicates whether a route has tolls.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/route/hastolls)
     *
     * @since 5.72.0
     */
    hasTolls?: boolean;

    /**
     * An array of steps that compose the overall route.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/route/steps)
     *
     * @since 5.0.0
     */
    steps: RouteStep[];

    /**
     * An array of coordinate objects representing the path of the route.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/route/path)
     *
     * @deprecated Use the polyline or step properties instead.
     *
     * @since 5.0.0
     */
    get path(): Coordinate[][];

    /**
     * An instance of a polyline overlay that represents the path of a route.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/route/polyline)
     *
     * @since 5.4.0
     */
    get polyline(): PolylineOverlay;
}

/**
 * A single step of the route between the requested start and end points.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/routestep)
 *
 * @since 5.0.0
 */
declare class RouteStep {
    /**
     * The written instructions for following the path that the step represents.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/routestep/instructions)
     *
     * @since 5.0.0
     */
    instructions: string;

    /**
     * The step distance, in meters.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/routestep/distance)
     *
     * @since 5.0.0
     */
    distance: number;
    /**
     * The transport type of the step.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/routestep/transporttype)
     *
     * @since 5.0.0
     */
    transportType?: string;
    /**
     * An array of coordinate objects representing the path of the route segment.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/routestep/path)
     *
     * @since 5.0.0
     */
    path?: Coordinate[];
}

/**
 * An object that retrieves map-based search results for a user-entered query.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search)
 *
 * @since 5.0.0
 */
export class Search extends Service {
    /**
     * Creates a search object with optional initial values that you provide.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/searchconstructor)
     *
     * @param options An object containing the options for creating a search object. This parameter is optional.
     *
     * @since 5.0.0
     */
    constructor(options?: SearchConstructorOptions);
    /**
     * A map coordinate that provides a hint for the geographic area to search.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/coordinate)
     *
     * @since 5.0.0
     */
    get coordinate(): Coordinate | null;
    set coordinate(value: Coordinate | null);
    /**
     * A map region that provides a hint about the geographic area to search.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/region)
     *
     * @since 5.0.0
     */
    get region(): CoordinateRegion | null;
    set region(value: CoordinateRegion | null);
    /**
     * A region priority value that controls whether results occur outside, or strictly within, the region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/regionpriority-data.property)
     *
     * @since 5.78.1
     */
    get regionPriority(): RegionPriority;
    set regionPriority(value: RegionPriority);
    /**
     * A Boolean value that indicates whether the search results include addresses.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/includeaddresses)
     *
     * @since 5.0.0
     */
    get includeAddresses(): boolean;
    set includeAddresses(value: boolean);
    /**
     * A Boolean value that indicates whether the search results should include points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/includepointsofinterest)
     *
     * @since 5.0.0
     */
    get includePointsOfInterest(): boolean;
    set includePointsOfInterest(value: boolean);
    /**
     * A Boolean value that indicates whether the search results include physical features, such as mountain ranges, rivers, and ocean basins.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/includephysicalfeatures)
     *
     * @since 5.0.0
     */
    get includePhysicalFeatures(): boolean;
    set includePhysicalFeatures(value: boolean);
    /**
     * A Boolean value that indicates whether the search results include queries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/includequeries)
     *
     * @since 5.0.0
     */
    get includeQueries(): boolean;
    set includeQueries(value: boolean);
    /**
     * An filter that lists which address components to include or exclude in search results.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/addressfilter)
     *
     * @since 5.78.1
     */
    get addressFilter(): AddressFilter | null;
    set addressFilter(value: AddressFilter | null);
    /**
     * A filter to use to include or exclude point-of-interest categories.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/pointofinterestfilter)
     *
     * @since 5.0.0
     */
    get pointOfInterestFilter(): PointOfInterestFilter | null;
    set pointOfInterestFilter(value: PointOfInterestFilter | null);
    /**
     * A string that constrains search results to be within the provided countries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/limittocountries)
     *
     * @since 5.0.0
     */
    get limitToCountries(): string | null;
    set limitToCountries(value: string | null);
    /**
     * Retrieves the results of a search query.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/search)
     *
     * @param query  A `String` or a {@link SearchAutocompleteResult}.
     * @param callback A callback function or delegate object.
     * @param options With the `options` hash, you can constrain the search to a desired area using the `coordinate` or `region` properties. A coordinate or region you supply here overrides the same property you supply to the {@link Search} constructor. Another option is {@link mapkit.language}. For example, `{ language: 'fr-CA' }` tells the server to send results localized to Canadian French. If you set it, this option overrides the language the system provides to the search constructor.
     * @returns A promise that resolves when the search completes.
     *
     * @since 5.0.0
     */
    search(
        query: string | SearchAutocompleteResult,
        callback: SearchDelegate<SearchResponse>,
        options?: SearchOptions,
    ): number;
    /**
     * Retrieves a list of autocomplete results for the specified search query.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/autocomplete)
     *
     * @param query A string that represents the user's search in progress.
     * @param callback A callback function or delegate object.
     * @param options With the {@link SearchAutocompleteOptions} hash, you have the option to constrain the search to a desired area using the {@link SearchConstructorOptions.coordinate} or {@link SearchConstructorOptions.region} properties. A coordinate or region you supply here overrides the same property you supply to the {@link Search} constructor. You also have the option to override the {@link mapkit.language} for the search constructor. For example, `{ language: 'fr-CA' }` tells the server to send results localized to Canadian French. For a complete list of options you can use to constrain your search, see {@link SearchAutocompleteOptions}.
     * @returns A promise that resolves when the autocomplete request completes.
     *
     * @since 5.0.0
     */
    autocomplete(
        query: string,
        callback: SearchDelegate<SearchAutocompleteResponse>,
        options?: SearchAutocompleteOptions,
    ): number;
    /**
     * A static property that allows you to access region priority enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/regionpriority-data.var)
     *
     * @since 5.78.1
     */
    static RegionPriority: typeof RegionPriority;
}

/**
 * Options you provide to constrain an autocomplete request.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteoptions)
 *
 * @since 5.32.2
 */
export interface SearchAutocompleteOptions extends SearchOptions {
    /**
     * A Boolean value that indicates whether the search results include queries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteoptions/includequeries)
     *
     * @since 5.32.2
     */
    includeQueries?: boolean;
}

/**
 * An object containing the response from an autocomplete request.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresponse)
 *
 * @since 5.0.0
 */
export interface SearchAutocompleteResponse {
    /**
     * The query string used to perform the autocomplete request.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresponse/query)
     *
     * @since 5.0.0
     */
    query: string;
    /**
     * The results from an autocomplete request.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresponse/results)
     *
     * @since 5.0.0
     */
    results: SearchAutocompleteResult[];
}

/**
 * The result of an autocomplete query, including display lines and a coordinate.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult)
 *
 * @since 5.0.0
 */
export class SearchAutocompleteResult {
    /**
     * Lines of text to display to the user in an autocomplete menu.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/displaylines)
     *
     * @since 5.0.0
     */
    displayLines: string[];
    /**
     * The Place ID that identifies a feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/id)
     *
     * @since 5.0.0
     */
    id?: string;
    /**
     * A list of alternate Place IDs that identify a feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/alternateids)
     *
     * @since 5.0.0
     */
    alternateIds?: string[];

    /**
     * The coordinate of the result when it corresponds to a single place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/coordinate)
     *
     * @since 5.0.0
     */
    coordinate?: Coordinate;

    /**
     * The name of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/name)
     *
     * @since 5.0.0
     */
    name?: string | undefined;

    /**
     * The name of state or province of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/administrativearea)
     *
     * @since 5.0.0
     */
    administrativeArea?: string;
    /**
     * The official abbreviation for the state or area.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/administrativeareacode)
     *
     * @since 5.0.0
     */
    administrativeAreaCode?: string;
    /**
     * The city of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/locality)
     *
     * @since 5.0.0
     */
    locality?: string;
    /**
     * The postal code of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/postcode)
     *
     * @since 5.0.0
     */
    postCode?: string;
    /**
     * The name of the area within the locality.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/sublocality)
     *
     * @since 5.0.0
     */
    subLocality?: string;
    /**
     * The street name at the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/thoroughfare)
     *
     * @since 5.0.0
     */
    thoroughfare?: string;
    /**
     * The street number at the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/subthoroughfare)
     *
     * @since 5.0.0
     */
    subThoroughfare?: string;
    /**
     * A combination of the thoroughfare and subthoroughfare.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/fullthoroughfare)
     *
     * @since 5.0.0
     */
    fullThoroughfare?: string;
    /**
     * An array of common names of the area in which the place resides.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/areasofinterest)
     *
     * @since 5.0.0
     */
    areasOfInterest?: string[];
    /**
     * An array of common names for the local area or neighborhood of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/dependentlocalities)
     *
     * @since 5.0.0
     */
    dependentLocalities?: string[];
}

/**
 * Options you provide when you create a search object.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions)
 *
 * @since 5.0.0
 */
export interface SearchConstructorOptions extends ServiceConstructorOptions {
    /**
     * A language ID that determines the language for the search results text.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/language)
     *
     * @since 5.0.0
     */
    language?: string;
    /**
     * A map coordinate that provides a hint for the geographic area to search.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/coordinate)
     *
     * @since 5.0.0
     */
    coordinate?: Coordinate;
    /**
     * A map region that provides a hint for the geographic area to search.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/region)
     *
     * @since 5.0.0
     */
    region?: CoordinateRegion;
    /**
     * A Boolean value that indicates whether the search results include addresses.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/includeaddresses)
     *
     * @since 5.32.2
     */
    includeAddresses?: boolean;
    /**
     * A Boolean value that indicates whether the search results should include points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/includepointsofinterest)
     *
     * @since 5.32.2
     */
    includePointsOfInterest?: boolean;
    /**
     * A Boolean value that indicates whether the search results include physical features, such as mountain ranges, rivers, and ocean basins.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/includephysicalfeatures)
     *
     * @since 5.78.1
     */
    includePhysicalFeatures?: boolean;
    /**
     * A Boolean value that indicates whether the search results include queries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/includequeries)
     *
     * @since 5.32.2
     */
    includeQueries?: boolean;
    /**
     * A filter used to include or exclude point-of-interest categories.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/pointofinterestfilter)
     *
     * @since 5.32.2
     */
    pointOfInterestFilter?: PointOfInterestFilter;
    /**
     * An address filter that lists which address components to include or exclude in search results.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/addressfilter)
     *
     * @since 5.78.1
     */
    addressFilter?: AddressFilter;
    /**
     * A string that constrains search results to within the provided countries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/limittocountries)
     *
     * @since 5.49.0
     */
    limitToCountries?: string;
    /**
     * A region priority value that controls whether results occur outside, or strictly within, the region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/regionpriority)
     *
     * @since 5.78.1
     */
    regionPriority?: RegionPriority;
}

/**
 * An object or callback function the framework calls when performing a search or an autocomplete request.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchdelegate)
 *
 * @since 5.0.0
 */
type SearchDelegate<
    T extends SearchResponse | SearchAutocompleteResponse =
        | SearchResponse
        | SearchAutocompleteResponse,
> =
    | {
        /**
         * Tells the delegate when the search fails due to an error.
         *
         * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchdelegate/searchdiderror)
         *
         * @param error The error from a failed search.
         */
        searchDidError: (error: Error) => void;
        /**
         * Tells the delegate when the search completes.
         *
         * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchdelegate/searchdidcomplete)
         *
         * @param result The search results.
         */
        searchDidComplete: (result: SearchResponse) => void;
        /**
         * Tells the delegate when the autocomplete request fails due to an error.
         *
         * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchdelegate/autocompletediderror)
         *
         * @param error The error from a failed autocomplete request.
         */
        autocompleteDidError: (error: Error) => void;
        /**
         * Tells the delegate when the autocomplete request completes.
         *
         * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchdelegate/autocompletedidcomplete)
         *
         * @param result The results from the search autocomplete request.
         */
        autocompleteDidComplete: (result: SearchAutocompleteResponse) => void;
    }
    | ((error: Error | null, result?: T) => void);

/**
 * An object that contains options to adjust a search.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchoptions)
 *
 * @since 5.0.0
 */
export interface SearchOptions {
    /**
     * A language ID that determines the language for the search result text.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchoptions/language)
     *
     * @since 5.0.0
     */
    language?: string;
    /**
     * A map coordinate that provides a hint for the geographic area to search.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchoptions/coordinate)
     *
     * @since 5.0.0
     */
    coordinate?: Coordinate;
    /**
     * A map region that provides a hint for the geographic area to search.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchoptions/region)
     *
     * @since 5.0.0
     */
    region?: CoordinateRegion;
    /**
     * A Boolean value that indicates whether the search results should include addresses.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchoptions/includeaddresses)
     *
     * @since 5.32.2
     */
    includeAddresses?: boolean;
    /**
     * A Boolean value that indicates whether the search results should include points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchoptions/includepointsofinterest)
     *
     * @since 5.32.2
     */
    includePointsOfInterest?: boolean;
    /**
     * A Boolean value that indicates whether the search results include physical features, such as mountain ranges, rivers, and ocean basins.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchoptions/includephysicalfeatures)
     *
     * @since 5.78.1
     */
    includePhysicalFeatures?: boolean;
    /**
     * A filter for including or excluding point-of-interest categories in search results.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchoptions/pointofinterestfilter)
     *
     * @since 5.32.2
     */
    pointOfInterestFilter?: PointOfInterestFilter;
    /**
     * An address filter that lists which address components to include or exclude in search results.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchoptions/addressfilter)
     *
     * @since 5.78.1
     */
    addressFilter?: AddressFilter;
    /**
     * A string that constrains search results to within the provided countries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchoptions/limittocountries)
     *
     * @since 5.49.0
     */
    limitToCountries?: string;
    /**
     * A region priority value that controls whether results occur outside, or strictly within, the region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchoptions/regionpriority)
     *
     * @since 5.78.1
     */
    regionPriority?: RegionPriority;
}

/**
 * The result of a search, including the original search query, the bounding region, and a list of places that match the query.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchresponse)
 *
 * @since 5.0.0
 */
export interface SearchResponse {
    /**
     * The query string for performing the search.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchresponse/query)
     *
     * @since 5.0.0
     */
    query?: string | SearchAutocompleteResult;
    /**
     * The region that encloses the places from the search results.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchresponse/boundingregion)
     *
     * @since 5.0.0
     */
    boundingRegion?: CoordinateRegion;
    /**
     * A list of places that match the search query.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchresponse/places)
     *
     * @since 5.0.0
     */
    places: Place[];
}

/**
 * An abstract class that provides common interfaces for services objects.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/service)
 *
 * @since 5.0.0
 */
export abstract class Service {
    /**
     * A Boolean value that indicates whether the request returns results near a person's location.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/service/getsuserlocation)
     *
     * @since 5.0.0
     */
    get getsUserLocation(): boolean;
    set getsUserLocation(value: boolean);
    /**
     * A language ID that determines the language to use for displaying addresses.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/service/language)
     *
     * @since 5.0.0
     */
    get language(): string | null;
    set language(value: string | null);
    /**
     * Cancels a request using the provided request ID.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/service/cancel)
     *
     * @param id Pass the integer ID. Passing an invalid ID or the ID of a completed request has no effect.
     * @returns `true` if the server cancels the pending search request.
     *
     * @since 5.0.0
     */
    cancel(id: number): boolean;
}

/**
 * Common options you provide when you create a service object.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/serviceconstructoroptions)
 *
 * @since 5.0.0
 */
export interface ServiceConstructorOptions {
    /**
     * A language identifier that determines the language for the service results text.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/serviceconstructoroptions/language)
     *
     * @since 5.0.0
     */
    language?: string;
    /**
     * A Boolean value that indicates whether to limit the results to the user's location, according to the web browser.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/serviceconstructoroptions/getsuserlocation)
     *
     * @since 5.0.0
     */
    getsUserLocation?: boolean;
}

/**
 * A structure that represents a size.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/size)
 *
 * @since 5.0.0
 */
export interface Size {
    /**
     * The width value of the size structure.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/size/width)
     *
     * @since 5.0.0
     */
    width: number;
    /**
     * The height value of the size structure.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/size/height)
     *
     * @since 5.0.0
     */
    height: number;
}

/**
 * A set of observable style properties for overlays, including the color and opacity of strokes and fills, and line styles.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style)
 *
 * @since 5.0.0
 */
export class Style {
    /**
     * Creates and initializes a style object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/styleconstructor)
     *
     * @param options A {@link StyleConstructorOptions} object of style properties.
     *
     * @since 5.0.0
     */
    constructor(options?: StyleConstructorOptions);
    /**
     * The stroke color of a line.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/strokecolor)
     *
     * @since 5.0.0
     */
    get strokeColor(): string;
    set strokeColor(strokeColor: string);
    /**
     * The opacity of the stroke color.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/strokeopacity)
     *
     * @since 5.0.0
     */
    get strokeOpacity(): number;
    set strokeOpacity(strokeOpacity: number);
    /**
     * The unit distance along the line where a stroke begins.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/strokestart)
     *
     * @since 5.45.0
     */
    get strokeStart(): number;
    set strokeStart(strokeStart: number);
    /**
     * The unit distance along the line where a stroke ends.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/strokeend)
     *
     * @since 5.45.0
     */
    get strokeEnd(): number;
    set strokeEnd(strokeEnd: number);
    /**
     * The width of a line's stroke, in CSS pixels.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/linewidth)
     *
     * @since 5.0.0
     */
    get lineWidth(): number;
    set lineWidth(lineWidth: number);
    /**
     * The style to use when drawing line endings.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/linecap)
     *
     * @since 5.0.0
     */
    get lineCap(): "square" | "butt" | "round";
    set lineCap(lineCap: "square" | "butt" | "round");
    /**
     * The corner style to apply when joining line segments.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/linejoin)
     *
     * @since 5.0.0
     */
    get lineJoin(): "round" | "bevel" | "miter";
    set lineJoin(lineJoin: "round" | "bevel" | "miter");
    /**
     * An array of line and gap lengths for creating a dashed line.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/linedash)
     *
     * @since 5.0.0
     */
    get lineDash(): number[];
    set lineDash(lineDash: number[]);
    /**
     * The number of CSS pixels to use as an offset when drawing a line's dash pattern.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/linedashoffset)
     *
     * @since 5.0.0
     */
    get lineDashOffset(): number;
    set lineDashOffset(lineDashOffset: number);
    /**
     * The gradient to apply along the line.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/linegradient)
     *
     * @since 5.45.0
     */
    get lineGradient(): LineGradient | null;
    set lineGradient(lineGradient: LineGradient | null);
    /**
     * The fill color of a shape.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/fillcolor)
     *
     * @since 5.0.0
     */
    get fillColor(): string;
    set fillColor(fillColor: string);
    /**
     * The opacity of the fill color.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/fillopacity)
     *
     * @since 5.0.0
     */
    get fillOpacity(): number;
    set fillOpacity(fillOpacity: number);
    /**
     * A rule for determining whether a point is inside or outside a polygon.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/fillrule)
     *
     * @since 5.0.0
     */
    get fillRule(): "evenodd" | "nonzero";
    set fillRule(fillRule: "evenodd" | "nonzero");
    /**
     * Returns a string representation of the style object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/tostring)
     *
     * @returns A string representation of the style object.
     *
     * @since 5.0.0
     */
    toString(): string;
}

/**
 * Initial values of options for applying style to overlays.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions)
 *
 * @since 5.0.0
 */
export interface StyleConstructorOptions {
    /**
     * The stroke color of a line.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/strokecolor)
     *
     * @since 5.0.0
     */
    strokeColor?: string;
    /**
     * The opacity of the stroke color.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/strokeopacity)
     *
     * @since 5.0.0
     */
    strokeOpacity?: number;
    /**
     * The unit distance along the line where a stroke begins.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/strokestart)
     *
     * @since 5.45.0
     */
    strokeStart?: number;
    /**
     * The unit distance along the line where a stroke ends.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/strokeend)
     *
     * @since 5.45.0
     */
    strokeEnd?: number;
    /**
     * The width of a line's stroke, in CSS pixels.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/linewidth)
     *
     * @since 5.0.0
     */
    lineWidth?: number;
    /**
     * The style to use when drawing line endings.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/linecap)
     *
     * @since 5.0.0
     */
    lineCap?: "butt" | "round" | "square";
    /**
     * The style to use when drawing joins between line segments.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/linejoin)
     *
     * @since 5.0.0
     */
    lineJoin?: "bevel" | "miter" | "round";
    /**
     * An array of line and gap lengths for creating a dashed line.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/linedash)
     *
     * @since 5.0.0
     */
    lineDash?: number[];
    /**
     * The number of CSS pixels to use as the offset when drawing a line's dash pattern.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/linedashoffset)
     *
     * @since 5.0.0
     */
    lineDashOffset?: number;
    /**
     * The gradient to apply along the line.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/linegradient)
     *
     * @since 5.45.0
     */
    lineGradient?: LineGradient;
    /**
     * The fill color of a shape.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/fillcolor)
     *
     * @since 5.0.0
     */
    fillColor?: string;
    /**
     * The opacity of the fill color.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/fillopacity)
     *
     * @since 5.0.0
     */
    fillOpacity?: number;
    /**
     * A rule for determining whether a point is inside or outside a polygon.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/fillrule)
     *
     * @since 5.0.0
     */
    fillRule?: "evenodd" | "nonzero";
}

/**
 * An overlay that covers an area of the map with bitmapped tiles.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlay)
 *
 * @since 5.0.0
 */
export class TileOverlay extends MapKitEventTarget {
    /**
     * Creates a tile overlay with a URL template and style options.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlay/tileoverlayconstructor)
     *
     * @param urlTemplate The URL template for generating tile URLs.
     * @param options A hash of properties with which to initialize the tile overlay.
     *
     * @since 5.0.0
     */
    constructor(
        urlTemplate: TileOverlayUrlTemplate,
        options?: TileOverlayConstructorOptions,
    );
    /**
     * A string, or callback function that returns a string, with a URL that provides the requested tile.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlay/urltemplate)
     *
     * @since 5.0.0
     */
    get urlTemplate(): TileOverlayUrlTemplate;
    set urlTemplate(urlTemplate: TileOverlayUrlTemplate);
    /**
     * The minimum zoom level for a tile overlay.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlay/minimumz)
     *
     * @since 5.0.0
     */
    get minimumZ(): number | null;
    set minimumZ(minimumZ: number | null);
    /**
     * The maximum zoom level for a tile overlay.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlay/maximumz)
     *
     * @since 5.0.0
     */
    get maximumZ(): number | null;
    set maximumZ(maximumZ: number | null);
    /**
     * A number that indicates a tile's opacity.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlay/opacity)
     *
     * @since 5.0.0
     */
    get opacity(): number;
    set opacity(opacity: number);
    /**
     * A dictionary of custom properties to use with the URL template.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlay/data)
     *
     * @since 5.0.0
     */
    get data(): {
        [key: string]: any;
    };
    set data(data: { [key: string]: any });
    /**
     * Reloads the tile overlay for the displayed map region with the latest data values.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlay/reload)
     *
     * @since 5.0.0
     */
    reload(): void;
}

/**
 * Attributes for initializing a tile overlay, including minimum and maximum zoom, opacity, and custom data.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlayconstructoroptions)
 *
 * @since 5.0.0
 */
export interface TileOverlayConstructorOptions {
    /**
     * The minimum zoom level of the overlay.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlayconstructoroptions/minimumz)
     *
     * @since 5.0.0
     */
    minimumZ: number;
    /**
     * The maximum zoom level of the overlay.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlayconstructoroptions/maximumz)
     *
     * @since 5.0.0
     */
    maximumZ: number;
    /**
     * The opacity level of the overlay.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlayconstructoroptions/opacity)
     *
     * @since 5.0.0
     */
    opacity: number;
    /**
     * Custom data for populating the URL template.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlayconstructoroptions/data)
     *
     * @since 5.0.0
     */
    data: {
        [key: string]: any;
    };
}

/**
 * An event object that notifies the developer of an error that occurred while loading tiles.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlayerrorevent)
 *
 * @since 5.0.0
 */
export class TileOverlayErrorEvent extends MapKitEvent {
    /**
     * The tile overlay object that dispatched the tile error event.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlayerrorevent/tileoverlay)
     *
     * @since 5.0.0
     */
    readonly tileOverlay: TileOverlay;
    /**
     * The URL of the tile that failed to load.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlayerrorevent/tileurl)
     *
     * @since 5.0.0
     */
    readonly tileUrl: string;
}

/**
 * A type that specifies the URL template for a tile overlay.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlayurltemplate)
 *
 * @since 5.0.0
 */
type TileOverlayUrlTemplate =
    | string
    | ((x: number, y: number, z: number, scale: number, data: any) => string);

/**
 * The modes of transportation.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/transporttype)
 *
 * @since 5.0.0
 */
declare const TransportType: Readonly<{
    /**
     * A constant identifying the mode of transportation as driving.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/transporttype/automobile)
     *
     * @since 5.0.0
     */
    readonly Automobile: "AUTOMOBILE";
    /**
     * A constant identifying the mode of transportation as walking.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/transporttype/walking)
     *
     * @since 5.0.0
     */
    readonly Walking: "WALKING";
    /**
     * A constant identifying the mode of transportation as cycling.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/transporttype/cycling)
     *
     * @since 5.79.0
     */
    readonly Cycling: "CYCLING";
}>;

type TransportType = (typeof TransportType)[keyof typeof TransportType];

/**
 * An annotation that represents someone's location.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/userlocationannotation)
 *
 * @since 5.0.0
 */
export class UserLocationAnnotation extends Annotation {
    /**
     * The coordinate of the annotation, that represents a person's location on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/userlocationannotation/coordinate)
     *
     * @since 5.0.0
     */
    get coordinate(): Coordinate;
    set coordinate(coordinate: Coordinate);
    /**
     * A Boolean value that indicates whether someone can drag the the user location annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/userlocationannotation/draggable)
     *
     * @since 5.0.0
     */
    get draggable(): boolean;
    set draggable(_: boolean);
    /**
     * The size of the user location annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/userlocationannotation/size)
     *
     * @since 5.0.0
     */
    get size(): Size;
    set size(_: Size);
}

export {};
