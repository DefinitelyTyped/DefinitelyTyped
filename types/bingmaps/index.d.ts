// Type definitions for Microsoft.Maps 8.0 (Change set e6d7cc4)
// Project: https://github.com/Microsoft/Bing-Maps-V8-TypeScript-Definitions
// Definitions by: Ricky Brundritt <https://github.com/rbrundritt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="Autosuggest.d.ts" />
/// <reference path="Clustering.d.ts" />
/// <reference path="Contour.d.ts" />
/// <reference path="DataBinning.d.ts" />
/// <reference path="Directions.d.ts" />
/// <reference path="DrawingTools.d.ts" />
/// <reference path="GeoJson.d.ts" />
/// <reference path="HeatMapLayer.d.ts" />
/// <reference path="Search.d.ts" />
/// <reference path="SpatialDataService.d.ts" />
/// <reference path="SpatialMath.d.ts" />
/// <reference path="Traffic.d.ts" />
/// <reference path="WellKnownText.d.ts" />

/**
 *  The Bing Maps V8 developer API.
 */
declare module Microsoft.Maps {

	//////////////////////////////////////////////
    /// Custom Map Styles
    //////////////////////////////////////////////

	 /** The styles options that can be applied to map elements. */
    export interface IMapElementStyle {
        /**
        * Hex color used for filling polygons, the background of point icons, and for the center of lines if they have split.
        */
        fillColor?: string;

        /**
        * The hex color of a map label.
        */
        labelColor?: string;

        /**
        * The outline hex color of a map label.
        */
        labelOutlineColor?: string;

        /**
        * Species if a map label type is visible or not.
        */
        labelVisible?: boolean;

        /**
        * Hex color used for the outline around polygons, the outline around point icons, and the color of lines.
        */
        strokeColor?: string;

        /**
        * Specifies if the map element is visible or not.
        */
        visible?: boolean;
    }

    /** The style options that can be appliction to bordered map elements. */
    export interface IBorderedMapElementStyle extends IMapElementStyle {
        /**
        * Secondary/casing line hex color of the border of a filled polygon.
        */
        borderOutlineColor?: string;

        /**
        * Primary line hex color of the border of a filled polygon.
        */
        borderStrokeColor?: string;

        /**
        * Specifies if a border is visible or not.
        */
        borderVisible?: boolean;
    }

    /** Global style settings */
    export interface ISettingsStyle {
        /** A hex color value that all land is first flushed to before things are drawn on it. */
        landColor?: string;

		/** Specifies whether or not to draw elevation shading on the map. */
		shadedReliefVisible?: boolean;
    }

    /** Map Elements which can be styled. */
    export interface IMapElements {

        /** Admin1, state, province, etc. */
        adminDistrict?: IBorderedMapElementStyle;

        /** Icon representing the capital of a state/province. */
        adminDistrictCapital?: IMapElementStyle;

        /** Area of land encompassing an airport. */
        airport?: IMapElementStyle;

        /** Area of land use, not to be confused with Structure */
        area?: IMapElementStyle;

        /** An arterial road is a high-capacity urban road. Its primary function is to deliver traffic from collector roads to freeways or expressways, and between urban centers efficiently. */
        arterialRoad?: IMapElementStyle;

        /** A structure such as a house, store, factory. */
        building?: IMapElementStyle;

        /** Restaurant, hospital, school, etc. */
        business?: IMapElementStyle;

        /** Icon representing the capital populated place. */
        capital?: IMapElementStyle;

        /** Area of a cemetery */
        cemetery?: IMapElementStyle;

        /** Area of a whole continent */
        continent?: IMapElementStyle;

        /** A controlled-access highway is a type of road which has been designed for high-speed vehicular traffic, with all traffic flow and ingress/egress regulated. Also known as a highway, freeway, motorway, expressway, interstate, parkway. */
        controlledAccessHighway?: IMapElementStyle;

        /** A country or independent sovereign state. */
        countryRegion?: IBorderedMapElementStyle;

        /** Icon representing the capital of a country/region. */
        countryRegionCapital?: IMapElementStyle;

        /** Admin2, county, etc. */
        district?: IBorderedMapElementStyle;

        /** An area of land used for educational purposes such as a school campus. */
        education?: IMapElementStyle;

        /** A school or other educational building. */
        educationBuilding?: IMapElementStyle;

        /** Restaurant, caf�, etc. */
        foodPoint?: IMapElementStyle;

        /** Area of forest land. */
        forest?: IMapElementStyle;

        /** An area of land where the game of golf is played. */
        golfCourse?: IMapElementStyle;

        /** Lines representing ramps typically alongside ControlledAccessHighways */
        highSpeedRamp?: IMapElementStyle;

        /** A highway. */
        highway?: IMapElementStyle;

        /** An area of land reserved for Indigenous people. */
        indigenousPeoplesReserve?: IMapElementStyle;

        /** Labeling of area of an island.  */
        island?: IMapElementStyle;

        /** Major roads. */
        majorRoad?: IMapElementStyle;

        /** The base map element in which all other map elements inherit from. */
        mapElement?: IMapElementStyle;

        /** Area of land used for medical purposes. Generally, hospital campuses. */
        medical?: IMapElementStyle;

        /** A building which provides medical services. */
        medicalBuilding?: IMapElementStyle;

		/** A military area. */
        military?: IMapElementStyle;

        /** A natural point of interest. */
        naturalPoint?: IMapElementStyle;

        /** Area of land used for nautical purposes. */
        nautical?: IMapElementStyle;

        /** Area defined as a neighborhood. Labels only. */
        neighborhood?: IMapElementStyle;

        /** Area of any kind of park. */
        park?: IMapElementStyle;

        /** Icon representing the peak of a mountain. */
        peak?: IMapElementStyle;

        /** All point features that are rendered with an icon of some sort */
        point?: IMapElementStyle;

        /** Restaurant, hospital, school, marina, ski area, etc. */
        pointOfInterest?: IMapElementStyle;

        /** A political border. */
        political?: IBorderedMapElementStyle;

        /** Icon representing size of populated place (city, town, etc). */
        populatedPlace?: IMapElementStyle;

        /** Railway lines */
        railway?: IMapElementStyle;

        /** Line representing the connecting entrance/exit to a highway. */
        ramp?: IMapElementStyle;

        /** Area of nature reserve. */
        reserve?: IMapElementStyle;

        /** River, stream, or other passage. Note that this may be a line or polygon and may connect to non-river water bodies. */
        river?: IMapElementStyle;

        /** Lines that represent all roads */
        road?: IMapElementStyle;

        /** Icon representing the exit, typically from a controlled access highway. */
        roadExit?: IMapElementStyle;

        /** Sign representing a compact name for a road. For example, I-5. */
        //roadShield?: IMapElementStyle;

        /** Land area covered by a runway. See also Airport for the land area of the whole airport. */
        runway?: IMapElementStyle;

        /** Area generally used for beaches, but could be used for sandy areas/golf bunkers in the future. */
        sand?: IMapElementStyle;

        /** A shopping center or mall. */
        shoppingCenter?: IMapElementStyle;

		/** Area of a stadium. */
		stadium?: IMapElementStyle;

        /** A street. */
        street?: IMapElementStyle;

        /** Buildings and other building-like structures */
        structure?: IMapElementStyle;

        /** A toll road. */
        tollRoad?: IMapElementStyle;

        /** Walking trail, either through park or hiking trail */
        trail?: IMapElementStyle;

        /** Icon representing a bus stop, train stop, airport, etc. */
        transit?: IMapElementStyle;

        /** A transit building. */
        transitBuilding?: IMapElementStyle;

        /** Lines that are part of the transportation network (roads, trains, ferries, etc) */
        transportation?: IMapElementStyle;

        /** An unpaved street. */
        unpavedStreet?: IMapElementStyle;

        /** Forests, grassy areas, etc. */
        vegetation?: IMapElementStyle;

        /** Icon representing the peak of a volcano. */
        volcanicPeak?: IMapElementStyle;

        /** Anything that looks like water */
        water?: IMapElementStyle;

        /** Icon representing a water feature location such as a waterfall. */
        waterPoint?: IMapElementStyle;

        /** Ferry route lines */
        waterRoute?: IMapElementStyle;
    }

    /** Defines a custom map style. */
    export interface ICustomMapStyle {
        /** A list of map elements to be styled. */
        elements?: IMapElements;

        /** Global Settings. */
        settings?: ISettingsStyle;

        /** The version of the style syntax used. */
        version: string;
    }

    //////////////////////////////////////////////
    /// Enumerations
    //////////////////////////////////////////////

    /** This enumeration defines how the map labels are displayed. */
    export enum LabelOverlay {
        /**
        * Map labels are hidden. Note that this will have no effect on road maps unless the allowHidingLabelsOfRoad map option
        * is set to true.
        */
        hidden,

        /**  Map labels are visible. */
        visible
    }

    /** This enumeration is used to specify the type of map style that should be displayed by the map. */
    export enum MapTypeId {
        /** The aerial map type which uses top-down satellite & airplane imagery. */
        aerial,

        /** High resolution aerial imagery taken at 45 degrees to the ground, from 4 different directions. */
        birdseye,

        /** A darker version of the road maps. */
        canvasDark,

        /** A lighter version of the road maps which also has some of the details such as hill shading disabled. */
        canvasLight,

        /** A grayscale version of the road maps. */
        grayscale,

        /** Displays a blank canvas that uses the mercator map project. It basically removed the base maps layer. */
        mercator,

        /** Ordnance survey map type (en-gb only). */
        ordnanceSurvey,

        /** Road map type. */
        road,

        /** Provides streetside panoramas from the street level. */
        streetside
    }

    /** The NavigationBarMode can be used to customize the layout and style of the navigation bar. */
    export enum NavigationBarMode {
        /**
        * A compact navigation bar that includes a smaller drop down for the map type and zoom buttons. Recommended for small
        * maps or screen such as a mobile device.
        */
        compact,

        /**
        * The default navigation bar that has a drop down for the map type, a locate me button, and zoom buttons. Recommended for
        * medium to large maps in desktop browsers.
        */
        default,

        /**
        * A minified navigation bar that has a button to toggle between road and aerial maps, zoom buttons, and a button to turn
        * traffic information on and off. Recommended for small maps or screen such as a mobile device.
        */
        minified
    }

    /** The NavigationBarOrientation enumeration is used to define how the navigation bar controls are laid out. */
    export enum NavigationBarOrientation {
        /** Repositions the buttons in the navigation bar such that they are aligned horizontally. */
        horizontal,

        /** Repositions the buttons in the navigation bar such that they are aligned vertically. */
        vertical
    }

    /** This enumeration is used to specify how the overview map for the streetside map mode should be displayed. */
    export enum OverviewMapMode {
        /** Shows the overview map in an expanded state. */
        expanded,

        /** Hides the overview map. */
        hidden,

        /** Shows the overview map in a minimized state. */
        minimized
    }

    /** Contains enum to show how pixels are defined. */
    export enum PixelReference {
        /** The pixel is defined relative to the map control�s root element, where the top left corner of the map control is (0, 0). */
        control,

