declare namespace google {
    export function load(
        moduleName: string,
        moduleVersion: string,
        optionalSettings?: any,
    ): void;
}

declare namespace google.earth {
    /**
     * Specifies the current stage of the flow of events.
     */
    export type GEEventPhaseEnum = any;

    /**
     * Specifies how a feature should be displayed in a list view.
     */
    export type KmlListItemTypeEnum = any;

    /**
     * Specifies which color mode effect to apply to the base color.
     */
    export type KmlColorModeEnum = any;

    /*
     * Specifies how the altitude property is interpreted.
     */
    export type KmlAltitudeModeEnum = any;

    /**
     * Specifies how the link is refreshed.
     */
    export type KmlRefreshModeEnum = any;

    /**
     * Specifies how the link is refreshed when the viewport changes.
     */
    export type KmlViewRefreshModeEnum = any;

    /**
     * Specifies which units a value is specified in.
     */
    type KmlUnitsEnum = any;

    /**
     * Specifies if the map type is Earth or sky mode.
     */
    type GEMapTypeEnum = any;

    /**
     * Specifies if a control is always visible, always hidden,
     * or visible only when the user intends to use the control.
     */
    type GEVisibilityEnum = any;

    /**
     * Specifies what to sample when performing a hit test.
     */
    type GEHitTestModeEnum = any;

    /**
     * Specifies the size of the navigation control.
     */
    type GENavigationControlEnum = any;

    /**
     * Specifies the state of viewer options, including sunlight,
     * Street View, and historical imagery.
     */
    type GEViewerOptionsValueEnum = any;

    /*
     * Specifies the viewer option types.
     */
    type GEViewerOptionsTypeEnum = any;

    /**
     * Whether or not the Google Earth Browser Plug-in and API are supported on the current browser and operating system.
     */
    export function isSupported(): boolean;

    /**
     * Whether or not the Google Earth Browser Plug-in is currently installed on the user's machine.
     *
     * Note: if the plug-in is not installed, the user will be presented with a 'download' link upon calls to google.earth.createInstance().
     */
    export function isInstalled(): boolean;

    /**
     * Attempts to create an instance of the plugin under the given web browser HTML DOM node.
     * Upon success, calls the function passed in as the initCallback argument.
     * Upon failure, calls the function passed in as the failureCallback argument and displays an error message to the user in place of the plug-in object.
     *
     * Note:
     *
     *    The HTML DOM must be loaded before this function can be called.
     *    Common usage is to call this function upon the <body>'s load event, or to use google.setOnLoadCallback.
     */
    export function createInstance(
        domNode: string | Element,
        initCallback: (plugin: GEPlugin) => void,
        failureCallback: (error: any) => void,
        options?: any,
    ): void;

    /**
     * Attaches a listener to a given object for a specific event; when the event occurs on the object, the given callback is invoked.
     */
    export function addEventListener(
        targetObject: any,
        eventID: string,
        listenerCallback: (event: KmlEvent) => void,
        useCapture?: boolean,
    ): void;

    /**
     * Removes an event listener previously added using google.earth.addEventListener() from the event chain.
     *
     * Note:
     *
     *    You must pass in the exact same function object as was passed to addEventListener.
     *    If you are using an anonymous function callback, it will need to be refactored into its own variable.
     */
    export function removeEventListener(
        targetObject: any,
        eventID: string,
        listenerCallback: (event: KmlEvent) => void,
        useCapture?: boolean,
    ): void;

    /**
     * Retrieves and parses a KML or KMZ file at the given URL and returns an instance of a KmlFeature-derived class representing the parsed KML object model.
     *
     * Note: This function does not display the feature on the Earth. See below for more information.
     */
    export function fetchKml(
        pluginInstance: GEPlugin,
        url: string,
        completionCallback: (feature: KmlFeature) => void,
    ): void;

    /**
     * Efficiently executes an arbitrary, user-defined function (the batch function), minimizing the amount of overhead incurred during cross-process communication between the web browser and Google Earth Plugin.
     * This method is useful for batching together a large set of calls to the Earth API, for example, a large number of consecutive calls to KmlCoordArray.pushLatLngAlt.
     */
    export function executeBatch(pluginInstance: GEPlugin, batchFunction: Function): void;

    /**
     * Sets the language to be used for new instances of the plugin.
     * Needs to be called before google.earth.createInstance().
     * Affects road and border labels, the error message displayed when the plugin fails to load, as well as the language of the Terms of Use page linked from the plugin.
     */
    export function setLanguage(languageCode: string): void;

    /**
     * This interface enables programmatic and user-driven interaction with photo overlays in the Google Earth Plugin.
     *
     * Note: This interface is still under development.
     */
    export class GEPhotoOverlayViewer {
        /**
         * Enters the given photo overlay object, exiting any other currently active photo overlay.
         * If the argument is null, then any currently active photo overlay is exited and normal global navigation is enabled.
         */
        setPhotoOverlay(photoOverlay: KmlPhotoOverlay): void;
    }

    /**
     * Used to manipulate the navigation controls in Google Earth.
     */
    export class GENavigationControl {
        /**
         * Whether the control is always visible, always hidden, or visible only when the user intends to use the control.
         *
         * See also:
         *
         * * GEPlugin.VISIBILITY_SHOW
         * * GEPlugin.VISIBILITY_HIDE
         * * GEPlugin.VISIBILITY_AUTO
         */
        getVisibility(): GEVisibilityEnum;

        /**
         * Whether the control is always visible, always hidden, or visible only when the user intends to use the control.
         *
         * See also:
         *
         * * GEPlugin.VISIBILITY_SHOW
         * * GEPlugin.VISIBILITY_HIDE
         * * GEPlugin.VISIBILITY_AUTO
         */
        setVisibility(visibility: GEVisibilityEnum): void;

        /**
         * Specifies the size of the navigation control.
         *
         * See also:
         *
         * * GEPlugin.NAVIGATION_CONTROL_LARGE
         * * GEPlugin.NAVIGATION_CONTROL_SMALL
         */
        getControlType(): GENavigationControlEnum;

        /**
         * Specifies the size of the navigation control.
         *
         * See also:
         *
         * * GEPlugin.NAVIGATION_CONTROL_LARGE
         * * GEPlugin.NAVIGATION_CONTROL_SMALL
         */
        setControlType(controlType: GENavigationControlEnum): void;

        /**
         * The position of the navigation controls in Google Earth
         */
        getScreenXY(): KmlVec2;

        /**
         * Enables or disables user-initiated entry to Street View imagery.
         * When true, the Pegman icon is present in the navigation controls, allowing a user to drag the Pegman onto a street to initiate Street View.
         * Users can also zoom down to ground level to enter Street View when this is set to true.
         */
        setStreetViewEnabled(streetViewEnabled: boolean): void;

        /**
         * Whether Street View is enabled in the navigation controls.
         */
        getStreetViewEnabled(): boolean;
    }

    /**
     * Defines a tour, which is a playlist of scripted camera and update events.
     *
     * Note: This interface is still under development.
     */
    export class KmlTour extends KmlFeature {}

    /**
     * This interface enables programmatic and user-driven interaction with KML tours in the Google Earth Plugin.
     *
     * Note: This interface is still under development.
     */
    export class GETourPlayer {
        /**
         * Enters the given tour object, exiting any other currently active tour.
         * This method does not automatically begin playing the tour.
         * If the argument is null, then any currently active tour is exited and normal globe navigation is enabled.
         */
        setTour(tour: KmlTour): void;

        /**
         * Plays the currently active tour.
         */
        play(): void;

        /**
         * Pauses the currently active tour.
         */
        pause(): void;

        /**
         * Resets the currently active tour, stopping playback and rewinding to the start of the tour.
         */
        reset(): void;

        /**
         * The current elapsed playing time of the active tour, in seconds.
         */
        getCurrentTime(): number;

        /**
         * The current elapsed playing time of the active tour, in seconds.
         */
        setCurrentTime(currentTime: number): void;

        /**
         * The total duration of the active tour, in seconds. If no tour is loaded, the behavior of this method is undefined.
         */
        getDuration(): number;
    }

    /**
     * This interface contains result information obtained by calling GEView's hitTest method.
     *
     * See also:
     *
     * * GEView.hitTest
     */
    export class GEHitTestResult {
        /**
         * Latitude of sampled point.
         */
        getLatitude(): number;

        /**
         * Latitude of sampled point.
         */
        setLatitude(latitude: number): void;

        /**
         * Longitude of sampled point.
         */
        getLongitude(): number;

        /**
         * Longitude of sampled point.
         */
        setLongitude(longitude: number): void;

        /**
         * Altitude of sampled point.
         */
        getAltitude(): number;

        /**
         * Altitude of sampled point.
         */
        setAltitude(altitude: number): void;
    }

    /**
     * Maps between two different icon styles.
     * Typically this interface is used to provide separate normal and highlighted styles for a placemark, so that the highlighted version appears when the user mouses over the icon.
     */
    export class KmlStyleMap extends KmlStyleSelector {
        /**
         * Sets both URLs for the placemark style.
         */
        setUrl(normalStyleUrl: string, highlightStyleUrl: string): void;

        /**
         * Sets both placemark styles.
         */
        setStyle(normalStyle: KmlStyle, highlightStyle: KmlStyle): void;

        /**
         * Defines a normal style for a placemark.
         */
        getNormalStyleUrl(): string;

        /**
         * Defines a normal style for a placemark.
         */
        setNormalStyleUrl(normalStyleUrl: string): void;

        /**
         * Defines highlighted styles for a placemark, so that the highlighted version appears when the user mouses over the icon in Google Earth.
         */
        getHighlightStyleUrl(): string;

        /**
         * Defines highlighted styles for a placemark, so that the highlighted version appears when the user mouses over the icon in Google Earth.
         */
        setHighlightStyleUrl(highlightStyleUrl: string): void;

        /**
         * Defines a normal style for a placemark.
         */
        getNormalStyle(): KmlStyle;

        /**
         * Defines a normal style for a placemark.
         */
        setNormalStyle(normalStyle: KmlStyle): void;

        /**
         * Defines highlighted styles for a placemark, so that the highlighted version appears when the user mouses over the icon in Google Earth.
         */
        getHighlightStyle(): KmlStyle;

        /**
         * Defines highlighted styles for a placemark, so that the highlighted version appears when the user mouses over the icon in Google Earth.
         */
        setHighlightStyle(highlightStyle: KmlStyle): void;
    }

    /**
     * References a KML file or KMZ archive on a remote network.
     * Use the Link property to specify the location of the KML file.
     * Within that property, you can define the refresh options for updating the file, based on time and camera change.
     * NetworkLinks can be used in combination with Regions to handle very large datasets efficiently.
     */
    export class KmlNetworkLink extends KmlFeature {
        /**
         * Sets the link, refreshVisibility, and flyToView for the network link.
         */
        set(link: KmlLink, refreshVisibility: boolean, flyToView: boolean): void;

        /**
         * Specifies the location of any of the following:
         *
         * * KML files fetched by network links
         * * Image files used by icons in icon styles, ground overlays, and screen overlays
         * * Model files used in the Model object
         */
        getLink(): KmlLink;

        /**
         * Specifies the location of any of the following:
         *
         * * KML files fetched by network links
         * * Image files used by icons in icon styles, ground overlays, and screen overlays
         * * Model files used in the Model object
         */
        setLink(link: KmlLink): void;

        /**
         * A value of 0 leaves the visibility of features within the control of the Google Earth user.
         * Set the value to 1 to reset the visibility of features each time the NetworkLink is refreshed.
         * For example, suppose a Placemark within the linked KML file has visibility set to 1 and the NetworkLink has refreshVisibility set to 1.
         * When the file is first loaded into Google Earth, the user can clear the check box next to the item to turn off display in the 3D viewer.
         * However, when the NetworkLink is refreshed, the Placemark will be made visible again, since its original visibility state was TRUE.
         */
        getRefreshVisibility(): boolean;

        /**
         * A value of 0 leaves the visibility of features within the control of the Google Earth user.
         * Set the value to 1 to reset the visibility of features each time the NetworkLink is refreshed.
         * For example, suppose a Placemark within the linked KML file has visibility set to 1 and the NetworkLink has refreshVisibility set to 1.
         * When the file is first loaded into Google Earth, the user can clear the check box next to the item to turn off display in the 3D viewer.
         * However, when the NetworkLink is refreshed, the Placemark will be made visible again, since its original visibility state was TRUE.
         */
        setRefreshVisibility(refreshVisibility: boolean): void;

        /**
         * A value of 1 causes Google Earth to fly to the view of the LookAt or Camera in the NetworkLinkControl (if it exists).
         */
        getFlyToView(): boolean;

        /**
         * A value of 1 causes Google Earth to fly to the view of the LookAt or Camera in the NetworkLinkControl (if it exists).
         */
        setFlyToView(flyToView: boolean): void;
    }

    /**
     * Draws an image overlay fixed to the screen.
     * Sample uses for ScreenOverlays are compasses, logos, and heads-up displays.
     * ScreenOverlay sizing is determined by the size element.
     * Positioning of the overlay is handled by mapping a point in the image specified by screenXY to a point on the screen specified by overlayXY.
     * Then the image is rotated by rotation degrees about a point relative to the screen specified by rotationXY.
     *
     * Note:
     *
     *  screenXY and overlayXY behave opposite to their corresponding behaviors in KML.
     *  This is due to a bug in the Earth API that will intentionally remain unfixed until a major version change.
     */
    export class KmlScreenOverlay extends KmlOverlay {
        /**
         * Specifies a point on (or outside of) the overlay image that is mapped to the screen coordinate.
         * It requires x and y values, and the units for those values.
         *
         * Note:
         *
         *  screenXY and overlayXY behave opposite to their corresponding behaviors in KML.
         *  This is due to a bug in the Earth API that will intentionally remain unfixed until a major version change.
         */
        getScreenXY(): KmlVec2;

        /**
         * Specifies a point relative to the screen origin that the overlay image is mapped to.
         * The x and y values can be specified in three different ways: as pixels ("pixels"), as fractions of the screen ("fraction"), or as inset pixels ("insetPixels"), which is an offset in pixels from the upper right corner of the screen.
         * The x and y positions can be specified in different ways - for example, x can be in pixels and y can be a fraction.
         * The origin of the coordinate system is in the lower left corner of the screen.
         *
         * Note:
         *
         *  screenXY and overlayXY behave opposite to their corresponding behaviors in KML.
         *  This is due to a bug in the Earth API that will intentionally remain unfixed until a major version change.
         */
        getOverlayXY(): KmlVec2;

        /**
         * Point relative to the screen about which the screen overlay is rotated.
         */
        getRotationXY(): KmlVec2;

