import type * as GeoJSONTypes from "geojson";

/**
 * An abstract class that provides a common interface for Look Around views.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround)
 */
declare abstract class AbstractLookAround extends EventTarget {
    #private;

    /**
     * A static property that allows you to access the Look Around ready state enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/readystates)
     */
    static ReadyStates: typeof LookAroundReadyState;

    /**
     * A property that represents the Look Around view's containing Document Object Model (DOM) element.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/element)
     */
    get element(): HTMLDivElement;

    /**
     * The Look Around scene the framework is displaying.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/scene)
     */
    get scene(): LookAroundScene | null;
    /**
     * The Look Around scene the framework is displaying.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/scene)
     */
    set scene(value: LookAroundScene);
    /**
     * Opens the Look Around view in a dialog.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/opendialog)
     */
    get openDialog(): boolean;
    /**
     * Opens the Look Around view in a dialog.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/opendialog)
     */
    set openDialog(value: boolean);
    /**
     * A value that represents the loading state of the Look Around object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/readystate)
     */
    get readyState(): LookAroundReadyState;
    /**
     * A Boolean value that indicates whether someone can navigate inside the Look Around view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/isnavigationenabled)
     */
    get isNavigationEnabled(): boolean;
    /**
     * A Boolean value that indicates whether someone can navigate inside the Look Around view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/isnavigationenabled)
     */
    set isNavigationEnabled(value: boolean);
    /**
     * A Boolean value that indicates whether someone can zoom the Look Around view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/iszoomenabled)
     */
    get isZoomEnabled(): boolean;
    /**
     * A Boolean value that indicates whether someone can zoom the Look Around view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/iszoomenabled)
     */
    set isZoomEnabled(value: boolean);
    /**
     * A Boolean value that indicates whether someone can scroll the Look Around view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/isscrollenabled)
     */
    get isScrollEnabled(): boolean;
    /**
     * A Boolean value that indicates whether someone can scroll the Look Around view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/isscrollenabled)
     */
    set isScrollEnabled(value: boolean);

    /**
     * A Boolean value that indicates whether the Look Around view shows road labels.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/showsroadlabels)
     */
    get showsRoadLabels(): boolean;
    /**
     * A Boolean value that indicates whether the Look Around view shows road labels.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/showsroadlabels)
     */
    set showsRoadLabels(value: boolean);

    /**
     * A Boolean value that indicates whether the Look Around view shows points of interest (POIs).
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/showspointsofinterest)
     */
    get showsPointsOfInterest(): boolean;
    /**
     * A Boolean value that indicates whether the Look Around view shows points of interest (POIs).
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/showspointsofinterest)
     */
    set showsPointsOfInterest(value: boolean);

    /**
     * The padding options for the Look Around view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/padding)
     */
    get padding(): Padding;
    /**
     * The padding options for the Look Around view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/padding)
     */
    set padding(value: Padding);
    /**
     * Releases the Look Around view and its resources from memory.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/abstractlookaround/destroy)
     */
    destroy(): void;
}

/**
 * The categories of address components that users can search for with an address filter.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addresscategory)
 */
export const AddressCategory: Readonly<{
    /**
     * Countries and regions.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addresscategory/country)
     */
    readonly Country: "Country";
    /**
     * The primary administrative divisions of countries or regions.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addresscategory/administrativearea)
     */
    readonly AdministrativeArea: "AdministrativeArea";
    /**
     * The secondary administrative divisions of countries or regions.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addresscategory/subadministrativearea)
     */
    readonly SubAdministrativeArea: "SubAdministrativeArea";
    /**
     * Local administrative divisions, postal cities, and populated places.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addresscategory/locality)
     */
    readonly Locality: "Locality";
    /**
     * Local administrative subdivisions, postal city subdistricts, and neighborhoods.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addresscategory/sublocality)
     */
    readonly SubLocality: "SubLocality";
    /**
     * An address code for mail sorting and delivery.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addresscategory/postalcode)
     */
    readonly PostalCode: "PostalCode";
}>;

/**
 * A type alias that represents address category values.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addresscategory/addresscategory)
 */
export type AddressCategory = (typeof AddressCategory)[keyof typeof AddressCategory];

/**
 * An object that filters which address options to include or exclude in search results.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addressfilter)
 */
export class AddressFilter {
    /**
     * A Boolean value that indicates whether to include a category from a search.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addressfilter/includescategory)
     *
     * @param category The address category to check for inclusion.
     * @returns A Boolean value that indicates whether to include a category from a search.
     */
    includesCategory(category: AddressCategory): boolean;
    /**
     * A Boolean value that indicates whether to exclude a category from a search.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addressfilter/excludescategory)
     *
     * @param category The address category to check for exclusion.
     * @returns A Boolean value that indicates whether to exclude a category from a search.
     */
    excludesCategory(category: AddressCategory): boolean;
    /**
     * A value that includes all address categories.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addressfilter/includingallcategories)
     */
    static includingAllCategories: () => AddressFilter;
    /**
     * A value that excludes all address categories.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addressfilter/excludingallcategories)
     */
    static excludingAllCategories: () => AddressFilter;
    /**
     * A list of categories to include in a search.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addressfilter/including)
     *
     * @param categories The address categories to include in the filter.
     * @returns A new AddressFilter that includes the specified categories.
     */
    static including(categories: AddressCategory[]): AddressFilter;
    /**
     * A list of categories to exclude from a search.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/addressfilter/excluding)
     *
     * @param categories The address categories to exclude from the filter.
     * @returns A new AddressFilter that excludes the specified categories.
     */
    static excluding(categories: AddressCategory[]): AddressFilter;
}

/**
 * The base annotation object for creating custom annotations.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation)
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
     */
    static DisplayPriority: typeof DisplayPriority;
    /**
     * A static property that allows you to access the annotation's collision mode enumeration values.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/collisionmode-data.var)
     */
    static CollisionMode: typeof CollisionMode;
    /**
     * The map that the framework adds the annotation to.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/map)
     */
    get map(): Map | null;
    /**
     * The map that the framework adds the annotation to.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/map)
     */
    set map(_: Map | null);
    /**
     * The annotation's element in the DOM.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/element)
     */
    get element(): HTMLElement;
    /**
     * The annotation's element in the DOM.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/element)
     */
    set element(_: HTMLElement);
    /**
     * The annotation's coordinate.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/coordinate)
     */
    get coordinate(): Coordinate;
    /**
     * The annotation's coordinate.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/coordinate)
     */
    set coordinate(value: Coordinate);
    /**
     * The place ID that references a place or a map feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/id)
     */
    get id(): string | undefined;
    /**
     * A Boolean value that determines whether the annotation is visible or hidden.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/visible)
     */
    get visible(): boolean;
    /**
     * A Boolean value that determines whether the annotation is visible or hidden.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/visible)
     */
    set visible(value: boolean);
    /**
     * A CSS animation that runs when the annotation appears on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/appearanceanimation)
     */
    get appearanceAnimation(): string;
    /**
     * A CSS animation that runs when the annotation appears on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/appearanceanimation)
     */
    set appearanceAnimation(appearanceAnimation: string);
    /**
     * The text to display in the annotation's callout.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/title)
     */
    get title(): string | undefined;
    /**
     * The text to display in the annotation's callout.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/title)
     */
    set title(value: string | undefined);
    /**
     * The text to display as a subtitle on the second line of an annotation's callout.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/subtitle)
     */
    get subtitle(): string | undefined;
    /**
     * The text to display as a subtitle on the second line of an annotation's callout.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/subtitle)
     */
    set subtitle(value: string | undefined);
    /**
     * Accessibility text for the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/accessibilitylabel)
     */
    get accessibilityLabel(): string | null | undefined;
    /**
     * Accessibility text for the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/accessibilitylabel)
     */
    set accessibilityLabel(value: string | null | undefined);
    /**
     * Data that you define that's specific to an annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/data)
     */
    get data(): {};
    /**
     * Data that you define that's specific to an annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/data)
     */
    set data(data: {});
    /**
     * A Boolean value that determines whether the annotation responds to user interaction.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/enabled)
     */
    get enabled(): boolean;
    /**
     * A Boolean value that determines whether the annotation responds to user interaction.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/enabled)
     */
    set enabled(value: boolean);
    /**
     * A Boolean value that determines whether the map shows an annotation's callout.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/calloutenabled)
     */
    get calloutEnabled(): boolean;
    /**
     * A Boolean value that determines whether the map shows an annotation's callout.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/calloutenabled)
     */
    set calloutEnabled(value: boolean);
    /**
     * An accessory that displays place information when a person selects a place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/selectionaccessory)
     */
    get selectionAccessory(): PlaceSelectionAccessory | null;
    /**
     * An accessory that displays place information when a person selects a place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/selectionaccessory)
     */
    set selectionAccessory(value: PlaceSelectionAccessory | null);
    /**
     * An offset that changes the selection accessory's default anchor point.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/selectionaccessoryoffset)
     */
    get selectionAccessoryOffset(): DOMPoint | undefined;
    /**
     * An offset that changes the selection accessory's default anchor point.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/selectionaccessoryoffset)
     */
    set selectionAccessoryOffset(value: DOMPoint | undefined);
    /**
     * A Boolean value that indicates whether the map shows the annotation in a selected state.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/selected)
     */
    get selected(): boolean;
    /**
     * A Boolean value that indicates whether the map shows the annotation in a selected state.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/selected)
     */
    set selected(value: boolean);
    /**
     * A Boolean value that determines whether the framework animates the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/animates)
     */
    get animates(): boolean;
    /**
     * A Boolean value that determines whether the framework animates the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/animates)
     */
    set animates(value: boolean);
    /**
     * An offset that changes the annotation's default anchor point.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/anchoroffset)
     */
    get anchorOffset(): DOMPoint;
    /**
     * An offset that changes the annotation's default anchor point.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/anchoroffset)
     */
    set anchorOffset(value: DOMPoint);
    /**
     * An offset that changes the annotation callout's default placement.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/calloutoffset)
     */
    get calloutOffset(): DOMPoint | undefined;
    /**
     * An offset that changes the annotation callout's default placement.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/calloutoffset)
     */
    set calloutOffset(value: DOMPoint | undefined);
    /**
     * A delegate that enables you to customize the annotation's callout.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/callout)
     */
    get callout(): AnnotationCalloutDelegate | null;
    /**
     * A delegate that enables you to customize the annotation's callout.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/callout)
     */
    set callout(callout: AnnotationCalloutDelegate | null);
    /**
     * A Boolean value that determines whether the user can drag the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/draggable)
     */
    get draggable(): boolean;
    /**
     * A Boolean value that determines whether the user can drag the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/draggable)
     */
    set draggable(value: boolean);
    /**
     * The desired dimensions of the annotation, in CSS pixels.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/size)
     */
    get size(): Size | undefined;
    /**
     * The desired dimensions of the annotation, in CSS pixels.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/size)
     */
    set size(value: Size);
    /**
     * A numeric hint that the map uses to prioritize how it displays annotations.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/displaypriority-data.property)
     */
    get displayPriority(): number;
    /**
     * A numeric hint that the map uses to prioritize how it displays annotations.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/displaypriority-data.property)
     */
    set displayPriority(value: number);
    /**
     * A mode that determines the shape of the collision frame.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/collisionmode-data.property)
     */
    get collisionMode(): CollisionMode;
    /**
     * A mode that determines the shape of the collision frame.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/collisionmode-data.property)
     */
    set collisionMode(value: CollisionMode);
    /**
     * An identifier for grouping annotations into the same cluster.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/clusteringidentifier)
     */
    get clusteringIdentifier(): string | null;
    /**
     * An identifier for grouping annotations into the same cluster.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/clusteringidentifier)
     */
    set clusteringIdentifier(value: string | null);
    /**
     * Spacing to add around the annotation when showing items.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/padding)
     */
    get padding(): Padding;
    /**
     * Spacing to add around the annotation when showing items.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/padding)
     */
    set padding(value: Padding);
    /**
     * An array of annotations that the framework groups together in a cluster.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotation/memberannotations)
     */
    get memberAnnotations(): Annotation[] | undefined;
}

/**
 * Methods for customizing the behavior and appearance of an annotation callout.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate)
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
     */
    calloutShouldAppearForAnnotation?(annotation: Annotation): boolean;
    /**
     * Determines whether the callout animates.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutshouldanimateforannotation)
     *
     * @param annotation The annotation for the callout.
     * @returns A Boolean value that determines whether the callout animates.
     */
    calloutShouldAnimateForAnnotation?(annotation: Annotation): boolean;
    /**
     * Returns a CSS animation to use when the callout appears.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutappearanceanimationforannotation)
     *
     * @param annotation The annotation for the callout.
     * @returns A CSS animation to use when the callout appears.
     */
    calloutAppearanceAnimationForAnnotation?(annotation: Annotation): string;
    /**
     * Returns custom content for the callout bubble.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutcontentforannotation)
     *
     * @param annotation The annotation for the callout.
     * @returns An HTML element with custom content for the callout bubble.
     */
    calloutContentForAnnotation?(annotation: Annotation): HTMLElement;
    /**
     * Returns an element representing a custom callout.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutelementforannotation)
     *
     * @param annotation The annotation for the callout.
     * @returns An HTML element representing a custom callout.
     */
    calloutElementForAnnotation?(annotation: Annotation): HTMLElement;
    /**
     * Returns an element to use as a custom accessory on the left side of the callout content area.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutleftaccessoryforannotation)
     *
     * @param annotation The annotation for the callout.
     * @returns An element to use as a custom accessory on the left side of the callout content area.
     */
    calloutLeftAccessoryForAnnotation?(annotation: Annotation): HTMLElement;
    /**
     * Returns an element to use as a custom accessory on the right side of the callout content area.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/calloutrightaccessoryforannotation)
     *
     * @param annotation The annotation for the callout.
     * @returns An element to use as a custom accessory on the right side of the callout content area.
     */
    calloutRightAccessoryForAnnotation?(annotation: Annotation): HTMLElement;
}

/**
 * An object that contains options for creating annotation features.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions)
 */
export interface AnnotationConstructorOptions {
    /**
     * Sets the element of the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/element)
     */
    element?: HTMLElement;
    /**
     * Sets the annotation's map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/map)
     */
    map?: Map;
    /**
     * Sets the coordinate of the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/coordinate)
     */
    coordinate?: Coordinate;
    /**
     * A Place ID that uniquely identifies a feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/id)
     */
    id?: string;
    /**
     * An object that allows a custom annotation to potentially supersede a point-of-interest at the same map coordinates.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/place)
     */
    place?: Place | SearchAutocompleteResult;
    /**
     * The text to display in the annotation's callout.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/title)
     */
    title?: string;
    /**
     * The text to display as a subtitle on the second line of an annotation's callout.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/subtitle)
     */
    subtitle?: string;
    /**
     * Data that you define and assign to the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/data)
     */
    data?: object;
    /**
     * Accessibility text for the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/accessibilitylabel)
     */
    accessibilityLabel?: string;
    /**
     * The offset, in CSS pixels, of the element from the bottom center.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/anchoroffset)
     */
    anchorOffset?: DOMPoint;
    /**
     * The offset, in CSS pixels, of a callout from the top center of the element.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/calloutoffset)
     */
    calloutOffset?: DOMPoint;
    /**
     * The desired dimensions of the annotation, in CSS pixels.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/size)
     */
    size?: Size;
    /**
     * A delegate that enables you to customize the annotation's callout.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/callout)
     */
    callout?: AnnotationCalloutDelegate | null;
    /**
     * The accessory that displays place information when a person selects a place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/selectionaccessory)
     */
    selectionAccessory?: PlaceSelectionAccessory | null;
    /**
     * The offset that changes the selection accessory's default anchor point.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/selectionaccessoryoffset)
     */
    selectionAccessoryOffset?: DOMPoint;
    /**
     * A Boolean value that determines whether the annotation is visible or hidden.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/visible)
     */
    visible?: boolean;
    /**
     * A Boolean value that determines whether the annotation responds to user interaction.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/enabled)
     */
    enabled?: boolean;
    /**
     * A Boolean value that determines whether the map displays the annotation in a selected state.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/selected)
     */
    selected?: boolean;
    /**
     * A Boolean value that determines whether the map shows a callout.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/calloutenabled)
     */
    calloutEnabled?: boolean;
    /**
     * A Boolean value that determines whether the map animates the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/animates)
     */
    animates?: boolean;
    /**
     * A CSS animation that runs when the annotation appears on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/appearanceanimation)
     */
    appearanceAnimation?: string;
    /**
     * A mode that determines the shape of the collision frame.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/collisionmode)
     */
    collisionMode?: CollisionMode;
    /**
     * Spacing to add around the annotation when showing items.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/padding)
     */
    padding?: Padding;
    /**
     * A Boolean value that determines whether the user can drag the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/draggable)
     */
    draggable?: boolean;
    /**
     * A hint the map uses to prioritize displaying the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/displaypriority)
     */
    displayPriority?: number;
    /**
     * An identifier for grouping annotations into the same cluster.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/clusteringidentifier)
     */
    clusteringIdentifier?: string | null;
}

/**
 * An event that occurs when someone drags an annotation.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationdragevent)
 */
export class AnnotationDragEvent extends MapKitEvent {
    /**
     * The coordinate of the annotation while someone drags it.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/annotationdragevent/coordinate)
     */
    readonly coordinate: Coordinate;
}

/**
 * A rectangular area on a map, which coordinates of the rectangle's northeast and southwest corners define.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/boundingregion)
 */
export class BoundingRegion {
    /**
     * The north latitude of the bounding region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/boundingregion/northlatitude)
     */
    northLatitude: number;
    /**
     * The east longitude of the bounding region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/boundingregion/eastlongitude)
     */
    eastLongitude: number;
    /**
     * The south latitude of the bounding region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/boundingregion/southlatitude)
     */
    southLatitude: number;
    /**
     * The west longitude of the bounding region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/boundingregion/westlongitude)
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
     */
    copy(): BoundingRegion;
    /**
     * Returns a string representation of the bounding region object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/boundingregion/tostring)
     *
     * @returns A string representation of the bounding region object.
     */
    toString(): string;
    /**
     * Returns the coordinate region that corresponds to the calling bounding region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/boundingregion/tocoordinateregion)
     *
     * @returns A {@link CoordinateRegion} that corresponds to the calling {@link BoundingRegion}.
     */
    toCoordinateRegion(): CoordinateRegion;
}

/**
 * An object literal that contains information defining an area on the map.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/cameraboundarydescription)
 */