        /** The pixel is defined relative to the page, where the top left corner of the HTML page is (0, 0). */
        page,

        /** The pixel is defined in viewport coordinates, relative to the center of the map, where the center of the map is (0, 0). */
        viewport
    }

    //////////////////////////////////////////////
    /// Interfaces
    //////////////////////////////////////////////

    /** Represents a structured address object. */
    export interface IAddress {
        /**
        * The street line of an address. The addressLine property is the most precise, official line for an address relative to the postal agency
        * servicing the area specified by the locality or postalCode properties.
        */
        addressLine: string;

        /**
        * The subdivision name within the country or region for an address. This element is also commonly treated as the first order administrative
        * subdivision. An example is a US state, such as �Oregon�.
        */
        adminDistrict: string;

        /** The country or region name of the address. */
        countryRegion: string;

        /** A string specifying the two-letter ISO country code. */
        countryRegionISO2: string;

        /** The second, third, or fourth order subdivision within a country, dependency, or region. An example is a US county, such as �King�. */
        district: string;

        /** A nicely formatted address string for the result. */
        formattedAddress: string;

        /** The locality, such as the primary city, that corresponds to an address. An example is �Seattle�. */
        locality: string;

        /** The post code, postal code, or ZIP code of an address. An example is a US ZIP code, such as �98152�. */
        postalCode: string;
    }

    /** The event args for when a layer frame is being loaded in an AnimtedTileLayer. **/
    export interface IAnimatedFrameEventArgs {
        /** The animated tile layer that the frame belongs to. **/
        animatedTileLayer: AnimatedTileLayer;

        /** The index of the frame being loaded. **/
        index: number;
    }

    /** An object that defines the options for an AnimatedTileLayer. **/
    export interface IAnimatedTileLayerOptions {
        /** A boolean that specifies whether the animation should auto-start when it is added to the map or not. Default: true **/
        autoPlay?: boolean;

        /** The number of miliseconds between two layer frames. Default: 1000 **/
        frameRate?: number;

        /** A custom loading screen to show on the map when the map tiles are being fetched. **/
        loadingScreen?: CustomOverlay;

        /** The max amount of total loading time of all tiles in a viewport in milliseconds. Default: 15000 **/
        maxTotalLoadTime?: number;

        /** The array of tile layer sources to animate through. **/
        mercator: TileSource[];

        /** A boolean specifying if the animated tile layer is visible or not. **/
        visible?: boolean;
    }

    /** Represents the options that can be used when initializing a custom overlay. **/
    export interface ICustomOverlayOptions {
        /**
        * Specifies if the custom overlay should eb rendered above or below the label layer of the map. When above,
        * elements in the overlay can be clickable. Default: True
        */
        beneathLabels?: boolean;
    }

    /** Base data layer interface. */
    export interface IDataLayer extends ILayer {
        /** Clears all data in the layer. */
        clear(): void;
    }

    /** Event args included in entity collection events. */
    export interface IEntityCollectionChangedEventArgs {
        /** The entity collection the event was triggered from. */
        collection: EntityCollection;

        /** The IPrimitive object that the event occurred for. */
        data: IPrimitive;
    }

    /** An object the identifies an event that has been attached to an object. */
    export interface IHandlerId {
    }

    /** Base layer interface. */
    export interface ILayer {
    }

    /**
     * @deprecated use IMouseEventArgs
	 * A LayerMouseEventArgs object is returned by many the mouse event handlers attached to a Layer.
	 */
    export interface ILayerMouseEventArgs {
        /**
		* @deprecated use target
		* The IPrimitive shape (pushpin, polyline, polygon) that the event occurred on.
		*/
        primitive: IPrimitive;
    }

    /** The options that can be used to customize an infobox. */
    export interface IInfoboxOptions {
        /**
        * @deprecated Use HTML buttons and links in description instead.
        */
        actions?: IInfoboxActions[];

        /** The string displayed inside the infobox. */
        description?: string;

        /**
        * The HTML that represents the infobox. Note that infobox options are ignored if custom HTML is set. Also, if custom HTML is used to represent the
        * infobox, the infobox is anchored at the top-left corner.
        */
        htmlContent?: string;

        /** The location on the map where the infobox�s anchor is attached. */
        location?: Location;

        /** The maximium size that the infobox height can expand to based on it�s content. Default: 126 **/
        maxHeight?: number;

        /** The maximium size that the infobox width can expand to based on it�s content. Default: 256 **/
        maxWidth?: number;

        /**
        * The amount the infobox pointer is shifted from the location of the infobox, or if showPointer is false, then it is the amount the info box bottom
        * left edge is shifted from the location of the infobox. If custom HTML is set, it is the amount the top-left corner of the infobox is shifted from
        * its location. The default offset value is (0,0), which means there is no offset.
        */
        offset?: Point;

        /**
        * A boolean indicating whether to show the close dialog button on the infobox. The default value is true. By default, the close button is displayed
        * as an X in the top right corner of the infobox. This property is ignored if custom HTML is used to represent the infobox.
        */
        showCloseButton?: boolean;

        /**
        * A boolean indicating whether to display the infobox with a pointer. The default value is true. In this case the infobox is anchored at the bottom
        * point of the pointer. If this property is set to false, the infobox is anchored at the bottom left corner. This property is ignored if custom HTML
        * is used to represent the infobox.
        */
        showPointer?: boolean;

        /** The title of the infobox. */
        title?: string;

        /**
        * A boolean indicating whether to show or hide the infobox. The default value is true. A value of false indicates that the infobox is hidden,
        * although it is still an entity on the map.
        */
        visible?: boolean;

        /** The z-index of the infobox with respect to other items on the map. */
        zIndex?: number;
    }

    /**
    * @deprecated Use HTML buttons and links in description instead.
    */
    export interface IInfoboxActions {
        /** The text to display for the action. */
        label: string;

        /** The function to call when the label is clicked.  */
        eventHandler: (eventArg?: MouseEvent) => void;
    }

    /** An object that contains information about an infobox event. **/
    export interface IInfoboxEventArgs {
        /** The event that occurred. **/
        eventName: string;

        /** The x-value of the pixel coordinate on the page of the mouse cursor. **/
        pageX: number;

        /** The y-value of the pixel coordinate on the page of the mouse cursor. **/
        pageY: number;

        /** The infobox object that fired the event. **/
        target: Infobox;

        /** The type of the object that fired the event.This will always be 'infobox'. **/
        targetType: string;

        /** Original mouse event from the browser. */
        originalEvent?: MouseEvent;
    }

    /** Map or View options */
    export interface IMapLoadOptions extends IMapOptions, IViewOptions {
        /** The Bing Maps Key used to authenticate the application. This property can only be set when using the Map constructor. */
        credentials: string;
    }

    /**
    * An object that can be used to customize the map. Some of the map options can be changed after the map has loaded by using
    * the setOptions function on the map.
    */
    export interface IMapOptions {

        /**
        * A boolean that, when set to true, allows the road labels to be hidden. Default: false
        * This property can only be set when using the Map constructor. This property can only be set when using the Map constructor.
        */
        allowHidingLabelsOfRoad?: boolean;

        /** A boolean indicating if the infobox is allowed to overflow outside the bounds of the map. Default: false. */
        allowInfoboxOverflow?: boolean;

        /** The color to use for the map control background. The default color is #EAE8E1. This property can only be set when using the Map constructor. */
        backgroundColor?: string | Color;

        /** Custom map styles used to modify the look and feel of the base map. */
        customMapStyle?: ICustomMapStyle;

        /** A boolean value indicating whether to disable the user�s ability to control the using the keyboard. Default: false */
        disableKeyboardInput?: boolean;

        /** A boolean value indicating if mousing over the map type selector should open it or not. Default: true */
        disableMapTypeSelectorMouseOver?: boolean;

        /** A boolean value indicating whether to disable the user's ability to pan the map. Default: false */
        disablePanning?: boolean;

        /**
        * Scrolling the mouse wheel over the map will zoom it in or out, but will not scroll the page.
        * Setting this property to true disables the zooming of the map and instead reverts back to scrolling the page instea.
        * Default: false
        */
        disableScrollWheelZoom?: boolean;

        /**
        * A boolean indicating whether to disable streetside mode.If this property is set to true, streetside will be removed from
        * the navigation bar, and the automatic coverage overlay will be disabled when zoomed in at lower zoom levels. Default false
        * This property can only be set when using the Map constructor.
        */
        disableStreetside?: boolean;

        /**
        * A boolean indicating whether to disable the automatic streetside coverage layer that appears when zoomed in at lower zoom
        * levels. Default false
        * This property can only be set when using the Map constructor.
        **/
        disableStreetsideAutoCoverage?: boolean;

        /** A boolean value indicating whether to disable the user's ability to zoom in or out. Default: false */
        disableZooming?: boolean;

        /**
        * A boolean value indicating whether the Bing(TM) logo on the map is clickable. Default: true.
        * This property can only be set when using the Map constructor.
        */
        enableClickableLogo?: boolean;

        /**
        * A boolean value indicating whether to use the inertia animation effect during map navigation. Default: true
        * This property can only be set when using the Map constructor.
        */
        enableInertia?: boolean;

        /**
        * A boolean that indicates if the map should be rendered using lite mode. When set to true vector map labels are
        * disabled and map labels are rendered directly into the map tiles. This offers improved performance, but will result
        * in the labels being rendered behind data on the map and the labels will also not use collision dection with pushpins.
        * If this property is not set, the map set this value based on the target device and browser as vector labels perform
        * better in some scenrarios than others.
        * This property can only be set when using the Map constructor.
        */
        liteMode?: boolean;

        /** A bounding area that restricts the map view. */
        maxBounds?: LocationRect;

        /** The maximum zoom level that the map can be zoomed into. */
        maxZoom?: number;

        /** The minimum zoom level that the map cab be zoomed out to. */
        minZoom?: number;

        /** Specifies how the navigation bar should be rendered on the map. */
        navigationBarMode?: NavigationBarMode;

        /** A boolean whether what orientation should be used when laying out the navigation controls. */
        navigationBarOrientation?: NavigationBarOrientation;

        /**
        * A boolean value indicating whether to display the �breadcrumb control�. The breadcrumb control shows the current center location�s geography hierarchy.
        * The default value is false. Requires the showLocateMeButton map option to be set to true. The breadcrumb control displays best when the width of the map
        * is at least 400 pixels.
        */
        showBreadcrumb?: boolean;

        /**
        * A boolean value indicating whether to show the map navigation control. Default: true�This property can only be set when using the Map constructor.
        */
        showDashboard?: boolean;

        /**
        * A boolean value indicating whether to show a button that centers the map over the user's location in the map navigation control. Default: true
        * This property can only be set when using the Map constructor.
        */
        showLocateMeButton?: boolean;

        /**
        * A boolean value indicating whether or not to show the map Bing logo. The default value is true.
        * This property can only be set when using the Map constructor.
        */
        showLogo?: boolean;

