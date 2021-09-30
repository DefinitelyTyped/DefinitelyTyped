// Type definitions for cytoscape-popper 2.0
// Project: https://github.com/cytoscape/cytoscape.js-popper
// Definitions by: Felix Barczewicz <https://github.com/DieserFelix>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8
import cy = require('cytoscape');
import popper = require('@popperjs/core');

declare const cytoscapePopper: cy.Ext;
export = cytoscapePopper;
export as namespace cytoscapePopper;

declare namespace cytoscapePopper {
    interface Dimensions {
        w: number;
        h: number;
    }

    interface Options<Type> {
        /*
         * The HTML content of the popper. May be a DOM Element reference or a function that returns one.
         */
        content?: () => HTMLElement | HTMLElement | undefined;
        /*
         * A function that can be used to override the [rendered](http://js.cytoscape.org/#notation/position) Cytoscape position of the Popper target.
         * This option is mandatory when using Popper on the core.
         * For an element, the centre of its bounding box is used by default.
         */
        renderedPosition?: ((el: Type) => cytoscape.Position) | undefined;
        /*
         * A function that can be used to override the [rendered](http://js.cytoscape.org/#notation/position) Cytoscape bounding box dimensions
         * considered for the popper target (i.e. `cy` or `ele`).
         * It defines only the effective `width` and `height` (`bb.w` and `bb.h`) of the Popper target.
         * This option is more often useful for elements rather than for the core.
         */
        renderedDimensions?: ((el: Type) => Dimensions) | undefined;
        /*
         * The [Popper options](https://popper.js.org/docs/v2/constructors/#options) object.
         * You may use this to override Popper options.
         */
        popper?: popper.Options | undefined;
    }

    type getPopperInstance<Type> = (opts?: Options<Type>) => popper.Instance;

    type getPopperRef<Type> = (opts?: Options<Type>) => popper.VirtualElement;
}

declare global {
    namespace cytoscape {
        interface SingularData {
            /*
             * Get a [Popper Instance](https://popper.js.org/docs/v2/constructors/) for the specified element.
             */
            popper: cytoscapePopper.getPopperInstance<SingularData>;
            /*
             * Get a [Popper virtual element](https://popper.js.org/docs/v2/virtual-elements/)
             * (aka Popper reference object in Popper v1) for the specified specified element.
             */
            popperRef: cytoscapePopper.getPopperRef<SingularData>;
        }

        interface Core {
            /*
             * Get a [Popper Instance](https://popper.js.org/docs/v2/constructors/) for the specified core Cytoscape instance.
             */
            popper: cytoscapePopper.getPopperInstance<Core>;
            /*
             * Get a [Popper virtual element](https://popper.js.org/docs/v2/virtual-elements/)
             * (aka Popper reference object in Popper v1) for the specified core Cytoscape instance.
             */
            popperRef: cytoscapePopper.getPopperRef<Core>;
        }
    }
}
