// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace dojox {

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing.html
     *
     * Deprecated.  Should require dojox/drawing modules directly rather than trying to access them through
     * this module.
     *
     */
    interface drawing {
    }
    namespace drawing {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/_base.html
         *
         * Drawing is a project that sits on top of DojoX GFX and uses SVG and
         * VML vector graphics to draw and display.
         * Drawing is similar to DojoX Sketch, but is designed to be more versatile
         * extendable and customizable.
         * Drawing currently only initiates from HTML although it's technically not
         * a Dijit to keep the file size light. But if Dijit is available, Drawing
         * will register itself with it and can be accessed with registry.byId('myDrawing')
         * (by requiring dijit/registry)
         *
         * NOTES:
         * Although not Drawing and Toolbar, all other objects are created with a custom
         * declare. See dojox.drawing.util.oo
         *
         * The files are laid out as such:
         *
         * Drawing: The master class. More than one instance of a Drawing can be placed
         *   on a page at one time (although this has not yet been tested). Plugins
         *   can be added in markup.
         * Toolbar: Like Drawing, Toolbar is a psudeo Dijit that does not need Dijit. It is
         *   optional. It can be oriented horizontal or vertical by placing one of
         *   those params in the class (at least one is required).  Plugins
         *   can be added in markup. A drawingId is required to point toolbar to
         *   the drawing.
         * defaults: Contains the default styles and dimensions for Stencils. An individual
         *   Stencil can be changed by calling stencil.att({color obj}); To change
         *   all styles, a custom defaults file should be used.
         * Stencils: Drawing uses a concept of 'Stencils' to avoid confusion between a
         *   Dojox Shape and a Drawing Shape. The classes in the 'stencils' package
         *   are display only, they are not used for actually drawing (see 'tools').
         *   This package contains _Base from which stencils inherit most of their
         *   methods. (Path and Image are display only and not found in Tools)
         * Tools: The Tools package contains Stencils that are attached to mouse events
         *   and can be used for drawing. Items in this package can also be selected
         *   and modified.
         * Tools / Custom: Holds tools that do not directly extend Stencil base classes and often
         *   have very custom code.
         * Library (not implemented): The Library package, which is not yet implemented, will be the place to
         *   hold stencils that have very specific data points that result in a picture.
         *   Flag-like-banners, fancy borders, or other complex shapes would go here.
         * Annotations: Annotations 'decorate' and attach to other Stencils, such as a 'Label'
         *   that can show text on a stencil, or an 'Angle' that shows while dragging
         *   or modifying a Vector, or an Arrow head that is attached to the beginning
         *   or end of a line.
         * Manager: Contains classes that control functionality of a Drawing.
         * Plugins: Contains optional classes that are 'plugged into' a Drawing. There are two
         *   types: 'drawing' plugins that modify the canvas, and 'tools' which would
         *   show in the toolbar.
         * Util: A collection of common tasks.
         *
         * @param props
         * @param node
         */
        class _base {
            constructor(props: Object, node: HTMLElement);
            /**
             * Height of the canvas
             *
             */
            "height": number;
            /**
             * Changes the functionality of the drawing
             *
             */
            "mode": string;
            /**
             * Whether or not the canvas has been created and Stencils can be added
             *
             */
            "ready": boolean;
            /**
             * Width of the canvas
             *
             */
            "width": number;
            /**
             * Add a toolbar plugin object to plugins array
             * to be parsed
             *
             * @param plugin
             */
            addPlugin(plugin: Object): void;
            /**
             * Use this method to programmatically add Stencils that display on
             * the canvas.
             *
             * FIXME: Currently only supports Stencils that have been registered,
             * which is items in the toolbar, and the additional Stencils at the
             * end of onSurfaceReady. This covers all Stencils, but you can't
             * use 'display only' Stencils for Line, Rect, and Ellipse.
             *
             * @param type The final name of the tool, lower case: 'image', 'line', 'textBlock'
             * @param options The parameters used to draw the object. See stencil._Base and eachtool for specific parameters of teh data or points objects.
             */
            addStencil(type: String, options: Object): any;
            /**
             * Use this method to programmatically add Stencils that display on
             * the canvas.
             *
             * FIXME: Currently only supports Stencils that have been registered,
             * which is items in the toolbar, and the additional Stencils at the
             * end of onSurfaceReady. This covers all Stencils, but you can't
             * use 'display only' Stencils for Line, Rect, and Ellipse.
             *
             * @param type The final name of the tool, lower case: 'image', 'line', 'textBlock'
             * @param options type: ObjectThe parameters used to draw the object. See stencil._Base and eachtool for specific parameters of teh data or points objects.
             */
            addUI(type: String, options: Object): any;
            /**
             * Change the defaults so that all Stencils from this
             * point on will use the newly changed style.
             *
             * @param newStyle An object that represents one of the objects indrawing.style that will be mixed in. Not allproperties are necessary. Only one object maybe changed at a time. The object boolean parameteris not required and if not set objects will automaticallybe changed.Changing non-objects like angleSnap requires valueto be true.
             * @param value
             */
            changeDefaults(newStyle: Object, value: boolean): void;
            /**
             * Collects all Stencil data and returns an
             * Array of objects.
             *
             */
            exporter(): any;
            /**
             *
             * @param name
             */
            get(name: any): void;
            /**
             * Returns a Stencil constructor base on
             * abbreviation
             *
             * @param abbr
             */
            getConstructor(abbr: String): any;
            /**
             * The common objects that are mixed into
             * a new Stencil. Mostly internal, but could be used.
             *
             * @param data
             * @param mode
             */
            getShapeProps(data: Object, mode: any): any;
            /**
             * Handles an Array of stencil data and imports the objects
             * to the drawing.
             *
             * @param objects
             */
            importer(objects: any[]): void;
            /**
             * Called from Toolbar after a plugin has been loaded
             * The call to this coming from toolbar is a bit funky as the timing
             * of IE for canvas load is different than other browsers
             *
             */
            initPlugins(): void;
            /**
             * Registers a tool that can be accessed. Internal.
             *
             * @param type
             */
            registerTool(type: String): void;
            /**
             * Deletes all Stencils on the canvas.
             *
             */
            removeAll(): void;
            /**
             * Use this method to programmatically remove Stencils from the canvas.
             *
             * @param stencil The Stencil to be removed
             */
            removeStencil(stencil: Object): void;
            /**
             * Resizes the canvas.
             * If within a ContentPane this will get called automatically.
             * Can also be called directly.
             *
             * @param box
             */
            resize(box: Object): void;
            /**
             * Selects all stencils
             *
             */
            selectAll(): void;
            /**
             * Drawing registers as a widget and needs to support
             * widget's api.
             *
             * @param name
             * @param value
             */
            set(name: any, value: any): void;
            /**
             * Sets up a new class to be used to draw. Called from Toolbar,
             * and this class... after a tool is used a new one of the same
             * type is initialized. Could be called externally.
             *
             * @param type
             */
            setTool(type: String): void;
            /**
             *
             */
            startup(): void;
            /**
             * Call a function within all selected Stencils
             * like attr()
             *
             * @param func
             */
            toSelected(func: String): void;
            /**
             * Destroys current tool
             *
             */
            unSetTool(): void;
            /**
             * Event fired from a stencil that has destroyed itself
             * will also be called when it is removed by "removeStencil"
             * or stencils.onDelete.
             *
             * @param stencil
             */
            onDeleteStencil(stencil: Object): void;
            /**
             * Event that fires when a stencil is drawn. Does not fire from
             * 'addStencil'.
             *
             * @param stencil
             */
            onRenderStencil(stencil: Object): void;
            /**
             * Event that to which can be connected.
             * Fired when the canvas is ready and can be drawn to.
             *
             */
            onSurfaceReady(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/Drawing.html
         *
         * Drawing is a project that sits on top of DojoX GFX and uses SVG and
         * VML vector graphics to draw and display.
         * Drawing is similar to DojoX Sketch, but is designed to be more versatile
         * extendable and customizable.
         * Drawing currently only initiates from HTML although it's technically not
         * a Dijit to keep the file size light. But if Dijit is available, Drawing
         * will register itself with it and can be accessed with registry.byId('myDrawing')
         * (by requiring dijit/registry)
         *
         * NOTES:
         * Although not Drawing and Toolbar, all other objects are created with a custom
         * declare. See dojox.drawing.util.oo
         *
         * The files are laid out as such:
         *
         * Drawing: The master class. More than one instance of a Drawing can be placed
         *   on a page at one time (although this has not yet been tested). Plugins
         *   can be added in markup.
         * Toolbar: Like Drawing, Toolbar is a psudeo Dijit that does not need Dijit. It is
         *   optional. It can be oriented horizontal or vertical by placing one of
         *   those params in the class (at least one is required).  Plugins
         *   can be added in markup. A drawingId is required to point toolbar to
         *   the drawing.
         * defaults: Contains the default styles and dimensions for Stencils. An individual
         *   Stencil can be changed by calling stencil.att({color obj}); To change
         *   all styles, a custom defaults file should be used.
         * Stencils: Drawing uses a concept of 'Stencils' to avoid confusion between a
         *   Dojox Shape and a Drawing Shape. The classes in the 'stencils' package
         *   are display only, they are not used for actually drawing (see 'tools').
         *   This package contains _Base from which stencils inherit most of their
         *   methods. (Path and Image are display only and not found in Tools)
         * Tools: The Tools package contains Stencils that are attached to mouse events
         *   and can be used for drawing. Items in this package can also be selected
         *   and modified.
         * Tools / Custom: Holds tools that do not directly extend Stencil base classes and often
         *   have very custom code.
         * Library (not implemented): The Library package, which is not yet implemented, will be the place to
         *   hold stencils that have very specific data points that result in a picture.
         *   Flag-like-banners, fancy borders, or other complex shapes would go here.
         * Annotations: Annotations 'decorate' and attach to other Stencils, such as a 'Label'
         *   that can show text on a stencil, or an 'Angle' that shows while dragging
         *   or modifying a Vector, or an Arrow head that is attached to the beginning
         *   or end of a line.
         * Manager: Contains classes that control functionality of a Drawing.
         * Plugins: Contains optional classes that are 'plugged into' a Drawing. There are two
         *   types: 'drawing' plugins that modify the canvas, and 'tools' which would
         *   show in the toolbar.
         * Util: A collection of common tasks.
         *
         * @param props
         * @param node
         */
        class Drawing {
            constructor(props: Object, node: HTMLElement);
            /**
             * Height of the canvas
             *
             */
            "height": number;
            /**
             * Changes the functionality of the drawing
             *
             */
            "mode": string;
            /**
             * Whether or not the canvas has been created and Stencils can be added
             *
             */
            "ready": boolean;
            /**
             * Width of the canvas
             *
             */
            "width": number;
            /**
             * Add a toolbar plugin object to plugins array
             * to be parsed
             *
             * @param plugin
             */
            addPlugin(plugin: Object): void;
            /**
             * Use this method to programmatically add Stencils that display on
             * the canvas.
             *
             * FIXME: Currently only supports Stencils that have been registered,
             * which is items in the toolbar, and the additional Stencils at the
             * end of onSurfaceReady. This covers all Stencils, but you can't
             * use 'display only' Stencils for Line, Rect, and Ellipse.
             *
             * @param type The final name of the tool, lower case: 'image', 'line', 'textBlock'
             * @param options The parameters used to draw the object. See stencil._Base and eachtool for specific parameters of teh data or points objects.
             */
            addStencil(type: String, options: Object): any;
            /**
             * Use this method to programmatically add Stencils that display on
             * the canvas.
             *
             * FIXME: Currently only supports Stencils that have been registered,
             * which is items in the toolbar, and the additional Stencils at the
             * end of onSurfaceReady. This covers all Stencils, but you can't
             * use 'display only' Stencils for Line, Rect, and Ellipse.
             *
             * @param type The final name of the tool, lower case: 'image', 'line', 'textBlock'
             * @param options type: ObjectThe parameters used to draw the object. See stencil._Base and eachtool for specific parameters of teh data or points objects.
             */
            addUI(type: String, options: Object): any;
            /**
             * Change the defaults so that all Stencils from this
             * point on will use the newly changed style.
             *
             * @param newStyle An object that represents one of the objects indrawing.style that will be mixed in. Not allproperties are necessary. Only one object maybe changed at a time. The object boolean parameteris not required and if not set objects will automaticallybe changed.Changing non-objects like angleSnap requires valueto be true.
             * @param value
             */
            changeDefaults(newStyle: Object, value: boolean): void;
            /**
             * Collects all Stencil data and returns an
             * Array of objects.
             *
             */
            exporter(): any;
            /**
             *
             * @param name
             */
            get(name: any): void;
            /**
             * Returns a Stencil constructor base on
             * abbreviation
             *
             * @param abbr
             */
            getConstructor(abbr: String): any;
            /**
             * The common objects that are mixed into
             * a new Stencil. Mostly internal, but could be used.
             *
             * @param data
             * @param mode
             */
            getShapeProps(data: Object, mode: any): any;
            /**
             * Handles an Array of stencil data and imports the objects
             * to the drawing.
             *
             * @param objects
             */
            importer(objects: any[]): void;
            /**
             * Called from Toolbar after a plugin has been loaded
             * The call to this coming from toolbar is a bit funky as the timing
             * of IE for canvas load is different than other browsers
             *
             */
            initPlugins(): void;
            /**
             * Registers a tool that can be accessed. Internal.
             *
             * @param type
             */
            registerTool(type: String): void;
            /**
             * Deletes all Stencils on the canvas.
             *
             */
            removeAll(): void;
            /**
             * Use this method to programmatically remove Stencils from the canvas.
             *
             * @param stencil The Stencil to be removed
             */
            removeStencil(stencil: Object): void;
            /**
             * Resizes the canvas.
             * If within a ContentPane this will get called automatically.
             * Can also be called directly.
             *
             * @param box
             */
            resize(box: Object): void;
            /**
             * Selects all stencils
             *
             */
            selectAll(): void;
            /**
             * Drawing registers as a widget and needs to support
             * widget's api.
             *
             * @param name
             * @param value
             */
            set(name: any, value: any): void;
            /**
             * Sets up a new class to be used to draw. Called from Toolbar,
             * and this class... after a tool is used a new one of the same
             * type is initialized. Could be called externally.
             *
             * @param type
             */
            setTool(type: String): void;
            /**
             *
             */
            startup(): void;
            /**
             * Call a function within all selected Stencils
             * like attr()
             *
             * @param func
             */
            toSelected(func: String): void;
            /**
             * Destroys current tool
             *
             */
            unSetTool(): void;
            /**
             * Event fired from a stencil that has destroyed itself
             * will also be called when it is removed by "removeStencil"
             * or stencils.onDelete.
             *
             * @param stencil
             */
            onDeleteStencil(stencil: Object): void;
            /**
             * Event that fires when a stencil is drawn. Does not fire from
             * 'addStencil'.
             *
             * @param stencil
             */
            onRenderStencil(stencil: Object): void;
            /**
             * Event that to which can be connected.
             * Fired when the canvas is ready and can be drawn to.
             *
             */
            onSurfaceReady(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/defaults.html
         *
         * Styles and defaults used for Drawing stencils and text.
         * This object contains defaults for objects used in Drawing.
         * To change one item's style, use item.attr();
         * To change all these styles, create a copy of this file
         * and point to it in the Drawing properties:
         *
         * <div dojoType="dojox.drawing.Drawing" id="drawing" defaults="MyCustom.defaults"></div>
         * See: Drawing.changeDefaults
         *
         */
        interface defaults {
            /**
             * Style for the anchor resize-points
             *
             */
            anchors: Object;
            /**
             * Line, arrows, vector and axes will all snap to this angle on mouse up
             * shown angle also reflects the snap
             * currently cannot accept less than 1 degree
             *
             */
            angleSnap: number;
            /**
             * Size of arrows on vectors.
             * length is in pixels
             * width is actually an angle
             * but is close to pixels in size
             *
             */
            arrows: Object;
            /**
             *
             */
            button: Object;
            /**
             *
             */
            clickable: boolean;
            /**
             * Determines whether in draw or edit mode (whether stencils
             * are clickable.  If clickMode is false, the original
             * functionality of silently switching between select modes
             * is enabled.  If clickMode is true, it allows powerpoint-
             * like functionality.  Clickable is used by powerpoint to
             * distinguish when things can be selected and when they can't
             *
             */
            clickMode: boolean;
            /**
             * current will point to either null or selected
             *
             */
            current: Object;
            /**
             * currentHit will point to either hitNorm or hitSelected
             *
             */
            currentHit: Object;
            /**
             * Disabled or "locked" or "fade" style of all shapes
             *
             */
            disabled: Object;
            /**
             * Highlighted style of all shapes
             * NOT CURRENTLY BEING USED
             *
             */
            highlighted: Object;
            /**
             * Highlighted style of a hit area
             *
             */
            hitHighlighted: Object;
            /**
             * Normal style of a hit area
             *
             */
            hitNorm: Object;
            /**
             * Selected style of a hit area
             *
             */
            hitSelected: Object;
            /**
             * If true, the label text color will be the same as the
             * Stencil's line color.
             *
             */
            labelSameColor: boolean;
            /**
             * Normal style of all shapes
             * will get overridden by
             * above andes styles
             *
             */
            norm: Object;
            /**
             * If true, renders a second layer for each Stencil, one
             * acting as a 'hit' object for a wider mouse-click area.
             * It also doubles as a hilight. If true, overrides
             * renderHitLines setting.
             *
             */
            renderHitLayer: boolean;
            /**
             * If true, renders a second, larger layer for lines to make
             * them more easily clickable.
             *
             */
            renderHitLines: boolean;
            /**
             * Selected style of all shapes
             * styles not shown will used from
             * norm
             *
             */
            selected: Object;
            /**
             * Style of text
             *
             */
            text: Object;
            /**
             * Style of disabled text
             *
             */
            textDisabled: Object;
            /**
             * These styles apply to the containing
             * text box (edit mode), and not the text itself
             *
             */
            textMode: Object;
            /**
             *
             */
            useSelectedStyle: boolean;
            /**
             *
             */
            zAngle: number;
            /**
             * If true, draw current object in z-direction.
             *
             */
            zAxis: boolean;
            /**
             *
             */
            zAxisEnabled: boolean;
            /**
             * Each shape gets its own copy
             * of these styles so that instances
             * do not change each other's styles
             *
             */
            copy(): any;
        }
        namespace defaults {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/defaults.anchors.html
             *
             * Style for the anchor resize-points
             *
             */
            interface anchors {
                /**
                 *
                 */
                cap: string;
                /**
                 *
                 */
                color: string;
                /**
                 *
                 */
                fill: string;
                /**
                 *
                 */
                marginZero: number;
                /**
                 *
                 */
                minSize: number;
                /**
                 *
                 */
                size: number;
                /**
                 *
                 */
                style: string;
                /**
                 *
                 */
                width: number;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/defaults.arrows.html
             *
             * Size of arrows on vectors.
             * length is in pixels
             * width is actually an angle
             * but is close to pixels in size
             *
             */
            interface arrows {
                /**
                 *
                 */
                length: number;
                /**
                 *
                 */
                width: number;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/defaults.button.html
             *
             *
             */
            interface button {
                /**
                 *
                 */
                down: Object;
                /**
                 *
                 */
                icon: Object;
                /**
                 *
                 */
                norm: Object;
                /**
                 *
                 */
                over: Object;
                /**
                 *
                 */
                selected: Object;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/defaults.disabled.html
             *
             * Disabled or "locked" or "fade" style of all shapes
             *
             */
            interface disabled {
                /**
                 *
                 */
                cap: string;
                /**
                 *
                 */
                color: string;
                /**
                 *
                 */
                fill: string;
                /**
                 *
                 */
                style: string;
                /**
                 *
                 */
                width: number;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/defaults.hitHighlighted.html
             *
             * Highlighted style of a hit area
             *
             */
            interface hitHighlighted {
                /**
                 *
                 */
                cap: string;
                /**
                 *
                 */
                color: string;
                /**
                 *
                 */
                fill: Object;
                /**
                 *
                 */
                style: string;
                /**
                 *
                 */
                width: number;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/defaults.highlighted.html
             *
             * Highlighted style of all shapes
             * NOT CURRENTLY BEING USED
             *
             */
            interface highlighted {
                /**
                 *
                 */
                cap: string;
                /**
                 *
                 */
                color: string;
                /**
                 *
                 */
                fill: string;
                /**
                 *
                 */
                style: string;
                /**
                 *
                 */
                width: number;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/defaults.hitNorm.html
             *
             * Normal style of a hit area
             *
             */
            interface hitNorm {
                /**
                 *
                 */
                cap: string;
                /**
                 *
                 */
                color: Object;
                /**
                 *
                 */
                fill: Object;
                /**
                 *
                 */
                style: string;
                /**
                 *
                 */
                width: number;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/defaults.hitSelected.html
             *
             * Selected style of a hit area
             *
             */
            interface hitSelected {
                /**
                 *
                 */
                cap: string;
                /**
                 *
                 */
                color: string;
                /**
                 *
                 */
                fill: Object;
                /**
                 *
                 */
                style: string;
                /**
                 *
                 */
                width: number;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/defaults.norm.html
             *
             * Normal style of all shapes
             * will get overridden by
             * above andes styles
             *
             */
            interface norm {
                /**
                 *
                 */
                cap: string;
                /**
                 *
                 */
                color: string;
                /**
                 *
                 */
                fill: string;
                /**
                 *
                 */
                style: string;
                /**
                 *
                 */
                width: number;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/defaults.selected.html
             *
             * Selected style of all shapes
             * styles not shown will used from
             * norm
             *
             */
            interface selected {
                /**
                 *
                 */
                color: string;
                /**
                 *
                 */
                width: number;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/defaults.text.html
             *
             * Style of text
             *
             */
            interface text {
                /**
                 *
                 */
                color: string;
                /**
                 *
                 */
                deleteEmptyCreate: boolean;
                /**
                 *
                 */
                deleteEmptyModify: boolean;
                /**
                 *
                 */
                family: string;
                /**
                 *
                 */
                minWidth: number;
                /**
                 *
                 */
                pad: number;
                /**
                 *
                 */
                size: string;
                /**
                 *
                 */
                weight: string;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/defaults.textDisabled.html
             *
             * Style of disabled text
             *
             */
            interface textDisabled {
                /**
                 *
                 */
                color: string;
                /**
                 *
                 */
                family: string;
                /**
                 *
                 */
                size: string;
                /**
                 *
                 */
                weight: string;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/defaults.textMode.html
             *
             * These styles apply to the containing
             * text box (edit mode), and not the text itself
             *
             */
            interface textMode {
                /**
                 *
                 */
                create: Object;
                /**
                 *
                 */
                edit: Object;
            }
        }

        namespace annotations {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/annotations/Angle.html
             *
             * When initiated, an HTML box will hover near the Stencil,
             * displaying it's angle while drawn or modified. Currently
             * only works with Vector, Line, Arrow, and Axes.
             * Annotation is positioned with dojox.drawing.util.positioning.angle
             * That method should be overwritten for custom placement.
             * Called internally.
             *
             * @param options One key value: the stencil that called this.
             */
            class Angle {
                constructor(options: Object);
                /**
                 *
                 */
                "angle": number;
                /**
                 *
                 */
                "type": string;
                /**
                 * Gets or creates HTMLNode used for display
                 *
                 */
                getAngleNode(): any;
                /**
                 * Turns display off.
                 *
                 */
                hideAngle(): void;
                /**
                 * Called to display angle
                 *
                 */
                showAngle(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/annotations/BoxShadow.html
             *
             * Creates a box shadow under solid objects. Can change the
             * shadow direction, color, size, and intensity. Can center
             * the shadow and make it a Glow.
             * This is a pseudo shadow, created by duplicating the
             * original stencil and increasing the line weight while
             * reducing the opacity. Therefore it will not work with
             * text. Also won't look very good if the Stencil has no
             * fill or is transparent. Can't do knockouts or inner
             * shadows. Currently can't do paths - while doable, it
             * will most likely choke IE into certain death.
             *
             * @param options
             */
            class BoxShadow {
                constructor(options: Object);
                /**
                 *
                 */
                "showing": boolean;
                /**
                 * Creates data used to draw arrow head.
                 *
                 */
                arrowPoints(): any[];
                /**
                 *
                 * @param o
                 * @param size
                 * @param mult
                 * @param d
                 * @param r
                 * @param p
                 * @param c
                 */
                createForEllipse(o: any, size: any, mult: any, d: any, r: any, p: any, c: any): void;
                /**
                 *
                 * @param o
                 * @param size
                 * @param mult
                 * @param d
                 * @param r
                 * @param p
                 * @param c
                 */
                createForLine(o: any, size: any, mult: any, d: any, r: any, p: any, c: any): void;
                /**
                 *
                 * @param o
                 * @param size
                 * @param mult
                 * @param pts
                 * @param r
                 * @param p
                 * @param c
                 */
                createForPath(o: any, size: any, mult: any, pts: any, r: any, p: any, c: any): void;
                /**
                 *
                 * @param o
                 * @param size
                 * @param mult
                 * @param d
                 * @param r
                 * @param p
                 * @param c
                 */
                createForRect(o: any, size: any, mult: any, d: any, r: any, p: any, c: any): void;
                /**
                 *
                 * @param o
                 * @param size
                 * @param mult
                 * @param pts
                 * @param r
                 * @param p
                 * @param c
                 */
                createForZArrow(o: any, size: any, mult: any, pts: any, r: any, p: any, c: any): void;
                /**
                 *
                 */
                destroy(): void;
                /**
                 *
                 */
                hide(): void;
                /**
                 *
                 */
                render(): void;
                /**
                 *
                 */
                show(): void;
                /**
                 *
                 */
                onRender(): void;
                /**
                 *
                 */
                onTransform(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/annotations/Arrow.html
             *
             * An annotation called internally to put an arrowhead
             * on ether end of a Line. Initiated in Arrow (and Vector)
             * with the optional params: arrowStart and arrowEnd. Both
             * default true for Axes.
             *
             * @param options
             */
            class Arrow extends dojox.drawing.stencil.Path {
                constructor(options: Object);
                /**
                 *
                 */
                "baseRender": boolean;
                /**
                 *
                 */
                "closeColor": Object;
                /**
                 *
                 */
                "closePath": boolean;
                /**
                 *
                 */
                "closeRadius": number;
                /**
                 *
                 */
                "drawingType": string;
                /**
                 * Whether the Stencil is enabled or not.
                 *
                 */
                "enabled": boolean;
                /**
                 *
                 */
                "idx1": number;
                /**
                 *
                 */
                "idx2": number;
                /**
                 *
                 */
                "minimumSize": number;
                /**
                 *
                 */
                "StencilData": Object;
                /**
                 *
                 */
                "StencilPoints": any[];
                /**
                 *
                 */
                "subShape": boolean;
                /**
                 *
                 */
                "type": string;
                /**
                 *
                 * @param args
                 */
                addShadow(args: Object): void;
                /**
                 *
                 * @param options
                 * @param create
                 */
                animate(options: any, create: any): void;
                /**
                 * Applies the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                applyTransform(mx: any): void;
                /**
                 * Creates data used to draw arrow head.
                 *
                 * @param x1
                 * @param y1
                 * @param x2
                 * @param y2
                 * @param style
                 */
                arrowHead(x1: any, y1: any, x2: any, y2: any, style: any): any[];
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: number): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: number): void;
                /**
                 * Checks if points are close enough to indicate that
                 * path should be close. Provides a visual cue.
                 * Not actually used in stencil.path - this is used for
                 * drawable tools that extend it. Note that those tools
                 * need to remove the shape created: this.closeGuide, or
                 * add arg: remove
                 *
                 * @param firstPt
                 * @param currPt
                 * @param remove
                 */
                checkClosePoint(firstPt: Object, currPt: Object, remove: boolean): boolean;
                /**
                 * Convenience method for quick connects
                 * See comments below for possiblities
                 * functions can be strings
                 *
                 * @param o
                 * @param e
                 * @param s
                 * @param m
                 * @param once If true, the connection happens onlyonce then disconnects. Five args are requiredfor this functionality.
                 */
                connect(o: any, e: any, s: any, m: any, once: boolean): any;
                /**
                 * Internal. Registers this Stencil to receive
                 * mouse events.
                 *
                 */
                connectMouse(): void;
                /**
                 * Convenience method for batches of quick connects
                 * Handles are not returned and therefore cannot be
                 * disconnected until Shape destroy time
                 *
                 */
                connectMult(): void;
                /**
                 * Converts data to points.
                 *
                 * @param data
                 */
                dataToPoints(data: Object): void;
                /**
                 * Called when the Stencil is deselected.
                 * NOTE: Calling this will not deselect the Stencil
                 * calling this just sets the style to the current
                 * theme. 'manager.Stencil' should be used for selecting
                 * and deselecting Stencils.
                 *
                 * @param useDelay Adds  slight delay before the style is set.
                 */
                deselect(useDelay: boolean): void;
                /**
                 * Destroys this Stencil
                 *
                 */
                destroy(): void;
                /**
                 * Disables Stencil so it is not selectable.
                 * Changes the color to the disabled style.
                 *
                 */
                disable(): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: Object): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: any[]): void;
                /**
                 * Internal. Unregisters this Stencil from receiving
                 * mouse events.
                 *
                 */
                disconnectMouse(): void;
                /**
                 * Enables Stencil so it is not selectable (if
                 * it was selectable to begin with). Changes the
                 * color to the current style.
                 *
                 */
                enable(): void;
                /**
                 * Exports Stencil data
                 *
                 */
                exporter(): any;
                /**
                 * Gets angle of Stencil
                 * NOTE: Only works for Lines, Arrows, Vectors and Axes
                 * (works on points, not transforms)
                 *
                 */
                getAngle(): any;
                /**
                 * Overwriting _Base.getBounds. Not sure how absolute should
                 * work for a path.
                 *
                 * @param absolute
                 */
                getBounds(absolute: boolean): Object;
                /**
                 * Get the text of the label.
                 *
                 */
                getLabel(): any;
                /**
                 * Gets radius (length) of Stencil.
                 *
                 * NOTE: Only works for Lines, Arrows and Vectors
                 * (not for Ellipse, Axes has its own version)
                 *
                 */
                getRadius(): any;
                /**
                 * Returns the current transform (position) of the Stencil's
                 * container
                 *
                 */
                getTransform(): Object;
                /**
                 * Changes style to the highlight theme.
                 *
                 */
                highlight(): void;
                /**
                 * Moves Stencil to the back of all other items
                 * on the canvas.
                 *
                 */
                moveToBack(): void;
                /**
                 * Moves Stencil to the front of all other items
                 * on the canvas.
                 *
                 */
                moveToFront(): void;
                /**
                 * Converts points to data
                 *
                 * @param points
                 */
                pointsToData(points: any[]): void;
                /**
                 * Internal. Prevent item from being drawn/rendered less
                 * than zero on the X or Y.
                 *
                 */
                preventNegativePos(): void;
                /**
                 * Removes shape(s), typically before a re-render
                 * No args defaults to this.shape
                 * Pass in multiple args to remove multiple shapes
                 *
                 */
                remove(): void;
                /**
                 *
                 */
                removeShadow(): void;
                /**
                 * Renders the 'hit' object (the shape used for an expanded
                 * hit area and for highlighting) and the'shape' (the actual
                 * display object).
                 *
                 */
                render(): void;
                /**
                 * Called when the Stencil is selected.
                 * NOTE: Calling this will not select the Stencil
                 * calling this just sets the style to the 'selected'
                 * theme. 'manager.Stencil' should be used for selecting
                 * Stencils.
                 *
                 */
                select(): void;
                /**
                 * Setter for Stencil data; also converts
                 * data to points. See individual Stencils
                 * for specific data properties.
                 *
                 * @param data
                 */
                setData(data: Object): void;
                /**
                 * Creates and sets a label annotation for the Stencil.
                 * If Stencil contains a labelPosition method, that will
                 * be used for positioning. Otherwise
                 * dojox.drawing.util.positioning.label is used.
                 *
                 * @param text The text to set as the label.
                 */
                setLabel(text: String): void;
                /**
                 * Setter for Stencil points; also converts
                 * points to data. See individual Stencils
                 * for specific points properties.
                 *
                 * @param points
                 */
                setPoints(points: Object[]): void;
                /**
                 * Sets the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                setTransform(mx: Object): void;
                /**
                 * Moves object to a new X Y location
                 * mx is additive. So mx.dx=1 will move the stencil
                 * 1 pixel to the right from wherever it was.
                 *
                 * @param mx
                 */
                transformPoints(mx: any): void;
                /**
                 * Changes style to the current theme.
                 *
                 */
                unhighlight(): void;
                /**
                 * Stub - Fires before render occurs.
                 *
                 * @param stencil
                 */
                onBeforeRender(stencil: Object): void;
                /**
                 * Stub - fires on change of dimensional
                 * properties or a text change
                 *
                 * @param stencil
                 */
                onChangeData(stencil: Object): void;
                /**
                 * Fires when styles of shape has changed
                 *
                 * @param stencil
                 */
                onChangeStyle(stencil: Object): void;
                /**
                 *
                 * @param value
                 */
                onChangeText(value: any): void;
                /**
                 * Stub - fires before this is destroyed
                 *
                 * @param stencil
                 */
                onDelete(stencil: dojox.drawing.stencil._Base): void;
                /**
                 * Mouse event, fired on mousedown on canvas
                 *
                 * @param obj
                 */
                onDown(obj: Event): void;
                /**
                 * Mouse event, fired on mousemove while mouse
                 * is down on canvas
                 *
                 * @param obj
                 */
                onDrag(obj: Event): void;
                /**
                 * Stub - fires on change of any property,
                 * including style properties
                 *
                 * @param stencil
                 */
                onModify(stencil: Object): void;
                /**
                 * Mouse event, fired on mousemove while mouse
                 * is not down.
                 * NOTE: Not currently implemented
                 *
                 * @param obj
                 */
                onMove(obj: Event): void;
                /**
                 * Stub - Fires on creation.
                 * Drawing connects to this (once!) to be
                 * notified of drag completion. But only if it
                 * was registered as a Tool. Creating Stencil in and of
                 * itself does not register it.
                 *
                 * This should fire
                 * at the end of creation (not during drag)
                 *
                 * @param stencil
                 */
                onRender(stencil: Object): void;
                /**
                 * Called from anchor point mouse drag
                 * also called from plugins.Pan.checkBounds
                 *
                 * @param anchor
                 */
                onTransform(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Fired at the start of a transform. This would be
                 * an anchor drag or a selection.
                 *
                 * @param anchor
                 */
                onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Called from anchor point up mouse up
                 *
                 * @param anchor
                 */
                onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Mouse event, fired on mouseup
                 *
                 * @param obj
                 */
                onUp(obj: Event): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/annotations/Label.html
             *
             *
             */
            interface Label {
                /**
                 *
                 */
                Label(): void;
            }
            namespace Label {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/annotations/Label.Label.html
                 *
                 * An annotation called internally to label an Stencil.
                 * Annotation is positioned with dojox.drawing.util.positioning.label
                 * That method should be overwritten for custom placement. Or,
                 * add a 'setLabelCustom' method to the Stencil and it will be used.
                 *
                 * @param options One key value: the stencil that called this.
                 */
                class Label extends dojox.drawing.stencil.Text {
                    constructor(options: Object);
                    /**
                     * Text horizontal alignment.
                     * Options: start, middle, end
                     *
                     */
                    "align": string;
                    /**
                     *
                     */
                    "anchorType": string;
                    /**
                     *
                     */
                    "baseRender": boolean;
                    /**
                     *
                     */
                    "drawingType": string;
                    /**
                     * Whether the Stencil is enabled or not.
                     *
                     */
                    "enabled": boolean;
                    /**
                     * The minimum size allowed for a render. If the size
                     * is less, the shape is destroyed.
                     *
                     */
                    "minimumSize": number;
                    /**
                     * The data used to create the dojox.gfx Text
                     *
                     */
                    "StencilData": Object;
                    /**
                     *
                     */
                    "StencilPoints": any[];
                    /**
                     *
                     */
                    "type": string;
                    /**
                     * Text vertical alignment
                     * Options: top, middle, bottom (FIXME: bottom not supported)
                     *
                     */
                    "valign": string;
                    /**
                     *
                     * @param args
                     */
                    addShadow(args: Object): void;
                    /**
                     *
                     * @param options
                     * @param create
                     */
                    animate(options: any, create: any): void;
                    /**
                     * Applies the transform to the stencil
                     *
                     * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                     *
                     * @param mx
                     */
                    applyTransform(mx: any): void;
                    /**
                     * Changes properties in the style or disabled styles,
                     * depending on whether the object is enabled.
                     * Also can be used to change most position and size props.
                     *
                     * @param key
                     * @param value               Optional
                     */
                    attr(key: String, value: String): void;
                    /**
                     * Changes properties in the style or disabled styles,
                     * depending on whether the object is enabled.
                     * Also can be used to change most position and size props.
                     *
                     * @param key
                     * @param value               Optional
                     */
                    attr(key: Object, value: String): void;
                    /**
                     * Changes properties in the style or disabled styles,
                     * depending on whether the object is enabled.
                     * Also can be used to change most position and size props.
                     *
                     * @param key
                     * @param value               Optional
                     */
                    attr(key: String, value: number): void;
                    /**
                     * Changes properties in the style or disabled styles,
                     * depending on whether the object is enabled.
                     * Also can be used to change most position and size props.
                     *
                     * @param key
                     * @param value               Optional
                     */
                    attr(key: Object, value: number): void;
                    /**
                     *
                     * @param key
                     * @param value alias name: 'cent', 'pound' ..
                     */
                    beforeAttr(key: any, value: String): void;
                    /**
                     * Convenience method for quick connects
                     * See comments below for possiblities
                     * functions can be strings
                     *
                     * @param o
                     * @param e
                     * @param s
                     * @param m
                     * @param once If true, the connection happens onlyonce then disconnects. Five args are requiredfor this functionality.
                     */
                    connect(o: any, e: any, s: any, m: any, once: boolean): any;
                    /**
                     * Internal. Registers this Stencil to receive
                     * mouse events.
                     *
                     */
                    connectMouse(): void;
                    /**
                     * Convenience method for batches of quick connects
                     * Handles are not returned and therefore cannot be
                     * disconnected until Shape destroy time
                     *
                     */
                    connectMult(): void;
                    /**
                     * Converts data to points.
                     *
                     * @param o
                     */
                    dataToPoints(o: Object): any[];
                    /**
                     * Called when the Stencil is deselected.
                     * NOTE: Calling this will not deselect the Stencil
                     * calling this just sets the style to the current
                     * theme. 'manager.Stencil' should be used for selecting
                     * and deselecting Stencils.
                     *
                     * @param useDelay Adds  slight delay before the style is set.
                     */
                    deselect(useDelay: boolean): void;
                    /**
                     * Destroys this Stencil
                     *
                     */
                    destroy(): void;
                    /**
                     * Disables Stencil so it is not selectable.
                     * Changes the color to the disabled style.
                     *
                     */
                    disable(): void;
                    /**
                     * Removes connections based on passed
                     * handles arguments
                     *
                     * @param handles
                     */
                    disconnect(handles: Object): void;
                    /**
                     * Removes connections based on passed
                     * handles arguments
                     *
                     * @param handles
                     */
                    disconnect(handles: any[]): void;
                    /**
                     * Internal. Unregisters this Stencil from receiving
                     * mouse events.
                     *
                     */
                    disconnectMouse(): void;
                    /**
                     * Enables Stencil so it is not selectable (if
                     * it was selectable to begin with). Changes the
                     * color to the current style.
                     *
                     */
                    enable(): void;
                    /**
                     * Exports Stencil data
                     *
                     */
                    exporter(): any;
                    /**
                     * Gets angle of Stencil
                     * NOTE: Only works for Lines, Arrows, Vectors and Axes
                     * (works on points, not transforms)
                     *
                     */
                    getAngle(): any;
                    /**
                     * Returns the coordinates of the Stencil. This is often
                     * different than the data or the points.
                     *
                     * NOTE: Won't work for paths or annotations (labels, Axes, arrow tips)
                     * They should overwrite.
                     *
                     * NOTE: Primarily used for checking for if shape is off
                     * canvas. Therefore Lines could get flipped. Use absolute
                     * to prevent this.
                     *
                     * @param absolute Keeps lines from flipping (see note).
                     */
                    getBounds(absolute: boolean): Object;
                    /**
                     * Get the text of the label.
                     *
                     */
                    getLabel(): any;
                    /**
                     * Gets radius (length) of Stencil.
                     *
                     * NOTE: Only works for Lines, Arrows and Vectors
                     * (not for Ellipse, Axes has its own version)
                     *
                     */
                    getRadius(): any;
                    /**
                     * Getter for text.
                     *
                     */
                    getText(): any;
                    /**
                     * Returns the current transform (position) of the Stencil's
                     * container
                     *
                     */
                    getTransform(): Object;
                    /**
                     * Changes style to the highlight theme.
                     *
                     */
                    highlight(): void;
                    /**
                     *
                     * @param text
                     * @param w
                     */
                    makeFit(text: any, w: any): Object;
                    /**
                     * Moves Stencil to the back of all other items
                     * on the canvas.
                     *
                     */
                    moveToBack(): void;
                    /**
                     * Moves Stencil to the front of all other items
                     * on the canvas.
                     *
                     */
                    moveToFront(): void;
                    /**
                     * Converts points to data
                     *
                     * @param p
                     */
                    pointsToData(p: any[]): Object;
                    /**
                     * Internal. Prevent item from being drawn/rendered less
                     * than zero on the X or Y.
                     *
                     */
                    preventNegativePos(): void;
                    /**
                     * Removes shape(s), typically before a re-render
                     * No args defaults to this.shape
                     * Pass in multiple args to remove multiple shapes
                     *
                     */
                    remove(): void;
                    /**
                     *
                     */
                    removeShadow(): void;
                    /**
                     * Renders the 'hit' object (the shape used for an expanded
                     * hit area and for highlighting) and the'shape' (the actual
                     * display object). Text is slightly different than other
                     * implementations. Instead of calling render twice, it calls
                     * _createHilite for the 'hit'
                     *
                     * @param text Changes text if sent. Be sure to use the setText andnot to call this directly.
                     */
                    render(text: String): void;
                    /**
                     * Called when the Stencil is selected.
                     * NOTE: Calling this will not select the Stencil
                     * calling this just sets the style to the 'selected'
                     * theme. 'manager.Stencil' should be used for selecting
                     * Stencils.
                     *
                     */
                    select(): void;
                    /**
                     * Setter for Stencil data; also converts
                     * data to points. See individual Stencils
                     * for specific data properties.
                     *
                     * @param data
                     */
                    setData(data: Object): void;
                    /**
                     * Sets the text of the label. Not called directly. Should
                     * be called within Stencil. See stencil._Base
                     *
                     * @param text
                     */
                    setLabel(text: String): void;
                    /**
                     * Attaches to custom positioning within a Stencil
                     *
                     * @param text
                     */
                    setLabelCustom(text: String): void;
                    /**
                     * Setter for Stencil points; also converts
                     * points to data. See individual Stencils
                     * for specific points properties.
                     *
                     * @param points
                     */
                    setPoints(points: Object[]): void;
                    /**
                     * Setter for text.
                     *
                     * @param text
                     */
                    setText(text: any): void;
                    /**
                     * Sets the transform to the stencil
                     *
                     * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                     *
                     * @param mx
                     */
                    setTransform(mx: Object): void;
                    /**
                     * Moves object to a new X Y location
                     * mx is additive. So mx.dx=1 will move the stencil
                     * 1 pixel to the right from wherever it was.
                     *
                     * @param mx
                     */
                    transformPoints(mx: any): void;
                    /**
                     * Register raw text, returning typeset form.
                     * Uses function dojox.drawing.stencil.Text.typeset
                     * for typesetting, if it exists.
                     *
                     * @param text
                     */
                    typesetter(text: any): any;
                    /**
                     * Changes style to the current theme.
                     *
                     */
                    unhighlight(): void;
                    /**
                     * Stub - Fires before render occurs.
                     *
                     * @param stencil
                     */
                    onBeforeRender(stencil: Object): void;
                    /**
                     * Stub - fires on change of dimensional
                     * properties or a text change
                     *
                     * @param stencil
                     */
                    onChangeData(stencil: Object): void;
                    /**
                     * Fires when styles of shape has changed
                     *
                     * @param stencil
                     */
                    onChangeStyle(stencil: Object): void;
                    /**
                     *
                     * @param value
                     */
                    onChangeText(value: any): void;
                    /**
                     * Stub - fires before this is destroyed
                     *
                     * @param stencil
                     */
                    onDelete(stencil: dojox.drawing.stencil._Base): void;
                    /**
                     * Mouse event, fired on mousedown on canvas
                     *
                     * @param obj
                     */
                    onDown(obj: Event): void;
                    /**
                     * Mouse event, fired on mousemove while mouse
                     * is down on canvas
                     *
                     * @param obj
                     */
                    onDrag(obj: Event): void;
                    /**
                     * Stub - fires on change of any property,
                     * including style properties
                     *
                     * @param stencil
                     */
                    onModify(stencil: Object): void;
                    /**
                     * Mouse event, fired on mousemove while mouse
                     * is not down.
                     * NOTE: Not currently implemented
                     *
                     * @param obj
                     */
                    onMove(obj: Event): void;
                    /**
                     * Stub - Fires on creation.
                     * Drawing connects to this (once!) to be
                     * notified of drag completion. But only if it
                     * was registered as a Tool. Creating Stencil in and of
                     * itself does not register it.
                     *
                     * This should fire
                     * at the end of creation (not during drag)
                     *
                     * @param stencil
                     */
                    onRender(stencil: Object): void;
                    /**
                     * Called from anchor point mouse drag
                     * also called from plugins.Pan.checkBounds
                     *
                     * @param anchor
                     */
                    onTransform(anchor: dojox.drawing.manager.Anchors): void;
                    /**
                     * Fired at the start of a transform. This would be
                     * an anchor drag or a selection.
                     *
                     * @param anchor
                     */
                    onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
                    /**
                     * Called from anchor point up mouse up
                     *
                     * @param anchor
                     */
                    onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
                    /**
                     * Mouse event, fired on mouseup
                     *
                     * @param obj
                     */
                    onUp(obj: Event): void;
                }
            }

        }

        namespace library {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/library/icons.html
             *
             * A collection of icon Stencils for use with the buttons in the ui/Toolbar.
             * Each icon name corresponds to a Stencil or a Plugin. One can be inserted
             * into a button by adding the property: 'icon', which points to one of
             * these Stencil objects.
             *
             */
            interface icons {
                /**
                 *
                 */
                arrow: Object;
                /**
                 *
                 */
                axes: Object;
                /**
                 *
                 */
                ellipse: Object;
                /**
                 *
                 */
                equation: Object;
                /**
                 *
                 */
                iconize: Object;
                /**
                 *
                 */
                line: Object;
                /**
                 *
                 */
                pan: Object;
                /**
                 *
                 */
                path: Object;
                /**
                 *
                 */
                pencil: Object;
                /**
                 *
                 */
                plus: Object;
                /**
                 *
                 */
                rect: Object;
                /**
                 *
                 */
                textBlock: Object;
                /**
                 *
                 */
                triangle: Object;
                /**
                 *
                 */
                vector: Object;
                /**
                 *
                 */
                zoom100: Object;
                /**
                 *
                 */
                zoomIn: Object;
                /**
                 *
                 */
                zoomOut: Object;
            }
            namespace icons {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/library/icons.arrow.html
                 *
                 *
                 */
                interface arrow {
                    /**
                     *
                     */
                    borderWidth: number;
                    /**
                     *
                     */
                    closePath: boolean;
                    /**
                     *
                     */
                    points: any[];
                    /**
                     *
                     */
                    type: string;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/library/icons.axes.html
                 *
                 *
                 */
                interface axes {
                    /**
                     *
                     */
                    borderWidth: number;
                    /**
                     *
                     */
                    closePath: boolean;
                    /**
                     *
                     */
                    points: any[];
                    /**
                     *
                     */
                    type: string;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/library/icons.ellipse.html
                 *
                 *
                 */
                interface ellipse {
                    /**
                     *
                     */
                    borderWidth: number;
                    /**
                     *
                     */
                    cx: number;
                    /**
                     *
                     */
                    cy: number;
                    /**
                     *
                     */
                    rx: number;
                    /**
                     *
                     */
                    ry: number;
                    /**
                     *
                     */
                    type: string;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/library/icons.equation.html
                 *
                 *
                 */
                interface equation {
                    /**
                     *
                     */
                    borderWidth: number;
                    /**
                     *
                     */
                    closePath: boolean;
                    /**
                     *
                     */
                    points: any[];
                    /**
                     *
                     */
                    type: string;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/library/icons.line.html
                 *
                 *
                 */
                interface line {
                    /**
                     *
                     */
                    borderWidth: number;
                    /**
                     *
                     */
                    type: string;
                    /**
                     *
                     */
                    x1: number;
                    /**
                     *
                     */
                    x2: number;
                    /**
                     *
                     */
                    y1: number;
                    /**
                     *
                     */
                    y2: number;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/library/icons.iconize.html
                 *
                 *
                 */
                interface iconize {
                    /**
                     *
                     */
                    borderWidth: number;
                    /**
                     *
                     */
                    closePath: boolean;
                    /**
                     *
                     */
                    points: any[];
                    /**
                     *
                     */
                    type: string;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/library/icons.pan.html
                 *
                 *
                 */
                interface pan {
                    /**
                     *
                     */
                    borderWidth: number;
                    /**
                     *
                     */
                    closePath: boolean;
                    /**
                     *
                     */
                    points: any[];
                    /**
                     *
                     */
                    type: string;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/library/icons.path.html
                 *
                 *
                 */
                interface path {
                    /**
                     *
                     */
                    borderWidth: number;
                    /**
                     *
                     */
                    closePath: boolean;
                    /**
                     *
                     */
                    points: any[];
                    /**
                     *
                     */
                    type: string;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/library/icons.plus.html
                 *
                 *
                 */
                interface plus {
                    /**
                     *
                     */
                    borderWidth: number;
                    /**
                     *
                     */
                    closePath: boolean;
                    /**
                     *
                     */
                    points: any[];
                    /**
                     *
                     */
                    type: string;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/library/icons.pencil.html
                 *
                 *
                 */
                interface pencil {
                    /**
                     *
                     */
                    borderWidth: number;
                    /**
                     *
                     */
                    closePath: boolean;
                    /**
                     *
                     */
                    points: any[];
                    /**
                     *
                     */
                    type: string;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/library/icons.rect.html
                 *
                 *
                 */
                interface rect {
                    /**
                     *
                     */
                    borderWidth: number;
                    /**
                     *
                     */
                    height: number;
                    /**
                     *
                     */
                    type: string;
                    /**
                     *
                     */
                    width: number;
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
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/library/icons.textBlock.html
                 *
                 *
                 */
                interface textBlock {
                    /**
                     *
                     */
                    borderWidth: number;
                    /**
                     *
                     */
                    closePath: boolean;
                    /**
                     *
                     */
                    points: any[];
                    /**
                     *
                     */
                    type: string;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/library/icons.triangle.html
                 *
                 *
                 */
                interface triangle {
                    /**
                     *
                     */
                    borderWidth: number;
                    /**
                     *
                     */
                    closePath: boolean;
                    /**
                     *
                     */
                    points: any[];
                    /**
                     *
                     */
                    type: string;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/library/icons.zoom100.html
                 *
                 *
                 */
                interface zoom100 {
                    /**
                     *
                     */
                    text: string;
                    /**
                     *
                     */
                    type: string;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/library/icons.vector.html
                 *
                 *
                 */
                interface vector {
                    /**
                     *
                     */
                    borderWidth: number;
                    /**
                     *
                     */
                    closePath: boolean;
                    /**
                     *
                     */
                    points: any[];
                    /**
                     *
                     */
                    type: string;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/library/icons.zoomOut.html
                 *
                 *
                 */
                interface zoomOut {
                    /**
                     *
                     */
                    borderWidth: number;
                    /**
                     *
                     */
                    closePath: boolean;
                    /**
                     *
                     */
                    points: any[];
                    /**
                     *
                     */
                    type: string;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/library/icons.zoomIn.html
                 *
                 *
                 */
                interface zoomIn {
                    /**
                     *
                     */
                    borderWidth: number;
                    /**
                     *
                     */
                    closePath: boolean;
                    /**
                     *
                     */
                    points: any[];
                    /**
                     *
                     */
                    type: string;
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/library/greek.html
             *
             * Greek characters used by typesetter and greekPalette.
             * These are used to convert between the character and
             * the written version of greek letters.  Any character
             * can be included here and it will automatically be added
             * to the palette and converted by typesetter
             *
             */
            interface greek {
                /**
                 *
                 */
                alpha: number;
                /**
                 *
                 */
                Alpha: number;
                /**
                 *
                 */
                Beta: number;
                /**
                 *
                 */
                beta: number;
                /**
                 *
                 */
                Chi: number;
                /**
                 *
                 */
                chi: number;
                /**
                 *
                 */
                delta: number;
                /**
                 *
                 */
                Delta: number;
                /**
                 *
                 */
                epsilon: number;
                /**
                 *
                 */
                Epsilon: number;
                /**
                 *
                 */
                Eta: number;
                /**
                 *
                 */
                eta: number;
                /**
                 *
                 */
                Gamma: number;
                /**
                 *
                 */
                gamma: number;
                /**
                 *
                 */
                iota: number;
                /**
                 *
                 */
                Iota: number;
                /**
                 *
                 */
                kappa: number;
                /**
                 *
                 */
                Kappa: number;
                /**
                 *
                 */
                lambda: number;
                /**
                 *
                 */
                Lambda: number;
                /**
                 *
                 */
                mu: number;
                /**
                 *
                 */
                Mu: number;
                /**
                 *
                 */
                nu: number;
                /**
                 *
                 */
                Nu: number;
                /**
                 *
                 */
                omega: number;
                /**
                 *
                 */
                Omega: number;
                /**
                 *
                 */
                omicron: number;
                /**
                 *
                 */
                Omicron: number;
                /**
                 *
                 */
                Phi: number;
                /**
                 *
                 */
                phi: number;
                /**
                 *
                 */
                pi: number;
                /**
                 *
                 */
                Pi: number;
                /**
                 *
                 */
                piv: number;
                /**
                 *
                 */
                psi: number;
                /**
                 *
                 */
                Psi: number;
                /**
                 *
                 */
                rho: number;
                /**
                 *
                 */
                Rho: number;
                /**
                 *
                 */
                sigma: number;
                /**
                 *
                 */
                Sigma: number;
                /**
                 *
                 */
                sigmaf: number;
                /**
                 *
                 */
                Tau: number;
                /**
                 *
                 */
                tau: number;
                /**
                 *
                 */
                theta: number;
                /**
                 *
                 */
                Theta: number;
                /**
                 *
                 */
                thetasym: number;
                /**
                 *
                 */
                upsih: number;
                /**
                 *
                 */
                Upsilon: number;
                /**
                 *
                 */
                upsilon: number;
                /**
                 *
                 */
                Xi: number;
                /**
                 *
                 */
                xi: number;
                /**
                 *
                 */
                Zeta: number;
                /**
                 *
                 */
                zeta: number;
            }
        }

        namespace manager {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/manager/Canvas.html
             *
             * Creates a dojox.gfx.surface to be used for Drawing. Note that
             * The 'surface' that Drawing uses is actually a dojox.gfx.group.
             * This allows for more versatility.
             *
             * Called internally from a dojox.Drawing.
             *
             * Note: Surface creation is asynchronous. Connect to
             * onSurfaceReady in Drawing.
             *
             * @param options
             */
            class Canvas {
                constructor(options: Object);
                /**
                 *
                 */
                "baseClass": string;
                /**
                 *
                 */
                "useScrollbars": boolean;
                /**
                 * The amount the canvas is zoomed
                 *
                 */
                "zoom": number;
                /**
                 * Get the scroll position of the canvas
                 *
                 */
                getScrollOffset(): Object;
                /**
                 * Special method used to detect the width (and height)
                 * of the browser scrollbars. Becomes memoized.
                 *
                 */
                getScrollWidth(): number;
                /**
                 * Method used to change size of canvas. Potentially
                 * called from a container like ContentPane. May be
                 * called directly.
                 *
                 * @param width
                 * @param height
                 */
                resize(width: any, height: any): void;
                /**
                 * Internal. Changes canvas size and sets scroll position.
                 * Do not call this, use resize().
                 *
                 * @param width
                 * @param height
                 * @param scrollx
                 * @param scrolly
                 */
                setDimensions(width: any, height: any, scrollx: any, scrolly: any): void;
                /**
                 * Internal. Zooms canvas in and out.
                 *
                 * @param zoom
                 */
                setZoom(zoom: any): void;
                /**
                 * Event fires on scroll.NOT IMPLEMENTED
                 *
                 */
                onScroll(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/manager/Anchors.html
             *
             *
             * @param options
             */
            class Anchors {
                constructor(options: Object);
                /**
                 * Creates anchor points on a Stencil, based on the
                 * Stencil's points.
                 *
                 * @param item
                 */
                add(item: dojox.drawing.stencil._Base): void;
                /**
                 * Destroys the anchor points for a Stencil.
                 *
                 * @param item
                 */
                remove(item: dojox.drawing.stencil._Base): void;
                /**
                 * Event fires when anchor is created
                 *
                 * @param anchor An object with the following properties:y_anchorx_anchorrender: Creates the anchor point. Unlike most render methodsin Drawing, this is only called once.onRenderStencil: Event fires when an anchor calls a Stencil's render methodonTransformPoint: Event fires when an anchor changes the points of a StencilonAnchorDown: Event fires for mousedown on anchoronAnchorUp: Event fires for mouseup on anchoronAnchorDrag: Event fires for on dragging of an anchoranchorConstrain: To be over written by tool!Add an anchorConstrain method to the tooland it will automatically overwrite this stub.Should return a constrained x & y value.anchorPositionCheck: To be over written by tool!Add a anchorPositionCheck method to the tooland it will automatically overwrite this stub.Should return x and y coords. Success is bothbeing greater than zero, fail is if one or bothare less than zero.setPoint: Internal. Sets the Stencil's pointconnectMouse: Internal. Connects anchor to manager.mousedisconnectMouse: Internal. Disconnects anchor to manager.mousereset: Called (usually) from a Stencil when that Stencilneeded to make modifications to the position of thepoint. Basically used when teh anchor causes aless than zero condition.destroy: Destroys anchor.
                 */
                onAddAnchor(anchor: Object): void;
                /**
                 * Event fired on anchor mousedown
                 *
                 * @param anchor An object with the following properties:y_anchorx_anchorrender: Creates the anchor point. Unlike most render methodsin Drawing, this is only called once.onRenderStencil: Event fires when an anchor calls a Stencil's render methodonTransformPoint: Event fires when an anchor changes the points of a StencilonAnchorDown: Event fires for mousedown on anchoronAnchorUp: Event fires for mouseup on anchoronAnchorDrag: Event fires for on dragging of an anchoranchorConstrain: To be over written by tool!Add an anchorConstrain method to the tooland it will automatically overwrite this stub.Should return a constrained x & y value.anchorPositionCheck: To be over written by tool!Add a anchorPositionCheck method to the tooland it will automatically overwrite this stub.Should return x and y coords. Success is bothbeing greater than zero, fail is if one or bothare less than zero.setPoint: Internal. Sets the Stencil's pointconnectMouse: Internal. Connects anchor to manager.mousedisconnectMouse: Internal. Disconnects anchor to manager.mousereset: Called (usually) from a Stencil when that Stencilneeded to make modifications to the position of thepoint. Basically used when teh anchor causes aless than zero condition.destroy: Destroys anchor.
                 */
                onAnchorDown(anchor: Object): void;
                /**
                 * Event fired when anchor is moved
                 *
                 * @param anchor An object with the following properties:y_anchorx_anchorrender: Creates the anchor point. Unlike most render methodsin Drawing, this is only called once.onRenderStencil: Event fires when an anchor calls a Stencil's render methodonTransformPoint: Event fires when an anchor changes the points of a StencilonAnchorDown: Event fires for mousedown on anchoronAnchorUp: Event fires for mouseup on anchoronAnchorDrag: Event fires for on dragging of an anchoranchorConstrain: To be over written by tool!Add an anchorConstrain method to the tooland it will automatically overwrite this stub.Should return a constrained x & y value.anchorPositionCheck: To be over written by tool!Add a anchorPositionCheck method to the tooland it will automatically overwrite this stub.Should return x and y coords. Success is bothbeing greater than zero, fail is if one or bothare less than zero.setPoint: Internal. Sets the Stencil's pointconnectMouse: Internal. Connects anchor to manager.mousedisconnectMouse: Internal. Disconnects anchor to manager.mousereset: Called (usually) from a Stencil when that Stencilneeded to make modifications to the position of thepoint. Basically used when teh anchor causes aless than zero condition.destroy: Destroys anchor.
                 */
                onAnchorDrag(anchor: Object): void;
                /**
                 * Event fired on anchor mouseup
                 *
                 * @param anchor An object with the following properties:y_anchorx_anchorrender: Creates the anchor point. Unlike most render methodsin Drawing, this is only called once.onRenderStencil: Event fires when an anchor calls a Stencil's render methodonTransformPoint: Event fires when an anchor changes the points of a StencilonAnchorDown: Event fires for mousedown on anchoronAnchorUp: Event fires for mouseup on anchoronAnchorDrag: Event fires for on dragging of an anchoranchorConstrain: To be over written by tool!Add an anchorConstrain method to the tooland it will automatically overwrite this stub.Should return a constrained x & y value.anchorPositionCheck: To be over written by tool!Add a anchorPositionCheck method to the tooland it will automatically overwrite this stub.Should return x and y coords. Success is bothbeing greater than zero, fail is if one or bothare less than zero.setPoint: Internal. Sets the Stencil's pointconnectMouse: Internal. Connects anchor to manager.mousedisconnectMouse: Internal. Disconnects anchor to manager.mousereset: Called (usually) from a Stencil when that Stencilneeded to make modifications to the position of thepoint. Basically used when teh anchor causes aless than zero condition.destroy: Destroys anchor.
                 */
                onAnchorUp(anchor: Object): void;
                /**
                 * if the Stencil changes color while were's selected
                 * this moves the anchors to the back. Fix it.
                 *
                 * @param stencil
                 */
                onChangeStyle(stencil: Object): void;
                /**
                 * Event fires when an anchor calls a Stencil's render method
                 *
                 */
                onRenderStencil(): void;
                /**
                 * Event fires when an anchor's reset method is called
                 *
                 * @param stencil
                 */
                onReset(stencil: dojox.drawing.stencil._Base): void;
                /**
                 * Event fired on anchor drag
                 *
                 * @param anchor An object with the following properties:y_anchorx_anchorrender: Creates the anchor point. Unlike most render methodsin Drawing, this is only called once.onRenderStencil: Event fires when an anchor calls a Stencil's render methodonTransformPoint: Event fires when an anchor changes the points of a StencilonAnchorDown: Event fires for mousedown on anchoronAnchorUp: Event fires for mouseup on anchoronAnchorDrag: Event fires for on dragging of an anchoranchorConstrain: To be over written by tool!Add an anchorConstrain method to the tooland it will automatically overwrite this stub.Should return a constrained x & y value.anchorPositionCheck: To be over written by tool!Add a anchorPositionCheck method to the tooland it will automatically overwrite this stub.Should return x and y coords. Success is bothbeing greater than zero, fail is if one or bothare less than zero.setPoint: Internal. Sets the Stencil's pointconnectMouse: Internal. Connects anchor to manager.mousedisconnectMouse: Internal. Disconnects anchor to manager.mousereset: Called (usually) from a Stencil when that Stencilneeded to make modifications to the position of thepoint. Basically used when teh anchor causes aless than zero condition.destroy: Destroys anchor.
                 */
                onTransformPoint(anchor: Object): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/manager/StencilUI.html
             *
             * Used for handling Stencils as UI components.
             * Replaces manager.Stencil. Handles basic UI mouse
             * events like onmouseover. Does not handle selections
             * or support delete, etc.
             *
             * @param options
             */
            class StencilUI {
                constructor(options: any);
                /**
                 *
                 * @param stencil
                 */
                register(stencil: Object): Object;
                /**
                 * Event fired on mousedown on a stencil
                 *
                 * @param obj
                 */
                onOut(obj: Event): void;
                /**
                 * Event fired on mousedown on a stencil
                 *
                 * @param obj
                 */
                onOver(obj: Event): void;
                /**
                 * Event fired on mousedown on a stencil
                 *
                 * @param obj
                 */
                onUiDown(obj: Event): void;
                /**
                 * Event fired on mousedown on a stencil
                 *
                 * @param obj
                 */
                onUiUp(obj: Event): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/manager/Mouse.html
             *
             * Master object (instance) that tracks mouse
             * events. A new instance is created for each
             * Drawing object.
             * You could connect to any method or event in this
             * class, but it is designed to have the object
             * 'registered'. All objects with the current event
             * will be called directly.
             *
             * Custom events are used often. In addition to
             * standard events onDown, onUp, onDrag, etc, if
             * a certain object is clicked upon (or dragged, etc),
             * that object's drawingType will create the custom event,
             * such as onAnchorDown, or onStencilDown.
             *
             * @param options
             */
            class Mouse {
                constructor(options: Object);
                /**
                 * The custom event methods that an Object that has
                 * registered with manager.Mouse can receive.
                 * Can contain any or all of the following methods
                 * and they will be called on mouse events. All events
                 * will be sent a EventObject event object.
                 *
                 * NOTE:
                 * Events happen anywhere in the document unless
                 * otherwise noted.
                 *
                 */
                "CustomEventMethod": Object;
                /**
                 * Milliseconds between clicks to
                 * register as for onDoubleClick
                 *
                 */
                "doublClickSpeed": number;
                /**
                 *
                 */
                "zoom": number;
                /**
                 * Internal. Create EventObject
                 *
                 * @param evt
                 * @param squelchErrors
                 */
                create(evt: any, squelchErrors: any): Object;
                /**
                 * Internal. Create onDown event
                 *
                 * @param evt
                 */
                down(evt: any): void;
                /**
                 * Internal. Create onDrag event
                 *
                 * @param evt
                 */
                drag(evt: any): void;
                /**
                 * Internal. Determine the event name
                 *
                 * @param name
                 */
                eventName(name: any): any;
                /**
                 * The custom event object that is sent to registered objects
                 * and their respective methods.
                 *
                 * NOTE: Most event objects are the same with the exception
                 * of the onDown events, which have fewer.
                 *
                 */
                EventObject(): void;
                /**
                 * Internal. Initializes mouse.
                 *
                 * @param node
                 */
                init(node: HTMLElement): void;
                /**
                 * Internal.
                 *
                 * @param evt
                 */
                move(evt: any): void;
                /**
                 * Internal.
                 *
                 * @param obj
                 */
                out(obj: any): void;
                /**
                 * Internal.
                 *
                 * @param obj
                 */
                over(obj: any): void;
                /**
                 *
                 * @param obj
                 * @param evt
                 */
                overName(obj: any, evt: any): String;
                /**
                 * All objects (Stencils) should register here if they
                 * use mouse events. When registering, the object will
                 * be called if it has that method.
                 * See: CustomEventMethod and EventObject
                 *
                 * @param scope The object to be called
                 */
                register(scope: Object): any;
                /**
                 *
                 * @param width
                 * @param height
                 */
                resize(width: any, height: any): void;
                /**
                 * Gets scroll offset of canvas
                 *
                 */
                scrollOffset(): Object;
                /**
                 * Internal. Sets canvas position
                 *
                 */
                setCanvas(): void;
                /**
                 * Sets the cursor for  a given node.  If no
                 * node is specified the containing node is used.
                 *
                 * @param cursor
                 * @param node
                 */
                setCursor(cursor: any, node: HTMLElement): void;
                /**
                 * Sets the mouse mode s that custom events can be called.
                 * Also can 'disable' events by using a bogus mode:
                 *
                 * mouse.setEventMode("DISABLED")
                 * (unless any object subscribes to this event,
                 *
                 * it is effectively disabled)
                 *
                 * @param mode
                 */
                setEventMode(mode: any): void;
                /**
                 * Internal. Sets the mouse zoom percentage to
                 * that of the canvas
                 *
                 * @param zoom
                 */
                setZoom(zoom: any): void;
                /**
                 * Disconnects object. Mouse events are no longer
                 * called for it.
                 *
                 * @param handle
                 */
                unregister(handle: any): void;
                /**
                 * Internal. Create onUp event
                 *
                 * @param evt
                 */
                up(evt: any): void;
                /**
                 * Create on[xx]Down event and send to broadcaster.
                 * Could be connected to.
                 *
                 * @param obj
                 */
                onDown(obj: any): void;
                /**
                 * Create on[xx]Drag event and send to broadcaster.
                 * Could be connected to.
                 *
                 * @param obj
                 */
                onDrag(obj: any): void;
                /**
                 * Create onMove event and send to broadcaster.
                 * Could be connected to.
                 * Note: onMove never uses a custom event
                 * Note: onMove is currently not enabled in the app.
                 *
                 * @param obj
                 */
                onMove(obj: any): void;
                /**
                 *
                 * @param obj
                 */
                onOut(obj: any): void;
                /**
                 *
                 * @param obj
                 */
                onOver(obj: any): void;
                /**
                 * Create on[xx]Up event and send to broadcaster.
                 * Could be connected to.
                 *
                 * @param obj
                 */
                onUp(obj: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/manager/Stencil.html
             *
             * The main class for tracking Stencils that are cretaed, added,
             * selected, or deleted. Also handles selections, multiple
             * selections, adding and removing from selections, and dragging
             * selections. It's this class that triggers the anchors to
             * appear on a Stencil and whther there are anchor on a multiple
             * select or not (currently not)
             *
             * @param options
             */
            class Stencil {
                constructor(options: any);
                /**
                 *
                 */
                "throttleTime": number;
                /**
                 * Deletes a stencil.
                 * NOTE: supports limited undo.
                 *
                 * @param stencil
                 */
                deleteItem(stencil: Object): void;
                /**
                 *
                 */
                deselect(): void;
                /**
                 * Deselect passed stencil
                 *
                 * @param stencil
                 */
                deselectItem(stencil: Object): void;
                /**
                 * Collects all Stencil data and returns an
                 * Array of objects.
                 *
                 */
                exporter(): any[];
                /**
                 * Returns the stencil most recently interacted
                 * with whether it's last created or last selected
                 *
                 */
                getRecentStencil(): any;
                /**
                 * Returns number of selected (generally used
                 * as truthy or falsey)
                 *
                 */
                hasSelected(): number;
                /**
                 * Returns if passed stencil is selected or not
                 * based on internal collection, not on stencil
                 * boolean
                 *
                 * @param stencil
                 */
                isSelected(stencil: Object): boolean;
                /**
                 *
                 */
                listStencils(): any;
                /**
                 * Key method for adding Stencils. Stencils
                 * can be added to the canvas without adding
                 * them to this, but they won't have selection
                 * or drag ability.
                 *
                 * @param stencil
                 */
                register(stencil: Object): any;
                /**
                 * Deletes all Stencils on the canvas.
                 *
                 */
                removeAll(): void;
                /**
                 * Internal. Used for the prototype undo stack.
                 * Saves selection position.
                 *
                 */
                saveMoveState(): void;
                /**
                 * Internal. Used for the prototype undo stack.
                 * Prevents an undo point on every mouse move.
                 * Only does a point when the mouse hesitates.
                 *
                 */
                saveThrottledState(): void;
                /**
                 * Selects all items
                 *
                 */
                selectAll(): void;
                /**
                 * Method used to select a stencil.
                 *
                 * @param idOrItem
                 */
                selectItem(idOrItem: String): void;
                /**
                 * Method used to select a stencil.
                 *
                 * @param idOrItem
                 */
                selectItem(idOrItem: Object): void;
                /**
                 * Internal. Gets all selected stencils' coordinates
                 * and determines how far left and up the selection
                 * can go without going below zero
                 *
                 */
                setConstraint(): void;
                /**
                 * Keeps track of the most recent stencil interacted
                 * with, whether created or selected.
                 *
                 * @param stencil
                 */
                setRecentStencil(stencil: any): void;
                /**
                 * Internal. Creates a new selection group
                 * used to hold selected stencils.
                 *
                 */
                setSelectionGroup(): void;
                /**
                 * Convenience function calls function within
                 * all selected stencils
                 *
                 * @param func
                 */
                toSelected(func: String): void;
                /**
                 * Undeletes a stencil. Used in undo stack.
                 *
                 * @param stencils
                 */
                unDelete(stencils: any[]): void;
                /**
                 * Method for removing Stencils from the manager.
                 * This doesn't delete them, only removes them from
                 * the list.
                 *
                 * @param stencil
                 */
                unregister(stencil: Object): void;
                /**
                 * Convenience function calls function on
                 * all selected stencils
                 *
                 * @param func
                 */
                withSelected(func: Function): void;
                /**
                 * Convenience function calls function on
                 * all stencils
                 *
                 * @param func
                 */
                withStencils(func: Function): void;
                /**
                 * Convenience function calls function on
                 * all stencils that are not selected
                 *
                 * @param func
                 */
                withUnselected(func: Function): void;
                /**
                 * Event fire on mouseup off of an anchor point
                 *
                 */
                onAnchorUp(): void;
                /**
                 * Moves selection based on keyboard arrow keys
                 *
                 * @param evt
                 */
                onArrow(evt: KeyboardEvent): void;
                /**
                 * Event fired at the beginning of a stencil drag
                 *
                 * @param obj
                 */
                onBeginDrag(obj: Event): void;
                /**
                 * Event fired on deletion of a stencil
                 *
                 * @param noundo
                 */
                onDelete(noundo: boolean): void;
                /**
                 * Event fired on deselection of a stencil
                 *
                 * @param stencil
                 * @param keepObject
                 */
                onDeselect(stencil: any, keepObject: any): void;
                /**
                 * Event fired on mousedown on the canvas
                 *
                 * @param obj
                 */
                onDown(obj: Event): void;
                /**
                 * Event fired at the end of a stencil drag
                 *
                 * @param obj
                 */
                onDragEnd(obj: Event): void;
                /**
                 * Event to connect a textbox to
                 * for label edits
                 *
                 * @param obj
                 */
                onLabelDoubleClick(obj: Event): void;
                /**
                 * Event fired on mousedown of a stencil's label
                 * Because it's an annotation the id will be the
                 * master stencil.
                 *
                 * @param obj
                 * @param evt
                 */
                onLabelDown(obj: Event, evt: any): void;
                /**
                 *
                 * @param obj
                 */
                onLabelDrag(obj: Event): void;
                /**
                 *
                 * @param obj
                 */
                onLabelUp(obj: Event): void;
                /**
                 * Event fired on selection of a stencil
                 *
                 * @param stencil
                 */
                onSelect(stencil: Object): void;
                /**
                 * Event fired on the double-click of a stencil
                 *
                 * @param obj
                 */
                onStencilDoubleClick(obj: Event): void;
                /**
                 * Event fired on mousedown on a stencil
                 *
                 * @param obj
                 * @param evt
                 */
                onStencilDown(obj: Event, evt: any): void;
                /**
                 * Event fired on every mousemove of a stencil drag
                 *
                 * @param obj
                 */
                onStencilDrag(obj: Event): void;
                /**
                 * This restores the cursor.
                 *
                 * @param obj
                 */
                onStencilOut(obj: any): void;
                /**
                 * This changes the cursor when hovering over
                 * a selectable stencil.
                 *
                 * @param obj
                 */
                onStencilOver(obj: any): void;
                /**
                 * Event fired on mouseup off of a stencil
                 *
                 * @param obj
                 */
                onStencilUp(obj: Event): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/manager/Undo.html
             *
             * Handles the Undo in drawing.
             * NOTE: Only partially implemented!!! There is very
             * little actual undo functionality!
             *
             * @param options
             */
            class Undo {
                constructor(options: any);
                /**
                 *
                 * @param stack
                 */
                add(stack: any): void;
                /**
                 *
                 * @param scope
                 * @param method
                 * @param args
                 */
                apply(scope: any, method: any, args: any): void;
                /**
                 *
                 */
                redo(): void;
                /**
                 *
                 */
                undo(): void;
                /**
                 *
                 * @param evt
                 */
                onKeyDown(evt: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/manager/_registry.html
             *
             *
             */
            interface _registry {
                /**
                 *
                 * @param type
                 * @param id
                 */
                getRegistered(type: any, id: any): any;
                /**
                 *
                 * @param item
                 * @param type
                 */
                register(item: any, type: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/manager/keys.html
             *
             * A singleton, master object that detects
             * keyboard keys and events
             * Connect to it like:
             *
             * dojo.connect(this.keys, "onEnter", ....);
             *
             */
            interface keys {
                /**
                 * Indicates whether the Alt or Option key is currently pressed
                 *
                 */
                alt: boolean;
                /**
                 * The amount, in pixels, a selected Stencil will
                 * move on an arrow key event
                 *
                 */
                arrowIncrement: number;
                /**
                 * The amount, in pixels, a selected Stencil will
                 * move on an arrow key + SHIFT event
                 *
                 */
                arrowShiftIncrement: number;
                /**
                 * Indicates whether the Apple Command key is currently pressed
                 *
                 */
                cmmd: boolean;
                /**
                 * Indicates whether the Control key is currently pressed
                 *
                 */
                ctrl: boolean;
                /**
                 *
                 */
                listeners: any[];
                /**
                 * Indicates whether any 'meta' key is currently pressed:
                 * shift || ctrl || cmd || alt
                 *
                 */
                meta: boolean;
                /**
                 * Indicates whether the Shift key is currently pressed
                 *
                 */
                shift: boolean;
                /**
                 * Relinquishes control of events to another portion
                 * of Drawing; namely the TextBlock.
                 *
                 * @param _isedit
                 */
                editMode(_isedit: any): void;
                /**
                 * Enables or disables key events, to relinquish
                 * control to something outside of Drawing; input
                 * fields for example.
                 * You may need to call this directly if you are
                 * using textareas or contenteditables.
                 * NOTE: See scanForFields
                 *
                 * @param _enabled
                 */
                enable(_enabled: any): void;
                /**
                 * Initialize the keys object
                 *
                 */
                init(): void;
                /**
                 * Register an object and callback to be notified
                 * of events.
                 * NOTE: Not really used in code, but should work.
                 * See manager.mouse for similar usage
                 *
                 * @param options
                 */
                register(options: any): void;
                /**
                 * Scans the document for inputs
                 * and calls this automatically. However you may need
                 * to call this if you create inputs after the fact.
                 *
                 */
                scanForFields(): void;
            }
        }

        namespace plugins {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/plugins/_Plugin.html
             *
             * Base class for plugins.
             * When creating a plugin, use this class as the
             * base to ensure full functionality.
             *
             * @param options
             */
            class _Plugin {
                constructor(options: any);
                /**
                 *
                 */
                "anchors": Object;
                /**
                 *
                 */
                "button": Object;
                /**
                 *
                 */
                "canvas": Object;
                /**
                 *
                 */
                "drawing": Object;
                /**
                 *
                 */
                "keys": Object;
                /**
                 *
                 */
                "mouse": Object;
                /**
                 *
                 */
                "node": Object;
                /**
                 *
                 */
                "stencils": Object;
                /**
                 *
                 */
                "type": string;
                /**
                 *
                 */
                "util": Object;
                /**
                 *
                 */
                connect(): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: Object): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: any[]): void;
            }
            namespace drawing {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/plugins/drawing/Grid.html
                 *
                 * Plugin that displays a grid on the Drawing canvas.
                 *
                 * @param options
                 */
                class Grid extends dojox.drawing.plugins._Plugin {
                    constructor(options: any);
                    /**
                     *
                     */
                    "anchors": Object;
                    /**
                     *
                     */
                    "button": Object;
                    /**
                     *
                     */
                    "canvas": Object;
                    /**
                     *
                     */
                    "drawing": Object;
                    /**
                     * How far apart to set the grid lines
                     *
                     */
                    "gap": number;
                    /**
                     *
                     */
                    "keys": Object;
                    /**
                     *
                     */
                    "major": number;
                    /**
                     * Major lines color
                     *
                     */
                    "majorColor": string;
                    /**
                     *
                     */
                    "minor": number;
                    /**
                     * Minor lines color
                     *
                     */
                    "minorColor": string;
                    /**
                     *
                     */
                    "mouse": Object;
                    /**
                     *
                     */
                    "node": Object;
                    /**
                     *
                     */
                    "stencils": Object;
                    /**
                     *
                     */
                    "type": string;
                    /**
                     *
                     */
                    "util": Object;
                    /**
                     * The current zoom of the grid
                     *
                     */
                    "zoom": number;
                    /**
                     *
                     */
                    connect(): void;
                    /**
                     * Removes connections based on passed
                     * handles arguments
                     *
                     * @param handles
                     */
                    disconnect(handles: Object): void;
                    /**
                     * Removes connections based on passed
                     * handles arguments
                     *
                     * @param handles
                     */
                    disconnect(handles: any[]): void;
                    /**
                     * Renders grid
                     *
                     * @param options
                     */
                    setGrid(options: any): any;
                    /**
                     * Set's the zoom of the canvas
                     *
                     * @param zoom
                     */
                    setZoom(zoom: any): void;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/plugins/drawing/GreekPalette.html
                 *
                 * This plugin uses the palette dijit in order to give tips for
                 * non-english (mostly greek for now) letters.
                 *
                 * IMPORTANT!  Because it is a full blown dijit it is NOT loaded
                 * like the other plugins.  INSTEAD currently it is instantiated
                 * in markup.  TextBlock LOOKS FOR IT by ID - "greekPalette"
                 * and if it finds it does the necessary initialization/connections.
                 * Grid showing all available entity options which the
                 * user can pick from.  The library loaded for use by the picker
                 * is found in dojox.drawing.library.greek.  Adding characters
                 * there will automatically add them to the palette.
                 *
                 * This works as a popup and as such its onChange and onCancel
                 * close it.  TextBlock manages it, since it's what uses the assist
                 * so it calls show (all actual popup management happens here).
                 * In order to activate the plugin require it and then include the
                 * markup in the example:
                 *
                 * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.
                 * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree
                 */
                class GreekPalette extends dijit._Widget implements dijit._TemplatedMixin, dijit._PaletteMixin {
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
                     * The template of this widget.  Using dojoxEntityPalette classes
                     * in order to allow easy transfer of css
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
                     * @param obj
                     */
                    show(obj: any): void;
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
                     * attach point for notification about when the user cancels the current menu
                     *
                     * @param closeAll
                     */
                    onCancel(closeAll: boolean): void;
                    /**
                     *
                     * @param val
                     */
                    onChange(val: any): void;
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
                namespace Silverlight {
                }

            }

            namespace tools {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/plugins/tools/Iconize.html
                 *
                 * Somewhat of internal use...
                 * Outputs a path to be used as an icon. Will end up being a
                 * sub-icon under Export options
                 *
                 * @param options
                 */
                class Iconize extends dojox.drawing.plugins._Plugin {
                    constructor(options: any);
                    /**
                     *
                     */
                    "anchors": Object;
                    /**
                     *
                     */
                    "button": Object;
                    /**
                     *
                     */
                    "canvas": Object;
                    /**
                     *
                     */
                    "drawing": Object;
                    /**
                     *
                     */
                    "keys": Object;
                    /**
                     *
                     */
                    "mouse": Object;
                    /**
                     *
                     */
                    "node": Object;
                    /**
                     *
                     */
                    "setup": Object;
                    /**
                     *
                     */
                    "stencils": Object;
                    /**
                     *
                     */
                    "type": string;
                    /**
                     *
                     */
                    "util": Object;
                    /**
                     *
                     */
                    connect(): void;
                    /**
                     * Removes connections based on passed
                     * handles arguments
                     *
                     * @param handles
                     */
                    disconnect(handles: Object): void;
                    /**
                     * Removes connections based on passed
                     * handles arguments
                     *
                     * @param handles
                     */
                    disconnect(handles: any[]): void;
                    /**
                     *
                     * @param p
                     */
                    makeIcon(p: any[]): void;
                    /**
                     *
                     */
                    onClick(): void;
                }
                namespace Iconize {
                    /**
                     * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/plugins/tools/Iconize.setup.html
                     *
                     *
                     */
                    interface setup {
                        /**
                         *
                         */
                        iconClass: string;
                        /**
                         *
                         */
                        name: string;
                        /**
                         *
                         */
                        tooltip: string;
                    }
                }

                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/plugins/tools/Pan.html
                 *
                 * A plugin that allows for a scrolling canvas. An action
                 * tool is added to the toolbar that allows for panning. Holding
                 * the space bar is a shortcut to that action. The canvas will
                 * only pan and scroll if there are objects out of the viewable
                 * area.
                 *
                 * @param options
                 */
                class Pan extends dojox.drawing.plugins._Plugin {
                    constructor(options: any);
                    /**
                     *
                     */
                    "anchors": Object;
                    /**
                     *
                     */
                    "button": Object;
                    /**
                     *
                     */
                    "canvas": Object;
                    /**
                     *
                     */
                    "drawing": Object;
                    /**
                     *
                     */
                    "interval": number;
                    /**
                     *
                     */
                    "keys": Object;
                    /**
                     *
                     */
                    "keyScroll": boolean;
                    /**
                     *
                     */
                    "mouse": Object;
                    /**
                     *
                     */
                    "node": Object;
                    /**
                     *
                     */
                    "selected": boolean;
                    /**
                     *
                     */
                    "setup": Object;
                    /**
                     *
                     */
                    "stencils": Object;
                    /**
                     *
                     */
                    "type": string;
                    /**
                     *
                     */
                    "util": Object;
                    /**
                     *
                     */
                    checkBounds(): void;
                    /**
                     *
                     */
                    connect(): void;
                    /**
                     * Removes connections based on passed
                     * handles arguments
                     *
                     * @param handles
                     */
                    disconnect(handles: Object): void;
                    /**
                     * Removes connections based on passed
                     * handles arguments
                     *
                     * @param handles
                     */
                    disconnect(handles: any[]): void;
                    /**
                     *
                     * @param evt
                     */
                    onArrow(evt: any): void;
                    /**
                     *
                     * @param evt
                     */
                    onKeyDown(evt: any): void;
                    /**
                     *
                     * @param evt
                     */
                    onKeyUp(evt: any): void;
                    /**
                     *
                     * @param obj
                     */
                    onPanDrag(obj: any): void;
                    /**
                     *
                     * @param obj
                     */
                    onPanUp(obj: any): void;
                    /**
                     *
                     * @param bool
                     */
                    onSetPan(bool: boolean): void;
                    /**
                     *
                     * @param bool
                     */
                    onSetPan(bool: Event): void;
                    /**
                     *
                     * @param obj
                     */
                    onStencilDrag(obj: any): void;
                    /**
                     *
                     * @param obj
                     */
                    onStencilUp(obj: any): void;
                    /**
                     *
                     * @param obj
                     */
                    onUp(obj: any): void;
                }
                namespace Pan {
                    /**
                     * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/plugins/tools/Pan.setup.html
                     *
                     *
                     */
                    interface setup {
                        /**
                         *
                         */
                        button: boolean;
                        /**
                         *
                         */
                        iconClass: string;
                        /**
                         *
                         */
                        name: string;
                        /**
                         *
                         */
                        tooltip: string;
                    }
                }

                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/plugins/tools/Zoom.html
                 *
                 *
                 */
                interface Zoom {
                    /**
                     *
                     */
                    Zoom100(): void;
                    /**
                     *
                     */
                    ZoomIn(): void;
                    /**
                     *
                     */
                    ZoomOut(): void;
                }
                namespace Zoom {
                    /**
                     * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/plugins/tools/Zoom.Zoom100.html
                     *
                     *
                     * @param options
                     */
                    class Zoom100 extends dojox.drawing.plugins._Plugin {
                        constructor(options: any);
                        /**
                         *
                         */
                        "anchors": Object;
                        /**
                         *
                         */
                        "button": Object;
                        /**
                         *
                         */
                        "canvas": Object;
                        /**
                         *
                         */
                        "drawing": Object;
                        /**
                         *
                         */
                        "keys": Object;
                        /**
                         *
                         */
                        "mouse": Object;
                        /**
                         *
                         */
                        "node": Object;
                        /**
                         *
                         */
                        "setup": Object;
                        /**
                         *
                         */
                        "stencils": Object;
                        /**
                         *
                         */
                        "type": string;
                        /**
                         *
                         */
                        "util": Object;
                        /**
                         *
                         */
                        connect(): void;
                        /**
                         * Removes connections based on passed
                         * handles arguments
                         *
                         * @param handles
                         */
                        disconnect(handles: Object): void;
                        /**
                         * Removes connections based on passed
                         * handles arguments
                         *
                         * @param handles
                         */
                        disconnect(handles: any[]): void;
                        /**
                         *
                         */
                        onClick(): void;
                        /**
                         * Zooms to 100%
                         *
                         */
                        onZoom100(): void;
                    }
                    /**
                     * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/plugins/tools/Zoom.ZoomIn.html
                     *
                     *
                     * @param options
                     */
                    class ZoomIn extends dojox.drawing.plugins._Plugin {
                        constructor(options: any);
                        /**
                         *
                         */
                        "anchors": Object;
                        /**
                         *
                         */
                        "button": Object;
                        /**
                         *
                         */
                        "canvas": Object;
                        /**
                         *
                         */
                        "drawing": Object;
                        /**
                         *
                         */
                        "keys": Object;
                        /**
                         *
                         */
                        "mouse": Object;
                        /**
                         *
                         */
                        "node": Object;
                        /**
                         *
                         */
                        "setup": Object;
                        /**
                         *
                         */
                        "stencils": Object;
                        /**
                         *
                         */
                        "type": string;
                        /**
                         *
                         */
                        "util": Object;
                        /**
                         *
                         */
                        connect(): void;
                        /**
                         * Removes connections based on passed
                         * handles arguments
                         *
                         * @param handles
                         */
                        disconnect(handles: Object): void;
                        /**
                         * Removes connections based on passed
                         * handles arguments
                         *
                         * @param handles
                         */
                        disconnect(handles: any[]): void;
                        /**
                         *
                         */
                        onClick(): void;
                        /**
                         * Handles zoom in.
                         *
                         */
                        onZoomIn(): void;
                    }
                    /**
                     * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/plugins/tools/Zoom.ZoomOut.html
                     *
                     *
                     * @param options
                     */
                    class ZoomOut extends dojox.drawing.plugins._Plugin {
                        constructor(options: any);
                        /**
                         *
                         */
                        "anchors": Object;
                        /**
                         *
                         */
                        "button": Object;
                        /**
                         *
                         */
                        "canvas": Object;
                        /**
                         *
                         */
                        "drawing": Object;
                        /**
                         *
                         */
                        "keys": Object;
                        /**
                         *
                         */
                        "mouse": Object;
                        /**
                         *
                         */
                        "node": Object;
                        /**
                         *
                         */
                        "setup": Object;
                        /**
                         *
                         */
                        "stencils": Object;
                        /**
                         *
                         */
                        "type": string;
                        /**
                         *
                         */
                        "util": Object;
                        /**
                         *
                         */
                        connect(): void;
                        /**
                         * Removes connections based on passed
                         * handles arguments
                         *
                         * @param handles
                         */
                        disconnect(handles: Object): void;
                        /**
                         * Removes connections based on passed
                         * handles arguments
                         *
                         * @param handles
                         */
                        disconnect(handles: any[]): void;
                        /**
                         *
                         */
                        onClick(): void;
                        /**
                         * Handles zoom out.
                         *
                         */
                        onZoomOut(): void;
                    }
                }

            }

        }

        namespace stencil {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/stencil/_Base.html
             *
             * The base class used for all Stencils.
             * All stencils extend this base class.
             * Most methods and events can be found here.
             *
             * @param options
             */
            class _Base {
                constructor(options: any);
                /**
                 *
                 */
                "drawingType": string;
                /**
                 * Whether the Stencil is enabled or not.
                 *
                 */
                "enabled": boolean;
                /**
                 * The minimum size allowed for a render. If the size
                 * is less, the shape is destroyed.
                 *
                 */
                "minimumSize": number;
                /**
                 * The type of Stencil this is. Should be overridden
                 * by extending classes.
                 * FIXME: should this be declaredClass?
                 *
                 */
                "type": string;
                /**
                 *
                 * @param args
                 */
                addShadow(args: Object): void;
                /**
                 *
                 * @param options
                 * @param create
                 */
                animate(options: any, create: any): void;
                /**
                 * Applies the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                applyTransform(mx: any): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: number): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: number): void;
                /**
                 * Convenience method for quick connects
                 * See comments below for possiblities
                 * functions can be strings
                 *
                 * @param o
                 * @param e
                 * @param s
                 * @param m
                 * @param once If true, the connection happens onlyonce then disconnects. Five args are requiredfor this functionality.
                 */
                connect(o: any, e: any, s: any, m: any, once: boolean): any;
                /**
                 * Internal. Registers this Stencil to receive
                 * mouse events.
                 *
                 */
                connectMouse(): void;
                /**
                 * Convenience method for batches of quick connects
                 * Handles are not returned and therefore cannot be
                 * disconnected until Shape destroy time
                 *
                 */
                connectMult(): void;
                /**
                 * Converts data to points.
                 *
                 * @param data
                 */
                dataToPoints(data: Object): void;
                /**
                 * Called when the Stencil is deselected.
                 * NOTE: Calling this will not deselect the Stencil
                 * calling this just sets the style to the current
                 * theme. 'manager.Stencil' should be used for selecting
                 * and deselecting Stencils.
                 *
                 * @param useDelay Adds  slight delay before the style is set.
                 */
                deselect(useDelay: boolean): void;
                /**
                 * Destroys this Stencil
                 *
                 */
                destroy(): void;
                /**
                 * Disables Stencil so it is not selectable.
                 * Changes the color to the disabled style.
                 *
                 */
                disable(): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: Object): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: any[]): void;
                /**
                 * Internal. Unregisters this Stencil from receiving
                 * mouse events.
                 *
                 */
                disconnectMouse(): void;
                /**
                 * Enables Stencil so it is not selectable (if
                 * it was selectable to begin with). Changes the
                 * color to the current style.
                 *
                 */
                enable(): void;
                /**
                 * Exports Stencil data
                 *
                 */
                exporter(): any;
                /**
                 * Gets angle of Stencil
                 * NOTE: Only works for Lines, Arrows, Vectors and Axes
                 * (works on points, not transforms)
                 *
                 */
                getAngle(): any;
                /**
                 * Returns the coordinates of the Stencil. This is often
                 * different than the data or the points.
                 *
                 * NOTE: Won't work for paths or annotations (labels, Axes, arrow tips)
                 * They should overwrite.
                 *
                 * NOTE: Primarily used for checking for if shape is off
                 * canvas. Therefore Lines could get flipped. Use absolute
                 * to prevent this.
                 *
                 * @param absolute Keeps lines from flipping (see note).
                 */
                getBounds(absolute: boolean): Object;
                /**
                 * Get the text of the label.
                 *
                 */
                getLabel(): any;
                /**
                 * Gets radius (length) of Stencil.
                 *
                 * NOTE: Only works for Lines, Arrows and Vectors
                 * (not for Ellipse, Axes has its own version)
                 *
                 */
                getRadius(): any;
                /**
                 * Returns the current transform (position) of the Stencil's
                 * container
                 *
                 */
                getTransform(): Object;
                /**
                 * Changes style to the highlight theme.
                 *
                 */
                highlight(): void;
                /**
                 * Moves Stencil to the back of all other items
                 * on the canvas.
                 *
                 */
                moveToBack(): void;
                /**
                 * Moves Stencil to the front of all other items
                 * on the canvas.
                 *
                 */
                moveToFront(): void;
                /**
                 * Converts points to data
                 *
                 * @param points
                 */
                pointsToData(points: any[]): void;
                /**
                 * Internal. Prevent item from being drawn/rendered less
                 * than zero on the X or Y.
                 *
                 */
                preventNegativePos(): void;
                /**
                 * Removes shape(s), typically before a re-render
                 * No args defaults to this.shape
                 * Pass in multiple args to remove multiple shapes
                 *
                 */
                remove(): void;
                /**
                 *
                 */
                removeShadow(): void;
                /**
                 * This Stencil's render description. Often
                 * calls 'sub render' methods.
                 *
                 */
                render(): void;
                /**
                 * Called when the Stencil is selected.
                 * NOTE: Calling this will not select the Stencil
                 * calling this just sets the style to the 'selected'
                 * theme. 'manager.Stencil' should be used for selecting
                 * Stencils.
                 *
                 */
                select(): void;
                /**
                 * Setter for Stencil data; also converts
                 * data to points. See individual Stencils
                 * for specific data properties.
                 *
                 * @param data
                 */
                setData(data: Object): void;
                /**
                 * Creates and sets a label annotation for the Stencil.
                 * If Stencil contains a labelPosition method, that will
                 * be used for positioning. Otherwise
                 * dojox.drawing.util.positioning.label is used.
                 *
                 * @param text The text to set as the label.
                 */
                setLabel(text: String): void;
                /**
                 * Setter for Stencil points; also converts
                 * points to data. See individual Stencils
                 * for specific points properties.
                 *
                 * @param points
                 */
                setPoints(points: Object[]): void;
                /**
                 * Sets the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                setTransform(mx: Object): void;
                /**
                 * Moves object to a new X Y location
                 * mx is additive. So mx.dx=1 will move the stencil
                 * 1 pixel to the right from wherever it was.
                 *
                 * @param mx
                 */
                transformPoints(mx: any): void;
                /**
                 * Changes style to the current theme.
                 *
                 */
                unhighlight(): void;
                /**
                 * Stub - Fires before render occurs.
                 *
                 * @param stencil
                 */
                onBeforeRender(stencil: Object): void;
                /**
                 * Stub - fires on change of dimensional
                 * properties or a text change
                 *
                 * @param stencil
                 */
                onChangeData(stencil: Object): void;
                /**
                 * Fires when styles of shape has changed
                 *
                 * @param stencil
                 */
                onChangeStyle(stencil: Object): void;
                /**
                 *
                 * @param value
                 */
                onChangeText(value: any): void;
                /**
                 * Stub - fires before this is destroyed
                 *
                 * @param stencil
                 */
                onDelete(stencil: dojox.drawing.stencil._Base): void;
                /**
                 * Mouse event, fired on mousedown on canvas
                 *
                 * @param obj
                 */
                onDown(obj: Event): void;
                /**
                 * Mouse event, fired on mousemove while mouse
                 * is down on canvas
                 *
                 * @param obj
                 */
                onDrag(obj: Event): void;
                /**
                 * Stub - fires on change of any property,
                 * including style properties
                 *
                 * @param stencil
                 */
                onModify(stencil: Object): void;
                /**
                 * Mouse event, fired on mousemove while mouse
                 * is not down.
                 * NOTE: Not currently implemented
                 *
                 * @param obj
                 */
                onMove(obj: Event): void;
                /**
                 * Stub - Fires on creation.
                 * Drawing connects to this (once!) to be
                 * notified of drag completion. But only if it
                 * was registered as a Tool. Creating Stencil in and of
                 * itself does not register it.
                 *
                 * This should fire
                 * at the end of creation (not during drag)
                 *
                 * @param stencil
                 */
                onRender(stencil: Object): void;
                /**
                 * Called from anchor point mouse drag
                 * also called from plugins.Pan.checkBounds
                 *
                 * @param anchor
                 */
                onTransform(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Fired at the start of a transform. This would be
                 * an anchor drag or a selection.
                 *
                 * @param anchor
                 */
                onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Called from anchor point up mouse up
                 *
                 * @param anchor
                 */
                onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Mouse event, fired on mouseup
                 *
                 * @param obj
                 */
                onUp(obj: Event): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/stencil/Ellipse.html
             *
             * Creates a dojox.gfx Ellipse based on data or points provided.
             *
             * @param options
             */
            class Ellipse extends dojox.drawing.stencil._Base {
                constructor(options: any);
                /**
                 *
                 */
                "anchorType": string;
                /**
                 *
                 */
                "baseRender": boolean;
                /**
                 *
                 */
                "drawingType": string;
                /**
                 * Whether the Stencil is enabled or not.
                 *
                 */
                "enabled": boolean;
                /**
                 * The minimum size allowed for a render. If the size
                 * is less, the shape is destroyed.
                 *
                 */
                "minimumSize": number;
                /**
                 *
                 */
                "type": string;
                /**
                 *
                 * @param args
                 */
                addShadow(args: Object): void;
                /**
                 *
                 * @param options
                 * @param create
                 */
                animate(options: any, create: any): void;
                /**
                 * Applies the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                applyTransform(mx: any): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: number): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: number): void;
                /**
                 * Convenience method for quick connects
                 * See comments below for possiblities
                 * functions can be strings
                 *
                 * @param o
                 * @param e
                 * @param s
                 * @param m
                 * @param once If true, the connection happens onlyonce then disconnects. Five args are requiredfor this functionality.
                 */
                connect(o: any, e: any, s: any, m: any, once: boolean): any;
                /**
                 * Internal. Registers this Stencil to receive
                 * mouse events.
                 *
                 */
                connectMouse(): void;
                /**
                 * Convenience method for batches of quick connects
                 * Handles are not returned and therefore cannot be
                 * disconnected until Shape destroy time
                 *
                 */
                connectMult(): void;
                /**
                 * Converts data to points.
                 *
                 * @param o
                 */
                dataToPoints(o: Object): any[];
                /**
                 * Called when the Stencil is deselected.
                 * NOTE: Calling this will not deselect the Stencil
                 * calling this just sets the style to the current
                 * theme. 'manager.Stencil' should be used for selecting
                 * and deselecting Stencils.
                 *
                 * @param useDelay Adds  slight delay before the style is set.
                 */
                deselect(useDelay: boolean): void;
                /**
                 * Destroys this Stencil
                 *
                 */
                destroy(): void;
                /**
                 * Disables Stencil so it is not selectable.
                 * Changes the color to the disabled style.
                 *
                 */
                disable(): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: Object): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: any[]): void;
                /**
                 * Internal. Unregisters this Stencil from receiving
                 * mouse events.
                 *
                 */
                disconnectMouse(): void;
                /**
                 * Enables Stencil so it is not selectable (if
                 * it was selectable to begin with). Changes the
                 * color to the current style.
                 *
                 */
                enable(): void;
                /**
                 * Exports Stencil data
                 *
                 */
                exporter(): any;
                /**
                 * Gets angle of Stencil
                 * NOTE: Only works for Lines, Arrows, Vectors and Axes
                 * (works on points, not transforms)
                 *
                 */
                getAngle(): any;
                /**
                 * Returns the coordinates of the Stencil. This is often
                 * different than the data or the points.
                 *
                 * NOTE: Won't work for paths or annotations (labels, Axes, arrow tips)
                 * They should overwrite.
                 *
                 * NOTE: Primarily used for checking for if shape is off
                 * canvas. Therefore Lines could get flipped. Use absolute
                 * to prevent this.
                 *
                 * @param absolute Keeps lines from flipping (see note).
                 */
                getBounds(absolute: boolean): Object;
                /**
                 * Get the text of the label.
                 *
                 */
                getLabel(): any;
                /**
                 * Gets radius (length) of Stencil.
                 *
                 * NOTE: Only works for Lines, Arrows and Vectors
                 * (not for Ellipse, Axes has its own version)
                 *
                 */
                getRadius(): any;
                /**
                 * Returns the current transform (position) of the Stencil's
                 * container
                 *
                 */
                getTransform(): Object;
                /**
                 * Changes style to the highlight theme.
                 *
                 */
                highlight(): void;
                /**
                 * Moves Stencil to the back of all other items
                 * on the canvas.
                 *
                 */
                moveToBack(): void;
                /**
                 * Moves Stencil to the front of all other items
                 * on the canvas.
                 *
                 */
                moveToFront(): void;
                /**
                 * Converts points to data
                 *
                 * @param p
                 */
                pointsToData(p: any[]): Object;
                /**
                 * Internal. Prevent item from being drawn/rendered less
                 * than zero on the X or Y.
                 *
                 */
                preventNegativePos(): void;
                /**
                 * Removes shape(s), typically before a re-render
                 * No args defaults to this.shape
                 * Pass in multiple args to remove multiple shapes
                 *
                 */
                remove(): void;
                /**
                 *
                 */
                removeShadow(): void;
                /**
                 * Renders the 'hit' object (the shape used for an expanded
                 * hit area and for highlighting) and the'shape' (the actual
                 * display object).
                 *
                 */
                render(): void;
                /**
                 * Called when the Stencil is selected.
                 * NOTE: Calling this will not select the Stencil
                 * calling this just sets the style to the 'selected'
                 * theme. 'manager.Stencil' should be used for selecting
                 * Stencils.
                 *
                 */
                select(): void;
                /**
                 * Setter for Stencil data; also converts
                 * data to points. See individual Stencils
                 * for specific data properties.
                 *
                 * @param data
                 */
                setData(data: Object): void;
                /**
                 * Creates and sets a label annotation for the Stencil.
                 * If Stencil contains a labelPosition method, that will
                 * be used for positioning. Otherwise
                 * dojox.drawing.util.positioning.label is used.
                 *
                 * @param text The text to set as the label.
                 */
                setLabel(text: String): void;
                /**
                 * Setter for Stencil points; also converts
                 * points to data. See individual Stencils
                 * for specific points properties.
                 *
                 * @param points
                 */
                setPoints(points: Object[]): void;
                /**
                 * Sets the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                setTransform(mx: Object): void;
                /**
                 * Moves object to a new X Y location
                 * mx is additive. So mx.dx=1 will move the stencil
                 * 1 pixel to the right from wherever it was.
                 *
                 * @param mx
                 */
                transformPoints(mx: any): void;
                /**
                 * Changes style to the current theme.
                 *
                 */
                unhighlight(): void;
                /**
                 * Stub - Fires before render occurs.
                 *
                 * @param stencil
                 */
                onBeforeRender(stencil: Object): void;
                /**
                 * Stub - fires on change of dimensional
                 * properties or a text change
                 *
                 * @param stencil
                 */
                onChangeData(stencil: Object): void;
                /**
                 * Fires when styles of shape has changed
                 *
                 * @param stencil
                 */
                onChangeStyle(stencil: Object): void;
                /**
                 *
                 * @param value
                 */
                onChangeText(value: any): void;
                /**
                 * Stub - fires before this is destroyed
                 *
                 * @param stencil
                 */
                onDelete(stencil: dojox.drawing.stencil._Base): void;
                /**
                 * Mouse event, fired on mousedown on canvas
                 *
                 * @param obj
                 */
                onDown(obj: Event): void;
                /**
                 * Mouse event, fired on mousemove while mouse
                 * is down on canvas
                 *
                 * @param obj
                 */
                onDrag(obj: Event): void;
                /**
                 * Stub - fires on change of any property,
                 * including style properties
                 *
                 * @param stencil
                 */
                onModify(stencil: Object): void;
                /**
                 * Mouse event, fired on mousemove while mouse
                 * is not down.
                 * NOTE: Not currently implemented
                 *
                 * @param obj
                 */
                onMove(obj: Event): void;
                /**
                 * Stub - Fires on creation.
                 * Drawing connects to this (once!) to be
                 * notified of drag completion. But only if it
                 * was registered as a Tool. Creating Stencil in and of
                 * itself does not register it.
                 *
                 * This should fire
                 * at the end of creation (not during drag)
                 *
                 * @param stencil
                 */
                onRender(stencil: Object): void;
                /**
                 * Called from anchor point mouse drag
                 * also called from plugins.Pan.checkBounds
                 *
                 * @param anchor
                 */
                onTransform(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Fired at the start of a transform. This would be
                 * an anchor drag or a selection.
                 *
                 * @param anchor
                 */
                onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Called from anchor point up mouse up
                 *
                 * @param anchor
                 */
                onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Mouse event, fired on mouseup
                 *
                 * @param obj
                 */
                onUp(obj: Event): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/stencil/Image.html
             *
             * Creates an dojox.gfx Image based on the data
             * provided.
             *
             * @param options
             */
            class Image extends dojox.drawing.stencil._Base {
                constructor(options: any);
                /**
                 *
                 */
                "anchorType": string;
                /**
                 *
                 */
                "baseRender": boolean;
                /**
                 *
                 */
                "drawingType": string;
                /**
                 * Whether the Stencil is enabled or not.
                 *
                 */
                "enabled": boolean;
                /**
                 * The minimum size allowed for a render. If the size
                 * is less, the shape is destroyed.
                 *
                 */
                "minimumSize": number;
                /**
                 * The data used to create the dojox.gfx Shape
                 *
                 */
                "StencilData": Object;
                /**
                 *
                 */
                "StencilPoints": any[];
                /**
                 *
                 */
                "type": string;
                /**
                 *
                 * @param args
                 */
                addShadow(args: Object): void;
                /**
                 *
                 * @param options
                 * @param create
                 */
                animate(options: any, create: any): void;
                /**
                 * Applies the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                applyTransform(mx: any): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: number): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: number): void;
                /**
                 * Convenience method for quick connects
                 * See comments below for possiblities
                 * functions can be strings
                 *
                 * @param o
                 * @param e
                 * @param s
                 * @param m
                 * @param once If true, the connection happens onlyonce then disconnects. Five args are requiredfor this functionality.
                 */
                connect(o: any, e: any, s: any, m: any, once: boolean): any;
                /**
                 * Internal. Registers this Stencil to receive
                 * mouse events.
                 *
                 */
                connectMouse(): void;
                /**
                 * Convenience method for batches of quick connects
                 * Handles are not returned and therefore cannot be
                 * disconnected until Shape destroy time
                 *
                 */
                connectMult(): void;
                /**
                 * Converts data to points.
                 *
                 * @param o
                 */
                dataToPoints(o: Object): any[];
                /**
                 * Called when the Stencil is deselected.
                 * NOTE: Calling this will not deselect the Stencil
                 * calling this just sets the style to the current
                 * theme. 'manager.Stencil' should be used for selecting
                 * and deselecting Stencils.
                 *
                 * @param useDelay Adds  slight delay before the style is set.
                 */
                deselect(useDelay: boolean): void;
                /**
                 * Destroys this Stencil
                 *
                 */
                destroy(): void;
                /**
                 * Disables Stencil so it is not selectable.
                 * Changes the color to the disabled style.
                 *
                 */
                disable(): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: Object): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: any[]): void;
                /**
                 * Internal. Unregisters this Stencil from receiving
                 * mouse events.
                 *
                 */
                disconnectMouse(): void;
                /**
                 * Enables Stencil so it is not selectable (if
                 * it was selectable to begin with). Changes the
                 * color to the current style.
                 *
                 */
                enable(): void;
                /**
                 * Exports Stencil data
                 *
                 */
                exporter(): any;
                /**
                 * Gets angle of Stencil
                 * NOTE: Only works for Lines, Arrows, Vectors and Axes
                 * (works on points, not transforms)
                 *
                 */
                getAngle(): any;
                /**
                 * Returns the coordinates of the Stencil. This is often
                 * different than the data or the points.
                 *
                 * NOTE: Won't work for paths or annotations (labels, Axes, arrow tips)
                 * They should overwrite.
                 *
                 * NOTE: Primarily used for checking for if shape is off
                 * canvas. Therefore Lines could get flipped. Use absolute
                 * to prevent this.
                 *
                 * @param absolute Keeps lines from flipping (see note).
                 */
                getBounds(absolute: boolean): Object;
                /**
                 * Internal. If no image size is passed in with the data
                 * create a dom node, insert and image, gets its dimensions
                 * record them - then destroy everything.
                 *
                 * @param render
                 */
                getImageSize(render: any): void;
                /**
                 * Get the text of the label.
                 *
                 */
                getLabel(): any;
                /**
                 * Gets radius (length) of Stencil.
                 *
                 * NOTE: Only works for Lines, Arrows and Vectors
                 * (not for Ellipse, Axes has its own version)
                 *
                 */
                getRadius(): any;
                /**
                 * Returns the current transform (position) of the Stencil's
                 * container
                 *
                 */
                getTransform(): Object;
                /**
                 * Changes style to the highlight theme.
                 *
                 */
                highlight(): void;
                /**
                 * Moves Stencil to the back of all other items
                 * on the canvas.
                 *
                 */
                moveToBack(): void;
                /**
                 * Moves Stencil to the front of all other items
                 * on the canvas.
                 *
                 */
                moveToFront(): void;
                /**
                 * Converts points to data
                 *
                 * @param p
                 */
                pointsToData(p: any[]): Object;
                /**
                 * Internal. Prevent item from being drawn/rendered less
                 * than zero on the X or Y.
                 *
                 */
                preventNegativePos(): void;
                /**
                 * Removes shape(s), typically before a re-render
                 * No args defaults to this.shape
                 * Pass in multiple args to remove multiple shapes
                 *
                 */
                remove(): void;
                /**
                 *
                 */
                removeShadow(): void;
                /**
                 * Renders the 'hit' object (the shape used for an expanded
                 * hit area and for highlighting) and the'shape' (the actual
                 * display object). Image is slightly different than other
                 * implementations. Instead of calling render twice, it calls
                 * _createHilite for the 'hit'
                 *
                 * @param dbg
                 */
                render(dbg?: any): void;
                /**
                 * Called when the Stencil is selected.
                 * NOTE: Calling this will not select the Stencil
                 * calling this just sets the style to the 'selected'
                 * theme. 'manager.Stencil' should be used for selecting
                 * Stencils.
                 *
                 */
                select(): void;
                /**
                 * Setter for Stencil data; also converts
                 * data to points. See individual Stencils
                 * for specific data properties.
                 *
                 * @param data
                 */
                setData(data: Object): void;
                /**
                 * Creates and sets a label annotation for the Stencil.
                 * If Stencil contains a labelPosition method, that will
                 * be used for positioning. Otherwise
                 * dojox.drawing.util.positioning.label is used.
                 *
                 * @param text The text to set as the label.
                 */
                setLabel(text: String): void;
                /**
                 * Setter for Stencil points; also converts
                 * points to data. See individual Stencils
                 * for specific points properties.
                 *
                 * @param points
                 */
                setPoints(points: Object[]): void;
                /**
                 * Sets the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                setTransform(mx: Object): void;
                /**
                 * Moves object to a new X Y location
                 * mx is additive. So mx.dx=1 will move the stencil
                 * 1 pixel to the right from wherever it was.
                 *
                 * @param mx
                 */
                transformPoints(mx: any): void;
                /**
                 * Changes style to the current theme.
                 *
                 */
                unhighlight(): void;
                /**
                 * Stub - Fires before render occurs.
                 *
                 * @param stencil
                 */
                onBeforeRender(stencil: Object): void;
                /**
                 * Stub - fires on change of dimensional
                 * properties or a text change
                 *
                 * @param stencil
                 */
                onChangeData(stencil: Object): void;
                /**
                 * Fires when styles of shape has changed
                 *
                 * @param stencil
                 */
                onChangeStyle(stencil: Object): void;
                /**
                 *
                 * @param value
                 */
                onChangeText(value: any): void;
                /**
                 * Stub - fires before this is destroyed
                 *
                 * @param stencil
                 */
                onDelete(stencil: dojox.drawing.stencil._Base): void;
                /**
                 * Mouse event, fired on mousedown on canvas
                 *
                 * @param obj
                 */
                onDown(obj: Event): void;
                /**
                 * Mouse event, fired on mousemove while mouse
                 * is down on canvas
                 *
                 * @param obj
                 */
                onDrag(obj: Event): void;
                /**
                 * Stub - fires on change of any property,
                 * including style properties
                 *
                 * @param stencil
                 */
                onModify(stencil: Object): void;
                /**
                 * Mouse event, fired on mousemove while mouse
                 * is not down.
                 * NOTE: Not currently implemented
                 *
                 * @param obj
                 */
                onMove(obj: Event): void;
                /**
                 * Stub - Fires on creation.
                 * Drawing connects to this (once!) to be
                 * notified of drag completion. But only if it
                 * was registered as a Tool. Creating Stencil in and of
                 * itself does not register it.
                 *
                 * This should fire
                 * at the end of creation (not during drag)
                 *
                 * @param stencil
                 */
                onRender(stencil: Object): void;
                /**
                 * Called from anchor point mouse drag
                 * also called from plugins.Pan.checkBounds
                 *
                 * @param anchor
                 */
                onTransform(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Fired at the start of a transform. This would be
                 * an anchor drag or a selection.
                 *
                 * @param anchor
                 */
                onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Called from anchor point up mouse up
                 *
                 * @param anchor
                 */
                onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Mouse event, fired on mouseup
                 *
                 * @param obj
                 */
                onUp(obj: Event): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/stencil/Line.html
             *
             * Creates a dojox.gfx Line based on data or points provided.
             *
             * @param options
             */
            class Line extends dojox.drawing.stencil._Base {
                constructor(options: any);
                /**
                 *
                 */
                "anchorType": string;
                /**
                 *
                 */
                "baseRender": boolean;
                /**
                 *
                 */
                "drawingType": string;
                /**
                 * Whether the Stencil is enabled or not.
                 *
                 */
                "enabled": boolean;
                /**
                 * The minimum size allowed for a render. If the size
                 * is less, the shape is destroyed.
                 *
                 */
                "minimumSize": number;
                /**
                 * The data used to create the dojox.gfx Shape, specify
                 * x1,y1,x2,y2, or x,y,angle,radius
                 *
                 */
                "StencilData": Object;
                /**
                 *
                 */
                "StencilPoints": any[];
                /**
                 *
                 */
                "type": string;
                /**
                 *
                 * @param args
                 */
                addShadow(args: Object): void;
                /**
                 *
                 * @param options
                 * @param create
                 */
                animate(options: any, create: any): void;
                /**
                 * Applies the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                applyTransform(mx: any): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: number): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: number): void;
                /**
                 * Convenience method for quick connects
                 * See comments below for possiblities
                 * functions can be strings
                 *
                 * @param o
                 * @param e
                 * @param s
                 * @param m
                 * @param once If true, the connection happens onlyonce then disconnects. Five args are requiredfor this functionality.
                 */
                connect(o: any, e: any, s: any, m: any, once: boolean): any;
                /**
                 * Internal. Registers this Stencil to receive
                 * mouse events.
                 *
                 */
                connectMouse(): void;
                /**
                 * Convenience method for batches of quick connects
                 * Handles are not returned and therefore cannot be
                 * disconnected until Shape destroy time
                 *
                 */
                connectMult(): void;
                /**
                 * Converts data to points.
                 *
                 * @param o
                 */
                dataToPoints(o: any): any[];
                /**
                 * Called when the Stencil is deselected.
                 * NOTE: Calling this will not deselect the Stencil
                 * calling this just sets the style to the current
                 * theme. 'manager.Stencil' should be used for selecting
                 * and deselecting Stencils.
                 *
                 * @param useDelay Adds  slight delay before the style is set.
                 */
                deselect(useDelay: boolean): void;
                /**
                 * Destroys this Stencil
                 *
                 */
                destroy(): void;
                /**
                 * Disables Stencil so it is not selectable.
                 * Changes the color to the disabled style.
                 *
                 */
                disable(): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: Object): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: any[]): void;
                /**
                 * Internal. Unregisters this Stencil from receiving
                 * mouse events.
                 *
                 */
                disconnectMouse(): void;
                /**
                 * Enables Stencil so it is not selectable (if
                 * it was selectable to begin with). Changes the
                 * color to the current style.
                 *
                 */
                enable(): void;
                /**
                 * Exports Stencil data
                 *
                 */
                exporter(): any;
                /**
                 * Gets angle of Stencil
                 * NOTE: Only works for Lines, Arrows, Vectors and Axes
                 * (works on points, not transforms)
                 *
                 */
                getAngle(): any;
                /**
                 * Returns the coordinates of the Stencil. This is often
                 * different than the data or the points.
                 *
                 * NOTE: Won't work for paths or annotations (labels, Axes, arrow tips)
                 * They should overwrite.
                 *
                 * NOTE: Primarily used for checking for if shape is off
                 * canvas. Therefore Lines could get flipped. Use absolute
                 * to prevent this.
                 *
                 * @param absolute Keeps lines from flipping (see note).
                 */
                getBounds(absolute: boolean): Object;
                /**
                 * Get the text of the label.
                 *
                 */
                getLabel(): any;
                /**
                 * Gets radius (length) of Stencil.
                 *
                 * NOTE: Only works for Lines, Arrows and Vectors
                 * (not for Ellipse, Axes has its own version)
                 *
                 */
                getRadius(): any;
                /**
                 * Returns the current transform (position) of the Stencil's
                 * container
                 *
                 */
                getTransform(): Object;
                /**
                 * Changes style to the highlight theme.
                 *
                 */
                highlight(): void;
                /**
                 * Moves Stencil to the back of all other items
                 * on the canvas.
                 *
                 */
                moveToBack(): void;
                /**
                 * Moves Stencil to the front of all other items
                 * on the canvas.
                 *
                 */
                moveToFront(): void;
                /**
                 * Converts points to data
                 *
                 * @param p
                 */
                pointsToData(p: any): Object;
                /**
                 * Internal. Prevent item from being drawn/rendered less
                 * than zero on the X or Y.
                 *
                 */
                preventNegativePos(): void;
                /**
                 * Removes shape(s), typically before a re-render
                 * No args defaults to this.shape
                 * Pass in multiple args to remove multiple shapes
                 *
                 */
                remove(): void;
                /**
                 *
                 */
                removeShadow(): void;
                /**
                 * Renders the 'hit' object (the shape used for an expanded
                 * hit area and for highlighting) and the'shape' (the actual
                 * display object).
                 *
                 */
                render(): void;
                /**
                 * Called when the Stencil is selected.
                 * NOTE: Calling this will not select the Stencil
                 * calling this just sets the style to the 'selected'
                 * theme. 'manager.Stencil' should be used for selecting
                 * Stencils.
                 *
                 */
                select(): void;
                /**
                 * Setter for Stencil data; also converts
                 * data to points. See individual Stencils
                 * for specific data properties.
                 *
                 * @param data
                 */
                setData(data: Object): void;
                /**
                 * Creates and sets a label annotation for the Stencil.
                 * If Stencil contains a labelPosition method, that will
                 * be used for positioning. Otherwise
                 * dojox.drawing.util.positioning.label is used.
                 *
                 * @param text The text to set as the label.
                 */
                setLabel(text: String): void;
                /**
                 * Setter for Stencil points; also converts
                 * points to data. See individual Stencils
                 * for specific points properties.
                 *
                 * @param points
                 */
                setPoints(points: Object[]): void;
                /**
                 * Sets the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                setTransform(mx: Object): void;
                /**
                 * Moves object to a new X Y location
                 * mx is additive. So mx.dx=1 will move the stencil
                 * 1 pixel to the right from wherever it was.
                 *
                 * @param mx
                 */
                transformPoints(mx: any): void;
                /**
                 * Changes style to the current theme.
                 *
                 */
                unhighlight(): void;
                /**
                 * Stub - Fires before render occurs.
                 *
                 * @param stencil
                 */
                onBeforeRender(stencil: Object): void;
                /**
                 * Stub - fires on change of dimensional
                 * properties or a text change
                 *
                 * @param stencil
                 */
                onChangeData(stencil: Object): void;
                /**
                 * Fires when styles of shape has changed
                 *
                 * @param stencil
                 */
                onChangeStyle(stencil: Object): void;
                /**
                 *
                 * @param value
                 */
                onChangeText(value: any): void;
                /**
                 * Stub - fires before this is destroyed
                 *
                 * @param stencil
                 */
                onDelete(stencil: dojox.drawing.stencil._Base): void;
                /**
                 * Mouse event, fired on mousedown on canvas
                 *
                 * @param obj
                 */
                onDown(obj: Event): void;
                /**
                 * Mouse event, fired on mousemove while mouse
                 * is down on canvas
                 *
                 * @param obj
                 */
                onDrag(obj: Event): void;
                /**
                 * Stub - fires on change of any property,
                 * including style properties
                 *
                 * @param stencil
                 */
                onModify(stencil: Object): void;
                /**
                 * Mouse event, fired on mousemove while mouse
                 * is not down.
                 * NOTE: Not currently implemented
                 *
                 * @param obj
                 */
                onMove(obj: Event): void;
                /**
                 * Stub - Fires on creation.
                 * Drawing connects to this (once!) to be
                 * notified of drag completion. But only if it
                 * was registered as a Tool. Creating Stencil in and of
                 * itself does not register it.
                 *
                 * This should fire
                 * at the end of creation (not during drag)
                 *
                 * @param stencil
                 */
                onRender(stencil: Object): void;
                /**
                 * Called from anchor point mouse drag
                 * also called from plugins.Pan.checkBounds
                 *
                 * @param anchor
                 */
                onTransform(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Fired at the start of a transform. This would be
                 * an anchor drag or a selection.
                 *
                 * @param anchor
                 */
                onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Called from anchor point up mouse up
                 *
                 * @param anchor
                 */
                onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Mouse event, fired on mouseup
                 *
                 * @param obj
                 */
                onUp(obj: Event): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/stencil/Path.html
             *
             * Creates a dojox.gfx Path based on points provided.
             *
             * @param options
             */
            class Path extends dojox.drawing.stencil._Base {
                constructor(options: any);
                /**
                 *
                 */
                "baseRender": boolean;
                /**
                 *
                 */
                "closeColor": Object;
                /**
                 *
                 */
                "closePath": boolean;
                /**
                 *
                 */
                "closeRadius": number;
                /**
                 *
                 */
                "drawingType": string;
                /**
                 * Whether the Stencil is enabled or not.
                 *
                 */
                "enabled": boolean;
                /**
                 * The minimum size allowed for a render. If the size
                 * is less, the shape is destroyed.
                 *
                 */
                "minimumSize": number;
                /**
                 *
                 */
                "StencilData": Object;
                /**
                 *
                 */
                "StencilPoints": any[];
                /**
                 *
                 */
                "type": string;
                /**
                 *
                 * @param args
                 */
                addShadow(args: Object): void;
                /**
                 *
                 * @param options
                 * @param create
                 */
                animate(options: any, create: any): void;
                /**
                 * Applies the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                applyTransform(mx: any): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: number): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: number): void;
                /**
                 * Checks if points are close enough to indicate that
                 * path should be close. Provides a visual cue.
                 * Not actually used in stencil.path - this is used for
                 * drawable tools that extend it. Note that those tools
                 * need to remove the shape created: this.closeGuide, or
                 * add arg: remove
                 *
                 * @param firstPt
                 * @param currPt
                 * @param remove
                 */
                checkClosePoint(firstPt: Object, currPt: Object, remove: boolean): boolean;
                /**
                 * Convenience method for quick connects
                 * See comments below for possiblities
                 * functions can be strings
                 *
                 * @param o
                 * @param e
                 * @param s
                 * @param m
                 * @param once If true, the connection happens onlyonce then disconnects. Five args are requiredfor this functionality.
                 */
                connect(o: any, e: any, s: any, m: any, once: boolean): any;
                /**
                 * Internal. Registers this Stencil to receive
                 * mouse events.
                 *
                 */
                connectMouse(): void;
                /**
                 * Convenience method for batches of quick connects
                 * Handles are not returned and therefore cannot be
                 * disconnected until Shape destroy time
                 *
                 */
                connectMult(): void;
                /**
                 * Converts data to points.
                 *
                 * @param data
                 */
                dataToPoints(data: Object): void;
                /**
                 * Called when the Stencil is deselected.
                 * NOTE: Calling this will not deselect the Stencil
                 * calling this just sets the style to the current
                 * theme. 'manager.Stencil' should be used for selecting
                 * and deselecting Stencils.
                 *
                 * @param useDelay Adds  slight delay before the style is set.
                 */
                deselect(useDelay: boolean): void;
                /**
                 * Destroys this Stencil
                 *
                 */
                destroy(): void;
                /**
                 * Disables Stencil so it is not selectable.
                 * Changes the color to the disabled style.
                 *
                 */
                disable(): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: Object): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: any[]): void;
                /**
                 * Internal. Unregisters this Stencil from receiving
                 * mouse events.
                 *
                 */
                disconnectMouse(): void;
                /**
                 * Enables Stencil so it is not selectable (if
                 * it was selectable to begin with). Changes the
                 * color to the current style.
                 *
                 */
                enable(): void;
                /**
                 * Exports Stencil data
                 *
                 */
                exporter(): any;
                /**
                 * Gets angle of Stencil
                 * NOTE: Only works for Lines, Arrows, Vectors and Axes
                 * (works on points, not transforms)
                 *
                 */
                getAngle(): any;
                /**
                 * Overwriting _Base.getBounds. Not sure how absolute should
                 * work for a path.
                 *
                 * @param absolute
                 */
                getBounds(absolute: boolean): Object;
                /**
                 * Get the text of the label.
                 *
                 */
                getLabel(): any;
                /**
                 * Gets radius (length) of Stencil.
                 *
                 * NOTE: Only works for Lines, Arrows and Vectors
                 * (not for Ellipse, Axes has its own version)
                 *
                 */
                getRadius(): any;
                /**
                 * Returns the current transform (position) of the Stencil's
                 * container
                 *
                 */
                getTransform(): Object;
                /**
                 * Changes style to the highlight theme.
                 *
                 */
                highlight(): void;
                /**
                 * Moves Stencil to the back of all other items
                 * on the canvas.
                 *
                 */
                moveToBack(): void;
                /**
                 * Moves Stencil to the front of all other items
                 * on the canvas.
                 *
                 */
                moveToFront(): void;
                /**
                 * Converts points to data
                 *
                 * @param points
                 */
                pointsToData(points: any[]): void;
                /**
                 * Internal. Prevent item from being drawn/rendered less
                 * than zero on the X or Y.
                 *
                 */
                preventNegativePos(): void;
                /**
                 * Removes shape(s), typically before a re-render
                 * No args defaults to this.shape
                 * Pass in multiple args to remove multiple shapes
                 *
                 */
                remove(): void;
                /**
                 *
                 */
                removeShadow(): void;
                /**
                 * Renders the 'hit' object (the shape used for an expanded
                 * hit area and for highlighting) and the'shape' (the actual
                 * display object).
                 *
                 */
                render(): void;
                /**
                 * Called when the Stencil is selected.
                 * NOTE: Calling this will not select the Stencil
                 * calling this just sets the style to the 'selected'
                 * theme. 'manager.Stencil' should be used for selecting
                 * Stencils.
                 *
                 */
                select(): void;
                /**
                 * Setter for Stencil data; also converts
                 * data to points. See individual Stencils
                 * for specific data properties.
                 *
                 * @param data
                 */
                setData(data: Object): void;
                /**
                 * Creates and sets a label annotation for the Stencil.
                 * If Stencil contains a labelPosition method, that will
                 * be used for positioning. Otherwise
                 * dojox.drawing.util.positioning.label is used.
                 *
                 * @param text The text to set as the label.
                 */
                setLabel(text: String): void;
                /**
                 * Setter for Stencil points; also converts
                 * points to data. See individual Stencils
                 * for specific points properties.
                 *
                 * @param points
                 */
                setPoints(points: Object[]): void;
                /**
                 * Sets the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                setTransform(mx: Object): void;
                /**
                 * Moves object to a new X Y location
                 * mx is additive. So mx.dx=1 will move the stencil
                 * 1 pixel to the right from wherever it was.
                 *
                 * @param mx
                 */
                transformPoints(mx: any): void;
                /**
                 * Changes style to the current theme.
                 *
                 */
                unhighlight(): void;
                /**
                 * Stub - Fires before render occurs.
                 *
                 * @param stencil
                 */
                onBeforeRender(stencil: Object): void;
                /**
                 * Stub - fires on change of dimensional
                 * properties or a text change
                 *
                 * @param stencil
                 */
                onChangeData(stencil: Object): void;
                /**
                 * Fires when styles of shape has changed
                 *
                 * @param stencil
                 */
                onChangeStyle(stencil: Object): void;
                /**
                 *
                 * @param value
                 */
                onChangeText(value: any): void;
                /**
                 * Stub - fires before this is destroyed
                 *
                 * @param stencil
                 */
                onDelete(stencil: dojox.drawing.stencil._Base): void;
                /**
                 * Mouse event, fired on mousedown on canvas
                 *
                 * @param obj
                 */
                onDown(obj: Event): void;
                /**
                 * Mouse event, fired on mousemove while mouse
                 * is down on canvas
                 *
                 * @param obj
                 */
                onDrag(obj: Event): void;
                /**
                 * Stub - fires on change of any property,
                 * including style properties
                 *
                 * @param stencil
                 */
                onModify(stencil: Object): void;
                /**
                 * Mouse event, fired on mousemove while mouse
                 * is not down.
                 * NOTE: Not currently implemented
                 *
                 * @param obj
                 */
                onMove(obj: Event): void;
                /**
                 * Stub - Fires on creation.
                 * Drawing connects to this (once!) to be
                 * notified of drag completion. But only if it
                 * was registered as a Tool. Creating Stencil in and of
                 * itself does not register it.
                 *
                 * This should fire
                 * at the end of creation (not during drag)
                 *
                 * @param stencil
                 */
                onRender(stencil: Object): void;
                /**
                 * Called from anchor point mouse drag
                 * also called from plugins.Pan.checkBounds
                 *
                 * @param anchor
                 */
                onTransform(anchor: Object): void;
                /**
                 * Fired at the start of a transform. This would be
                 * an anchor drag or a selection.
                 *
                 * @param anchor
                 */
                onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Called from anchor point up mouse up
                 *
                 * @param anchor
                 */
                onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Mouse event, fired on mouseup
                 *
                 * @param obj
                 */
                onUp(obj: Event): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/stencil/Rect.html
             *
             * Creates a dojox.gfx rectangle based on data or points provided.
             *
             * @param options
             */
            class Rect extends dojox.drawing.stencil._Base {
                constructor(options: any);
                /**
                 *
                 */
                "anchorType": string;
                /**
                 *
                 */
                "baseRender": boolean;
                /**
                 *
                 */
                "drawingType": string;
                /**
                 * Whether the Stencil is enabled or not.
                 *
                 */
                "enabled": boolean;
                /**
                 * The minimum size allowed for a render. If the size
                 * is less, the shape is destroyed.
                 *
                 */
                "minimumSize": number;
                /**
                 *
                 */
                "type": string;
                /**
                 *
                 * @param args
                 */
                addShadow(args: Object): void;
                /**
                 *
                 * @param options
                 * @param create
                 */
                animate(options: any, create: any): void;
                /**
                 * Applies the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                applyTransform(mx: any): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: number): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: number): void;
                /**
                 * Convenience method for quick connects
                 * See comments below for possiblities
                 * functions can be strings
                 *
                 * @param o
                 * @param e
                 * @param s
                 * @param m
                 * @param once If true, the connection happens onlyonce then disconnects. Five args are requiredfor this functionality.
                 */
                connect(o: any, e: any, s: any, m: any, once: boolean): any;
                /**
                 * Internal. Registers this Stencil to receive
                 * mouse events.
                 *
                 */
                connectMouse(): void;
                /**
                 * Convenience method for batches of quick connects
                 * Handles are not returned and therefore cannot be
                 * disconnected until Shape destroy time
                 *
                 */
                connectMult(): void;
                /**
                 * Converts data to points.
                 *
                 * @param d
                 */
                dataToPoints(d: Object): any[];
                /**
                 * Called when the Stencil is deselected.
                 * NOTE: Calling this will not deselect the Stencil
                 * calling this just sets the style to the current
                 * theme. 'manager.Stencil' should be used for selecting
                 * and deselecting Stencils.
                 *
                 * @param useDelay Adds  slight delay before the style is set.
                 */
                deselect(useDelay: boolean): void;
                /**
                 * Destroys this Stencil
                 *
                 */
                destroy(): void;
                /**
                 * Disables Stencil so it is not selectable.
                 * Changes the color to the disabled style.
                 *
                 */
                disable(): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: Object): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: any[]): void;
                /**
                 * Internal. Unregisters this Stencil from receiving
                 * mouse events.
                 *
                 */
                disconnectMouse(): void;
                /**
                 * Enables Stencil so it is not selectable (if
                 * it was selectable to begin with). Changes the
                 * color to the current style.
                 *
                 */
                enable(): void;
                /**
                 * Exports Stencil data
                 *
                 */
                exporter(): any;
                /**
                 * Gets angle of Stencil
                 * NOTE: Only works for Lines, Arrows, Vectors and Axes
                 * (works on points, not transforms)
                 *
                 */
                getAngle(): any;
                /**
                 * Returns the coordinates of the Stencil. This is often
                 * different than the data or the points.
                 *
                 * NOTE: Won't work for paths or annotations (labels, Axes, arrow tips)
                 * They should overwrite.
                 *
                 * NOTE: Primarily used for checking for if shape is off
                 * canvas. Therefore Lines could get flipped. Use absolute
                 * to prevent this.
                 *
                 * @param absolute Keeps lines from flipping (see note).
                 */
                getBounds(absolute: boolean): Object;
                /**
                 * Get the text of the label.
                 *
                 */
                getLabel(): any;
                /**
                 * Gets radius (length) of Stencil.
                 *
                 * NOTE: Only works for Lines, Arrows and Vectors
                 * (not for Ellipse, Axes has its own version)
                 *
                 */
                getRadius(): any;
                /**
                 * Returns the current transform (position) of the Stencil's
                 * container
                 *
                 */
                getTransform(): Object;
                /**
                 * Changes style to the highlight theme.
                 *
                 */
                highlight(): void;
                /**
                 * Moves Stencil to the back of all other items
                 * on the canvas.
                 *
                 */
                moveToBack(): void;
                /**
                 * Moves Stencil to the front of all other items
                 * on the canvas.
                 *
                 */
                moveToFront(): void;
                /**
                 * Converts points to data
                 *
                 * @param p
                 */
                pointsToData(p: any[]): Object;
                /**
                 * Internal. Prevent item from being drawn/rendered less
                 * than zero on the X or Y.
                 *
                 */
                preventNegativePos(): void;
                /**
                 * Removes shape(s), typically before a re-render
                 * No args defaults to this.shape
                 * Pass in multiple args to remove multiple shapes
                 *
                 */
                remove(): void;
                /**
                 *
                 */
                removeShadow(): void;
                /**
                 * Renders the 'hit' object (the shape used for an expanded
                 * hit area and for highlighting) and the'shape' (the actual
                 * display object).
                 *
                 */
                render(): void;
                /**
                 * Called when the Stencil is selected.
                 * NOTE: Calling this will not select the Stencil
                 * calling this just sets the style to the 'selected'
                 * theme. 'manager.Stencil' should be used for selecting
                 * Stencils.
                 *
                 */
                select(): void;
                /**
                 * Setter for Stencil data; also converts
                 * data to points. See individual Stencils
                 * for specific data properties.
                 *
                 * @param data
                 */
                setData(data: Object): void;
                /**
                 * Creates and sets a label annotation for the Stencil.
                 * If Stencil contains a labelPosition method, that will
                 * be used for positioning. Otherwise
                 * dojox.drawing.util.positioning.label is used.
                 *
                 * @param text The text to set as the label.
                 */
                setLabel(text: String): void;
                /**
                 * Setter for Stencil points; also converts
                 * points to data. See individual Stencils
                 * for specific points properties.
                 *
                 * @param points
                 */
                setPoints(points: Object[]): void;
                /**
                 * Sets the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                setTransform(mx: Object): void;
                /**
                 * Moves object to a new X Y location
                 * mx is additive. So mx.dx=1 will move the stencil
                 * 1 pixel to the right from wherever it was.
                 *
                 * @param mx
                 */
                transformPoints(mx: any): void;
                /**
                 * Changes style to the current theme.
                 *
                 */
                unhighlight(): void;
                /**
                 * Stub - Fires before render occurs.
                 *
                 * @param stencil
                 */
                onBeforeRender(stencil: Object): void;
                /**
                 * Stub - fires on change of dimensional
                 * properties or a text change
                 *
                 * @param stencil
                 */
                onChangeData(stencil: Object): void;
                /**
                 * Fires when styles of shape has changed
                 *
                 * @param stencil
                 */
                onChangeStyle(stencil: Object): void;
                /**
                 *
                 * @param value
                 */
                onChangeText(value: any): void;
                /**
                 * Stub - fires before this is destroyed
                 *
                 * @param stencil
                 */
                onDelete(stencil: dojox.drawing.stencil._Base): void;
                /**
                 * Mouse event, fired on mousedown on canvas
                 *
                 * @param obj
                 */
                onDown(obj: Event): void;
                /**
                 * Mouse event, fired on mousemove while mouse
                 * is down on canvas
                 *
                 * @param obj
                 */
                onDrag(obj: Event): void;
                /**
                 * Stub - fires on change of any property,
                 * including style properties
                 *
                 * @param stencil
                 */
                onModify(stencil: Object): void;
                /**
                 * Mouse event, fired on mousemove while mouse
                 * is not down.
                 * NOTE: Not currently implemented
                 *
                 * @param obj
                 */
                onMove(obj: Event): void;
                /**
                 * Stub - Fires on creation.
                 * Drawing connects to this (once!) to be
                 * notified of drag completion. But only if it
                 * was registered as a Tool. Creating Stencil in and of
                 * itself does not register it.
                 *
                 * This should fire
                 * at the end of creation (not during drag)
                 *
                 * @param stencil
                 */
                onRender(stencil: Object): void;
                /**
                 * Called from anchor point mouse drag
                 * also called from plugins.Pan.checkBounds
                 *
                 * @param anchor
                 */
                onTransform(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Fired at the start of a transform. This would be
                 * an anchor drag or a selection.
                 *
                 * @param anchor
                 */
                onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Called from anchor point up mouse up
                 *
                 * @param anchor
                 */
                onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Mouse event, fired on mouseup
                 *
                 * @param obj
                 */
                onUp(obj: Event): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/stencil/Text.html
             *
             * Creates a dojox.gfx Text (SVG or VML) based on data provided.
             * There are two text classes. TextBlock extends this one and
             * adds editable functionality, discovers text width etc.
             * This class displays text only. There is no line wrapping.
             * Multiple lines can be achieved by inserting \n linebreaks
             * in the text.
             *
             * @param options
             */
            class Text extends dojox.drawing.stencil._Base {
                constructor(options: any);
                /**
                 * Text horizontal alignment.
                 * Options: start, middle, end
                 *
                 */
                "align": string;
                /**
                 *
                 */
                "anchorType": string;
                /**
                 *
                 */
                "baseRender": boolean;
                /**
                 *
                 */
                "drawingType": string;
                /**
                 * Whether the Stencil is enabled or not.
                 *
                 */
                "enabled": boolean;
                /**
                 * The minimum size allowed for a render. If the size
                 * is less, the shape is destroyed.
                 *
                 */
                "minimumSize": number;
                /**
                 * The data used to create the dojox.gfx Text
                 *
                 */
                "StencilData": Object;
                /**
                 *
                 */
                "StencilPoints": any[];
                /**
                 *
                 */
                "type": string;
                /**
                 * Text vertical alignment
                 * Options: top, middle, bottom (FIXME: bottom not supported)
                 *
                 */
                "valign": string;
                /**
                 *
                 * @param args
                 */
                addShadow(args: Object): void;
                /**
                 *
                 * @param options
                 * @param create
                 */
                animate(options: any, create: any): void;
                /**
                 * Applies the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                applyTransform(mx: any): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: number): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: number): void;
                /**
                 * Convenience method for quick connects
                 * See comments below for possiblities
                 * functions can be strings
                 *
                 * @param o
                 * @param e
                 * @param s
                 * @param m
                 * @param once If true, the connection happens onlyonce then disconnects. Five args are requiredfor this functionality.
                 */
                connect(o: any, e: any, s: any, m: any, once: boolean): any;
                /**
                 * Internal. Registers this Stencil to receive
                 * mouse events.
                 *
                 */
                connectMouse(): void;
                /**
                 * Convenience method for batches of quick connects
                 * Handles are not returned and therefore cannot be
                 * disconnected until Shape destroy time
                 *
                 */
                connectMult(): void;
                /**
                 * Converts data to points.
                 *
                 * @param o
                 */
                dataToPoints(o: Object): any[];
                /**
                 * Called when the Stencil is deselected.
                 * NOTE: Calling this will not deselect the Stencil
                 * calling this just sets the style to the current
                 * theme. 'manager.Stencil' should be used for selecting
                 * and deselecting Stencils.
                 *
                 * @param useDelay Adds  slight delay before the style is set.
                 */
                deselect(useDelay: boolean): void;
                /**
                 * Destroys this Stencil
                 *
                 */
                destroy(): void;
                /**
                 * Disables Stencil so it is not selectable.
                 * Changes the color to the disabled style.
                 *
                 */
                disable(): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: Object): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: any[]): void;
                /**
                 * Internal. Unregisters this Stencil from receiving
                 * mouse events.
                 *
                 */
                disconnectMouse(): void;
                /**
                 * Enables Stencil so it is not selectable (if
                 * it was selectable to begin with). Changes the
                 * color to the current style.
                 *
                 */
                enable(): void;
                /**
                 * Exports Stencil data
                 *
                 */
                exporter(): any;
                /**
                 * Gets angle of Stencil
                 * NOTE: Only works for Lines, Arrows, Vectors and Axes
                 * (works on points, not transforms)
                 *
                 */
                getAngle(): any;
                /**
                 * Returns the coordinates of the Stencil. This is often
                 * different than the data or the points.
                 *
                 * NOTE: Won't work for paths or annotations (labels, Axes, arrow tips)
                 * They should overwrite.
                 *
                 * NOTE: Primarily used for checking for if shape is off
                 * canvas. Therefore Lines could get flipped. Use absolute
                 * to prevent this.
                 *
                 * @param absolute Keeps lines from flipping (see note).
                 */
                getBounds(absolute: boolean): Object;
                /**
                 * Get the text of the label.
                 *
                 */
                getLabel(): any;
                /**
                 * Gets radius (length) of Stencil.
                 *
                 * NOTE: Only works for Lines, Arrows and Vectors
                 * (not for Ellipse, Axes has its own version)
                 *
                 */
                getRadius(): any;
                /**
                 * Getter for text.
                 *
                 */
                getText(): any;
                /**
                 * Returns the current transform (position) of the Stencil's
                 * container
                 *
                 */
                getTransform(): Object;
                /**
                 * Changes style to the highlight theme.
                 *
                 */
                highlight(): void;
                /**
                 *
                 * @param text
                 * @param w
                 */
                makeFit(text: any, w: any): Object;
                /**
                 * Moves Stencil to the back of all other items
                 * on the canvas.
                 *
                 */
                moveToBack(): void;
                /**
                 * Moves Stencil to the front of all other items
                 * on the canvas.
                 *
                 */
                moveToFront(): void;
                /**
                 * Converts points to data
                 *
                 * @param p
                 */
                pointsToData(p: any[]): Object;
                /**
                 * Internal. Prevent item from being drawn/rendered less
                 * than zero on the X or Y.
                 *
                 */
                preventNegativePos(): void;
                /**
                 * Removes shape(s), typically before a re-render
                 * No args defaults to this.shape
                 * Pass in multiple args to remove multiple shapes
                 *
                 */
                remove(): void;
                /**
                 *
                 */
                removeShadow(): void;
                /**
                 * Renders the 'hit' object (the shape used for an expanded
                 * hit area and for highlighting) and the'shape' (the actual
                 * display object). Text is slightly different than other
                 * implementations. Instead of calling render twice, it calls
                 * _createHilite for the 'hit'
                 *
                 * @param text Changes text if sent. Be sure to use the setText andnot to call this directly.
                 */
                render(text?: String): void;
                /**
                 * Called when the Stencil is selected.
                 * NOTE: Calling this will not select the Stencil
                 * calling this just sets the style to the 'selected'
                 * theme. 'manager.Stencil' should be used for selecting
                 * Stencils.
                 *
                 */
                select(): void;
                /**
                 * Setter for Stencil data; also converts
                 * data to points. See individual Stencils
                 * for specific data properties.
                 *
                 * @param data
                 */
                setData(data: Object): void;
                /**
                 * Creates and sets a label annotation for the Stencil.
                 * If Stencil contains a labelPosition method, that will
                 * be used for positioning. Otherwise
                 * dojox.drawing.util.positioning.label is used.
                 *
                 * @param text The text to set as the label.
                 */
                setLabel(text: String): void;
                /**
                 * Setter for Stencil points; also converts
                 * points to data. See individual Stencils
                 * for specific points properties.
                 *
                 * @param points
                 */
                setPoints(points: Object[]): void;
                /**
                 * Setter for text.
                 *
                 * @param text
                 */
                setText(text: any): void;
                /**
                 * Sets the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                setTransform(mx: Object): void;
                /**
                 * Moves object to a new X Y location
                 * mx is additive. So mx.dx=1 will move the stencil
                 * 1 pixel to the right from wherever it was.
                 *
                 * @param mx
                 */
                transformPoints(mx: any): void;
                /**
                 * Register raw text, returning typeset form.
                 * Uses function dojox.drawing.stencil.Text.typeset
                 * for typesetting, if it exists.
                 *
                 * @param text
                 */
                typesetter(text: any): any;
                /**
                 * Changes style to the current theme.
                 *
                 */
                unhighlight(): void;
                /**
                 * Stub - Fires before render occurs.
                 *
                 * @param stencil
                 */
                onBeforeRender(stencil: Object): void;
                /**
                 * Stub - fires on change of dimensional
                 * properties or a text change
                 *
                 * @param stencil
                 */
                onChangeData(stencil: Object): void;
                /**
                 * Fires when styles of shape has changed
                 *
                 * @param stencil
                 */
                onChangeStyle(stencil: Object): void;
                /**
                 *
                 * @param value
                 */
                onChangeText(value: any): void;
                /**
                 * Stub - fires before this is destroyed
                 *
                 * @param stencil
                 */
                onDelete(stencil: dojox.drawing.stencil._Base): void;
                /**
                 * Mouse event, fired on mousedown on canvas
                 *
                 * @param obj
                 */
                onDown(obj: Event): void;
                /**
                 * Mouse event, fired on mousemove while mouse
                 * is down on canvas
                 *
                 * @param obj
                 */
                onDrag(obj: Event): void;
                /**
                 * Stub - fires on change of any property,
                 * including style properties
                 *
                 * @param stencil
                 */
                onModify(stencil: Object): void;
                /**
                 * Mouse event, fired on mousemove while mouse
                 * is not down.
                 * NOTE: Not currently implemented
                 *
                 * @param obj
                 */
                onMove(obj: Event): void;
                /**
                 * Stub - Fires on creation.
                 * Drawing connects to this (once!) to be
                 * notified of drag completion. But only if it
                 * was registered as a Tool. Creating Stencil in and of
                 * itself does not register it.
                 *
                 * This should fire
                 * at the end of creation (not during drag)
                 *
                 * @param stencil
                 */
                onRender(stencil: Object): void;
                /**
                 * Called from anchor point mouse drag
                 * also called from plugins.Pan.checkBounds
                 *
                 * @param anchor
                 */
                onTransform(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Fired at the start of a transform. This would be
                 * an anchor drag or a selection.
                 *
                 * @param anchor
                 */
                onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Called from anchor point up mouse up
                 *
                 * @param anchor
                 */
                onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Mouse event, fired on mouseup
                 *
                 * @param obj
                 */
                onUp(obj: Event): void;
            }
        }

        namespace tools {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/tools/Arrow.html
             *
             * Extends stencil.Line and adds an arrow head
             * to the end and or start.
             *
             * @param options
             */
            class Arrow extends dojox.drawing.tools.Line {
                constructor(options: any);
                /**
                 *
                 */
                "anchorType": string;
                /**
                 * Whether or not to place an arrow on end.
                 *
                 */
                "arrowEnd": boolean;
                /**
                 * Whether or not to place an arrow on start.
                 *
                 */
                "arrowStart": boolean;
                /**
                 *
                 */
                "baseRender": boolean;
                /**
                 *
                 */
                "drawingType": string;
                /**
                 *
                 */
                "draws": boolean;
                /**
                 * Whether the Stencil is enabled or not.
                 *
                 */
                "enabled": boolean;
                /**
                 * The minimum size allowed for a render. If the size
                 * is less, the shape is destroyed.
                 *
                 */
                "minimumSize": number;
                /**
                 *
                 */
                "setup": Object;
                /**
                 *
                 */
                "showAngle": boolean;
                /**
                 * The data used to create the dojox.gfx Shape, specify
                 * x1,y1,x2,y2, or x,y,angle,radius
                 *
                 */
                "StencilData": Object;
                /**
                 *
                 */
                "StencilPoints": any[];
                /**
                 *
                 */
                "type": string;
                /**
                 *
                 * @param args
                 */
                addShadow(args: Object): void;
                /**
                 *
                 * @param options
                 * @param create
                 */
                animate(options: any, create: any): void;
                /**
                 * Applies the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                applyTransform(mx: any): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: number): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: number): void;
                /**
                 * Convenience method for quick connects
                 * See comments below for possiblities
                 * functions can be strings
                 *
                 * @param o
                 * @param e
                 * @param s
                 * @param m
                 * @param once If true, the connection happens onlyonce then disconnects. Five args are requiredfor this functionality.
                 */
                connect(o: any, e: any, s: any, m: any, once: boolean): any;
                /**
                 * Internal. Registers this Stencil to receive
                 * mouse events.
                 *
                 */
                connectMouse(): void;
                /**
                 * Convenience method for batches of quick connects
                 * Handles are not returned and therefore cannot be
                 * disconnected until Shape destroy time
                 *
                 */
                connectMult(): void;
                /**
                 * Converts data to points.
                 *
                 * @param o
                 */
                dataToPoints(o: any): any[];
                /**
                 * Called when the Stencil is deselected.
                 * NOTE: Calling this will not deselect the Stencil
                 * calling this just sets the style to the current
                 * theme. 'manager.Stencil' should be used for selecting
                 * and deselecting Stencils.
                 *
                 * @param useDelay Adds  slight delay before the style is set.
                 */
                deselect(useDelay: boolean): void;
                /**
                 * Destroys this Stencil
                 *
                 */
                destroy(): void;
                /**
                 * Disables Stencil so it is not selectable.
                 * Changes the color to the disabled style.
                 *
                 */
                disable(): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: Object): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: any[]): void;
                /**
                 * Internal. Unregisters this Stencil from receiving
                 * mouse events.
                 *
                 */
                disconnectMouse(): void;
                /**
                 * Enables Stencil so it is not selectable (if
                 * it was selectable to begin with). Changes the
                 * color to the current style.
                 *
                 */
                enable(): void;
                /**
                 * Exports Stencil data
                 *
                 */
                exporter(): any;
                /**
                 * Gets angle of Stencil
                 * NOTE: Only works for Lines, Arrows, Vectors and Axes
                 * (works on points, not transforms)
                 *
                 */
                getAngle(): any;
                /**
                 * Returns the coordinates of the Stencil. This is often
                 * different than the data or the points.
                 *
                 * NOTE: Won't work for paths or annotations (labels, Axes, arrow tips)
                 * They should overwrite.
                 *
                 * NOTE: Primarily used for checking for if shape is off
                 * canvas. Therefore Lines could get flipped. Use absolute
                 * to prevent this.
                 *
                 * @param absolute Keeps lines from flipping (see note).
                 */
                getBounds(absolute: boolean): Object;
                /**
                 * Get the text of the label.
                 *
                 */
                getLabel(): any;
                /**
                 * Gets radius (length) of Stencil.
                 *
                 * NOTE: Only works for Lines, Arrows and Vectors
                 * (not for Ellipse, Axes has its own version)
                 *
                 */
                getRadius(): any;
                /**
                 * Returns the current transform (position) of the Stencil's
                 * container
                 *
                 */
                getTransform(): Object;
                /**
                 * Changes style to the highlight theme.
                 *
                 */
                highlight(): void;
                /**
                 * The custom position used for the label
                 *
                 */
                labelPosition(): Object;
                /**
                 * Moves Stencil to the back of all other items
                 * on the canvas.
                 *
                 */
                moveToBack(): void;
                /**
                 * Moves Stencil to the front of all other items
                 * on the canvas.
                 *
                 */
                moveToFront(): void;
                /**
                 * Converts points to data
                 *
                 * @param p
                 */
                pointsToData(p: any): Object;
                /**
                 * Internal. Prevent item from being drawn/rendered less
                 * than zero on the X or Y.
                 *
                 */
                preventNegativePos(): void;
                /**
                 * Removes shape(s), typically before a re-render
                 * No args defaults to this.shape
                 * Pass in multiple args to remove multiple shapes
                 *
                 */
                remove(): void;
                /**
                 *
                 */
                removeShadow(): void;
                /**
                 * Renders the 'hit' object (the shape used for an expanded
                 * hit area and for highlighting) and the'shape' (the actual
                 * display object).
                 *
                 */
                render(): void;
                /**
                 * Called when the Stencil is selected.
                 * NOTE: Calling this will not select the Stencil
                 * calling this just sets the style to the 'selected'
                 * theme. 'manager.Stencil' should be used for selecting
                 * Stencils.
                 *
                 */
                select(): void;
                /**
                 * Setter for Stencil data; also converts
                 * data to points. See individual Stencils
                 * for specific data properties.
                 *
                 * @param data
                 */
                setData(data: Object): void;
                /**
                 * Creates and sets a label annotation for the Stencil.
                 * If Stencil contains a labelPosition method, that will
                 * be used for positioning. Otherwise
                 * dojox.drawing.util.positioning.label is used.
                 *
                 * @param text The text to set as the label.
                 */
                setLabel(text: String): void;
                /**
                 * Setter for Stencil points; also converts
                 * points to data. See individual Stencils
                 * for specific points properties.
                 *
                 * @param points
                 */
                setPoints(points: Object[]): void;
                /**
                 * Sets the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                setTransform(mx: Object): void;
                /**
                 * Moves object to a new X Y location
                 * mx is additive. So mx.dx=1 will move the stencil
                 * 1 pixel to the right from wherever it was.
                 *
                 * @param mx
                 */
                transformPoints(mx: any): void;
                /**
                 * Changes style to the current theme.
                 *
                 */
                unhighlight(): void;
                /**
                 * Stub - Fires before render occurs.
                 *
                 * @param stencil
                 */
                onBeforeRender(stencil: Object): void;
                /**
                 * Stub - fires on change of dimensional
                 * properties or a text change
                 *
                 * @param stencil
                 */
                onChangeData(stencil: Object): void;
                /**
                 * Fires when styles of shape has changed
                 *
                 * @param stencil
                 */
                onChangeStyle(stencil: Object): void;
                /**
                 *
                 * @param value
                 */
                onChangeText(value: any): void;
                /**
                 * Stub - fires before this is destroyed
                 *
                 * @param stencil
                 */
                onDelete(stencil: dojox.drawing.stencil._Base): void;
                /**
                 * Mouse event, fired on mousedown on canvas
                 *
                 * @param obj
                 */
                onDown(obj: Event): void;
                /**
                 *
                 * @param obj
                 */
                onDrag(obj: Event): void;
                /**
                 * Stub - fires on change of any property,
                 * including style properties
                 *
                 * @param stencil
                 */
                onModify(stencil: Object): void;
                /**
                 * Mouse event, fired on mousemove while mouse
                 * is not down.
                 * NOTE: Not currently implemented
                 *
                 * @param obj
                 */
                onMove(obj: Event): void;
                /**
                 * Stub - Fires on creation.
                 * Drawing connects to this (once!) to be
                 * notified of drag completion. But only if it
                 * was registered as a Tool. Creating Stencil in and of
                 * itself does not register it.
                 *
                 * This should fire
                 * at the end of creation (not during drag)
                 *
                 * @param stencil
                 */
                onRender(stencil: Object): void;
                /**
                 * Called from anchor point mouse drag
                 * also called from plugins.Pan.checkBounds
                 *
                 * @param anchor
                 */
                onTransform(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Fired at the start of a transform. This would be
                 * an anchor drag or a selection.
                 *
                 * @param anchor
                 */
                onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 *
                 * @param anchor
                 */
                onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 *
                 * @param obj
                 */
                onUp(obj: Event): void;
            }
            namespace Arrow {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/tools/Arrow.setup.html
                 *
                 *
                 */
                interface setup {
                    /**
                     *
                     */
                    iconClass: string;
                    /**
                     *
                     */
                    name: string;
                    /**
                     *
                     */
                    tooltip: string;
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/tools/Ellipse.html
             *
             * A drawable Ellipse.
             *
             */
            class Ellipse extends dojox.drawing.stencil.Ellipse {
                constructor();
                /**
                 *
                 */
                "anchorType": string;
                /**
                 *
                 */
                "baseRender": boolean;
                /**
                 *
                 */
                "drawingType": string;
                /**
                 *
                 */
                "draws": boolean;
                /**
                 * Whether the Stencil is enabled or not.
                 *
                 */
                "enabled": boolean;
                /**
                 * The minimum size allowed for a render. If the size
                 * is less, the shape is destroyed.
                 *
                 */
                "minimumSize": number;
                /**
                 *
                 */
                "setup": Object;
                /**
                 *
                 */
                "type": string;
                /**
                 *
                 * @param args
                 */
                addShadow(args: Object): void;
                /**
                 *
                 * @param options
                 * @param create
                 */
                animate(options: any, create: any): void;
                /**
                 * Applies the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                applyTransform(mx: any): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: number): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: number): void;
                /**
                 * Convenience method for quick connects
                 * See comments below for possiblities
                 * functions can be strings
                 *
                 * @param o
                 * @param e
                 * @param s
                 * @param m
                 * @param once If true, the connection happens onlyonce then disconnects. Five args are requiredfor this functionality.
                 */
                connect(o: any, e: any, s: any, m: any, once: boolean): any;
                /**
                 * Internal. Registers this Stencil to receive
                 * mouse events.
                 *
                 */
                connectMouse(): void;
                /**
                 * Convenience method for batches of quick connects
                 * Handles are not returned and therefore cannot be
                 * disconnected until Shape destroy time
                 *
                 */
                connectMult(): void;
                /**
                 * Converts data to points.
                 *
                 * @param o
                 */
                dataToPoints(o: Object): any[];
                /**
                 * Called when the Stencil is deselected.
                 * NOTE: Calling this will not deselect the Stencil
                 * calling this just sets the style to the current
                 * theme. 'manager.Stencil' should be used for selecting
                 * and deselecting Stencils.
                 *
                 * @param useDelay Adds  slight delay before the style is set.
                 */
                deselect(useDelay: boolean): void;
                /**
                 * Destroys this Stencil
                 *
                 */
                destroy(): void;
                /**
                 * Disables Stencil so it is not selectable.
                 * Changes the color to the disabled style.
                 *
                 */
                disable(): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: Object): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: any[]): void;
                /**
                 * Internal. Unregisters this Stencil from receiving
                 * mouse events.
                 *
                 */
                disconnectMouse(): void;
                /**
                 * Enables Stencil so it is not selectable (if
                 * it was selectable to begin with). Changes the
                 * color to the current style.
                 *
                 */
                enable(): void;
                /**
                 * Exports Stencil data
                 *
                 */
                exporter(): any;
                /**
                 * Gets angle of Stencil
                 * NOTE: Only works for Lines, Arrows, Vectors and Axes
                 * (works on points, not transforms)
                 *
                 */
                getAngle(): any;
                /**
                 * Returns the coordinates of the Stencil. This is often
                 * different than the data or the points.
                 *
                 * NOTE: Won't work for paths or annotations (labels, Axes, arrow tips)
                 * They should overwrite.
                 *
                 * NOTE: Primarily used for checking for if shape is off
                 * canvas. Therefore Lines could get flipped. Use absolute
                 * to prevent this.
                 *
                 * @param absolute Keeps lines from flipping (see note).
                 */
                getBounds(absolute: boolean): Object;
                /**
                 * Get the text of the label.
                 *
                 */
                getLabel(): any;
                /**
                 * Gets radius (length) of Stencil.
                 *
                 * NOTE: Only works for Lines, Arrows and Vectors
                 * (not for Ellipse, Axes has its own version)
                 *
                 */
                getRadius(): any;
                /**
                 * Returns the current transform (position) of the Stencil's
                 * container
                 *
                 */
                getTransform(): Object;
                /**
                 * Changes style to the highlight theme.
                 *
                 */
                highlight(): void;
                /**
                 * Moves Stencil to the back of all other items
                 * on the canvas.
                 *
                 */
                moveToBack(): void;
                /**
                 * Moves Stencil to the front of all other items
                 * on the canvas.
                 *
                 */
                moveToFront(): void;
                /**
                 * Converts points to data
                 *
                 * @param p
                 */
                pointsToData(p: any[]): Object;
                /**
                 * Internal. Prevent item from being drawn/rendered less
                 * than zero on the X or Y.
                 *
                 */
                preventNegativePos(): void;
                /**
                 * Removes shape(s), typically before a re-render
                 * No args defaults to this.shape
                 * Pass in multiple args to remove multiple shapes
                 *
                 */
                remove(): void;
                /**
                 *
                 */
                removeShadow(): void;
                /**
                 * Renders the 'hit' object (the shape used for an expanded
                 * hit area and for highlighting) and the'shape' (the actual
                 * display object).
                 *
                 */
                render(): void;
                /**
                 * Called when the Stencil is selected.
                 * NOTE: Calling this will not select the Stencil
                 * calling this just sets the style to the 'selected'
                 * theme. 'manager.Stencil' should be used for selecting
                 * Stencils.
                 *
                 */
                select(): void;
                /**
                 * Setter for Stencil data; also converts
                 * data to points. See individual Stencils
                 * for specific data properties.
                 *
                 * @param data
                 */
                setData(data: Object): void;
                /**
                 * Creates and sets a label annotation for the Stencil.
                 * If Stencil contains a labelPosition method, that will
                 * be used for positioning. Otherwise
                 * dojox.drawing.util.positioning.label is used.
                 *
                 * @param text The text to set as the label.
                 */
                setLabel(text: String): void;
                /**
                 * Setter for Stencil points; also converts
                 * points to data. See individual Stencils
                 * for specific points properties.
                 *
                 * @param points
                 */
                setPoints(points: Object[]): void;
                /**
                 * Sets the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                setTransform(mx: Object): void;
                /**
                 * Moves object to a new X Y location
                 * mx is additive. So mx.dx=1 will move the stencil
                 * 1 pixel to the right from wherever it was.
                 *
                 * @param mx
                 */
                transformPoints(mx: any): void;
                /**
                 * Changes style to the current theme.
                 *
                 */
                unhighlight(): void;
                /**
                 * Stub - Fires before render occurs.
                 *
                 * @param stencil
                 */
                onBeforeRender(stencil: Object): void;
                /**
                 * Stub - fires on change of dimensional
                 * properties or a text change
                 *
                 * @param stencil
                 */
                onChangeData(stencil: Object): void;
                /**
                 * Fires when styles of shape has changed
                 *
                 * @param stencil
                 */
                onChangeStyle(stencil: Object): void;
                /**
                 *
                 * @param value
                 */
                onChangeText(value: any): void;
                /**
                 * Stub - fires before this is destroyed
                 *
                 * @param stencil
                 */
                onDelete(stencil: dojox.drawing.stencil._Base): void;
                /**
                 * Mouse event, fired on mousedown on canvas
                 *
                 * @param obj
                 */
                onDown(obj: Event): void;
                /**
                 *
                 * @param obj
                 */
                onDrag(obj: Event): void;
                /**
                 * Stub - fires on change of any property,
                 * including style properties
                 *
                 * @param stencil
                 */
                onModify(stencil: Object): void;
                /**
                 * Mouse event, fired on mousemove while mouse
                 * is not down.
                 * NOTE: Not currently implemented
                 *
                 * @param obj
                 */
                onMove(obj: Event): void;
                /**
                 * Stub - Fires on creation.
                 * Drawing connects to this (once!) to be
                 * notified of drag completion. But only if it
                 * was registered as a Tool. Creating Stencil in and of
                 * itself does not register it.
                 *
                 * This should fire
                 * at the end of creation (not during drag)
                 *
                 * @param stencil
                 */
                onRender(stencil: Object): void;
                /**
                 * Called from anchor point mouse drag
                 * also called from plugins.Pan.checkBounds
                 *
                 * @param anchor
                 */
                onTransform(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Fired at the start of a transform. This would be
                 * an anchor drag or a selection.
                 *
                 * @param anchor
                 */
                onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Called from anchor point up mouse up
                 *
                 * @param anchor
                 */
                onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 *
                 * @param obj
                 */
                onUp(obj: Event): void;
            }
            namespace Ellipse {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/tools/Ellipse.setup.html
                 *
                 *
                 */
                interface setup {
                    /**
                     *
                     */
                    iconClass: string;
                    /**
                     *
                     */
                    name: string;
                    /**
                     *
                     */
                    tooltip: string;
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/tools/Line.html
             *
             * Class for a drawable Line
             *
             */
            class Line extends dojox.drawing.stencil.Line {
                constructor();
                /**
                 *
                 */
                "anchorType": string;
                /**
                 *
                 */
                "baseRender": boolean;
                /**
                 *
                 */
                "drawingType": string;
                /**
                 *
                 */
                "draws": boolean;
                /**
                 * Whether the Stencil is enabled or not.
                 *
                 */
                "enabled": boolean;
                /**
                 * The minimum size allowed for a render. If the size
                 * is less, the shape is destroyed.
                 *
                 */
                "minimumSize": number;
                /**
                 *
                 */
                "setup": Object;
                /**
                 *
                 */
                "showAngle": boolean;
                /**
                 * The data used to create the dojox.gfx Shape, specify
                 * x1,y1,x2,y2, or x,y,angle,radius
                 *
                 */
                "StencilData": Object;
                /**
                 *
                 */
                "StencilPoints": any[];
                /**
                 *
                 */
                "type": string;
                /**
                 *
                 * @param args
                 */
                addShadow(args: Object): void;
                /**
                 *
                 * @param options
                 * @param create
                 */
                animate(options: any, create: any): void;
                /**
                 * Applies the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                applyTransform(mx: any): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: number): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: number): void;
                /**
                 * Convenience method for quick connects
                 * See comments below for possiblities
                 * functions can be strings
                 *
                 * @param o
                 * @param e
                 * @param s
                 * @param m
                 * @param once If true, the connection happens onlyonce then disconnects. Five args are requiredfor this functionality.
                 */
                connect(o: any, e: any, s: any, m: any, once: boolean): any;
                /**
                 * Internal. Registers this Stencil to receive
                 * mouse events.
                 *
                 */
                connectMouse(): void;
                /**
                 * Convenience method for batches of quick connects
                 * Handles are not returned and therefore cannot be
                 * disconnected until Shape destroy time
                 *
                 */
                connectMult(): void;
                /**
                 * Converts data to points.
                 *
                 * @param o
                 */
                dataToPoints(o: any): any[];
                /**
                 * Called when the Stencil is deselected.
                 * NOTE: Calling this will not deselect the Stencil
                 * calling this just sets the style to the current
                 * theme. 'manager.Stencil' should be used for selecting
                 * and deselecting Stencils.
                 *
                 * @param useDelay Adds  slight delay before the style is set.
                 */
                deselect(useDelay: boolean): void;
                /**
                 * Destroys this Stencil
                 *
                 */
                destroy(): void;
                /**
                 * Disables Stencil so it is not selectable.
                 * Changes the color to the disabled style.
                 *
                 */
                disable(): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: Object): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: any[]): void;
                /**
                 * Internal. Unregisters this Stencil from receiving
                 * mouse events.
                 *
                 */
                disconnectMouse(): void;
                /**
                 * Enables Stencil so it is not selectable (if
                 * it was selectable to begin with). Changes the
                 * color to the current style.
                 *
                 */
                enable(): void;
                /**
                 * Exports Stencil data
                 *
                 */
                exporter(): any;
                /**
                 * Gets angle of Stencil
                 * NOTE: Only works for Lines, Arrows, Vectors and Axes
                 * (works on points, not transforms)
                 *
                 */
                getAngle(): any;
                /**
                 * Returns the coordinates of the Stencil. This is often
                 * different than the data or the points.
                 *
                 * NOTE: Won't work for paths or annotations (labels, Axes, arrow tips)
                 * They should overwrite.
                 *
                 * NOTE: Primarily used for checking for if shape is off
                 * canvas. Therefore Lines could get flipped. Use absolute
                 * to prevent this.
                 *
                 * @param absolute Keeps lines from flipping (see note).
                 */
                getBounds(absolute: boolean): Object;
                /**
                 * Get the text of the label.
                 *
                 */
                getLabel(): any;
                /**
                 * Gets radius (length) of Stencil.
                 *
                 * NOTE: Only works for Lines, Arrows and Vectors
                 * (not for Ellipse, Axes has its own version)
                 *
                 */
                getRadius(): any;
                /**
                 * Returns the current transform (position) of the Stencil's
                 * container
                 *
                 */
                getTransform(): Object;
                /**
                 * Changes style to the highlight theme.
                 *
                 */
                highlight(): void;
                /**
                 * Moves Stencil to the back of all other items
                 * on the canvas.
                 *
                 */
                moveToBack(): void;
                /**
                 * Moves Stencil to the front of all other items
                 * on the canvas.
                 *
                 */
                moveToFront(): void;
                /**
                 * Converts points to data
                 *
                 * @param p
                 */
                pointsToData(p: any): Object;
                /**
                 * Internal. Prevent item from being drawn/rendered less
                 * than zero on the X or Y.
                 *
                 */
                preventNegativePos(): void;
                /**
                 * Removes shape(s), typically before a re-render
                 * No args defaults to this.shape
                 * Pass in multiple args to remove multiple shapes
                 *
                 */
                remove(): void;
                /**
                 *
                 */
                removeShadow(): void;
                /**
                 * Renders the 'hit' object (the shape used for an expanded
                 * hit area and for highlighting) and the'shape' (the actual
                 * display object).
                 *
                 */
                render(): void;
                /**
                 * Called when the Stencil is selected.
                 * NOTE: Calling this will not select the Stencil
                 * calling this just sets the style to the 'selected'
                 * theme. 'manager.Stencil' should be used for selecting
                 * Stencils.
                 *
                 */
                select(): void;
                /**
                 * Setter for Stencil data; also converts
                 * data to points. See individual Stencils
                 * for specific data properties.
                 *
                 * @param data
                 */
                setData(data: Object): void;
                /**
                 * Creates and sets a label annotation for the Stencil.
                 * If Stencil contains a labelPosition method, that will
                 * be used for positioning. Otherwise
                 * dojox.drawing.util.positioning.label is used.
                 *
                 * @param text The text to set as the label.
                 */
                setLabel(text: String): void;
                /**
                 * Setter for Stencil points; also converts
                 * points to data. See individual Stencils
                 * for specific points properties.
                 *
                 * @param points
                 */
                setPoints(points: Object[]): void;
                /**
                 * Sets the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                setTransform(mx: Object): void;
                /**
                 * Moves object to a new X Y location
                 * mx is additive. So mx.dx=1 will move the stencil
                 * 1 pixel to the right from wherever it was.
                 *
                 * @param mx
                 */
                transformPoints(mx: any): void;
                /**
                 * Changes style to the current theme.
                 *
                 */
                unhighlight(): void;
                /**
                 * Stub - Fires before render occurs.
                 *
                 * @param stencil
                 */
                onBeforeRender(stencil: Object): void;
                /**
                 * Stub - fires on change of dimensional
                 * properties or a text change
                 *
                 * @param stencil
                 */
                onChangeData(stencil: Object): void;
                /**
                 * Fires when styles of shape has changed
                 *
                 * @param stencil
                 */
                onChangeStyle(stencil: Object): void;
                /**
                 *
                 * @param value
                 */
                onChangeText(value: any): void;
                /**
                 * Stub - fires before this is destroyed
                 *
                 * @param stencil
                 */
                onDelete(stencil: dojox.drawing.stencil._Base): void;
                /**
                 * Mouse event, fired on mousedown on canvas
                 *
                 * @param obj
                 */
                onDown(obj: Event): void;
                /**
                 *
                 * @param obj
                 */
                onDrag(obj: Event): void;
                /**
                 * Stub - fires on change of any property,
                 * including style properties
                 *
                 * @param stencil
                 */
                onModify(stencil: Object): void;
                /**
                 * Mouse event, fired on mousemove while mouse
                 * is not down.
                 * NOTE: Not currently implemented
                 *
                 * @param obj
                 */
                onMove(obj: Event): void;
                /**
                 * Stub - Fires on creation.
                 * Drawing connects to this (once!) to be
                 * notified of drag completion. But only if it
                 * was registered as a Tool. Creating Stencil in and of
                 * itself does not register it.
                 *
                 * This should fire
                 * at the end of creation (not during drag)
                 *
                 * @param stencil
                 */
                onRender(stencil: Object): void;
                /**
                 * Called from anchor point mouse drag
                 * also called from plugins.Pan.checkBounds
                 *
                 * @param anchor
                 */
                onTransform(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Fired at the start of a transform. This would be
                 * an anchor drag or a selection.
                 *
                 * @param anchor
                 */
                onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 *
                 * @param anchor
                 */
                onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 *
                 * @param obj
                 */
                onUp(obj: Event): void;
            }
            namespace Line {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/tools/Line.setup.html
                 *
                 *
                 */
                interface setup {
                    /**
                     *
                     */
                    iconClass: string;
                    /**
                     *
                     */
                    name: string;
                    /**
                     *
                     */
                    tooltip: string;
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/tools/Path.html
             *
             * Class for a drawable Path
             *
             */
            class Path extends dojox.drawing.stencil.Path {
                constructor();
                /**
                 *
                 */
                "baseRender": boolean;
                /**
                 *
                 */
                "closeColor": Object;
                /**
                 *
                 */
                "closePath": boolean;
                /**
                 *
                 */
                "closeRadius": number;
                /**
                 *
                 */
                "drawingType": string;
                /**
                 *
                 */
                "draws": boolean;
                /**
                 * Whether the Stencil is enabled or not.
                 *
                 */
                "enabled": boolean;
                /**
                 * The minimum size allowed for a render. If the size
                 * is less, the shape is destroyed.
                 *
                 */
                "minimumSize": number;
                /**
                 *
                 */
                "setup": Object;
                /**
                 *
                 */
                "StencilData": Object;
                /**
                 *
                 */
                "StencilPoints": any[];
                /**
                 *
                 */
                "type": string;
                /**
                 *
                 * @param args
                 */
                addShadow(args: Object): void;
                /**
                 *
                 * @param options
                 * @param create
                 */
                animate(options: any, create: any): void;
                /**
                 * Applies the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                applyTransform(mx: any): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: number): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: number): void;
                /**
                 * Checks if points are close enough to indicate that
                 * path should be close. Provides a visual cue.
                 * Not actually used in stencil.path - this is used for
                 * drawable tools that extend it. Note that those tools
                 * need to remove the shape created: this.closeGuide, or
                 * add arg: remove
                 *
                 * @param firstPt
                 * @param currPt
                 * @param remove
                 */
                checkClosePoint(firstPt: Object, currPt: Object, remove: boolean): boolean;
                /**
                 * Convenience method for quick connects
                 * See comments below for possiblities
                 * functions can be strings
                 *
                 * @param o
                 * @param e
                 * @param s
                 * @param m
                 * @param once If true, the connection happens onlyonce then disconnects. Five args are requiredfor this functionality.
                 */
                connect(o: any, e: any, s: any, m: any, once: boolean): any;
                /**
                 * Internal. Registers this Stencil to receive
                 * mouse events.
                 *
                 */
                connectMouse(): void;
                /**
                 * Convenience method for batches of quick connects
                 * Handles are not returned and therefore cannot be
                 * disconnected until Shape destroy time
                 *
                 */
                connectMult(): void;
                /**
                 *
                 * @param obj
                 */
                createGuide(obj: any): void;
                /**
                 * Converts data to points.
                 *
                 * @param data
                 */
                dataToPoints(data: Object): void;
                /**
                 * Called when the Stencil is deselected.
                 * NOTE: Calling this will not deselect the Stencil
                 * calling this just sets the style to the current
                 * theme. 'manager.Stencil' should be used for selecting
                 * and deselecting Stencils.
                 *
                 * @param useDelay Adds  slight delay before the style is set.
                 */
                deselect(useDelay: boolean): void;
                /**
                 * Destroys this Stencil
                 *
                 */
                destroy(): void;
                /**
                 * Disables Stencil so it is not selectable.
                 * Changes the color to the disabled style.
                 *
                 */
                disable(): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: Object): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: any[]): void;
                /**
                 * Internal. Unregisters this Stencil from receiving
                 * mouse events.
                 *
                 */
                disconnectMouse(): void;
                /**
                 * Enables Stencil so it is not selectable (if
                 * it was selectable to begin with). Changes the
                 * color to the current style.
                 *
                 */
                enable(): void;
                /**
                 * Exports Stencil data
                 *
                 */
                exporter(): any;
                /**
                 * Gets angle of Stencil
                 * NOTE: Only works for Lines, Arrows, Vectors and Axes
                 * (works on points, not transforms)
                 *
                 */
                getAngle(): any;
                /**
                 * Overwriting _Base.getBounds. Not sure how absolute should
                 * work for a path.
                 *
                 * @param absolute
                 */
                getBounds(absolute: boolean): Object;
                /**
                 * Get the text of the label.
                 *
                 */
                getLabel(): any;
                /**
                 * Gets radius (length) of Stencil.
                 *
                 * NOTE: Only works for Lines, Arrows and Vectors
                 * (not for Ellipse, Axes has its own version)
                 *
                 */
                getRadius(): any;
                /**
                 * Returns the current transform (position) of the Stencil's
                 * container
                 *
                 */
                getTransform(): Object;
                /**
                 * Changes style to the highlight theme.
                 *
                 */
                highlight(): void;
                /**
                 *
                 * @param _closePath
                 */
                makeSubPath(_closePath: any): void;
                /**
                 * Moves Stencil to the back of all other items
                 * on the canvas.
                 *
                 */
                moveToBack(): void;
                /**
                 * Moves Stencil to the front of all other items
                 * on the canvas.
                 *
                 */
                moveToFront(): void;
                /**
                 * Converts points to data
                 *
                 * @param points
                 */
                pointsToData(points: any[]): void;
                /**
                 * Internal. Prevent item from being drawn/rendered less
                 * than zero on the X or Y.
                 *
                 */
                preventNegativePos(): void;
                /**
                 * Removes shape(s), typically before a re-render
                 * No args defaults to this.shape
                 * Pass in multiple args to remove multiple shapes
                 *
                 */
                remove(): void;
                /**
                 *
                 */
                removeShadow(): void;
                /**
                 * Renders the 'hit' object (the shape used for an expanded
                 * hit area and for highlighting) and the'shape' (the actual
                 * display object).
                 *
                 */
                render(): void;
                /**
                 * Called when the Stencil is selected.
                 * NOTE: Calling this will not select the Stencil
                 * calling this just sets the style to the 'selected'
                 * theme. 'manager.Stencil' should be used for selecting
                 * Stencils.
                 *
                 */
                select(): void;
                /**
                 * Setter for Stencil data; also converts
                 * data to points. See individual Stencils
                 * for specific data properties.
                 *
                 * @param data
                 */
                setData(data: Object): void;
                /**
                 * Creates and sets a label annotation for the Stencil.
                 * If Stencil contains a labelPosition method, that will
                 * be used for positioning. Otherwise
                 * dojox.drawing.util.positioning.label is used.
                 *
                 * @param text The text to set as the label.
                 */
                setLabel(text: String): void;
                /**
                 * Setter for Stencil points; also converts
                 * points to data. See individual Stencils
                 * for specific points properties.
                 *
                 * @param points
                 */
                setPoints(points: Object[]): void;
                /**
                 * Sets the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                setTransform(mx: Object): void;
                /**
                 * Moves object to a new X Y location
                 * mx is additive. So mx.dx=1 will move the stencil
                 * 1 pixel to the right from wherever it was.
                 *
                 * @param mx
                 */
                transformPoints(mx: any): void;
                /**
                 * Changes style to the current theme.
                 *
                 */
                unhighlight(): void;
                /**
                 * Stub - Fires before render occurs.
                 *
                 * @param stencil
                 */
                onBeforeRender(stencil: Object): void;
                /**
                 * Stub - fires on change of dimensional
                 * properties or a text change
                 *
                 * @param stencil
                 */
                onChangeData(stencil: Object): void;
                /**
                 * Fires when styles of shape has changed
                 *
                 * @param stencil
                 */
                onChangeStyle(stencil: Object): void;
                /**
                 *
                 * @param value
                 */
                onChangeText(value: any): void;
                /**
                 *
                 * @param _closePath
                 */
                onCompletePath(_closePath: any): void;
                /**
                 * Stub - fires before this is destroyed
                 *
                 * @param stencil
                 */
                onDelete(stencil: dojox.drawing.stencil._Base): void;
                /**
                 *
                 * @param obj
                 */
                onDown(obj: any): void;
                /**
                 *
                 * @param obj
                 */
                onDrag(obj: any): void;
                /**
                 * Stub - fires on change of any property,
                 * including style properties
                 *
                 * @param stencil
                 */
                onModify(stencil: Object): void;
                /**
                 *
                 * @param obj
                 */
                onMove(obj: any): void;
                /**
                 * Stub - Fires on creation.
                 * Drawing connects to this (once!) to be
                 * notified of drag completion. But only if it
                 * was registered as a Tool. Creating Stencil in and of
                 * itself does not register it.
                 *
                 * This should fire
                 * at the end of creation (not during drag)
                 *
                 * @param stencil
                 */
                onRender(stencil: Object): void;
                /**
                 *
                 * @param obj
                 */
                onStartPath(obj: any): void;
                /**
                 * Called from anchor point mouse drag
                 * also called from plugins.Pan.checkBounds
                 *
                 * @param anchor
                 */
                onTransform(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Fired at the start of a transform. This would be
                 * an anchor drag or a selection.
                 *
                 * @param anchor
                 */
                onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Called from anchor point up mouse up
                 *
                 * @param anchor
                 */
                onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 *
                 * @param obj
                 */
                onUp(obj: Event): void;
            }
            namespace Path {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/tools/Path.setup.html
                 *
                 *
                 */
                interface setup {
                    /**
                     *
                     */
                    iconClass: string;
                    /**
                     *
                     */
                    name: string;
                    /**
                     *
                     */
                    tooltip: string;
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/tools/Pencil.html
             *
             * Class for a drawable, continuous Path
             *
             */
            class Pencil extends dojox.drawing.stencil.Path {
                constructor();
                /**
                 *
                 */
                "baseRender": boolean;
                /**
                 *
                 */
                "closeColor": Object;
                /**
                 *
                 */
                "closePath": boolean;
                /**
                 *
                 */
                "closeRadius": number;
                /**
                 *
                 */
                "drawingType": string;
                /**
                 *
                 */
                "draws": boolean;
                /**
                 * Whether the Stencil is enabled or not.
                 *
                 */
                "enabled": boolean;
                /**
                 * The distance the mouse must travel before rendering
                 * a path segment. Lower number is a higher definition
                 * path but more points.
                 *
                 */
                "minDist": number;
                /**
                 * The minimum size allowed for a render. If the size
                 * is less, the shape is destroyed.
                 *
                 */
                "minimumSize": number;
                /**
                 *
                 */
                "setup": Object;
                /**
                 *
                 */
                "StencilData": Object;
                /**
                 *
                 */
                "StencilPoints": any[];
                /**
                 *
                 */
                "type": string;
                /**
                 *
                 * @param args
                 */
                addShadow(args: Object): void;
                /**
                 *
                 * @param options
                 * @param create
                 */
                animate(options: any, create: any): void;
                /**
                 * Applies the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                applyTransform(mx: any): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: number): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: number): void;
                /**
                 * Checks if points are close enough to indicate that
                 * path should be close. Provides a visual cue.
                 * Not actually used in stencil.path - this is used for
                 * drawable tools that extend it. Note that those tools
                 * need to remove the shape created: this.closeGuide, or
                 * add arg: remove
                 *
                 * @param firstPt
                 * @param currPt
                 * @param remove
                 */
                checkClosePoint(firstPt: Object, currPt: Object, remove: boolean): boolean;
                /**
                 * Convenience method for quick connects
                 * See comments below for possiblities
                 * functions can be strings
                 *
                 * @param o
                 * @param e
                 * @param s
                 * @param m
                 * @param once If true, the connection happens onlyonce then disconnects. Five args are requiredfor this functionality.
                 */
                connect(o: any, e: any, s: any, m: any, once: boolean): any;
                /**
                 * Internal. Registers this Stencil to receive
                 * mouse events.
                 *
                 */
                connectMouse(): void;
                /**
                 * Convenience method for batches of quick connects
                 * Handles are not returned and therefore cannot be
                 * disconnected until Shape destroy time
                 *
                 */
                connectMult(): void;
                /**
                 * Converts data to points.
                 *
                 * @param data
                 */
                dataToPoints(data: Object): void;
                /**
                 * Called when the Stencil is deselected.
                 * NOTE: Calling this will not deselect the Stencil
                 * calling this just sets the style to the current
                 * theme. 'manager.Stencil' should be used for selecting
                 * and deselecting Stencils.
                 *
                 * @param useDelay Adds  slight delay before the style is set.
                 */
                deselect(useDelay: boolean): void;
                /**
                 * Destroys this Stencil
                 *
                 */
                destroy(): void;
                /**
                 * Disables Stencil so it is not selectable.
                 * Changes the color to the disabled style.
                 *
                 */
                disable(): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: Object): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: any[]): void;
                /**
                 * Internal. Unregisters this Stencil from receiving
                 * mouse events.
                 *
                 */
                disconnectMouse(): void;
                /**
                 * Enables Stencil so it is not selectable (if
                 * it was selectable to begin with). Changes the
                 * color to the current style.
                 *
                 */
                enable(): void;
                /**
                 * Exports Stencil data
                 *
                 */
                exporter(): any;
                /**
                 * Gets angle of Stencil
                 * NOTE: Only works for Lines, Arrows, Vectors and Axes
                 * (works on points, not transforms)
                 *
                 */
                getAngle(): any;
                /**
                 * Overwriting _Base.getBounds. Not sure how absolute should
                 * work for a path.
                 *
                 * @param absolute
                 */
                getBounds(absolute: boolean): Object;
                /**
                 * Get the text of the label.
                 *
                 */
                getLabel(): any;
                /**
                 * Gets radius (length) of Stencil.
                 *
                 * NOTE: Only works for Lines, Arrows and Vectors
                 * (not for Ellipse, Axes has its own version)
                 *
                 */
                getRadius(): any;
                /**
                 * Returns the current transform (position) of the Stencil's
                 * container
                 *
                 */
                getTransform(): Object;
                /**
                 * Changes style to the highlight theme.
                 *
                 */
                highlight(): void;
                /**
                 * Moves Stencil to the back of all other items
                 * on the canvas.
                 *
                 */
                moveToBack(): void;
                /**
                 * Moves Stencil to the front of all other items
                 * on the canvas.
                 *
                 */
                moveToFront(): void;
                /**
                 * Converts points to data
                 *
                 * @param points
                 */
                pointsToData(points: any[]): void;
                /**
                 * Internal. Prevent item from being drawn/rendered less
                 * than zero on the X or Y.
                 *
                 */
                preventNegativePos(): void;
                /**
                 * Removes shape(s), typically before a re-render
                 * No args defaults to this.shape
                 * Pass in multiple args to remove multiple shapes
                 *
                 */
                remove(): void;
                /**
                 *
                 */
                removeShadow(): void;
                /**
                 * Renders the 'hit' object (the shape used for an expanded
                 * hit area and for highlighting) and the'shape' (the actual
                 * display object).
                 *
                 */
                render(): void;
                /**
                 * Called when the Stencil is selected.
                 * NOTE: Calling this will not select the Stencil
                 * calling this just sets the style to the 'selected'
                 * theme. 'manager.Stencil' should be used for selecting
                 * Stencils.
                 *
                 */
                select(): void;
                /**
                 * Setter for Stencil data; also converts
                 * data to points. See individual Stencils
                 * for specific data properties.
                 *
                 * @param data
                 */
                setData(data: Object): void;
                /**
                 * Creates and sets a label annotation for the Stencil.
                 * If Stencil contains a labelPosition method, that will
                 * be used for positioning. Otherwise
                 * dojox.drawing.util.positioning.label is used.
                 *
                 * @param text The text to set as the label.
                 */
                setLabel(text: String): void;
                /**
                 * Setter for Stencil points; also converts
                 * points to data. See individual Stencils
                 * for specific points properties.
                 *
                 * @param points
                 */
                setPoints(points: Object[]): void;
                /**
                 * Sets the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                setTransform(mx: Object): void;
                /**
                 * Moves object to a new X Y location
                 * mx is additive. So mx.dx=1 will move the stencil
                 * 1 pixel to the right from wherever it was.
                 *
                 * @param mx
                 */
                transformPoints(mx: any): void;
                /**
                 * Changes style to the current theme.
                 *
                 */
                unhighlight(): void;
                /**
                 * Stub - Fires before render occurs.
                 *
                 * @param stencil
                 */
                onBeforeRender(stencil: Object): void;
                /**
                 * Stub - fires on change of dimensional
                 * properties or a text change
                 *
                 * @param stencil
                 */
                onChangeData(stencil: Object): void;
                /**
                 * Fires when styles of shape has changed
                 *
                 * @param stencil
                 */
                onChangeStyle(stencil: Object): void;
                /**
                 *
                 * @param value
                 */
                onChangeText(value: any): void;
                /**
                 * Stub - fires before this is destroyed
                 *
                 * @param stencil
                 */
                onDelete(stencil: dojox.drawing.stencil._Base): void;
                /**
                 *
                 * @param obj
                 */
                onDown(obj: any): void;
                /**
                 *
                 * @param obj
                 */
                onDrag(obj: any): void;
                /**
                 * Stub - fires on change of any property,
                 * including style properties
                 *
                 * @param stencil
                 */
                onModify(stencil: Object): void;
                /**
                 * Mouse event, fired on mousemove while mouse
                 * is not down.
                 * NOTE: Not currently implemented
                 *
                 * @param obj
                 */
                onMove(obj: Event): void;
                /**
                 * Stub - Fires on creation.
                 * Drawing connects to this (once!) to be
                 * notified of drag completion. But only if it
                 * was registered as a Tool. Creating Stencil in and of
                 * itself does not register it.
                 *
                 * This should fire
                 * at the end of creation (not during drag)
                 *
                 * @param stencil
                 */
                onRender(stencil: Object): void;
                /**
                 * Called from anchor point mouse drag
                 * also called from plugins.Pan.checkBounds
                 *
                 * @param anchor
                 */
                onTransform(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Fired at the start of a transform. This would be
                 * an anchor drag or a selection.
                 *
                 * @param anchor
                 */
                onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Called from anchor point up mouse up
                 *
                 * @param anchor
                 */
                onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 *
                 * @param obj
                 */
                onUp(obj: any): void;
            }
            namespace Pencil {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/tools/Pencil.setup.html
                 *
                 *
                 */
                interface setup {
                    /**
                     *
                     */
                    iconClass: string;
                    /**
                     *
                     */
                    name: string;
                    /**
                     *
                     */
                    tooltip: string;
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/tools/Rect.html
             *
             * Class for a drawable rectangle
             *
             */
            class Rect extends dojox.drawing.stencil.Rect {
                constructor();
                /**
                 *
                 */
                "anchorType": string;
                /**
                 *
                 */
                "baseRender": boolean;
                /**
                 *
                 */
                "drawingType": string;
                /**
                 *
                 */
                "draws": boolean;
                /**
                 * Whether the Stencil is enabled or not.
                 *
                 */
                "enabled": boolean;
                /**
                 * The minimum size allowed for a render. If the size
                 * is less, the shape is destroyed.
                 *
                 */
                "minimumSize": number;
                /**
                 *
                 */
                "setup": Object;
                /**
                 *
                 */
                "type": string;
                /**
                 *
                 * @param args
                 */
                addShadow(args: Object): void;
                /**
                 *
                 * @param options
                 * @param create
                 */
                animate(options: any, create: any): void;
                /**
                 * Applies the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                applyTransform(mx: any): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: number): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: number): void;
                /**
                 * Convenience method for quick connects
                 * See comments below for possiblities
                 * functions can be strings
                 *
                 * @param o
                 * @param e
                 * @param s
                 * @param m
                 * @param once If true, the connection happens onlyonce then disconnects. Five args are requiredfor this functionality.
                 */
                connect(o: any, e: any, s: any, m: any, once: boolean): any;
                /**
                 * Internal. Registers this Stencil to receive
                 * mouse events.
                 *
                 */
                connectMouse(): void;
                /**
                 * Convenience method for batches of quick connects
                 * Handles are not returned and therefore cannot be
                 * disconnected until Shape destroy time
                 *
                 */
                connectMult(): void;
                /**
                 * Converts data to points.
                 *
                 * @param d
                 */
                dataToPoints(d: Object): any[];
                /**
                 * Called when the Stencil is deselected.
                 * NOTE: Calling this will not deselect the Stencil
                 * calling this just sets the style to the current
                 * theme. 'manager.Stencil' should be used for selecting
                 * and deselecting Stencils.
                 *
                 * @param useDelay Adds  slight delay before the style is set.
                 */
                deselect(useDelay: boolean): void;
                /**
                 * Destroys this Stencil
                 *
                 */
                destroy(): void;
                /**
                 * Disables Stencil so it is not selectable.
                 * Changes the color to the disabled style.
                 *
                 */
                disable(): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: Object): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: any[]): void;
                /**
                 * Internal. Unregisters this Stencil from receiving
                 * mouse events.
                 *
                 */
                disconnectMouse(): void;
                /**
                 * Enables Stencil so it is not selectable (if
                 * it was selectable to begin with). Changes the
                 * color to the current style.
                 *
                 */
                enable(): void;
                /**
                 * Exports Stencil data
                 *
                 */
                exporter(): any;
                /**
                 * Gets angle of Stencil
                 * NOTE: Only works for Lines, Arrows, Vectors and Axes
                 * (works on points, not transforms)
                 *
                 */
                getAngle(): any;
                /**
                 * Returns the coordinates of the Stencil. This is often
                 * different than the data or the points.
                 *
                 * NOTE: Won't work for paths or annotations (labels, Axes, arrow tips)
                 * They should overwrite.
                 *
                 * NOTE: Primarily used for checking for if shape is off
                 * canvas. Therefore Lines could get flipped. Use absolute
                 * to prevent this.
                 *
                 * @param absolute Keeps lines from flipping (see note).
                 */
                getBounds(absolute: boolean): Object;
                /**
                 * Get the text of the label.
                 *
                 */
                getLabel(): any;
                /**
                 * Gets radius (length) of Stencil.
                 *
                 * NOTE: Only works for Lines, Arrows and Vectors
                 * (not for Ellipse, Axes has its own version)
                 *
                 */
                getRadius(): any;
                /**
                 * Returns the current transform (position) of the Stencil's
                 * container
                 *
                 */
                getTransform(): Object;
                /**
                 * Changes style to the highlight theme.
                 *
                 */
                highlight(): void;
                /**
                 * Moves Stencil to the back of all other items
                 * on the canvas.
                 *
                 */
                moveToBack(): void;
                /**
                 * Moves Stencil to the front of all other items
                 * on the canvas.
                 *
                 */
                moveToFront(): void;
                /**
                 * Converts points to data
                 *
                 * @param p
                 */
                pointsToData(p: any[]): Object;
                /**
                 * Internal. Prevent item from being drawn/rendered less
                 * than zero on the X or Y.
                 *
                 */
                preventNegativePos(): void;
                /**
                 * Removes shape(s), typically before a re-render
                 * No args defaults to this.shape
                 * Pass in multiple args to remove multiple shapes
                 *
                 */
                remove(): void;
                /**
                 *
                 */
                removeShadow(): void;
                /**
                 * Renders the 'hit' object (the shape used for an expanded
                 * hit area and for highlighting) and the'shape' (the actual
                 * display object).
                 *
                 */
                render(): void;
                /**
                 * Called when the Stencil is selected.
                 * NOTE: Calling this will not select the Stencil
                 * calling this just sets the style to the 'selected'
                 * theme. 'manager.Stencil' should be used for selecting
                 * Stencils.
                 *
                 */
                select(): void;
                /**
                 * Setter for Stencil data; also converts
                 * data to points. See individual Stencils
                 * for specific data properties.
                 *
                 * @param data
                 */
                setData(data: Object): void;
                /**
                 * Creates and sets a label annotation for the Stencil.
                 * If Stencil contains a labelPosition method, that will
                 * be used for positioning. Otherwise
                 * dojox.drawing.util.positioning.label is used.
                 *
                 * @param text The text to set as the label.
                 */
                setLabel(text: String): void;
                /**
                 * Setter for Stencil points; also converts
                 * points to data. See individual Stencils
                 * for specific points properties.
                 *
                 * @param points
                 */
                setPoints(points: Object[]): void;
                /**
                 * Sets the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                setTransform(mx: Object): void;
                /**
                 * Moves object to a new X Y location
                 * mx is additive. So mx.dx=1 will move the stencil
                 * 1 pixel to the right from wherever it was.
                 *
                 * @param mx
                 */
                transformPoints(mx: any): void;
                /**
                 * Changes style to the current theme.
                 *
                 */
                unhighlight(): void;
                /**
                 * Stub - Fires before render occurs.
                 *
                 * @param stencil
                 */
                onBeforeRender(stencil: Object): void;
                /**
                 * Stub - fires on change of dimensional
                 * properties or a text change
                 *
                 * @param stencil
                 */
                onChangeData(stencil: Object): void;
                /**
                 * Fires when styles of shape has changed
                 *
                 * @param stencil
                 */
                onChangeStyle(stencil: Object): void;
                /**
                 *
                 * @param value
                 */
                onChangeText(value: any): void;
                /**
                 * Stub - fires before this is destroyed
                 *
                 * @param stencil
                 */
                onDelete(stencil: dojox.drawing.stencil._Base): void;
                /**
                 * Mouse event, fired on mousedown on canvas
                 *
                 * @param obj
                 */
                onDown(obj: Event): void;
                /**
                 *
                 * @param obj
                 */
                onDrag(obj: Event): void;
                /**
                 * Stub - fires on change of any property,
                 * including style properties
                 *
                 * @param stencil
                 */
                onModify(stencil: Object): void;
                /**
                 * Mouse event, fired on mousemove while mouse
                 * is not down.
                 * NOTE: Not currently implemented
                 *
                 * @param obj
                 */
                onMove(obj: Event): void;
                /**
                 * Stub - Fires on creation.
                 * Drawing connects to this (once!) to be
                 * notified of drag completion. But only if it
                 * was registered as a Tool. Creating Stencil in and of
                 * itself does not register it.
                 *
                 * This should fire
                 * at the end of creation (not during drag)
                 *
                 * @param stencil
                 */
                onRender(stencil: Object): void;
                /**
                 * Called from anchor point mouse drag
                 * also called from plugins.Pan.checkBounds
                 *
                 * @param anchor
                 */
                onTransform(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Fired at the start of a transform. This would be
                 * an anchor drag or a selection.
                 *
                 * @param anchor
                 */
                onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Called from anchor point up mouse up
                 *
                 * @param anchor
                 */
                onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 *
                 * @param obj
                 */
                onUp(obj: Event): void;
            }
            namespace Rect {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/tools/Rect.setup.html
                 *
                 *
                 */
                interface setup {
                    /**
                     *
                     */
                    iconClass: string;
                    /**
                     *
                     */
                    name: string;
                    /**
                     *
                     */
                    tooltip: string;
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/tools/TextBlock.html
             *
             * A tool to create text fields on a canvas.
             * Extends stencil.Text by adding an HTML layer that
             * can be dragged out to a certain size, and accept
             * a text entry. Will wrap text to the width of the
             * html field.
             * When created programmtically, use 'auto' to shrink
             * the width to the size of the text. Use line breaks
             * ( \n ) to create new lines.
             *
             * @param options
             */
            class TextBlock extends dojox.drawing.stencil.Text {
                constructor(options: any);
                /**
                 * Text horizontal alignment.
                 * Options: start, middle, end
                 *
                 */
                "align": string;
                /**
                 *
                 */
                "anchorType": string;
                /**
                 *
                 */
                "baseRender": boolean;
                /**
                 *
                 */
                "drawingType": string;
                /**
                 *
                 */
                "draws": boolean;
                /**
                 * Whether the Stencil is enabled or not.
                 *
                 */
                "enabled": boolean;
                /**
                 * The minimum size allowed for a render. If the size
                 * is less, the shape is destroyed.
                 *
                 */
                "minimumSize": number;
                /**
                 * Whether the Stencil is selected when the text field
                 * is executed or not
                 *
                 */
                "selectOnExec": boolean;
                /**
                 *
                 */
                "setup": Object;
                /**
                 * If true and there is no text in the data, the TextBlock
                 * Is displayed and focused and awaits input.
                 *
                 */
                "showEmpty": boolean;
                /**
                 * The data used to create the dojox.gfx Text
                 *
                 */
                "StencilData": Object;
                /**
                 *
                 */
                "StencilPoints": any[];
                /**
                 *
                 */
                "type": string;
                /**
                 * Text vertical alignment
                 * Options: top, middle, bottom (FIXME: bottom not supported)
                 *
                 */
                "valign": string;
                /**
                 *
                 * @param args
                 */
                addShadow(args: Object): void;
                /**
                 *
                 * @param options
                 * @param create
                 */
                animate(options: any, create: any): void;
                /**
                 * Applies the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                applyTransform(mx: any): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: String): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: String, value: number): void;
                /**
                 * Changes properties in the style or disabled styles,
                 * depending on whether the object is enabled.
                 * Also can be used to change most position and size props.
                 *
                 * @param key
                 * @param value               Optional
                 */
                attr(key: Object, value: number): void;
                /**
                 * Cleans text. Strings HTML chars and double spaces
                 * and optionally removes line breaks.
                 *
                 * @param txt
                 * @param removeBreaks
                 */
                cleanText(txt: String, removeBreaks: boolean): any;
                /**
                 * Convenience method for quick connects
                 * See comments below for possiblities
                 * functions can be strings
                 *
                 * @param o
                 * @param e
                 * @param s
                 * @param m
                 * @param once If true, the connection happens onlyonce then disconnects. Five args are requiredfor this functionality.
                 */
                connect(o: any, e: any, s: any, m: any, once: boolean): any;
                /**
                 * Internal. Registers this Stencil to receive
                 * mouse events.
                 *
                 */
                connectMouse(): void;
                /**
                 * Convenience method for batches of quick connects
                 * Handles are not returned and therefore cannot be
                 * disconnected until Shape destroy time
                 *
                 */
                connectMult(): void;
                /**
                 * Internal. Creates the connections to the
                 * contenteditable HTML node.
                 *
                 */
                connectTextField(): void;
                /**
                 * Internal. Creates HTML nodes at each corner
                 * of the contenteditable div. These nodes are
                 * draggable and will resize the div horizontally.
                 *
                 */
                createAnchors(): void;
                /**
                 * Internal. Inserts the contenteditable HTML node
                 * into its parent node, and styles it.
                 *
                 * @param txt
                 */
                createTextField(txt: String): any;
                /**
                 * Converts data to points.
                 *
                 * @param o
                 */
                dataToPoints(o: Object): any[];
                /**
                 * Called when the Stencil is deselected.
                 * NOTE: Calling this will not deselect the Stencil
                 * calling this just sets the style to the current
                 * theme. 'manager.Stencil' should be used for selecting
                 * and deselecting Stencils.
                 *
                 * @param useDelay Adds  slight delay before the style is set.
                 */
                deselect(useDelay: boolean): void;
                /**
                 * Destroys this Stencil
                 *
                 */
                destroy(): void;
                /**
                 * Internal. Destroys HTML anchors.
                 *
                 */
                destroyAnchors(): void;
                /**
                 * Disables Stencil so it is not selectable.
                 * Changes the color to the disabled style.
                 *
                 */
                disable(): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: Object): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: any[]): void;
                /**
                 * Internal. Unregisters this Stencil from receiving
                 * mouse events.
                 *
                 */
                disconnectMouse(): void;
                /**
                 * Internal?
                 * Method used to instantiate the contenteditable HTML node.
                 *
                 */
                edit(): void;
                /**
                 * Enables Stencil so it is not selectable (if
                 * it was selectable to begin with). Changes the
                 * color to the current style.
                 *
                 */
                enable(): void;
                /**
                 * Internal. Method fired when text is executed,
                 * via mouse-click-off, ESC key or Enter key.
                 *
                 */
                execText(): void;
                /**
                 * Exports Stencil data
                 *
                 */
                exporter(): any;
                /**
                 * Gets angle of Stencil
                 * NOTE: Only works for Lines, Arrows, Vectors and Axes
                 * (works on points, not transforms)
                 *
                 */
                getAngle(): any;
                /**
                 * Returns the coordinates of the Stencil. This is often
                 * different than the data or the points.
                 *
                 * NOTE: Won't work for paths or annotations (labels, Axes, arrow tips)
                 * They should overwrite.
                 *
                 * NOTE: Primarily used for checking for if shape is off
                 * canvas. Therefore Lines could get flipped. Use absolute
                 * to prevent this.
                 *
                 * @param absolute Keeps lines from flipping (see note).
                 */
                getBounds(absolute: boolean): Object;
                /**
                 * Get the text of the label.
                 *
                 */
                getLabel(): any;
                /**
                 * Gets radius (length) of Stencil.
                 *
                 * NOTE: Only works for Lines, Arrows and Vectors
                 * (not for Ellipse, Axes has its own version)
                 *
                 */
                getRadius(): any;
                /**
                 *
                 */
                getSavedCaret(): Object;
                /**
                 * This gets and stores the caret position
                 * in the contentEditable div (conEdit).
                 * NOTE: Doesn't work with html nodes inside
                 * the div.
                 *
                 * @param node
                 */
                getSelection(node: any): void;
                /**
                 * Getter for text.
                 *
                 */
                getText(): any;
                /**
                 * Returns the current transform (position) of the Stencil's
                 * container
                 *
                 */
                getTransform(): Object;
                /**
                 * Changes style to the highlight theme.
                 *
                 */
                highlight(): void;
                /**
                 * Uses saved caret position to insert text
                 * into position and place caret at the end of
                 * insertion
                 *
                 * @param node
                 * @param val
                 */
                insertText(node: any, val: any): void;
                /**
                 *
                 * @param text
                 * @param w
                 */
                makeFit(text: any, w: any): Object;
                /**
                 * Mechanism for measuring text.
                 * SVG nor VML have a way of determining the width or
                 * height of a block of text. This method creates an
                 * HTML text block and those measurements are used for
                 * displaying the SVG/VML text.
                 *
                 * @param str The text to display and measure.
                 * @param width If the width is not provided, it will be assumedthat the text is one line and the width will bemeasured and the _lineHeight used for th height.If width is provided, word-wrap is assumed, andline breaks will be inserted into the text at eachpoint where a word wraps in the HTML. The height isthen measured.
                 */
                measureText(str: String, width: number): Object;
                /**
                 * Moves Stencil to the back of all other items
                 * on the canvas.
                 *
                 */
                moveToBack(): void;
                /**
                 * Moves Stencil to the front of all other items
                 * on the canvas.
                 *
                 */
                moveToFront(): void;
                /**
                 * Converts points to data
                 *
                 * @param p
                 */
                pointsToData(p: any[]): Object;
                /**
                 * Internal. Prevent item from being drawn/rendered less
                 * than zero on the X or Y.
                 *
                 */
                preventNegativePos(): void;
                /**
                 * Removes shape(s), typically before a re-render
                 * No args defaults to this.shape
                 * Pass in multiple args to remove multiple shapes
                 *
                 */
                remove(): void;
                /**
                 *
                 */
                removeShadow(): void;
                /**
                 * Renders the 'hit' object (the shape used for an expanded
                 * hit area and for highlighting) and the'shape' (the actual
                 * display object). Text is slightly different than other
                 * implementations. Instead of calling render twice, it calls
                 * _createHilite for the 'hit'
                 *
                 * @param text Changes text if sent. Be sure to use the setText andnot to call this directly.
                 */
                render(text: String): void;
                /**
                 * Called when the Stencil is selected.
                 * NOTE: Calling this will not select the Stencil
                 * calling this just sets the style to the 'selected'
                 * theme. 'manager.Stencil' should be used for selecting
                 * Stencils.
                 *
                 */
                select(): void;
                /**
                 * Setter for Stencil data; also converts
                 * data to points. See individual Stencils
                 * for specific data properties.
                 *
                 * @param data
                 */
                setData(data: Object): void;
                /**
                 * Creates and sets a label annotation for the Stencil.
                 * If Stencil contains a labelPosition method, that will
                 * be used for positioning. Otherwise
                 * dojox.drawing.util.positioning.label is used.
                 *
                 * @param text The text to set as the label.
                 */
                setLabel(text: String): void;
                /**
                 * Setter for Stencil points; also converts
                 * points to data. See individual Stencils
                 * for specific points properties.
                 *
                 * @param points
                 */
                setPoints(points: Object[]): void;
                /**
                 * Internal, called when caret needs to
                 * be moved into position after text is added
                 *
                 * @param val
                 */
                setSavedCaret(val: any): void;
                /**
                 * Used for placing the cursor during edits and character help.
                 * Takes the values: end, beg, start, all or any numerical value
                 * (in which case the number will constitute the caret position)
                 *
                 * @param node
                 * @param what
                 */
                setSelection(node: any, what: any): void;
                /**
                 * Setter for text.
                 *
                 * @param text
                 */
                setText(text: any): void;
                /**
                 * Sets the transform to the stencil
                 *
                 * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                 *
                 * @param mx
                 */
                setTransform(mx: Object): void;
                /**
                 * Internal. Builds the parent node for the
                 * contenteditable HTML node.
                 *
                 * @param obj
                 */
                showParent(obj: Event): void;
                /**
                 * Moves object to a new X Y location
                 * mx is additive. So mx.dx=1 will move the stencil
                 * 1 pixel to the right from wherever it was.
                 *
                 * @param mx
                 */
                transformPoints(mx: any): void;
                /**
                 * Register raw text, returning typeset form.
                 * Uses function dojox.drawing.stencil.Text.typeset
                 * for typesetting, if it exists.
                 *
                 * @param text
                 */
                typesetter(text: any): any;
                /**
                 * Changes style to the current theme.
                 *
                 */
                unhighlight(): void;
                /**
                 * Stub - Fires before render occurs.
                 *
                 * @param stencil
                 */
                onBeforeRender(stencil: Object): void;
                /**
                 * Stub - fires on change of dimensional
                 * properties or a text change
                 *
                 * @param stencil
                 */
                onChangeData(stencil: Object): void;
                /**
                 * Fires when styles of shape has changed
                 *
                 * @param stencil
                 */
                onChangeStyle(stencil: Object): void;
                /**
                 *
                 * @param value
                 */
                onChangeText(value: any): void;
                /**
                 * Stub - fires before this is destroyed
                 *
                 * @param stencil
                 */
                onDelete(stencil: dojox.drawing.stencil._Base): void;
                /**
                 *
                 * @param obj
                 */
                onDown(obj: Event): void;
                /**
                 *
                 * @param obj
                 */
                onDrag(obj: Event): void;
                /**
                 * Stub - fires on change of any property,
                 * including style properties
                 *
                 * @param stencil
                 */
                onModify(stencil: Object): void;
                /**
                 * Mouse event, fired on mousemove while mouse
                 * is not down.
                 * NOTE: Not currently implemented
                 *
                 * @param obj
                 */
                onMove(obj: Event): void;
                /**
                 * Stub - Fires on creation.
                 * Drawing connects to this (once!) to be
                 * notified of drag completion. But only if it
                 * was registered as a Tool. Creating Stencil in and of
                 * itself does not register it.
                 *
                 * This should fire
                 * at the end of creation (not during drag)
                 *
                 * @param stencil
                 */
                onRender(stencil: Object): void;
                /**
                 * Called from anchor point mouse drag
                 * also called from plugins.Pan.checkBounds
                 *
                 * @param anchor
                 */
                onTransform(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Fired at the start of a transform. This would be
                 * an anchor drag or a selection.
                 *
                 * @param anchor
                 */
                onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 * Called from anchor point up mouse up
                 *
                 * @param anchor
                 */
                onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
                /**
                 *
                 * @param obj
                 */
                onUp(obj: Event): void;
            }
            namespace TextBlock {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/tools/TextBlock.setup.html
                 *
                 *
                 */
                interface setup {
                    /**
                     *
                     */
                    iconClass: string;
                    /**
                     *
                     */
                    name: string;
                    /**
                     *
                     */
                    tooltip: string;
                }
            }

            namespace custom {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/tools/custom/Axes.html
                 *
                 * Draws a right-angle Axes (shaped like an L, not a +)
                 * This Stencil is created with a Path so that the L shape
                 * is one continuous piece. Arrow heads are placed at the end
                 * of each axis. The Axes can be rotated. There are custom
                 * label methods.
                 *
                 * @param options
                 */
                class Axes extends dojox.drawing.stencil.Path {
                    constructor(options: any);
                    /**
                     *
                     */
                    "baseRender": boolean;
                    /**
                     *
                     */
                    "closeColor": Object;
                    /**
                     *
                     */
                    "closePath": boolean;
                    /**
                     *
                     */
                    "closeRadius": number;
                    /**
                     *
                     */
                    "drawingType": string;
                    /**
                     *
                     */
                    "draws": boolean;
                    /**
                     * Whether the Stencil is enabled or not.
                     *
                     */
                    "enabled": boolean;
                    /**
                     *
                     */
                    "minimumSize": number;
                    /**
                     * See stencil._Base ToolsSetup
                     *
                     */
                    "setup": Object;
                    /**
                     *
                     */
                    "showAngle": boolean;
                    /**
                     *
                     */
                    "StencilData": Object;
                    /**
                     *
                     */
                    "StencilPoints": any[];
                    /**
                     *
                     */
                    "type": string;
                    /**
                     *
                     */
                    "zScale": number;
                    /**
                     *
                     * @param args
                     */
                    addShadow(args: Object): void;
                    /**
                     * Gets called from anchor to check if its current
                     * position is ok. If not, its x or y transform will
                     * be changed until this passes.
                     *
                     * @param x
                     * @param y
                     * @param anchor
                     */
                    anchorPositionCheck(x: number, y: number, anchor: dojox.drawing.manager.Anchors): Object;
                    /**
                     *
                     * @param options
                     * @param create
                     */
                    animate(options: any, create: any): void;
                    /**
                     * Applies the transform to the stencil
                     *
                     * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                     *
                     * @param mx
                     */
                    applyTransform(mx: any): void;
                    /**
                     * Changes properties in the style or disabled styles,
                     * depending on whether the object is enabled.
                     * Also can be used to change most position and size props.
                     *
                     * @param key
                     * @param value               Optional
                     */
                    attr(key: String, value: String): void;
                    /**
                     * Changes properties in the style or disabled styles,
                     * depending on whether the object is enabled.
                     * Also can be used to change most position and size props.
                     *
                     * @param key
                     * @param value               Optional
                     */
                    attr(key: Object, value: String): void;
                    /**
                     * Changes properties in the style or disabled styles,
                     * depending on whether the object is enabled.
                     * Also can be used to change most position and size props.
                     *
                     * @param key
                     * @param value               Optional
                     */
                    attr(key: String, value: number): void;
                    /**
                     * Changes properties in the style or disabled styles,
                     * depending on whether the object is enabled.
                     * Also can be used to change most position and size props.
                     *
                     * @param key
                     * @param value               Optional
                     */
                    attr(key: Object, value: number): void;
                    /**
                     * Checks if points are close enough to indicate that
                     * path should be close. Provides a visual cue.
                     * Not actually used in stencil.path - this is used for
                     * drawable tools that extend it. Note that those tools
                     * need to remove the shape created: this.closeGuide, or
                     * add arg: remove
                     *
                     * @param firstPt
                     * @param currPt
                     * @param remove
                     */
                    checkClosePoint(firstPt: Object, currPt: Object, remove: boolean): boolean;
                    /**
                     * Convenience method for quick connects
                     * See comments below for possiblities
                     * functions can be strings
                     *
                     * @param o
                     * @param e
                     * @param s
                     * @param m
                     * @param once If true, the connection happens onlyonce then disconnects. Five args are requiredfor this functionality.
                     */
                    connect(o: any, e: any, s: any, m: any, once: boolean): any;
                    /**
                     * Internal. Registers this Stencil to receive
                     * mouse events.
                     *
                     */
                    connectMouse(): void;
                    /**
                     * Convenience method for batches of quick connects
                     * Handles are not returned and therefore cannot be
                     * disconnected until Shape destroy time
                     *
                     */
                    connectMult(): void;
                    /**
                     * Creates the label for each axis.
                     *
                     */
                    createLabels(): void;
                    /**
                     * Converts data to points.
                     *
                     * @param o
                     */
                    dataToPoints(o: Object): any[];
                    /**
                     * Called when the Stencil is deselected.
                     * NOTE: Calling this will not deselect the Stencil
                     * calling this just sets the style to the current
                     * theme. 'manager.Stencil' should be used for selecting
                     * and deselecting Stencils.
                     *
                     * @param useDelay Adds  slight delay before the style is set.
                     */
                    deselect(useDelay: boolean): void;
                    /**
                     * Destroys this Stencil
                     *
                     */
                    destroy(): void;
                    /**
                     * Disables Stencil so it is not selectable.
                     * Changes the color to the disabled style.
                     *
                     */
                    disable(): void;
                    /**
                     * Removes connections based on passed
                     * handles arguments
                     *
                     * @param handles
                     */
                    disconnect(handles: Object): void;
                    /**
                     * Removes connections based on passed
                     * handles arguments
                     *
                     * @param handles
                     */
                    disconnect(handles: any[]): void;
                    /**
                     * Internal. Unregisters this Stencil from receiving
                     * mouse events.
                     *
                     */
                    disconnectMouse(): void;
                    /**
                     * Enables Stencil so it is not selectable (if
                     * it was selectable to begin with). Changes the
                     * color to the current style.
                     *
                     */
                    enable(): void;
                    /**
                     * Exports Stencil data
                     *
                     */
                    exporter(): any;
                    /**
                     * Gets angle of Stencil
                     * NOTE: Only works for Lines, Arrows, Vectors and Axes
                     * (works on points, not transforms)
                     *
                     */
                    getAngle(): any;
                    /**
                     * Custom getBounds overwrites _Base.getBounds
                     *
                     * @param absolute
                     */
                    getBounds(absolute: boolean): Object;
                    /**
                     * Getter for the labels. returns an object.
                     *
                     */
                    getLabel(): any;
                    /**
                     * Possibility of z-axis makes bounds unreliable.
                     * Use these points instead.
                     *
                     */
                    getRadius(): any;
                    /**
                     * Returns the current transform (position) of the Stencil's
                     * container
                     *
                     */
                    getTransform(): Object;
                    /**
                     * Changes style to the highlight theme.
                     *
                     */
                    highlight(): void;
                    /**
                     * Moves Stencil to the back of all other items
                     * on the canvas.
                     *
                     */
                    moveToBack(): void;
                    /**
                     * Moves Stencil to the front of all other items
                     * on the canvas.
                     *
                     */
                    moveToFront(): void;
                    /**
                     * Converts points to data.
                     *
                     */
                    pointsToData(): Object;
                    /**
                     * Internal. Prevent item from being drawn/rendered less
                     * than zero on the X or Y.
                     *
                     */
                    preventNegativePos(): void;
                    /**
                     * Removes shape(s), typically before a re-render
                     * No args defaults to this.shape
                     * Pass in multiple args to remove multiple shapes
                     *
                     */
                    remove(): void;
                    /**
                     *
                     */
                    removeShadow(): void;
                    /**
                     * Renders the 'hit' object (the shape used for an expanded
                     * hit area and for highlighting) and the'shape' (the actual
                     * display object).
                     *
                     */
                    render(): void;
                    /**
                     * Called when the Stencil is selected.
                     * NOTE: Calling this will not select the Stencil
                     * calling this just sets the style to the 'selected'
                     * theme. 'manager.Stencil' should be used for selecting
                     * Stencils.
                     *
                     */
                    select(): void;
                    /**
                     * Setter for Stencil data; also converts
                     * data to points. See individual Stencils
                     * for specific data properties.
                     *
                     * @param data
                     */
                    setData(data: Object): void;
                    /**
                     * Set the text of the labels. The text would be
                     * broken up into the two labels.
                     *
                     * @param value If no argument is passed, defaults to two labels'x' and 'y'. If an argument is passed, thattext will be split on the word 'and' to determinethe two labels.
                     */
                    setLabel(value: String): void;
                    /**
                     * Custom placement for x-axis label
                     *
                     */
                    setLabelX(): Object;
                    /**
                     * Custom placement for y-axis label
                     *
                     */
                    setLabelY(): Object;
                    /**
                     * Custom placement for z-axis label
                     *
                     */
                    setLabelZ(): Object;
                    /**
                     * Setter for Stencil points; also converts
                     * points to data. See individual Stencils
                     * for specific points properties.
                     *
                     * @param points
                     */
                    setPoints(points: Object[]): void;
                    /**
                     * Sets the transform to the stencil
                     *
                     * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                     *
                     * @param mx
                     */
                    setTransform(mx: Object): void;
                    /**
                     * Moves object to a new X Y location
                     * mx is additive. So mx.dx=1 will move the stencil
                     * 1 pixel to the right from wherever it was.
                     *
                     * @param mx
                     */
                    transformPoints(mx: any): void;
                    /**
                     * Changes style to the current theme.
                     *
                     */
                    unhighlight(): void;
                    /**
                     * Finds the point for the z axis.
                     *
                     * @param obj
                     */
                    zPoint(obj: any): Object;
                    /**
                     *
                     */
                    zSet(): void;
                    /**
                     * Stub - Fires before render occurs.
                     *
                     * @param stencil
                     */
                    onBeforeRender(stencil: Object): void;
                    /**
                     * Stub - fires on change of dimensional
                     * properties or a text change
                     *
                     * @param stencil
                     */
                    onChangeData(stencil: Object): void;
                    /**
                     * Fires when styles of shape has changed
                     *
                     * @param stencil
                     */
                    onChangeStyle(stencil: Object): void;
                    /**
                     *
                     * @param value
                     */
                    onChangeText(value: any): void;
                    /**
                     * Stub - fires before this is destroyed
                     *
                     * @param stencil
                     */
                    onDelete(stencil: dojox.drawing.stencil._Base): void;
                    /**
                     * Mouse event, fired on mousedown on canvas
                     *
                     * @param obj
                     */
                    onDown(obj: Event): void;
                    /**
                     * See stencil._Base.onDrag
                     *
                     * @param obj
                     */
                    onDrag(obj: Event): void;
                    /**
                     * Stub - fires on change of any property,
                     * including style properties
                     *
                     * @param stencil
                     */
                    onModify(stencil: Object): void;
                    /**
                     * Mouse event, fired on mousemove while mouse
                     * is not down.
                     * NOTE: Not currently implemented
                     *
                     * @param obj
                     */
                    onMove(obj: Event): void;
                    /**
                     * Stub - Fires on creation.
                     * Drawing connects to this (once!) to be
                     * notified of drag completion. But only if it
                     * was registered as a Tool. Creating Stencil in and of
                     * itself does not register it.
                     *
                     * This should fire
                     * at the end of creation (not during drag)
                     *
                     * @param stencil
                     */
                    onRender(stencil: Object): void;
                    /**
                     * Overwrites _Base.onTransform
                     *
                     * @param anchor
                     */
                    onTransform(anchor: number): void;
                    /**
                     * Overwrites _Base.onTransformBegin
                     *
                     * @param anchor
                     */
                    onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
                    /**
                     * Overwrites _Base.onTransformEnd
                     *
                     * @param anchor
                     */
                    onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
                    /**
                     * See stencil._Base.onUp
                     *
                     * @param obj
                     */
                    onUp(obj: Event): void;
                }
                namespace Axes {
                    /**
                     * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/tools/custom/Axes.setup.html
                     *
                     * See stencil._Base ToolsSetup
                     *
                     */
                    interface setup {
                        /**
                         *
                         */
                        iconClass: string;
                        /**
                         *
                         */
                        name: string;
                        /**
                         *
                         */
                        tooltip: string;
                    }
                }

                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/tools/custom/Equation.html
                 *
                 *
                 * @param options
                 */
                class Equation extends dojox.drawing.tools.TextBlock {
                    constructor(options: any);
                    /**
                     * Text horizontal alignment.
                     * Options: start, middle, end
                     *
                     */
                    "align": string;
                    /**
                     *
                     */
                    "anchorType": string;
                    /**
                     *
                     */
                    "baseRender": boolean;
                    /**
                     *
                     */
                    "customType": string;
                    /**
                     *
                     */
                    "drawingType": string;
                    /**
                     *
                     */
                    "draws": boolean;
                    /**
                     * Whether the Stencil is enabled or not.
                     *
                     */
                    "enabled": boolean;
                    /**
                     * The minimum size allowed for a render. If the size
                     * is less, the shape is destroyed.
                     *
                     */
                    "minimumSize": number;
                    /**
                     * Whether the Stencil is selected when the text field
                     * is executed or not
                     *
                     */
                    "selectOnExec": boolean;
                    /**
                     * See stencil._Base ToolsSetup
                     *
                     */
                    "setup": Object;
                    /**
                     * If true and there is no text in the data, the TextBlock
                     * Is displayed and focused and awaits input.
                     *
                     */
                    "showEmpty": boolean;
                    /**
                     * The data used to create the dojox.gfx Text
                     *
                     */
                    "StencilData": Object;
                    /**
                     *
                     */
                    "StencilPoints": any[];
                    /**
                     *
                     */
                    "type": string;
                    /**
                     * Text vertical alignment
                     * Options: top, middle, bottom (FIXME: bottom not supported)
                     *
                     */
                    "valign": string;
                    /**
                     *
                     * @param args
                     */
                    addShadow(args: Object): void;
                    /**
                     *
                     * @param options
                     * @param create
                     */
                    animate(options: any, create: any): void;
                    /**
                     * Applies the transform to the stencil
                     *
                     * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                     *
                     * @param mx
                     */
                    applyTransform(mx: any): void;
                    /**
                     * Changes properties in the style or disabled styles,
                     * depending on whether the object is enabled.
                     * Also can be used to change most position and size props.
                     *
                     * @param key
                     * @param value               Optional
                     */
                    attr(key: String, value: String): void;
                    /**
                     * Changes properties in the style or disabled styles,
                     * depending on whether the object is enabled.
                     * Also can be used to change most position and size props.
                     *
                     * @param key
                     * @param value               Optional
                     */
                    attr(key: Object, value: String): void;
                    /**
                     * Changes properties in the style or disabled styles,
                     * depending on whether the object is enabled.
                     * Also can be used to change most position and size props.
                     *
                     * @param key
                     * @param value               Optional
                     */
                    attr(key: String, value: number): void;
                    /**
                     * Changes properties in the style or disabled styles,
                     * depending on whether the object is enabled.
                     * Also can be used to change most position and size props.
                     *
                     * @param key
                     * @param value               Optional
                     */
                    attr(key: Object, value: number): void;
                    /**
                     * Cleans text. Strings HTML chars and double spaces
                     * and optionally removes line breaks.
                     *
                     * @param txt
                     * @param removeBreaks
                     */
                    cleanText(txt: String, removeBreaks: boolean): any;
                    /**
                     * Convenience method for quick connects
                     * See comments below for possiblities
                     * functions can be strings
                     *
                     * @param o
                     * @param e
                     * @param s
                     * @param m
                     * @param once If true, the connection happens onlyonce then disconnects. Five args are requiredfor this functionality.
                     */
                    connect(o: any, e: any, s: any, m: any, once: boolean): any;
                    /**
                     * Internal. Registers this Stencil to receive
                     * mouse events.
                     *
                     */
                    connectMouse(): void;
                    /**
                     * Convenience method for batches of quick connects
                     * Handles are not returned and therefore cannot be
                     * disconnected until Shape destroy time
                     *
                     */
                    connectMult(): void;
                    /**
                     * Internal. Creates the connections to the
                     * contenteditable HTML node.
                     *
                     */
                    connectTextField(): void;
                    /**
                     * Internal. Creates HTML nodes at each corner
                     * of the contenteditable div. These nodes are
                     * draggable and will resize the div horizontally.
                     *
                     */
                    createAnchors(): void;
                    /**
                     * Internal. Inserts the contenteditable HTML node
                     * into its parent node, and styles it.
                     *
                     * @param txt
                     */
                    createTextField(txt: String): any;
                    /**
                     * Converts data to points.
                     *
                     * @param o
                     */
                    dataToPoints(o: Object): any[];
                    /**
                     * Called when the Stencil is deselected.
                     * NOTE: Calling this will not deselect the Stencil
                     * calling this just sets the style to the current
                     * theme. 'manager.Stencil' should be used for selecting
                     * and deselecting Stencils.
                     *
                     * @param useDelay Adds  slight delay before the style is set.
                     */
                    deselect(useDelay: boolean): void;
                    /**
                     * Destroys this Stencil
                     *
                     */
                    destroy(): void;
                    /**
                     * Internal. Destroys HTML anchors.
                     *
                     */
                    destroyAnchors(): void;
                    /**
                     * Disables Stencil so it is not selectable.
                     * Changes the color to the disabled style.
                     *
                     */
                    disable(): void;
                    /**
                     * Removes connections based on passed
                     * handles arguments
                     *
                     * @param handles
                     */
                    disconnect(handles: Object): void;
                    /**
                     * Removes connections based on passed
                     * handles arguments
                     *
                     * @param handles
                     */
                    disconnect(handles: any[]): void;
                    /**
                     * Internal. Unregisters this Stencil from receiving
                     * mouse events.
                     *
                     */
                    disconnectMouse(): void;
                    /**
                     * Internal?
                     * Method used to instantiate the contenteditable HTML node.
                     *
                     */
                    edit(): void;
                    /**
                     * Enables Stencil so it is not selectable (if
                     * it was selectable to begin with). Changes the
                     * color to the current style.
                     *
                     */
                    enable(): void;
                    /**
                     * Internal. Method fired when text is executed,
                     * via mouse-click-off, ESC key or Enter key.
                     *
                     */
                    execText(): void;
                    /**
                     * Exports Stencil data
                     *
                     */
                    exporter(): any;
                    /**
                     * Gets angle of Stencil
                     * NOTE: Only works for Lines, Arrows, Vectors and Axes
                     * (works on points, not transforms)
                     *
                     */
                    getAngle(): any;
                    /**
                     * Returns the coordinates of the Stencil. This is often
                     * different than the data or the points.
                     *
                     * NOTE: Won't work for paths or annotations (labels, Axes, arrow tips)
                     * They should overwrite.
                     *
                     * NOTE: Primarily used for checking for if shape is off
                     * canvas. Therefore Lines could get flipped. Use absolute
                     * to prevent this.
                     *
                     * @param absolute Keeps lines from flipping (see note).
                     */
                    getBounds(absolute: boolean): Object;
                    /**
                     * Get the text of the label.
                     *
                     */
                    getLabel(): any;
                    /**
                     * Gets radius (length) of Stencil.
                     *
                     * NOTE: Only works for Lines, Arrows and Vectors
                     * (not for Ellipse, Axes has its own version)
                     *
                     */
                    getRadius(): any;
                    /**
                     *
                     */
                    getSavedCaret(): Object;
                    /**
                     * This gets and stores the caret position
                     * in the contentEditable div (conEdit).
                     * NOTE: Doesn't work with html nodes inside
                     * the div.
                     *
                     * @param node
                     */
                    getSelection(node: any): void;
                    /**
                     * Getter for text.
                     *
                     */
                    getText(): any;
                    /**
                     * Returns the current transform (position) of the Stencil's
                     * container
                     *
                     */
                    getTransform(): Object;
                    /**
                     * Changes style to the highlight theme.
                     *
                     */
                    highlight(): void;
                    /**
                     * Uses saved caret position to insert text
                     * into position and place caret at the end of
                     * insertion
                     *
                     * @param node
                     * @param val
                     */
                    insertText(node: any, val: any): void;
                    /**
                     *
                     * @param text
                     * @param w
                     */
                    makeFit(text: any, w: any): Object;
                    /**
                     * Mechanism for measuring text.
                     * SVG nor VML have a way of determining the width or
                     * height of a block of text. This method creates an
                     * HTML text block and those measurements are used for
                     * displaying the SVG/VML text.
                     *
                     * @param str The text to display and measure.
                     * @param width If the width is not provided, it will be assumedthat the text is one line and the width will bemeasured and the _lineHeight used for th height.If width is provided, word-wrap is assumed, andline breaks will be inserted into the text at eachpoint where a word wraps in the HTML. The height isthen measured.
                     */
                    measureText(str: String, width: number): Object;
                    /**
                     * Moves Stencil to the back of all other items
                     * on the canvas.
                     *
                     */
                    moveToBack(): void;
                    /**
                     * Moves Stencil to the front of all other items
                     * on the canvas.
                     *
                     */
                    moveToFront(): void;
                    /**
                     * Converts points to data
                     *
                     * @param p
                     */
                    pointsToData(p: any[]): Object;
                    /**
                     * Internal. Prevent item from being drawn/rendered less
                     * than zero on the X or Y.
                     *
                     */
                    preventNegativePos(): void;
                    /**
                     * Removes shape(s), typically before a re-render
                     * No args defaults to this.shape
                     * Pass in multiple args to remove multiple shapes
                     *
                     */
                    remove(): void;
                    /**
                     *
                     */
                    removeShadow(): void;
                    /**
                     * Renders the 'hit' object (the shape used for an expanded
                     * hit area and for highlighting) and the'shape' (the actual
                     * display object). Text is slightly different than other
                     * implementations. Instead of calling render twice, it calls
                     * _createHilite for the 'hit'
                     *
                     * @param text Changes text if sent. Be sure to use the setText andnot to call this directly.
                     */
                    render(text: String): void;
                    /**
                     * Called when the Stencil is selected.
                     * NOTE: Calling this will not select the Stencil
                     * calling this just sets the style to the 'selected'
                     * theme. 'manager.Stencil' should be used for selecting
                     * Stencils.
                     *
                     */
                    select(): void;
                    /**
                     * Setter for Stencil data; also converts
                     * data to points. See individual Stencils
                     * for specific data properties.
                     *
                     * @param data
                     */
                    setData(data: Object): void;
                    /**
                     * Creates and sets a label annotation for the Stencil.
                     * If Stencil contains a labelPosition method, that will
                     * be used for positioning. Otherwise
                     * dojox.drawing.util.positioning.label is used.
                     *
                     * @param text The text to set as the label.
                     */
                    setLabel(text: String): void;
                    /**
                     * Setter for Stencil points; also converts
                     * points to data. See individual Stencils
                     * for specific points properties.
                     *
                     * @param points
                     */
                    setPoints(points: Object[]): void;
                    /**
                     * Internal, called when caret needs to
                     * be moved into position after text is added
                     *
                     * @param val
                     */
                    setSavedCaret(val: any): void;
                    /**
                     * Used for placing the cursor during edits and character help.
                     * Takes the values: end, beg, start, all or any numerical value
                     * (in which case the number will constitute the caret position)
                     *
                     * @param node
                     * @param what
                     */
                    setSelection(node: any, what: any): void;
                    /**
                     * Setter for text.
                     *
                     * @param text
                     */
                    setText(text: any): void;
                    /**
                     * Sets the transform to the stencil
                     *
                     * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                     *
                     * @param mx
                     */
                    setTransform(mx: Object): void;
                    /**
                     * Internal. Builds the parent node for the
                     * contenteditable HTML node.
                     *
                     * @param obj
                     */
                    showParent(obj: Event): void;
                    /**
                     * Moves object to a new X Y location
                     * mx is additive. So mx.dx=1 will move the stencil
                     * 1 pixel to the right from wherever it was.
                     *
                     * @param mx
                     */
                    transformPoints(mx: any): void;
                    /**
                     * Register raw text, returning typeset form.
                     * Uses function dojox.drawing.stencil.Text.typeset
                     * for typesetting, if it exists.
                     *
                     * @param text
                     */
                    typesetter(text: any): any;
                    /**
                     * Changes style to the current theme.
                     *
                     */
                    unhighlight(): void;
                    /**
                     * Stub - Fires before render occurs.
                     *
                     * @param stencil
                     */
                    onBeforeRender(stencil: Object): void;
                    /**
                     * Stub - fires on change of dimensional
                     * properties or a text change
                     *
                     * @param stencil
                     */
                    onChangeData(stencil: Object): void;
                    /**
                     * Fires when styles of shape has changed
                     *
                     * @param stencil
                     */
                    onChangeStyle(stencil: Object): void;
                    /**
                     *
                     * @param value
                     */
                    onChangeText(value: any): void;
                    /**
                     * Stub - fires before this is destroyed
                     *
                     * @param stencil
                     */
                    onDelete(stencil: dojox.drawing.stencil._Base): void;
                    /**
                     *
                     * @param obj
                     */
                    onDown(obj: Event): void;
                    /**
                     *
                     * @param obj
                     */
                    onDrag(obj: Event): void;
                    /**
                     * Stub - fires on change of any property,
                     * including style properties
                     *
                     * @param stencil
                     */
                    onModify(stencil: Object): void;
                    /**
                     * Mouse event, fired on mousemove while mouse
                     * is not down.
                     * NOTE: Not currently implemented
                     *
                     * @param obj
                     */
                    onMove(obj: Event): void;
                    /**
                     * Stub - Fires on creation.
                     * Drawing connects to this (once!) to be
                     * notified of drag completion. But only if it
                     * was registered as a Tool. Creating Stencil in and of
                     * itself does not register it.
                     *
                     * This should fire
                     * at the end of creation (not during drag)
                     *
                     * @param stencil
                     */
                    onRender(stencil: Object): void;
                    /**
                     * Called from anchor point mouse drag
                     * also called from plugins.Pan.checkBounds
                     *
                     * @param anchor
                     */
                    onTransform(anchor: dojox.drawing.manager.Anchors): void;
                    /**
                     * Fired at the start of a transform. This would be
                     * an anchor drag or a selection.
                     *
                     * @param anchor
                     */
                    onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
                    /**
                     * Called from anchor point up mouse up
                     *
                     * @param anchor
                     */
                    onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
                    /**
                     *
                     * @param obj
                     */
                    onUp(obj: Event): void;
                }
                namespace Equation {
                    /**
                     * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/tools/custom/Equation.setup.html
                     *
                     * See stencil._Base ToolsSetup
                     *
                     */
                    interface setup {
                        /**
                         *
                         */
                        iconClass: string;
                        /**
                         *
                         */
                        name: string;
                        /**
                         *
                         */
                        tooltip: string;
                    }
                }

                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/tools/custom/Vector.html
                 *
                 * Creates a Vector Stencil.
                 * Generally the same as an arrow, except that the arrow
                 * head is only at the end. There is additionaly functionality
                 * to allow for a 'zero vector' - one with no length.
                 *
                 * @param options
                 */
                class Vector extends dojox.drawing.tools.Arrow {
                    constructor(options: any);
                    /**
                     *
                     */
                    "anchorType": string;
                    /**
                     * Whether or not to place an arrow on end.
                     *
                     */
                    "arrowEnd": boolean;
                    /**
                     * Whether or not to place an arrow on start.
                     *
                     */
                    "arrowStart": boolean;
                    /**
                     *
                     */
                    "baseRender": boolean;
                    /**
                     *
                     */
                    "drawingType": string;
                    /**
                     *
                     */
                    "draws": boolean;
                    /**
                     * Whether the Stencil is enabled or not.
                     *
                     */
                    "enabled": boolean;
                    /**
                     *
                     */
                    "minimumSize": number;
                    /**
                     * See stencil._Base ToolsSetup
                     *
                     */
                    "setup": Object;
                    /**
                     *
                     */
                    "showAngle": boolean;
                    /**
                     * The data used to create the dojox.gfx Shape, specify
                     * x1,y1,x2,y2, or x,y,angle,radius
                     *
                     */
                    "StencilData": Object;
                    /**
                     *
                     */
                    "StencilPoints": any[];
                    /**
                     *
                     */
                    "type": string;
                    /**
                     *
                     * @param args
                     */
                    addShadow(args: Object): void;
                    /**
                     * Called from anchor point mouse drag
                     *
                     * @param x
                     * @param y
                     */
                    anchorConstrain(x: any, y: any): any;
                    /**
                     *
                     * @param options
                     * @param create
                     */
                    animate(options: any, create: any): void;
                    /**
                     * Applies the transform to the stencil
                     *
                     * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                     *
                     * @param mx
                     */
                    applyTransform(mx: any): void;
                    /**
                     * Changes properties in the style or disabled styles,
                     * depending on whether the object is enabled.
                     * Also can be used to change most position and size props.
                     *
                     * @param key
                     * @param value               Optional
                     */
                    attr(key: String, value: String): void;
                    /**
                     * Changes properties in the style or disabled styles,
                     * depending on whether the object is enabled.
                     * Also can be used to change most position and size props.
                     *
                     * @param key
                     * @param value               Optional
                     */
                    attr(key: Object, value: String): void;
                    /**
                     * Changes properties in the style or disabled styles,
                     * depending on whether the object is enabled.
                     * Also can be used to change most position and size props.
                     *
                     * @param key
                     * @param value               Optional
                     */
                    attr(key: String, value: number): void;
                    /**
                     * Changes properties in the style or disabled styles,
                     * depending on whether the object is enabled.
                     * Also can be used to change most position and size props.
                     *
                     * @param key
                     * @param value               Optional
                     */
                    attr(key: Object, value: number): void;
                    /**
                     * Converts a vector to and from the z axis.
                     * If passed a cosphi value that is used to set
                     * the axis, otherwise it is the opp of what it is.
                     *
                     * @param cosphi
                     */
                    changeAxis(cosphi: any): void;
                    /**
                     * Convenience method for quick connects
                     * See comments below for possiblities
                     * functions can be strings
                     *
                     * @param o
                     * @param e
                     * @param s
                     * @param m
                     * @param once If true, the connection happens onlyonce then disconnects. Five args are requiredfor this functionality.
                     */
                    connect(o: any, e: any, s: any, m: any, once: boolean): any;
                    /**
                     * Internal. Registers this Stencil to receive
                     * mouse events.
                     *
                     */
                    connectMouse(): void;
                    /**
                     * Convenience method for batches of quick connects
                     * Handles are not returned and therefore cannot be
                     * disconnected until Shape destroy time
                     *
                     */
                    connectMult(): void;
                    /**
                     * Converts data to points.
                     *
                     * @param o
                     */
                    dataToPoints(o: any): any[];
                    /**
                     * Called when the Stencil is deselected.
                     * NOTE: Calling this will not deselect the Stencil
                     * calling this just sets the style to the current
                     * theme. 'manager.Stencil' should be used for selecting
                     * and deselecting Stencils.
                     *
                     * @param useDelay Adds  slight delay before the style is set.
                     */
                    deselect(useDelay: boolean): void;
                    /**
                     * Destroys this Stencil
                     *
                     */
                    destroy(): void;
                    /**
                     * Disables Stencil so it is not selectable.
                     * Changes the color to the disabled style.
                     *
                     */
                    disable(): void;
                    /**
                     * Removes connections based on passed
                     * handles arguments
                     *
                     * @param handles
                     */
                    disconnect(handles: Object): void;
                    /**
                     * Removes connections based on passed
                     * handles arguments
                     *
                     * @param handles
                     */
                    disconnect(handles: any[]): void;
                    /**
                     * Internal. Unregisters this Stencil from receiving
                     * mouse events.
                     *
                     */
                    disconnectMouse(): void;
                    /**
                     * Enables Stencil so it is not selectable (if
                     * it was selectable to begin with). Changes the
                     * color to the current style.
                     *
                     */
                    enable(): void;
                    /**
                     * Exports Stencil data
                     *
                     */
                    exporter(): any;
                    /**
                     * Gets angle of Stencil
                     * NOTE: Only works for Lines, Arrows, Vectors and Axes
                     * (works on points, not transforms)
                     *
                     */
                    getAngle(): any;
                    /**
                     * Returns the coordinates of the Stencil. This is often
                     * different than the data or the points.
                     *
                     * NOTE: Won't work for paths or annotations (labels, Axes, arrow tips)
                     * They should overwrite.
                     *
                     * NOTE: Primarily used for checking for if shape is off
                     * canvas. Therefore Lines could get flipped. Use absolute
                     * to prevent this.
                     *
                     * @param absolute Keeps lines from flipping (see note).
                     */
                    getBounds(absolute: boolean): Object;
                    /**
                     * Get the text of the label.
                     *
                     */
                    getLabel(): any;
                    /**
                     * Gets radius (length) of Stencil.
                     *
                     * NOTE: Only works for Lines, Arrows and Vectors
                     * (not for Ellipse, Axes has its own version)
                     *
                     */
                    getRadius(): any;
                    /**
                     * Returns the current transform (position) of the Stencil's
                     * container
                     *
                     */
                    getTransform(): Object;
                    /**
                     * Changes style to the highlight theme.
                     *
                     */
                    highlight(): void;
                    /**
                     * The custom position used for the label
                     *
                     */
                    labelPosition(): Object;
                    /**
                     * Moves Stencil to the back of all other items
                     * on the canvas.
                     *
                     */
                    moveToBack(): void;
                    /**
                     * Moves Stencil to the front of all other items
                     * on the canvas.
                     *
                     */
                    moveToFront(): void;
                    /**
                     * Converts points to data
                     *
                     * @param p
                     */
                    pointsToData(p: any): Object;
                    /**
                     * Internal. Prevent item from being drawn/rendered less
                     * than zero on the X or Y.
                     *
                     */
                    preventNegativePos(): void;
                    /**
                     * Removes shape(s), typically before a re-render
                     * No args defaults to this.shape
                     * Pass in multiple args to remove multiple shapes
                     *
                     */
                    remove(): void;
                    /**
                     *
                     */
                    removeShadow(): void;
                    /**
                     * Renders the 'hit' object (the shape used for an expanded
                     * hit area and for highlighting) and the'shape' (the actual
                     * display object). Additionally checks if Vector should be
                     * drawn as an arrow or a circle (zero-length)
                     *
                     */
                    render(): void;
                    /**
                     * Called when the Stencil is selected.
                     * NOTE: Calling this will not select the Stencil
                     * calling this just sets the style to the 'selected'
                     * theme. 'manager.Stencil' should be used for selecting
                     * Stencils.
                     *
                     */
                    select(): void;
                    /**
                     * Setter for Stencil data; also converts
                     * data to points. See individual Stencils
                     * for specific data properties.
                     *
                     * @param data
                     */
                    setData(data: Object): void;
                    /**
                     * Creates and sets a label annotation for the Stencil.
                     * If Stencil contains a labelPosition method, that will
                     * be used for positioning. Otherwise
                     * dojox.drawing.util.positioning.label is used.
                     *
                     * @param text The text to set as the label.
                     */
                    setLabel(text: String): void;
                    /**
                     * Setter for Stencil points; also converts
                     * points to data. See individual Stencils
                     * for specific points properties.
                     *
                     * @param points
                     */
                    setPoints(points: Object[]): void;
                    /**
                     * Sets the transform to the stencil
                     *
                     * NOTE: PARTIALLY IMPLEMENTED.  Only applies x y coords.
                     *
                     * @param mx
                     */
                    setTransform(mx: Object): void;
                    /**
                     * Moves object to a new X Y location
                     * mx is additive. So mx.dx=1 will move the stencil
                     * 1 pixel to the right from wherever it was.
                     *
                     * @param mx
                     */
                    transformPoints(mx: any): void;
                    /**
                     * Changes style to the current theme.
                     *
                     */
                    unhighlight(): void;
                    /**
                     * Takes any point and converts it to
                     * be on the z-axis.
                     *
                     * @param obj
                     */
                    zPoint(obj: any): any;
                    /**
                     * Stub - Fires before render occurs.
                     *
                     * @param stencil
                     */
                    onBeforeRender(stencil: Object): void;
                    /**
                     * Stub - fires on change of dimensional
                     * properties or a text change
                     *
                     * @param stencil
                     */
                    onChangeData(stencil: Object): void;
                    /**
                     * Fires when styles of shape has changed
                     *
                     * @param stencil
                     */
                    onChangeStyle(stencil: Object): void;
                    /**
                     *
                     * @param value
                     */
                    onChangeText(value: any): void;
                    /**
                     * Stub - fires before this is destroyed
                     *
                     * @param stencil
                     */
                    onDelete(stencil: dojox.drawing.stencil._Base): void;
                    /**
                     * Mouse event, fired on mousedown on canvas
                     *
                     * @param obj
                     */
                    onDown(obj: Event): void;
                    /**
                     * See stencil._Base.onDrag
                     *
                     * @param obj
                     */
                    onDrag(obj: Event): void;
                    /**
                     * Stub - fires on change of any property,
                     * including style properties
                     *
                     * @param stencil
                     */
                    onModify(stencil: Object): void;
                    /**
                     * Mouse event, fired on mousemove while mouse
                     * is not down.
                     * NOTE: Not currently implemented
                     *
                     * @param obj
                     */
                    onMove(obj: Event): void;
                    /**
                     * Stub - Fires on creation.
                     * Drawing connects to this (once!) to be
                     * notified of drag completion. But only if it
                     * was registered as a Tool. Creating Stencil in and of
                     * itself does not register it.
                     *
                     * This should fire
                     * at the end of creation (not during drag)
                     *
                     * @param stencil
                     */
                    onRender(stencil: Object): void;
                    /**
                     * Called from anchor point mouse drag
                     * also called from plugins.Pan.checkBounds
                     *
                     * @param anchor
                     */
                    onTransform(anchor: dojox.drawing.manager.Anchors): void;
                    /**
                     * Fired at the start of a transform. This would be
                     * an anchor drag or a selection.
                     *
                     * @param anchor
                     */
                    onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
                    /**
                     *
                     * @param anchor
                     */
                    onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
                    /**
                     * See stencil._Base.onUp
                     *
                     * @param obj
                     */
                    onUp(obj: Event): void;
                }
                namespace Vector {
                    /**
                     * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/tools/custom/Vector.setup.html
                     *
                     * See stencil._Base ToolsSetup
                     *
                     */
                    interface setup {
                        /**
                         *
                         */
                        iconClass: string;
                        /**
                         *
                         */
                        name: string;
                        /**
                         *
                         */
                        tooltip: string;
                    }
                }

            }

        }

        namespace ui {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/ui/Button.html
             *
             * Creates a clickable button in "UI" mode of the drawing.
             * Creates a 4-state button: normal, hover, active, selected.
             * Optionally may include button text or an icon.
             *
             * @param options
             */
            class Button {
                constructor(options: any);
                /**
                 *
                 */
                "callback": Object;
                /**
                 *
                 */
                "enabled": boolean;
                /**
                 *
                 */
                "hitched": Object;
                /**
                 *
                 */
                "scope": Object;
                /**
                 *
                 */
                "selected": boolean;
                /**
                 *
                 */
                "toolType": string;
                /**
                 *
                 */
                "type": string;
                /**
                 *
                 * @param options
                 */
                attr(options: any): void;
                /**
                 *
                 */
                deselect(): void;
                /**
                 *
                 */
                disable(): void;
                /**
                 *
                 */
                enable(): void;
                /**
                 *
                 * @param d
                 * @param s
                 */
                makeOptions(d: Object, s: number): Object;
                /**
                 *
                 */
                select(): void;
                /**
                 * Stub to connect. Event is 'this'
                 * Alternatively can pass in a scope and a callback
                 * on creation.
                 *
                 * @param button
                 */
                onClick(button: Object): void;
                /**
                 *
                 */
                onDown(): void;
                /**
                 *
                 */
                onOut(): void;
                /**
                 *
                 */
                onOver(): void;
                /**
                 *
                 */
                onUp(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/ui/Tooltip.html
             *
             *
             * @param options
             */
            class Tooltip extends dojox.drawing.plugins._Plugin {
                constructor(options: any);
                /**
                 *
                 */
                "anchors": Object;
                /**
                 *
                 */
                "button": Object;
                /**
                 *
                 */
                "canvas": Object;
                /**
                 *
                 */
                "drawing": Object;
                /**
                 *
                 */
                "height": number;
                /**
                 *
                 */
                "keys": Object;
                /**
                 *
                 */
                "mouse": Object;
                /**
                 *
                 */
                "node": Object;
                /**
                 *
                 */
                "stencils": Object;
                /**
                 *
                 */
                "type": string;
                /**
                 *
                 */
                "util": Object;
                /**
                 *
                 */
                "width": number;
                /**
                 *
                 */
                connect(): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: Object): void;
                /**
                 * Removes connections based on passed
                 * handles arguments
                 *
                 * @param handles
                 */
                disconnect(handles: any[]): void;
                /**
                 *
                 */
                onOut(): void;
                /**
                 *
                 */
                onOver(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/ui/Toolbar.html
             *
             * A Toolbar used for holding buttons; typically representing the Stencils
             * used for a DojoX Drawing.
             * Creates a GFX-based toolbar that holds GFX-based buttons. Can be either created
             * within the actual drawing or within a separate DOM element. When within the
             * drawing, the toolbar will cover a portion of the drawing; hence the option.
             *
             * A Toolbar can be created programmatically or in markup. Currently markup is as
             * a separate DOM element and programmatic is within the drawing.
             *
             * @param props
             * @param node
             */
            class Toolbar {
                constructor(props: any, node: any);
                /**
                 * The space between each button.
                 *
                 */
                "margin": number;
                /**
                 * The amount of spce between the top and left of the toolbar and the buttons.
                 *
                 */
                "padding": number;
                /**
                 * The size of the button's rounded corner
                 *
                 */
                "radius": number;
                /**
                 * The width and height of the button
                 *
                 */
                "size": number;
                /**
                 * A comma delineated list of the plugins to include in the Toolbar.
                 * If "all" is used, all registered plugins are included.
                 *
                 */
                "strPlugs": string;
                /**
                 * The button that should be selected at startup.
                 *
                 */
                "strSelected": string;
                /**
                 * A comma delineated list of the Stencil-tools to include in the Toolbar.
                 * If "all" is used, all registered tools are included.
                 *
                 */
                "strTools": string;
                /**
                 * The distance between the tool buttons and plug buttons
                 *
                 */
                "toolPlugGap": number;
                /**
                 * Internal. Adds the back, behind the toolbar.
                 *
                 */
                addBack(): void;
                /**
                 *
                 */
                addPlugin(): void;
                /**
                 *
                 */
                addTool(): void;
                /**
                 * Internal. create buttons.
                 *
                 */
                makeButtons(): void;
                /**
                 * Plugin click event. May be connected to.
                 *
                 * @param button
                 */
                onPlugClick(button: Object): void;
                /**
                 * Stencil render event.
                 *
                 * @param stencil
                 */
                onRenderStencil(stencil: Object): void;
                /**
                 * Tool click event. May be connected to.
                 *
                 * @param button
                 */
                onToolClick(button: Object): void;
            }
            namespace dom {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/ui/dom/Toolbar.html
                 *
                 *
                 * @param props
                 * @param node
                 */
                class Toolbar {
                    constructor(props: any, node: any);
                    /**
                     * The CSS style to apply to the toolbar node
                     *
                     */
                    "baseClass": string;
                    /**
                     * The CSS style to apply to each button node
                     *
                     */
                    "buttonClass": string;
                    /**
                     * The CSS style to apply to each button icon node
                     *
                     */
                    "iconClass": string;
                    /**
                     * Internal. Creates an icon node for each button.
                     *
                     * @param node The button node.
                     * @param constr               OptionalOptional. If not supplied, an icon is not created.Information for each icon is derived fromthe ToolsSetup object defined at the endof each tool. See: stencil._Base
                     */
                    createIcon(node: HTMLElement, constr: Function): void;
                    /**
                     * Creates a button on the Toolbar that is
                     * a Tool, not a Plugin. Tools draw Stencils,
                     * Plugins do actions.
                     *
                     * @param node The button node.
                     */
                    createTool(node: HTMLElement): void;
                    /**
                     * Initializing method that reads the dom node and its
                     * children for tools and plugins.
                     *
                     */
                    parse(): void;
                    /**
                     * Event fired from clicking a Tool, not a PLugin.
                     * Plugin clicks are handled within the plugin's class.
                     *
                     * @param type Fully qualified name of class. ex: dojox.drawing.tools.Ellipse
                     */
                    onClick(type: String): void;
                    /**
                     * handles buttons clicks and selects or deselects
                     *
                     * @param type
                     */
                    onSetTool(type: String): void;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/ui/dom/Pan.html
                 *
                 *
                 * @param options
                 */
                class Pan extends dojox.drawing.plugins._Plugin {
                    constructor(options: any);
                    /**
                     *
                     */
                    "anchors": Object;
                    /**
                     *
                     */
                    "button": Object;
                    /**
                     *
                     */
                    "canvas": Object;
                    /**
                     *
                     */
                    "drawing": Object;
                    /**
                     *
                     */
                    "keys": Object;
                    /**
                     *
                     */
                    "mouse": Object;
                    /**
                     *
                     */
                    "node": Object;
                    /**
                     *
                     */
                    "selected": boolean;
                    /**
                     *
                     */
                    "setup": Object;
                    /**
                     *
                     */
                    "stencils": Object;
                    /**
                     *
                     */
                    "type": string;
                    /**
                     *
                     */
                    "util": Object;
                    /**
                     * Scans all items on the canvas and checks if they are out of
                     * bounds. If so, a scroll bar (in Canvas) is shown. If the position
                     * is left or top, the canvas is scrolled all items are relocated
                     * the distance of the scroll. Ideally, it should look as if the
                     * items do not move.
                     *
                     */
                    checkBounds(): void;
                    /**
                     *
                     */
                    connect(): void;
                    /**
                     * Removes connections based on passed
                     * handles arguments
                     *
                     * @param handles
                     */
                    disconnect(handles: Object): void;
                    /**
                     * Removes connections based on passed
                     * handles arguments
                     *
                     * @param handles
                     */
                    disconnect(handles: any[]): void;
                    /**
                     *
                     * @param evt
                     */
                    onKeyDown(evt: any): void;
                    /**
                     *
                     * @param evt
                     */
                    onKeyUp(evt: any): void;
                    /**
                     *
                     * @param obj
                     */
                    onPanDrag(obj: any): void;
                    /**
                     *
                     * @param bool
                     */
                    onSetPan(bool: boolean): void;
                    /**
                     *
                     * @param bool
                     */
                    onSetPan(bool: Event): void;
                    /**
                     *
                     * @param obj
                     */
                    onStencilDrag(obj: any): void;
                    /**
                     *
                     * @param obj
                     */
                    onStencilUp(obj: any): void;
                }
                namespace Pan {
                    /**
                     * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/ui/dom/Pan.setup.html
                     *
                     *
                     */
                    interface setup {
                        /**
                         *
                         */
                        iconClass: string;
                        /**
                         *
                         */
                        name: string;
                        /**
                         *
                         */
                        tooltip: string;
                    }
                }

                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/ui/dom/Zoom.html
                 *
                 *
                 * @param options
                 */
                class Zoom extends dojox.drawing.plugins._Plugin {
                    constructor(options: any);
                    /**
                     *
                     */
                    "anchors": Object;
                    /**
                     * The CSS class added to the Toolbar buttons
                     *
                     */
                    "baseClass": string;
                    /**
                     * The CSS class added to the bottom (or right) Toolbar button
                     *
                     */
                    "botClass": string;
                    /**
                     *
                     */
                    "button": Object;
                    /**
                     *
                     */
                    "canvas": Object;
                    /**
                     *
                     */
                    "drawing": Object;
                    /**
                     *
                     */
                    "keys": Object;
                    /**
                     * The maximum the canvas can be zoomed in. 10 = 1000%
                     *
                     */
                    "maxZoom": number;
                    /**
                     * The CSS class added to the middle Toolbar button
                     *
                     */
                    "midClass": string;
                    /**
                     * The most the canvas can be zoomed out. .1 = 10%
                     *
                     */
                    "minZoom": number;
                    /**
                     *
                     */
                    "mouse": Object;
                    /**
                     *
                     */
                    "node": Object;
                    /**
                     *
                     */
                    "stencils": Object;
                    /**
                     * The CSS class added to the top (or left) Toolbar button
                     *
                     */
                    "topClass": string;
                    /**
                     *
                     */
                    "type": string;
                    /**
                     *
                     */
                    "util": Object;
                    /**
                     * The current zoom amount
                     *
                     */
                    "zoomFactor": number;
                    /**
                     * The amount of zoom that will occur upon each click.
                     *
                     */
                    "zoomInc": number;
                    /**
                     *
                     */
                    connect(): void;
                    /**
                     * Removes connections based on passed
                     * handles arguments
                     *
                     * @param handles
                     */
                    disconnect(handles: Object): void;
                    /**
                     * Removes connections based on passed
                     * handles arguments
                     *
                     * @param handles
                     */
                    disconnect(handles: any[]): void;
                    /**
                     * Internal. Creates one of the buttons in the zoom-button set.
                     *
                     * @param name
                     * @param cls
                     */
                    makeButton(name: any, cls: any): void;
                    /**
                     * Zooms to 100%
                     *
                     * @param evt
                     */
                    onZoom100(evt: MouseEvent): void;
                    /**
                     * Handles zoom in.
                     *
                     * @param evt
                     */
                    onZoomIn(evt: MouseEvent): void;
                    /**
                     * Handles zoom out.
                     *
                     * @param evt
                     */
                    onZoomOut(evt: MouseEvent): void;
                }
            }

        }

        namespace util {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/util/common.html
             *
             * A collection of common methods used for DojoX Drawing.
             * This singleton is accessible in most Drawing classes
             * as this.util
             *
             */
            interface common {
                /**
                 *
                 */
                objects: Object;
                /**
                 * Converts a namespace (typically a tool or a stencil) into
                 * an abbreviation
                 *
                 * @param type
                 */
                abbr(type: any): number;
                /**
                 * Return angle based on mouse object
                 *
                 * @param obj Manager.Mouse event.
                 * @param snap               OptionalReturns nearest angle within snap limits
                 */
                angle(obj: Event, snap: number): any;
                /**
                 * Attempts to determine in a Mouse Object
                 * was passed or indiviual numbers. Returns
                 * an object.
                 *
                 */
                argsToObj(): any;
                /**
                 * Helper function to attach attributes to SVG and VML raw nodes.
                 *
                 * @param elem
                 * @param prop
                 * @param value
                 * @param squelchErrors
                 */
                attr(elem: Object, prop: String, value: any, squelchErrors: any): boolean;
                /**
                 * Get an object that was registered with util.register
                 *
                 * @param id
                 */
                byId(id: String): any;
                /**
                 * Ensures the angle in the Mouse Object is within the
                 * min and max limits. If not one of those limits is used.
                 * Returns an x,y point for the angle used.
                 *
                 * @param obj
                 * @param min
                 * @param max
                 */
                constrainAngle(obj: Event, min: number, max: number): Event;
                /**
                 * Convert the passed number to radians.
                 *
                 * @param n
                 */
                degToRad(n: number): number;
                /**
                 * Return the length derived from the coordinates
                 * in the Mouse object. Different from util.length
                 * in that this always returns an absolute value.
                 *
                 */
                distance(): any;
                /**
                 *
                 * @param num
                 */
                idSetStart(num: any): void;
                /**
                 * Return the length derived from the coordinates
                 * in the Mouse object.
                 *
                 * @param o
                 */
                length(o: Event): any;
                /**
                 * Subtract an amount from a line
                 * x1,y1,x2,y2 represents the Line. 'amt' represents the amount
                 * to subtract from it.
                 *
                 * @param x1
                 * @param y1
                 * @param x2
                 * @param y2
                 * @param amt
                 */
                lineSub(x1: number, y1: number, x2: number, y2: number, amt: number): Object;
                /**
                 *
                 * @param o1
                 * @param o2
                 */
                mixin(o1: any, o2: any): void;
                /**
                 *
                 * @param ang
                 */
                oppAngle(ang: number): number;
                /**
                 * A very helpful method. If you know the center
                 * (or starting) point, length and angle, find the
                 * x,y point at the end of that line.
                 *
                 * @param cx
                 * @param cy
                 * @param radius
                 * @param angle
                 */
                pointOnCircle(cx: number, cy: number, radius: number, angle: number): Object;
                /**
                 * Return the radians derived from the coordinates
                 * in the Mouse object.
                 *
                 * @param o
                 */
                radians(o: Event): any;
                /**
                 * Convert the passed number to degrees.
                 *
                 * @param n
                 */
                radToDeg(n: number): number;
                /**
                 * Since util is the only Singleton in Drawing (besides
                 * keys) it is used to help connect the Drawing object
                 * the Toolbar. Since multiple drawings can be on one
                 * page, this function serves a little more use than
                 * on first apearance.
                 *
                 * @param obj
                 */
                register(obj: Object): void;
                /**
                 * Given two poits of a line, returns the slope.
                 *
                 * @param p1
                 * @param p2
                 */
                slope(p1: Object, p2: Object): number;
                /**
                 * Snaps a line to the nearest angle
                 *
                 * @param obj
                 * @param ca A decimal number fraction of a half circle..5 would snap to 90 degrees.25  would snap to 45 degrees.125 would snap to 22.5 degrees, etc.
                 */
                snapAngle(obj: Event, ca: number): any;
                /**
                 * Creates a unique ID.
                 *
                 * @param str               OptionalIf provided, kept in a map, incrementedand used in the id. Otherwise 'shape' is used.
                 */
                uid(str: String): String;
            }
            namespace common {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/util/common.objects.html
                 *
                 *
                 */
                interface objects {
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/util/oo.html
             *
             * Inheritance utilities used in DojoX Drawing
             * Inheritance utilities used in DojoX Drawing.
             * There were designed in a effort to make Drawing as
             * fast as possible - especially in a case where thousands
             * of objects are being loaded. Drawing declare performs
             * about 3 times faster than declare and 2 times
             * faster than Dojox declare. This is not to say Drawing
             * declare is without limitations. It doesn't have the same
             * syntactic sugar and extensibility of the other two. You
             * can't inherit methods. It won't work with Dijit. But it
             * is simple and effective.
             *
             */
            interface oo {
                /**
                 * Creates a constructor Function from a
                 * Function, and collection of methods, and
                 * more Functions that are extended.
                 * Similar in look and feel to declare as
                 * far as order and number of arguments, although
                 * constructed a little closer to prototypical
                 * inheritance. All arguments passed into the
                 * constructor are passed into all sub constructors.
                 *
                 * Arguments are: Function, [Object|Function....]
                 * The first argument is always the base
                 * constructor. The last argument is always
                 * an object of methods (or empty object) to
                 * be mixed in (in the future would like to
                 * make that object optional). Remaining
                 * arguments are other constructors mixed in
                 * using extend() (See below).
                 *
                 */
                declare(): any;
                /**
                 * Extends constructors to inherit from other
                 * constructors .
                 * Typically not used by itself - it's used as
                 * part of declare(). Could be used by itself
                 * however, to mix together two or more
                 * constructors.
                 *
                 * Any number of arguments, all must be
                 * function constructors. The first is
                 * considered the base object and its
                 * constructor will fire first.
                 *
                 */
                extend(): Function;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/util/positioning.html
             *
             *
             */
            interface positioning {
                /**
                 * Returns the optimal position for annotations.Angle.
                 *
                 * @param start
                 * @param end
                 */
                angle(start: Object, end: Object): Object;
                /**
                 * Returns the optimal text positions for annotations.Label.
                 *
                 * @param start
                 * @param end
                 */
                label(start: Object, end: Object): Object;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/drawing/util/typeset.html
             *
             *
             */
            interface typeset {
                /**
                 *
                 * @param inText
                 */
                convertHTML(inText: any): any;
                /**
                 *
                 * @param inText
                 */
                convertLaTeX(inText: any): any;
            }
        }

    }

}

declare module "dojox/drawing" {
    var exp: dojox.drawing
    export=exp;
}
declare module "dojox/drawing/_base" {
    var exp: dojox.drawing._base
    export=exp;
}
declare module "dojox/drawing/Drawing" {
    var exp: dojox.drawing.Drawing
    export=exp;
}
declare module "dojox/drawing/defaults" {
    var exp: dojox.drawing.defaults
    export=exp;
}
declare module "dojox/drawing/defaults.arrows" {
    var exp: dojox.drawing.defaults.arrows
    export=exp;
}
declare module "dojox/drawing/defaults.disabled" {
    var exp: dojox.drawing.defaults.disabled
    export=exp;
}
declare module "dojox/drawing/defaults.anchors" {
    var exp: dojox.drawing.defaults.anchors
    export=exp;
}
declare module "dojox/drawing/defaults.highlighted" {
    var exp: dojox.drawing.defaults.highlighted
    export=exp;
}
declare module "dojox/drawing/defaults.button" {
    var exp: dojox.drawing.defaults.button
    export=exp;
}
declare module "dojox/drawing/defaults.hitSelected" {
    var exp: dojox.drawing.defaults.hitSelected
    export=exp;
}
declare module "dojox/drawing/defaults.hitNorm" {
    var exp: dojox.drawing.defaults.hitNorm
    export=exp;
}
declare module "dojox/drawing/defaults.hitHighlighted" {
    var exp: dojox.drawing.defaults.hitHighlighted
    export=exp;
}
declare module "dojox/drawing/defaults.selected" {
    var exp: dojox.drawing.defaults.selected
    export=exp;
}
declare module "dojox/drawing/defaults.norm" {
    var exp: dojox.drawing.defaults.norm
    export=exp;
}
declare module "dojox/drawing/defaults.textMode" {
    var exp: dojox.drawing.defaults.textMode
    export=exp;
}
declare module "dojox/drawing/defaults.textDisabled" {
    var exp: dojox.drawing.defaults.textDisabled
    export=exp;
}
declare module "dojox/drawing/defaults.text" {
    var exp: dojox.drawing.defaults.text
    export=exp;
}
declare module "dojox/drawing/annotations/Label" {
    var exp: dojox.drawing.annotations.Label
    export=exp;
}
declare module "dojox/drawing/annotations/Label.Label" {
    var exp: dojox.drawing.annotations.Label.Label
    export=exp;
}
declare module "dojox/drawing/annotations/Angle" {
    var exp: dojox.drawing.annotations.Angle
    export=exp;
}
declare module "dojox/drawing/annotations/BoxShadow" {
    var exp: dojox.drawing.annotations.BoxShadow
    export=exp;
}
declare module "dojox/drawing/annotations/Arrow" {
    var exp: dojox.drawing.annotations.Arrow
    export=exp;
}
declare module "dojox/drawing/library/icons" {
    var exp: dojox.drawing.library.icons
    export=exp;
}
declare module "dojox/drawing/library/icons.ellipse" {
    var exp: dojox.drawing.library.icons.ellipse
    export=exp;
}
declare module "dojox/drawing/library/icons.arrow" {
    var exp: dojox.drawing.library.icons.arrow
    export=exp;
}
declare module "dojox/drawing/library/icons.axes" {
    var exp: dojox.drawing.library.icons.axes
    export=exp;
}
declare module "dojox/drawing/library/icons.pan" {
    var exp: dojox.drawing.library.icons.pan
    export=exp;
}
declare module "dojox/drawing/library/icons.line" {
    var exp: dojox.drawing.library.icons.line
    export=exp;
}
declare module "dojox/drawing/library/icons.path" {
    var exp: dojox.drawing.library.icons.path
    export=exp;
}
declare module "dojox/drawing/library/icons.equation" {
    var exp: dojox.drawing.library.icons.equation
    export=exp;
}
declare module "dojox/drawing/library/icons.iconize" {
    var exp: dojox.drawing.library.icons.iconize
    export=exp;
}
declare module "dojox/drawing/library/icons.pencil" {
    var exp: dojox.drawing.library.icons.pencil
    export=exp;
}
declare module "dojox/drawing/library/icons.plus" {
    var exp: dojox.drawing.library.icons.plus
    export=exp;
}
declare module "dojox/drawing/library/icons.triangle" {
    var exp: dojox.drawing.library.icons.triangle
    export=exp;
}
declare module "dojox/drawing/library/icons.vector" {
    var exp: dojox.drawing.library.icons.vector
    export=exp;
}
declare module "dojox/drawing/library/icons.rect" {
    var exp: dojox.drawing.library.icons.rect
    export=exp;
}
declare module "dojox/drawing/library/icons.zoom100" {
    var exp: dojox.drawing.library.icons.zoom100
    export=exp;
}
declare module "dojox/drawing/library/icons.textBlock" {
    var exp: dojox.drawing.library.icons.textBlock
    export=exp;
}
declare module "dojox/drawing/library/icons.zoomIn" {
    var exp: dojox.drawing.library.icons.zoomIn
    export=exp;
}
declare module "dojox/drawing/library/icons.zoomOut" {
    var exp: dojox.drawing.library.icons.zoomOut
    export=exp;
}
declare module "dojox/drawing/library/greek" {
    var exp: dojox.drawing.library.greek
    export=exp;
}
declare module "dojox/drawing/manager/_registry" {
    var exp: dojox.drawing.manager._registry
    export=exp;
}
declare module "dojox/drawing/manager/keys" {
    var exp: dojox.drawing.manager.keys
    export=exp;
}
declare module "dojox/drawing/manager/Anchors" {
    var exp: dojox.drawing.manager.Anchors
    export=exp;
}
declare module "dojox/drawing/manager/Canvas" {
    var exp: dojox.drawing.manager.Canvas
    export=exp;
}
declare module "dojox/drawing/manager/StencilUI" {
    var exp: dojox.drawing.manager.StencilUI
    export=exp;
}
declare module "dojox/drawing/manager/Undo" {
    var exp: dojox.drawing.manager.Undo
    export=exp;
}
declare module "dojox/drawing/manager/Mouse" {
    var exp: dojox.drawing.manager.Mouse
    export=exp;
}
declare module "dojox/drawing/manager/Stencil" {
    var exp: dojox.drawing.manager.Stencil
    export=exp;
}
declare module "dojox/drawing/plugins/_Plugin" {
    var exp: dojox.drawing.plugins._Plugin
    export=exp;
}
declare module "dojox/drawing/plugins/drawing/Grid" {
    var exp: dojox.drawing.plugins.drawing.Grid
    export=exp;
}
declare module "dojox/drawing/plugins/drawing/GreekPalette" {
    var exp: dojox.drawing.plugins.drawing.GreekPalette
    export=exp;
}
declare module "dojox/drawing/plugins/tools/Zoom" {
    var exp: dojox.drawing.plugins.tools.Zoom
    export=exp;
}
declare module "dojox/drawing/plugins/tools/Zoom.Zoom100" {
    var exp: dojox.drawing.plugins.tools.Zoom.Zoom100
    export=exp;
}
declare module "dojox/drawing/plugins/tools/Zoom.ZoomOut" {
    var exp: dojox.drawing.plugins.tools.Zoom.ZoomOut
    export=exp;
}
declare module "dojox/drawing/plugins/tools/Zoom.ZoomIn" {
    var exp: dojox.drawing.plugins.tools.Zoom.ZoomIn
    export=exp;
}
declare module "dojox/drawing/plugins/tools/Iconize" {
    var exp: dojox.drawing.plugins.tools.Iconize
    export=exp;
}
declare module "dojox/drawing/plugins/tools/Iconize.setup" {
    var exp: dojox.drawing.plugins.tools.Iconize.setup
    export=exp;
}
declare module "dojox/drawing/plugins/tools/Pan" {
    var exp: dojox.drawing.plugins.tools.Pan
    export=exp;
}
declare module "dojox/drawing/plugins/tools/Pan.setup" {
    var exp: dojox.drawing.plugins.tools.Pan.setup
    export=exp;
}
declare module "dojox/drawing/stencil/_Base" {
    var exp: dojox.drawing.stencil._Base
    export=exp;
}
declare module "dojox/drawing/stencil/Line" {
    var exp: dojox.drawing.stencil.Line
    export=exp;
}
declare module "dojox/drawing/stencil/Ellipse" {
    var exp: dojox.drawing.stencil.Ellipse
    export=exp;
}
declare module "dojox/drawing/stencil/Path" {
    var exp: dojox.drawing.stencil.Path
    export=exp;
}
declare module "dojox/drawing/stencil/Rect" {
    var exp: dojox.drawing.stencil.Rect
    export=exp;
}
declare module "dojox/drawing/stencil/Image" {
    var exp: dojox.drawing.stencil.Image
    export=exp;
}
declare module "dojox/drawing/stencil/Text" {
    var exp: dojox.drawing.stencil.Text
    export=exp;
}
declare module "dojox/drawing/tools/Arrow" {
    var exp: dojox.drawing.tools.Arrow
    export=exp;
}
declare module "dojox/drawing/tools/Arrow.setup" {
    var exp: dojox.drawing.tools.Arrow.setup
    export=exp;
}
declare module "dojox/drawing/tools/Ellipse" {
    var exp: dojox.drawing.tools.Ellipse
    export=exp;
}
declare module "dojox/drawing/tools/Ellipse.setup" {
    var exp: dojox.drawing.tools.Ellipse.setup
    export=exp;
}
declare module "dojox/drawing/tools/Pencil" {
    var exp: dojox.drawing.tools.Pencil
    export=exp;
}
declare module "dojox/drawing/tools/Pencil.setup" {
    var exp: dojox.drawing.tools.Pencil.setup
    export=exp;
}
declare module "dojox/drawing/tools/Rect" {
    var exp: dojox.drawing.tools.Rect
    export=exp;
}
declare module "dojox/drawing/tools/Rect.setup" {
    var exp: dojox.drawing.tools.Rect.setup
    export=exp;
}
declare module "dojox/drawing/tools/Path" {
    var exp: dojox.drawing.tools.Path
    export=exp;
}
declare module "dojox/drawing/tools/Path.setup" {
    var exp: dojox.drawing.tools.Path.setup
    export=exp;
}
declare module "dojox/drawing/tools/Line" {
    var exp: dojox.drawing.tools.Line
    export=exp;
}
declare module "dojox/drawing/tools/Line.setup" {
    var exp: dojox.drawing.tools.Line.setup
    export=exp;
}
declare module "dojox/drawing/tools/TextBlock" {
    var exp: dojox.drawing.tools.TextBlock
    export=exp;
}
declare module "dojox/drawing/tools/TextBlock.setup" {
    var exp: dojox.drawing.tools.TextBlock.setup
    export=exp;
}
declare module "dojox/drawing/tools/custom/Axes" {
    var exp: dojox.drawing.tools.custom.Axes
    export=exp;
}
declare module "dojox/drawing/tools/custom/Axes.setup" {
    var exp: dojox.drawing.tools.custom.Axes.setup
    export=exp;
}
declare module "dojox/drawing/tools/custom/Vector" {
    var exp: dojox.drawing.tools.custom.Vector
    export=exp;
}
declare module "dojox/drawing/tools/custom/Vector.setup" {
    var exp: dojox.drawing.tools.custom.Vector.setup
    export=exp;
}
declare module "dojox/drawing/tools/custom/Equation" {
    var exp: dojox.drawing.tools.custom.Equation
    export=exp;
}
declare module "dojox/drawing/tools/custom/Equation.setup" {
    var exp: dojox.drawing.tools.custom.Equation.setup
    export=exp;
}
declare module "dojox/drawing/ui/Button" {
    var exp: dojox.drawing.ui.Button
    export=exp;
}
declare module "dojox/drawing/ui/Toolbar" {
    var exp: dojox.drawing.ui.Toolbar
    export=exp;
}
declare module "dojox/drawing/ui/Tooltip" {
    var exp: dojox.drawing.ui.Tooltip
    export=exp;
}
declare module "dojox/drawing/ui/dom/Toolbar" {
    var exp: dojox.drawing.ui.dom.Toolbar
    export=exp;
}
declare module "dojox/drawing/ui/dom/Pan" {
    var exp: dojox.drawing.ui.dom.Pan
    export=exp;
}
declare module "dojox/drawing/ui/dom/Pan.setup" {
    var exp: dojox.drawing.ui.dom.Pan.setup
    export=exp;
}
declare module "dojox/drawing/ui/dom/Zoom" {
    var exp: dojox.drawing.ui.dom.Zoom
    export=exp;
}
declare module "dojox/drawing/util/positioning" {
    var exp: dojox.drawing.util.positioning
    export=exp;
}
declare module "dojox/drawing/util/oo" {
    var exp: dojox.drawing.util.oo
    export=exp;
}
declare module "dojox/drawing/util/typeset" {
    var exp: dojox.drawing.util.typeset
    export=exp;
}
declare module "dojox/drawing/util/common" {
    var exp: dojox.drawing.util.common
    export=exp;
}
declare module "dojox/drawing/util/common.objects" {
    var exp: dojox.drawing.util.common.objects
    export=exp;
}