        /**
        * A boolean value indicating whether to show the map type selector in the map navigation control. Default: true
        * This property can only be set when using the Map constructor.
        */
        showMapTypeSelector?: boolean;

        /**
        * A boolean value indicating whether to show the scale bar. Default: true
        * This property can only be set when using the Map constructor.
        */
        showScalebar?: boolean;

        /** When using the minified navigation bar, a traffic button is displayed. Setting this option to false will hide this button. */
        showTrafficButton?: boolean;

        /**
        * A boolean value indicating whether to show a link to the End User Terms of Use, which appears to the right of the copyrights, or not. Default: true
        * This property can only be set when using the Map constructor.
        */
        showTermsLink?: boolean;

        /**
        * A boolean value indicating whether to show the zoom buttons in the map navigation control. Default: true
        * This property can only be set when using the Map constructor.
        */
        showZoomButtons?: boolean;

        /** A set of properties for the streetside mode of the map. */
        streetsideOptions?: IStreetsideOptions;

        /** Additional support map types that should be added to the navigaiton bar such as canvasDark, canvasLight, and grayscale.*/
        supportedMapTypes?: MapTypeId[];
    }

    /** A MapTypeChangeEventArgs object is returned by the map when using the mapTypeChanged event. */
    export interface IMapTypeChangeEventArgs {
        /** The map type that map has changed to. */
        newMapTypeId: MapTypeId;

        /** The map type that the map has changed from. */
        oldMapTypeId: MapTypeId;

        /** The map instance the event occured on */
        target: Map;

        /** The type of object the event was attached to. Should always be "map" */
        targetType: string;
    }

    /** Interface for module options. */
    export interface IModuleOptions {
        /** A callback function that is fired after the module has loaded. */
        callback?: () => void;

        /** A function that is called if there is an error loading the module. */
        errorCallback?: () => void;

        /** A Bing Maps key that is used with the module when the module is loaded without a map. */
        credentials?: string;
    }

    /** A MouseEventArgs object is returned by many the mouse event handlers. */
    export interface IMouseEventArgs extends ILayerMouseEventArgs {
        /** The event that occurred. */
        eventName: string;

        /** A boolean indicating if the primary button, such as the left mouse button or a tap on a touch screen, was used during a mouse down or up event. */
        isPrimary: boolean;

        /** A boolean indicating if the secondary mouse button, such as the right mouse button, was used during a mouse down or up event. */
        isSecondary: boolean;

        /** If the target is a shape, this will be the layer that the shape is in. */
        layer: Layer;

        /** The map location of where the event occurred. */
        location: Location;

        /** The x-value of the pixel coordinate on the page of the mouse cursor. */
        pageX: number;

        /** The y-value of the pixel coordinate on the page of the mouse cursor. */
        pageY: number;

        /** The pixel coordinate of the mouse cusrsor relative to the top left corner of the map div. */
        point: Point;

        /** The object that triggered the event. */
        target: Map | IPrimitive;

        /** The type of the object that the event is attached to. Valid values include the following: �map�, 'layer', �polygon�, �polyline�, or �pushpin� */
        targetType: string;

        /**
        * Returns the x-value of the pixel coordinate, relative to the map, of the mouse.
        * @returns The x-value of the pixel coordinate, relative to the map, of the mouse.
        */
        getX(): number;

        /**
        * Returns the y-value of the pixel coordinate, relative to the map, of the mouse.
        * @returns The y-value of the pixel coordinate, relative to the map, of the mouse.
        */
        getY(): number;
    }

    /**
     * An object tthat contains information about a streetside scene.
     */
    export interface IPanoramaInfo {
        /** The capture date of the streetside scene. */
        cd?: string;
    }

    /**
    * All shapes; Pushpins, Polylines and Polygons, derive from the IPrimitive interface. This means that they can be
    * passed into any function that takes in an IPrimitive object. Also, any function that returns an IPrimitive is capable
    * of returning any of these shapes.
    */
    export interface IPrimitive {
        /** Optional property to store any additional metadata for this primitive. */
        metadata?: any;

        /**
         * Gets the css cursor value when the primitive has events on it.
         * @returns css cursor string when primitive has events on it.
         */
        getCursor(): string;

        /**
         * Gets whether the primitive is visible.
         * @returns A boolean indicating whether the primitive is visible or not.
         */
        getVisible(): boolean;

        /**
        * Sets the options for customizing the IPrimitive.
        * @param options The options for customizing the IPrimitive.
        */
        setOptions(options: IPrimitiveOptions): void;
    }

    /**  A IPrimitiveChangedEventArgs object is returned by the changed event on IPrimitive shapes. */
    export interface IPrimitiveChangedEventArgs {
        /** The IPrimitive shape the event occured on. */
        sender: IPrimitive;

        /** The name of the change that occured; 'locations' or 'options'. */
        name: string;
    }

    /** Options used for customizing IPrimitive objects. */
    export interface IPrimitiveOptions {
        /** The css cursor to show when the IPrimitive has mouse events on it. Default value is pointer (hand). */
        cursor?: string;

        /** Boolean indicating whether the IPrimitive is visible. */
        visible?: boolean;
    }

    /** Options used for customizing Polylines. */
    export interface IPolylineOptions extends IPrimitiveOptions {
        /** Indicates if drawn shape should be generalized based on the zoom level to improve rendering performance. Default true **/
        generalizable?: boolean;

        /** CSS string or Color object as the poly's color. */
        strokeColor?: string | Color;

        /** An array of numbers separated by spaces, or a string separated by spaces/commas specifying the repetitive stroke pattern. */
        strokeDashArray?: number[] | string;

        /** The thickness of the poly stroke. */
        strokeThickness?: number;
    }

    /** Options used for customizing Polygons. */
    export interface IPolygonOptions extends IPolylineOptions {
        /** CSS string or Color object as the polygon's filling color. */
        fillColor?: string | Color;
    }

    /** Options used for customizing Pushpins. */
    export interface IPushpinOptions extends IPrimitiveOptions {
        /** The point on the pushpin icon, in pixels, which is anchored to the pushpin location. An anchor of (0,0) is the top left corner of the icon. */
        anchor?: Point;

        /** Specifies what color to make the default pushpin. */
        color?: string | Color;

        /** A boolean indicating whether the pushpin can be dragged to a new position with the mouse or by touch. */
        draggable?: boolean;

        /** Specifies whether to enable the clicked style on the pushpin. */
        enableClickedStyle?: boolean;

        /** Specifies whether to enable the hover style on the pushpin. */
        enableHoverStyle?: boolean;

        /**
        * Defines the the icon to use for the pushpin.This can be a URL to an Image or SVG file, an image data URI, or an inline SVG string.
        * Tip: When using inline SVG, you can pass in placeholders `{color}` and `{text}` in your SVG string. This placeholder will be replaced by the pushpins color or text property value when rendered.
        */
        icon?: string;

        /** Whether the clickable area of pushpin should be an ellipse instead of a rectangle. */
        roundClickableArea?: boolean;

        /**
        * A secondary title label value to display under the pushpin. Uses label collision detection. This label automatically changes color between white
        * and dark grey depending on which map style is selected. Requires the title label to be set.
        */
        subTitle?: string;

        /**
        * The title label value to display under the pushpin. This label automatically changes color between white and dark grey depending on which map
        * style is selected. Pushpin Titles support label collision detection, as described below.
        */
        title?: string;

        /** A short string of text that is overlaid on top of the pushpin. */
        text?: string;

        /** The amount the text is shifted from the pushpin icon. The default value is (0,5). */
        textOffset?: Point;
    }

    /** An object that represents a min and max value range. */
    export interface IRange {
        /** The minimum value. */
        min: number;

        /** The maximum value. */
        max: number;
    }

    /** The options that can be used to customize how the streetside map mode is displayed to the user. */
    export interface IStreetsideOptions {
        /** A boolean indicating if the ability to navigate between image bubbles should be disabled in streetside map mode. Default: false */
        disablePanoramaNavigation?: boolean;

        /** The location that the streetside panorama should be looking towards. This can be used instead of a heading. */
        locationToLookAt?: Location;

        /** A callback function that is triggered after the streetside view has not loaded successfully. */
        onErrorLoading?: () => void;

        /** A callback function that is triggered after the streetside view has loaded successfully. */
        onSuccessLoading?: () => void;

        /**
        * Specifies how to render the overview map when in streetside mode.
        * Default: Microsoft.Maps.OverviewMapMode.expanded
        */
        overviewMapMode?: OverviewMapMode;

        /**
        * Information for a streetside panorama scene to load.
        */
        panoramaInfo?: IPanoramaInfo;

        /** The radius to search in for available streetside panoramas. */
        panoramaLookupRadius?: number;

        /** A boolean indicating if the current address being viewed should be hidden when in streetside map mode. Default: true */
        showCurrentAddress?: boolean;

        /** A boolean indicating if the exit button should be hidden when in streetside map mode. Default: true */
        showExitButton?: boolean;

        /** A boolean indicating if the heading compass button is hidden when in streetside map mode. Default: true */
        showHeadingCompass?: boolean;

        /** A boolean indicating if the link to report a problem with a streetside image is hidden when in streetside map mode. Default: true */
        showProblemReporting?: boolean;

        /** A boolean indicating if the zoom buttons should be displayed when in streetside map mode. Default: true */
        showZoomButtons?: boolean;
    }

    /** Defines a set of styles for pushpins, polylines, and polygons. */
    export interface IStylesOptions {
        /** Sets the options for all pushpins. */
        pushpinOptions?: IPushpinOptions;

        /** Sets the options for all polylines. */
        polylineOptions?: IPolylineOptions;

        /** Sets the options for all polygons. */
        polygonOptions?: IPolygonOptions;
    }

    /** Interface to specify style css while registering a module */
    export interface IStyleUrl {
        /** List of style css urls o be downloaded */
        styleURLs: string[];
    }

    /** Represents options that can be used to customize a tile layer. */
    export interface ITileLayerOptions {

        /**
        * The number of milliseconds allowed for the tile layer image download. If the timeout occurs before the image is fully
        * downloaded, the map control considers the download a failure. The default value is 10000.
        */
        downloadTimeout?: number;

        /** The tile source for the tile layer. */
        mercator: TileSource;

        /** The opacity of the tile layer, defined by a number between 0 (not visible) and 1. */
        opacity?: number;

        /**
        * A boolean indicating whether to show or hide the tile layer. The default value is true. A value of false indicates that
        * the tile layer is hidden, although it is still an entity on the map.
        */
        visible?: boolean;

        /** The z-index of the tile layer. */
        zIndex?: number;
    }

    /** Represents options that can be used to define a tile source. */
    export interface ITileSourceOptions {
        /**
        * A bounding box that specifies where tiles are available.
        * Note: This will not crop tiles to the specific bounding box, it limits the tiles it loads to those that intersect this bounding box.
        */
        bounds?: LocationRect;

        /** The maximum zoom level tiles that tiles should be rendered at. */
        maxZoom?: number;

        /** The minimum zoom level tiles that tiles should be rendered at. */
        minZoom?: number;