        /**
         * Specifies the size of the image for the screen overlay, as follows:
         *
         * * A value of -1 indicates to use the native dimension
         * * A value of 0 indicates to maintain the aspect ratio
         * * A value of n sets the value of the dimension
         */
        getSize(): KmlVec2;

        /**
         * Adjusts how the image is placed inside the field of view.
         * This element is useful if your image has been rotated and deviates slightly from a desired horizontal view.
         */
        getRotation(): number;

        /**
         * Adjusts how the image is placed inside the field of view.
         * This element is useful if your image has been rotated and deviates slightly from a desired horizontal view.
         */
        setRotation(rotation: number): void;
    }

    /**
     * Defines a photo overlay, which is a geographically located photograph of the Earth.
     * Photo overlays can be drawn onto 2D rectangles in three dimensional space, or in the case of panoramic photos, onto partial or full cylinders, or even spheres.
     *
     * Note: This interface is still under development.
     */
    export class KmlPhotoOverlay extends KmlOverlay {}

    /**
     * Draws an image overlay draped onto the terrain.
     * The href child of Icon specifies the image to be used as the overlay.
     * If this object is omitted or contains no href, a rectangle is drawn using the color defined by the overlay.
     */
    export class KmlGroundOverlay extends KmlOverlay {
        /**
         * Specifies the distance above the earth's surface.
         */
        getAltitude(): number;

        /**
         * Specifies the distance above the earth's surface.
         */
        setAltitude(altitude: number): void;

        /**
         * Specifies how the altitude property is interpreted.
         *
         * See also:
         *
         * * GEPlugin.ALTITUDE_CLAMP_TO_GROUND
         * * GEPlugin.ALTITUDE_ABSOLUTE
         * * GEPlugin.ALTITUDE_CLAMP_TO_SEA_FLOOR
         */
        getAltitudeMode(): KmlAltitudeModeEnum;

        /**
         * Specifies how the altitude property is interpreted.
         *
         * See also:
         *
         * * GEPlugin.ALTITUDE_CLAMP_TO_GROUND
         * * GEPlugin.ALTITUDE_ABSOLUTE
         * * GEPlugin.ALTITUDE_CLAMP_TO_SEA_FLOOR
         */
        setAltitudeMode(altitudeMode: KmlAltitudeModeEnum): void;

        /**
         * The bounding box of the ground overlay.
         */
        getLatLonBox(): KmlLatLonBox;

        /**
         * The bounding box of the ground overlay.
         */
        setLatLonBox(latLonBox: KmlLatLonBox): void;
    }

    /**
     * The KmlOverlay object is an abstract object and cannot be used directly in a KML file.
     * Overlay is the base type for image overlays drawn on the planet surface or on the screen.
     * Icon specifies the image to use and can be configured to reload images based on a timer or by camera changes.
     * This object also includes specifications for stacking order of multiple overlays and for adding color and transparency values to the base image.
     */
    export class KmlOverlay extends KmlFeature {
        /**
         * Specifies the color values.
         */
        getColor(): KmlColor;

        /**
         * Defines the stacking order for the images in overlapping overlays.
         * Overlays with higher drawOrder values are drawn on top of overlays with lower drawOrder values.
         */
        getDrawOrder(): number;

        /**
         * Defines the stacking order for the images in overlapping overlays.
         * Overlays with higher drawOrder values are drawn on top of overlays with lower drawOrder values.
         */
        setDrawOrder(drawOrder: number): void;

        /**
         * Defines the image associated with the Overlay.
         */
        getIcon(): KmlIcon;

        /**
         * Defines the image associated with the Overlay.
         */
        setIcon(icon: KmlIcon): void;
    }

    /**
     * This class controls the display of sunlight, historical imagery, and Street View panoramas in the plugin.
     * The KmlViewerOptions object is passed to KmlAbstractView.setViewerOptions()
     */
    export class KmlViewerOptions extends KmlObject {
        /**
         * Returns the current state of the specified viewer option type.
         *
         * See also:
         *
         * * GEPlugin.OPTION_STREET_VIEW
         * * GEPlugin.OPTION_SUNLIGHT
         * * GEPlugin.OPTION_HISTORICAL_IMAGERY
         * * GEPlugin.OPTION_STATE_DEFAULT
         * * GEPlugin.OPTION_STATE_ENABLED
         * * GEPlugin.OPTION_STATE_DISABLED
         */
        setOption(type: GEViewerOptionsTypeEnum, state: GEViewerOptionsValueEnum): void;

        /**
         * Set the state of viewer options, including sunlight, Street View, and historical imagery.
         *
         * See also:
         *
         * * GEPlugin.OPTION_STREET_VIEW
         * * GEPlugin.OPTION_SUNLIGHT
         * * GEPlugin.OPTION_HISTORICAL_IMAGERY
         * * GEPlugin.OPTION_STATE_DEFAULT
         * * GEPlugin.OPTION_STATE_ENABLED
         * * GEPlugin.OPTION_STATE_DISABLED
         */
        getOption(type: GEViewerOptionsValueEnum): GEViewerOptionsValueEnum;
    }

    /**
     * Describes rotation of a 3D model's coordinate system to position the object in Google Earth.
     */
    export class KmlOrientation extends KmlObject {
        /**
         * Sets the heading, tilt, and roll of a model.
         */
        set(heading: number, tilt: number, roll: number): void;

        /**
         * Rotation about the z axis (normal to the Earth's surface).
         * A value of 0 (the default) equals North.
         * A positive rotation is clockwise around the z axis and specified in degrees from 0 to 360.
         */
        getHeading(): number;

        /**
         * Rotation about the z axis (normal to the Earth's surface).
         * A value of 0 (the default) equals North.
         * A positive rotation is clockwise around the z axis and specified in degrees from 0 to 360.
         */
        setHeading(heading: number): void;

        /**
         * Rotation about the x axis.
         * A positive rotation is clockwise around the x axis and specified in degrees from 0 to 360.
         */
        getTilt(): number;

        /**
         * Rotation about the x axis.
         * A positive rotation is clockwise around the x axis and specified in degrees from 0 to 360.
         */
        setTilt(tilt: number): void;

        /**
         * Rotation about the y axis.
         * A positive rotation is clockwise around the y axis and specified in degrees from 0 to 360.
         */
        getRoll(): number;

        /**
         * Rotation about the y axis.
         * A positive rotation is clockwise around the y axis and specified in degrees from 0 to 360.
         */
        setRoll(roll: number): void;
    }

    /**
     * Specifies the exact coordinates of the Model's origin in latitude, longitude, and altitude.
     * Latitude and longitude measurements are standard lat-lon projection with WGS84 datum.
     * Altitude is distance above the earth's surface, in meters, and is interpreted according to altitudeMode.
     */
    export class KmlLocation extends KmlObject {
        /**
         * Sets the latitude, longitude, and altitude of the Model.
         */
        setLatLngAlt(lat: number, lng: number, alt: number): void;

        /**
         * Longitude of the Model's location.
         * Angular distance in degrees, relative to the Prime Meridian.
         * Values west of the Meridian range from -180 to 0 degrees.
         * Values east of the Meridian range from 0 to 180 degrees.
         */
        getLongitude(): number;

        /**
         * Longitude of the Model's location.
         * Angular distance in degrees, relative to the Prime Meridian.
         * Values west of the Meridian range from -180 to 0 degrees.
         * Values east of the Meridian range from 0 to 180 degrees.
         */
        setLongitude(longitude: number): void;

        /**
         * Latitude of the camera location.
         * Degrees north or south of the Equator (0 degrees).
         * Values range from -90 degrees (South Pole) to 90 degrees (North Pole).
         */
        getLatitude(): number;

        /**
         * Latitude of the camera location.
         * Degrees north or south of the Equator (0 degrees).
         * Values range from -90 degrees (South Pole) to 90 degrees (North Pole).
         */
        setLatitude(latitude: number): void;

        /**
         * Specifies the distance above the earth's surface.
         */
        getAltitude(): number;

        /**
         * Specifies the distance above the earth's surface.
         */
        setAltitude(altitude: number): void;
    }

    /**
     * Scales a model along the x, y, and z axes in the model's coordinate space.
     */
    export class KmlScale extends KmlObject {
        /**
         * Sets the x, y, and z coordinates for a model.
         */
        set(x: number, y: number, z: number): void;

        /**
         * Indicates the x coordinate.
         */
        getX(): number;

        /**
         * Indicates the x coordinate.
         */
        setX(x: number): void;

        /**
         * Indicates the y coordinate.
         */
        getY(): number;

        /**
         * Indicates the y coordinate.
         */
        setY(y: number): void;

        /**
         * Indicates the z coordinate.
         */
        getZ(): number;

        /**
         * Indicates the z coordinate.
         */
        setZ(z: number): void;
    }

    /**
     * A single tuple consisting of floating point values for longitude, latitude, and altitude (in that order).
     * Longitude and latitude values are in degrees.
     *
     * * longitude = -180 and <= 180
     * * latitude = -90 and = 90
     * * altitude values (optional) are in meters above sea level
     */
    export class KmlCoord {
        /**
         * Sets the latitude, longitude, altitude.
         */
        setLatLngAlt(latitude: number, longitude: number, altitude: number): void;

        /**
         * Degrees north or south of the Equator (0 degrees).
         * Values range from -90 degrees (South Pole) to 90 degrees (North Pole).
         */
        getLatitude(): number;

        /**
         * Degrees north or south of the Equator (0 degrees).
         * Values range from -90 degrees (South Pole) to 90 degrees (North Pole).
         */
        setLatitude(latitude: number): void;

        /**
         * Angular distance in degrees, relative to the Prime Meridian. Values west of the Meridian range from -180 to 0 degrees.
         * Values east of the Meridian range from 0 to 180 degrees.
         */
        getLongitude(): number;

        /**
         * Angular distance in degrees, relative to the Prime Meridian. Values west of the Meridian range from -180 to 0 degrees.
         * Values east of the Meridian range from 0 to 180 degrees.
         */
        setLongitude(longitude: number): void;

        /**
         * Distance from the earth's surface.
         */
        getAltitude(): number;

        /**
         * Distance from the earth's surface.
         */
        setAltitude(altitude: number): void;
    }

    /**
     * The KmlCoordArray object defines an array of coordinates.
     */
    export class KmlCoordArray {
        /**
         * Returns the coordinates at the given index.
         */
        get(index: number): KmlCoord;

        /**
         * Sets the coordinates at the given index..
         */
        set(index: number, coord: KmlCoord): void;

        /**
         * Sets the latitude, longitude, and altitude.
         */
        setLatLngAlt(
            index: number,
            latitude: number,
            longitude: number,
            altitude: number,
        ): void;

        /**
         * Appends one or more new elements to the end of an array and returns the new length of the array.
         */
        pushLatLngAlt(
            latitude: number,
            longitude: number,
            altitude: number,
        ): void;

        /**
         * Appends one or more new elements to the end of an array and returns the new length of the array.
         */
        push(coordOrList: KmlCoord): void;

        /**
         * Deletes the last element of an array, decrements the array length, and returns the value that is removed.
         */
        pop(): KmlCoord;

        /**
         * Adds an element or elements to the beginning of an array.
         */
        unshift(coordOrList: KmlCoord): number;

        /**
         * Adds an element or elements to the beginning of an array.
         */
        unshiftLatLngAlt(
            latitude: number,
            longitude: number,
            altitude: number,
        ): void;

        /**
         * Removes and returns the first element of the array.
         */
        shift(): KmlCoord;

        /**
         * Reverses the order of the elements in the array.
         */
        reverse(): void;

        /**
         * Clears all of the elements in the array
         */
        clear(): void;

        /**
         * Specifies the length of the index array.
         */
        getLength(): number;
    }

    /**
     * The object corresponding to the retangular region in which Google Earth is displayed.
     */
    export class GEWindow extends GEEventEmitter {
        /**
         * Gives the Google Earth object focus.
         */
        focus(): void;

        /**
         * Removes focus from the Google Earth object.
         */
        blur(): void;

        /**
         * Toggles the overall visibility of Google Earth inside the browser.
         */
        getVisibility(): boolean;

        /**
         * Toggles the overall visibility of Google Earth inside the browser.
         */
        setVisibility(visibility: boolean): void;
    }

    /**
     * The GEGlobe class encapsulates the Google Earth globe to determine access and event behavior.
     */
    export class GEGlobe extends KmlObject {
        /**
         * Returns the altitude for a given location on the globe.
         * If the altitude data for the location has not yet been loaded, the return value is 0.
         */
        getGroundAltitude(lat: number, lon: number): number;

        /**
         * The top-level features currently in the Earth instance.
         */
        getFeatures(): GEFeatureContainer;
    }

    /**
     * Controls the behavior of the camera that views the scene in Google Earth.
     */
    export class GEView {
        /**
         * Returns the screen x,y coordinates of a given point on the globe.
         *
         * Tip: project() is the inverse of hitTest().
         *
         * See also:
         *
         * * GEPlugin.ALTITUDE_RELATIVE_TO_GROUND
         * * GEPlugin.ALTITUDE_ABSOLUTE
         * * GEPlugin.ALTITUDE_RELATIVE_TO_SEA_FLOOR
         */
        project(
            lat: number,
            lng: number,
            alt: number,
            altitudeMode: KmlAltitudeModeEnum,
        ): KmlVec2;

        /**
         * Sets the camera that views the scene in Google Earth.
         */
        setAbstractView(view: KmlAbstractView): void;

        /**
         * Creates and returns a new KmlLookAt object, initialized to the current camera position and orientation.
         * Use 'altitudeMode' to specify the altitude mode of the looked-at point.
         *
         * See also:
         *
         * * GEPlugin.ALTITUDE_RELATIVE_TO_GROUND
         * * GEPlugin.ALTITUDE_ABSOLUTE
         * * GEPlugin.ALTITUDE_RELATIVE_TO_SEA_FLOOR
         */
        copyAsLookAt(altitudeMode: KmlAltitudeModeEnum): KmlLookAt;

        /**
         * Creates and returns a new KmlCamera object, initialized to the current camera position and orientation.
         * Use 'altitudeMode' to specify the altitude mode of the new camera.
         *
         * See also:
         *
         * * GEPlugin.ALTITUDE_RELATIVE_TO_GROUND
         * * GEPlugin.ALTITUDE_ABSOLUTE
         * * GEPlugin.ALTITUDE_RELATIVE_TO_SEA_FLOOR
         */
        copyAsCamera(altitudeMode: KmlAltitudeModeEnum): KmlCamera;

        /**
         * Returns a bounding box that completely contains the region of the globe that is currently visible.
         * The returned box will be larger than what is strictly visible, if that is necessary to include everything that is visible.
         */
        getViewportGlobeBounds(): KmlLatLonBox;

