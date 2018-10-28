// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace dojox {

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/html.html
     *
     * Deprecated.  Should require dojox/html modules directly rather than trying to access them through
     * this module.
     *
     */
    interface html {
    }
    namespace html {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/html/ellipsis.html
         *
         * offers cross-browser support for text-overflow: ellipsis
         * Add "dojoxEllipsis" on any node that you want to ellipsis-ize. In order to function properly,
         * the node with the dojoxEllipsis class set on it should be a child of a node with a defined width.
         * It should also be a block-level element (i.e. <div>) - it will not work on td elements.
         * NOTE: When using the dojoxEllipsis class within tables, the table needs to have the table-layout: fixed style
         *
         */
        interface ellipsis {
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/html/entities.html
         *
         *
         */
        interface entities {
            /**
             *
             */
            html: any[];
            /**
             *
             */
            latin: any[];
            /**
             * Function to obtain an entity encoding for a specified character
             *
             * @param str The string to process for possible entity encoding to decode.
             * @param m An optional list of character to entity name mappings (array ofarrays).  If not provided, it uses the HTML and Latin entities as theset to map and decode.
             */
            decode(str: any, m: any): void;
            /**
             * Function to obtain an entity encoding for a specified character
             *
             * @param str The string to process for possible entity encoding.
             * @param m An optional list of character to entity name mappings (array ofarrays).  If not provided, it uses the and Latin entities as theset to map and escape.
             */
            encode(str: any, m: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/html/metrics.html
         *
         *
         */
        interface metrics {
            /**
             *
             * @param recalculate
             */
            getCachedFontMeasurements(recalculate: any): any;
            /**
             * Returns an object that has pixel equivilents of standard font size values.
             *
             */
            getFontMeasurements(): Object;
            /**
             *
             */
            getScrollbar(): Object;
            /**
             *
             * @param text
             * @param style
             * @param className               Optional
             */
            getTextBox(text: String, style: Object, className: String): void;
            /**
             *
             */
            initOnFontResize(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/html/styles.html
         *
         *
         */
        interface styles {
            /**
             *
             */
            entities: Object;
            /**
             *
             */
            "ext-dojo": Object;
            /**
             *
             */
            metrics: Object;
            /**
             * Getter/Setter
             * If passed a title, enables a that style sheet. All other
             * toggle-able style sheets are disabled.
             * If no argument is passed, returns currently enabled
             * style sheet.
             *
             * @param title               Optional
             */
            activeStyleSheet(title: String): void;
            /**
             * Disables the dynamic style sheet with the name passed in the
             * argument. If no arg is passed, defaults to the default style sheet.
             *
             * @param styleSheetName
             */
            disableStyleSheet(styleSheetName: String): void;
            /**
             * Enables the style sheet with the name passed in the
             * argument. Deafults to the default style sheet.
             *
             * @param styleSheetName
             */
            enableStyleSheet(styleSheetName: String): void;
            /**
             * Creates and returns a dynamically created style sheet
             * used for dynamic styles
             *
             * @param styleSheetName               OptionalThe name given the style sheet so that multiplestyle sheets can be created and referenced. Ifno argument is given, the name "default" is used.
             */
            getDynamicStyleSheet(styleSheetName: String): any;
            /**
             * Returns the style sheet that was initially enabled
             * on document launch.
             * TODO, does not work.
             *
             */
            getPreferredStyleSheet(): void;
            /**
             * Returns a style sheet based on the argument.
             * Searches dynamic style sheets first. If no matches,
             * searches document style sheets.
             *
             * @param styleSheetName               OptionalA title or an href to a style sheet. Title can bean attribute in a tag, or a dynamic style sheetreference. Href can be the name of the file.If no argument, the assumed created dynamic stylesheet is used.
             */
            getStyleSheet(styleSheetName: String): void;
            /**
             * Collects all the style sheets referenced in the HTML page,
             * including any included via @import.
             *
             */
            getStyleSheets(): any;
            /**
             * Searches HTML for style sheets that are "toggle-able" -
             * can be enabled and disabled. These would include sheets
             * with the title attribute, as well as the REL attribute.
             *
             */
            getToggledStyleSheets(): any;
            /**
             * Creates a style and attaches it to a dynamically created stylesheet
             *
             * @param selector A fully qualified class name, as it would appear ina CSS dojo.doc. Start classes with periods, targetnodes with '#'. Large selectors can also be createdlike:"#myDiv.myClass span input"
             * @param declaration A single string that would make up a style block, notincluding the curly braces. Include semi-colons betweenstatements. Do not use JavaScript style declarationsin camel case, use as you would in a CSS dojo.doc:"color:#ffoooo;font-size:12px;margin-left:5px;"
             * @param styleSheetName               OptionalName of the dynamic style sheet this rule should beinserted into. If is not found by that name, it iscreated. If no name is passed, the name "default" isused.
             */
            insertCssRule(selector: String, declaration: String, styleSheetName: String): String;
            /**
             * Not implemented - it seems to have some merit for changing some complex
             * selectors. It's not much use for changing simple ones like "span".
             * For now, simply write a new rule which will cascade over the first.
             *
             * Modifies an existing cssRule
             *
             * @param selector
             * @param declaration
             * @param styleSheetName
             */
            modifyCssRule(selector: any, declaration: any, styleSheetName: any): void;
            /**
             * Removes a cssRule base on the selector and declaration passed
             * The declaration is needed for cases of dupe selectors
             * Only removes DYNAMICALLY created cssRules. If you
             * created it with dh.insertCssRule, it can be removed.
             *
             * @param selector
             * @param declaration
             * @param styleSheetName
             */
            removeCssRule(selector: String, declaration: String, styleSheetName: String): void;
        }
        namespace styles {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/html/styles._ContentSetter.html
             *
             *
             * @param params
             * @param node
             */
            class _ContentSetter {
                constructor(params: Object, node: String);
                /**
                 * Adjust relative paths in html string content to point to this page
                 * Only useful if you grab content from a another folder than the current one
                 *
                 */
                "adjustPaths": boolean;
                /**
                 * Should the content be treated as a full html document,
                 * and the real content stripped of ,  wrapper before injection
                 *
                 */
                "cleanContent": boolean;
                /**
                 * The content to be placed in the node. Can be an HTML string, a node reference, or a enumerable list of nodes
                 *
                 */
                "content": string;
                /**
                 *
                 */
                "executeScripts": boolean;
                /**
                 * Should the content be treated as a full html document,
                 * and the real content stripped of <html> <body> wrapper before injection
                 *
                 */
                "extractContent": boolean;
                /**
                 * Usually only used internally, and auto-generated with each instance
                 *
                 */
                "id": Object;
                /**
                 * An node which will be the parent element that we set content into
                 *
                 */
                "node": HTMLElement;
                /**
                 * Should the node by passed to the parser after the new content is set
                 *
                 */
                "parseContent": boolean;
                /**
                 * Flag passed to parser.  Root for attribute names to search for.   If scopeName is dojo,
                 * will search for data-dojo-type (or dojoType).  For backwards compatibility
                 * reasons defaults to dojo._scopeName (which is "dojo" except when
                 * multi-version support is used, when it will be something like dojo16, dojo20, etc.)
                 *
                 */
                "parserScope": string;
                /**
                 *
                 */
                "referencePath": string;
                /**
                 *
                 */
                "renderStyles": boolean;
                /**
                 *
                 */
                "scriptHasHooks": boolean;
                /**
                 *
                 */
                "scriptHookReplacement": Object;
                /**
                 * Start the child widgets after parsing them.   Only obeyed if parseContent is true.
                 *
                 */
                "startup": boolean;
                /**
                 *
                 */
                empty(): void;
                /**
                 * front-end to the set-content sequence
                 *
                 * @param cont               OptionalAn html string, node or enumerable list of nodes for insertion into the domIf not provided, the object's content property will be used
                 * @param params               Optional
                 */
                set(cont: String, params: Object): any;
                /**
                 * front-end to the set-content sequence
                 *
                 * @param cont               OptionalAn html string, node or enumerable list of nodes for insertion into the domIf not provided, the object's content property will be used
                 * @param params               Optional
                 */
                set(cont: HTMLElement, params: Object): any;
                /**
                 * front-end to the set-content sequence
                 *
                 * @param cont               OptionalAn html string, node or enumerable list of nodes for insertion into the domIf not provided, the object's content property will be used
                 * @param params               Optional
                 */
                set(cont: NodeList, params: Object): any;
                /**
                 * sets the content on the node
                 *
                 */
                setContent(): void;
                /**
                 *
                 */
                tearDown(): void;
                /**
                 * Called after instantiation, but before set();
                 * It allows modification of any of the object properties - including the node and content
                 * provided - before the set operation actually takes place
                 * This implementation extends that of dojo.html._ContentSetter
                 * to add handling for adjustPaths, renderStyles on the html string content before it is set
                 *
                 */
                onBegin(): void;
                /**
                 *
                 * @param err
                 */
                onContentError(err: any): String;
                /**
                 * Called after set(), when the new content has been pushed into the node
                 * It provides an opportunity for post-processing before handing back the node to the caller
                 * This implementation extends that of dojo.html._ContentSetter
                 *
                 */
                onEnd(): any;
                /**
                 *
                 * @param err
                 */
                onExecError(err: any): String;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/html/styles.entities.html
             *
             *
             */
            interface entities {
                /**
                 *
                 */
                html: any[];
                /**
                 *
                 */
                latin: any[];
                /**
                 * Function to obtain an entity encoding for a specified character
                 *
                 * @param str The string to process for possible entity encoding to decode.
                 * @param m An optional list of character to entity name mappings (array ofarrays).  If not provided, it uses the HTML and Latin entities as theset to map and decode.
                 */
                decode(str: any, m: any): void;
                /**
                 * Function to obtain an entity encoding for a specified character
                 *
                 * @param str The string to process for possible entity encoding.
                 * @param m An optional list of character to entity name mappings (array ofarrays).  If not provided, it uses the and Latin entities as theset to map and escape.
                 */
                encode(str: any, m: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/html/styles.ext-dojo.html
             *
             *
             */
            interface ext_dojo {
                /**
                 *
                 */
                style: Object;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/html/styles.metrics.html
             *
             *
             */
            interface metrics {
                /**
                 *
                 * @param recalculate
                 */
                getCachedFontMeasurements(recalculate: any): any;
                /**
                 * Returns an object that has pixel equivilents of standard font size values.
                 *
                 */
                getFontMeasurements(): Object;
                /**
                 *
                 */
                getScrollbar(): Object;
                /**
                 *
                 * @param text
                 * @param style
                 * @param className               Optional
                 */
                getTextBox(text: String, style: Object, className: String): void;
                /**
                 *
                 */
                initOnFontResize(): void;
            }
        }

        module _base {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/html/_base._ContentSetter.html
             *
             *
             * @param params
             * @param node
             */
            class _ContentSetter {
                constructor(params: Object, node: String);
                /**
                 * Adjust relative paths in html string content to point to this page
                 * Only useful if you grab content from a another folder than the current one
                 *
                 */
                "adjustPaths": boolean;
                /**
                 * Should the content be treated as a full html document,
                 * and the real content stripped of ,  wrapper before injection
                 *
                 */
                "cleanContent": boolean;
                /**
                 * The content to be placed in the node. Can be an HTML string, a node reference, or a enumerable list of nodes
                 *
                 */
                "content": string;
                /**
                 *
                 */
                "executeScripts": boolean;
                /**
                 * Should the content be treated as a full html document,
                 * and the real content stripped of <html> <body> wrapper before injection
                 *
                 */
                "extractContent": boolean;
                /**
                 * Usually only used internally, and auto-generated with each instance
                 *
                 */
                "id": Object;
                /**
                 * An node which will be the parent element that we set content into
                 *
                 */
                "node": HTMLElement;
                /**
                 * Should the node by passed to the parser after the new content is set
                 *
                 */
                "parseContent": boolean;
                /**
                 * Flag passed to parser.  Root for attribute names to search for.   If scopeName is dojo,
                 * will search for data-dojo-type (or dojoType).  For backwards compatibility
                 * reasons defaults to dojo._scopeName (which is "dojo" except when
                 * multi-version support is used, when it will be something like dojo16, dojo20, etc.)
                 *
                 */
                "parserScope": string;
                /**
                 *
                 */
                "referencePath": string;
                /**
                 *
                 */
                "renderStyles": boolean;
                /**
                 *
                 */
                "scriptHasHooks": boolean;
                /**
                 *
                 */
                "scriptHookReplacement": Object;
                /**
                 * Start the child widgets after parsing them.   Only obeyed if parseContent is true.
                 *
                 */
                "startup": boolean;
                /**
                 *
                 */
                empty(): void;
                /**
                 * front-end to the set-content sequence
                 *
                 * @param cont               OptionalAn html string, node or enumerable list of nodes for insertion into the domIf not provided, the object's content property will be used
                 * @param params               Optional
                 */
                set(cont: String, params: Object): any;
                /**
                 * front-end to the set-content sequence
                 *
                 * @param cont               OptionalAn html string, node or enumerable list of nodes for insertion into the domIf not provided, the object's content property will be used
                 * @param params               Optional
                 */
                set(cont: HTMLElement, params: Object): any;
                /**
                 * front-end to the set-content sequence
                 *
                 * @param cont               OptionalAn html string, node or enumerable list of nodes for insertion into the domIf not provided, the object's content property will be used
                 * @param params               Optional
                 */
                set(cont: NodeList, params: Object): any;
                /**
                 * sets the content on the node
                 *
                 */
                setContent(): void;
                /**
                 *
                 */
                tearDown(): void;
                /**
                 * Called after instantiation, but before set();
                 * It allows modification of any of the object properties - including the node and content
                 * provided - before the set operation actually takes place
                 * This implementation extends that of dojo.html._ContentSetter
                 * to add handling for adjustPaths, renderStyles on the html string content before it is set
                 *
                 */
                onBegin(): void;
                /**
                 *
                 * @param err
                 */
                onContentError(err: any): String;
                /**
                 * Called after set(), when the new content has been pushed into the node
                 * It provides an opportunity for post-processing before handing back the node to the caller
                 * This implementation extends that of dojo.html._ContentSetter
                 *
                 */
                onEnd(): any;
                /**
                 *
                 * @param err
                 */
                onExecError(err: any): String;
            }
        }

        namespace ext_dojo {
            namespace style {
            }

        }

        namespace format {
        }

    }
}

declare module "dojox/html" {
    var exp: dojox.html
    export=exp;
}
declare module "dojox/html/ellipsis" {
    var exp: dojox.html.ellipsis
    export=exp;
}
declare module "dojox/html/entities" {
    var exp: dojox.html.entities
    export=exp;
}
declare module "dojox/html/metrics" {
    var exp: dojox.html.metrics
    export=exp;
}
declare module "dojox/html/styles" {
    var exp: dojox.html.styles
    export=exp;
}
declare module "dojox/html/styles._ContentSetter" {
    var exp: dojox.html.styles._ContentSetter
    export=exp;
}
declare module "dojox/html/styles.ext-dojo" {
    var exp: dojox.html.styles.ext_dojo
    export=exp;
}
declare module "dojox/html/styles.metrics" {
    var exp: dojox.html.styles.metrics
    export=exp;
}
declare module "dojox/html/styles.entities" {
    var exp: dojox.html.styles.entities
    export=exp;
}
declare module "dojox/html/_base._ContentSetter" {
    var exp: dojox.html._base._ContentSetter
    export=exp;
}