        /**
        * Required. This can be a string or a callback function that constructs the URLs used to retrieve tiles from the tile source.
        * When using a string, the uriConstructor will allow you to specify placeholders that will be replaced with the tiles value (i.e. {quadkey}).
        * See the Tile URL Parameters section for a list of supported parameters.
        * Besides using formatted tile URLs, you can also specify a callback function as the uriConstructor. This is useful if you need to be able to
        * build custom tile URL�s that may require some additional calculations for a tile.
        */
        uriConstructor: string | ((tile: PyramidTileId) => string);
    }

    /** Represents options that can be used to set the view of the map. */
    export interface IViewOptions {
        /** The bounding rectangle of the map view. If both bounds and center are specified, bounds takes precedence over center. */
        bounds?: LocationRect;

        /** The location of the center of the map view. If both bounds and center are specified, bounds takes precedence over center. */
        center?: Location;

        /**
        * The directional heading of the map. The heading is represented in geometric degrees with 0 or 360 = North, 90 = East,
        * 180 = South, and 270 = West.
        */
        heading?: number;

        /** Indicates how the map labels are displayed. */
        labelOverlay?: LabelOverlay;

        /** The map type of the view. */
        mapTypeId?: MapTypeId;

        /** The amount of padding in pixels to be added to each side of the bounds of the map view. */
        padding?: number;

        /** The angle relative to the horizon to tilt a streetside panorama image. */
        pitch?: number;

        /** The zoom level of the map view. */
        zoom?: number;
    }

    //////////////////////////////////////////////
    /// Modular Framework
    //////////////////////////////////////////////

    /**
     * Loads the specified registered module, making its functionality available. You can provide the name of a single module or an array of names in.
     * Options or a callback function that is called when the module is loaded can be specified.
     * @param moduleName Name of the module to load. Can be the name of a custom module or a built in module name. Built in modules:
     * Microsoft.Maps.Autosuggest, Microsoft.Maps.Clustering, Microsoft.Maps.Directions, Microsoft.Maps.DrawingTools, Microsoft.Maps.GeoJSON,
     * Microsoft.Maps.HeatMap, Microsoft.Maps.Search, Microsoft.Maps.SpatialDataService, Microsoft.Maps.SpatialMath, Microsoft.Maps.Traffic,
     * Microsoft.Maps.WellKnownText
     * @param options A callback function or options containing additional information and a callback to call once a module is loaded
     */
    export function loadModule(moduleName: string | string[], options?: (() => void) | IModuleOptions): void;

    /**
     * Registers a module with the map control. The name of the module is specified in moduleKey, the module script is defined in scriptURL, and the
     * options provides the location of a *.css file to load with the module.
     * @param moduleName Name of the module to load.
     * @param url Url to where the module code is located.
     * @param styles List of css files to download.
     */
    export function registerModule(moduleName: string, url: string, styles?: IStyleUrl): void;

    /**
     * Signals that the specified module has been loaded and if specified, calls the callback function in loadModule. Call this method at the end of your custom module script.
     * @param moduleName Name of the module that is loaded.
     */
    export function moduleLoaded(moduleName: string): void;

    //////////////////////////////////////////////
    /// Classes
    //////////////////////////////////////////////

    /**
     * Provides a layer which can smoothly animate through an array of tile layer sources.
     */
    export class AnimatedTileLayer {
        /**
         * @contstructor
         * @param options Options that define how to animate between the specified tile layers.
         */
        constructor(options?: IAnimatedTileLayerOptions);

        /**
        * Gets the frame rate of this animated tile layer.
        * @returns The frame rate of this animated tile layer.
        **/
        public getFrameRate(): number;

        /**
        * Gets the loading screen overlay when tiles are being fetched.
        * @returns The loading screen overlay when tiles are being fetched.
        **/
        public getLoadingScreen(): CustomOverlay;

        /**
        * Gets the maximum total tile fetching time of this animated tile layer.
        * @returns The maximum total tile fetching time of this animated tile layer
        **/
        public getMaxTotalLoadTime(): number;

        /**
        * Gets the tile sources associated with this layer.
        * @returns The tile sources associated with this layer.
        **/
        public getTileSources(): TileSource[];

        /**
        * Gets the visibility of this animated tile layer.
        * @returns The visibility of this animated tile layer.
        **/
        public getVisible(): boolean;

        /** Pause the tile layer animation. **/
        public pause(): void;

        /** Play the animation either from start or where it was paused. **/
        public play(): void;

        /**
        * Sets the options for the animated tile layer.
        * @params Options that define how to animate between the specified tile layers.
        **/
        public setOptions(options: IAnimatedTileLayerOptions): void;

        /** Stop the layer animation, hide layer, and reset frame to the beginning. **/
        public stop(): void;
    }

    /** Class that represents a color */
    export class Color {
        /** The opacity of the color. The range of valid values are an interger between 0 and 255, or a decimal between 0 and 1. */
        public a: number;

        /** The red value of the color. The range of valid values is 0 to 255 */
        public r: number;

        /** The green value of the color. The range of valid values is 0 to 255 */
        public g: number;

        /** The blue value of the color. The range of valid values is 0 to 255 */
        public b: number;

        /**
         * @constructor
         * @param a The alpha value in argb format
         * @param r The r value in argb format
         * @param g The g value in argb format
         * @param b The b value in argb format
         */
        constructor(a: number, r: number, g: number, b: number);

        /**
         * Clones the color.
         * @param color The color class that needs to be clones.
         * @returns The colne of the color.
         */
        public static clone(color: Color): Color;

        /**
         * Creates the color from a hex string.
         * @param hex The color represented as '#rrggbb' format.
         * @returns The color object.
         */
        public static fromHex(hex: string): Color;

        /**
         * Clones the color.
         * @returns The clone of the color.
         */
        public clone(): Color;

        /**
         * Gets the opacity of this color.
         * @returns The opacity between 0 and 1 of this color.
         */
        public getOpacity(): number;

        /**
         * Converts the color to hex notation.
         * @returns The hex notation as '#rrggbb' (ignores a).
         */
        public toHex(): string;

        /**
         * Converts the color to rgba notation.
         * @returns The rgba notation as rgba(rr, gg, bb, aa)
         */
        public toRgba(): string;
    }

    /**
     * You can use this class to create custom overlays on top of the map. These can be static overlays such as custom
     * navigation bars, or dynamic overlays such as custom visualization layers. CustomOverlays can be added to the map
     * just like any other layer using the map.layers property.
     */
    export class CustomOverlay implements ILayer {
        /** A reference the the map instance that the overlay was added to. This will be null until the onLoad function has fired. **/
        _map: Map;

        /**
         * @constructor
         * @param options The options to use when initializing the custom overlay.
         */
        constructor(options?: ICustomOverlayOptions);

        /**
         * Gets the html element of this custom overlay.
         * @returns The htmlElement of this overlay.
         */
        public getHtmlElement(): HTMLElement;

        /**
         * Gets the map that this overlay is attached to.
         * @returns The map that this overlay is attached to.
         */
        public getMap(): Map;

        /**
         * Updates the html element of this custom overlay.
         * @param htmlElement The new htmlElement to set for the overlay.
         */
        public setHtmlElement(htmlElement: HTMLElement): void;

        /**
         * Implement this method to perform any task that should be done when the overlay is added to the map.
         */
        public onAdd(): void;

        /**
         * Implement this methof to perform any task that should be done after the overlay has been added to the map.
         */
        public onRemove(): void;

        /**
         * Implement this method to perform any tasks that should be done when the overlay is removed from the map.
         */
        public onLoad(): void;
    }

    /**
     * Use the Layer class.
     * @deprecated in V8
     */
    export class EntityCollection extends Layer {
        /**
         * @constructor Deprecated. Use the Layer class.
         * @deprecated in V8
         */
        constructor();

        /**
         * Removes all shapes from the collection.
         */
        public clear(): void;

        /**
         * Gets the item at a specified index.
         * @param index Index of the item to get.
         * @returns The item at a specified index.
         */
        public get(index: number): IPrimitive;

        /**
         * Gets the number of items in this collection.
         * @returns The count of the items.
         */
        public getLength(): number;

        /**
         * Gets the index of the item in the list.
         * @param primitive The item to get the index of.
         * @returns The index of the item in the list.
         */
        public indexOf(primitive: IPrimitive): number;

        /**
        * Inserts the item into the list at a specific index.
        * @param primitive The item to insert.
        * @param index Index of the item to be inserted.
        */
        public insert(primitive: IPrimitive, index: number): void;

        /**
         * Returns the last element in the list after removing it.
         * @returns The last element in the list after removing it.
         */
        public pop(): IPrimitive;

        /**
         * Adds the item to the end of the list.
         * @param primitive Item to be added.
         */
        public push(primitive: IPrimitive | IPrimitive[]): void;

        /**
         * Removes the item from the list.
         * @param primitive Item to be removed.
         * @returns The item to be removed.
         */
        public remove(primitive: IPrimitive): IPrimitive;

        /**
         * Removes the item from the list at a specified index.
         * @param index Index of the item that needs to be removed.
         * @returns The item to be removed at a specified index.
         */
        public removeAt(index: number): IPrimitive;
    }

    /** A static class that manages events within the map SDK. */
    export module Events {
        /////////////////////////////////////
        /// addHandler Definitions
        ////////////////////////////////////

        /**
         * Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported events:
         * click, dblclick, maptypechanged, mousedown, mousemove, mouseout, mouseover, mouseup, mousewheel, rightclick, viewchange, viewchangeend, viewchangestart
         * @param handler The callback function to handle the event when triggered.
         * @returns The handler id.
         */
        export function addHandler(target: Map, eventName: string, handler: (eventArg?: IMouseEventArgs | IMapTypeChangeEventArgs) => void): IHandlerId;

        /**
         * Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * changed, click, dblclick, drag, dragend, dragstart, mousedown, mouseout, mouseover, mouseup
         * @param handler The callback function to handle the event when triggered.
         * @returns The handler id.
         */
        export function addHandler(target: Pushpin, eventName: string, handler: (eventArg?: IMouseEventArgs | IPrimitiveChangedEventArgs) => void): IHandlerId;

        /**
        * Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.
        * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
        * @param eventName The type of event to attach. Supported Events:
        * changed, click, dblclick, mousedown, mouseout, mouseover, mouseup
        * @param handler The callback function to handle the event when triggered.
        * @returns The handler id.
        */
        export function addHandler(target: Polyline | Polygon, eventName: string, handler: (eventArg?: IMouseEventArgs | IPrimitiveChangedEventArgs) => void): IHandlerId;

        /**
         * Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * click, infoboxChanged, mouseenter, mouseleave
         * @param handler The callback function to handle the event when triggered.
         * @returns The handler id.
         */
        export function addHandler(target: Infobox, eventName: string, handler: (eventArg?: IInfoboxEventArgs) => void): IHandlerId;

        /**
         * Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * click, dblclick, mousedown, mouseout, mouseover, mouseup, rightclick
         * @param handler The callback function to handle the event when triggered.
         * @returns The handler id.
         */
        export function addHandler(target: Layer, eventName: string, handler: (eventArg?: IMouseEventArgs) => void): IHandlerId;