interface CameraBoundaryDescription {
    /**
     * A rectangular area on a map, defined by coordinates of the rectangle's northeast and southwest corners.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/cameraboundarydescription/region)
     */
    region: CoordinateRegion;
    /**
     * A rectangular area on a two-dimensional map projection.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/cameraboundarydescription/maprect)
     */
    mapRect: MapRect;
}

/**
 * A minimum and maximum camera distance, in meters, from the center of the map.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/camerazoomrange)
 */
export class CameraZoomRange {
    /**
     * Constructs an instance of a camera zoom range object with no minimum or maximum camera distance.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/camerazoomrange/camerazoomrangeconstructor)
     */
    constructor();
    /**
     * Creates an instance of a camera zoom range object with an object literal.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/camerazoomrange/camerazoomrangeconstructor1)
     *
     * @param rangeParams Options for creating a camera zoom range.
     */
    constructor(rangeParams: CameraZoomRangeConstructorOptions);
    /**
     * Creates an instance of a camera zoom range object with the specified numeric arguments that specify minimum and maximum camera distances.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/camerazoomrange/camerazoomrangeconstructor2)
     *
     * @param min The minimum camera distance in meters.
     * @param max The maximum camera distance in meters.
     */
    constructor(min: number, max: number);
    /**
     * The minimum allowed distance of the camera from the center of the map in meters.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/camerazoomrange/mincameradistance)
     */
    get minCameraDistance(): number;
    /**
     * The maximum allowed distance of the camera from the center of the map in meters.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/camerazoomrange/maxcameradistance)
     */
    get maxCameraDistance(): number;
    /**
     * Returns a copy of the camera zoom region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/camerazoomrange/copy)
     *
     * @returns A copy of the camera zoom region.
     */
    copy(): CameraZoomRange;
}

/**
 * Initialization options for the camera zoom range.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/camerazoomrangeconstructoroptions)
 */
export interface CameraZoomRangeConstructorOptions {
    /**
     * The minimum allowed distance of the camera from the center of the map in meters.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/camerazoomrangeconstructoroptions/mincameradistance)
     */
    minCameraDistance?: number;
    /**
     * The maximum allowed distance of the camera from the center of the map in meters.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/camerazoomrangeconstructoroptions/maxcameradistance)
     */
    maxCameraDistance?: number;
}

/**
 * A circular overlay with a configurable radius that centers on a specific geographic coordinate.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/circleoverlay)
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
     */
    get coordinate(): Coordinate;
    /**
     * The coordinate of the circle overlay's center.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/circleoverlay/coordinate)
     */
    set coordinate(coordinate: Coordinate);
    /**
     * The circle overlay's radius, in meters.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/circleoverlay/radius)
     */
    get radius(): number;
    /**
     * The circle overlay's radius, in meters.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/circleoverlay/radius)
     */
    set radius(radius: number);
}

/**
 * An annotation type that groups multiple annotations together.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/clusterannotation)
 */
declare class ClusterAnnotation extends MarkerAnnotation {
    /**
     * An array of annotations that the framework grouped together in a cluster.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/clusterannotation/memberannotations)
     */
    get memberAnnotations(): Annotation[];
}

/**
 * Constants that indicate whether an annotation collides and how to interpret the collision-frame rectangle of an annotation view.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/collisionmode)
 */
declare const CollisionMode: Readonly<{
    /**
     * A constant indicating that the map should use a full collision rectangle for detecting collisions.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/collisionmode/rectangle)
     */
    readonly Rectangle: "rectangle";
    /**
     * A constant indicating that the map should use a circle inscribed in the collision frame rectangle to determine collisions.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/collisionmode/circle)
     */
    readonly Circle: "circle";
    /**
     * A constant that indicates the annotation doesn't collide with other annotations.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/collisionmode/none)
     */
    readonly None: "none";
}>;

/**
 * A type alias that represents the values of the collision mode enumeration.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/collisionmode/collisionmode)
 */
type CollisionMode = (typeof CollisionMode)[keyof typeof CollisionMode];

/**
 * Constants that indicate the color scheme of the map or a place detail.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/colorscheme)
 */
declare const ColorScheme: Readonly<{
    /**
     * A constant indicating a dark color scheme.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/colorscheme/dark)
     */
    readonly Dark: "dark";
    /**
     * A constant indicating a light color scheme.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/colorscheme/light)
     */
    readonly Light: "light";
    /**
     * A constant indicating a color scheme that follows the current system setting.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/colorscheme/adaptive)
     */
    readonly Adaptive: "adaptive";
}>;

/**
 * A type alias that represents the values of the color scheme enumeration.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/colorscheme/colorscheme)
 */
type ColorScheme = (typeof ColorScheme)[keyof typeof ColorScheme];

/**
 * Options that control the behavior of Look Around views.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/commonlookaroundoptions)
 */
export interface CommonLookAroundOptions {
    /**
     * The values that define content padding within the Look Around view frame.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/commonlookaroundoptions/padding)
     */
    padding?: Padding;
    /**
     * A Boolean value that indicates whether someone can navigate inside the Look Around view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/commonlookaroundoptions/isnavigationenabled)
     */
    isNavigationEnabled?: boolean;
    /**
     * A Boolean value that indicates whether someone can scroll the Look Around view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/commonlookaroundoptions/iszoomenabled)
     */
    isZoomEnabled?: boolean;
    /**
     * A Boolean value that indicates whether someone can scroll the Look Around view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/commonlookaroundoptions/isscrollenabled)
     */
    isScrollEnabled?: boolean;
    /**
     * A Boolean value that indicates whether the Look Around view display road labels.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/commonlookaroundoptions/showsroadlabels)
     */
    showsRoadLabels?: boolean;

    /**
     * A Boolean value that indicates whether the Look Around view display points of interest (POIs).
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/commonlookaroundoptions/showspointsofinterest)
     */
    showsPointsOfInterest?: boolean;
    /**
     * A Boolean value that indicates whether someone can scroll the Look Around view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/commonlookaroundoptions/opendialog)
     */
    openDialog?: boolean;
}

/**
 * Values that represent the status of a configuration change.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/configurationchangestatus)
 */
declare const ConfigurationChangeStatus: Readonly<{
    /**
     * A status value that indicates the initialization of the configuration is successful.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/configurationchangestatus/initialized)
     */
    readonly Initialized: "Initialized";
    /**
     * A status value that indicates the configuration refresh is successful.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/configurationchangestatus/refreshed)
     */
    readonly Refreshed: "Refreshed";
}>;

/**
 * A type alias that represents the values of the configuration change status enumeration.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/configurationchangestatus/configurationchangestatus)
 */
type ConfigurationChangeStatus = (typeof ConfigurationChangeStatus)[keyof typeof ConfigurationChangeStatus];

/**
 * A value that represents the status of a configuration error.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/configurationerrorstatus)
 */
declare const ConfigurationErrorStatus: Readonly<{
    /**
     * An error status value that indicates the service returned a bad request response when initializing.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/configurationerrorstatus/badrequest)
     */
    readonly BadRequest: "Bad Request";
    /**
     * An error status that indicates the provided authorization token is invalid.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/configurationerrorstatus/unauthorized)
     */
    readonly Unauthorized: "Unauthorized";
    /**
     * An error status that indicates the Maps ID for the authorization token provided exceeded its allowed daily usage.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/configurationerrorstatus/toomanyrequests)
     */
    readonly TooManyRequests: "Too Many Requests";
    /**
     * An error status that indicates the service returned a malformed response when initializing.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/configurationerrorstatus/malformedresponse)
     */
    readonly MalformedResponse: "Malformed Response";
    /**
     * An error status that indicates the service timed out when initializing.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/configurationerrorstatus/timeout)
     */
    readonly Timeout: "Timeout";
    /**
     * An error status that indicates MapKit JS encountered a network error during initialization.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/configurationerrorstatus/networkerror)
     */
    readonly NetworkError: "Network Error";
    /**
     * An error status that indicates MapKit JS encountered an unknown error during initialization.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/configurationerrorstatus/unknown)
     */
    readonly Unknown: "Unknown";
}>;

/**
 * A type alias that represents the values of the configuration error status enumeration.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/configurationerrorstatus/configurationerrorstatus)
 */
type ConfigurationErrorStatus = (typeof ConfigurationErrorStatus)[keyof typeof ConfigurationErrorStatus];

/**
 * An object representing the latitude and longitude for a point on the Earth's surface.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinate)
 */
export class Coordinate {
    /**
     * The latitude, in degrees.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinate/latitude)
     */
    latitude: number;
    /**
     * The longitude, in degrees.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinate/longitude)
     */
    longitude: number;
    /**
     * Creates a coordinate object with the specified latitude and longitude.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinate/coordinateconstructor)
     *
     * @param latitude The latitude in degrees.
     * @param longitude The longitude in degrees.
     */
    constructor(latitude?: number, longitude?: number);
    /**
     * Returns a copy of the coordinate.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinate/copy)
     *
     * @returns A copy of the coordinate.
     */
    copy(): Coordinate;
    /**
     * Returns a Boolean value indicating whether two coordinates are equal.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinate/equals)
     *
     * @param anotherCoordinate The coordinate to compare.
     * @returns A Boolean value indicating whether two coordinates are equal.
     */
    equals(anotherCoordinate: Coordinate): boolean;
    /**
     * Returns the map point that corresponds to the coordinate.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinate/tomappoint)
     *
     * @returns The map point value that corresponds to the coordinate on a two-dimensional map projection.
     */
    toMapPoint(): MapPoint;
    /**
     * Returns the unwrapped map point that corresponds to the coordinate.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinate/tounwrappedmappoint)
     *
     * @returns The unwrapped map point value that corresponds to the coordinate on a two-dimensional map projection.
     */
    toUnwrappedMapPoint(): MapPoint;
    /**
     * Returns a string representation of the coordinate object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinate/tostring)
     *
     * @returns A string representation of the coordinate object.
     */
    toString(): string;
}

/**
 * A rectangular area on a map that a center coordinate and a span define, in degrees of latitude and longitude.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinateregion)
 */
export class CoordinateRegion {
    /**
     * The center point of the region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinateregion/center)
     */
    center: Coordinate;
    /**
     * The horizontal and vertical span representing the amount of map to display.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinateregion/span)
     */
    span: CoordinateSpan;
    /**
     * A rectangular geographic region that centers around a latitude and longitude coordinate.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinateregion/coordinateregionconstructor)
     *
     * @param center A {@link Coordinate} that's the center point of the region.
     * @param span A {@link CoordinateSpan} that represents the amount of map to display. The span also defines the current zoom level that the map object uses.
     */
    constructor(center?: Coordinate, span?: CoordinateSpan);
    /**
     * Returns a copy of the calling coordinate region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinateregion/copy)
     *
     * @returns A {@link CoordinateRegion} that is a copy of the calling coordinate region.
     */
    copy(): CoordinateRegion;
    /**
     * Returns a string representation of the coordinate region object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinateregion/tostring)
     *
     * @returns A string representation of the coordinate region object.
     */
    toString(): string;
    /**
     * Returns a Boolean value indicating whether two regions are equal.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinateregion/equals)
     *
     * @param anotherRegion The region to compare.
     * @returns A Boolean value indicating whether two regions are equal.
     */
    equals(anotherRegion: CoordinateRegion): boolean;
    /**
     * Returns the bounding region that corresponds to the specified coordinate region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinateregion/toboundingregion)
     *
     * @returns A {@link BoundingRegion}.
     */
    toBoundingRegion(): BoundingRegion;
    /**
     * Returns the map rectangle that corresponds to the calling coordinate region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinateregion/tomaprect)
     *
     * @returns A {@link MapRect} that corresponds to the calling {@link CoordinateRegion}.
     */
    toMapRect(): MapRect;
    /**
     * The distance provided in meters or the longest distance derived from the center point to the region's bounding box.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinateregion/radius)
     */
    get radius(): number;
}

/**
 * The width and height of a map region.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinatespan)
 */
export class CoordinateSpan {
    /**
     * The amount of north-to-south distance (in degrees) to display for the map region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinatespan/latitudedelta)
     */
    latitudeDelta: number;
    /**
     * The amount of east-to-west distance (in degrees) to display for the map region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinatespan/longitudedelta)
     */
    longitudeDelta: number;
    /**
     * Creates a new coordinate span object with the specified latitude and longitude deltas.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinatespan/coordinatespanconstructor)
     *
     * @param latitudeDelta The amount of north-to-south distance (in degrees) to display for the map region. Unlike longitudinal distances, which vary based on the latitude, one degree of latitude is always approximately 111 km (69 mi.).
     * @param longitudeDelta The amount of east-to-west distance (in degrees) to display for the map region. The number of kilometers (or miles) that a longitude range spans varies based on the latitude. For example, one degree of longitude spans a distance of approximately 111 km (69 miles mi.) at the equator, approximately 88 km (or 55mi.) at 37º north latitude (the latitude of San Francisco), and shrinks to 0 km (0 mi.) at the poles.
     */
    constructor(latitudeDelta?: number, longitudeDelta?: number);
    /**
     * Returns a copy of the coordinate span.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinatespan/copy)
     *
     * @returns A copy of the coordinate span.
     */
    copy(): CoordinateSpan;
    /**
     * Returns a Boolean value that indicates whether two spans are equal.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinatespan/equals)
     *
     * @param anotherSpan The span to compare.
     * @returns A Boolean value that indicates whether two spans are equal.
     */
    equals(anotherSpan: CoordinateSpan): boolean;
    /**
     * Returns a string representation of the coordinate span object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/coordinatespan/tostring)
     *
     * @returns A string representation of the coordinate span object.
     */
    toString(): string;
}

/**
 * An object that provides directions and estimated travel time based on the options you provide.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directions)
 */
export class Directions extends Service {
    /**
     * Creates a directions object with options you provide.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directions/directionsconstructor)
     *
     * @param options An object containing the options for creating a directions object. This parameter is optional.
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
     */
    eta(
        request: EtaRequestOptions,
        callback: (error: Error | null, result?: EtaResponse) => void,
    ): number | undefined;
    /**
     * Retrieves directions and estimated travel time based on the specified start and end points.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directions/route)
     *
     * @param request A {@link DirectionsRequest} object that specifies details for the directions you want to retrieve.
     * @param callback A callback function that receives the directions, returned asynchronously.
     * @returns A promise that resolves with the directions response.
     */
    route(
        request: DirectionsRequest,
        callback: (error: Error | null, result?: DirectionsResponse) => void,
    ): number;
    /**
     * A static property that refers to an object that describes the available transport type values.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directions/transport)
     */
    static Transport: typeof TransportType;
}

/**
 * Options that you may provide when creating a directions object.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsconstructoroptions)
 */
export interface DirectionsConstructorOptions {
    /**
     * A language ID that determines the language for route information.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsconstructoroptions/language)
     */
    language?: string;
}

/**
 * The requested start and end points for a route, as well as the planned mode of transportation.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsrequest)
 */
export interface DirectionsRequest {
    /**
     * The starting point for routing directions.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsrequest/origin)
     */
    origin: string | Coordinate | Place;
    /**
     * The end point for routing directions.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsrequest/destination)
     */
    destination: string | Coordinate | Place;
    /**
     * The mode of transportation the directions apply to.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsrequest/transporttype)
     */
    transportType?: TransportType;
    /**
     * The departure date for the trip.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsrequest/departuredate)
     */
    departureDate?: Date;
    /**
     * The arrival date for the trip.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsrequest/arrivaldate)
     */
    arrivalDate?: Date;
    /**
     * A Boolean value that prioritizes routes to avoid tolls.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsrequest/avoidtolls)
     */
    avoidTolls?: boolean;
    /**
     * A Boolean value that indicates whether the server returns multiple routes when they're available.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsrequest/requestsalternateroutes)
     */
    requestsAlternateRoutes?: boolean;
}

/**
 * The directions and estimated travel time that return for a route.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsresponse)
 */
export interface DirectionsResponse {
    /**
     * The request object associated with the direction's response.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsresponse/request)
     */
    request: object;
    /**
     * An optional starting point for routing directions.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsresponse/origin)
     */
    origin?: Coordinate | Place;
    /**
     * An optional end point for routing directions.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsresponse/destination)
     */
    destination?: Coordinate | Place;
    /**
     * An array of route objects.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/directionsresponse/routes)
     */
    routes: Route[];
}

/**
 * Constant values that provide a hint the map uses to prioritize displaying annotations.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/displaypriority)
 */
declare const DisplayPriority: Readonly<{
    /**
     * A low display priority, with a preset value of 250 out of 1000.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/displaypriority/low)
     */
    readonly Low: 250;
    /**
     * A high display priority, with a preset value of 750 out of 1000.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/displaypriority/high)
     */
    readonly High: 750;
    /**
     * The highest display priority, with a preset value of 1000 out of 1000.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/displaypriority/required)
     */
    readonly Required: 1000;
}>;

/**
 * A type alias that represents the values of display priority enumeration.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/displaypriority/displaypriority)
 */
type DisplayPriority = (typeof DisplayPriority)[keyof typeof DisplayPriority];

/**
 * Constants indicating the system of measurement that displays on the map.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/distance)
 */
declare const Distance: Readonly<{
    /**
     * A constant indicating the measurement system is adaptive, and determined based on the map's language.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/distance/adaptive)
     */
    readonly Adaptive: "adaptive";
    /**
     * A constant indicating the measurement system is metric.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/distance/metric)
     */
    readonly Metric: "metric";
    /**
     * A constant indicating the measurement system is imperial.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/distance/imperial)
     */
    readonly Imperial: "imperial";
}>;

/**
 * A type alias that represents the values of the distance enumeration.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/distance/distance)
 */
type Distance = (typeof Distance)[keyof typeof Distance];

/**
 * The options you may provide for requesting estimated arrival times.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etarequestoptions)
 */
export interface EtaRequestOptions {
    /**
     * The starting point for estimated arrival time requests.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etarequestoptions/origin)
     */
    origin: Coordinate;
    /**
     * An array of coordinates that represent end points for estimated arrival time requests.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etarequestoptions/destinations)
     */
    destinations: Coordinate[];
    /**
     * The mode of transportation the server uses when estimating arrival times.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etarequestoptions/transporttype)
     */
    transportType?: TransportType;
    /**
     * The time of departure used in an estimated arrival time request.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etarequestoptions/departuredate)
     */
    departureDate?: Date;
    /**
     * The arrival date for the trip.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etarequestoptions/arrivaldate)
     */
    arrivalDate?: Date;
}

/**
 * The estimated arrival times for a set of destinations.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etaresponse)
 */
export interface EtaResponse {
    /**
     * The request object associated with the estimated time of arrival response.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etaresponse/request)
     */
    request: object;
    /**
     * The coordinates that represent the starting point for estimated arrival time requests.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etaresponse/origin)
     */
    origin: Coordinate;
    /**
     * An array of estimated arrival times.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etaresponse/etas)
     */
    etas: EtaResult[];
}

