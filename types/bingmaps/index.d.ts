// Type definitions for Microsoft.Maps 8.0 (Change set 60e5430)
// Project: https://github.com/Microsoft/Bing-Maps-V8-TypeScript-Definitions
// Definitions by: Ricky Brundritt <https://github.com/rbrundritt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 *  The Bing Maps V8 developer API.
 */
declare module Microsoft.Maps {

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

        /** Restaurant, café, etc. */
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

        /** Extracted pitches such as a baseball field or tennis court. */
        playingField?: IMapElementStyle;

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
        /** The pixel is defined relative to the map control’s root element, where the top left corner of the map control is (0, 0). */
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
        * subdivision. An example is a US state, such as “Oregon”.
        */
        adminDistrict: string;

        /** The country or region name of the address. */
        countryRegion: string;

        /** A string specifying the two-letter ISO country code. */
        countryRegionISO2: string;

        /** The second, third, or fourth order subdivision within a country, dependency, or region. An example is a US county, such as “King”. */
        district: string;

        /** A nicely formatted address string for the result. */
        formattedAddress: string;

        /** The locality, such as the primary city, that corresponds to an address. An example is “Seattle”. */
        locality: string;

        /** The post code, postal code, or ZIP code of an address. An example is a US ZIP code, such as “98152”. */
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
        * Specifies if the custom overlay should be rendered above or below the label layer of the map. When above,
        * elements in the overlay can be clickable. Default: True
        *
        * This can only be set when creating the overlay.
        */
        beneathLabels?: boolean;
    }

    /** Base data layer interface. */
    export interface IDataLayer extends ILayer {
        /** Clears all data in the layer. */
        clear(): void;	
    }
		
    /** A standard dictionary object (associative array). */
    export interface IDictionary<T> {
        [K: string]: T;
    }

    /** Event args included in entity collection events. */
    export interface IEntityCollectionChangedEventArgs {
        /** The entity collection the event was triggered from. */
        collection: EntityCollection;

        /** The IPrimitive object that the event occurred for. */
        data: IPrimitive;
    }

    /**
     * The options that specify how to render a ground overlay on the map.
     */
    export interface IGroundOverlayOptions extends ICustomOverlayOptions {
        /** A background color that fills the bounding box area beneath the ground overlay. */
        backgroundColor?: string | Color;

        /** The bounding box to anchor the ground overlay to. This is required when creating a ground overlay. */
        bounds?: LocationRect;

        /** The URL to the image to anchor to the map as a ground overlay. This is required when creating a ground overlay. */
        imageUrl?: string;

        /** The opacity of the ground overlay image. */
        opacity?: number;

        /** An angle in degrees to rotate the overlay in a counter-clockwise direction where 0 = north, 90 = west, 180 = south, 270 = east */
        rotation?: number;

        /** A boolean value indicating if the ground overlay is visible or not. */
        visible?: boolean;
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

        /** The location on the map where the infobox’s anchor is attached. */
        location?: Location;

        /** The maximium size that the infobox height can expand to based on it’s content. Default: 126 **/
        maxHeight?: number;

        /** The maximium size that the infobox width can expand to based on it’s content. Default: 256 **/
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

        /**
        * A boolean indicating whether to disable the bird’s eye map type. The default value is false. If this property is set to true, bird’s eye will be removed
        * from the map navigation control and the birdseye MapTypeId is disabled. Additionally, the auto map type will only display road or aerial.
        * This property can only be set when using the Map constructor.
        */
        disableBirdseye?: boolean;
		
		/** A boolean value indicating whether to disable the user’s ability to control the using the keyboard. Default: false */
		disableKeyboardInput?: boolean;

        /** A boolean value indicating if mousing over the map type selector should open it or not. Default: false */
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
        * A boolean value indicating if CORS (Cross-origin Resource Sharing) should be enabled for tiles. Useful if directly accessing the canvas to generate an image of the map. Default: false
        * Known Limitations: IE and Edge will not cache tiles when CORS is enabled. Chrome throws errors when this property is set enabled and custom tile layers don’t have CORS enabled on the server.
        * This property can only be set when using the Map constructor.
        */
        enableCORS?: boolean;

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
        * A boolean value indicating whether to display the “breadcrumb control”. The breadcrumb control shows the current center location’s geography hierarchy.
        * The default value is false. Requires the showLocateMeButton map option to be set to true. The breadcrumb control displays best when the width of the map
        * is at least 400 pixels.
        */
        showBreadcrumb?: boolean;

        /**
        * A boolean value indicating whether to show the map navigation control. Default: true This property can only be set when using the Map constructor.
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

        /** The type of the object that the event is attached to. Valid values include the following: ‘map’, 'layer', ‘polygon’, ‘polyline’, or ‘pushpin’ */
        targetType: string;

        /**	The number of units that the mouse wheel has changed. */
        wheelDelta: number;

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
        mercator?: TileSource;

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
        * build custom tile URL’s that may require some additional calculations for a tile.
        */
        uriConstructor: string | ((tile: PyramidTileId) => string);
    }

    /** Represents options that can be used to set the view of the map. */
    export interface IViewOptions {
        /** The bounding rectangle of the map view. If both bounds and center are specified, bounds takes precedence over center. */
        bounds?: LocationRect;

        /** The location of the center of the map view. If both bounds and center are specified, bounds takes precedence over center. */
        center?: Location;

        /**	The amount the center is shifted in pixels.This property is ignored if center is not specified. */
        centerOffset?: Point;

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
     * Microsoft.Maps.Autosuggest, Microsoft.Maps.Clustering, Microsoft.Maps.DataBinning, Microsoft.Maps.Directions, Microsoft.Maps.DrawingTools, Microsoft.Maps.GeoJSON,
     * Microsoft.Maps.GeoXml, Microsoft.Maps.HeatMap, Microsoft.Maps.Search, Microsoft.Maps.SpatialDataService, Microsoft.Maps.SpatialMath, Microsoft.Maps.Traffic,
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
         * click, dblclick, mapresize, maptypechanged, mousedown, mousemove, mouseout, mouseover, mouseup, mousewheel, rightclick, viewchange, viewchangeend, viewchangestart
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
        export function  addHandler(target: Pushpin, eventName: string, handler: (eventArg?: IMouseEventArgs | IPrimitiveChangedEventArgs) => void): IHandlerId;

        /**
        * Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.
        * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
        * @param eventName The type of event to attach. Supported Events:
        * changed, click, dblclick, mousedown, mouseout, mouseover, mouseup
        * @param handler The callback function to handle the event when triggered. 
        * @returns The handler id.
        */
        export function  addHandler(target: Polyline | Polygon, eventName: string, handler: (eventArg?: IMouseEventArgs | IPrimitiveChangedEventArgs) => void): IHandlerId;

        /**
         * Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * click, infoboxChanged, mouseenter, mouseleave
         * @param handler The callback function to handle the event when triggered. 
         * @returns The handler id.
         */
        export function  addHandler(target: Infobox, eventName: string, handler: (eventArg?: IInfoboxEventArgs) => void): IHandlerId;

        /**
         * Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * click, dblclick, mousedown, mouseout, mouseover, mouseup, rightclick
         * @param handler The callback function to handle the event when triggered. 
         * @returns The handler id.
         */
        export function  addHandler(target: Layer, eventName: string, handler: (eventArg?: IMouseEventArgs) => void): IHandlerId;

        /**
        * Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.
        * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
        * @param eventName The type of event to attach. Supported Events:
        * • entityadded
        * • entityremoved
        * @param handler The callback function to handle the event when triggered. 
        * @returns The handler id.
        */
        export function  addHandler(target: EntityCollection, eventName: string, handler: (eventArg?: IEntityCollectionChangedEventArgs) => void): IHandlerId;

        /**
         * Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach.
         * @param handler The callback function to handle the event when triggered. 
         * @returns The handler id.
         */
        export function  addHandler(target: any, eventName: string, handler: (eventArg?: any) => void): IHandlerId;

        /////////////////////////////////////
        /// addOne Definitions
        ////////////////////////////////////

        /**
         * Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported events:
         * click, dblclick, mapresize, maptypechanged, mousedown, mousemove, mouseout, mouseover, mouseup, mousewheel, rightclick, viewchange, viewchangeend, viewchangestart
         * @param handler The callback function to handle the event when triggered.
         */
        export function  addOne(target: Map, eventName: string, handler: (eventArg?: IMouseEventArgs | IMapTypeChangeEventArgs) => void): void;

        /**
         * Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * changed, click, dblclick, drag, dragend, dragstart, mousedown, mouseout, mouseover, mouseup
         * @param handler The callback function to handle the event when triggered.
         */
        export function  addOne(target: Pushpin, eventName: string, handler: (eventArg?: IMouseEventArgs | IPrimitiveChangedEventArgs) => void): void;

        /**
         * Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * changed, click, dblclick, mousedown, mouseout, mouseover, mouseup
         * @param handler The callback function to handle the event when triggered.
         */
        export function  addOne(target: Polyline | Polygon, eventName: string, handler: (eventArg?: IMouseEventArgs | IPrimitiveChangedEventArgs) => void): void;

        /**
         * Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * click, infoboxChanged, mouseenter, mouseleave
         * @param handler The callback function to handle the event when triggered. 
         */
        export function  addOne(target: Infobox, eventName: string, handler: (eventArg?: IInfoboxEventArgs) => void): void;

        /**
         * Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * click, dblclick, mousedown, mouseout, mouseover, mouseup, rightclick
         * @param handler The callback function to handle the event when triggered.
         */
        export function  addOne(target: Layer, eventName: string, handler: (eventArg?: IMouseEventArgs) => void): void;

        /**
         * Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * • entityadded
         * • entityremoved
         * @param handler The callback function to handle the event when triggered.
         */
        export function  addOne(target: EntityCollection, eventName: string, handler: (eventArg?: IEntityCollectionChangedEventArgs) => void): void;

        /**
         * Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach.
         * @param handler The callback function to handle the event when triggered.
         */
        export function  addOne(target: any, eventName: string, handler: (eventArg?: any) => void): void;

        /////////////////////////////////////
        /// addThrottledHandler Definitions
        ////////////////////////////////////

        /**
         * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported events:
         * click, dblclick, mapresize, maptypechanged, mousedown, mousemove, mouseout, mouseover, mouseup, mousewheel, rightclick, viewchange, viewchangeend, viewchangestart
         * @param handler The callback function to handle the event when triggered.
         * @param throttleInterval throttle interval (in ms)
         * @returns The handler id.
         */
        export function  addThrottledHandler(target: Map, eventName: string, handler: (eventArg?: IMouseEventArgs | IMapTypeChangeEventArgs) => void, throttleInterval: number): IHandlerId;

        /**
         * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * changed, click, dblclick, drag, dragend, dragstart, mousedown, mouseout, mouseover, mouseup
         * @param handler The callback function to handle the event when triggered.
         * @param throttleInterval throttle interval (in ms)
         * @returns The handler id.
         */
        export function  addThrottledHandler(target: Pushpin, eventName: string, handler: (eventArg?: IMouseEventArgs | IPrimitiveChangedEventArgs) => void, throttleInterval: number): IHandlerId;

        /**
         * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * changed, click, dblclick, mousedown, mouseout, mouseover, mouseup
         * @param handler The callback function to handle the event when triggered.
         * @param throttleInterval throttle interval (in ms)
         * @returns The handler id.
         */
        export function  addThrottledHandler(target: Polyline | Polygon, eventName: string, handler: (eventArg?: IMouseEventArgs | IPrimitiveChangedEventArgs) => void, throttleInterval: number): IHandlerId;

        /**
        * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
        * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
        * @param eventName The type of event to attach. Supported Events:
        * click, infoboxChanged, mouseenter, mouseleave
        * @param handler The callback function to handle the event when triggered. 
        * @returns The handler id.
        */
        export function  addThrottledHandler(target: Infobox, eventName: string, handler: (eventArg?: IInfoboxEventArgs) => void): IHandlerId;

        /**
         * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * click, dblclick, mousedown, mouseout, mouseover, mouseup, rightclick
         * @param handler The callback function to handle the event when triggered.
         * @param throttleInterval throttle interval (in ms)
         * @returns The handler id.
         */
        export function  addThrottledHandler(target: Layer, eventName: string, handler: (eventArg?: IMouseEventArgs) => void, throttleInterval: number): IHandlerId;

        /**
         * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * • entityadded
         * • entityremoved
         * @param handler The callback function to handle the event when triggered.
         * @param throttleInterval throttle interval (in ms)
         * @returns The handler id.
         */
        export function  addThrottledHandler(target: EntityCollection, eventName: string, handler: (eventArg?: IEntityCollectionChangedEventArgs) => void, throttleInterval: number): IHandlerId;

        /**
         * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach.
         * @param handler The callback function to handle the event when triggered.
         * @param throttleInterval throttle interval (in ms)
         * @returns The handler id.
         */
        export function  addThrottledHandler(target: any, eventName: string, handler: (eventArg?: any) => void, throttleInterval: number): IHandlerId;

        /////////////////////////////////////
        /// All other definitions
        ////////////////////////////////////

        /**
         * Checks if the target has any attached event handler.
         * @param target The object to check if an event is attached to it. 
         * @param eventName The name of the event to check to see is attached.
         * @returns A boolean indicating if the specified event type is attached to the object.
         */
        export function  hasHandler(target: any, eventName: string): boolean;

        /**
         * Invokes an event on the target. This causes all handlers for the specified event name to be called.
         * @param target The object to invoke the event on.
         * @param eventName The name of the event to invoke.
         * @param args Arguments for the event handler.
         */
        export function  invoke(target: any, evenName: string, args: any): void;

        /**
         * Detaches the specified handler from the event. The handlerId is returned by the addHandler and addThrottledHandler methods.
         * @param handlerId The handler id of the event to remove.
         */
        export function  removeHandler(handlerId: IHandlerId): void;
    }

    /**
     * A map overlay that binds an image to a bounding box area on the map.
     */
    class GroundOverlay extends CustomOverlay {

        /** Optional property to store any additional metadata for this layer. */
        metadata: any;

        /**
         * @constructor
         * @param options The options used to render the ground overlay.
         */
        constructor(options: IGroundOverlayOptions);

        /**
         * Gets the background color of the ground overlay.
         * @returns The background color of the ground overlay.
         */
        public getBackgroundColor(): string | Color;

        /**
         * Gets the bounding box that the ground overlay is bounded to.
         * @returns The bounding box that the ground overlay is bounded to.
         */
        public getBounds(): LocationRect;

        /**
         * Gets the url to the ground overlay image.
         * @returns The url to the ground overlay image.
         */
        public getImageUrl(): string;

        /**
         * Gets the opacity of the ground overlay.
         * @returns The opacity of the ground overlay.
         */
        public getOpacity(): number;

        /**
         * Gets the map that this overlay is attached to.
         * @returns The map that this overlay is attached to.
         */
        public getMap(): Map;

        /**
         * Gets the rotation of the ground overlay.
         * @returns The rotation of the ground overlay.
         */
        public getRotation(): number;

        /**
         * Gets a boolean indicating if the ground overlay is visible or not.
         * @returns A boolean indicating if the ground overlay is visible or not.
         */
        public getVisible(): boolean;

        /**
         * Sets the options used to render the ground overlay.
         * @param options The options used to render the ground overlay.
         */
        public setOptions(options: IGroundOverlayOptions): void;

        /**
         * Sets the visibility of the Ground Overlay.
         * @param value A value indicating if the Ground Overlay should be displayed or not.
         */
        public setVisible(visible: boolean): void;
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
        * Gets the location on the map where the infobox’s anchor is attached.
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
         * Calculates the LocationRect for an indivudal shape or an array of shapes.
         * @param shapes An indivudal shape or an array of shapes to calculate the LocationRect for.
         * @returns A LocationRect for the shapes.
         */
        static fromShapes(shapes: IPrimitive | (IPrimitive | IPrimitive[])[]): LocationRect;

        /**
        * Creates a LocationRect from a string with the following format: "north,west,south,east". North, west, south and east specify the coordinate number values.
        * @param str A string that repsents a LocationRect with the format "north,west,south,east".
        * @returns A LocationRect defined by the specified northern and southern latitudes and western and eastern longitudes for the rectangle boundaries that have been parsed by the string.
        */
        static fromString(str: string): LocationRect;

        /**
         * A static function that merges two LocationRect to form a new LocationRect which represents the combined area of the two LocationRect objects.
         * @param rect1 The first LocationRect to merge with the second LocationRect.
         * @param rect2 The second LocationRect to merge with the first LocationRect.
         * @returns A new LocationRect which represents the combined area of the two LocationRect objects.
         */
        static merge(rect1: LocationRect, rect2: LocationRect): LocationRect;

        /**
         * Scales the size of a LocationRect by multiplying the width and height properties by a percentage.
         * @param percentage A percentage value to increase the size of the LocationRect by.
         */
        public buffer(percentage: number): void;

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
		public static getClosestPanorama(bounds: LocationRect, success: (panoramaInfo: IPanoramaInfo) => void, missingCoverage: () => void)	: void;

		/** Returns the branch name; release, experimental, frozen. */
		public static getVersion() : string;

		
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
         /** Optional property to store any additional metadata for this layer. */
        public metadata: any;

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

export module Directions {
    /////////////////////////////////////
    /// Enumerations
    ////////////////////////////////////

    /** Distance units for calculating the directions in. */
    export enum DistanceUnit {

        /** A distance in Kilometers. */
        km,

        /** A distance in Miles. */
        miles
    }

    /** Defines the type of route to calculate. */
    export enum RouteMode {
        /** Driving directions are calculated. */
        driving,

        /** Transit directions are calculated. */
        transit,

        /** Walking directions are calculated. */
        walking
    }

    /** Defines features to avoid when calculating the route. */
    export enum RouteAvoidance {
        /** Calculate the best route using any travel option available. */
        none = 0,

        /** Reduce the use of limited access highways when calculating the route. */
        minimizeHighways = 1,

        /** Reduce the use of roads with tolls when calculating the route. */
        minimizeToll = 2,

        /** Avoid using limited access highways when calculating the route. */
        avoidHighways = 4,

        /** Avoid using roads with tolls when calculating the route. */
        avoidToll = 8,

        /** Avoid using express trains when calculating the route. This option only affects routes with a transitRouteMode that have the culture set to ja-jp. */
        avoidExpressTrain = 16,

        /** Avoid using airlines when calculating the route. This option only affects routes with a transitRouteMode that have the culture set to ja-jp. */
        avoidAirline = 32,

        /** Avoid using bullet trains when calculating the route. This option only affects routes with a transitRouteMode that have the culture set to ja-jp. */
        avoidBulletTrain = 64
    }

    /** Response codes for a route calculation request. */
    export enum RouteResponseCode {
        /** The route was successfully calculated. */
        success = 0,

        /** An unknown error has occurred. */
        unknownError = 1,

        /** A nearby road cannot be found for one or more of the route waypoints. */
        cannotFindNearbyRoad = 2,

        /**
        * The distance between two route waypoints, or the total length of the route exceeds the limit of the route mode.
        * Modify the waypoint locations so that they are closer together.
        */
        tooFar = 3,

        /**
        * A route cannot be calculated for the specified waypoints. For example, this code is returned when a route between
        * “Seattle, WA” and “Honolulu, HI” is requested.
        */
        noSolution = 4,

        /** There is no route data for the specified waypoints. */
        dataSourceNotFound = 5,

        /** There are no transit options available for the specified time. */
        noAvailableTransitTrip = 7,

        /** The transit stops are so close that walking is always a better option. */
        transitStopsTooClose = 8,

        /** The transit stops are so close that walking is a better option. */
        walkingBestAlternative = 9,

        /**
        * There is no transit data available for the route or for one or more of the specified waypoints,
        * or the waypoints are in different transit areas that do not overlap.
        */
        outOfTransitBounds = 10,

        /** The directions calculation request has timed out. */
        timeOut = 11,

        /**
        * One or more waypoints need to be disambiguated. This error does not occur if the
        * autoDisplayDisambiguation directions render option is set to true.
        */
        waypointDisambiguation = 12,

        /** One or more waypoints do not have an address or location specified. */
        hasEmptyWaypoint = 13,

        /** The maximum number of waypoints, which is 25, has been exceeded. */
        exceedMaxWaypointLimit = 14,

        /** At least two waypoints are required to calculate a route. */
        atleastTwoWaypointRequired = 15,

        /** The first or last waypoint is a via point, which is not allowed. */
        firstOrLastStoppointIsVia = 16,

        /** The search service failed to return results. */
        searchServiceFailed = 17,

        /** The credentials passed to the Directions module are invalid. */
        invalidCredentials = 18
    }

    /** Defines optimization options for calculating directions. */
    export enum RouteOptimization {
        /** Calculate a route the shortest time. */
        shortestTime = 0,

        /** Calculate a route with the shortest distance. */
        shortestDistance = 1,

        /** The route is calculated to minimize the time and uses current traffic information. */
        timeWithTraffic = 2,

        /** The route is calculated to minimize the time and avoid road closures. Traffic information is not used in the calculation. */
        timeAvoidClosure = 3,

        /** Minimize the cost when calculating directions. This option only affects routes with a transitRouteMode that have the culture set to ja-jp.*/
        minimizeMoney = 4,

        /** Minimize transit transfers when calculating directions. This option only affects routes with a transitRouteMode that have the culture set to ja-jp.*/
        minimizeTransfers = 5,

        /** Minimize the amount of walking when calculating directions. This option only affects routes with a transitRouteMode that have the culture set to ja-jp.*/
        minimizeWalking = 6
    }

    /** An enumeration that specifies the releance of a dateTime when calculating a route. */
    export enum TimeType {
        /** The dateTime parameter contains the desired arrival time for a transit request. */
        arrival,

        /** The dateTime parameter contains the desired departure time for a transit request. */
        departure,

        /** The dateTime parameter should be ignored and the first available transit taken. */
        firstAvailable,

        /** The dateTime parameter contains the latest departure time available for a transit request.  */
        lastAvailable
    }

    /////////////////////////////////////
    /// Interfaces
    ////////////////////////////////////

    /** Contains the arguments for directions events. */
    export interface IDirectionsEventArgs {
        /** The calculated route (or routes, if the route mode is transit). */
        route: IRoute[];

        /** The route summary (or summaries) of the route(s) defined in the route property. */
        routeSummary: IRouteSummary[];
    }

    /** Contains arguments for directions error events. */
    export interface IDirectionsErrorEventArgs {
        /** The code which identifies the error that occurred. */
        responseCode: RouteResponseCode;

        /** The error message. */
        message: string;
    }

    /** Represents one direction in a set of route directions. */
    export interface IDirectionsStep {
        /** The child direction items for this directions step. */
        childItineraryItems: IDirectionsStep[];

        /** The location of the start of the direction. */
        coordinate: Location;

        /** The total distance of the step in the unit specified in the distanceUnit property of the DirectionsRequestOptions. */
        distance: string;

        /** The total time, in seconds, of the direction step. */
        durationInSeconds: number;

        /** The HTML formatted route instruction associated with the step. */
        formattedText: string;

        /** A boolean indicating whether the maneuver image is a road shield image. */
        isImageRoadShield: boolean;

        /** The type of maneuver being performed. */
        maneuver: string;

        /** An array of strings, where each string is a hint to help determine when to move to the next direction step. Not all direction steps have hints. */
        postIntersectionHints: string[];

        /** An array of strings, where each string is a hint to help determine when you have arrived at this direction step. Not all direction steps have hints. */
        preIntersectionHints: string[];

        /** The name of the transit stop where this step originates. */
        startStopName: string;

        /** The transit line associated with this step. */
        transitLine: ITransitLine;

        /** The URL of the image to use for transit direction steps. */
        transitStepIcon: string;

        /** The ID of the transit stop. */
        transitStopId: string;

        /** The name of the transit line end. */
        transitTerminus: string;

        /** An array of route warnings associated with this step. */
        warnings: IDirectionsStepWarning[];
    }

    /** Represents a route direction warning, such as a traffic congestion warning. */
    export interface IDirectionsStepWarning {
        /** Where the warning starts. */
        origin: string;

        /** The severity of the warning. Values can be: Low Impact, Minor, Moderate, Serious or None. */
        severity: string;

        /** The warning text. */
        text: string;

        /** Where the warning ends. */
        to: string;

        /** The type of warning. A list of Warning type values can be found here: https://msdn.microsoft.com/en-us/library/hh441731.aspx */
        warningType: string;
    }

    /** Represents a route. */
    export interface IRoute {
        /** The legs of the route. Each route leg represents the route between two waypoints. */
        routeLegs: IRouteLeg[];

        /** An array of locations that makes up the path of the route. */
        routePath: Location[];
    }

    /** Represents a leg of a route. A route leg is the part of the route between two stop waypoints. */
    export interface IRouteLeg {
        /** The end time of the route leg. This property only applies when the routeMode of the DirectionsRequestOptions is set to transit. */
        endTime: Date;

        /** The location of the last waypoint of this leg. */
        endWaypointLocation: Location;

        /** The directions steps associated with this route leg. */
        itineraryItems: IDirectionsStep[];

        /** The index of the route to which this route leg belongs. */
        originalRouteIndex: number;

        /** The start time of the route leg. This property only applies when the routeMode of the DirectionsRequestOptions is set to transit. */
        startTime: Date;

        /** The location of the first waypoint of this route leg. */
        startWaypointLocation: Location;

        /** The sub legs of this route leg. A sub leg of a route is the part of the route between a stop point and a via point or between two via points.*/
        subLegs: IRouteSubLeg[];

        /** The summary which describes this route leg. */
        summary: IRouteSummary;
    }

    /** Represents a route sub leg. A route sub leg is the part of the route between a stop point and a via point or between two via points. */
    export interface IRouteSubLeg {
        /** The location of the last waypoint of the sub leg. */
        actualEnd: Location;

        /** The location of the first waypoint of the sub leg. */
        actualStart: Location;

        /** The description of the last waypoint of the sub leg. */
        endDescription: string;

        /** The description of the first waypoint of the sub leg. */
        startDescription: string;
    }

    /** Represents a route summary. */
    export interface IRouteSummary {
        /** The total travel distance of the route */
        distance: number;

        /** The cost of the route. This property is only returned if the routeMode of the IDirectionsRequestOptions is set to transit and the map culture is set to ja-jp. */
        monetaryCost: number;

        /** The location of the northeast corner of bounding box that defines the best map view of the route. */
        northEast: Location;

        /** The location of the southwest corner of bounding box that defines the best map view of the route. */
        southWest: Location;

        /** The total travel time, in seconds, for the route. */
        time: number;

        /**
        * The total travel time, in seconds, taking into account traffic delays, for the route.
        * This property is 0 if the avoidTraffic property of the IDirectionsRequestOptions is set to false.
        */
        timeWithTraffic: number;
    }

    /** Contains information about a transit line. */ 
    export interface ITransitLine {
        /** The short name for the transit line. */
        abbreviatedName: string;

        /** The ID of the agency that owns the transit line. */
        agencyId: number;

        /** The name of the agency that owns the transit line. */
        agencyName: string;

        /** The URL of the website of the agency that owns the transit line. */
        agencyUrl: string;

        /** Phone number for the transit agency. */
        phoneNumber: string;

        /** Information about the provider of this transit line data. */
        providerInfo: string;

        /** The uri for the transit agencies website. */
        uri: string;

        /** The full name of this transit line. */
        verboseName: string;
    }

    /** Options that can be used to define a waypoint. */
    export interface IWaypointOptions {
        /** 
        * The address string of the waypoint. For example, the following strings are valid for this parameter: "Seattle", "1 Microsoft Way, Redmond, WA". Either the address or location property must be specified.
        */
        address?: string;

        /** 
        * A boolean indicating whether the waypoint is a via point. A via point is a point along the route that is not a stop point. Set this property to
        * true if you just want the route to pass through this location. Default: false
        */
        isViaPoint?: boolean;

        /** The location of the waypoint. Either the address or location property must be specified. */
        location?: Location;
    }

    /** Contains options for the directions to calculate. */
    export interface IDirectionsRequestOptions {
        /** The unit to use when displaying direction distances. */
        distanceUnit?: DistanceUnit;

        /** The number of routes to calculate. */
        maxRoutes?: number;

        /** The features to avoid when calculating the route. */
        routeAvoidance?: RouteAvoidance[];

        /** A boolean indicating whether the route line on the map can be dragged with the mouse cursor.  */
        routeDraggable?: boolean;

        /** If multiple routes are returned, the index of the route and directions to display. */
        routeIndex?: number;

        /** The type of directions to calculate. */
        routeMode?: RouteMode;

        /** The optimization setting for the route calculation. */
        routeOptimization?: RouteOptimization;

        /** The type of the time specified. The default value is departure. */
        timeType?: TimeType;

        /** The time to use when calculating the route. If this property is set to null, the current time is used */
        time?: Date;
    }

    /** Represents render options for a route. */
    export interface IDirectionsRenderOptions {
        /** A boolean indicating whether to automatically set the map view to the best map view of the calculated route. Default: true */
        autoUpdateMapView?: boolean;

        /** A boolean indicating whether to display the disclaimer about the accuracy of the directions. Default: true */
        displayDisclaimer?: boolean;

        /** A boolean indicating whether to display the icons for each direction maneuver. Default: true */
        displayManeuverIcons?: boolean;

        /** A boolean indicating whether to display direction hints that describe when a direction step was missed. Default: true */
        displayPostItineraryItemHints?: boolean;

        /**
        * A boolean indicating whether to display direction hints that describe what to look for before you come to the next
        * direction step. The default value is true.
        */
        displayPreItineraryItemHints?: boolean;

        /** A boolean indicating whether to display the route selector control. Default: true */
        displayRouteSelector?: boolean;

        /** A boolean indicating whether to display direction warnings. Default: true */
        displayStepWarnings?: boolean;

        /** A boolean indicating whether to display a warning about walking directions. Default: true */
        displayWalkingWarning?: boolean;

        /** The polyline options that define how to draw the route line on the map, if the RouteMode is driving. */
        drivingPolylineOptions?: IPolylineOptions;

        /** The pushpin options that define how the first waypoint should be rendered. */
        firstWaypointPushpinOptions?: IPushpinOptions;

        /** The DOM element inside which the directions itinerary will be rendered. */
        itineraryContainer?: HTMLElement;

        /** The pushpin options that define how the last waypoint should be rendered. */
        lastWaypointPushpinOptions?: IPushpinOptions;

        /** A boolean indicating whether to show the input panel. Default: false */
        showInputPanel?: boolean;

        /** The options that define how to draw the route line on the map, if the RouteMode is transit. */
        transitPolylineOptions?: IPolylineOptions;

        /** The options that define how to draw the route line on the map, if the RouteMode is walking. */
        walkingPolylineOptions?: IPolylineOptions;

        /** The options that define the pushpin to use for all route waypoints by default. The first and last waypoints in the route will be overriden by firstWaypointPushpinOptions and lastWaypointPushpinOptions if set.  */
        waypointPushpinOptions?: IPushpinOptions;
    }

    /////////////////////////////////////
    /// Classes
    ////////////////////////////////////

    /** An object used to define a start, end or stop location along a route. */
    export class Waypoint {
        /**
         * @constructor
         * @param options: Options used to define the Waypoint.
         */
        constructor(options: IWaypointOptions);

        /** Releases any resources associated with the waypoint. */
        public dispose(): void;

        /**
         * Gets the address associated with the waypoint.
         * @returns The address associated with the waypoint.
         */
        public getAddress(): string;

        /**
         * Gets the location of the waypoint.
         * @returns The location of the waypoint.
         */
        public getLocation(): Location;

        /**
         * Gets a boolean value indicating whether the waypoint is a via point.
         * @returns A boolean value indicating whether the waypoint is a via point.
         */
        public isViapoint(): boolean;

        /**
         * Sets options for the waypoint. For these options to take effect, you must recalculate the route.
         * @param options Options used to define the Waypoint.
         */
        public setOptions(options: IWaypointOptions): void;
    }

    /** The main class in the Directions module that process direction calculations and rendering. */
    export class DirectionsManager {

        /**
         * @constructor
         * @param map A map to calculate directions for.
         * @param waypoints An array of waypoints to be added to the route.
         */
        constructor(map: Map, waypoints?: Waypoint[]);

        /**
         * Adds a waypoint to the route at the given index, if specified. If an index is not specified, the waypoint is added as the last waypoint in the route. The maximum number of walking or driving waypoints is 25. The maximum number of transit waypoints is 2. Up to 10 via points are allowed between two stop waypoints. To recalculate the route, use calculateDirections.
         * @param waypoint The waypoint to be added to the directions manager.
         * @param index An index at which the waypoint is to be added.
         */
        public addWaypoint(waypoint: Waypoint, index?: number): void;

        /**
         * Calculates directions based on request and render options set 
         */
        public calculateDirections(): void;

        /** Clears the directions request and render options and removes all waypoints */
        public clearAll(): void;

        /**
         * Clears the directions displayed and removes the route line from the map. 
         * This method does not remove waypoints from the route and retains all calculated direction information and option settings. 
         */
        public clearDisplay(): void;

        /** Deletes the DirectionsManager object and releases any associated resources. */
        public dispose(): void;

        /**
         * Returns all current pushpins for the rendered route.This includes pushpins created by addWaypoint and viaPoints created due to drag and drop.
         */
        public getAllPushpins(): Pushpin[];	

        /**
         * Gets all the waypoints in the directions manager.
         * @returns All the waypoints in the directions manager.
         */
        public getAllWaypoints(): Waypoint[];

        /**
         * Gets the currently displayed route information.
         * @returns The currently displayed route information.
         */
        public getCurrentRoute(): IRoute;

        /**
        * Gets the route render options.
        * @returns The route render options
        */
        public getRenderOptions(): IDirectionsRenderOptions;

        /**
         * Gets the directions request options.
         * @returns The directions request options.
         */
        public getRequestOptions(): IDirectionsRequestOptions;
        
        /**
         * Gets the current calculated route(s)
         * @returns The current calculated route(s). If the route was not successfully calculated, null is returned.
         */
        public getRouteResult(): IRoute[];

        /**
        * Removes the given waypoint or the waypoint identified by the given index from the route. 
        * @param waypointOrIndex A Waypoint object to be removed or the index of the waypoint to be removed
        */
        public removeWaypoint(waypointOrIndex: Waypoint | number): void;

        /**
         * Sets the specified render options for the route.
         * @param options The options that customize the rendering of the calculated route.
         */
        public setRenderOptions(options: IDirectionsRenderOptions): void;

        /**
         * Sets the specified route calculation options.
         * @param options The route calculation options.
         */
        public setRequestOptions(options: IDirectionsRequestOptions): void;

       /**
        * Displays an input panel for calculating directions in the specified container. Provides autosuggest for location inputs.
        * @param inputContainerId The id name of the HTML container in which to render the directions input panel.
        */
        public showInputPanel(inputContainerId: string): void;        
    }
}

    /** A static class that manages events within the map SDK. */
    module Events {
        /////////////////////////////////////
        /// addHandler Definitions
        ////////////////////////////////////

        /**
        * Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.
        * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
        * @param eventName The type of event to attach. Supported Events:
        * • directionsError
        * • directionsUpdated
        * @param handler The callback function to handle the event when triggered. 
        * @returns The handler id.
        */
        export function addHandler(target: Directions.DirectionsManager, eventName: string, handler: (eventArg?: Directions.IDirectionsEventArgs | Directions.IDirectionsErrorEventArgs) => void): IHandlerId;

        /////////////////////////////////////
        /// addOne Definitions
        ////////////////////////////////////

        /**
         * Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * • directionsError
         * • directionsUpdated
         * @param handler The callback function to handle the event when triggered.
         */
        export function addOne(target: Directions.DirectionsManager, eventName: string, handler: (eventArg?: Directions.IDirectionsEventArgs | Directions.IDirectionsErrorEventArgs) => void): void;

        /////////////////////////////////////
        /// addThrottledHandler Definitions
        ////////////////////////////////////

        /**
         * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * • directionsError
         * • directionsUpdated
         * @param handler The callback function to handle the event when triggered.
         * @param throttleInterval throttle interval (in ms)
         * @returns The handler id.
         */
        export function addThrottledHandler(target: Directions.DirectionsManager, eventName: string, handler: (eventArg?: Directions.IDirectionsEventArgs | Directions.IDirectionsErrorEventArgs) => void, throttleInterval: number): IHandlerId;
    }

    /**
     * Values used to identify and enable the items shown in the drawing bar.
     */
    export enum DrawingBarAction {
        /** No action */
        none,

        /** Create point primitive */
        point,

        /** Create polyline primitive */
        polyline,

        /** Create polygon primitive */
        polygon,

        /** Create ellipse primitive */
        ellipse,

        /** Create rectangle primitive */
        rectangle6,

        /** Erase existing primitive */
        erase,

        /** Edit existing primitive */
        edit,

        /** Change stroke style */
        strokeStyle,

        /** Change fill style */
        fillStyle,

        /** Set stroke line thickness */
        lineThickness,

        /** Set stroke dash style */
        strokeDash,

        /** Show debug menu */
        debug,

        /** All items */
        all,

        /** All shape creation items */
        createShapes,

        /** All shape editing items */
        editShapes,

        /** All shape styling items */
        styleShapes
    }

    /** An object that contains the event arguments for when the drawing mode changes in the drawing tools. **/
    export interface IDrawingModeChangedData {

        /** The shape being modified by the drawing tools. **/
        shape: IPrimitive;

        /** The new drawing mode. **/
        mode: DrawingTools.DrawingMode;
    }

    /**
     * Collection of options for the various DrawingTool methods
     */
    export interface IDrawingToolOptions {
        /** Set of buttons to show in the drawing bar */
        drawingBarActions?: DrawingBarAction;
    }
	
	/** An object that contains options to change the settings of the drawing manager.  */
    export interface IDrawingManagerOptions extends IDrawingToolOptions {
        /** Set of buttons to show in the drawing bar. */
        drawingBarActions?: DrawingBarAction;
        
		/** The fill color used for pushpins and polygons. */
		fillColor?: string | Color;
		
		/** The stroke color used for polylines and polygons. */
		strokeColor?:	string | Color;
    }

    /**
     * The DrawingManager class manages the ability to draw and edit multiple shapes on the map. Shapes managed by this class are rendered on a separate drawing layer.
     * User can use a mouse or a touch screen to draw on the map. When they are done, pressing the escape button or any button on the toolbar will exit the current drawing mode.
     * This class does not have a publicly accessible constructor and can only be accessed using the showDrawingManager of the DrawingTools class.
     */
    export interface DrawingManager {
        /**
        * Adds a shapes to the layer, at the specified index if specified.
        • @param data The shape(s) to be added to the layer.
        • @param index The index at which to insert the shape into the layer.
        */
        add(data: IPrimitive | IPrimitive[], index?: number): void;
   
        /**
        * Disposes the drawing manager instance.
        */
        dispose(): void;

        /**
        * Resets the drawing manager and clears all shapes in the drawing layer.
        */
        clear(): void;

        /**
        * Gets the current drawing mode of the drawing manager.
        * @returns The current drawing mode of the drawing manager.
        */
        getDrawingMode(): DrawingTools.DrawingMode;

        /**
        * Gets an array of shapes that are in the layer. This can be used to iterate over the individual shapes.
        * @returns An array of shapes that are in the layer. This can be used to iterate over the individual shapes.
        */
        getPrimitives(): IPrimitive[];

        /**
        * Returns the index of the shape in the drawing layer.
        * @param primitive The shape to find the index of.
        * @param fromIndex The index to start the search from.
        * @returns The index of the shape in the drawing layer. Returns -1 if shape is not found.
        */
        indexOf(primitive: IPrimitive, fromIndex?: number): number;

        /**
        * Removes a shape from the layer and returns it.
        * @param primitive The shape to remove from the layer.
        * @returns The shape that was removed from the layer.
        */
        remove(primitive: IPrimitive): IPrimitive;

        /**
        * Removes a shape from the layer at the specified index.
        * @param index The index of the shape to remove from the layer.
        * @returns The shape that was removed from the layer.
        */
        removeAt(index: number): IPrimitive;

        /**
        * Sets the drawing mode of the drawing manager.
        * @param mode The drawing mode to set the DrawingManager to.
        */
        setDrawingMode(mode: DrawingTools.DrawingMode): void;
		
		/**
		* Sets the drawing tool options.
		* @param options The options to use with the drawing manager. 
		*/
		setOptions(options: IDrawingManagerOptions): void;

        /**
        * Replaces all shapes in the layer with the new array of shapes that have been provided.
        * @param primitives An array of shapes to add to the drawing layer.
        */
        setPrimitives(primitives: IPrimitive[]): void;
    }

    /**
    * Provides a set of tools for drawing and editing shapes on top of the map.
    * @requires The Microsoft.Maps.DrawingTools module.
    */
    export class DrawingTools {
        /**
         * @constructor
         * @requires The Microsoft.Maps.DrawingTools module.
         * @param map A map instanct to attach the drawing tools to.
         */
        constructor(map: Map);

        /**
        * Initializes the drawing layer and instructs it to create a new shape of a given type.
        * @param shapeType The type of new shape to create.
        * @param created A callback function that is fired after the initial shape is created.
        */
        public create(shapeType: DrawingTools.ShapeType, created?: (shape: IPrimitive) => void): void;

        /** Disposes the instance of the DrawingTools class. */
        public dispose(): void;

        /**
        * Adds a shape to the drawing layer and puts it into edit mode.
        * @param shape A shape to put into editting mode.
        */
        public edit(shape: IPrimitive): void;

        /**
         * Finishes any shape create / edit operation currently in progress, and returns the shape that was created or editted through a specified callback function.
         * @param finished A callback function to return the completed shape with.
         */
        public finish(finished?: (shape: IPrimitive) => void): void;

        /**
         * Shows the drawing toolbar, if it isn't already visible.
         * @param options - Options for this DrawingTool operation. Specifically,
         * the drawingBarActions property is used to customize the drawing bar view.
         */
        public showDrawingBar(options?: IDrawingToolOptions): void;

        /**
        * Creates a drawing manager which allows multi-shape editing and displays the toolbar.
        * @param callback A callback function that is triggered after the DrawingTools have loaded. 
        */
        public showDrawingManager(callback?: (manager: DrawingManager) => void): void;
    }

    export module Events {
        /////////////////////////////////////
        /// addHandler Definitions
        ////////////////////////////////////

        /**
        * Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.
        * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
        * @param eventName The type of event to attach. Supported Events:
        * drawingChanged, drawingChanging, drawingEnded, drawingModeChanged, drawingStarted
        * @param handler The callback function to handle the event when triggered. 
        * @returns The handler id.
        */
        export function addHandler(target: DrawingTools, eventName: string, handler: (eventArg?: IPrimitive | IDrawingModeChangedData) => void): IHandlerId;

        /**
        * Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.
        * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
        * @param eventName The type of event to attach. Supported Events:
        * disposed, drawingChanged, drawingChanging, drawingEnded, drawingErased, drawingModeChanged, drawingStarted
        * @param handler The callback function to handle the event when triggered. 
        * @returns The handler id.
        */
        export function addHandler(target: DrawingManager, eventName: string, handler: (eventArg?: IPrimitive | DrawingTools.DrawingMode) => void): IHandlerId;

        /////////////////////////////////////
        /// addOne Definitions
        ////////////////////////////////////

        /**
        * Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.
        * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
        * @param eventName The type of event to attach. Supported Events:
        * drawingChanged, drawingChanging, drawingEnded, drawingModeChanged, drawingStarted
        * @param handler The callback function to handle the event when triggered. 
        */
        export function addOne(target: DrawingTools, eventName: string, handler: (eventArg?: IPrimitive | IDrawingModeChangedData) => void): void;

        /**
         * Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * disposed, drawingChanged, drawingChanging, drawingEnded, drawingErased, drawingModeChanged, drawingStarted
         * @param handler The callback function to handle the event when triggered.
         */
        export function addOne(target: DrawingManager, eventName: string, handler: (eventArg?: IPrimitive | DrawingTools.DrawingMode) => void): void;

        /////////////////////////////////////
        /// addThrottledHandler Definitions
        ////////////////////////////////////

        /**
        * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
        * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
        * @param eventName The type of event to attach. Supported Events:
        * drawingChanged, drawingChanging, drawingEnded, drawingModeChanged, drawingStarted
        * @param handler The callback function to handle the event when triggered. 
        * @returns The handler id.
        */
        export function addThrottledHandler(target: DrawingTools, eventName: string, handler: (eventArg?: IPrimitive | IDrawingModeChangedData) => void): IHandlerId;

        /**
         * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * disposed, drawingChanged, drawingChanging, drawingEnded, drawingErased, drawingModeChanged, drawingStarted
         * @param handler The callback function to handle the event when triggered.
         * @param throttleInterval throttle interval (in ms)
         * @returns The handler id.
         */
        export function addThrottledHandler(target: DrawingManager, eventName: string, handler: (eventArg?: IPrimitive | DrawingTools.DrawingMode) => void, throttleInterval: number): IHandlerId;
    }

export module DrawingTools {
    /**
    * The different drawing modes that the drawing manager can be set to.
    * @requires The Microsoft.Maps.DrawingTools module.
    */
    export enum DrawingMode {
        /** Edit an existing shape. Click on a shape to edit it. */
        edit,

        /** Erase and existing shape. Click on the shapes to erase them. */
        erase,

        /** Sets the drawing manager into an idle mode. */
        none,

        /** Allow the user to draw a polygon. */
        polygon,

        /** Allow the user to draw a polyline. */
        polyline,

        /** Allow the user to draw a pushpin. */
        pushpin
    }

    /**
    * The different types of shapes that are created or edited by the drawing tools.
    * @requires The Microsoft.Maps.DrawingTools module.
    */
    export enum ShapeType {
        /** A polygon shape type. */
        polygon,

        /** A polyline shape type. */
        polyline
    }
}

    /** GeoJSON object definition */
    export interface IGeoJsonObject {
        /** 
         * Type of the object 
         * could be one of the following: 
         * Point
         * LineString
         * Polygon
         * MultiPoint
         * MultiLineString
         * MultiPolygon
         * GeometryCollection
         * Feature
         * FeatureCollection 
         */
        type: string;

        /** Geometric coordinates of the object */
        coordinates?: number[] | number[][] | number[][][] | number[][][][];

        /** Additional properties of the object as a key,value pair */
        properties?: any;

        /** Set of features (only applicable if the type is 'featurecollection') */
        features?: IGeoJsonObject[];

        /** Set of geometries (only applicable if the type is 'geometrycollection') */
        geometries?: IGeoJsonObject[];

        /** Geometry (only applicable if the type is 'feature') */
        geometry?: IGeoJsonObject;

        /** identifier of a feature (only applicable if the type is 'feature') */
        id?: any;
    }

    /**
     * Class responsible for reading/writing geo data in GeoJson format
     * @requires The Microsoft.Maps.GeoJson module.
     */
    export module GeoJson {
       /**
       * Reads the data from a given url and returns the shapes.
       * @param url GeoJson download url.
       * @param callback Callback function that needs to be called once the data is downloaded and parsed.
       * @param jsonpQueryParam The name of the url query param to make a jsonp request.
       * @param styles Styles that needs to be applied.
       */
        export function readFromUrl(url: string, callback: (data: IPrimitive | IPrimitive[]) => void, jsonpQueryParam?: string, styles?: IStylesOptions): void;

        /**
         * Reads the data in geoJson format and returns the shapes.
         * @param geoJson GeoJson data object that needs to be parsed into shapes.
         * @param styles Styles that needs to be applied.
         * @returns An array of shapes.
         */
        export function read(geoJson: IGeoJsonObject | string, styles?: IStylesOptions): IPrimitive | IPrimitive[];

        /**
        * Writes the data into geoJson format.
        * @param data Data that needs to be serialized.
        * @returns A geoJson formatted string.
        */
        export function write(data: IPrimitive | IPrimitive[]): IGeoJsonObject;
    }
    
    /** 
    * An enumeration of different GeoXML file formats.
    * @requires The Microsoft.Maps.GeoXml module.
    */
    export enum GeoXmlFormat {
        /** A KML XML file format. */
        kml,

        /** A GPX XML file format. */
        gpx,

        /** A GeoRSS XML file using ATOM format. */
        geoRss
    }

    /**
     * An enumeration of the different compressed formats that XML can be outputted as.
    * @requires The Microsoft.Maps.GeoXml module.
     */
    export enum GeoXmlCompressedFormat {
        /** XML data compressed into a Base64 Data URI. */
        base64,

        /** XML data compressed into a Blob. */
        blob,

        /** XML data compressed into an ArrayBuffer. */
        arrayBuffer
    }

    /**
     * A GeoXML result data set that is returned when reading a spatial XML file.
     */
    export interface IGeoXmlDataSet {
        /** An array of shapes that are in the XML document. */
        shapes?: IPrimitive[];

        /**
        * An array of layers that are in the XML document.
        * In shapes in KML that are in a child documents and folders of the main document or folder are grouped together in a data Layer.
        * KML also supports GroundOverlay.
        */
        layers?: (Layer | GroundOverlay)[];

        /**
        * An array of screen overlays that have been parsed from a KML file.
        */
        screenOverlays?: KmlScreenOverlay[];

        /**
        * Summary metadata provided at the document level of the XML feed data set.
        */
        summary?: IGeoXmlSummaryMetadata;

        /**
         * Statistics about the content and processing time of a XML feed.
         */
        stats?: IGeoXmlStats;
    }

    /**
     * Options used to customize how a GeoXmlLayer renders.
     */
    export interface IGeoXmlLayerOptions extends IGeoXmlReadOptions {
        /** A boolean indicating if the map should automatically upate the view when a data set is loaded. Default: true */
        autoUpdateMapView?: boolean;

        /** Options used to customize how the default infobox renders. */
        infoboxOptions?: Microsoft.Maps.IInfoboxOptions;

        /** A boolean indicating if infoboxes should automatically appear when shapes clicked. Default: false */
        suppressInfoboxes?: boolean;

        /** A boolean indicating if the layer is visible or not. Default: true */
        visible?: boolean;
    }

    /**
     * Options that customize how XML files are read and parsed.
     */
    export interface IGeoXmlReadOptions {
        /** Specifies if KML ScreenOverlays should be read or ignored. Default: true */
        allowKmlScreenOverlays?: boolean;

        /**
        * A callback function that is triggered when an error occurs when reading an XML document.
        */
        error?: (msg: string) => void;

        /**
        * Specifies wether the individual waypoint data of a GPX Route or Track should be captured.
        * If set to true, the shape will have a metadata.waypoints property that is an array of
        * pushpins that contains the details of each waypoint along the track. Default: false
        */
        captureGpxPathWaypoints?: boolean;

        /** The default styles to apply to shapes that don't have a defined style in the XML. */
        defaultStyles?: IStylesOptions;

        /** Specifies if shapes visible tags should be used to set the visible property of it's equivalent Bing Maps shape. Default: true */
        ignoreVisibility?: boolean;

        /**
        * The maximium number of network links that a single KML file can have. Default: 10.
        */
        maxNetworkLinks?: number;

        /**
         * The maximium depth of network links in a KML file. Default: 3
         * Example: when set to 3; file1 links to file2 which links to file3 but won't open links in file3.
         */
        maxNetworkLinkDepth?: number;

        /** Indicates if the pushpin title should be displayed on the map if a valid title or name value exits in the shapes metadata. Default: true */
        setPushpinTitles?: boolean;
    }

    /**
     * Statistics about the content and processing time of a XML feed.
     */
    export interface IGeoXmlStats {
        /** Number of Microsoft.Maps.Pushpins objects in the XML feed. */
        numPushpins: number;

        /** Number of Microsoft.Maps.Polylines objects in the XML feed. */
        numPolylines: number;

        /** Number of Microsoft.Maps.Polygons objects in the XML feed. */
        numPolygons: number;

        /** Number of Microsoft.Maps.Location objects in the XML feed. */
        numLocations: number;

        /** Number of Ground Overlays in the XML feed. */
        numGroundOverlays: number;

        /** Number of Screen Overlays in the XML feed. */
        numScreenOverlays: number;

        /** The number of network links in the XML feed. */
        numNetworkLinks: number;

        /** The number of characters in the XML feed. */
        fileSize: number;

        /** The amount of time in ms it took to process the XML feed. */
        processingTime: number;
    }

    /**
     * Summary metadata provided at the document level of the XML feed data set.
     */
    export interface IGeoXmlSummaryMetadata {
        /** The title or name of the content of the XML document. */
        title?: string;

        /** The description of the content of the XML document. */
        description?: string;

        /** The bounds of all the shapes and layers in the XML document. */
        bounds?: LocationRect;

        /** Any additional metadata that the XML document may have. i.e. atom:author */
        metadata?: IDictionary<any>;
    }

    /**
     * Options that are used to customize how the GeoXml writes XML.
     */
    export interface IGeoXmlWriteOptions {

        /** The characters to use to create an indent in the XML data. Default: \t */
        indentChars?: string;

        /** The characters to use to create a new line in the XML data. Default: \r\n */
        newLineChars?: string;

        /** A boolean indicating if the generated XML should be use new lines and indents to make the generated nicely formatted. Default: true */
        prettyPrint?: boolean;

        /** A boolean indicating if Location and LocationRect values should be rounded off to 6 decimals. Default: false */
        roundLocations?: boolean;

        /**
         * A boolean indicating if the shapes should be made valid before writing. If set to true, will use the
         * Geometry.makeValid function of the SpatialMath module. Default: false
         */
        validate?: boolean;

        /** The XML format to write the shapes to. Default: Kml */
        xmlFormat?: GeoXmlFormat;
    }
    
    /**
    * The options for customizing screen overlays.
    */
    export interface IKmlScreenOverlayOptions {
        /** A boolean indicating if the screen overlay can be displayed above or beow the navigaiton bar. Default: false */
        belowNavigationBar?: boolean;

        /** The visibility of the screen overlay. Default: true */
        visible?: boolean;
    }

    /**
     * Overlays HTML elements winthin the map container that are above the map.
     * This is useful when adding logos, attributions or legends to the map.
     * This class is only used by the KML reader and not meant to be used on its own.
     * @requires The Microsoft.Maps.GeoXml module.
     */
    export class KmlScreenOverlay {

        /** Optional property to store any additional metadata for this overlay. */
        metadata: any;

        /**
         * @constructor
         * @param htmlElement The new htmlElement to set for the overlay.
         * @param options The options to customize the screen overlay.
         */
        constructor(htmlElement?: string | HTMLElement, options?: IKmlScreenOverlayOptions);
        
        /**
        * Clears the screen overlay.
        */
        public clear(): void;

        /**
         * Gets a boolean indicating if the screen overlay is displayed above or below the navigation bar.
         * @returns A boolean indicating if the screen overlay is displayed above or below the navigation bar.
         */
        public getBelowNavigationBar(): boolean;

        /**
        * Gets the html element of this screen overlay.
        * @returns the htmlElement of this overlay.
        */
        public getHtmlElement(): HTMLElement;

        /**
         * Returns the map that this overlay is attached to.
         * @returns The map that this overlay is attached to.
         */
        public getMap(): Map;

        /**
         * Gets a boolean indicating if the screen overlay is visible or not.
         * @returns A boolean indicating if the screen overlay is visible or not.
         */
        public getVisible(): boolean;

        /**
         * Updates the html element of this screen overlay.
         * @param htmlElement The new htmlElement to set for the overlay.
         */
        public setHtmlElement(htmlElement: string | HTMLElement): void;

        /**
         * Sets the options to customize the screen overlay.
         * @param options The options to customize the screen overlay.
         */
        public setOptions(options: IKmlScreenOverlayOptions): void;

        /**
         * Sets whether the overlay is visible or not.
         * @param value A value indicating if the overlay should be displayed or not.
         */
        public setVisible(visible: boolean): void;
    }
    
    /**
     * A static class that contains functions for reading and writing geospatial XML data.
     * @requires The Microsoft.Maps.GeoXml module.
     */
    export module GeoXml {
        
        /**
         * Takes a geospatial XML string or a ArrayBuffer and parses the XML data into Bing Maps shapes.
         * @param xml The XML as a string or ArrayBuffer to read.
         * @param options The read options.
         */
        export function read(xml: string | ArrayBuffer, options: IGeoXmlReadOptions): IGeoXmlDataSet;
        
        /**
         * Takes an URL to an XML or zipped XML file and parses the XML data into Bing Maps shapes.
         * @param xml The URL to XML data to read.
         * @param options The read options.
         * @param callback The callback function that consumes the parsed out GeoXml data.
         */
        export function readFromUrl(urlString: string, options: IGeoXmlReadOptions, callback: (data: IGeoXmlDataSet) => void): void;

        /**
         * Writes Bing Maps shape data as a geospatial XML string in the specified format.
         * @param shapes The Bing Maps shapes, or map to retrieve shapes from, to write.
         * @param options A set of options that customize how the XML is writen.
         */
        export function write(shapes: Map | IPrimitive | IPrimitive[] | Layer | GroundOverlay[] | IGeoXmlDataSet, options?: IGeoXmlWriteOptions): string;
        
        /**
         * Writes Bing Maps shape data to a geospatial XML file embedded in a compressed file.
         * @param shapes The Bing Maps shapes, or map to retrieve shapes from, to write.
         * @param compressFormat The compressed file format to use.
         * @param options A set of options that customize how the XML is writen.
         */
        export function writeCompressed(shapes: Map | IPrimitive | IPrimitive[] | Layer | GroundOverlay[] | IGeoXmlDataSet, compressFormat?: GeoXmlCompressedFormat, options?: IGeoXmlWriteOptions): string | ArrayBuffer | Blob;
    }

    /**
     * A layer that loads and renders geospatial XML data on the map.
     * @requires The Microsoft.Maps.GeoXml module.
     */
    export class GeoXmlLayer extends Microsoft.Maps.CustomOverlay {

        /** Optional property to store any additional metadata for this layer. */
        metadata: any;

        /**
         * @constructor
         * @param dataSource The XML as a string, URL or ArrayBuffer to read.
         * @param isUrl Whether the dataSource provided is an URL. Default = true
         * @param options The options used to render the layer.
         */
        constructor(dataSource?: string | ArrayBuffer, isUrl?: boolean, options?: IGeoXmlLayerOptions);
        
        /**
         * Removes all the data in the layer.
         */
        public clear(): void;

        /**
         * Cleans up any resources this object is consuming.
         */
        public dispose(): void;

        /**
         * Returns the data source used by the layer.
         * @returns The data source used by the layer.
         */
        public getDataSource(): string | ArrayBuffer;

        /**
         * Returns the data set that ws extracted from the data source.
         * @returns The data set that ws extracted from the data source.
         */
        public getDataSet(): IGeoXmlDataSet;

        /**
         * Returns the options used by the GeoXmlLayer.
         * @returns The options used by the GeoXmlLayer.
         */
        public getOptions(): IGeoXmlLayerOptions;

        /**
         * Gets a value indicating whether the layer is visible or not.
         * @returns A boolean indicating if the layer is visible or not.
         */
        public getVisible(): boolean;

        /**
         * Sets the data source to render in the GeoXmlLayer.
         * @param dataSource The data source to render in the GeoXmlLayer.
         * @param isUrl Whether the dataSource provided is an URL. Default = true
         */
        public setDataSource(dataSource: string | ArrayBuffer, isUrl: boolean): void;

        /**
         * Sets the options used for loading and rendering data into the GeoXmlLayer.
         * @param options The options to use when loading and rendering data into the GeoXmlLayer.
         */
        public setOptions(options: IGeoXmlLayerOptions): void;

        /**
         * Sets whether the layer is visible or not.
         * @param value A value indicating if the layer should be displayed or not.
         */
        public setVisible(visible: boolean): void;
    }


    export module Events {
        /////////////////////////////////////
        /// addHandler Definitions
        ////////////////////////////////////

        /**
        * Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.
        * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
        * @param eventName The type of event to attach. Supported Events:
        * click, dblclick, mousedown, mouseout, mouseover, mouseup, rightclick
        * @param handler The callback function to handle the event when triggered. 
        * @returns The handler id.
        */
        export function addHandler(target: GeoXmlLayer, eventName: string, handler: (eventArg?: IMouseEventArgs) => void): IHandlerId;
        
        /////////////////////////////////////
        /// addOne Definitions
        ////////////////////////////////////
        
        /**
         * Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * click, dblclick, mousedown, mouseout, mouseover, mouseup, rightclick
         * @param handler The callback function to handle the event when triggered.
         */
        export function addOne(target: GeoXmlLayer, eventName: string, handler: (eventArg?: IMouseEventArgs) => void): void;

        /////////////////////////////////////
        /// addThrottledHandler Definitions
        ////////////////////////////////////

        /**
        * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
        * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
        * @param eventName The type of event to attach. Supported Events:
        * click, dblclick, mousedown, mouseout, mouseover, mouseup, rightclick
        * @param handler The callback function to handle the event when triggered. 
        * @returns The handler id.
        */
        export function addThrottledHandler(target: GeoXmlLayer, eventName: string, handler: (eventArg?: IMouseEventArgs) => void): IHandlerId;
    }

    /** Options for customizing how the heat map is rendered. */
    export interface IHeatMapLayerOptions {
        /**
        * The temperature gradient that is used to colorize the map. Default gradient:
        *    {
        *        '0.00': 'rgb(255,0,255)', // Magenta
        *        '0.25': 'rgb(0,0,255)', // Blue
        *        '0.50': 'rgb(0,255,0)', // Green
        *        '0.75': 'rgb(255,255,0)', // Yellow
        *        '1.00': 'rgb(255,0,0)' // Red
        *    }
        */
        colorGradient?: IDictionary<string>;

        /**
        * The intensity of each heat point. This is a decimal value between 0 and 1. This is used to specify how "hot" a single data point should be. Default: 0.5
        */
        intensity?: number;

        /**
        * The opacity of the HeatMapLayer canvas. Value should be a decimal between 0 and 1. Default: 1
        */
        opacity?: number;
        
        /**
        * The radius to draw each data point on the map. Default: 10
        */
        radius?: number;
        
        /**
        * The distance units of the radius. Possible values are:
        * 
        * • 'pixels' (defualt)
        * • 'meters'
        *
        * When set to pixels the size of each data point will always be the same radius, regardless of zoom level. When set to meters, the size of the data points
        * will scale based on zoom level so as to ensure that the radius is spatially accurate.
        */
        unit?: 'meters' | 'pixel';

        /** A boolean indicating if the heat map layer is visible or not. **/
        visible?: boolean;
    }

    /**
     * Class for rendering data as a heat map layer.
     * @requires The Microsoft.Maps.Heatmap module.
     */
    export class HeatMapLayer implements IDataLayer {
        /**
         * @constructor
         * @requires The Microsoft.Maps.Heatmap module.
         * @param locations Set of locations to visualize as a heat map.
         * @param options Options for customizing how the heat map is rendered.
         */
        constructor(locations: (Location | Pushpin)[], options?: IHeatMapLayerOptions);

        /** Clears all data in the heat map layer. */
        public clear(): void;

        /** Disposes the heat map layer. */
        public dispose(): void;
        
        /**
         * Gets a boolean indicating if the heat map layer is visible or not.
         * @returns A boolean indicating if the heat map layer is visible or not.
         */
        public getVisible(): boolean;

        /** 
        * @deprecated
        * Hides the heat map layer.
        */
        public hide(): void;

        /**
         * Specifies the locations to use when generating the heat map.
         * @param locations Set of locations.
         */
        public setLocations(locations: (Location | Pushpin)[]): void;

        /**
        * Sets the options to use with the heat map layer.
        * @param options Set of heat map layer options.
        */
        public setOptions(options: IHeatMapLayerOptions): void;

        /**
        * Sets the visibility of the heat map layer.
        * @param visible A boolean indicating if the heat map layer is visible or not.
        */
        public setVisible(visible: boolean): void;

        /** 
        * @deprecated
        * Shows the heat map layer.
        */
        public show(): void;        
    }

/**
 * Provides an easy method for geocoding address and searching for points of interest from JavaScript.
 * @requires The Microsoft.Maps.Search module.
 */
export module Search {

    /** 
     * Defines the geocoding level of the location match found by the geocoder.
     * @requires The Microsoft.Maps.Search module.
     */
    export enum MatchCode {
        /** No match was found. */
        none,

        /** The match was good. */
        good,

        /** The match was ambiguous. Multiple results were returned. */
        ambiguous,

        /** The match was found by a broader search. */
        upHierarchy,

        /** The match was found, but possibly using a modified query. */
        modified
    }

    /** 
     * Defines the confidence of the location match found by the geocoding service.
     * @requires The Microsoft.Maps.Search module.
     */
    export enum MatchConfidence {
        /** The confidence of the match is high. */
        high,

        /** The confidence of the match is medium. */
        medium,

        /** The confidence of the match is low. */
        low,

        /** The confidence of the match is unknown. */
        unknown
    }

    /** An object that represents a geocoded location. */
    export interface IGeocodeLocation {
        /** The latitude of the location. */
        latitude: number;
		
		/** The longitude of the location. */
		longitude: number;

        /** The name of this geocode location match. */
        name: string;

        /** 
		 * The precision of this geocode location match. 
		 * Possible Values: Interpolated, InterpolatedOffset, Rooftop, Parcel
		 */
        precision: string ;
    }

    /** An object that represents an place result. */
    export interface IPlaceResult {
        /** The geocoded address of the place result. */
        address: IAddress;

        /** The location rectangle that defines the boundaries of the best map view of the place result. */
        bestView: LocationRect;

        /** The classification of the geographic entity returned, such as PopulatedPlace. */
        entityType: string;

        /** The geocoded location of the best result. */
        location: Location;

        /** The geocoded locations. */
        locations: IGeocodeLocation[];

        /** The match code of the best result. */
        matchCode: string | MatchCode;

        /** The match confidence of the best result. */
        matchConfidence: string | MatchConfidence;

        /** The name of the place result, if one exists. */
        name: string;
    }

    /** An object that represents a geocode result returned by REST service. */
    export interface IGeocodeResult {
        /** An array of geocode results. */
        results: IPlaceResult[];
    }

    /** The options for a geocode request. */
    export interface IGeocodeRequestOptions {
        /** 
         * A location rectangle that defines the boundaries of the area in which to search for 
         * location results. The default is the bounds of the map view associated with this 
         * instance of the SearchManager, which is usually the current map view.
         */
        bounds?: LocationRect;

        /**
         * The name of the function to call when a successful result is returned from the 
         * geocode request. The callback function must accept two parameters: result, which is 
         * a GeocodeResult type, and a userData object.
         */
        callback: (geocodeResult: IGeocodeResult, userData: any) => void;

        /** The maximum number of results to return. Required. The maximum number than can be returned is 20. */
        count?: number;

        /**
         * The name of the function to call when the request is returned with an error. The 
         * error callback function must accept an IGeocodeRequestOptions object.
         */
        errorCallback?: (geocodeRequestOptions: IGeocodeRequestOptions) => void;

        /** Specifies to include the two-letter ISO country code. */
        includeCountryIso2?: boolean;

        /** Specifies to include the neighborhood in the response when it is available. */
        includeNeighborhood?: boolean;

        /** A number indicating how long to wait, in seconds, for the geocode request to return. The default value is 5 seconds. */
        timeout?: number;

        /** An object containing any data that needs to be passed to the callback when the request is completed. */
        userData?: any;

        /** A string containing the address or place to be matched to a location on the map.  */
         where: string;
    }

    /** The options for a reverse geocode request. */
    export interface ReverseGeocodeRequestOptions {
        /**
         * A reference to a function to call when a successful result is returned from the geocode request. The callback function
         * will receive a PlaceResult object as an argument.
         */
        callback: (placeResult: IPlaceResult, userData: any) => void;

        /**
         * A reference to a function to call when the request is returned with an error. The error callback function will receive
         * an object containing the geocode request options used in the request.
         */
        errorCallback?: (reverseGeocodeRequestOptions: ReverseGeocodeRequestOptions) => void;

        /** Specifies to include the two-letter ISO country code. Default: false */
        includeCountryIso2?: boolean;

        /**
         *  An array of entity types selected from the following options.
         * • Address
         * • Neighborhood
         * • PopulatedPlace
         * • Postcode1
         * • AdminDivision1
         * • AdminDivision2
         * • CountryRegion
         * These entity types are ordered from the most specific entity to the least specific entity. When entities of more than one entity type are found, only the most specific
         * entity is returned. For example, if you specify Address and AdminDistrict1 as entity types and entities were found for both types, only the Address entity information is
         * returned in the response. One exception to this rule is when both PopulatedPlace and Neighborhood entity types are specified and information is found for both. In this case,
         * the information for both entity types is returned. Also, more than one Neighborhood may be returned because the area covered by two different neighborhoods can overlap.
         */
        includeEntityTypes?: string[];

        /**
         * Specifies to include the neighborhood in the response when it is available. Note: This feature isn’t
         * available in all locations.
         */
        includeNeighborhood?: boolean;

        /** The location to use to match to geographic entities and addresses. */
        location: Location;

        /** A number indicating how long to wait, in seconds, for the reverse geocode request to  return. The default value is 5 seconds. */
        timeout?: number;

        /** An object containing any data that needs to be passed to the callback when the request is completed. */
        userData?: any;
    }

    /**
    * A class that contains methods for returning search and location results.
    * @requires The Microsoft.Maps.Search module.
    */
    export class SearchManager {
        /**
         * @constructor
         * @requires The Microsoft.Maps.Search module.
         * @param map A Map object
         */
        constructor(map: Map);

        /**
         * Matches the address or place query in the specified request 
         * options to a location and returns the results to the request 
         * options callback function.
         * @param request Options for sending geocode request
         */
        public geocode(request: IGeocodeRequestOptions): void;

        /**
         * Matches the specified location to an address and returns the 
         * address results to the specified request options callback function.
         * @param request Options for sending reverse geocode request
         */
        public reverseGeocode(request: ReverseGeocodeRequestOptions): void;
    }
}

/**
 * This module wraps the Query and GeoData REST API’s in the Bing Spatial Dara Services and expose them as an easy to use JavaScript library.
 * @requires The Microsoft.Maps.SpatialDataService module.
 */
export module SpatialDataService {

    //////////////////////////////////////////////
    /// GeoData API
    //////////////////////////////////////////////

    /** Represents the options for requests boundary data from the GeoData API in the Bing Spatial Data Services. */
    export interface IGetBoundaryRequestOptions {
        /**
        * The level of detail for the boundary polygons returned. An integer between 0 and 3, where 0 specifies the coarsest level of boundary detail and 3
        * specifies the best. Default: 0
        */
        lod?: number;

        /**
        * The entity type to return. Default: CountryRegion
        * Supported entity types:
        * AdminDivision1, AdminDivision2, CountryRegion, eighborhood, PopulatedPlace, Postcode1, Postcode2, Postcode3, Postcode4
        * Note: Not all entity types are available in all areas.
        */
        entityType?: string;

        /**
        * Specifies the preferred language to use for any metadata text about the entity or polygons. Defaults to the culture used by the map control, which
        * usually automatically detected based on user's browser settings. Setting this property will override the default value.
        */
        culture?: string;

        /**
        * Specifies whether the response should include all of the boundary polygons for the requested entity or just return a single polygon that represents
        * the main outline of the entity. Default: false
        */
        getAllPolygons?: boolean;

        /**
        * Specifies whether the response should include metadata about the entity, such as AreaSqKm and others. Default: false
        */
        getEntityMetadata?: boolean;

        /**
        * Specifies the user’s home country or region.Defaults to the region setting of the user who loads the map.
        * Warning: Setting this property will override the default value, which is the region the user is actually in, and will allow the user to see boundaries
        * which may not align with the views of their region.This could result in geopolitically sensitive borders being returned.
        */
        userRegion?: string;
    }

    /** Represents the primitive object for a boundary returned by the GeoData API. */
    export interface IGeoDataPrimitive {
        /** A unique ID associated with this polygon primitive. */
        PrimitiveID: string;

        /**
        * A comma-delimited sequence starting with the version number of the polygon set followed by a list of compressed polygon
         * "rings" (closed paths represented by sequences of latitude and-longitude points).
        */
        Shape: string;

        /** The number of vertex points used to define the polygon. */
        NumPoints: string;

        /**
        * An ID identifying the data provider that supplied the data. This ID number will reference one of the sources listed in the
        * array of CopyrightSources in the Copyright property of the GeoDataResultSet object.
        */
        SourceID: string;
    }

    /** Represents the copyright source object for a boundary returned by the GeoData API. */
    export interface ICopyrightSource {
        /** The copyright string from the source. */
        Copyright: string;

        /** An ID identifying the data provider that supplied the data. */
        SourceID: string;

        /** The name of the data provider represented by this Source element. */
        SourceName: string;
    }

    /** Represents the copyright object for a boundary returned by the GeoData API. */
    export interface ICopyright {
        /** The copyright URL for the GeoData service. */
        CopyrightURL: string;

        /** A collection of CopyrightSource objects that give information about the sources of the polygon data that is returned. */
        Sources: ICopyrightSource[];
    }

    /** Represents the name object for a boundary returned by the GeoData API. */
    export interface IName {
        /** The name of boundary. Example: "United States" */
        EntityName: string;

        /** The culture of the region. */
        Culture: string;

        /** An ID identifying the data provider that supplied the data. */
        SourceID: string;
    }

    /** Represents the metadata object for a boundary returned by the GeoData API. Not all properties will be returned for all results. */
    export interface IMetadata {
        /** The approximate total surface area (in square kilometers) covered by all the polygons that comprise this entity. */
        AreaSqKm: string;

        /**
        * An area on the Earth that provides the best map view for this entity. This area is defined as a bounding box in the format of a
        * “MULTIPOINT ((WestLongitude SouthLatitude), (EastLongitude NorthLatitude))”.
        */
        BestMapViewBox: string;

        /** The culture associated with this entity. Example: en */
        OfficialCulture: string;
    
        /** The approximate population within this entity. Example: PopClass20000to99999 */
        PopulationClass: string;
    
        /** The regional culture associated with this entity. */
        RegionalCulture: string;
    }

    /** Represents a single result object returned by the GeoData API. */
    export interface IGeoDataResult {
        /** Copyright information for the returned boundary data. */
        Copyright: ICopyright;

        /** A unique ID number associated with this entity. */
        EntityID: string;

        /**
        * A collection of metadata information associated with the entity. The getEntityMetadata option of the request must be set
        * to true. Note, not all boundaries will return this metadata.
        */
        EntityMetadata: IMetadata;

        /** Information about the name of the boundary location. */
        Name: IName;

        /** A Polygon object that has been generated from the data in the Primitives property. */
        Polygons: Polygon[];

        /** An array of objects that contain the polygon information for the boundary. */
        Primitives: IGeoDataPrimitive[];
    }

    /** Represents the set of results returned by the GeoData API. */
    export interface IGeoDataResultSet {
        /** Copyright information for the GeoData API. */
        Copyright: string;

        /** The location provided in the query that generated this result. */
        location: string |  Location;

        /** Results of the boundary data. */
        results: IGeoDataResult[];
    }

    /**
     * This is a static class that provides the ability to request polygons that describe the boundaries of a geographic entities, such as an AdminDivision1
     * (such as a state or province) or a Postcode1 (such as a zip code) that contain a given point (latitude and longitude) or address. This uses the GeoData
     * API in the Bing Spatial Data Services.
     * @requires The Microsoft.Maps.SpatialDataService module.
     */
    export module GeoDataAPIManager {
        /**
         * Gets a boundary for the specified request. If the specified location value is a string, it will be geocoded and the coordinates of the result will
         * be used to find a boundary of the specified entityType that intersects with this coordinate.
         * @requires The Microsoft.Maps.SpatialDataService module.
         * @param locations The locations to retrieve boundaries for. If the specified location value is a string, it will be geocoded and the coordinates of
         * the result will be used to find a boundary of the specified entityType that intersects with this coordinate.
         * @param request The request options for retrieving a boundary.
         * @param credentials A bing maps key or a map instance which can be used to provide credentials to access the data source. Note that the map will need
         * to be loaded with a bing maps key that has access to the data source.
         * @param callback A callback function to return the results to. If an array of locations are specified the callback function will be triggered for each location in the array.
         */
        export function getBoundary(locations: string | Location | (string | Location)[], request: IGetBoundaryRequestOptions, credentials: string | Map, callback: (results: IGeoDataResultSet) => void, styles?: IPolygonOptions): void;
    }

    //////////////////////////////////////////////
    /// Query API
    //////////////////////////////////////////////

    /**
    * An enumeration that defines how to compare the filters value against the corresponding property value.
    * @requires The Microsoft.Maps.SpatialDataService module.
    */
    export enum FilterCompareOperator {
        /** Determines if a string value ends with a specified string value. */
        endsWith,

        /** Determines if two values are equal. */
        equals,

        /** Determines if a first value is greater than a second value. */
        greaterThan,

        /** Determines if a first value is greater than or equal to a second value. */
        greaterThanOrEqual,

        /** Determines if a value is within an array. */
        isIn,

        /** Determines if a first value is less than a second value. */
        lessThan,

        /**  Determines if a first value is less than or equal a second value. */
        lessThanOrEqual,

        /** Determines if a string value does not end with a specified string value. */
        notEndsWith,

        /** Determines if two values are not equal. */
        notEquals,

        /** Determines if a string value does not start with a specified string value. */
        notStartsWith,

        /** Determines if a string value starts with a specified string value. */
        startsWith
    }

    /**
    * An enumeration that defines how two or more filters are linked together.
    * @requires The Microsoft.Maps.SpatialDataService module.
    */
    export enum FilterLogicalOperator {
        /** Connects two or more filters that both must be true. */
        and,

        /** Connects two or more filters where one of them must be true. */
        or
    }

    /**
    * A Fitler object that defines the logic behind a filter expression that can be executed against a JSON object or generate
    * a filter string that can be used with the Bing Spatial Data Services.
    */ 
    export interface IFilter {
        /**
        * Executes the filter logic against a JSON object and returns a boolean indicating if the object meets the requirements of the Filter.
        * @returns A boolean indicating if the specified object meets the requirements of the Filter.
        */
        execute(object: any): boolean;

        /**
        * Converts the filter logic into a string format that is compatible with the Bing Spatial Data Services.
        * @returns A filter string that is formatted such that it is compatible with the Bing Spatial Data Services.
        */
        toString(): string;
    }

    /**
     * The Fitler class defines the logic behind a filter expression that can be executed against a JSON object or generate
     * a filter string that can be used with the Bing Spatial Data Services.
     * @requires The Microsoft.Maps.SpatialDataService module.
     */
    export class Filter implements IFilter {
        /**
         * @constructor
         * @requires The Microsoft.Maps.SpatialDataService module.
         * @param propertyName The name of the property in the object to test against. Can also provide child properties i.e. 'root.child'.
         * @param operator The operator to use when comparing the specified property to value to the provided value.
         * @param value A value to compare against.
         */
        constructor(propertyName: string, operator: string | FilterCompareOperator, value: any);

        /**
        * Executes the filter logic against a JSON object and returns a boolean indicating if the object meets the requirements of the Filter.
        * @returns A boolean indicating if the specified object meets the requirements of the Filter.
        */
        public execute(object: any): boolean;

        /**
        * Converts the filter logic into a string format that is compatible with the Bing Spatial Data Services.
        * @returns A filter string that is formatted such that it is compatible with the Bing Spatial Data Services.
        */
        public toString(): string;
    }

    /**
     * A class that groups two or more logical filters or filter groups together. It can be executed against a JSON or generate
     * a filter string that can be used with the Bing Spatial Data Services.
     * @requires The Microsoft.Maps.SpatialDataService module.
     */
    export class FilterGroup implements IFilter {
        /**
        * @constructor
        * @requires The Microsoft.Maps.SpatialDataService module.
        * @param filters An array consisting of Filter or FilterGroup objects to combine.
        * @param operator The logical operator for combining the filters together.
        * @param not A boolean is the logical inverse should of the filter should be used.
        */
        constructor(filters: IFilter[], operator: FilterLogicalOperator, not?: boolean)

        /**
        * Executes the filter logic against a JSON object and returns a boolean indicating if the object meets the requirements of the Filter.
        * @returns A boolean indicating if the specified object meets the requirements of the Filter.
        */
        public execute(object: any): boolean;

        /**
        * Converts the filter logic into a string format that is compatible with the Bing Spatial Data Services.
        * @returns A filter string that is formatted such that it is compatible with the Bing Spatial Data Services.
        */
        public toString(): string;
    }

    /** Options for find near route query API. */
    export interface ISpatialFilterOptions {
        /** 
         * One of the following values:
         * • nearby – Searches in a radius around a location.
         * • nearRoute – Searches for results that are within 1 mile of a route.
         * • intersects – Searches for results that intersect with the specified geometry.
         * Note: Note that the NavteqNA and NavteqEU data sources only support nearby queries.
         */
        spatialFilterType: string;

        /** Location at which the filter should be applied (only for nearby filter). */
        location?: string | Location;

        /** 
         * Radius to use when performing a nearby search. The distance in kilometers and must be between 0.16 and 1000 kilometers
         * (only for nearby filter).
         */
        radius?: number;

        /** Start location of the route (only for nearroute filter). */
        start?: string | Location;

        /** End location of the route (only for nearroute filter). */
        end?: string | Location;

        /** Intersection object. Can be a well known text string or a LocationRect object (only for intersects filter). */
        intersects?: string | LocationRect | IPrimitive;
    }
    
    /** Options for find near route query API. */
    export interface IFindNearRouteOptions extends ISpatialFilterOptions {
        /** 
         * One of the following values:
         *  • Driving [default]
         *  • Walking
         */
        travelMode?: string;

        /** 
         * An integer value between 0 and 359 that represents degrees from north 
         * where north is 0 degrees and the heading is specified clockwise from north. 
         * For example, setting the heading of 270 degrees creates a route that initially heads west 
         */
        heading?: number;

        /**
         * An integer distance specified in meters.
         * Use this parameter to make sure that the moving vehicle has enough distance 
         * to make the first turn
         */
        distanceBeforeFirstTurn?: number;

        /**
         * A list of values that limit the use of highways and toll roads in the route.
         * Use one of the following values:
         * • highways - Avoids the use of highways in the route.
         * • tolls - Avoids the use of toll roads in the route.
         * • minimizeHighways - Minimizes (tries to avoid) the use of highways in the route.
         * • minimizeTolls - Minimizes (tries to avoid) the use of toll roads in the route.
         */
        avoid?: string[];

        /**
         * One of the following values:
         * • distance - The route is calculated to minimize the distance.Traffic information is not used.
         * • time[default] - The route is calculated to minimize the time.Traffic information is not used.
         * • timeWithTraffic - The route is calculated to minimize the time and uses current traffic information.
         */
        optimize?: string;
    }

    /** Set of options that can be specified for query APIs. */
    export interface IQueryAPIOptions {
        /** A queryurl containing the access id, data source name and the entity type name. */
        queryUrl: string;

        /** Specifies a conditional expression for a list of properties and values. */
        filter?: string | IFilter;

        /** Specifies whether or not to return a count of the results in the response. Default: false */
        inlineCount?: boolean;

        /** Specifies to query the staged version of the data source instead of the published version. Default: false */
        isStaging?: boolean;

        /**
         * Specifies one or more properties to use to sort the results of a query. 
         * You can specify up to three (3) properties. Results are sorted in ascending order.
         * Note: You cannot use the latitude and longitude properties to sort results. You can use the elevation property.
         */
        orderBy?: string[];

        /**
         * Specifies the data source properties to return in the response. If the $select query option is not specified or
         * if it is set to "" ($select=), all data source properties are returned. Default: "*,_distance"
         */
        select?: string[];

        /** Specifies to not return a specified number of query results. */
        skip?: number;

        /** Spatial filter options to apply. */
        spatialFilter?: ISpatialFilterOptions | IFindNearRouteOptions;

        /** Specifies the maximum number of results to return in the query response. Default: 25 */
        top?: number;
    }

    /**
     * This is a static class that provides that ability to query data sources that are hosted by the Bing Spatial Data Services using the Query API.
     * @requires The Microsoft.Maps.SpatialDataService module.
     */
    export module QueryAPIManager {
        /**
         * Perform a search
         * @requires The Microsoft.Maps.SpatialDataService module.
         * @param queryOptions - Options for the query
         * @param credentials - Credentials for the query
         * @param callback - The function to call once the results are retrieved
         * @param styles - (Optional) Styles of the data that needs to be rendered on map
         * @param withoutLocationInfo -
         * @param errorCallback - 
         */
        export function search(queryOptions: IQueryAPIOptions,
            credentials: string | Map,
            callback: (data: IPrimitive[], inlineCount?: number) => void,
            styles?: IStylesOptions): void;
    }
}

/**
 * This module provides a bunch of useful spatial math calculations.
 * @requires The Microsoft.Maps.SpatialMath module.
 */
export module SpatialMath {

    /**
     * Distance Unit enumerator
     * @requires The Microsoft.Maps.SpatialMath module.
     **/
    export enum DistanceUnits {
        /** A distance in meters */
        Meters,

        /** A distance in kilometers */
        Kilometers,

        /** A distance in miles */
        Miles,

        /** A distance in Feet */
        Feet,

        /** A distance in Yards */
        Yards,

        /** A distance in Nautical Miles */
        NauticalMiles
    }

    /**
     * Area units enumerator
     * @requires The Microsoft.Maps.SpatialMath module.
     **/
    export enum AreaUnits {
        /** Area in square meters */
        SquareMeters,

        /** Area in square kilometers */
        SquareKilometers,

        /** Area in square miles */
        SquareMiles,

        /** Area in square Feet */
        SquareFeet,

        /** Area in square Yards */
        SquareYards,

        /** Area in Acres */
        Acres,

        /** Area in Hectares */
        Hectares
    }

    //////////////////////////////////////////////
    /// Core Calculations
    //////////////////////////////////////////////

    /**
     * Converts an area from one area units to another.
     * @param area A number that represents an area to convert.
     * @param fromUnits The area units the original area is in.
     * @param toUnits The area units to convert to.
     * @returns An area in the new units.
     **/
    export function convertArea(area: number, fromUnits: AreaUnits, toUnits: AreaUnits): number;

    /**
     * Converts a distance from one distance units to another. 
     * @param distance A number that represents a distance to convert.
     * @param fromUnits The distance units the original distance is in.
     * @param toUnits The disired distance units to convert to.
     * @returns A distance in the new units.
     **/
    export function convertDistance(distance: number, fromUnits: DistanceUnits, toUnits: DistanceUnits): number;

     /**
     * Calculates an array of locations that form a cardinal spline between the specified array of locations.
     * @param locations The array of locations to calculate the spline through.
     * @param tension A number that indicates the tightness of the curve. Can be any number, although a value between 0 and 1 is usually used. Default: 0.5
     * @param nodeSize Number of nodes to insert between each Location. Default: 15
     * @param close A boolean indicating if the spline should be a closed ring or not. Default: false
     * @returns An array of locations that form a cardinal spline between the specified array of locations.
     */
    export function getCardinalSpline(locations: Location[], tension ?: number, nodeSize ?: number, close ?: boolean): Location[];

    /**
     * Calculates a destination Location based on a starting Location, a heading, a distance, and a distance unit type.
     * @param origin Location that the destination is relative to.
     * @param bearing A heading angle between 0 - 360 degrees. 0 - North, 90 - East, 180 - South, 270 - West.
     * @param distance Distance that destination is away.
     * @param units Unit of distance measurement. Default is Meters.
     * @returns A Location that is the specified distance away from the origin.
     **/
    export function getDestination(origin: Location, bearing: number, distance: number, units?: DistanceUnits): Location;

    /**
     * Calculate the distance between two Location objects on the surface of the earth using the Haversine formula.
     * @param origin First Location to calculate distance between.
     * @param destination Second Location to calculate distance between.
     * @param units Unit of distance measurement. Default is Meters.
     * @param highAccuracy When set enabled, will use the slower but more accurate Vincenty formula for calculating distances, rather than the Haversine formula.
     * @returns The shortest distance between two Locations in the specifed units.
     **/
    export function getDistanceTo(origin: Location, destination: Location, units?: DistanceUnits, highAccuracy?: boolean): number;

    /**
     * Retrieves the radius of the earth in a specific distance unit for WGS84. 
     * @param units Unit of distance measurement. Default: Meters
     * @returns A number that represents the radius of the earth in a specific distance unit.
     **/
    export function getEarthRadius(units?: DistanceUnits): number;

    /**
     * Takes an array of Locations objects and fills in the space between them with accurately positioned Locations to form an approximated Geodesic path.
     * @param path Array of Location objects that form a path to fill in.
     * @param nodeSize Number of nodes to insert between each Location. Default: 15
     * @returns An array of Location objects that form a geodesic paths.
     **/
    export function getGeodesicPath(path: Location[], nodeSize?: number): Location[];

    /**
     * Calculates the heading from one Location object to another.
     * @param origin Point of origin.
     * @param destination Destination to calculate relative heading to.
     * @returns A heading in degrees between 0 and 360. 0 degrees points due North.
     **/
    export function getHeading(origin: Location, destination: Location): number;

    /**
     * Calculates the distance between all Location objects in an array.
     * @param path The array of Location objects that make up the path to calculate the length of.
     * @param units Unit of distance measurement. Default: Meters
     * @param highAccuracy If set to true, uses the more accurate Vincenty algorithm for calcuating distances. Otherwise the faster Haversine formula is used. 
     * @returns The distance between all Locations in between all Location objects in an array on the surface of a earth in the specifed units.
     **/
    export function getLengthOfPath(path: Location[], units?: DistanceUnits, highAccuracy?: boolean): number;

    /**
     * Calculates the Location object on a path that is a specified distance away from the start of the path. If the specified distance is longer 
     * than the length of the path, the last Location of the path will be returned.
     * @param path A polyline or array of Location coordinates that form a path.
     * @param distance The distance along the path (from the start) to calculate the location for.
     * @param units Unit of distance measurement. Default is Meters.
     * @returns A Location object that is the specified distance away from the start of the path when following the path.
     **/
    export function getLocationAlongPath(path: Polyline | Location[], distance: number, units?: DistanceUnits): Location;

    /**
     * Calculates an array of Location objects that are an equal distance away from a central point to create a regular polygon.
     * @param origin Center of the regular polygon.
     * @param radius Radius of the regular polygon.
     * @param numberOfPoints Number of points the polygon should have.
     * @param units Unit of distance measurement for radius. Default is Meters.
     * @param offset An offset to rotate the polygon clockwise in degrees. When 0 the first Location will align with North.
     * @returns An array of Location objects that form a regular polygon.
     **/
    export function getRegularPolygon(origin: Location, radius: number, numberOfPoints: number, units?: DistanceUnits, offset?: number): Location[];

    /**
     * Calculates a Location object that is a fractional distance between two Location objects.
     * @param origin First Location to calculate mid-point between.
     * @param destination Second Location to calculate mid-point between.
     * @param fraction The fractional parameter to calculate a mid-point for. Default 0.5.
     * @returns A Location that lies a fraction of the distance between two Location objects, relative to the first Location object.
     **/
    export function interpolate(origin: Location, destination: Location, fraction?: number): Location;

    /**
     * Takes a LocationRect and converts it to a polygon.
     * @param bounds The LocationRect to convert to a Polygon.
     * @returns A polygon representation of the LocationRect.
     **/
    export function locationRectToPolygon(bounds: LocationRect): Polygon;

    /**
     * Takes a Location object and converts it into a Degree Minute Seconds string in the format. For example: 40° 26′ 46″ N 79° 58′ 56″ W
     * @param loc The Location object to convert into a Degree Minute Seconds string.
     * @returns A string in Degree Minute Seconds format or null if invalid Location object is provided.
     */
    export function toDegMinSec(loc: Location): string;

    /**
     * Tries to parse the given string that is in Degree Minute Seconds format. For Example: 35° 26′ 31″ E or 40° 26′ 46″ N 79° 58′ 56″ W
     * @param input A string in Degree Minute Seconds format to parse.
     * @returns Returns a decimal degree value if only a single angle is provided. If two angles provided in the string, then a 
     * Location object is returned. If string is in an invalid format, null is returned.
     */
    export function tryParseDegMinSec(input: string): number | Location;

	//////////////////////////////////////////////
	/// Tile Calculations
	//////////////////////////////////////////////

	/**
	* A colleciton of mathematical algorithms based on the tile pyramid used by Bign Maps.
	* @requires The Microsoft.Maps.SpatialMath module.
	*/
	export module Tiles {
		//Based on https://msdn.microsoft.com/en-us/library/bb259689.aspx

		/**
		 * Calculates the full width of the map in pixels at a specific zoom level from -180 degrees to 180 degrees.
		 * @param zoom Zoom level to calculate width at.
		 * @param tileWidth Width of tile.
		 * @returns Width of map in pixels.
		 **/
		export function mapSize(zoom: number): number;

		/**
		 * Calculates the Ground resolution at a specific degree of latitude in the specified units per pixel.
		 * @param latitude Degree of latitude to calculate resolution at.
		 * @param zoom Zoom level to calculate resolution at.
		 * @param units Distance unit type to calculate resolution in.
		 * @returns Ground resolution in distance unit per pixels.
		 **/
		export function groundResolution(latitude: number, zoom: number, units?: SpatialMath.DistanceUnits): number;

		/**
		 * Converts a Pixel coordinate into a Geospatial Location at a specified zoom level. 
		 * Global Pixel coordinates are relative to the top left corner of the map (90, -180)
		 * @param point Pixel coordinate.
		 * @param zoom Zoom level.
		 * @returns A Location that is at the specified pixel location at a specified zoom level.
		 **/
		export function globalPixelToLocation(point: Point, zoom: number): Location;

		/**
		 * Converts a point from latitude/longitude WGS-84 Location (in degrees)
		 * into pixel XY coordinates at a specified level of detail.
		 * @param loc Location to convert to a global pixel.
		 * @param zoom Level of detail, from 1 (lowest detail) to 23 (highest detail).
		 * @returns Point object containing the the global pixel location of a Location.
		 **/
		export function locationToGlobalPixel(loc: Location, zoom: number): Point;

		/**
		 * Calculates the PyramidTileId that a global pixel intersects with at a specific zoom level.
		 * @param pixel The pixel coordinate to calculate the tile for.
		 * @param zoom The zoom level to calculate the tile for.
		 * @returns A PyramidTileId that a global pixel intersects with at a specific zoom level.
		 **/
		export function globalPixelToTile(pixel: Point, zoom: number): PyramidTileId;

		/**
		 * Converts a PyramidTileId into a global pixel coordinates of the upper-left pixel of the specified tile.
		 * @param tile A PyramidTileId to calculate the upper-left pixel for.
		 * @returns Global pixel coordinate of the top left corner of a tile.
		 **/
		export function tileToGlobalPixel(tile: PyramidTileId): Point;

		/**
		 * Calculates the PyramidTileId that a Location object intersects with at a specific zoom level.
		 * @param loc The location to calulate the tile for.
		 * @param zoom The zoom level to use to calculate the tile.
		 * @returns A PyramidTileId that a Location object intersects with at a specific zoom level.
		 **/
		export function locationToTile(loc: Location, zoom: number): PyramidTileId;

		/**
		 * Calculates all the PyramidTileId's that are within a LocationRect at a specific zoom level.
		 * @param bounds A LocationRect to search for tiles in.
		 * @param zoom The zoom level to calculate tiles for.
		 * @returns A list of PyramidTileId's that are within the specified LocationRect and zoom level.
		 **/
		export function getTilesInBounds(bounds: LocationRect, zoom: number): PyramidTileId[];

		/**
		 * Calculates the LocationRect (bounding box) of a PyramidTileId.
		 * @param tile A PyramidTileId to calculate the LocationRect of.
		 * @returns The bounding box of a tile.
		 **/
		export function tileToLocationRect(tile: PyramidTileId): LocationRect;
	}

	//////////////////////////////////////////////
	/// Geometry Calculations
	//////////////////////////////////////////////

	/**
	* A colleciton of geometry calculations that can be performed against Bing Maps shapes.
	* @requires The Microsoft.Maps.SpatialMath module.
	*/
	export module Geometry {

    /** Defines how the end of a line should be buffered. */
    export enum BufferEndCap {
        /** Adds a rounded end to a buffered line. */
        Round,

        /** Adds a flat end to a buffered line that touches the end of the line. */
        Flat,

        /** Adds a square end to a buffered line that has a buffer area at the end of the line. */
        Square
    }

    /**
     * Calculates the area of a shape.
     * @param shape The shape to calculate the area of.
     * @param areaUnits The unit of measurement to calculate the area in.
     * @returns The area of a shape in the specified unit of measurement.
     */
    export function area(shape: IPrimitive | IPrimitive[], areaUnits?: AreaUnits): number;

    /**
     * Calculates a bounding box that encloses a set of shapes and/or locations.
     * @param shapes The shape(s) to calculate the bounding box for.
     * @returns A location rect that encloses the shapes and/or locations.
     */
    export function bounds(shapes: Location | IPrimitive | (Location | IPrimitive)[]): LocationRect;

    /**
     * Calcuates a shape with an updated boundary that has been inflated/deflated by a speicifed distance.
     * @param shape The shape to buffer.
     * @param distance The distance to buffer the shape by.
     * @param units The distance units to buffer the shape by.
     * @param endCapType The type of end cap to use for the joints of the buffer, default value is round.
     * @param options A set of polygon options to apply to the generated shape.
     * @returns A buffered version of the shape.
     */
    export function buffer(shape: Location | IPrimitive | (Location | IPrimitive)[], distance: number, units?: DistanceUnits, endCapType?: BufferEndCap, options?: IPolygonOptions): IPrimitive | IPrimitive[];

    /**
     * Calculates the center of a shape.
     * @param shape The shape to calculate the center of.
     * @returns The center of the specified shape.
     */
    export function centroid(shape: IPrimitive | IPrimitive[]): Location;

    /**
     * Calculates an approximate concave hull that best fits the data. 
     * A concave hull is a shape that represents that a possible concave geometry that encloses all shapes in the specified data set.
     * If a single unique Location is in the data set, a Pushpin is returned. If only two unique Locations are provided, or if all Locations form a line, a Polyline is returned. 
     * If 3 or more unique Locations are in the data set a Polygon, or array of Polygons will be returned.
     * @param shapes Shape(s) whose Location(s) or Location(s) are to be used to generate a concave hull.
     * @param allowMultiPolygons A boolean indicating if the resulting concave hull can be a MultiPolygon. Default: false
     * @param allowHoles A boolean indicating if the polygons in the resulting concave hull can have holes in them. Default: false
     * @param options A set of polygon options to apply to the generated shape.
     * @returns An approximate concave hull that best fits the data. 
     * If a single unique Location is in the data set, a Pushpin is returned. If only two unique Locations are provided, or if all Locations form a line, a Polyline is returned. 
     * If 3 or more unique Locations are in the data set a Polygon, or array of Polygons will be returned.
     */
    export function concaveHull(shapes: Location | IPrimitive | (Location | IPrimitive)[], allowMultiPolygons?: boolean, allowHoles?: boolean, options?: IPolygonOptions): IPrimitive | IPrimitive[];

    /**
     * Given two shapes, determines if the first one contains the second one 
     * (or, the second shape is a subset of the first shape) or not.
     * @param shapeA The first shape to test against the second.
     * @param shapeB The second shape to test against the first.
     * @returns A boolean indicating if the first shape contains the second shape.
     */
    export function contains(shapeA: Location | IPrimitive | (Location | IPrimitive)[], shapeB: Location | IPrimitive | (Location | IPrimitive)[]): boolean;

    /**
     * Calculates a convex hull. A convex hull is a shape that represents that minimum convex geometry that encloses all shapes in the specified data set.
     * @param shapes Shape(s) whose Location(s) or Location(s) are to be used to generate a convex hull.
     * @param options A set of polygon options to apply to the generated shape.
     * @returns An array of locations that form a convex hull that encloses all locations of the shapes provided in an array.
     */
    export function convexHull(shapes: Location | IPrimitive | (Location | IPrimitive)[], options?: IPolygonOptions): IPrimitive | IPrimitive[];

    /**
     * Creates Delaunay Triangles from the Location objects of the provided shapes.
     * @param shapes Location(s) of shape(s) or Location(s) to generate a Delaunay Triangles from.
     * @param options A set of polyline or polygon options to apply to the generated shape.
     * @returns An array of shapes that form the polygon triangles of the delaunay triangles.
     */
    export function delaunayTriangles(shapes: Location | IPrimitive | (Location | IPrimitive)[], options?: IPolygonOptions): Polygon[];

    /**
     * Returns an object that represents area of an initial shape subtracted by the overlapping area of a second shape. 
     * @param shapeA The first shape.
     * @param shapeB The second shape to subtract from the first.
     * @returns A set of shapes that represent the area of the first shape that is not overlapped by the second shape.
     */
    export function difference(shapeA: IPrimitive | IPrimitive[], shapeB: IPrimitive | IPrimitive[]): IPrimitive | IPrimitive[];

    /**
     * Calculates the approximate shortest distance between any two shapes. 
     * @param shapeA The first shape to calculate the distance from.
     * @param shapeB The second shape to calculate the distance to.
     * @param units Unit of distance measurement. Default: Meters
     * @param highAccuracy If set to true, uses the more accurate Vincenty algorithm for calcuating distances. Otherwise the faster Haversine formula is used. 
     * @returns The shorested distance between the shapes in the specified units.
     */
    export function distance(shapeA: Location | IPrimitive | (Location | IPrimitive)[], shapeB: Location | IPrimitive | (Location | IPrimitive)[], units?: DistanceUnits, highAccuracy?: boolean): number;

    /**
     * Returns an object that represents the area where two shapes intersect. 
     * @param shapeA The first shape.
     * @param shapeB The second shape.
     * @returns A set of shapes that represents the area where two shapes intersect.
     */
    export function intersection(shapeA: IPrimitive | IPrimitive[], shapeB: IPrimitive | IPrimitive[]): IPrimitive | IPrimitive[];

    /**
     * Determines if two shapes intersect or not.
     * @param shapeA The first shape to test against the second.
     * @param shapeB The second shape to test against the first.
     * @returns A boolean indicating if the two shapes intersect.
     */
    export function intersects(shapeA: Location | IPrimitive | (Location | IPrimitive)[], shapeB: Location | IPrimitive | (Location | IPrimitive)[]): boolean;

    /**
     * Tests to see if the shape is valid and meets the requirements of an SQL Geography type and other OGC compliant systems. Polylines & Polygons can't be self intersecting. For Polygons, 
     * coordinates in an exterior rings have a counter-clockwise orientation, while holes have a clockwise orientation.
     * @param shape The shape to test for validity.
     * @returns Returns a boolean indicting if the specified shape(s) is valid or not. 
     */
    export function isValid(shape: IPrimitive | IPrimitive[]): boolean;

    /**
     * Calculates the distance between all Locations in a shape. If the shape is a polygon, the length of the perimeter of all rings is calculated.
     * @param shape The shape to calculate the length of.
     * @param units Unit of distance measurement. Default: Meters
     * @param highAccuracy If set to true, uses the more accurate Vincenty algorithm for calcuating distances. Otherwise the faster Haversine formula is used. 
     * @returns The distance between all Locations in a polyline or the perimeter of a ploygon on the surface of a earth in the specifed units.
     */
    export function calculateLength(shape: IPrimitive | IPrimitive[], units ?: DistanceUnits, highAccuracy ?: boolean): number;

    /**
     * Takes a shape and returns a copy of it that meets the requirements of an SQL Geography type and other OGC compliant systems. Polylines & Polygons can't be self intersecting. For Polygons, 
     * coordinates in an exterior rings have a counter-clockwise orientation, while holes have a clockwise orientation.
     * @param shape The shape to make valid.
     * @returns Valiated version of the provided shape. May be a different shape type than what was provided. i.e. A polygon may be broken up into an array of polygons (MultiPolygon).
     */
    export function makeValid(shape: IPrimitive | IPrimitive[]): IPrimitive | IPrimitive[];

    /**
     * Calculates the nearest Location objects between to shapes that lie on the shapes.
     * If the shapes do not overlap, this calculates a location on each shape that is closest to the other shape. 
     * If the shapes overlap, a location that is within the intersection area of the shapes will be added twice to an array, once for each shape, and returned.
     * @param shapeA The first shape.
     * @param shapeB The second shape.
     * @returns An array of two Location objects that represent the nearest points between two shapes. 
     * The Location objects are in the same order as the input shapes. 
     * Returns null if nearest points were unable to be computed.
     */
    export function nearestLocations(shapeA: Location | IPrimitive | (Location | IPrimitive)[], shapeB: Location | IPrimitive | (Location | IPrimitive)[]): Location[];

    /**
     * Reduces the resolution of a shape using the Douglas-Peucker algorithm.
     * @param shape The shape to reduce the resolution of.
     * @param tolerance A tolerance distance in meters used by the reduction algorithms.
     * @returns A version of the specified shape that has been reduced. 
     */
    export function reduce(shape: IPrimitive | IPrimitive[], tolerance: number): IPrimitive | IPrimitive[];

    /**
     * Rotates a shape around a given Location for the specified angle of rotation. If an origin is not provided, the centroid of the shape is used.
     * @param shape The shape to be rotated.
     * @param angle The amount to rotate the shape in degrees.
     * @param origin The location to rotate the shape around. Defaults to the centroid of the shape.
     */
    export function rotate(shape: IPrimitive | IPrimitive[], angle: number, origin?: Location): void;

    /**
     * Calculates the shortest path that between two shapes and returns a Polyline.
     * @param shapeA The first shape.
     * @param shapeB The second shape.
     * @param options A set of polyline options to apply to the generated polyline.
     * @returns A polyline that represents the shortest path between two shapes.
     */
    export function shortestLineTo(shapeA: Location | IPrimitive | (Location | IPrimitive)[], shapeB: Location | IPrimitive | (Location | IPrimitive)[], options?: IPolylineOptions): Polyline;

    /**
     * Snaps the locations of one shape that are within the specified tolerance distance away from another shape.
     * @param locs The locations to snap to the shape.
     * @param shape The shape to snap the locations to.
     * @param tolerance A maximum distance (in the specified units) that the snapped location can be from the input location. Default: Infinity
     * @param toleranceUnits The distance units of the tolerance value. Default: Meters
     * @returns A snapped location if only one location is provided, otherwise returns an array of snapped locations.
     */
    export function snapLocationsToShape(locs: Location | Location[], shape: IPrimitive | IPrimitive[], tolerance?: number, toleranceUnits?: DistanceUnits): Location | Location[];

    /**
     * Snaps the locations of one shape that are within the specified tolerance distance away from another shape.
     * @param shapeToSnap The shape to snap the locations of.
     * @param shape The shape to snap the locations to.
     * @param tolerance A maximum distance (in the specified units) that the snapped location can be from the input location. Default: Infinity
     * @param toleranceUnits The distance units of the tolerance value. Default: Meters
     */
    export function snapShapeToShape(shapeToSnap: IPrimitive | IPrimitive[], shape: IPrimitive | IPrimitive[], tolerance?: number, toleranceUnits?: DistanceUnits): void;

    /**
     * Returns an object that represents all points that are either in one shape instance or another, but not those points that lie in both instances.
     * "Sym" stands for Symmetric. symDifference is an OGC standard name for this calculation used in most spatial math libraries, including SQL. 
     * @param shapeA The first shape.
     * @param shapeB The second shape.
     * @returns A shape that represents the symetric difference between two shapes.
     */
    export function symDifference(shapeA: IPrimitive | IPrimitive[], shapeB: IPrimitive | IPrimitive[]): IPrimitive | IPrimitive[];

    /**
     * Returns an object that represents the union of two shapes. If shapes don't overlap, an array of each individual shapes will be returned.
     * @param shapeA The first shape.
     * @param shapeB The second shape.
     * @returns A shape that represents the union of two shapes.
     */
    export function union(shapeA: IPrimitive | IPrimitive[], shapeB: IPrimitive | IPrimitive[]): IPrimitive | IPrimitive[];

    /**
     * Performs a union operation on a set of shapes. 
     * If a shape doesn't overlap with the rest, the returned result will be an array of shapes containing this shape and the union of the rest.
     * @param shapes An array of shapes to union together.
     * @returns A shape that represents the union of all specified shapes.
     */
    export function unionAggregate(shapes: IPrimitive[]): IPrimitive | IPrimitive[];

    /**
     * Creates a Voronoi diagram from the Location objects of the provided shapes. The diagram is returned as an array of Polygons. 
     * If a clip region is specified, the diagram will be clipped accordingly.
     * @param shapes Location(s) of shape(s) or Location(s) to generate a Voronoi diagram.
     * @param clipRegion A region to clip the voronoi diagram to. 
     * @param options A set of polygon options to apply to the generated shape.
     * @returns An array of polygons that form a Voronoi diagram.
     */
    export function voronoiDiagram(shapes: Location | IPrimitive | (Location | IPrimitive)[], clipRegion?: LocationRect | Polygon, options?: IPolygonOptions): Polygon[];
}
}

/**
 * Adds a traffic incident and flow data to the map.
 * @requires The Microsoft.Maps.Traffic module.
 */
export module Traffic {
    /** Options that can be customized in the Traffic manager. */
    export interface ITrafficOptions {
        /** Displays the traffic flow layer. */
        flowVisible?: boolean;

        /** Displays all traffic incidents. */
        incidentsVisible?: boolean;

        /** Displays the traffic legend. */
        legendVisible?: boolean;

        /**
        * Sets the opacity of the traffic flow tile layer. Must be a number between 0 and 1. The default is 1 unless the map
        * mode is set to lite, in which case the default is set to 0.7.
        */
        opacity?: number;
    }

    /**
     * The TrafficManager class provides the ability to show traffic flow and incident data on top of the map. When creating an
     * instance of the TrafficManager class the map must be passed as an argument to the constructor.
     * @requires The Microsoft.Maps.Traffic module.
     */
    export class TrafficManager {
        /**
        * @constructor
        * @requires The Microsoft.Maps.Traffic module.
        * @param map A map instnce to attach the traffic manager to.
        */
        constructor(map: Map);

        /** Hides all traffic data. */
        public hide(): void;

        /** Hides the traffic flow layer. */
        public hideFlow(): void;

        /** Hides all traffic incidents. */
        public hideIncidents(): void;

        /** Hides the traffic legend. */
        public hideLegend(): void;

        /**
        * Sets the options for the traffic manager.
        * @param options The options for the traffic manager.
        */
        public setOptions(options: ITrafficOptions): void;

        /** Displays all traffic data. */
        public show(): void;

        /** Displays the traffic flow layer. */
        public showFlow(): void;

        /** Displays all traffic incidents. */
        public showIncidents(): void;

        /** Displays the traffic legend. */
        public showLegend(): void;

    }
}

    /**
     * Class responsible for readon/writing geo data in well known text format
     * @requires The Microsoft.Maps.WellKnownText module.
     */
    export module WellKnownText {
        /**
         * Reads the data in wellknowntext format and returns the shapes. Multi-Geometry type shapes are returned as an array of shapes.
         * @param wkt The well known text string that needs to be parsed into shapes.
         * @param styles Styles to apply to the shapes.
         * @returns One of more shapes.
         */
        export function read(wkt: string, styles?: IStylesOptions): IPrimitive | IPrimitive[];

        /**
         * Writes the data into wellknowntext format.
         * @param data The data that needs to be serialized.
         * @returns Well known text formatted string.
         */
        export function write(data: IPrimitive | IPrimitive[]): string;
    }

    /** Options used to customize the autosuggest functionality. */
    export interface IAutosuggestOptions {
        /** Specifies if street address suggestions should be returned. Default: true */
        addressSuggestions?: boolean;

        /**
        * Specifies if the user’s location should be auto detected using their IP address, if no location information is provided
        * in the userLocation property. Default: true
        */
        autoDetectLocation?: boolean;

        /**
        * A bounding box that is used to help influence the results such that locations that are in or near this bounding box
        * are given more weight than they would normally.
        */
        bounds?: LocationRect;

        /**
        * A string specifying the ISO 3166-1 alpha-2 country region code which is used to limit suggests to a single country.
        * https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
        */
        countryCode?: string;

        /**
        * A reference to a map instance. If the useMapView property is set to true, the bounding box of the map view will be used
        * to influence the weight of suggestions.
        */
        map?: Map;

        /** The maximum number of results to return. Can be any value between 1 and 10. Default: 5 */
        maxResults?: number;

        /** Specifies if place suggestions (city, landmark, etc.) should be returned. Default: true */
        placeSuggestions?: boolean;

        /**
        * Indicates if the maps bounding box should be used to influence the suggested results. Ignored if the bounds property is
        * set. Default: true
        */
        useMapView?: boolean;

        /** A coordinate indicating where the user is located. This will influence the results to be more relevant to the user. */
        userLocation?: Location;
    }

    /** Represents the suggestion result from the Autosuggest manager. */
    export interface ISuggestionResult {
        /** A structured address object for the result.  */
        address: IAddress;

        /** A LocationRect that can be used to set the map view over the result. */
        bestView: LocationRect;

        /** Unique entity id to be used for searching the entity. */
        entityId: string;

        /** The type of the result; Address, Place */
        entityType: string;

        /** The sub type of result; Address, RoadBlock, PopulatedPlace, CountryRegion, etc. */
        entitySubType: string;

        /** A nicely formatted suggestion string for the result based on market. */
        formattedSuggestion: string;

        /**
        * The coordinate of the result. This value is only returned for place (city, landmarks) results and not for addresses.
        * Street addresses will need to be geocoded to get their location.
        */
        location: Location;

        /** A secondary title that provides additional context to the title value of the suggestion. **/
        subtitle: string;

        /** The display title for the result (i.e. “Redmond”). */
        title: string;
    }

    /**
     * The AutosuggestManager is the primary class in the Autosuggest module that powers the autosuggest functionality.
     * @requires The Microsoft.Maps.Autosuggest module.
     */
    export class AutosuggestManager {
       /**
       * @constructor
       * @requires The Microsoft.Maps.Autosuggest module.
       * @param options The options to use with the autosuggest manager.
       */
        constructor(options?: IAutosuggestOptions);

        /**
        * Attaches the Autosuggest functionality to an input box.
        * @param suggestionBoxId The HTML element identifier of the input box.
        * @param suggestionContainerId The Id of container where suggestions will be displayed.
        * @param selectedSuggestionCallback A reference to a callback function that will be called when a user selects a suggestion from the Autosuggest UI.
        */
        public attachAutosuggest(suggestionBoxId: string, suggestionContainerId: string, selectedSuggestionCallback: (result: ISuggestionResult) => void) : void;

        /** Detaches the autosuggest functionality from the input box, freeing any resources it has or events it has tied to. */
        public detachAutosuggest(): void;

        /** Disposes the Autosuggest object, freeing any resources it has or events it has tied to. */
        public dispose(): void;

        /**
        * Gets the options currently used by the autosuggest manager.
        * @returns The options currently used by the autosuggest manager.
        */
        public getOptions(): IAutosuggestOptions;

        /**
         * Programmatically retrieves suggestions for queries without the need to attach a textbox to the AutosuggestManager.
         * @param query The text to get suggestions for.
         * @param callback The callback function to return the suggestions to.
         */
        public getSuggestions(query: string, callback: (suggestions: ISuggestionResult[], query: string) => void): void;

        /**
        * Sets the options currently used by the autosuggest manager.
        * @param options The options to use with the autosuggest manager.
        */
        public setOptions(options?: IAutosuggestOptions): void;
    }

    /** The options used to customize how the ClusterLayer functions. */
    export interface IClusterLayerOptions {
        /**
        * A callback function that is fired after the clustering for a map view has completed. This is useful if you want to generate a list of locations based on what is in the current view.
        */
        callback?: () => void;

        /**
        * A callback function that allows you to process a clustered pushpin before it is added to a layer. This is useful if you want to add events or set style options on the clustered pushpin.
        */
        clusteredPinCallback?: (pin: ClusterPushpin) => void;

        /**
        * Indicates if the layer should cluster the locations or not. Default: true
        */
        clusteringEnabled?: boolean;

        /**
        * Defines how clusters are positioned on the map. Default: MeanAverage
        */
        clusterPlacementType?: ClusterPlacementType;

        /**
        * The width and height of the gird cells used for clustering in pixels. Default: 45
        */
        gridSize?: number;

        /**
        * Offsets the placement of clustered pushpins by a set number of pixels. This option is only available when the placement type is set to GridCenter.
        * This is useful if you have multiple cluster layers on the map and you want to offset the clustered pushpins between the layers so that they are visible,
        * otherwise the clusters from the different layers would overlap completely.
        */
        layerOffset?: Point;

        /**
        * A boolean indicating if the layer is visible or not.
        */
        visible?: boolean;

        /**
        * The z-index of the layer.
        */
        zIndex?: number;
    }

    /**
    * Used to specify how a clustered pushpin should be positioned relative to the pushpins it contains.
    * @requires The Microsoft.Maps.Clustering module.
    */
    export enum ClusterPlacementType {
        /**
        * Mean Average placement calculates the average position of a group of coordinates. This method creates a more realistic representation of the data,
        * however requires more processing power and increases the chances of pushpins overlapping.
        */
        MeanAverage,

        /**
        * This method is the simplest way to represent a cluster. It places the cluster at the first location in the cluster. This method may not accurately
        * represent the data but requires little processing power.
        */
        FirstLocation
    }

    /**
     * This class extends the Pushpin class and has all the same methods and properties plus the following properties.
     * @requires The Microsoft.Maps.Clustering module.
     */
    export class ClusterPushpin extends Pushpin {
        /** An array of all the pushpins that are in the cluster. */
        containedPushpins: Pushpin[];

        /**
        * The grid cell key that can be used retrieve the clustered pushpin(s) from the clustering layer. This is useful when creating a clickable list that
        * link items in the list to clusters or pushpins on the map. Your list just needs to store the gridKey value.
        */
        gridKey: number;
    }

    /**
     * This class allows you to easily add in client side clustering to your application. Client Side Clustering is a method where pushpins that are close
     * together are grouped and represented as a single pushpin, often using a different icon to indicate the cluster. This is a great way to improve both
     * the user experience and performance of the map.
     * @requires The Microsoft.Maps.Clustering module.
     */
    export class ClusterLayer implements IDataLayer {
        /**
        * @constructor
        * @requires The Microsoft.Maps.Clustering module.
        * @param pushpins An array of pushpins to cluster in the layer.
        * @param options The options used to customize how the ClusterLayer functions.
        */
        constructor(pushpins: Pushpin[], options?: IClusterLayerOptions);

        /** Clears all the data in the cluster layer. */
        public clear(): void;

        /**
        * Gets all the pushpins that are in the current map view. If clustering is disabled, all pushpins in the clustering layer are returned.
        * @returns All the pushpins that are in the current map view. If clustering is disabled, all pushpins in the clustering layer are returned.
        */
        public getDisplayedPushpins(): Pushpin[];

        /**
        * Gets the current options used by the cluster layer.
        * @returns The current options used by the cluster layer.
        */
        public getOptions(): IClusterLayerOptions;

        /**
        * Gets all pushpins that are in the layers.
        * @returns An array of all the pushpins that are in the layers.
        */
        public getPushpins(): Pushpin[];

        /**
        * Gets the original pushpins that are in the specified grid cell.
        * @param The gridKey index to retrieve the pushpins for.
        * @returns The original pushpins that are in the specified grid cell.
        */
        public getPushpinsByGridKey(gridKey: number): Pushpin[];

        /**
        * Gets the pushpin in the specified cluster grid cell which can be either a ClusterPushpin if there are multiple pushpins in a cell or a single Pushpin.
        * @param The gridKey index to retrieve the pushpins for.
        * @returns The pushpin in the specified cluster grid cell which can be either a ClusterPushpin if there are multiple pushpins in a cell or a single Pushpin.
        */
        public getClusterPushpinByGridKey(gridKey: number): ClusterPushpin | Pushpin;

        /**
        * Sets the clustering options to use in the layer.
        * @params options The clustering options to use in the layer.
        */
        public setOptions(options: IClusterLayerOptions): void;

        /**
        * Sets the array of pushpins that are used in the clustering layer.
        * @param pushpins An array of pushpins that are to be used by the clustering layer.
        */
        public setPushpins(pushpins: Pushpin[]): void;
    }

    /** 
     * The contour layer options
     */
    interface IContourLayerOptions {
        /** The z-index of this layer */
        zIndex?: number;

        /** Whether the layer is visible */
        visible?: boolean;

        /** A callback function which defines the color of the contour line fill. */
        colorCallback?: (contourValue: number | string) => string | Color;

        /** The polygon options that apply to all contour lines of this layer */
        polygonOptions?: IPolygonOptions;
    }

    /**
     * The contour line of a contour layer
     */
    export class ContourLine extends Polygon {
        /** The contour lines that are directly nested inside this contour line */
        public innerContourLines: ContourLine[];

        /** The outer/parent contour line of this contour */
        public outerContourLine: ContourLine;

        /** The data value associated with this contour line */
        public contourValue: number | string;

        /**
         * @constructor
         * @param boundary The boundary of this contour line
         * @param contourValue The value associated with this contour line
         */
        constructor(boundary: Location[], contourValue?: number | string);
    }

    /**
     * The contour layer class.
     */
    export class ContourLayer extends Layer {
        /**
         * @constructor
         * @param contourLines The contour lines that compose this layer.
         * @param options The contour layer options.
         */
        constructor(contourLines: ContourLine[], options?: IContourLayerOptions);

        /**
         * Clears all data on the contour layer.
         */
        public clear(): void;

        /**
         * Gets the contour lines of this layer.
         * @returns The contour lines of this layer.
         */
        public getContourLines(): ContourLine[];

        /**
         * Gets the polygons that were generated from the contour lines in this layer.
         * @returns The polygons that were generated from the contour lines in this layer.
         */
        public getContourPolygons(): Polygon[];

        /**
         * Retrieves the options of this contour layer.
         * @returns The options of this contour layer.
         */
        public getOptions(): IContourLayerOptions;

        /**
         * Sets the contour lines used to calculate the polygon areas of this layer.
         * @param contourLines The contour lines used to calculate the polygon areas of this layer.
         */
        public setContourLines(contourLines: ContourLine[]): void;

        /**
         * Sets the options of the contour layer.
         * @param options The new options to update the layer.
         */
        public setOptions(options: IContourLayerOptions): void;
    }

    /**
     * Specifies the shape of data bin rendered in the layer.
     */
    export enum DataBinType {
        /* Renders data bins as circles in a square grid. */
        circle,

        /* Renders data bins as hexagons with a flat top edge. */
        hexagon,

        /* Renders data bins as circles in a hexagonal grid. */
        hexCircle,

        /* Renders data bins as hexagons with a pointy top corner. */
        pointyHexagon,

        /* Renders data bins as a square grid. */
        square
    }

    /**
     * A set options the define how a data binning layer is rendered.
     */
    export interface IDataBinningOptions {
        /* The name of a property in the Pushpin.metadata object on which to perform calculations (average, count, sum) against the pushpins in each data bin. */
        aggregationProperty?: string;

        /*
         * A callback function which defines the color a data bin polygon should be. This callback recieves data bin information
         * along with the min and max calculated metrics for the data set. If set, this callback function must return a color value.
         */
        colorCallback?: (binInfo: IDataBinInfo, min: IDataBinMetrics, max: IDataBinMetrics) => string | Color;

        /* The shape of the data bin to generate. Default: hexagon */
        dataBinType?: DataBinType;

        /* The distance units of the radius option. Default: meters */
        distanceUnits?: SpatialMath.DistanceUnits;

        /* The default options used for rendering the data bin polygons. */
        polygonOptions?: IPolygonOptions;

        /*
         * A spatial distance which will be converted into a pixel distance at the equater and used to generate symetrically sized data bins
         * that have the apprimate spatial distance radius. Default: 1000
         */
        radius?: number;

        /*
         * A callback function which defines how much to scale a data bins size. This callback recieves data bin information
         * along with the min and max calculated metrics for the data set. If set, this callback function must return a number between 0 and 1.
         */
        scaleCallback?: (binInfo: IDataBinInfo, min: IDataBinMetrics, max: IDataBinMetrics) => number;
    }

    /**
    * A set of values calculated from the pushpins in a data bin.
    */
    export interface IDataBinMetrics {

        /* The average value of the aggregation property of the pushpins in a data bin. */
        average?: number;

        /* The number of pushpins in a data bin. */
        count?: number;

        /* The number of pushpins in the data bin who's aggregation property has a value. */
        countNotBlank?: number;

        /* The number of pushpins in the data bin who's aggregation property is a valid number. */
        countNumbers?: number;

        /* The sum of the aggregation property of the pushpins in a data bin.  */
        sum?: number;
    }

    /**
    * The result of a calculated data bin.
    */
    export interface IDataBinInfo {
        /* An array of all the pushpins that are in the data bin. */
        containedPushpins: Microsoft.Maps.Pushpin[];

        /* A set of calculated metric values determined using the aggregationProperty value of all the pushpins contained in the data bin. */
        metrics: IDataBinMetrics;
    }

    /**
     *  A polygon which represents a data bin on the map and contains the data bin information. 
     */

    export class DataBinPolygon extends Polygon {
        /* Information about the data bin; the contained pushpins and calculated metrics. */
        public dataBinInfo: IDataBinInfo;
    }

    /**
     * This class provides a data binning visualization for the map. It takes in an array of pushpins, groups them into
     * symmetrical shapes that fit together in a grid such as hexagons. Aggregation of data values are done and can be
     * used to customize how the data bins are rendered on the map (i.e. scale / color) .
     */
    export class DataBinningLayer extends Layer {
        /**
         * Initializes the data binning layer.
         * @param pushpins The array of pushpins that are used to generate the data bins.
         * @param options The options used for calculating and rendering the data bins.
         */
        constructor(pushpins?: Pushpin[], options?: IDataBinningOptions);

        /**
         * Gets the options used for calculating and rendering the data bins.
         * @returns The options used for calculating and rendering the data bins.
         */
        public getOptions(): IDataBinningOptions;

        /**
         * Gets all pushpins that are in the layers.
         * @returns All pushpins that are in the layers.
         */
        public getPushpins(): Pushpin[];

        /**
         * Sets the array of pushpins that are used to generate the data bins.
         * @param pushpins The array of pushpins that are used to generate the data bins.
         */
        public setPushpins(pushpins: Pushpin[]): void;

        /**
         * Clears all the data in the data binning layer.
         */
        public clear(): void;

        /**
         * Cleans up any resources this object is consuming.
         */
        public dispose(): void;

        /**
         * Sets the options used for calculating and rendering the data bins.
         * @param options The options used for calculating and rendering the data bins.
         */
        public setOptions(options: IDataBinningOptions): void;
    }
}