        /**
        * Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.
        * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
        * @param eventName The type of event to attach. Supported Events:
        * � entityadded
        * � entityremoved
        * @param handler The callback function to handle the event when triggered.
        * @returns The handler id.
        */
        export function addHandler(target: EntityCollection, eventName: string, handler: (eventArg?: IEntityCollectionChangedEventArgs) => void): IHandlerId;

        /**
         * Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach.
         * @param handler The callback function to handle the event when triggered.
         * @returns The handler id.
         */
        export function addHandler(target: any, eventName: string, handler: (eventArg?: any) => void): IHandlerId;

        /////////////////////////////////////
        /// addOne Definitions
        ////////////////////////////////////

        /**
         * Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported events:
         * click, dblclick, maptypechanged, mousedown, mousemove, mouseout, mouseover, mouseup, mousewheel, rightclick, viewchange, viewchangeend, viewchangestart
         * @param handler The callback function to handle the event when triggered.
         */
        export function addOne(target: Map, eventName: string, handler: (eventArg?: IMouseEventArgs | IMapTypeChangeEventArgs) => void): void;

        /**
         * Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * changed, click, dblclick, drag, dragend, dragstart, mousedown, mouseout, mouseover, mouseup
         * @param handler The callback function to handle the event when triggered.
         */
        export function addOne(target: Pushpin, eventName: string, handler: (eventArg?: IMouseEventArgs | IPrimitiveChangedEventArgs) => void): void;

        /**
         * Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * changed, click, dblclick, mousedown, mouseout, mouseover, mouseup
         * @param handler The callback function to handle the event when triggered.
         */
        export function addOne(target: Polyline | Polygon, eventName: string, handler: (eventArg?: IMouseEventArgs | IPrimitiveChangedEventArgs) => void): void;

        /**
         * Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * click, infoboxChanged, mouseenter, mouseleave
         * @param handler The callback function to handle the event when triggered.
         */
        export function addOne(target: Infobox, eventName: string, handler: (eventArg?: IInfoboxEventArgs) => void): void;

        /**
         * Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * click, dblclick, mousedown, mouseout, mouseover, mouseup, rightclick
         * @param handler The callback function to handle the event when triggered.
         */
        export function addOne(target: Layer, eventName: string, handler: (eventArg?: IMouseEventArgs) => void): void;

        /**
         * Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * � entityadded
         * � entityremoved
         * @param handler The callback function to handle the event when triggered.
         */
        export function addOne(target: EntityCollection, eventName: string, handler: (eventArg?: IEntityCollectionChangedEventArgs) => void): void;

        /**
         * Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach.
         * @param handler The callback function to handle the event when triggered.
         */
        export function addOne(target: any, eventName: string, handler: (eventArg?: any) => void): void;

        /////////////////////////////////////
        /// addThrottledHandler Definitions
        ////////////////////////////////////

        /**
         * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported events:
         * click, dblclick, maptypechanged, mousedown, mousemove, mouseout, mouseover, mouseup, mousewheel, rightclick, viewchange, viewchangeend, viewchangestart
         * @param handler The callback function to handle the event when triggered.
         * @param throttleInterval throttle interval (in ms)
         * @returns The handler id.
         */
        export function addThrottledHandler(target: Map, eventName: string, handler: (eventArg?: IMouseEventArgs | IMapTypeChangeEventArgs) => void, throttleInterval: number): IHandlerId;

        /**
         * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * changed, click, dblclick, drag, dragend, dragstart, mousedown, mouseout, mouseover, mouseup
         * @param handler The callback function to handle the event when triggered.
         * @param throttleInterval throttle interval (in ms)
         * @returns The handler id.
         */
        export function addThrottledHandler(target: Pushpin, eventName: string, handler: (eventArg?: IMouseEventArgs | IPrimitiveChangedEventArgs) => void, throttleInterval: number): IHandlerId;

        /**
         * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * changed, click, dblclick, mousedown, mouseout, mouseover, mouseup
         * @param handler The callback function to handle the event when triggered.
         * @param throttleInterval throttle interval (in ms)
         * @returns The handler id.
         */
        export function addThrottledHandler(target: Polyline | Polygon, eventName: string, handler: (eventArg?: IMouseEventArgs | IPrimitiveChangedEventArgs) => void, throttleInterval: number): IHandlerId;

        /**
        * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
        * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
        * @param eventName The type of event to attach. Supported Events:
        * click, infoboxChanged, mouseenter, mouseleave
        * @param handler The callback function to handle the event when triggered.
        * @returns The handler id.
        */
        export function addThrottledHandler(target: Infobox, eventName: string, handler: (eventArg?: IInfoboxEventArgs) => void): IHandlerId;

        /**
         * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * click, dblclick, mousedown, mouseout, mouseover, mouseup, rightclick
         * @param handler The callback function to handle the event when triggered.
         * @param throttleInterval throttle interval (in ms)
         * @returns The handler id.
         */
        export function addThrottledHandler(target: Layer, eventName: string, handler: (eventArg?: IMouseEventArgs) => void, throttleInterval: number): IHandlerId;

        /**
         * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * � entityadded
         * � entityremoved
         * @param handler The callback function to handle the event when triggered.
         * @param throttleInterval throttle interval (in ms)
         * @returns The handler id.
         */
        export function addThrottledHandler(target: EntityCollection, eventName: string, handler: (eventArg?: IEntityCollectionChangedEventArgs) => void, throttleInterval: number): IHandlerId;

        /**
         * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach.
         * @param handler The callback function to handle the event when triggered.
         * @param throttleInterval throttle interval (in ms)
         * @returns The handler id.
         */
        export function addThrottledHandler(target: any, eventName: string, handler: (eventArg?: any) => void, throttleInterval: number): IHandlerId;

        /////////////////////////////////////
        /// All other definitions
        ////////////////////////////////////

        /**
         * Checks if the target has any attached event handler.
         * @param target The object to check if an event is attached to it.
         * @param eventName The name of the event to check to see is attached.
         * @returns A boolean indicating if the specified event type is attached to the object.
         */
        export function hasHandler(target: any, eventName: string): boolean;

        /**
         * Invokes an event on the target. This causes all handlers for the specified event name to be called.
         * @param target The object to invoke the event on.
         * @param eventName The name of the event to invoke.
         * @param args Arguments for the event handler.
         */
        export function invoke(target: any, evenName: string, args: any): void;

        /**
         * Detaches the specified handler from the event. The handlerId is returned by the addHandler and addThrottledHandler methods.
         * @param handlerId The handler id of the event to remove.
         */
        export function removeHandler(handlerId: IHandlerId): void;
    }

    /**
     * Standard compass headings; north, south, east, west.
     */
    export class Heading {
        /** A heading pointing north, 0 degrees. */
        static North: number;

        /** A heading pointing south, 180 degrees. */
        static South: number;

        /** A heading pointing east, 90 degrees. */
        static East: number;

        /** A heading pointing west, 270 degrees. */
        static West: number;
    }

    /**
    * An infobox, also sometimes refer to as an info window or popup, is a simple panel that displays information over top the map. This is
    * often used to display information linked to a location after clicking on a pushpin.
    */
    export class Infobox {

        /**
         * @constructor
         * @param location The location to display the infobox at.
         * @param options Options for rendering the infobox.
         */
        constructor(location: Location, options?: IInfoboxOptions);

        /**
        * @deprecated Use HTML buttons and links in description instead.
        */
        public getActions(): IInfoboxActions[];

        /**
        * Gets the point on the infobox which is anchored to the map. An anchor of (0,0) is the top left corner of the infobox.
        * @returns The anchor point of the infobox.
        */
        public getAnchor(): Point;

        /**
        * Gets the string that is printed inside the infobox.
        * @returns The description value of the infobox options.
        */
        public getDescription(): string;

        /**
        * Gets the height of the infobox.
        * @returns The height of the infobox.
        */
        public getHeight(): number;

        /**
        * Gets the infobox as HTML.
        * @returns The HTML string used to create a custom infobox.
        */
        public getHtmlContent(): string;

        /**
        * Gets the location on the map where the infobox�s anchor is attached.
        * @returns The location of the infobox.
        */
        public getLocation(): Location;

        /**
         * Gets the maximium height setting for the infobox.
         * @returns the maximium height setting for the infobox.
         */
        public getMaxHeight(): number;

        /**
         * Gets the maximium width setting for the infobox.
         * @returns the maximium width setting for the infobox.
         */
        public getMaxWidth(): number;

        /**
        * Gets the amount the infobox pointer is shifted from the location of the infobox, or if showPointer is false, then it is the amount the infobox
        * bottom left edge is shifted from the location of the infobox. The default value is (0,0), which means there is no offset.
        * @returns The offset of the infobox.
        */
        public getOffset(): Point;

        /**
        * Gets the infobox options.
        * @returns The infobox options currently used by the infobox.
        */
        public getOptions(): IInfoboxOptions;

        /**
        * Gets a boolean indicating whether the infobox close button is shown.
        * @returns A boolean indicating if the close button is shown or not.
        */
        public getShowCloseButton(): boolean;

        /**
        * Gets a boolean indicating whether the infobox is drawn with a pointer.
        * @returns A boolean indicating if the pointer of the infobox is shown or not.
        */
        public getShowPointer(): boolean;

        /**
        * Gets a string that is the title of the infobox.
        * @returns The title property of the infobox.
        */
        public getTitle(): string;

        /**
        * Gets whether the infobox is visible. A value of false indicates that the infobox is hidden, although it is still an entity on the map.
        * @returns A boolean indicating if the infobox is visible or not.
        */
        public getVisible(): boolean;

        /**
        * Gets the width of the infobox.
        * @returns The width of the infobox.
        */
        public getWidth(): number;

        /**
        * Gets the z-index of the infobox.
        * @returns The z-index of the infobox.
        */
        public getZIndex(): number;

        /**
        * Sets the HTML content of the infobox. You can use this method to change the look of the infobox. Note that infobox options are ignored if
        * custom HTML is set. Also, when custom HTML is used to represent the infobox, the infobox is anchored at the bottom-left corner.
        * @param content The HTML string to use to generate the infobox.
        */
        public setHtmlContent(content: string): void;

        /**
        * Sets the location on the map where the anchor of the infobox is attached.
        * @param loc The location to display the infobox at.
        */
        public setLocation(loc: Location): void;

        /**
         * Adds the infobox to the map. To remove an Infobox from the map, simply pass null into this function.
         * @param map A map instance to display the infoboox on, or null if removing infobox from map.
         */
        public setMap(map: Map): void;

        /**
        * Sets options for the infobox.
        * @param options The options to assign to the infobox.
        */
        public setOptions(options: IInfoboxOptions): void;
    }

    /**
    * The Layer class makes it easy to organize groups of data by storing them in separate layers on the map. Grouping your data into layers
    * provides a number of benefits such as the ability to hide or attach events to all IPrimitive shapes in a layer with a single line of code,
    * while also providing providing a performance benefit over manually looping through each shape and performing these tasks.
    */
    export class Layer implements IDataLayer {