/**
 * The mode of transportation, distance, and travel time estimates for a single destination.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etaresult)
 */
export interface EtaResult {
    /**
     * The coordinates that represent the endpoint for estimated arrival time requests.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etaresult/destination)
     */
    destination?: Coordinate;
    /**
     * The mode of transportation used to estimate the arrival time.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etaresult/transporttype)
     */
    transportType: TransportType;
    /**
     * The route distance in meters.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etaresult/distance)
     */
    distance: number;
    /**
     * The estimated travel time in seconds, including delays due to traffic.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etaresult/expectedtraveltime)
     */
    expectedTravelTime: number;
    /**
     * The estimated travel time in seconds, excluding delays for traffic.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/etaresult/statictraveltime)
     */
    staticTravelTime: number;
}

/**
 * Constants indicating the visibility of different adaptive map features.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/featurevisibility)
 */
export const FeatureVisibility: Readonly<{
    /**
     * A constant indicating that feature visibility adapts to the current map state.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/featurevisibility/adaptive)
     */
    readonly Adaptive: "adaptive";
    /**
     * A constant indicating that the feature is always hidden.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/featurevisibility/hidden)
     */
    readonly Hidden: "hidden";
    /**
     * A constant indicating that the feature is always visible.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/featurevisibility/visible)
     */
    readonly Visible: "visible";
}>;

/**
 * A type alias that represents the values of the feature visibility enumeration.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/featurevisibility/featurevisibility)
 */
export type FeatureVisibility = (typeof FeatureVisibility)[keyof typeof FeatureVisibility];

/**
 * A geocoder that converts human-readable addresses to geographic coordinates, and vice versa.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geocoder)
 */
export class Geocoder extends Service {
    /**
     * Creates a geocoder object and sets optional language and user location properties.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geocoder/geocoderconstructor)
     *
     * @param options An object containing the options for creating a geocoder object. This parameter is optional.
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
 */
export interface GeocoderLookupOptions {
    /**
     * The language to use when displaying the lookup results.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geocoderlookupoptions/language)
     */
    language?: string;
    /**
     * A region for constraining lookup results.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geocoderlookupoptions/region)
     */
    region?: CoordinateRegion;
    /**
     * Coordinates for constraining the lookup results.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geocoderlookupoptions/coordinate)
     */
    coordinate?: Coordinate;
    /**
     * A list of countries for constraining the lookup results.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geocoderlookupoptions/limittocountries)
     */
    limitToCountries?: string;
}

/**
 * The response from a geocoder lookup or reverse lookup.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geocoderresponse)
 */
export interface GeocoderResponse {
    /**
     * An array of places that returns from a geocoder lookup or reverse lookup.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geocoderresponse/results)
     */
    results: Place[];
}

/**
 * An option that constrains reverse lookup results to a specific language.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geocoderreverselookupoptions)
 */
export interface GeocoderReverseLookupOptions {
    /**
     * The language to use when displaying the reverse lookup results.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geocoderreverselookupoptions/language)
     */
    language?: string;
}

/**
 * A delegate object that controls a GeoJSON import to override default behavior and provide custom style.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/geojsondelegate)
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
 */
declare class GeoJSONImportError extends Error {}

/**
 * A customized annotation with image resources that you provide.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/imageannotation)
 */
export class ImageAnnotation extends Annotation {
    /**
     * Creates an image annotation with a URL to its image and a coordinate.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/imageannotation/imageannotationconstructor)
     *
     * @param location The coordinate where this annotation appears.
     * @param options A hash of properties that initialize the annotation. The `options` hash needs to include {@link ImageAnnotationConstructorOptions.url}. MapKit JS displays an optional `title` and `subtitle` in a callout if they're present.
     */
    constructor(
        location: Coordinate | Place | SearchAutocompleteResult,
        options: ImageAnnotationConstructorOptions,
    );
    /**
     * An object containing URLs for the image assets in multiple resolutions.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/imageannotation/url)
     */
    get url(): ImageDelegate | ImageHashObject;
    /**
     * An object containing URLs for the image assets in multiple resolutions.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/imageannotation/url)
     */
    set url(value: ImageDelegate | ImageHashObject);
}

/**
 * An object containing options for creating an image annotation.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/imageannotationconstructoroptions)
 */
export interface ImageAnnotationConstructorOptions extends AnnotationConstructorOptions {
    /**
     * An object containing URLs for the image assets in multiple resolutions.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/imageannotationconstructoroptions/url)
     */
    url: ImageDelegate | ImageHashObject;
}

/**
 * An object you use to specify image URLs.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/imagedelegate)
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
     */
    getImageUrl(ratio: number, callback: (url?: string) => void): void;
}

/**
 * An object that defines a set of images URLs for different scales.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/imagehashobject)
 */
type ImageHashObject = {
    [ratio: string]: string | undefined;
} & {};

/**
 * A type alias that represents all objects that the framework sets in an item collection.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/item)
 */
type Item = Annotation | Overlay | ItemCollection;

/**
 * A tree structure containing annotations, overlays, and nested item collection objects.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/itemcollection)
 */
declare class ItemCollection<D = any> {
    /**
     * The raw GeoJSON data.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/itemcollection/data)
     */
    get data(): D | undefined;
    /**
     * The raw GeoJSON data.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/itemcollection/data)
     */
    set data(data: D | undefined);
    /**
     * A nested list of annotations, overlays, and other item collections.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/itemcollection/items)
     */
    get items(): Item[];
    /**
     * A nested list of annotations, overlays, and other item collections.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/itemcollection/items)
     */
    set items(items: Item | Item[] | null);
    /**
     * A flattened array of items that includes annotations and overlays.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/itemcollection/getflatteneditemlist)
     *
     * @returns A flattened array of annotations and overlays, excluding nested item collections.
     */
    getFlattenedItemList(): (Overlay | Annotation)[];
}

/**
 * A line that displays with a gradient along the length of the line.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/linegradient)
 */
export class LineGradient {
    /**
     * Creates a style that renders a gradient along the length of a line.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/linegradient/linegradientconstructor)
     *
     * @param colorStops A JavaScript object with unit distance values as keys with matched CSS colors.
     */
    constructor(colorStops?: { [key: number]: string });
    /**
     * Adds a color transition point to the gradient.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/linegradient/addcolorstop)
     *
     * @param offset The unit distance at which to add the color.
     * @param color The CSS color at the transition point.
     */
    addColorStop(offset: number, color: string): void;
    /**
     * Adds a color transition at the index point in the list of points within a polyline.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/linegradient/addcolorstopatindex)
     *
     * @param index A valid index into a polyline's {@link PolylineOverlay.points}.
     * @param color The CSS color at the index point.
     */
    addColorStopAtIndex(index: number, color: string): void;
    /**
     * Returns a string representation of the line gradient object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/linegradient/tostring)
     *
     * @returns A string representation of the line gradient.
     */
    toString(): string;
}

/**
 * Values for prioritizing the visibility of specific map features while the map is loading.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/loadpriority)
 */
declare const LoadPriority: Readonly<{
    /**
     * Prioritizes loading of the map land cover and borders, without POIs or labels.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/loadpriority/landcover)
     */
    readonly LandCover: "LandCover";
    /**
     * Prioritizes loading of the full standard map, with rendered POIs.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/loadpriority/pointsofinterest)
     */
    readonly PointsOfInterest: "PointsOfInterest";
    /**
     * Signifies no preferences over what to prioritize when loading the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/loadpriority/none)
     */
    readonly None: null;
}>;

/**
 * A type alias that represents the values of the load priority enumeration.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/loadpriority/loadpriority)
 */
type LoadPriority = (typeof LoadPriority)[keyof typeof LoadPriority];

/**
 * A view that allows someone to see a street level view of a place.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaround)
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
     */
    static ReadyStates: typeof LookAroundReadyState;

    /**
     * A Boolean value that indicates whether the Look Around view displays shows a control that allow someone to expand the Look Around view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaround/showsdialogcontrol)
     */
    get showsDialogControl(): boolean;
    /**
     * A Boolean value that indicates whether the Look Around view displays shows a control that allow someone to expand the Look Around view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaround/showsdialogcontrol)
     */
    set showsDialogControl(value: boolean);
    /**
     * A Boolean value that indicates whether the Look Around view displays a close control.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaround/showsclosecontrol)
     */
    get showsCloseControl(): boolean;
    /**
     * A Boolean value that indicates whether the Look Around view displays a close control.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaround/showsclosecontrol)
     */
    set showsCloseControl(value: boolean);
}

/**
 * Values that control the positions of a badge on a Look Around preview.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundbadgeposition)
 */
declare const LookAroundBadgePosition: Readonly<{
    /**
     * Places the badge on the top leading corner of the Look Around preview.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundbadgeposition/topleading)
     */
    readonly TopLeading: "topLeading";
    /**
     * Places the badge on the top trailing corner of the Look Around preview.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundbadgeposition/toptrailing)
     */
    readonly TopTrailing: "topTrailing";
    /**
     * Places the badge on the bottom trailing corner of the Look Around preview.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundbadgeposition/bottomtrailing)
     */
    readonly BottomTrailing: "bottomTrailing";
}>;

/**
 * A type alias that represents the values of the Look Around badge position enumeration.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundbadgeposition/lookaroundbadgeposition)
 */
type LookAroundBadgePosition = (typeof LookAroundBadgePosition)[keyof typeof LookAroundBadgePosition];

/**
 * A custom event object that contains information about the error when starting a Look Around view.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookarounderrorevent)
 */
export type LookAroundErrorEvent = CustomEvent<{
    type: LookAroundErrorType;
    message: string;
}>;

/**
 * Values that describes errors than can occur when starting a Look Around view.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookarounderrortype)
 */
export const LookAroundErrorType: Readonly<{
    /**
     * An error type that indicates the requested Look Around view isn't available.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookarounderrortype/availabilityerror)
     */
    readonly AvailabilityError: "availability-error";
    /**
     * An error type that indicates the browser doesn't support the Look Around experience.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookarounderrortype/browsererror)
     */
    readonly BrowserError: "browser-error";
    /**
     * An error type that indicates the service supporting the Look Around view isn't available.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookarounderrortype/serviceerror)
     */
    readonly ServiceError: "service-error";
    /**
     * An error type that indicates the Look Around view encountered an unknown error.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookarounderrortype/unknownerror)
     */
    readonly UnknownError: "unknown-error";
}>;

/**
 * A type alias that represents the values of the Look around error type.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookarounderrortype/lookarounderrortype)
 */
export type LookAroundErrorType = (typeof LookAroundErrorType)[keyof typeof LookAroundErrorType];

/**
 * Options for initializing a LookAround view.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundoptions)
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
     */
    static ReadyStates: typeof LookAroundReadyState;

    /**
     * A static property that allows you to access the Look Around ready state enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundpreview/badgepositions)
     */
    static BadgePositions: typeof LookAroundBadgePosition;
    /**
     * A value you set to specify the position of a badge on the Look Around preview.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundpreview/badgeposition)
     */
    get badgePosition(): LookAroundBadgePosition;
    /**
     * A value you set to specify the position of a badge on the Look Around preview.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundpreview/badgeposition)
     */
    set badgePosition(value: LookAroundBadgePosition);
    /**
     * Destroys the Look Around view and releases its resources.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundpreview/destroy)
     */
    destroy(): void;
}

/**
 * Options for initializing a LookAroundPreview object.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundpreviewoptions)
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
 */
declare const LookAroundReadyState: Readonly<{
    /**
     * A value that indicates the Look Around view is loading.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundreadystate/loading)
     */
    readonly Loading: "loading";
    /**
     * A value that indicates the Look Around view has completed loading.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundreadystate/complete)
     */
    readonly Complete: "complete";
    /**
     * A value that indicates the Look Around view encountered an error while loading.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundreadystate/error)
     */
    readonly Error: "error";
    /**
     * A value that indicates the Look Around object is destroyed.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundreadystate/destroyed)
     */
    readonly Destroyed: "destroyed";
}>;

/**
 * A type alias that represents the values of the look around ready state enumeration.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundreadystate/lookaroundreadystate)
 */
type LookAroundReadyState = (typeof LookAroundReadyState)[keyof typeof LookAroundReadyState];

/**
 * Object that represents the current location of the view.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundscene)
 */
export class LookAroundScene {
    #private;

    /**
     * Returns a copy of the Look Around scene object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/lookaroundscene/copy)
     *
     * @returns A copy of the Look Around scene object.
     */
    copy(): LookAroundScene;
}

/**
 * An embeddable interactive map that you add to a webpage.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map)
 */
declare class Map extends MapKitEventTarget {
    /**
     * Creates a map you embed on a webpage and initializes it with the constructor options you choose.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/mapconstructor)
     *
     * @param parent A DOM element, or the ID of a DOM element, to use as your map's container.
     * @param options Options that {@link MapConstructorOptions} defines for initializing the properties of your map.
     */
    constructor(
        parent?: string | HTMLElement | null,
        options?: MapConstructorOptions,
    );
    /**
     * A static property that allows you to access the map type enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/maptypes)
     */
    static MapTypes: typeof MapType;
    /**
     * A static property that allows you to access to access the look color scheme enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/colorschemes)
     */
    static ColorSchemes: typeof ColorScheme;
    /**
     * A static property that allows you to access the distance enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/distances-data.var)
     */
    static Distances: typeof Distance;
    /**
     * A static property that allows you to access the load priority enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/loadpriorities)
     */
    static LoadPriorities: typeof LoadPriority;
    /**
     * The map's inset margins.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/padding)
     */
    get padding(): Padding;
    /**
     * The map's inset margins.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/padding)
     */
    set padding(padding: Padding);
    /**
     * A Boolean value that determines whether the user can cause the map to scroll with a pointing device or with gestures on a touchscreen.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/isscrollenabled)
     */
    get isScrollEnabled(): boolean;
    /**
     * A Boolean value that determines whether the user can cause the map to scroll with a pointing device or with gestures on a touchscreen.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/isscrollenabled)
     */
    set isScrollEnabled(value: boolean);
    /**
     * A Boolean value that determines whether the user may zoom in and out on the map using pinch gestures or the zoom control.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/iszoomenabled)
     */
    get isZoomEnabled(): boolean;
    /**
     * A Boolean value that determines whether the user may zoom in and out on the map using pinch gestures or the zoom control.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/iszoomenabled)
     */
    set isZoomEnabled(value: boolean);
    /**
     * A Boolean value that determines whether to display a control for zooming in and zooming out on a map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/showszoomcontrol)
     */
    get showsZoomControl(): boolean;
    /**
     * A Boolean value that determines whether to display a control for zooming in and zooming out on a map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/showszoomcontrol)
     */
    set showsZoomControl(showsZoomControl: boolean);
    /**
     * A feature visibility setting that determines when the map displays the map's scale indicator.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/showsscale)
     */
    get showsScale(): FeatureVisibility;
    /**
     * A feature visibility setting that determines when the map displays the map's scale indicator.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/showsscale)
     */
    set showsScale(showsScale: FeatureVisibility);
    /**
     * The type of data that the map displays.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/maptype)
     */
    get mapType(): MapType;
    /**
     * The type of data that the map displays.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/maptype)
     */
    set mapType(mapType: MapType);
    /**
     * The map's color scheme when displaying standard or muted standard map types.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/colorscheme)
     */
    get colorScheme(): ColorScheme;
    /**
     * The map's color scheme when displaying standard or muted standard map types.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/colorscheme)
     */
    set colorScheme(colorScheme: ColorScheme);
    /**
     * The system of measurement that displays on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/distances-data.property)
     */
    get distances(): Distance;
    /**
     * The system of measurement that displays on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/distances-data.property)
     */
    set distances(distances: Distance);

