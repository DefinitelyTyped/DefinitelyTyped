import cytoscape = require("cytoscape");

declare const cyCanvas: cytoscape.Ext;

export = cyCanvas;
export as namespace cyCanvas;

declare namespace cyCanvas {
    interface Options {
        /**
         * The z-index of the canvas.
         */
        zIndex?: number;
        /**
         * The pixel ratio of the canvas.
         */
        pixelRatio?: number;
    }

    interface CanvasInstance {
        /**
         * Return the generated canvas.
         */
        getCanvas: () => HTMLCanvasElement;

        /**
         * Set the context transform to match Cytoscape's zoom & pan.
         * Further drawing will be on model position.
         * @param ctx The canvas context.
         */
        setTransform: (ctx: CanvasRenderingContext2D) => void;

        /**
         * Reset the context transform.
         * Further drawing will be on rendered position.
         * @param ctx The canvas context.
         */
        resetTransform: (ctx: CanvasRenderingContext2D) => void;

        /**
         * Clear the entire canvas.
         * @param ctx The canvas context.
         */
        clear: (ctx: CanvasRenderingContext2D) => void;
    }
}

declare global {
    namespace cytoscape {
        interface Core {
            /*
             * Initialize the canvas according to the given options.
             */
            cyCanvas: (options?: cyCanvas.Options) => cyCanvas.CanvasInstance;
        }
    }
}