        /** Optional property to store any additional metadata for this layer. */
        public metadata: any;

        /**
         * @constructor
         * @param id Unique string identifier for the layer.
         */
        constructor(id?: string);

        /**
         * Adds a shapes to the layer, at the specified index if specified.
         * @param primitive The shape(s) to be added to the layer.
         * @param index The index at which to insert the shape into the layer.
         */
        public add(primitive: IPrimitive | IPrimitive[], index?: number): void;

        /**
         * Clears all the data
         */
        public clear(): void;

        /**
         * Cleans up any resources this object is consuming
         */
        public dispose(): void;

        /**
         * Gets the id of the layer.
         * @returns The id assigned to the layer.
         */
        public getId(): string;

        /**
        * Gets an array of shapes that are in the layer. This can be used to iterate over the individual shapes.
        * @returns An array of shapes that are in the layer.
        */
        public getPrimitives(): IPrimitive[];

        /**
         * Gets a value indicating whether the layer is visible or not.
         * @returns A boolean indicating if the layer is visible or not.
         */
        public getVisible(): boolean;

        /**
         * Gets the zIndex of the layer.
         * @returns The zIndex of the layer.
         */
        public getZIndex(): number;

        /**
         * Removes a primitive
         * @param primitive primitive that needs to be removed
         * @returns The primitive that needs to be removed
         */
        public remove(primitive: IPrimitive): IPrimitive;

        /**
         * Removes a primitive at a specified index
         * @param index index of the primitive that needs to be removed
         * @returns The primitive that needs to be removed at this index
         */
        public removeAt(index: number): IPrimitive;

        /**
         * Replaces all shapes in the layer with the new array of shapes that have been provided.
         * @param primitives The array of shapes to add to the layer.
         */
        public setPrimitives(primitives: IPrimitive[]): void;

        /**
         * Sets whether the layer is visible or not.
         * @param value A value indicating if the layer should be displayed or not.
         */
        public setVisible(value: boolean): void;

        /**
         * Sets the zIndex of the layer.
         * @param zIndex The zIndex value to assign to the layer.
         */
        public setZIndex(zIndex: number): void;
    }

    /**
    * The layers property of the map is a LayerCollection object and contains all the layers that have been added to the map.
    * Note: This class is only exposed in the map.layers property. No other instance of this class can be created.
    */
    export class LayerCollection extends Array {
        /** The number of layers in the collection. */
        public length: number;

        /**
        * Removes all layers from the map.
        */
        public clear(): void;

        /**
        * Gets the index of a layer in the collection.
        * @param layer The layer to get the index of.
        * @returns The index of the specified layer.
        */
        public indexOf(layer: ILayer): number;

        /**
        * Adds a layer to the map.
        * @param layer The layer to insert into the collection.
        */
        public insert(layer: ILayer): void;

        /**
        * Adds an array of layers to the map.
        * @param layers The layers to insert into the collection.
        */
        public insertAll(layers: ILayer[]): void;

        /**
        * Removes a layer from the map.
        * @param layer The layer to remove from the collection.
        */
        public remove(layer: ILayer): void;

        /**
        * Removes a layer from the map at the specified index in the collection.
        * @param idx The index of the layer to remove.
        */
        public removeAt(idx: number): void;
    }

    /**
  * This class stores the coordinate information needed to mark locations on a map. The Location class consists of two properties:
  * latitude and longitude.
  */
    export class Location {
        /** The location north or south of the equator from +90 to -90 */
        public latitude: number;

        /** The location east or west of the prime meridian +180 to -180 */
        public longitude: number;

        /**
        * @constructor
        * @param latitude The location north or south of the equator from +90 to -90
        * @param longitude The location east or west of the prime meridian +180 to -180
        */
        constructor(latitude: any, longitude: any);

        /**
        * Determines if two locations are equal.
        * @param location1 The first location to test.
        * @param location2 The second location to test.
        * @returns True if both locations are equivalent.
        */
        static areEqual(location1: Location, location2: Location): boolean;

        /**
        * Creates a deep copy of the map location.
        * @returns A deep copy of the map location.
        */
        public clone(): Location;

        /**
        * Creates a proper Location from an object that has the same signature.
        * @param source A Location or Location-like object that contains the same properties.
        * @returns A copy of the map location.
        */
        static cloneFrom(source: Location): Location;

        /**
        * Normalizes the longitude by wrapping it around the earth.
        * @param longitude The input longitude.
        * @returns The longitude normalized to within -180 and +180.
        */
        static normalizeLongitude(longitude: number): number;

        /**
        * Parses a location string of the form "lat,long".
        * @param str The location string.
        * @returns The parsed location or null otherwise.
        */
        static parseLatLong(str: string): Location;

        /**
        * Converts the Location to a string representation.
        * @returns A string representation of the location.
        */
        public toString(): string;
    }

    /**
     * The LocationRect class, also known as a bounding box, consists of a set of coordinates that are used to represent rectangular area on the map.
     */
    export class LocationRect {
        /** The location that defines the center of the rectangle. */
        public center: Location;

        /** The height, in degrees, of the rectangle. */
        public height: number;

        /** The width, in degrees, of the rectangle. */
        public width: number;

        /**
        * @constructor
        * @param center The center of the LocationRect.
        * @param width The width of the LocationRect in degrees.
        * @param height The height of the LocationRect in degrees.
        */
        constructor(center: Location, width: number, height: number);

        /**
        * Gets a LocationRect using the specified locations for the northwest and southeast corners.
        * @param northwest The north west corner of the LocationRect.
        * @param southeast The south east corner of the LocationRect.
        * @returns A LocationRect using the specified locations for the northwest and southeast corners.
        */
        static fromCorners(northwest: Location, southeast: Location): LocationRect;

        /**
        * Gets a LocationRect using the specified northern and southern latitudes and western and eastern longitudes for the rectangle boundaries.
        * @param north The northern latitude of the LocationRect.
        * @param west The western longitude of the LocationRect.
        * @param south The southern latitude of the LocationRect.
        * @param east The eastern longitude of the LocationRect.
        * @returns A LocationRect defined by the specified northern and southern latitudes and western and eastern longitudes for the rectangle boundaries.
        */
        static fromEdges(north: number, west: number, south: number, east: number): LocationRect;

        /**
        * Gets a LocationRect using a list of locations.
        * @param locations A list of locations.
        * @returns A LocationRect that encloses all the specified locations.
        */
        static fromLocations(...locations: Location[]): LocationRect;

        /**
        * Gets a LocationRect using an array of locations.
        * @param locations An array of locations.
        * @returns A LocationRect that encloses all the specified locations.
        */
        static fromLocations(locations: Location[]): LocationRect;

        /**
        * Creates a LocationRect from a string with the following format: "north,west,south,east". North, west, south and east specify the coordinate number values.
        * @param str A string that repsents a LocationRect with the format "north,west,south,east".
        * @returns A LocationRect defined by the specified northern and southern latitudes and western and eastern longitudes for the rectangle boundaries that have been parsed by the string.
        */
        static fromString(str: string): LocationRect;

        /**
        * Gets a copy of the LocationRect object.
        * @retruns A copy of the LocationRect object.
        */
        public clone(): LocationRect;

        /**
        * Gets whether the specified Location is within the LocationRect.
        * @returns A boolean indicating if a location is within a LocationRect.
        */
        public contains(location: Location): boolean;

        /**
         * Determines if the LocationRect crosses the 180th meridian.
         * @returns A boolean indicating if the LocationRect crosses the international date line (-180/180 degrees longitude).
         */
        public crossesInternationalDateLine(): boolean;

        /**
        * Gets the longitude that defines the eastern edge of the LocationRect.
        * @returns The eastern longitude value of the LocationRect.
        */
        public getEast(): number;

        /**
        * Gets the latitude that defines the northern edge of the LocationRect.
        * @returns The northern latitude value of the LocationRect.
        */
        public getNorth(): number;

        /**
        * Gets the Location that defines the northwest corner of the LocationRect.
        * @returns The northwest corner location of the LocationRect.
        */
        public getNorthwest(): Location;

        /**
        * Gets the latitude that defines the southern edge of the LocationRect.
        * @returns The southern latitude value of the LocationRect.
        */
        public getSouth(): number;

        /**
        * Gets the Location that defines the southeast corner of the LocationRect.
        * @returns The southeast corner location of the LocationRect.
        */
        public getSoutheast(): Location;

        /**
        * Gets the latitude that defines the western edge of the LocationRect.
        * @returns The western longitude value of the LocationRect.
        */
        public getWest(): number;

        /**
        * Gets whether the specified LocationRect intersects with this LocationRect.
        * @param rect A second LocationRect to test for intersection with.
        * @returns A boolean indicating if a second LocationRect interests with this LocationRect.
        */
        public intersects(rect: LocationRect): boolean;

        /**
         * Scales the size of a LocationRect by multiplying the width and height properties by a percentage.
         * @param percentage A percentage value to increase the size of the LocationRect by.
         */
        public inflate(percentage: number): void;

        /**
         * If a LocationRect crosses the international date line, this method splits it into two LocationRect objects and returns them as an array.
         * @returns An array of LocationRects, that are split by the international date line (-180/180 degrees longitude)
         */
        public splitByInternationalDateLine(): LocationRect[];

        /**
        * Converts the LocationRect object to a string.
        * @returns A string version of the LocationRect.
        */
        public toString(): string;
    }

    /** The map object generates an interactive map within a specified DOM element. */
    export class Map {
        /** Entities of the map */
        public entities: EntityCollection;

        /** Set of map layers */
        public layers: LayerCollection;

        /**
         * @constructor
         * @param parentElement The parent element of the map as a CSS selector string or HTMLElement.
         * @param options Options used when creating the map.
         */
        constructor(parentElement: string | HTMLElement, options: IMapLoadOptions);

		/**
		* Gets the streetside panorama information closest to the specified bounding box and returns using a success callback function.
		* This information can then be used to set the map view to that streetside panorama.
		*/
        public static getClosestPanorama(bounds: LocationRect, success: (panoramaInfo: IPanoramaInfo) => void, missingCoverage: () => void): void;

        /** Returns the branch name; release, experimental, frozen. */
        public static getVersion(): string;


        /** Deletes the Map object and releases any associated resources. */
        public dispose(): void;

        /**
         * Gets the location rectangle that defines the boundaries of the current map view.
         * @returns The location rectangle that defines the boundaries of the current map view.
         */
        public getBounds(): LocationRect;

        /**
         * Gets the location of the center of the current map view.
         * @returns The location of the center of the current map view.
         */
        public getCenter(): Location;

        /**
          * Gets to the specified callback an array of strings representing the attributions of the imagery currently displayed on the map.
          * @param callback The callback function that needs to be called after retrieving the copyright information.
          */
        public getCopyrights(callback: (copyrights: string[]) => void): void;

