// Type definitions for Google Maps JavaScript API 3.36
// Project: https://developers.google.com/maps/
// Definitions by:  Folia A/S <http://www.folia.dk>,
//                  Chris Wrench <https://github.com/cgwrench>,
//                  Kiarash Ghiaseddin
//                  <https://github.com/Silver-Connection/DefinitelyTyped>,
//                  Grant Hutchins <https://github.com/nertzy>,
//                  Denis Atyasov <https://github.com/xaolas>,
//                  Michael McMullin <https://github.com/mrmcnerd>,
//                  Martin Costello <https://github.com/martincostello>,
//                  Sven Kreiss <https://github.com/svenkreiss>
//                  Umar Bolatov <https://github.com/bolatovumar>
//                  Michael Gauthier <https://github.com/gauthierm>
//                  Colin Doig <https://github.com/captain-igloo>
//                  Dmitry Demensky <https://github.com/demensky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.7

/*
The MIT License

Copyright (c) 2012 Folia A/S. http://www.folia.dk

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

declare namespace google.maps {
  /***** Map *****/
  class Map extends MVCObject {
    constructor(mapDiv: Element|null, opts?: MapOptions);
    fitBounds(
        bounds: LatLngBounds|LatLngBoundsLiteral,
        padding?: number|Padding): void;
    getBounds(): LatLngBounds|null|undefined;
    getCenter(): LatLng;
    getDiv(): Element;
    getHeading(): number;
    getMapTypeId(): MapTypeId|string;
    getProjection(): Projection;
    getStreetView(): StreetViewPanorama;
    getTilt(): number;
    getZoom(): number;
    panBy(x: number, y: number): void;
    panTo(latLng: LatLng|LatLngLiteral): void;
    panToBounds(
        latLngBounds: LatLngBounds|LatLngBoundsLiteral,
        padding?: number|Padding): void;
    setCenter(latlng: LatLng|LatLngLiteral): void;
    setHeading(heading: number): void;
    setMapTypeId(mapTypeId: MapTypeId|string): void;
    setOptions(options: MapOptions): void;
    setStreetView(panorama: StreetViewPanorama): void;
    setTilt(tilt: number): void;
    setZoom(zoom: number): void;
    controls: MVCArray<Node>[];
    data: Data;
    mapTypes: MapTypeRegistry;
    overlayMapTypes: MVCArray<MapType>;
    setClickableIcons(clickable: boolean): void;
  }

  interface Padding {
    bottom: number;
    left: number;
    right: number;
    top: number;
  }

  interface MapOptions {
    /**
     * Color used for the background of the Map div. This color will be visible
     * when tiles have not yet loaded as the user pans. This option can only be
     * set when the map is initialized.
     */
    backgroundColor?: string;
    /** The initial Map center. Required. */
    center?: LatLng|LatLngLiteral;
    /**
     * When false, map icons are not clickable. A map icon represents a point of
     * interest, also known as a POI. By default map icons are clickable.
     */
    clickableIcons?: boolean
    /**
     * Size in pixels of the controls appearing on the map. This value must be
     * supplied directly when creating the Map, updating this value later may
     * bring the controls into an undefined state. Only governs the controls
     * made by the Maps API itself. Does not scale developer created custom
     * controls.
     */
    controlSize?: number;
    /** Enables/disables all default UI. May be overridden individually. */
    disableDefaultUI?: boolean;
    /** Enables/disables zoom and center on double click. Enabled by default. */
    disableDoubleClickZoom?: boolean;
    /**
     * If false, prevents the map from being dragged. Dragging is enabled by
     * default.
     */
    draggable?: boolean;
    /**
     * The name or url of the cursor to display when mousing over a draggable
     * map. This property uses the css cursor attribute to change the icon. As
     * with the css property, you must specify at least one fallback cursor that
     * is not a URL. For example: draggableCursor:
     * 'url(http://www.example.com/icon.png), auto;'.
     */
    draggableCursor?: string;
    /**
     * The name or url of the cursor to display when the map is being dragged.
     * This property uses the css cursor attribute to change the icon. As with
     * the css property, you must specify at least one fallback cursor that is
     * not a URL. For example: draggingCursor:
     * 'url(http://www.example.com/icon.png), auto;'.
     */
    draggingCursor?: string;
    /** The enabled/disabled state of the Fullscreen control. */
    fullscreenControl?: boolean;
    /** The display options for the Fullscreen control. */
    fullscreenControlOptions?: FullscreenControlOptions;
    /**
     * This setting controls how gestures on the map are handled.
     */
    gestureHandling?: GestureHandlingOptions;
    /**
     * The heading for aerial imagery in degrees measured clockwise from
     * cardinal direction North. Headings are snapped to the nearest available
     * angle for which imagery is available.
     */
    heading?: number;
    /**
     * If false, prevents the map from being controlled by the keyboard.
     * Keyboard shortcuts are enabled by default.
     */
    keyboardShortcuts?: boolean;
    /** The initial enabled/disabled state of the Map type control. */
    mapTypeControl?: boolean;
    /** The initial display options for the Map type control. */
    mapTypeControlOptions?: MapTypeControlOptions;
    /** The initial Map mapTypeId. Defaults to ROADMAP. */
    mapTypeId?: MapTypeId;
    /**
     * The maximum zoom level which will be displayed on the map. If omitted, or
     * set to null, the maximum zoom from the current map type is used instead.
     * Valid values: Integers between zero, and up to the supported maximum zoom
     * level.
     */
    maxZoom?: number;
    /**
     * The minimum zoom level which will be displayed on the map. If omitted, or
     * set to null, the minimum zoom from the current map type is used instead.
     * Valid values: Integers between zero, and up to the supported maximum zoom
     * level.
     */
    minZoom?: number;
    /** If true, do not clear the contents of the Map div. */
    noClear?: boolean;
    overviewMapControl?: boolean;
    overviewMapControlOptions?: OverviewMapControlOptions;
    /**
     * The enabled/disabled state of the Pan control.
     * Note: The Pan control is not available in the new set of controls
     * introduced in v3.22 of the Google Maps JavaScript API. While using v3.22
     * and v3.23, you can choose to use the earlier set of controls rather than
     * the new controls, thus making the Pan control available as part of the
     * old control set. See {@link
     * https://developers.google.com/maps/articles/v322-controls-diff|What's New
     * in the v3.22 Map Controls}.
     */
    panControl?: boolean;
    /**
     * The display options for the Pan control.
     * Note: The Pan control is not available in the new set of controls
     * introduced in v3.22 of the Google Maps JavaScript API. While using v3.22
     * and v3.23, you can choose to use the earlier set of controls rather than
     * the new controls, thus making the Pan control available as part of the
     * old control set. See {@link
     * https://developers.google.com/maps/articles/v322-controls-diff|What's New
     * in the v3.22 Map Controls}.
     */
    panControlOptions?: PanControlOptions;
    /** The enabled/disabled state of the Rotate control. */
    rotateControl?: boolean;
    /** The display options for the Rotate control. */
    rotateControlOptions?: RotateControlOptions;
    /** The initial enabled/disabled state of the Scale control. */
    scaleControl?: boolean;
    /** The initial display options for the Scale control. */
    scaleControlOptions?: ScaleControlOptions;
    /**
     * If false, disables scrollwheel zooming on the map. The scrollwheel is
     * enabled by default.
     */
    scrollwheel?: boolean;
    /**
     * The enabled/disabled state of the sign in control. This option only
     * applies if signed_in=true has been passed as a URL parameter in the
     * bootstrap request. You may want to use this option to hide the map's sign
     * in control if you have provided another way for your users to sign in,
     * such as the Google Sign-In button. This option does not affect the
     * visibility of the Google avatar shown when the user is already signed in.
     */
    signInControl?: boolean;
    /**
     * A StreetViewPanorama to display when the Street View pegman is dropped on
     * the map. If no panorama is specified, a default StreetViewPanorama will
     * be displayed in the map's div when the pegman is dropped.
     */
    streetView?: StreetViewPanorama;
    /**
     * The initial enabled/disabled state of the Street View Pegman control.
     * This control is part of the default UI, and should be set to false when
     * displaying a map type on which the Street View road overlay should not
     * appear (e.g. a non-Earth map type).
     */
    streetViewControl?: boolean;
    /** The initial display options for the Street View Pegman control. */
    streetViewControlOptions?: StreetViewControlOptions;
    /**
     * Styles to apply to each of the default map types. Note that for
     * satellite/hybrid and terrain modes, these styles will only apply to
     * labels and geometry.
     */
    styles?: MapTypeStyle[];
    /**
     * Controls the automatic switching behavior for the angle of incidence of
     * the map. The only allowed values are 0 and 45. The value 0 causes the map
     * to always use a 0° overhead view regardless of the zoom level and
     * viewport. The value 45 causes the tilt angle to automatically switch to
     * 45 whenever 45° imagery is available for the current zoom level and
     * viewport, and switch back to 0 whenever 45° imagery is not available
     * (this is the default behavior). 45° imagery is only available for
     * satellite and hybrid map types, within some locations, and at some zoom
     * levels. Note: getTilt returns the current tilt angle, not the value
     * specified by this option. Because getTilt and this option refer to
     * different things, do not bind() the tilt property; doing so may yield
     * unpredictable effects.
     */
    tilt?: number;
    /**
     * The initial Map zoom level. Required. Valid values: Integers between
     * zero, and up to the supported maximum zoom level.
     */
    zoom?: number;
    /** The enabled/disabled state of the Zoom control. */
    zoomControl?: boolean;
    /** The display options for the Zoom control. */
    zoomControlOptions?: ZoomControlOptions;
  }

  /**
   * Identifiers for common MapTypes. Specify these by value, or by using the
   * constant's name. For example, 'satellite' or
   * google.maps.MapTypeId.SATELLITE.
   */
  enum MapTypeId {
    /**
       This map type displays a transparent layer of major streets on satellite
       images.
     */
    HYBRID,
    /** This map type displays a normal street map. */
    ROADMAP,
    /** This map type displays satellite images. */
    SATELLITE,
    /**
       This map type displays maps with physical features such as terrain and
       vegetation.
     */
    TERRAIN
  }

  /***** Controls *****/
  /** Options for the rendering of the map type control. */
  interface MapTypeControlOptions {
    /** IDs of map types to show in the control. */
    mapTypeIds?: (MapTypeId|string)[];
    /**
     * Position id. Used to specify the position of the control on the map.
     * The default position is TOP_RIGHT.
     */
    position?: ControlPosition;
    /** Style id. Used to select what style of map type control to display. */
    style?: MapTypeControlStyle;
  }

  enum MapTypeControlStyle {DEFAULT, DROPDOWN_MENU, HORIZONTAL_BAR}

  interface OverviewMapControlOptions {
    opened?: boolean;
  }

  type GestureHandlingOptions = 'cooperative'|'greedy'|'none'|'auto';

  /** Options for the rendering of the pan control. */
  interface PanControlOptions {
    /**
     * Position id. Used to specify the position of the control on the map.
     * The default position is TOP_LEFT.
     */
    position?: ControlPosition;
  }

  /** Options for the rendering of the rotate control. */
  interface RotateControlOptions {
    /**
     * Position id. Used to specify the position of the control on the map.
     * The default position is TOP_LEFT.
     */
    position?: ControlPosition;
  }

  /** Options for the rendering of the scale control. */
  interface ScaleControlOptions {
    /** Style id. Used to select what style of scale control to display. */
    style?: ScaleControlStyle;
  }

  enum ScaleControlStyle {DEFAULT}

  /** Options for the rendering of the Street View pegman control on the map. */
  interface StreetViewControlOptions {
    /**
     * Position id. Used to specify the position of the control on the map. The
     * default position is embedded within the navigation (zoom and pan)
     * controls. If this position is empty or the same as that specified in the
     * zoomControlOptions or panControlOptions, the Street View control will be
     * displayed as part of the navigation controls. Otherwise, it will be
     * displayed separately.
     */
    position?: ControlPosition;
  }

  /** Options for the rendering of the zoom control. */
  interface ZoomControlOptions {
    /**
     * Position id. Used to specify the position of the control on the map.
     * The default position is TOP_LEFT.
     */
    position?: ControlPosition;
    style?: ZoomControlStyle;
  }

  enum ZoomControlStyle {DEFAULT, LARGE, SMALL}

  /**
   * Identifiers used to specify the placement of controls on the map. Controls
   * are positioned relative to other controls in the same layout position.
   * Controls that are added first are positioned closer to the edge of the map.
   */
  enum ControlPosition {
    /** Elements are positioned in the center of the bottom row. */
    BOTTOM_CENTER,
    /**
     * Elements are positioned in the bottom left and flow towards the middle.
     * Elements are positioned to the right of the Google logo.
     */
    BOTTOM_LEFT,
    /**
     * Elements are positioned in the bottom right and flow towards the middle.
     * Elements are positioned to the left of the copyrights.
     */
    BOTTOM_RIGHT,
    /**
     * Elements are positioned on the left, above bottom-left elements, and flow
     * upwards.
     */
    LEFT_BOTTOM,
    /** Elements are positioned in the center of the left side. */
    LEFT_CENTER,
    /**
     * Elements are positioned on the left, below top-left elements, and flow
     * downwards.
     */
    LEFT_TOP,
    /**
     * Elements are positioned on the right, above bottom-right elements, and
     * flow upwards.
     */
    RIGHT_BOTTOM,
    /** Elements are positioned in the center of the right side. */
    RIGHT_CENTER,
    /**
       Elements are positioned on the right, below top-right elements, and flow
       downwards.
     */
    RIGHT_TOP,
    /**    Elements are positioned in the center of the top row. */
    TOP_CENTER,
    /** Elements are positioned in the top left and flow towards the middle. */
    TOP_LEFT,
    /** Elements are positioned in the top right and flow towards the middle. */
    TOP_RIGHT
  }

  type DrawingMode = 'Point'|'LineString'|'Polygon';

  /***** Data *****/
  class Data extends MVCObject {
    constructor(options?: Data.DataOptions);
    add(feature: Data.Feature|Data.FeatureOptions): Data.Feature;
    addGeoJson(geoJson: Object, options?: Data.GeoJsonOptions): Data.Feature[];
    contains(feature: Data.Feature): boolean;
    forEach(callback: (feature: Data.Feature) => void): void;
    getControlPosition(): ControlPosition;
    getControls(): DrawingMode[];
    getDrawingMode(): DrawingMode|null;
    getFeatureById(id: number|string): Data.Feature;
    getMap(): Map;
    getStyle(): Data.StylingFunction|Data.StyleOptions;
    loadGeoJson(
        url: string, options?: Data.GeoJsonOptions,
        callback?: (features: Data.Feature[]) => void): void;
    overrideStyle(feature: Data.Feature, style: Data.StyleOptions): void;
    remove(feature: Data.Feature): void;
    revertStyle(feature?: Data.Feature): void;
    setControlPosition(controlPosition: ControlPosition): void;
    setControls(controls: DrawingMode[]|null): void;
    setDrawingMode(drawingMode: DrawingMode|null): void;
    setMap(map: Map|null): void;
    setStyle(style: Data.StylingFunction|Data.StyleOptions): void;
    toGeoJson(callback: (feature: Object) => void): void;
  }

  module Data {
    interface DataOptions {
      controlPosition?: ControlPosition;
      controls?: DrawingMode[]|null;
      drawingMode?: DrawingMode|null;
      featureFactory?: (geometry: Data.Geometry) => Data.Feature;
      map?: Map;
      style?: Data.StylingFunction|Data.StyleOptions;
    }

    interface GeoJsonOptions {
      idPropertyName?: string;
    }

    interface StyleOptions {
      clickable?: boolean;
      cursor?: string;
      draggable?: boolean;
      editable?: boolean;
      fillColor?: string;
      fillOpacity?: number;
      icon?: string|Icon|Symbol;
      shape?: MarkerShape;
      strokeColor?: string;
      strokeOpacity?: number;
      strokeWeight?: number;
      title?: string;
      visible?: boolean;
      zIndex?: number;
    }

    type StylingFunction = (feature: Data.Feature) => Data.StyleOptions;

    class Feature {
      constructor(options?: Data.FeatureOptions);
      forEachProperty(callback: (value: any, name: string) => void): void;
      getGeometry(): Data.Geometry;
      getId(): number|string;
      getProperty(name: string): any;
      removeProperty(name: string): void;
      setGeometry(newGeometry: Data.Geometry|LatLng|LatLngLiteral): void;
      setProperty(name: string, newValue: any): void;
      toGeoJson(callback: (feature: Object) => void): void;
    }

    interface FeatureOptions {
      geometry?: Data.Geometry|LatLng|LatLngLiteral;
      id?: number|string;
      properties?: Object;
    }

    class Geometry {
      getType(): string;
      forEachLatLng(callback: (latLng: LatLng) => void): void;
    }

    class Point extends Data.Geometry {
      constructor(latLng: LatLng|LatLngLiteral);
      get(): LatLng;
    }

    class MultiPoint extends Data.Geometry {
      constructor(elements: (LatLng|LatLngLiteral)[]);
      getArray(): LatLng[];
      getAt(n: number): LatLng;
      getLength(): number;
    }

    class LineString extends Data.Geometry {
      constructor(elements: (LatLng|LatLngLiteral)[]);
      getArray(): LatLng[];
      getAt(n: number): LatLng;
      getLength(): number;
    }

    class MultiLineString extends Data.Geometry {
      constructor(elements: (Data.LineString|(LatLng|LatLngLiteral)[])[]);
      getArray(): Data.LineString[];
      getAt(n: number): Data.LineString;
      getLength(): number;
    }

    class LinearRing extends Data.Geometry {
      constructor(elements: (LatLng|LatLngLiteral)[]);
      getArray(): LatLng[];
      getAt(n: number): LatLng;
      getLength(): number;
    }

    class Polygon extends Data.Geometry {
      constructor(elements: (Data.LinearRing|(LatLng|LatLngLiteral)[])[]);
      getArray(): Data.LinearRing[];
      getAt(n: number): Data.LinearRing;
      getLength(): number;
    }

    class MultiPolygon extends Data.Geometry {
      constructor(elements: (Data.Polygon|
                             (LinearRing|(LatLng|LatLngLiteral)[])[])[]);
      getArray(): Data.Polygon[];
      getAt(n: number): Data.Polygon;
      getLength(): number;
    }

    class GeometryCollection extends Data.Geometry {
      constructor(elements: (Data.Geometry[]|LatLng[]|LatLngLiteral)[]);
      getArray(): Data.Geometry[];
      getAt(n: number): Data.Geometry;
      getLength(): number;
    }

    interface MouseEvent extends google.maps.MouseEvent {
      feature: Data.Feature;
    }

    interface AddFeatureEvent {
      feature: Data.Feature;
    }

    interface RemoveFeatureEvent {
      feature: Data.Feature;
    }

    interface SetGeometryEvent {
      feature: Data.Feature;
      newGeometry: Data.Geometry;
      oldGeometry: Data.Geometry;
    }

    interface SetPropertyEvent {
      feature: Data.Feature;
      name: string;
      newValue: any;
      oldValue: any;
    }

    interface RemovePropertyEvent {
      feature: Data.Feature;
      name: string;
      oldValue: any;
    }
  }

  /***** Overlays *****/

  type MarkerChangeOptionEventNames =
    "animation_changed" |
    "clickable_changed" |
    "cursor_changed" |
    "draggable_changed" |
    "flat_changed" |
    "icon_changed" |
    "position_changed" |
    "shape_changed" |
    "title_changed" |
    "visible_changed" |
    "zindex_changed";

  type MarkerMouseEventNames =
    "click" |
    "dblclick" |
    "drag" |
    "dragend" |
    "dragstart" |
    "mousedown" |
    "mouseout" |
    "mouseover" |
    "mouseup" |
    "rightclick";

  /**
   * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker Maps JavaScript API}
   */
  class Marker extends MVCObject {
    /**
     * The maximum default `z-index` that the API will assign to a marker. You
     * may set a higher `z-index` to bring a marker to the front.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.MAX_ZINDEX Maps JavaScript API}
     */
    static readonly MAX_ZINDEX: number;

    /**
     * Creates a marker with the options specified. If a map is specified, the
     * marker is added to the map upon construction. Note that the position must
     * be set for the marker to display.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.constructor Maps JavaScript API}
     */
    constructor(opts?: ReadonlyMarkerOptions);

    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getAnimation Maps JavaScript API} */
    getAnimation(): Animation | null | undefined;
    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getClickable Maps JavaScript API} */
    getClickable(): boolean;
    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getCursor Maps JavaScript API} */
    getCursor(): string | null | undefined;
    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getDraggable Maps JavaScript API} */
    getDraggable(): boolean | null | undefined;
    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getIcon Maps JavaScript API} */
    getIcon(): string | ReadonlyIcon | ReadonlySymbol | null | undefined;
    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getLabel Maps JavaScript API} */
    getLabel(): ReadonlyMarkerLabel | null | undefined;
    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getMap Maps JavaScript API} */
    getMap(): Map | StreetViewPanorama | null | undefined;
    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getOpacity Maps JavaScript API} */
    getOpacity(): number | null | undefined;
    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getPosition Maps JavaScript API} */
    getPosition(): LatLng  | null | undefined;
    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getShape Maps JavaScript API} */
    getShape(): MarkerShape | null | undefined;
    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getTitle Maps JavaScript API} */
    getTitle(): string | null | undefined;
    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getVisible Maps JavaScript API} */
    getVisible(): boolean;
    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getZIndex Maps JavaScript API} */
    getZIndex(): number | null | undefined;
    /**
     * Start an animation. Any ongoing animation will be cancelled. Currently
     * supported animations are: {@link Animation.BOUNCE BOUNCE},
     * {@link Animation.DROP DROP}. Passing in `null` will cause any animation
     * to stop.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setAnimation Maps JavaScript API}
     */
    setAnimation(animation: Animation | null): void;
    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setClickable Maps JavaScript API} */
    setClickable(flag: boolean): void;
    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setCursor Maps JavaScript API} */
    setCursor(cursor: string | null): void;
    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setDraggable Maps JavaScript API} */
    setDraggable(flag: boolean | null): void;
    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setIcon Maps JavaScript API} */
    setIcon(icon: string | ReadonlyIcon | ReadonlySymbol | null): void;
    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setLabel Maps JavaScript API} */
    setLabel(label: string | ReadonlyMarkerLabel | null): void;
    /**
     * Renders the marker on the specified map or panorama. If map is set to
     * `null`, the marker will be removed.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setMap Maps JavaScript API}
     */
    setMap(map: Map | StreetViewPanorama | null): void;
    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setOpacity Maps JavaScript API} */
    setOpacity(opacity: number | null): void;
    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setOptions Maps JavaScript API} */
    setOptions(options: ReadonlyMarkerOptions): void;
    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setPosition Maps JavaScript API} */
    setPosition(latlng: LatLng | ReadonlyLatLngLiteral | null): void;
    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setShape Maps JavaScript API} */
    setShape(shape: MarkerShape | null): void;
    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setTitle Maps JavaScript API} */
    setTitle(title: string | null): void;
    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setVisible Maps JavaScript API} */
    setVisible(visible: boolean): void;
    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setZIndex Maps JavaScript API} */
    setZIndex(zIndex: number | null): void;
    addListener(
      eventName: MarkerChangeOptionEventNames,
      handler: (this: Marker) => void,
    ): MapsEventListener;
    addListener(
      eventName: MarkerMouseEventNames,
      handler: (this: Marker,  event: MouseEvent) => void,
    ): MapsEventListener;
    /** @deprecated */
    addListener(
      eventName: string,
      handler: (this: Marker, ...args: any[]) => void,
    ): MapsEventListener;
  }

  /**
   * `MarkerOptions` object used to define the properties that can be set on a
   * {@link Marker}.
   * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions Maps JavaScript API}
   */
  interface MarkerOptions {
    /**
     * The offset from the marker's position to the tip of an InfoWindow that
     * has been opened with the marker as anchor.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.anchorPoint Maps JavaScript API}
     */
    anchorPoint?: Point;
    /**
     * Which animation to play when marker is added to a map.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.animation Maps JavaScript API}
     */
    animation?: Animation;
    /**
     * If `true`, the marker receives mouse and touch events.
     * @default true
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.clickable Maps JavaScript API}
     */
    clickable?: boolean;
    /**
     * If `false`, disables cross that appears beneath the marker when dragging.
     * @default true
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.crossOnDrag Maps JavaScript API}
     */
    crossOnDrag?: boolean;
    /**
     * Mouse cursor to show on hover.
     * @default 'pointer'
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.cursor Maps JavaScript API}
     * @see {@link CSSStyleDeclaration#cursor}
     */
    cursor?: string;
    /**
     * If `true`, the marker can be dragged.
     * @default false
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.draggable Maps JavaScript API}
     */
    draggable?: boolean;
    /**
     * Icon for the foreground. If a `string` is provided, it is treated as
     * though it were an {@link Icon} with the `string` as {@link Icon#url url}.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.icon Maps JavaScript API}
     */
    icon?: string | Icon | Symbol;
    /**
     * Adds a label to the marker. The label can either be a `string`, or a
     * {@link MarkerLabel} object.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.label Maps JavaScript API}
     */
    label?: string | MarkerLabel;
    /**
     * Map on which to display Marker.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.map Maps JavaScript API}
     */
    map?: Map | StreetViewPanorama;
    /**
     * The marker's opacity between 0.0 and 1.0.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.opacity Maps JavaScript API}
     * @default 1.0
     */
    opacity?: number;
    /**
     * Optimization renders many markers as a single static element. Optimized
     * rendering is enabled by default. Disable optimized rendering for animated
     * GIFs or PNGs, or when each marker must be rendered as a separate DOM
     * element (advanced usage only).
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.optimized Maps JavaScript API}
     */
    optimized?: boolean;
    /**
     * Marker position.
     * **Note that the `position` must be set for the marker to display.**
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.position Maps JavaScript API}
     */
    position?: LatLng | LatLngLiteral;
    /**
     * Image map region definition used for drag/click.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.shape Maps JavaScript API}
     */
    shape?: MarkerShape;
    /**
     * Rollover text.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.title Maps JavaScript API}
     * @see {@link HTMLElement#title}
     */
    title?: string;
    /**
     * If `true`, the marker is visible.
     * @default true
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.visible Maps JavaScript API}
     */
    visible?: boolean;
    /**
     * All markers are displayed on the map in order of their `zIndex`, with
     * higher values displaying in front of markers with lower values. By
     * default, markers are displayed according to their vertical position on
     * screen, with lower markers appearing in front of markers further up the
     * screen.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.zIndex Maps JavaScript API}
     */
    zIndex?: number;
  }

  /** @see {@link MarkerOptions} */
  interface ReadonlyMarkerOptions {
    /** @see {@link MarkerOptions#anchorPoint} */
    readonly anchorPoint?: Point;
    /** @see {@link MarkerOptions#animation} */
    readonly animation?: Animation;
    /** @see {@link MarkerOptions#clickable} */
    readonly clickable?: boolean;
    /** @see {@link MarkerOptions#crossOnDrag} */
    readonly crossOnDrag?: boolean;
    /** @see {@link MarkerOptions#cursor} */
    readonly cursor?: string;
    /** @see {@link MarkerOptions#draggable} */
    readonly draggable?: boolean;
    /** @see {@link MarkerOptions#icon} */
    readonly icon?: string | ReadonlyIcon | ReadonlySymbol;
    /** @see {@link MarkerOptions#label} */
    readonly label?: string | ReadonlyMarkerLabel;
    /** @see {@link MarkerOptions#map} */
    readonly map?: Map|StreetViewPanorama;
    /** @see {@link MarkerOptions#opacity} */
    readonly opacity?: number;
    /** @see {@link MarkerOptions#optimized} */
    readonly optimized?: boolean;
    /** @see {@link MarkerOptions#place} */
    readonly place?: Place;
    /** @see {@link MarkerOptions#position} */
    readonly position?: LatLng | ReadonlyLatLngLiteral;
    /** @see {@link MarkerOptions#shape} */
    readonly shape?: MarkerShape;
    /** @see {@link MarkerOptions#title} */
    readonly title?: string;
    /** @see {@link MarkerOptions#visible} */
    readonly visible?: boolean;
    /** @see {@link MarkerOptions#zIndex} */
    readonly zIndex?: number;
  }

  /**
   * A structure representing a Marker icon image.
   * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Icon Maps JavaScript API}
   */
  interface Icon {
    /**
     * The position at which to anchor an image in correspondence to the
     * location of the marker on the map. By default, the anchor is located
     * along the center point of the bottom of the image.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Icon.anchor Maps JavaScript API}
     */
    anchor?: Point;
    /**
     * The origin of the label relative to the top-left corner of the icon
     * image, if a label is supplied by the marker. By default, the origin is
     * located in the center point of the image.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Icon.labelOrigin Maps JavaScript API}
     */
    labelOrigin?: Point;
    /**
     * The position of the image within a sprite, if any.
     * @default new google.maps.Point(0, 0)
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Icon.origin Maps JavaScript API}
     */
    origin?: Point;
    /**
     * The size of the entire image after scaling, if any. Use this property to
     * stretch/shrink an image or a sprite.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Icon.scaledSize Maps JavaScript API}
     */
    scaledSize?: Size;
    /**
     * The display size of the sprite or image. When using sprites, you must
     * specify the sprite size. If the size is not provided, it will be set when
     * the image loads.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Icon.size Maps JavaScript API}
     */
    size?: Size;
    /**
     * The URL of the image or sprite sheet.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Icon.url Maps JavaScript API}
     */
    url: string;
  }

  /** @see {@link Icon} */
  interface ReadonlyIcon {
    /** @see {@link Icon#anchor} */
    readonly anchor?: Point;
    /** @see {@link Icon#labelOrigin} */
    readonly labelOrigin?: Point;
    /** @see {@link Icon#origin} */
    readonly origin?: Point;
    /** @see {@link Icon#scaledSize} */
    readonly scaledSize?: Size;
    /** @see {@link Icon#size} */
    readonly size?: Size;
    /** @see {@link Icon#url} */
    readonly url: string;
  }

  /**
   * These options specify the appearance of a marker label. A marker label is a
   * single character of text which will appear inside the marker. If you are
   * using it with a custom marker, you can reposition it with the
   * {@link Icon#labelOrigin labelOrigin} property in the {@link Icon} class.
   * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerLabel Maps JavaScript API}
   */
  interface MarkerLabel {
    /**
     * The color of the label text.
     * @default 'black'
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerLabel.color Maps JavaScript API}
     * @see {@link CSSStyleDeclaration#color}
     */
    color?: string;
    /**
     * The font family of the label text.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerLabel.fontFamily Maps JavaScript API}
     * @see {@link CSSStyleDeclaration#fontFamily}
     */
    fontFamily?: string;
    /**
     * The font size of the label text.
     * @default '14px'
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerLabel.fontSize Maps JavaScript API}
     * @see {@link CSSStyleDeclaration#fontSize}
     */
    fontSize?: string;
    /**
     * The font weight of the label text.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerLabel.fontWeight Maps JavaScript API}
     * @see {@link CSSStyleDeclaration#fontWeight}
     */
    fontWeight?: string;
    /**
     * The text to be displayed in the label.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerLabel.text Maps JavaScript API}
     */
    text: string;
  }

  /** @see {@link MarkerLabel} */
  interface ReadonlyMarkerLabel {
    /** @see {@link MarkerLabel#color} */
    color?: string;
    /** @see {@link MarkerLabel#fontFamily} */
    fontFamily?: string;
    /** @see {@link MarkerLabel#fontSize} */
    fontSize?: string;
    /** @see {@link MarkerLabel#fontWeight} */
    fontWeight?: string;
    /** @see {@link MarkerLabel#text} */
    text: string;
  }

  interface MarkerShapePolyCoords extends Array<number> {
    0: number;
    1: number;
    2: number;
    3: number;
  }

  interface MarkerShapeCircle {
    type: 'circle';
    /**
     * Coords is **[x1,y1,r]** where x1,y2 are the coordinates of the center of
     * the circle, and r is the radius of the circle.
     */
    coords: [number, number, number];
  }

  interface MarkerShapeRect {
    type: 'rect';
    /**
     * Coords is **[x1,y1,x2,y2]** where x1,y1 are the coordinates of the
     * upper-left corner of the rectangle and x2,y2 are the coordinates of the
     * lower-right coordinates of the rectangle.
     */
    coords: [number, number, number, number];
  }

  interface MarkerShapePoly {
    type: 'poly';
    /**
     * Coords is **[x1,y1,x2,y2...xn,yn]** where each x,y pair contains the
     * coordinates of one vertex of the polygon.
     */
    coords: MarkerShapePolyCoords;
  }

  /**
   * This object defines the clickable region of a marker image. The shape
   * consists of two properties — `type` and `coord` — which define the
   * non-transparent region of an image.
   * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerShape Maps JavaScript API}
   */
  type MarkerShape = MarkerShapeCircle | MarkerShapeRect | MarkerShapePoly;

  /**
   * Describes a symbol, which consists of a vector path with styling. A symbol
   * can be used as the icon of a marker, or placed on a polyline.
   * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol Maps JavaScript API}
   */
  interface Symbol {
    /**
     * The position of the symbol relative to the marker or polyline. The
     * coordinates of the symbol's path are translated left and up by the
     * anchor's x and y coordinates respectively. The position is expressed in
     * the same coordinate system as the symbol's path.
     * @default new google.maps.Point(0, 0)
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol.anchor Maps JavaScript API}
     */
    anchor?: Point;
    /**
     * The symbol's fill color. All CSS3 colors are supported except for
     * extended named colors. For symbol markers, this defaults to 'black'.
     * For symbols on polylines, this defaults to the stroke color of the
     * corresponding polyline.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol.fillColor Maps JavaScript API}
     */
    fillColor?: string;
    /**
     * The symbol's fill opacity.
     * @default 1
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol.fillOpacity Maps JavaScript API}
     */
    fillOpacity?: number;
    /**
     * The origin of the label relative to the origin of the path, if label is
     * supplied by the marker. The origin is expressed in the same coordinate
     * system as the symbol's path. This property is unused for symbols on
     * polylines.
     * @default new google.maps.Point(0, 0)
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol.labelOrigin Maps JavaScript API}
     */
    labelOrigin?: Point;
    /**
     * The symbol's path, which is a built-in symbol path, or a custom path
     * expressed using
     * {@link http://www.w3.org/TR/SVG/paths.html#PathData SVG path notation}.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol.path Maps JavaScript API}
     */
    path: SymbolPath | string;
    /**
     * The angle by which to rotate the symbol, expressed clockwise in degrees.
     * A symbol in an {@link IconSequence} where
     * {@link IconSequence#fixedRotation fixedRotation} is false is rotated
     * relative to the angle of the edge on which it lies.
     * @default 0
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol.rotation Maps JavaScript API}
     */
    rotation?: number;
    /**
     * The amount by which the symbol is scaled in size. For symbol markers,
     * this defaults to 1; after scaling, the symbol may be of any size. For
     * symbols on a polyline, this defaults to the stroke weight of the
     * polyline; after scaling, the symbol must lie inside a square 22 pixels in
     * size centered at the symbol's anchor.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol.scale Maps JavaScript API}
     */
    scale?: number;
    /**
     * The symbol's stroke color. All CSS3 colors are supported except for
     * extended named colors. For symbol markers, this defaults to 'black'. For
     * symbols on a polyline, this defaults to the stroke color of the polyline.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol.strokeColor Maps JavaScript API}
     */
    strokeColor?: string;
    /**
     * The symbol's stroke opacity. For symbol markers, this defaults to 1. For
     * symbols on a polyline, this defaults to the stroke opacity of the
     * polyline.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol.strokeOpacity Maps JavaScript API}
     */
    strokeOpacity?: number;
    /**
     * The symbol's stroke weight. Defaults to the scale of the symbol.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol.strokeWeight Maps JavaScript API}
     */
    strokeWeight?: number;
  }

  /** @see {@link Symbol} */
  interface ReadonlySymbol {
    /** @see {@link Symbol#anchor} */
    readonly anchor?: Point;
    /** @see {@link Symbol#fillColor} */
    readonly fillColor?: string;
    /** @see {@link Symbol#fillOpacity} */
    readonly fillOpacity?: number;
    /** @see {@link Symbol#labelOrigin} */
    readonly labelOrigin?: Point;
    /** @see {@link Symbol#path} */
    readonly path: SymbolPath | string;
    /** @see {@link Symbol#rotation} */
    readonly rotation?: number;
    /** @see {@link Symbol#scale} */
    readonly scale?: number;
    /** @see {@link Symbol#strokeColor} */
    readonly strokeColor?: string;
    /** @see {@link Symbol#strokeOpacity} */
    readonly strokeOpacity?: number;
    /** @see {@link Symbol#strokeWeight} */
    readonly strokeWeight?: number;
  }

  /**
   * Built-in symbol paths.
   * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#SymbolPath Maps JavaScript API}
   */
  enum SymbolPath {
    /**
     * A backward-pointing closed arrow.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#SymbolPath.BACKWARD_CLOSED_ARROW Maps JavaScript API}
     */
    BACKWARD_CLOSED_ARROW = 3,
    /**
     * A backward-pointing open arrow.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#SymbolPath.BACKWARD_OPEN_ARROW Maps JavaScript API}
     */
    BACKWARD_OPEN_ARROW = 4,
    /**
     * A circle.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#SymbolPath.CIRCLE Maps JavaScript API}
     */
    CIRCLE = 0,
    /**
     * A forward-pointing closed arrow.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#SymbolPath.FORWARD_CLOSED_ARROW Maps JavaScript API}
     */
    FORWARD_CLOSED_ARROW = 1,
    /**
     * A forward-pointing open arrow.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#SymbolPath.FORWARD_OPEN_ARROW Maps JavaScript API}
     */
    FORWARD_OPEN_ARROW = 2,
  }

  /**
   * Animations that can be played on a marker. Use the
   * {@link Marker#setAnimation setAnimation} method on Marker or the
   * {@link MarkerOptions#animation animation} option to play an animation.
   * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Animation Maps JavaScript API}
   */
  enum Animation {
    /**
     * Marker bounces until animation is stopped.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Animation.BOUNCE Maps JavaScript API}
     */
    BOUNCE = 1,
    /**
     * Marker falls from the top of the map ending with a small bounce.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Animation.DROP Maps JavaScript API}
     */
    DROP = 2,
  }

  /**
   * An overlay that looks like a bubble and is often connected to a marker.
   * This class extends MVCObject.
   */
  class InfoWindow extends MVCObject {
    /**
     * Creates an info window with the given options. An InfoWindow can be
     * placed on a map at a particular position or above a marker,
     * depending on what is specified in the options. Unless auto-pan is
     * disabled, an InfoWindow will pan the map to make itself visible
     * when it is opened. After constructing an InfoWindow, you must call
     * open to display it on the map. The user can click the close button
     * on the InfoWindow to remove it from the map, or the developer can
     * call close() for the same effect.
     */
    constructor(opts?: InfoWindowOptions);
    /** Closes this InfoWindow by removing it from the DOM structure. */
    close(): void;
    getContent(): string|Element;
    getPosition(): LatLng;
    getZIndex(): number;
    /**
     * Opens this InfoWindow on the given map. Optionally, an InfoWindow can be
     * associated with an anchor. In the core API, the only anchor is the Marker
     * class. However, an anchor can be any MVCObject that exposes a LatLng
     * position property and optionally a Point anchorPoint property for
     * calculating the pixelOffset (see InfoWindowOptions). The anchorPoint is
     * the offset from the anchor's position to the tip of the InfoWindow.
     */
    open(map?: Map|StreetViewPanorama, anchor?: MVCObject): void;
    setContent(content: string|Node): void;
    setOptions(options: InfoWindowOptions): void;
    setPosition(position: LatLng|LatLngLiteral): void;
    setZIndex(zIndex: number): void;
  }

  interface InfoWindowOptions {
    /**
     * Content to display in the InfoWindow. This can be an HTML element, a
     * plain-text string, or a string containing HTML. The InfoWindow will be
     * sized according to the content. To set an explicit size for the content,
     * set content to be a HTML element with that size.
     * @type {(string|Node)}
     */
    content?: string|Node;
    /**
     * Disable auto-pan on open. By default, the info window will pan the map so
     * that it is fully visible when it opens.
     */
    disableAutoPan?: boolean;
    /**
     * Maximum width of the infowindow, regardless of content's width.
     * This value is only considered if it is set before a call to open.
     * To change the maximum width when changing content, call close,
     * setOptions, and then open.
     */
    maxWidth?: number;
    /**
     * The offset, in pixels, of the tip of the info window from the point on
     * the map at whose geographical coordinates the info window is anchored. If
     * an InfoWindow is opened with an anchor, the pixelOffset will be
     * calculated from the anchor's anchorPoint property.
     */
    pixelOffset?: Size;
    /**
     * The LatLng at which to display this InfoWindow. If the InfoWindow is
     * opened with an anchor, the anchor's position will be used instead.
     */
    position?: LatLng|LatLngLiteral;
    /**
     * All InfoWindows are displayed on the map in order of their zIndex,
     * with higher values displaying in front of InfoWindows with lower values.
     * By default, InfoWindows are displayed according to their latitude,
     * with InfoWindows of lower latitudes appearing in front of InfoWindows at
     * higher latitudes. InfoWindows are always displayed in front of markers.
     */
    zIndex?: number;
  }

  class Polyline extends MVCObject {
    constructor(opts?: PolylineOptions);
    getDraggable(): boolean;
    getEditable(): boolean;
    getMap(): Map;
    getPath(): MVCArray<LatLng>;
    getVisible(): boolean;
    setDraggable(draggable: boolean): void;
    setEditable(editable: boolean): void;
    setMap(map: Map|null): void;
    setOptions(options: PolylineOptions): void;
    setPath(path: MVCArray<LatLng>|LatLng[]|LatLngLiteral[]): void;
    setVisible(visible: boolean): void;
  }

  interface PolylineOptions {
    /**
     * Indicates whether this Polyline handles mouse events. Defaults to true.
     */
    clickable?: boolean;
    /**
     * If set to true, the user can drag this shape over the map.
     * The geodesic property defines the mode of dragging. Defaults to false.
     */
    draggable?: boolean;
    /**
     * If set to true, the user can edit this shape by dragging the control
     * points shown at the vertices and on each segment. Defaults to false.
     */
    editable?: boolean;
    /**
     * When true, edges of the polygon are interpreted as geodesic and will
     * follow the curvature of the Earth. When false, edges of the polygon are
     * rendered as straight lines in screen space. Note that the shape of a
     * geodesic polygon may appear to change when dragged, as the dimensions are
     * maintained relative to the surface of the earth. Defaults to false.
     */
    geodesic?: boolean;
    /** The icons to be rendered along the polyline. */
    icons?: IconSequence[];
    /** Map on which to display Polyline. */
    map?: Map;
    /**
     * The ordered sequence of coordinates of the Polyline.
     * This path may be specified using either a simple array of LatLngs, or an
     * MVCArray of LatLngs. Note that if you pass a simple array, it will be
     * converted to an MVCArray Inserting or removing LatLngs in the MVCArray
     * will automatically update the polyline on the map.
     */
    path?: MVCArray<LatLng>|LatLng[]|LatLngLiteral[];
    /**
     * The stroke color. All CSS3 colors are supported except for extended
     * named colors.
     */
    strokeColor?: string;
    /** The stroke opacity between 0.0 and 1.0. */
    strokeOpacity?: number;
    /** The stroke width in pixels. */
    strokeWeight?: number;
    /** Whether this polyline is visible on the map. Defaults to true. */
    visible?: boolean;
    /** The zIndex compared to other polys. */
    zIndex?: number;
  }

  interface IconSequence {
    fixedRotation?: boolean;
    icon?: Symbol;
    offset?: string;
    repeat?: string;
  }

  class Polygon extends MVCObject {
    constructor(opts?: PolygonOptions);
    getDraggable(): boolean;
    getEditable(): boolean;
    getMap(): Map;
    /** Retrieves the first path. */
    getPath(): MVCArray<LatLng>;
    /** Retrieves the paths for this polygon. */
    getPaths(): MVCArray<MVCArray<LatLng>>;
    getVisible(): boolean;
    setDraggable(draggable: boolean): void;
    setEditable(editable: boolean): void;
    setMap(map: Map|null): void;
    setOptions(options: PolygonOptions): void;
    setPath(path: MVCArray<LatLng>|LatLng[]|LatLngLiteral[]): void;
    setPaths(paths: MVCArray<MVCArray<LatLng>>|MVCArray<LatLng>|LatLng[][]|
             LatLngLiteral[][]|LatLng[]|LatLngLiteral[]): void;
    setVisible(visible: boolean): void;
  }

  interface PolygonOptions {
    /**
     * Indicates whether this Polygon handles mouse events. Defaults to true.
     */
    clickable?: boolean;
    /**
     * If set to true, the user can drag this shape over the map.
     * The geodesic property defines the mode of dragging. Defaults to false.
     */
    draggable?: boolean;
    /**
     * If set to true, the user can edit this shape by dragging the control
     * points shown at the vertices and on each segment. Defaults to false.
     */
    editable?: boolean;
    /**
     * The fill color. All CSS3 colors are supported except for extended named
     * colors.
     */
    fillColor?: string;
    /** The fill opacity between 0.0 and 1.0 */
    fillOpacity?: number;
    /**
     * When true, edges of the polygon are interpreted as geodesic and will
     * follow the curvature of the Earth. When false, edges of the polygon are
     * rendered as straight lines in screen space. Note that the shape of a
     * geodesic polygon may appear to change when dragged, as the dimensions are
     * maintained relative to the surface of the earth. Defaults to false.
     */
    geodesic?: boolean;
    /** Map on which to display Polygon. */
    map?: Map;
    /**
     * The ordered sequence of coordinates that designates a closed loop. Unlike
     * polylines, a polygon may consist of one or more paths. As a result, the
     * paths property may specify one or more arrays of LatLng coordinates.
     * Paths are closed automatically; do not repeat the first vertex of the
     * path as the last vertex. Simple polygons may be defined using a single
     * array of LatLngs. More complex polygons may specify an array of arrays.
     * Any simple arrays are converted into MVCArrays. Inserting or removing
     * LatLngs from the MVCArray will automatically update the polygon on the
     * map.
     */
    paths?: MVCArray<MVCArray<LatLng>>|MVCArray<LatLng>|LatLng[][]|
        LatLngLiteral[][]|LatLng[]|LatLngLiteral[];
    /**
     * The stroke color.
     * All CSS3 colors are supported except for extended named colors.
     */
    strokeColor?: string;
    /** The stroke opacity between 0.0 and 1.0 */
    strokeOpacity?: number;
    /**
     * The stroke position. Defaults to CENTER.
     * This property is not supported on Internet Explorer 8 and earlier.
     */
    strokePosition?: StrokePosition;
    /** The stroke width in pixels. */
    strokeWeight?: number;
    /** Whether this polygon is visible on the map. Defaults to true. */
    visible?: boolean;
    /** The zIndex compared to other polys. */
    zIndex?: number;
  }

  interface PolyMouseEvent extends MouseEvent {
    edge?: number;
    path?: number;
    vertex?: number;
  }

  class Rectangle extends MVCObject {
    constructor(opts?: RectangleOptions);
    getBounds(): LatLngBounds;
    getDraggable(): boolean;
    getEditable(): boolean;
    getMap(): Map;
    getVisible(): boolean;
    setBounds(bounds: LatLngBounds|LatLngBoundsLiteral): void;
    setDraggable(draggable: boolean): void;
    setEditable(editable: boolean): void;
    setMap(map: Map|null): void;
    setOptions(options: RectangleOptions): void;
    setVisible(visible: boolean): void;
  }

  interface RectangleOptions {
    bounds?: LatLngBounds|LatLngBoundsLiteral;
    clickable?: boolean;
    draggable?: boolean;
    editable?: boolean;
    fillColor?: string;
    fillOpacity?: number;
    map?: Map;
    strokeColor?: string;
    strokeOpacity?: number;
    strokePosition?: StrokePosition;
    strokeWeight?: number;
    visible?: boolean;
    zIndex?: number;
  }

  /** A circle on the Earth's surface; also known as a "spherical cap". */
  class Circle extends MVCObject {
    /**
     * Create a circle using the passed CircleOptions, which specify the
     * center, radius, and style.
     */
    constructor(opts?: CircleOptions);
    /** Gets the LatLngBounds of this Circle. */
    getBounds(): LatLngBounds;
    /** Returns the center of this circle. */
    getCenter(): LatLng;
    /** Returns whether this circle can be dragged by the user. */
    getDraggable(): boolean;
    /** Returns whether this circle can be edited by the user. */
    getEditable(): boolean;
    /** Returns the map on which this circle is displayed. */
    getMap(): Map;
    /** Returns the radius of this circle (in meters). */
    getRadius(): number;
    /** Returns whether this circle is visible on the map. */
    getVisible(): boolean;
    /** Sets the center of this circle. */
    setCenter(center: LatLng|LatLngLiteral): void;
    /** If set to true, the user can drag this circle over the map. */
    setDraggable(draggable: boolean): void;
    /**
     * If set to true, the user can edit this circle by dragging the control
     * points shown at the center and around the circumference of the circle.
     */
    setEditable(editable: boolean): void;
    /**
     * Renders the circle on the specified map. If map is set to null, the
     * circle will be removed.
     */
    setMap(map: Map|null): void;
    setOptions(options: CircleOptions): void;
    /** Sets the radius of this circle (in meters). */
    setRadius(radius: number): void;
    /** Hides this circle if set to false. */
    setVisible(visible: boolean): void;
  }

  interface CircleOptions {
    /** The center */
    center?: LatLng|LatLngLiteral;
    /** Indicates whether this Circle handles mouse events. Defaults to true. */
    clickable?: boolean;
    /**
     * If set to true, the user can drag this circle over the map. Defaults to
     * false.
     */
    draggable?: boolean;
    /**
     * If set to true, the user can edit this circle by dragging the control
     * points shown at the center and around the circumference of the circle.
     * Defaults to false.
     */
    editable?: boolean;
    /**
     * The fill color. All CSS3 colors are supported except for extended named
     * colors.
     */
    fillColor?: string;
    /** The fill opacity between 0.0 and 1.0 */
    fillOpacity?: number;
    /** Map on which to display Circle. */
    map?: Map;
    /** The radius in meters on the Earth's surface */
    radius?: number;
    /**
     * The stroke color. All CSS3 colors are supported except for extended
     * named colors.
     */
    strokeColor?: string;
    /** The stroke opacity between 0.0 and 1.0 */
    strokeOpacity?: number;
    /**
     * The stroke position. Defaults to CENTER. This property is not supported
     * on Internet Explorer 8 and earlier.
     */
    strokePosition?: StrokePosition;
    /** The stroke width in pixels. */
    strokeWeight?: number;
    /** Whether this circle is visible on the map. Defaults to true. */
    visible?: boolean;
    /** The zIndex compared to other polys. */
    zIndex?: number;
  }

  interface CircleLiteral extends CircleOptions {
    /** The center of the Circle. */
    center?: LatLng|LatLngLiteral;
    /** The radius in meters on the Earth's surface. */
    radius?: number;
  }

  /**
   * The possible positions of the stroke on a polygon.
   */
  enum StrokePosition {
    /**
     * The stroke is centered on the polygon's path, with half the stroke inside
     * the polygon and half the stroke outside the polygon.
     */
    CENTER,
    /** The stroke lies inside the polygon. */
    INSIDE,
    /** The stroke lies outside the polygon. */
    OUTSIDE
  }

  class GroundOverlay extends MVCObject {
    constructor(
        url: string, bounds: LatLngBounds|LatLngBoundsLiteral,
        opts?: GroundOverlayOptions);
    getBounds(): LatLngBounds;
    getMap(): Map;
    getOpacity(): number;
    getUrl(): string;
    setMap(map: Map|null): void;
    setOpacity(opacity: number): void;
  }

  interface GroundOverlayOptions {
    clickable?: boolean;
    map?: Map;
    opacity?: number;
  }

  class OverlayView extends MVCObject {
    draw(): void;
    getMap(): Map|StreetViewPanorama;
    getPanes(): MapPanes;
    getProjection(): MapCanvasProjection;
    onAdd(): void;
    onRemove(): void;
    setMap(map: Map|StreetViewPanorama|null): void;
  }

  interface MapPanes {
    floatPane: Element;
    floatShadow: Element;
    mapPane: Element;
    markerLayer: Element;
    overlayImage: Element;
    overlayLayer: Element;
    overlayMouseTarget: Element;
    overlayShadow: Element;
  }

  class MapCanvasProjection extends MVCObject {
    fromContainerPixelToLatLng(pixel: Point, nowrap?: boolean): LatLng;
    fromDivPixelToLatLng(pixel: Point, nowrap?: boolean): LatLng;
    fromLatLngToContainerPixel(latLng: LatLng): Point;
    fromLatLngToDivPixel(latLng: LatLng): Point;
    getWorldWidth(): number;
  }

  /***** Services *****/
  class Geocoder {
    geocode(
        request: GeocoderRequest,
        callback: (results: GeocoderResult[], status: GeocoderStatus) => void):
        void;
  }

  interface GeocoderRequest {
    address?: string;
    bounds?: LatLngBounds|LatLngBoundsLiteral;
    componentRestrictions?: GeocoderComponentRestrictions;
    location?: LatLng|LatLngLiteral;
    placeId?: string;
    region?: string;
  }

  interface GeocoderComponentRestrictions {
    administrativeArea?: string;
    country?: string|string[];
    locality?: string;
    postalCode?: string;
    route?: string;
  }

  enum GeocoderStatus {
    ERROR,
    INVALID_REQUEST,
    OK,
    OVER_QUERY_LIMIT,
    REQUEST_DENIED,
    UNKNOWN_ERROR,
    ZERO_RESULTS
  }

  interface GeocoderResult {
    address_components: GeocoderAddressComponent[];
    formatted_address: string;
    geometry: GeocoderGeometry;
    partial_match: boolean;
    place_id: string;
    postcode_localities: string[];
    types: string[];
  }

  interface GeocoderAddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
  }

  interface GeocoderGeometry {
    bounds: LatLngBounds;
    location: LatLng;
    location_type: GeocoderLocationType;
    viewport: LatLngBounds;
  }

  enum GeocoderLocationType {
    APPROXIMATE,
    GEOMETRIC_CENTER,
    RANGE_INTERPOLATED,
    ROOFTOP
  }

  class DirectionsRenderer extends MVCObject {
    constructor(opts?: DirectionsRendererOptions);
    getDirections(): DirectionsResult;
    getMap(): Map;
    getPanel(): Element;
    getRouteIndex(): number;
    setDirections(directions: DirectionsResult): void;
    setMap(map: Map|null): void;
    setOptions(options: DirectionsRendererOptions): void;
    setPanel(panel: Element): void;
    setRouteIndex(routeIndex: number): void;
  }

  interface DirectionsRendererOptions {
    directions?: DirectionsResult;
    draggable?: boolean;
    hideRouteList?: boolean;
    infoWindow?: InfoWindow;
    map?: Map;
    markerOptions?: MarkerOptions;
    panel?: Element;
    polylineOptions?: PolylineOptions;
    preserveViewport?: boolean;
    routeIndex?: number;
    suppressBicyclingLayer?: boolean;
    suppressInfoWindows?: boolean;
    suppressMarkers?: boolean;
    suppressPolylines?: boolean;
  }

  class DirectionsService {
    route(
        request: DirectionsRequest,
        callback: (result: DirectionsResult, status: DirectionsStatus) => void):
        void;
  }

  /** A directions query to be sent to the DirectionsService. */
  interface DirectionsRequest {
    /**
     * If true, instructs the Directions service to avoid ferries where
     * possible. Optional.
     */
    avoidFerries?: boolean;
    /**
     * If true, instructs the Directions service to avoid highways where
     * possible. Optional.
     */
    avoidHighways?: boolean;
    /**
     * If true, instructs the Directions service to avoid toll roads where
     * possible. Optional.
     */
    avoidTolls?: boolean;
    /**
     * Location of destination. This can be specified as either a string to be
     * geocoded, or a LatLng, or a Place. Required.
     */
    destination?: string|LatLng|LatLngLiteral|Place;
    /** Deprecated. Use drivingOptions field instead */
    durationInTraffic?: boolean;
    /**
     * Settings that apply only to requests where travelMode is DRIVING. This
     * object will have no effect for other travel modes.
     */
    drivingOptions?: DrivingOptions;
    /**
     * If set to true, the DirectionService will attempt to re-order the
     * supplied intermediate waypoints to minimize overall cost of the route. If
     * waypoints are optimized, inspect DirectionsRoute.waypoint_order in the
     * response to determine the new ordering.
     */
    optimizeWaypoints?: boolean;
    /**
     * Location of origin. This can be specified as either a string to be
     * geocoded, or a LatLng, or a Place. Required.
     */
    origin?: string|LatLng|LatLngLiteral|Place;
    /** Whether or not route alternatives should be provided. Optional. */
    provideRouteAlternatives?: boolean;
    /** Region code used as a bias for geocoding requests. Optional. */
    region?: string;
    /**
     * Settings that apply only to requests where travelMode is TRANSIT. This
     * object will have no effect for other travel modes.
     */
    transitOptions?: TransitOptions;
    /** Type of routing requested. Required. */
    travelMode?: TravelMode;
    /**
     * Preferred unit system to use when displaying distance. Defaults to the
     * unit system used in the country of origin.
     */
    unitSystem?: UnitSystem;
    /**
     * Array of intermediate waypoints. Directions will be calculated from the
     * origin to the destination by way of each waypoint in this array. The
     * maximum allowed waypoints is 8, plus the origin, and destination. Premium
     * Plan customers are allowed 23 waypoints, plus the origin, and
     * destination. Waypoints are not supported for transit directions.
     * Optional.
     */
    waypoints?: DirectionsWaypoint[];
  }

  enum TravelMode {BICYCLING, DRIVING, TRANSIT, WALKING}

  enum UnitSystem {IMPERIAL, METRIC}

  interface TransitOptions {
    arrivalTime?: Date;
    departureTime?: Date;
    modes?: TransitMode[];
    routingPreference?: TransitRoutePreference;
  }

  enum TransitMode {BUS, RAIL, SUBWAY, TRAIN, TRAM}

  enum TransitRoutePreference {FEWER_TRANSFERS, LESS_WALKING}

  interface TransitFare {}

  interface DrivingOptions {
    departureTime: Date;
    trafficModel?: TrafficModel
  }

  enum TrafficModel {BEST_GUESS, OPTIMISTIC, PESSIMISTIC}

  /**
   * A DirectionsWaypoint represents a location between origin and destination
   * through which the trip should be routed.
   * @see {@link https://developers.google.com/maps/documentation/javascript/reference/directions#DirectionsWaypoint Maps JavaScript API}
   */
  interface DirectionsWaypoint {
    /**
     * Waypoint location. Can be an address string, a {@link LatLng}, or a
     * {@link Place}.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/directions#DirectionsWaypoint.location Maps JavaScript API}
     */
    location?: string | LatLng | Place;
    /**
     * If `true`, indicates that this waypoint is a stop between the origin and
     * destination. This has the effect of splitting the route into two legs. If
     * `false`, indicates that the route should be biased to go through this
     * waypoint, but not split into two legs. This is useful if you want to
     * create a route in response to the user dragging waypoints on a map.
     * @default true
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/directions#DirectionsWaypoint.stopover Maps JavaScript API}
     */
    stopover?: boolean;
  }

  enum DirectionsStatus {
    INVALID_REQUEST,
    MAX_WAYPOINTS_EXCEEDED,
    NOT_FOUND,
    OK,
    OVER_QUERY_LIMIT,
    REQUEST_DENIED,
    UNKNOWN_ERROR,
    ZERO_RESULTS
  }

  interface DirectionsResult {
    geocoded_waypoints: DirectionsGeocodedWaypoint[];
    routes: DirectionsRoute[];
  }

  /**
   * A single geocoded waypoint.
   */
  interface DirectionsGeocodedWaypoint {
    partial_match: boolean;
    place_id: string;
    types: string[];
  }

  /**
   * A single route containing a set of legs in a DirectionsResult.
   * Note that though this object is "JSON-like," it is not strictly JSON,
   * as it directly and indirectly includes LatLng objects.
   */
  interface DirectionsRoute {
    /** The bounds for this route. */
    bounds: LatLngBounds;
    /** Copyrights text to be displayed for this route. */
    copyrights: string;
    /**
     * The total fare for the whole transit trip. Only applicable to transit
     * requests.
     */
    fare: TransitFare;
    /**
     * An array of DirectionsLegs, each of which contains information about the
     * steps of which it is composed. There will be one leg for each stopover
     * waypoint or destination specified. So a route with no stopover waypoints
     * will contain one DirectionsLeg and a route with one stopover waypoint
     * will contain two.
     */
    legs: DirectionsLeg[];
    /**
     * An array of LatLngs representing the entire course of this route. The
     * path is simplified in order to make it suitable in contexts where a small
     * number of vertices is required (such as Static Maps API URLs).
     */
    overview_path: LatLng[];
    /**
     * An encoded polyline representation of the route in overview_path.
     * This polyline is an approximate (smoothed) path of the resulting
     * directions.
     */
    overview_polyline: string;
    /** Warnings to be displayed when showing these directions. */
    warnings: string[];
    /**
     * If optimizeWaypoints was set to true, this field will contain the
     * re-ordered permutation of the input waypoints. For example, if the input
     * was: Origin: Los Angeles Waypoints: Dallas, Bangor, Phoenix Destination:
     * New York and the optimized output was ordered as follows: Origin: Los
     * Angeles Waypoints: Phoenix, Dallas, Bangor Destination: New York then
     * this field will be an Array containing the values [2, 0, 1]. Note that
     * the numbering of waypoints is zero-based. If any of the input waypoints
     * has stopover set to false, this field will be empty, since route
     * optimization is not available for such queries.
     */
    waypoint_order: number[];
  }

  interface DirectionsLeg {
    arrival_time: Time;
    departure_time: Time;
    distance: Distance;
    duration: Duration;
    duration_in_traffic: Duration;
    end_address: string;
    end_location: LatLng;
    start_address: string;
    start_location: LatLng;
    steps: DirectionsStep[];
    via_waypoints: LatLng[];
  }

  interface DirectionsStep {
    distance: Distance;
    duration: Duration;
    end_location: LatLng;
    instructions: string;
    path: LatLng[];
    start_location: LatLng;
    steps: DirectionsStep;
    transit: TransitDetails;
    travel_mode: TravelMode;
  }

  interface Distance {
    text: string;
    value: number;
  }

  interface Duration {
    text: string;
    value: number;
  }

  interface Time {
    text: string;
    time_zone: string;
    value: Date;
  }

  interface TransitDetails {
    arrival_stop: TransitStop;
    arrival_time: Time;
    departure_stop: TransitStop;
    departure_time: Time;
    headsign: string;
    headway: number;
    line: TransitLine;
    num_stops: number;
  }

  interface TransitStop {
    location: LatLng;
    name: string;
  }

  interface TransitLine {
    agencies: TransitAgency[];
    color: string;
    icon: string;
    name: string;
    short_name: string;
    text_color: string;
    url: string;
    vehicle: TransitVehicle;
  }

  interface TransitAgency {
    name: string;
    phone: string;
    url: string;
  }

  interface TransitVehicle {
    icon: string;
    local_icon: string;
    name: string;
    type: VehicleType;
  }

  enum VehicleType {
    BUS,
    CABLE_CAR,
    COMMUTER_TRAIN,
    FERRY,
    FUNICULAR,
    GONDOLA_LIFT,
    HEAVY_RAIL,
    HIGH_SPEED_TRAIN,
    INTERCITY_BUS,
    METRO_RAIL,
    MONORAIL,
    OTHER,
    RAIL,
    SHARE_TAXI,
    SUBWAY,
    TRAM,
    TROLLEYBUS
  }

  class ElevationService {
    getElevationAlongPath(
        request: PathElevationRequest,
        callback:
            (results: ElevationResult[], status: ElevationStatus) => void):
        void;
    getElevationForLocations(
        request: LocationElevationRequest,
        callback:
            (results: ElevationResult[], status: ElevationStatus) => void):
        void;
  }

  interface LocationElevationRequest {
    locations: LatLng[];
  }

  interface PathElevationRequest {
    path?: LatLng[];
    samples?: number;
  }

  interface ElevationResult {
    elevation: number;
    location: LatLng;
    resolution: number;
  }

  enum ElevationStatus {
    INVALID_REQUEST,
    OK,
    OVER_QUERY_LIMIT,
    REQUEST_DENIED,
    UNKNOWN_ERROR
  }

  class MaxZoomService {
    getMaxZoomAtLatLng(
        latlng: LatLng|LatLngLiteral,
        callback: (result: MaxZoomResult) => void): void;
  }

  interface MaxZoomResult {
    status: MaxZoomStatus;
    zoom: number;
  }

  enum MaxZoomStatus {ERROR, OK}

  class DistanceMatrixService {
    getDistanceMatrix(
        request: DistanceMatrixRequest,
        callback:
            (response: DistanceMatrixResponse,
             status: DistanceMatrixStatus) => void): void;
  }

  interface DistanceMatrixRequest {
    avoidFerries?: boolean;
    avoidHighways?: boolean;
    avoidTolls?: boolean;
    destinations?: string[]|LatLng[]|LatLngLiteral[]|Place[];
    drivingOptions?: DrivingOptions;
    durationInTraffic?: boolean;
    origins?: string[]|LatLng[]|LatLngLiteral[]|Place[];
    region?: string;
    transitOptions?: TransitOptions;
    travelMode?: TravelMode;
    unitSystem?: UnitSystem;
  }

  interface DistanceMatrixResponse {
    destinationAddresses: string[];
    originAddresses: string[];
    rows: DistanceMatrixResponseRow[];
  }

  interface DistanceMatrixResponseRow {
    elements: DistanceMatrixResponseElement[];
  }

  interface DistanceMatrixResponseElement {
    distance: Distance;
    duration: Duration;
    duration_in_traffic: Duration;
    fare: TransitFare;
    status: DistanceMatrixElementStatus;
  }

  enum DistanceMatrixStatus {
    INVALID_REQUEST,
    MAX_DIMENSIONS_EXCEEDED,
    MAX_ELEMENTS_EXCEEDED,
    OK,
    OVER_QUERY_LIMIT,
    REQUEST_DENIED,
    UNKNOWN_ERROR
  }

  enum DistanceMatrixElementStatus {NOT_FOUND, OK, ZERO_RESULTS}

  /***** Save to Google Maps *****/
  interface Attribution {
    iosDeepLinkId?: string;
    source?: string;
    webUrl?: string;
  }

  interface Place {
    location?: LatLng|LatLngLiteral;
    placeId?: string;
    query?: string;
  }

  class SaveWidget {
    constructor(container: Node, opts?: SaveWidgetOptions);
    getAttribution(): Attribution;
    getPlace(): Place;
    setAttribution(attribution: Attribution): void;
    setOptions(opts: SaveWidgetOptions): void;
    setPlace(place: Place): void;
  }

  interface SaveWidgetOptions {
    attribution?: Attribution;
    place?: Place;
  }

  /***** Map Types *****/
  interface MapType {
    getTile(tileCoord: Point, zoom: number, ownerDocument: Document): Element;
    releaseTile(tile: Element): void;
    alt?: string;
    maxZoom?: number;
    minZoom?: number;
    name?: string;
    projection?: Projection;
    radius?: number;
    tileSize?: Size;
  }

  class MapTypeRegistry extends MVCObject {
    constructor();
    set(id: string, mapType: MapType): void;
  }

  interface Projection {
    fromLatLngToPoint(latLng: LatLng, point?: Point): Point;
    fromPointToLatLng(pixel: Point, noWrap?: boolean): LatLng;
  }

  class ImageMapType extends MVCObject implements MapType {
    constructor(opts: ImageMapTypeOptions);
    getOpacity(): number;
    getTile(tileCoord: Point, zoom: number, ownerDocument: Document): Element;
    releaseTile(tile: Element): void;
    setOpacity(opacity: number): void;
    alt: string;
    maxZoom: number;
    minZoom: number;
    name: string;
    projection: Projection;
    radius: number;
    tileSize: Size;
  }

  interface ImageMapTypeOptions {
    alt?: string;
    getTileUrl(tileCoord: Point, zoom: number): string;
    maxZoom?: number;
    minZoom?: number;
    name?: string;
    opacity?: number;
    tileSize: Size;
  }

  class StyledMapType extends MVCObject implements MapType {
    constructor(styles: MapTypeStyle[], options?: StyledMapTypeOptions);
    getTile(tileCoord: Point, zoom: number, ownerDocument: Document): Element;
    releaseTile(tile: Element): void;
    alt: string;
    maxZoom: number;
    minZoom: number;
    name: string;
    projection: Projection;
    radius: number;
    tileSize: Size;
  }

  interface StyledMapTypeOptions {
    alt?: string;
    maxZoom?: number;
    minZoom?: number;
    name?: string;
  }

  interface MapTypeStyle {
    elementType?: MapTypeStyleElementType;
    featureType?: MapTypeStyleFeatureType;
    stylers?: MapTypeStyler[];
  }

  type MapTypeStyleFeatureType =
      'all'|'administrative'|'administrative.country'|
      'administrative.land_parcel'|'administrative.locality'|
      'administrative.neighborhood'|'administrative.province'|'landscape'|
      'landscape.man_made'|'landscape.natural'|'landscape.natural.landcover'|
      'landscape.natural.terrain'|'poi'|'poi.attraction'|'poi.business'|
      'poi.government'|'poi.medical'|'poi.park'|'poi.place_of_worship'|
      'poi.school'|'poi.sports_complex'|'road'|'road.arterial'|'road.highway'|
      'road.highway.controlled_access'|'road.local'|'transit'|'transit.line'|
      'transit.station'|'transit.station.airport'|'transit.station.bus'|
      'transit.station.rail'|'water';

  type MapTypeStyleElementType =
      'all'|'geometry'|'geometry.fill'|'geometry.stroke'|'labels'|'labels.icon'|
      'labels.text'|'labels.text.fill'|'labels.text.stroke';

  interface MapTypeStyler {
    color?: string;
    gamma?: number;
    hue?: string;
    invert_lightness?: boolean;
    lightness?: number;
    saturation?: number;
    visibility?: string;
    weight?: number;
  }

  /***** Layers *****/
  class BicyclingLayer extends MVCObject {
    constructor();
    getMap(): Map;
    setMap(map: Map|null): void;
  }

  class FusionTablesLayer extends MVCObject {
    constructor(options: FusionTablesLayerOptions);
    getMap(): Map;
    setMap(map: Map|null): void;
    setOptions(options: FusionTablesLayerOptions): void;
  }

  interface FusionTablesLayerOptions {
    clickable?: boolean;
    heatmap?: FusionTablesHeatmap;
    map?: Map;
    query?: FusionTablesQuery;
    styles?: FusionTablesStyle[];
    suppressInfoWindows?: boolean;
  }

  interface FusionTablesQuery {
    from?: string;
    limit?: number;
    offset?: number;
    orderBy?: string;
    select?: string;
    where?: string;
  }

  interface FusionTablesStyle {
    markerOptions?: FusionTablesMarkerOptions;
    polygonOptions?: FusionTablesPolygonOptions;
    polylineOptions?: FusionTablesPolylineOptions;
    where?: string;
  }

  interface FusionTablesHeatmap {
    enabled: boolean;
  }

  interface FusionTablesMarkerOptions {
    iconName: string;
  }

  interface FusionTablesPolygonOptions {
    fillColor?: string;
    fillOpacity?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeWeight?: number;
  }

  interface FusionTablesPolylineOptions {
    strokeColor?: string;
    strokeOpacity?: number;
    strokeWeight?: number;
  }

  interface FusionTablesMouseEvent {
    infoWindowHtml?: string;
    latLng?: LatLng;
    pixelOffset?: Size;
    row?: Object;  // Object<FusionTablesCell>
  }

  interface FusionTablesCell {
    columnName?: string;
    value?: string;
  }

  class KmlLayer extends MVCObject {
    constructor(opts?: KmlLayerOptions);
    getDefaultViewport(): LatLngBounds;
    getMap(): Map;
    getMetadata(): KmlLayerMetadata;
    getStatus(): KmlLayerStatus;
    getUrl(): string;
    getZIndex(): number;
    setMap(map: Map|null): void;
    setUrl(url: string): void;
    setZIndex(zIndex: number): void;
    setOptions(options: KmlLayerOptions): void;
  }

  interface KmlLayerOptions {
    clickable?: boolean;
    map?: Map;
    preserveViewport?: boolean;
    screenOverlays?: boolean;
    suppressInfoWindows?: boolean;
    url?: string;
    zIndex?: number;
  }

  interface KmlLayerMetadata {
    author: KmlAuthor;
    description: string;
    hasScreenOverlays: boolean;
    name: string;
    snippet: string;
  }

  enum KmlLayerStatus {
    DOCUMENT_NOT_FOUND,
    DOCUMENT_TOO_LARGE,
    FETCH_ERROR,
    INVALID_DOCUMENT,
    INVALID_REQUEST,
    LIMITS_EXCEEDED,
    OK,
    TIMED_OUT,
    UNKNOWN
  }

  interface KmlMouseEvent {
    featureData: KmlFeatureData;
    latLng: LatLng;
    pixelOffset: Size;
  }

  interface KmlFeatureData {
    author: KmlAuthor;
    description: string;
    id: string;
    infoWindowHtml: string;
    name: string;
    snippet: string;
  }

  interface KmlAuthor {
    email: string;
    name: string;
    uri: string;
  }

  class TrafficLayer extends MVCObject {
    constructor(opts?: TrafficLayerOptions);
    getMap(): Map;
    setMap(map: Map|null): void;
    setOptions(options: TrafficLayerOptions): void;
  }

  interface TrafficLayerOptions {
    autoRefresh?: boolean;
    map?: Map;
  }

  class TransitLayer extends MVCObject {
    constructor();
    getMap(): void;
    setMap(map: Map|null): void;
  }

  /***** Street View *****/
  class StreetViewPanorama extends MVCObject {
    constructor(container: Element, opts?: StreetViewPanoramaOptions);
    controls: MVCArray<Node>[];
    getLinks(): StreetViewLink[];
    getLocation(): StreetViewLocation;
    getMotionTracking(): boolean;
    getPano(): string;
    getPhotographerPov(): StreetViewPov;
    getPosition(): LatLng;
    getPov(): StreetViewPov;
    getStatus(): StreetViewStatus;
    getVisible(): boolean;
    getZoom(): number;
    registerPanoProvider(provider: (input: string) => StreetViewPanoramaData):
        void;
    setLinks(links: Array<StreetViewLink>): void;
    setMotionTracking(motionTracking: boolean): void;
    setOptions(options: StreetViewPanoramaOptions): void;
    setPano(pano: string): void;
    setPosition(latLng: LatLng|LatLngLiteral): void;
    setPov(pov: StreetViewPov): void;
    setVisible(flag: boolean): void;
    setZoom(zoom: number): void;
  }

  /** Options for the rendering of the fullscreen control. */
  interface FullscreenControlOptions {
    /**
     * Position id. Used to specify the position of the control on the map.
     * The default position is RIGHT_TOP.
     */
    position?: ControlPosition;
  }

  interface StreetViewPanoramaOptions {
    addressControl?: boolean;
    addressControlOptions?: StreetViewAddressControlOptions;
    clickToGo?: boolean;
    disableDefaultUI?: boolean;
    disableDoubleClickZoom?: boolean;
    enableCloseButton?: boolean;
    fullscreenControl?: boolean;
    fullscreenControlOptions?: FullscreenControlOptions;
    imageDateControl?: boolean;
    linksControl?: boolean;
    motionTracking?: boolean;
    motionTrackingControl?: boolean;
    motionTrackingControlOptions?: MotionTrackingControlOptions;
    mode?: 'html4'|'html5'|'webgl';
    panControl?: boolean;
    panControlOptions?: PanControlOptions;
    pano?: string;
    panoProvider?: (input: string) => StreetViewPanoramaData;
    position?: LatLng|LatLngLiteral;
    pov?: StreetViewPov;
    scrollwheel?: boolean;
    visible?: boolean;
    zoom?: number;
    zoomControl?: boolean;
    zoomControlOptions?: ZoomControlOptions;
  }

  interface StreetViewAddressControlOptions {
    position?: ControlPosition;
  }

  interface StreetViewLink {
    description?: string;
    heading?: number;
    pano?: string;
  }

  interface StreetViewPov {
    heading?: number;
    pitch?: number;
  }

  interface StreetViewPanoramaData {
    copyright?: string;
    imageDate?: string;
    links?: StreetViewLink[];
    location?: StreetViewLocation;
    tiles?: StreetViewTileData;
  }

  interface StreetViewLocation {
    description?: string;
    latLng?: LatLng;
    pano?: string;
    shortDescription?: string;
  }

  interface StreetViewTileData {
    getTileUrl(pano: string, tileZoom: number, tileX: number, tileY: number):
        string;
    centerHeading?: number;
    tileSize?: Size;
    worldSize?: Size;
  }

  enum StreetViewPreference {BEST, NEAREST}

  enum StreetViewSource {DEFAULT, OUTDOOR}

  interface StreetViewLocationRequest {
    location: LatLng|LatLngLiteral;
    preference?: StreetViewPreference;
    radius?: number;
    source?: StreetViewSource;
  }

  interface StreetViewPanoRequest {
    pano: string;
  }

  class StreetViewService {
    getPanorama(
        request: StreetViewLocationRequest|StreetViewPanoRequest,
        cb: (data: StreetViewPanoramaData, status: StreetViewStatus) => void):
        void;
    getPanoramaById(
        pano: string,
        callback:
            (streetViewPanoramaData: StreetViewPanoramaData,
             streetViewStatus: StreetViewStatus) => void): void;
    getPanoramaByLocation(
        latlng: LatLng|LatLngLiteral, radius: number,
        callback:
            (streetViewPanoramaData: StreetViewPanoramaData,
             streetViewStatus: StreetViewStatus) => void): void;
  }

  enum StreetViewStatus {OK, UNKNOWN_ERROR, ZERO_RESULTS}

  class StreetViewCoverageLayer extends MVCObject {
    getMap(): Map;
    setMap(map: Map|null): void;
  }

  interface MotionTrackingControlOptions {
    position?: ControlPosition;
  }

  /***** Events *****/
  interface MapsEventListener {
    /**
     * Removes the listener.  Equivalent to calling
     * google.maps.event.removeListener(listener).
     */
    remove(): void;
  }

  class event {
    /**
     * Cross browser event handler registration. This listener is removed by
     * calling removeListener(handle) for the handle that is returned by this
     * function.
     */
    static addDomListener(
        instance: Object, eventName: string, handler: Function,
        capture?: boolean): MapsEventListener;
    /**
     * Wrapper around addDomListener that removes the listener after the first
     * event.
     */
    static addDomListenerOnce(
        instance: Object, eventName: string, handler: Function,
        capture?: boolean): MapsEventListener;
    /**
     * Adds the given listener function to the given event name for the given
     * object instance. Returns an identifier for this listener that can be used
     * with removeListener().
     */
    static addListener(instance: Object, eventName: string, handler: Function):
        MapsEventListener;
    /**
     * Like addListener, but the handler removes itself after handling the first
     * event.
     */
    static addListenerOnce(
        instance: Object, eventName: string,
        handler: Function): MapsEventListener;
    /**
     * Removes all listeners for all events for the given instance.
     */
    static clearInstanceListeners(instance: Object): void;
    /**
     * Removes all listeners for the given event for the given instance.
     */
    static clearListeners(instance: Object, eventName: string): void;
    /**
     * Removes the given listener, which should have been returned by
     * addListener above. Equivalent to calling listener.remove().
     */
    static removeListener(listener: MapsEventListener): void;
    /**
     * Triggers the given event. All arguments after eventName are passed as
     * arguments to the listeners.
     */
    static trigger(instance: any, eventName: string, ...args: any[]): void;
  }

  /**
   * This object is returned from various mouse events on the map and overlays,
   * and contains all the fields shown below.
   */
  interface MouseEvent {
    /** Prevents this event from propagating further. */
    stop(): void;
    /**
     * The latitude/longitude that was below the cursor when the event
     * occurred.
     */
    latLng: LatLng;
  }

  /**
   * This object is sent in an event when a user clicks on an icon on the map.
   * The place ID of this place is stored in the placeId member.
   * To prevent the default info window from showing up, call the stop() method
   * on this event to prevent it being propagated. Learn more about place IDs in
   * the Places API developer guide.
   */
  interface IconMouseEvent extends MouseEvent {
    /**
     * The place ID of the place that was clicked.
     * This place ID can be used to query more information about the feature
     * that was clicked.
     */
    placeId: string;
  }

  /* **** Base **** */

  /**
   * A LatLng is a point in geographical coordinates: latitude and longitude.
   *
   * * Latitude ranges between -90 and 90 degrees, inclusive. Values above or
   *   below this range will be clamped to the range [-90, 90]. This means
   *   that if the value specified is less than -90, it will be set to -90.
   *   And if the value is greater than 90, it will be set to 90.
   * * Longitude ranges between -180 and 180 degrees, inclusive. Values above
   *   or below this range will be wrapped so that they fall within the
   *   range. For example, a value of -190 will be converted to 170. A value
   *   of 190 will be converted to -170. This reflects the fact that
   *   longitudes wrap around the globe.
   *
   * Although the default map projection associates longitude with the
   * x-coordinate of the map, and latitude with the y-coordinate, the
   * latitude coordinate is always written first, followed by the longitude.
   * Notice that you cannot modify the coordinates of a LatLng. If you want
   * to compute another point, you have to create a new one.
   */
  class LatLng {
    /**
     * Creates a LatLng object representing a geographic point.
     * Note the ordering of latitude and longitude.
     * @param lat Latitude is specified in degrees within the range [-90, 90].
     * @param lng Longitude is specified in degrees within the range [-180,
     *     180].
     * @param noWrap Set noWrap to true to enable values outside of this range.
     */
    constructor(lat: number, lng: number, noWrap?: boolean);
    /**
     * Creates a LatLng object representing a geographic point.
     * @param literal Object literal.
     * @param noWrap Set noWrap to true to enable values outside of this range.
     */
    constructor(literal: LatLngLiteral, noWrap?: boolean);
    /** Comparison function. */
    equals(other: LatLng): boolean;
    /** Returns the latitude in degrees. */
    lat(): number;
    /** Returns the longitude in degrees. */
    lng(): number;
    /** Converts to string representation. */
    toString(): string;
    /**
     * Returns a string of the form "lat,lng". We round the lat/lng values to 6
     * decimal places by default.
     */
    toUrlValue(precision?: number): string;
    /**
     * Converts to JSON representation. This function is intended to be used
     * via JSON.stringify.
     */
    toJSON(): LatLngLiteral;
  }

  /**
   * Object literals are accepted in place of {@link LatLng} objects, as a
   * convenience, in many places. These are converted to {@link LatLng} objects
   * when the Maps API encounters them.
   * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngLiteral Maps JavaScript API}
   */
  interface LatLngLiteral {
    /**
     * Latitude in degrees. Values will be clamped to the range [-90, 90]. This
     * means that if the value specified is less than -90, it will be set to
     * -90. And if the value is greater than 90, it will be set to 90.
     */
    lat: number;
    /**
     * Longitude in degrees. Values outside the range [-180, 180] will be
     * wrapped so that they fall within the range. For example, a value of -190
     * will be converted to 170. A value of 190 will be converted to -170. This
     * reflects the fact that longitudes wrap around the globe.
     */
    lng: number;
  }

  /** @see {@link LatLngLiteral}. */
  interface ReadonlyLatLngLiteral {
    /** @see {@link LatLngLiteral#lat} */
    readonly lat: number;
    /** @see {@link LatLngLiteral#lng} */
    readonly lng: number;
  }

  type LatLngBoundsLiteral = {
    east: number; north: number; south: number; west: number
  }

  /**
   * A LatLngBounds instance represents a rectangle in geographical coordinates,
   * including one that crosses the 180 degrees longitudinal meridian.
   */
  class LatLngBounds {
    /**
     * Constructs a rectangle from the points at its south-west and north-east
     * corners.
     */
    constructor(sw?: LatLng|LatLngLiteral, ne?: LatLng|LatLngLiteral);
    /** Returns true if the given lat/lng is in this bounds. */
    contains(latLng: LatLng|LatLngLiteral): boolean;
    /** Returns true if this bounds approximately equals the given bounds. */
    equals(other: LatLngBounds|LatLngBoundsLiteral): boolean;
    /** Extends this bounds to contain the given point. */
    extend(point: LatLng|LatLngLiteral): LatLngBounds;
    /** Computes the center of this LatLngBounds */
    getCenter(): LatLng;
    /** Returns the north-east corner of this bounds. */
    getNorthEast(): LatLng;
    /** Returns the south-west corner of this bounds. */
    getSouthWest(): LatLng;
    /** Returns true if this bounds shares any points with the other bounds. */
    intersects(other: LatLngBounds|LatLngBoundsLiteral): boolean;
    /** Returns if the bounds are empty. */
    isEmpty(): boolean;
    /**
     * Converts to JSON representation. This function is intended to be used
     * via JSON.stringify.
     */
    toJSON(): LatLngBoundsLiteral;
    /** Converts the given map bounds to a lat/lng span. */
    toSpan(): LatLng;
    /** Converts to string. */
    toString(): string;
    /**
     * Returns a string of the form "lat_lo,lng_lo,lat_hi,lng_hi" for this
     * bounds, where "lo" corresponds to the southwest corner of the bounding
     * box, while "hi" corresponds to the northeast corner of that box.
     */
    toUrlValue(precision?: number): string;
    /**
     * Extends this bounds to contain the union of this and the given bounds.
     */
    union(other: LatLngBounds|LatLngBoundsLiteral): LatLngBounds;
  }

  class Point {
    /** A point on a two-dimensional plane. */
    constructor(x: number, y: number);
    /** The X coordinate */
    x: number;
    /** The Y coordinate */
    y: number;
    /** Compares two Points */
    equals(other: Point): boolean;
    /** Returns a string representation of this Point. */
    toString(): string;
  }

  class Size {
    constructor(
        width: number, height: number, widthUnit?: string, heightUnit?: string);
    height: number;
    width: number;
    equals(other: Size): boolean;
    toString(): string;
  }

  /***** MVC *****/
  /** Base class implementing KVO. */
  class MVCObject {
    /**
     * The MVCObject constructor is guaranteed to be an empty function, and so
     * you may inherit from MVCObject by simply writing MySubclass.prototype =
     * new google.maps.MVCObject();. Unless otherwise noted, this is not true of
     * other classes in the API, and inheriting from other classes in the API is
     * not supported.
     */
    constructor();
    /**
     * Adds the given listener function to the given event name. Returns an
     * identifier for this listener that can be used with
     * google.maps.event.removeListener.
     */
    addListener(eventName: string, handler: (...args: any[]) => void):
        MapsEventListener;
    /** Binds a View to a Model. */
    bindTo(
        key: string, target: MVCObject, targetKey?: string,
        noNotify?: boolean): void;
    changed(key: string): void;
    /** Gets a value. */
    get(key: string): any;
    /**
     * Notify all observers of a change on this property. This notifies both
     * objects that are bound to the object's property as well as the object
     * that it is bound to.
     */
    notify(key: string): void;
    /** Sets a value. */
    set(key: string, value: any): void;
    /** Sets a collection of key-value pairs. */
    setValues(values: any): void;
    /**
     * Removes a binding. Unbinding will set the unbound property to the current
     * value. The object will not be notified, as the value has not changed.
     */
    unbind(key: string): void;
    /** Removes all bindings. */
    unbindAll(): void;
  }

  /** This class extends MVCObject. */
  class MVCArray<T> extends MVCObject {
    /** A mutable MVC Array. */
    constructor(array?: T[]);
    /** Removes all elements from the array. */
    clear(): void;
    /**
     * Iterate over each element, calling the provided callback.
     * The callback is called for each element like: callback(element, index).
     */
    forEach(callback: (elem: T, i: number) => void): void;
    /**
     * Returns a reference to the underlying Array.
     * Warning: if the Array is mutated, no events will be fired by this object.
     */
    getArray(): T[];
    /** Returns the element at the specified index. */
    getAt(i: number): T;
    /** Returns the number of elements in this array. */
    getLength(): number;
    /** Inserts an element at the specified index. */
    insertAt(i: number, elem: T): void;
    /** Removes the last element of the array and returns that element. */
    pop(): T;
    /**
     * Adds one element to the end of the array and returns the new length of
     * the array.
     */
    push(elem: T): number;
    /** Removes an element from the specified index. */
    removeAt(i: number): T;
    /** Sets an element at the specified index. */
    setAt(i: number, elem: T): void;
  }

  /***** Geometry Library *****/
  module geometry {
    class encoding {
      static decodePath(encodedPath: string): LatLng[];
      static encodePath(path: LatLng[]|MVCArray<LatLng>): string;
    }

    /**
     * Utility functions for computing geodesic angles, distances and areas.
     * The default radius is Earth's radius of 6378137 meters.
     */
    class spherical {
      /**
       * Returns the area of a closed path.
       * The computed area uses the same units as the radius.
       * The radius defaults to the Earth's radius in meters,
       * in which case the area is in square meters.
       */
      static computeArea(path: LatLng[]|MVCArray<LatLng>, radius?: number):
          number;
      /**
       * Returns the distance, in meters, between two LatLngs.
       * You can optionally specify a custom radius.
       * The radius defaults to the radius of the Earth.
       */
      static computeDistanceBetween(from: LatLng, to: LatLng, radius?: number):
          number;
      /**
       * Returns the heading from one LatLng to another LatLng.
       * Headings are expressed in degrees clockwise from North within the range
       * [-180,180).
       */
      static computeHeading(from: LatLng, to: LatLng): number;
      /**
       * Returns the length of the given path.
       */
      static computeLength(path: LatLng[]|MVCArray<LatLng>, radius?: number):
          number;
      /**
       * Returns the LatLng resulting from moving a distance from an origin in
       * the specified heading (expressed in degrees clockwise from north).
       */
      static computeOffset(
          from: LatLng, distance: number, heading: number,
          radius?: number): LatLng;
      /**
       * Returns the location of origin when provided with a LatLng destination,
       * meters travelled and original heading. Headings are expressed in
       * degrees clockwise from North. This function returns null when no
       * solution is available.
       */
      static computeOffsetOrigin(
          to: LatLng, distance: number, heading: number,
          radius?: number): LatLng;
      /**
       * Returns the signed area of a closed path. The signed area may be used
       * to determine the orientation of the path. The computed area uses the
       * same units as the radius. The radius defaults to the Earth's radius in
       * meters, in which case the area is in square meters.
       */
      static computeSignedArea(
          loop: LatLng[]|MVCArray<LatLng>, radius?: number): number;
      /**
       * Returns the LatLng which lies the given fraction of the way between the
       * origin LatLng and the destination LatLng.
       */
      static interpolate(from: LatLng, to: LatLng, fraction: number): LatLng;
    }

    class poly {
      static containsLocation(point: LatLng, polygon: Polygon): boolean;
      static isLocationOnEdge(
          point: LatLng, poly: Polygon|Polyline, tolerance?: number): boolean;
    }
  }

  /***** AdSense Library *****/
  module adsense {
    class AdUnit extends MVCObject {
      constructor(container: Element, opts: AdUnitOptions);
      getBackgroundColor(): string;
      getBorderColor(): string;
      getChannelNumber(): string;
      getContainer(): Element;
      getFormat(): AdFormat;
      getMap(): Map;
      getPosition(): ControlPosition;
      getPublisherId(): string;
      getTextColor(): string;
      getTitleColor(): string;
      getUrlColor(): string;
      setBackgroundColor(backgroundColor: string): void;
      setBorderColor(borderColor: string): void;
      setChannelNumber(channelNumber: string): void;
      setFormat(format: AdFormat): void;
      setMap(map: Map|null): void;
      setPosition(position: ControlPosition): void;
      setTextColor(textColor: string): void;
      setTitleColor(titleColor: string): void;
      setUrlColor(urlColor: string): void;
    }

    interface AdUnitOptions {
      backgroundColor?: string;
      borderColor?: string;
      channelNumber?: string;
      format?: AdFormat;
      map?: Map;
      position?: ControlPosition;
      publisherId?: string;
      textColor?: string;
      titleColor?: string;
      urlColor?: string;
    }

    enum AdFormat {
      BANNER,
      BUTTON,
      HALF_BANNER,
      LARGE_HORIZONTAL_LINK_UNIT,
      LARGE_RECTANGLE,
      LARGE_VERTICAL_LINK_UNIT,
      LEADERBOARD,
      MEDIUM_RECTANGLE,
      MEDIUM_VERTICAL_LINK_UNIT,
      SKYSCRAPER,
      SMALL_HORIZONTAL_LINK_UNIT,
      SMALL_RECTANGLE,
      SMALL_SQUARE,
      SMALL_VERTICAL_LINK_UNIT,
      SQUARE,
      VERTICAL_BANNER,
      WIDE_SKYSCRAPER,
      X_LARGE_VERTICAL_LINK_UNIT
    }
  }

  /***** Places Library *****/
  module places {
    class Autocomplete extends MVCObject {
      constructor(inputField: HTMLInputElement, opts?: AutocompleteOptions);
      getBounds(): LatLngBounds;
      getPlace(): PlaceResult;
      setBounds(bounds: LatLngBounds|LatLngBoundsLiteral): void;
      setComponentRestrictions(restrictions: ComponentRestrictions): void;
      setTypes(types: string[]): void;
    }

    interface AutocompleteOptions {
      bounds?: LatLngBounds|LatLngBoundsLiteral;
      componentRestrictions?: ComponentRestrictions;
      placeIdOnly?: boolean;
      strictBounds?: boolean;
      types?: string[];
      type?: string;
      fields?: string[];
    }

    interface AutocompletePrediction {
      description: string;
      matched_substrings: PredictionSubstring[];
      place_id: string;
      reference: string;
      structured_formatting: AutocompleteStructuredFormatting;
      terms: PredictionTerm[];
      types: string[];
    }

    interface AutocompleteStructuredFormatting {
      main_text: string;
      main_text_matched_substrings: PredictionSubstring[];
      secondary_text: string;
    }

    interface OpeningHours {
      open_now: boolean;
      periods: OpeningPeriod[];
      weekday_text: string[];
    }

    interface OpeningPeriod {
      open: OpeningHoursTime;
      close?: OpeningHoursTime;
    }

    interface OpeningHoursTime {
      day: number;
      hours: number;
      minutes: number;
      nextDate: number;
      time: string;
    }

    interface PredictionTerm {
      offset: number;
      value: string;
    }

    interface PredictionSubstring {
      length: number;
      offset: number;
    }

    class AutocompleteService {
      constructor();
      getPlacePredictions(
          request: AutocompletionRequest,
          callback:
              (result: AutocompletePrediction[],
               status: PlacesServiceStatus) => void): void;
      getQueryPredictions(
          request: QueryAutocompletionRequest,
          callback:
              (result: QueryAutocompletePrediction[],
               status: PlacesServiceStatus) => void): void;
    }

    class AutocompleteSessionToken {
      constructor();
    }

    interface AutocompletionRequest {
      bounds?: LatLngBounds|LatLngBoundsLiteral;
      componentRestrictions?: ComponentRestrictions;
      input: string;
      location?: LatLng;
      offset?: number;
      radius?: number;
      sessionToken?: AutocompleteSessionToken;
      types?: string[];
    }

    interface ComponentRestrictions {
      country: string|string[];
    }

    type LocationBias = LatLng|LatLngLiteral|LatLngBounds|
        LatLngBoundsLiteral|Circle|CircleLiteral|string;

    interface PlaceAspectRating {
      rating: number;
      type: string;
    }

    interface PlaceDetailsRequest {
      placeId: string;
      fields?: string[];
      sessionToken?: AutocompleteSessionToken;
    }

    interface PlaceGeometry {
      location: LatLng;
      viewport: LatLngBounds;
    }

    interface PlacePhoto {
      height: number;
      html_attributions: string[];
      width: number;
      getUrl(opts: PhotoOptions): string;
    }

    interface PhotoOptions {
      maxHeight?: number;
      maxWidth?: number;
    }

    interface PlaceResult {
      address_components?: GeocoderAddressComponent[];
      adr_address?: string;
      aspects?: PlaceAspectRating[];
      formatted_address?: string;
      formatted_phone_number?: string;
      geometry?: PlaceGeometry;
      html_attributions?: string[];
      icon?: string;
      id?: string;
      international_phone_number?: string;
      name: string;
      opening_hours?: OpeningHours;
      permanently_closed?: boolean;
      photos?: PlacePhoto[];
      place_id?: string;
      price_level?: number;
      rating?: number;
      reviews?: PlaceReview[];
      types?: string[];
      url?: string;
      utc_offset?: number;
      vicinity?: string;
      website?: string;
    }

    interface PlaceReview {
      aspects: PlaceAspectRating[];
      author_name: string;
      author_url: string;
      language: string;
      text: string;
    }

    interface PlaceSearchPagination {
      nextPage(): void;
      hasNextPage: boolean;
    }

    interface PlaceSearchRequest {
      bounds?: LatLngBounds|LatLngBoundsLiteral;
      keyword?: string;
      location?: LatLng|LatLngLiteral;
      maxPriceLevel?: number;
      minPriceLevel?: number;
      name?: string;
      openNow?: boolean;
      radius?: number;
      rankBy?: RankBy;
      types?: string[]; /* Deprecated. Will be removed February 16, 2017 */
      type?: string;
    }

    class PlacesService {
      constructor(attrContainer: HTMLDivElement|Map);
      findPlaceFromPhoneNumber(
          request: FindPlaceFromPhoneNumberRequest,
          callback:
              (results: PlaceResult[], status: PlacesServiceStatus) => void):
          void;
      findPlaceFromQuery(
          request: FindPlaceFromQueryRequest,
          callback:
              (results: PlaceResult[], status: PlacesServiceStatus) => void):
          void;
      getDetails(
          request: PlaceDetailsRequest,
          callback: (result: PlaceResult, status: PlacesServiceStatus) => void):
          void;
      nearbySearch(
          request: PlaceSearchRequest,
          callback:
              (results: PlaceResult[], status: PlacesServiceStatus,
               pagination: PlaceSearchPagination) => void): void;
      /**
       * @deprecated Radar search is deprecated as of June 30, 2018. After that
       *     time, this feature will no longer be available.
       */
      radarSearch(
          request: RadarSearchRequest,
          callback:
              (results: PlaceResult[], status: PlacesServiceStatus) => void):
          void;
      textSearch(
          request: TextSearchRequest,
          callback:
              (results: PlaceResult[], status: PlacesServiceStatus,
               pagination: PlaceSearchPagination) => void): void;
    }

    enum PlacesServiceStatus {
      ERROR,
      INVALID_REQUEST,
      OK,
      OVER_QUERY_LIMIT,
      NOT_FOUND,
      REQUEST_DENIED,
      UNKNOWN_ERROR,
      ZERO_RESULTS
    }

    interface QueryAutocompletePrediction {
      description: string;
      matched_substrings: PredictionSubstring[];
      place_id: string;
      terms: PredictionTerm[];
    }

    interface QueryAutocompletionRequest {
      bounds?: LatLngBounds|LatLngBoundsLiteral;
      input?: string;
      location?: LatLng;
      offset?: number;
      radius?: number;
    }

    interface RadarSearchRequest {
      bounds?: LatLngBounds|LatLngBoundsLiteral;
      keyword?: string;
      location?: LatLng|LatLngLiteral;
      name?: string;
      radius?: number;
      types?: string[]; /* Deprecated. Will be removed February 16, 2017 */
      type?: string;
    }

    enum RankBy {DISTANCE, PROMINENCE}

    class SearchBox extends MVCObject {
      constructor(inputField: HTMLInputElement, opts?: SearchBoxOptions);
      getBounds(): LatLngBounds;
      getPlaces(): PlaceResult[];
      setBounds(bounds: LatLngBounds|LatLngBoundsLiteral): void;
    }

    interface SearchBoxOptions {
      bounds: LatLngBounds|LatLngBoundsLiteral;
    }

    interface TextSearchRequest {
      bounds?: LatLngBounds|LatLngBoundsLiteral;
      location?: LatLng|LatLngLiteral;
      query: string;
      radius?: number;
      types?: string[]; /* Deprecated. Will be removed February 16, 2017 */
      type?: string;
    }

    interface FindPlaceFromQueryRequest {
      fields: string[];
      locationBias?: LocationBias;
      query: string;
    }

    interface FindPlaceFromPhoneNumberRequest {
      fields: string[];
      locationBias?: LocationBias;
      phoneNumber: string;
    }
  }

  /***** Drawing Library *****/
  module drawing {
    class DrawingManager extends MVCObject {
      constructor(options?: DrawingManagerOptions);
      getDrawingMode(): OverlayType;
      getMap(): Map;
      setDrawingMode(drawingMode: OverlayType|null): void;
      setMap(map: Map|null): void;
      setOptions(options: DrawingManagerOptions): void;
    }

    /** Options for the drawing manager. */
    interface DrawingManagerOptions {
      /**
       * Options to apply to any new circles created with this DrawingManager.
       * The center and radius properties are ignored, and the map property of a
       * new circle is always set to the DrawingManager's map.
       */
      circleOptions?: CircleOptions;
      /**
       * The enabled/disabled state of the drawing control. Defaults to true.
       */
      drawingControl?: boolean;
      /** The display options for the drawing control. */
      drawingControlOptions?: DrawingControlOptions;
      /**
       * The DrawingManager's drawing mode, which defines the type of overlay to
       * be added on the map. Accepted values are 'marker', 'polygon',
       * 'polyline', 'rectangle', 'circle', or null. A drawing mode of null
       * means that the user can interact with the map as normal, and clicks do
       * not draw anything.
       */
      drawingMode?: OverlayType|null;
      /**
       * The Map to which the DrawingManager is attached, which is the Map on
       * which the overlays created will be placed.
       */
      map?: Map;
      /**
       * Options to apply to any new markers created with this DrawingManager.
       * The position property is ignored, and the map property of a new marker
       * is always set to the DrawingManager's map.
       */
      markerOptions?: MarkerOptions;
      /**
       * Options to apply to any new polygons created with this DrawingManager.
       * The paths property is ignored, and the map property of a new polygon is
       * always set to the DrawingManager's map.
       */
      polygonOptions?: PolygonOptions;
      /**
       * Options to apply to any new polylines created with this DrawingManager.
       * The path property is ignored, and the map property of a new polyline is
       * always set to the DrawingManager's map.
       */
      polylineOptions?: PolylineOptions;
      /**
       * Options to apply to any new rectangles created with this
       * DrawingManager. The bounds property is ignored, and the map property of
       * a new rectangle is always set to the DrawingManager's map.
       */
      rectangleOptions?: RectangleOptions;
    }

    interface DrawingControlOptions {
      drawingModes?: OverlayType[];
      position?: ControlPosition;
    }

    /** The properties of an overlaycomplete event on a DrawingManager.. */
    interface OverlayCompleteEvent {
      /** The completed overlay. */
      overlay: Marker|Polygon|Polyline|Rectangle|Circle;
      /** The completed overlay's type. */
      type: OverlayType;
    }

    /**
     * The types of overlay that may be created by the DrawingManager. Specify
     * these by value, or by using the constant's name. For example, 'polygon'
     * or google.maps.drawing.OverlayType.POLYGON.
     */
    enum OverlayType {
      /**
       * Specifies that the DrawingManager creates circles, and that the overlay
       * given in the overlaycomplete event is a circle.
       */
      CIRCLE,
      /**
       * Specifies that the DrawingManager creates markers, and that the overlay
       * given in the overlaycomplete event is a marker.
       */
      MARKER,
      /**
       * Specifies that the DrawingManager creates polygons, and that the
       * overlay given in the overlaycomplete event is a polygon.
       */
      POLYGON,
      /**
       * Specifies that the DrawingManager creates polylines, and that the
       * overlay given in the overlaycomplete event is a polyline.
       */
      POLYLINE,
      /**
       * Specifies that the DrawingManager creates rectangles, and that the
       * overlay given in the overlaycomplete event is a rectangle.
       */
      RECTANGLE
    }
  }

  /***** Visualization Library *****/
  module visualization {
    class MapsEngineLayer extends MVCObject {
      constructor(options: MapsEngineLayerOptions);
      getLayerId(): string;
      getLayerKey(): string;
      getMap(): Map;
      getMapId(): string;
      getOpacity(): number;
      getProperties(): MapsEngineLayerProperties;
      getStatus(): MapsEngineStatus;
      getZIndex(): number;
      setLayerId(layerId: string): void;
      setLayerKey(layerKey: string): void;
      setMap(map: Map|null): void;
      setMapId(mapId: string): void;
      setOpacity(opacity: number): void;
      setOptions(options: MapsEngineLayerOptions): void;
      setZIndex(zIndex: number): void;
    }

    interface MapsEngineLayerOptions {
      accessToken?: string;
      clickable?: boolean;
      fitBounds?: boolean;
      layerId?: string;
      layerKey?: string;
      map?: Map;
      mapId?: string;
      opacity?: number;
      suppressInfoWindows?: boolean;
      zIndex?: number;
    }

    interface MapsEngineLayerProperties {
      name: string;
    }

    interface MapsEngineMouseEvent {
      featureId?: string;
      infoWindowHtml?: string;
      latLng?: LatLng;
      pixelOffset?: Size;
    }

    enum MapsEngineStatus {INVALID_LAYER, OK, UNKNOWN_ERROR}

    class HeatmapLayer extends MVCObject {
      constructor(opts?: HeatmapLayerOptions);
      getData<T extends LatLng|WeightedLocation>(): MVCArray<T>;
      getMap(): Map;
      setData(data: MVCArray<LatLng|WeightedLocation>|LatLng[]|
              WeightedLocation[]): void;
      setMap(map: Map|null): void;
    }

    interface HeatmapLayerOptions {
      data: any;
      dissipating?: boolean;
      gradient?: string[];
      map?: Map;
      maxIntensity?: number;
      opacity?: number;
      radius?: number;
    }

    interface WeightedLocation {
      location: LatLng;
      weight: number;
    }

    class MouseEvent {
      stop(): void;
    }

    class MapsEventListener {}
  }
}
