declare namespace simpleheat {
    interface Instance {
        /**
         * Set heatmap data points
         *
         * @param points Array of data points containing 2D coordinates and intensity value (defaulted to 1)
         * @example [[0, 0, 1.0], [1, 0, 2.0], [1, 1, 0.5], ...]
         */
        data(points: Array<[number, number] | [number, number, number]>): this;

        /**
         * Set max data value
         *
         * @param maxValue Maximum data value (defaulted to 1)
         */
        max(maxValue: number): this;

        /**
         * Add a data point
         *
         * @param point Array of 2D coordinates and intensity value (defaulted to 1)
         */
        add(point: [number, number] | [number, number, number]): this;

        /**
         * Clear canvas data
         */
        clear(): this;

        /**
         * Set point radius and optional blur radius
         *
         * @param radius Radius (defaulted to 25)
         * @param blur Optional blur radius (defaulted to 15)
         */
        radius(r: number, blur?: number): this;

        /**
         * Update drawing, in case canvas size changed
         */
        resize(): this;

        /**
         * Set gradient colors as {<stop>: '<color>'}
         * Thresholds are between 0.0 and 1.0.
         *
         * @param gradient Thresholds with associated colors to generate the gradient
         * @example {
         *            0.4: 'blue',
         *            0.6: 'cyan',
         *            0.7: 'lime',
         *            0.8: 'yellow',
         *            1.0: 'red'
         *          }
         */
        gradient(gradient: { [key: number]: string }): this;

        /**
         * Draw the heatmap
         *
         * @param minOpacity Optional param to set the opacity of the heatmap (defaulted to 0.05)
         */
        draw(minOpacity?: number): this;
    }
    interface Static {
        new(canvas: HTMLCanvasElement): Instance;
        (canvas: HTMLCanvasElement): Instance;
    }
}

declare const simpleheat: simpleheat.Static;

export = simpleheat;
export as namespace simpleheat;