        /**
         * Gets the session ID. This method calls the callback function with the session ID as the first parameter
         * @param callback The callback function that needs to be called with the session id.
         */
        public getCredentials(callback: (creds: string) => void): void;

        /**
         * Gets the current culture.
         * @returns The current culture.
         */
        public getCulture(): string;

        /**
         * Gets the height of the map control.
         * @returns The height of the map control.
         */
        public getHeight(): number;

        /**
         * Returns the heading of the current map view.
         * @returns Returns the heading of the current map view.
         */
        public getHeading(): number;

        /**
         * Gets the string that represents the imagery currently displayed on the map.
         * @returns The string that represents the imagery currently displayed on the map.
         */
        public getImageryId(): string;

        /**
         * Gets a string that represents the current map type displayed on the map.
         * @returns A string that represents the current map type displayed on the map.
         */
        public getMapTypeId(): MapTypeId;

        /**
         * Gets the current scale in meters per pixel of the center of the map.
         * @returns The current scale in meters per pixel of the center of the map.
         */
        public getMetersPerPixel(): number;

        /**
         * Gets the map options that have been set.
         * @returns the map options that have been set.
         */
        public getOptions(): IMapOptions;

        /**
         * Gets the x coordinate of the top left corner of the map control, relative to the page.
         * @returns The x coordinate of the top left corner of the map control, relative to the page.
         */
        public getPageX(): number;

        /**
         * Gets the y coordinate of the top left corner of the map control, relative to the page.
         * @returns The y coordinate of the top left corner of the map control, relative to the page.
         */
        public getPageY(): number;

        /**
         * Returns the pitch of the current streetside map view.
         * @returns Returns the pitch of the current streetside map view.
         */
        public getPitch(): number;

        /**
         * Gets the map root node.
         * @returns the map root node.
         */
        public getRootElement(): HTMLElement;

        /**
         * Gets the user region.
         * @returns The user region.
         */
        public getUserRegion(): string;

        /**
         * Gets the width of the map control.
         * @returns the width of the map control.
         */
        public getWidth(): number;

        /**
         * Gets the zoom level of the current map view.
         * @returns Returns the zoom level of the current map view.
         */
        public getZoom(): number;

        /**
         * Gets the range of valid zoom levels for the current map view.
         * @returns The range of valid zoom levels for the current map view.
         */
        public getZoomRange(): IRange;

        /**
         * Gets a boolean indicating whether the map is in a regular Mercator nadir mode.
         * @returns A boolean indicating whether the map is in a regular Mercator nadir mode.
         */
        public isMercator(): boolean;

        /**
         * Gets a boolean indicating if the current map type allows the heading to change; false if the display heading is fixed.
         * @returns true if the current map type allows the heading to change; false if the display heading is fixed.
         */
        public isRotationEnabled(): boolean;

        /**
         * Sets the current map type.
         * @param mapTypeId The map imagery type of the map to set.
         */
        public setMapType(mapTypeId: MapTypeId): void;

        /**
         * Sets the map options.
         * @param options The map options to be set.
         */
        public setOptions(options: IMapOptions): void;

        /**
         * Sets the view of the map.
         * @param viewOptions The view options to be set.
         */
        public setView(viewOptions: IViewOptions): void;

        /**
         * Converts a specified Location or a Location array to a Point or Point array on the map
         * relative to the specified PixelReference. If no reference is specified, PixelReference.viewport
         * is taken.
         * @param location The given Location or Location[] to convert.
         * @param reference The PixelReference to specify the reference point.
         * @returns The converted Point or Point[], or null if the conversion fails.
         */
        public tryLocationToPixel(location: Location | Location[], reference?: any): Point | Point[];

        /**
         * Converts a specified Point or a Point array to a Location or Location array on the map
         * relative to the specified PixelReference. If no reference is specified, PixelReference.viewport
         * is taken.
         * @param point The given Point or Point[] to convert.
         * @param reference The PixelReference to specify the reference point.
         * @returns The converted Location or Location[], or null if the conversion fails.
         */
        public tryPixelToLocation(point: Point | Point[], reference?: any): Location | Location[];
    }

    /**
    * This class is used to represent a pixel coordinate or offset. This is often used by pushpin anchors, and map location to pixel conversion calculations.
    */
    export class Point {
        /** The x coordinate */
        public x: number;

        /** The y coordinate */
        public y: number;

        /**
        * @constructor
        * @param x The x coordinate.
        * @param y The y coordinate.
        */
        constructor(x: number, y: number);

        /**
        * Adds the x and y values of two points and returns a new Point.
        * @param point The point to add.
        * @returns A new point created by the sum of two points.
        */
        public add(point: Point): Point;

        /**
        * Creates a copy of the current point.
        * @returns A new instance of the current point.
        */
        public clone(): Point;

        /**
        * Compares the x and y values of two points to see if they are equal. If a tolerance value is specified, it checks to see if the linear distance between the points is less than or equal to the tolerance value.
        * @param point The point to compare to.
        * @param tolerance Optional, tolerance (>= 0) to avoid false result because of floating point errors.
        * @returns true if this point equals point, false otherwise
        */
        public equals(point: Point, tolerance?: number): boolean;

        /**
        * Subtracts the x and y values of a points and returns a new Point.
        * @param point The point to subtract.
        * @returns A new point created by the subtraction of two points.
        */
        public subtract(point: Point): Point;

        /**
        * Converts the Point to a string representation.
        * @returns A string representation of the point.
        */
        public toString(): string;
    }

    /**
   * This compression algorithm encodes/decodes an array of locations into a string.
   * This algorithm is used for generating a compressed collection of locations for use
   * with the Bing Maps REST Elevation Service. This algorithm is also used for decoding
   * the compressed coordinates returned by the GeoData API.
   *
   * These algorithms come from the following documentation:
   * http://msdn.microsoft.com/en-us/library/jj158958.aspx
   * http://msdn.microsoft.com/en-us/library/dn306801.aspx
   */
    export class PointCompression {
        /**
        * Decodes a collection of locations from a compressed string.
        * @param value Compressed string to decode.
        * @returns An array of locations that have been decoded from the compressed string.
        */
        public static decode(value: string): Location[];

        /**
        * Compresses an array of locations into a string.
        * @param locations Collection of coordinates to compress.
        * @returns A compressed string representing an array of locations.
        */
        public static encode(locations: Location[]): string;
    }

    /**
   * A polygon is an area defined by a closed ring of locations. A simple polygon consists of an array of Location objects that form a boundary.
   * A complex polygon consists of several arrays of Locations, where the first array is the outline of the polygon, and the subsequent arrays are holes in the polygon.
   * The Polygon class derives from the IPrimitive interface.
   */
    export class Polygon implements IPrimitive {
        /**
         * Information that is linked to the polygon.
         * Some modules such as the GeoJSON, and Spatial Data Service modules will also often add information to this property.
         */
        public metadata: any;

        /**
         * @constructor
         * @param rings A Location array for basic polygon with single outer perimeter,
         * or an array of Location arrays for advanced polygon (multi-polygon, polygon with holes, or combination of polygons).
         * @param options Options used to customize polygon.
         */
        constructor(rings: Location[] | Location[][], options?: IPolygonOptions);

        /**
         * Gets the css cursor value when polygon has events on it.
         * @returns CSS cursor string when polygon has events on it.
         */
        public getCursor(): string;

        /**
        * Gets the fill color of the inside of the polygon. Will be string or Color object depending on the the what method was used in the pushpin options.
        * @returns The fill color of the inside of the polygon.
        */
        public getFillColor(): string | Color;

        /**
         * Returns whether the polygon is generalizable based on zoom level or not.
         * @returns whether the polygon is generalizable based on zoom level or not.
         */
        public getGeneralizable(): boolean;

        /**
         * Gets the first ring of the polygon (for V7 compatability).
         * @returns An array of Locations that is the first ring of the polygon; or an empty array if the polygon has no ring at all.
         */
        public getLocations(): Location[];

        /**
         * Gets an array of location arrays, where each location array defines a ring of the polygon.
         * @returns An array of location arrays, where each location array defines a ring of the polygon.
         */
        public getRings(): Location[][];

        /**
         * Gets the color of the border stroke of the polygon. Will be string or Color object depending on the the what method was used in the pushpin options.
         * @returns The color of the border stroke of the polygon.
         */
        public getStrokeColor(): string | Color;

        /**
         * Gets the stroke dash array of the polygon, in format of either array or string, whichever user provides.
         * @returns The stroke dash array of the polygon.
         */
        public getStrokeDashArray(): number[] | string;

        /**
         * Gets the thickness of the border stroke of the polygon.
         * @returns The thickness of the border stroke of the polygon as a number.
         */
        public getStrokeThickness(): number;

        /**
         * Gets whether the polygon is visible.
         * @returns A boolean indicating whether the polygon is visible or not.
         */
        public getVisible(): boolean;

        /**
         * Sets locations (single ring) of the polygon. (for V7 compatability)
         * @param locations A Location[] that defines the only ring of the polygon
         */
        public setLocations(locations: Location[]): void;

        /**
         * Sets the properties for the polygon.
         * @param options The IPolygonOptions object containing the options to customize the polygon.
         */
        public setOptions(options: IPolygonOptions): void;

        /**
         * Sets rings of the polygon.
         * @param rings A Location[][] where each Location[] defines a ring of the polygon.
         */
        public setRings(rings: Location[] | Location[][]): void;
    }

    /**
    * Polylines allow you to draw connected lines on a map. In many spatial database systems, this is also known as a LineString.
    * The Polyline class derives from the IPrimitive interface.
    */
    export class Polyline implements IPrimitive {
        /**
         * Information that is linked to the polyline.
         * Some modules such as the GeoJSON, and Spatial Data Service modules will also often add information to this property.
         */
        public metadata: any;

        /**
        * @constructor
        * @param locations An array of locations that make up the path of the polyine.
        * @param options Options used to customize polyline.
        */
        constructor(locations: Location[], options?: IPolylineOptions);

        /**
         * Gets the css cursor value when polyline has events on it.
         * @returns CSS cursor string when polyline has events on it.
         */
        public getCursor(): string;

        /**
         * Returns whether the polyline is generalizable based on zoom level or not.
         * @returns whether the polyline is generalizable based on zoom level or not.
         */
        public getGeneralizable(): boolean;

        /**
         * Gets the locations that make up the polyline.
         * @returns An array that defines the path of the polyline.
         */
        public getLocations(): Location[];

        /**
         * Gets the color of the border stroke of the polyline. Will be string or Color object depending on the the what method was used in the polyline options.
         * @returns The stroke color of the polyline.
         */
        public getStrokeColor(): string | Color;

        /**
         * Gets the stroke dash array of the polyline, in format of either array or string, whichever user provides.
         * @returns The stroke dash array of the polyline.
         */
        public getStrokeDashArray(): number[] | string;

        /**
         * Gets the thickness of the border stroke of the polyline.
         * @returns The thickness of the border stroke of the polyline as a number.
         */
        public getStrokeThickness(): number;

        /**
         * Gets whether the polyline is visible.
         * @returns A boolean indicating whether the polyline is visible or not.
         */
        public getVisible(): boolean;

