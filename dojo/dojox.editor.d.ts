// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="dijit.d.ts" />
declare module dojox {
    
    module editor {
        module plugins {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/_SpellCheckParser.html
             *
             * 
             */
            class _SpellCheckParser {
                constructor();
                /**
                 * 
                 */
                "lang": string;
                /**
                 * Get the indices of the words. They are in one-to-one correspondence
                 * 
                 */
                getIndices(): any;
                /**
                 * Parse the text into words
                 * 
                 * @param text Plain text without html tags             
                 */
                parseIntoWords(text: String): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/AutoUrlLink.html
             *
             * This plugin can recognize a URL like string
             * (such as http://www.website.com) and turn it into
             * a hyperlink that points to that URL.
             * 
             * @param args       OptionalInitial settings for any of the attributes.     
             */
            class AutoUrlLink extends dijit._editor._Plugin {
                constructor(args?: Object);
                /**
                 * Pointer to dijit/form/Button or other widget (ex: dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * If not specified, will be created on initialization according to buttonClass
                 * 
                 */
                "button": Object;
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * Points to the parent editor
                 * 
                 */
                "editor": Object;
                /**
                 * The CSS class name for the button node is formed from iconClassPrefix and command
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * If true, this plugin executes by calling Editor.execCommand() with the argument specified in command.
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * Class of widget (ex: dijit.form.Button or dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * This is used to instantiate the button, unless button itself is specified directly.
                 * 
                 */
                buttonClass(): void;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * Get a property from a plugin.
                 * Get a named property from a plugin. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_getFooAttr", calling:
                 * 
                 * plugin.get("foo");
                 * would be equivalent to writing:
                 * 
                 * plugin._getFooAttr();
                 * and:
                 * 
                 * plugin.get("bar");
                 * would be equivalent to writing:
                 * 
                 * plugin.bar;
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Set a property on a plugin
                 * Sets named properties on a plugin which may potentially be handled by a
                 * setter in the plugin.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_setFooAttr", calling:
                 * 
                 * plugin.set("foo", "Howdy!");
                 * would be equivalent to writing:
                 * 
                 * plugin._setFooAttr("Howdy!");
                 * and:
                 * 
                 * plugin.set("bar", 3);
                 * would be equivalent to writing:
                 * 
                 * plugin.bar = 3;
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * plugin.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * })
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: Attr, value: any): any;
                /**
                 * Called by the editor it belongs to.
                 * 
                 * @param editor The editor it belongs to.             
                 */
                setEditor(editor: dijit.Editor): void;
                /**
                 * Tell the plugin to add it's controller widget (often a button)
                 * to the toolbar.  Does nothing if there is no controller widget.
                 * 
                 * @param toolbar             
                 */
                setToolbar(toolbar: dijit.Toolbar): void;
                /**
                 * Change state of the plugin to respond to events in the editor.
                 * This is called on meaningful events in the editor, such as change of selection
                 * or caret position (but not simple typing of alphanumeric keys).   It gives the
                 * plugin a chance to update the CSS of its button.
                 * 
                 * For example, the "bold" plugin will highlight/unhighlight the bold button depending on whether the
                 * characters next to the caret are bold or not.
                 * 
                 * Only makes sense when useDefaultCommand is true, as it calls Editor.queryCommandEnabled(command).
                 * 
                 */
                updateState(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/Blockquote.html
             *
             * This plugin provides Blockquote capability to the editor.
             * window/tab
             * 
             * @param args       OptionalInitial settings for any of the attributes.     
             */
            class Blockquote extends dijit._editor._Plugin {
                constructor(args?: Object);
                /**
                 * Pointer to dijit/form/Button or other widget (ex: dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * If not specified, will be created on initialization according to buttonClass
                 * 
                 */
                "button": Object;
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * Points to the parent editor
                 * 
                 */
                "editor": Object;
                /**
                 * The CSS class name for the button node icon.
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * If true, this plugin executes by calling Editor.execCommand() with the argument specified in command.
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * Class of widget (ex: dijit.form.Button or dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * This is used to instantiate the button, unless button itself is specified directly.
                 * 
                 */
                buttonClass(): void;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * Get a property from a plugin.
                 * Get a named property from a plugin. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_getFooAttr", calling:
                 * 
                 * plugin.get("foo");
                 * would be equivalent to writing:
                 * 
                 * plugin._getFooAttr();
                 * and:
                 * 
                 * plugin.get("bar");
                 * would be equivalent to writing:
                 * 
                 * plugin.bar;
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Set a property on a plugin
                 * Sets named properties on a plugin which may potentially be handled by a
                 * setter in the plugin.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_setFooAttr", calling:
                 * 
                 * plugin.set("foo", "Howdy!");
                 * would be equivalent to writing:
                 * 
                 * plugin._setFooAttr("Howdy!");
                 * and:
                 * 
                 * plugin.set("bar", 3);
                 * would be equivalent to writing:
                 * 
                 * plugin.bar = 3;
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * plugin.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * })
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: Attr, value: any): any;
                /**
                 * Over-ride for the setting of the editor.
                 * 
                 * @param editor The editor to configure for this plugin to use.             
                 */
                setEditor(editor: dijit.Editor): void;
                /**
                 * Tell the plugin to add it's controller widget (often a button)
                 * to the toolbar.  Does nothing if there is no controller widget.
                 * 
                 * @param toolbar             
                 */
                setToolbar(toolbar: dijit.Toolbar): void;
                /**
                 * Overrides _Plugin.updateState().  This controls whether or not the current
                 * cursor position should toggle on the quote button or not.
                 * 
                 */
                updateState(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/AutoSave.html
             *
             * This plugin provides the auto save capability to the editor. The
             * plugin saves the content of the editor in interval. When
             * the save action is performed, the document in the editor frame
             * will be posted to the URL provided, or none, if none provided.
             * 
             * @param args       OptionalInitial settings for any of the attributes.     
             */
            class AutoSave extends dojox.editor.plugins.Save {
                constructor(args?: Object);
                /**
                 * Pointer to dijit/form/Button or other widget (ex: dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * If not specified, will be created on initialization according to buttonClass
                 * 
                 */
                "button": Object;
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * Points to the parent editor
                 * 
                 */
                "editor": Object;
                /**
                 * The CSS class name for the button node is formed from iconClassPrefix
                 * and command
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * The interval to perform the save action.
                 * 
                 */
                "interval": number;
                /**
                 * Boolean flag to indicate that the default action for save and
                 * error handlers is to just log to console.  Default is true.
                 * 
                 */
                "logResults": boolean;
                /**
                 * The URL to POST the content back to.  Used by the save function.
                 * 
                 */
                "url": string;
                /**
                 * If true, this plugin executes by calling Editor.execCommand() with the argument specified in command.
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * Class of widget (ex: dijit.form.Button or dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * This is used to instantiate the button, unless button itself is specified directly.
                 * 
                 */
                buttonClass(): void;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * Cleanup of our plugin.
                 * 
                 */
                destroy(): void;
                /**
                 * Get a property from a plugin.
                 * Get a named property from a plugin. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_getFooAttr", calling:
                 * 
                 * plugin.get("foo");
                 * would be equivalent to writing:
                 * 
                 * plugin._getFooAttr();
                 * and:
                 * 
                 * plugin.get("bar");
                 * would be equivalent to writing:
                 * 
                 * plugin.bar;
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * User over-ridable save function for the editor content.
                 * Please note that the service URL provided should do content
                 * filtering of the posted content to avoid XSS injection via
                 * the data from the editor.
                 * 
                 * @param content             
                 */
                save(content: any): void;
                /**
                 * Set a property on a plugin
                 * Sets named properties on a plugin which may potentially be handled by a
                 * setter in the plugin.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_setFooAttr", calling:
                 * 
                 * plugin.set("foo", "Howdy!");
                 * would be equivalent to writing:
                 * 
                 * plugin._setFooAttr("Howdy!");
                 * and:
                 * 
                 * plugin.set("bar", 3);
                 * would be equivalent to writing:
                 * 
                 * plugin.bar = 3;
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * plugin.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * })
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: Attr, value: any): any;
                /**
                 * Over-ride for the setting of the editor. No toggle button for
                 * this plugin. And start to save the content of the editor in
                 * interval
                 * 
                 * @param editor The editor to configure for this plugin to use.             
                 */
                setEditor(editor: dijit.Editor): void;
                /**
                 * Tell the plugin to add it's controller widget (often a button)
                 * to the toolbar.  Does nothing if there is no controller widget.
                 * 
                 * @param toolbar             
                 */
                setToolbar(toolbar: dijit.Toolbar): void;
                /**
                 * Over-ride for button state control for disabled to work.
                 * 
                 */
                updateState(): void;
                /**
                 * User over-ridable save success function for editor content.
                 * 
                 * @param error             
                 * @param ioargs             
                 */
                onError(error: any, ioargs: any): void;
                /**
                 * User over-ridable save success function for editor content.
                 * 
                 * @param resp The response from the server, if any, in text format.             
                 * @param ioargs             
                 */
                onSuccess(resp: any, ioargs: any): void;
            }
            module AutoSave {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/AutoSave._AutoSaveSettingDialog.html
                 *
                 * 
                 * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
                 * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
                 */
                class _AutoSaveSettingDialog extends dijit._Widget implements dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin {
                    constructor(params?: Object, srcNodeRef?: HTMLElement);
                    /**
                     * Object to which attach points and events will be scoped.  Defaults
                     * to 'this'.
                     * 
                     */
                    "attachScope": Object;
                    set(property:"attachScope", value: Object): void;
                    get(property:"attachScope"): Object;
                    watch(property:"attachScope", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                    "btnCancel": string;
                    set(property:"btnCancel", value: string): void;
                    get(property:"btnCancel"): string;
                    watch(property:"btnCancel", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "btnOk": string;
                    set(property:"btnOk", value: string): void;
                    get(property:"btnOk"): string;
                    watch(property:"btnOk", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                     * Used to provide a context require to the dojo/parser in order to be
                     * able to use relative MIDs (e.g. ./Widget) in the widget's template.
                     * 
                     */
                    "contextRequire": Function;
                    set(property:"contextRequire", value: Function): void;
                    get(property:"contextRequire"): Function;
                    watch(property:"contextRequire", callback:{(property?:string, oldValue?:Function, newValue?: Function):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "dialogDescription": string;
                    set(property:"dialogDescription", value: string): void;
                    get(property:"dialogDescription"): string;
                    watch(property:"dialogDescription", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "dialogTitle": string;
                    set(property:"dialogTitle", value: string): void;
                    get(property:"dialogTitle"): string;
                    watch(property:"dialogTitle", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                     * 
                     */
                    "paramLabel": string;
                    set(property:"paramLabel", value: string): void;
                    get(property:"paramLabel"): string;
                    watch(property:"paramLabel", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "paramName": string;
                    set(property:"paramName", value: string): void;
                    get(property:"paramName"): string;
                    watch(property:"paramName", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "searchContainerNode": boolean;
                    set(property:"searchContainerNode", value: boolean): void;
                    get(property:"searchContainerNode"): boolean;
                    watch(property:"searchContainerNode", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                     * Path to template (HTML file) for this widget relative to dojo.baseUrl.
                     * Deprecated: use templateString with require([... "dojo/text!..."], ...) instead
                     * 
                     */
                    "templatePath": string;
                    set(property:"templatePath", value: string): void;
                    get(property:"templatePath"): string;
                    watch(property:"templatePath", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "templateString": string;
                    set(property:"templateString", value: string): void;
                    get(property:"templateString"): string;
                    watch(property:"templateString", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                     * 
                     */
                    "widgetsInTemplate": boolean;
                    set(property:"widgetsInTemplate", value: boolean): void;
                    get(property:"widgetsInTemplate"): boolean;
                    watch(property:"widgetsInTemplate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                     * Hide the setting dialog.
                     * 
                     */
                    hide(): void;
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
                     * Display the setting dialog. If the internal interval value is ""
                     * set it to zero
                     * 
                     */
                    show(): void;
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
                     * Handle the Cancel event and close the dialog.
                     * 
                     */
                    onCancel(): void;
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
                     * Handle the OK event and close the dialog.
                     * 
                     */
                    onOk(): void;
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
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/Breadcrumb.html
             *
             * This plugin provides Breadcrumb capability to the editor. As you move
             * around the editor, it updates with your current indention depth.
             * 
             * @param args       OptionalInitial settings for any of the attributes.     
             */
            class Breadcrumb extends dijit._editor._Plugin {
                constructor(args?: Object);
                /**
                 * The toolbar containing the breadcrumb.
                 * 
                 */
                "breadcrumbBar": Object;
                /**
                 * Pointer to dijit/form/Button or other widget (ex: dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * If not specified, will be created on initialization according to buttonClass
                 * 
                 */
                "button": Object;
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * Points to the parent editor
                 * 
                 */
                "editor": Object;
                /**
                 * The CSS class name for the button node is formed from iconClassPrefix and command
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * If true, this plugin executes by calling Editor.execCommand() with the argument specified in command.
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * Class of widget (ex: dijit.form.Button or dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * This is used to instantiate the button, unless button itself is specified directly.
                 * 
                 */
                buttonClass(): void;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * Over-ride to clean up the breadcrumb toolbar.
                 * 
                 */
                destroy(): void;
                /**
                 * Get a property from a plugin.
                 * Get a named property from a plugin. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_getFooAttr", calling:
                 * 
                 * plugin.get("foo");
                 * would be equivalent to writing:
                 * 
                 * plugin._getFooAttr();
                 * and:
                 * 
                 * plugin.get("bar");
                 * would be equivalent to writing:
                 * 
                 * plugin.bar;
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Set a property on a plugin
                 * Sets named properties on a plugin which may potentially be handled by a
                 * setter in the plugin.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_setFooAttr", calling:
                 * 
                 * plugin.set("foo", "Howdy!");
                 * would be equivalent to writing:
                 * 
                 * plugin._setFooAttr("Howdy!");
                 * and:
                 * 
                 * plugin.set("bar", 3);
                 * would be equivalent to writing:
                 * 
                 * plugin.bar = 3;
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * plugin.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * })
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: Attr, value: any): any;
                /**
                 * Over-ride for the setting of the editor.
                 * 
                 * @param editor The editor to configure for this plugin to use.             
                 */
                setEditor(editor: dijit.Editor): void;
                /**
                 * Tell the plugin to add it's controller widget (often a button)
                 * to the toolbar.  Does nothing if there is no controller widget.
                 * 
                 * @param toolbar             
                 */
                setToolbar(toolbar: dijit.Toolbar): void;
                /**
                 * Over-ride of updateState to hide the toolbar when the iframe is not visible.
                 * Also triggers the breadcrumb update.
                 * 
                 */
                updateState(): void;
            }
            module Breadcrumb {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/Breadcrumb._BreadcrumbMenuTitle.html
                 *
                 * Simple internal, non-clickable, menu entry to act as a menu title bar.
                 * 
                 * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
                 * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
                 */
                class _BreadcrumbMenuTitle extends dijit._Widget implements dijit._TemplatedMixin, dijit._Contained {
                    constructor(params?: Object, srcNodeRef?: HTMLElement);
                    /**
                     * Object to which attach points and events will be scoped.  Defaults
                     * to 'this'.
                     * 
                     */
                    "attachScope": Object;
                    set(property:"attachScope", value: Object): void;
                    get(property:"attachScope"): Object;
                    watch(property:"attachScope", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                    "menuTitle": string;
                    set(property:"menuTitle", value: string): void;
                    get(property:"menuTitle"): string;
                    watch(property:"menuTitle", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                    "searchContainerNode": boolean;
                    set(property:"searchContainerNode", value: boolean): void;
                    get(property:"searchContainerNode"): boolean;
                    watch(property:"searchContainerNode", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                     * Path to template (HTML file) for this widget relative to dojo.baseUrl.
                     * Deprecated: use templateString with require([... "dojo/text!..."], ...) instead
                     * 
                     */
                    "templatePath": string;
                    set(property:"templatePath", value: string): void;
                    get(property:"templatePath"): string;
                    watch(property:"templatePath", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "templateString": string;
                    set(property:"templateString", value: string): void;
                    get(property:"templateString"): string;
                    watch(property:"templateString", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                     * Construct the UI for this widget, setting this.domNode.
                     * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
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
                     * Returns the index of this widget within its container parent.
                     * It returns -1 if the parent does not exist, or if the parent
                     * is not a dijit/_Container
                     * 
                     */
                    getIndexInParent(): any;
                    /**
                     * Returns null if this is the last child of the parent,
                     * otherwise returns the next element sibling to the "right".
                     * 
                     */
                    getNextSibling(): any;
                    /**
                     * Returns the parent widget of this widget.
                     * 
                     */
                    getParent(): any;
                    /**
                     * Returns null if this is the first child of the parent,
                     * otherwise returns the next element sibling to the "left".
                     * 
                     */
                    getPreviousSibling(): any;
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
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/CollapsibleToolbar.html
             *
             * This plugin provides a weappable toolbar container to allow expand/collapse
             * of the editor toolbars.  This plugin should be registered first in most cases to
             * avoid conflicts in toolbar construction.
             * 
             * @param args       OptionalInitial settings for any of the attributes.     
             */
            class CollapsibleToolbar extends dijit._editor._Plugin {
                constructor(args?: Object);
                /**
                 * Pointer to dijit/form/Button or other widget (ex: dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * If not specified, will be created on initialization according to buttonClass
                 * 
                 */
                "button": Object;
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * Points to the parent editor
                 * 
                 */
                "editor": Object;
                /**
                 * The CSS class name for the button node is formed from iconClassPrefix and command
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * If true, this plugin executes by calling Editor.execCommand() with the argument specified in command.
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * Class of widget (ex: dijit.form.Button or dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * This is used to instantiate the button, unless button itself is specified directly.
                 * 
                 */
                buttonClass(): void;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * Over-ride of destroy method for cleanup.
                 * 
                 */
                destroy(): void;
                /**
                 * Get a property from a plugin.
                 * Get a named property from a plugin. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_getFooAttr", calling:
                 * 
                 * plugin.get("foo");
                 * would be equivalent to writing:
                 * 
                 * plugin._getFooAttr();
                 * and:
                 * 
                 * plugin.get("bar");
                 * would be equivalent to writing:
                 * 
                 * plugin.bar;
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Set a property on a plugin
                 * Sets named properties on a plugin which may potentially be handled by a
                 * setter in the plugin.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_setFooAttr", calling:
                 * 
                 * plugin.set("foo", "Howdy!");
                 * would be equivalent to writing:
                 * 
                 * plugin._setFooAttr("Howdy!");
                 * and:
                 * 
                 * plugin.set("bar", 3);
                 * would be equivalent to writing:
                 * 
                 * plugin.bar = 3;
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * plugin.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * })
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: Attr, value: any): any;
                /**
                 * Over-ride for the setting of the editor.
                 * 
                 * @param editor The editor to configure for this plugin to use.             
                 */
                setEditor(editor: dijit.Editor): void;
                /**
                 * Tell the plugin to add it's controller widget (often a button)
                 * to the toolbar.  Does nothing if there is no controller widget.
                 * 
                 * @param toolbar             
                 */
                setToolbar(toolbar: dijit.Toolbar): void;
                /**
                 * Change state of the plugin to respond to events in the editor.
                 * This is called on meaningful events in the editor, such as change of selection
                 * or caret position (but not simple typing of alphanumeric keys).   It gives the
                 * plugin a chance to update the CSS of its button.
                 * 
                 * For example, the "bold" plugin will highlight/unhighlight the bold button depending on whether the
                 * characters next to the caret are bold or not.
                 * 
                 * Only makes sense when useDefaultCommand is true, as it calls Editor.queryCommandEnabled(command).
                 * 
                 */
                updateState(): void;
            }
            module CollapsibleToolbar {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/CollapsibleToolbar._CollapsibleToolbarButton.html
                 *
                 * Simple internal widget for representing a clickable button for expand/collapse
                 * with A11Y support.
                 * 
                 * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
                 * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
                 */
                class _CollapsibleToolbarButton extends dijit._Widget implements dijit._TemplatedMixin {
                    constructor(params?: Object, srcNodeRef?: HTMLElement);
                    /**
                     * Object to which attach points and events will be scoped.  Defaults
                     * to 'this'.
                     * 
                     */
                    "attachScope": Object;
                    set(property:"attachScope", value: Object): void;
                    get(property:"attachScope"): Object;
                    watch(property:"attachScope", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                    "buttonClass": string;
                    set(property:"buttonClass", value: string): void;
                    get(property:"buttonClass"): string;
                    watch(property:"buttonClass", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                     * 
                     */
                    "searchContainerNode": boolean;
                    set(property:"searchContainerNode", value: boolean): void;
                    get(property:"searchContainerNode"): boolean;
                    watch(property:"searchContainerNode", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                     * Path to template (HTML file) for this widget relative to dojo.baseUrl.
                     * Deprecated: use templateString with require([... "dojo/text!..."], ...) instead
                     * 
                     */
                    "templatePath": string;
                    set(property:"templatePath", value: string): void;
                    get(property:"templatePath"): string;
                    watch(property:"templatePath", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "templateString": string;
                    set(property:"templateString", value: string): void;
                    get(property:"templateString"): string;
                    watch(property:"templateString", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "text": string;
                    set(property:"text", value: string): void;
                    get(property:"text"): string;
                    watch(property:"text", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "textClass": string;
                    set(property:"textClass", value: string): void;
                    get(property:"textClass"): string;
                    watch(property:"textClass", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
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
                     * Construct the UI for this widget, setting this.domNode.
                     * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
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
                     * Simple synthetic event to listen for dijit click events (mouse or keyboard)
                     * 
                     * @param e             
                     */
                    onClick(e: any): void;
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
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/_SmileyPalette.html
             *
             * A keyboard accessible emoticon-picking widget (for inserting smiley characters)
             * Grid showing various emoticons.
             * Can be used standalone, or as a popup.
             * 
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
             */
            class _SmileyPalette extends dijit._Widget implements dijit._TemplatedMixin, dijit._PaletteMixin {
                constructor(params?: Object, srcNodeRef?: HTMLElement);
                /**
                 * True if mouse was pressed while over this widget, and hasn't been released yet
                 * 
                 */
                "active": boolean;
                set(property:"active", value: boolean): void;
                get(property:"active"): boolean;
                watch(property:"active", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * Object to which attach points and events will be scoped.  Defaults
                 * to 'this'.
                 * 
                 */
                "attachScope": Object;
                set(property:"attachScope", value: Object): void;
                get(property:"attachScope"): Object;
                watch(property:"attachScope", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                 * CSS class applied to each cell in the palette
                 * 
                 */
                "cellClass": string;
                set(property:"cellClass", value: string): void;
                get(property:"cellClass"): string;
                watch(property:"cellClass", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                 * Subclasses may define a cssStateNodes property that lists sub-nodes within the widget that
                 * need CSS classes applied on mouse hover/press and focus.
                 * 
                 * Each entry in this optional hash is a an attach-point name (like "upArrowButton") mapped to a CSS class name
                 * (like "dijitUpArrowButton"). Example:
                 * 
                 * {
                 *     "upArrowButton": "dijitUpArrowButton",
                 *     "downArrowButton": "dijitDownArrowButton"
                 * }
                 * The above will set the CSS class dijitUpArrowButton to the this.upArrowButton DOMNode when it
                 * 
                 * is hovered, etc.
                 * 
                 */
                "cssStateNodes": Object;
                set(property:"cssStateNodes", value: Object): void;
                get(property:"cssStateNodes"): Object;
                watch(property:"cssStateNodes", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * Number of milliseconds before a held key or button becomes typematic
                 * 
                 */
                "defaultTimeout": number;
                set(property:"defaultTimeout", value: number): void;
                get(property:"defaultTimeout"): number;
                watch(property:"defaultTimeout", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
                 * True if cursor is over this widget
                 * 
                 */
                "hovering": boolean;
                set(property:"hovering", value: boolean): void;
                get(property:"hovering"): boolean;
                watch(property:"hovering", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                "searchContainerNode": boolean;
                set(property:"searchContainerNode", value: boolean): void;
                get(property:"searchContainerNode"): boolean;
                watch(property:"searchContainerNode", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                 * Widget tab index.
                 * 
                 */
                "tabIndex": string;
                set(property:"tabIndex", value: string): void;
                get(property:"tabIndex"): string;
                watch(property:"tabIndex", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * Path to template (HTML file) for this widget relative to dojo.baseUrl.
                 * Deprecated: use templateString with require([... "dojo/text!..."], ...) instead
                 * 
                 */
                "templatePath": string;
                set(property:"templatePath", value: string): void;
                get(property:"templatePath"): string;
                watch(property:"templatePath", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * The template of this widget.
                 * 
                 */
                "templateString": string;
                set(property:"templateString", value: string): void;
                get(property:"templateString"): string;
                watch(property:"templateString", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * Fraction of time used to change the typematic timer between events
                 * 1.0 means that each typematic event fires at defaultTimeout intervals
                 * Less than 1.0 means that each typematic event fires at an increasing faster rate
                 * 
                 */
                "timeoutChangeRate": number;
                set(property:"timeoutChangeRate", value: number): void;
                get(property:"timeoutChangeRate"): number;
                watch(property:"timeoutChangeRate", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
                 * Currently selected color/emoticon/etc.
                 * 
                 */
                "value": string;
                set(property:"value", value: string): void;
                get(property:"value"): string;
                watch(property:"value", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                 * 
                 */
                dyeClass(): void;
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
                 * 
                 */
                Emoticon(): void;
                /**
                 * Focus this widget.  Puts focus on the most recently focused cell.
                 * 
                 */
                focus(): void;
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
                 * Callback when a cell is selected.
                 * 
                 * @param value Value corresponding to cell.             
                 */
                onChange(value: String): void;
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
            module _SmileyPalette {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/_SmileyPalette.Emoticon.html
                 *
                 * JS Object representing an emoticon
                 * 
                 * @param id     
                 */
                class Emoticon {
                    constructor(id: String);
                    /**
                     * 
                     */
                    "ascii": Object;
                    /**
                     * 
                     * @param cell             
                     * @param blankGif             
                     */
                    fillCell(cell: HTMLElement, blankGif: String): void;
                    /**
                     * Factory to create Emoticon object based on string like ":-)" rather than id like "smile"
                     * 
                     * @param str             
                     */
                    fromAscii(str: String): void;
                    /**
                     * Returns a emoticon string in ascii representation, ex: :-)
                     * 
                     */
                    getValue(): any;
                    /**
                     * Return the HTML string for an <img> node that shows this smiley
                     * 
                     * @param clazz             
                     */
                    imgHtml(clazz: String): any;
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/FindReplace.html
             *
             * This plugin provides a Find/Replace capability for the editor.
             * Note that this plugin is NOT supported on Opera currently, as opera
             * does not implement a window.find or equiv function.
             * 
             * @param args       OptionalInitial settings for any of the attributes.     
             */
            class FindReplace extends dijit._editor._Plugin {
                constructor(args?: Object);
                /**
                 * The toggle button
                 * 
                 */
                "button": Object;
                /**
                 * Define the class of button the editor uses.
                 * 
                 */
                /*REMOVED: this overwrites the function buttonClass from _Plugin which makes TypeScript unhappy. Simplest thing is to make it go away for now...*/
                //"buttonClass": Object; 
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * The editor this plugin belongs to
                 * 
                 */
                "editor": Object;
                /**
                 * The CSS class name for the button node is formed from iconClassPrefix and command
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * If true, this plugin executes by calling Editor.execCommand() with the argument specified in command.
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * Cleanup of our custom toolbar.
                 * 
                 */
                destroy(): void;
                /**
                 * Get a property from a plugin.
                 * Get a named property from a plugin. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_getFooAttr", calling:
                 * 
                 * plugin.get("foo");
                 * would be equivalent to writing:
                 * 
                 * plugin._getFooAttr();
                 * and:
                 * 
                 * plugin.get("bar");
                 * would be equivalent to writing:
                 * 
                 * plugin.bar;
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Set a property on a plugin
                 * Sets named properties on a plugin which may potentially be handled by a
                 * setter in the plugin.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_setFooAttr", calling:
                 * 
                 * plugin.set("foo", "Howdy!");
                 * would be equivalent to writing:
                 * 
                 * plugin._setFooAttr("Howdy!");
                 * and:
                 * 
                 * plugin.set("bar", 3);
                 * would be equivalent to writing:
                 * 
                 * plugin.bar = 3;
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * plugin.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * })
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: Attr, value: any): any;
                /**
                 * This is a callback handler that set a reference to the editor this plugin
                 * hosts in
                 * 
                 * @param editor             
                 */
                setEditor(editor: any): void;
                /**
                 * Over-ride so that find/replace toolbar is appended after the current toolbar.
                 * 
                 * @param toolbar The current toolbar of the editor             
                 */
                setToolbar(toolbar: dijit.Toolbar): void;
                /**
                 * Function to allow programmatic toggling of the find toolbar.
                 * 
                 */
                toggle(): void;
                /**
                 * Over-ride for button state control for disabled to work.
                 * 
                 */
                updateState(): void;
            }
            module FindReplace {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/FindReplace._FindReplaceCheckBox.html
                 *
                 * Base class for widgets that contains a label (like "Match case: ")
                 * and a checkbox to indicate if it is checked or not.
                 * Used as Toolbar entry.
                 * 
                 * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
                 * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
                 */
                class _FindReplaceCheckBox extends dijit._Widget implements dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin {
                    constructor(params?: Object, srcNodeRef?: HTMLElement);
                    /**
                     * Object to which attach points and events will be scoped.  Defaults
                     * to 'this'.
                     * 
                     */
                    "attachScope": Object;
                    set(property:"attachScope", value: Object): void;
                    get(property:"attachScope"): Object;
                    watch(property:"attachScope", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                     * The id of the enhanced checkbox
                     * 
                     */
                    "checkId": string;
                    set(property:"checkId", value: string): void;
                    get(property:"checkId"): string;
                    watch(property:"checkId", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                     * Used to provide a context require to the dojo/parser in order to be
                     * able to use relative MIDs (e.g. ./Widget) in the widget's template.
                     * 
                     */
                    "contextRequire": Function;
                    set(property:"contextRequire", value: Function): void;
                    get(property:"contextRequire"): Function;
                    watch(property:"contextRequire", callback:{(property?:string, oldValue?:Function, newValue?: Function):void}) :{unwatch():void}
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
                     * The label of the enhanced checkbox
                     * 
                     */
                    "label": string;
                    set(property:"label", value: string): void;
                    get(property:"label"): string;
                    watch(property:"label", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                     * 
                     */
                    "searchContainerNode": boolean;
                    set(property:"searchContainerNode", value: boolean): void;
                    get(property:"searchContainerNode"): boolean;
                    watch(property:"searchContainerNode", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                     * Path to template (HTML file) for this widget relative to dojo.baseUrl.
                     * Deprecated: use templateString with require([... "dojo/text!..."], ...) instead
                     * 
                     */
                    "templatePath": string;
                    set(property:"templatePath", value: string): void;
                    get(property:"templatePath"): string;
                    watch(property:"templatePath", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "templateString": string;
                    set(property:"templateString", value: string): void;
                    get(property:"templateString"): string;
                    watch(property:"templateString", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                     * The tooltip of the enhanced checkbox when the mouse is hovering it
                     * 
                     */
                    "tooltip": string;
                    set(property:"tooltip", value: string): void;
                    get(property:"tooltip"): string;
                    watch(property:"tooltip", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "widget": Object;
                    set(property:"widget", value: Object): void;
                    get(property:"widget"): Object;
                    watch(property:"widget", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "widgetsInTemplate": boolean;
                    set(property:"widgetsInTemplate", value: boolean): void;
                    get(property:"widgetsInTemplate"): boolean;
                    watch(property:"widgetsInTemplate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                     * 
                     */
                    postMixInProperties(): void;
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
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/FindReplace._FindReplaceCloseBox.html
                 *
                 * Base class for widgets that contains a button labeled X
                 * to close the tool bar.
                 * 
                 * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
                 * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
                 */
                class _FindReplaceCloseBox extends dijit._Widget implements dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin {
                    constructor(params?: Object, srcNodeRef?: HTMLElement);
                    /**
                     * Object to which attach points and events will be scoped.  Defaults
                     * to 'this'.
                     * 
                     */
                    "attachScope": Object;
                    set(property:"attachScope", value: Object): void;
                    get(property:"attachScope"): Object;
                    watch(property:"attachScope", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                    "btnId": string;
                    set(property:"btnId", value: string): void;
                    get(property:"btnId"): string;
                    watch(property:"btnId", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                     * Used to provide a context require to the dojo/parser in order to be
                     * able to use relative MIDs (e.g. ./Widget) in the widget's template.
                     * 
                     */
                    "contextRequire": Function;
                    set(property:"contextRequire", value: Function): void;
                    get(property:"contextRequire"): Function;
                    watch(property:"contextRequire", callback:{(property?:string, oldValue?:Function, newValue?: Function):void}) :{unwatch():void}
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
                     * 
                     */
                    "searchContainerNode": boolean;
                    set(property:"searchContainerNode", value: boolean): void;
                    get(property:"searchContainerNode"): boolean;
                    watch(property:"searchContainerNode", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                     * Path to template (HTML file) for this widget relative to dojo.baseUrl.
                     * Deprecated: use templateString with require([... "dojo/text!..."], ...) instead
                     * 
                     */
                    "templatePath": string;
                    set(property:"templatePath", value: string): void;
                    get(property:"templatePath"): string;
                    watch(property:"templatePath", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "templateString": string;
                    set(property:"templateString", value: string): void;
                    get(property:"templateString"): string;
                    watch(property:"templateString", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                     * 
                     */
                    "widget": Object;
                    set(property:"widget", value: Object): void;
                    get(property:"widget"): Object;
                    watch(property:"widget", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "widgetsInTemplate": boolean;
                    set(property:"widgetsInTemplate", value: boolean): void;
                    get(property:"widgetsInTemplate"): boolean;
                    watch(property:"widgetsInTemplate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                     * 
                     */
                    postMixInProperties(): void;
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
                     * 
                     */
                    onClick(): void;
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
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/FindReplace._FindReplaceTextBox.html
                 *
                 * Base class for widgets that contains a label (like "Font:")
                 * and a TextBox to pick a value.
                 * Used as Toolbar entry.
                 * 
                 * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
                 * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
                 */
                class _FindReplaceTextBox extends dijit._Widget implements dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin {
                    constructor(params?: Object, srcNodeRef?: HTMLElement);
                    /**
                     * Object to which attach points and events will be scoped.  Defaults
                     * to 'this'.
                     * 
                     */
                    "attachScope": Object;
                    set(property:"attachScope", value: Object): void;
                    get(property:"attachScope"): Object;
                    watch(property:"attachScope", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                     * Used to provide a context require to the dojo/parser in order to be
                     * able to use relative MIDs (e.g. ./Widget) in the widget's template.
                     * 
                     */
                    "contextRequire": Function;
                    set(property:"contextRequire", value: Function): void;
                    get(property:"contextRequire"): Function;
                    watch(property:"contextRequire", callback:{(property?:string, oldValue?:Function, newValue?: Function):void}) :{unwatch():void}
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
                     * The label of the enhanced textbox
                     * 
                     */
                    "label": string;
                    set(property:"label", value: string): void;
                    get(property:"label"): string;
                    watch(property:"label", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                     * 
                     */
                    "searchContainerNode": boolean;
                    set(property:"searchContainerNode", value: boolean): void;
                    get(property:"searchContainerNode"): boolean;
                    watch(property:"searchContainerNode", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                     * Path to template (HTML file) for this widget relative to dojo.baseUrl.
                     * Deprecated: use templateString with require([... "dojo/text!..."], ...) instead
                     * 
                     */
                    "templatePath": string;
                    set(property:"templatePath", value: string): void;
                    get(property:"templatePath"): string;
                    watch(property:"templatePath", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "templateString": string;
                    set(property:"templateString", value: string): void;
                    get(property:"templateString"): string;
                    watch(property:"templateString", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * The id of the enhanced textbox
                     * 
                     */
                    "textId": string;
                    set(property:"textId", value: string): void;
                    get(property:"textId"): string;
                    watch(property:"textId", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                     * 
                     */
                    "toolTip": string;
                    set(property:"toolTip", value: string): void;
                    get(property:"toolTip"): string;
                    watch(property:"toolTip", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "widget": Object;
                    set(property:"widget", value: Object): void;
                    get(property:"widget"): Object;
                    watch(property:"widget", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "widgetsInTemplate": boolean;
                    set(property:"widgetsInTemplate", value: boolean): void;
                    get(property:"widgetsInTemplate"): boolean;
                    watch(property:"widgetsInTemplate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                     * 
                     */
                    focus(): void;
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
                     * 
                     */
                    postMixInProperties(): void;
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
                     * Stub function for change events on the box.
                     * 
                     * @param val             
                     */
                    onChange(val: String): void;
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
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/FindReplace._FindReplaceToolbar.html
                 *
                 * A toolbar that derived from dijit.Toolbar, which
                 * eliminates some unnecessary event response such as LEFT_ARROW pressing
                 * and click bubbling.
                 * 
                 * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
                 * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
                 */
                class _FindReplaceToolbar extends dijit.Toolbar {
                    constructor(params?: Object, srcNodeRef?: HTMLElement);
                    /**
                     * Object to which attach points and events will be scoped.  Defaults
                     * to 'this'.
                     * 
                     */
                    "attachScope": Object;
                    set(property:"attachScope", value: Object): void;
                    get(property:"attachScope"): Object;
                    watch(property:"attachScope", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                     * The currently focused child widget, or null if there isn't one
                     * 
                     */
                    "focusedChild": Object;
                    set(property:"focusedChild", value: Object): void;
                    get(property:"focusedChild"): Object;
                    watch(property:"focusedChild", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                     * If multiple characters are typed where each keystroke happens within
                     * multiCharSearchDuration of the previous keystroke,
                     * search for nodes matching all the keystrokes.
                     * 
                     * For example, typing "ab" will search for entries starting with
                     * "ab" unless the delay between "a" and "b" is greater than multiCharSearchDuration.
                     * 
                     */
                    "multiCharSearchDuration": number;
                    set(property:"multiCharSearchDuration", value: number): void;
                    get(property:"multiCharSearchDuration"): number;
                    watch(property:"multiCharSearchDuration", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
                    "searchContainerNode": boolean;
                    set(property:"searchContainerNode", value: boolean): void;
                    get(property:"searchContainerNode"): boolean;
                    watch(property:"searchContainerNode", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                     * Tab index of the container; same as HTML tabIndex attribute.
                     * Note then when user tabs into the container, focus is immediately
                     * moved to the first item in the container.
                     * 
                     */
                    "tabIndex": string;
                    set(property:"tabIndex", value: string): void;
                    get(property:"tabIndex"): string;
                    watch(property:"tabIndex", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * Path to template (HTML file) for this widget relative to dojo.baseUrl.
                     * Deprecated: use templateString with require([... "dojo/text!..."], ...) instead
                     * 
                     */
                    "templatePath": string;
                    set(property:"templatePath", value: string): void;
                    get(property:"templatePath"): string;
                    watch(property:"templatePath", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "templateString": string;
                    set(property:"templateString", value: string): void;
                    get(property:"templateString"): string;
                    watch(property:"templateString", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                     * Add a child to our _Container and prevent the default
                     * arrow key navigation function. This function may bring in
                     * side effect
                     * 
                     * @param widget             
                     * @param insertIndex               Optional            
                     */
                    addChild(widget: dijit._Widget, insertIndex: number): void;
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
                    watch(property: string, callback:{(property?:string, oldValue?:any, newValue?: any):void}) :{unwatch():void};
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
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/InsertEntity.html
             *
             * This plugin allows the user to select from standard Symbols (HTML Entities)
             * to insert at the current cursor position.  It binds to the key pattern:
             * ctrl-shift-s for opening the insert symbol dropdown.
             * The commands provided by this plugin are:
             * 
             * insertEntity - inserts the selected HTML entity character
             * 
             * @param args       OptionalInitial settings for any of the attributes.     
             */
            class InsertEntity extends dijit._editor._Plugin {
                constructor(args?: Object);
                /**
                 * Pointer to dijit/form/Button or other widget (ex: dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * If not specified, will be created on initialization according to buttonClass
                 * 
                 */
                "button": Object;
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * Points to the parent editor
                 * 
                 */
                "editor": Object;
                /**
                 * The CSS class name for the button node is formed from iconClassPrefix and command
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * If true, this plugin executes by calling Editor.execCommand() with the argument specified in command.
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * Class of widget (ex: dijit.form.Button or dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * This is used to instantiate the button, unless button itself is specified directly.
                 * 
                 */
                buttonClass(): void;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * Get a property from a plugin.
                 * Get a named property from a plugin. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_getFooAttr", calling:
                 * 
                 * plugin.get("foo");
                 * would be equivalent to writing:
                 * 
                 * plugin._getFooAttr();
                 * and:
                 * 
                 * plugin.get("bar");
                 * would be equivalent to writing:
                 * 
                 * plugin.bar;
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Set a property on a plugin
                 * Sets named properties on a plugin which may potentially be handled by a
                 * setter in the plugin.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_setFooAttr", calling:
                 * 
                 * plugin.set("foo", "Howdy!");
                 * would be equivalent to writing:
                 * 
                 * plugin._setFooAttr("Howdy!");
                 * and:
                 * 
                 * plugin.set("bar", 3);
                 * would be equivalent to writing:
                 * 
                 * plugin.bar = 3;
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * plugin.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * })
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: Attr, value: any): any;
                /**
                 * Over-ride for the setting of the editor.
                 * 
                 * @param editor The editor to configure for this plugin to use.             
                 */
                setEditor(editor: dijit.Editor): void;
                /**
                 * Tell the plugin to add it's controller widget (often a button)
                 * to the toolbar.  Does nothing if there is no controller widget.
                 * 
                 * @param toolbar             
                 */
                setToolbar(toolbar: dijit.Toolbar): void;
                /**
                 * Over-ride for button state control for disabled to work.
                 * 
                 */
                updateState(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/InsertAnchor.html
             *
             * This plugin provides the basis for an insert anchor dialog for the
             * dijit.Editor
             * The command provided by this plugin is:
             * 
             * insertAnchor
             * 
             * @param args       OptionalInitial settings for any of the attributes.     
             */
            class InsertAnchor extends dijit._editor._Plugin {
                constructor(args?: Object);
                /**
                 * Pointer to dijit/form/Button or other widget (ex: dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * If not specified, will be created on initialization according to buttonClass
                 * 
                 */
                "button": Object;
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * Points to the parent editor
                 * 
                 */
                "editor": Object;
                /**
                 * String used for templating the HTML to insert at the desired point.
                 * 
                 */
                "htmlTemplate": string;
                /**
                 * The CSS class name for the button node icon.
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * If true, this plugin executes by calling Editor.execCommand() with the argument specified in command.
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * Class of widget (ex: dijit.form.Button or dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * This is used to instantiate the button, unless button itself is specified directly.
                 * 
                 */
                buttonClass(): void;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * Get a property from a plugin.
                 * Get a named property from a plugin. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_getFooAttr", calling:
                 * 
                 * plugin.get("foo");
                 * would be equivalent to writing:
                 * 
                 * plugin._getFooAttr();
                 * and:
                 * 
                 * plugin.get("bar");
                 * would be equivalent to writing:
                 * 
                 * plugin.bar;
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Over-ridable function for getting the style to apply to the anchor.
                 * The default is a dashed border with an anchor symbol.
                 * 
                 */
                getAnchorStyle(): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Set a property on a plugin
                 * Sets named properties on a plugin which may potentially be handled by a
                 * setter in the plugin.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_setFooAttr", calling:
                 * 
                 * plugin.set("foo", "Howdy!");
                 * would be equivalent to writing:
                 * 
                 * plugin._setFooAttr("Howdy!");
                 * and:
                 * 
                 * plugin.set("bar", 3);
                 * would be equivalent to writing:
                 * 
                 * plugin.bar = 3;
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * plugin.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * })
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: Attr, value: any): any;
                /**
                 * Over-ride for the setting of the editor.
                 * 
                 * @param editor The editor to configure for this plugin to use.             
                 */
                setEditor(editor: dijit.Editor): void;
                /**
                 * Tell the plugin to add it's controller widget (often a button)
                 * to the toolbar.  Does nothing if there is no controller widget.
                 * 
                 * @param toolbar             
                 */
                setToolbar(toolbar: dijit.Toolbar): void;
                /**
                 * Over-ride for button state control for disabled to work.
                 * 
                 */
                updateState(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/NormalizeIndentOutdent.html
             *
             * This plugin provides improved indent and outdent handling to
             * the editor.  It tries to generate valid HTML, as well as be
             * consistent about how it indents and outdents lists and blocks/elements.
             * 
             * @param args       OptionalInitial settings for any of the attributes.     
             */
            class NormalizeIndentOutdent extends dijit._editor._Plugin {
                constructor(args?: Object);
                /**
                 * Pointer to dijit/form/Button or other widget (ex: dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * If not specified, will be created on initialization according to buttonClass
                 * 
                 */
                "button": Object;
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * Points to the parent editor
                 * 
                 */
                "editor": Object;
                /**
                 * The CSS class name for the button node is formed from iconClassPrefix and command
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * The amount to indent by.  Valid values are 1+.  This is combined with
                 * the indentUnits parameter to determine how much to indent or outdent
                 * by for regular text.  It does not affect lists.
                 * 
                 */
                "indentBy": number;
                /**
                 * The units to apply to the indent amount.  Usually 'px', but can also
                 * be em.
                 * 
                 */
                "indentUnits": string;
                /**
                 * If true, this plugin executes by calling Editor.execCommand() with the argument specified in command.
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * Class of widget (ex: dijit.form.Button or dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * This is used to instantiate the button, unless button itself is specified directly.
                 * 
                 */
                buttonClass(): void;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * Get a property from a plugin.
                 * Get a named property from a plugin. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_getFooAttr", calling:
                 * 
                 * plugin.get("foo");
                 * would be equivalent to writing:
                 * 
                 * plugin._getFooAttr();
                 * and:
                 * 
                 * plugin.get("bar");
                 * would be equivalent to writing:
                 * 
                 * plugin.bar;
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Set a property on a plugin
                 * Sets named properties on a plugin which may potentially be handled by a
                 * setter in the plugin.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_setFooAttr", calling:
                 * 
                 * plugin.set("foo", "Howdy!");
                 * would be equivalent to writing:
                 * 
                 * plugin._setFooAttr("Howdy!");
                 * and:
                 * 
                 * plugin.set("bar", 3);
                 * would be equivalent to writing:
                 * 
                 * plugin.bar = 3;
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * plugin.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * })
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: Attr, value: any): any;
                /**
                 * Over-ride for the setting of the editor.
                 * 
                 * @param editor The editor to configure for this plugin to use.             
                 */
                setEditor(editor: dijit.Editor): void;
                /**
                 * Tell the plugin to add it's controller widget (often a button)
                 * to the toolbar.  Does nothing if there is no controller widget.
                 * 
                 * @param toolbar             
                 */
                setToolbar(toolbar: dijit.Toolbar): void;
                /**
                 * Change state of the plugin to respond to events in the editor.
                 * This is called on meaningful events in the editor, such as change of selection
                 * or caret position (but not simple typing of alphanumeric keys).   It gives the
                 * plugin a chance to update the CSS of its button.
                 * 
                 * For example, the "bold" plugin will highlight/unhighlight the bold button depending on whether the
                 * characters next to the caret are bold or not.
                 * 
                 * Only makes sense when useDefaultCommand is true, as it calls Editor.queryCommandEnabled(command).
                 * 
                 */
                updateState(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/LocalImage.html
             *
             * This plugin provides an enhanced image link dialog that
             * not only insert the online images, but upload the local image files onto
             * to server then insert them as well.
             * 
             * Dependencies:
             * This plugin depends on dojox.form.FileUploader to upload the images on the local driver.
             * Do the regression test whenever FileUploader is upgraded.
             * 
             * @param args       OptionalInitial settings for any of the attributes.     
             */
            class LocalImage extends dijit._editor._Plugin {
                constructor(args?: Object);
                /**
                 * The prefix of the image url on the server.
                 * For example, an image is uploaded and stored at
                 * http://www.myhost.com/images/uploads/test.jpg.
                 * When the image is uploaded, the server returns "uploads/test.jpg" as the
                 * relative path. So the baseImageUrl should be set to "http://www.myhost.com/images/"
                 * so that the client can retrieve the image from the server.
                 * If the image file is located on the same domain as that of the current web page,
                 * baseImageUrl can be a relative path. For example:
                 * 
                 * baseImageUrl = images/
                 * and the server returns uploads/test.jpg
                 * 
                 * The complete URL of the image file is images/upload/test.jpg
                 * 
                 */
                "baseImageUrl": string;
                /**
                 * Pointer to dijit/form/Button or other widget (ex: dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * If not specified, will be created on initialization according to buttonClass
                 * 
                 */
                "button": Object;
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * Points to the parent editor
                 * 
                 */
                "editor": Object;
                /**
                 * Used for validating input as correct email address.  Taken from dojox.validate
                 * 
                 */
                "emailRegExp": string;
                /**
                 * Specify the types of images that are allowed to be uploaded.
                 * Note that the type checking on server is also very important!
                 * 
                 */
                "fileMask": string;
                /**
                 * 
                 */
                "htmlFieldName": string;
                /**
                 * String used for templating the <img> HTML to insert at the desired point.
                 * 
                 */
                "htmlTemplate": string;
                /**
                 * The CSS class name for the button node is formed from iconClassPrefix and command
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * Over-ride for template since this is an enhanced image dialog.
                 * 
                 */
                "linkDialogTemplate": string;
                /**
                 * Tag used for the link type (img).
                 * 
                 */
                "tag": string;
                /**
                 * Indicate whether the user can upload a local image file onto the server.
                 * If it is set to true, the Browse button will be available.
                 * 
                 */
                "uploadable": boolean;
                /**
                 * The url targeted for uploading. Both absolute and relative URLs are OK.
                 * 
                 */
                "uploadUrl": string;
                /**
                 * Used to validate if the input is a valid image URL.
                 * 
                 */
                "urlRegExp": string;
                /**
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * 
                 */
                buttonClass(): void;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * Cleanup of the plugin.
                 * 
                 */
                destroy(): void;
                /**
                 * Get a property from a plugin.
                 * Get a named property from a plugin. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_getFooAttr", calling:
                 * 
                 * plugin.get("foo");
                 * would be equivalent to writing:
                 * 
                 * plugin._getFooAttr();
                 * and:
                 * 
                 * plugin.get("bar");
                 * would be equivalent to writing:
                 * 
                 * plugin.bar;
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Set a property on a plugin
                 * Sets named properties on a plugin which may potentially be handled by a
                 * setter in the plugin.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_setFooAttr", calling:
                 * 
                 * plugin.set("foo", "Howdy!");
                 * would be equivalent to writing:
                 * 
                 * plugin._setFooAttr("Howdy!");
                 * and:
                 * 
                 * plugin.set("bar", 3);
                 * would be equivalent to writing:
                 * 
                 * plugin.bar = 3;
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * plugin.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * })
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: Attr, value: any): any;
                /**
                 * Tell the plugin which Editor it is associated with.
                 * 
                 * @param editor             
                 */
                setEditor(editor: dijit.Editor): void;
                /**
                 * Tell the plugin to add it's controller widget (often a button)
                 * to the toolbar.  Does nothing if there is no controller widget.
                 * 
                 * @param toolbar             
                 */
                setToolbar(toolbar: dijit.Toolbar): void;
                /**
                 * Change state of the plugin to respond to events in the editor.
                 * This is called on meaningful events in the editor, such as change of selection
                 * or caret position (but not simple typing of alphanumeric keys).   It gives the
                 * plugin a chance to update the CSS of its button.
                 * 
                 * For example, the "bold" plugin will highlight/unhighlight the bold button depending on whether the
                 * characters next to the caret are bold or not.
                 * 
                 * Only makes sense when useDefaultCommand is true, as it calls Editor.queryCommandEnabled(command).
                 * 
                 */
                updateState(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/NormalizeStyle.html
             *
             * This plugin provides NormalizeStyle capability to the editor.  It is
             * a headless plugin that tries to normalize how content is styled when
             * it comes out of th editor ('b' or css).   It also auto-converts
             * incoming content to the proper one expected by the browser as well so
             * that the native styling buttons work.
             * 
             * @param args       OptionalInitial settings for any of the attributes.     
             */
            class NormalizeStyle extends dijit._editor._Plugin {
                constructor(args?: Object);
                /**
                 * Pointer to dijit/form/Button or other widget (ex: dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * If not specified, will be created on initialization according to buttonClass
                 * 
                 */
                "button": Object;
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * A boolean variable indicating if it should try to condense
                 * 'span''span''span' styles  when in css mode
                 * The default is true, it will try to combine where it can.
                 * 
                 */
                "condenseSpans": boolean;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * Points to the parent editor
                 * 
                 */
                "editor": Object;
                /**
                 * The CSS class name for the button node is formed from iconClassPrefix and command
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * A String variable indicating if it should use semantic tags 'b', 'i', etc, or
                 * CSS styling.  The default is semantic.
                 * 
                 */
                "mode": string;
                /**
                 * If true, this plugin executes by calling Editor.execCommand() with the argument specified in command.
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * Class of widget (ex: dijit.form.Button or dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * This is used to instantiate the button, unless button itself is specified directly.
                 * 
                 */
                buttonClass(): void;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * Get a property from a plugin.
                 * Get a named property from a plugin. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_getFooAttr", calling:
                 * 
                 * plugin.get("foo");
                 * would be equivalent to writing:
                 * 
                 * plugin._getFooAttr();
                 * and:
                 * 
                 * plugin.get("bar");
                 * would be equivalent to writing:
                 * 
                 * plugin.bar;
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Set a property on a plugin
                 * Sets named properties on a plugin which may potentially be handled by a
                 * setter in the plugin.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_setFooAttr", calling:
                 * 
                 * plugin.set("foo", "Howdy!");
                 * would be equivalent to writing:
                 * 
                 * plugin._setFooAttr("Howdy!");
                 * and:
                 * 
                 * plugin.set("bar", 3);
                 * would be equivalent to writing:
                 * 
                 * plugin.bar = 3;
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * plugin.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * })
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: Attr, value: any): any;
                /**
                 * Over-ride for the setting of the editor.
                 * 
                 * @param editor The editor to configure for this plugin to use.             
                 */
                setEditor(editor: dijit.Editor): void;
                /**
                 * Tell the plugin to add it's controller widget (often a button)
                 * to the toolbar.  Does nothing if there is no controller widget.
                 * 
                 * @param toolbar             
                 */
                setToolbar(toolbar: dijit.Toolbar): void;
                /**
                 * Change state of the plugin to respond to events in the editor.
                 * This is called on meaningful events in the editor, such as change of selection
                 * or caret position (but not simple typing of alphanumeric keys).   It gives the
                 * plugin a chance to update the CSS of its button.
                 * 
                 * For example, the "bold" plugin will highlight/unhighlight the bold button depending on whether the
                 * characters next to the caret are bold or not.
                 * 
                 * Only makes sense when useDefaultCommand is true, as it calls Editor.queryCommandEnabled(command).
                 * 
                 */
                updateState(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/PrettyPrint.html
             *
             * This plugin provides a mechanism by which to 'beautify HTML'
             * generated by the editor.  It is by no means perfect.
             * 
             * @param args       OptionalInitial settings for any of the attributes.     
             */
            class PrettyPrint extends dijit._editor._Plugin {
                constructor(args?: Object);
                /**
                 * Pointer to dijit/form/Button or other widget (ex: dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * If not specified, will be created on initialization according to buttonClass
                 * 
                 */
                "button": Object;
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * Points to the parent editor
                 * 
                 */
                "editor": Object;
                /**
                 * 
                 */
                "entityMap": Object;
                /**
                 * The CSS class name for the button node is formed from iconClassPrefix and command
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * The indentBy property configures if the plugin should use a
                 * set number of spaces for indent (between 1-5), or just tab.
                 * The default value is -1, which means tab.
                 * 
                 */
                "indentBy": number;
                /**
                 * The lineLength property configures if the plugin should break up long
                 * text lines into N lines of 'lineLength' length.  This parameter does not
                 * take into account indention depth, only text line length.  The default is -1
                 * which means unlimited line length.
                 * 
                 */
                "lineLength": number;
                /**
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * Class of widget (ex: dijit.form.Button or dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * This is used to instantiate the button, unless button itself is specified directly.
                 * 
                 */
                buttonClass(): void;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * Get a property from a plugin.
                 * Get a named property from a plugin. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_getFooAttr", calling:
                 * 
                 * plugin.get("foo");
                 * would be equivalent to writing:
                 * 
                 * plugin._getFooAttr();
                 * and:
                 * 
                 * plugin.get("bar");
                 * would be equivalent to writing:
                 * 
                 * plugin.bar;
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Set a property on a plugin
                 * Sets named properties on a plugin which may potentially be handled by a
                 * setter in the plugin.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_setFooAttr", calling:
                 * 
                 * plugin.set("foo", "Howdy!");
                 * would be equivalent to writing:
                 * 
                 * plugin._setFooAttr("Howdy!");
                 * and:
                 * 
                 * plugin.set("bar", 3);
                 * would be equivalent to writing:
                 * 
                 * plugin.bar = 3;
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * plugin.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * })
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: Attr, value: any): any;
                /**
                 * Over-ride to take over getValue of editor so that
                 * we can 'pretty' the output.
                 * 
                 * @param editor             
                 */
                setEditor(editor: any): void;
                /**
                 * Over-ride to do nothing.
                 * We don't want to append a button, we take over getValue.
                 * 
                 * @param toolbar             
                 */
                setToolbar(toolbar: any): void;
                /**
                 * Change state of the plugin to respond to events in the editor.
                 * This is called on meaningful events in the editor, such as change of selection
                 * or caret position (but not simple typing of alphanumeric keys).   It gives the
                 * plugin a chance to update the CSS of its button.
                 * 
                 * For example, the "bold" plugin will highlight/unhighlight the bold button depending on whether the
                 * characters next to the caret are bold or not.
                 * 
                 * Only makes sense when useDefaultCommand is true, as it calls Editor.queryCommandEnabled(command).
                 * 
                 */
                updateState(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/PasteFromWord.html
             *
             * This plugin provides PasteFromWord capability to the editor.  When
             * clicked, a dialog opens with a spartan RichText instance to paste
             * word content into via the keyboard commands.  The contents are
             * then filtered to remove word style classes and other meta-junk
             * that tends to cause issues.
             * 
             * @param args       OptionalInitial settings for any of the attributes.     
             */
            class PasteFromWord extends dijit._editor._Plugin {
                constructor(args?: Object);
                /**
                 * Pointer to dijit/form/Button or other widget (ex: dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * If not specified, will be created on initialization according to buttonClass
                 * 
                 */
                "button": Object;
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * Points to the parent editor
                 * 
                 */
                "editor": Object;
                /**
                 * The height to use for the rich text area in the copy/pate dialog, in px.  Default is 300px.
                 * 
                 */
                "height": string;
                /**
                 * The CSS class name for the button node is formed from iconClassPrefix
                 * and command
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * If true, this plugin executes by calling Editor.execCommand() with the argument specified in command.
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * The width to use for the rich text area in the copy/pate dialog, in px.  Default is 400px.
                 * 
                 */
                "width": string;
                /**
                 * Class of widget (ex: dijit.form.Button or dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * This is used to instantiate the button, unless button itself is specified directly.
                 * 
                 */
                buttonClass(): void;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * Get a property from a plugin.
                 * Get a named property from a plugin. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_getFooAttr", calling:
                 * 
                 * plugin.get("foo");
                 * would be equivalent to writing:
                 * 
                 * plugin._getFooAttr();
                 * and:
                 * 
                 * plugin.get("bar");
                 * would be equivalent to writing:
                 * 
                 * plugin.bar;
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Set a property on a plugin
                 * Sets named properties on a plugin which may potentially be handled by a
                 * setter in the plugin.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_setFooAttr", calling:
                 * 
                 * plugin.set("foo", "Howdy!");
                 * would be equivalent to writing:
                 * 
                 * plugin._setFooAttr("Howdy!");
                 * and:
                 * 
                 * plugin.set("bar", 3);
                 * would be equivalent to writing:
                 * 
                 * plugin.bar = 3;
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * plugin.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * })
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: Attr, value: any): any;
                /**
                 * Over-ride for the setting of the editor.
                 * 
                 * @param editor The editor to configure for this plugin to use.             
                 */
                setEditor(editor: dijit.Editor): void;
                /**
                 * Tell the plugin to add it's controller widget (often a button)
                 * to the toolbar.  Does nothing if there is no controller widget.
                 * 
                 * @param toolbar             
                 */
                setToolbar(toolbar: dijit.Toolbar): void;
                /**
                 * Over-ride for button state control for disabled to work.
                 * 
                 */
                updateState(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/EntityPalette.html
             *
             * A keyboard accessible HTML entity-picking widget (for inserting symbol characters)
             * Grid showing various entities, so the user can pick a certain entity.
             * Can be used standalone, or as a popup.
             * 
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
             */
            class EntityPalette extends dijit._Widget implements dijit._TemplatedMixin, dijit._PaletteMixin {
                constructor(params?: Object, srcNodeRef?: HTMLElement);
                /**
                 * True if mouse was pressed while over this widget, and hasn't been released yet
                 * 
                 */
                "active": boolean;
                set(property:"active", value: boolean): void;
                get(property:"active"): boolean;
                watch(property:"active", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * Object to which attach points and events will be scoped.  Defaults
                 * to 'this'.
                 * 
                 */
                "attachScope": Object;
                set(property:"attachScope", value: Object): void;
                get(property:"attachScope"): Object;
                watch(property:"attachScope", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                "cellClass": string;
                set(property:"cellClass", value: string): void;
                get(property:"cellClass"): string;
                watch(property:"cellClass", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                 * Subclasses may define a cssStateNodes property that lists sub-nodes within the widget that
                 * need CSS classes applied on mouse hover/press and focus.
                 * 
                 * Each entry in this optional hash is a an attach-point name (like "upArrowButton") mapped to a CSS class name
                 * (like "dijitUpArrowButton"). Example:
                 * 
                 * {
                 *     "upArrowButton": "dijitUpArrowButton",
                 *     "downArrowButton": "dijitDownArrowButton"
                 * }
                 * The above will set the CSS class dijitUpArrowButton to the this.upArrowButton DOMNode when it
                 * 
                 * is hovered, etc.
                 * 
                 */
                "cssStateNodes": Object;
                set(property:"cssStateNodes", value: Object): void;
                get(property:"cssStateNodes"): Object;
                watch(property:"cssStateNodes", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * Number of milliseconds before a held key or button becomes typematic
                 * 
                 */
                "defaultTimeout": number;
                set(property:"defaultTimeout", value: number): void;
                get(property:"defaultTimeout"): number;
                watch(property:"defaultTimeout", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
                "dyeClass": string;
                set(property:"dyeClass", value: string): void;
                get(property:"dyeClass"): string;
                watch(property:"dyeClass", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                 * True if cursor is over this widget
                 * 
                 */
                "hovering": boolean;
                set(property:"hovering", value: boolean): void;
                get(property:"hovering"): boolean;
                watch(property:"hovering", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                 * The document this widget belongs to.  If not specified to constructor, will default to
                 * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
                 * 
                 */
                "ownerDocument": Object;
                set(property:"ownerDocument", value: Object): void;
                get(property:"ownerDocument"): Object;
                watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * The symbol pallete to display.  The only current one is 'latin'.
                 * 
                 */
                "palette": string;
                set(property:"palette", value: string): void;
                get(property:"palette"): string;
                watch(property:"palette", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * 
                 */
                "paletteClass": string;
                set(property:"paletteClass", value: string): void;
                get(property:"paletteClass"): string;
                watch(property:"paletteClass", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * 
                 */
                "searchContainerNode": boolean;
                set(property:"searchContainerNode", value: boolean): void;
                get(property:"searchContainerNode"): boolean;
                watch(property:"searchContainerNode", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * Show the character code for the entity.
                 * 
                 */
                "showCode": boolean;
                set(property:"showCode", value: boolean): void;
                get(property:"showCode"): boolean;
                watch(property:"showCode", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * Show the entity name for the entity.
                 * 
                 */
                "showEntityName": boolean;
                set(property:"showEntityName", value: boolean): void;
                get(property:"showEntityName"): boolean;
                watch(property:"showEntityName", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * Whether the preview pane will be displayed, to show details about the selected entity.
                 * 
                 */
                "showPreview": boolean;
                set(property:"showPreview", value: boolean): void;
                get(property:"showPreview"): boolean;
                watch(property:"showPreview", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                 * Widget tab index.
                 * 
                 */
                "tabIndex": string;
                set(property:"tabIndex", value: string): void;
                get(property:"tabIndex"): string;
                watch(property:"tabIndex", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * Path to template (HTML file) for this widget relative to dojo.baseUrl.
                 * Deprecated: use templateString with require([... "dojo/text!..."], ...) instead
                 * 
                 */
                "templatePath": string;
                set(property:"templatePath", value: string): void;
                get(property:"templatePath"): string;
                watch(property:"templatePath", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * The basic template used to render the palette.
                 * Should generally be over-ridden to define different classes.
                 * 
                 */
                "templateString": string;
                set(property:"templateString", value: string): void;
                get(property:"templateString"): string;
                watch(property:"templateString", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * Fraction of time used to change the typematic timer between events
                 * 1.0 means that each typematic event fires at defaultTimeout intervals
                 * Less than 1.0 means that each typematic event fires at an increasing faster rate
                 * 
                 */
                "timeoutChangeRate": number;
                set(property:"timeoutChangeRate", value: number): void;
                get(property:"timeoutChangeRate"): number;
                watch(property:"timeoutChangeRate", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
                 * Currently selected color/emoticon/etc.
                 * 
                 */
                "value": string;
                set(property:"value", value: string): void;
                get(property:"value"): string;
                watch(property:"value", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                 * Instantiate the template, which makes a skeleton table which we'll insert the entities
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
                 * Focus this widget.  Puts focus on the most recently focused cell.
                 * 
                 */
                focus(): void;
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
                 */
                LatinEntity(): void;
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
                 * Convert hash of entities into two-dimensional rows/columns table (array of arrays)
                 * 
                 */
                postMixInProperties(): void;
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
                 * Callback when a cell is selected.
                 * 
                 * @param value Value corresponding to cell.             
                 */
                onChange(value: String): void;
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
            module EntityPalette {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/EntityPalette.LatinEntity.html
                 *
                 * Represents a character.
                 * Initialized using an alias for the character (like cent) rather
                 * than with the character itself.
                 * 
                 * @param alias     
                 */
                class LatinEntity {
                    constructor(alias: String);
                    /**
                     * 
                     * @param cell             
                     */
                    fillCell(cell: HTMLElement): void;
                    /**
                     * Returns HTML representing the character, like &
                     * 
                     */
                    getValue(): String;
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/PageBreak.html
             *
             * This plugin provides a simple CSS page break plugin that
             * lets your insert browser print recognizable page breaks in
             * the document.
             * This plugin registers the hotkey command: CTRL-SHIFT-ENTER
             * 
             * @param args       OptionalInitial settings for any of the attributes.     
             */
            class PageBreak extends dijit._editor._Plugin {
                constructor(args?: Object);
                /**
                 * Pointer to dijit/form/Button or other widget (ex: dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * If not specified, will be created on initialization according to buttonClass
                 * 
                 */
                "button": Object;
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * Points to the parent editor
                 * 
                 */
                "editor": Object;
                /**
                 * The CSS class name for the button node is formed from
                 * iconClassPrefix and command
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * Class of widget (ex: dijit.form.Button or dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * This is used to instantiate the button, unless button itself is specified directly.
                 * 
                 */
                buttonClass(): void;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * Get a property from a plugin.
                 * Get a named property from a plugin. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_getFooAttr", calling:
                 * 
                 * plugin.get("foo");
                 * would be equivalent to writing:
                 * 
                 * plugin._getFooAttr();
                 * and:
                 * 
                 * plugin.get("bar");
                 * would be equivalent to writing:
                 * 
                 * plugin.bar;
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Set a property on a plugin
                 * Sets named properties on a plugin which may potentially be handled by a
                 * setter in the plugin.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_setFooAttr", calling:
                 * 
                 * plugin.set("foo", "Howdy!");
                 * would be equivalent to writing:
                 * 
                 * plugin._setFooAttr("Howdy!");
                 * and:
                 * 
                 * plugin.set("bar", 3);
                 * would be equivalent to writing:
                 * 
                 * plugin.bar = 3;
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * plugin.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * })
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: Attr, value: any): any;
                /**
                 * Over-ride for the setting of the editor.
                 * 
                 * @param editor The editor to configure for this plugin to use.             
                 */
                setEditor(editor: dijit.Editor): void;
                /**
                 * Tell the plugin to add it's controller widget (often a button)
                 * to the toolbar.  Does nothing if there is no controller widget.
                 * 
                 * @param toolbar             
                 */
                setToolbar(toolbar: dijit.Toolbar): void;
                /**
                 * Over-ride for button state control for disabled to work.
                 * 
                 */
                updateState(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/Preview.html
             *
             * This plugin provides Preview capability to the editor.  When
             * clicked, the document in the editor frame will displayed in a separate
             * window/tab
             * 
             * @param args       OptionalInitial settings for any of the attributes.     
             */
            class Preview extends dijit._editor._Plugin {
                constructor(args?: Object);
                /**
                 * Pointer to dijit/form/Button or other widget (ex: dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * If not specified, will be created on initialization according to buttonClass
                 * 
                 */
                "button": Object;
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * Points to the parent editor
                 * 
                 */
                "editor": Object;
                /**
                 * The CSS class name for the button node icon.
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * A string of CSS styles to apply to the previewed content, if any.
                 * 
                 */
                "styles": string;
                /**
                 * An array of stylesheets to import into the preview, if any.
                 * 
                 */
                "stylesheets": any[];
                /**
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * Class of widget (ex: dijit.form.Button or dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * This is used to instantiate the button, unless button itself is specified directly.
                 * 
                 */
                buttonClass(): void;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * Get a property from a plugin.
                 * Get a named property from a plugin. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_getFooAttr", calling:
                 * 
                 * plugin.get("foo");
                 * would be equivalent to writing:
                 * 
                 * plugin._getFooAttr();
                 * and:
                 * 
                 * plugin.get("bar");
                 * would be equivalent to writing:
                 * 
                 * plugin.bar;
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Set a property on a plugin
                 * Sets named properties on a plugin which may potentially be handled by a
                 * setter in the plugin.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_setFooAttr", calling:
                 * 
                 * plugin.set("foo", "Howdy!");
                 * would be equivalent to writing:
                 * 
                 * plugin._setFooAttr("Howdy!");
                 * and:
                 * 
                 * plugin.set("bar", 3);
                 * would be equivalent to writing:
                 * 
                 * plugin.bar = 3;
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * plugin.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * })
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: Attr, value: any): any;
                /**
                 * Over-ride for the setting of the editor.
                 * 
                 * @param editor The editor to configure for this plugin to use.             
                 */
                setEditor(editor: dijit.Editor): void;
                /**
                 * Tell the plugin to add it's controller widget (often a button)
                 * to the toolbar.  Does nothing if there is no controller widget.
                 * 
                 * @param toolbar             
                 */
                setToolbar(toolbar: dijit.Toolbar): void;
                /**
                 * Over-ride for button state control for disabled to work.
                 * 
                 */
                updateState(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/ResizeTableColumn.html
             *
             * 
             */
            class ResizeTableColumn extends dojox.editor.plugins.TablePlugins {
                constructor();
                /**
                 * 
                 */
                "alwaysAvailable": boolean;
                /**
                 * Pointer to dijit/form/Button or other widget (ex: dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * If not specified, will be created on initialization according to buttonClass
                 * 
                 */
                "button": Object;
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * 
                 */
                "commandName": string;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * Points to the parent editor
                 * 
                 */
                "editor": Object;
                /**
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * 
                 */
                "label": string;
                /**
                 * 
                 */
                "undoEnabled": boolean;
                /**
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * 
                 */
                begEdit(): void;
                /**
                 * 
                 */
                buttonClass(): void;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * Over-ridden destroy to do some cleanup.
                 * 
                 */
                destroy(): void;
                /**
                 * 
                 */
                endEdit(): void;
                /**
                 * Get a property from a plugin.
                 * Get a named property from a plugin. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_getFooAttr", calling:
                 * 
                 * plugin.get("foo");
                 * would be equivalent to writing:
                 * 
                 * plugin._getFooAttr();
                 * and:
                 * 
                 * plugin.get("bar");
                 * would be equivalent to writing:
                 * 
                 * plugin.bar;
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Gets the selected cells from the passed table.
                 * 
                 */
                getSelectedCells(): any;
                /**
                 * Gets the table in focus
                 * Collects info on the table - see return params
                 * 
                 * @param forceNewData             
                 */
                getTableInfo(forceNewData: any): any;
                /**
                 * After changing column amount, change widths to
                 * keep columns even
                 * 
                 */
                makeColumnsEven(): void;
                /**
                 * Where each plugin performs its action.
                 * Note: not using execCommand. In spite of their presence in the
                 * Editor as query-able plugins, I was not able to find any evidence
                 * that they are supported (especially in NOT IE). If they are
                 * supported in other browsers, it may help with the undo problem.
                 * 
                 * @param cmd             
                 * @param args             
                 */
                modTable(cmd: any, args: any): void;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * 
                 */
                selectTable(): void;
                /**
                 * Set a property on a plugin
                 * Sets named properties on a plugin which may potentially be handled by a
                 * setter in the plugin.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_setFooAttr", calling:
                 * 
                 * plugin.set("foo", "Howdy!");
                 * would be equivalent to writing:
                 * 
                 * plugin._setFooAttr("Howdy!");
                 * and:
                 * 
                 * plugin.set("bar", 3);
                 * would be equivalent to writing:
                 * 
                 * plugin.bar = 3;
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * plugin.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * })
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: Attr, value: any): any;
                /**
                 * Handle the drag&drop events
                 * 
                 * @param editor The editor which this plugin belongs to             
                 */
                setEditor(editor: any): void;
                /**
                 * Tell the plugin to add it's controller widget (often a button)
                 * to the toolbar.  Does nothing if there is no controller widget.
                 * 
                 * @param toolbar             
                 */
                setToolbar(toolbar: dijit.Toolbar): void;
                /**
                 * Over-ride for button state control for disabled to work.
                 * 
                 */
                updateState(): void;
                /**
                 * subscribed to from the global object's publish method
                 * 
                 * @param withinTable             
                 */
                onDisplayChanged(withinTable: any): void;
                /**
                 * 
                 */
                onEditorLoaded(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/ShowBlockNodes.html
             *
             * This plugin provides ShowBlockNodes capability to the editor.  When
             * clicked, the document in the editor will apply a class to specific
             * block nodes to make them visible in the layout.  This info is not
             * exposed/extracted when the editor value is obtained, it is purely for help
             * while working on the page.
             * 
             * @param args       OptionalInitial settings for any of the attributes.     
             */
            class ShowBlockNodes extends dijit._editor._Plugin {
                constructor(args?: Object);
                /**
                 * Pointer to dijit/form/Button or other widget (ex: dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * If not specified, will be created on initialization according to buttonClass
                 * 
                 */
                "button": Object;
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * Points to the parent editor
                 * 
                 */
                "editor": Object;
                /**
                 * The CSS class name for the button node is formed from iconClassPrefix and command
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * Class of widget (ex: dijit.form.Button or dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * This is used to instantiate the button, unless button itself is specified directly.
                 * 
                 */
                buttonClass(): void;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * Get a property from a plugin.
                 * Get a named property from a plugin. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_getFooAttr", calling:
                 * 
                 * plugin.get("foo");
                 * would be equivalent to writing:
                 * 
                 * plugin._getFooAttr();
                 * and:
                 * 
                 * plugin.get("bar");
                 * would be equivalent to writing:
                 * 
                 * plugin.bar;
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Set a property on a plugin
                 * Sets named properties on a plugin which may potentially be handled by a
                 * setter in the plugin.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_setFooAttr", calling:
                 * 
                 * plugin.set("foo", "Howdy!");
                 * would be equivalent to writing:
                 * 
                 * plugin._setFooAttr("Howdy!");
                 * and:
                 * 
                 * plugin.set("bar", 3);
                 * would be equivalent to writing:
                 * 
                 * plugin.bar = 3;
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * plugin.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * })
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: Attr, value: any): any;
                /**
                 * Over-ride for the setting of the editor.
                 * 
                 * @param editor The editor to configure for this plugin to use.             
                 */
                setEditor(editor: dijit.Editor): void;
                /**
                 * Tell the plugin to add it's controller widget (often a button)
                 * to the toolbar.  Does nothing if there is no controller widget.
                 * 
                 * @param toolbar             
                 */
                setToolbar(toolbar: dijit.Toolbar): void;
                /**
                 * Function to allow programmatic toggling of the view.
                 * 
                 */
                toggle(): void;
                /**
                 * Over-ride for button state control for disabled to work.
                 * 
                 */
                updateState(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/Save.html
             *
             * This plugin provides Save capability to the editor.  When
             * clicked, the document in the editor frame will be posted to the URL
             * provided, or none, if none provided.  Users who desire a different save
             * function can extend this plugin (via dojo.extend) and over-ride the
             * save method while save is in process, the save button is disabled.
             * 
             * @param args       OptionalInitial settings for any of the attributes.     
             */
            class Save extends dijit._editor._Plugin {
                constructor(args?: Object);
                /**
                 * Pointer to dijit/form/Button or other widget (ex: dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * If not specified, will be created on initialization according to buttonClass
                 * 
                 */
                "button": Object;
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * Points to the parent editor
                 * 
                 */
                "editor": Object;
                /**
                 * The CSS class name for the button node is formed from iconClassPrefix
                 * and command
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * Boolean flag to indicate that the default action for save and
                 * error handlers is to just log to console.  Default is true.
                 * 
                 */
                "logResults": boolean;
                /**
                 * The URL to POST the content back to.  Used by the save function.
                 * 
                 */
                "url": string;
                /**
                 * If true, this plugin executes by calling Editor.execCommand() with the argument specified in command.
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * Class of widget (ex: dijit.form.Button or dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * This is used to instantiate the button, unless button itself is specified directly.
                 * 
                 */
                buttonClass(): void;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * Get a property from a plugin.
                 * Get a named property from a plugin. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_getFooAttr", calling:
                 * 
                 * plugin.get("foo");
                 * would be equivalent to writing:
                 * 
                 * plugin._getFooAttr();
                 * and:
                 * 
                 * plugin.get("bar");
                 * would be equivalent to writing:
                 * 
                 * plugin.bar;
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * User over-ridable save function for the editor content.
                 * Please note that the service URL provided should do content
                 * filtering of the posted content to avoid XSS injection via
                 * the data from the editor.
                 * 
                 * @param content             
                 */
                save(content: any): void;
                /**
                 * Set a property on a plugin
                 * Sets named properties on a plugin which may potentially be handled by a
                 * setter in the plugin.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_setFooAttr", calling:
                 * 
                 * plugin.set("foo", "Howdy!");
                 * would be equivalent to writing:
                 * 
                 * plugin._setFooAttr("Howdy!");
                 * and:
                 * 
                 * plugin.set("bar", 3);
                 * would be equivalent to writing:
                 * 
                 * plugin.bar = 3;
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * plugin.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * })
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: Attr, value: any): any;
                /**
                 * Over-ride for the setting of the editor.
                 * 
                 * @param editor The editor to configure for this plugin to use.             
                 */
                setEditor(editor: dijit.Editor): void;
                /**
                 * Tell the plugin to add it's controller widget (often a button)
                 * to the toolbar.  Does nothing if there is no controller widget.
                 * 
                 * @param toolbar             
                 */
                setToolbar(toolbar: dijit.Toolbar): void;
                /**
                 * Over-ride for button state control for disabled to work.
                 * 
                 */
                updateState(): void;
                /**
                 * User over-ridable save success function for editor content.
                 * Be sure to call this.inherited(arguments) if over-riding this method.
                 * 
                 * @param error             
                 * @param ioargs             
                 */
                onError(error: any, ioargs: any): void;
                /**
                 * User over-ridable save success function for editor content.
                 * Be sure to call this.inherited(arguments) if over-riding this method.
                 * 
                 * @param resp The response from the server, if any, in text format.             
                 * @param ioargs             
                 */
                onSuccess(resp: any, ioargs: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/SafePaste.html
             *
             * This plugin extends from the PasteFromWord plugin and provides
             * 'safe pasting', meaning that it will not allow keyboard/menu pasting
             * into the dijit editor.  It still runs all of the word cleanup code, 
             * including script strippers.  If you use this plugin, you don't need to 
             * use the 'PasteFromWord Plugin'
             * 
             * @param args       OptionalInitial settings for any of the attributes.     
             */
            class SafePaste extends dojox.editor.plugins.PasteFromWord {
                constructor(args?: Object);
                /**
                 * Pointer to dijit/form/Button or other widget (ex: dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * If not specified, will be created on initialization according to buttonClass
                 * 
                 */
                "button": Object;
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * Points to the parent editor
                 * 
                 */
                "editor": Object;
                /**
                 * The height to use for the rich text area in the copy/pate dialog, in px.  Default is 300px.
                 * 
                 */
                "height": string;
                /**
                 * The CSS class name for the button node is formed from iconClassPrefix
                 * and command
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * If true, this plugin executes by calling Editor.execCommand() with the argument specified in command.
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * The width to use for the rich text area in the copy/pate dialog, in px.  Default is 400px.
                 * 
                 */
                "width": string;
                /**
                 * Class of widget (ex: dijit.form.Button or dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * This is used to instantiate the button, unless button itself is specified directly.
                 * 
                 */
                buttonClass(): void;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * Get a property from a plugin.
                 * Get a named property from a plugin. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_getFooAttr", calling:
                 * 
                 * plugin.get("foo");
                 * would be equivalent to writing:
                 * 
                 * plugin._getFooAttr();
                 * and:
                 * 
                 * plugin.get("bar");
                 * would be equivalent to writing:
                 * 
                 * plugin.bar;
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Set a property on a plugin
                 * Sets named properties on a plugin which may potentially be handled by a
                 * setter in the plugin.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_setFooAttr", calling:
                 * 
                 * plugin.set("foo", "Howdy!");
                 * would be equivalent to writing:
                 * 
                 * plugin._setFooAttr("Howdy!");
                 * and:
                 * 
                 * plugin.set("bar", 3);
                 * would be equivalent to writing:
                 * 
                 * plugin.bar = 3;
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * plugin.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * })
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: Attr, value: any): any;
                /**
                 * Over-ride for the setting of the editor.
                 * 
                 * @param editor The editor to configure for this plugin to use.             
                 */
                setEditor(editor: dijit.Editor): void;
                /**
                 * Tell the plugin to add it's controller widget (often a button)
                 * to the toolbar.  Does nothing if there is no controller widget.
                 * 
                 * @param toolbar             
                 */
                setToolbar(toolbar: dijit.Toolbar): void;
                /**
                 * Overrides _Plugin.updateState(). 
                 * 
                 */
                updateState(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/Smiley.html
             *
             * This plugin allows the user to select from emoticons or "smileys"
             * to insert at the current cursor position.
             * The commands provided by this plugin are:
             * 
             * smiley - inserts the selected emoticon
             * 
             * @param args       OptionalInitial settings for any of the attributes.     
             */
            class Smiley extends dijit._editor._Plugin {
                constructor(args?: Object);
                /**
                 * Pointer to dijit/form/Button or other widget (ex: dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * If not specified, will be created on initialization according to buttonClass
                 * 
                 */
                "button": Object;
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * Points to the parent editor
                 * 
                 */
                "editor": Object;
                /**
                 * 
                 */
                "emoticonImageClass": string;
                /**
                 * a marker for emoticon wrap like [:-)] for regexp convienent
                 * when a message which contains an emoticon stored in a database or view source, this marker include also
                 * but when user enter an emoticon by key board, user don't need to enter this marker.
                 * also emoticon definition character set can not contains this marker
                 * 
                 */
                "emoticonMarker": string;
                /**
                 * The CSS class name for the button node is formed from iconClassPrefix and command
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * If true, this plugin executes by calling Editor.execCommand() with the argument specified in command.
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * Class of widget (ex: dijit.form.Button or dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * This is used to instantiate the button, unless button itself is specified directly.
                 * 
                 */
                buttonClass(): void;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * Get a property from a plugin.
                 * Get a named property from a plugin. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_getFooAttr", calling:
                 * 
                 * plugin.get("foo");
                 * would be equivalent to writing:
                 * 
                 * plugin._getFooAttr();
                 * and:
                 * 
                 * plugin.get("bar");
                 * would be equivalent to writing:
                 * 
                 * plugin.bar;
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Set a property on a plugin
                 * Sets named properties on a plugin which may potentially be handled by a
                 * setter in the plugin.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_setFooAttr", calling:
                 * 
                 * plugin.set("foo", "Howdy!");
                 * would be equivalent to writing:
                 * 
                 * plugin._setFooAttr("Howdy!");
                 * and:
                 * 
                 * plugin.set("bar", 3);
                 * would be equivalent to writing:
                 * 
                 * plugin.bar = 3;
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * plugin.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * })
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: Attr, value: any): any;
                /**
                 * Over-ride for the setting of the editor.
                 * 
                 * @param editor The editor to configure for this plugin to use.             
                 */
                setEditor(editor: dijit.Editor): void;
                /**
                 * Tell the plugin to add it's controller widget (often a button)
                 * to the toolbar.  Does nothing if there is no controller widget.
                 * 
                 * @param toolbar             
                 */
                setToolbar(toolbar: dijit.Toolbar): void;
                /**
                 * Over-ride for button state control for disabled to work.
                 * 
                 */
                updateState(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/SpellCheck.html
             *
             * This plugin provides a spelling check capability for the editor.
             * 
             */
            class SpellCheck extends dijit._editor._Plugin {
                constructor();
                /**
                 * The max length of each XHR request. It is used to divide the large
                 * text into pieces so that the server-side piece can hold.
                 * 
                 */
                "bufferLength": number;
                /**
                 * The button displayed on the editor's toolbar
                 * 
                 */
                "button": Object;
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * Points to the parent editor
                 * 
                 */
                "editor": Object;
                /**
                 * The CSS class name for the button node is formed from iconClassPrefix and command
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * Indicate if the interactive spelling check is enabled
                 * 
                 */
                "interactive": boolean;
                /**
                 * The minutes to waiting for the response. The default value is 30 seconds.
                 * 
                 */
                "timeout": number;
                /**
                 * The url of the spelling check service
                 * 
                 */
                "url": string;
                /**
                 * If true, this plugin executes by calling Editor.execCommand() with the argument specified in command.
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * Class of widget (ex: dijit.form.Button or dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * This is used to instantiate the button, unless button itself is specified directly.
                 * 
                 */
                buttonClass(): void;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * Get a property from a plugin.
                 * Get a named property from a plugin. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_getFooAttr", calling:
                 * 
                 * plugin.get("foo");
                 * would be equivalent to writing:
                 * 
                 * plugin._getFooAttr();
                 * and:
                 * 
                 * plugin.get("bar");
                 * would be equivalent to writing:
                 * 
                 * plugin.bar;
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Set a property on a plugin
                 * Sets named properties on a plugin which may potentially be handled by a
                 * setter in the plugin.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_setFooAttr", calling:
                 * 
                 * plugin.set("foo", "Howdy!");
                 * would be equivalent to writing:
                 * 
                 * plugin._setFooAttr("Howdy!");
                 * and:
                 * 
                 * plugin.set("bar", 3);
                 * would be equivalent to writing:
                 * 
                 * plugin.bar = 3;
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * plugin.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * })
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: Attr, value: any): any;
                /**
                 * 
                 * @param editor             
                 */
                setEditor(editor: dijit.Editor): void;
                /**
                 * Tell the plugin to add it's controller widget (often a button)
                 * to the toolbar.  Does nothing if there is no controller widget.
                 * 
                 * @param toolbar             
                 */
                setToolbar(toolbar: dijit.Toolbar): void;
                /**
                 * Change state of the plugin to respond to events in the editor.
                 * This is called on meaningful events in the editor, such as change of selection
                 * or caret position (but not simple typing of alphanumeric keys).   It gives the
                 * plugin a chance to update the CSS of its button.
                 * 
                 * For example, the "bold" plugin will highlight/unhighlight the bold button depending on whether the
                 * characters next to the caret are bold or not.
                 * 
                 * Only makes sense when useDefaultCommand is true, as it calls Editor.queryCommandEnabled(command).
                 * 
                 */
                updateState(): void;
            }
            module SpellCheck {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/SpellCheck._SpellCheckScriptMultiPart.html
                 *
                 * It is a base network service component. It transfers text to a remote service port
                 * with cross domain ability enabled. It can split text into specified pieces and send
                 * them out one by one so that it can handle the case when the service has a limitation of
                 * the capability.
                 * The encoding is UTF-8.
                 * 
                 */
                class _SpellCheckScriptMultiPart {
                    constructor();
                    /**
                     * 
                     */
                    "ACTION_QUERY": string;
                    /**
                     * 
                     */
                    "ACTION_UPDATE": string;
                    /**
                     * 
                     */
                    "callbackHandle": string;
                    /**
                     * 
                     */
                    "delimiter": string;
                    /**
                     * 
                     */
                    "label": string;
                    /**
                     * 
                     */
                    "maxBufferLength": number;
                    /**
                     * 
                     */
                    "SEC": number;
                    /**
                     * Send the content to the service port with the specified action
                     * 
                     * @param content The text to be sent             
                     * @param action               OptionalThe action the service should take. Current support actions areACTION_QUERY and ACTION_UPDATE             
                     */
                    send(content: String, action: String): void;
                    /**
                     * 
                     * @param seconds             
                     */
                    setWaitingTime(seconds: number): void;
                    /**
                     * 
                     * @param data             
                     */
                    onLoad(data: String): void;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/SpellCheck._SpellCheckControl.html
                 *
                 * The widget that is used for the UI of the batch spelling check
                 * 
                 */
                class _SpellCheckControl extends dijit._Widget implements dijit._Templated {
                    constructor();
                    /**
                     * Object to which attach points and events will be scoped.  Defaults
                     * to 'this'.
                     * 
                     */
                    "attachScope": Object;
                    set(property:"attachScope", value: Object): void;
                    get(property:"attachScope"): Object;
                    watch(property:"attachScope", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                     * Used to provide a context require to the dojo/parser in order to be
                     * able to use relative MIDs (e.g. ./Widget) in the widget's template.
                     * 
                     */
                    "contextRequire": Function;
                    set(property:"contextRequire", value: Function): void;
                    get(property:"contextRequire"): Function;
                    watch(property:"contextRequire", callback:{(property?:string, oldValue?:Function, newValue?: Function):void}) :{unwatch():void}
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
                     * 
                     */
                    "searchContainerNode": boolean;
                    set(property:"searchContainerNode", value: boolean): void;
                    get(property:"searchContainerNode"): boolean;
                    watch(property:"searchContainerNode", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                     * Path to template (HTML file) for this widget relative to dojo.baseUrl.
                     * Deprecated: use templateString with require([... "dojo/text!..."], ...) instead
                     * 
                     */
                    "templatePath": string;
                    set(property:"templatePath", value: string): void;
                    get(property:"templatePath"): string;
                    watch(property:"templatePath", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * 
                     */
                    "templateString": string;
                    set(property:"templateString", value: string): void;
                    get(property:"templateString"): string;
                    watch(property:"templateString", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                     * 
                     */
                    "widgetsInTemplate": boolean;
                    set(property:"widgetsInTemplate", value: boolean): void;
                    get(property:"widgetsInTemplate"): boolean;
                    watch(property:"widgetsInTemplate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                     * Set the focus of the control
                     * 
                     */
                    focus(): void;
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
                     * 
                     */
                    postMixInProperties(): void;
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
                     * Static method to get a template based on the templatePath or
                     * templateString key
                     */
                    getCachedTemplate(): any;
                    /**
                     * 
                     */
                    onAddToDic(): void;
                    /**
                     * Called when the widget stops being "active" because
                     * focus moved to something outside of it, or the user
                     * clicked somewhere outside of it, or the widget was
                     * hidden.
                     * 
                     */
                    onBlur(): void;
                    /**
                     * 
                     */
                    onCancel(): void;
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
                     * 
                     */
                    onEnter(): void;
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
                     * 
                     */
                    onReplace(): void;
                    /**
                     * 
                     */
                    onReplaceAll(): void;
                    /**
                     * Called when this widget becomes the selected pane in a
                     * dijit/layout/TabContainer, dijit/layout/StackContainer,
                     * dijit/layout/AccordionContainer, etc.
                     * 
                     * Also called to indicate display of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
                     * 
                     */
                    onShow(): void;
                    /**
                     * 
                     */
                    onSkip(): void;
                    /**
                     * 
                     */
                    onSkipAll(): void;
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/StatusBar.html
             *
             * This plugin provides StatusBar capability to the editor.
             * Basically a footer bar where status can be published.  It also
             * puts a resize handle on the status bar, allowing you to resize the
             * editor via mouse.
             * 
             * @param args       OptionalInitial settings for any of the attributes.     
             */
            class StatusBar extends dijit._editor._Plugin {
                constructor(args?: Object);
                /**
                 * Pointer to dijit/form/Button or other widget (ex: dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * If not specified, will be created on initialization according to buttonClass
                 * 
                 */
                "button": Object;
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * Points to the parent editor
                 * 
                 */
                "editor": Object;
                /**
                 * The CSS class name for the button node is formed from iconClassPrefix and command
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * Flag indicating that a resizer should be shown or not.  Default is true.
                 * There are cases (such as using center pane border container to autoresize the editor
                 * That a resizer is not valued.
                 * 
                 */
                "resizer": boolean;
                /**
                 * The status bar and resizer.
                 * 
                 */
                "statusBar": Object;
                /**
                 * If true, this plugin executes by calling Editor.execCommand() with the argument specified in command.
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * Class of widget (ex: dijit.form.Button or dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * This is used to instantiate the button, unless button itself is specified directly.
                 * 
                 */
                buttonClass(): void;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * Over-ride to clean up the breadcrumb toolbar.
                 * 
                 */
                destroy(): void;
                /**
                 * Quick and dirty implementation of 'get' pattern
                 * 
                 * @param attr The attribute to get.             
                 */
                get(attr: any): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Quick and dirty implementation of 'set' pattern
                 * 
                 * @param attr The attribute to set.             
                 * @param val The value to set it to.             
                 */
                set(attr: any, val: any): void;
                /**
                 * Over-ride for the setting of the editor.
                 * 
                 * @param editor The editor to configure for this plugin to use.             
                 */
                setEditor(editor: dijit.Editor): void;
                /**
                 * Tell the plugin to add it's controller widget (often a button)
                 * to the toolbar.  Does nothing if there is no controller widget.
                 * 
                 * @param toolbar             
                 */
                setToolbar(toolbar: dijit.Toolbar): void;
                /**
                 * Change state of the plugin to respond to events in the editor.
                 * This is called on meaningful events in the editor, such as change of selection
                 * or caret position (but not simple typing of alphanumeric keys).   It gives the
                 * plugin a chance to update the CSS of its button.
                 * 
                 * For example, the "bold" plugin will highlight/unhighlight the bold button depending on whether the
                 * characters next to the caret are bold or not.
                 * 
                 * Only makes sense when useDefaultCommand is true, as it calls Editor.queryCommandEnabled(command).
                 * 
                 */
                updateState(): void;
            }
            module StatusBar {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/StatusBar._StatusBar.html
                 *
                 * 
                 * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
                 * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
                 */
                class _StatusBar extends dijit._Widget implements dijit._TemplatedMixin {
                    constructor(params?: Object, srcNodeRef?: HTMLElement);
                    /**
                     * Object to which attach points and events will be scoped.  Defaults
                     * to 'this'.
                     * 
                     */
                    "attachScope": Object;
                    set(property:"attachScope", value: Object): void;
                    get(property:"attachScope"): Object;
                    watch(property:"attachScope", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                    "searchContainerNode": boolean;
                    set(property:"searchContainerNode", value: boolean): void;
                    get(property:"searchContainerNode"): boolean;
                    watch(property:"searchContainerNode", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                     * Path to template (HTML file) for this widget relative to dojo.baseUrl.
                     * Deprecated: use templateString with require([... "dojo/text!..."], ...) instead
                     * 
                     */
                    "templatePath": string;
                    set(property:"templatePath", value: string): void;
                    get(property:"templatePath"): string;
                    watch(property:"templatePath", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * Template for the widget.  Currently using table to get the alignment behavior and
                     * bordering I wanted.  Would prefer not to use table, though.
                     * 
                     */
                    "templateString": string;
                    set(property:"templateString", value: string): void;
                    get(property:"templateString"): string;
                    watch(property:"templateString", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                     * Construct the UI for this widget, setting this.domNode.
                     * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
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
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/TextColor.html
             *
             * This plugin provides dropdown color pickers for setting text color and background color
             * and makes use of the nicer-looking (though not entirely accessible), dojox.widget.ColorPicker.
             * The commands provided by this plugin are:
             * 
             * foreColor - sets the text color
             * hiliteColor - sets the background color
             * 
             */
            class TextColor extends dijit._editor._Plugin {
                constructor();
                /**
                 * Pointer to dijit/form/Button or other widget (ex: dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * If not specified, will be created on initialization according to buttonClass
                 * 
                 */
                "button": Object;
                /**
                 * 
                 */
                /*REMOVED: this overwrites the function buttonClass from _Plugin which makes TypeScript unhappy. Simplest thing is to make it go away for now...*/
                //"buttonClass": Object; 
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * Points to the parent editor
                 * 
                 */
                "editor": Object;
                /**
                 * The CSS class name for the button node is formed from iconClassPrefix and command
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * Over-ride cleanup function.
                 * 
                 */
                destroy(): void;
                /**
                 * Get a property from a plugin.
                 * Get a named property from a plugin. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_getFooAttr", calling:
                 * 
                 * plugin.get("foo");
                 * would be equivalent to writing:
                 * 
                 * plugin._getFooAttr();
                 * and:
                 * 
                 * plugin.get("bar");
                 * would be equivalent to writing:
                 * 
                 * plugin.bar;
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Set a property on a plugin
                 * Sets named properties on a plugin which may potentially be handled by a
                 * setter in the plugin.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_setFooAttr", calling:
                 * 
                 * plugin.set("foo", "Howdy!");
                 * would be equivalent to writing:
                 * 
                 * plugin._setFooAttr("Howdy!");
                 * and:
                 * 
                 * plugin.set("bar", 3);
                 * would be equivalent to writing:
                 * 
                 * plugin.bar = 3;
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * plugin.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * })
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: Attr, value: any): any;
                /**
                 * Tell the plugin which Editor it is associated with.
                 * 
                 * @param editor             
                 */
                setEditor(editor: dijit.Editor): void;
                /**
                 * Tell the plugin to add it's controller widget (often a button)
                 * to the toolbar.  Does nothing if there is no controller widget.
                 * 
                 * @param toolbar             
                 */
                setToolbar(toolbar: dijit.Toolbar): void;
                /**
                 * Overrides _Plugin.updateState().  This updates the ColorPalette
                 * to show the color of the currently selected text.
                 * 
                 */
                updateState(): void;
            }
            module TextColor {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/TextColor._TextColorDropDown.html
                 *
                 * A sample widget that uses/creates a dropdown with a dojox.widget.ColorPicker.  Also provides
                 * passthroughs to the value of the color picker and convenient hook points.
                 * 
                 */
                class _TextColorDropDown extends dijit._Widget implements dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin {
                    constructor();
                    /**
                     * Object to which attach points and events will be scoped.  Defaults
                     * to 'this'.
                     * 
                     */
                    "attachScope": Object;
                    set(property:"attachScope", value: Object): void;
                    get(property:"attachScope"): Object;
                    watch(property:"attachScope", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                     * Used to provide a context require to the dojo/parser in order to be
                     * able to use relative MIDs (e.g. ./Widget) in the widget's template.
                     * 
                     */
                    "contextRequire": Function;
                    set(property:"contextRequire", value: Function): void;
                    get(property:"contextRequire"): Function;
                    watch(property:"contextRequire", callback:{(property?:string, oldValue?:Function, newValue?: Function):void}) :{unwatch():void}
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
                     * 
                     */
                    "searchContainerNode": boolean;
                    set(property:"searchContainerNode", value: boolean): void;
                    get(property:"searchContainerNode"): boolean;
                    watch(property:"searchContainerNode", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                     * Path to template (HTML file) for this widget relative to dojo.baseUrl.
                     * Deprecated: use templateString with require([... "dojo/text!..."], ...) instead
                     * 
                     */
                    "templatePath": string;
                    set(property:"templatePath", value: string): void;
                    get(property:"templatePath"): string;
                    watch(property:"templatePath", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                    /**
                     * The template used to create the ColorPicker.
                     * 
                     */
                    "templateString": string;
                    set(property:"templateString", value: string): void;
                    get(property:"templateString"): string;
                    watch(property:"templateString", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                     * Flag denoting widgets are contained in the template.
                     * 
                     */
                    "widgetsInTemplate": boolean;
                    set(property:"widgetsInTemplate", value: boolean): void;
                    get(property:"widgetsInTemplate"): boolean;
                    watch(property:"widgetsInTemplate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                     * Over-ride of startup to do the basic connect setups and such.
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
                     * Hook point to get when the dialog is canceled.
                     * 
                     */
                    onCancel(): void;
                    /**
                     * Hook point to get the value when the color picker value is selected.
                     * 
                     * @param value The value from the color picker.             
                     */
                    onChange(value: String): void;
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
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/UploadImage.html
             *
             * Adds an icon to the Editor toolbar that when clicked, opens a system dialog
             * Although the toolbar icon is a tiny "image" the uploader could be used for
             * any file type
             * 
             * @param args       OptionalInitial settings for any of the attributes.     
             */
            class UploadImage extends dijit._editor._Plugin {
                constructor(args?: Object);
                /**
                 * 
                 */
                "button": Object;
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * Points to the parent editor
                 * 
                 */
                "editor": Object;
                /**
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * 
                 */
                "label": string;
                /**
                 * 
                 */
                "tempImageUrl": string;
                /**
                 * 
                 */
                "uploadUrl": string;
                /**
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * Class of widget (ex: dijit.form.Button or dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * This is used to instantiate the button, unless button itself is specified directly.
                 * 
                 */
                buttonClass(): void;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * 
                 */
                createFileInput(): void;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * Get a property from a plugin.
                 * Get a named property from a plugin. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_getFooAttr", calling:
                 * 
                 * plugin.get("foo");
                 * would be equivalent to writing:
                 * 
                 * plugin._getFooAttr();
                 * and:
                 * 
                 * plugin.get("bar");
                 * would be equivalent to writing:
                 * 
                 * plugin.bar;
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * inserting a "busy" image to show something is hapening
                 * during upload and download of the image.
                 * 
                 */
                insertTempImage(): void;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Set a property on a plugin
                 * Sets named properties on a plugin which may potentially be handled by a
                 * setter in the plugin.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_setFooAttr", calling:
                 * 
                 * plugin.set("foo", "Howdy!");
                 * would be equivalent to writing:
                 * 
                 * plugin._setFooAttr("Howdy!");
                 * and:
                 * 
                 * plugin.set("bar", 3);
                 * would be equivalent to writing:
                 * 
                 * plugin.bar = 3;
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * plugin.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * })
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: Attr, value: any): any;
                /**
                 * Tell the plugin which Editor it is associated with.
                 * 
                 * @param editor             
                 */
                setEditor(editor: dijit.Editor): void;
                /**
                 * 
                 * @param toolbar             
                 */
                setToolbar(toolbar: any): void;
                /**
                 * Over-ride for button state control for disabled to work.
                 * 
                 */
                updateState(): void;
                /**
                 * 
                 * @param data             
                 * @param ioArgs             
                 * @param widgetRef             
                 */
                onComplete(data: any, ioArgs: any, widgetRef: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/TablePlugins.html
             *
             * A collection of Plugins for inserting and modifying tables in the Editor
             * See end of this document for all available plugs
             * and dojox/editorPlugins/tests/editorTablePlugs.html for an example
             * 
             * NOT IMPLEMENTED: Not handling cell merge, span or split
             * 
             * @param args       OptionalInitial settings for any of the attributes.     
             */
            class TablePlugins extends dijit._editor._Plugin {
                constructor(args?: Object);
                /**
                 * 
                 */
                "alwaysAvailable": boolean;
                /**
                 * Pointer to dijit/form/Button or other widget (ex: dijit/form/FilteringSelect)
                 * that is added to the toolbar to control this plugin.
                 * If not specified, will be created on initialization according to buttonClass
                 * 
                 */
                "button": Object;
                /**
                 * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
                 * Passed to editor.execCommand() if useDefaultCommand is true.
                 * 
                 */
                "command": string;
                /**
                 * 
                 */
                "commandName": string;
                /**
                 * Flag to indicate if this plugin has been disabled and should do nothing
                 * helps control button state, among other things.  Set via the setter api.
                 * 
                 */
                "disabled": boolean;
                /**
                 * Points to the parent editor
                 * 
                 */
                "editor": Object;
                /**
                 * 
                 */
                "iconClassPrefix": string;
                /**
                 * 
                 */
                "label": string;
                /**
                 * 
                 */
                "undoEnabled": boolean;
                /**
                 * 
                 */
                "useDefaultCommand": boolean;
                /**
                 * 
                 */
                begEdit(): void;
                /**
                 * 
                 */
                buttonClass(): void;
                /**
                 * Deprecated.  Use this.own() with dojo/on or dojo/aspect.instead.
                 * 
                 * Make a connect.connect() that is automatically disconnected when this plugin is destroyed.
                 * Similar to dijit/_Widget.connect().
                 * 
                 * @param o             
                 * @param f             
                 * @param tf             
                 */
                connect(o: any, f: any, tf: any): void;
                /**
                 * Over-ridden destroy to do some cleanup.
                 * 
                 */
                destroy(): void;
                /**
                 * 
                 */
                endEdit(): void;
                /**
                 * Get a property from a plugin.
                 * Get a named property from a plugin. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_getFooAttr", calling:
                 * 
                 * plugin.get("foo");
                 * would be equivalent to writing:
                 * 
                 * plugin._getFooAttr();
                 * and:
                 * 
                 * plugin.get("bar");
                 * would be equivalent to writing:
                 * 
                 * plugin.bar;
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Gets the selected cells from the passed table.
                 * 
                 */
                getSelectedCells(): any;
                /**
                 * Gets the table in focus
                 * Collects info on the table - see return params
                 * 
                 * @param forceNewData             
                 */
                getTableInfo(forceNewData: any): any;
                /**
                 * After changing column amount, change widths to
                 * keep columns even
                 * 
                 */
                makeColumnsEven(): void;
                /**
                 * Where each plugin performs its action.
                 * Note: not using execCommand. In spite of their presence in the
                 * Editor as query-able plugins, I was not able to find any evidence
                 * that they are supported (especially in NOT IE). If they are
                 * supported in other browsers, it may help with the undo problem.
                 * 
                 * @param cmd             
                 * @param args             
                 */
                modTable(cmd: any, args: any): void;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * 
                 */
                selectTable(): void;
                /**
                 * Set a property on a plugin
                 * Sets named properties on a plugin which may potentially be handled by a
                 * setter in the plugin.
                 * For example, if the plugin has a properties "foo"
                 * and "bar" and a method named "_setFooAttr", calling:
                 * 
                 * plugin.set("foo", "Howdy!");
                 * would be equivalent to writing:
                 * 
                 * plugin._setFooAttr("Howdy!");
                 * and:
                 * 
                 * plugin.set("bar", 3);
                 * would be equivalent to writing:
                 * 
                 * plugin.bar = 3;
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * plugin.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * })
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: Attr, value: any): any;
                /**
                 * 
                 * @param editor             
                 */
                setEditor(editor: any): void;
                /**
                 * Tell the plugin to add it's controller widget (often a button)
                 * to the toolbar.  Does nothing if there is no controller widget.
                 * 
                 * @param toolbar             
                 */
                setToolbar(toolbar: dijit.Toolbar): void;
                /**
                 * Over-ride for button state control for disabled to work.
                 * 
                 */
                updateState(): void;
                /**
                 * subscribed to from the global object's publish method
                 * 
                 * @param withinTable             
                 */
                onDisplayChanged(withinTable: any): void;
                /**
                 * 
                 */
                onEditorLoaded(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/editor/plugins/ToolbarLineBreak.html
             *
             * A 'line break' between two dijit.Toolbar items so that very
             * long toolbars can be organized a bit.
             * 
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
             */
            class ToolbarLineBreak extends dijit._Widget implements dijit._TemplatedMixin {
                constructor(params?: Object, srcNodeRef?: HTMLElement);
                /**
                 * Object to which attach points and events will be scoped.  Defaults
                 * to 'this'.
                 * 
                 */
                "attachScope": Object;
                set(property:"attachScope", value: Object): void;
                get(property:"attachScope"): Object;
                watch(property:"attachScope", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                "searchContainerNode": boolean;
                set(property:"searchContainerNode", value: boolean): void;
                get(property:"searchContainerNode"): boolean;
                watch(property:"searchContainerNode", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                 * Path to template (HTML file) for this widget relative to dojo.baseUrl.
                 * Deprecated: use templateString with require([... "dojo/text!..."], ...) instead
                 * 
                 */
                "templatePath": string;
                set(property:"templatePath", value: string): void;
                get(property:"templatePath"): string;
                watch(property:"templatePath", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * 
                 */
                "templateString": string;
                set(property:"templateString", value: string): void;
                get(property:"templateString"): string;
                watch(property:"templateString", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                 * Construct the UI for this widget, setting this.domNode.
                 * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
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
                 * This widget isn't focusable, so pass along that fact.
                 * 
                 */
                isFocusable(): boolean;
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

    }

}

declare module "dojox/editor/plugins/_SpellCheckParser" {
    var exp: dojox.editor.plugins._SpellCheckParser
    export=exp;
}
declare module "dojox/editor/plugins/AutoSave" {
    var exp: dojox.editor.plugins.AutoSave
    export=exp;
}
declare module "dojox/editor/plugins/AutoSave._AutoSaveSettingDialog" {
    var exp: dojox.editor.plugins.AutoSave._AutoSaveSettingDialog
    export=exp;
}
declare module "dojox/editor/plugins/Blockquote" {
    var exp: dojox.editor.plugins.Blockquote
    export=exp;
}
declare module "dojox/editor/plugins/AutoUrlLink" {
    var exp: dojox.editor.plugins.AutoUrlLink
    export=exp;
}
declare module "dojox/editor/plugins/Breadcrumb" {
    var exp: dojox.editor.plugins.Breadcrumb
    export=exp;
}
declare module "dojox/editor/plugins/Breadcrumb._BreadcrumbMenuTitle" {
    var exp: dojox.editor.plugins.Breadcrumb._BreadcrumbMenuTitle
    export=exp;
}
declare module "dojox/editor/plugins/CollapsibleToolbar" {
    var exp: dojox.editor.plugins.CollapsibleToolbar
    export=exp;
}
declare module "dojox/editor/plugins/CollapsibleToolbar._CollapsibleToolbarButton" {
    var exp: dojox.editor.plugins.CollapsibleToolbar._CollapsibleToolbarButton
    export=exp;
}
declare module "dojox/editor/plugins/_SmileyPalette" {
    var exp: dojox.editor.plugins._SmileyPalette
    export=exp;
}
declare module "dojox/editor/plugins/_SmileyPalette.Emoticon" {
    var exp: dojox.editor.plugins._SmileyPalette.Emoticon
    export=exp;
}
declare module "dojox/editor/plugins/InsertAnchor" {
    var exp: dojox.editor.plugins.InsertAnchor
    export=exp;
}
declare module "dojox/editor/plugins/NormalizeIndentOutdent" {
    var exp: dojox.editor.plugins.NormalizeIndentOutdent
    export=exp;
}
declare module "dojox/editor/plugins/FindReplace" {
    var exp: dojox.editor.plugins.FindReplace
    export=exp;
}
declare module "dojox/editor/plugins/FindReplace._FindReplaceCloseBox" {
    var exp: dojox.editor.plugins.FindReplace._FindReplaceCloseBox
    export=exp;
}
declare module "dojox/editor/plugins/FindReplace._FindReplaceCheckBox" {
    var exp: dojox.editor.plugins.FindReplace._FindReplaceCheckBox
    export=exp;
}
declare module "dojox/editor/plugins/FindReplace._FindReplaceTextBox" {
    var exp: dojox.editor.plugins.FindReplace._FindReplaceTextBox
    export=exp;
}
declare module "dojox/editor/plugins/FindReplace._FindReplaceToolbar" {
    var exp: dojox.editor.plugins.FindReplace._FindReplaceToolbar
    export=exp;
}
declare module "dojox/editor/plugins/InsertEntity" {
    var exp: dojox.editor.plugins.InsertEntity
    export=exp;
}
declare module "dojox/editor/plugins/PasteFromWord" {
    var exp: dojox.editor.plugins.PasteFromWord
    export=exp;
}
declare module "dojox/editor/plugins/PageBreak" {
    var exp: dojox.editor.plugins.PageBreak
    export=exp;
}
declare module "dojox/editor/plugins/Preview" {
    var exp: dojox.editor.plugins.Preview
    export=exp;
}
declare module "dojox/editor/plugins/PrettyPrint" {
    var exp: dojox.editor.plugins.PrettyPrint
    export=exp;
}
declare module "dojox/editor/plugins/ResizeTableColumn" {
    var exp: dojox.editor.plugins.ResizeTableColumn
    export=exp;
}
declare module "dojox/editor/plugins/NormalizeStyle" {
    var exp: dojox.editor.plugins.NormalizeStyle
    export=exp;
}
declare module "dojox/editor/plugins/EntityPalette" {
    var exp: dojox.editor.plugins.EntityPalette
    export=exp;
}
declare module "dojox/editor/plugins/EntityPalette.LatinEntity" {
    var exp: dojox.editor.plugins.EntityPalette.LatinEntity
    export=exp;
}
declare module "dojox/editor/plugins/Save" {
    var exp: dojox.editor.plugins.Save
    export=exp;
}
declare module "dojox/editor/plugins/SafePaste" {
    var exp: dojox.editor.plugins.SafePaste
    export=exp;
}
declare module "dojox/editor/plugins/ShowBlockNodes" {
    var exp: dojox.editor.plugins.ShowBlockNodes
    export=exp;
}
declare module "dojox/editor/plugins/LocalImage" {
    var exp: dojox.editor.plugins.LocalImage
    export=exp;
}
declare module "dojox/editor/plugins/Smiley" {
    var exp: dojox.editor.plugins.Smiley
    export=exp;
}
declare module "dojox/editor/plugins/TextColor" {
    var exp: dojox.editor.plugins.TextColor
    export=exp;
}
declare module "dojox/editor/plugins/TextColor._TextColorDropDown" {
    var exp: dojox.editor.plugins.TextColor._TextColorDropDown
    export=exp;
}
declare module "dojox/editor/plugins/StatusBar" {
    var exp: dojox.editor.plugins.StatusBar
    export=exp;
}
declare module "dojox/editor/plugins/StatusBar._StatusBar" {
    var exp: dojox.editor.plugins.StatusBar._StatusBar
    export=exp;
}
declare module "dojox/editor/plugins/SpellCheck" {
    var exp: dojox.editor.plugins.SpellCheck
    export=exp;
}
declare module "dojox/editor/plugins/SpellCheck._SpellCheckScriptMultiPart" {
    var exp: dojox.editor.plugins.SpellCheck._SpellCheckScriptMultiPart
    export=exp;
}
declare module "dojox/editor/plugins/SpellCheck._SpellCheckControl" {
    var exp: dojox.editor.plugins.SpellCheck._SpellCheckControl
    export=exp;
}
declare module "dojox/editor/plugins/TablePlugins" {
    var exp: dojox.editor.plugins.TablePlugins
    export=exp;
}
declare module "dojox/editor/plugins/UploadImage" {
    var exp: dojox.editor.plugins.UploadImage
    export=exp;
}
declare module "dojox/editor/plugins/ToolbarLineBreak" {
    var exp: dojox.editor.plugins.ToolbarLineBreak
    export=exp;
}
