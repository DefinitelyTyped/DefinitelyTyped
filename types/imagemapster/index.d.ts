// Type definitions for imagemapster 1.2.10
// Project: http://www.outsharked.com/imagemapster/
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import jQuery = require('jquery');

declare global {
    namespace ImageMapster {

        type Select = "select";
        type Deselect = "deselect";
        type Set = "set";
        type Get = "get";
        type Highlight = "highlight";
        type Unbind = "unbind";
        type Resize = "resize";
        type Snapshot = "snapshot";
        type Rebind = "rebind";
        type Keys = "keys";
        type SetOptions = "set_options";
        type GetOptions = "get_options";
        type Tooltip = "tooltip";
        type ToolTipCloseEvent = "area-mouseout" | "area-click" | "tooltip-click" | "image-mouseout";
        type State = "highlight" | "select";

        interface RenderingOptions {

            /**
             * fade effect - can only be applied to "render_highlight".
             *
             * Use a fade effect when highlighting areas on mouseover.
             */
            fade?: boolean | undefined;

            /**
             * The duration of the fade-in effect, in milliseconds.
             */
            fadeDuration?: number | undefined;

            /**
             * highlight areas on mouseover. When null (default), the behavior is
             * disabled for mobile browsers. You can explicitly enable or disable
             * it by setting this option to a boolean value.
             */
            highlight?: boolean | undefined;

            /**
             * the map or an area on the map can be selected (or deselected).
             *
             * When true, the image map will function like a multiple-select menu.
             * Users can click any area to select or deselect it. When applied to
             * the entire map, it determines whether or not the click-selection
             * functionality is enabled. When applied to an area, it determines
             * whether that individual area (or group) can be selected. By default,
             * the map and all areas are selectable.
             */
            isSelectable?: boolean | undefined;

            /**
             * the map or area on the map can be deselected.
             *
             * Normally true, this option can be used to prevent users from
             * unselecting items once they have been selected. When combined with
             * singleSelect, the effect is that one and only one option can be
             * selected at any given time. Users cannot deselect the active option.
             * This provides a menu-like functionality. It is possible for zero
             * items to be selected if this is the default state (or the only
             * selected item is deselected programatically).
             */
            isDeselectable?: boolean | undefined;

            /**
             * only one area can be selected at a time
             *
             * When true, only one or zero areas can be selected at any given time.
             * If an area is selected and the user selects another area, the
             * previously selected area will become deselected. Unlike
             * "staticState", this property cannot be overridden by setting areas
             * programatically, only one (or zero) areas can ever be selected when
             * this option is true.
             */
            singleSelect?: boolean | undefined;

            /**
             * the map or area is permanently in a selected or deselected state.
             *
             * When true or false, the map or area to which this option applies
             * will be permanently selected or deselected. Typically this is more
             * useful applied to individual areas that you want to exclude from the
             * interactive part of the map.
             *
             * staticState forces an area to be always selected or deselected. If
             * set, this will supercede isSelectable. Something with a staticState
             * will always be in that state and it cannot be changed by the user.
             * Note that when setting states programatically, this option will not
             * be honored; it only affects user interaction.
             */
            staticState?: boolean | undefined;

            /**
             * initial selection state of an area.
             *
             * The area in question is selected. To set default selections when
             * creating a new mapster, use this option for a specific area (see
             * above).
             */
            selected?: boolean | undefined;

            /**
             * Use an alternate image of the same size as the imagemap as the
             * source for highlight or select effects.
             *
             * When specified, the mapster will highlight areas using the image
             * data obtained from the same area in an alternate image, instead of
             * using a fill effect to highlight or select the area. This feature is
             * currently available in browsers with HTML5 canvas support. In
             * practical terms, this means it will work in all commonly used
             * browsers except IE 8 or lower.
             *
             * If this feature is enabled when an unsupported browser is used, it
             * will fall back to the normal highlight method.
             *
             * The fill, stroke and opacity effects can be specified independently
             * from those used for the normal higlight effect. This ensures that
             * when your page is viewed with a non-supported browser, you can still
             * control the rendering as would be appropriate for a normal
             * fill/stroke effect, which may be different from when you're using an
             * alternate image.
             */
            altImage?: string | undefined;
            altImageFill?: boolean | undefined;
            altImageStroke?: boolean | undefined;
            altImageOpacity?: number | undefined;

            /**
             * Areas should be flood-filled when moused over or highlighted.
             */
            fill?: boolean | undefined;

            /**
             * The color used for flood fill.
             */
            fillColor?: string | undefined;
            fillColorMask?: string | undefined;

            /**
             * The opacity of the fill. This is a number from 0 to 1.
             */
            fillOpacity?: number | undefined;

            /**
             * Areas should be outlined when moused over or highlighted.
             */
            stroke?: boolean | undefined;

            /**
             * The color of the outline.
             */
            strokeColor?: string | undefined;

            /**
             * The opacity of the outline.
             */
            strokeOpacity?: number | undefined;

            /**
             * The width of the outline.
             */
            strokeWidth?: number | undefined;

            /**
             * The options below control the way highlighted areas are rendered.
             * Each can be applied globally to the map, or to each element, using
             * the areas option to pass area-specific options. These options apply
             * to either highlighted or selected areas. Highlighting occurs when
             * the mouse enters an area on the image map. Selection occurs when an
             * area is clicked, and selection is enabled. These options will be
             * applied to both situations if present in the root of the options
             * object. They can also be applied to one or the other situations
             * specifically using the render_highlight and render_select options.
             */
            render_highlight?: string | RenderingOptions | undefined;
            render_select?: string | RenderingOptions | undefined;
        }

        interface AreaRenderingOptions extends RenderingOptions {

            key: string;

            /**
             * when rendering an area or area group, also render the areas in the
             * other group (or groups) specified
             *
             * This is an area-specific option that allows you to create
             * supergroups. A supergroup is a collection of groups that will all be
             * highlighted simultaneously, but only when the area that defines the
             * supergroup is moused over or activated through code.
             *
             * When the area for which this option has been set is activated, all
             * the areas specified in the includeKeys list will also be rendered.
             * This is a one-way relationship. Defining a supergroup in an area
             * causes all the other groups to be highlighted, but not the other way
             * around.
             *
             * A typical use of this is to define areas that you want to be
             * highlighted when the mouse enters some specific area, but that you
             * do not want to be highlighted on their own if the target area is
             * moused over. This could be a hidden menu, for example: you want the
             * menu to display when the hotspot is moused over, but when it's
             * hidden, mousing over the menu area itself should have no effect.
             */
            includeKeys?: string | undefined;

            /**
             * the area is a mask rather than a highlighted area.
             *
             * Normally, every area in an imagemap is an active area, and would be
             * highlighted when moused over (unless its behavior was otherwise
             * specified with staticState). The isMask option allows you to
             * identify an area as being a mask. When a mask is part of an area
             * group, the masked area will be specifically excluded from the
             * rendering of a highlight or selected state.
             *
             * This is usually used in conjunction, or instead of, the nohref
             * attribute of the area tag. When nohref is specified on an area tag,
             * that area is specifically excluded from the hotspot of any area that
             * encompasses it. It will not respond to mouse events, and will not be
             * highlighted. This can be used to create "holes" in hotspots. By
             * default, ImageMapster will treat any area with nohref or no href tag
             * as masks, the same as if this option had been applied.
             *
             * Sometimes you won't be able to use nohref to identify something as a
             * mask, for example, if you intend to re-use an area has both a mask,
             * and an independent hotspot. This would be typical if you wanted to a
             * selectable area that was completely included within another
             * selectable area, but functioned independently, such as concentric
             * circles. In this case, you would need to identify the inner circle
             * as both a mask, and a hotspot. The nohref attribute would make it
             * not act as a hotspot, and only function as a mask. You couldn't also
             * select the inner area. You can solve this problem by including the
             * inner circle in two different groups - one group which is a mask for
             * the main area, and another which is an independent selectable area.
             * You can specify different options for each group, so even though
             * it's just one area, it can function as two completely independent
             * ones.
             *
             * There may also be situations where you do not want an area marked
             * with nohref to be treated as a mask. For example, given "area1" and
             * "area2," you may want to create a configuration where mousing over
             * "area1" causes both "area1" and "area2" to be highlighted, but
             * "area2" should not be highlighted on its own when it is moused over.
             * In this situation, you'll need to use "nohref" to prevent the hover
             * behavior for the area, but you still want it to be treated normally
             * when it's rendered as a result of mousing over "area1." You can
             * accomplish this using the noHrefIsMask global option, below.
             *
             * Generally, masked areas will appear as a window to the underlying
             * image. If stroke is in effect, the stroke will be rendered for the
             * mask as well as the areas, to create both inner and outer borders.
             * You can always specifically enable or disable this, or any other
             * effect, for any area as desired.
             *
             */
            isMask?: boolean | undefined;

            /**
             * tool tip data for an area
             *
             * When this area-specific option is present and showToolTips = true, a
             * toolTipContainer will be created this will be inserted into it,
             * either as inner text (if only text as passed) or as HTML if a jQuery
             * object is passed. In order to pass anything other than plain text
             * using this option you must use a jQuery object. Any string will be
             * treated as plain text (and special characters rendered correctly).
             */
            toolTip?: string | undefined;
        }

        interface OnClickData {

            /**
             * $(item) from boundList
             */
            listTarget?: JQuery | undefined;

            /**
             * mapKey for this area
             */
            key: string;

            e: JQueryEventObject;
            selected: boolean;
        }

        interface OnStateChangeData {

            /**
             * map key
             */
            key: string;

            state: "highlight" | "select";

            /**
             * indicating the current state (following the event)
             */
            selected: boolean;
        }

        interface OnMouseData {

            /**
             * area key
             */
            key: string;

            /**
             * true if area is currently selected
             */
            selected: boolean;

            e: JQueryEventObject;
            options: AreaRenderingOptions;
        }

        interface OnGetListData {

            /**
             * primary mapKey for this area or area group
             */
            key: string;

            /**
             * mapValue for this area or group
             */
            value: string;

            /**
             * array of areas that make up this group
             */
            area: any[];

            options: AreaRenderingOptions;
        }

        interface OnShowToolTipData {

            /**
             * jQuery object of the tooltip container
             */
            toolTip: JQuery;

            /**
             * map key for this area
             */
            key: string;

            /**
             * current state of the area
             */
            selected: boolean;

            areaOptions: AreaRenderingOptions;
        }

        interface Options extends RenderingOptions {

            /**
             * an attribute identifying each imagemap area.
             *
             * If specified, this refers to an attribute on the area tags that will
             * be used to group them logically. Any areas containing the same
             * mapKey will be considered part of a group, and rendered together
             * when any of these areas is activated. If you don't want this
             * functionality, ensure each key is unique. When mapKey is omitted,
             * then each area is considered to be independent from the other and no
             * grouping is applied.
             *
             * When mapKey is present, any area tags that are missing this
             * attribute will be excluded from the image map e ntirely. This is
             * functionally identical to setting staticState=false for these areas,
             * except they will be inaccessible through the API.
             *
             * ImageMapster will work with any attribute you identify as a key. If
             * you wish to maintain HTML compliance, it's recommeded that you use
             * attribute names starting with "data-", for example, data-mapkey. Any
             * such names are legal for the HTML5 document type. If you are using
             * older document types, the class attribute is part of the HTML spec
             * for area and will not cause any visual effects, so this is also a
             * good choice. It is not recommended to use id, since the values of
             * this attribute must be unique. title and alt also will cause
             * possibly undesired side effects.
             *
             * You can specify more than one value in the mapKey attribute,
             * separated by commas. This will cause an area to be a member of more
             * than one group. The area may have different options in the context
             * of each group. When the area is physically moused over, the first
             * key listed will identify the group that's effective for that action.
             */
            mapKey?: string | undefined;

            /**
             * an attribute on each area tag containing additional descriptive
             * information about an area.
             *
             * This option is applicable only when using onGetList. When set, the
             * data provided to the callback function will include the value of
             * this attribute for each group. This can be used to simplify building
             * a list with associated information, without having to match against
             * another resource. It also ties this information to the image map
             * itself. It is not required to use this option when using onGetList.
             *
             * For example, you could set mapValue: 'data-statename' to an imagemap
             * of the united states, and add an attribute to your areas that
             * provided the full name of each state, e.g. data-statename="Alaska".
             * This text would be included in the onGetList callback, and so you
             * could use it to construct an external list of states.
             *
             * If there are grouped areas (areas with the same key), then the value
             * from the first area found with data in this attribute will be used.
             */
            mapValue?: string | undefined;

            /**
             * Clicking on a link should cause the browser to navigate to the href
             * whenever it's not a hash sign (#). Version 1.2.4.050 and later
             *
             * By default, ImageMapster will prevent the default browser behavior
             * in image maps, and "select" areas when they are clicked. If you want
             * to navigate to the url for an area, use this option. When enabled,
             * all areas that have an href attribute, and its value is not empty or
             * "#" (just a hashtag).
             *
             * When area grouping is used, if an href is present for any area in
             * the primary group, this will be used as the navigation target. This
             * way you don't need to copy the url for every area in groups, rather,
             * you can include it on just one, and clicking any area will cause the
             * appropraite navigation.
             */
            clickNavigate?: boolean | undefined;

            /**
             * an attribute on items in a boundList that corresponds to the value
             * of the mapKey attributes.
             *
             * This is used to synchronize the actions on the imagemap with the
             * actions on a boundList. Each value should match a value from the
             * imageMap mapKey tag. Any item in the boundList with missing or
             * mismatched data will be ignored.
             */
            listKey?: string | undefined;

            /**
             * attribute to set or remove when an area is selected or deselected
             *
             * If boundList is present, when a map area is selected, set or remove
             * this attribute on the list element that matches that area based on
             * their respective keys.
             */
            listSelectedAttribute?: string | undefined;

            /**
             * a class to add or remove when an area is selected or deselected
             *
             * If a boundList is present, when a map area is selected, this class
             * is added or removed from the corresponding list element. This can be
             * used to easily create any kind of associated action when areas on
             * the map are changed.
             */
            listSelectedClass?: string | undefined;

            /**
             *
             * define area-specific options; each object in the array must contain
             * a "key" property identifying a valid mapKey, and additional
             * rendering options specific to that area or group
             */
            areas?: AreaRenderingOptions[] | undefined,

            /**
             * add "classname" class to the wrapper created around the image, or
             * copy classes from the image if "true"
             */
            wrapClass?: string | boolean | undefined;

            /**
             * add CSS to the wrapper created around the image
             */
            wrapCss?: string | boolean | undefined;

            /**
             * delay removing highlight when mouse exits an area (1.2.5b36)
             *
             * Normally, when the user's mouse pointer exits an area, the highlight
             * effect is removed immediately. This behavior can be changed with
             * this option. Setting it to a positive number causes a delay of n
             * milliseconds before the effect is removed. Setting to -1 causes the
             * effect to remain active until another hotspot is entered (e.g., it
             * will only be removed when superceded by a different area being
             * highlighted).
             *
             * When using mouseoutDelay, the onMouseover event will still be fired
             * at the time the user's mouse pointer leaves the area. However, the
             * onStateChange event will be delayed until the highlight is actually
             * removed.
             *
             * Whether or not you are using mouseoutDelay, only one area can be
             * highlighted at a time. That is, whenever the mouse pointer moves
             * onto a new active area, any previously highlighted area will become
             * un-highlighted, regardless of any delay in effect. Hovering over a
             * new area will always supercede any delay and cause the new area (and
             * only the new area) to be highlighted at that time. So, for dense
             * imagemaps where most areas adjoin one another, this option may not
             * have much effect within the boundaries of the imagemap. Rather, it
             * is intended to help keep the higlights active for imagemaps that are
             * sparse, or have very small areas.
             */
            mouseoutDelay?: number | undefined;

            /**
             * sort the values before calling onGetList
             *
             * If a non-false value or "asc" is passed, the list will be sorted in
             * ascending order by the area value from mapValue. If "desc" is
             * passed, the list will be sorted in descending order.
             */
            sortList?: boolean | "asc" | "desc" | undefined;

            /**
             * time (in milliseconds) to wait for images to load before giving up
             *
             * When first bound, ImageMapster has to wait for the source image,and
             * any altImage images to load before it can finish binding. This is
             * necessary because otherwise it's not alwasy possible to know the
             * native size of the images. After this period of time, ImageMapster
             * will give up. If you have particularly large pages or images, you
             * may want to increase this to account for long load times.
             */
            configTimeout?: number | undefined;

            /**
             * Automatically scale imagemaps to match the size of a
             * dynamically-scaled image.
             *
             * When you render an image, you can optionally define a size through
             * CSS or using the "height" and "width" attributes. If omitted, the
             * image will be displayed in its native size. If included, browsers
             * will automatically resize the image to display in the dimensions you
             * have provided.
             *
             * Starting with 1.1.3, ImageMapster will automatically recalculate all
             * area data to match the effective size of the image. This means that
             * you can set the size of your image to anything you want and
             * ImageMapster will work with no changes at all needed to the "area"
             * data.
             *
             * If this behavior is not desired for some reason, this can be
             * disabled by setting this option to false.
             */
            scaleMap?: boolean | undefined;

            /**
             * Treat areas containing the onhref attribute (or missing the href
             * attribute) as masks. This is true by default.
             *
             * Set this to "false" to disable automatic masking of these areas. You
             * can control them explicitly by creating independent groups for areas
             * you wish to mask and assigning the isMask area-specific option when
             * using this option.
             *
             * There are some things to be aware of when using nohref and masking:
             *
             * * You must put the area that include the nohref attribute before
             * other areas that overlap it, or it will be ignored.
             *
             * * You should also explicitly omit the href tag when using nohref.
             *
             * * Due to limitations in rendering with VML (e.g. Internet Explorer
             * 6-8), it is not possible to create a true mask, which would allow
             * the underlying image to show through the masked area. Instead, the
             * "masked" areas are rendered on top of the highlighted area in a
             * different color. This can be specified for each area (see the
             * fillColorMask option below) to create the best possible effect.
             */
            noHrefIsMask?: boolean | undefined;

            /**
             * a jQuery object whose elements are bound to the map.
             *
             * boundList can be any list of objects. To be bound to the map, they
             * must contain an attribute whose name is identified by the option
             * listKey, and whose value matches the value in an area tag's mapKey
             * attribute. If more than one element in the list has the same value,
             * the action will affect all matching elements.
             */
            boundList?: JQuery | undefined;

            /**
             * enable tooltips
             *
             * When showToolTip is true, mapster will look for a property called
             * toolTip in the areas option for a an area. If present, a tool tip
             * dialog will be shown on mouseover for that area. It will
             * automatically be closed according to the behavior specified by
             * toolTipClose. This option does not apply at the item level, but
             * rather enables tooltips for the entire map. At the item level, only
             * the presence of tooltip data is necessary for a tooltip to appear.
             */
            showToolTip?: boolean | undefined;

            /**
             * HTML describing the popup that will be created for tooltips.
             *
             * A div with some simple styling is included as the default tooltip
             * container. This can be replaced with anything using this option.
             *
             * When tooltips are rendered, the code attempts to determine the best
             * place for it. It will try to position it in near the top-left part
             * of the area, and continue to try other corners in order to render it
             * within the confines of the container where the image map resides. If
             * it can't be placed within the image, it will be placed in the
             * lower-right corner and extend outside the image.
             */
            toolTipContainer?: string | JQuery | undefined;

            /**
             * specify the behavior that causes a toolTip to close.
             *
             * This option should be passed an array of strings that define the
             * events that cause active tooltips to close. The array can include
             * one or more of the following stings:
             *
             * 'area-mouseout' - tooltips close when the mouse pointer leaves the
             * area that activated it. This is the default.
             *
             * 'area-click' - tooltips close when another area (or the same one) is
             * clicked
             *
             * 'tooltip-click' - tooltips close when the tooltip itself is clicked
             * anywhere
             *
             * 'image-mouseout' - tooltips close when the mouse pointer leaves the
             * image itself.
             *
             * Under any circumstances, active tooltip will disappear when a new
             * one is created. You don't have to define an automatic closing
             * behavior; setting this option to an empty array will result in
             * tooltips never closing, leaving it to you to close them manually
             * though the tooltip method.
             */
            toolTipClose?: ToolTipCloseEvent[] | undefined;

            /**
             * callback when a hotspot area is clicked. Return false to cancel
             * default select action, or true to navigate to the 'href'
             */

            /**
             * a callback when an area is clicked.:silent doautocmd FocusLost %
             *
             * This event occurs when the usual click event happens, but includes
             * data from the mapster about the area:
             *
             * This can be used to perform additional actions on a click without
             * binding another event and having to obtain information manually.
             */
            onClick?: ((data: OnClickData) => void) | undefined;

            /**
             * callback when mouse enters a bound area.
             *
             * This function is called when the mouse enters a bound area.
             */
            onMouseover?: ((data: OnMouseData) => void) | undefined;

            /**
             * callback when mouse leavesd a bound area.
             *
             * Callback when the mouse leaves a bound area. The data structure
             * passed to the callback is the same as onMouseover.
             */
            onMouseout?: ((data: OnMouseData) => void) | undefined;

            /**
             * a callback on mapster initialization that provides summary data
             * about the image map, and expects a jQuery list to be returned.
             *
             * This callback allows you to dynamically provide a boundList based on
             * summary data from the imagemap itself, rather than providing the
             * list up front. The event passes an array of AreaData objects
             *
             * The client should return a jQuery object containing all the elements
             * that make up the bound list, the same as if it was assigned
             * manually.
             */
            onGetList?: ((data: OnGetListData) => JQuery) | undefined;

            /**
             * a callback when the mapster has finished initial configuration
             *
             * This event is fired when the mapster configuration completes. When
             * control execution continues after a first-time bind operation, the
             * mapster is not guaranteed to be configured, because images are
             * loaded asynchronously by web browsers. If a mapster is bound to an
             * image that is not yet loaded, it will attempt to rebind every 200
             * milliseconds. This event will be fired when it is eventually
             * successful, or the length of time specified by configTimeout is
             * exceeded (default of ten seconds).
             *
             * The altImage option will also increase the time needed to configure,
             * because the alternate image is loaded by the client at configure
             * time to ensure it is available immediately when needed.
             */
            onConfigured?: ((success: boolean) => void) | undefined;

            /**
             * callback when area state is changed (either highlight or select).
             *
             * onStateChange can be used to get more specific information than the
             * mouseover or click events.
             */
            onStateChange?: ((data: OnStateChangeData) => void) | undefined;

            /**
             * callback when a toolTip is created
             *
             * This can be used to control tooltip closing behavior directly, if
             * desired.
             */
            onShowToolTip?: ((data: OnShowToolTipData) => void) | undefined;
        }
    }

    interface JQuery {

        /**
         *
         * All images in the jQuery object will be bound. The specific example
         * above will attempt to bind to all images present on the page. Each image
         * must be bound to an image map identified with the usemap attribute. If
         * there is no usemap attribute, or it does not refer to a valid map, then
         * the image will be ignored. Therefore you can use this syntax to activate
         * all imagemaps on a page. Because pages often contain many images,
         * though, it will be faster to select just the image you are targeting
         * using a more specific selector.
         *
         * Images are often not completely loaded when script execution begins.
         * ImageMapster will ensure that all images are loaded before it permits
         * interaction from the client. If an alternate image is specified, this
         * will also be preloaded.
         *
         * Because images are loaded asynchronously, code execution will often
         * return to your script before the ImageMapster is available. If you apply
         * other methods to it (such as selecting or deselecting areas), these
         * commands will be queued until the image has been loaded, and then
         * executed automatically. So you don't need to worry about using callbacks
         * for initial configuration. You can assign a function to a callback when
         * configuration is complete if needed to perform other setup activities on
         * the page.
         */
        mapster(options?: ImageMapster.Options): JQuery;

        /**
         * select: Cause an area to become selected. This is similar to a user
         * click, but will not cause a click event to be fired.
         *
         * Programatically select elements from the image map. The programmatic
         * selection/deselection methods will not honor the staticState property.
         */
        mapster(method: ImageMapster.Select): void;

        /**
         * deselect: Cause an area to become deselected
         *
         * The opposite of select, this causes an area to become deselected. If it
         * was not previously selected, nothing changes.
         */
        mapster(method: ImageMapster.Deselect): void;

        /**
         * set: select or deselect an area
         *
         * Select or deselect elements from jQuery objects wrapping "area" tags on
         * the map based on truthiness of selected. If the area represents a bound
         * area on the imagemap, it will be selected or deselected. The method can
         * be called from an AREA, or from a bound image, passing a specific key as
         * a 2nd parameter
         *
         * If the selected parameter is omitted (or anything other than "true" or
         * "false") then the state of each area will be toggled.
         *
         * You can include an object containing rendering options as the last
         * parameter. When present, these will supercede the default and
         * area-specific rendering options.
         */
        mapster(method: ImageMapster.Set, selected: boolean, options: ImageMapster.RenderingOptions): JQuery;
        mapster(method: ImageMapster.Set, options: ImageMapster.RenderingOptions): JQuery;

        /**
         * get: get keys for all selected areas
         *
         * When no "key" parameter is included, returns a comma-separated list of
         * keys representing the areas currently selected. If specified, returns
         * true or false indicating whether the area specified is selected.
         */
        mapster(method: ImageMapster.Get, key?: string): string | boolean;

        /**
         * highlight: highlight, clear, or return highlight state
         *
         * This method is used to control or obtain the current highlight state.
         * Setting the highlight does not mimic a mouseover, rather, it only sets
         * the highlight. Events and tooltips will not be activated. Even using
         * these methods, it is not possible to highlight more than one area at a
         * time. If another area is highlighted programatically, any existing
         * highlight will be removed.
         *
         * Once set this way, the highlight will be removed when any user-event
         * that would normally cause a highlight to be removed occurs (e.g. moving
         * the mouse into any area), or it is removed programatically.
         */
        mapster(method: ImageMapster.Highlight, flag?: string | boolean): void;

        /**
         * unbind: unbind ImageMapster from an image
         *
         * Removes the ImageMapster binding from an image and restores it to its
         * original state. All visible elements (selections, tooltips) will be
         * removed.
         *
         * If the optional "preserveState" parameter is true, the selection overlay
         * and any active tooltips will be preserved. Tooltips can still be
         * dismissed by a user click, but once unbound, the selection states can no
         * longer be controlled either by the user or programatically. To remove
         * them, the actual DOM elements must be removed.
         *
         * Notes: When a mapster is first bound, several things happen. A div
         * element is created which wraps the image. A copy is made of the original
         * image, and the original image is set be transparent. This allows
         * creating visible elements for the selections & highlights without
         * interfering with the image map. Additionally, canvas elements are
         * created (for HTML5 browsers), or a VML elements are created for Internet
         * Explorer, to render the effects. Profile information about each bound
         * image map is stored in memory, and finally, event handlers are bound to
         * the image map.
         *
         * The "unbind" method cleans up these resources: it removes the wrapper,
         * restores the image to its original visibility state, and releases
         * internal resources. When using 'preserveState', the internal resources
         * are cleaned up and event handling is disabled, but HTML elements are not
         * removed. Each element created by ImageMapster is assigned a class of
         * "mapster_el", which can be used to target them for later removal, though
         * it is not easy to complete this process manually because of the wrapper
         * and styles applied during configuration, which will be left intact when
         * using "preserveState."
         */
        mapster(method: ImageMapster.Unbind, preserveState?: boolean): JQuery;

        /**
         * snapshot: take a "snapshot" of the current selection state, and reset
         * ImageMapster
         *
         * This option is similar to unbind with preserveState. After a snapshot,
         * any active selections will still appear as they did at the time of the
         * snapshot, but they are no longer part of the ImageMapster. This is
         * useful for configuring an initial state, or creating complex
         * representations that may not be easily accomplished with area
         * configuration options.
         *
         * For example, you could bind in image with a specific set of options;
         * programatically select some areas; and take a snapshot; then set new
         * options that cause a different rendering mode. This way you could have
         * certain areas appear differently from the selection highlight, but be
         * "highlighted again" using the new rendering options. Any effects in
         * place at the time of the snapshot essentially become part of the image
         * and are not affected by future operations.
         */
        mapster(method: ImageMapster.Snapshot): JQuery;

        /**
         * rebind: rebind ImageMapster with new options
         *
         * This method is similar to set_options, in that its purpose is to change
         * options for an existing bound map. However, unlike set_options rebind
         * will immediately apply all the new options to the existing map. This
         * means that rendering options will change areas that are already selected
         * to be rendered with the new options. If you pass area-specific options,
         * these will also be applied, e.g. you could cause new areas to be
         * selected by passing selected: true in an area specific options.
         *
         * set_options, in contrast only changes the options, and does not apply
         * them to any existing data. When using set_options the new options only
         * apply to future actions.
         */
        mapster(method: ImageMapster.Rebind, options: ImageMapster.Options): JQuery;

        /**
         * resize: change the size of the image and map
         *
         * This will resize the image map to the dimensions specified. Note that
         * either width or height should be passed, and the other will be
         * calculated in the same aspect ratio as the original image. If you pass
         * both, only the width will be used to calculate the new dimensions: the
         * proportions must remain the same as the original image. (Though I intend
         * to allow scaling without constraining proportions, it will be difficult
         * to make work for certain shapes -- e.g. circles, which would have to
         * become ovals).
         *
         * This method will recalculate and re-render the entire imagemap, so it
         * will work exactly the same under the new sizing scheme. When the image
         * is unbound, the imagemap will be restored to its original condition.
         *
         * When using HTML5 canvases, any existing selections, etc. will be
         * preserved during the animation. VML data cannot be resized dynamically,
         * however, so in IE<9 the selections will be erased, then redrawn when the
         * animation is complete.
         */
        mapster(method: ImageMapster.Resize, width: number, height: number, duration?: number): JQuery;

        /**
         * keys: get the primary mapKey (or comma-separated list of keys) for an
         * area, set of areas, or key group. Version 1.2.4.050
         *
         * This method allows you to obtain the primary mapKey (or keys) associated
         * with another key, or one or more areas. If the all parameter is true,
         * the method returns all keys or groups that include the area.
         *
         * When using area groups, it is possible for more than one key to be
         * associated with a map area. It's also possible for an area to be
         * highlighted from code as part of a group, but be inaccessible to the
         * end-user. This is because area groups are separate physical entities
         * from the areas defined by their primary key. They can have different
         * options, and are highlighted independently. Note: the way area groups
         * work is not well documented here yet. I am working on a more
         * comprehensive tutorial for the site. In the meantime please see this
         * example which describes area groups in detail, and shows how they work
         * through an active demonstration.
         *
         * There are reasons you may want to be able to access the primary keys
         * that make up an area group directly. Perhaps you want to select a group
         * of areas using the options from a group - but not as a separate group.
         * Perhaps you want to be able to compare the area clicked against a group
         * you have defined to take some action if the area is a member of a
         * certain group. This method provides access to that information.
         *
         * This method allows working with groups in a variety of ways by providing
         * access to a complete list of primary keys in any group, or all keys
         * which contain a given primary key.
         */
        mapster(method: ImageMapster.Keys, key: string, all?: boolean): string | string[];
        mapster(method: ImageMapster.Keys, all: boolean): string | string[];

        /**
         * set_options: set active options
         *
         * When called without the "options" parameter, returns an object with all
         * active options. When the parameter is included, the active options are
         * updated for the imagemap, and any area options are merged with existing
         * area options. Unlike "rebind", this will not rebind or reapply any
         * options, but only update the state. This may affect future actions, but
         * it will not change any existing state information.
         */
        mapster(method: ImageMapster.SetOptions, options?: ImageMapster.Options): JQuery;

        /**
         * get_options: get active options
         *
         * When called with no parameters, returns the options that the mapster was
         * configured using. When called with a single key it returns the
         * area-specific options assigned to that area. The final parameter
         * effective determines whether the actual options in effect for this area,
         * or the specific options assigned are returned.
         *
         * Areas inherit the global options assigned, but can be overridden by
         * area-specific options. The "effective" options contain all options
         * including those that are inherited, as well as any specifically assigned
         * to the area.
         */
        mapster(method: ImageMapster.GetOptions, key?: string, effective?: boolean): ImageMapster.Options | ImageMapster.AreaRenderingOptions;

        /**
         * tooltip: show/hide tooltips from code
         *
         * See the tooltip options section below for options to control how
         * tooltips appear and are dismissed.
         *
         * This method can be used to manipulate tooltips from code. If the global
         * showToolTip option is false, these methods will still work, so you have
         * the ability to control tooltips bound to areas completely using your own
         * logic, if desired. These methods can also be used to have better control
         * over events needed to close the tooltip, e.g. you could have no tooltip
         * closing event, but add a "close" button to your contianer that will
         * cause the tooltip to close when clicked.
         */
        mapster(method: ImageMapster.Tooltip, key?: string): JQuery;
    }
}