        /**
         * Sets locations of the polyline.
         * @param locations A Location[] that defines path of the polyline
         */
        public setLocations(locations: Location[]): void;

        /**
         * Sets the properties for the polyline.
         * @param options The IPolylineOptions object containing the options to customize the polyline.
         */
        public setOptions(options: IPolylineOptions): void;
    }

    /**
    * Pushpins, sometimes also referred to as markers or MapIcons on other mapping platforms, are one of the primary ways of marking a location on a map.
    * The Pushpin class derives from the IPrimitive interface.
    */
    export class Pushpin implements IPrimitive {

        /**
         * Information that is linked to the pushpin.
         * Some modules such as the GeoJSON, and Spatial Data Service modules will also often add information to this property.
         */
        public metadata: any;

        /**
        * @constructor
        * @param location A Location object that specifies where to display the pushpin.
        * @param options Options used when creating the Pushpin.
        */
        constructor(location: Location, options?: IPushpinOptions);

        /**
         * Gets the point on the Pushpin icon which is anchored to the pushpin location.
         * An anchor of (0,0) is the top left corner of the icon.
         * @returns The point on the Pushpin icon which is anchored to the pushpin location.
         */
        public getAnchor(): Point;

        /**
         * Gets whether the pushpin clicked style is enabled
         * @returns Whether the pushpin clicked style is enabled.
         */
        public getClickedStyleEnabled(): boolean;

        /**
         * Gets the color option of the pushpin.
         * @returns The color option of the pushpin.
         */
        public getColor(): string | Color;

        /**
        * Gets the css cursor value when pushpin has events on it.
        * @returns CSS cursor string when pushpin has events on it.
        */
        public getCursor(): string;

        /**
         * Gets a boolean indicating if the pushpin is draggable or not.
         * @returns A boolean indicating if the pushpin is draggable or not.
         */
        public getDraggable(): boolean;

        /**
         * Gets whether the pushpin hover style is enabled
         * @returns Whether the pushpin hover style is enabled.
         */
        public getHoverStyleEnabled(): boolean;

        /**
         * Gets the custom Pushpin source icon string which can be a url to an image or SVG, inline SVG string, or data URI.
         * @returns the custom Pushpin icon source string, which can be a url to an image or SVG, inline SVG string, or data URI.
         */
        public getIcon(): string;

        /**
         * Returns the location of the pushpin.
         * @returns The location of the pushpin.
         */
        public getLocation(): Location;

        /**
         * Returns whether the clickable area of the pushpin is an ellipse.
         * @returns A boolean indicating whether the clickable area of the pushpin is an ellipse.
         */
        public getRoundClickableArea(): boolean;

        /**
         * Gets the subtitle label of the Pushpin.
         * @returns The subtitle label of the Pushpin.
         */
        public getSubTitle(): string;

        /**
         * Gets the text within the Pushpin icon.
         * @returns The text within the Pushpin icon.
         */
        public getText(): string;

        /**
         * Gets the amount the text is shifted from the Pushpin icon.
         * @returns the amount the text is shifted from the Pushpin icon.
         */
        public getTextOffset(): Point;

        /**
         * Gets the title label of the Pushpin.
         * @returns the title label of the Pushpin.
         */
        public getTitle(): string;

        /**
         * Gets whether the pushpin is visible.
         * @returns A boolean indicating whether the pushpin is visible or not.
         */
        public getVisible(): boolean;

        /**
         * Sets the location of the Pushpin.
         * @param location The location of the Pushpin.
         */
        public setLocation(location: Location): void;

        /**
         * Sets the properties for the pushpin.
         * @param options The IPushpinOptions object containing the options to customize the pushpin.
         */
        public setOptions(options: IPushpinOptions): void;
    }

    /**
    * Used to represent the location of a map tile in the quadkey tile pyramid system used by the map.
    * If using a tile source where the uriConstructor property is set to a callback function, that callback function will recieve
    * an instance of the PyramidTileId class.
    */
    export class PyramidTileId {
        /** The height of the tile. */
        public pixelHeight: number;

        /** The width of the tile. */
        public pixelWidth: number;

        /** The quadkey ID of the tile. */
        public quadKey: string;

        /** The x tile coordinate. */
        public x: number;

        /** The y tile coordinate. */
        public y: number;

        /** The zoom level of the tile. */
        public zoom: number;

        /**
         * @constructor
         * @param x The integer x position of the tile within the tile layer at the specified zoom level.
         * @param y The integer y position of the tile within the tile layer at the specified zoom level.
         * @param zoom The zoom level of the tile.
         * @param width The tile's width in pixels. Default value: 256
         * @param height The tile's height in pixels. Default value: 256
         */
        constructor(x: number, y: number, zoom: number, width?: number, height?: number)

        /**
         * Compares two PyramidTileId objects and returns a boolean indicating if the two PyramidTileId are equal.
         * @param tileId1 The first PyramidTileId to compare to the second.
         * @param tileId2 The second PyramidTileId to compare to the first.
         * @returns A boolean indicating if the two PyramidTileId are equal.
         */
        public static areEqual(tileId1: PyramidTileId, tileId2: PyramidTileId): boolean;

        /**
         * Generates a PyramidTileId from a quadkey tile id string.
         * @param quadkey The quadkey tile id string to convert into a PyramidTileId object.
         * @param width The tile's width in pixels. Default value: 256
         * @param height The tile's height in pixels. Default value: 256
         */
        public static fromQuadKey(quadkey: string, width?: number, height?: number): PyramidTileId;
    }

    /** Provides static functions for generating random test data. */
    export class TestDataGenerator {
        /**
        * Generates a random hex or rgba color string.
        * @param withAlpha A boolean indicating if the color should have an alpha value or not. if set to true, a rgba value will be returned with an alpha value of 0.5.
        * @returns A css color string, hex or rgba.
        */
        public static getColor(withAlpha?: boolean): string;

        /**
        * Generates random Location objects.
        * @param num The number of locations to generate. If set to one a single Location will be returned. If greater than one and array will be returned.
        * @param bounds The bounding box in which all the locations should fall within.
        * @returns One or more random Locations.
        */
        public static getLocations(num?: number, bounds?: LocationRect): Location | Location[];

        /**
        * Generates random pushpins.
        * @param num The number of pushpins to generate. If set to one a single Pushpin will be returned. If greater than one and array will be returned.
        * @param bounds The bounding box in which all the pushpins should fall within.
        * @param options The options to use for rendering the pushpins. Default is random.
        * @returns One or more random Pushpins.
        */
        public static getPushpins(num?: number, bounds?: LocationRect, options?: IPushpinOptions): Pushpin | Pushpin[];

        /**
        * Generates random polylines.
        * @param num The number of polylines to generate. If set to one a single Polyline will be returned. If greater than one and array will be returned.
        * @param bounds The bounding box in which all the locations of the polylines should fall within.
        * @param size The number of locations each polylines should have. Default: random between 3 and 10.
        * @param scaleFactor A number that scales the size of the polylines based on size of the bounding box. A value of 0.1 would generate polylines that are no larger than 10% of the width/height of the map. Default: 0.1
        * @param options The options to use for rendering the polylines. Default is random.
        * @returns One or more random Polylines.
        */
        public static getPolylines(num?: number, bounds?: LocationRect, size?: number, scaleFactor?: number, options?: IPolylineOptions): Polyline | Polyline[];

        /**
        * Generates random polygons.
        * @param num The number of polygons to generate. If set to one a single Polygon will be returned. If greater than one and array will be returned.
        * @param bounds The bounding box in which all the locations of the polygon should fall within.
        * @param size The number of locations each polygon should have. Default: random between 3 and 10.
        * @param scaleFactor A number that scales the size of the polygons based on the size of the bounding box. A value of 0.1 would generate polygons that are no larger than 10% of the width/height of the map. Default: 0.1
        * @param options The options to use for rendering the polygons. Default is random.
        * @param addHole A boolean indicating if the generated polygon should have a hole or not. Note that this will double the number of Location objects that are in the Polygon. Default: false
        * @returns One or more random polygons.
        */
        public static getPolygons(num?: number, bounds?: LocationRect, size?: number, scaleFactor?: number, options?: IPolygonOptions, addHole?: boolean): Polygon | Polygon[];
    }

    /** Represents a tile layer that can be overlaid on top of the map. */
    export class TileLayer implements ILayer {
        /**
        * @constructor
        * @param options The options to use to define the tile layer.
        */
        constructor(options: ITileLayerOptions);

        /**
        * Gets the opacity of the tile layer, defined as a double between 0 (not visible) and 1.
        * @returns The opacity of the tile layer, defined as a double between 0 (not visible) and 1.
        */
        public getOpacity(): number;

        /**
        * Gets the tile source of the tile layer.
        * @returns The tile source of the tile layer.
        */
        public getTileSource(): TileSource;

        /**
        * Gets a boolean that indicates if the tile layer is visible or not.
        * @returns A boolean that indicates if the tile layer is visible or not.
        */
        public getVisible(): boolean;

        /**
        * Gets the zIndex of the tile layer.
        * @returns The zIndex of the tile layer.
        */
        public getZIndex(): number;

        /**
        * Sets the opacity of the tile layer. Value must be a number between 0 and 1.
        * @param opacity The opacity of the tile layer. Value must be a number between 0 and 1.
        */
        public setOpacity(opacity: number): void;

        /**
        * Sets options for the tile layer.
        * @param options The options for the tile layer.
        */
        public setOptions(options: ITileLayerOptions): void;

        /**
        * Sets the visibility of the tile layer.
        * @param show A boolean indicating if the tile layer should be visible or not.
        */
        public setVisible(show: boolean): void;

        /**
        * Sets the zIndex of the tile layer.
        * @param idx The zIndex of the tile layer.
        */
        public setZIndex(idx: number): void;
    }

    /** Defines the data source for a tile layer. */
    export class TileSource {
        /**
        * @constructor
        * @param options The options to use to define the tile source.
        */
        constructor(options: ITileSourceOptions);

        /**
        * Gets the specified bounding box of the of the tile source.
        * @returns The specified bounding box of the of the tile source.
        */
        public getBounds(): LocationRect;

        /**
        * Gets the pixel height of each tile in the tile source.
        * @returns The pixel height of each tile in the tile source.
        */
        public getHeight(): number;

        /**
        * Gets the maximum zoom level specified for the tile source.
        * @returns The maximum zoom level specified for the tile source.
        */
        public getMaxZoom(): number;

        /**
        * Gets the minimum zoom level specified for the tile source.
        * @returns The minimum zoom level specified for the tile source.
        */
        public getMinZoom(): number;

        /**
        * Gets a string that constructs tile URLs used to retrieve tiles for the tile layer.
        * @returns A string that constructs tile URLs used to retrieve tiles for the tile layer.
        */
        public getUriConstructor(): string | ((tile: PyramidTileId) => string);

        /**
        * Gets the pixel width of each tile in the tile source.
        * @returns The pixel width of each tile in the tile source.
        */
        public getWidth(): number;
    }
}
