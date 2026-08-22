// Type definitions for jsvectormap 1.7.0
// Project: https://github.com/themustafaomar/jsvectormap
// Definitions authored by strictly analyzing the library source (TypeScript 5).
//
// Usage:
//   import jsVectorMap from 'jsvectormap'
//   const map = new jsVectorMap({ selector: '#map', map: 'world' })

/* eslint-disable @typescript-eslint/no-explicit-any */

export = jsVectorMap
export as namespace jsVectorMap

declare class jsVectorMap {
    /**
     * Creates a new map instance.
     *
     * Note: at runtime the constructor returns an internal `Map` instance,
     * therefore every public member documented below is available on the
     * value returned by `new jsVectorMap(...)`.
     *
     * @throws If `options.selector` is not provided.
     * @throws If `options.map` refers to a map that was not registered via {@link jsVectorMap.addMap}.
     */
    constructor(options: jsVectorMap.MapOptions)

    // ------------------------------------------------------------------
    // Public state
    // ------------------------------------------------------------------

    /** The merged options (defaults deep-merged with the user options). */
    params: Required<jsVectorMap.MapOptions> & jsVectorMap.MapOptions

    /** Registered regions keyed by region code (e.g. `US`, `FR`). */
    regions: Record<string, jsVectorMap.RegionEntry>

    /** The root container element the map is rendered into. */
    container: HTMLElement

    /** The SVG canvas wrapper. */
    canvas: jsVectorMap.SVGCanvasElement

    /** Current zoom scale. */
    scale: number

    /** Current horizontal translation. */
    transX: number

    /** Current vertical translation. */
    transY: number

    /** Series (data legends) grouped by target, created when `series` option is used. */
    series?: {
        markers: jsVectorMap.Series[]
        regions: jsVectorMap.Series[]
    }

    /** Horizontal legend container, present only when `series` is used. */
    legendHorizontal?: HTMLElement | null

    /** Vertical legend container, present only when `series` is used. */
    legendVertical?: HTMLElement | null

    /** Choropleth data visualization instance, present only when `visualizeData` is used. */
    dataVisualization?: jsVectorMap.DataVisualization

    // ------------------------------------------------------------------
    // Public methods — general
    // ------------------------------------------------------------------

    /** Sets the background color of the map container. */
    setBackgroundColor(color: string): void

    /**
     * Registers a custom instance method on the map prototype.
     * @throws If a method with the given name already exists.
     */
    extend(name: string, callback: (this: jsVectorMap, ...args: any[]) => any): void

    /** Resets the map: clears series/legends, selections, markers and viewport. */
    reset(): void

    /**
     * Destroys the map, flushing all event listeners and the tooltip.
     * @param destroyInstance When `true` (default), deletes all own properties of the instance.
     */
    destroy(destroyInstance?: boolean): void

    // ------------------------------------------------------------------
    // Public methods — regions
    // ------------------------------------------------------------------

    /** Returns the codes of the currently selected regions. */
    getSelectedRegions(): string[]

    /**
     * Clears the selection of the given regions, or of all selected regions
     * when no argument is provided.
     */
    clearSelectedRegions(regions?: string | string[]): void

    /** Replaces the current region selection with the given region code(s). */
    setSelectedRegions(regions: string | string[]): void

    // ------------------------------------------------------------------
    // Public methods — markers
    // ------------------------------------------------------------------

    /** Returns the indexes of the currently selected markers. */
    getSelectedMarkers(): string[]

    /** Clears the selection of all selected markers. */
    clearSelectedMarkers(): void

    /** Selects markers by their index key(s). */
    setSelectedMarkers(markers: Array<string | number>): void

    /** Adds one or more markers to the map. */
    addMarkers(config: jsVectorMap.MarkerConfig | jsVectorMap.MarkerConfig[]): void

    /**
     * Removes the given markers by index. When no argument is provided,
     * all markers are removed.
     */
    removeMarkers(markers?: Array<string | number>): void

    // ------------------------------------------------------------------
    // Public methods — lines
    // ------------------------------------------------------------------

    /**
     * @deprecated Use {@link addLines} instead.
     */
    addLine(from: string, to: string, style?: jsVectorMap.LineStyle): void

