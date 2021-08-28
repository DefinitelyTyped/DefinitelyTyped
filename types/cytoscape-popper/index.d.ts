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
    interface BoundingBox {
        top: number;
        left: number;
        right: number;
        bottom: number;
        width: number;
        height: number;
    }

    interface Dimensions {
        w: number;
        h: number;
    }

    interface PopperRef {
        getBoundingClientRect(): BoundingBox;
    }

    interface Options {
        renderedDimensions?: (el: cytoscape.SingularData | cytoscape.Core) => Dimensions | undefined;
        renderedPosition?: (el: cytoscape.SingularData | cytoscape.Core) => cytoscape.Position | undefined;
        popper?: popper.Options | undefined;
        cy?: cytoscape.Core | undefined;
        content?: () => HTMLElement | HTMLElement | undefined;
    }

    type getPopperInstance = (opts?: Options) => popper.Instance;
    type getPopperRef = (opts?: Options) => PopperRef;
}

declare global {
    namespace cytoscape {
        interface SingularData {
            popper: cytoscapePopper.getPopperInstance;
            popperRef: cytoscapePopper.getPopperRef;
        }

        interface Core {
            popper: cytoscapePopper.getPopperInstance;
            popperRef: cytoscapePopper.getPopperRef;
        }
    }
}