        /**
         * Given a point on the screen in pixel coordinates, returns a GEHitTestResult with information about the geographic location corresponding to the point on the screen.
         * Tip: hitTest() is the inverse of project().
         *
         * See also:
         *
         * * GEPlugin.UNITS_PIXELS
         * * GEPlugin.UNITS_INSET_PIXELS
         * * GEPlugin.UNITS_FRACTION
         * * GEPlugin.HIT_TEST_GLOBE
         * * GEPlugin.HIT_TEST_TERRAIN
         * * GEPlugin.HIT_TEST_BUILDINGS
         */
        hitTest(
            x: number,
            xUnits: KmlUnitsEnum,
            y: number,
            yUnits: KmlUnitsEnum,
            mode: GEHitTestModeEnum,
        ): GEHitTestResult;
    }

    /**
     * Defines an image associated with an Icon style or overlay.
     */
    export class KmlIcon extends KmlLink {
        /**
         * Gets the offset from the left (<gx:x>), in pixels, of the icon.
         */
        getX(): number;

        /**
         * Specifies the icon's offset (<gx:x>), in pixels from the left side of its icon palette, if a palette has been specified in the <href> element.
         */
        setX(x: number): number;

        /**
         * Gets the offset from the bottom (<gx:y>), in pixels, of the icon.
         */
        getY(): number;

        /**
         * Specifies the offset (<gx:y>), in pixels from the bottom of its icon palette, if a palette has been specified in the <href> element.
         */
        setY(y: number): void;

        /**
         * Gets the width (<gx:w>), in pixels, of the icon.
         */
        getW(): number;

        /**
         * Specifies the width (<gx:w>), in pixels, of the icon to use.
         */
        setW(w: number): void;

        /**
         * Gets the height (<gx:h>), in pixels, of the icon.
         */
        getH(): number;

        /**
         * Specifies the height (<gx:h>), in pixels, of the icon to use.
         */
        setH(h: number): void;
    }

    /**
     * Specifies the location of any KML files fetched by network links, image files used by icons in icon styles, ground overlays, and screen overlays, or model files used in the Model object.
     */
    export class KmlLink extends KmlObject {
        /**
         * A URL (either an HTTP address or a local file specification).
         * When the parent of Link is a NetworkLink, href is a KML file.
         * When the parent of Link is a Model, href is a COLLADA file.
         * When the parent of Link is an Overlay, href is an image.
         */
        getHref(): string;

        /**
         * A URL (either an HTTP address or a local file specification).
         * When the parent of Link is a NetworkLink, href is a KML file.
         * When the parent of Link is a Model, href is a COLLADA file.
         * When the parent of Link is an Overlay, href is an image.
         */
        setHref(href: string): void;

        /**
         * Specifies to use a time-based refresh mode.
         *
         * See also:
         *
         * * GEPlugin.REFRESH_ON_CHANGE
         * * GEPlugin.REFRESH_ON_INTERVAL
         * * GEPlugin.REFRESH_ON_EXPIRE
         */
        getRefreshMode(): KmlRefreshModeEnum;

        /**
         * Specifies to use a time-based refresh mode.
         *
         * See also:
         *
         * * GEPlugin.REFRESH_ON_CHANGE
         * * GEPlugin.REFRESH_ON_INTERVAL
         * * GEPlugin.REFRESH_ON_EXPIRE
         */
        setRefreshMode(refreshMode: KmlRefreshModeEnum): void;

        /**
         * Indicates to refresh the file every n seconds.
         */
        getRefreshInterval(): number;

        /**
         * Indicates to refresh the file every n seconds.
         */
        setRefreshInterval(refreshInterval: number): void;

        /**
         * Specifies how the link is refreshed when the viewport changes.
         *
         * See also:
         *
         * * GEPlugin.VIEW_REFRESH_NEVER
         * * GEPlugin.VIEW_REFRESH_ON_STOP
         * * GEPlugin.VIEW_REFRESH_ON_REGION
         */
        getViewRefreshMode(): KmlViewRefreshModeEnum;

        /**
         * Specifies how the link is refreshed when the viewport changes.
         *
         * See also:
         *
         * * GEPlugin.VIEW_REFRESH_NEVER
         * * GEPlugin.VIEW_REFRESH_ON_STOP
         * * GEPlugin.VIEW_REFRESH_ON_REGION
         */
        setViewRefreshMode(viewRefreshMode: KmlViewRefreshModeEnum): void;

        /**
         * Specifies how the link is refreshed when the camera changes.
         */
        getViewRefreshTime(): number;

        /**
         * Specifies how the link is refreshed when the camera changes.
         */
        setViewRefreshTime(viewRefreshTime: number): void;

        /**
         * Scales the BBOX parameters before sending them to the server.
         * A value less than 1 specifies to use less than the full view (screen).
         * A value greater than 1 specifies to fetch an area that extends beyond the edges of the current view.
         */
        getViewBoundScale(): number;

        /**
         * Scales the BBOX parameters before sending them to the server.
         * A value less than 1 specifies to use less than the full view (screen).
         * A value greater than 1 specifies to fetch an area that extends beyond the edges of the current view.
         */
        setViewBoundScale(viewBoundScale: number): void;

        /**
         * Specifies the format of the query string that is appended to the Link's href before the file is fetched.
         * (If the href specifies a local file, this element is ignored.)
         */
        getViewFormat(): string;

        /**
         * Specifies the format of the query string that is appended to the Link's href before the file is fetched.
         * (If the href specifies a local file, this element is ignored.)
         */
        setViewFormat(viewFormat: string): void;
    }

    /**
     * Controls time in the plugin.
     */
    export class GETime {
        /**
         * Set the plugin's clock rate.
         * A value of 1 corresponds with real time; to pass one year in the plugin for every real second, set the rate to 31536000 (60 times 60 times 24 times 365).
         */
        setRate(rate: number): void;

        /**
         * Get the current plugin clock rate.
         */
        getRate(): number;

        /**
         * Returns the current computer clock time as a KmlTimeStamp object.
         */
        getSystemTime(): KmlTimeStamp;

        /**
         * Returns the GETimeControl object; this is the time slider.
         */
        getControl(): GETimeControl;

        /**
         * Whether or not historical imagery is enabled.
         */
        getHistoricalImageryEnabled(): boolean;

        /**
         * Turn historical imagery on or off.
         * For more information, read the Time chapter of the Developer's Guide.
         */
        setHistoricalImageryEnabled(historicalImageryEnabled: boolean): void;

        /**
         * Get the current plugin time as a KmlTimeStamp or KmlTimeSpan.
         */
        getTimePrimitive(): KmlTimePrimitive;

        /**
         * Sets the current plugin time.
         */
        setTimePrimitive(timePrimitive: KmlTimePrimitive): void;
    }

    /**
     * Used to manipulate the behavior of the Google Earth options such as, navigation, flyToSpeed, scroll wheel speed and so on.
     */
    export class GEOptions {
        /**
         * Sets the map type to Earth or sky mode.
         */
        setMapType(type: GEMapTypeEnum): void;

        /**
         * Speed of zoom when user rolls the mouse wheel. Default is 1.
         * Set to a negative number to reverse the zoom direction.
         */
        getScrollWheelZoomSpeed(): number;

        /**
         * Speed of zoom when user rolls the mouse wheel. Default is 1.
         * Set to a negative number to reverse the zoom direction.
         */
        setScrollWheelZoomSpeed(scrollWheelZoomSpeed: number): void;

        /**
         * Specifies the speed at which the camera moves (0 to 5.0).
         * Set to SPEED_TELEPORT to immediately appear at selected destination.
         *
         * See also:
         *
         * * GEPlugin.SPEED_TELEPORT
         */
        getFlyToSpeed(): number;

        /**
         * Specifies the speed at which the camera moves (0 to 5.0).
         * Set to SPEED_TELEPORT to immediately appear at selected destination.
         *
         * See also:
         *
         * * GEPlugin.SPEED_TELEPORT
         */
        setFlyToSpeed(flyToSpeed: number): void;

        /**
         * Show or hide the status bar. Disabled by default.
         */
        getStatusBarVisibility(): boolean;

        /**
         * Show or hide the status bar. Disabled by default.
         */
        setStatusBarVisibility(statusBarVisibility: boolean): void;

        /**
         * Show or hide the grid. Disabled by default.
         */
        getGridVisibility(): boolean;

        /**
         * Show or hide the grid. Disabled by default.
         */
        setGridVisibility(gridVisibility: boolean): void;

        /**
         * Show or hide the overview map. Disabled by default.
         */
        getOverviewMapVisibility(): boolean;

        /**
         * Show or hide the overview map. Disabled by default.
         */
        setOverviewMapVisibility(overviewMapVisibility: boolean): void;

        /**
         * Show or hide the scale legend. Disabled by default.
         */
        getScaleLegendVisibility(): boolean;

        /**
         * Show or hide the scale legend. Disabled by default.
         */
        setScaleLegendVisibility(scaleLegendVisibility: boolean): void;

        /**
         * Show or hide the blue atmosphere that appears around the perimeter of the Earth.
         * On by default.
         */
        getAtmosphereVisibility(): boolean;

        /**
         * Show or hide the blue atmosphere that appears around the perimeter of the Earth.
         * On by default.
         */
        setAtmosphereVisibility(atmosphereVisibility: boolean): void;

        /**
         * Enable or disable user panning and zooming of the map. Enabled by default.
         *
         * Note: This also enables and disables keyboard navigation (arrow keys, page-up/page-down, etc).
         */
        getMouseNavigationEnabled(): boolean;

        /**
         * Enable or disable user panning and zooming of the map. Enabled by default.
         *
         * Note: This also enables and disables keyboard navigation (arrow keys, page-up/page-down, etc).
         */
        setMouseNavigationEnabled(mouseNavigationEnabled: boolean): void;

        /**
         * Returns true if the animation of features as they are added or removed from the globe has been enabled.
         */
        getFadeInOutEnabled(): boolean;

        /**
         * Enable or disable the animation of a feature when it is added or removed from the Google Earth plugin.
         * The animation consists of a slight change of scale. Default is true.
         */
        setFadeInOutEnabled(fadeInOutEnabled: boolean): void;

        /**
         * Returns true if display units are set to imperial units (feet and miles).
         * False denotes metric units (meters and kilometers).
         */
        getUnitsFeetMiles(): boolean;

        /**
         * Set display units to imperial (feet and miles) or metric (meters and kilometers).
         * This setting affects only the values displayed in the status bar and the scale bar.
         * The values passed and returned with an object's getters and setters are always metric.
         */
        setUnitsFeetMiles(unitsFeetMiles: boolean): void;

        /**
         * Enables or disables building selection.
         * If enabled, clicking a building will pop a feature balloon containing information from the Google 3D Warehouse database.
         */
        setBuildingSelectionEnabled(buildingSelectionEnabled: boolean): void;

        /**
         * Whether or not building selection is enabled.
         */
        getBuildingSelectionEnabled(): boolean;

        /**
         * Returns true if building highlighting is enabled.
         */
        getBuildingHighlightingEnabled(): boolean;

        /**
         * Enables or disables building highlighting.
         * When enabled, buildings will be highlighted when they are moused over.
         */
        setBuildingHighlightingEnabled(buildingHighlightingEnabled: boolean): void;

        /**
         * Returns the terrain exaggeration value. Valid values are in the range of 1.0 through 3.0.
         */
        getTerrainExaggeration(): number;

        /**
         * Set the terrain exaggeration value. Valid values are in the range of 1.0 through 3.0.
         * Attempting to set outside of this range will result in the value being clamped.
         */
        setTerrainExaggeration(terrainExaggeration: number): void;

        /**
         * When enabled, the view will change to 'ground level view' when the camera reaches ground level.
         * This view provides pan and lookAt controls, but no zoom slider.
         * The tilt will be set to 90, or parallel with level ground.
         */
        setAutoGroundLevelViewEnabled(autoGroundLevelViewEnabled: boolean): void;

        /**
         * Whether automatic ground level view is enabled.
         */
        getAutoGroundLevelViewEnabled(): boolean;
    }

    /**
     * Adds a node to the end of the list of children of a specified feature.
     * Returns the appended object.
     */
    export class GESchemaObjectContainer<T extends KmlObject> {
        /**
         * Adds a node to the end of the list of children of a specified feature.
         * Returns the appended object.
         */
        appendChild(object: T): void;

        /**
         * Removes a node from the list of children of a specified object.
         */
        removeChild(oldChild: T): void;

        /**
         * Inserts a child before the referenced child in the list of objects.
         */
        insertBefore(newChild: T, refChild: T): void;

        /**
         * Replaces existing child in the list of features.
         * Returns the old child.
         */
        replaceChild(newChild: T, oldChild: T): void;

        /**
         * Returns true if the container is not empty.
         */
        hasChildNodes(): boolean;

        /**
         * First child in the list of objects.
         */
        getFirstChild(): T;

        /**
         * Last child in the list of objects.
         */
        getLastChild(): T;

        /**
         * List of features (for KmlContainer), or list of features, styles, and schemas (for KmlDocument).
         * Returns true if there are any child nodes.
         */
        getChildNodes(): KmlObjectList<T>;
    }

    /**
     * A container class that holds one or more features and allows the creation of nested hierarchies.
     */
    export class GEFeatureContainer extends GESchemaObjectContainer<KmlFeature> {}

    /**
     * A container object that contains an array of geometries, typically the children of a multi-geometry.
     */
    export class GEGeometryContainer extends GESchemaObjectContainer<KmlGeometry> {}

    /**
     * A container object that contains an array of closed line strings, typically the outer boundary of a Polygon.
     * Optionally, a LinearRing can also be used as the inner boundary of a Polygon to create holes in the Polygon.
     * A Polygon can contain multiple LinearRing objects used as inner boundaries.
     */
    export class GELinearRingContainer extends GESchemaObjectContainer<KmlLinearRing> {}

    /**
     * A container that holds a collection of KmlStyle and KmlStyleMap objects.
     * The KmlStyleMap object selects a style based on the current mode of the Placemark.
     * An object derived from KmlStyleSelector is uniquely identified by its ID and its URL.
     */
    export class GEStyleSelectorContainer extends GESchemaObjectContainer<KmlStyleSelector> {}

    /**
     * Defines the x and y coordinates of a 2D vector.
     */
    export class KmlVec2 {
        /**
         * Sets the coordinates of the vector.
         */
        set(
            x: number,
            xUnits: KmlUnitsEnum,
            y: number,
            yUnits: KmlUnitsEnum,
        ): void;

        /**
         * Indicates the x coordinate.
         */
        getX(): number;

