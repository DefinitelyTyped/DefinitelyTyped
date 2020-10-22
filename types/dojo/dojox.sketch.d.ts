// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



declare namespace dojox {
    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/sketch.html
     *
     * Deprecated.  Should require dojox/sketch modules directly rather than trying to access them through
     * this module.
     *
     */
    interface sketch {
    }
    namespace sketch {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/sketch/_Plugin.html
         *
         * This represents a "plugin" to the dojox.sketch.Figure, which is basically
         * a single button on the Toolbar and some associated code
         *
         * @param args       Optional
         */
        class _Plugin {
            constructor(args?: Object);
            /**
             *
             */
            "button": Object;
            /**
             *
             */
            "figure": Object;
            /**
             *
             */
            "iconClassPrefix": string;
            /**
             *
             */
            "itemGroup": string;
            /**
             *
             */
            "queryCommand": Object;
            /**
             *
             */
            "shape": string;
            /**
             *
             */
            "useDefaultCommand": boolean;
            /**
             *
             * @param e               Optional
             */
            activate(e: any): void;
            /**
             *
             * @param name
             * @param value               Optional
             */
            attr(name: any, value: any): any;
            /**
             *
             */
            buttonClass(): void;
            /**
             *
             * @param o
             * @param f
             * @param tf
             */
            connect(o: any, f: any, tf: any): void;
            /**
             *
             * @param f
             */
            destroy(f: any): void;
            /**
             *
             * @param figure
             */
            setFigure(figure: dijit._Widget): void;
            /**
             *
             * @param toolbar
             */
            setToolbar(toolbar: dijit._Widget): void;
            /**
             *
             */
            onActivate(): void;
            /**
             *
             * @param e
             */
            onMouseDown(e: any): void;
            /**
             *
             * @param e
             */
            onMouseMove(e: any): void;
            /**
             *
             * @param e
             */
            onMouseUp(e: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/sketch/Slider.html
         *
         *
         * @param args       Optional
         */
        class Slider extends dojox.sketch._Plugin {
            constructor(args?: Object);
            /**
             *
             */
            "button": Object;
            /**
             *
             */
            "figure": Object;
            /**
             *
             */
            "iconClassPrefix": string;
            /**
             *
             */
            "itemGroup": string;
            /**
             *
             */
            "queryCommand": Object;
            /**
             *
             */
            "shape": string;
            /**
             *
             */
            "useDefaultCommand": boolean;
            /**
             *
             * @param e               Optional
             */
            activate(e: any): void;
            /**
             *
             * @param name
             * @param value               Optional
             */
            attr(name: any, value: any): any;
            /**
             *
             */
            buttonClass(): void;
            /**
             *
             * @param o
             * @param f
             * @param tf
             */
            connect(o: any, f: any, tf: any): void;
            /**
             *
             * @param f
             */
            destroy(f: any): void;
            /**
             *
             */
            reset(): void;
            /**
             *
             * @param figure
             */
            setFigure(figure: dijit._Widget): void;
            /**
             *
             * @param t
             */
            setToolbar(t: any): void;
            /**
             *
             */
            onActivate(): void;
            /**
             *
             * @param e
             */
            onMouseDown(e: any): void;
            /**
             *
             * @param e
             */
            onMouseMove(e: any): void;
            /**
             *
             * @param e
             */
            onMouseUp(e: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/sketch/UndoStack.html
         *
         *
         * @param figure
         */
        class UndoStack {
            constructor(figure: any);
            /**
             *
             * @param cmd
             * @param ann               Optional
             * @param before               Optional
             */
            add(cmd: String, ann: dojox.sketch.Annotation, before: String): void;
            /**
             *
             * @param state
             * @param from
             * @param to
             */
            apply(state: any, from: any, to: any): void;
            /**
             *
             */
            destroy(): void;
            /**
             *
             */
            redo(): void;
            /**
             *
             */
            undo(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/sketch/Toolbar.html
         *
         *
         * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.
         * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree
         */
        class Toolbar extends dijit.Toolbar {
            constructor(params?: Object, srcNodeRef?: HTMLElement);
            /**
             * Object to which attach points and events will be scoped.  Defaults
             * to 'this'.
             *
             */
            "attachScope": Object;
            set(property: "attachScope", value: Object): void;
            get(property: "attachScope"): Object;
            watch(property: "attachScope", callback: { (property?: string, oldValue?: Object, newValue?: Object): void }): { unwatch(): void }
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
            set(property: "attributeMap", value: Object): void;
            get(property: "attributeMap"): Object;
            watch(property: "attributeMap", callback: { (property?: string, oldValue?: Object, newValue?: Object): void }): { unwatch(): void }
            /**
             *
             */
            "baseClass": string;
            set(property: "baseClass", value: string): void;
            get(property: "baseClass"): string;
            watch(property: "baseClass", callback: { (property?: string, oldValue?: string, newValue?: string): void }): { unwatch(): void }
            /**
             *
             */
            "class": string;
            set(property: "class", value: string): void;
            get(property: "class"): string;
            watch(property: "class", callback: { (property?: string, oldValue?: string, newValue?: string): void }): { unwatch(): void }
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
            set(property: "containerNode", value: HTMLElement): void;
            get(property: "containerNode"): HTMLElement;
            watch(property: "containerNode", callback: { (property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void }): { unwatch(): void }
            /**
             * Bi-directional support, as defined by the HTML DIR
             * attribute. Either left-to-right "ltr" or right-to-left "rtl".  If undefined, widgets renders in page's
             * default direction.
             *
             */
            "dir": string;
            set(property: "dir", value: string): void;
            get(property: "dir"): string;
            watch(property: "dir", callback: { (property?: string, oldValue?: string, newValue?: string): void }): { unwatch(): void }
            /**
             * This is our visible representation of the widget! Other DOM
             * Nodes may by assigned to other properties, usually through the
             * template system's data-dojo-attach-point syntax, but the domNode
             * property is the canonical "top level" node in widget UI.
             *
             */
            "domNode": HTMLElement;
            set(property: "domNode", value: HTMLElement): void;
            get(property: "domNode"): HTMLElement;
            watch(property: "domNode", callback: { (property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void }): { unwatch(): void }
            /**
             *
             */
            "figure": Object;
            set(property: "figure", value: Object): void;
            get(property: "figure"): Object;
            watch(property: "figure", callback: { (property?: string, oldValue?: Object, newValue?: Object): void }): { unwatch(): void }
            /**
             * This widget or a widget it contains has focus, or is "active" because
             * it was recently clicked.
             *
             */
            "focused": boolean;
            set(property: "focused", value: boolean): void;
            get(property: "focused"): boolean;
            watch(property: "focused", callback: { (property?: string, oldValue?: boolean, newValue?: boolean): void }): { unwatch(): void }
            /**
             * The currently focused child widget, or null if there isn't one
             *
             */
            "focusedChild": Object;
            set(property: "focusedChild", value: Object): void;
            get(property: "focusedChild"): Object;
            watch(property: "focusedChild", callback: { (property?: string, oldValue?: Object, newValue?: Object): void }): { unwatch(): void }
            /**
             * A unique, opaque ID string that can be assigned by users or by the
             * system. If the developer passes an ID which is known not to be
             * unique, the specified ID is ignored and the system-generated ID is
             * used instead.
             *
             */
            "id": string;
            set(property: "id", value: string): void;
            get(property: "id"): string;
            watch(property: "id", callback: { (property?: string, oldValue?: string, newValue?: string): void }): { unwatch(): void }
            /**
             * Rarely used.  Overrides the default Dojo locale used to render this widget,
             * as defined by the HTML LANG attribute.
             * Value must be among the list of locales specified during by the Dojo bootstrap,
             * formatted according to RFC 3066 (like en-us).
             *
             */
            "lang": string;
            set(property: "lang", value: string): void;
            get(property: "lang"): string;
            watch(property: "lang", callback: { (property?: string, oldValue?: string, newValue?: string): void }): { unwatch(): void }
            /**
             * If multiple characters are typed where each keystroke happens within
             * multiCharSearchDuration of the previous keystroke,
             * search for nodes matching all the keystrokes.
             *
             * For example, typing "ab" will search for entries starting with
             * "ab" unless the delay between "a" and "b" is greater than multiCharSearchDuration.
             *
             */
            "multiCharSearchDuration": number;
            set(property: "multiCharSearchDuration", value: number): void;
            get(property: "multiCharSearchDuration"): number;
            watch(property: "multiCharSearchDuration", callback: { (property?: string, oldValue?: number, newValue?: number): void }): { unwatch(): void }
            /**
             * The document this widget belongs to.  If not specified to constructor, will default to
             * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
             *
             */
            "ownerDocument": Object;
            set(property: "ownerDocument", value: Object): void;
            get(property: "ownerDocument"): Object;
            watch(property: "ownerDocument", callback: { (property?: string, oldValue?: Object, newValue?: Object): void }): { unwatch(): void }
            /**
             *
             */
            "plugins": Object;
            set(property: "plugins", value: Object): void;
            get(property: "plugins"): Object;
            watch(property: "plugins", callback: { (property?: string, oldValue?: Object, newValue?: Object): void }): { unwatch(): void }
            /**
             *
             */
            "searchContainerNode": boolean;
            set(property: "searchContainerNode", value: boolean): void;
            get(property: "searchContainerNode"): boolean;
            watch(property: "searchContainerNode", callback: { (property?: string, oldValue?: boolean, newValue?: boolean): void }): { unwatch(): void }
            /**
             * pointer to original DOM node
             *
             */
            "srcNodeRef": HTMLElement;
            set(property: "srcNodeRef", value: HTMLElement): void;
            get(property: "srcNodeRef"): HTMLElement;
            watch(property: "srcNodeRef", callback: { (property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void }): { unwatch(): void }
            /**
             * HTML style attributes as cssText string or name/value hash
             *
             */
            "style": string;
            set(property: "style", value: string): void;
            get(property: "style"): string;
            watch(property: "style", callback: { (property?: string, oldValue?: string, newValue?: string): void }): { unwatch(): void }
            /**
             * Tab index of the container; same as HTML tabIndex attribute.
             * Note then when user tabs into the container, focus is immediately
             * moved to the first item in the container.
             *
             */
            "tabIndex": string;
            set(property: "tabIndex", value: string): void;
            get(property: "tabIndex"): string;
            watch(property: "tabIndex", callback: { (property?: string, oldValue?: string, newValue?: string): void }): { unwatch(): void }
            /**
             * Path to template (HTML file) for this widget relative to dojo.baseUrl.
             * Deprecated: use templateString with require([... "dojo/text!..."], ...) instead
             *
             */
            "templatePath": string;
            set(property: "templatePath", value: string): void;
            get(property: "templatePath"): string;
            watch(property: "templatePath", callback: { (property?: string, oldValue?: string, newValue?: string): void }): { unwatch(): void }
            /**
             *
             */
            "templateString": string;
            set(property: "templateString", value: string): void;
            get(property: "templateString"): string;
            watch(property: "templateString", callback: { (property?: string, oldValue?: string, newValue?: string): void }): { unwatch(): void }
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
            set(property: "title", value: string): void;
            get(property: "title"): string;
            watch(property: "title", callback: { (property?: string, oldValue?: string, newValue?: string): void }): { unwatch(): void }
            /**
             * When this widget's title attribute is used to for a tab label, accordion pane title, etc.,
             * this specifies the tooltip to appear when the mouse is hovered over that text.
             *
             */
            "tooltip": string;
            set(property: "tooltip", value: string): void;
            get(property: "tooltip"): string;
            watch(property: "tooltip", callback: { (property?: string, oldValue?: string, newValue?: string): void }): { unwatch(): void }
            /**
             *
             * @param widget
             * @param insertIndex               Optional
             */
            addChild(widget: dijit._WidgetBase, insertIndex: number): void;
            /**
             *
             * @param item
             * @param group
             */
            addGroupItem(item: dojox.sketch._Plugin, group: any): void;
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
             * Construct the UI for this widget, setting this.domNode.
             * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
             *
             */
            buildRendering(): void;
            /**
             *
             * @param node
             */
            childSelector(node: HTMLElement): any;
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
             * Deprecated.  You can call this in postCreate() to attach the keyboard handlers to the container,
             * but the preferred method is to override _onLeftArrow() and _onRightArrow(), or
             * _onUpArrow() and _onDownArrow(), to call focusPrev() and focusNext().
             *
             * @param prevKeyCodes Key codes for navigating to the previous child.
             * @param nextKeyCodes Key codes for navigating to the next child.
             */
            connectKeyNavHandlers(prevKeyCodes: dojo.keys, nextKeyCodes: dojo.keys): void;
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
             *
             */
            destroy(): void;
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
             * Default focus() implementation: focus the first child.
             *
             */
            focus(): void;
            /**
             * Focus specified child widget.
             *
             * @param widget Reference to container's child widget
             * @param last If true and if widget has multiple focusable nodes, focus thelast one instead of the first one
             */
            focusChild(widget: dijit._WidgetBase, last: boolean): void;
            /**
             * Focus the first focusable child in the container.
             *
             */
            focusFirstChild(): void;
            /**
             * Focus the last focusable child in the container.
             *
             */
            focusLastChild(): void;
            /**
             * Focus the next widget
             *
             */
            focusNext(): void;
            /**
             * Focus the last focusable node in the previous widget
             * (ex: go to the ComboButton icon section rather than button section)
             *
             */
            focusPrev(): void;
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
             * Gets the index of the child in this container or -1 if not found
             *
             * @param child
             */
            getIndexOfChild(child: dijit._WidgetBase): any;
            /**
             * Returns the parent widget of this widget.
             *
             */
            getParent(): any;
            /**
             * Returns true if widget has child widgets, i.e. if this.containerNode contains widgets.
             *
             */
            hasChildren(): boolean;
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
             * Removes the passed widget instance from this widget but does
             * not destroy it.  You can also pass in an integer indicating
             * the index within the container to remove (ie, removeChild(5) removes the sixth widget).
             *
             * @param widget
             */
            removeChild(widget: dijit._WidgetBase): void;
            /**
             * Removes the passed widget instance from this widget but does
             * not destroy it.  You can also pass in an integer indicating
             * the index within the container to remove (ie, removeChild(5) removes the sixth widget).
             *
             * @param widget
             */
            removeChild(widget: number): void;
            /**
             *
             */
            reset(): void;
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
             * @param f
             */
            setFigure(f: any): void;
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
             *
             */
            startupKeyNavChildren(): void;
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
            watch(property: string, callback: { (property?: string, oldValue?: any, newValue?: any): void }): { unwatch(): void };
            /**
             * Static method to get a template based on the templatePath or
             * templateString key
             */
            getCachedTemplate(): any;
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
             * When a key is pressed that matches a child item,
             * this method is called so that a widget can take appropriate action is necessary.
             *
             * @param item
             * @param evt
             * @param searchString
             * @param numMatches
             */
            onKeyboardSearch(item: dijit._WidgetBase, evt: Event, searchString: String, numMatches: number): void;
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
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/sketch/Anchor.html
         *
         *
         * @param an
         * @param id
         * @param isControl
         */
        interface Anchor { (an: any, id: any, isControl: any): void }
        namespace Anchor {
            /**
             *
             */
            var count: number
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/sketch/Annotation.html
         *
         *
         * @param figure
         * @param id
         */
        interface Annotation { (figure: any, id: any): void }
        namespace Annotation {
            /**
             *
             */
            var calculate: Object
            /**
             *
             */
            var Modes: Object
            /**
             *
             * @param obj
             */
            interface apply { (obj: any): void }
            /**
             *
             * @param type
             */
            interface beginEdit { (type: any): void }
            /**
             *
             */
            interface destroy { (): void }
            /**
             *
             */
            interface draw { (): void }
            /**
             *
             */
            interface drawBBox { (): void }
            /**
             *
             */
            interface endEdit { (): void }
            /**
             *
             */
            interface getBBox { (): void }
            /**
             *
             * @param zoomfactor
             */
            interface getTextBox { (zoomfactor: any): void }
            /**
             *
             */
            interface getType { (): void }
            /**
             *
             */
            interface initialize { (): void }
            /**
             *
             * @param name
             * @param value               Optional
             */
            interface property { (name: any, value: any): void }
            /**
             *
             * @param obj
             */
            interface readCommonAttrs { (obj: any): void }
            /**
             *
             * @param name
             * @param toolclass
             */
            interface register { (name: any, toolclass: any): void }
            /**
             *
             */
            interface serialize { (): void }
            /**
             *
             * @param pt
             */
            interface setBinding { (pt: any): void }
            /**
             *
             * @param m
             */
            interface setMode { (m: any): void }
            /**
             *
             */
            interface type { (): void }
            /**
             *
             */
            interface writeCommonAttrs { (): void }
            /**
             *
             * @param pct
             */
            interface zoom { (pct: any): void }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/sketch/Annotation.Modes.html
             *
             *
             */
            interface Modes {
                /**
                 *
                 */
                Edit: number;
                /**
                 *
                 */
                View: number;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/sketch/DoubleArrowAnnotation.html
         *
         *
         * @param figure
         * @param id
         */
        interface DoubleArrowAnnotation { (figure: any, id: any): void }
        namespace DoubleArrowAnnotation {
            /**
             *
             */
            var anchors: Object
            /**
             *
             */
            var control: Object
            /**
             *
             */
            var end: Object
            /**
             *
             */
            var endArrow: Object
            /**
             *
             */
            var endArrowGroup: Object
            /**
             *
             */
            var endRotation: number
            /**
             *
             */
            var labelShape: Object
            /**
             *
             */
            var pathShape: Object
            /**
             *
             */
            var start: Object
            /**
             *
             */
            var startArrow: Object
            /**
             *
             */
            var startArrowGroup: Object
            /**
             *
             */
            var startRotation: number
            /**
             *
             */
            var textAlign: string
            /**
             *
             */
            var textOffset: number
            /**
             *
             */
            var textPosition: Object
            /**
             *
             */
            var textYOffset: number
            /**
             *
             */
            var transform: Object
            /**
             *
             * @param obj
             */
            interface apply { (obj: any): void }
            /**
             *
             */
            interface destroy { (): void }
            /**
             *
             * @param obj
             */
            interface draw { (obj: any): void }
            /**
             *
             */
            interface getBBox { (): void }
            /**
             *
             */
            interface getType { (): void }
            /**
             *
             * @param obj
             */
            interface initialize { (obj: any): void }
            /**
             *
             */
            interface serialize { (): void }
            /**
             *
             */
            interface type { (): void }
            /**
             *
             * @param pct
             */
            interface zoom { (pct: any): void }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/sketch/DoubleArrowAnnotation.control.html
             *
             *
             */
            interface control {
                /**
                 *
                 */
                x: number;
                /**
                 *
                 */
                y: number;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/sketch/DoubleArrowAnnotation.end.html
             *
             *
             */
            interface end {
                /**
                 *
                 */
                x: number;
                /**
                 *
                 */
                y: number;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/sketch/DoubleArrowAnnotation.transform.html
             *
             *
             */
            interface transform {
                /**
                 *
                 */
                dx: number;
                /**
                 *
                 */
                dy: number;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/sketch/DoubleArrowAnnotation.start.html
             *
             *
             */
            interface start {
                /**
                 *
                 */
                x: number;
                /**
                 *
                 */
                y: number;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/sketch/DoubleArrowAnnotation.textPosition.html
             *
             *
             */
            interface textPosition {
                /**
                 *
                 */
                x: number;
                /**
                 *
                 */
                y: number;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/sketch/Figure.html
         *
         *
         * @param mixin
         */
        interface Figure { (mixin: any): void }
        namespace Figure {
            /**
             *
             */
            var gridSize: number
            /**
             *
             * @param annotation
             */
            interface add { (annotation: any): void }
            /**
             *
             * @param ann
             * @param t
             */
            interface convert { (ann: any, t: any): void }
            /**
             *
             * @param isLoading
             */
            interface destroy { (isLoading: any): void }
            /**
             *
             */
            interface draw { (): void }
            /**
             *
             * @param id
             */
            interface getAnnotator { (id: any): void }
            /**
             *
             */
            interface getFit { (): void }
            /**
             *
             */
            interface getValue { (): void }
            /**
             *
             * @param node
             */
            interface initialize { (node: any): void }
            /**
             *
             */
            interface initUndoStack { (): void }
            /**
             *
             * @param obj
             * @param n
             */
            interface load { (obj: any, n: any): void }
            /**
             *
             */
            interface nextKey { (): void }
            /**
             *
             */
            interface redo { (): void }
            /**
             *
             * @param annotation
             */
            interface remove { (annotation: any): void }
            /**
             *
             */
            interface serialize { (): void }
            /**
             *
             * @param t
             */
            interface setTool { (t: dojox.sketch._Plugin): void }
            /**
             *
             * @param text
             */
            interface setValue { (text: any): void }
            /**
             *
             */
            interface undo { (): void }
            /**
             *
             */
            interface unzoom { (): void }
            /**
             *
             * @param pct
             */
            interface zoom { (pct: any): void }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/sketch/LeadAnnotation.html
         *
         *
         * @param figure
         * @param id
         */
        interface LeadAnnotation { (figure: any, id: any): void }
        namespace LeadAnnotation {
            /**
             *
             * @param obj
             */
            interface apply { (obj: any): void }
            /**
             *
             */
            interface destroy { (): void }
            /**
             *
             * @param obj
             */
            interface draw { (obj: any): void }
            /**
             *
             */
            interface getBBox { (): void }
            /**
             *
             */
            interface getType { (): void }
            /**
             *
             * @param obj
             */
            interface initialize { (obj: any): void }
            /**
             *
             */
            interface serialize { (): void }
            /**
             *
             */
            interface type { (): void }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/sketch/PreexistingAnnotation.html
         *
         *
         * @param figure
         * @param id
         */
        interface PreexistingAnnotation { (figure: any, id: any): void }
        namespace PreexistingAnnotation {
            /**
             *
             * @param obj
             */
            interface apply { (obj: any): void }
            /**
             *
             */
            interface destroy { (): void }
            /**
             *
             * @param obj
             */
            interface draw { (obj: any): void }
            /**
             *
             */
            interface getBBox { (): void }
            /**
             *
             */
            interface getType { (): void }
            /**
             *
             * @param obj
             */
            interface initialize { (obj: any): void }
            /**
             *
             */
            interface serialize { (): void }
            /**
             *
             */
            interface type { (): void }
            /**
             *
             * @param pct
             */
            interface zoom { (pct: any): void }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/sketch/SingleArrowAnnotation.html
         *
         *
         * @param figure
         * @param id
         */
        interface SingleArrowAnnotation { (figure: any, id: any): void }
        namespace SingleArrowAnnotation {
            /**
             *
             * @param obj
             */
            interface apply { (obj: any): void }
            /**
             *
             */
            interface destroy { (): void }
            /**
             *
             * @param obj
             */
            interface draw { (obj: any): void }
            /**
             *
             */
            interface getBBox { (): void }
            /**
             *
             */
            interface getType { (): void }
            /**
             *
             * @param obj
             */
            interface initialize { (obj: any): void }
            /**
             *
             */
            interface serialize { (): void }
            /**
             *
             */
            interface type { (): void }
            /**
             *
             * @param pct
             */
            interface zoom { (pct: any): void }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/sketch/UnderlineAnnotation.html
         *
         *
         * @param figure
         * @param id
         */
        interface UnderlineAnnotation { (figure: any, id: any): void }
        namespace UnderlineAnnotation {
            /**
             *
             * @param obj
             */
            interface apply { (obj: any): void }
            /**
             *
             */
            interface destroy { (): void }
            /**
             *
             * @param obj
             */
            interface draw { (obj: any): void }
            /**
             *
             */
            interface getBBox { (): void }
            /**
             *
             */
            interface getType { (): void }
            /**
             *
             * @param obj
             */
            interface initialize { (obj: any): void }
            /**
             *
             */
            interface serialize { (): void }
            /**
             *
             */
            interface type { (): void }
            /**
             *
             * @param pct
             */
            interface zoom { (pct: any): void }
        }

    }

}

declare module "dojox/sketch" {
    var exp: dojox.sketch
    export=exp;
}
declare module "dojox/sketch/_Plugin" {
    var exp: dojox.sketch._Plugin
    export=exp;
}
declare module "dojox/sketch/Slider" {
    var exp: dojox.sketch.Slider
    export=exp;
}
declare module "dojox/sketch/UndoStack" {
    var exp: dojox.sketch.UndoStack
    export=exp;
}
declare module "dojox/sketch/Toolbar" {
    var exp: dojox.sketch.Toolbar
    export=exp;
}
declare module "dojox/sketch/Anchor" {
    var exp: dojox.sketch.Anchor
    export=exp;
}
declare module "dojox/sketch/Annotation" {
    var exp: dojox.sketch.Annotation
    export=exp;
}
declare module "dojox/sketch/Annotation.Modes" {
    var exp: dojox.sketch.Annotation.Modes
    export=exp;
}
declare module "dojox/sketch/DoubleArrowAnnotation" {
    var exp: dojox.sketch.DoubleArrowAnnotation
    export=exp;
}
declare module "dojox/sketch/DoubleArrowAnnotation.control" {
    var exp: dojox.sketch.DoubleArrowAnnotation.control
    export=exp;
}
declare module "dojox/sketch/DoubleArrowAnnotation.start" {
    var exp: dojox.sketch.DoubleArrowAnnotation.start
    export=exp;
}
declare module "dojox/sketch/DoubleArrowAnnotation.textPosition" {
    var exp: dojox.sketch.DoubleArrowAnnotation.textPosition
    export=exp;
}
declare module "dojox/sketch/DoubleArrowAnnotation.transform" {
    var exp: dojox.sketch.DoubleArrowAnnotation.transform
    export=exp;
}
declare module "dojox/sketch/DoubleArrowAnnotation.end" {
    var exp: dojox.sketch.DoubleArrowAnnotation.end
    export=exp;
}
declare module "dojox/sketch/Figure" {
    var exp: dojox.sketch.Figure
    export=exp;
}
declare module "dojox/sketch/PreexistingAnnotation" {
    var exp: dojox.sketch.PreexistingAnnotation
    export=exp;
}
declare module "dojox/sketch/LeadAnnotation" {
    var exp: dojox.sketch.LeadAnnotation
    export=exp;
}
declare module "dojox/sketch/SingleArrowAnnotation" {
    var exp: dojox.sketch.SingleArrowAnnotation
    export=exp;
}
declare module "dojox/sketch/UnderlineAnnotation" {
    var exp: dojox.sketch.UnderlineAnnotation
    export=exp;
}
