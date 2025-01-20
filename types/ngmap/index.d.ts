/// <reference types="angular" />
/// <reference types="google.maps" />

declare module "ngmap" {
    let _: string;
    export = _;
}

declare namespace angular.map {
    interface IGetMapOptions {
        id?: string | undefined;
        timeout?: number | undefined;
    }

    interface INgMapOptions {
        marker: {
            /**
             * The offset from the marker's position to the tip of an InfoWindow
             * that has been opened with the marker as anchor.
             */
            anchorPoint?: google.maps.Point | undefined;
            /** Which animation to play when marker is added to a map. */
            animation?: google.maps.Animation | undefined;
            /**
             * If true, the marker receives mouse and touch events.
             * @default true
             */
            clickable?: boolean | undefined;
            /** Mouse cursor to show on hover. */
            cursor?: string | undefined;
            /**
             * If true, the marker can be dragged.
             * @default false
             */
            draggable?: boolean | undefined;
            /**
             * Icon for the foreground.
             * If a string is provided, it is treated as though it were an Icon with the string as url.
             */
            icon?: string | google.maps.Icon | google.maps.Symbol | undefined;
            /**
             * Adds a label to the marker. The label can either be a string, or a MarkerLabel object.
             * Only the first character of the string will be displayed.
             */
            label?: string | undefined;
            /**
             * Map on which to display Marker.
             */
            map?: google.maps.Map | google.maps.StreetViewPanorama | undefined;
            /** The marker's opacity between 0.0 and 1.0. */
            opacity?: number | undefined;
            /**
             * Optimization renders many markers as a single static element.
             * Optimized rendering is enabled by default.
             * Disable optimized rendering for animated GIFs or PNGs, or when each
             * marker must be rendered as a separate DOM element (advanced usage
             * only).
             */
            optimized?: boolean | undefined;
            /** Image map region definition used for drag/click. */
            shape?: google.maps.MarkerShape | undefined;
            /** Rollover text. */
            title?: string | undefined;
            /** If true, the marker is visible. */
            visible?: boolean | undefined;
            /**
             * All markers are displayed on the map in order of their zIndex,
             * with higher values displaying in front of markers with lower values.
             * By default, markers are displayed according to their vertical position on screen,
             * with lower markers appearing in front of markers further up the screen.
             */
            zIndex?: number | undefined;
        };
    }

    interface IObserveAndSetFunc {
        (val: any): void;
    }

    interface INgMap {
        /**
         * Add map to pool
         * @param {Function | any[]} mapCtrl Map controller
         */
        addMap(mapCtrl: Function | any[]): void;
        /**
         * Delete map from pool
         * @param {Function | any[]} mapCtrl Map controller optional. Defaults to last
         * controller in pool
         */
        deleteMap(mapCtrl?: Function | any[]): void;
        /**
         * Get map coordinates from address.
         * @param  {string}                               address Use 'current' to get users location
         * @param  {PositionOptions}                      options optional
         * @return {angular.IPromise<google.maps.LatLng>}         Latitude ang longitude of the address
         */
        getGeoLocation(address: string, options?: PositionOptions): ng.IPromise<google.maps.LatLng>;
        /**
         * Get map from the pool of all shown maps.
         * @param  {IGetMapOptions}                    options optional
         * @return {angular.IPromise<google.maps.Map>}         promise
         */
        getMap(options?: IGetMapOptions): ng.IPromise<google.maps.Map>;
        /**
         * Initialize map from mapId or the current first shown map
         * @param  {string}          mapId id of the map. default 0
         * @return {google.maps.Map}       map
         */
        initMap(mapId?: string): google.maps.Map;
        /**
         * Observe attribute
         * @param  {string}             attrName attribute name
         * @param  {Object}             object   a Google maps object to be changed
         * @return {IObserveAndSetFunc}          attribute obvserve function
         */
        observeAndSet(attrName: string, object: Object): IObserveAndSetFunc;
        /**
         * Set display, width, height of map container element
         * @param {HTMLElement} el map container element
         */
        setStyle(el: HTMLElement): void;
    }

    interface INgMapProvider {
        /**
         * @param {Hash} options
         * @example
         *  app.config(function(NgMapProvider) {
         *    NgMapProvider.setDefaultOptions({
         *      marker: {
         *        optimized: false
         *      }
         *    });
         *  });
         */
        setDefaultOptions(options: INgMapOptions): void;
    }
}