        /**
         * Indicates the x coordinate.
         */
        setX(x: number): void;

        /**
         * Indicates the y coordinate.
         */
        getY(): number;

        /**
         * Indicates the y coordinate.
         */
        setY(y: number): void;

        /**
         * Units in which the x value is specified.
         *
         * See also:
         *
         * * GEPlugin.UNITS_FRACTION
         * * GEPlugin.UNITS_PIXELS
         * * GEPlugin.UNITS_INSET_PIXELS
         */
        getXUnits(): KmlUnitsEnum;

        /**
         * Units in which the x value is specified.
         *
         * See also:
         *
         * * GEPlugin.UNITS_FRACTION
         * * GEPlugin.UNITS_PIXELS
         * * GEPlugin.UNITS_INSET_PIXELS
         */
        setXUnits(xUnits: KmlUnitsEnum): void;

        /**
         * Units in which the y value is specified.
         *
         * See also:
         *
         * * GEPlugin.UNITS_FRACTION
         * * GEPlugin.UNITS_PIyELS
         * * GEPlugin.UNITS_INSET_PIyELS
         */
        getYUnits(): KmlUnitsEnum;

        /**
         * Units in which the y value is specified.
         *
         * See also:
         *
         * * GEPlugin.UNITS_FRACTION
         * * GEPlugin.UNITS_PIyELS
         * * GEPlugin.UNITS_INSET_PIyELS
         */
        setYUnits(xUnits: KmlUnitsEnum): void;
    }

    /**
     * The GESun class controls the dawn to dusk views.
     */
    export class GESun {
        /**
         *  Specifies whether the feature is drawn in the 3D viewer when it is initially loaded.
         *  In order for a feature to be visible, the visibility property and all of its ancestors must also be set to 1.
         */
        getVisibility(): boolean;

        /**
         *  Specifies whether the feature is drawn in the 3D viewer when it is initially loaded.
         *  In order for a feature to be visible, the visibility property and all of its ancestors must also be set to 1.
         */
        setVisibility(visibility: boolean): void;
    }

    /**
     * The KmlColor object values are expressed in hexadecimal notation.
     * The range of values for any one color component is 0 to 255 (00 to ff).
     * For alpha, 00 is fully transparent and ff is fully opaque.
     * The order of expression is aabbggrr, where aa=alpha (00 to ff); bb=blue (00 to ff); gg=green (00 to ff); rr=red (00 to ff).
     * For example, if you want to apply a blue color with 50 percent opacity to an overlay,
     * you would specify the following when setting color value: 7fff0000, where alpha=0x7f, blue=0xff, green=0x00, and red=0x00.
     */
    export class KmlColor {
        /**
         * Set the color of an object.
         */
        set(color: string): void;

        /**
         * Returns the color of an object.
         */
        get(): string;

        /**
         * red numerical value
         */
        getR(): number;

        /**
         * red numerical value
         */
        setR(r: number): void;

        /**
         * green numerical value
         */
        getG(): number;

        /**
         * green numerical value
         */
        setG(g: number): void;

        /**
         * blue numerical value
         */
        getB(): number;

        /**
         * blue numerical value
         */
        setB(b: number): void;

        /**
         * opacity value
         */
        getA(): number;

        /**
         * opacity value
         */
        setA(a: number): void;
    }

    /**
     * The event object used with all KMLObjects.
     * For more information about events, see the Document Object Model Events specification at http:
     */
    export class KmlEvent {
        /**
         * Cancels the default action of the event.
         * For example, calling this method in a placemark click handler prevents the placemark's default balloon from popping up.
         */
        preventDefault(): void;

        /**
         * Prevents event propagation.
         * For example, if click event handlers are set up on both the GEGlobe and GEWindow objects,
         * and stopPropagation is called in the GEGlobe click event handler, the GEWindow event handler will not be triggered when the globe is clicked.
         */
        stopPropagation(): void;

        /**
         * The object to which the KMLEvent was originally dispatched.
         */
        getTarget(): GEEventEmitter;

        /**
         * The target whose event listeners are currently being processed.
         */
        getCurrentTarget: GEEventEmitter;

        /**
         * The current stage of the flow of events.
         */
        getEventPhase(): GEEventPhaseEnum;

        /**
         * Indicates whether or not an event is a bubbling event.
         */
        getBubbles(): boolean;

        /**
         * Indicates whether the event can be cancelled.
         *
         * Note: Currently, cancelable has no effect.
         */
        getCancelable(): boolean;
    }

    /**
     * Represents a mouse input event.
     */
    export class KmlMouseEvent extends KmlEvent {
        /**
         * The button on the mouse was pressed.
         * Possible values include 0, 1, 2, where 0 is left, 1 is middle, and 2 is right mouse key.
         */
        getButton(): number;

        /**
         * The x coordinate at which the event occurred, measured in pixels from the left edge of the plug-in window.
         */
        getClientX(): number;

        /**
         * The y coordinate at which the event occurred, measured in pixels from the top edge of the plug-in window.
         */
        getClientY(): number;

        /**
         * The x coordinate at which the event occurred, measured in pixels from the left edge of the computer screen.
         */
        getScreenX(): number;

        /**
         * The y coordinate at which the event occurred, measured in pixels from the top edge of the computer screen.
         */
        getScreenY(): number;

        /**
         * The latitude at which the event occurred, in decimal degrees.
         */
        getLatitude(): number;

        /**
         * The longitude at which the event occurred, in decimal degrees.
         */
        getLongitude(): number;

        /**
         * The altitude at which the event occurred, in meters.
         */
        getAltitude(): number;

        /**
         * Indicates whether a mouse action occurred while on the Google Earth globe.
         */
        getDidHitGlobe(): boolean;

        /**
         * Indicates whether the ALT key was held down when an event occurred.
         */
        getAltKey(): boolean;

        /**
         * Indicates whether the CTRL key was held down when an event occurred.
         */
        getCtrlKey(): boolean;

        /**
         * Indicates whether the SHIFT key was held down when an event occurred.
         */
        getShiftKey(): boolean;

        /**
         * Used with the mouseover and mouseout events to specify a secondary target.
         * For mouseover, it specifies the object that the mouse was over.
         * For mouseout, it specifies the new object that the mouse is over.
         */
        getRelatedTarget(): GEEventEmitter;

        /**
         * Returns the timestamp of the event, in Unix time.
         */
        getTimeStamp(): number;
    }

    /**
     * Defines when and how an event gets passed in and triggered from the Google Earth Plug-in.
     */
    export class GEEventEmitter {
        /**
         * Triggers an event when the user clicks a location in Google Earth with the mouse.
         */
        click(event: KmlMouseEvent): void;

        /**
         * Triggers an event when the user double clicks a location in Google Earth with the mouse.
         */
        dblclick(event: KmlMouseEvent): void;

        /**
         * Triggers an event when the user moves the mouse pointer over a location in Google Earth.
         */
        mouseover(event: KmlMouseEvent): void;

        /**
         * Triggers an event when the user presses the mouse button over a location in Google Earth.
         */
        mousedown(event: KmlMouseEvent): void;

        /**
         * Triggers an event when the user releases the mouse button over a location in Google Earth.
         */
        mouseup(event: KmlMouseEvent): void;

        /**
         * Triggers an event when the user moves the mouse off of the object in Google Earth.
         */
        mouseout(event: KmlMouseEvent): void;

        /**
         * Triggers an event when the user moves the mouse inside Google Earth.
         */
        mousemove(event: KmlMouseEvent): void;
    }

    /**
     * The base class for all the other objects in the Google Earth Plug-in.
     * The methods and behavior of KMLObject are inherited by all other objects.
     * This is an abstract base class and cannot be used directly.
     * It provides the id attribute, which allows unique identification of an object.
     */
    export class KmlObject extends GEEventEmitter {
        /**
         * The interface name (i.e. 'KmlPlacemark') of the object.
         */
        getType(): string;

        /**
         * Test whether this object is the same as another object.
         * Useful for Chrome and Safari, where the comparison a==b sometimes fails for plugin objects.
         */
        equals(compareTo: KmlObject): boolean;

        /**
         * The unique ID of the KML object.
         */
        getId(): string;

        /**
         * The unique URL of the KML object.
         * This is the base address joined with the ID using the # character.
         *
         * For example: http://www.google.com/bar.kml#atlantis
         */
        getUrl(): string;

        /**
         * The parent node of the KML object.
         */
        getParentNode(): KmlObject;

        /**
         * The document that owns the KML object.
         */
        getOwnerDocument(): KmlDocument;

        /**
         * Permanently deletes an object, allowing its ID to be reused.
         * Attempting to access the object once it is released will result in an error.
         */
        release(): void;
    }

    /**
     * A collection of KmlObjects.
     */
    export class KmlObjectList<T extends KmlObject> {
        /**
         * Gets an item from the object list. For example, list.item(0) returns the first object in the list.
         */
        item(index: number): T;

        /**
         * Number of objects in collection.
         */
        getLength(): number;
    }

    /**
     * The base class for KmlStyle and KmlStyleMap.
     */
    export class KmlStyleSelector extends KmlObject {}

    /**
     * Defines the icon, label, line, list, polygon, and balloon styles.
     */
    export class KmlStyle extends KmlStyleSelector {
        /**
         * Specifies how icons for point placemarks are drawn in Google Earth.
         */
        getIconStyle(): KmlIconStyle;

        /**
         * Specifies how the name of a feature is drawn in the 3D viewer.
         * A custom color, color mode, and scale for the label (name) can be specified.
         */
        getLabelStyle(): KmlLabelStyle;

        /**
         * Specifies the drawing style (color, color mode, and line width) for line geometry.
         * Line geometry includes the outlines of outlined polygons and the extruded tether of Placemark icons (if extrusion is enabled).
         */
        getLineStyle(): KmlLineStyle;

        /**
         * Specifies the style for list geometry.
         */
        getListStyle(): KmlListStyle;

        /**
         * Specifies the drawing style for polygons, including polygon extrusions (which look like the walls of buildings) and line extrusions (which look like solid fences).
         */
        getPolyStyle(): KmlPolyStyle;

        /**
         * Specifies the drawing style for balloons.
         */
        getBalloonStyle(): KmlBalloonStyle;
    }

    /**
     * The KmlColorStyle object is an abstract object.
     * It specifies the color and color mode of extended style types.
     */
    export class KmlColorStyle extends KmlObject {
        /**
         * Color and opacity (alpha) values.
         */
        getColor(): KmlColor;

        /**
         * Specifies which color mode effect to apply to the base color.
         *
         * See also:
         *
         * * GEPlugin.COLOR_NORMAL
         * * GEPlugin.COLOR_INHERIT
         * * GEPlugin.COLOR_RANDOM
         */
        getColorMode(): KmlColorModeEnum;

        /**
         * Specifies which color mode effect to apply to the base color.
         *
         * See also:
         *
         * * GEPlugin.COLOR_NORMAL
         * * GEPlugin.COLOR_INHERIT
         * * GEPlugin.COLOR_RANDOM
         */
        setColorMode(colorMode: KmlColorModeEnum): void;
    }

    /**
     * Specifies how icons for point placemarks are drawn in Google Earth.
     * The icon property specifies the icon image.
     * The scale property specifies the x, y scaling of the icon.
     * The color specified in the color property of KmlIconStyle is blended with the color of the Icon.
     */
    export class KmlIconStyle extends KmlColorStyle {
        /**
         * Resizes the icon.
         */
        getScale(): number;

        /**
         * Resizes the icon.
         */
        setScale(scale: number): void;

        /**
         * The direction that icons are set to point, clockwise, and in degrees.
         */
        getHeading(): number;

        /**
         * The direction that icons are set to point, clockwise, and in degrees.
         */
        setHeading(heading: number): void;

        /**
         * A custom Icon. In KmlIconStyle, the only child element of KmlIcon is href and href is an HTTP address or a local file specification used to load an icon.
         */
        getIcon(): KmlIcon;

        /**
         * A custom Icon. In KmlIconStyle, the only child element of KmlIcon is href and href is an HTTP address or a local file specification used to load an icon.
         */
        setIcon(icon: KmlIcon): void;

        /**
         * Specifies the position within the Icon that is anchored to the point specified in the placemark.
         * The x and y values can be specified in three different ways: as pixels, as fractions of the icon, or as inset pixels, which is an offset in pixels from the upper right corner of the icon.
         * The x and y positions can be specified in different ways.
         * For example, x can be in pixels and y can be a fraction.
         * The origin of the coordinate system is in the lower left corner of the icon.
         */
        getHotSpot(): KmlVec2;
    }

    /**
     * Specifies how the name of a feature is drawn in the 3D viewer.
     * A custom color, color mode, and scale for the label (name) can be specified.
     */
    export class KmlLabelStyle extends KmlColorStyle {
        /**
         * Resizes the label.
         */
        getScale(): number;

        /**
         * Resizes the label.
         */
        setScale(scale: number): void;
    }

    /**
     * The KmlLineStyle object specifies the drawing style (color, color mode, and line width) for all line geometry.
     * Line geometry includes the outlines of outlined polygons and the extruded "tether" of Placemark icons (if extrusion is enabled).
     */
    export class KmlLineStyle extends KmlColorStyle {
        /**
         * Width of the line, in pixels.
         */
        getWidth(): number;

        /**
         * Width of the line, in pixels.
         */
        setWidth(width: number): void;
    }

    /**
     * Specifies the drawing style for all polygons, including polygon extrusions (which look like the walls of buildings) and line extrusions (which look like solid fences).
     */
    export class KmlPolyStyle extends KmlColorStyle {
        /**
         * Specifies whether or not to fill the polygon. Possible values 1 (fill) and 0 (no fill).
         */
        getFill(): boolean;

        /**
         * Specifies whether or not to fill the polygon. Possible values 1 (fill) and 0 (no fill).
         */
        setFill(fill: boolean): void;

        /**
         * Specifies whether to outline the polygon. Polygon outlines use the current KmlLineStyle.
         */
        getOutline(): boolean;

        /**
         * Specifies whether to outline the polygon. Polygon outlines use the current KmlLineStyle.
         */
        setOutline(outline: boolean): void;
    }

    /**
     * Specifies how a feature is displayed in the list view.
     */
    export class KmlListStyle extends KmlObject {
        /**
         * Background color for the Snippet.
         */
        getBgColor(): KmlColor;

        /**
         * Maximum number of lines of text for the Snippet.
         */
        getMaxSnippetLines(): number;

        /**
         * Maximum number of lines of text for the Snippet.
         */
        setMaxSnippetLines(maxSnippetLines: number): void;

        /**
         * Specifies how a feature should be displayed in a list view.
         */
        getListItemType(): KmlListItemTypeEnum;
    }

