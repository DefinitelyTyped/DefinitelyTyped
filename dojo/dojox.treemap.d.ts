// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="dijit.d.ts" />
/// <reference path="dojox.widget.d.ts" />
declare module dojox {
    
    module treemap {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/treemap/DrillDownUp.html
         *
         * Specializes TreeMap to support drill down and up operations.
         * 
         */
        class DrillDownUp {
            constructor();
            /**
             * Drill up from the given renderer.
             * 
             * @param renderer The item renderer.             
             */
            drillDown(renderer: HTMLElement): void;
            /**
             * Drill up from the given renderer.
             * 
             * @param renderer The item renderer.             
             */
            drillUp(renderer: HTMLElement): void;
            /**
             * 
             */
            postCreate(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/treemap/GroupLabel.html
         *
         * Specializes TreeMap to remove leaf labels and display group labels centered on group
         * content instead of display them in headers.
         * 
         */
        class GroupLabel {
            constructor();
            /**
             * 
             * @param item             
             * @param level             
             * @param kind             
             */
            createRenderer(item: any, level: any, kind: any): any;
            /**
             * 
             * @param renderer             
             * @param item             
             * @param level             
             * @param kind             
             */
            styleRenderer(renderer: any, item: any, level: any, kind: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/treemap/Keyboard.html
         *
         * Specializes TreeMap to support keyboard navigation and accessibility.
         * 
         */
        class Keyboard extends dijit._FocusMixin {
            constructor();
            /**
             * Order fields are traversed when user hits the tab key
             * 
             */
            "tabIndex": string;
            /**
             * 
             * @param item             
             * @param level             
             * @param kind             
             */
            createRenderer(item: any, level: any, kind: any): any;
            /**
             * 
             */
            postCreate(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/treemap/ScaledLabel.html
         *
         * Specializes TreeMap to display scaled leaf labels instead of constant size labels.
         * 
         */
        class ScaledLabel {
            constructor();
            /**
             * 
             * @param item             
             * @param level             
             * @param kind             
             */
            createRenderer(item: any, level: any, kind: any): any;
            /**
             * 
             * @param renderer             
             * @param item             
             * @param level             
             * @param kind             
             */
            styleRenderer(renderer: any, item: any, level: any, kind: any): void;
            /**
             * 
             * @param evt             
             */
            onRendererUpdated(evt: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/treemap/TreeMap.html
         *
         * A treemap widget.
         * 
         */
        class TreeMap extends dijit._WidgetBase implements dojox.widget._Invalidating, dojox.widget.Selection {
            constructor();
            /**
             * The attribute of the store item that contains the data used to compute the area of a treemap cell.Default is "". 
             * 
             */
            "areaAttr": string;
            set(property:"areaAttr", value: string): void;
            get(property:"areaAttr"): string;
            watch(property:"areaAttr", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
             * The attribute of the store item that contains the data used to compute the color of a treemap cell.
             * Default is "". 
             * 
             */
            "colorAttr": string;
            set(property:"colorAttr", value: string): void;
            get(property:"colorAttr"): string;
            watch(property:"colorAttr", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * The optional color model that converts data to color.Default is null.
             * 
             */
            "colorModel": Object;
            set(property:"colorModel", value: Object): void;
            get(property:"colorModel"): Object;
            watch(property:"colorModel", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
             * An array of data attributes used to group data in the treemap.Default is []. 
             * 
             */
            "groupAttrs": any[];
            set(property:"groupAttrs", value: any[]): void;
            get(property:"groupAttrs"): any[];
            watch(property:"groupAttrs", callback:{(property?:string, oldValue?:any[], newValue?: any[]):void}) :{unwatch():void}
            /**
             * An array of grouping functions used to group data in the treemap.
             * When null, groupAttrs is to compute grouping functions.
             * Default is null.
             * 
             */
            "groupFuncs": any[];
            set(property:"groupFuncs", value: any[]): void;
            get(property:"groupFuncs"): any[];
            watch(property:"groupFuncs", callback:{(property?:string, oldValue?:any[], newValue?: any[]):void}) :{unwatch():void}
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
             * 
             */
            "invalidatingProperties": Object;
            set(property:"invalidatingProperties", value: Object): void;
            get(property:"invalidatingProperties"): Object;
            watch(property:"invalidatingProperties", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
            /**
             * 
             */
            "invalidRendering": boolean;
            set(property:"invalidRendering", value: boolean): void;
            get(property:"invalidRendering"): boolean;
            watch(property:"invalidRendering", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
            /**
             * The associated array item to renderer list.
             * 
             */
            "itemToRenderer": Object;
            set(property:"itemToRenderer", value: Object): void;
            get(property:"itemToRenderer"): Object;
            watch(property:"itemToRenderer", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
            /**
             * The attribute of the store item that contains the label of a treemap cell.Default is "label". 
             * 
             */
            "labelAttr": string;
            set(property:"labelAttr", value: string): void;
            get(property:"labelAttr"): string;
            watch(property:"labelAttr", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * The starting depth level at which the labels are not displayed anymore on cells.If NaN no threshold is applied. The depth is the visual depth of the items on the screen not
             * in the data (i.e. after drill down the depth of an item might change).
             * Default is NaN.
             * 
             */
            "labelThreshold": number;
            set(property:"labelThreshold", value: number): void;
            get(property:"labelThreshold"): number;
            watch(property:"labelThreshold", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
             * The document this widget belongs to.  If not specified to constructor, will default to
             * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
             * 
             */
            "ownerDocument": Object;
            set(property:"ownerDocument", value: Object): void;
            get(property:"ownerDocument"): Object;
            watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
            /**
             * A query that can be passed to when querying the store.
             * 
             */
            "query": Object;
            set(property:"query", value: Object): void;
            get(property:"query"): Object;
            watch(property:"query", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
            /**
             * Options to be applied when querying the store.
             * 
             */
            "queryOptions": Object;
            set(property:"queryOptions", value: Object): void;
            get(property:"queryOptions"): Object;
            watch(property:"queryOptions", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
            /**
             * The root item of the treemap, that is the first visible item.
             * If null the entire treemap hierarchy is shown.Default is null.
             * 
             */
            "rootItem": Object;
            set(property:"rootItem", value: Object): void;
            get(property:"rootItem"): Object;
            watch(property:"rootItem", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
            /**
             * In single selection mode, the selected item or in multiple selection mode the last selected item.
             * Warning: Do not use this property directly, make sure to call set() or get() methods.
             * 
             */
            "selectedItem": Object;
            set(property:"selectedItem", value: Object): void;
            get(property:"selectedItem"): Object;
            watch(property:"selectedItem", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
            /**
             * The list of selected items.
             * Warning: Do not use this property directly, make sure to call set() or get() methods.
             * 
             */
            "selectedItems": Object;
            set(property:"selectedItems", value: Object): void;
            get(property:"selectedItems"): Object;
            watch(property:"selectedItems", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
            /**
             * Valid values are:
             * 
             * "none": No selection can be done.
             * "single": Only one item can be selected at a time.
             * "multiple": Several item can be selected using the control key modifier.
             * Default value is "single".
             * 
             */
            "selectionMode": string;
            set(property:"selectionMode", value: string): void;
            get(property:"selectionMode"): string;
            watch(property:"selectionMode", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * pointer to original DOM node
             * 
             */
            "srcNodeRef": HTMLElement;
            set(property:"srcNodeRef", value: HTMLElement): void;
            get(property:"srcNodeRef"): HTMLElement;
            watch(property:"srcNodeRef", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
            /**
             * The store that contains the items to display.
             * 
             */
            "store": Object;
            set(property:"store", value: Object): void;
            get(property:"store"): Object;
            watch(property:"store", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
             * The attribute of the store item that contains the tooltip text of a treemap cell.Default is "". 
             * 
             */
            "tooltipAttr": string;
            set(property:"tooltipAttr", value: string): void;
            get(property:"tooltipAttr"): string;
            watch(property:"tooltipAttr", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * Add properties to the watched properties to trigger invalidation. This method must be called in
             * the constructor. It is typically used by subclasses of a _Invalidating class to add more properties
             * to watch for.
             * 
             * @param properties The list of properties to watch for.             
             */
            addInvalidatingProperties(properties: String[]): void;
            /**
             * A function that returns the value use to compute the area of cell from a store item.
             * Default implementation is using areaAttr.   
             * 
             * @param item             
             * @param store             
             */
            areaFunc(item: Object, store: dojo.store.api.Store): number;
            /**
             * 
             */
            buildRendering(): void;
            /**
             * A function that returns from a store item the color value of cell or the value used by the 
             * ColorModel to compute the cell color. If a color must be returned it must be in form accepted by the
             * dojo/_base/Color constructor. If a value must be returned it must be a Number.
             * Default implementation is using colorAttr.
             * 
             * @param item             
             * @param store             
             */
            colorFunc(item: Object, store: dojo.store.api.Store): any;
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
             * Creates an item renderer of the specified kind. This is called only when the treemap
             * is created. Default implementation always create div nodes. It also sets overflow
             * to hidden and position to absolute on non-header renderers.
             * 
             * @param item The data item.             
             * @param level The item depth level.                    
             * @param kind The specified kind. This can either be "leaf", "group", "header" or "content".              
             */
            createRenderer(item: Object, level: number, kind: String): any;
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
             * Dispatch a selection change event.
             * 
             * @param oldSelectedItem The previously selectedItem.             
             * @param newSelectedItem The new selectedItem.             
             * @param renderer The visual renderer of the selected/deselected item.             
             * @param triggerEvent The event that lead to the selection of the item.                        
             */
            dispatchChange(oldSelectedItem: Object, newSelectedItem: Object, renderer: Object, triggerEvent: Event): void;
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
             * Returns the color for a given item. This either use the colorModel if not null
             * or just the result of the colorFunc.
             * 
             * @param item The data item.             
             */
            getColorForItem(item: Object): any;
            /**
             * 
             * @param item             
             */
            getIdentity(item: any): any;
            /**
             * Returns the label for a given item.
             * 
             * @param item The data item.             
             */
            getLabelForItem(item: Object): any;
            /**
             * Returns the parent widget of this widget.
             * 
             */
            getParent(): any;
            /**
             * Invalidating the rendering for the next executation frame.
             * 
             */
            invalidateRendering(): void;
            /**
             * Return true if this widget can currently be focused
             * and false if not
             * 
             */
            isFocusable(): any;
            /**
             * Returns wether an item is selected or not.
             * 
             * @param item The item to test the selection for.                      
             */
            isItemSelected(item: Object): any;
            /**
             * Return this widget's explicit or implicit orientation (true for LTR, false for RTL)
             * 
             */
            isLeftToRight(): any;
            /**
             * 
             */
            isValid: {(): void};
            /**
             * A function that returns the label of cell from a store item.Default implementation is using labelAttr.
             * 
             * @param item             
             * @param store             
             */
            labelFunc(item: Object, store: dojo.store.api.Store): any;
            /**
             * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
             * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
             * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
             * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
             * 
             * @param type Name of event (ex: "click") or extension event like touch.press.             
             * @param func             
             */
            on(type: String, func: Function): any;
            /**
             * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
             * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
             * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
             * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
             * 
             * @param type Name of event (ex: "click") or extension event like touch.press.             
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
             * 
             */
            refreshRendering(): void;
            /**
             * 
             * @param box             
             */
            resize(box: any): void;
            /**
             * Applies selection triggered by an user interaction
             * 
             * @param e The source event of the user interaction.             
             * @param item The render item that has been selected/deselected.             
             * @param renderer The visual renderer of the selected/deselected item.                         
             * @param dispatch Whether an event must be dispatched or not.             
             */
            selectFromEvent(e: Event, item: Object, renderer: Object, dispatch: boolean): any;
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
             * Change the selection state of an item.
             * 
             * @param item The item to change the selection state for.             
             * @param value True to select the item, false to deselect it.              
             */
            setItemSelected(item: Object, value: boolean): void;
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
             * Style the item renderer. This is called each time the treemap is refreshed.
             * For leaf items it colors them with the color computed from the color model. 
             * For other items it does nothing.
             * 
             * @param renderer The item renderer.             
             * @param item The data item.             
             * @param level The item depth level.             
             * @param kind The specified kind. This can either be "leaf", "group", "header" or "content".              
             */
            styleRenderer(renderer: HTMLElement, item: Object, level: number, kind: String): void;
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
             * A function that returns the tooltip of cell from a store item.Default implementation is using tooltipAttr.
             * 
             * @param item             
             * @param store             
             */
            tooltipFunc(item: Object, store: dojo.store.api.Store): any;
            /**
             * Returns a string that represents the widget.
             * When a widget is cast to a string, this method will be used to generate the
             * output. Currently, it does not implement any sort of reversible
             * serialization.
             * 
             */
            toString(): String;
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
             * Updates the renderer(s) that represent the specified item(s).
             * 
             * @param items             
             */
            updateRenderers(items: any): void;
            /**
             * Immediately validate the rendering if it has been invalidated. You generally do not call that method yourself.
             * 
             */
            validateRendering(): void;
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
             * Called when the selection changed.
             * 
             */
            onChange(): void;
            /**
             * Called when the widget becomes "active" because
             * it or a widget inside of it either has focus, or has recently
             * been clicked.
             * 
             */
            onFocus(): void;
            /**
             * Called when an item renderer has been rolled out.
             * 
             */
            onItemRollOut(): void;
            /**
             * Called when an item renderer has been hovered.
             * 
             */
            onItemRollOver(): void;
            /**
             * Called when a renderer has been updated. This is called after creation, styling and sizing for 
             * each group and leaf renderers. For group renders this is also called after creation of children
             * renderers. 
             * 
             */
            onRendererUpdated(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/treemap/_utils.html
         *
         * 
         */
        interface _utils {
            /**
             * 
             * @param array             
             * @param callback             
             */
            find(array: any[], callback: Function): any;
            /**
             * 
             * @param items             
             * @param groupingFunctions             
             * @param measureFunction             
             */
            group(items: any[], groupingFunctions: any[], measureFunction: Function): Object;
            /**
             * 
             * @param items             
             * @param areaFunc             
             */
            initElements(items: any, areaFunc: any): Object;
            /**
             * 
             * @param items             
             * @param width             
             * @param height             
             * @param areaFunc             
             * @param rtl             
             */
            solve(items: any, width: any, height: any, areaFunc: any, rtl: any): Object;
        }
    }

}