    /**
     * A value MapKit JS uses for prioritizing the visibility of specific map features before the underlaying map tiles.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/loadpriority)
     */
    get loadPriority(): LoadPriority;
    /**
     * A value MapKit JS uses for prioritizing the visibility of specific map features before the underlaying map tiles.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/loadpriority)
     */
    set loadPriority(value: LoadPriority);
    /**
     * An array of all of the map's tile overlays.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/tileoverlays)
     */
    get tileOverlays(): TileOverlay[];
    /**
     * An array of all of the map's tile overlays.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/tileoverlays)
     */
    set tileOverlays(tileOverlays: TileOverlay[]);
    /**
     * Adds a tile overlay to the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/addtileoverlay)
     *
     * @param tileOverlay The tile overlay to add.
     * @returns void
     */
    addTileOverlay(tileOverlay: TileOverlay): TileOverlay;
    /**
     * Adds an array of tile overlays to the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/addtileoverlays)
     *
     * @param tileOverlays An array of tile overlays to add.
     * @returns The array of tile overlays that were added.
     */
    addTileOverlays(tileOverlays: TileOverlay[]): TileOverlay[];
    /**
     * Removes a tile overlay from the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/removetileoverlay)
     *
     * @param tileOverlay The tile overlay to remove.
     * @returns The tile overlay that was removed.
     */
    removeTileOverlay(tileOverlay: TileOverlay): TileOverlay;
    /**
     * Removes an array of tile overlays from the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/removetileoverlays)
     *
     * @param tileOverlays An array of tile overlays to remove.
     * @returns The array of tile overlays that were removed.
     */
    removeTileOverlays(tileOverlays: TileOverlay[]): TileOverlay[];
    /**
     * A Boolean value that determines whether to display a control that lets users choose the map type.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/showsmaptypecontrol)
     */
    get showsMapTypeControl(): boolean;
    /**
     * A Boolean value that determines whether to display a control that lets users choose the map type.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/showsmaptypecontrol)
     */
    set showsMapTypeControl(showsMapTypeControl: boolean);
    /**
     * A Boolean value that determines whether the user location control is visible.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/showsuserlocationcontrol)
     */
    get showsUserLocationControl(): boolean;
    /**
     * A Boolean value that determines whether the user location control is visible.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/showsuserlocationcontrol)
     */
    set showsUserLocationControl(showsUserLocationControl: boolean);
    /**
     * A Boolean value that determines whether the map displays points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/showspointsofinterest)
     */
    get showsPointsOfInterest(): boolean;
    /**
     * A Boolean value that determines whether the map displays points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/showspointsofinterest)
     */
    set showsPointsOfInterest(showsPointsOfInterest: boolean);
    /**
     * The filter that determines the points of interest that display on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/pointofinterestfilter)
     */
    get pointOfInterestFilter(): PointOfInterestFilter | null;
    /**
     * The filter that determines the points of interest that display on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/pointofinterestfilter)
     */
    set pointOfInterestFilter(filter: PointOfInterestFilter | null);
    /**
     * The map's DOM element.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/element)
     */
    get element(): HTMLDivElement | null;
    /**
     * The map's DOM element.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/element)
     */
    set element(_: HTMLDivElement | null);
    /**
     * The visible area of the map, in map units.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/visiblemaprect)
     */
    get visibleMapRect(): MapRect;
    /**
     * The visible area of the map, in map units.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/visiblemaprect)
     */
    set visibleMapRect(visibleMapRect: MapRect);
    /**
     * Changes the map's visible map rectangle to the specified map rectangle.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/setvisiblemaprectanimated)
     *
     * @param mapRect The map's new visible area, in map units.
     * @param animated A Boolean value that determines whether MapKit JS animates the visible area change. The default value is `true`.
     * @returns Returns the map object.
     */
    setVisibleMapRectAnimated(mapRect: MapRect, animated?: boolean): Map;
    /**
     * The area the map is displaying.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/region)
     */
    get region(): CoordinateRegion;
    /**
     * The area the map is displaying.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/region)
     */
    set region(region: CoordinateRegion);
    /**
     * Changes the map's region to the provided region, with optional animation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/setregionanimated)
     *
     * @param region A new {@link Map.region} for the map to display.
     * @param animated A Boolean value that determines whether MapKit JS animates the region change. The default value is `true`.
     * @returns Returns the map object.
     */
    setRegionAnimated(region: CoordinateRegion, animated?: boolean): Map;
    /**
     * A Boolean value that indicates whether map rotation is available.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/isrotationavailable)
     */
    get isRotationAvailable(): boolean | undefined;
    /**
     * A Boolean value that indicates whether map rotation is available.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/isrotationavailable)
     */
    set isRotationAvailable(_: boolean | undefined);
    /**
     * A Boolean value that determines whether the user may rotate the map using the compass control or a rotate gesture.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/isrotationenabled)
     */
    get isRotationEnabled(): boolean;
    /**
     * A Boolean value that determines whether the user may rotate the map using the compass control or a rotate gesture.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/isrotationenabled)
     */
    set isRotationEnabled(value: boolean);
    /**
     * The map's rotation, in degrees.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/rotation)
     */
    get rotation(): number;
    /**
     * The map's rotation, in degrees.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/rotation)
     */
    set rotation(rotation: number);
    /**
     * A feature visibility setting that determines when the compass is visible.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/showscompass)
     */
    get showsCompass(): FeatureVisibility;
    /**
     * A feature visibility setting that determines when the compass is visible.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/showscompass)
     */
    set showsCompass(value: FeatureVisibility);
    /**
     * Changes the map's rotation setting to the number of specified degrees.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/setrotationanimated)
     *
     * @param degrees The map's rotation, in degrees.
     * @param animated A Boolean value that determines whether the rotation change animates. The default value is `true`.
     * @returns Returns the map object.
     */
    setRotationAnimated(degrees: number, animated?: boolean): Map | undefined;
    /**
     * The map coordinate at the center of the map view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/center)
     */
    get center(): Coordinate;
    /**
     * The map coordinate at the center of the map view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/center)
     */
    set center(center: Coordinate);
    /**
     * Centers the map to the provided coordinate, with optional animation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/setcenteranimated)
     *
     * @param coordinate The map's new {@link Map.center}.
     * @param animated A Boolean value that determines whether MapKit JS animates the center change. The default value is `true`.
     * @returns Returns the map object.
     */
    setCenterAnimated(coordinate: Coordinate, animated?: boolean): Map;
    /**
     * The minimum and maximum distances of the camera from the map center.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/camerazoomrange)
     */
    get cameraZoomRange(): CameraZoomRange;
    /**
     * The minimum and maximum distances of the camera from the map center.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/camerazoomrange)
     */
    set cameraZoomRange(value: CameraZoomRange);
    /**
     * Changes the map's camera zoom range with an animated transition.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/setcamerazoomrangeanimated)
     *
     * @param cameraZoomRange A {@link CameraZoomRange} instance, which is an object containing the {@link CameraZoomRange.minCameraDistance} and {@link CameraZoomRange.maxCameraDistance} properties.
     * @param animated A Boolean value that determines whether MapKit JS animates the visible area change. The default value is `true`.
     * @returns Returns this map object so calls can be chained.
     */
    setCameraZoomRangeAnimated(
        cameraZoomRange: CameraZoomRange,
        animated?: boolean,
    ): Map;
    /**
     * The altitude of the camera relative to the elevation of the center of the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/cameradistance)
     */
    get cameraDistance(): number;
    /**
     * The altitude of the camera relative to the elevation of the center of the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/cameradistance)
     */
    set cameraDistance(value: number);
    /**
     * Changes the map's camera distance with an animated transition.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/setcameradistanceanimated)
     *
     * @param distance The altitude of the camera from the center of the map. It's value needs to be greater than or equal to `0`.
     * @param animated A Boolean value that determines whether MapKit JS animates the visible area change. The default value is `true`.
     * @returns Returns this map object so calls can be chained.
     */
    setCameraDistanceAnimated(distance: number, animated?: boolean): Map;
    /**
     * A constraint of the location of the center of the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/cameraboundary)
     *
     * @returns An object containing both {@link CoordinateRegion} and {@link MapRect} instances.
     */
    get cameraBoundary(): CameraBoundaryDescription | null;
    /**
     * A constraint of the location of the center of the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/cameraboundary)
     */
    set cameraBoundary(cameraBoundary: null | CoordinateRegion | MapRect);
    /**
     * Changes the map's camera boundary with an animated transition.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/setcameraboundaryanimated)
     *
     * @param cameraBoundary This can be an instance of {@link CoordinateRegion} or {@link MapRect}.
     * @param animated A Boolean value that determines whether MapKit JS animates the visible area change. The default value is `true`.
     * @returns The map instance for method chaining.
     */
    setCameraBoundaryAnimated(
        cameraBoundary: null | CoordinateRegion | MapRect,
        animated?: boolean,
    ): Map;
    /**
     * An array of all of the map's overlays.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/overlays)
     */
    get overlays(): Overlay[];
    /**
     * An array of all of the map's overlays.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/overlays)
     */
    set overlays(overlays: Overlay[]);
    /**
     * The selected overlay on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/selectedoverlay)
     */
    get selectedOverlay(): Overlay | null;
    /**
     * The selected overlay on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/selectedoverlay)
     */
    set selectedOverlay(overlay: Overlay | null);
    /**
     * Adds an overlay to the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/addoverlay)
     *
     * @param overlay The overlay to add.
     * @returns The added overlay, or `undefined` if the overlay could not be added.
     */
    addOverlay(overlay: Overlay): Overlay | undefined;
    /**
     * Adds multiple overlays to the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/addoverlays)
     *
     * @param overlays An array of overlays to add.
     * @returns The array of overlays that were added.
     */
    addOverlays(overlays: Overlay[]): Overlay[];
    /**
     * Removes an overlay from the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/removeoverlay)
     *
     * @param overlay The overlay to remove.
     * @returns The overlay that was removed.
     */
    removeOverlay(overlay: Overlay): Overlay;
    /**
     * Removes multiple overlays from the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/removeoverlays)
     *
     * @param overlays An array of overlays to remove.
     * @returns The array of overlays that were removed.
     */
    removeOverlays(overlays: Overlay[]): Overlay[];
    /**
     * Returns the topmost overlay at a given point on the webpage.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/topoverlayatpoint)
     *
     * @param point A point in the page's coordinate system, such as `new DOMPoint(event.pageX, event.pageY)` when handling a mouse event.
     * @returns The topmost overlay at the given point, or `undefined` if no overlay is found.
     */
    topOverlayAtPoint(point: DOMPoint): Overlay | undefined;
    /**
     * Returns an array of overlays at a given point on the webpage.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/overlaysatpoint)
     *
     * @param point A point in the page's coordinate system, such as `new DOMPoint(event.pageX, event.pageY)`, when handling a mouse event.
     * @returns An array of overlays at the given point.
     */
    overlaysAtPoint(point: DOMPoint): Overlay[];
    /**
     * An array of all the annotations on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/annotations)
     */
    get annotations(): Annotation[];
    /**
     * An array of all the annotations on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/annotations)
     */
    set annotations(annotations: Annotation[]);
    /**
     * The selected annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/selectedannotation)
     */
    get selectedAnnotation(): Annotation | null;
    /**
     * The selected annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/selectedannotation)
     */
    set selectedAnnotation(annotation: Annotation | null);
    /**
     * Adds an annotation to the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/addannotation)
     *
     * @param annotation The annotation to add.
     * @returns The added annotation, or `undefined` if the annotation could not be added.
     */
    addAnnotation(annotation: Annotation): Annotation | undefined;
    /**
     * Adds an array of annotations to the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/addannotations)
     *
     * @param annotations An array of annotations to add.
     * @returns The array of annotations that were added.
     */
    addAnnotations(annotations: Annotation[]): Annotation[];
    /**
     * Removes an annotation from the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/removeannotation)
     *
     * @param annotation The annotation to remove.
     * @returns The annotation that was removed.
     */
    removeAnnotation(annotation: Annotation): Annotation;
    /**
     * Removes multiple annotations from the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/removeannotations)
     *
     * @param annotations An array of annotations to remove.
     * @returns The array of annotations that were removed.
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
     */
    showItems(
        items: (Overlay | Annotation)[],
        options?: MapShowItemsOptions,
    ): (Overlay | Annotation)[];
    /**
     * Adds a collection of annotations, overlays, or other item collections to the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/additems)
     *
     * @param items An array of annotations, overlays, or the data returned from {@link mapkit.importGeoJSON} to display on the map.
     * @returns The array of items that were added to the map.
     */
    addItems(items: (Overlay | Annotation)[]): (Overlay | Annotation)[];
    /**
     * Removes a collection of annotations, overlays, or other item collections from the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/removeitems)
     *
     * @param items An array of annotations, overlays, or the data returned from {@link mapkit.importGeoJSON} to display on the map.
     * @returns The array of items that were removed from the map.
     */
    removeItems(items: (Overlay | Annotation)[]): (Overlay | Annotation)[];
    /**
     * Returns the list of annotation objects within the specified map rectangle.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/annotationsinmaprect)
     *
     * @param mapRect The portion of the map in which to look for annotations.
     * @returns An array of annotations within the specified map rectangle.
     */
    annotationsInMapRect(mapRect: MapRect): Annotation[];

    /**
     * Converts a coordinate on the map to a point in the page's coordinate system.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/convertcoordinatetopointonpage)
     *
     * @param coordinate The coordinate that displays on the map.
     * @returns A point in the page's coordinate system corresponding to the map coordinate.
     */
    convertCoordinateToPointOnPage(coordinate: Coordinate): DOMPoint;
    /**
     * Converts a point in page coordinates to the corresponding map coordinate.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/convertpointonpagetocoordinate)
     *
     * @param point A point in the page's coordinate system, such as `new DOMPoint(event.pageX, event.pageY),` when handling a mouse event.
     * @returns The map coordinate corresponding to the page point.
     */
    convertPointOnPageToCoordinate(point: DOMPoint): Coordinate;
    /**
     * A Boolean value that determines whether to show the user's location on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/showsuserlocation)
     */
    get showsUserLocation(): boolean;
    /**
     * A Boolean value that determines whether to show the user's location on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/showsuserlocation)
     */
    set showsUserLocation(value: boolean);
    /**
     * An annotation that indicates the user's location on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/userlocationannotation)
     */
    get userLocationAnnotation(): UserLocationAnnotation | null;
    /**
     * A Boolean value that determines whether to center the map on the user's location.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/tracksuserlocation)
     */
    get tracksUserLocation(): boolean;
    /**
     * A Boolean value that determines whether to center the map on the user's location.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/tracksuserlocation)
     */
    set tracksUserLocation(value: boolean);
    /**
     * The CSS color that MapKit JS uses for user interface controls on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/tintcolor)
     */
    get tintColor(): string;
    /**
     * The CSS color that MapKit JS uses for user interface controls on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/tintcolor)
     */
    set tintColor(value: string);
    /**
     * Removes the map's element from the DOM and releases internal references to the map to free up memory.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/destroy)
     */
    destroy(): void;
    /**
     * A delegate method for modifying an annotation that represents a group of annotations that the framework combines into a cluster.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/annotationforcluster)
     */
    get annotationForCluster():
        | ((clusterAnnotation: ClusterAnnotation) => Annotation | undefined)
        | null;
    /**
     * A delegate method for modifying an annotation that represents a group of annotations that the framework combines into a cluster.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/annotationforcluster)
     */
    set annotationForCluster(
        value:
            | ((clusterAnnotation: ClusterAnnotation) => Annotation | undefined)
            | null,
    );
    /**
     * An array of map features that users can select from the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/selectablemapfeatures)
     */
    get selectableMapFeatures(): MapFeatureType[];
    /**
     * An array of map features that users can select from the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/selectablemapfeatures)
     */
    set selectableMapFeatures(value: MapFeatureType[]);
    /**
     * An accessory for displaying place information when a person selects a map feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/selectablemapfeatureselectionaccessory)
     */
    get selectableMapFeatureSelectionAccessory(): PlaceSelectionAccessory | null;
    /**
     * An accessory for displaying place information when a person selects a map feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/selectablemapfeatureselectionaccessory)
     */
    set selectableMapFeatureSelectionAccessory(
        value: PlaceSelectionAccessory | null,
    );
    /**
     * The method MapKit JS calls when the framework creates a map feature annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/annotationformapfeature)
     */
    get annotationForMapFeature():
        | ((
            mapFeatureAnnotation: MapFeatureAnnotation,
        ) => Annotation | undefined)
        | undefined;
    /**
     * The method MapKit JS calls when the framework creates a map feature annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/map/annotationformapfeature)
     */
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
 */
export class MapAnnotationDragEvent extends MapKitEvent {
    /**
     * The annotation that a person dragged.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapannotationdragevent/annotation)
     */
    readonly annotation: Annotation;
    /**
     * The coordinate of the annotation while someone is dragging it.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapannotationdragevent/coordinate)
     */
    readonly coordinate?: Coordinate | undefined;
}

/**
 * An event object that the map object dispatches when someone selects or deselects an annotation.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapannotationselectionevent)
 */
export class MapAnnotationSelectionEvent extends MapKitEvent {
    /**
     * The annotation that someone selected or deselected.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapannotationselectionevent/annotation)
     */
    readonly annotation: Annotation;
}

/**
 * An object that contains options for creating a map's features.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions)
 */
export interface MapConstructorOptions {
    /**
     * A value MapKit JS uses for prioritizing the visibility of specific map features before the underlaying map tiles.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/loadpriority)
     */
    loadPriority?: LoadPriority;

    /**
     * The type of data that the map view displays.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/maptype)
     */
    mapType?: MapType;
    /**
     * The map's color scheme when displaying standard or muted standard map types.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/colorscheme)
     */
    colorScheme?: ColorScheme;

    /**
     * A Boolean value that determines whether the user may scroll the map with a pointing device or gestures on a touchscreen.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/isscrollenabled)
     */
    isScrollEnabled?: boolean;
    /**
     * A Boolean value that determines whether the user may zoom in and out on the map using pinch gestures or the zoom control.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/iszoomenabled)
     */
    isZoomEnabled?: boolean;
    /**
     * A Boolean value that determines whether the user may rotate the map using the compass control or a rotate gesture.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/isrotationenabled)
     */
    isRotationEnabled?: boolean;
    /**
     * An array of map features that someone can select from the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/selectablemapfeatures)
     */
    selectableMapFeatures?: MapFeatureType[];
    /**
     * The filter that determines the points of interest that display on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/pointofinterestfilter)
     */
    pointOfInterestFilter?: PointOfInterestFilter;
    /**
     * A Boolean value that determines whether the map displays points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/showspointsofinterest)
     */
    showsPointsOfInterest?: boolean;