    /**
     * Specifies how the description balloon for placemarks is drawn.
     */
    export class KmlBalloonStyle extends KmlObject {
        /**
         * Background color of the balloon (optional).
         */
        getBgColor(): KmlColor;

        /**
         * Foreground color for text. The default is black (ff000000).
         */
        getTextColor(): KmlColor;

        /**
         * The text contained in the balloon.
         */
        getText(): string;

        /**
         * The text contained in the balloon.
         */
        setText(text: string): void;
    }

    /**
     * Specifies the top, bottom, right, and left sides of a bounding box on the Earth's surface.
     */
    export class KmlLatLonBox extends KmlObject {
        /**
         * Sets the north, south, east, and west edges of the bounding box, as well as the rotation of the overlay.
         */
        setBox(
            north: number,
            south: number,
            east: number,
            west: number,
            rotation: number,
        ): void;

        /**
         * Specifies the latitude of the north edge of the bounding box, in decimal degrees from -90 to 90.
         */
        getNorth(): number;

        /**
         * Specifies the latitude of the north edge of the bounding box, in decimal degrees from -90 to 90.
         */
        setNorth(north: number): void;

        /**
         * Specifies the latitude of the south edge of the bounding box, in decimal degrees from -90 to 90.
         */
        getSouth(): number;

        /**
         * Specifies the latitude of the south edge of the bounding box, in decimal degrees from -90 to 90.
         */
        setSouth(south: number): void;

        /**
         * Specifies the longitude of the east edge of the bounding box, in decimal degrees from -180 to 180.
         * (For overlays that overlap the meridian of 180 degrees longitude, values can extend beyond that range.)
         */
        getEast(): number;

        /**
         * Specifies the longitude of the east edge of the bounding box, in decimal degrees from -180 to 180.
         * (For overlays that overlap the meridian of 180 degrees longitude, values can extend beyond that range.)
         */
        setEast(east: number): void;

        /**
         * Specifies the longitude of the west edge of the bounding box, in decimal degrees from -180 to 180.
         * (For overlays that overlap the meridian of 180 degrees longitude, values can extend beyond that range.)
         */
        getWest(): number;

        /**
         * Specifies the longitude of the west edge of the bounding box, in decimal degrees from -180 to 180.
         * (For overlays that overlap the meridian of 180 degrees longitude, values can extend beyond that range.)
         */
        setWest(west: number): void;

        /**
         * Specifies a rotation of the overlay about its center, in degrees.
         * Values can be +/-180. The default is 0 (north).
         * Rotations are specified in a counterclockwise direction.
         */
        getRotation(): number;

        /**
         * Specifies a rotation of the overlay about its center, in degrees.
         * Values can be +/-180. The default is 0 (north).
         * Rotations are specified in a counterclockwise direction.
         */
        setRotation(rotation: number): void;
    }

    /**
     * Specifies a bounding box that describes an area of interest defined by geographic coordinates and altitudes.
     */
    export class KmlLatLonAltBox extends KmlLatLonBox {
        /**
         * Sets the north, south, east, west, rotation, minAltitude, maxAltitude, and altitudeMode of bounding box.
         */
        setAltBox(
            north: number,
            south: number,
            east: number,
            west: number,
            rotation: number,
            minAltitude: number,
            maxAltitude: number,
            altitudeMode: KmlAltitudeModeEnum,
        ): void;

        /**
         * Minimum altitude, specified in meters above sea level.
         */
        getMinAltitude(): number;

        /**
         * Minimum altitude, specified in meters above sea level.
         */
        setMinAltitude(minAltitude: number): void;

        /**
         * Maximim altitude, specified in meters above sea level.
         */
        getMaxAltitude(): number;

        /**
         * Maximim altitude, specified in meters above sea level.
         */
        setMaxAltitude(maxAltitude: number): void;

        /**
         * Specifies how the altitude property is interpreted.
         *
         * See also:
         *
         * * GEPlugin.ALTITUDE_CLAMP_TO_GROUND
         * * GEPlugin.ALTITUDE_RELATIVE_TO_GROUND
         * * GEPlugin.ALTITUDE_ABSOLUTE
         * * GEPlugin.ALTITUDE_CLAMP_TO_SEA_FLOOR
         * * GEPlugin.ALTITUDE_RELATIVE_TO_SEA_FLOOR
         */
        getAltitudeMode(): KmlAltitudeModeEnum;

        /**
         * Specifies how the altitude property is interpreted.
         *
         * See also:
         *
         * * GEPlugin.ALTITUDE_CLAMP_TO_GROUND
         * * GEPlugin.ALTITUDE_RELATIVE_TO_GROUND
         * * GEPlugin.ALTITUDE_ABSOLUTE
         * * GEPlugin.ALTITUDE_CLAMP_TO_SEA_FLOOR
         * * GEPlugin.ALTITUDE_RELATIVE_TO_SEA_FLOOR
         */
        setAltitudeMode(altitudeMode: KmlAltitudeModeEnum): number;
    }

    /**
     * The KmlLod or level of detail, describes the size of the projected region on the screen that is required in order for the region to be considered active.
     * Also specifies the size of the pixel ramp used for fading in (from transparent to opaque) and fading out (from opaque to transparent).
     */
    export class KmlLod extends KmlObject {
        /**
         * Sets the minLodPixels, maxLodPixels, minFadeExtent, and maxFadeExtent for the projected region on the screen.
         */
        set(
            minLodPixels: number,
            maxLodPixels: number,
            minFadeExtent: number,
            maxFadeExtent: number,
        ): void;

        /**
         * Specifies measurement in screen pixels that represents the minimum limit of the visibility range for a given Region.
         * Google Earth calculates the size of the region when projected onto screen space.
         * Then it computes the square root of the region's area (if, for example, the Region is square and the viewpoint is directly above the Region, and the Region is not tilted, this measurement is equal to the width of the projected Region).
         * If this measurement falls within the limits defined by minLodPixels and maxLodPixels (and if the LatLonAltBox is in view), the region is active.
         * If this limit is not reached, the associated geometry is considered to be too far from the user's viewpoint to be drawn.
         */
        getMinLodPixels(): number;

        /**
         * Specifies measurement in screen pixels that represents the minimum limit of the visibility range for a given Region.
         * Google Earth calculates the size of the region when projected onto screen space.
         * Then it computes the square root of the region's area (if, for example, the Region is square and the viewpoint is directly above the Region, and the Region is not tilted, this measurement is equal to the width of the projected Region).
         * If this measurement falls within the limits defined by minLodPixels and maxLodPixels (and if the LatLonAltBox is in view), the region is active.
         * If this limit is not reached, the associated geometry is considered to be too far from the user's viewpoint to be drawn.
         */
        setMinLodPixels(minLodPixels: number): void;

        /**
         * Measurement in screen pixels that represents the maximum limit of the visibility range for a given Region.
         * A value of -1, the default, indicates "active to infinite size."
         */
        getMaxLodPixels(): number;

        /**
         * Measurement in screen pixels that represents the maximum limit of the visibility range for a given Region.
         * A value of -1, the default, indicates "active to infinite size."
         */
        setMaxLodPixels(maxLogPixels: number): void;

        /**
         * Distance over which the geometry fades, from fully opaque to fully transparent.
         * This ramp value, expressed in screen pixels, is applied at the minimum end of the LOD (visibility) limits.
         */
        getMinFadeExtent(): number;

        /**
         * Distance over which the geometry fades, from fully opaque to fully transparent.
         * This ramp value, expressed in screen pixels, is applied at the minimum end of the LOD (visibility) limits.
         */
        setMinFadeExtent(minFadeExtent: number): void;

        /**
         * Distance over which the geometry fades, from fully transparent to fully opaque.
         * This ramp value, expressed in screen pixels, is applied at the maximum end of the LOD (visibility) limits.
         */
        getMaxFadeExtent(): number;

        /**
         * Distance over which the geometry fades, from fully transparent to fully opaque.
         * This ramp value, expressed in screen pixels, is applied at the maximum end of the LOD (visibility) limits.
         */
        setMaxFadeExtent(maxFadeExtent: number): void;
    }

    /**
     * The KmlRegion object is used to set region objects and their properties.
     * A region contains a bounding box (LatLonAltBox) that describes an area of interest defined by geographic coordinates and altitudes.
     * In addition, a Region contains an LOD (level of detail) extent that defines a validity range of the associated Region in terms of projected screen size.
     * A Region is said to be "active" when the bounding box is within the user's view and the LOD requirements are met.
     * Objects associated with a Region are drawn only when the Region is active.
     * When the viewRefreshMode is onRegion, the Link or Icon is loaded only when the Region is active.
     */
    export class KmlRegion extends KmlObject {
        /**
         * Sets the latLonAltBox and lod for the region.
         */
        set(latLonAltBox: KmlLatLonAltBox, lod: KmlLod): void;

        /**
         * A bounding box that describes an area of interest defined by geographic coordinates and altitudes.
         */
        getLatLonAltBox(): KmlLatLonAltBox;

        /**
         * A bounding box that describes an area of interest defined by geographic coordinates and altitudes.
         */
        setLatLonAltBox(latLonAltBox: KmlLatLonAltBox): void;

        /**
         * LOD is an abbreviation for Level of Detail.
         * Lod describes the size of the projected region on the screen that is required in order for the region to be considered "active.
         * " Also specifies the size of the pixel ramp used for fading in (from transparent to opaque) and fading out (from opaque to transparent).
         */
        getLod(): KmlLod;

        /**
         * LOD is an abbreviation for Level of Detail.
         * Lod describes the size of the projected region on the screen that is required in order for the region to be considered "active.
         * " Also specifies the size of the pixel ramp used for fading in (from transparent to opaque) and fading out (from opaque to transparent).
         */
        setLod(lod: KmlLod): void;
    }

    /**
     * Represents a specific point in time.
     * The plugin accepts time in this format only; it does not accept JavaScript date or time objects.
     */
    export class KmlDateTime {
        /**
         * Set the date.  Accepts only XML Schema time (see XML Schema Part 2: Datatypes Second Edition).
         * The value can be expressed as yyyy-mm-ddThh:mm:sszzzzzz, where T is the separator between the date and the time,
         * and the time zone is either Z(for UTC) or zzzzzz, which represents +/-hh:mm in relation to UTC.
         * Additionally, the value can be expressed as a date only.
         */
        set(date: string): void;

        /**
         * Returns the date and time in XML Schema time format.
         */
        get(): string;
    }

    /**
     * An abstract object and cannot be used directly in a JavaScript file.
     * This element is extended by the TimeSpan and TimeStamp objects.
     */
    export class KmlTimePrimitive extends KmlObject {}

    /**
     * Represents a single moment in time.
     * This is a simple element and contains no children.
     * Its value is a dateTime, specified in XML time.
     * The precision of the TimeStamp is dictated by the dateTime value in the when property.
     */
    export class KmlTimeStamp extends KmlTimePrimitive {
        /**
         * Represents a single moment in time.
         * This is a simple element and contains no children.
         * Its value is a dateTime, specified in XML time.
         * The precision of the TimeStamp is dictated by the dateTime value in the when property.
         *
         * * dateTime gives second resolution
         * * date gives day resolution
         * * gYearMonth gives month resolution
         * * gYear gives year resolution
         */
        getWhen(): KmlDateTime;
    }

    /**
     * Represents an extent in time bounded by begin and end dateTimes.
     */
    export class KmlTimeSpan extends KmlTimePrimitive {
        /**
         * Describes the beginning instant of a time period.
         * If absent, the beginning of the period is unbounded.
         */
        getBegin(): KmlDateTime;

        /**
         * Describes the ending instant of a time period.
         * If absent, the end of the period is unbounded.
         */
        getEnd(): KmlDateTime;
    }

    /**
     * This is an abstract class and cannot be created directly.
     * This class is extended by KmlCamera and KmlLookAt.
     */
    export class KmlAbstractView extends KmlObject {
        /**
         * Creates a new KmlLookAt object that matches as closely as possible this KmlAbstractView.
         * KmlLookAt is unable to represent roll, so roll values in the current view will not be passed to the new KmlLookAt object.
         *
         * If this view is already a KmlLookAt, this function returns a new KmlLookAt representing the same view.
         */
        copyAsLookAt(): KmlLookAt;

        /**
         * Creates a new KmlCamera object that matches this KmlAbstractView.
         *
         * If this view is already a KmlCamera, this function returns a new KmlCamera representing the same view.
         */
        copyAsCamera(): KmlCamera;

        /**
         * Returns the KmlTimeStamp or KmlTimeSpan object associated with this view.
         */
        getTimePrimitive(): KmlTimePrimitive;

        /**
         * Associate a KmlTimeStamp or KmlTimeSpan object with this view.
         */
        setTimePrimitive(timePrimitive: KmlTimePrimitive): void;

        /**
         * Returns the viewer options on the current view.
         *
         * See also:
         *
         * * GEPlugin.OPTION_STREET_VIEW
         * * GEPlugin.OPTION_SUNLIGHT
         * * GEPlugin.OPTION_HISTORICAL_IMAGERY
         */
        getViewerOptions(): KmlViewerOptions;

        /**
         * Sets the viewer options on the current view.
         *
         * See also:
         *
         * * GEPlugin.OPTION_STREET_VIEW
         * * GEPlugin.OPTION_SUNLIGHT
         * * GEPlugin.OPTION_HISTORICAL_IMAGERY
         */
        setViewerOptions(viewerOptions: KmlViewerOptions): void;
    }

    /**
     * Defines a camera that is associated with anything derived from feature.
     * The LookAt element positions the "camera" in relation to the object that is being viewed.
     * This class either positions the relative to a feature, or you can manually change the view, using ge.getView().setAbstractView().
     */
    export class KmlLookAt extends KmlAbstractView {
        /**
         * Sets the latitude, longitude, altitude, altitudeMode, heading, tilt, and range for the camera.
         */
        set(
            latitude: number,
            longitude: number,
            altitude: number,
            altitudeMode: KmlAltitudeModeEnum,
            heading: number,
            tilt: number,
            range: number,
        ): void;

        /**
         * Latitude of the point the camera is looking at.
         * Degrees north or south of the Equator (0 degrees).
         * Values range from -90 degrees (South Pole) to 90 degrees (North Pole).
         */
        getLatitude(): number;

        /**
         * Latitude of the point the camera is looking at.
         * Degrees north or south of the Equator (0 degrees).
         * Values range from -90 degrees (South Pole) to 90 degrees (North Pole).
         */
        setLatitude(latitude: number): void;

        /**
         * Latitude of the point the camera is looking at.
         * Degrees north or south of the Equator (0 degrees).
         * Values range from -90 degrees (South Pole) to 90 degrees (North Pole).
         */
        getLongitude(): number;