    /** Adds one or more lines connecting existing markers (by their `name`). */
    addLines(config: jsVectorMap.LineConfig | jsVectorMap.LineConfig[]): void

    /**
     * Removes the given lines, or all lines when no argument is provided.
     */
    removeLines(lines?: Array<Pick<jsVectorMap.LineConfig, 'from' | 'to'>>): void

    /**
     * @deprecated Use {@link removeLines} instead.
     */
    removeLine(from: string, to: string): void

    // ------------------------------------------------------------------
    // Public methods — viewport / geometry (core mixin)
    // ------------------------------------------------------------------

    /** Focuses the map on region(s) or geographic coordinates. */
    setFocus(config: jsVectorMap.FocusConfig): void

    /** Recomputes the container size and re-applies the transform. */
    updateSize(): void

    /**
     * Converts geographic coordinates to a point on the map.
     * Returns `false` when the coordinates fall outside every inset.
     */
    coordsToPoint(lat: number, lng: number): jsVectorMap.Point | false

    /** Returns the inset that contains the given SVG point, if any. */
    getInsetForPoint(x: number, y: number): jsVectorMap.MapDataInset | undefined

    /** Returns the on-screen position of a marker given its config. */
    getMarkerPosition(config: Pick<jsVectorMap.MarkerConfig, 'coords'>): jsVectorMap.Point | false

    // ------------------------------------------------------------------
    // Static
    // ------------------------------------------------------------------

    /** Registers a map dataset under the given name. */
    static addMap(name: string, map: jsVectorMap.MapData): void
}

declare namespace jsVectorMap {
    // ------------------------------------------------------------------
    // Primitive helpers
    // ------------------------------------------------------------------

    /** A point in the SVG coordinate space. */
    interface Point {
        x: number
        y: number
    }

    /** A `[latitude, longitude]` pair. */
    type Coords = [number, number]

    /** A `[x, y]` pixel offset. */
    type Offset = [number, number]

    /** An image value used by marker/legend styles. */
    interface ImageStyle {
        url: string
        offset?: Offset
    }

    /** Accepted value for a single SVG presentation attribute. */
    type StyleValue = string | number | boolean | ImageStyle | undefined

    /**
     * A flat set of SVG presentation attributes (camelCase keys are hyphenated
     * automatically, e.g. `fillOpacity` -> `fill-opacity`).
     */
    interface StyleAttributes {
        fill?: string
        fillOpacity?: number
        stroke?: string
        strokeWidth?: number | string
        strokeOpacity?: number
        strokeLinecap?: string
        strokeDasharray?: string | number
        r?: number
        cursor?: string
        fontFamily?: string
        fontSize?: number | string
        fontWeight?: number | string
        /** Renders the marker as an image instead of a circle. */
        image?: string | ImageStyle
        [attr: string]: StyleValue
    }

    /** A component style with the four interaction states. */
    interface ElementStyle {
        initial?: StyleAttributes
        hover?: StyleAttributes
        selected?: StyleAttributes
        selectedHover?: StyleAttributes
    }

    /** Style for lines (a flat attribute set plus an optional curvature). */
    interface LineStyle extends StyleAttributes {
        /** Bends the line; `0` draws a straight line. */
        curvature?: number
    }

    // ------------------------------------------------------------------
    // Labels
    // ------------------------------------------------------------------

    /** Configuration for region/marker labels. */
    interface LabelOptions {
        /**
         * Returns the label text.
         * - For regions the callback receives `(code)`.
         * - For markers the callback receives `(config, index)`.
         */
        render?: (...args: any[]) => string | undefined | null
        /**
         * Positional offsets. Either an array indexed by key,
         * or a function returning `[x, y]` for a given key.
         */
        offsets?: Offset[] | ((key: string | number) => Offset)
    }

    interface Labels {
        markers?: LabelOptions
        regions?: LabelOptions
    }

    // ------------------------------------------------------------------
    // Markers & lines
    // ------------------------------------------------------------------

