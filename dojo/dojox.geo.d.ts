// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="dojo.d.ts" />
/// <reference path="dijit.d.ts" />
/// <reference path="dojox.gfx.d.ts" />
declare module dojox {
    
    module geo {
        module charting {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/charting/_Marker.html
             *
             * 
             * @param markerData     
             * @param map     
             */
            class _Marker {
                constructor(markerData: any, map: any);
                /**
                 * 
                 */
                hide(): void;
                /**
                 * 
                 * @param featureId             
                 * @param evt             
                 */
                show(featureId: any, evt: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/charting/Feature.html
             *
             * A class to encapsulate a map element.
             * 
             * @param parent     
             * @param name     
             * @param shapeData     
             */
            class Feature {
                constructor(parent: any, name: any, shapeData: any);
                /**
                 * 
                 */
                "isSelected": boolean;
                /**
                 * 
                 */
                "markerText": Object;
                /**
                 * Initializes this feature.
                 * 
                 */
                init(): void;
                /**
                 * Sets the selected state of this feature to the given value.
                 * 
                 * @param selected A Boolean value indicating the selected state.             
                 */
                select(selected: boolean): void;
                /**
                 * sets a numeric value on this Feature object (used together with series to apply a color).
                 * 
                 * @param value A numeric value.             
                 */
                setValue(value: number): void;
                /**
                 * clears the colors on this Feature object.
                 * 
                 */
                unsetColor(): void;
                /**
                 * clears the numeric value on this Feature object (removes color).
                 * 
                 */
                unsetValue(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/charting/KeyboardInteractionSupport.html
             *
             * class to handle keyboard interactions on a dojox.geo.charting.Map component.
             * 
             * The sections on the leading edge should receive the focus in response to a TAB event.
             * Then use cursor keys to the peer sections. The cursor event should go the adjacent section
             * in that direction. With the focus, the section zooms in upon SPACE. The map should zoom out
             * on ESC. Finally, while it has the focus, the map should lose the focus on TAB.
             * 
             * @param map the Map component this class provides touch navigation for.     
             * @param options       OptionalAn object defining additional configuration properties. Currently,only the enableZoom property of this object is taken into account to enable/disablethe Map zooming capability.     
             */
            class KeyboardInteractionSupport {
                constructor(map: dojox.geo.charting.Map, options?: Object);
                /**
                 * connects this keyboard support class to the Map component
                 * 
                 */
                connect(): void;
                /**
                 * disconnects any installed listeners
                 * 
                 */
                disconnect(): void;
                /**
                 * Handles a keydown event.
                 * 
                 * @param e An event.             
                 */
                keydownHandler(e: KeyboardEvent): void;
                /**
                 * Handles the onBlur event.
                 * 
                 */
                onBlur(): void;
                /**
                 * Handles the onFocus event.
                 * 
                 * @param e An event.             
                 */
                onFocus(e: Event): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/charting/TouchInteractionSupport.html
             *
             * A class to handle touch interactions on a dojox/geo/charting/Map component.
             * 
             * @param map the Map widget this class provides touch navigation for.     
             */
            class TouchInteractionSupport {
                constructor(map: dojox.geo.charting.Map);
                /**
                 * install touch listeners
                 * 
                 */
                connect(): void;
                /**
                 * disconnects any installed listeners. Must be called only when disposing of this instance
                 * 
                 */
                disconnect(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/charting/MouseInteractionSupport.html
             *
             * class to handle mouse interactions on a dojox.geo.charting.Map widget
             * 
             * @param map the Map widget this class provides touch navigation for.     
             * @param options       OptionalAn object defining additional configuration properties.     
             */
            class MouseInteractionSupport {
                constructor(map: dojox.geo.charting.Map, options?: Object);
                /**
                 * 
                 */
                "mouseClickThreshold": number;
                /**
                 * connects this mouse support class to the Map component
                 * 
                 */
                connect(): void;
                /**
                 * disconnects any installed listeners
                 * 
                 */
                disconnect(): void;
                /**
                 * enables mouse panning on the map
                 * 
                 * @param enable Indicates whether mouse zoom is enabled.             
                 */
                setEnablePan(enable: boolean): void;
                /**
                 * enables mouse zoom on the map
                 * 
                 * @param enable Indicates whether mouse zoom is enabled.             
                 */
                setEnableZoom(enable: boolean): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/charting/Map.html
             *
             * Map widget interacted with charting.
             * Support rendering Americas, AsiaPacific, ContinentalEurope, EuropeMiddleEastAfrica,
             * USStates, WorldCountries, and WorldCountriesMercator by default.
             * 
             * @param container map container html node/id.     
             * @param shapeData map shape data json object, or url to json file.     
             */
            class Map {
                constructor(container: HTMLElement, shapeData: String);
                /**
                 * 
                 */
                "colorAnimationDuration": number;
                /**
                 * 
                 */
                "dataBindingAttribute": Object;
                /**
                 * 
                 */
                "dataBindingValueFunction": Object;
                /**
                 * 
                 */
                "dataStore": Object;
                /**
                 * Default map feature color, e.g: "#B7B7B7"
                 * 
                 */
                "defaultColor": string;
                /**
                 * 
                 */
                "enableFeatureZoom": boolean;
                /**
                 * Map feature color when mouse over it, e.g: "#"
                 * 
                 */
                "highlightColor": string;
                /**
                 * stack to data range, e.g: [{name:'label 1', min:20, max:70, color:'#DDDDDD'},{...},...]
                 * 
                 */
                "series": any[];
                /**
                 * 
                 */
                "showTooltips": boolean;
                /**
                 * sets ranges of data values (associated with label, color) to style map data values
                 * 
                 * @param series Either an url or an array of range objects such as : [{name:'label 1', min:20, max:70, color:'#DDDDDD'},{...},...]             
                 */
                addSeries(series: URL): void;
                /**
                 * sets ranges of data values (associated with label, color) to style map data values
                 * 
                 * @param series Either an url or an array of range objects such as : [{name:'label 1', min:20, max:70, color:'#DDDDDD'},{...},...]             
                 */
                addSeries(series: Object[]): void;
                /**
                 * deselect all features of map
                 * 
                 */
                deselectAll(): void;
                /**
                 * set this component's transformation so that the specified area fits in the component (centered)
                 * 
                 * @param mapArea the map area that needs to fill the component expressed as {x,y,w,h}             
                 * @param pixelMargin a margin (in pixels) from the borders of the Map component.             
                 * @param animate true if the transform change should be animated             
                 * @param onAnimationEnd a callback function to be executed when the animation completes (if animate set to true).             
                 */
                fitToMapArea(mapArea: Object, pixelMargin: number, animate: boolean, onAnimationEnd: Function): void;
                /**
                 * set this component's transformation so that the whole map data fits in the component (centered)
                 * 
                 * @param pixelMargin a margin (in pixels) from the borders of the Map component.             
                 * @param animate true if the transform change should be animated             
                 * @param onAnimationEnd a callback function to be executed when the animation completes (if animate set to true).             
                 */
                fitToMapContents(pixelMargin: number, animate: boolean, onAnimationEnd: Function): void;
                /**
                 * returns the map coordinates of the center of this Map component.
                 * 
                 */
                getMapCenter(): any;
                /**
                 * returns the scale of this Map component.
                 * 
                 */
                getMapScale(): any;
                /**
                 * converts map coordinates to screen coordinates given the current transform of this Map component
                 * 
                 * @param mapX the x coordinate of the point to convert.             
                 * @param mapY the y coordinate of the point to convert.             
                 */
                mapCoordsToScreenCoords(mapX: number, mapY: number): any;
                /**
                 * resize the underlying GFX surface to accommodate to parent DOM Node size change
                 * 
                 * @param adjustMapCenter keeps the center of the map when resizing the surface             
                 * @param adjustMapScale adjusts the map scale to keep the visible portion of the map as much as possible             
                 * @param animate             
                 */
                resize(adjustMapCenter: boolean, adjustMapScale: boolean, animate: boolean): void;
                /**
                 * converts screen coordinates to map coordinates given the current transform of this Map component
                 * 
                 * @param screenX the x coordinate of the point to convert.             
                 * @param screenY the y coordinate of the point to convert.             
                 */
                screenCoordsToMapCoords(screenX: number, screenY: number): any;
                /**
                 * sets the property name of the dataStore items to use as value (see Feature.setValue function)
                 * 
                 * @param prop the property             
                 */
                setDataBindingAttribute(prop: String): void;
                /**
                 * sets the function that extracts values from dataStore items,to use as Feature values (see Feature.setValue function)
                 * 
                 * @param valueFunction the function             
                 */
                setDataBindingValueFunction(valueFunction: Function): void;
                /**
                 * populate data for each map feature from fetched data store
                 * 
                 * @param dataStore the dataStore to fetch the information from             
                 * @param dataBindingProp sets the property name of the dataStore items to use as value             
                 */
                setDataStore(dataStore: dojo.data.ItemFileReadStore, dataBindingProp: String): void;
                /**
                 * set this component's transformation so that the map is centered on the specified map coordinates
                 * 
                 * @param centerX the X coordinate (in map coordinates) of the new center             
                 * @param centerY the Y coordinate (in map coordinates) of the new center             
                 * @param animate true if the transform change should be animated             
                 * @param onAnimationEnd a callback function to be executed when the animation completes (if animate set to true).             
                 */
                setMapCenter(centerX: number, centerY: number, animate: boolean, onAnimationEnd: Function): void;
                /**
                 * set this component's transformation so that the map is centered on the specified map coordinates
                 * and scaled to the specified scale.
                 * 
                 * @param centerX the X coordinate (in map coordinates) of the new center             
                 * @param centerY the Y coordinate (in map coordinates) of the new center             
                 * @param scale the scale of the map             
                 * @param animate true if the transform change should be animated             
                 * @param onAnimationEnd a callback function to be executed when the animation completes (if animate set to true).             
                 */
                setMapCenterAndScale(centerX: number, centerY: number, scale: number, animate: boolean, onAnimationEnd: Function): void;
                /**
                 * set this component's transformation so that the map is scaled to the specified scale.
                 * 
                 * @param scale the scale ratio.             
                 * @param animate true if the transform change should be animated             
                 * @param onAnimationEnd a callback function to be executed when the animation completes (if animate set to true).             
                 */
                setMapScale(scale: number, animate: boolean, onAnimationEnd: Function): void;
                /**
                 * set this component's transformation so that the map is scaled to the specified scale, and the specified
                 * point (in map coordinates) stays fixed on this Map component
                 * 
                 * @param scale the scale ratio.             
                 * @param fixedMapX the X coordinate (in map coordinates) of the fixed screen point             
                 * @param fixedMapY the Y coordinate (in map coordinates) of the fixed screen point             
                 * @param animate true if the transform change should be animated             
                 * @param onAnimationEnd a callback function to be executed when the animation completes (if animate set to true).             
                 */
                setMapScaleAt(scale: number, fixedMapX: number, fixedMapY: number, animate: boolean, onAnimationEnd: Function): void;
                /**
                 * import markers from outside file, associate with map feature by feature id
                 * which identified in map shape file, e.g: "NY":"New York"
                 * 
                 * @param markerFile outside marker data url, handled as json style.data format: {"NY":"New York",.....}             
                 */
                setMarkerData(markerFile: String): void;
                /**
                 * Invoked when the specified feature is clicked.
                 * 
                 * @param feature A Feature.             
                 */
                onFeatureClick(feature: dojox.geo.charting.Feature): void;
                /**
                 * Invoked when the specified feature is hovered.
                 * 
                 * @param feature A Feature.             
                 */
                onFeatureOver(feature: dojox.geo.charting.Feature): void;
                /**
                 * Invoked when the specified feature has been zoomed.
                 * 
                 * @param feature A Feature.             
                 */
                onZoomEnd(feature: dojox.geo.charting.Feature): void;
            }
            module widget {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/charting/widget/Legend.html
                 *
                 * A legend widget displaying association between colors and Feature value ranges.
                 * This widget basically is a table comprising (icon,string) pairs, describing the color scheme
                 * used for the map and its associated text descriptions.
                 * 
                 * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
                 * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
                 */
                class Legend extends dijit._Widget {
                    constructor(params?: Object, srcNodeRef?: HTMLElement);
                    /**
                     * Deprecated. Instead of attributeMap, widget should have a _setXXXAttr attribute
                     * for each XXX attribute to be mapped to the DOM.
                     * 
                     * attributeMap sets up a "binding" between attributes (aka properties)
                     * of the widget and the widget's DOM.
                     * Changes to widget attributes listed in attributeMap will be
                     * reflected into the DOM.
                     * 
                     * For example, calling set('title', 'hello')
                     * on a TitlePane will automatically cause the TitlePane's DOM to update
                     * with the new title.
                     * 
                     * attributeMap is a hash where the key is an attribute of the widget,
                     * and the value reflects a binding to a:
                     * 
                     * DOM node attribute
                     *   focus: {node: "focusNode", type: "attribute"}
                     * Maps this.focus to this.focusNode.focus
                     * 
                     * DOM node innerHTML
                     *   title: { node: "titleNode", type: "innerHTML" }
                     * Maps this.title to this.titleNode.innerHTML
                     * 
                     * DOM node innerText
                     *   title: { node: "titleNode", type: "innerText" }
                     * Maps this.title to this.titleNode.innerText
                     * 
                     * DOM node CSS class
                     *   myClass: { node: "domNode", type: "class" }
                     * Maps this.myClass to this.domNode.className
                     * 
                     * If the value is an array, then each element in the array matches one of the
                     * formats of the above list.
                     * 
                     * There are also some shorthands for backwards compatibility:
                     * 
                     * string --> { node: string, type: "attribute" }, for example:
                     * "focusNode" ---> { node: "focusNode", type: "attribute" }
                     * "" --> { node: "domNode", type: "attribute" }
                     * 
                     */
                    "attributeMap": Object;
                    set(property:"attributeMap", value: Object): void;
                    get(property:"attributeMap"): Object;
                    watch(property:"attributeMap", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * Root CSS class of the widget (ex: dijitTextBox), used to construct CSS classes to indicate
                     * widget state.
                     * 
                     */
                    "baseClass": string;
                    set(property:"baseClass", value: string): void;
                    get(property:"baseClass"): string;
                    watch(property:"baseClass", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "class": string;
                    set(property:"class", value: string): void;
                    get(property:"class"): string;
                    watch(property:"class", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * Designates where children of the source DOM node will be placed.
                     * "Children" in this case refers to both DOM nodes and widgets.
                     * For example, for myWidget:
                     * 
                     * <div data-dojo-type=myWidget>
                     *     <b> here's a plain DOM node
                     *     <span data-dojo-type=subWidget>and a widget</span>
                     *     <i> and another plain DOM node </i>
                     * </div>
                     * containerNode would point to:
                     * 
                     * <b> here's a plain DOM node
                     * <span data-dojo-type=subWidget>and a widget</span>
                     * <i> and another plain DOM node </i>
                     * In templated widgets, "containerNode" is set via a
                     * data-dojo-attach-point assignment.
                     * 
                     * containerNode must be defined for any widget that accepts innerHTML
                     * (like ContentPane or BorderContainer or even Button), and conversely
                     * is null for widgets that don't, like TextBox.
                     * 
                     */
                    "containerNode": HTMLElement;
                    set(property:"containerNode", value: HTMLElement): void;
                    get(property:"containerNode"): HTMLElement;
                    watch(property:"containerNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                    /**
                     * Bi-directional support, as defined by the HTML DIR
                     * attribute. Either left-to-right "ltr" or right-to-left "rtl".  If undefined, widgets renders in page's
                     * default direction.
                     * 
                     */
                    "dir": string;
                    set(property:"dir", value: string): void;
                    get(property:"dir"): string;
                    watch(property:"dir", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * This is our visible representation of the widget! Other DOM
                     * Nodes may by assigned to other properties, usually through the
                     * template system's data-dojo-attach-point syntax, but the domNode
                     * property is the canonical "top level" node in widget UI.
                     * 
                     */
                    "domNode": HTMLElement;
                    set(property:"domNode", value: HTMLElement): void;
                    get(property:"domNode"): HTMLElement;
                    watch(property:"domNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                    /**
                     * This widget or a widget it contains has focus, or is "active" because
                     * it was recently clicked.
                     * 
                     */
                    "focused": boolean;
                    set(property:"focused", value: boolean): void;
                    get(property:"focused"): boolean;
                    watch(property:"focused", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "horizontal": boolean;
                    set(property:"horizontal", value: boolean): void;
                    get(property:"horizontal"): boolean;
                    watch(property:"horizontal", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                    /**
                     * A unique, opaque ID string that can be assigned by users or by the
                     * system. If the developer passes an ID which is known not to be
                     * unique, the specified ID is ignored and the system-generated ID is
                     * used instead.
                     * 
                     */
                    "id": string;
                    set(property:"id", value: string): void;
                    get(property:"id"): string;
                    watch(property:"id", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * Rarely used.  Overrides the default Dojo locale used to render this widget,
                     * as defined by the HTML LANG attribute.
                     * Value must be among the list of locales specified during by the Dojo bootstrap,
                     * formatted according to RFC 3066 (like en-us).
                     * 
                     */
                    "lang": string;
                    set(property:"lang", value: string): void;
                    get(property:"lang"): string;
                    watch(property:"lang", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "legendBody": Object;
                    set(property:"legendBody", value: Object): void;
                    get(property:"legendBody"): Object;
                    watch(property:"legendBody", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "map": Object;
                    set(property:"map", value: Object): void;
                    get(property:"map"): Object;
                    watch(property:"map", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "observer": string;
                    set(property:"observer", value: string): void;
                    get(property:"observer"): string;
                    watch(property:"observer", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * The document this widget belongs to.  If not specified to constructor, will default to
                     * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
                     * 
                     */
                    "ownerDocument": Object;
                    set(property:"ownerDocument", value: Object): void;
                    get(property:"ownerDocument"): Object;
                    watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * pointer to original DOM node
                     * 
                     */
                    "srcNodeRef": HTMLElement;
                    set(property:"srcNodeRef", value: HTMLElement): void;
                    get(property:"srcNodeRef"): HTMLElement;
                    watch(property:"srcNodeRef", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                    /**
                     * HTML style attributes as cssText string or name/value hash
                     * 
                     */
                    "style": string;
                    set(property:"style", value: string): void;
                    get(property:"style"): string;
                    watch(property:"style", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "swatchSize": number;
                    set(property:"swatchSize", value: number): void;
                    get(property:"swatchSize"): number;
                    watch(property:"swatchSize", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                    /**
                     * HTML title attribute.
                     * 
                     * For form widgets this specifies a tooltip to display when hovering over
                     * the widget (just like the native HTML title attribute).
                     * 
                     * For TitlePane or for when this widget is a child of a TabContainer, AccordionContainer,
                     * etc., it's used to specify the tab label, accordion pane title, etc.  In this case it's
                     * interpreted as HTML.
                     * 
                     */
                    "title": string;
                    set(property:"title", value: string): void;
                    get(property:"title"): string;
                    watch(property:"title", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * When this widget's title attribute is used to for a tab label, accordion pane title, etc.,
                     * this specifies the tooltip to appear when the mouse is hovered over that text.
                     * 
                     */
                    "tooltip": string;
                    set(property:"tooltip", value: string): void;
                    get(property:"tooltip"): string;
                    watch(property:"tooltip", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * This method is deprecated, use get() or set() directly.
                     * 
                     * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
                     * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
                     */
                    attr(name: String, value: Object): any;
                    /**
                     * This method is deprecated, use get() or set() directly.
                     * 
                     * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
                     * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
                     */
                    attr(name: Object, value: Object): any;
                    /**
                     * 
                     */
                    buildRendering(): void;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: Object, event: String, method: String): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: any, event: String, method: String): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: Object, event: Function, method: String): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: any, event: Function, method: String): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: Object, event: String, method: Function): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: any, event: String, method: Function): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: Object, event: Function, method: Function): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: any, event: Function, method: Function): any;
                    /**
                     * Wrapper to setTimeout to avoid deferred functions executing
                     * after the originating widget has been destroyed.
                     * Returns an object handle with a remove method (that returns null) (replaces clearTimeout).
                     * 
                     * @param fcn Function reference.             
                     * @param delay               OptionalDelay, defaults to 0.             
                     */
                    defer(fcn: Function, delay: number): Object;
                    /**
                     * Destroy this widget, but not its descendants.  Descendants means widgets inside of
                     * this.containerNode.   Will also destroy any resources (including widgets) registered via this.own().
                     * 
                     * This method will also destroy internal widgets such as those created from a template,
                     * assuming those widgets exist inside of this.domNode but outside of this.containerNode.
                     * 
                     * For 2.0 it's planned that this method will also destroy descendant widgets, so apps should not
                     * depend on the current ability to destroy a widget without destroying its descendants.   Generally
                     * they should use destroyRecursive() for widgets with children.
                     * 
                     * @param preserveDom If true, this method will leave the original DOM structure alone.Note: This will not yet work with _TemplatedMixin widgets             
                     */
                    destroy(preserveDom?: boolean): void;
                    /**
                     * Recursively destroy the children of this widget and their
                     * descendants.
                     * 
                     * @param preserveDom               OptionalIf true, the preserveDom attribute is passed to all descendantwidget's .destroy() method. Not for use with _Templatedwidgets.             
                     */
                    destroyDescendants(preserveDom: boolean): void;
                    /**
                     * Destroy this widget and its descendants
                     * This is the generic "destructor" function that all widget users
                     * should call to cleanly discard with a widget. Once a widget is
                     * destroyed, it is removed from the manager object.
                     * 
                     * @param preserveDom               OptionalIf true, this method will leave the original DOM structurealone of descendant Widgets. Note: This will NOT work withdijit._TemplatedMixin widgets.             
                     */
                    destroyRecursive(preserveDom: boolean): void;
                    /**
                     * Destroys the DOM nodes associated with this widget.
                     * 
                     * @param preserveDom               OptionalIf true, this method will leave the original DOM structure aloneduring tear-down. Note: this will not work with _Templatedwidgets yet.             
                     */
                    destroyRendering(preserveDom?: boolean): void;
                    /**
                     * Deprecated, will be removed in 2.0, use handle.remove() instead.
                     * 
                     * Disconnects handle created by connect.
                     * 
                     * @param handle             
                     */
                    disconnect(handle: any): void;
                    /**
                     * Used by widgets to signal that a synthetic event occurred, ex:
                     * 
                     * myWidget.emit("attrmodified-selectedChildWidget", {}).
                     * Emits an event on this.domNode named type.toLowerCase(), based on eventObj.
                     * Also calls onType() method, if present, and returns value from that method.
                     * By default passes eventObj to callback, but will pass callbackArgs instead, if specified.
                     * Modifies eventObj by adding missing parameters (bubbles, cancelable, widget).
                     * 
                     * @param type             
                     * @param eventObj               Optional            
                     * @param callbackArgs               Optional            
                     */
                    emit(type: String, eventObj: Object, callbackArgs: any[]): any;
                    /**
                     * Get a property from a widget.
                     * Get a named property from a widget. The property may
                     * potentially be retrieved via a getter method. If no getter is defined, this
                     * just retrieves the object's property.
                     * 
                     * For example, if the widget has properties foo and bar
                     * and a method named _getFooAttr(), calling:
                     * myWidget.get("foo") would be equivalent to calling
                     * widget._getFooAttr() and myWidget.get("bar")
                     * would be equivalent to the expression
                     * widget.bar2
                     * 
                     * @param name The property to get.             
                     */
                    get(name: any): any;
                    /**
                     * Returns all direct children of this widget, i.e. all widgets underneath this.containerNode whose parent
                     * is this widget.   Note that it does not return all descendants, but rather just direct children.
                     * Analogous to Node.childNodes,
                     * except containing widgets rather than DOMNodes.
                     * 
                     * The result intentionally excludes internally created widgets (a.k.a. supporting widgets)
                     * outside of this.containerNode.
                     * 
                     * Note that the array returned is a simple array.  Application code should not assume
                     * existence of methods like forEach().
                     * 
                     */
                    getChildren(): any[];
                    /**
                     * Returns all the widgets contained by this, i.e., all widgets underneath this.containerNode.
                     * This method should generally be avoided as it returns widgets declared in templates, which are
                     * supposed to be internal/hidden, but it's left here for back-compat reasons.
                     * 
                     */
                    getDescendants(): any[];
                    /**
                     * Returns the parent widget of this widget.
                     * 
                     */
                    getParent(): any;
                    /**
                     * Return true if this widget can currently be focused
                     * and false if not
                     * 
                     */
                    isFocusable(): any;
                    /**
                     * Return this widget's explicit or implicit orientation (true for LTR, false for RTL)
                     * 
                     */
                    isLeftToRight(): any;
                    /**
                     * 
                     * @param type protected             
                     * @param func             
                     */
                    on(type: String, func: Function): any;
                    /**
                     * 
                     * @param type protected             
                     * @param func             
                     */
                    on(type: Function, func: Function): any;
                    /**
                     * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                     * already removed/destroyed manually.
                     * 
                     */
                    own(): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: String, position: String): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: HTMLElement, position: String): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: dijit._WidgetBase, position: String): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: String, position: number): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: HTMLElement, position: number): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: dijit._WidgetBase, position: number): any;
                    /**
                     * 
                     */
                    postCreate(): void;
                    /**
                     * Called after the parameters to the widget have been read-in,
                     * but before the widget template is instantiated. Especially
                     * useful to set properties that are referenced in the widget
                     * template.
                     * 
                     */
                    postMixInProperties(): void;
                    /**
                     * Refreshes this legend contents when Map series has changed.
                     * 
                     */
                    refresh(): void;
                    /**
                     * Set a property on a widget
                     * Sets named properties on a widget which may potentially be handled by a
                     * setter in the widget.
                     * 
                     * For example, if the widget has properties foo and bar
                     * and a method named _setFooAttr(), calling
                     * myWidget.set("foo", "Howdy!") would be equivalent to calling
                     * widget._setFooAttr("Howdy!") and myWidget.set("bar", 3)
                     * would be equivalent to the statement widget.bar = 3;
                     * 
                     * set() may also be called with a hash of name/value pairs, ex:
                     * 
                     * myWidget.set({
                     *     foo: "Howdy",
                     *     bar: 3
                     * });
                     * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                     * 
                     * @param name The property to set.             
                     * @param value The value to set in the property.             
                     */
                    set(name: any, value: any): any;
                    /**
                     * Deprecated.  Use set() instead.
                     * 
                     * @param attr             
                     * @param value             
                     */
                    setAttribute(attr: String, value: any): void;
                    /**
                     * Processing after the DOM fragment is added to the document
                     * Called after a widget and its children have been created and added to the page,
                     * and all related widgets have finished their create() cycle, up through postCreate().
                     * 
                     * Note that startup() may be called while the widget is still hidden, for example if the widget is
                     * inside a hidden dijit/Dialog or an unselected tab of a dijit/layout/TabContainer.
                     * For widgets that need to do layout, it's best to put that layout code inside resize(), and then
                     * extend dijit/layout/_LayoutWidget so that resize() is called when the widget is visible.
                     * 
                     */
                    startup(): void;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(topic.subscribe()) instead.
                     * 
                     * Subscribes to the specified topic and calls the specified method
                     * of this object and registers for unsubscribe() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.subscribe, except with the
                     * implicit use of this widget as the target object.
                     * 
                     * @param t The topic             
                     * @param method The callback             
                     */
                    subscribe(t: String, method: Function): any;
                    /**
                     * Returns a string that represents the widget.
                     * When a widget is cast to a string, this method will be used to generate the
                     * output. Currently, it does not implement any sort of reversible
                     * serialization.
                     * 
                     */
                    toString(): string;
                    /**
                     * Deprecated. Override destroy() instead to implement custom widget tear-down
                     * behavior.
                     * 
                     */
                    uninitialize(): boolean;
                    /**
                     * Deprecated, will be removed in 2.0, use handle.remove() instead.
                     * 
                     * Unsubscribes handle created by this.subscribe.
                     * Also removes handle from this widget's list of subscriptions
                     * 
                     * @param handle             
                     */
                    unsubscribe(handle: Object): void;
                    /**
                     * Watches a property for changes
                     * 
                     * @param name               OptionalIndicates the property to watch. This is optional (the callback may be theonly parameter), and if omitted, all the properties will be watched             
                     * @param callback The function to execute when the property changes. This will be called afterthe property has been changed. The callback will be called with the |this|set to the instance, the first argument as the name of the property, thesecond argument as the old value and the third argument as the new value.             
                     */
                    watch(property: string, callback:{(property?:string, oldValue?:any, newValue?: any):void}) :{unwatch():void};
                    /**
                     * Called when the widget stops being "active" because
                     * focus moved to something outside of it, or the user
                     * clicked somewhere outside of it, or the widget was
                     * hidden.
                     * 
                     */
                    onBlur(): void;
                    /**
                     * Connect to this function to receive notifications of mouse click events.
                     * 
                     * @param event mouse Event             
                     */
                    onClick(event: any): void;
                    /**
                     * Called when this widget is being displayed as a popup (ex: a Calendar popped
                     * up from a DateTextBox), and it is hidden.
                     * This is called from the dijit.popup code, and should not be called directly.
                     * 
                     * Also used as a parameter for children of dijit/layout/StackContainer or subclasses.
                     * Callback if a user tries to close the child.   Child will be closed if this function returns true.
                     * 
                     */
                    onClose(): boolean;
                    /**
                     * Connect to this function to receive notifications of mouse double click events.
                     * 
                     * @param event mouse Event             
                     */
                    onDblClick(event: any): void;
                    /**
                     * Called when the widget becomes "active" because
                     * it or a widget inside of it either has focus, or has recently
                     * been clicked.
                     * 
                     */
                    onFocus(): void;
                    /**
                     * Called when another widget becomes the selected pane in a
                     * dijit/layout/TabContainer, dijit/layout/StackContainer,
                     * dijit/layout/AccordionContainer, etc.
                     * 
                     * Also called to indicate hide of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
                     * 
                     */
                    onHide(): void;
                    /**
                     * Connect to this function to receive notifications of keys being pressed down.
                     * 
                     * @param event key Event             
                     */
                    onKeyDown(event: any): void;
                    /**
                     * Connect to this function to receive notifications of printable keys being typed.
                     * 
                     * @param event key Event             
                     */
                    onKeyPress(event: any): void;
                    /**
                     * Connect to this function to receive notifications of keys being released.
                     * 
                     * @param event key Event             
                     */
                    onKeyUp(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse button is pressed down.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseDown(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves onto this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseEnter(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves off of this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseLeave(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves over nodes contained within this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseMove(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves off of nodes contained within this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseOut(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves onto nodes contained within this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseOver(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse button is released.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseUp(event: any): void;
                    /**
                     * Called when this widget becomes the selected pane in a
                     * dijit/layout/TabContainer, dijit/layout/StackContainer,
                     * dijit/layout/AccordionContainer, etc.
                     * 
                     * Also called to indicate display of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
                     * 
                     */
                    onShow(): void;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/charting/widget/Map.html
                 *
                 * A map viewer widget based on the dojox.geo.charting.Map component
                 * The dojox.geo.charting.widget.Map widget combines map display together with charting capabilities.
                 * It encapsulates  an dojox.geo.charting.Map object on which most operations are delegated.
                 * Parameters can be passed as argument at construction time to specify map data file (json shape format)
                 * as well as charting data.
                 * 
                 * The parameters are:
                 * 
                 * shapeData: The json object containing map data or the name of the file containing map data.
                 * dataStore: the dataStore to fetch the charting data from
                 * dataBindingAttribute: property name of the dataStore items to use as value for charting
                 * markerData: tooltips to display for map features, handled as json style.
                 * adjustMapCenterOnResize: if true, the center of the map remains the same when resizing the widget
                 * adjustMapScaleOnResize: if true, the map scale is adjusted to leave the visible portion of the map identical as much as possible
                 * 
                 * @param options     
                 * @param div     
                 */
                class Map extends dijit._Widget {
                    constructor(options: Object, div: HTMLElement);
                    /**
                     * 
                     */
                    "adjustMapCenterOnResize": Object;
                    set(property:"adjustMapCenterOnResize", value: Object): void;
                    get(property:"adjustMapCenterOnResize"): Object;
                    watch(property:"adjustMapCenterOnResize", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "adjustMapScaleOnResize": Object;
                    set(property:"adjustMapScaleOnResize", value: Object): void;
                    get(property:"adjustMapScaleOnResize"): Object;
                    watch(property:"adjustMapScaleOnResize", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "animateOnResize": Object;
                    set(property:"animateOnResize", value: Object): void;
                    get(property:"animateOnResize"): Object;
                    watch(property:"animateOnResize", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * Deprecated. Instead of attributeMap, widget should have a _setXXXAttr attribute
                     * for each XXX attribute to be mapped to the DOM.
                     * 
                     * attributeMap sets up a "binding" between attributes (aka properties)
                     * of the widget and the widget's DOM.
                     * Changes to widget attributes listed in attributeMap will be
                     * reflected into the DOM.
                     * 
                     * For example, calling set('title', 'hello')
                     * on a TitlePane will automatically cause the TitlePane's DOM to update
                     * with the new title.
                     * 
                     * attributeMap is a hash where the key is an attribute of the widget,
                     * and the value reflects a binding to a:
                     * 
                     * DOM node attribute
                     *   focus: {node: "focusNode", type: "attribute"}
                     * Maps this.focus to this.focusNode.focus
                     * 
                     * DOM node innerHTML
                     *   title: { node: "titleNode", type: "innerHTML" }
                     * Maps this.title to this.titleNode.innerHTML
                     * 
                     * DOM node innerText
                     *   title: { node: "titleNode", type: "innerText" }
                     * Maps this.title to this.titleNode.innerText
                     * 
                     * DOM node CSS class
                     *   myClass: { node: "domNode", type: "class" }
                     * Maps this.myClass to this.domNode.className
                     * 
                     * If the value is an array, then each element in the array matches one of the
                     * formats of the above list.
                     * 
                     * There are also some shorthands for backwards compatibility:
                     * 
                     * string --> { node: string, type: "attribute" }, for example:
                     * "focusNode" ---> { node: "focusNode", type: "attribute" }
                     * "" --> { node: "domNode", type: "attribute" }
                     * 
                     */
                    "attributeMap": Object;
                    set(property:"attributeMap", value: Object): void;
                    get(property:"attributeMap"): Object;
                    watch(property:"attributeMap", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * Root CSS class of the widget (ex: dijitTextBox), used to construct CSS classes to indicate
                     * widget state.
                     * 
                     */
                    "baseClass": string;
                    set(property:"baseClass", value: string): void;
                    get(property:"baseClass"): string;
                    watch(property:"baseClass", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "class": string;
                    set(property:"class", value: string): void;
                    get(property:"class"): string;
                    watch(property:"class", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "colorAnimationDuration": number;
                    set(property:"colorAnimationDuration", value: number): void;
                    get(property:"colorAnimationDuration"): number;
                    watch(property:"colorAnimationDuration", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                    /**
                     * Designates where children of the source DOM node will be placed.
                     * "Children" in this case refers to both DOM nodes and widgets.
                     * For example, for myWidget:
                     * 
                     * <div data-dojo-type=myWidget>
                     *     <b> here's a plain DOM node
                     *     <span data-dojo-type=subWidget>and a widget</span>
                     *     <i> and another plain DOM node </i>
                     * </div>
                     * containerNode would point to:
                     * 
                     * <b> here's a plain DOM node
                     * <span data-dojo-type=subWidget>and a widget</span>
                     * <i> and another plain DOM node </i>
                     * In templated widgets, "containerNode" is set via a
                     * data-dojo-attach-point assignment.
                     * 
                     * containerNode must be defined for any widget that accepts innerHTML
                     * (like ContentPane or BorderContainer or even Button), and conversely
                     * is null for widgets that don't, like TextBox.
                     * 
                     */
                    "containerNode": HTMLElement;
                    set(property:"containerNode", value: HTMLElement): void;
                    get(property:"containerNode"): HTMLElement;
                    watch(property:"containerNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "dataBindingAttribute": string;
                    set(property:"dataBindingAttribute", value: string): void;
                    get(property:"dataBindingAttribute"): string;
                    watch(property:"dataBindingAttribute", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "dataBindingValueFunction": Object;
                    set(property:"dataBindingValueFunction", value: Object): void;
                    get(property:"dataBindingValueFunction"): Object;
                    watch(property:"dataBindingValueFunction", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "dataStore": Object;
                    set(property:"dataStore", value: Object): void;
                    get(property:"dataStore"): Object;
                    watch(property:"dataStore", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * Bi-directional support, as defined by the HTML DIR
                     * attribute. Either left-to-right "ltr" or right-to-left "rtl".  If undefined, widgets renders in page's
                     * default direction.
                     * 
                     */
                    "dir": string;
                    set(property:"dir", value: string): void;
                    get(property:"dir"): string;
                    watch(property:"dir", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * This is our visible representation of the widget! Other DOM
                     * Nodes may by assigned to other properties, usually through the
                     * template system's data-dojo-attach-point syntax, but the domNode
                     * property is the canonical "top level" node in widget UI.
                     * 
                     */
                    "domNode": HTMLElement;
                    set(property:"domNode", value: HTMLElement): void;
                    get(property:"domNode"): HTMLElement;
                    watch(property:"domNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "enableFeatureZoom": Object;
                    set(property:"enableFeatureZoom", value: Object): void;
                    get(property:"enableFeatureZoom"): Object;
                    watch(property:"enableFeatureZoom", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "enableKeyboardSupport": boolean;
                    set(property:"enableKeyboardSupport", value: boolean): void;
                    get(property:"enableKeyboardSupport"): boolean;
                    watch(property:"enableKeyboardSupport", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "enableMousePan": Object;
                    set(property:"enableMousePan", value: Object): void;
                    get(property:"enableMousePan"): Object;
                    watch(property:"enableMousePan", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "enableMouseSupport": Object;
                    set(property:"enableMouseSupport", value: Object): void;
                    get(property:"enableMouseSupport"): Object;
                    watch(property:"enableMouseSupport", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "enableMouseZoom": Object;
                    set(property:"enableMouseZoom", value: Object): void;
                    get(property:"enableMouseZoom"): Object;
                    watch(property:"enableMouseZoom", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "enableTouchSupport": Object;
                    set(property:"enableTouchSupport", value: Object): void;
                    get(property:"enableTouchSupport"): Object;
                    watch(property:"enableTouchSupport", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * This widget or a widget it contains has focus, or is "active" because
                     * it was recently clicked.
                     * 
                     */
                    "focused": boolean;
                    set(property:"focused", value: boolean): void;
                    get(property:"focused"): boolean;
                    watch(property:"focused", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                    /**
                     * A unique, opaque ID string that can be assigned by users or by the
                     * system. If the developer passes an ID which is known not to be
                     * unique, the specified ID is ignored and the system-generated ID is
                     * used instead.
                     * 
                     */
                    "id": string;
                    set(property:"id", value: string): void;
                    get(property:"id"): string;
                    watch(property:"id", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * Rarely used.  Overrides the default Dojo locale used to render this widget,
                     * as defined by the HTML LANG attribute.
                     * Value must be among the list of locales specified during by the Dojo bootstrap,
                     * formatted according to RFC 3066 (like en-us).
                     * 
                     */
                    "lang": string;
                    set(property:"lang", value: string): void;
                    get(property:"lang"): string;
                    watch(property:"lang", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "markerData": string;
                    set(property:"markerData", value: string): void;
                    get(property:"markerData"): string;
                    watch(property:"markerData", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "mouseClickThreshold": number;
                    set(property:"mouseClickThreshold", value: number): void;
                    get(property:"mouseClickThreshold"): number;
                    watch(property:"mouseClickThreshold", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "observer": string;
                    set(property:"observer", value: string): void;
                    get(property:"observer"): string;
                    watch(property:"observer", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "onFeatureClick": Object;
                    set(property:"onFeatureClick", value: Object): void;
                    get(property:"onFeatureClick"): Object;
                    watch(property:"onFeatureClick", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "onFeatureOver": Object;
                    set(property:"onFeatureOver", value: Object): void;
                    get(property:"onFeatureOver"): Object;
                    watch(property:"onFeatureOver", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * The document this widget belongs to.  If not specified to constructor, will default to
                     * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
                     * 
                     */
                    "ownerDocument": Object;
                    set(property:"ownerDocument", value: Object): void;
                    get(property:"ownerDocument"): Object;
                    watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "series": string;
                    set(property:"series", value: string): void;
                    get(property:"series"): string;
                    watch(property:"series", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "shapeData": string;
                    set(property:"shapeData", value: string): void;
                    get(property:"shapeData"): string;
                    watch(property:"shapeData", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "showTooltips": boolean;
                    set(property:"showTooltips", value: boolean): void;
                    get(property:"showTooltips"): boolean;
                    watch(property:"showTooltips", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                    /**
                     * pointer to original DOM node
                     * 
                     */
                    "srcNodeRef": HTMLElement;
                    set(property:"srcNodeRef", value: HTMLElement): void;
                    get(property:"srcNodeRef"): HTMLElement;
                    watch(property:"srcNodeRef", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                    /**
                     * HTML style attributes as cssText string or name/value hash
                     * 
                     */
                    "style": string;
                    set(property:"style", value: string): void;
                    get(property:"style"): string;
                    watch(property:"style", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * HTML title attribute.
                     * 
                     * For form widgets this specifies a tooltip to display when hovering over
                     * the widget (just like the native HTML title attribute).
                     * 
                     * For TitlePane or for when this widget is a child of a TabContainer, AccordionContainer,
                     * etc., it's used to specify the tab label, accordion pane title, etc.  In this case it's
                     * interpreted as HTML.
                     * 
                     */
                    "title": string;
                    set(property:"title", value: string): void;
                    get(property:"title"): string;
                    watch(property:"title", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * When this widget's title attribute is used to for a tab label, accordion pane title, etc.,
                     * this specifies the tooltip to appear when the mouse is hovered over that text.
                     * 
                     */
                    "tooltip": string;
                    set(property:"tooltip", value: string): void;
                    get(property:"tooltip"): string;
                    watch(property:"tooltip", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * This method is deprecated, use get() or set() directly.
                     * 
                     * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
                     * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
                     */
                    attr(name: String, value: Object): any;
                    /**
                     * This method is deprecated, use get() or set() directly.
                     * 
                     * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
                     * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
                     */
                    attr(name: Object, value: Object): any;
                    /**
                     * 
                     */
                    buildRendering(): void;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: Object, event: String, method: String): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: any, event: String, method: String): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: Object, event: Function, method: String): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: any, event: Function, method: String): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: Object, event: String, method: Function): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: any, event: String, method: Function): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: Object, event: Function, method: Function): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: any, event: Function, method: Function): any;
                    /**
                     * 
                     * @param params               Optional            
                     * @param srcNodeRef               Optional            
                     */
                    create(params: Object, srcNodeRef: HTMLElement): void;
                    /**
                     * 
                     * @param params               Optional            
                     * @param srcNodeRef               Optional            
                     */
                    create(params: Object, srcNodeRef: String): void;
                    /**
                     * Wrapper to setTimeout to avoid deferred functions executing
                     * after the originating widget has been destroyed.
                     * Returns an object handle with a remove method (that returns null) (replaces clearTimeout).
                     * 
                     * @param fcn Function reference.             
                     * @param delay               OptionalDelay, defaults to 0.             
                     */
                    defer(fcn: Function, delay: number): Object;
                    /**
                     * Destroy this widget, but not its descendants.  Descendants means widgets inside of
                     * this.containerNode.   Will also destroy any resources (including widgets) registered via this.own().
                     * 
                     * This method will also destroy internal widgets such as those created from a template,
                     * assuming those widgets exist inside of this.domNode but outside of this.containerNode.
                     * 
                     * For 2.0 it's planned that this method will also destroy descendant widgets, so apps should not
                     * depend on the current ability to destroy a widget without destroying its descendants.   Generally
                     * they should use destroyRecursive() for widgets with children.
                     * 
                     * @param preserveDom If true, this method will leave the original DOM structure alone.Note: This will not yet work with _TemplatedMixin widgets             
                     */
                    destroy(preserveDom?: boolean): void;
                    /**
                     * Recursively destroy the children of this widget and their
                     * descendants.
                     * 
                     * @param preserveDom               OptionalIf true, the preserveDom attribute is passed to all descendantwidget's .destroy() method. Not for use with _Templatedwidgets.             
                     */
                    destroyDescendants(preserveDom: boolean): void;
                    /**
                     * Destroy this widget and its descendants
                     * This is the generic "destructor" function that all widget users
                     * should call to cleanly discard with a widget. Once a widget is
                     * destroyed, it is removed from the manager object.
                     * 
                     * @param preserveDom               OptionalIf true, this method will leave the original DOM structurealone of descendant Widgets. Note: This will NOT work withdijit._TemplatedMixin widgets.             
                     */
                    destroyRecursive(preserveDom: boolean): void;
                    /**
                     * Destroys the DOM nodes associated with this widget.
                     * 
                     * @param preserveDom               OptionalIf true, this method will leave the original DOM structure aloneduring tear-down. Note: this will not work with _Templatedwidgets yet.             
                     */
                    destroyRendering(preserveDom?: boolean): void;
                    /**
                     * Deprecated, will be removed in 2.0, use handle.remove() instead.
                     * 
                     * Disconnects handle created by connect.
                     * 
                     * @param handle             
                     */
                    disconnect(handle: any): void;
                    /**
                     * Used by widgets to signal that a synthetic event occurred, ex:
                     * 
                     * myWidget.emit("attrmodified-selectedChildWidget", {}).
                     * Emits an event on this.domNode named type.toLowerCase(), based on eventObj.
                     * Also calls onType() method, if present, and returns value from that method.
                     * By default passes eventObj to callback, but will pass callbackArgs instead, if specified.
                     * Modifies eventObj by adding missing parameters (bubbles, cancelable, widget).
                     * 
                     * @param type             
                     * @param eventObj               Optional            
                     * @param callbackArgs               Optional            
                     */
                    emit(type: String, eventObj: Object, callbackArgs: any[]): any;
                    /**
                     * Get a property from a widget.
                     * Get a named property from a widget. The property may
                     * potentially be retrieved via a getter method. If no getter is defined, this
                     * just retrieves the object's property.
                     * 
                     * For example, if the widget has properties foo and bar
                     * and a method named _getFooAttr(), calling:
                     * myWidget.get("foo") would be equivalent to calling
                     * widget._getFooAttr() and myWidget.get("bar")
                     * would be equivalent to the expression
                     * widget.bar2
                     * 
                     * @param name The property to get.             
                     */
                    get(name: any): any;
                    /**
                     * Returns all direct children of this widget, i.e. all widgets underneath this.containerNode whose parent
                     * is this widget.   Note that it does not return all descendants, but rather just direct children.
                     * Analogous to Node.childNodes,
                     * except containing widgets rather than DOMNodes.
                     * 
                     * The result intentionally excludes internally created widgets (a.k.a. supporting widgets)
                     * outside of this.containerNode.
                     * 
                     * Note that the array returned is a simple array.  Application code should not assume
                     * existence of methods like forEach().
                     * 
                     */
                    getChildren(): any[];
                    /**
                     * Returns all the widgets contained by this, i.e., all widgets underneath this.containerNode.
                     * This method should generally be avoided as it returns widgets declared in templates, which are
                     * supposed to be internal/hidden, but it's left here for back-compat reasons.
                     * 
                     */
                    getDescendants(): any[];
                    /**
                     * 
                     */
                    getInnerMap(): any;
                    /**
                     * Returns the parent widget of this widget.
                     * 
                     */
                    getParent(): any;
                    /**
                     * Return true if this widget can currently be focused
                     * and false if not
                     * 
                     */
                    isFocusable(): any;
                    /**
                     * Return this widget's explicit or implicit orientation (true for LTR, false for RTL)
                     * 
                     */
                    isLeftToRight(): any;
                    /**
                     * 
                     * @param type protected             
                     * @param func             
                     */
                    on(type: String, func: Function): any;
                    /**
                     * 
                     * @param type protected             
                     * @param func             
                     */
                    on(type: Function, func: Function): any;
                    /**
                     * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                     * already removed/destroyed manually.
                     * 
                     */
                    own(): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: String, position: String): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: HTMLElement, position: String): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: dijit._WidgetBase, position: String): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: String, position: number): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: HTMLElement, position: number): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: dijit._WidgetBase, position: number): any;
                    /**
                     * 
                     */
                    postCreate(): void;
                    /**
                     * 
                     */
                    postMixInProperties(): void;
                    /**
                     * Resize the widget.
                     * Resize the domNode and the widget to the dimensions of a box of the following form:
                     * { l: 50, t: 200, w: 300: h: 150 }
                     * 
                     * @param b               OptionalAn hash with optional "l", "t", "w", and "h" properties for "left", "right", "width", and "height"respectively; or a number representing the new width.             
                     * @param height               OptionalA number representing the new height.             
                     */
                    resize(b: Object, height: number): void;
                    /**
                     * Resize the widget.
                     * Resize the domNode and the widget to the dimensions of a box of the following form:
                     * { l: 50, t: 200, w: 300: h: 150 }
                     * 
                     * @param b               OptionalAn hash with optional "l", "t", "w", and "h" properties for "left", "right", "width", and "height"respectively; or a number representing the new width.             
                     * @param height               OptionalA number representing the new height.             
                     */
                    resize(b: number, height: number): void;
                    /**
                     * Set a property on a widget
                     * Sets named properties on a widget which may potentially be handled by a
                     * setter in the widget.
                     * 
                     * For example, if the widget has properties foo and bar
                     * and a method named _setFooAttr(), calling
                     * myWidget.set("foo", "Howdy!") would be equivalent to calling
                     * widget._setFooAttr("Howdy!") and myWidget.set("bar", 3)
                     * would be equivalent to the statement widget.bar = 3;
                     * 
                     * set() may also be called with a hash of name/value pairs, ex:
                     * 
                     * myWidget.set({
                     *     foo: "Howdy",
                     *     bar: 3
                     * });
                     * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                     * 
                     * @param name The property to set.             
                     * @param value The value to set in the property.             
                     */
                    set(name: any, value: any): any;
                    /**
                     * Deprecated.  Use set() instead.
                     * 
                     * @param attr             
                     * @param value             
                     */
                    setAttribute(attr: String, value: any): void;
                    /**
                     * 
                     */
                    startup(): void;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(topic.subscribe()) instead.
                     * 
                     * Subscribes to the specified topic and calls the specified method
                     * of this object and registers for unsubscribe() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.subscribe, except with the
                     * implicit use of this widget as the target object.
                     * 
                     * @param t The topic             
                     * @param method The callback             
                     */
                    subscribe(t: String, method: Function): any;
                    /**
                     * Returns a string that represents the widget.
                     * When a widget is cast to a string, this method will be used to generate the
                     * output. Currently, it does not implement any sort of reversible
                     * serialization.
                     * 
                     */
                    toString(): string;
                    /**
                     * Deprecated. Override destroy() instead to implement custom widget tear-down
                     * behavior.
                     * 
                     */
                    uninitialize(): boolean;
                    /**
                     * Deprecated, will be removed in 2.0, use handle.remove() instead.
                     * 
                     * Unsubscribes handle created by this.subscribe.
                     * Also removes handle from this widget's list of subscriptions
                     * 
                     * @param handle             
                     */
                    unsubscribe(handle: Object): void;
                    /**
                     * Watches a property for changes
                     * 
                     * @param name               OptionalIndicates the property to watch. This is optional (the callback may be theonly parameter), and if omitted, all the properties will be watched             
                     * @param callback The function to execute when the property changes. This will be called afterthe property has been changed. The callback will be called with the |this|set to the instance, the first argument as the name of the property, thesecond argument as the old value and the third argument as the new value.             
                     */
                    watch(property: string, callback:{(property?:string, oldValue?:any, newValue?: any):void}) :{unwatch():void};
                    /**
                     * Called when the widget stops being "active" because
                     * focus moved to something outside of it, or the user
                     * clicked somewhere outside of it, or the widget was
                     * hidden.
                     * 
                     */
                    onBlur(): void;
                    /**
                     * Connect to this function to receive notifications of mouse click events.
                     * 
                     * @param event mouse Event             
                     */
                    onClick(event: any): void;
                    /**
                     * Called when this widget is being displayed as a popup (ex: a Calendar popped
                     * up from a DateTextBox), and it is hidden.
                     * This is called from the dijit.popup code, and should not be called directly.
                     * 
                     * Also used as a parameter for children of dijit/layout/StackContainer or subclasses.
                     * Callback if a user tries to close the child.   Child will be closed if this function returns true.
                     * 
                     */
                    onClose(): boolean;
                    /**
                     * Connect to this function to receive notifications of mouse double click events.
                     * 
                     * @param event mouse Event             
                     */
                    onDblClick(event: any): void;
                    /**
                     * Called when the widget becomes "active" because
                     * it or a widget inside of it either has focus, or has recently
                     * been clicked.
                     * 
                     */
                    onFocus(): void;
                    /**
                     * Called when another widget becomes the selected pane in a
                     * dijit/layout/TabContainer, dijit/layout/StackContainer,
                     * dijit/layout/AccordionContainer, etc.
                     * 
                     * Also called to indicate hide of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
                     * 
                     */
                    onHide(): void;
                    /**
                     * Connect to this function to receive notifications of keys being pressed down.
                     * 
                     * @param event key Event             
                     */
                    onKeyDown(event: any): void;
                    /**
                     * Connect to this function to receive notifications of printable keys being typed.
                     * 
                     * @param event key Event             
                     */
                    onKeyPress(event: any): void;
                    /**
                     * Connect to this function to receive notifications of keys being released.
                     * 
                     * @param event key Event             
                     */
                    onKeyUp(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse button is pressed down.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseDown(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves onto this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseEnter(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves off of this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseLeave(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves over nodes contained within this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseMove(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves off of nodes contained within this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseOut(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves onto nodes contained within this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseOver(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse button is released.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseUp(event: any): void;
                    /**
                     * Called when this widget becomes the selected pane in a
                     * dijit/layout/TabContainer, dijit/layout/StackContainer,
                     * dijit/layout/AccordionContainer, etc.
                     * 
                     * Also called to indicate display of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
                     * 
                     */
                    onShow(): void;
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/charting/_base.html
             *
             * 
             */
            interface _base {
                /**
                 * Hides the tooltip displayed around the given shape.
                 * 
                 * @param gfxObject A gfx shape.             
                 */
                hideTooltip(gfxObject: dojox.gfx.shape.Shape): void;
                /**
                 * Show a Tooltip displaying the given HTML message around the given gfx shape.
                 * 
                 * @param innerHTML The message to display as a HTML string.             
                 * @param gfxObject The gfx shape around which the tooltip will be placed.             
                 * @param positions               Optional            
                 */
                showTooltip(innerHTML: String, gfxObject: dojox.gfx.shape.Shape, positions: String[]): void;
            }
        }

        module openlayers {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/Collection.html
             *
             * A collection of geometries. 
             * 
             * @param coords Coordinates of the geometry. {x:x, y:y} object for a point geometry, array of {x:x, y:y}objects for line string geometry, array of geometries for collection geometry.     
             */
            class Collection extends dojox.geo.openlayers.Geometry {
                constructor(coords: Object);
                /**
                 * An array of geometries.
                 * 
                 */
                "coordinates": any[];
                /**
                 * Returns the geometries.
                 * 
                 */
                getGeometries(): any;
                /**
                 * Sets the geometries
                 * 
                 * @param g The array of geometries.             
                 */
                setGeometries(g: any[]): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/Feature.html
             *
             * A Feature encapsulates an item so that it can be added to a Layer.
             * This class is not attended to be used as it, but serve as a base class
             * for specific features such as GeometryFeature which can display georeferenced 
             * geometries and WidgetFeature which can display georeferenced widgets. 
             * 
             */
            class Feature {
                constructor();
                /**
                 * Returns the coordinate system in which coordinates of this feature are expressed.
                 * 
                 */
                getCoordinateSystem(): any;
                /**
                 * Returns the Layer to which this feature belongs.
                 * 
                 */
                getLayer(): any;
                /**
                 * Subclasses implements specific behavior.
                 * Called when removed from the layer.
                 * 
                 */
                remove(): void;
                /**
                 * subclasses implements drawing specific behavior.
                 * 
                 */
                render(): void;
                /**
                 * Set the coordinate system in which coordinates of this feature are expressed.
                 * 
                 * @param cs The coordinate system in which coordinates of this feature are expressed.             
                 */
                setCoordinateSystem(cs: Object): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/Geometry.html
             *
             * A Geometry handles description of shapes to be rendered in a GfxLayer
             * using a GeometryFeature feature.
             * A Geometry can be:
             * 
             * A point geometry of type dojox.geo.openlayers.Point. Coordinates are a an 
             * Object {x, y}
             * A line string geometry of type dojox.geo.openlayers.LineString. Coordinates are
             * an array of {x, y} objects
             * A collection geometry of type dojox.geo.openlayers.Collection. Coordinates are an array of geometries.
             * 
             * @param coords Coordinates of the geometry. {x:x, y:y} object for a point geometry, array of {x:x, y:y}objects for line string geometry, array of geometries for collection geometry.     
             */
            class Geometry {
                constructor(coords: Object);
                /**
                 * The coordinates of the geometry, Object like {x, y} or Array.
                 * 
                 */
                "coordinates": Object;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/GfxLayer.html
             *
             * A layer dedicated to render dojox.geo.openlayers.GeometryFeature
             * A layer class for rendering geometries as dojox.gfx.shape.Shape objects.
             * This layer class accepts Features which encapsulates graphic objects to be added to the map.
             * All objects should be added to this group.
             * 
             * @param name     
             * @param options     
             */
            class GfxLayer extends dojox.geo.openlayers.Layer {
                constructor(name: any, options: any);
                /**
                 * Called when added to a map.
                 * 
                 */
                added(): void;
                /**
                 * Add a feature or an array of features to the layer.
                 * 
                 * @param f The Feature or array of features to add.             
                 */
                addFeature(f: dojox.geo.openlayers.Feature): void;
                /**
                 * Add a feature or an array of features to the layer.
                 * 
                 * @param f The Feature or array of features to add.             
                 */
                addFeature(f: dojox.geo.openlayers.Feature[]): void;
                /**
                 * Removes all the features from this layer.
                 * 
                 */
                clear(): void;
                /**
                 * 
                 */
                getDojoMap(): any;
                /**
                 * Returns the i-th feature of this layer.
                 * 
                 * @param i The index of the feature to return.             
                 */
                getFeatureAt(i: number): any;
                /**
                 * Returns the number of the features contained by this layer.
                 * 
                 */
                getFeatureCount(): any;
                /**
                 * Returns the feature hold by this layer.
                 * 
                 */
                getFeatures(): any;
                /**
                 * Get the underlying dojox.gfx.Surface
                 * 
                 */
                getSurface(): any;
                /**
                 * Gets the viewport
                 * 
                 */
                getViewport(): any;
                /**
                 * Called when this layer is moved or zoomed.
                 * 
                 * @param event The event             
                 */
                moveTo(event: any): void;
                /**
                 * Redraws this layer
                 * 
                 */
                redraw(): void;
                /**
                 * Removes a feature or an array of features from the layer.
                 * 
                 * @param f The Feature or array of features to remove.             
                 */
                removeFeature(f: dojox.geo.openlayers.Feature): void;
                /**
                 * Removes a feature or an array of features from the layer.
                 * 
                 * @param f The Feature or array of features to remove.             
                 */
                removeFeature(f: dojox.geo.openlayers.Feature[]): void;
                /**
                 * Remove the feature at the specified index.
                 * 
                 * @param index The index of the feature to remove.             
                 */
                removeFeatureAt(index: number): void;
                /**
                 * Called when rendering a feature is necessary.
                 * 
                 * @param f The feature to draw.             
                 */
                renderFeature(f: dojox.geo.openlayers.Feature): void;
                /**
                 * Sets the map for this layer.
                 * 
                 * @param map             
                 */
                setMap(map: any): void;
                /**
                 * Sets the viewport
                 * 
                 * @param g An object with the following properties:destroy: Releases all internal resources owned by this shape. Once this method has been called,the instance is considered destroyed and should not be used anymore.getNode: Different graphics rendering subsystems implement shapes in different ways.  Thismethod provides access to the underlying graphics subsystem object.  Clients calling thismethod and using the return value must be careful not to try sharing or using the underlying nodein a general way across renderer implementation.Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.getShape: returns the current Shape object or null(see dojox/gfx.defaultPath,dojox/gfx.defaultPolyline,dojox/gfx.defaultRect,dojox/gfx.defaultEllipse,dojox/gfx.defaultCircle,dojox/gfx.defaultLine,or dojox/gfx.defaultImage)getTransform: Returns the current transformation matrix applied to this Shape or nullgetFill: Returns the current fill object or null(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/Color)getStroke: Returns the current stroke object or null(see dojox/gfx.defaultStroke)getParent: Returns the parent Shape, Group or null if this Shape is unparented.(see dojox/gfx/shape.Surface,or dojox/gfx.Group)getBoundingBox: Returns the bounding box Rectangle for this shape.getTransformedBoundingBox: returns an array of four points or nullfour points represent four corners of the untransformed bounding boxgetEventSource: returns a Node, which is used asa source of events for this shapesetClip: sets the clipping area of this shape.getClipsetShape: sets a shape object(the default implementation simply ignores it)setFill: sets a fill object(the default implementation simply ignores it)setStroke: sets a stroke object(the default implementation simply ignores it)setTransform: sets a transformation matrix_applyTransform: physically sets a matrixmoveToFront: moves a shape to front of its parent's list of shapesmoveToBack: moves a shape to back of its parent's list of shapes_moveToFront: renderer-specific hook, see dojox/gfx/shape.Shape.moveToFront()_moveToBack: renderer-specific hook, see dojox/gfx/shape.Shape.moveToFront()applyRightTransform: multiplies the existing matrix with an argument on right side(this.matrix * matrix)applyLeftTransform: multiplies the existing matrix with an argument on left side(matrix * this.matrix)applyTransform: a shortcut for dojox/gfx/shape.Shape.applyRightTransformremoveShape: removes the shape from its parent's list of shapes_setParent: sets a parent_updateParentMatrix: updates the parent matrix with new matrix_getRealMatrix: returns the cumulative ('real') transformation matrixby combining the shape's matrix with its parent's matrixon: Connects an event to this shape.connect: connects a handler to an event on this shapedisconnect: connects a handler by token from an event on this shape_initopenBatch: starts a new batch, subsequent new child shapes will be held inthe batch instead of appending to the container directly.closeBatch: submits the current batch, append all pending child shapes to DOMadd: adds a shape to the listremove: removes a shape from the listclear: removes all shapes from a group/surface._moveChildToFront: moves a shape to front of the list of shapes_moveChildToBack: moves a shape to back of the list of shapescreateShape: creates a shape object based on its type; it is meant to be usedby group-like objectscreateGroup: creates a group shapecreateRect: creates a rectangle shapecreateEllipse: creates an ellipse shapecreateCircle: creates a circle shapecreateLine: creates a line shapecreatePolyline: creates a polyline/polygon shapecreateImage: creates a image shapecreateText: creates a text shapecreatePath: creates a path shapecreateTextPath: creates a text shapecreateObject: creates an instance of the passed shapeType classtextDir (String): Will be used for inheritance, or as default for text objectsthat textDir wasn't directly specified for them but the bidi support was required.setTextDir: Used for propagation and change of textDir.newTextDir will be forced as textDir for all of it's children (Group/Text/TextPath).getTextDir            
                 */
                setViewport(g: Object): void;
                /**
                 * Called when map is resized.
                 * 
                 */
                onMapResize(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/GeometryFeature.html
             *
             * A Feature encapsulating a geometry.
             * This Feature renders a geometry such as a Point or LineString geometry. This Feature
             * is responsible for reprojecting the geometry before creating a gfx shape to display it.
             * By default the shape created is a circle for a Point geometry and a polyline for a 
             * LineString geometry. User can change these behavior by overriding the createShape 
             * method to create the desired shape.
             * 
             * @param geometry The geometry to render.     
             */
            class GeometryFeature extends dojox.geo.openlayers.Feature {
                constructor(geometry: dojox.geo.openlayers.Geometry);
                /**
                 * Called when the shape rendering the geometry has to be created.
                 * This default implementation creates a circle for a point geometry, a polyline for
                 * a LineString geometry and is recursively called when creating a collection.
                 * User may replace this method to produce a custom shape.
                 * 
                 * @param s The surface on which the method create the shapes.             
                 * @param g               OptionalThe reference geometry              
                 */
                createShape(s: dojox.gfx.Surface, g: dojox.geo.openlayers.Geometry): any;
                /**
                 * Returns the coordinate system in which coordinates of this feature are expressed.
                 * 
                 */
                getCoordinateSystem(): any;
                /**
                 * Returns the fill style
                 * 
                 */
                getFill(): any;
                /**
                 * Returns the Layer to which this feature belongs.
                 * 
                 */
                getLayer(): any;
                /**
                 * Returns the shape rendering the geometry
                 * 
                 */
                getShape(): any;
                /**
                 * Returns the shape properties. 
                 * 
                 */
                getShapeProperties(): any;
                /**
                 * Returns the stroke style
                 * 
                 */
                getStroke(): any;
                /**
                 * Removes the shape from the Surface. 
                 * Called when the feature is removed from the layer.
                 * 
                 */
                remove(): void;
                /**
                 * Render a geometry. 
                 * Called by the Layer on which the feature is added. 
                 * 
                 * @param g               OptionalThe geometry to draw             
                 */
                render(g?: dojox.geo.openlayers.Geometry): void;
                /**
                 * Renders a geometry collection.
                 * 
                 * @param g               OptionalThe geometry to render.             
                 */
                renderCollection(g: dojox.geo.openlayers.Geometry): void;
                /**
                 * Renders a line string geometry.
                 * 
                 * @param g               OptionalThe geometry to render.             
                 */
                renderLineString(g: dojox.geo.openlayers.Geometry): void;
                /**
                 * Renders a point geometry.
                 * 
                 * @param g               OptionalThe geometry to render, or the current instance geometry if not specified.             
                 */
                renderPoint(g: dojox.geo.openlayers.Point): void;
                /**
                 * Set the coordinate system in which coordinates of this feature are expressed.
                 * 
                 * @param cs The coordinate system in which coordinates of this feature are expressed.             
                 */
                setCoordinateSystem(cs: Object): void;
                /**
                 * Set the fill style to be applied on the rendered shape.
                 * 
                 * @param f The fill style             
                 */
                setFill(f: Object): Function;
                /**
                 * Sets the shape properties. 
                 * 
                 * @param s The shape properties to set.             
                 */
                setShapeProperties(s: Object): Function;
                /**
                 * Set the stroke style to be applied on the rendered shape.
                 * 
                 * @param s The stroke style             
                 */
                setStroke(s: Object): Function;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/LineString.html
             *
             * The dojox.geo.openlayers.LineString geometry. This geometry holds an array
             * of coordinates.
             * 
             * @param coords Coordinates of the geometry. {x:x, y:y} object for a point geometry, array of {x:x, y:y}objects for line string geometry, array of geometries for collection geometry.     
             */
            class LineString extends dojox.geo.openlayers.Geometry {
                constructor(coords: Object);
                /**
                 * The coordinates of the geometry, Object like {x, y} or Array.
                 * 
                 */
                "coordinates": Object;
                /**
                 * Gets the points of this geometry.
                 * 
                 */
                getPoints(): any;
                /**
                 * Sets the points for this geometry.
                 * 
                 * @param p An array of {x, y} objects             
                 */
                setPoints(p: Object[]): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/JsonImport.html
             *
             * Class to load JSON formated ShapeFile as output of the JSon Custom Map Converter.
             * This class loads JSON formated ShapeFile produced by the JSon Custom Map Converter.
             * When loading the JSON file, it calls a iterator function each time a feature is read.
             * This iterator function is provided as parameter to the constructor.
             * 
             * @param params The parameters to initialize this JsonImport instance.     
             */
            class JsonImport {
                constructor(params: Object);
                /**
                 * Triggers the loading.
                 * 
                 */
                loadData(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/Layer.html
             *
             * Base layer class for dojox.geo.openlayers.Map specific layers extending OpenLayers.Layer class.
             * This layer class accepts Features which encapsulates graphic objects to be added to the map.
             * This layer class encapsulates an OpenLayers.Layer.
             * This class provides Feature management such as add, remove and feature access.
             * 
             * @param name The name of the layer.     
             * @param options Options passed to the underlying OpenLayers.Layer object.     
             */
            class Layer {
                constructor(name: String, options: Object);
                /**
                 * Called when the layer is added to the map
                 * 
                 */
                added(): void;
                /**
                 * Add a feature or an array of features to the layer.
                 * 
                 * @param f The Feature or array of features to add.             
                 */
                addFeature(f: dojox.geo.openlayers.Feature): void;
                /**
                 * Add a feature or an array of features to the layer.
                 * 
                 * @param f The Feature or array of features to add.             
                 */
                addFeature(f: dojox.geo.openlayers.Feature[]): void;
                /**
                 * Removes all the features from this layer.
                 * 
                 */
                clear(): void;
                /**
                 * 
                 */
                getDojoMap(): any;
                /**
                 * Returns the i-th feature of this layer.
                 * 
                 * @param i The index of the feature to return.             
                 */
                getFeatureAt(i: number): any;
                /**
                 * Returns the number of the features contained by this layer.
                 * 
                 */
                getFeatureCount(): any;
                /**
                 * Returns the feature hold by this layer.
                 * 
                 */
                getFeatures(): any;
                /**
                 * Called when the layer is panned or zoomed.
                 * 
                 * @param event The event             
                 */
                moveTo(event: MouseEvent): void;
                /**
                 * Redraws this layer
                 * 
                 */
                redraw(): void;
                /**
                 * Removes a feature or an array of features from the layer.
                 * 
                 * @param f The Feature or array of features to remove.             
                 */
                removeFeature(f: dojox.geo.openlayers.Feature): void;
                /**
                 * Removes a feature or an array of features from the layer.
                 * 
                 * @param f The Feature or array of features to remove.             
                 */
                removeFeature(f: dojox.geo.openlayers.Feature[]): void;
                /**
                 * Remove the feature at the specified index.
                 * 
                 * @param index The index of the feature to remove.             
                 */
                removeFeatureAt(index: number): void;
                /**
                 * Called when rendering a feature is necessary.
                 * 
                 * @param f The feature to draw.             
                 */
                renderFeature(f: dojox.geo.openlayers.Feature): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/Map.html
             *
             * A map viewer based on the OpenLayers library.
             * The dojox.geo.openlayers.Map object allows to view maps from various map providers. 
             * It encapsulates  an OpenLayers.Map object on which most operations are delegated.
             * GFX layers can be added to display GFX georeferenced shapes as well as Dojo widgets.
             * Parameters can be passed as argument at construction time to define the base layer
             * type and the base layer parameters such as url or options depending on the type
             * specified. These parameters can be any of:
             * 
             * baseLayerType: type of the base layer. Can be any of:
             * 
             * dojox.geo.openlayers.BaseLayerType.OSM: Open Street Map base layer
             * dojox.geo.openlayers.BaseLayerType.WMS: Web Map Service layer
             * dojox.geo.openlayers.BaseLayerType.GOOGLE: Google layer
             * dojox.geo.openlayers.BaseLayerType.VIRTUAL_EARTH: Virtual Earth layer
             * dojox.geo.openlayers.BaseLayerType.BING: Bing layer
             * dojox.geo.openlayers.BaseLayerType.YAHOO: Yahoo layer
             * dojox.geo.openlayers.BaseLayerType.ARCGIS: ESRI ArgGIS layer
             * Note that access to commercial server such as Google, Virtual Earth or Yahoo may need specific licencing.
             * 
             * The parameters value also include:
             * 
             * baseLayerName: The name of the base layer.
             * baseLayerUrl: Some layer may need an url such as Web Map Server
             * baseLayerOptions: Additional specific options passed to OpensLayers layer,
             * such as The list of layer to display, for Web Map Server layer.
             * 
             * @param div     
             * @param options     
             */
            class Map {
                constructor(div: any, options: any);
                /**
                 * The underlying OpenLayers.Map object.
                 * Should be accessed on read mode only.
                 * 
                 */
                "olMap": Object;
                /**
                 * Add the specified layer to the map.
                 * 
                 * @param layer The layer to add to the map.             
                 */
                addLayer(layer: dojox.geo.openlayers.Layer): void;
                /**
                 * Fits the map on a point,or an area
                 * Fits the map on the point or extent specified as parameter. 
                 * 
                 * @param o Object with key values fit parameters or a JSON string.             
                 */
                fitTo(o: Object): void;
                /**
                 * Returns the base layer type.
                 * 
                 */
                getBaseLayerType(): any;
                /**
                 * Returns the layer whose property matches the value.
                 * 
                 * @param property The property to check             
                 * @param value The value to match             
                 */
                getLayer(property: String, value: Object): any;
                /**
                 * Returns the count of layers of this map.
                 * 
                 */
                getLayerCount(): any;
                /**
                 * gets the underlying OpenLayers map object.
                 * 
                 */
                getOLMap(): any;
                /**
                 * Returns the current scale
                 * 
                 * @param geodesic Tell if geodesic calculation should be performed. If set totrue, the scale will be calculated based on the horizontal size of thepixel in the center of the map viewport.             
                 */
                getScale(geodesic: boolean): any;
                /**
                 * Performs an initial fit to contents.
                 * 
                 * @param params             
                 */
                initialFit(params: any): void;
                /**
                 * Set or retrieve the layer index.
                 * Set or get the layer index, that is the z-order of the layer.
                 * if the index parameter is provided, the layer index is set to
                 * this value. If the index parameter is not provided, the index of 
                 * the layer is returned.
                 * 
                 * @param layer the layer to retrieve the index.             
                 * @param index               Optionalindex of the layer             
                 */
                layerIndex(layer: dojox.geo.openlayers.Layer, index: number): any;
                /**
                 * Remove the specified layer from the map.
                 * 
                 * @param layer The layer to remove from the map.             
                 */
                removeLayer(layer: dojox.geo.openlayers.Layer): void;
                /**
                 * Set the base layer type, replacing the existing base layer
                 * 
                 * @param type base layer type             
                 */
                setBaseLayerType(type: dojox.geo.openlayers.Layer): any;
                /**
                 * Transforms the point passed as argument, expressed in the from 
                 * coordinate system to the map coordinate system.
                 * Transforms the point passed as argument without modifying it. The point is supposed to be expressed
                 * in the from coordinate system and is transformed to the map coordinate system.
                 * 
                 * @param p The point to transform             
                 * @param from The projection in which the point is expressed.             
                 * @param to             
                 */
                transform(p: any, from: Object, to: any): any;
                /**
                 * Transforms the coordinates passed as argument, expressed in the from 
                 * coordinate system to the map coordinate system.
                 * Transforms the coordinates passed as argument. The coordinate are supposed to be expressed
                 * in the from coordinate system and are transformed to the map coordinate system.
                 * 
                 * @param x The longitude coordinate to transform.             
                 * @param y The latitude coordinate to transform.             
                 * @param from               OptionalThe projection in which the point is expressed, or EPSG4326 is not specified.             
                 * @param to               OptionalThe projection in which the point is converted to. In not specifed, the map projection is used.             
                 */
                transformXY(x: number, y: number, from: Object, to: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/Point.html
             *
             * A Point geometry handles description of points to be rendered in a GfxLayer
             * 
             * @param coords Coordinates of the geometry. {x:x, y:y} object for a point geometry, array of {x:x, y:y}objects for line string geometry, array of geometries for collection geometry.     
             */
            class Point extends dojox.geo.openlayers.Geometry {
                constructor(coords: Object);
                /**
                 * The coordinates of the geometry, Object like {x, y} or Array.
                 * 
                 */
                "coordinates": Object;
                /**
                 * Gets the point defining this geometry.
                 * 
                 */
                getPoint(): any;
                /**
                 * Sets the point for this geometry.
                 * 
                 * @param p The point geometry expressed as a {x, y} object.             
                 */
                setPoint(p: Object): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/TouchInteractionSupport.html
             *
             * class to handle touch interactions on a OpenLayers.Map widget
             * 
             * @param map the Map widget this class provides touch navigation for.     
             */
            class TouchInteractionSupport {
                constructor(map: dojox.geo.openlayers.Map);
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/WidgetFeature.html
             *
             * Wraps a Dojo widget, provide geolocalisation of the widget and interface
             * to Layer class.
             * This class allows to add a widget in a dojox.geo.openlayers.Layer.
             * 
             * @param params The parameters describing the widget.     
             */
            class WidgetFeature extends dojox.geo.openlayers.Feature {
                constructor(params: Object);
                /**
                 * Returns the coordinate system in which coordinates of this feature are expressed.
                 * 
                 */
                getCoordinateSystem(): any;
                /**
                 * Returns the Layer to which this feature belongs.
                 * 
                 */
                getLayer(): any;
                /**
                 * Returns the parameters describing the widget.
                 * 
                 */
                getParameters(): any;
                /**
                 * removes this feature.
                 * Remove this feature by disconnecting the widget from the dom.
                 * 
                 */
                remove(): void;
                /**
                 * renders the widget.
                 * Places the widget accordingly to longitude and latitude defined in parameters.
                 * This function is called when the center of the maps or zoom factor changes.
                 * 
                 */
                render(): void;
                /**
                 * Set the coordinate system in which coordinates of this feature are expressed.
                 * 
                 * @param cs The coordinate system in which coordinates of this feature are expressed.             
                 */
                setCoordinateSystem(cs: Object): void;
                /**
                 * Sets the parameters describing the widget.
                 * 
                 * @param params The parameters describing the widget.             
                 */
                setParameters(params: Object): void;
            }
            module widget {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/widget/Map.html
                 *
                 * A widget version of the dojox.geo.openlayers.Map component.
                 * The dojox.geo.openlayers.widget.Map widget is the widget 
                 * version of the dojox.geo.openlayers.Map component. 
                 * With this widget, user can specify some attributes in the markup such as
                 * 
                 * baseLayerType: The type of the base layer. Permitted values are
                 * initialLocation: The initial location as for the dojox.geo.openlayers.Map.fitTo method
                 * touchHandler: Tells if we attach touch handler or not.
                 * 
                 * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
                 * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
                 */
                class Map extends dijit._Widget {
                    constructor(params?: Object, srcNodeRef?: HTMLElement);
                    /**
                     * Deprecated. Instead of attributeMap, widget should have a _setXXXAttr attribute
                     * for each XXX attribute to be mapped to the DOM.
                     * 
                     * attributeMap sets up a "binding" between attributes (aka properties)
                     * of the widget and the widget's DOM.
                     * Changes to widget attributes listed in attributeMap will be
                     * reflected into the DOM.
                     * 
                     * For example, calling set('title', 'hello')
                     * on a TitlePane will automatically cause the TitlePane's DOM to update
                     * with the new title.
                     * 
                     * attributeMap is a hash where the key is an attribute of the widget,
                     * and the value reflects a binding to a:
                     * 
                     * DOM node attribute
                     *   focus: {node: "focusNode", type: "attribute"}
                     * Maps this.focus to this.focusNode.focus
                     * 
                     * DOM node innerHTML
                     *   title: { node: "titleNode", type: "innerHTML" }
                     * Maps this.title to this.titleNode.innerHTML
                     * 
                     * DOM node innerText
                     *   title: { node: "titleNode", type: "innerText" }
                     * Maps this.title to this.titleNode.innerText
                     * 
                     * DOM node CSS class
                     *   myClass: { node: "domNode", type: "class" }
                     * Maps this.myClass to this.domNode.className
                     * 
                     * If the value is an array, then each element in the array matches one of the
                     * formats of the above list.
                     * 
                     * There are also some shorthands for backwards compatibility:
                     * 
                     * string --> { node: string, type: "attribute" }, for example:
                     * "focusNode" ---> { node: "focusNode", type: "attribute" }
                     * "" --> { node: "domNode", type: "attribute" }
                     * 
                     */
                    "attributeMap": Object;
                    set(property:"attributeMap", value: Object): void;
                    get(property:"attributeMap"): Object;
                    watch(property:"attributeMap", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * Root CSS class of the widget (ex: dijitTextBox), used to construct CSS classes to indicate
                     * widget state.
                     * 
                     */
                    "baseClass": string;
                    set(property:"baseClass", value: string): void;
                    get(property:"baseClass"): string;
                    watch(property:"baseClass", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * Base layer type as defined in dojox.geo.openlayer.BaseLayerType. Can be one of:
                     * 
                     * OSM
                     * WMS
                     * Google
                     * VirtualEarth
                     * Yahoo
                     * ArcGIS
                     * 
                     */
                    "baseLayerType": string;
                    set(property:"baseLayerType", value: string): void;
                    get(property:"baseLayerType"): string;
                    watch(property:"baseLayerType", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "class": string;
                    set(property:"class", value: string): void;
                    get(property:"class"): string;
                    watch(property:"class", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * Designates where children of the source DOM node will be placed.
                     * "Children" in this case refers to both DOM nodes and widgets.
                     * For example, for myWidget:
                     * 
                     * <div data-dojo-type=myWidget>
                     *     <b> here's a plain DOM node
                     *     <span data-dojo-type=subWidget>and a widget</span>
                     *     <i> and another plain DOM node </i>
                     * </div>
                     * containerNode would point to:
                     * 
                     * <b> here's a plain DOM node
                     * <span data-dojo-type=subWidget>and a widget</span>
                     * <i> and another plain DOM node </i>
                     * In templated widgets, "containerNode" is set via a
                     * data-dojo-attach-point assignment.
                     * 
                     * containerNode must be defined for any widget that accepts innerHTML
                     * (like ContentPane or BorderContainer or even Button), and conversely
                     * is null for widgets that don't, like TextBox.
                     * 
                     */
                    "containerNode": HTMLElement;
                    set(property:"containerNode", value: HTMLElement): void;
                    get(property:"containerNode"): HTMLElement;
                    watch(property:"containerNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                    /**
                     * Bi-directional support, as defined by the HTML DIR
                     * attribute. Either left-to-right "ltr" or right-to-left "rtl".  If undefined, widgets renders in page's
                     * default direction.
                     * 
                     */
                    "dir": string;
                    set(property:"dir", value: string): void;
                    get(property:"dir"): string;
                    watch(property:"dir", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * This is our visible representation of the widget! Other DOM
                     * Nodes may by assigned to other properties, usually through the
                     * template system's data-dojo-attach-point syntax, but the domNode
                     * property is the canonical "top level" node in widget UI.
                     * 
                     */
                    "domNode": HTMLElement;
                    set(property:"domNode", value: HTMLElement): void;
                    get(property:"domNode"): HTMLElement;
                    watch(property:"domNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                    /**
                     * This widget or a widget it contains has focus, or is "active" because
                     * it was recently clicked.
                     * 
                     */
                    "focused": boolean;
                    set(property:"focused", value: boolean): void;
                    get(property:"focused"): boolean;
                    watch(property:"focused", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                    /**
                     * A unique, opaque ID string that can be assigned by users or by the
                     * system. If the developer passes an ID which is known not to be
                     * unique, the specified ID is ignored and the system-generated ID is
                     * used instead.
                     * 
                     */
                    "id": string;
                    set(property:"id", value: string): void;
                    get(property:"id"): string;
                    watch(property:"id", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * The part of the map shown at startup time. It is the string description of the location shown at
                     * startup time. Format is the same as for the dojox.geo.openlayers.widget.Map.fitTo
                     * method.
                     * 
                     * {
                     *     bounds: [ulx, uly, lrx, lry]
                     * }
                     * The map is fit on the specified bounds expressed as decimal degrees latitude and longitude.
                     * 
                     * The bounds are defined with their upper left and lower right corners coordinates.
                     * 
                     * {
                     *     position: [longitude, latitude],
                     *     extent: degrees
                     * }
                     * The map is fit on the specified position showing the extent <extent> around
                     * 
                     * the specified center position.
                     * 
                     */
                    "initialLocation": string;
                    set(property:"initialLocation", value: string): void;
                    get(property:"initialLocation"): string;
                    watch(property:"initialLocation", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * Rarely used.  Overrides the default Dojo locale used to render this widget,
                     * as defined by the HTML LANG attribute.
                     * Value must be among the list of locales specified during by the Dojo bootstrap,
                     * formatted according to RFC 3066 (like en-us).
                     * 
                     */
                    "lang": string;
                    set(property:"lang", value: string): void;
                    get(property:"lang"): string;
                    watch(property:"lang", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * The underlying dojox/geo/openlayers/Map object.
                     * 
                     */
                    "map": Object;
                    set(property:"map", value: Object): void;
                    get(property:"map"): Object;
                    watch(property:"map", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "observer": string;
                    set(property:"observer", value: string): void;
                    get(property:"observer"): string;
                    watch(property:"observer", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * The document this widget belongs to.  If not specified to constructor, will default to
                     * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
                     * 
                     */
                    "ownerDocument": Object;
                    set(property:"ownerDocument", value: Object): void;
                    get(property:"ownerDocument"): Object;
                    watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * pointer to original DOM node
                     * 
                     */
                    "srcNodeRef": HTMLElement;
                    set(property:"srcNodeRef", value: HTMLElement): void;
                    get(property:"srcNodeRef"): HTMLElement;
                    watch(property:"srcNodeRef", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                    /**
                     * HTML style attributes as cssText string or name/value hash
                     * 
                     */
                    "style": string;
                    set(property:"style", value: string): void;
                    get(property:"style"): string;
                    watch(property:"style", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * HTML title attribute.
                     * 
                     * For form widgets this specifies a tooltip to display when hovering over
                     * the widget (just like the native HTML title attribute).
                     * 
                     * For TitlePane or for when this widget is a child of a TabContainer, AccordionContainer,
                     * etc., it's used to specify the tab label, accordion pane title, etc.  In this case it's
                     * interpreted as HTML.
                     * 
                     */
                    "title": string;
                    set(property:"title", value: string): void;
                    get(property:"title"): string;
                    watch(property:"title", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * When this widget's title attribute is used to for a tab label, accordion pane title, etc.,
                     * this specifies the tooltip to appear when the mouse is hovered over that text.
                     * 
                     */
                    "tooltip": string;
                    set(property:"tooltip", value: string): void;
                    get(property:"tooltip"): string;
                    watch(property:"tooltip", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * Tells if the touch handler should be attached to the map or not.
                     * Touch handler handles touch events so that the widget can be used
                     * on mobile applications.
                     * 
                     */
                    "touchHandler": boolean;
                    set(property:"touchHandler", value: boolean): void;
                    get(property:"touchHandler"): boolean;
                    watch(property:"touchHandler", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                    /**
                     * This method is deprecated, use get() or set() directly.
                     * 
                     * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
                     * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
                     */
                    attr(name: String, value: Object): any;
                    /**
                     * This method is deprecated, use get() or set() directly.
                     * 
                     * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
                     * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
                     */
                    attr(name: Object, value: Object): any;
                    /**
                     * Construct the UI for this widget, creates the real dojox.geo.openlayers.Map object.     
                     * 
                     */
                    buildRendering(): void;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: Object, event: String, method: String): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: any, event: String, method: String): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: Object, event: Function, method: String): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: any, event: Function, method: String): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: Object, event: String, method: Function): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: any, event: String, method: Function): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: Object, event: Function, method: Function): any;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                     * 
                     * Connects specified obj/event to specified method of this object
                     * and registers for disconnect() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.connect, except with the
                     * implicit use of this widget as the target object.
                     * Events connected with this.connect are disconnected upon
                     * destruction.
                     * 
                     * @param obj             
                     * @param event             
                     * @param method             
                     */
                    connect(obj: any, event: Function, method: Function): any;
                    /**
                     * Wrapper to setTimeout to avoid deferred functions executing
                     * after the originating widget has been destroyed.
                     * Returns an object handle with a remove method (that returns null) (replaces clearTimeout).
                     * 
                     * @param fcn Function reference.             
                     * @param delay               OptionalDelay, defaults to 0.             
                     */
                    defer(fcn: Function, delay: number): Object;
                    /**
                     * Destroy this widget, but not its descendants.  Descendants means widgets inside of
                     * this.containerNode.   Will also destroy any resources (including widgets) registered via this.own().
                     * 
                     * This method will also destroy internal widgets such as those created from a template,
                     * assuming those widgets exist inside of this.domNode but outside of this.containerNode.
                     * 
                     * For 2.0 it's planned that this method will also destroy descendant widgets, so apps should not
                     * depend on the current ability to destroy a widget without destroying its descendants.   Generally
                     * they should use destroyRecursive() for widgets with children.
                     * 
                     * @param preserveDom If true, this method will leave the original DOM structure alone.Note: This will not yet work with _TemplatedMixin widgets             
                     */
                    destroy(preserveDom?: boolean): void;
                    /**
                     * Recursively destroy the children of this widget and their
                     * descendants.
                     * 
                     * @param preserveDom               OptionalIf true, the preserveDom attribute is passed to all descendantwidget's .destroy() method. Not for use with _Templatedwidgets.             
                     */
                    destroyDescendants(preserveDom: boolean): void;
                    /**
                     * Destroy this widget and its descendants
                     * This is the generic "destructor" function that all widget users
                     * should call to cleanly discard with a widget. Once a widget is
                     * destroyed, it is removed from the manager object.
                     * 
                     * @param preserveDom               OptionalIf true, this method will leave the original DOM structurealone of descendant Widgets. Note: This will NOT work withdijit._TemplatedMixin widgets.             
                     */
                    destroyRecursive(preserveDom: boolean): void;
                    /**
                     * Destroys the DOM nodes associated with this widget.
                     * 
                     * @param preserveDom               OptionalIf true, this method will leave the original DOM structure aloneduring tear-down. Note: this will not work with _Templatedwidgets yet.             
                     */
                    destroyRendering(preserveDom?: boolean): void;
                    /**
                     * Deprecated, will be removed in 2.0, use handle.remove() instead.
                     * 
                     * Disconnects handle created by connect.
                     * 
                     * @param handle             
                     */
                    disconnect(handle: any): void;
                    /**
                     * Used by widgets to signal that a synthetic event occurred, ex:
                     * 
                     * myWidget.emit("attrmodified-selectedChildWidget", {}).
                     * Emits an event on this.domNode named type.toLowerCase(), based on eventObj.
                     * Also calls onType() method, if present, and returns value from that method.
                     * By default passes eventObj to callback, but will pass callbackArgs instead, if specified.
                     * Modifies eventObj by adding missing parameters (bubbles, cancelable, widget).
                     * 
                     * @param type             
                     * @param eventObj               Optional            
                     * @param callbackArgs               Optional            
                     */
                    emit(type: String, eventObj: Object, callbackArgs: any[]): any;
                    /**
                     * Get a property from a widget.
                     * Get a named property from a widget. The property may
                     * potentially be retrieved via a getter method. If no getter is defined, this
                     * just retrieves the object's property.
                     * 
                     * For example, if the widget has properties foo and bar
                     * and a method named _getFooAttr(), calling:
                     * myWidget.get("foo") would be equivalent to calling
                     * widget._getFooAttr() and myWidget.get("bar")
                     * would be equivalent to the expression
                     * widget.bar2
                     * 
                     * @param name The property to get.             
                     */
                    get(name: any): any;
                    /**
                     * Returns all direct children of this widget, i.e. all widgets underneath this.containerNode whose parent
                     * is this widget.   Note that it does not return all descendants, but rather just direct children.
                     * Analogous to Node.childNodes,
                     * except containing widgets rather than DOMNodes.
                     * 
                     * The result intentionally excludes internally created widgets (a.k.a. supporting widgets)
                     * outside of this.containerNode.
                     * 
                     * Note that the array returned is a simple array.  Application code should not assume
                     * existence of methods like forEach().
                     * 
                     */
                    getChildren(): any[];
                    /**
                     * Returns all the widgets contained by this, i.e., all widgets underneath this.containerNode.
                     * This method should generally be avoided as it returns widgets declared in templates, which are
                     * supposed to be internal/hidden, but it's left here for back-compat reasons.
                     * 
                     */
                    getDescendants(): any[];
                    /**
                     * Returns the parent widget of this widget.
                     * 
                     */
                    getParent(): any;
                    /**
                     * Return true if this widget can currently be focused
                     * and false if not
                     * 
                     */
                    isFocusable(): any;
                    /**
                     * Return this widget's explicit or implicit orientation (true for LTR, false for RTL)
                     * 
                     */
                    isLeftToRight(): any;
                    /**
                     * 
                     * @param type protected             
                     * @param func             
                     */
                    on(type: String, func: Function): any;
                    /**
                     * 
                     * @param type protected             
                     * @param func             
                     */
                    on(type: Function, func: Function): any;
                    /**
                     * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                     * already removed/destroyed manually.
                     * 
                     */
                    own(): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: String, position: String): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: HTMLElement, position: String): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: dijit._WidgetBase, position: String): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: String, position: number): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: HTMLElement, position: number): any;
                    /**
                     * Place this widget somewhere in the DOM based
                     * on standard domConstruct.place() conventions.
                     * A convenience function provided in all _Widgets, providing a simple
                     * shorthand mechanism to put an existing (or newly created) Widget
                     * somewhere in the dom, and allow chaining.
                     * 
                     * @param reference Widget, DOMNode, or id of widget or DOMNode             
                     * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                     */
                    placeAt(reference: dijit._WidgetBase, position: number): any;
                    /**
                     * 
                     */
                    postCreate(): void;
                    /**
                     * Called after the parameters to the widget have been read-in,
                     * but before the widget template is instantiated. Especially
                     * useful to set properties that are referenced in the widget
                     * template.
                     * 
                     */
                    postMixInProperties(): void;
                    /**
                     * Resize the widget.
                     * Resize the domNode and the widget to the dimensions of a box of the following form:
                     * { l: 50, t: 200, w: 300: h: 150 }
                     * 
                     * @param b               OptionalIf passed, denotes the new size of the widget.Can be either nothing (widget adapts to the div),an Object describing a box, or a Number representing the width.             
                     * @param h               OptionalThe new height. Requires that a width has been specified in the first parameter.             
                     */
                    resize(b: Object, h: number): void;
                    /**
                     * Resize the widget.
                     * Resize the domNode and the widget to the dimensions of a box of the following form:
                     * { l: 50, t: 200, w: 300: h: 150 }
                     * 
                     * @param b               OptionalIf passed, denotes the new size of the widget.Can be either nothing (widget adapts to the div),an Object describing a box, or a Number representing the width.             
                     * @param h               OptionalThe new height. Requires that a width has been specified in the first parameter.             
                     */
                    resize(b: number, h: number): void;
                    /**
                     * Set a property on a widget
                     * Sets named properties on a widget which may potentially be handled by a
                     * setter in the widget.
                     * 
                     * For example, if the widget has properties foo and bar
                     * and a method named _setFooAttr(), calling
                     * myWidget.set("foo", "Howdy!") would be equivalent to calling
                     * widget._setFooAttr("Howdy!") and myWidget.set("bar", 3)
                     * would be equivalent to the statement widget.bar = 3;
                     * 
                     * set() may also be called with a hash of name/value pairs, ex:
                     * 
                     * myWidget.set({
                     *     foo: "Howdy",
                     *     bar: 3
                     * });
                     * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                     * 
                     * @param name The property to set.             
                     * @param value The value to set in the property.             
                     */
                    set(name: any, value: any): any;
                    /**
                     * Deprecated.  Use set() instead.
                     * 
                     * @param attr             
                     * @param value             
                     */
                    setAttribute(attr: String, value: any): void;
                    /**
                     * Processing after the DOM fragment is added to the document
                     * 
                     */
                    startup(): void;
                    /**
                     * Deprecated, will be removed in 2.0, use this.own(topic.subscribe()) instead.
                     * 
                     * Subscribes to the specified topic and calls the specified method
                     * of this object and registers for unsubscribe() on widget destroy.
                     * 
                     * Provide widget-specific analog to dojo.subscribe, except with the
                     * implicit use of this widget as the target object.
                     * 
                     * @param t The topic             
                     * @param method The callback             
                     */
                    subscribe(t: String, method: Function): any;
                    /**
                     * Returns a string that represents the widget.
                     * When a widget is cast to a string, this method will be used to generate the
                     * output. Currently, it does not implement any sort of reversible
                     * serialization.
                     * 
                     */
                    toString(): string;
                    /**
                     * Deprecated. Override destroy() instead to implement custom widget tear-down
                     * behavior.
                     * 
                     */
                    uninitialize(): boolean;
                    /**
                     * Deprecated, will be removed in 2.0, use handle.remove() instead.
                     * 
                     * Unsubscribes handle created by this.subscribe.
                     * Also removes handle from this widget's list of subscriptions
                     * 
                     * @param handle             
                     */
                    unsubscribe(handle: Object): void;
                    /**
                     * Watches a property for changes
                     * 
                     * @param name               OptionalIndicates the property to watch. This is optional (the callback may be theonly parameter), and if omitted, all the properties will be watched             
                     * @param callback The function to execute when the property changes. This will be called afterthe property has been changed. The callback will be called with the |this|set to the instance, the first argument as the name of the property, thesecond argument as the old value and the third argument as the new value.             
                     */
                    watch(property: string, callback:{(property?:string, oldValue?:any, newValue?: any):void}) :{unwatch():void};
                    /**
                     * Called when the widget stops being "active" because
                     * focus moved to something outside of it, or the user
                     * clicked somewhere outside of it, or the widget was
                     * hidden.
                     * 
                     */
                    onBlur(): void;
                    /**
                     * Connect to this function to receive notifications of mouse click events.
                     * 
                     * @param event mouse Event             
                     */
                    onClick(event: any): void;
                    /**
                     * Called when this widget is being displayed as a popup (ex: a Calendar popped
                     * up from a DateTextBox), and it is hidden.
                     * This is called from the dijit.popup code, and should not be called directly.
                     * 
                     * Also used as a parameter for children of dijit/layout/StackContainer or subclasses.
                     * Callback if a user tries to close the child.   Child will be closed if this function returns true.
                     * 
                     */
                    onClose(): boolean;
                    /**
                     * Connect to this function to receive notifications of mouse double click events.
                     * 
                     * @param event mouse Event             
                     */
                    onDblClick(event: any): void;
                    /**
                     * Called when the widget becomes "active" because
                     * it or a widget inside of it either has focus, or has recently
                     * been clicked.
                     * 
                     */
                    onFocus(): void;
                    /**
                     * Called when another widget becomes the selected pane in a
                     * dijit/layout/TabContainer, dijit/layout/StackContainer,
                     * dijit/layout/AccordionContainer, etc.
                     * 
                     * Also called to indicate hide of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
                     * 
                     */
                    onHide(): void;
                    /**
                     * Connect to this function to receive notifications of keys being pressed down.
                     * 
                     * @param event key Event             
                     */
                    onKeyDown(event: any): void;
                    /**
                     * Connect to this function to receive notifications of printable keys being typed.
                     * 
                     * @param event key Event             
                     */
                    onKeyPress(event: any): void;
                    /**
                     * Connect to this function to receive notifications of keys being released.
                     * 
                     * @param event key Event             
                     */
                    onKeyUp(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse button is pressed down.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseDown(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves onto this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseEnter(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves off of this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseLeave(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves over nodes contained within this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseMove(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves off of nodes contained within this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseOut(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse moves onto nodes contained within this widget.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseOver(event: any): void;
                    /**
                     * Connect to this function to receive notifications of when the mouse button is released.
                     * 
                     * @param event mouse Event             
                     */
                    onMouseUp(event: any): void;
                    /**
                     * Called when this widget becomes the selected pane in a
                     * dijit/layout/TabContainer, dijit/layout/StackContainer,
                     * dijit/layout/AccordionContainer, etc.
                     * 
                     * Also called to indicate display of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
                     * 
                     */
                    onShow(): void;
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/_base.html
             *
             * 
             */
            interface _base {
                /**
                 * Defines the base layer types to be used at Map construction time or
                 * with the setBaseLayerType function.
                 * 
                 */
                BaseLayerType: Object;
                /**
                 * 
                 */
                EPSG4326: Object;
                /**
                 * 
                 */
                GreatCircle: Object;
                /**
                 * 
                 */
                widget: Object;
                /**
                 * 
                 */
                Collection(): void;
                /**
                 * 
                 */
                Feature(): void;
                /**
                 * 
                 */
                Geometry(): void;
                /**
                 * 
                 */
                GeometryFeature(): void;
                /**
                 * 
                 */
                GfxLayer(): void;
                /**
                 * 
                 */
                JsonImport(): void;
                /**
                 * 
                 */
                Layer(): void;
                /**
                 * 
                 */
                LineString(): void;
                /**
                 * 
                 */
                Map(): void;
                /**
                 * Parses the specified string and returns degree minute second or decimal degree.
                 * Parses the specified string and returns degree minute second or decimal degree.
                 * 
                 * @param v The string to parse             
                 * @param toDecimal Specifies if the result should be returned in decimal degrees or in an arraycontaining the degrees, minutes, seconds values.             
                 */
                parseDMS(v: String, toDecimal: boolean): number;
                /**
                 * 
                 */
                Point(): void;
                /**
                 * 
                 */
                TouchInteractionSupport(): void;
                /**
                 * 
                 */
                WidgetFeature(): void;
            }
            module _base {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/_base.Collection.html
                 *
                 * A collection of geometries. 
                 * 
                 * @param coords Coordinates of the geometry. {x:x, y:y} object for a point geometry, array of {x:x, y:y}objects for line string geometry, array of geometries for collection geometry.     
                 */
                class Collection extends dojox.geo.openlayers.Geometry {
                    constructor(coords: Object);
                    /**
                     * An array of geometries.
                     * 
                     */
                    "coordinates": any[];
                    /**
                     * Returns the geometries.
                     * 
                     */
                    getGeometries(): any;
                    /**
                     * Sets the geometries
                     * 
                     * @param g The array of geometries.             
                     */
                    setGeometries(g: any[]): void;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/_base.Feature.html
                 *
                 * A Feature encapsulates an item so that it can be added to a Layer.
                 * This class is not attended to be used as it, but serve as a base class
                 * for specific features such as GeometryFeature which can display georeferenced 
                 * geometries and WidgetFeature which can display georeferenced widgets. 
                 * 
                 */
                class Feature {
                    constructor();
                    /**
                     * Returns the coordinate system in which coordinates of this feature are expressed.
                     * 
                     */
                    getCoordinateSystem(): any;
                    /**
                     * Returns the Layer to which this feature belongs.
                     * 
                     */
                    getLayer(): any;
                    /**
                     * Subclasses implements specific behavior.
                     * Called when removed from the layer.
                     * 
                     */
                    remove(): void;
                    /**
                     * subclasses implements drawing specific behavior.
                     * 
                     */
                    render(): void;
                    /**
                     * Set the coordinate system in which coordinates of this feature are expressed.
                     * 
                     * @param cs The coordinate system in which coordinates of this feature are expressed.             
                     */
                    setCoordinateSystem(cs: Object): void;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/_base.Geometry.html
                 *
                 * A Geometry handles description of shapes to be rendered in a GfxLayer
                 * using a GeometryFeature feature.
                 * A Geometry can be:
                 * 
                 * A point geometry of type dojox.geo.openlayers.Point. Coordinates are a an 
                 * Object {x, y}
                 * A line string geometry of type dojox.geo.openlayers.LineString. Coordinates are
                 * an array of {x, y} objects
                 * A collection geometry of type dojox.geo.openlayers.Collection. Coordinates are an array of geometries.
                 * 
                 * @param coords Coordinates of the geometry. {x:x, y:y} object for a point geometry, array of {x:x, y:y}objects for line string geometry, array of geometries for collection geometry.     
                 */
                class Geometry {
                    constructor(coords: Object);
                    /**
                     * The coordinates of the geometry, Object like {x, y} or Array.
                     * 
                     */
                    "coordinates": Object;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/_base.GfxLayer.html
                 *
                 * A layer dedicated to render dojox.geo.openlayers.GeometryFeature
                 * A layer class for rendering geometries as dojox.gfx.shape.Shape objects.
                 * This layer class accepts Features which encapsulates graphic objects to be added to the map.
                 * All objects should be added to this group.
                 * 
                 * @param name     
                 * @param options     
                 */
                class GfxLayer extends dojox.geo.openlayers.Layer {
                    constructor(name: any, options: any);
                    /**
                     * Called when added to a map.
                     * 
                     */
                    added(): void;
                    /**
                     * Add a feature or an array of features to the layer.
                     * 
                     * @param f The Feature or array of features to add.             
                     */
                    addFeature(f: dojox.geo.openlayers.Feature): void;
                    /**
                     * Add a feature or an array of features to the layer.
                     * 
                     * @param f The Feature or array of features to add.             
                     */
                    addFeature(f: dojox.geo.openlayers.Feature[]): void;
                    /**
                     * Removes all the features from this layer.
                     * 
                     */
                    clear(): void;
                    /**
                     * 
                     */
                    getDojoMap(): any;
                    /**
                     * Returns the i-th feature of this layer.
                     * 
                     * @param i The index of the feature to return.             
                     */
                    getFeatureAt(i: number): any;
                    /**
                     * Returns the number of the features contained by this layer.
                     * 
                     */
                    getFeatureCount(): any;
                    /**
                     * Returns the feature hold by this layer.
                     * 
                     */
                    getFeatures(): any;
                    /**
                     * Get the underlying dojox.gfx.Surface
                     * 
                     */
                    getSurface(): any;
                    /**
                     * Gets the viewport
                     * 
                     */
                    getViewport(): any;
                    /**
                     * Called when this layer is moved or zoomed.
                     * 
                     * @param event The event             
                     */
                    moveTo(event: any): void;
                    /**
                     * Redraws this layer
                     * 
                     */
                    redraw(): void;
                    /**
                     * Removes a feature or an array of features from the layer.
                     * 
                     * @param f The Feature or array of features to remove.             
                     */
                    removeFeature(f: dojox.geo.openlayers.Feature): void;
                    /**
                     * Removes a feature or an array of features from the layer.
                     * 
                     * @param f The Feature or array of features to remove.             
                     */
                    removeFeature(f: dojox.geo.openlayers.Feature[]): void;
                    /**
                     * Remove the feature at the specified index.
                     * 
                     * @param index The index of the feature to remove.             
                     */
                    removeFeatureAt(index: number): void;
                    /**
                     * Called when rendering a feature is necessary.
                     * 
                     * @param f The feature to draw.             
                     */
                    renderFeature(f: dojox.geo.openlayers.Feature): void;
                    /**
                     * Sets the map for this layer.
                     * 
                     * @param map             
                     */
                    setMap(map: any): void;
                    /**
                     * Sets the viewport
                     * 
                     * @param g An object with the following properties:destroy: Releases all internal resources owned by this shape. Once this method has been called,the instance is considered destroyed and should not be used anymore.getNode: Different graphics rendering subsystems implement shapes in different ways.  Thismethod provides access to the underlying graphics subsystem object.  Clients calling thismethod and using the return value must be careful not to try sharing or using the underlying nodein a general way across renderer implementation.Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.getShape: returns the current Shape object or null(see dojox/gfx.defaultPath,dojox/gfx.defaultPolyline,dojox/gfx.defaultRect,dojox/gfx.defaultEllipse,dojox/gfx.defaultCircle,dojox/gfx.defaultLine,or dojox/gfx.defaultImage)getTransform: Returns the current transformation matrix applied to this Shape or nullgetFill: Returns the current fill object or null(see dojox/gfx.defaultLinearGradient,dojox/gfx.defaultRadialGradient,dojox/gfx.defaultPattern,or dojo/Color)getStroke: Returns the current stroke object or null(see dojox/gfx.defaultStroke)getParent: Returns the parent Shape, Group or null if this Shape is unparented.(see dojox/gfx/shape.Surface,or dojox/gfx.Group)getBoundingBox: Returns the bounding box Rectangle for this shape.getTransformedBoundingBox: returns an array of four points or nullfour points represent four corners of the untransformed bounding boxgetEventSource: returns a Node, which is used asa source of events for this shapesetClip: sets the clipping area of this shape.getClipsetShape: sets a shape object(the default implementation simply ignores it)setFill: sets a fill object(the default implementation simply ignores it)setStroke: sets a stroke object(the default implementation simply ignores it)setTransform: sets a transformation matrix_applyTransform: physically sets a matrixmoveToFront: moves a shape to front of its parent's list of shapesmoveToBack: moves a shape to back of its parent's list of shapes_moveToFront: renderer-specific hook, see dojox/gfx/shape.Shape.moveToFront()_moveToBack: renderer-specific hook, see dojox/gfx/shape.Shape.moveToFront()applyRightTransform: multiplies the existing matrix with an argument on right side(this.matrix * matrix)applyLeftTransform: multiplies the existing matrix with an argument on left side(matrix * this.matrix)applyTransform: a shortcut for dojox/gfx/shape.Shape.applyRightTransformremoveShape: removes the shape from its parent's list of shapes_setParent: sets a parent_updateParentMatrix: updates the parent matrix with new matrix_getRealMatrix: returns the cumulative ('real') transformation matrixby combining the shape's matrix with its parent's matrixon: Connects an event to this shape.connect: connects a handler to an event on this shapedisconnect: connects a handler by token from an event on this shape_initopenBatch: starts a new batch, subsequent new child shapes will be held inthe batch instead of appending to the container directly.closeBatch: submits the current batch, append all pending child shapes to DOMadd: adds a shape to the listremove: removes a shape from the listclear: removes all shapes from a group/surface._moveChildToFront: moves a shape to front of the list of shapes_moveChildToBack: moves a shape to back of the list of shapescreateShape: creates a shape object based on its type; it is meant to be usedby group-like objectscreateGroup: creates a group shapecreateRect: creates a rectangle shapecreateEllipse: creates an ellipse shapecreateCircle: creates a circle shapecreateLine: creates a line shapecreatePolyline: creates a polyline/polygon shapecreateImage: creates a image shapecreateText: creates a text shapecreatePath: creates a path shapecreateTextPath: creates a text shapecreateObject: creates an instance of the passed shapeType classtextDir (String): Will be used for inheritance, or as default for text objectsthat textDir wasn't directly specified for them but the bidi support was required.setTextDir: Used for propagation and change of textDir.newTextDir will be forced as textDir for all of it's children (Group/Text/TextPath).getTextDir            
                     */
                    setViewport(g: Object): void;
                    /**
                     * Called when map is resized.
                     * 
                     */
                    onMapResize(): void;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/_base.GeometryFeature.html
                 *
                 * A Feature encapsulating a geometry.
                 * This Feature renders a geometry such as a Point or LineString geometry. This Feature
                 * is responsible for reprojecting the geometry before creating a gfx shape to display it.
                 * By default the shape created is a circle for a Point geometry and a polyline for a 
                 * LineString geometry. User can change these behavior by overriding the createShape 
                 * method to create the desired shape.
                 * 
                 * @param geometry The geometry to render.     
                 */
                class GeometryFeature extends dojox.geo.openlayers.Feature {
                    constructor(geometry: dojox.geo.openlayers.Geometry);
                    /**
                     * Called when the shape rendering the geometry has to be created.
                     * This default implementation creates a circle for a point geometry, a polyline for
                     * a LineString geometry and is recursively called when creating a collection.
                     * User may replace this method to produce a custom shape.
                     * 
                     * @param s The surface on which the method create the shapes.             
                     * @param g               OptionalThe reference geometry              
                     */
                    createShape(s: dojox.gfx.Surface, g: dojox.geo.openlayers.Geometry): any;
                    /**
                     * Returns the coordinate system in which coordinates of this feature are expressed.
                     * 
                     */
                    getCoordinateSystem(): any;
                    /**
                     * Returns the fill style
                     * 
                     */
                    getFill(): any;
                    /**
                     * Returns the Layer to which this feature belongs.
                     * 
                     */
                    getLayer(): any;
                    /**
                     * Returns the shape rendering the geometry
                     * 
                     */
                    getShape(): any;
                    /**
                     * Returns the shape properties. 
                     * 
                     */
                    getShapeProperties(): any;
                    /**
                     * Returns the stroke style
                     * 
                     */
                    getStroke(): any;
                    /**
                     * Removes the shape from the Surface. 
                     * Called when the feature is removed from the layer.
                     * 
                     */
                    remove(): void;
                    /**
                     * Render a geometry. 
                     * Called by the Layer on which the feature is added. 
                     * 
                     * @param g               OptionalThe geometry to draw             
                     */
                    render(g?: dojox.geo.openlayers.Geometry): void;
                    /**
                     * Renders a geometry collection.
                     * 
                     * @param g               OptionalThe geometry to render.             
                     */
                    renderCollection(g: dojox.geo.openlayers.Geometry): void;
                    /**
                     * Renders a line string geometry.
                     * 
                     * @param g               OptionalThe geometry to render.             
                     */
                    renderLineString(g: dojox.geo.openlayers.Geometry): void;
                    /**
                     * Renders a point geometry.
                     * 
                     * @param g               OptionalThe geometry to render, or the current instance geometry if not specified.             
                     */
                    renderPoint(g: dojox.geo.openlayers.Point): void;
                    /**
                     * Set the coordinate system in which coordinates of this feature are expressed.
                     * 
                     * @param cs The coordinate system in which coordinates of this feature are expressed.             
                     */
                    setCoordinateSystem(cs: Object): void;
                    /**
                     * Set the fill style to be applied on the rendered shape.
                     * 
                     * @param f The fill style             
                     */
                    setFill(f: Object): Function;
                    /**
                     * Sets the shape properties. 
                     * 
                     * @param s The shape properties to set.             
                     */
                    setShapeProperties(s: Object): Function;
                    /**
                     * Set the stroke style to be applied on the rendered shape.
                     * 
                     * @param s The stroke style             
                     */
                    setStroke(s: Object): Function;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/_base.JsonImport.html
                 *
                 * Class to load JSON formated ShapeFile as output of the JSon Custom Map Converter.
                 * This class loads JSON formated ShapeFile produced by the JSon Custom Map Converter.
                 * When loading the JSON file, it calls a iterator function each time a feature is read.
                 * This iterator function is provided as parameter to the constructor.
                 * 
                 * @param params The parameters to initialize this JsonImport instance.     
                 */
                class JsonImport {
                    constructor(params: Object);
                    /**
                     * Triggers the loading.
                     * 
                     */
                    loadData(): void;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/_base.Layer.html
                 *
                 * Base layer class for dojox.geo.openlayers.Map specific layers extending OpenLayers.Layer class.
                 * This layer class accepts Features which encapsulates graphic objects to be added to the map.
                 * This layer class encapsulates an OpenLayers.Layer.
                 * This class provides Feature management such as add, remove and feature access.
                 * 
                 * @param name The name of the layer.     
                 * @param options Options passed to the underlying OpenLayers.Layer object.     
                 */
                class Layer {
                    constructor(name: String, options: Object);
                    /**
                     * Called when the layer is added to the map
                     * 
                     */
                    added(): void;
                    /**
                     * Add a feature or an array of features to the layer.
                     * 
                     * @param f The Feature or array of features to add.             
                     */
                    addFeature(f: dojox.geo.openlayers.Feature): void;
                    /**
                     * Add a feature or an array of features to the layer.
                     * 
                     * @param f The Feature or array of features to add.             
                     */
                    addFeature(f: dojox.geo.openlayers.Feature[]): void;
                    /**
                     * Removes all the features from this layer.
                     * 
                     */
                    clear(): void;
                    /**
                     * 
                     */
                    getDojoMap(): any;
                    /**
                     * Returns the i-th feature of this layer.
                     * 
                     * @param i The index of the feature to return.             
                     */
                    getFeatureAt(i: number): any;
                    /**
                     * Returns the number of the features contained by this layer.
                     * 
                     */
                    getFeatureCount(): any;
                    /**
                     * Returns the feature hold by this layer.
                     * 
                     */
                    getFeatures(): any;
                    /**
                     * Called when the layer is panned or zoomed.
                     * 
                     * @param event The event             
                     */
                    moveTo(event: MouseEvent): void;
                    /**
                     * Redraws this layer
                     * 
                     */
                    redraw(): void;
                    /**
                     * Removes a feature or an array of features from the layer.
                     * 
                     * @param f The Feature or array of features to remove.             
                     */
                    removeFeature(f: dojox.geo.openlayers.Feature): void;
                    /**
                     * Removes a feature or an array of features from the layer.
                     * 
                     * @param f The Feature or array of features to remove.             
                     */
                    removeFeature(f: dojox.geo.openlayers.Feature[]): void;
                    /**
                     * Remove the feature at the specified index.
                     * 
                     * @param index The index of the feature to remove.             
                     */
                    removeFeatureAt(index: number): void;
                    /**
                     * Called when rendering a feature is necessary.
                     * 
                     * @param f The feature to draw.             
                     */
                    renderFeature(f: dojox.geo.openlayers.Feature): void;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/_base.LineString.html
                 *
                 * The dojox.geo.openlayers.LineString geometry. This geometry holds an array
                 * of coordinates.
                 * 
                 * @param coords Coordinates of the geometry. {x:x, y:y} object for a point geometry, array of {x:x, y:y}objects for line string geometry, array of geometries for collection geometry.     
                 */
                class LineString extends dojox.geo.openlayers.Geometry {
                    constructor(coords: Object);
                    /**
                     * The coordinates of the geometry, Object like {x, y} or Array.
                     * 
                     */
                    "coordinates": Object;
                    /**
                     * Gets the points of this geometry.
                     * 
                     */
                    getPoints(): any;
                    /**
                     * Sets the points for this geometry.
                     * 
                     * @param p An array of {x, y} objects             
                     */
                    setPoints(p: Object[]): void;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/_base.Map.html
                 *
                 * A map viewer based on the OpenLayers library.
                 * The dojox.geo.openlayers.Map object allows to view maps from various map providers. 
                 * It encapsulates  an OpenLayers.Map object on which most operations are delegated.
                 * GFX layers can be added to display GFX georeferenced shapes as well as Dojo widgets.
                 * Parameters can be passed as argument at construction time to define the base layer
                 * type and the base layer parameters such as url or options depending on the type
                 * specified. These parameters can be any of:
                 * 
                 * baseLayerType: type of the base layer. Can be any of:
                 * 
                 * dojox.geo.openlayers.BaseLayerType.OSM: Open Street Map base layer
                 * dojox.geo.openlayers.BaseLayerType.WMS: Web Map Service layer
                 * dojox.geo.openlayers.BaseLayerType.GOOGLE: Google layer
                 * dojox.geo.openlayers.BaseLayerType.VIRTUAL_EARTH: Virtual Earth layer
                 * dojox.geo.openlayers.BaseLayerType.BING: Bing layer
                 * dojox.geo.openlayers.BaseLayerType.YAHOO: Yahoo layer
                 * dojox.geo.openlayers.BaseLayerType.ARCGIS: ESRI ArgGIS layer
                 * Note that access to commercial server such as Google, Virtual Earth or Yahoo may need specific licencing.
                 * 
                 * The parameters value also include:
                 * 
                 * baseLayerName: The name of the base layer.
                 * baseLayerUrl: Some layer may need an url such as Web Map Server
                 * baseLayerOptions: Additional specific options passed to OpensLayers layer,
                 * such as The list of layer to display, for Web Map Server layer.
                 * 
                 * @param div     
                 * @param options     
                 */
                class Map {
                    constructor(div: any, options: any);
                    /**
                     * The underlying OpenLayers.Map object.
                     * Should be accessed on read mode only.
                     * 
                     */
                    "olMap": Object;
                    /**
                     * Add the specified layer to the map.
                     * 
                     * @param layer The layer to add to the map.             
                     */
                    addLayer(layer: dojox.geo.openlayers.Layer): void;
                    /**
                     * Fits the map on a point,or an area
                     * Fits the map on the point or extent specified as parameter. 
                     * 
                     * @param o Object with key values fit parameters or a JSON string.             
                     */
                    fitTo(o: Object): void;
                    /**
                     * Returns the base layer type.
                     * 
                     */
                    getBaseLayerType(): any;
                    /**
                     * Returns the layer whose property matches the value.
                     * 
                     * @param property The property to check             
                     * @param value The value to match             
                     */
                    getLayer(property: String, value: Object): any;
                    /**
                     * Returns the count of layers of this map.
                     * 
                     */
                    getLayerCount(): any;
                    /**
                     * gets the underlying OpenLayers map object.
                     * 
                     */
                    getOLMap(): any;
                    /**
                     * Returns the current scale
                     * 
                     * @param geodesic Tell if geodesic calculation should be performed. If set totrue, the scale will be calculated based on the horizontal size of thepixel in the center of the map viewport.             
                     */
                    getScale(geodesic: boolean): any;
                    /**
                     * Performs an initial fit to contents.
                     * 
                     * @param params             
                     */
                    initialFit(params: any): void;
                    /**
                     * Set or retrieve the layer index.
                     * Set or get the layer index, that is the z-order of the layer.
                     * if the index parameter is provided, the layer index is set to
                     * this value. If the index parameter is not provided, the index of 
                     * the layer is returned.
                     * 
                     * @param layer the layer to retrieve the index.             
                     * @param index               Optionalindex of the layer             
                     */
                    layerIndex(layer: dojox.geo.openlayers.Layer, index: number): any;
                    /**
                     * Remove the specified layer from the map.
                     * 
                     * @param layer The layer to remove from the map.             
                     */
                    removeLayer(layer: dojox.geo.openlayers.Layer): void;
                    /**
                     * Set the base layer type, replacing the existing base layer
                     * 
                     * @param type base layer type             
                     */
                    setBaseLayerType(type: dojox.geo.openlayers.Layer): any;
                    /**
                     * Transforms the point passed as argument, expressed in the from 
                     * coordinate system to the map coordinate system.
                     * Transforms the point passed as argument without modifying it. The point is supposed to be expressed
                     * in the from coordinate system and is transformed to the map coordinate system.
                     * 
                     * @param p The point to transform             
                     * @param from The projection in which the point is expressed.             
                     * @param to             
                     */
                    transform(p: any, from: Object, to: any): any;
                    /**
                     * Transforms the coordinates passed as argument, expressed in the from 
                     * coordinate system to the map coordinate system.
                     * Transforms the coordinates passed as argument. The coordinate are supposed to be expressed
                     * in the from coordinate system and are transformed to the map coordinate system.
                     * 
                     * @param x The longitude coordinate to transform.             
                     * @param y The latitude coordinate to transform.             
                     * @param from               OptionalThe projection in which the point is expressed, or EPSG4326 is not specified.             
                     * @param to               OptionalThe projection in which the point is converted to. In not specifed, the map projection is used.             
                     */
                    transformXY(x: number, y: number, from: Object, to: Object): any;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/_base.Point.html
                 *
                 * A Point geometry handles description of points to be rendered in a GfxLayer
                 * 
                 * @param coords Coordinates of the geometry. {x:x, y:y} object for a point geometry, array of {x:x, y:y}objects for line string geometry, array of geometries for collection geometry.     
                 */
                class Point extends dojox.geo.openlayers.Geometry {
                    constructor(coords: Object);
                    /**
                     * The coordinates of the geometry, Object like {x, y} or Array.
                     * 
                     */
                    "coordinates": Object;
                    /**
                     * Gets the point defining this geometry.
                     * 
                     */
                    getPoint(): any;
                    /**
                     * Sets the point for this geometry.
                     * 
                     * @param p The point geometry expressed as a {x, y} object.             
                     */
                    setPoint(p: Object): void;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/_base.TouchInteractionSupport.html
                 *
                 * class to handle touch interactions on a OpenLayers.Map widget
                 * 
                 * @param map the Map widget this class provides touch navigation for.     
                 */
                class TouchInteractionSupport {
                    constructor(map: dojox.geo.openlayers.Map);
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/_base.WidgetFeature.html
                 *
                 * Wraps a Dojo widget, provide geolocalisation of the widget and interface
                 * to Layer class.
                 * This class allows to add a widget in a dojox.geo.openlayers.Layer.
                 * 
                 * @param params The parameters describing the widget.     
                 */
                class WidgetFeature extends dojox.geo.openlayers.Feature {
                    constructor(params: Object);
                    /**
                     * Returns the coordinate system in which coordinates of this feature are expressed.
                     * 
                     */
                    getCoordinateSystem(): any;
                    /**
                     * Returns the Layer to which this feature belongs.
                     * 
                     */
                    getLayer(): any;
                    /**
                     * Returns the parameters describing the widget.
                     * 
                     */
                    getParameters(): any;
                    /**
                     * removes this feature.
                     * Remove this feature by disconnecting the widget from the dom.
                     * 
                     */
                    remove(): void;
                    /**
                     * renders the widget.
                     * Places the widget accordingly to longitude and latitude defined in parameters.
                     * This function is called when the center of the maps or zoom factor changes.
                     * 
                     */
                    render(): void;
                    /**
                     * Set the coordinate system in which coordinates of this feature are expressed.
                     * 
                     * @param cs The coordinate system in which coordinates of this feature are expressed.             
                     */
                    setCoordinateSystem(cs: Object): void;
                    /**
                     * Sets the parameters describing the widget.
                     * 
                     * @param params The parameters describing the widget.             
                     */
                    setParameters(params: Object): void;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/_base.__JsonImportArgs.html
                 *
                 * The keyword arguments that can be passed in a JsonImport constructor.
                 * 
                 */
                interface __JsonImportArgs {
                    /**
                     * Error callback called if something fails.
                     * 
                     */
                    error: Function;
                    /**
                     * The function called each time a feature is read. The function is called with a GeometryFeature as argument.
                     * 
                     */
                    nextFeature: Function;
                    /**
                     * The url pointing to the JSON file to load.
                     * 
                     */
                    url: string;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/_base.__MapArgs.html
                 *
                 * The keyword arguments that can be passed in a Map constructor.
                 * 
                 */
                interface __MapArgs {
                    /**
                     * The name of the base layer.
                     * 
                     */
                    baseLayerName: string;
                    /**
                     * Additional specific options passed to OpensLayers layer, such as The list of layer to display, for Web Map Server layer.
                     * 
                     */
                    baseLayerOptions: string;
                    /**
                     * type of the base layer. Can be any of
                     * 
                     * dojox.geo.openlayers.BaseLayerType.OSM: Open Street Map base layer
                     * dojox.geo.openlayers.BaseLayerType.WMS: Web Map Service layer
                     * dojox.geo.openlayers.BaseLayerType.GOOGLE: Google layer
                     * dojox.geo.openlayers.BaseLayerType.VIRTUAL_EARTH: Virtual Earth layer
                     * dojox.geo.openlayers.BaseLayerType.BING: Bing layer
                     * dojox.geo.openlayers.BaseLayerType.YAHOO: Yahoo layer
                     * dojox.geo.openlayers.BaseLayerType.ARCGIS: ESRI ArgGIS layer
                     * 
                     */
                    baseLayerType: string;
                    /**
                     * Some layer may need an url such as Web Map Server.
                     * 
                     */
                    baseLayerUrl: string;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/_base.__WidgetFeatureArgs.html
                 *
                 * The keyword arguments that can be passed in a WidgetFeature constructor.
                 * You must define a least one widget retrieval parameter and the geo-localization parameters.
                 * 
                 */
                interface __WidgetFeatureArgs {
                    /**
                     * Function for widget creation. Must return a `dijit._Widget.
                     * 
                     */
                    createWidget: Function;
                    /**
                     * The digitId of an existing widget.
                     * 
                     */
                    dijitId: string;
                    /**
                     * The class of a widget to create.
                     * 
                     */
                    dojoType: string;
                    /**
                     * The height of the widget.
                     * 
                     */
                    height: number;
                    /**
                     * The latitude, in decimal degrees where to place the widget.
                     * 
                     */
                    latitude: number;
                    /**
                     * The longitude, in decimal degrees where to place the widget.
                     * 
                     */
                    longitude: number;
                    /**
                     * An already created widget.
                     * 
                     */
                    widget: Object;
                    /**
                     * The width of the widget.
                     * 
                     */
                    width: number;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/_base.BaseLayerType.html
                 *
                 * Defines the base layer types to be used at Map construction time or
                 * with the setBaseLayerType function.
                 * This object defines the base layer types to be used at Map construction
                 * time or with the setBaseLayerType function.
                 * 
                 */
                interface BaseLayerType {
                    /**
                     * The ESRI ARCGis base layer selector.
                     * 
                     */
                    ARCGIS: string;
                    /**
                     * Same as Virtual Earth
                     * 
                     */
                    BING: string;
                    /**
                     * The Google base layer type selector.
                     * 
                     */
                    GOOGLE: string;
                    /**
                     * The Open Street Map base layer type selector.
                     * 
                     */
                    OSM: string;
                    /**
                     * The Virtual Earth base layer type selector.
                     * 
                     */
                    VIRTUAL_EARTH: string;
                    /**
                     * The Web Map Server base layer type selector.
                     * 
                     */
                    WMS: string;
                    /**
                     * The Yahoo base layer type selector.
                     * 
                     */
                    YAHOO: string;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/_base.GreatCircle.html
                 *
                 * 
                 */
                interface GreatCircle {
                    /**
                     * 
                     */
                    DEG2RAD: number;
                    /**
                     * 
                     */
                    RAD2DEG: number;
                    /**
                     * 
                     */
                    TOLERANCE: number;
                    /**
                     * Create a geodetic line as an array of dojox.geo.openlayers.GeometryFeature.
                     * Create a geodetic line as a dojox.geo.openlayers.GeometryFeature between the point p1
                     * ant the point p2. Result is a polyline approximation for which a new point is 
                     * calculated every increment degrees.
                     * 
                     * @param p1 The first point of the geodetic line. x and y fields are longitude andlatitude in decimal degrees.             
                     * @param p2 The second point of the geodetic line. x and y fields are longitude andlatitude in decimal degrees.             
                     * @param increment The value at which a new point is computed.              
                     */
                    toGeometryFeature(p1: dojox.geo.openlayers.Point, p2: dojox.geo.openlayers.Point, increment: number): any;
                    /**
                     * Create a geodetic line as an array of OpenLayers.Geometry.LineString.
                     * Create a geodetic line as a OpenLayers.Geometry.LineString between the point p1
                     * and the point p2. Result is a polyline approximation for which a new point is 
                     * calculated every increment degrees.
                     * 
                     * @param p1 The first point of the geodetic line. x and y fields are longitude andlatitude in decimal degrees.             
                     * @param p2 The second point of the geodetic line. x and y fields are longitude andlatitude in decimal degrees.             
                     * @param increment The value at which a new point is computed.              
                     */
                    toLineString(p1: dojox.geo.openlayers.Point, p2: dojox.geo.openlayers.Point, increment: number): any;
                    /**
                     * Create a geodetic line as an array of OpenLayers.Point.
                     * Create a geodetic line as an array of OpenLayers.Point between the point p1
                     * and the point p2. Result is a polyline approximation for which a new point is 
                     * calculated every increment degrees.
                     * 
                     * @param p1 The first point of the geodetic line. x and y fields are longitude andlatitude in decimal degrees.             
                     * @param p2 The second point of the geodetic line. x and y fields are longitude andlatitude in decimal degrees.             
                     * @param increment The value at which a new point is computed.              
                     */
                    toPointArray(p1: dojox.geo.openlayers.Point, p2: dojox.geo.openlayers.Point, increment: number): any[];
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/_base.widget.html
                 *
                 * 
                 */
                interface widget {
                    /**
                     * 
                     */
                    Map(): void;
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/GreatCircle.html
             *
             * 
             */
            interface GreatCircle {
                /**
                 * 
                 */
                DEG2RAD: number;
                /**
                 * 
                 */
                RAD2DEG: number;
                /**
                 * 
                 */
                TOLERANCE: number;
                /**
                 * Create a geodetic line as an array of dojox.geo.openlayers.GeometryFeature.
                 * Create a geodetic line as a dojox.geo.openlayers.GeometryFeature between the point p1
                 * ant the point p2. Result is a polyline approximation for which a new point is 
                 * calculated every increment degrees.
                 * 
                 * @param p1 The first point of the geodetic line. x and y fields are longitude andlatitude in decimal degrees.             
                 * @param p2 The second point of the geodetic line. x and y fields are longitude andlatitude in decimal degrees.             
                 * @param increment The value at which a new point is computed.              
                 */
                toGeometryFeature(p1: dojox.geo.openlayers.Point, p2: dojox.geo.openlayers.Point, increment: number): any;
                /**
                 * Create a geodetic line as an array of OpenLayers.Geometry.LineString.
                 * Create a geodetic line as a OpenLayers.Geometry.LineString between the point p1
                 * and the point p2. Result is a polyline approximation for which a new point is 
                 * calculated every increment degrees.
                 * 
                 * @param p1 The first point of the geodetic line. x and y fields are longitude andlatitude in decimal degrees.             
                 * @param p2 The second point of the geodetic line. x and y fields are longitude andlatitude in decimal degrees.             
                 * @param increment The value at which a new point is computed.              
                 */
                toLineString(p1: dojox.geo.openlayers.Point, p2: dojox.geo.openlayers.Point, increment: number): any;
                /**
                 * Create a geodetic line as an array of OpenLayers.Point.
                 * Create a geodetic line as an array of OpenLayers.Point between the point p1
                 * and the point p2. Result is a polyline approximation for which a new point is 
                 * calculated every increment degrees.
                 * 
                 * @param p1 The first point of the geodetic line. x and y fields are longitude andlatitude in decimal degrees.             
                 * @param p2 The second point of the geodetic line. x and y fields are longitude andlatitude in decimal degrees.             
                 * @param increment The value at which a new point is computed.              
                 */
                toPointArray(p1: dojox.geo.openlayers.Point, p2: dojox.geo.openlayers.Point, increment: number): any[];
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/geo/openlayers/Patch.html
             *
             * 
             */
            interface Patch {
                /**
                 * 
                 */
                patchGFX(): void;
            }
        }

    }

}

declare module "dojox/geo/charting/_base" {
    var exp: dojox.geo.charting._base
    export=exp;
}
declare module "dojox/geo/charting/_Marker" {
    var exp: dojox.geo.charting._Marker
    export=exp;
}
declare module "dojox/geo/charting/Feature" {
    var exp: dojox.geo.charting.Feature
    export=exp;
}
declare module "dojox/geo/charting/KeyboardInteractionSupport" {
    var exp: dojox.geo.charting.KeyboardInteractionSupport
    export=exp;
}
declare module "dojox/geo/charting/MouseInteractionSupport" {
    var exp: dojox.geo.charting.MouseInteractionSupport
    export=exp;
}
declare module "dojox/geo/charting/TouchInteractionSupport" {
    var exp: dojox.geo.charting.TouchInteractionSupport
    export=exp;
}
declare module "dojox/geo/charting/Map" {
    var exp: dojox.geo.charting.Map
    export=exp;
}
declare module "dojox/geo/charting/widget/Legend" {
    var exp: dojox.geo.charting.widget.Legend
    export=exp;
}
declare module "dojox/geo/charting/widget/Map" {
    var exp: dojox.geo.charting.widget.Map
    export=exp;
}
declare module "dojox/geo/openlayers/_base" {
    var exp: dojox.geo.openlayers._base
    export=exp;
}
declare module "dojox/geo/openlayers/_base.Geometry" {
    var exp: dojox.geo.openlayers._base.Geometry
    export=exp;
}
declare module "dojox/geo/openlayers/_base.Collection" {
    var exp: dojox.geo.openlayers._base.Collection
    export=exp;
}
declare module "dojox/geo/openlayers/_base.Feature" {
    var exp: dojox.geo.openlayers._base.Feature
    export=exp;
}
declare module "dojox/geo/openlayers/_base.JsonImport" {
    var exp: dojox.geo.openlayers._base.JsonImport
    export=exp;
}
declare module "dojox/geo/openlayers/_base.GfxLayer" {
    var exp: dojox.geo.openlayers._base.GfxLayer
    export=exp;
}
declare module "dojox/geo/openlayers/_base.LineString" {
    var exp: dojox.geo.openlayers._base.LineString
    export=exp;
}
declare module "dojox/geo/openlayers/_base.Layer" {
    var exp: dojox.geo.openlayers._base.Layer
    export=exp;
}
declare module "dojox/geo/openlayers/_base.GeometryFeature" {
    var exp: dojox.geo.openlayers._base.GeometryFeature
    export=exp;
}
declare module "dojox/geo/openlayers/_base.Point" {
    var exp: dojox.geo.openlayers._base.Point
    export=exp;
}
declare module "dojox/geo/openlayers/_base.Map" {
    var exp: dojox.geo.openlayers._base.Map
    export=exp;
}
declare module "dojox/geo/openlayers/_base.TouchInteractionSupport" {
    var exp: dojox.geo.openlayers._base.TouchInteractionSupport
    export=exp;
}
declare module "dojox/geo/openlayers/_base.WidgetFeature" {
    var exp: dojox.geo.openlayers._base.WidgetFeature
    export=exp;
}
declare module "dojox/geo/openlayers/_base.__JsonImportArgs" {
    var exp: dojox.geo.openlayers._base.__JsonImportArgs
    export=exp;
}
declare module "dojox/geo/openlayers/_base.__WidgetFeatureArgs" {
    var exp: dojox.geo.openlayers._base.__WidgetFeatureArgs
    export=exp;
}
declare module "dojox/geo/openlayers/_base.__MapArgs" {
    var exp: dojox.geo.openlayers._base.__MapArgs
    export=exp;
}
declare module "dojox/geo/openlayers/_base.BaseLayerType" {
    var exp: dojox.geo.openlayers._base.BaseLayerType
    export=exp;
}
declare module "dojox/geo/openlayers/_base.GreatCircle" {
    var exp: dojox.geo.openlayers._base.GreatCircle
    export=exp;
}
declare module "dojox/geo/openlayers/_base.widget" {
    var exp: dojox.geo.openlayers._base.widget
    export=exp;
}
declare module "dojox/geo/openlayers/GreatCircle" {
    var exp: dojox.geo.openlayers.GreatCircle
    export=exp;
}
declare module "dojox/geo/openlayers/Patch" {
    var exp: dojox.geo.openlayers.Patch
    export=exp;
}
declare module "dojox/geo/openlayers/Collection" {
    var exp: dojox.geo.openlayers.Collection
    export=exp;
}
declare module "dojox/geo/openlayers/Feature" {
    var exp: dojox.geo.openlayers.Feature
    export=exp;
}
declare module "dojox/geo/openlayers/Geometry" {
    var exp: dojox.geo.openlayers.Geometry
    export=exp;
}
declare module "dojox/geo/openlayers/GfxLayer" {
    var exp: dojox.geo.openlayers.GfxLayer
    export=exp;
}
declare module "dojox/geo/openlayers/JsonImport" {
    var exp: dojox.geo.openlayers.JsonImport
    export=exp;
}
declare module "dojox/geo/openlayers/Layer" {
    var exp: dojox.geo.openlayers.Layer
    export=exp;
}
declare module "dojox/geo/openlayers/LineString" {
    var exp: dojox.geo.openlayers.LineString
    export=exp;
}
declare module "dojox/geo/openlayers/GeometryFeature" {
    var exp: dojox.geo.openlayers.GeometryFeature
    export=exp;
}
declare module "dojox/geo/openlayers/Point" {
    var exp: dojox.geo.openlayers.Point
    export=exp;
}
declare module "dojox/geo/openlayers/WidgetFeature" {
    var exp: dojox.geo.openlayers.WidgetFeature
    export=exp;
}
declare module "dojox/geo/openlayers/TouchInteractionSupport" {
    var exp: dojox.geo.openlayers.TouchInteractionSupport
    export=exp;
}
declare module "dojox/geo/openlayers/Map" {
    var exp: dojox.geo.openlayers.Map
    export=exp;
}
declare module "dojox/geo/openlayers/widget/Map" {
    var exp: dojox.geo.openlayers.widget.Map
    export=exp;
}