        /**
         * Latitude of the point the camera is looking at.
         * Degrees north or south of the Equator (0 degrees).
         * Values range from -90 degrees (South Pole) to 90 degrees (North Pole).
         */
        setLongitude(longitude: number): void;

        /**
         * The distance in meters from the point specified by longitude, latitude, and altitude for the LookAt position.
         */
        getRange(): number;

        /**
         * The distance in meters from the point specified by longitude, latitude, and altitude for the LookAt position.
         */
        setRange(range: number): void;

        /**
         * Angle between the direction of the LookAt position and the normal to the surface of the earth.
         * Values range from 0 to 90 degrees.  Values for tilt cannot be negative.
         * A tilt value of 0 degrees indicates viewing from directly above.
         * A tilt value of 90 degrees indicates viewing along the horizon.
         */
        getTilt(): number;

        /**
         * Angle between the direction of the LookAt position and the normal to the surface of the earth.
         * Values range from 0 to 90 degrees.  Values for tilt cannot be negative.
         * A tilt value of 0 degrees indicates viewing from directly above.
         * A tilt value of 90 degrees indicates viewing along the horizon.
         */
        setTilt(tilt: number): void;

        /**
         * Direction (that is, North, South, East, West), in degrees. Default=0 (North). Values range from 0 to 360 degrees.
         */
        getHeading(): number;

        /**
         * Direction (that is, North, South, East, West), in degrees. Default=0 (North). Values range from 0 to 360 degrees.
         */
        setHeading(heading: number): void;

        /**
         * Distance from the earth's surface, in meters.
         */
        getAltitude(): number;

        /**
         * Distance from the earth's surface, in meters.
         */
        setAltitude(altitude: number): void;

        /**
         * Specifies how altitude components in the coordinates element are interpreted.
         */
        getAltitudeMode(): KmlAltitudeModeEnum;

        /**
         * Specifies how altitude components in the coordinates element are interpreted.
         */
        setAltitudeMode(altitudeMode: KmlAltitudeModeEnum): void;
    }

    /**
     * Defines the camera that views the scene.
     * This element defines the position of the camera relative to the Earth's surface as well as the viewing direction of the camera.
     * The camera position is defined by longitude, latitude, altitude, and altitudeMode.
     * The viewing direction of the camera is defined by heading, tilt, and roll.
     * Camera can be a child element of any feature.
     */
    export class KmlCamera extends KmlAbstractView {
        /**
         * Sets the latitude, longitude, altitude, alitudeMode, heading, tilt, and roll values.
         */
        set(
            latitude: number,
            longitude: number,
            altitude: number,
            altitudeMode: KmlAltitudeModeEnum,
            heading: number,
            tilt: number,
            roll: number,
        ): void;

        /**
         * Latitude of the camera location. Degrees north or south of the Equator (0 degrees). Values range from -90 degrees to 90 degrees.
         */
        getLatitude(): number;

        /**
         * Latitude of the camera location. Degrees north or south of the Equator (0 degrees). Values range from -90 degrees to 90 degrees.
         */
        setLatitude(latitude: number): void;

        /**
         * Longitude of the camera location. Angular distance in degrees, relative to the Prime Meridian. Values west of the Meridian range from -180 to 0 degrees.
         * Values east of the Meridian range from 0 to 180 degrees.
         */
        getLongitude(): number;

        /**
         * Longitude of the camera location. Angular distance in degrees, relative to the Prime Meridian. Values west of the Meridian range from -180 to 0 degrees.
         * Values east of the Meridian range from 0 to 180 degrees.
         */
        setLongitude(longitude: number): void;

        /**
         * Distance from the earth's surface.
         */
        getAltitude(): number;

        /**
         * Distance from the earth's surface.
         */
        setAltitude(altitude: number): void;

        /**
         * Direction (that is, North, South, East, West), in degrees. Default=0 (North). Values range from 0 to 360 degrees.
         */
        getHeading(): number;

        /**
         * Direction (that is, North, South, East, West), in degrees. Default=0 (North). Values range from 0 to 360 degrees.
         */
        setHeading(heading: number): void;

        /**
         * Angle between the direction of the camera position and the normal to the surface of the earth. Values range from 0 to 360 degrees.
         * A tilt value of 0 degrees indicates viewing from directly above, 90 degrees indicates viewing along the horizon, and 180 degrees indicates viewing straight up at the sky.
         */
        getTilt(): number;

        /**
         * Angle between the direction of the camera position and the normal to the surface of the earth. Values range from 0 to 360 degrees.
         * A tilt value of 0 degrees indicates viewing from directly above, 90 degrees indicates viewing along the horizon, and 180 degrees indicates viewing straight up at the sky.
         */
        setTilt(tilt: number): void;

        /**
         * Rotation, in degrees, of the camera around the Z axis. Values range from -180 to +180 degrees.
         */
        getRoll(): number;

        /**
         * Rotation, in degrees, of the camera around the Z axis. Values range from -180 to +180 degrees.
         */
        setRoll(roll: number): void;

        /**
         * Specifies how altitude components in the coordinates are interpreted.
         */
        getAltitudeMode(): KmlAltitudeModeEnum;

        /**
         * Specifies how altitude components in the coordinates are interpreted.
         */
        setAltitudeMode(altitudeMode: KmlAltitudeModeEnum): void;
    }

    /**
     * The KmlGeometry object is an abstract object and cannot be used directly.
     * It provides a placeholder object for all derived Geometry objects.
     */
    export class KmlGeometry extends KmlObject {}

    /**
     * Specifies an AltitudeMode for derived classes.
     */
    export class KmlAltitudeGeometry extends KmlGeometry {
        /**
         * Specifies how altitude components in the geometry coordinates are interpreted.
         */
        getAltitudeMode(): KmlAltitudeModeEnum;

        /**
         * Specifies how altitude components in the geometry coordinates are interpreted.
         */
        setAltitudeMode(altitudeMode: KmlAltitudeModeEnum): void;
    }

    /**
     * A 3D object described in a referenced COLLADA file.
     * COLLADA files have a .dae file extension.
     * Models are created in their own coordinate space and then located, positioned, and scaled in Google Earth.
     * Google Earth supports the COLLADA common profile, with the following exceptions:
     *
     * * Google Earth supports only triangles and lines as primitive types. The maximum number of triangles allowed is 21845.
     * * Google Earth does not support animation or skinning.
     * * Google Earth does not support external geometry references.
     */
    export class KmlModel extends KmlAltitudeGeometry {
        /**
         * Specifies the exact coordinates of the Model's origin in latitude, longitude, and altitude.
         * Latitude and longitude measurements are standard lat-lon projection with WGS84 datum.
         * Altitude is distance above the earth's surface, in meters, and is interpreted according to altitudeMode.
         */
        getLocation(): KmlLocation;

        /**
         * Specifies the exact coordinates of the Model's origin in latitude, longitude, and altitude.
         * Latitude and longitude measurements are standard lat-lon projection with WGS84 datum.
         * Altitude is distance above the earth's surface, in meters, and is interpreted according to altitudeMode.
         */
        setLocation(location: KmlLocation): void;

        /**
         * Describes rotation of a 3D model's coordinate system to position the object in Google Earth.
         */
        getOrientation(): KmlOrientation;

        /**
         * Describes rotation of a 3D model's coordinate system to position the object in Google Earth.
         */
        setOrientation(orientation: KmlOrientation): void;

        /**
         * Scales a model along the x, y, and z axes in the model's coordinate space
         */
        getScale(): KmlScale;

        /**
         * Scales a model along the x, y, and z axes in the model's coordinate space
         */
        setScale(scale: KmlScale): void;

        /**
         * Returns the link of the collada model.
         */
        getLink(): KmlLink;

        /**
         * Sets the link of the collada model.
         */
        setLink(link: KmlLink): void;
    }

    /**
     * A container for zero or more geometry primitives associated with the same feature.
     */
    export class KmlMultiGeometry extends KmlGeometry {
        /**
         * The collection of geometries that are children of this multi-geometry.
         */
        getGeometries(): GEGeometryContainer;
    }

    /**
     * Specifies the behavior of the object's geometry.
     */
    export class KmlExtrudableGeometry extends KmlAltitudeGeometry {
        /**
         * Specifies whether to connect the geometry to the ground.
         */
        getExtrude(): boolean;

        /**
         * Specifies whether to connect the geometry to the ground.
         */
        setExtrude(extrude: boolean): void;

        /**
         * Specifies whether to allow the geometry to follow the terrain elevation.
         */
        getTessellate(): boolean;

        /**
         * Specifies whether to allow the geometry to follow the terrain elevation.
         */
        setTessellate(tessellate: boolean): void;
    }

    /**
     * A Polygon is defined by an outer boundary and 0 or more inner boundaries.
     * The boundaries, in turn, are defined by LinearRings.
     * When a Polygon is extruded, its boundaries are connected to the ground to form additional polygons, which gives the appearance of a building or a box.
     * Extruded Polygons use PolyStyle for their color, color mode, and fill.
     */
    export class KmlPolygon extends KmlExtrudableGeometry {
        /**
         * Contains a LinearRing element.
         */
        getOuterBoundary(): KmlLinearRing;

        /**
         * Contains a LinearRing element.
         */
        setOuterBoundary(outerBoundary: KmlLinearRing): void;

        /**
         * Contains a LinearRing element.
         * You can specify multiple innerBoundary properties, which create multiple cut-outs inside the Polygon.
         */
        getInnerBoundaries(): GELinearRingContainer;
    }

    /**
     * A geographic location defined by longitude, latitude, and (optional) altitude.
     * When a Point is contained by a Placemark, the point itself determines the position of the Placemark's name and icon.
     * When a Point is extruded, it is connected to the ground with a line. This tether uses the current LineStyle.
     */
    export class KmlPoint extends KmlExtrudableGeometry {
        /**
         * Sets altitudeMode, extrude, tessellate, latitude, longitude, and altitude values.
         */
        set(
            latitude: number,
            longitude: number,
            altitude: number,
            altitudeMode: KmlAltitudeModeEnum,
            extrude: boolean,
            tessellate: boolean,
        ): void;

        /**
         * Sets the latitude and longitude.
         */
        setLatLng(latitude: number, longitude: number): void;

        /**
         * Sets the latitude, longitude, and altitide.
         */
        setLatLngAlt(latitude: number, longitude: number, altitude: number): void;

        /**
         * The point's latitude, in degrees.
         */
        getLatitude(): number;

        /**
         * The point's latitude, in degrees.
         */
        setLatitude(latitude: number): void;

        /**
         * The point's longitude, in degrees.
         */
        getLongitude(): number;

        /**
         * The point's longitude, in degrees.
         */
        setLongitude(longitude: number): void;

        /**
         * The point's altitude, in meters.
         */
        getAltitude(): number;

        /**
         * The point's altitude, in meters.
         */
        setAltitude(altitude: number): void;
    }

    /**
     * Defines a connected set of line segments.
     * Use KmlLineStyle to specify the color, color mode, and width of the line.
     * When a LineString is extruded, the line is extended to the ground, forming a polygon that looks somewhat like a wall or fence.
     * For extruded LineStrings, the line itself uses the current LineStyle, and the extrusion uses the current PolyStyle.
     */
    export class KmlLineString extends KmlExtrudableGeometry {
        /**
         * Two or more coordinate tuples, each consisting of floating point values for longitude, latitude, and altitude.
         * The altitude component is optional.
         */
        getCoordinates(): KmlCoordArray;

        /**
         * Added to the altitude values for all points on the line string.
         * Adjusts the altitude of the feature as a whole, without the need to update each coordinate set.
         */
        setAltitudeOffset(altitudeOffset: number): void;

        /**
         * Returns the altitudeOffset, or 0 if not set.
         */
        getAltitudeOffset(): number;
    }

    /**
     * Defines a closed line string, typically the outer boundary of a Polygon.
     * Optionally, a LinearRing can also be used as the inner boundary of a Polygon to create holes in the Polygon.
     * A Polygon can contain multiple LinearRing elements used as inner boundaries.
     * You do not need to connect the first and last points.
     */
    export class KmlLinearRing extends KmlLineString {}

    /**
     * The KmlFeature object is an abstract object and is the base for all feature types (for example Placemarks, Overlays, and NetworkLinks).
     */
    export class KmlFeature extends KmlObject {
        /**
         * Retrieves the contents of the feature's <ExtendedData> element.
         * The retrieved contents are scrubbed to remove JavaScript; CSS; and iframe, embed, and object tags.
         *
         * It should be safe to insert the resulting HTML into your page without concern for malicious content embedded in the feature data;
         * however any feature depending on CSS or Javascript will not work.
         */
        getBalloonHtml(): string;

        /**
         * Retrieves the contents of the feature's <ExtendedData> element. The contents are not scrubbed.
         * Use this method only if you trust the source of the feature data.
         */
        getBalloonHtmlUnsafe(): string;

        /**
         * User-defined text displayed in the plugin as the label for the object (for example, for a Placemark).
         */
        getName(): string;

        /**
         * User-defined text displayed in the plugin as the label for the object (for example, for a Placemark).
         */
        setName(name: string): void;

        /**
         * Specifies whether the feature is drawn in the plugin.
         * In order for a feature to be visible, the visibility of all its ancestors must also be set to true.
         * In the Google Earth List View, each feature has a checkbox that allows the user to control visibility of the feature.
         */
        getVisibility(): boolean;

        /**
         * Specifies whether the feature is drawn in the plugin.
         * In order for a feature to be visible, the visibility of all its ancestors must also be set to true.
         * In the Google Earth List View, each feature has a checkbox that allows the user to control visibility of the feature.
         */
        setVisibility(visibility: boolean): void;

        /**
         * Default state of left panel.
         */
        getOpen(): boolean;

        /**
         * Default state of left panel.
         */
        setOpen(open: boolean): void;

        /**
         * Specifies a value representing an unstructured address written as a standard street, city, state address, and/or as a postal code.
         */
        getAddress(): string;

        /**
         * Specifies a value representing an unstructured address written as a standard street, city, state address, and/or as a postal code.
         */
        setAddress(address: string): void;

        /**
         * Specifies a short description of the feature.
         */
        getSnippet(): string;

        /**
         * Specifies a short description of the feature.
         */
        setSnippet(snippet: string): void;

        /**
         * User-supplied text that appears in the description balloon.
         */
        getDescription(): string;

        /**
         * User-supplied text that appears in the description balloon.
         */
        setDescription(description: string): void;

        /**
         * Stores either the lookAt or camera view.
         */
        getAbstractView(): KmlAbstractView;

        /**
         * Stores either the lookAt or camera view.
         */
        setAbstractView(abstractView: KmlAbstractView): void;