    interface MarkerConfig {
        /** Marker geographic (or plain xy) coordinates. */
        coords: Coords
        /** Marker name, used to link lines via `from`/`to`. */
        name?: string
        /** Per-marker style overrides. */
        style?: ElementStyle
        /** Explicit label offsets for this marker. */
        offsets?: Offset
        /** Arbitrary data forwarded to label `render`. */
        [key: string]: any
    }

    interface LineConfig {
        /** Name of the origin marker. */
        from: string
        /** Name of the destination marker. */
        to: string
        /** Per-line style overrides. */
        style?: LineStyle
    }

    // ------------------------------------------------------------------
    // Series / legend / data visualization
    // ------------------------------------------------------------------

    interface LegendOptions {
        /** Overrides the legend element's CSS class. */
        cssClass?: string
        /** Renders the legend into the vertical container. */
        vertical?: boolean
        /** Optional legend title. */
        title?: string
        /** Transforms each tick label before rendering. */
        labelRender?: (label: string) => string
    }

    interface SeriesConfig {
        /** The SVG attribute driven by this series (defaults to `fill`). */
        attribute?: string
        /** Values keyed by region code / marker index. */
        values?: Record<string, number | string>
        /** Static attributes applied immediately. */
        attributes?: Record<string, string>
        /** Ordinal scale mapping a value to an attribute value (e.g. a color). */
        scale?: Record<string, string | ImageStyle>
        /** Legend configuration for this series. */
        legend?: LegendOptions
    }

    interface SeriesOptions {
        markers?: SeriesConfig[]
        regions?: SeriesConfig[]
    }

    /** Choropleth (`visualizeData`) options. */
    interface VisualizeDataOptions {
        /** `[fromColor, toColor]` gradient endpoints as hex strings. */
        scale: [string, string]
        /** Numeric values keyed by region code. */
        values: Record<string, number>
    }

    // ------------------------------------------------------------------
    // Focus
    // ------------------------------------------------------------------

    interface FocusConfig {
        /** Focus a single region by code. */
        region?: string
        /** Focus multiple regions by code. */
        regions?: string[]
        /** Focus a geographic point `[lat, lng]`. */
        coords?: Coords
        /** Target scale (used together with `coords`). */
        scale?: number
        /** Animate the transition. */
        animate?: boolean
    }

    // ------------------------------------------------------------------
    // Event callbacks (invoked with `this` bound to the map instance)
    // ------------------------------------------------------------------

    interface EventHandlers {
        /** Fired once the map has finished initializing. */
        onLoaded?: (this: jsVectorMap, map: jsVectorMap) => void
        /** Fired whenever the viewport (scale/translation) changes. */
        onViewportChange?: (this: jsVectorMap, scale: number, transX: number, transY: number) => void
        /** Fired when a region is clicked. */
        onRegionClick?: (this: jsVectorMap, event: MouseEvent, code: string) => void
        /** Fired when a marker is clicked. */
        onMarkerClick?: (this: jsVectorMap, event: MouseEvent, index: string) => void
        /** Fired when a region selection state changes. */
        onRegionSelected?: (
            this: jsVectorMap,
            code: string,
            isSelected: boolean,
            selectedRegions: string[]
        ) => void
        /** Fired when a marker selection state changes. */
        onMarkerSelected?: (
            this: jsVectorMap,
            index: string,
            isSelected: boolean,
            selectedMarkers: string[]
        ) => void
        /** Fired before a region tooltip is shown; call `event.preventDefault()` to suppress it. */
        onRegionTooltipShow?: (
            this: jsVectorMap,
            event: MouseEvent,
            tooltip: Tooltip,
            code: string
        ) => void
        /** Fired before a marker tooltip is shown; call `event.preventDefault()` to suppress it. */
        onMarkerTooltipShow?: (
            this: jsVectorMap,
            event: MouseEvent,
            tooltip: Tooltip,
            index: string
        ) => void
        /** Fired when the map is destroyed. */
        onDestroyed?: (this: jsVectorMap) => void
    }

    // ------------------------------------------------------------------
    // Options
    // ------------------------------------------------------------------

    interface MapOptions extends EventHandlers {
        /** Target element or CSS selector the map is rendered into. Required. */
        selector: string | HTMLElement

