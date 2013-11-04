/// <reference path="LatLng.d.ts" />
/// <reference path="ILayer.d.ts" />
/// <reference path="ICRS.d.ts" />
/// <reference path="LatLngBounds.d.ts" />
declare module L {

    export interface MapOptions {

        // Map State Options

        /**
          * Initial geographical center of the map.
          */
        center?: LatLng;
        
        /**
          * Initial map zoom.
          */
        zoom?: number;
        
        /**
          * Layers that will be added to the map initially.
          */
        layers?: ILayer[];
        
        /**
          * Minimum zoom level of the map. Overrides any minZoom set on map layers.
          */
        minZoom?: number;
        
        /**
          * Maximum zoom level of the map. This overrides any maxZoom set on map layers.
          */
        maxZoom?: number;
        
        /**
          * When this option is set, the map restricts the view to the given geographical
          * bounds, bouncing the user back when he tries to pan outside the view, and also
          * not allowing to zoom out to a view that's larger than the given bounds (depending
          * on the map size). To set the restriction dynamically, use setMaxBounds method
          */
        maxBounds?: LatLngBounds;
        
        /**
          * Coordinate Reference System to use. Don't change this if you're not sure
          * what it means.
          *
          * Default value: L.CRS.EPSG3857.
          */
        crs?: ICRS;
        
        // Interaction Options

        /**
          * Whether the map be draggable with mouse/touch or not.
          *
          * Default value: true.
          */
        dragging?: boolean;
        
        /**
          * Whether the map can be zoomed by touch-dragging with two fingers.
          *
          * Default value: true.
          */
        touchZoom?: boolean;
        
        /**
          * Whether the map can be zoomed by using the mouse wheel.
          *
          * Default value: true.
          */
        scrollWheelZoom?: boolean;
        
        /**
          * Whether the map can be zoomed in by double clicking on it.
          *
          * Default value: true.
          */
        doubleClickZoom?: boolean;

        /**
          * Whether the map can be zoomed to a rectangular area specified by dragging
          * the mouse while pressing shift.
          *
          * Default value: true.
          */
        boxZoom?: boolean;

        /**
          * Enables mobile hacks for supporting instant taps (fixing 200ms click delay
          * on iOS/Android) and touch holds (fired as contextmenu events).
          *
          * Default value: true.
          */
        tap?: boolean;

        /**
          * The max number of pixels a user can shift his finger during touch for it
          * to be considered a valid tap.
          *
          * Default value: 15.
          */
        tapTolerance?: number;

        /**
          * Whether the map automatically handles browser window resize to update itself.
          *
          * Default value: true.
          */
        trackResize?: boolean;
        
        /**
          * With this option enabled, the map tracks when you pan to another "copy" of
          * the world and seamlessly jumps to the original one so that all overlays like
          * markers and vector layers are still visible.
          *
          * Default value: false.
          */
        worldCopyJump?: boolean;
        
        /**
          * Set it to false if you don't want popups to close when user clicks the map.
          *
          * Default value: true.
          */
        closePopupOnClick?: boolean;
        
        // Keyboard Navigation Options

        /**
          * Makes the map focusable and allows users to navigate the map with keyboard
          * arrows and +/- keys.
          *
          * Default value: true.
          */
        keyboard?: boolean;
        
        /**
          * Amount of pixels to pan when pressing an arrow key.
          *
          * Default value: 80.
          */
        keyboardPanOffset?: number;
        
        /**
          * Number of zoom levels to change when pressing + or - key.
          *
          * Default value: 1.
          */
        keyboardZoomOffset?: number;
        
        // Panning Inertia Options

        /**
          * If enabled, panning of the map will have an inertia effect where the map builds
          * momentum while dragging and continues moving in the same direction for some
          * time. Feels especially nice on touch devices.
          *
          * Default value: true.
          */
        inertia?: boolean;
        
        /**
          * The rate with which the inertial movement slows down, in pixels/second2.
          *
          * Default value: 3000.
          */
        inertiaDeceleration?: number;
        
        /**
          * Max speed of the inertial movement, in pixels/second.
          *
          * Default value: 1500.
          */
        inertiaMaxSpeed?: number;
        
        /**
          * Amount of milliseconds that should pass between stopping the movement and
          * releasing the mouse or touch to prevent inertial movement.
          *
          * Default value: 32 for touch devices and 14 for the rest.
          */
        inertiaThreshold?: number;
        
        // Control options

        /**
          * Whether the zoom control is added to the map by default.
          *
          * Default value: true.
          */
        zoomControl?: boolean;
        
        /**
          * Whether the attribution control is added to the map by default.
          *
          * Default value: true.
          */
        attributionControl?: boolean;
        
        // Animation options

        /**
          * Whether the tile fade animation is enabled. By default it's enabled in all
          * browsers that support CSS3 Transitions except Android.
          */
        fadeAnimation?: boolean;
        
        /**
          * Whether the tile zoom animation is enabled. By default it's enabled in all
          * browsers that support CSS3 Transitions except Android.
          */
        zoomAnimation?: boolean;

        /**
          * Won't animate zoom if the zoom difference exceeds this value.
          *
          * Default value: 4.
          */
        zoomAnimationThreshold?: number;

        /**
          * Whether markers animate their zoom with the zoom animation, if disabled
          * they will disappear for the length of the animation. By default it's enabled
          * in all browsers that support CSS3 Transitions except Android.
          */
        markerZoomAnimation?: boolean;
    }
}