        /**
         * URI of a Style or StyleMap defined in a Document.
         * It refers to a Plug-in intitiated object.
         */
        getStyleUrl(): string;

        /**
         * URI of a Style or StyleMap defined in a Document.
         * It refers to a Plug-in intitiated object.
         */
        setStyleUrl(styleUrl: string): void;

        /**
         * The style based on the current mode of the Placemark.
         */
        getStyleSelector(): KmlStyleSelector;

        /**
         * The style based on the current mode of the Placemark.
         */
        setStyleSelector(styleSelector: KmlStyleSelector): void;

        /**
         * Specifies region objects and their properties.
         * A region contains a bounding box (LatLonAltBox) that describes an area of interest defined by geographic coordinates and altitudes.
         */
        getRegion(): KmlRegion;

        /**
         * Specifies region objects and their properties.
         * A region contains a bounding box (LatLonAltBox) that describes an area of interest defined by geographic coordinates and altitudes.
         */
        setRegion(region: KmlRegion): void;

        /**
         * Returns the KML for a feature.
         */
        getKml(): string;

        /**
         * Returns previous sibling node within the container.
         */
        getPreviousSibling(): KmlFeature;

        /**
         * Returns the next sibling node within the container.
         */
        getNextSibling(): KmlFeature;

        /**
         * Returns the KmlTimeStamp or KmlTimeSpan object associated with this feature.
         */
        getTimePrimitive(): KmlTimePrimitive;

        /**
         * Attach a KmlTimeStamp or KmlTimeSpan object to this feature.
         */
        setTimePrimitive(timePrimitive: KmlTimePrimitive): void;

        /**
         * Returns the computed style of a feature, merging any inline styles with styles imported from setHref() or a StyleUrl.
         *
         * Note: Modifying the returned KmlStyle object is undefined and not recommended.
         */
        getComputedStyle(): KmlStyle;

        /**
         * Experimental Feature — this is an experimental feature and can change (or even be removed) at any time.
         * The opacity of a feature, ranging from 0 (completely transparent) to 1 (complete opaque).
         * The opacity of a folder or document will influence the opacity of child features.
         * Thus, if a folder has an opacity of 0.5 and a child ground overlay in the folder also has an opacity of 0.5, the overlay will be drawn with an opacity of 0.25.
         */
        getOpacity(): number;

        /**
         * Experimental Feature — this is an experimental feature and can change (or even be removed) at any time.
         * The opacity of a feature, ranging from 0 (completely transparent) to 1 (complete opaque).
         * The opacity of a folder or document will influence the opacity of child features.
         * Thus, if a folder has an opacity of 0.5 and a child ground overlay in the folder also has an opacity of 0.5, the overlay will be drawn with an opacity of 0.25.
         */
        setOpacity(opacity: number): void;
    }

    /**
     * An abstract object and cannot be used directly.
     * A KmlContainer object holds one or more features and allows the creation of nested hierarchies.
     */
    export class KmlContainer extends KmlFeature {
        /**
         * Get an element by ID.
         * This is functionally equivalent to getElementByUrl with an unspecified base URL.
         *
         * For example: getElementByUrl('#foo').
         *
         * Usage is when finding objects created with JavaScript, which have unspecified base URLs.
         * The object must be a descendant of the container before it can be found.
         */
        getElementById(id: string): KmlObject;

        /**
         * Get an element by URL. A URL consists of the base address and ID, joined with the # character.
         *
         * For example: http://www.google.com/bar.kml#here_be_monsters
         *
         * This applies to objects that are fetched.
         * In the case of plugin created objects, the URL is simply #foo.
         * The object must be a descendant of the container before it can be found.
         */
        getElementByUrl(url: string): KmlObject;

        /**
         * Get an element by type.
         */
        getElementsByType(type: string): KmlObjectList<KmlObject>;

        /**
         * A collection of features, such as name, description, and so on.
         */
        getFeatures(): GEFeatureContainer;
    }

    /**
     * A Folder is used to arrange other features hierarchically (Folders, Placemarks, NetworkLinks, or Overlays).
     * A feature is visible only if it and all of its ancestors are visible.
     */
    export class KmlFolder extends KmlContainer {}

    /**
     * A layer displayed in Google Earth.
     */
    export class KmlLayer extends KmlFolder {}

    /**
     * A container for the various layers displayed with the Google Earth Plug-in.
     * It contains the same layers as Google Earth.
     */
    export class KmlLayerRoot extends KmlFolder {
        /**
         * Returns the layer based on the layer's ID.
         */
        getLayerById(id: string): KmlLayer;

        /**
         * Enables a layer based on its ID.
         */
        enableLayerById(id: string, visibility: boolean): void;

        /**
         * Returns the drawing order for this database.
         */
        getDrawOrder(): number;

        /**
         * Defines the drawing order for databases.
         * Drawing order is lowest to highest.
         * Google Earth Enterprise customers can add a side database and set the drawOrder to be either before or after that of the main database.
         * Side databases default to a drawing order of 0.
         */
        setDrawOrder(drawOrder: number): void;
    }

    /**
     * A KmlDocument has containers that holds features and styles.
     * This container is required if you use shared styles.
     * It is recommended that you use shared styles, which require the following.
     *
     * 1. Define all Styles in a Document. Assign a unique ID to each Style.
     * 2. Within a given feature or StyleMap, reference the Style's ID using a styleUrl element.
     *
     * Note: Shared styles are not inherited by the features in the Document.
     */
    export class KmlDocument extends KmlContainer {
        /**
         * Returns a list of elements using a particular style URL.
         */
        getElementsByStyleUrl(styleUrl: string): KmlObjectList<KmlObject>;

        /**
         * Returns an array containing the style selectors present in the KML document.
         */
        getStyleSelectors(): GEStyleSelectorContainer;
    }

    /**
     * The KmlPlacemark is a feature with associated Geometry.
     */
    export class KmlPlacemark extends KmlFeature {
        /**
         * The geometry associated with the placemark.
         */
        getGeometry(): KmlGeometry;

        /**
         * The geometry associated with the placemark.
         */
        setGeometry(geometry: KmlGeometry): void;
    }

    /**
     * The base class for the three types of balloon windows that can overlay the 3D window.
     */
    export class GEAbstractBalloon {
        /**
         * The ID of the balloon.
         */
        getId(): string;

        /**
         * The ID of the balloon.
         */
        setId(id: string): void;

        /**
         * Determines what the balloon is attached to.
         */
        getFeature(): KmlFeature;

        /**
         * Determines what the balloon is attached to.
         */
        setFeature(feature: KmlFeature): void;

        /**
         * Minimum width of the balloon.
         */
        getMinWidth(): number;

        /**
         * Minimum width of the balloon.
         */
        setMinWidth(minWidth: number): void;

        /**
         * Minimum height of the balloon.
         */
        getMinHeight(): number;

        /**
         * Minimum height of the balloon.
         */
        setMinHeight(minHeight: number): void;

        /**
         * Maximum width of the balloon.
         */
        getMaxWidth(): number;

        /**
         * Maximum width of the balloon.
         */
        setMaxWidth(maxWidth: number): void;

        /**
         * Maximum height of the balloon.
         */
        getMaxHeight(): number;

        /**
         * Maximum height of the balloon.
         */
        setMaxHeight(maxHeight: number): void;

        /**
         * When true, the balloon frame is displayed with a button that the user
         * can click to close the balloon. When false, the balloon frame is just
         * a plain frame.
         *
         * Default is true.
         */
        getCloseButtonEnabled(): boolean;

        /**
         * When true, the balloon frame is displayed with a button that the user
         * can click to close the balloon. When false, the balloon frame is just
         * a plain frame.
         *
         * Default is true.
         */
        setCloseButtonEnabled(closeButtonEnabled: boolean): void;
    }

    /**
     * Base class for GEHtmlStringBalloon and GEHtmlDivBalloon.
     */
    export class GEFeatureBalloon extends GEAbstractBalloon {}

    /**
     * Creates a balloon that contains HTML.
     */
    export class GEHtmlBalloon extends GEAbstractBalloon {
        /**
         * The color of the text in the balloon.
         * This must be set using the HTML hex format #RRGGBB.
         * If not set, it is interpreted as #000000.
         */
        getForegroundColor(): string;

        /**
         * The color of the text in the balloon.
         * This must be set using the HTML hex format #RRGGBB.
         * If not set, it is interpreted as #000000.
         */
        setForegroundColor(foregroundColor: string): void;

        /**
         * The background color of the balloon.
         * This must be set using the HTML hex format #RRGGBB.
         * If not set, the default is interpreted as #FFFFFF.
         */
        getBackgroundColor(): string;

        /**
         * The background color of the balloon.
         * This must be set using the HTML hex format #RRGGBB.
         * If not set, the default is interpreted as #FFFFFF.
         */
        setBackgroundColor(backgroundColor: string): void;
    }

    /**
     * The GEHtmlDivBalloon object creates a balloon based on the contentDiv property.
     */
    export class GEHtmlDivBalloon extends GEHtmlBalloon {
        /**
         * An HTMLDivElement to be used as the contents of the balloon.
         * When the balloon is shown, the HTMLDivElement is attached to the balloon element in the web page.
         * You can manipulate this balloon using ordinary HTML DOM techniques.
         */
        getContentDiv(): HTMLDivElement;

        /**
         * An HTMLDivElement to be used as the contents of the balloon.
         * When the balloon is shown, the HTMLDivElement is attached to the balloon element in the web page.
         * You can manipulate this balloon using ordinary HTML DOM techniques.
         */
        setContentDiv(contentDiv: HTMLElement): void;
    }

    /**
     * The GEHtmlStringBalloon class represents a balloon based on the contentString.
     */
    export class GEHtmlStringBalloon extends GEHtmlBalloon {
        /**
         * You can include any HTML using the contentString property.
         * When the balloon is visible, the content specified in contentString property,
         * is inserted directly into the balloon element in the web page.
         */
        getContentString(): string;

        /**
         * You can include any HTML using the contentString property.
         * When the balloon is visible, the content specified in contentString property,
         * is inserted directly into the balloon element in the web page.
         */
        setContentString(contentString: string): void;
    }

    /**
     * The base class for GETimeControl.
     */
    export class GEControl {}

    /**
     * Represents the time slider object.
     */
    export class GETimeControl extends GEControl {
        /**
         * Whether the time slider is visible or not.
         */
        getVisibility(): GEVisibilityEnum;

        /**
         * Specifies whether the control is visible or hidden.
         */
        setVisibility(visibility: GEVisibilityEnum): void;

        /**
         * Returns the clock rate that the plugin would use, if the play button on the time slider UI was pressed.
         * This rate is calculated by the plugin based on the time range currently present in the slider.
         */
        getCalculatedRate(): number;

        /**
         * Returns a KmlTimeSpan object encompassing the earliest and latest times present in the time slider.
         * For more information, refer to the Time chapter of the Developer's Guide.
         */
        getExtents(): KmlTimeSpan;

        /**
         * Returns an array containing the KmlTimeStamp objects associated with the historical imagery available in this view.
         */
        getAvailableImageDates(): KmlObjectList<KmlTimeStamp>;
    }

    /**
     * The GEPlugin is the Google Earth Plugin's main object, and this is the object that is returned to the JavaScript application when you first create a plug-in instance.
     * GEPlugin provides factory methods for ructing other objects (placemarks, and so on), and is also used to retrieve the root document objects.
     */
    export class GEPlugin {
        /**
         * A Specifies that altitudes are at ground level. For Ground overlays, this means that the image will be draped over the terrain.
         */
        ALTITUDE_CLAMP_TO_GROUND: KmlAltitudeModeEnum;

        /**
         * Specifies that altitudes are to be interpreted as meters above or below ground level (i.e. the elevation of the terrain at the location).
         */
        ALTITUDE_RELATIVE_TO_GROUND: KmlAltitudeModeEnum;

        /**
         * Specifies that altitudes are to be interpreted as meters above or below sea level, regardless of the actual elevation of the terrain beneath the object.
         * For example, if you set the altitude of an object to 10 meters with an absolute altitude mode, the object will appear to be at ground level if the terrain beneath is also 10 meters above sea level.
         * If the terrain is 3 meters above sea level, the object will appear elevated above the terrain by 7 meters.
         * If, on the other hand, the terrain is 15 meters above sea level, the object may be completely invisible.
         */
        ALTITUDE_ABSOLUTE: KmlAltitudeModeEnum;

        /**
         * Specifies that altitudes are at sea floor level.
         */
        ALTITUDE_CLAMP_TO_SEA_FLOOR: KmlAltitudeModeEnum;

        /**
         * Specifies that altitudes are to be interpreted as meters above sea floor (i.e. the elevation of the sea floor at the location).
         */
        ALTITUDE_RELATIVE_TO_SEA_FLOOR: KmlAltitudeModeEnum;

        /**
         * Refresh when the file is loaded and whenever the Link parameters change. This refresh mode is the default.
         */
        REFRESH_ON_CHANGE: KmlRefreshModeEnum;

        /**
         * Refresh every n seconds (specified in refreshInterval).
         */
        REFRESH_ON_INTERVAL: KmlRefreshModeEnum;

        /**
         * Refresh when the expiration time is reached.
         * If a fetched file has a NetworkLinkControl, the expires time takes precedence over expiration times specified in HTTP headers.
         * If no expires time is specified, the HTTP max-age header is used (if present).
         * If max-age is not present, the Expires HTTP header is used (if present).
         */
        REFRESH_ON_EXPIRE: KmlRefreshModeEnum;

        /**
         * Ignore changes in the view. Also ignore viewFormat parameters, if any.
         * This view refresh mode is the default.
         */
        VIEW_REFRESH_NEVER: KmlViewRefreshModeEnum;

        /**
         * Refresh the file only when the user explicitly requests it.
         */
        VIEW_REFRESH_ON_REQUEST: KmlViewRefreshModeEnum;

        /**
         * Refresh n seconds after movement stops, where n is specified in viewRefreshTime.
         */
        VIEW_REFRESH_ON_STOP: KmlViewRefreshModeEnum;

        /**
         * Refresh only when the feature's Region becomes active.
         */
        VIEW_REFRESH_ON_REGION: KmlViewRefreshModeEnum;

        /**
         * Screen coordinates are to be interpreted as a fraction of an item, like an image or Google Earth window.
         */
        UNITS_FRACTION: KmlUnitsEnum;

        /**
         * Screen coordinates are to be interpreted as pixels from the left or bottom edge.
         */
        UNITS_PIXELS: KmlUnitsEnum;

        /**
         * Screen coordinates are to be interpreted as pixels from the top or right edge.
         */
        UNITS_INSET_PIXELS: KmlUnitsEnum;