        /** Name of a registered map dataset (default: `'world'`). */
        map?: string

        /** Container background color (default: `'transparent'`). */
        backgroundColor?: string

        /** Enables panning by dragging (default: `true`). */
        draggable?: boolean

        /** Renders the built-in zoom buttons (default: `true`). */
        zoomButtons?: boolean

        /** Custom zoom-in button element or selector. */
        zoomInButton?: string | HTMLElement

        /** Custom zoom-out button element or selector. */
        zoomOutButton?: string | HTMLElement

        /** Enables zooming with the mouse wheel (default: `true`). */
        zoomOnScroll?: boolean

        /** Wheel zoom sensitivity (default: `3`). */
        zoomOnScrollSpeed?: number

        /** Maximum zoom multiplier (default: `12`). */
        zoomMax?: number

        /** Minimum zoom multiplier (default: `1`). */
        zoomMin?: number

        /** Animate button/programmatic zooming (default: `true`). */
        zoomAnimate?: boolean

        /** Zoom multiplier per zoom step (default: `1.5`). */
        zoomStep?: number

        /** Shows tooltips on hover (default: `true`). */
        showTooltip?: boolean

        /** Binds touch (pan/pinch) events on touch devices (default: `true`). */
        bindTouchEvents?: boolean

        /** Default style applied to lines. */
        lineStyle?: LineStyle

        /** Allow markers to be selected (default: `false`). */
        markersSelectable?: boolean

        /** Restrict marker selection to one at a time (default: `false`). */
        markersSelectableOne?: boolean

        /** Marker style across interaction states. */
        markerStyle?: ElementStyle

        /** Marker label style across interaction states. */
        markerLabelStyle?: ElementStyle

        /** Allow regions to be selected (default: `false`). */
        regionsSelectable?: boolean

        /** Restrict region selection to one at a time (default: `false`). */
        regionsSelectableOne?: boolean

        /** Region style across interaction states. */
        regionStyle?: ElementStyle

        /** Region label style across interaction states. */
        regionLabelStyle?: ElementStyle

        /** Markers to render on load. */
        markers?: MarkerConfig[]

        /** Lines to render on load. */
        lines?: LineConfig[]

        /** Region/marker label configuration. */
        labels?: Labels

        /** Data series (with optional legends). */
        series?: SeriesOptions

        /** Choropleth data visualization. */
        visualizeData?: VisualizeDataOptions

        /** Region codes selected on load. */
        selectedRegions?: string[]

        /** Marker index keys selected on load. */
        selectedMarkers?: Array<string | number>

        /** Focus configuration applied on load. */
        focusOn?: FocusConfig
    }

    // ------------------------------------------------------------------
    // Map dataset
    // ------------------------------------------------------------------

    type ProjectionType = 'mill' | 'merc' | 'aea' | 'lcc'

    interface MapProjection {
        type: ProjectionType
        centralMeridian: number
    }

    interface MapDataInset {
        width: number
        height: number
        top: number
        left: number
        /** `[topLeft, bottomRight]` bounding box in projection space. */
        bbox: [Point, Point]
    }

    interface MapPath {
        /** SVG path `d` attribute for the region. */
        path: string
        /** Human-readable region name (used as default tooltip text). */
        name?: string
    }

    interface MapData {
        width: number
        height: number
        /** Region paths keyed by region code. */
        paths: Record<string, MapPath>
        /** Detached areas (e.g. Alaska, Hawaii). */
        insets?: MapDataInset[]
        /** Projection used for coordinate conversion. */
        projection?: MapProjection
    }

    // ------------------------------------------------------------------
    // Registry entries
    // ------------------------------------------------------------------

    interface RegionEntry {
        config: MapPath
        element: Region
    }

    interface MarkerEntry {
        _uid: string
        config: MarkerConfig
        element: Marker
    }

    // ------------------------------------------------------------------
    // SVG element wrappers
    // ------------------------------------------------------------------

    /** Base wrapper around a raw SVG DOM node. */
    interface SVGElement {
        node: globalThis.SVGElement
        addClass(className: string): void
        getBBox(): DOMRect
        set(property: Record<string, StyleValue>): void
        set(property: string, value: StyleValue): void
        get(property: string): StyleValue
        applyAttr(property: string, value: StyleValue): void
        remove(): void
    }