    /**
     * A Boolean value that determines whether to display a control for zooming in and zooming out on a map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/showszoomcontrol)
     */
    showsZoomControl?: boolean;
    /**
     * A Boolean value that determines whether to display a control that lets users choose the map type.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/showsmaptypecontrol)
     */
    showsMapTypeControl?: boolean;
    /**
     * A Boolean value that determines whether the user location control is visible.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/showsuserlocationcontrol)
     */
    showsUserLocationControl?: boolean;
    /**
     * A feature visibility setting that allows you to determine when to display the map's scale.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/showsscale)
     */
    showsScale?: FeatureVisibility;
    /**
     * A feature visibility setting that determines when the compass is visible.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/showscompass)
     */
    showsCompass?: FeatureVisibility;
    /**
     * The map's inset margins.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/padding)
     */
    padding?: Padding;
    /**
     * Values that set the minimum and maximum distances of the camera from the map center.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/camerazoomrange)
     */
    cameraZoomRange?: CameraZoomRange;
    /**
     * The boundary of the area within which the map view's center needs to remain.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/cameraboundary)
     */
    cameraBoundary?: CoordinateRegion | MapRect | null;
    /**
     * The visible area of the map, in map units.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/visiblemaprect)
     */
    visibleMapRect?: MapRect;
    /**
     * The area the map is displaying.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/region)
     */
    region?: CoordinateRegion;
    /**
     * The map coordinate at the center of the map view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/center)
     */
    center?: Coordinate;
    /**
     * The altitude of the camera relative to the elevation of the center of the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/cameradistance)
     */
    cameraDistance?: number;
    /**
     * The map's rotation, in degrees.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/rotation)
     */
    rotation?: number;
    /**
     * An array that contains all of the map's overlays.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/overlays)
     */
    overlays?: Overlay[];
    /**
     * An array holding all the annotations on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/annotations)
     */
    annotations?: Annotation[];
    /**
     * The selected overlay on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/selectedoverlay)
     */
    selectedOverlay?: Overlay;
    /**
     * The selected annotation on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/selectedannotation)
     */
    selectedAnnotation?: Annotation;
    /**
     * The system of measurement that displays on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/distances)
     */
    distances?: Distance;
    /**
     * The CSS color that MapKit JS uses for the user interface controls on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/tintcolor)
     */
    tintColor?: string;
    /**
     * A Boolean value that determines whether to show the user's location on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/showsuserlocation)
     */
    showsUserLocation?: boolean;
    /**
     * A Boolean value that determines whether to center the map on the user's location.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/tracksuserlocation)
     */
    tracksUserLocation?: boolean;
    /**
     * An array of the map tile overlays.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/tileoverlays)
     */
    tileOverlays?: TileOverlay[];
    /**
     * Modifies cluster annotations.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/annotationforcluster)
     */
    annotationForCluster?: (
        clusterAnnotation: ClusterAnnotation,
    ) => Annotation | undefined;
    /**
     * The method MapKit JS calls when the framework creates a map feature annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/annotationformapfeature)
     */
    annotationForMapFeature?: (
        mapFeatureAnnotation: MapFeatureAnnotation,
    ) => Annotation | undefined;
}

/**
 * An object that represents a gesture the framework recognized on the map.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapevent)
 */
export class MapEvent extends MapKitEvent {
    /**
     * A DOM point with the coordinate of the event on the page.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapevent/pointonpage)
     */
    readonly pointOnPage?: DOMPoint;
    /**
     * An array of DOM event objects that list the low-level events that led to the recognized gesture.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapevent/domevents)
     */
    readonly domEvents?: Event[];
}

/**
 * An object that represents a map feature that the user selects.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotation)
 */
export class MapFeatureAnnotation extends PlaceAnnotation {
    /**
     * A value that describes the type of place the feature represents.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotation/featuretype)
     */
    get featureType(): "" | MapFeatureType;
    /**
     * Fetches the place object associated with the map feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotation/fetchplace)
     *
     * @param callback Required. The framework invokes appropriate methods on {@link FetchDelegate}, or the callback function with two arguments, `error` and `data,` on success or failure:
     * @returns The request ID that can be used to cancel the request.
     */
    fetchPlace(callback: (error: Error | null, result?: Place) => void): number;
    /**
     * The point-of-interest category of the feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotation/pointofinterestcategory)
     */
    get pointOfInterestCategory(): PointOfInterestCategory | null;
    /**
     * The map that the annotation is on.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotation/map)
     */
    get map(): Map | null;
    /**
     * A value that determines how the map handles collisions between annotations.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotation/collisionmode)
     */
    get collisionMode(): CollisionMode;
    /**
     * The title of the feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotation/title)
     */
    get title(): string | undefined;
    /**
     * The subtitle of the feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotation/subtitle)
     */
    get subtitle(): string | undefined;
    /**
     * A value that determines the behavior of the title's visibility.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotation/titlevisibility)
     */
    get titleVisibility(): FeatureVisibility;
    /**
     * A value that determines the subtitle's visibility.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotation/subtitlevisibility)
     */
    get subtitleVisibility(): FeatureVisibility;
    /**
     * The accessibility label for the annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotation/accessibilitylabel)
     */
    get accessibilityLabel(): string | null | undefined;
}

/**
 * An object that describes map feature annotation images.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotationglyphimage)
 */
declare class MapFeatureAnnotationGlyphImage implements ImageDelegate {
    /**
     * Returns the image URL of the map feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotationglyphimage/getimageurl)
     *
     * @param scale The scale factor for the image, or undefined to use the current device pixel ratio.
     * @param callback The callback function that receives the generated image URL or undefined if generation fails.
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
 */
export const MapFeatureType: Readonly<{
    /**
     * A feature that describes a point-of-interest, such as a museum, park, or cafe.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeaturetype/pointofinterest)
     */
    readonly PointOfInterest: "PointOfInterest";
    /**
     * A feature that describes a territory, such as a region or neighborhood.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeaturetype/territory)
     */
    readonly Territory: "Territory";
    /**
     * A physical feature on the Earth such as a mountain range, river, or ocean basin.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeaturetype/physicalfeature)
     */
    readonly PhysicalFeature: "PhysicalFeature";
}>;

/**
 * A type alias that represents the values of the map feature type enumeration.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapfeaturetype/mapfeaturetype)
 */
export type MapFeatureType = (typeof MapFeatureType)[keyof typeof MapFeatureType];

/**
 * The JavaScript API for embedding Apple Maps on your website.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit)
 */
export class MapKit extends MapKitEventTarget {
    /**
     * Initializes MapKit JS by providing an authorization callback function and optional language.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/init)
     *
     * @param options MapKit JS initialization options.
     */
    init(options: MapKitInitializationOptions): void;
    /**
     * The version of MapKit JS.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/version)
     */
    get version(): string;
    /**
     * The build string.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/build)
     */
    get build(): string;
    /**
     * A language ID indicating the selected language.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/language)
     */
    get language(): string;
    /**
     * A language ID indicating the selected language.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/language)
     */
    set language(language: string);

    /**
     * The list of available libraries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/libraries)
     */
    get Libraries(): string[] | undefined;
    /**
     * A string that describes the list of loaded libraries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/loadedlibraries)
     */
    get loadedLibraries(): string[] | undefined;
    /**
     * Tells MapKit JS which libraries to load.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/load)
     *
     * @param libraryNames The libraries to load
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
     */
    get FeatureVisibility(): typeof FeatureVisibility;
    /**
     * The getter to use to access the coordinate region class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/coordinateregion)
     */
    get CoordinateRegion(): typeof CoordinateRegion;
    /**
     * The getter to use to access the coordinate span class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/coordinatespan)
     */
    get CoordinateSpan(): typeof CoordinateSpan;
    /**
     * The getter to use to access the coordinate class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/coordinate)
     */
    get Coordinate(): typeof Coordinate;
    /**
     * The getter to use to access the the bounding region class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/boundingregion)
     */
    get BoundingRegion(): typeof BoundingRegion;
    /**
     * The getter to use to access the map point class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/mappoint)
     */
    get MapPoint(): typeof MapPoint;
    /**
     * The getter to use to access the map rect class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/maprect)
     */
    get MapRect(): typeof MapRect;
    /**
     * The getter to use to access the map size class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/mapsize)
     */
    get MapSize(): typeof MapSize;
    /**
     * The getter to use to access the padding class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/padding)
     */
    get Padding(): typeof Padding;
    /**
     * The getter to use to access the camera zoom range class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/camerazoomrange)
     */
    get CameraZoomRange(): typeof CameraZoomRange;
    /**
     * The getter to use to access the map feature type enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/mapfeaturetype)
     */
    get MapFeatureType(): typeof MapFeatureType;
    /**
     * The getter to use to access the style class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/style)
     */
    get Style(): typeof Style;
    /**
     * The getter to use to access the line gradient class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/linegradient)
     */
    get LineGradient(): typeof LineGradient;
    /**
     * The getter to use to access the circle overlay class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/circleoverlay)
     */
    get CircleOverlay(): typeof CircleOverlay;
    /**
     * The getter to use to access the polyline overlay class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/polylineoverlay)
     */
    get PolylineOverlay(): typeof PolylineOverlay;
    /**
     * The getter to use to access the polygon overlay class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/polygonoverlay)
     */
    get PolygonOverlay(): typeof PolygonOverlay;
    /**
     * The getter to use to access the geocoder class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/geocoder)
     */
    get Geocoder(): typeof Geocoder;
    /**
     * The getter to use to access the search class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/search)
     */
    get Search(): typeof Search;
    /**
     * The getter to use to access the place lookup class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/placelookup)
     */
    get PlaceLookup(): typeof PlaceLookup;
    /**
     * The getter to use to access the directions class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/directions)
     */
    get Directions(): typeof Directions;
    /**
     * The getter to use to access the points of interest search class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/pointsofinterestsearch)
     */
    get PointsOfInterestSearch(): typeof PointsOfInterestSearch;
    /**
     * The getter to use to access the map view class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/map)
     */
    get Map(): typeof Map;
    /**
     * An array that automatically adds and removes maps as the framework creates and destroys them.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/maps)
     */
    get maps(): Map[];
    /**
     * The getter to use to for access the annotation class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/annotation)
     */
    get Annotation(): typeof Annotation;
    /**
     * The getter to use to access the place annotation class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/placeannotation)
     */
    get PlaceAnnotation(): typeof PlaceAnnotation;

    /**
     * The getter to use to access the image annotation class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/imageannotation)
     */
    get ImageAnnotation(): typeof ImageAnnotation;
    /**
     * The getter to use to access the marker annotation class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/markerannotation)
     */
    get MarkerAnnotation(): typeof MarkerAnnotation;
    /**
     * The getter to use to access the map feature annotation class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/mapfeatureannotation)
     */
    get MapFeatureAnnotation(): typeof MapFeatureAnnotation;
    /**
     * The getter to use to access the tile overlay class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/tileoverlay)
     */
    get TileOverlay(): typeof TileOverlay;
    /**
     * The getter to use to access the place class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/place)
     */
    get Place(): typeof Place;
    /**
     * The getter to use to access the search autocomplete result class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/searchautocompleteresult)
     */
    get SearchAutocompleteResult(): typeof SearchAutocompleteResult;
    /**
     * The getter to use to access the point-of-interest category enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory)
     */
    get PointOfInterestCategory(): typeof PointOfInterestCategory;
    /**
     * The getter to use to access the point-of-interest filter class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestfilter)
     */
    get PointOfInterestFilter(): typeof PointOfInterestFilter;
    /**
     * A value that includes all point-of-interest categories.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/filterincludingallcategories)
     */
    get filterIncludingAllCategories(): PointOfInterestFilter;
    /**
     * A value that excludes all point-of-interest categories.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/filterexcludingallcategories)
     */
    get filterExcludingAllCategories(): PointOfInterestFilter;
    /**
     * The getter to use to access the address category enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/addresscategory)
     */
    get AddressCategory(): typeof AddressCategory;
    /**
     * The getter to use to access the address filter class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/addressfilter)
     */
    get AddressFilter(): typeof AddressFilter;
    /**
     * The getter to use to access the place detail class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/placedetail)
     */
    get PlaceDetail(): typeof PlaceDetail;
    /**
     * The getter to use to access the place selection accessory class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/placeselectionaccessory)
     */
    get PlaceSelectionAccessory(): typeof PlaceSelectionAccessory;
    /**
     * A list of all place detail objects that are currently active on a page.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/placedetails)
     */
    get placeDetails(): PlaceDetail[];
    /**
     * The getter to use to access the look around class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/lookaround)
     */
    get LookAround(): typeof LookAround;
    /**
     * The getter to use to access the look around preview class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/lookaroundpreview)
     */
    get LookAroundPreview(): typeof LookAroundPreview;
    /**
     * The getter to use to access the look around scene class.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/lookaroundscene)
     */
    get LookAroundScene(): typeof LookAroundScene;
    /**
     * A list of all the Look Around objects that are currently active on a page.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/lookaroundviews)
     */
    get lookAroundViews(): AbstractLookAround[];
}

/**
 * An event that represents a configuration change.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitconfigurationchangeevent)
 */
export class MapKitConfigurationChangeEvent extends MapKitEvent {
    /**
     * The status of the configuration change.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitconfigurationchangeevent/status)
     */
    readonly status: ConfigurationChangeStatus;
}

/**
 * An event that represents a configuration error.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitconfigurationerrorevent)
 */
export class MapKitConfigurationErrorEvent extends MapKitEvent {
    /**
     * The status of the configuration error.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitconfigurationerrorevent/status)
     */
    readonly status: ConfigurationErrorStatus;
    /**
     * The message associated with the configuration error.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitconfigurationerrorevent/message)
     */
    readonly message?: string;
}

/**
 * A generic MapKit JS event object.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitevent)
 */
export class MapKitEvent {
    /**
     * The object that dispatched the event.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitevent/target)
     */
    target: MapKitEventTarget | null;
    /**
     * A string that represents the type of the event.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitevent/type)
     */
    type: string;
    /**
     * A Boolean value that indicates whether the app canceled the event.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitevent/defaultprevented)
     */
    defaultPrevented: boolean;

    /**
     * Stops further propagation of the event.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitevent/stoppropagation)
     */
    stopPropagation(): void;
    /**
     * Cancels the event if it's cancelable, without stopping further propagation of the event.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitevent/preventdefault)
     */
    preventDefault(): void;
}

/**
 * A type alias that represents a function or an object that receives a MapKit event.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkiteventlistener)
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
     */
    dispatchEvent(event: MapKitEvent): boolean;
}

/**
 * Initialization options for MapKit JS.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitinitializationoptions)
 */
export interface MapKitInitializationOptions {
    /**
     * A callback function that obtains a token.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitinitializationoptions/authorizationcallback)
     *
     * @param done A function that completes the MapKit JS token request. Called after creating a new token.
     */
    authorizationCallback?: (this: null, done: (token: string) => void) => void;
    /**
     * An ID that indicates the preferred language to use when displaying map labels, controls, directions, and other text.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitinitializationoptions/language)
     */
    language?: string | null;

    /**
     * An array of libraries to load at initialization.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitinitializationoptions/libraries)
     */
    libraries?: string[];
}

/**
 * An event that occurs when the MapKit JS library is loaded or fails loading.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitlibraryloadevent)
 */
export class MapKitLibraryLoadEvent extends MapKitEvent {
    /**
     * The libraries that the framework loaded or failed to load.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapkitlibraryloadevent/libraries)
     */
    readonly libraries: string[];
}

/**
 * An event object that the map view dispatches when someone selects or deselects an overlay.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapoverlayselectionevent)
 */
export class MapOverlaySelectionEvent extends MapKitEvent {
    /**
     * The overlay that the framework selected or deselected.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapoverlayselectionevent/overlay)
     */
    readonly overlay: Overlay;
}

/**
 * A location, in map units, of a point on the Earth's surface projected onto a 2D map.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mappoint)
 */
export class MapPoint {
    /**
     * The location of the map point along the map's x-axis.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mappoint/x)
     */
    x: number;
    /**
     * The location of the map point along the map's y-axis.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mappoint/y)
     */
    y: number;
    /**
     * The z component of a map point.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mappoint/z)
     */
    z: number;
    /**
     * The w component of a map point.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mappoint/w)
     */
    w: number;
    /**
     * Creates a map location.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mappoint/mappointconstructor)
     *
     * @param x The point along the east-west axis of the map projection.
     * @param y The point along the north-south axis of the map projection.
     */
    constructor(x?: number, y?: number);
    /**
     * Returns a string representation of the map point object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mappoint/tostring)
     *
     * @returns A string representation of the map point object.
     */
    toString(): string;
    /**
     * Returns a copy of the location.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mappoint/copy)
     *
     * @returns A MapPoint object that is a copy of the map location.
     */
    copy(): MapPoint;
    /**
     * Indicates whether two map points are equal.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mappoint/equals)
     *
     * @param anotherPoint A map location to use for comparison.
     * @returns A Boolean value indicating whether two map points are equal.
     */
    equals(anotherPoint: MapPoint): boolean;
    /**
     * Converts a map point into a coordinate with latitude and longitude.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mappoint/tocoordinate)
     *
     * @returns A coordinate that contains the latitude and longitude corresponding to the location.
     */
    toCoordinate(): Coordinate;
}

/**
 * A rectangular region, in map units, of a two-dimensional map projection.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect)
 */
export class MapRect {
    /**
     * The origin point of a rectangle.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/origin)
     */
    origin: MapPoint;
    /**
     * The width and height of a rectangle, starting from the origin point.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/size)
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
     */
    constructor(x?: number, y?: number, width?: number, height?: number);
    /**
     * Returns a string representation of the map rectangle object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/tostring)
     *
     * @returns A string representation of the map rectangle object.
     */
    toString(): string;
    /**
     * Returns a copy of a map rectangle.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/copy)
     *
     * @returns A MapRect object that is a copy of the original.
     */
    copy(): MapRect;
    /**
     * Compares whether two map rectangles are equal.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/equals)
     *
     * @param anotherRect The map rectangle to use for comparison.
     * @returns A Boolean value indicating whether two map rectangles are equal.
     */
    equals(anotherRect: MapRect): boolean;
    /**
     * Returns the minimum x-axis value of a rectangle.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/minx)
     *
     * @returns The minimum x-axis value.
     */
    minX(): number;
    /**
     * Returns the minimum y-axis value of a rectangle.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/miny)
     *
     * @returns The minimum y-axis value.
     */
    minY(): number;
    /**
     * Returns the midpoint along the x-axis of a rectangle.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/midx)
     *
     * @returns The midpoint x-axis value.
     */
    midX(): number;
    /**
     * Returns the midpoint along the y-axis of a rectangle.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/midy)
     *
     * @returns The midpoint y-axis value.
     */
    midY(): number;
    /**
     * Returns the maximum x-axis value of a rectangle.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/maxx)
     *
     * @returns The maximum x-axis value.
     */
    maxX(): number;
    /**
     * Returns the maximum y-axis value of a rectangle.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/maxy)
     *
     * @returns The maximum y-axis value.
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
     */
    scale(scaleFactor: number, scaleCenter?: MapPoint): MapRect;
    /**
     * Returns the region that corresponds to a map rectangle.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maprect/tocoordinateregion)
     *
     * @returns A {@link CoordinateRegion} object that corresponds to a map rectangle.
     */
    toCoordinateRegion(): CoordinateRegion;
}

/**
 * Options that determine the map parameters to use when showing items.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapshowitemsoptions)
 */
export interface MapShowItemsOptions {
    /**
     * A Boolean value that determines whether the map animates as the map region changes to show the items.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapshowitemsoptions/animate)
     */
    animate?: boolean;
    /**
     * Spacing that the framework adds around the computed map region when showing items.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapshowitemsoptions/padding)
     */
    padding?: Padding;
    /**
     * The minimum longitudinal and latitudinal span the map displays.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapshowitemsoptions/minimumspan)
     */
    minimumSpan?: CoordinateSpan;
    /**
     * The distance from the center of the map to the camera, when showing the items.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapshowitemsoptions/cameradistance)
     */
    cameraDistance?: number;
}

/**
 * A pair of values, in map units, that define the width and height of a rectangular area of a map projection.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapsize)
 */
export class MapSize {
    /**
     * The width of the map size in map units.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapsize/width)
     */
    width: number;
    /**
     * The height of the map size in map units.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapsize/height)
     */
    height: number;
    /**
     * Creates an object containing the width and height of a projected coordinate span.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapsize/mapsizeconstructor)
     *
     * @param width The distance in map units along the east-west axis of the map projection.
     * @param height The distance in map units along the north-south axis of the map projection.
     */
    constructor(width?: number, height?: number);
    /**
     * Returns a string representation of the map size object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapsize/tostring)
     *
     * @returns A string representation of the map size object.
     */
    toString(): string;
    /**
     * Returns a copy of the map size object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapsize/copy)
     *
     * @returns A MapSize object that is a copy of the original.
     */
    copy(): MapSize;
    /**
     * Compares the sizes of two maps and indicates whether they're of equal value.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapsize/equals)
     *
     * @param anotherSize The map size to use for comparison.
     * @returns A Boolean value indicating whether the sizes of two maps are equal.
     */
    equals(anotherSize: MapSize): boolean;
}

/**
 * Constants representing the type of map to display.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maptype)
 */
declare const MapType: Readonly<{
    /**
     * A satellite image of the area.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maptype/satellite)
     */
    readonly Satellite: "satellite";
    /**
     * A satellite image of the area with road and road name layers on top.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maptype/hybrid)
     */
    readonly Hybrid: "hybrid";
    /**
     * A street map that emphasizes your data over the underlying map details.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maptype/mutedstandard)
     */
    readonly MutedStandard: "mutedStandard";
    /**
     * A street map that shows the position of all roads and some road names.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maptype/standard)
     */
    readonly Standard: "standard";
}>;

/**
 * A type alias that represents the values of map type enumeration.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/maptype/maptype)
 */
type MapType = (typeof MapType)[keyof typeof MapType];

/**
 * An event that represents a change in a person's location.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapuserlocationchangeevent)
 */
export class MapUserLocationChangeEvent extends MapKitEvent {
    /**
     * The coordinate of a person's location.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapuserlocationchangeevent/coordinate)
     */
    readonly coordinate: Coordinate;
    /**
     * The timestamp that contains the time corresponding to the location acquisition.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapuserlocationchangeevent/timestamp)
     */
    readonly timestamp: Date;
    /**
     * The current floor the user is on.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapuserlocationchangeevent/floorlevel)
     */
    readonly floorLevel?: number;
}

/**
 * An event that indicates that MapKit JS is unable to acquire a person's location.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapuserlocationerrorevent)
 */
export class MapUserLocationErrorEvent extends MapKitEvent {
    /**
     * The code indicating why location acquisition failed.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapuserlocationerrorevent/code)
     */
    readonly code: number;
    /**
     * The human-readable error message of the user location error for the developer.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/mapuserlocationerrorevent/message)
     */
    readonly message: string;
}

/**
 * An annotation that displays a balloon-shaped marker at the designated location.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation)
 */
export class MarkerAnnotation extends Annotation {
    /**
     * Creates a marker annotation at the coordinate location with provided options.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/markerannotationconstructor)
     *
     * @param location The coordinate where the annotation appears.
     * @param options A hash of properties to create the annotation with.
     */
    constructor(
        location: Coordinate | Place | SearchAutocompleteResult,
        options?: MarkerAnnotationConstructorOptions,
    );
    /**
     * The dimensions of the annotation, in CSS pixels.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/size)
     */
    get size(): Size;
    /**
     * The dimensions of the annotation, in CSS pixels.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/size)
     */
    set size(_: Size);
    /**
     * The background color of the balloon.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/color)
     */
    get color(): string;
    /**
     * The background color of the balloon.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/color)
     */
    set color(value: string);
    /**
     * The fill color of the glyph.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/glyphcolor)
     */
    get glyphColor(): string;
    /**
     * The fill color of the glyph.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/glyphcolor)
     */
    set glyphColor(value: string);
    /**
     * The image to display in the marker balloon.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/glyphimage)
     */
    get glyphImage(): ImageHashObject | ImageDelegate | null;
    /**
     * The image to display in the marker balloon.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/glyphimage)
     */
    set glyphImage(value: ImageHashObject | ImageDelegate | null);
    /**
     * The image to display in the marker balloon when the user selects the marker.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/selectedglyphimage)
     */
    get selectedGlyphImage(): ImageHashObject | ImageDelegate | null;
    /**
     * The image to display in the marker balloon when the user selects the marker.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/selectedglyphimage)
     */
    set selectedGlyphImage(value: ImageHashObject | ImageDelegate | null);
    /**
     * The text to display in the marker balloon.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/glyphtext)
     */
    get glyphText(): string;
    /**
     * The text to display in the marker balloon.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/glyphtext)
     */
    set glyphText(value: string);
    /**
     * A value that determines the behavior of the title's visibility.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/titlevisibility)
     */
    get titleVisibility(): FeatureVisibility;
    /**
     * A value that determines the behavior of the title's visibility.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/titlevisibility)
     */
    set titleVisibility(value: FeatureVisibility);
    /**
     * A value that determines the behavior of the subtitle's visibility.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/subtitlevisibility)
     */
    get subtitleVisibility(): FeatureVisibility;
    /**
     * A value that determines the behavior of the subtitle's visibility.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotation/subtitlevisibility)
     */
    set subtitleVisibility(value: FeatureVisibility);
}

/**
 * An object containing the options that create a marker annotation.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotationconstructoroptions)
 */
export interface MarkerAnnotationConstructorOptions extends AnnotationConstructorOptions {
    /**
     * The background color of the balloon.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotationconstructoroptions/color)
     */
    color?: string;
    /**
     * The fill color of the glyph.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotationconstructoroptions/glyphcolor)
     */
    glyphColor?: string;
    /**
     * The image to display in the marker balloon.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotationconstructoroptions/glyphimage)
     */
    glyphImage?: ImageDelegate | ImageHashObject | null;
    /**
     * The image to display in the balloon when the user selects the marker.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotationconstructoroptions/selectedglyphimage)
     */
    selectedGlyphImage?: ImageDelegate | ImageHashObject | null;
    /**
     * The text to display in the marker balloon.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotationconstructoroptions/glyphtext)
     */
    glyphText?: string;
    /**
     * A value that determines the behavior of the title's visibility.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotationconstructoroptions/titlevisibility)
     */
    titleVisibility?: FeatureVisibility;
    /**
     * A value that determines the behavior of the subtitle's visibility.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/markerannotationconstructoroptions/subtitlevisibility)
     */
    subtitleVisibility?: FeatureVisibility;
}

/**
 * An abstract base object that defines the methods and properties for map overlays.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlay)
 */
export abstract class Overlay extends MapKitEventTarget {
    /**
     * Style properties to apply to the overlay.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlay/style)
     */
    get style(): Style;
    /**
     * Style properties to apply to the overlay.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlay/style)
     */
    set style(style: Style);

