declare namespace google.maps {
    type MarkerChangeOptionEventNames =
        | 'animation_changed'
        | 'clickable_changed'
        | 'cursor_changed'
        | 'draggable_changed'
        | 'flat_changed'
        | 'icon_changed'
        | 'position_changed'
        | 'shape_changed'
        | 'title_changed'
        | 'visible_changed'
        | 'zindex_changed';

    type MarkerMouseEventNames =
        | 'click'
        | 'dblclick'
        | 'drag'
        | 'dragend'
        | 'dragstart'
        | 'mousedown'
        | 'mouseout'
        | 'mouseover'
        | 'mouseup'
        | 'rightclick';

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
        getPosition(): LatLng | null | undefined;
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
        addListener(eventName: MarkerChangeOptionEventNames, handler: (this: Marker) => void): MapsEventListener;
        addListener(
            eventName: MarkerMouseEventNames,
            handler: (this: Marker, event: MouseEvent) => void,
        ): MapsEventListener;
        /** @deprecated */
        addListener(eventName: string, handler: (this: Marker, ...args: any[]) => void): MapsEventListener;
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
        // tslint:disable-next-line:no-unnecessary-qualifier
        icon?: string | Icon | google.maps.Symbol;
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
        readonly map?: Map | StreetViewPanorama;
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

    interface MarkerShapePolyCoords extends Array<number> {
        0: number;
        1: number;
        2: number;
        3: number;
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
}