    /** A styled, stateful SVG shape (path/circle/line/text/image). */
    interface SVGShapeElement extends SVGElement {
        isHovered: boolean
        isSelected: boolean
        style: ElementStyle & { current: StyleAttributes }
        setStyle(property: StyleAttributes): void
        setStyle(property: string, value: StyleValue): void
        updateStyle(): void
    }

    /** A `<text>` element; accepts an extra `text` attribute in `set`/`applyAttr`. */
    type SVGTextElement = SVGShapeElement

    interface SVGImageElement extends SVGShapeElement {
        width?: number
        height?: number
        offset?: Offset
        cx?: number
        cy?: number
    }

    /** A group `<g>` element wrapper. */
    interface SVGGroupElement extends SVGElement {
        canvas?: SVGCanvasElement
    }

    /** The SVG canvas holding the whole map. */
    interface SVGCanvasElement extends SVGElement {
        node: SVGSVGElement
        setSize(width: number, height: number): void
        applyTransformParams(scale: number, transX: number, transY: number): void
        createPath(config: Record<string, StyleValue>, style?: ElementStyle, group?: SVGElement): SVGShapeElement
        createCircle(config: Record<string, StyleValue>, style?: ElementStyle, group?: SVGElement): SVGShapeElement
        createLine(config: Record<string, StyleValue>, style?: ElementStyle, group?: SVGElement): SVGShapeElement
        createText(config: Record<string, StyleValue>, style?: ElementStyle, group?: SVGElement): SVGTextElement
        createImage(config: Record<string, StyleValue>, style?: ElementStyle, group?: SVGElement): SVGImageElement
        createGroup(id?: string): SVGGroupElement
    }

    // ------------------------------------------------------------------
    // Components
    // ------------------------------------------------------------------

    /** Shared behaviour for interactive components (regions & markers). */
    interface Interactable {
        shape: SVGShapeElement
        label?: SVGTextElement
        isHovered?: boolean
        isSelected?: boolean
        getLabelText(key: string | number, label?: LabelOptions): string | undefined
        getLabelOffsets(key: string | number, label?: LabelOptions): Offset
        setStyle(property: string, value: StyleValue): void
        remove(): void
        hover(state: boolean): void
        select(state: boolean): void
    }

    interface BaseComponent {
        dispose(): void
    }

    interface Region extends BaseComponent, Interactable {
        labelX?: number
        labelY?: number
        updateLabelPosition(): void
    }

    interface Marker extends BaseComponent, Interactable {
        getConfig(): MarkerConfig
        updateLabelPosition(): void
    }

    interface Line extends BaseComponent {
        shape: SVGShapeElement
        getConfig(): LineConfig
        setStyle(property: StyleAttributes): void
        setStyle(property: string, value: StyleValue): void
    }

    /** The shared tooltip element. */
    interface Tooltip extends BaseComponent {
        getElement(): HTMLElement
        show(): void
        hide(): void
        /** Gets the current text when called without arguments, otherwise sets it. */
        text(): string
        text(value: string, html?: boolean): void
        css(css: Partial<CSSStyleDeclaration> | Record<string, string>): this
    }

    // ------------------------------------------------------------------
    // Scales & data visualization
    // ------------------------------------------------------------------

    interface OrdinalScale {
        getValue(value: string | number): string | ImageStyle
        getTicks(): Array<{ label: string; value: string | ImageStyle }>
    }

    interface Series {
        config: SeriesConfig & { attribute: string }
        scale: OrdinalScale
        legend?: unknown
        setValues(values: Record<string, number | string>): void
        setAttributes(attrs: Record<string, string>): void
        clear(): void
    }

    interface DataVisualization {
        min: number
        max: number
        setMinMaxValues(values: Record<string, number>): void
        visualize(): void
        setAttributes(attrs: Record<string, string>): void
        getValue(value: number): string
        hexToRgb(hex: string): [number, number, number]
    }
}

declare global {
    interface Window {
        jsVectorMap: typeof jsVectorMap
    }
}