    /**
     * The map you add the overlay to.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlay/map)
     */
    get map(): Map | null;
    /**
     * The map you add the overlay to.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlay/map)
     */
    set map(_: Map | null);
    /**
     * Custom data to associate with the overlay.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlay/data)
     */
    get data(): {};
    /**
     * Custom data to associate with the overlay.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlay/data)
     */
    set data(data: {});
    /**
     * A Boolean value that determines whether an overlay is visible.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlay/visible)
     */
    get visible(): boolean;
    /**
     * A Boolean value that determines whether an overlay is visible.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlay/visible)
     */
    set visible(visible: boolean);
    /**
     * A Boolean value that determines whether the overlay responds to user interaction.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlay/enabled)
     */
    get enabled(): boolean;
    /**
     * A Boolean value that determines whether the overlay responds to user interaction.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlay/enabled)
     */
    set enabled(value: boolean);
    /**
     * A Boolean value that indicates whether the user selects the overlay.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlay/selected)
     */
    get selected(): boolean;
    /**
     * A Boolean value that indicates whether the user selects the overlay.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlay/selected)
     */
    set selected(value: boolean);
}

/**
 * A dictionary of options that determines an overlay's data, and indicates whether it's visible, in an enabled state, and in a selected state.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlayoptions)
 */
export interface OverlayOptions {
    /**
     * A Boolean value that determines if an overlay is visible.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlayoptions/visible)
     */
    visible?: boolean;
    /**
     * A Boolean value that determines whether the overlay responds to user interaction.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlayoptions/enabled)
     */
    enabled?: boolean;
    /**
     * A Boolean value that indicates whether the overlay is in a selected state.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlayoptions/selected)
     */
    selected?: boolean;
    /**
     * Custom data to associate with the overlay.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlayoptions/data)
     */
    data?: object;
    /**
     * An object literal of style properties.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/overlayoptions/style)
     */
    style?: Style;
}

/**
 * The values that define content padding within the map view frame.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding)
 */
export class Padding {
    /**
     * The amount of padding, in CSS pixels, to inset the map from the top edge.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/top)
     */
    top: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the right edge.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/right)
     */
    right: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the bottom edge.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/bottom)
     */
    bottom: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the left edge.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/left)
     */
    left: number;
    /**
     * Creates a padding object with no inset margins.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/paddingconstructor)
     */
    constructor();
    /**
     * Creates a padding object and initializes its values with the provided object literal.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/paddingconstructor1)
     *
     * @param paddings An object literal with the keys defined in {@link PaddingConstructorOptions}, or a list of four numbers that represent inset margin values. The numbers represent the top, right, bottom, and left insets, respectively.
     */
    constructor(paddings: PaddingConstructorOptions);
    /**
     * Creates a padding object and initializes its top inset margin with the provided value.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/paddingconstructor2)
     *
     * @param top The top inset margin.
     */
    constructor(top: number);
    /**
     * Creates a padding object and initializes it with the provided top and right side values.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/paddingconstructor3)
     *
     * @param top The top inset margin.
     * @param right The right inset margin.
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
     */
    constructor(top: number, right: number, bottom: number, left: number);
    /**
     * An object that represents zero padding values.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/zero)
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
     */
    toString(): string;
    /**
     * Returns a copy of the padding object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/copy)
     *
     * @returns A copy of the padding object.
     */
    copy(): Padding;
    /**
     * Compares whether two padding values are equal.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/padding/equals)
     *
     * @param anotherPadding The padding to compare.
     * @returns A Boolean value indicating whether the padding values are equal.
     */
    equals(anotherPadding: Padding): boolean;
}

/**
 * Initial values of the edge insets for padding.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/paddingconstructoroptions)
 */
export interface PaddingConstructorOptions {
    /**
     * The amount of padding, in CSS pixels, to inset the map from the top edge.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/paddingconstructoroptions/top)
     */
    top: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the right edge.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/paddingconstructoroptions/right)
     */
    right: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the bottom edge.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/paddingconstructoroptions/bottom)
     */
    bottom: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the left edge.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/paddingconstructoroptions/left)
     */
    left: number;
}

/**
 * A place object that returns from a geocoder lookup, a reverse lookup, or a fetch request for points of interest.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place)
 */
export class Place {
    #private;
    /**
     * The Place ID referencing a feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/id)
     */
    id?: string;
    /**
     * A list of alternate Place IDs referencing a feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/alternateids)
     */
    alternateIds?: string[];

    /**
     * The category of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/pointofinterestcategory)
     */
    pointOfInterestCategory?: string;
    /**
     * The name of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/name)
     */
    name?: string;

    /**
     * The geographic region associated with the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/region)
     */
    region?: CoordinateRegion;
    /**
     * The latitude and longitude for the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/coordinate)
     */
    coordinate?: Coordinate;
    /**
     * The address of the place, formatted using its conventions of its country or region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/formattedaddress)
     */
    formattedAddress?: string;
    /**
     * The country or region associated with the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/countrycode)
     */
    countryCode?: string;

    /**
     * The country or region of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/country)
     */
    country?: string;
    /**
     * The state or province of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/administrativearea)
     */
    administrativeArea?: string;
    /**
     * The short code for the state or area.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/administrativeareacode)
     */
    administrativeAreaCode?: string;
    /**
     * The city of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/locality)
     */
    locality?: string;
    /**
     * The postal code of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/postcode)
     */
    postCode?: string;
    /**
     * The name of the area within the locality.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/sublocality)
     */
    subLocality?: string;
    /**
     * The street name at the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/thoroughfare)
     */
    thoroughfare?: string;
    /**
     * The number on the street at the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/subthoroughfare)
     */
    subThoroughfare?: string;
    /**
     * A combination of thoroughfare and subthoroughfare.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/fullthoroughfare)
     */
    fullThoroughfare?: string;
    /**
     * Common names of the area in which the place resides.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/areasofinterest)
     */
    areasOfInterest?: string[];
    /**
     * Common names for the local area or neighborhood of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/place/dependentlocalities)
     */
    dependentLocalities?: string[];
}

/**
 * An annotation for a place.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation)
 */
export class PlaceAnnotation extends MarkerAnnotation {
    /**
     * Creates a new place annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/placeannotationconstructor)
     *
     * @param coordinate The coordinate or place (containing the coordinate) at which this annotation should appear.
     * @param options The same options as MarkerAnnotation.
     */
    constructor(
        coordinate: Coordinate | Place | SearchAutocompleteResult,
        options?: MarkerAnnotationConstructorOptions,
    );
    /**
     * The annotation's element in the DOM.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/element)
     */
    get element(): HTMLElement;
    /**
     * The annotation's coordinate.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/coordinate)
     */
    get coordinate(): Coordinate;
    /**
     * A Boolean value that indicates whether the place annotation is draggable.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/draggable)
     */
    get draggable(): boolean;
    /**
     * A CSS animation that runs when the annotation appears on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/appearanceanimation)
     */
    get appearanceAnimation(): string;
    /**
     * An offset that changes the annotation's default anchor point.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/anchoroffset)
     */
    get anchorOffset(): DOMPoint;
    /**
     * The amount of spacing to add around the annotation when showing items.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/padding)
     */
    get padding(): Padding;
    /**
     * The dimensions of the annotation, in CSS pixels.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/size)
     */
    get size(): Size;
    /**
     * The glyph text for the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/glyphtext)
     */
    get glyphText(): string;
    /**
     * The color of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/color)
     */
    get color(): string;
    /**
     * The selected glyph color for the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/glyphcolor)
     */
    get glyphColor(): string;
    /**
     * The glyph image for the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/glyphimage)
     */
    get glyphImage(): MapFeatureAnnotationGlyphImage | null;
    /**
     * The selected glyph image for the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeannotation/selectedglyphimage)
     */
    get selectedGlyphImage(): MapFeatureAnnotationGlyphImage | null;
}

/**
 * An interactive view that displays information about a place.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placedetail)
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
     */
    get element(): HTMLElement;
    /**
     * The place that the place detail displays.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placedetail/place)
     */
    get place(): Place | null;
    /**
     * The place that the place detail displays.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placedetail/place)
     */
    set place(value: Place | null);
    /**
     * The color scheme when displaying a place detail.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placedetail/colorscheme)
     */
    get colorScheme(): ColorScheme;
    /**
     * The color scheme when displaying a place detail.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placedetail/colorscheme)
     */
    set colorScheme(colorScheme: ColorScheme);
    /**
     * A Boolean value that indicates whether to display the map in the place detail.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placedetail/displaysmap)
     */
    get displaysMap(): boolean;
    /**
     * A Boolean value that indicates whether to display the map in the place detail.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placedetail/displaysmap)
     */
    set displaysMap(displaysMap: boolean);
    /**
     * Terminates a place detail.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placedetail/destroy)
     */
    destroy(): void;
    /**
     * A static property that allows you to access the Look Around color scheme enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placedetail/colorschemes)
     */
    static ColorSchemes: typeof ColorScheme;
}

/**
 * Options that you may provide when constructing place detail views.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placedetailoptions)
 */
export interface PlaceDetailOptions {
    /**
     * The color scheme to use when displaying a place detail view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placedetailoptions/colorscheme)
     */
    colorScheme?: ColorScheme;
    /**
     * A Boolean value that indicates whether to display the map in the place detail view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placedetailoptions/displaysmap)
     */
    displaysMap?: boolean;
}

/**
 * An object that provides the ability to look up place information for a specified Place ID.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placelookup)
 */
export class PlaceLookup extends Service {
    /**
     * Creates a place lookup with a set of options.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placelookup/placelookupconstructor)
     *
     * @param options An object containing the options for creating a place lookup object. This parameter is optional.
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
 */
export class PlaceSelectionAccessory {
    /**
     * A static property that allows you to access the place selection accessory style enumeration.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessory/styles)
     */
    static Styles: typeof PlaceSelectionAccessoryStyle;

