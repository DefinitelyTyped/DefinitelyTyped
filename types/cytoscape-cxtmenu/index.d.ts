// Type definitions for cytoscape-cxtmenu 3.4
// Project: https://github.com/cytoscape/cytoscape.js-cxtmenu
// Definitions by: Felix Barczewicz <https://github.com/DieserFelix>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import cytoscape = require('cytoscape');

declare const cytoscapeCxtmenu: cytoscape.Ext;

export = cytoscapeCxtmenu;
export as namespace cytoscapeCxtmenu;

declare namespace cytoscapeCxtmenu {
    interface Options {
        /*
         * The outer radius (element center to the end of the menu) in pixels.
         * It is added to the rendered size of the element.
         *
         * Default: 100
         */
        menuRadius?: MenuRadiusFunction | number | undefined;
        /*
         * Elements to which the cxtmenu instance will be applied
         */
        selector?: cytoscape.Selector | undefined;
        /*
         * Array of commands to be displayed in the menu.
         * Alternatively, a function that returns an array of commands
         * depending on the selected element.
         */
        commands?: Command[] | ((element: cytoscape.SingularData) => Command[]) | undefined;
        /*
         * The background color of the menu.
         * Can be any valid [CSS color definition](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).
         */
        fillColor?: string | undefined;
        /*
         * The color used to indicate the selected command.
         * Can be any valid [CSS color definition](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).
         */
        activeFillColor?: string | undefined;
        /*
         * Additional size in pixels for the active command.
         * Default: 20
         */
        activePadding?: number | undefined;
        /*
         * The size in pixels of the pointer to the active command, will default to the node size if the node size is smaller than the indicator size.
         *
         * Default: 24
         */
        indicatorSize?: number | undefined;
        /*
         * The empty spacing in pixels between successive commands.
         *
         * Default: 3
         */
        separatorWidth?: number | undefined;
        /*
         * Extra spacing in pixels between the element and the spotlight.
         *
         * Default: 4
         */
        spotlightPadding?: number | undefined;
        /*
         * Specify whether the spotlight radius should adapt to the node size.
         *
         * Default: false
         */
        adaptativeNodeSpotlightRadius?: boolean | undefined;
        /*
         * The minimum radius in pixels of the spotlight (ignored for the node if {@link adaptativeNodeSpotlightRadius} is enabled but still used for the edge & background).
         *
         * Default: 24
         */
        minSpotlightRadius?: number | undefined;
        /*
         * The maximum radius in pixels of the spotlight (ignored for the node if {@link adaptativeNodeSpotlightRadius} is enabled but still used for the edge & background).
         *
         * Default: 38
         */
        maxSpotlightRadius?: number | undefined;
        /*
         * Space-separated [Cytoscape events](https://js.cytoscape.org/#events) that will open the menu.
         *
         * Default: 'cxttapstart taphold'
         */
        openMenuEvents?: string | undefined;
        /*
         * The color of text in the command's content.
         * Can be any valid [CSS color definition](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).
         *
         * Default: white
         */
        itemColor?: string | undefined;
        /*
         * The text shadow color of the command's content.
         * Can be any valid [CSS color definition](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).
         *
         * Default: transparent
         */
        itemTextShadowColor?: string | undefined;
        /*
         * The z-index of the UI div.
         *
         * Default: 9999
         */
        zIndex?: number | undefined;
        /*
         * Whether or not to draw the menu at mouse position.
         *
         * Default: false
         */
        atMouse?: boolean | undefined;
        /*
         * If set to a number, this will cancel the command if the pointer is released outside of the spotlight, padded by the number given.
         *
         * Default: false
         */
        outsideMenuCancel?: false | number | undefined;
    }

    // function(ele){ return 100; }
    type MenuRadiusFunction = (element: cytoscape.SingularData) => number;

    interface Command {
        /*
         * Custom background color in menu's command list.
         * Can be any valid [CSS color definition](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).
         */
        fillColor?: string | undefined;
        /*
         * HTML or text content to be displayed as the command's label in the menu's command list.
         */
        content?: HTMLElement | string | undefined;
        /*
         * Additional CSS properties to apply to the command content.
         */
        contentStyle?: Partial<CSSStyleDeclaration> | undefined;
        /*
         * A function to execute when the command is selected.
         */
        select?: ((element: cytoscape.SingularData) => void) | undefined;
        /*
         * Whether or not the command is selectable.
         *
         * Default: true
         */
        enabled?: boolean | undefined;
    }

    interface MenuInstance {
        /*
         * Clean up by manually destroying the menu instance.
         */
        destroy: () => void;
    }
}

declare global {
    namespace cytoscape {
        interface Core {
            /*
             * Set up the context menu according to the given options.
             */
            cxtmenu: (options?: cytoscapeCxtmenu.Options) => cytoscapeCxtmenu.MenuInstance;
        }
    }
}