        /**
         * Apply no color mode effect, i.e. use the base color as is.
         */
        COLOR_NORMAL: KmlColorModeEnum;

        /**
         * Apply a random linear scale to the base color. See the KML <colorMode> documentation for more details.
         */
        COLOR_RANDOM: KmlColorModeEnum;

        /**
         * Inherit the color mode from ancestor styles.
         */
        COLOR_INHERIT: KmlColorModeEnum;

        /**
         * The Earth map type, used with GEOptions' setMapType.
         */
        MAP_TYPE_EARTH: GEMapTypeEnum;

        /**
         * The Sky map type, used with GEOptions' setMapType.
         */
        MAP_TYPE_SKY: GEMapTypeEnum;

        /**
         * Hide the UI element.
         */
        VISIBILITY_HIDE: GEVisibilityEnum;

        /**
         * Show the UI element always.
         */
        VISIBILITY_SHOW: GEVisibilityEnum;

        /**
         * Automatically show or hide the UI element depending on user interaction.
         */
        VISIBILITY_AUTO: GEVisibilityEnum;

        /**
         * Specifies that fly-to should happen immediately, without a smooth transition.
         */
        SPEED_TELEPORT: number;

        /**
         * The Layer ID of the terrain layer. Use as an argument to getLayerById() or enableLayerById().
         */
        LAYER_TERRAIN: string;

        /**
         * The Layer ID of the roads layer. Use as an argument to getLayerById() or enableLayerById().
         */
        LAYER_ROADS: string;

        /**
         * The Layer ID of the photorealistic buildings layer. Use as an argument to getLayerById() or enableLayerById().
         */
        LAYER_BUILDINGS: string;

        /**
         * The Layer ID of the low resolution (gray) buildings layer.
         * Use as an argument to getLayerById() or enableLayerById().
         * Note that as photorealistic buildings continue to be created and added to the LAYER_BUILDINGS layer, the low-resolution version of those buildings will be removed from this layer.
         * This layer will therefore change over time.
         */
        LAYER_BUILDINGS_LOW_RESOLUTION: string;

        /**
         * The Layer ID of the borders layer. Use as an argument to getLayerById() or enableLayerById().
         */
        LAYER_BORDERS: string;

        /**
         * The Layer ID of the trees layer. Use as an argument to getLayerById() or enableLayerById().
         */
        LAYER_TREES: string;

        /**
         * When using the GEView.hitTest method, this mode samples the globe (the earth's sphere at altitude 0, without terrain or buildings).
         */
        HIT_TEST_GLOBE: GEHitTestModeEnum;

        /**
         * When using the GEView.hitTest method, this mode samples the earth's terrain (the ground surface, including variations in altitude).
         */
        HIT_TEST_TERRAIN: GEHitTestModeEnum;

        /**
         * When using the GEView.hitTest method, this mode samples 3D buildings.
         */
        HIT_TEST_BUILDINGS: GEHitTestModeEnum;

        /**
         * Sets the render state to its default value. Currently, sunlight, Street View, and historical imagery all default to a disabled state.
         */
        OPTION_STATE_DEFAULT: GEViewerOptionsValueEnum;

        /**
         * Set the render state to on. Passed to the KmlViewerOptions.setOption method.
         */
        OPTION_STATE_ENABLED: GEViewerOptionsValueEnum;

        /**
         * Set the render state to off. Passed to the KmlViewerOptions.setOption method.
         */
        OPTION_STATE_DISABLED: GEViewerOptionsValueEnum;

        /**
         * Passed to the KmlViewerOptions.setOption method, along with a GEViewerOptionsValueEnum, to specify whether the Sun option should be visible.
         * Sun can also be enabled/disabled with GEPlugin.getSun.
         */
        OPTION_SUNLIGHT: GEViewerOptionsTypeEnum;

        /**
         * Passed to the KmlViewerOptions.setOption method, along with a GEViewerOptionsValueEnum, to specify whether historical imagery should be enabled.
         */
        OPTION_HISTORICAL_IMAGERY: GEViewerOptionsTypeEnum;

        /**
         * Passed to the KmlViewerOptions.setOption method, along with a GEViewerOptionsValueEnum, to specify whether Street View should be enabled when the view reaches ground level.
         * Note that this applies only to programmatic movement, such as fly-tos; to control whether the user can enter Street View using manual navigation controls, call ge.getPlugin().streetViewEnabled(true).
         */
        OPTION_STREET_VIEW: GEViewerOptionsTypeEnum;

        /**
         * The feature's visibility is tied to its list item's checkbox state.
         */
        LIST_ITEM_CHECK: KmlListItemTypeEnum;

        /**
         * When specified for a folder, document or network link, prevents all items from being made visible at once—that is, the user can turn all children off but cannot turn them all on at the same time.
         * This setting is useful for containers or network links containing large amounts of data.
         */
        LIST_ITEM_CHECK_OFF_ONLY: KmlListItemTypeEnum;

        /**
         * Use a normal checkbox for visibility but do not display children in a list view.
         * The item's checkbox should allows the user to toggle visibility of the child objects in the viewport.
         */
        LIST_ITEM_CHECK_HIDE_CHILDREN: KmlListItemTypeEnum;

        /**
         * When specified for a container (a folder or a document), only one of the container's items should be visible at a time.
         */
        LIST_ITEM_RADIO_FOLDER: KmlListItemTypeEnum;

        /**
         * The large navigation control type, used with GENavigationControl.setControlType().
         */
        NAVIGATION_CONTROL_LARGE: GENavigationControlEnum;

        /**
         * The small navigation control type, used with GENavigationControl.setControlType().
         */
        NAVIGATION_CONTROL_SMALL: GENavigationControlEnum;

        /**
         * Parse a string of KML and return a handle to the root of the KML object structure that was created.
         */
        parseKml(kml: string): KmlObject;

        /**
         * Get an element by ID. This is functionally equivalent to getElementByUrl with an unspecified base URL.
         *
         * For example: getElementByUrl('#foo').
         *
         * Usage is when finding objects created with JavaScript, which have unspecified base URLs.
         * The object must be a descendant of the DOM before it can be found.
         */
        getElementById(id: string): KmlObject;

        /**
         * Get an element by URL. A URL consists of the base address and the ID, joined with the # character.
         *
         * For example: http://www.google.com/bar.kml#here_be_monsters
         *
         * This applies to objects that are fetched.
         * In the case of plugin created objects, the URL is simply #foo.
         * The object must be a descendant of the DOM before it can be found.
         */
        getElementByUrl(url: string): KmlObject;

        /**
         * Get a list of elements by type.
         */
        getElementsByType(): KmlObjectList<KmlObject>;

        /**
         * Creates a placemark on the globe.
         * A Placemark is a feature with associated Geometry.
         * A Placemark with a Point has an icon associated with it that marks a point on the Earth in the 3D viewer.
         * (In the Google Earth 3D viewer, a Point Placemark is the only object you can click or roll over.
         * Other Geometry objects do not have an icon in the 3D viewer.
         * To allow the user to click in the 3D viewer, you would need to create a MultiGeometry object that contains both a Point and the other Geometry object.)
         */
        createPlacemark(id: string): KmlPlacemark;

        /**
         * Creates a point on the globe. Specifies the geographic location defined by longitude, latitude, and (optional) altitude.
         */
        createPoint(id: string): KmlPoint;

        /**
         * Creates a line string on Google Earth.
         */
        createLineString(id: string): KmlLineString;

        /**
         * Creates a folder.
         * A KMLFolder is used to arrange other features hierarchically (Folders, Placemarks, NetworkLinks, or Overlays).
         * A feature is visible only if it and all its ancestors are visible.
         */
        createFolder(id: string): KmlFolder;

        /**
         * Creates level of detail (LOD).
         * LOD describes the size of the projected region on the screen that is required in order for the region to be considered active.
         * Also specifies the size of the pixel ramp used for fading in (from transparent to opaque) and fading out (from opaque to transparent).
         */
        createLod(id: string): KmlLod;

        /**
         * Creates a LatLonBox, a bounding box that describes an area of interest defined by geographic coordinates and altitudes.
         */
        createLatLonBox(id: string): KmlLatLonBox;

        /**
         * Creates a LatLonAltBox, a bounding box that describes an area of interest defined by geographic coordinates and altitudes.
         */
        createLatLonAltBox(id: string): KmlLatLonAltBox;

        /**
         * Creates a Document. A Document is a container for features and styles.
         */
        createDocument(id: string): KmlDocument;

        /**
         * Creates a Region in Google Earth.
         * A Region contains a bounding box that describes an area of interest defined by geographic coordinates and altitudes.
         */
        createRegion(id: string): KmlRegion;

        /**
         * Specifies the exact coordinates of the Model's origin in latitude, longitude, and altitude.
         * Latitude and longitude measurements are standard lat-lon projection with WGS84 datum.
         * Altitude is distance above the earth's surface, in meters, and is interpreted according to altitudeMode.
         */
        createLocation(id: string): KmlLocation;

        /**
         * Sets the rotation of a 3D model's coordinate system to position the object in Google Earth.
         */
        createOrientation(id: string): KmlOrientation;

        /**
         * Sets the scale of a model along the x, y, and z axes in the model's coordinate space.
         */
        createScale(id: string): KmlScale;

        /**
         * Creates a model.
         * A model is a 3D object described in a COLLADA file.
         * COLLADA files have a .dae file extension.
         * Models are created in their own coordinate space and then located, positioned, and scaled in Google Earth.
         */
        createModel(id: string): KmlModel;

        /**
         * A Style defines an addressable style group that can be referenced by StyleMaps and features.
         */
        createStyle(id: string): KmlStyle;

        /**
         * Creates a LinearRing.
         * A LinearRing defines a closed line string, typically the outer boundary of a Polygon.
         * Optionally, a LinearRing can also be used as the inner boundary of a Polygon to create holes in the Polygon.
         */
        createLinearRing(id: string): KmlLinearRing;

        /**
         * Creates a Polygon. A Polygon is defined by an outer boundary and 0 or more inner boundaries.
         */
        createPolygon(id: string): KmlPolygon;

        /**
         * Creates an Icon. An icon defines an image associated with an Icon style or overlay.
         */
        createIcon(id: string): KmlIcon;

        /**
         * Creates a Link.
         * A Link specifies the location of KML files fetched by network links, image files used in any overlay, or model files used with the Model object.
         */
        createLink(id: string): KmlLink;

        /**
         * Creates a GroundOverlay.
         * A GroundOverlay draws an image overlay draped onto the terrain.
         */
        createGroundOverlay(id: string): KmlGroundOverlay;

        /**
         * Creates a NetworkLink.
         * A NetworkLink references a KML file or KMZ archive on a local or remote network.
         */
        createNetworkLink(id: string): KmlNetworkLink;

        /**
         * Creates a ScreenOverlay.
         * A ScreenOverlay draws an image overlay fixed to the screen.
         */
        createScreenOverlay(id: string): KmlScreenOverlay;

        /**
         * Creates a container for one or more geometry primitives associated with the same feature.
         */
        createMultiGeometry(id: string): KmlMultiGeometry;

        /**
         * Creates a StyleMap.
         * A StyleMap maps between two different icon styles.
         * Typically, a StyleMap is used to provide separate normal and highlighted styles for a Placemark, so that the highlighted version appears when the user mouses over the icon in Google Earth.
         */
        createStyleMap(id: string): KmlStyleMap;

        /**
         * Creates a new LookAt.
         * A LookAt element positions the camera view in relation to an object that is being viewed.
         */
        createLookAt(id: string): KmlLookAt;

        /**
         * Creates a new Camera.
         * This element positions the camera relative to the Earth's surface and defines the view direction.
         */
        createCamera(id: string): KmlCamera;

        /**
         * Creates a new viewer options object.
         */
        createViewerOptions(id: string): KmlViewerOptions;

        /**
         * Create a KmlTimeStamp object.
         * For more information, refer to the Time chapter of the Google Earth API developer's guide.
         */
        createTimeStamp(id: string): KmlTimeStamp;

        /**
         * Create a KmlTimeSpan object.
         * For more information, refer to the Time chapter of the Google Earth API developer's guide.
         */
        createTimeSpan(id: string): KmlTimeSpan;

        /**
         * Creates a Feature balloon.
         */
        createFeatureBalloon(id: string): GEFeatureBalloon;

        /**
         * Creates an HTML string balloon.
         */
        createHtmlStringBalloon(id: string): GEHtmlStringBalloon;

        /**
         * Creates an Html Div Balloon.
         */
        createHtmlDivBalloon(id: string): GEHtmlDivBalloon;

        /**
         * Returns the currently active balloon, or null.
         */
        getBalloon(): GEAbstractBalloon;

        /**
         * Sets the given balloon as the active balloon, replacing any existing active balloon.
         * If the given feature is visible, then the balloon is displayed. Otherwise, the balloon is hidden.
         *
         * If the argument is null, then any existing active balloon will be hidden.
         */
        setBalloon(newActiveBalloon: GEAbstractBalloon): void;

        /**
         * Used for debugging purposes; if this value is not equal to the value returned by getPluginVersion then there is a misconfiguration on the end user's system.
         * This check is automatically done during plugin instantiation.
         */
        getEarthVersion(): string;

        /**
         * The version of the Google Earth Plug-in installed on the end user's machine.
         */
        getPluginVersion(): string;

        /**
         * The options used to manipulate the behavior of the Google Earth plugin.
         */
        getOptions(): GEOptions;

        /**
         * The time class used to manipulate the behavior of the Google Earth plugin time.
         */
        getTime(): GETime;

        /**
         * Controls the window options.
         */
        getWindow(): GEWindow;

        /**
         * Controls the globe behavior.
         */
        getGlobe(): GEGlobe;

        /**
         * Displays the dawn to dusk views.
         */
        getSun(): GESun;

        /**
         * Controls built-in layer behavior.
         */
        getLayerRoot(): KmlLayerRoot;

        /**
         * Controls the plugin viewport.
         */
        getView(): GEView;

        /**
         * Controls the navigation controls on the globe.
         */
        getNavigationControl(): GENavigationControl;

        /**
         * The top-level features currently in the Earth object.
         */
        getFeatures(): GEFeatureContainer;

        /**
         * Exposes functionality for interacting with KML tours.
         */
        getTourPlayer(): GETourPlayer;

        /**
         * Exposes functionality for interacting with photo overlays.
         */
        getPhotoOverlayViewer(): GEPhotoOverlayViewer;

        /**
         * Returns a number between 0 and 100 (inclusive) that indicates the progress of the streaming of imagery for the current view.
         *
         * A value of 100 means that the imagery is completely streamed in.
         */
        getStreamingPercent(): number;
    }
}
