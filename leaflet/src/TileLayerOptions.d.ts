declare module L {

    export interface TileLayerOptions {

        /**
          * Minimum zoom number.
          *
          * Default value: 0.
          */
        minZoom?: number;
    
        /**
          * Maximum zoom number.
          *
          * Default value: 18.
          */
        maxZoom?: number;
    
        /**
          * Tile size (width and height in pixels, assuming tiles are square).
          *
          * Default value: 256.
          */
        tileSize?: number;
    
        /**
          * Subdomains of the tile service. Can be passed in the form of one string (where
          * each letter is a subdomain name) or an array of strings.
          *
          * Default value: 'abc'.
          */
        subdomains?: string[];
    
        /**
          * URL to the tile image to show in place of the tile that failed to load.
          *
          * Default value: ''.
          */
        errorTileUrl?: string;
    
        /**
          * e.g. "© CloudMade" — the string used by the attribution control, describes
          * the layer data.
          *
          * Default value: ''.
          */
        attribution?: string;
    
        /**
          * If true, inverses Y axis numbering for tiles (turn this on for TMS services).
          *
          * Default value: false.
          */
        tms?: boolean;
    
        /**
          * If set to true, the tile coordinates won't be wrapped by world width (-180
          * to 180 longitude) or clamped to lie within world height (-90 to 90). Use this
          * if you use Leaflet for maps that don't reflect the real world (e.g. game, indoor
          * or photo maps).
          *
          * Default value: false.
          */
        continuousWorld?: boolean;
    
        /**
          * If set to true, the tiles just won't load outside the world width (-180 to 180
          * longitude) instead of repeating.
          *
          * Default value: false.
          */
        noWrap?: boolean;
    
        /**
          * The zoom number used in tile URLs will be offset with this value.
          *
          * Default value: 0.
          */
        zoomOffset?: number;
    
        /**
          * If set to true, the zoom number used in tile URLs will be reversed (maxZoom
          * - zoom instead of zoom)
          *
          * Default value: false.
          */
        zoomReverse?: boolean;
    
        /**
          * The opacity of the tile layer.
          *
          * Default value: 1.0.
          */
        opacity?: number;
    
        /**
          * The explicit zIndex of the tile layer. Not set by default.
          */
        zIndex?: number;
    
        /**
          * If true, all the tiles that are not visible after panning are removed (for
          * better performance). true by default on mobile WebKit, otherwise false.
          */
        unloadInvisibleTiles?: boolean;
    
        /**
          * If false, new tiles are loaded during panning, otherwise only after it (for
          * better performance). true by default on mobile WebKit, otherwise false.
          */
        updateWhenIdle?: boolean;
    
        /**
          * If true and user is on a retina display, it will request four tiles of half the
          * specified size and a bigger zoom level in place of one to utilize the high resolution.
          *
          * Default value: false.
          */
        detectRetina?: boolean;
    
        /**
          * If true, all the tiles that are not visible after panning are placed in a reuse
          * queue from which they will be fetched when new tiles become visible (as opposed
          * to dynamically creating new ones). This will in theory keep memory usage
          * low and eliminate the need for reserving new memory whenever a new tile is
          * needed.
          *
          * Default value: false.
          */
        reuseTiles?: boolean;
    }
}