    /**
     * Creates a new place selection accessory.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessory/placeselectionaccessoryconstructor)
     *
     * @param options Options for creating the place selection accessory.
     * @param options.style The visual appearance style for the accessory.
     */
    constructor({ style }?: PlaceSelectionAccessoryOptions);
    /**
     * The visual appearance of the place selection accessory.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessory/style)
     */
    get style(): PlaceSelectionAccessoryStyle;
    /**
     * The visual appearance of the place selection accessory.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessory/style)
     */
    set style(value: PlaceSelectionAccessoryStyle);
}

/**
 * The options for selection accessories.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessoryoptions)
 */
export interface PlaceSelectionAccessoryOptions {
    /**
     * The visual presentation for the selection accessory.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessoryoptions/style)
     */
    style?: PlaceSelectionAccessoryStyle;
}

/**
 * The set of styles for configuring how a place selection accessory appears.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessorystyle)
 */
declare const PlaceSelectionAccessoryStyle: Readonly<{
    /**
     * A style that MapKit automatically chooses based on the size of the map view.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessorystyle/automatic)
     */
    readonly Automatic: "automatic";
    /**
     * A style that selects between a full and compact presentation based on the map's size.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessorystyle/callout)
     */
    readonly Callout: "callout";
    /**
     * A style that displays a rich, detailed presentation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessorystyle/fullcallout)
     */
    readonly FullCallout: "fullCallout";
    /**
     * A style that displays a compact, space-saving presentation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessorystyle/compactcallout)
     */
    readonly CompactCallout: "compactCallout";
    /**
     * A style that displays a caption to open in Maps.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessorystyle/openinmaps)
     */
    readonly OpenInMaps: "openInMaps";
}>;

/**
 * A type alias that represents the values of place selection accessory style enumeration.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/placeselectionaccessorystyle/placeselectionaccessorystyle)
 */
type PlaceSelectionAccessoryStyle = (typeof PlaceSelectionAccessoryStyle)[keyof typeof PlaceSelectionAccessoryStyle];

/**
 * Point-of-interest categories.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory)
 */
export const PointOfInterestCategory: Readonly<{
    /**
     * The point-of-interest category for airports.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/airport)
     */
    readonly Airport: "Airport";
    /**
     * The point-of-interest category for amusement parks.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/amusementpark)
     */
    readonly AmusementPark: "AmusementPark";
    /**
     * The point-of-interest category for animal services.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/animalservice)
     */
    readonly AnimalService: "AnimalService";
    /**
     * The point-of-interest category for aquariums.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/aquarium)
     */
    readonly Aquarium: "Aquarium";
    /**
     * The point-of-interest category for ATMs.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/atm)
     */
    readonly ATM: "ATM";
    /**
     * The point-of-interest category for automotive repair services.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/automotiverepair)
     */
    readonly AutomotiveRepair: "AutomotiveRepair";
    /**
     * The point-of-interest category for bakeries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/bakery)
     */
    readonly Bakery: "Bakery";
    /**
     * The point-of-interest category for banks.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/bank)
     */
    readonly Bank: "Bank";
    /**
     * The point-of-interest category for baseball parks.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/baseball)
     */
    readonly Baseball: "Baseball";
    /**
     * The point-of-interest category for basketball courts.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/basketball)
     */
    readonly Basketball: "Basketball";
    /**
     * The point-of-interest category for beaches.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/beach)
     */
    readonly Beach: "Beach";
    /**
     * The point-of-interest category for beauty services.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/beauty)
     */
    readonly Beauty: "Beauty";
    /**
     * The point-of-interest category for bowling lanes.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/bowling)
     */
    readonly Bowling: "Bowling";
    /**
     * The point-of-interest category for breweries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/brewery)
     */
    readonly Brewery: "Brewery";
    /**
     * The point-of-interest category for cafes.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/cafe)
     */
    readonly Cafe: "Cafe";
    /**
     * The point-of-interest category for campgrounds.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/campground)
     */
    readonly Campground: "Campground";
    /**
     * The point-of-interest category for car rentals.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/carrental)
     */
    readonly CarRental: "CarRental";
    /**
     * The point-of-interest category for castles.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/castle)
     */
    readonly Castle: "Castle";
    /**
     * The point-of-interest category for convention centers.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/conventioncenter)
     */
    readonly ConventionCenter: "ConventionCenter";
    /**
     * The point-of-interest category for distilleries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/distillery)
     */
    readonly Distillery: "Distillery";
    /**
     * The point-of-interest category for EV chargers.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/evcharger)
     */
    readonly EVCharger: "EVCharger";
    /**
     * The point-of-interest category for fairgrounds.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/fairground)
     */
    readonly Fairground: "Fairground";
    /**
     * The point-of-interest category for fire stations.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/firestation)
     */
    readonly FireStation: "FireStation";
    /**
     * The point-of-interest category for fishing locations.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/fishing)
     */
    readonly Fishing: "Fishing";
    /**
     * The point-of-interest category for fitness centers.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/fitnesscenter)
     */
    readonly FitnessCenter: "FitnessCenter";
    /**
     * The point-of-interest category for food markets, supermarkets, grocery stores, and convenience stores.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/foodmarket)
     */
    readonly FoodMarket: "FoodMarket";
    /**
     * The point-of-interest category for fortresses.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/fortress)
     */
    readonly Fortress: "Fortress";
    /**
     * The point-of-interest category for gas stations.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/gasstation)
     */
    readonly GasStation: "GasStation";
    /**
     * The point-of-interest category for go-kart services.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/gokart)
     */
    readonly GoKart: "GoKart";
    /**
     * The point-of-interest category for golf courses.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/golf)
     */
    readonly Golf: "Golf";
    /**
     * The point-of-interest category for hiking areas.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/hiking)
     */
    readonly Hiking: "Hiking";
    /**
     * The point-of-interest category for hospitals.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/hospital)
     */
    readonly Hospital: "Hospital";
    /**
     * The point-of-interest category for hotels.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/hotel)
     */
    readonly Hotel: "Hotel";
    /**
     * The point-of-interest category for kayaking locations.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/kayaking)
     */
    readonly Kayaking: "Kayaking";
    /**
     * The point-of-interest category for landmarks.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/landmark)
     */
    readonly Landmark: "Landmark";
    /**
     * The point-of-interest category for laundries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/laundry)
     */
    readonly Laundry: "Laundry";
    /**
     * The point-of-interest category for libraries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/library)
     */
    readonly Library: "Library";
    /**
     * The point-of-interest category for mailboxes.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/mailbox)
     */
    readonly Mailbox: "Mailbox";
    /**
     * The point-of-interest category for marinas.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/marina)
     */
    readonly Marina: "Marina";
    /**
     * The point-of-interest category for mini golf courses.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/minigolf)
     */
    readonly MiniGolf: "MiniGolf";
    /**
     * The point-of-interest category for movie theaters.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/movietheater)
     */
    readonly MovieTheater: "MovieTheater";
    /**
     * The point-of-interest category for museums.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/museum)
     */
    readonly Museum: "Museum";
    /**
     * The point-of-interest category for music venues.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/musicvenue)
     */
    readonly MusicVenue: "MusicVenue";
    /**
     * The point-of-interest category for national monuments.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/nationalmonument)
     */
    readonly NationalMonument: "NationalMonument";
    /**
     * The point-of-interest category for national parks.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/nationalpark)
     */
    readonly NationalPark: "NationalPark";
    /**
     * The point-of-interest category for nightlife.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/nightlife)
     */
    readonly Nightlife: "Nightlife";
    /**
     * The point-of-interest category for parks.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/park)
     */
    readonly Park: "Park";
    /**
     * The point-of-interest category for parking locations.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/parking)
     */
    readonly Parking: "Parking";
    /**
     * The point-of-interest category for pharmacies.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/pharmacy)
     */
    readonly Pharmacy: "Pharmacy";
    /**
     * The point-of-interest category for planetariums.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/planetarium)
     */
    readonly Planetarium: "Planetarium";
    /**
     * The point-of-interest category for police.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/police)
     */
    readonly Police: "Police";
    /**
     * The point-of-interest category for post offices.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/postoffice)
     */
    readonly PostOffice: "PostOffice";
    /**
     * The point-of-interest category for locations of public transportation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/publictransport)
     */
    readonly PublicTransport: "PublicTransport";
    /**
     * The point-of-interest category for restaurants.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/restaurant)
     */
    readonly Restaurant: "Restaurant";
    /**
     * The point-of-interest category for restrooms.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/restroom)
     */
    readonly Restroom: "Restroom";
    /**
     * The point-of-interest category for rock-climbing facilities.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/rockclimbing)
     */
    readonly RockClimbing: "RockClimbing";
    /**
     * The point-of-interest category for recreational vehicle (RV) parks.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/rvpark)
     */
    readonly RVPark: "RVPark";
    /**
     * The point-of-interest category for schools.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/school)
     */
    readonly School: "School";
    /**
     * The point-of-interest category for skate parks.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/skatepark)
     */
    readonly SkatePark: "SkatePark";
    /**
     * The point-of-interest category for skating facilities.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/skating)
     */
    readonly Skating: "Skating";
    /**
     * The point-of-interest category for skiing facilities.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/skiing)
     */
    readonly Skiing: "Skiing";
    /**
     * The point-of-interest category for soccer fields.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/soccer)
     */
    readonly Soccer: "Soccer";
    /**
     * The point-of-interest category for spas.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/spa)
     */
    readonly Spa: "Spa";
    /**
     * The point-of-interest category for stadiums.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/stadium)
     */
    readonly Stadium: "Stadium";
    /**
     * The point-of-interest category for stores.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/store)
     */
    readonly Store: "Store";
    /**
     * The point-of-interest category for surfing locations.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/surfing)
     */
    readonly Surfing: "Surfing";
    /**
     * The point-of-interest category for swimming facilities.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/swimming)
     */
    readonly Swimming: "Swimming";
    /**
     * The point-of-interest category for tennis facilities.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/tennis)
     */
    readonly Tennis: "Tennis";
    /**
     * The point-of-interest category for theaters.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/theater)
     */
    readonly Theater: "Theater";
    /**
     * The point-of-interest category for universities.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/university)
     */
    readonly University: "University";
    /**
     * The point-of-interest category for volleyball courts.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/volleyball)
     */
    readonly Volleyball: "Volleyball";
    /**
     * The point-of-interest category for wineries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/winery)
     */
    readonly Winery: "Winery";
    /**
     * The point-of-interest category for zoos.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/zoo)
     */
    readonly Zoo: "Zoo";
}>;

/**
 * A type alias that represents the values of point-of-interest category enumeration.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestcategory/pointofinterestcategory)
 */
export type PointOfInterestCategory = (typeof PointOfInterestCategory)[keyof typeof PointOfInterestCategory];

/**
 * A filter for determining the points of interest to include or exclude on a map or in a local search.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestfilter)
 */
export class PointOfInterestFilter {
    /**
     * Returns a Boolean value that indicates whether the filter includes the provided point-of-interest category.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestfilter/includescategory)
     *
     * @param category The point-of-interest category to test.
     * @returns `true` if the filter includes the category, `false` if it excludes the category, or `undefined` if the category is neither included nor excluded.
     */
    includesCategory(category: PointOfInterestCategory): boolean | undefined;
    /**
     * Returns a Boolean value that indicates whether the filter excludes the provided point-of-interest category.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestfilter/excludescategory)
     *
     * @param category The point-of-interest category to test.
     * @returns `true` if the filter excludes the category, `false` if it includes the category, or `undefined` if the category is neither included nor excluded.
     */
    excludesCategory(category: PointOfInterestCategory): boolean | undefined;
    /**
     * A filter that excludes all point-of-interest categories.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestfilter/excludingallcategories)
     */
    static excludingAllCategories: () => PointOfInterestFilter;
    /**
     * A filter that includes all point-of-interest categories.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestfilter/includingallcategories)
     */
    static includingAllCategories: () => PointOfInterestFilter;
    /**
     * Creates a point-of-interest filter that includes categories from a list that you provide.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointofinterestfilter/including)
     *
     * @param categories An array of point-of-interest categories to include in the filter.
     * @returns A point-of-interest filter that includes only the specified categories.
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
     */
    static excluding(
        categories: PointOfInterestCategory[],
    ): PointOfInterestFilter;
}

/**
 * An object that fetches points of interest within a specified region.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearch)
 */
export class PointsOfInterestSearch extends Service {
    /**
     * Creates a search object for fetching points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearch/pointsofinterestsearchconstructor)
     *
     * @param options An object containing the options for creating a points of interest search object. This parameter is optional.
     */
    constructor(options?: PointsOfInterestSearchConstructorOptions);
    /**
     * The center point of the request represented as latitude and longitude.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearch/center)
     */
    get center(): Coordinate | null;
    /**
     * The center point of the request represented as latitude and longitude.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearch/center)
     */
    set center(value: Coordinate | null);
    /**
     * The distance provided in meters, or the longest distance derived from the center point to the region's bounding box.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearch/radius)
     */
    get radius(): number | null;
    /**
     * The distance provided in meters, or the longest distance derived from the center point to the region's bounding box.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearch/radius)
     */
    set radius(value: number | null);
    /**
     * The region that bounds the area in which to fetch points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearch/region)
     */
    get region(): CoordinateRegion | null;
    /**
     * The region that bounds the area in which to fetch points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearch/region)
     */
    set region(value: CoordinateRegion | null);
    /**
     * A filter that lists points of interest categories to include or exclude.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearch/pointofinterestfilter)
     */
    get pointOfInterestFilter(): PointOfInterestFilter | null;
    /**
     * A filter that lists points of interest categories to include or exclude.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearch/pointofinterestfilter)
     */
    set pointOfInterestFilter(value: PointOfInterestFilter | null);
    /**
     * Fetches points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearch/search)
     *
     * @param callback A callback function or delegate object with the following parameters:
     * @param options Options that can overwrite the same options set on the property or supplied to the PointsOfInterestSearch constructor.
     * @returns The identifier of the search request, or `undefined` if the request could not be made.
     */
    search(
        callback: PointsOfInterestSearchDelegate,
        options?: PointsOfInterestSearchOptions,
    ): number | undefined;
    /**
     * The maximum distance to use from the center of the region for fetching points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearch/maxradius)
     */
    static readonly MaxRadius: number;
}

/**
 * Options that you provide when creating a points-of-interest search.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchconstructoroptions)
 */
export interface PointsOfInterestSearchConstructorOptions extends ServiceConstructorOptions {
    /**
     * Sets the center point of the request represented as latitude and longitude.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchconstructoroptions/center)
     */
    center?: Coordinate;
    /**
     * Sets the distance provided in meters, or the longest distance derived from the center point to the region's bounding box.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchconstructoroptions/radius)
     */
    radius?: number;
    /**
     * Sets the region that bounds the area in which to fetch points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchconstructoroptions/region)
     */
    region?: CoordinateRegion;
    /**
     * Sets a filter that lists points of interest categories to include or exclude.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchconstructoroptions/pointofinterestfilter)
     */
    pointOfInterestFilter?: PointOfInterestFilter;
}

/**
 * An object or callback function that MapKit JS calls when fetching points of interest.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchdelegate)
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
 */
export interface PointsOfInterestSearchOptions {
    /**
     * The center point of the request represented as latitude and longitude.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchoptions/center)
     */
    center?: Coordinate;
    /**
     * The distance provided in meters, or the longest distance derived from the center point to the region's bounding box.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchoptions/radius)
     */
    radius?: number;
    /**
     * The region that bounds the area in which to fetch points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchoptions/region)
     */
    region?: CoordinateRegion;
    /**
     * A filter that lists points of interest categories to include or exclude.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchoptions/pointofinterestfilter)
     */
    pointOfInterestFilter?: PointOfInterestFilter;
    /**
     * The language ID to use when fetching points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchoptions/language)
     */
    language?: string;
}

/**
 * The result of a request used to fetch points of interest.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchresponse)
 */
export interface PointsOfInterestSearchResponse {
    /**
     * The list of points of interest that match the request options.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchresponse/places)
     */
    places: Place[];
}

/**
 * An overlay consisting of one or more points that forms a closed shape.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/polygonoverlay)
 */
export class PolygonOverlay extends Overlay {
    /**
     * Creates a polygon overlay with an array of points and style options.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/polygonoverlay/polygonoverlayconstructor)
     *
     * @param points The points in the polygon as an array of arrays of {@link Coordinate}, or an array of {@link Coordinate}. For the latter, MapKit JS auto-wraps the array with an enclosing array.
     * @param options An optional object literal of options for initializing the polygon.
     */
    constructor(
        points: Coordinate[][] | Coordinate[],
        options?: OverlayOptions,
    );
    /**
     * One or more arrays of coordinates that define the polygon overlay shape.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/polygonoverlay/points)
     */
    get points(): Coordinate[][];
    /**
     * One or more arrays of coordinates that define the polygon overlay shape.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/polygonoverlay/points)
     */
    set points(points: Coordinate[][]);
}

/**
 * An overlay of connected line segments that don't form a closed shape.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/polylineoverlay)
 */
export class PolylineOverlay extends Overlay {
    /**
     * Creates a polyline overlay with coordinate points and style options.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/polylineoverlay/polylineoverlayconstructor)
     *
     * @param points The required points in the polyline as an array of {@link Coordinate}.
     * @param options An optional object literal of style options for initializing the polyline.
     */
    constructor(points: Coordinate[], options?: OverlayOptions);
    /**
     * An array of coordinate points that define the polyline overlay's shape.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/polylineoverlay/points)
     */
    get points(): Coordinate[];
    /**
     * An array of coordinate points that define the polyline overlay's shape.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/polylineoverlay/points)
     */
    set points(points: Coordinate[]);
}

/**
 * A value that indicates the importance of the configured region.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/regionpriority)
 */
declare const RegionPriority: Readonly<{
    /**
     * A value indicating that the results can originate from outside the specified region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/regionpriority/default)
     */
    readonly Default: "default";
    /**
     * A value indicating that no results can originate from outside the specified region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/regionpriority/required)
     */
    readonly Required: "required";
}>;

/**
 * A type alias that represents the values of region priority enumeration.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/regionpriority/regionpriority)
 */
type RegionPriority = (typeof RegionPriority)[keyof typeof RegionPriority];

/**
 * Information about a route, including step-by-step instructions, distance, and estimated travel time.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/route)
 */
declare class Route {
    /**
     * The name assigned to the route.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/route/name)
     */
    name: string;
    /**
     * The route distance, in meters.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/route/distance)
     */
    distance: number;
    /**
     * The expected travel time, in seconds.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/route/expectedtraveltime)
     */
    expectedTravelTime: number;
    /**
     * The overall route transport type.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/route/transporttype)
     */
    transportType?: string;
    /**
     * A Boolean value that indicates whether a route has tolls.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/route/hastolls)
     */
    hasTolls?: boolean;

    /**
     * An array of steps that compose the overall route.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/route/steps)
     */
    steps: RouteStep[];

    /**
     * An array of coordinate objects representing the path of the route.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/route/path)
     *
     * @deprecated Use the polyline or step properties instead.
     */
    get path(): Coordinate[][];

    /**
     * An instance of a polyline overlay that represents the path of a route.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/route/polyline)
     */
    get polyline(): PolylineOverlay;
}

/**
 * A single step of the route between the requested start and end points.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/routestep)
 */
declare class RouteStep {
    /**
     * The written instructions for following the path that the step represents.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/routestep/instructions)
     */
    instructions: string;

    /**
     * The step distance, in meters.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/routestep/distance)
     */
    distance: number;
    /**
     * The transport type of the step.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/routestep/transporttype)
     */
    transportType?: string;
    /**
     * An array of coordinate objects representing the path of the route segment.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/routestep/path)
     */
    path?: Coordinate[];
}

/**
 * An object that retrieves map-based search results for a user-entered query.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search)
 */
export class Search extends Service {
    /**
     * Creates a search object with optional initial values that you provide.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/searchconstructor)
     *
     * @param options An object containing the options for creating a search object. This parameter is optional.
     */
    constructor(options?: SearchConstructorOptions);
    /**
     * A map coordinate that provides a hint for the geographic area to search.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/coordinate)
     */
    get coordinate(): Coordinate | null;
    /**
     * A map coordinate that provides a hint for the geographic area to search.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/coordinate)
     */
    set coordinate(value: Coordinate | null);
    /**
     * A map region that provides a hint about the geographic area to search.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/region)
     */
    get region(): CoordinateRegion | null;
    /**
     * A map region that provides a hint about the geographic area to search.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/region)
     */
    set region(value: CoordinateRegion | null);
    /**
     * A region priority value that controls whether results occur outside, or strictly within, the region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/regionpriority-data.property)
     */
    get regionPriority(): RegionPriority;
    /**
     * A region priority value that controls whether results occur outside, or strictly within, the region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/regionpriority-data.property)
     */
    set regionPriority(value: RegionPriority);
    /**
     * A Boolean value that indicates whether the search results include addresses.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/includeaddresses)
     */
    get includeAddresses(): boolean;
    /**
     * A Boolean value that indicates whether the search results include addresses.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/includeaddresses)
     */
    set includeAddresses(value: boolean);
    /**
     * A Boolean value that indicates whether the search results should include points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/includepointsofinterest)
     */
    get includePointsOfInterest(): boolean;
    /**
     * A Boolean value that indicates whether the search results should include points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/includepointsofinterest)
     */
    set includePointsOfInterest(value: boolean);
    /**
     * A Boolean value that indicates whether the search results include physical features, such as mountain ranges, rivers, and ocean basins.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/includephysicalfeatures)
     */
    get includePhysicalFeatures(): boolean;
    /**
     * A Boolean value that indicates whether the search results include physical features, such as mountain ranges, rivers, and ocean basins.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/includephysicalfeatures)
     */
    set includePhysicalFeatures(value: boolean);
    /**
     * A Boolean value that indicates whether the search results include queries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/includequeries)
     */
    get includeQueries(): boolean;
    /**
     * A Boolean value that indicates whether the search results include queries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/includequeries)
     */
    set includeQueries(value: boolean);
    /**
     * An filter that lists which address components to include or exclude in search results.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/addressfilter)
     */
    get addressFilter(): AddressFilter | null;
    /**
     * An filter that lists which address components to include or exclude in search results.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/addressfilter)
     */
    set addressFilter(value: AddressFilter | null);
    /**
     * A filter to use to include or exclude point-of-interest categories.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/pointofinterestfilter)
     */
    get pointOfInterestFilter(): PointOfInterestFilter | null;
    /**
     * A filter to use to include or exclude point-of-interest categories.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/pointofinterestfilter)
     */
    set pointOfInterestFilter(value: PointOfInterestFilter | null);
    /**
     * A string that constrains search results to be within the provided countries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/limittocountries)
     */
    get limitToCountries(): string | null;
    /**
     * A string that constrains search results to be within the provided countries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/search/limittocountries)
     */
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
     */
    static RegionPriority: typeof RegionPriority;
}

/**
 * Options you provide to constrain an autocomplete request.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteoptions)
 */
export interface SearchAutocompleteOptions extends SearchOptions {
    /**
     * A Boolean value that indicates whether the search results include queries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteoptions/includequeries)
     */
    includeQueries?: boolean;
}

/**
 * An object containing the response from an autocomplete request.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresponse)
 */
export interface SearchAutocompleteResponse {
    /**
     * The query string used to perform the autocomplete request.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresponse/query)
     */
    query: string;
    /**
     * The results from an autocomplete request.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresponse/results)
     */
    results: SearchAutocompleteResult[];
}

/**
 * The result of an autocomplete query, including display lines and a coordinate.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult)
 */
export class SearchAutocompleteResult {
    /**
     * Lines of text to display to the user in an autocomplete menu.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/displaylines)
     */
    displayLines: string[];
    /**
     * The Place ID that identifies a feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/id)
     */
    id?: string;
    /**
     * A list of alternate Place IDs that identify a feature.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/alternateids)
     */
    alternateIds?: string[];

    /**
     * The coordinate of the result when it corresponds to a single place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/coordinate)
     */
    coordinate?: Coordinate;

    /**
     * The name of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/name)
     */
    name?: string | undefined;

    /**
     * The name of state or province of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/administrativearea)
     */
    administrativeArea?: string;
    /**
     * The official abbreviation for the state or area.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/administrativeareacode)
     */
    administrativeAreaCode?: string;
    /**
     * The city of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/locality)
     */
    locality?: string;
    /**
     * The postal code of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/postcode)
     */
    postCode?: string;
    /**
     * The name of the area within the locality.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/sublocality)
     */
    subLocality?: string;
    /**
     * The street name at the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/thoroughfare)
     */
    thoroughfare?: string;
    /**
     * The street number at the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/subthoroughfare)
     */
    subThoroughfare?: string;
    /**
     * A combination of the thoroughfare and subthoroughfare.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/fullthoroughfare)
     */
    fullThoroughfare?: string;
    /**
     * An array of common names of the area in which the place resides.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/areasofinterest)
     */
    areasOfInterest?: string[];
    /**
     * An array of common names for the local area or neighborhood of the place.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchautocompleteresult/dependentlocalities)
     */
    dependentLocalities?: string[];
}

/**
 * Options you provide when you create a search object.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions)
 */
export interface SearchConstructorOptions extends ServiceConstructorOptions {
    /**
     * A language ID that determines the language for the search results text.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/language)
     */
    language?: string;
    /**
     * A map coordinate that provides a hint for the geographic area to search.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/coordinate)
     */
    coordinate?: Coordinate;
    /**
     * A map region that provides a hint for the geographic area to search.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/region)
     */
    region?: CoordinateRegion;
    /**
     * A Boolean value that indicates whether the search results include addresses.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/includeaddresses)
     */
    includeAddresses?: boolean;
    /**
     * A Boolean value that indicates whether the search results should include points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/includepointsofinterest)
     */
    includePointsOfInterest?: boolean;
    /**
     * A Boolean value that indicates whether the search results include physical features, such as mountain ranges, rivers, and ocean basins.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/includephysicalfeatures)
     */
    includePhysicalFeatures?: boolean;
    /**
     * A Boolean value that indicates whether the search results include queries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/includequeries)
     */
    includeQueries?: boolean;
    /**
     * A filter used to include or exclude point-of-interest categories.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/pointofinterestfilter)
     */
    pointOfInterestFilter?: PointOfInterestFilter;
    /**
     * An address filter that lists which address components to include or exclude in search results.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/addressfilter)
     */
    addressFilter?: AddressFilter;
    /**
     * A string that constrains search results to within the provided countries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/limittocountries)
     */
    limitToCountries?: string;
    /**
     * A region priority value that controls whether results occur outside, or strictly within, the region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/regionpriority)
     */
    regionPriority?: RegionPriority;
}

/**
 * An object or callback function the framework calls when performing a search or an autocomplete request.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchdelegate)
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
 */
export interface SearchOptions {
    /**
     * A language ID that determines the language for the search result text.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchoptions/language)
     */
    language?: string;
    /**
     * A map coordinate that provides a hint for the geographic area to search.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchoptions/coordinate)
     */
    coordinate?: Coordinate;
    /**
     * A map region that provides a hint for the geographic area to search.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchoptions/region)
     */
    region?: CoordinateRegion;
    /**
     * A Boolean value that indicates whether the search results should include addresses.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchoptions/includeaddresses)
     */
    includeAddresses?: boolean;
    /**
     * A Boolean value that indicates whether the search results should include points of interest.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchoptions/includepointsofinterest)
     */
    includePointsOfInterest?: boolean;
    /**
     * A Boolean value that indicates whether the search results include physical features, such as mountain ranges, rivers, and ocean basins.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchoptions/includephysicalfeatures)
     */
    includePhysicalFeatures?: boolean;
    /**
     * A filter for including or excluding point-of-interest categories in search results.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchoptions/pointofinterestfilter)
     */
    pointOfInterestFilter?: PointOfInterestFilter;
    /**
     * An address filter that lists which address components to include or exclude in search results.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchoptions/addressfilter)
     */
    addressFilter?: AddressFilter;
    /**
     * A string that constrains search results to within the provided countries.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchoptions/limittocountries)
     */
    limitToCountries?: string;
    /**
     * A region priority value that controls whether results occur outside, or strictly within, the region.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchoptions/regionpriority)
     */
    regionPriority?: RegionPriority;
}

/**
 * The result of a search, including the original search query, the bounding region, and a list of places that match the query.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchresponse)
 */
export interface SearchResponse {
    /**
     * The query string for performing the search.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchresponse/query)
     */
    query?: string | SearchAutocompleteResult;
    /**
     * The region that encloses the places from the search results.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchresponse/boundingregion)
     */
    boundingRegion?: CoordinateRegion;
    /**
     * A list of places that match the search query.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/searchresponse/places)
     */
    places: Place[];
}

/**
 * An abstract class that provides common interfaces for services objects.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/service)
 */
export abstract class Service {
    /**
     * A Boolean value that indicates whether the request returns results near a person's location.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/service/getsuserlocation)
     */
    get getsUserLocation(): boolean;
    /**
     * A Boolean value that indicates whether the request returns results near a person's location.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/service/getsuserlocation)
     */
    set getsUserLocation(value: boolean);
    /**
     * A language ID that determines the language to use for displaying addresses.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/service/language)
     */
    get language(): string | null;
    /**
     * A language ID that determines the language to use for displaying addresses.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/service/language)
     */
    set language(value: string | null);
    /**
     * Cancels a request using the provided request ID.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/service/cancel)
     *
     * @param id Pass the integer ID. Passing an invalid ID or the ID of a completed request has no effect.
     * @returns `true` if the server cancels the pending search request.
     */
    cancel(id: number): boolean;
}

/**
 * Common options you provide when you create a service object.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/serviceconstructoroptions)
 */
export interface ServiceConstructorOptions {
    /**
     * A language identifier that determines the language for the service results text.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/serviceconstructoroptions/language)
     */
    language?: string;
    /**
     * A Boolean value that indicates whether to limit the results to the user's location, according to the web browser.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/serviceconstructoroptions/getsuserlocation)
     */
    getsUserLocation?: boolean;
}

/**
 * A structure that represents a size.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/size)
 */
export interface Size {
    /**
     * The width value of the size structure.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/size/width)
     */
    width: number;
    /**
     * The height value of the size structure.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/size/height)
     */
    height: number;
}

/**
 * A set of observable style properties for overlays, including the color and opacity of strokes and fills, and line styles.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style)
 */
export class Style {
    /**
     * Creates and initializes a style object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/styleconstructor)
     *
     * @param options A {@link StyleConstructorOptions} object of style properties.
     */
    constructor(options?: StyleConstructorOptions);
    /**
     * The stroke color of a line.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/strokecolor)
     */
    get strokeColor(): string;
    /**
     * The stroke color of a line.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/strokecolor)
     */
    set strokeColor(strokeColor: string);
    /**
     * The opacity of the stroke color.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/strokeopacity)
     */
    get strokeOpacity(): number;
    /**
     * The opacity of the stroke color.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/strokeopacity)
     */
    set strokeOpacity(strokeOpacity: number);
    /**
     * The unit distance along the line where a stroke begins.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/strokestart)
     */
    get strokeStart(): number;
    /**
     * The unit distance along the line where a stroke begins.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/strokestart)
     */
    set strokeStart(strokeStart: number);
    /**
     * The unit distance along the line where a stroke ends.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/strokeend)
     */
    get strokeEnd(): number;
    /**
     * The unit distance along the line where a stroke ends.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/strokeend)
     */
    set strokeEnd(strokeEnd: number);
    /**
     * The width of a line's stroke, in CSS pixels.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/linewidth)
     */
    get lineWidth(): number;
    /**
     * The width of a line's stroke, in CSS pixels.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/linewidth)
     */
    set lineWidth(lineWidth: number);
    /**
     * The style to use when drawing line endings.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/linecap)
     */
    get lineCap(): CanvasLineCap;
    /**
     * The style to use when drawing line endings.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/linecap)
     */
    set lineCap(lineCap: CanvasLineCap);
    /**
     * The corner style to apply when joining line segments.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/linejoin)
     */
    get lineJoin(): CanvasLineJoin;
    /**
     * The corner style to apply when joining line segments.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/linejoin)
     */
    set lineJoin(lineJoin: CanvasLineJoin);
    /**
     * An array of line and gap lengths for creating a dashed line.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/linedash)
     */
    get lineDash(): number[];
    /**
     * An array of line and gap lengths for creating a dashed line.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/linedash)
     */
    set lineDash(lineDash: number[]);
    /**
     * The number of CSS pixels to use as an offset when drawing a line's dash pattern.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/linedashoffset)
     */
    get lineDashOffset(): number;
    /**
     * The number of CSS pixels to use as an offset when drawing a line's dash pattern.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/linedashoffset)
     */
    set lineDashOffset(lineDashOffset: number);
    /**
     * The gradient to apply along the line.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/linegradient)
     */
    get lineGradient(): LineGradient | null;
    /**
     * The gradient to apply along the line.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/linegradient)
     */
    set lineGradient(lineGradient: LineGradient | null);
    /**
     * The fill color of a shape.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/fillcolor)
     */
    get fillColor(): string;
    /**
     * The fill color of a shape.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/fillcolor)
     */
    set fillColor(fillColor: string);
    /**
     * The opacity of the fill color.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/fillopacity)
     */
    get fillOpacity(): number;
    /**
     * The opacity of the fill color.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/fillopacity)
     */
    set fillOpacity(fillOpacity: number);
    /**
     * A rule for determining whether a point is inside or outside a polygon.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/fillrule)
     */
    get fillRule(): CanvasFillRule;
    /**
     * A rule for determining whether a point is inside or outside a polygon.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/fillrule)
     */
    set fillRule(fillRule: CanvasFillRule);
    /**
     * Returns a string representation of the style object.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/style/tostring)
     *
     * @returns A string representation of the style object.
     */
    toString(): string;
}

/**
 * Initial values of options for applying style to overlays.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions)
 */
export interface StyleConstructorOptions {
    /**
     * The stroke color of a line.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/strokecolor)
     */
    strokeColor?: string;
    /**
     * The opacity of the stroke color.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/strokeopacity)
     */
    strokeOpacity?: number;
    /**
     * The unit distance along the line where a stroke begins.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/strokestart)
     */
    strokeStart?: number;
    /**
     * The unit distance along the line where a stroke ends.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/strokeend)
     */
    strokeEnd?: number;
    /**
     * The width of a line's stroke, in CSS pixels.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/linewidth)
     */
    lineWidth?: number;
    /**
     * The style to use when drawing line endings.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/linecap)
     */
    lineCap?: CanvasLineCap;
    /**
     * The style to use when drawing joins between line segments.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/linejoin)
     */
    lineJoin?: CanvasLineJoin;
    /**
     * An array of line and gap lengths for creating a dashed line.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/linedash)
     */
    lineDash?: number[];
    /**
     * The number of CSS pixels to use as the offset when drawing a line's dash pattern.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/linedashoffset)
     */
    lineDashOffset?: number;
    /**
     * The gradient to apply along the line.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/linegradient)
     */
    lineGradient?: LineGradient;
    /**
     * The fill color of a shape.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/fillcolor)
     */
    fillColor?: string;
    /**
     * The opacity of the fill color.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/fillopacity)
     */
    fillOpacity?: number;
    /**
     * A rule for determining whether a point is inside or outside a polygon.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/styleconstructoroptions/fillrule)
     */
    fillRule?: CanvasFillRule;
}

/**
 * An overlay that covers an area of the map with bitmapped tiles.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlay)
 */
export class TileOverlay extends MapKitEventTarget {
    /**
     * Creates a tile overlay with a URL template and style options.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlay/tileoverlayconstructor)
     *
     * @param urlTemplate The URL template for generating tile URLs.
     * @param options A hash of properties with which to initialize the tile overlay.
     */
    constructor(
        urlTemplate: TileOverlayUrlTemplate,
        options?: TileOverlayConstructorOptions,
    );
    /**
     * A string, or callback function that returns a string, with a URL that provides the requested tile.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlay/urltemplate)
     */
    get urlTemplate(): TileOverlayUrlTemplate;
    /**
     * A string, or callback function that returns a string, with a URL that provides the requested tile.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlay/urltemplate)
     */
    set urlTemplate(urlTemplate: TileOverlayUrlTemplate);
    /**
     * The minimum zoom level for a tile overlay.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlay/minimumz)
     */
    get minimumZ(): number | null;
    /**
     * The minimum zoom level for a tile overlay.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlay/minimumz)
     */
    set minimumZ(minimumZ: number | null);
    /**
     * The maximum zoom level for a tile overlay.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlay/maximumz)
     */
    get maximumZ(): number | null;
    /**
     * The maximum zoom level for a tile overlay.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlay/maximumz)
     */
    set maximumZ(maximumZ: number | null);
    /**
     * A number that indicates a tile's opacity.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlay/opacity)
     */
    get opacity(): number;
    /**
     * A number that indicates a tile's opacity.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlay/opacity)
     */
    set opacity(opacity: number);
    /**
     * A dictionary of custom properties to use with the URL template.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlay/data)
     */
    get data(): {
        [key: string]: any;
    };
    /**
     * A dictionary of custom properties to use with the URL template.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlay/data)
     */
    set data(data: { [key: string]: any });
    /**
     * Reloads the tile overlay for the displayed map region with the latest data values.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlay/reload)
     */
    reload(): void;
}

/**
 * Attributes for initializing a tile overlay, including minimum and maximum zoom, opacity, and custom data.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlayconstructoroptions)
 */
export interface TileOverlayConstructorOptions {
    /**
     * The minimum zoom level of the overlay.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlayconstructoroptions/minimumz)
     */
    minimumZ: number;
    /**
     * The maximum zoom level of the overlay.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlayconstructoroptions/maximumz)
     */
    maximumZ: number;
    /**
     * The opacity level of the overlay.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlayconstructoroptions/opacity)
     */
    opacity: number;
    /**
     * Custom data for populating the URL template.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlayconstructoroptions/data)
     */
    data: {
        [key: string]: any;
    };
}

/**
 * An event object that notifies the developer of an error that occurred while loading tiles.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlayerrorevent)
 */
export class TileOverlayErrorEvent extends MapKitEvent {
    /**
     * The tile overlay object that dispatched the tile error event.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlayerrorevent/tileoverlay)
     */
    readonly tileOverlay: TileOverlay;
    /**
     * The URL of the tile that failed to load.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlayerrorevent/tileurl)
     */
    readonly tileUrl: string;
}

/**
 * A type that specifies the URL template for a tile overlay.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/tileoverlayurltemplate)
 */
type TileOverlayUrlTemplate =
    | string
    | ((x: number, y: number, z: number, scale: number, data: any) => string);

/**
 * The modes of transportation.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/transporttype)
 */
declare const TransportType: Readonly<{
    /**
     * A constant identifying the mode of transportation as driving.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/transporttype/automobile)
     */
    readonly Automobile: "AUTOMOBILE";
    /**
     * A constant identifying the mode of transportation as walking.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/transporttype/walking)
     */
    readonly Walking: "WALKING";
    /**
     * A constant identifying the mode of transportation as cycling.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/transporttype/cycling)
     */
    readonly Cycling: "CYCLING";
}>;

/**
 * A type alias that represents the values of transport type enumeration.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/transporttype/transporttype)
 */
type TransportType = (typeof TransportType)[keyof typeof TransportType];

/**
 * An annotation that represents someone's location.
 *
 * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/userlocationannotation)
 */
export class UserLocationAnnotation extends Annotation {
    /**
     * The coordinate of the annotation, that represents a person's location on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/userlocationannotation/coordinate)
     */
    get coordinate(): Coordinate;
    /**
     * The coordinate of the annotation, that represents a person's location on the map.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/userlocationannotation/coordinate)
     */
    set coordinate(coordinate: Coordinate);
    /**
     * A Boolean value that indicates whether someone can drag the the user location annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/userlocationannotation/draggable)
     */
    get draggable(): boolean;
    /**
     * A Boolean value that indicates whether someone can drag the the user location annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/userlocationannotation/draggable)
     */
    set draggable(_: boolean);
    /**
     * The size of the user location annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/userlocationannotation/size)
     */
    get size(): Size;
    /**
     * The size of the user location annotation.
     *
     * [Apple Developer Documentation](https://developer.apple.com/documentation/mapkitjs/userlocationannotation/size)
     */
    set size(_: Size);
}

export {};
