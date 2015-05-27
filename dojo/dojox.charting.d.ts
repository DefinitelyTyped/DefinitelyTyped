// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="dijit.d.ts" />
/// <reference path="dojox.gfx.d.ts" />
/// <reference path="dojox.geo.d.ts" />
declare module dojox {
		
        module charting {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/Chart.html
         *
         * The main chart object in dojox.charting.  This will create a two dimensional
         * chart based on dojox.gfx.
         * dojox.charting.Chart is the primary object used for any kind of charts.  It
         * is simple to create--just pass it a node reference, which is used as the
         * container for the chart--and a set of optional keyword arguments and go.
         * 
         * Note that like most of dojox.gfx, most of dojox.charting.Chart's methods are
         * designed to return a reference to the chart itself, to allow for functional
         * chaining.  This makes defining everything on a Chart very easy to do.
         * 
         * @param node     
         * @param kwArgs       Optional    
         */
        class Chart {
            constructor(node: HTMLElement, kwArgs?: Object);
            /**
             * Add an axis to the chart, for rendering.
             * 
             * @param name The name of the axis.             
             * @param kwArgs               OptionalAn optional keyword arguments object for use in defining details of an axis.             
             */
            addAxis(name: String, kwArgs: Object): any;
            /**
             * Add a new plot to the chart, defined by name and using the optional keyword arguments object.
             * Note that dojox.charting assumes the main plot to be called "default"; if you do not have
             * a plot called "default" and attempt to add data series to the chart without specifying the
             * plot to be rendered on, you WILL get errors.
             * 
             * @param name The name of the plot to be added to the chart.  If you only plan on using one plot, call it "default".             
             * @param kwArgs An object with optional parameters for the plot in question.             
             */
            addPlot(name: String, kwArgs: Object): any;
            /**
             * Add a data series to the chart for rendering.
             * 
             * @param name The name of the data series to be plotted.             
             * @param data The array of data points (either numbers or objects) thatrepresents the data to be drawn. Or it can be an object. Inthe latter case, it should have a property "data" (an array),destroy(), and setSeriesObject().             
             * @param kwArgs               OptionalAn optional keyword arguments object that will be mixed intothe resultant series object.             
             */
            addSeries(name: String, data: any[], kwArgs: Object): any;
            /**
             * Add a data series to the chart for rendering.
             * 
             * @param name The name of the data series to be plotted.             
             * @param data The array of data points (either numbers or objects) thatrepresents the data to be drawn. Or it can be an object. Inthe latter case, it should have a property "data" (an array),destroy(), and setSeriesObject().             
             * @param kwArgs               OptionalAn optional keyword arguments object that will be mixed intothe resultant series object.             
             */
            addSeries(name: String, data: Object, kwArgs: Object): any;
            /**
             * Calculate the geometry of the chart based on the defined axes of
             * a chart.
             * 
             */
            calculateGeometry(): any;
            /**
             * A convenience method to connect a function to a plot.
             * 
             * @param name The name of the plot as defined by addPlot.             
             * @param object The object to be connected.             
             * @param method The function to be executed.             
             */
            connectToPlot(name: String, object: Object, method: Function): any;
            /**
             * Delayed render, which is used to collect multiple updates
             * within a delayInMs time window.
             * 
             */
            delayedRender(): any;
            /**
             * Cleanup when a chart is to be destroyed.
             * 
             */
            destroy(): void;
            /**
             * Fires a synthetic event for a series item.
             * 
             * @param seriesName Series name.             
             * @param eventName Event name to simulate: onmouseover, onmouseout, onclick.             
             * @param index Valid data value index for the event.             
             */
            fireEvent(seriesName: String, eventName: String, index: number): any;
            /**
             * 
             * @param element             
             * @param label             
             * @param labelType             
             */
            formatTruncatedLabel(element: any, label: any, labelType: any): void;
            /**
             * Calculate the full geometry of the chart.  This includes passing
             * over all major elements of a chart (plots, axes, series, container)
             * in order to ensure proper rendering.
             * 
             */
            fullGeometry(): any;
            /**
             * Force a full rendering of the chart, including full resets on the chart itself.
             * You should not call this method directly unless absolutely necessary.
             * 
             */
            fullRender(): any;
            /**
             * Get the given axis, by name.
             * 
             * @param name The name the axis was defined by.             
             */
            getAxis(name: String): any;
            /**
             * Get the coordinates and dimensions of the containing DOMNode, as
             * returned by dojo.coords.
             * 
             */
            getCoords(): any;
            /**
             * Returns a map of information about all axes in a chart and what they represent
             * in terms of scaling (see dojox.charting.axis2d.Default.getScaler).
             * 
             */
            getGeometry(): any;
            /**
             * Get the given plot, by name.
             * 
             * @param name The name the plot was defined by.             
             */
            getPlot(name: String): any;
            /**
             * Returns an array of plot names in the current order
             * (the top-most plot is the first).
             * 
             */
            getPlotOrder(): any;
            /**
             * Get the given series, by name.
             * 
             * @param name The name the series was defined by.             
             */
            getSeries(name: String): any;
            /**
             * Returns an array of series names in the current order
             * (the top-most series is the first) within a plot.
             * 
             * @param plotName Plot's name.             
             */
            getSeriesOrder(plotName: String): any;
            /**
             * Moves a given plot to back.
             * 
             * @param name Plot's name to move.             
             */
            movePlotToBack(name: String): any;
            /**
             * Moves a given plot to front.
             * 
             * @param name Plot's name to move.             
             */
            movePlotToFront(name: String): any;
            /**
             * Moves a given series to back of a plot.
             * 
             * @param name Series' name to move.             
             */
            moveSeriesToBack(name: String): any;
            /**
             * Moves a given series to front of a plot.
             * 
             * @param name Series' name to move.             
             */
            moveSeriesToFront(name: String): any;
            /**
             * Remove the axis that was defined using name.
             * 
             * @param name The axis name, as defined in addAxis.             
             */
            removeAxis(name: String): any;
            /**
             * Remove the plot defined using name from the chart's plot stack.
             * 
             * @param name The name of the plot as defined using addPlot.             
             */
            removePlot(name: String): any;
            /**
             * Remove the series defined by name from the chart.
             * 
             * @param name The name of the series as defined by addSeries.             
             */
            removeSeries(name: String): any;
            /**
             * Render the chart according to the current information defined.  This should
             * be the last call made when defining/creating a chart, or if data within the
             * chart has been changed.
             * 
             */
            render(): any;
            /**
             * Resize the chart to the dimensions of width and height.
             * Resize the chart and its surface to the width and height dimensions.
             * If a single argument of the form {w: value1, h: value2} is provided take that argument as the dimensions to use.
             * Finally if no argument is provided, resize the surface to the marginBox of the chart.
             * 
             * @param width               OptionalThe new width of the chart or the box definition.             
             * @param height               OptionalThe new height of the chart.             
             */
            resize(width: number, height: number): any;
            /**
             * Resize the chart to the dimensions of width and height.
             * Resize the chart and its surface to the width and height dimensions.
             * If a single argument of the form {w: value1, h: value2} is provided take that argument as the dimensions to use.
             * Finally if no argument is provided, resize the surface to the marginBox of the chart.
             * 
             * @param width               OptionalThe new width of the chart or the box definition.             
             * @param height               OptionalThe new height of the chart.             
             */
            resize(width: Object, height: number): any;
            /**
             * Zooms an axis and all dependent plots. Can be used to zoom in 1D.
             * 
             * @param name The name of the axis as defined by addAxis.             
             * @param scale The scale on the target axis.             
             * @param offset Any offest, as measured by axis tick             
             * @param zoom               OptionalThe chart zooming animation trigger.  This is null by default,e.g. {duration: 1200}, or just set true.             
             */
            setAxisWindow(name: String, scale: number, offset: number, zoom: boolean): any;
            /**
             * Zooms an axis and all dependent plots. Can be used to zoom in 1D.
             * 
             * @param name The name of the axis as defined by addAxis.             
             * @param scale The scale on the target axis.             
             * @param offset Any offest, as measured by axis tick             
             * @param zoom               OptionalThe chart zooming animation trigger.  This is null by default,e.g. {duration: 1200}, or just set true.             
             */
            setAxisWindow(name: String, scale: number, offset: number, zoom: Object): any;
            /**
             * 
             * @param dir             
             */
            setDir(dir: any): Function;
            /**
             * Sets new order of plots. newOrder cannot add or remove
             * plots. Wrong names, or dups are ignored.
             * 
             * @param newOrder Array of plot names compatible with getPlotOrder().             
             */
            setPlotOrder(newOrder: any[]): any;
            /**
             * Sets new order of series within a plot. newOrder cannot add
             * or remove series. Wrong names, or dups are ignored.
             * 
             * @param newOrder Array of series names compatible with getPlotOrder(). Allseries should belong to the same plot.             
             */
            setSeriesOrder(newOrder: any[]): any;
            /**
             * Set a theme of the chart.
             * 
             * @param theme The theme to be used for visual rendering.             
             */
            setTheme(theme: dojox.charting.SimpleTheme): any;
            /**
             * Zooms in or out any plots in two dimensions.
             * 
             * @param sx The scale for the x axis.             
             * @param sy The scale for the y axis.             
             * @param dx The pixel offset on the x axis.             
             * @param dy The pixel offset on the y axis.             
             * @param zoom               OptionalThe chart zooming animation trigger.  This is null by default,e.g. {duration: 1200}, or just set true.             
             */
            setWindow(sx: number, sy: number, dx: number, dy: number, zoom: boolean): any;
            /**
             * Zooms in or out any plots in two dimensions.
             * 
             * @param sx The scale for the x axis.             
             * @param sy The scale for the y axis.             
             * @param dx The pixel offset on the x axis.             
             * @param dy The pixel offset on the y axis.             
             * @param zoom               OptionalThe chart zooming animation trigger.  This is null by default,e.g. {duration: 1200}, or just set true.             
             */
            setWindow(sx: number, sy: number, dx: number, dy: number, zoom: Object): any;
            /**
             * Update the given series with a new set of data points.
             * 
             * @param name The name of the series as defined in addSeries.             
             * @param data The array of data points (either numbers or objects) thatrepresents the data to be drawn. Or it can be an object. Inthe latter case, it should have a property "data" (an array),destroy(), and setSeriesObject().             
             * @param offsets               OptionalIf true recomputes the offsets of the chart based on the newdata. This is useful if the range of data is drastically changingand offsets need to be recomputed.             
             */
            updateSeries(name: String, data: any[], offsets: boolean): any;
            /**
             * Update the given series with a new set of data points.
             * 
             * @param name The name of the series as defined in addSeries.             
             * @param data The array of data points (either numbers or objects) thatrepresents the data to be drawn. Or it can be an object. Inthe latter case, it should have a property "data" (an array),destroy(), and setSeriesObject().             
             * @param offsets               OptionalIf true recomputes the offsets of the chart based on the newdata. This is useful if the range of data is drastically changingand offsets need to be recomputed.             
             */
            updateSeries(name: String, data: Object, offsets: boolean): any;
            /**
             * Zoom the chart to a specific range on one axis.  This calls render()
             * directly as a convenience method.
             * 
             * @param name The name of the axis as defined by addAxis.             
             * @param range The end points of the zoom range, measured in axis ticks.             
             * @param delayed             
             */
            zoomIn(name: String, range: any[], delayed: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/Chart2D.html
         *
         * The main chart object in dojox.charting.  This will create a two dimensional
         * chart based on dojox.gfx.
         * dojox.charting.Chart is the primary object used for any kind of charts.  It
         * is simple to create--just pass it a node reference, which is used as the
         * container for the chart--and a set of optional keyword arguments and go.
         * 
         * Note that like most of dojox.gfx, most of dojox.charting.Chart's methods are
         * designed to return a reference to the chart itself, to allow for functional
         * chaining.  This makes defining everything on a Chart very easy to do.
         * 
         * @param node     
         * @param kwArgs       Optional    
         */
        class Chart2D {
            constructor(node: HTMLElement, kwArgs?: Object);
            /**
             * Add an axis to the chart, for rendering.
             * 
             * @param name The name of the axis.             
             * @param kwArgs               OptionalAn optional keyword arguments object for use in defining details of an axis.             
             */
            addAxis(name: String, kwArgs: Object): any;
            /**
             * Add a new plot to the chart, defined by name and using the optional keyword arguments object.
             * Note that dojox.charting assumes the main plot to be called "default"; if you do not have
             * a plot called "default" and attempt to add data series to the chart without specifying the
             * plot to be rendered on, you WILL get errors.
             * 
             * @param name The name of the plot to be added to the chart.  If you only plan on using one plot, call it "default".             
             * @param kwArgs An object with optional parameters for the plot in question.             
             */
            addPlot(name: String, kwArgs: Object): any;
            /**
             * Add a data series to the chart for rendering.
             * 
             * @param name The name of the data series to be plotted.             
             * @param data The array of data points (either numbers or objects) thatrepresents the data to be drawn. Or it can be an object. Inthe latter case, it should have a property "data" (an array),destroy(), and setSeriesObject().             
             * @param kwArgs               OptionalAn optional keyword arguments object that will be mixed intothe resultant series object.             
             */
            addSeries(name: String, data: any[], kwArgs: Object): any;
            /**
             * Add a data series to the chart for rendering.
             * 
             * @param name The name of the data series to be plotted.             
             * @param data The array of data points (either numbers or objects) thatrepresents the data to be drawn. Or it can be an object. Inthe latter case, it should have a property "data" (an array),destroy(), and setSeriesObject().             
             * @param kwArgs               OptionalAn optional keyword arguments object that will be mixed intothe resultant series object.             
             */
            addSeries(name: String, data: Object, kwArgs: Object): any;
            /**
             * Calculate the geometry of the chart based on the defined axes of
             * a chart.
             * 
             */
            calculateGeometry(): any;
            /**
             * A convenience method to connect a function to a plot.
             * 
             * @param name The name of the plot as defined by addPlot.             
             * @param object The object to be connected.             
             * @param method The function to be executed.             
             */
            connectToPlot(name: String, object: Object, method: Function): any;
            /**
             * Delayed render, which is used to collect multiple updates
             * within a delayInMs time window.
             * 
             */
            delayedRender(): any;
            /**
             * Cleanup when a chart is to be destroyed.
             * 
             */
            destroy(): void;
            /**
             * Fires a synthetic event for a series item.
             * 
             * @param seriesName Series name.             
             * @param eventName Event name to simulate: onmouseover, onmouseout, onclick.             
             * @param index Valid data value index for the event.             
             */
            fireEvent(seriesName: String, eventName: String, index: number): any;
            /**
             * 
             * @param element             
             * @param label             
             * @param labelType             
             */
            formatTruncatedLabel(element: any, label: any, labelType: any): void;
            /**
             * Calculate the full geometry of the chart.  This includes passing
             * over all major elements of a chart (plots, axes, series, container)
             * in order to ensure proper rendering.
             * 
             */
            fullGeometry(): any;
            /**
             * Force a full rendering of the chart, including full resets on the chart itself.
             * You should not call this method directly unless absolutely necessary.
             * 
             */
            fullRender(): any;
            /**
             * Get the given axis, by name.
             * 
             * @param name The name the axis was defined by.             
             */
            getAxis(name: String): any;
            /**
             * Get the coordinates and dimensions of the containing DOMNode, as
             * returned by dojo.coords.
             * 
             */
            getCoords(): any;
            /**
             * Returns a map of information about all axes in a chart and what they represent
             * in terms of scaling (see dojox.charting.axis2d.Default.getScaler).
             * 
             */
            getGeometry(): any;
            /**
             * Get the given plot, by name.
             * 
             * @param name The name the plot was defined by.             
             */
            getPlot(name: String): any;
            /**
             * Returns an array of plot names in the current order
             * (the top-most plot is the first).
             * 
             */
            getPlotOrder(): any;
            /**
             * Get the given series, by name.
             * 
             * @param name The name the series was defined by.             
             */
            getSeries(name: String): any;
            /**
             * Returns an array of series names in the current order
             * (the top-most series is the first) within a plot.
             * 
             * @param plotName Plot's name.             
             */
            getSeriesOrder(plotName: String): any;
            /**
             * Moves a given plot to back.
             * 
             * @param name Plot's name to move.             
             */
            movePlotToBack(name: String): any;
            /**
             * Moves a given plot to front.
             * 
             * @param name Plot's name to move.             
             */
            movePlotToFront(name: String): any;
            /**
             * Moves a given series to back of a plot.
             * 
             * @param name Series' name to move.             
             */
            moveSeriesToBack(name: String): any;
            /**
             * Moves a given series to front of a plot.
             * 
             * @param name Series' name to move.             
             */
            moveSeriesToFront(name: String): any;
            /**
             * Remove the axis that was defined using name.
             * 
             * @param name The axis name, as defined in addAxis.             
             */
            removeAxis(name: String): any;
            /**
             * Remove the plot defined using name from the chart's plot stack.
             * 
             * @param name The name of the plot as defined using addPlot.             
             */
            removePlot(name: String): any;
            /**
             * Remove the series defined by name from the chart.
             * 
             * @param name The name of the series as defined by addSeries.             
             */
            removeSeries(name: String): any;
            /**
             * Render the chart according to the current information defined.  This should
             * be the last call made when defining/creating a chart, or if data within the
             * chart has been changed.
             * 
             */
            render(): any;
            /**
             * Resize the chart to the dimensions of width and height.
             * Resize the chart and its surface to the width and height dimensions.
             * If a single argument of the form {w: value1, h: value2} is provided take that argument as the dimensions to use.
             * Finally if no argument is provided, resize the surface to the marginBox of the chart.
             * 
             * @param width               OptionalThe new width of the chart or the box definition.             
             * @param height               OptionalThe new height of the chart.             
             */
            resize(width: number, height: number): any;
            /**
             * Resize the chart to the dimensions of width and height.
             * Resize the chart and its surface to the width and height dimensions.
             * If a single argument of the form {w: value1, h: value2} is provided take that argument as the dimensions to use.
             * Finally if no argument is provided, resize the surface to the marginBox of the chart.
             * 
             * @param width               OptionalThe new width of the chart or the box definition.             
             * @param height               OptionalThe new height of the chart.             
             */
            resize(width: Object, height: number): any;
            /**
             * Zooms an axis and all dependent plots. Can be used to zoom in 1D.
             * 
             * @param name The name of the axis as defined by addAxis.             
             * @param scale The scale on the target axis.             
             * @param offset Any offest, as measured by axis tick             
             * @param zoom               OptionalThe chart zooming animation trigger.  This is null by default,e.g. {duration: 1200}, or just set true.             
             */
            setAxisWindow(name: String, scale: number, offset: number, zoom: boolean): any;
            /**
             * Zooms an axis and all dependent plots. Can be used to zoom in 1D.
             * 
             * @param name The name of the axis as defined by addAxis.             
             * @param scale The scale on the target axis.             
             * @param offset Any offest, as measured by axis tick             
             * @param zoom               OptionalThe chart zooming animation trigger.  This is null by default,e.g. {duration: 1200}, or just set true.             
             */
            setAxisWindow(name: String, scale: number, offset: number, zoom: Object): any;
            /**
             * 
             * @param dir             
             */
            setDir(dir: any): Function;
            /**
             * Sets new order of plots. newOrder cannot add or remove
             * plots. Wrong names, or dups are ignored.
             * 
             * @param newOrder Array of plot names compatible with getPlotOrder().             
             */
            setPlotOrder(newOrder: any[]): any;
            /**
             * Sets new order of series within a plot. newOrder cannot add
             * or remove series. Wrong names, or dups are ignored.
             * 
             * @param newOrder Array of series names compatible with getPlotOrder(). Allseries should belong to the same plot.             
             */
            setSeriesOrder(newOrder: any[]): any;
            /**
             * Set a theme of the chart.
             * 
             * @param theme The theme to be used for visual rendering.             
             */
            setTheme(theme: dojox.charting.SimpleTheme): any;
            /**
             * Zooms in or out any plots in two dimensions.
             * 
             * @param sx The scale for the x axis.             
             * @param sy The scale for the y axis.             
             * @param dx The pixel offset on the x axis.             
             * @param dy The pixel offset on the y axis.             
             * @param zoom               OptionalThe chart zooming animation trigger.  This is null by default,e.g. {duration: 1200}, or just set true.             
             */
            setWindow(sx: number, sy: number, dx: number, dy: number, zoom: boolean): any;
            /**
             * Zooms in or out any plots in two dimensions.
             * 
             * @param sx The scale for the x axis.             
             * @param sy The scale for the y axis.             
             * @param dx The pixel offset on the x axis.             
             * @param dy The pixel offset on the y axis.             
             * @param zoom               OptionalThe chart zooming animation trigger.  This is null by default,e.g. {duration: 1200}, or just set true.             
             */
            setWindow(sx: number, sy: number, dx: number, dy: number, zoom: Object): any;
            /**
             * Update the given series with a new set of data points.
             * 
             * @param name The name of the series as defined in addSeries.             
             * @param data The array of data points (either numbers or objects) thatrepresents the data to be drawn. Or it can be an object. Inthe latter case, it should have a property "data" (an array),destroy(), and setSeriesObject().             
             * @param offsets               OptionalIf true recomputes the offsets of the chart based on the newdata. This is useful if the range of data is drastically changingand offsets need to be recomputed.             
             */
            updateSeries(name: String, data: any[], offsets: boolean): any;
            /**
             * Update the given series with a new set of data points.
             * 
             * @param name The name of the series as defined in addSeries.             
             * @param data The array of data points (either numbers or objects) thatrepresents the data to be drawn. Or it can be an object. Inthe latter case, it should have a property "data" (an array),destroy(), and setSeriesObject().             
             * @param offsets               OptionalIf true recomputes the offsets of the chart based on the newdata. This is useful if the range of data is drastically changingand offsets need to be recomputed.             
             */
            updateSeries(name: String, data: Object, offsets: boolean): any;
            /**
             * Zoom the chart to a specific range on one axis.  This calls render()
             * directly as a convenience method.
             * 
             * @param name The name of the axis as defined by addAxis.             
             * @param range The end points of the zoom range, measured in axis ticks.             
             * @param delayed             
             */
            zoomIn(name: String, range: any[], delayed: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/Chart3D.html
         *
         * 
         * @param node     
         * @param lights     
         * @param camera     
         * @param theme     
         */
        class Chart3D {
            constructor(node: any, lights: any, camera: any, theme: any);
            /**
             * 
             * @param plot             
             */
            addPlot(plot: any): any;
            /**
             * 
             * @param wall             
             */
            addWall(wall: any): any;
            /**
             * 
             */
            generate(): any;
            /**
             * 
             */
            invalidate(): Function;
            /**
             * 
             * @param plot             
             */
            removePlot(plot: any): any;
            /**
             * 
             * @param wall             
             */
            removeWall(wall: any): any;
            /**
             * 
             */
            render(): Function;
            /**
             * 
             * @param dir             
             */
            setDir(dir: String): Function;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/DataChart.html
         *
         * Extension to the 2D chart that connects to a data store in
         * a simple manner. Convenience methods have been added for
         * connecting store item labels to the chart labels.
         * This code should be considered very experimental and the APIs subject
         * to change. This is currently an alpha version and will need some testing
         * and review.
         * 
         * The main reason for this extension is to create animated charts, generally
         * available with scroll=true, and a property field that gets continually updated.
         * The previous property settings are kept in memory and displayed until scrolled
         * off the chart.
         * 
         * Although great effort was made to maintain the integrity of the current
         * charting APIs, some things have been added or modified in order to get
         * the store to connect and also to get the data to scroll/animate.
         * "displayRange" in particular is used to force the xaxis to a specific
         * size and keep the chart from stretching or squashing to fit the data.
         * 
         * Currently, plot lines can only be set at initialization. Setting
         * a new store query will have no effect (although using setStore
         * may work but its untested).
         * 
         * @param node The node to attach the chart to.     
         * @param kwArgs xaxis: Object: optional parameters for xaxis (see above)yaxis: Object: optional parameters for yaxis (see above)store: Object: dojo.data store (currently nly supports Persevere)xaxis: Object: First query for storegrid: Object: Options for the grid plotchartPlot: Object: Options for chart elements (lines, bars, etc)     
         */
        class DataChart extends dojox.charting.Chart2D {
            constructor(node: HTMLElement, kwArgs: Object);
            /**
             * The theme to style the chart. Defaults to PlotKit.blue.
             * 
             */
            "chartTheme": Object;
            /**
             * If false, all items are each their own series.
             * If true, the items are combined into one series
             * so that their charted properties can be compared.
             * 
             */
            "comparative": boolean;
            /**
             * The number of major ticks to show on the xaxis
             * 
             */
            "displayRange": number;
            /**
             * The field in the store item that is getting charted
             * 
             */
            "fieldName": string;
            /**
             * The name field of the store item
             * DO NOT SET: Set from store.labelAttribute
             * 
             */
            "label": string;
            /**
             * The the smallest the chart height can be
             * 
             */
            "minHeight": number;
            /**
             * The the smallest the chart width can be
             * 
             */
            "minWidth": number;
            /**
             * Used for fetching items. Will vary depending upon store.
             * 
             */
            "query": string;
            /**
             * Option used for fetching items
             * 
             */
            "queryOptions": string;
            /**
             * Whether live data updates and changes display, like columns moving
             * up and down, or whether it scrolls to the left as data is added
             * 
             */
            "scroll": boolean;
            /**
             * Whether the chart is showing (default) on
             * initialization or hidden.
             * 
             */
            "showing": boolean;
            /**
             * If true, chart is sized to data. If false, chart is a
             * fixed size. Note, is overridden by displayRange.
             * TODO: Stretch for the y-axis?
             * 
             */
            "stretchToFit": boolean;
            /**
             * Add an axis to the chart, for rendering.
             * 
             * @param name The name of the axis.             
             * @param kwArgs               OptionalAn optional keyword arguments object for use in defining details of an axis.             
             */
            addAxis(name: String, kwArgs: Object): any;
            /**
             * Add a new plot to the chart, defined by name and using the optional keyword arguments object.
             * Note that dojox.charting assumes the main plot to be called "default"; if you do not have
             * a plot called "default" and attempt to add data series to the chart without specifying the
             * plot to be rendered on, you WILL get errors.
             * 
             * @param name The name of the plot to be added to the chart.  If you only plan on using one plot, call it "default".             
             * @param kwArgs An object with optional parameters for the plot in question.             
             */
            addPlot(name: String, kwArgs: Object): any;
            /**
             * Add a data series to the chart for rendering.
             * 
             * @param name The name of the data series to be plotted.             
             * @param data The array of data points (either numbers or objects) thatrepresents the data to be drawn. Or it can be an object. Inthe latter case, it should have a property "data" (an array),destroy(), and setSeriesObject().             
             * @param kwArgs               OptionalAn optional keyword arguments object that will be mixed intothe resultant series object.             
             */
            addSeries(name: String, data: any[], kwArgs: Object): any;
            /**
             * Add a data series to the chart for rendering.
             * 
             * @param name The name of the data series to be plotted.             
             * @param data The array of data points (either numbers or objects) thatrepresents the data to be drawn. Or it can be an object. Inthe latter case, it should have a property "data" (an array),destroy(), and setSeriesObject().             
             * @param kwArgs               OptionalAn optional keyword arguments object that will be mixed intothe resultant series object.             
             */
            addSeries(name: String, data: Object, kwArgs: Object): any;
            /**
             * Calculate the geometry of the chart based on the defined axes of
             * a chart.
             * 
             */
            calculateGeometry(): any;
            /**
             * A convenience method to connect a function to a plot.
             * 
             * @param name The name of the plot as defined by addPlot.             
             * @param object The object to be connected.             
             * @param method The function to be executed.             
             */
            connectToPlot(name: String, object: Object, method: Function): any;
            /**
             * Convenience method to convert a label array of strings
             * into an array of objects
             * 
             * @param axis             
             */
            convertLabels(axis: any): any;
            /**
             * Delayed render, which is used to collect multiple updates
             * within a delayInMs time window.
             * 
             */
            delayedRender(): any;
            /**
             * 
             */
            destroy(): void;
            /**
             * Fetches initial data. Subsequent changes
             * are received via onSet in data store.
             * 
             */
            fetch(): void;
            /**
             * Fires a synthetic event for a series item.
             * 
             * @param seriesName Series name.             
             * @param eventName Event name to simulate: onmouseover, onmouseout, onclick.             
             * @param index Valid data value index for the event.             
             */
            fireEvent(seriesName: String, eventName: String, index: number): any;
            /**
             * 
             * @param element             
             * @param label             
             * @param labelType             
             */
            formatTruncatedLabel(element: any, label: any, labelType: any): void;
            /**
             * Calculate the full geometry of the chart.  This includes passing
             * over all major elements of a chart (plots, axes, series, container)
             * in order to ensure proper rendering.
             * 
             */
            fullGeometry(): any;
            /**
             * Force a full rendering of the chart, including full resets on the chart itself.
             * You should not call this method directly unless absolutely necessary.
             * 
             */
            fullRender(): any;
            /**
             * Get the given axis, by name.
             * 
             * @param name The name the axis was defined by.             
             */
            getAxis(name: String): any;
            /**
             * Get the coordinates and dimensions of the containing DOMNode, as
             * returned by dojo.coords.
             * 
             */
            getCoords(): any;
            /**
             * Returns a map of information about all axes in a chart and what they represent
             * in terms of scaling (see dojox.charting.axis2d.Default.getScaler).
             * 
             */
            getGeometry(): any;
            /**
             * Get the given plot, by name.
             * 
             * @param name The name the plot was defined by.             
             */
            getPlot(name: String): any;
            /**
             * Returns an array of plot names in the current order
             * (the top-most plot is the first).
             * 
             */
            getPlotOrder(): any;
            /**
             * The main use of this function is to determine
             * between a single value and an array of values.
             * Other property types included for convenience.
             * 
             * @param item             
             * @param prop             
             */
            getProperty(item: Object, prop: any): any;
            /**
             * Get the given series, by name.
             * 
             * @param name The name the series was defined by.             
             */
            getSeries(name: String): any;
            /**
             * Returns an array of series names in the current order
             * (the top-most series is the first) within a plot.
             * 
             * @param plotName Plot's name.             
             */
            getSeriesOrder(plotName: String): any;
            /**
             * If chart is showing, hide it
             * Prevents rendering while hidden
             * 
             */
            hide(): void;
            /**
             * Moves a given plot to back.
             * 
             * @param name Plot's name to move.             
             */
            movePlotToBack(name: String): any;
            /**
             * Moves a given plot to front.
             * 
             * @param name Plot's name to move.             
             */
            movePlotToFront(name: String): any;
            /**
             * Moves a given series to back of a plot.
             * 
             * @param name Series' name to move.             
             */
            moveSeriesToBack(name: String): any;
            /**
             * Moves a given series to front of a plot.
             * 
             * @param name Series' name to move.             
             */
            moveSeriesToFront(name: String): any;
            /**
             * Remove the axis that was defined using name.
             * 
             * @param name The axis name, as defined in addAxis.             
             */
            removeAxis(name: String): any;
            /**
             * Remove the plot defined using name from the chart's plot stack.
             * 
             * @param name The name of the plot as defined using addPlot.             
             */
            removePlot(name: String): any;
            /**
             * Remove the series defined by name from the chart.
             * 
             * @param name The name of the series as defined by addSeries.             
             */
            removeSeries(name: String): any;
            /**
             * Render the chart according to the current information defined.  This should
             * be the last call made when defining/creating a chart, or if data within the
             * chart has been changed.
             * 
             */
            render(): any;
            /**
             * Resize the chart to the dimensions of width and height.
             * Resize the chart and its surface to the width and height dimensions.
             * If a single argument of the form {w: value1, h: value2} is provided take that argument as the dimensions to use.
             * Finally if no argument is provided, resize the surface to the marginBox of the chart.
             * 
             * @param width               OptionalThe new width of the chart or the box definition.             
             * @param height               OptionalThe new height of the chart.             
             */
            resize(width: number, height: number): any;
            /**
             * Resize the chart to the dimensions of width and height.
             * Resize the chart and its surface to the width and height dimensions.
             * If a single argument of the form {w: value1, h: value2} is provided take that argument as the dimensions to use.
             * Finally if no argument is provided, resize the surface to the marginBox of the chart.
             * 
             * @param width               OptionalThe new width of the chart or the box definition.             
             * @param height               OptionalThe new height of the chart.             
             */
            resize(width: Object, height: number): any;
            /**
             * Call this function to change the chart size.
             * Can be connected to a layout widget that calls
             * resize.
             * 
             * @param dim             
             */
            resizeChart(dim: Object): void;
            /**
             * Convenience method that sets series labels based on item labels.
             * 
             * @param val             
             */
            seriesLabels(val: number): any;
            /**
             * Zooms an axis and all dependent plots. Can be used to zoom in 1D.
             * 
             * @param name The name of the axis as defined by addAxis.             
             * @param scale The scale on the target axis.             
             * @param offset Any offest, as measured by axis tick             
             * @param zoom               OptionalThe chart zooming animation trigger.  This is null by default,e.g. {duration: 1200}, or just set true.             
             */
            setAxisWindow(name: String, scale: number, offset: number, zoom: boolean): any;
            /**
             * Zooms an axis and all dependent plots. Can be used to zoom in 1D.
             * 
             * @param name The name of the axis as defined by addAxis.             
             * @param scale The scale on the target axis.             
             * @param offset Any offest, as measured by axis tick             
             * @param zoom               OptionalThe chart zooming animation trigger.  This is null by default,e.g. {duration: 1200}, or just set true.             
             */
            setAxisWindow(name: String, scale: number, offset: number, zoom: Object): any;
            /**
             * 
             * @param dir             
             */
            setDir(dir: any): Function;
            /**
             * Sets new order of plots. newOrder cannot add or remove
             * plots. Wrong names, or dups are ignored.
             * 
             * @param newOrder Array of plot names compatible with getPlotOrder().             
             */
            setPlotOrder(newOrder: any[]): any;
            /**
             * Sets new order of series within a plot. newOrder cannot add
             * or remove series. Wrong names, or dups are ignored.
             * 
             * @param newOrder Array of series names compatible with getPlotOrder(). Allseries should belong to the same plot.             
             */
            setSeriesOrder(newOrder: any[]): any;
            /**
             * Sets the chart store and query
             * then does the first fetch and
             * connects to subsequent changes.
             * 
             * @param store             
             * @param query             
             * @param fieldName             
             * @param queryOptions             
             */
            setStore(store: Object, query: String, fieldName: String, queryOptions: Object): void;
            /**
             * Set a theme of the chart.
             * 
             * @param theme The theme to be used for visual rendering.             
             */
            setTheme(theme: dojox.charting.SimpleTheme): any;
            /**
             * Zooms in or out any plots in two dimensions.
             * 
             * @param sx The scale for the x axis.             
             * @param sy The scale for the y axis.             
             * @param dx The pixel offset on the x axis.             
             * @param dy The pixel offset on the y axis.             
             * @param zoom               OptionalThe chart zooming animation trigger.  This is null by default,e.g. {duration: 1200}, or just set true.             
             */
            setWindow(sx: number, sy: number, dx: number, dy: number, zoom: boolean): any;
            /**
             * Zooms in or out any plots in two dimensions.
             * 
             * @param sx The scale for the x axis.             
             * @param sy The scale for the y axis.             
             * @param dx The pixel offset on the x axis.             
             * @param dy The pixel offset on the y axis.             
             * @param zoom               OptionalThe chart zooming animation trigger.  This is null by default,e.g. {duration: 1200}, or just set true.             
             */
            setWindow(sx: number, sy: number, dx: number, dy: number, zoom: Object): any;
            /**
             * If chart is hidden, show it
             * 
             */
            show(): void;
            /**
             * Update the given series with a new set of data points.
             * 
             * @param name The name of the series as defined in addSeries.             
             * @param data The array of data points (either numbers or objects) thatrepresents the data to be drawn. Or it can be an object. Inthe latter case, it should have a property "data" (an array),destroy(), and setSeriesObject().             
             * @param offsets               OptionalIf true recomputes the offsets of the chart based on the newdata. This is useful if the range of data is drastically changingand offsets need to be recomputed.             
             */
            updateSeries(name: String, data: any[], offsets: boolean): any;
            /**
             * Update the given series with a new set of data points.
             * 
             * @param name The name of the series as defined in addSeries.             
             * @param data The array of data points (either numbers or objects) thatrepresents the data to be drawn. Or it can be an object. Inthe latter case, it should have a property "data" (an array),destroy(), and setSeriesObject().             
             * @param offsets               OptionalIf true recomputes the offsets of the chart based on the newdata. This is useful if the range of data is drastically changingand offsets need to be recomputed.             
             */
            updateSeries(name: String, data: Object, offsets: boolean): any;
            /**
             * Zoom the chart to a specific range on one axis.  This calls render()
             * directly as a convenience method.
             * 
             * @param name The name of the axis as defined by addAxis.             
             * @param range The end points of the zoom range, measured in axis ticks.             
             * @param delayed             
             */
            zoomIn(name: String, range: any[], delayed: any): void;
            /**
             * Called after a completed fetch
             * or when store items change.
             * On first run, sets the chart data,
             * then updates chart and legends.
             * 
             * @param items             
             */
            onData(items: any[]): void;
            /**
             * stub. Fires after data is received but
             * before data is parsed and rendered
             * 
             * @param items             
             */
            onDataReceived(items: any[]): void;
            /**
             * 
             * @param err             
             */
            onError(err: Error): void;
            /**
             * Fired when a store item changes.
             * Collects the item calls and when
             * done (after 200ms), sends item
             * array to onData().
             * 
             * @param item             
             */
            onSet(item: Object): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/DataSeries.html
         *
         * 
         * @param store A dojo.data store object.     
         * @param kwArgs A store-specific keyword parameters used for fetching items.See dojo/data/api/Read.fetch().     
         * @param value Function, which takes a store, and an object handle, andproduces an output possibly inspecting the store's item. Ora dictionary object, which tells what names to extract froman object and how to map them to an output. Or a string, whichis a numeric field name to use for plotting. If undefined, nullor empty string (the default), "value" field is extracted.     
         */
        class DataSeries {
            constructor(store: Object, kwArgs: Object, value: Function);
            /**
             * Clean up before GC.
             * 
             */
            destroy(): void;
            /**
             * Fetches data from the store and updates a chart.
             * 
             */
            fetch(): void;
            /**
             * Sets a dojox.charting.Series object we will be working with.
             * 
             * @param series Our interface to the chart.             
             */
            setSeriesObject(series: dojox.charting.Series): void;
            /**
             * As stub to process fetch errors. Provide so user can attach to
             * it with dojo.connect(). See dojo/data/api/Read fetch() for
             * details: onError property.
             * 
             * @param errorData             
             * @param request             
             */
            onFetchError(errorData: any, request: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/Element.html
         *
         * A base class that is used to build other elements of a chart, such as
         * a series.
         * 
         * @param chart The chart that this element belongs to.     
         */
        class Element {
            constructor(chart: dojox.charting.Chart);
            /**
             * The parent chart for this element.
             * 
             */
            "chart": Object;
            /**
             * A flag indicating whether or not this element needs to be rendered.
             * 
             */
            "dirty": boolean;
            /**
             * The visual GFX group representing this element.
             * 
             */
            "group": Object;
            /**
             * Any DOMNodes used as a part of this element (such as HTML-based labels).
             * 
             */
            "htmlElement": any[];
            /**
             * 
             */
            "htmlElements": Object;
            /**
             * Clean any elements (HTML or GFX-based) out of our group, and create a new one.
             * 
             * @param creator               OptionalAn optional surface to work with.             
             */
            cleanGroup(creator: dojox.gfx.shape.Surface): any;
            /**
             * API addition to conform to the rest of the Dojo Toolkit's standard.
             * 
             */
            destroy(): void;
            /**
             * Destroy any DOMNodes that may have been created as a part of this element.
             * 
             */
            destroyHtmlElements(): void;
            /**
             * 
             */
            getGroup(): any;
            /**
             * 
             * @param s             
             * @param font             
             */
            getTextWidth(s: any, font: any): number;
            /**
             * Get the truncated string based on the limited character count(dichotomy algorithm)
             * 
             * @param s               Optionalcandidate text.             
             * @param font               Optionaltext's font style.             
             * @param wcLimit               Optionaltext limited character count.             
             * @param truncated               Optionalwhether the input text(s) has already been truncated.             
             */
            getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
            /**
             * Get the truncated string based on the limited width in px(dichotomy algorithm)
             * 
             * @param s               Optionalcandidate text.             
             * @param font               Optionaltext's font style.             
             * @param limitWidth               Optionaltext limited width in px.             
             * @param truncated               Optionalwhether the input text(s) has already been truncated.             
             */
            getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
            /**
             * Clear any elements out of our group, and destroy the group.
             * 
             */
            purgeGroup(): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/Series.html
         *
         * An object representing a series of data for plotting on a chart.
         * 
         * @param chart The chart that this series belongs to.     
         * @param data The array of data points (either numbers or objects) thatrepresents the data to be drawn. Or it can be an object. Inthe latter case, it should have a property "data" (an array),destroy(), and setSeriesObject().     
         * @param kwArgs       OptionalAn optional keyword arguments object to set details for this series.     
         */
        class Series extends dojox.charting.Element {
            constructor(chart: dojox.charting.Chart, data: any[], kwArgs?: Object);
            /**
             * The parent chart for this element.
             * 
             */
            "chart": Object;
            /**
             * A flag indicating whether or not this element needs to be rendered.
             * 
             */
            "dirty": boolean;
            /**
             * The visual GFX group representing this element.
             * 
             */
            "group": Object;
            /**
             * Any DOMNodes used as a part of this element (such as HTML-based labels).
             * 
             */
            "htmlElement": any[];
            /**
             * 
             */
            "htmlElements": Object;
            /**
             * Clean any elements (HTML or GFX-based) out of our group, and create a new one.
             * 
             * @param creator               OptionalAn optional surface to work with.             
             */
            cleanGroup(creator: dojox.gfx.shape.Surface): any;
            /**
             * Clear the calculated additional parameters set on this series.
             * 
             */
            clear(): void;
            /**
             * API addition to conform to the rest of the Dojo Toolkit's standard.
             * 
             */
            destroy(): void;
            /**
             * Destroy any DOMNodes that may have been created as a part of this element.
             * 
             */
            destroyHtmlElements(): void;
            /**
             * 
             */
            getGroup(): any;
            /**
             * 
             * @param s             
             * @param font             
             */
            getTextWidth(s: any, font: any): number;
            /**
             * Get the truncated string based on the limited character count(dichotomy algorithm)
             * 
             * @param s               Optionalcandidate text.             
             * @param font               Optionaltext's font style.             
             * @param wcLimit               Optionaltext limited character count.             
             * @param truncated               Optionalwhether the input text(s) has already been truncated.             
             */
            getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
            /**
             * Get the truncated string based on the limited width in px(dichotomy algorithm)
             * 
             * @param s               Optionalcandidate text.             
             * @param font               Optionaltext's font style.             
             * @param limitWidth               Optionaltext limited width in px.             
             * @param truncated               Optionalwhether the input text(s) has already been truncated.             
             */
            getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
            /**
             * Clear any elements out of our group, and destroy the group.
             * 
             */
            purgeGroup(): any;
            /**
             * Set data and make this object dirty, so it can be redrawn.
             * 
             * @param data The array of data points (either numbers or objects) thatrepresents the data to be drawn. Or it can be an object. Inthe latter case, it should have a property "data" (an array),destroy(), and setSeriesObject().             
             */
            update(data: any[]): void;
            /**
             * Set data and make this object dirty, so it can be redrawn.
             * 
             * @param data The array of data points (either numbers or objects) thatrepresents the data to be drawn. Or it can be an object. Inthe latter case, it should have a property "data" (an array),destroy(), and setSeriesObject().             
             */
            update(data: Object): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/SimpleTheme.html
         *
         * A SimpleTheme or Theme is a pre-defined object, primarily JSON-based, that makes up the definitions to
         * style a chart.
         * While you can set up style definitions on a chart directly (usually through the various add methods
         * on a dojox.charting.Chart object), a Theme simplifies this manual setup by allowing you to
         * pre-define all of the various visual parameters of each element in a chart.
         * 
         * Most of the properties of a Theme are straight-forward; if something is line-based (such as
         * an axis or the ticks on an axis), they will be defined using basic stroke parameters.  Likewise,
         * if an element is primarily block-based (such as the background of a chart), it will be primarily
         * fill-based.
         * 
         * In addition (for convenience), a Theme definition does not have to contain the entire JSON-based
         * structure.  Each theme is built on top of a default theme (which serves as the basis for the theme
         * "GreySkies"), and is mixed into the default theme object.  This allows you to create a theme based,
         * say, solely on colors for data series.
         * 
         * Defining a new theme is relatively easy; see any of the themes in dojox.charting.themes for examples
         * on how to define your own.
         * 
         * When you set a theme on a chart, the theme itself is deep-cloned.  This means that you cannot alter
         * the theme itself after setting the theme value on a chart, and expect it to change your chart.  If you
         * are looking to make alterations to a theme for a chart, the suggestion would be to create your own
         * theme, based on the one you want to use, that makes those alterations before it is applied to a chart.
         * 
         * Finally, a Theme contains a number of functions to facilitate rendering operations on a chart--the main
         * helper of which is the ~next~ method, in which a chart asks for the information for the next data series
         * to be rendered.
         * 
         * A note on colors:
         * A theme palette is usually comprised of 5 different color definitions, and
         * no more.  If you have a need to render a chart with more than 5 data elements, you can simply "push"
         * new color definitions into the theme's .color array.  Make sure that you do that with the actual
         * theme object from a Chart, and not in the theme itself (i.e. either do that before using .setTheme
         * on a chart).
         * 
         * @param kwArgs     
         */
        class SimpleTheme {
            constructor(kwArgs: any);
            /**
             * 
             */
            "defaultColors": any[];
            /**
             * 
             */
            "defaultMarkers": Object;
            /**
             * 
             */
            "defaultTheme": Object;
            /**
             * 
             */
            "shapeSpaces": Object;
            /**
             * Add a custom marker to this theme.
             * 
             * @param name             
             * @param segment             
             */
            addMarker(name: String, segment: String): void;
            /**
             * Add a mixin object to the passed theme and process.
             * 
             * @param theme The theme to mixin to.             
             * @param elementType The type of element in question. Can be "line", "bar" or "circle"             
             * @param mixin The object or objects to mix into the theme.             
             * @param doPost If true, run the new theme through the post-processor.             
             */
            addMixin(theme: dojox.charting.SimpleTheme, elementType: String, mixin: Object, doPost: boolean): any;
            /**
             * Add a mixin object to the passed theme and process.
             * 
             * @param theme The theme to mixin to.             
             * @param elementType The type of element in question. Can be "line", "bar" or "circle"             
             * @param mixin The object or objects to mix into the theme.             
             * @param doPost If true, run the new theme through the post-processor.             
             */
            addMixin(theme: dojox.charting.SimpleTheme, elementType: String, mixin: any[], doPost: boolean): any;
            /**
             * Clear and reset the internal pointer to start fresh.
             * 
             */
            clear(): void;
            /**
             * Clone the current theme.
             * 
             */
            clone(): any;
            /**
             * Calculates and merges tick parameters.
             * 
             * @param name Tick name, can be "major", "minor", or "micro".             
             * @param mixin               OptionalOptional object to mix in to the tick.             
             */
            getTick(name: String, mixin: Object): any;
            /**
             * 
             * @param f             
             */
            inspectObjects(f: any): void;
            /**
             * Get the next color or series theme.
             * 
             * @param elementType               OptionalAn optional element type (for use with series themes)             
             * @param mixin               OptionalAn optional object to mix into the theme.             
             * @param doPost               OptionalA flag to post-process the results.             
             */
            next(elementType: String, mixin: Object, doPost: boolean): any;
            /**
             * Process any post-shape fills.
             * 
             * @param theme The theme to post process with.             
             * @param elementType The type of element being filled.  Can be "bar" or "circle".             
             */
            post(theme: dojox.charting.SimpleTheme, elementType: String): any;
            /**
             * 
             */
            reverseFills(): void;
            /**
             * Set all the markers of this theme at once.  obj should be a
             * dictionary of keys and path segments.
             * 
             * @param obj             
             */
            setMarkers(obj: Object): void;
            /**
             * Skip the next internal color.
             * 
             */
            skip(): void;
        }
        module SimpleTheme {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/SimpleTheme.defaultMarkers.html
             *
             * 
             */
            interface defaultMarkers {
                /**
                 * 
                 */
                CIRCLE: string;
                /**
                 * 
                 */
                CROSS: string;
                /**
                 * 
                 */
                DIAMOND: string;
                /**
                 * 
                 */
                SQUARE: string;
                /**
                 * 
                 */
                TRIANGLE: string;
                /**
                 * 
                 */
                TRIANGLE_INVERTED: string;
                /**
                 * 
                 */
                X: string;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/SimpleTheme.defaultTheme.html
             *
             * 
             */
            interface defaultTheme {
                /**
                 * 
                 */
                axis: Object;
                /**
                 * 
                 */
                chart: Object;
                /**
                 * 
                 */
                indicator: Object;
                /**
                 * 
                 */
                marker: Object;
                /**
                 * 
                 */
                plotarea: Object;
                /**
                 * 
                 */
                series: Object;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/StoreSeries.html
         *
         * 
         * @param store A dojo object store.     
         * @param kwArgs A store-specific keyword parameters used for querying objects.See dojo.store docs     
         * @param value Function, which takes an object handle, andproduces an output possibly inspecting the store's item. Ora dictionary object, which tells what names to extract froman object and how to map them to an output. Or a string, whichis a numeric field name to use for plotting. If undefined, nullor empty string (the default), "value" field is extracted.     
         */
        class StoreSeries {
            constructor(store: Object, kwArgs: Object, value: Function);
            /**
             * Clean up before GC.
             * 
             */
            destroy(): void;
            /**
             * Fetches data from the store and updates a chart.
             * 
             */
            fetch(): void;
            /**
             * Sets a dojox.charting.Series object we will be working with.
             * 
             * @param series Our interface to the chart.             
             */
            setSeriesObject(series: dojox.charting.Series): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/Theme.html
         *
         * A Theme is a pre-defined object, primarily JSON-based, that makes up the definitions to
         * style a chart. It extends SimpleTheme with additional features like color definition by
         * palettes and gradients definition.
         * 
         * @param kwArgs     
         */
        class Theme extends dojox.charting.SimpleTheme {
            constructor(kwArgs: any);
            /**
             * 
             */
            "defaultColors": any[];
            /**
             * 
             */
            "defaultMarkers": Object;
            /**
             * 
             */
            "defaultTheme": Object;
            /**
             * 
             */
            "shapeSpaces": Object;
            /**
             * Add a custom marker to this theme.
             * 
             * @param name             
             * @param segment             
             */
            addMarker(name: String, segment: String): void;
            /**
             * Add a mixin object to the passed theme and process.
             * 
             * @param theme The theme to mixin to.             
             * @param elementType The type of element in question. Can be "line", "bar" or "circle"             
             * @param mixin The object or objects to mix into the theme.             
             * @param doPost If true, run the new theme through the post-processor.             
             */
            addMixin(theme: dojox.charting.SimpleTheme, elementType: String, mixin: Object, doPost: boolean): any;
            /**
             * Add a mixin object to the passed theme and process.
             * 
             * @param theme The theme to mixin to.             
             * @param elementType The type of element in question. Can be "line", "bar" or "circle"             
             * @param mixin The object or objects to mix into the theme.             
             * @param doPost If true, run the new theme through the post-processor.             
             */
            addMixin(theme: dojox.charting.SimpleTheme, elementType: String, mixin: any[], doPost: boolean): any;
            /**
             * Clear and reset the internal pointer to start fresh.
             * 
             */
            clear(): void;
            /**
             * Clone the current theme.
             * 
             */
            clone(): any;
            /**
             * Generate a set of colors for the theme based on keyword
             * arguments.
             * 
             * @param kwArgs The arguments object used to define colors.             
             */
            defineColors(kwArgs: Object): any;
            /**
             * 
             * @param fillPattern             
             * @param colorFrom             
             * @param colorTo             
             */
            generateGradient(fillPattern: any, colorFrom: any, colorTo: any): any;
            /**
             * 
             * @param color             
             * @param luminance             
             */
            generateHslColor(color: any, luminance: any): any;
            /**
             * 
             * @param color             
             * @param fillPattern             
             * @param lumFrom             
             * @param lumTo             
             */
            generateHslGradient(color: any, fillPattern: any, lumFrom: any, lumTo: any): any;
            /**
             * Calculates and merges tick parameters.
             * 
             * @param name Tick name, can be "major", "minor", or "micro".             
             * @param mixin               OptionalOptional object to mix in to the tick.             
             */
            getTick(name: String, mixin: Object): any;
            /**
             * 
             * @param f             
             */
            inspectObjects(f: any): void;
            /**
             * Get the next color or series theme.
             * 
             * @param elementType               OptionalAn optional element type (for use with series themes)             
             * @param mixin               OptionalAn optional object to mix into the theme.             
             * @param doPost               OptionalA flag to post-process the results.             
             */
            next(elementType: String, mixin: Object, doPost: boolean): any;
            /**
             * Process any post-shape fills.
             * 
             * @param theme The theme to post process with.             
             * @param elementType The type of element being filled.  Can be "bar" or "circle".             
             */
            post(theme: dojox.charting.SimpleTheme, elementType: String): any;
            /**
             * 
             */
            reverseFills(): void;
            /**
             * Set all the markers of this theme at once.  obj should be a
             * dictionary of keys and path segments.
             * 
             * @param obj             
             */
            setMarkers(obj: Object): void;
            /**
             * Skip the next internal color.
             * 
             */
            skip(): void;
        }
        module Theme {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/Theme.defaultMarkers.html
             *
             * 
             */
            interface defaultMarkers {
                /**
                 * 
                 */
                CIRCLE: string;
                /**
                 * 
                 */
                CROSS: string;
                /**
                 * 
                 */
                DIAMOND: string;
                /**
                 * 
                 */
                SQUARE: string;
                /**
                 * 
                 */
                TRIANGLE: string;
                /**
                 * 
                 */
                TRIANGLE_INVERTED: string;
                /**
                 * 
                 */
                X: string;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/Theme.defaultTheme.html
             *
             * 
             */
            interface defaultTheme {
                /**
                 * 
                 */
                axis: Object;
                /**
                 * 
                 */
                chart: Object;
                /**
                 * 
                 */
                indicator: Object;
                /**
                 * 
                 */
                marker: Object;
                /**
                 * 
                 */
                plotarea: Object;
                /**
                 * 
                 */
                series: Object;
            }
        }

        module action2d {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/action2d/_IndicatorElement.html
             *
             * Internal element used by indicator actions.
             * 
             * @param chart     
             * @param kwArgs     
             */
            class _IndicatorElement extends dojox.charting.plot2d.Indicator {
                constructor(chart: any, kwArgs: any);
                /**
                 * 
                 */
                "baseParams": Object;
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * 
                 * @param run             
                 */
                addSeries(run: any): void;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * Clean any elements (HTML or GFX-based) out of our group, and create a new one.
                 * 
                 * @param creator               OptionalAn optional surface to work with.             
                 */
                cleanGroup(creator: dojox.gfx.Surface): any;
                /**
                 * 
                 */
                clear(): void;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: String): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: Function): any;
                /**
                 * 
                 * @param group             
                 * @param value             
                 * @param bbox             
                 * @param theme             
                 */
                createLabel(group: any, value: any, bbox: any, theme: any): void;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * Find out if any event handlers have been connected to our plotEvent.
                 * 
                 */
                events(): any;
                /**
                 * Emulates firing an event for a given data value (specified by
                 * an index) of a given series.
                 * 
                 * @param seriesName Series name.             
                 * @param eventName Event name to emulate.             
                 * @param index Valid data value index used to raise an event.             
                 * @param eventObject               OptionalOptional event object. Especially useful for synthetic events.Default: null.             
                 */
                fireEvent(seriesName: String, eventName: String, index: number, eventObject: Object): void;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get how many data series we have, so we know how many colors to use.
                 * 
                 */
                getRequiredColors(): any;
                /**
                 * Returns default stats (irrelevant for this type of plot).
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * Initializes scalers using attached axes.
                 * 
                 * @param dim Size of a plot area in pixels as {width, height}.             
                 * @param stats Min/max of data in both directions as {hmin, hmax, vmin, vmax}.             
                 */
                initializeScalers(dim: Object, stats: Object): any;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Return whether or not this plot needs to be redrawn.
                 * 
                 */
                isDirty(): any;
                /**
                 * Create/alter any zooming windows on this plot.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                performZoom(dim: Object, offsets: Object): any;
                /**
                 * Stub function for use by specific plots.
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                plotEvent(o: Object): void;
                /**
                 * 
                 */
                purgeGroup(): void;
                /**
                 * Raises events in predefined order
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                raiseEvent(o: Object): void;
                /**
                 * 
                 */
                render(): void;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Reset all events attached to our plotEvent (i.e. disconnect).
                 * 
                 */
                resetEvents(): void;
                /**
                 * Set an axis for this plot.
                 * 
                 * @param axis The axis to set.             
                 */
                setAxis(axis: dojox.charting.axis2d.Base): any;
                /**
                 * 
                 */
                stopTrack(): void;
                /**
                 * Compute plot axis data coordinates from page coordinates.
                 * 
                 * @param coord The pixel coordinate in page coordinate space. That is of the following form:{ x: 50, y: 200 }If not provided return the tranform method instead of the result of the transformation.             
                 */
                toData(coord: Object): any;
                /**
                 * Compute page coordinates from plot axis data coordinates.
                 * 
                 * @param coord               OptionalThe coordinates in plot axis data coordinate space. For cartesian charts that is of the following form:{ hAxisName: 50, vAxisName: 200 }If not provided return the transform method instead of the result of the transformation.             
                 */
                toPage(coord: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/action2d/Base.html
             *
             * Base action class for plot and chart actions.
             * 
             * @param chart The chart this action applies to.     
             * @param plot       OptionalOptional target plot for this action.  Default is "default".     
             */
            class Base extends dojo.Evented {
                constructor(chart: dojox.charting.Chart, plot?: String);
                /**
                 * Connect this action to the plot or the chart.
                 * 
                 */
                connect(): void;
                /**
                 * Do any cleanup needed when destroying parent elements.
                 * 
                 */
                destroy(): void;
                /**
                 * Disconnect this action from the plot or the chart.
                 * 
                 */
                disconnect(): void;
                /**
                 * 
                 * @param type             
                 * @param event             
                 */
                emit(type: any, event: any): any;
                /**
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/action2d/ChartAction.html
             *
             * Base action class for chart actions.
             * 
             * @param chart The chart this action applies to.     
             * @param plot       OptionalOptional target plot for this chart action.  Default is "default".     
             */
            class ChartAction extends dojox.charting.action2d.Base {
                constructor(chart: dojox.charting.Chart, plot?: String);
                /**
                 * Connect this action to the chart.
                 * 
                 */
                connect(): void;
                /**
                 * Do any cleanup needed when destroying parent elements.
                 * 
                 */
                destroy(): void;
                /**
                 * Disconnect this action from the chart.
                 * 
                 */
                disconnect(): void;
                /**
                 * 
                 * @param type             
                 * @param event             
                 */
                emit(type: any, event: any): any;
                /**
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/action2d/Highlight.html
             *
             * Creates a highlighting action on a plot, where an element on that plot
             * has a highlight on it.
             * 
             * @param chart The chart this action belongs to.     
             * @param plot       OptionalThe plot this action is attached to.  If not passed, "default" is assumed.     
             * @param kwArgs       OptionalOptional keyword arguments object for setting parameters.     
             */
            class Highlight extends dojox.charting.action2d.PlotAction {
                constructor(chart: dojox.charting.Chart, plot?: String, kwArgs?: Object);
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * 
                 */
                "overOutEvents": Object;
                /**
                 * Connect this action to the given plot.
                 * 
                 */
                connect(): void;
                /**
                 * Do any cleanup needed when destroying parent elements.
                 * 
                 */
                destroy(): void;
                /**
                 * Disconnect this action from the given plot, if connected.
                 * 
                 */
                disconnect(): void;
                /**
                 * 
                 * @param type             
                 * @param event             
                 */
                emit(type: any, event: any): any;
                /**
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * Process the action on the given object.
                 * 
                 * @param o The object on which to process the highlighting action.             
                 */
                process(o: dojox.gfx.shape.Shape): void;
                /**
                 * Reset the action.
                 * 
                 */
                reset(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/action2d/Magnify.html
             *
             * Create an action that magnifies the object the action is applied to.
             * 
             * @param chart The chart this action belongs to.     
             * @param plot       OptionalThe plot to apply the action to. If not passed, "default" is assumed.     
             * @param kwArgs       OptionalOptional keyword arguments for this action.     
             */
            class Magnify extends dojox.charting.action2d.PlotAction {
                constructor(chart: dojox.charting.Chart, plot?: String, kwArgs?: Object);
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * 
                 */
                "overOutEvents": Object;
                /**
                 * Connect this action to the given plot.
                 * 
                 */
                connect(): void;
                /**
                 * Do any cleanup needed when destroying parent elements.
                 * 
                 */
                destroy(): void;
                /**
                 * Disconnect this action from the given plot, if connected.
                 * 
                 */
                disconnect(): void;
                /**
                 * 
                 * @param type             
                 * @param event             
                 */
                emit(type: any, event: any): any;
                /**
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * Process the action on the given object.
                 * 
                 * @param o The object on which to process the magnifying action.             
                 */
                process(o: dojox.gfx.shape.Shape): void;
                /**
                 * Reset the action.
                 * 
                 */
                reset(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/action2d/MouseIndicator.html
             *
             * Create a mouse indicator action. You can drag mouse over the chart to display a data indicator.
             * 
             * @param chart The chart this action applies to.     
             * @param plot     
             * @param kwArgs       OptionalOptional arguments for the chart action.     
             */
            class MouseIndicator extends dojox.charting.action2d.ChartAction {
                constructor(chart: dojox.charting.Chart, plot: any, kwArgs?: Object);
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Connect this action to the chart. This adds a indicator plot
                 * to the chart that's why Chart.render() must be called after connect.
                 * 
                 */
                connect(): void;
                /**
                 * Do any cleanup needed when destroying parent elements.
                 * 
                 */
                destroy(): void;
                /**
                 * Disconnect this action from the chart.
                 * 
                 */
                disconnect(): void;
                /**
                 * 
                 * @param type             
                 * @param event             
                 */
                emit(type: any, event: any): any;
                /**
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * Called when the indicator value changed.
                 * 
                 * @param event An event with a start property containing the {x, y} data points of the mouse indicator. It alsocontains a label property containing the displayed text.             
                 */
                onChange(event: any): void;
                /**
                 * Called when mouse is down on the chart.
                 * 
                 * @param event             
                 */
                onMouseDown(event: any): void;
                /**
                 * Called when the mouse is moved on the chart.
                 * 
                 * @param event             
                 */
                onMouseMove(event: any): void;
                /**
                 * Called when mouse is up on the chart.
                 * 
                 * @param event             
                 */
                onMouseUp(event: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/action2d/MouseZoomAndPan.html
             *
             * Create an mouse zoom and pan action.
             * You can zoom in or out the data window with mouse wheel. You can scroll using mouse drag gesture. 
             * You can toggle between zoom and fit view using double click on the chart.
             * 
             * @param chart The chart this action applies to.     
             * @param plot     
             * @param kwArgs       OptionalOptional arguments for the chart action.     
             */
            class MouseZoomAndPan extends dojox.charting.action2d.ChartAction {
                constructor(chart: dojox.charting.Chart, plot: any, kwArgs?: Object);
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Connect this action to the chart.
                 * 
                 */
                connect(): void;
                /**
                 * Do any cleanup needed when destroying parent elements.
                 * 
                 */
                destroy(): void;
                /**
                 * Disconnect this action from the chart.
                 * 
                 */
                disconnect(): void;
                /**
                 * 
                 * @param type             
                 * @param event             
                 */
                emit(type: any, event: any): any;
                /**
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * Called when the mouse is double is double clicked on the chart. Toggle between zoom and fit chart.
                 * 
                 * @param event             
                 */
                onDoubleClick(event: any): void;
                /**
                 * Called when a key is pressed on the chart.
                 * 
                 * @param event             
                 */
                onKeyPress(event: any): void;
                /**
                 * Called when mouse is down on the chart.
                 * 
                 * @param event             
                 */
                onMouseDown(event: any): void;
                /**
                 * Called when mouse is moved on the chart.
                 * 
                 * @param event             
                 */
                onMouseMove(event: any): void;
                /**
                 * Called when mouse is up on the chart.
                 * 
                 * @param event             
                 */
                onMouseUp(event: any): void;
                /**
                 * Called when mouse wheel is used on the chart.
                 * 
                 * @param event             
                 */
                onMouseWheel(event: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/action2d/MoveSlice.html
             *
             * Create an action for a pie chart that moves and scales a pie slice.
             * 
             * @param chart The chart this action belongs to.     
             * @param plot       OptionalThe plot this action is attached to.  If not passed, "default" is assumed.     
             * @param kwArgs       OptionalOptional keyword arguments object for setting parameters.     
             */
            class MoveSlice extends dojox.charting.action2d.PlotAction {
                constructor(chart: dojox.charting.Chart, plot?: String, kwArgs?: Object);
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * 
                 */
                "overOutEvents": Object;
                /**
                 * Connect this action to the given plot.
                 * 
                 */
                connect(): void;
                /**
                 * Do any cleanup needed when destroying parent elements.
                 * 
                 */
                destroy(): void;
                /**
                 * Disconnect this action from the given plot, if connected.
                 * 
                 */
                disconnect(): void;
                /**
                 * 
                 * @param type             
                 * @param event             
                 */
                emit(type: any, event: any): any;
                /**
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * Process the action on the given object.
                 * 
                 * @param o The object on which to process the slice moving action.             
                 */
                process(o: dojox.gfx.shape.Shape): void;
                /**
                 * 
                 */
                reset(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/action2d/PlotAction.html
             *
             * Base action class for plot actions.
             * 
             * @param chart The chart this action applies to.     
             * @param plot       OptionalThe name of the plot this action belongs to.  If none is passed "default" is assumed.     
             * @param kwargs       OptionalOptional arguments for the action.     
             */
            class PlotAction extends dojox.charting.action2d.Base {
                constructor(chart: dojox.charting.Chart, plot?: String, kwargs?: Object);
                /**
                 * 
                 */
                "overOutEvents": Object;
                /**
                 * Connect this action to the given plot.
                 * 
                 */
                connect(): void;
                /**
                 * Do any cleanup needed when destroying parent elements.
                 * 
                 */
                destroy(): void;
                /**
                 * Disconnect this action from the given plot, if connected.
                 * 
                 */
                disconnect(): void;
                /**
                 * 
                 * @param type             
                 * @param event             
                 */
                emit(type: any, event: any): any;
                /**
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * Reset the action.
                 * 
                 */
                reset(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/action2d/Shake.html
             *
             * Create a shaking action for use on an element in a chart.
             * 
             * @param chart The chart this action belongs to.     
             * @param plot       OptionalThe plot this action is attached to.  If not passed, "default" is assumed.     
             * @param kwArgs       OptionalOptional keyword arguments object for setting parameters.     
             */
            class Shake extends dojox.charting.action2d.PlotAction {
                constructor(chart: dojox.charting.Chart, plot?: String, kwArgs?: Object);
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * 
                 */
                "overOutEvents": Object;
                /**
                 * Connect this action to the given plot.
                 * 
                 */
                connect(): void;
                /**
                 * Do any cleanup needed when destroying parent elements.
                 * 
                 */
                destroy(): void;
                /**
                 * Disconnect this action from the given plot, if connected.
                 * 
                 */
                disconnect(): void;
                /**
                 * 
                 * @param type             
                 * @param event             
                 */
                emit(type: any, event: any): any;
                /**
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * Process the action on the given object.
                 * 
                 * @param o The object on which to process the slice moving action.             
                 */
                process(o: dojox.gfx.shape.Shape): void;
                /**
                 * Reset the action.
                 * 
                 */
                reset(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/action2d/Tooltip.html
             *
             * Create an action on a plot where a tooltip is shown when hovering over an element.
             * 
             * @param chart The chart this action belongs to.     
             * @param plot       OptionalThe plot this action is attached to.  If not passed, "default" is assumed.     
             * @param kwArgs       OptionalOptional keyword arguments object for setting parameters.     
             */
            class Tooltip extends dojox.charting.action2d.PlotAction {
                constructor(chart: dojox.charting.Chart, plot?: String, kwArgs?: Object);
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * 
                 */
                "overOutEvents": Object;
                /**
                 * Connect this action to the given plot.
                 * 
                 */
                connect(): void;
                /**
                 * Do any cleanup needed when destroying parent elements.
                 * 
                 */
                destroy(): void;
                /**
                 * Disconnect this action from the given plot, if connected.
                 * 
                 */
                disconnect(): void;
                /**
                 * 
                 * @param type             
                 * @param event             
                 */
                emit(type: any, event: any): any;
                /**
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * Process the action on the given object.
                 * 
                 * @param o The object on which to process the highlighting action.             
                 */
                process(o: dojox.gfx.shape.Shape): void;
                /**
                 * Reset the action.
                 * 
                 */
                reset(): void;
                /**
                 * 
                 */
                onClick(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/action2d/TouchIndicator.html
             *
             * Create a touch indicator action. You can touch over the chart to display a data indicator.
             * 
             * @param chart The chart this action applies to.     
             * @param plot     
             * @param kwArgs       OptionalOptional arguments for the chart action.     
             */
            class TouchIndicator extends dojox.charting.action2d.ChartAction {
                constructor(chart: dojox.charting.Chart, plot: any, kwArgs?: Object);
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Connect this action to the chart. This adds a indicator plot
                 * to the chart that's why Chart.render() must be called after connect.
                 * 
                 */
                connect(): void;
                /**
                 * Do any cleanup needed when destroying parent elements.
                 * 
                 */
                destroy(): void;
                /**
                 * Disconnect this action from the chart.
                 * 
                 */
                disconnect(): void;
                /**
                 * 
                 * @param type             
                 * @param event             
                 */
                emit(type: any, event: any): any;
                /**
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * Called when the indicator value changed.
                 * 
                 * @param event An event with a start and end properties containing the {x, y} data points of the first andsecond (if available) touch indicators. It also contains a label property containing the displayedtext.             
                 */
                onChange(event: any): void;
                /**
                 * Called when touch is ended or canceled on the chart.
                 * 
                 * @param event             
                 */
                onTouchEnd(event: any): void;
                /**
                 * Called when touch is moved on the chart.
                 * 
                 * @param event             
                 */
                onTouchMove(event: any): void;
                /**
                 * Called when touch is started on the chart.
                 * 
                 * @param event             
                 */
                onTouchStart(event: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/action2d/TouchZoomAndPan.html
             *
             * Create a touch zoom and pan action.
             * You can zoom out or in the data window with pinch and spread gestures except on Android 2.x and WP8 devices.
             * You can scroll using drag gesture.
             * Finally this is possible to navigate between a fit window and a zoom one using double tap gesture.
             * 
             * @param chart The chart this action applies to.     
             * @param plot     
             * @param kwArgs       OptionalOptional arguments for the action.     
             */
            class TouchZoomAndPan extends dojox.charting.action2d.ChartAction {
                constructor(chart: dojox.charting.Chart, plot: any, kwArgs?: Object);
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Connect this action to the chart. On iOS this adds a new glass view plot
                 * to the chart that's why Chart.render() must be called after connect.
                 * 
                 */
                connect(): void;
                /**
                 * Do any cleanup needed when destroying parent elements.
                 * 
                 */
                destroy(): void;
                /**
                 * Disconnect this action from the chart.
                 * 
                 */
                disconnect(): void;
                /**
                 * 
                 * @param type             
                 * @param event             
                 */
                emit(type: any, event: any): any;
                /**
                 * 
                 * @param type             
                 * @param listener             
                 */
                on(type: any, listener: any): any;
                /**
                 * Called when double tap is performed on the chart.
                 * 
                 * @param event             
                 */
                onDoubleTap(event: any): void;
                /**
                 * Called when touch is ended on the chart.
                 * 
                 * @param event             
                 */
                onTouchEnd(event: any): void;
                /**
                 * Called when touch is moved on the chart.
                 * 
                 * @param event             
                 */
                onTouchMove(event: any): void;
                /**
                 * Called when touch is started on the chart.
                 * 
                 * @param event             
                 */
                onTouchStart(event: any): void;
            }
        }

        module axis2d {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/axis2d/Base.html
             *
             * The base class for any axis.  This is more of an interface/API
             * definition than anything else; see dojox.charting.axis2d.Default
             * for more details.
             * 
             * @param chart The chart this axis belongs to.     
             * @param kwArgs       OptionalAn optional arguments object to define the axis parameters.     
             */
            class Base extends dojox.charting.Element {
                constructor(chart: dojox.charting.Chart, kwArgs?: Object);
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * Stub function to run the calcuations needed for drawing this axis.
                 * 
                 * @param min             
                 * @param max             
                 * @param span             
                 */
                calculate(min: any, max: any, span: any): any;
                /**
                 * Clean any elements (HTML or GFX-based) out of our group, and create a new one.
                 * 
                 * @param creator               OptionalAn optional surface to work with.             
                 */
                cleanGroup(creator: dojox.gfx.shape.Surface): any;
                /**
                 * Stub function for clearing the axis.
                 * 
                 */
                clear(): any;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * A stub function to return any offsets needed for axis and series rendering.
                 * 
                 */
                getOffsets(): any;
                /**
                 * A stub function to return the scaler object created during calculate.
                 * 
                 */
                getScaler(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * A stub function to return the object that helps define how ticks are rendered.
                 * 
                 */
                getTicks(): any;
                /**
                 * Return a flag as to whether or not this axis has been initialized.
                 * 
                 */
                initialized(): any;
                /**
                 * Clear any elements out of our group, and destroy the group.
                 * 
                 */
                purgeGroup(): any;
                /**
                 * Stub function to render this axis.
                 * 
                 * @param dim             
                 * @param offsets             
                 */
                render(dim: any, offsets: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/axis2d/Default.html
             *
             * The default axis object used in dojox.charting.  See dojox.charting.Chart.addAxis for details.
             * 
             * @param chart The chart the axis belongs to.     
             * @param kwArgs       OptionalAny optional keyword arguments to be used to define this axis.     
             */
            class Default extends dojox.charting.axis2d.Invisible {
                constructor(chart: dojox.charting.Chart, kwArgs?: Object);
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * 
                 */
                "offset": number;
                /**
                 * The actual options used to define this axis, created at initialization.
                 * 
                 */
                "opt": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * 
                 */
                "scale": number;
                /**
                 * 
                 */
                "scaler": Object;
                /**
                 * 
                 */
                "ticks": Object;
                /**
                 * 
                 * @param min             
                 * @param max             
                 * @param span             
                 */
                calculate(min: any, max: any, span: any): Function;
                /**
                 * 
                 * @param creator             
                 */
                cleanGroup(creator: any): void;
                /**
                 * Clear out all calculated properties on this axis;
                 * 
                 */
                clear(): any;
                /**
                 * 
                 * @param creator             
                 * @param params             
                 */
                createLine(creator: any, params: any): any;
                /**
                 * 
                 * @param labelType             
                 * @param creator             
                 * @param x             
                 * @param y             
                 * @param align             
                 * @param textContent             
                 * @param font             
                 * @param fontColor             
                 * @param labelWidth             
                 */
                createText(labelType: any, creator: any, x: any, y: any, align: any, textContent: any, font: any, fontColor: any, labelWidth: any): any;
                /**
                 * Find out whether or not the axis options depend on the data in the axis.
                 * 
                 */
                dependOnData(): boolean;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get the physical offset values for this axis (used in drawing data series). This method is not
                 * supposed to be called by the users but internally.
                 * 
                 */
                getOffsets(): any;
                /**
                 * Get the pre-calculated scaler object.
                 * 
                 */
                getScaler(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * Get the pre-calculated ticks object.
                 * 
                 */
                getTicks(): any;
                /**
                 * Get the current windowing offset for the axis.
                 * 
                 */
                getWindowOffset(): number;
                /**
                 * Get the current windowing scale of the axis.
                 * 
                 */
                getWindowScale(): number;
                /**
                 * Finds out if this axis has been initialized or not.
                 * 
                 */
                initialized(): any;
                /**
                 * 
                 * @param elem             
                 * @param chart             
                 * @param label             
                 * @param truncatedLabel             
                 * @param font             
                 * @param elemType             
                 */
                labelTooltip(elem: any, chart: any, label: any, truncatedLabel: any, font: any, elemType: any): void;
                /**
                 * Clear any elements out of our group, and destroy the group.
                 * 
                 */
                purgeGroup(): any;
                /**
                 * Render/draw the axis.
                 * 
                 * @param dim An object of the form { width, height}.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                render(dim: Object, offsets: Object): any;
                /**
                 * Set the drawing "window" for the axis.
                 * 
                 * @param scale The new scale for the axis.             
                 * @param offset The new offset for the axis.             
                 */
                setWindow(scale: number, offset: number): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/axis2d/Invisible.html
             *
             * A axis object used in dojox.charting.  You can use that axis if you want the axis to be invisible.
             * See dojox.charting.Chart.addAxis for details.
             * 
             * @param chart The chart the axis belongs to.     
             * @param kwArgs       OptionalAny optional keyword arguments to be used to define this axis.     
             */
            class Invisible extends dojox.charting.axis2d.Base {
                constructor(chart: dojox.charting.Chart, kwArgs?: Object);
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * The default parameters used to define any axis.
                 * 
                 */
                "defaultParams": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * Any optional parameters needed to define an axis.
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Perform all calculations needed to render this axis.
                 * 
                 * @param min The smallest value represented on this axis.             
                 * @param max The largest value represented on this axis.             
                 * @param span The span in pixels over which axis calculations are made.             
                 */
                calculate(min: number, max: number, span: number): any;
                /**
                 * Clean any elements (HTML or GFX-based) out of our group, and create a new one.
                 * 
                 * @param creator               OptionalAn optional surface to work with.             
                 */
                cleanGroup(creator: dojox.gfx.shape.Surface): any;
                /**
                 * Clear out all calculated properties on this axis;
                 * 
                 */
                clear(): any;
                /**
                 * Find out whether or not the axis options depend on the data in the axis.
                 * 
                 */
                dependOnData(): boolean;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * A stub function to return any offsets needed for axis and series rendering.
                 * 
                 */
                getOffsets(): any;
                /**
                 * Get the pre-calculated scaler object.
                 * 
                 */
                getScaler(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * Get the pre-calculated ticks object.
                 * 
                 */
                getTicks(): any;
                /**
                 * Get the current windowing offset for the axis.
                 * 
                 */
                getWindowOffset(): number;
                /**
                 * Get the current windowing scale of the axis.
                 * 
                 */
                getWindowScale(): number;
                /**
                 * Finds out if this axis has been initialized or not.
                 * 
                 */
                initialized(): any;
                /**
                 * Clear any elements out of our group, and destroy the group.
                 * 
                 */
                purgeGroup(): any;
                /**
                 * Stub function to render this axis.
                 * 
                 * @param dim             
                 * @param offsets             
                 */
                render(dim: any, offsets: any): any;
                /**
                 * Set the drawing "window" for the axis.
                 * 
                 * @param scale The new scale for the axis.             
                 * @param offset The new offset for the axis.             
                 */
                setWindow(scale: number, offset: number): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/axis2d/common.html
             *
             * 
             */
            interface common {
                /**
                 * 
                 */
                createText: Object;
            }
            module common {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/axis2d/common.createText.html
                 *
                 * 
                 */
                interface createText {
                    /**
                     * Use dojox.gfx to create any text.
                     * 
                     * @param chart The chart to create the text into.             
                     * @param creator The graphics surface to use for creating the text.             
                     * @param x Where to create the text along the x axis (CSS left).             
                     * @param y Where to create the text along the y axis (CSS top).             
                     * @param align How to align the text.  Can be "left", "right", "center".             
                     * @param text The text to render.             
                     * @param font The font definition, a la CSS "font".             
                     * @param fontColor The color of the resultant text.             
                     */
                    gfx(chart: dojox.charting.Chart, creator: Object, x: number, y: number, align: String, text: String, font: String, fontColor: String): dojox.gfx.Text;
                    /**
                     * Use dojox.gfx to create any text.
                     * 
                     * @param chart The chart to create the text into.             
                     * @param creator The graphics surface to use for creating the text.             
                     * @param x Where to create the text along the x axis (CSS left).             
                     * @param y Where to create the text along the y axis (CSS top).             
                     * @param align How to align the text.  Can be "left", "right", "center".             
                     * @param text The text to render.             
                     * @param font The font definition, a la CSS "font".             
                     * @param fontColor The color of the resultant text.             
                     */
                    gfx(chart: dojox.charting.Chart, creator: Object, x: number, y: number, align: String, text: String, font: String, fontColor:  dojo._base.Color): dojox.gfx.Text;
                    /**
                     * Use the HTML DOM to create any text.
                     * 
                     * @param chart The chart to create the text into.             
                     * @param creator The graphics surface to use for creating the text.             
                     * @param x Where to create the text along the x axis (CSS left).             
                     * @param y Where to create the text along the y axis (CSS top).             
                     * @param align How to align the text.  Can be "left", "right", "center".             
                     * @param text The text to render.             
                     * @param font The font definition, a la CSS "font".             
                     * @param fontColor The color of the resultant text.             
                     * @param labelWidth               OptionalThe maximum width of the resultant DOM node.             
                     */
                    html(chart: dojox.charting.Chart, creator: Object, x: number, y: number, align: String, text: String, font: String, fontColor: String, labelWidth: number): HTMLElement;
                    /**
                     * Use the HTML DOM to create any text.
                     * 
                     * @param chart The chart to create the text into.             
                     * @param creator The graphics surface to use for creating the text.             
                     * @param x Where to create the text along the x axis (CSS left).             
                     * @param y Where to create the text along the y axis (CSS top).             
                     * @param align How to align the text.  Can be "left", "right", "center".             
                     * @param text The text to render.             
                     * @param font The font definition, a la CSS "font".             
                     * @param fontColor The color of the resultant text.             
                     * @param labelWidth               OptionalThe maximum width of the resultant DOM node.             
                     */
                    html(chart: dojox.charting.Chart, creator: Object, x: number, y: number, align: String, text: String, font: String, fontColor:  dojo._base.Color, labelWidth: number): HTMLElement;
                }
            }

        }

        module bidi {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/bidi/Chart.html
             *
             * 
             */
            class Chart {
                constructor();
                /**
                 * Mirroring support,  the main variable which is responsible for the direction of the chart.
                 * 
                 * Allowed values:
                 * 1. "ltr"
                 * 2. "rtl"
                 * 
                 * By default is ltr.
                 * 
                 */
                "dir": string;
                /**
                 * 
                 */
                "isMirrored": boolean;
                /**
                 * Bi-directional support, the main variable which is responsible for the direction of the text.
                 * The text direction can be different than the GUI direction by using this parameter.
                 * Allowed values:
                 * 
                 * "ltr"
                 * "rtl"
                 * "auto" - contextual the direction of a text defined by first strong letter.
                 * By default is as the page direction.
                 * 
                 */
                "textDir": string;
                /**
                 * apply the mirroring operation to the current chart plots.
                 * 
                 * @param plot             
                 * @param dim             
                 * @param offsets             
                 */
                applyMirroring(plot: any, dim: any, offsets: any): Function;
                /**
                 * 
                 * @param element             
                 * @param label             
                 * @param labelType             
                 */
                formatTruncatedLabel(element: any, label: any, labelType: any): void;
                /**
                 * Return direction of the text. 
                 * If textDir is ltr or rtl returns the value.
                 * If it's auto, calls to another function that responsible 
                 * for checking the value, and defining the direction.         
                 * 
                 * @param text Used in case textDir is "auto", this case the direction is according to the firststrong (directionally - which direction is strong defined) letter.             
                 */
                getTextDir(text: any): any;
                /**
                 * check the direction of the chart.
                 * check the dir attribute to determine the rendering direction
                 * of the chart.
                 * 
                 */
                isRightToLeft(): boolean;
                /**
                 * 
                 */
                render(): Function;
                /**
                 * Setter for the dir attribute.
                 * Allows dynamically set the dri attribute, which will used to
                 * updates the chart rendering direction.
                 * dir : the desired chart direction [rtl: for right to left ,ltr: for left to right]
                 * 
                 * @param dir             
                 */
                setDir(dir: any): Function;
                /**
                 * Setter for the textDir attribute.
                 * Allows dynamically set the textDir, goes over all the text-children andupdates their base text direction.
                 * 
                 * @param newTextDir             
                 * @param obj             
                 */
                setTextDir(newTextDir: any, obj: any): Function;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/bidi/Chart3D.html
             *
             * 
             */
            class Chart3D {
                constructor();
                /**
                 * Mirroring support,  the main variable which is responsible for the direction of the chart.
                 * 
                 * Allowed values:
                 * 1. "ltr"
                 * 2. "rtl"
                 * 
                 * By default is ltr.
                 * 
                 */
                "direction": string;
                /**
                 * 
                 */
                "isMirrored": boolean;
                /**
                 * apply the mirroring operation to the current chart plots.
                 * 
                 * @param plot             
                 * @param dim             
                 * @param offsets             
                 */
                applyMirroring(plot: any, dim: any, offsets: any): Function;
                /**
                 * 
                 */
                generate(): Function;
                /**
                 * check the Direction of the chart.
                 * check the chartBaseDirection attribute to determine the rendering direction
                 * of the chart.
                 * 
                 */
                isRightToLeft(): boolean;
                /**
                 * The keyword arguments that can be passed in a Chart constructor.
                 * 
                 * @param node The DOM node to construct the chart on.             
                 * @param lights Lighting properties for the 3d scene             
                 * @param camera Camera properties describing the viewing camera position.             
                 * @param theme Charting theme to use for coloring chart elements.             
                 * @param direction the direction used to render the chart values[rtl/ltr]             
                 */
                postscript(node: HTMLElement, lights: any, camera: Object, theme: Object, direction: String): void;
                /**
                 * Setter for the chartBaseDirection attribute.
                 * Allows dynamically set the chartBaseDirection attribute, which will used toupdates the chart rendering direction.
                 * dir : the desired chart direction [rtl: for right to left ,ltr: for left to right]
                 * 
                 * @param dir             
                 */
                setDir(dir: any): Function;
            }
            module action2d {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/bidi/action2d/Tooltip.html
                 *
                 * 
                 */
                class Tooltip {
                    constructor();
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/bidi/action2d/ZoomAndPan.html
                 *
                 * 
                 */
                class ZoomAndPan {
                    constructor();
                }
            }

            module axis2d {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/bidi/axis2d/Default.html
                 *
                 * 
                 */
                class Default {
                    constructor();
                    /**
                     * 
                     * @param elem             
                     * @param chart             
                     * @param label             
                     * @param truncatedLabel             
                     * @param font             
                     * @param elemType             
                     */
                    labelTooltip(elem: any, chart: any, label: any, truncatedLabel: any, font: any, elemType: any): void;
                }
            }

            module widget {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/bidi/widget/Chart.html
                 *
                 * 
                 */
                class Chart {
                    constructor();
                    /**
                     * 
                     */
                    postMixInProperties(): void;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/bidi/widget/Legend.html
                 *
                 * 
                 */
                class Legend {
                    constructor();
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/bidi/_bidiutils.html
             *
             * 
             */
            interface _bidiutils {
                /**
                 * 
                 * @param plot             
                 * @param dim             
                 * @param offsets             
                 * @param rtl             
                 */
                reverseMatrix(plot: any, dim: any, offsets: any, rtl: any): void;
            }
        }

        module BidiSupport {
        }

        module BidiSupport3D {
        }

        module plot2d {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/_PlotEvents.html
             *
             * 
             */
            class _PlotEvents {
                constructor();
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: String): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: Function): any;
                /**
                 * Destroy any internal elements and event handlers.
                 * 
                 */
                destroy(): void;
                /**
                 * Find out if any event handlers have been connected to our plotEvent.
                 * 
                 */
                events(): any;
                /**
                 * Emulates firing an event for a given data value (specified by
                 * an index) of a given series.
                 * 
                 * @param seriesName Series name.             
                 * @param eventName Event name to emulate.             
                 * @param index Valid data value index used to raise an event.             
                 * @param eventObject               OptionalOptional event object. Especially useful for synthetic events.Default: null.             
                 */
                fireEvent(seriesName: String, eventName: String, index: number, eventObject: Object): void;
                /**
                 * Stub function for use by specific plots.
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                plotEvent(o: Object): void;
                /**
                 * Raises events in predefined order
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                raiseEvent(o: Object): void;
                /**
                 * Reset all events attached to our plotEvent (i.e. disconnect).
                 * 
                 */
                resetEvents(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/Areas.html
             *
             * Represents an area chart.  See dojox/charting/plot2d/Default for details.
             * 
             */
            class Areas extends dojox.charting.plot2d.Default {
                constructor();
                /**
                 * 
                 */
                "baseParams": Object;
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * The default parameters of this plot.
                 * 
                 */
                "defaultParams": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * The optional parameters of this plot.
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Add a data series to this plot.
                 * 
                 * @param run The series to be added.             
                 */
                addSeries(run: dojox.charting.Series): any;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * 
                 * @param i             
                 * @param indexed             
                 */
                buildSegments(i: any, indexed: any): any[];
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * 
                 * @param creator             
                 * @param noClip             
                 */
                cleanGroup(creator: any, noClip: any): void;
                /**
                 * Clear out all of the information tied to this plot.
                 * 
                 */
                clear(): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: String): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: Function): any;
                /**
                 * 
                 * @param group             
                 * @param value             
                 * @param bbox             
                 * @param theme             
                 */
                createLabel(group: any, value: any, bbox: any, theme: any): void;
                /**
                 * 
                 * @param run             
                 * @param creator             
                 * @param params             
                 */
                createPath(run: any, creator: any, params: any): any;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * Find out if any event handlers have been connected to our plotEvent.
                 * 
                 */
                events(): any;
                /**
                 * Emulates firing an event for a given data value (specified by
                 * an index) of a given series.
                 * 
                 * @param seriesName Series name.             
                 * @param eventName Event name to emulate.             
                 * @param index Valid data value index used to raise an event.             
                 * @param eventObject               OptionalOptional event object. Especially useful for synthetic events.Default: null.             
                 */
                fireEvent(seriesName: String, eventName: String, index: number, eventObject: Object): void;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get how many data series we have, so we know how many colors to use.
                 * 
                 */
                getRequiredColors(): any;
                /**
                 * Calculate the min/max on all attached series in both directions.
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * Initializes scalers using attached axes.
                 * 
                 * @param dim Size of a plot area in pixels as {width, height}.             
                 * @param stats Min/max of data in both directions as {hmin, hmax, vmin, vmax}.             
                 */
                initializeScalers(dim: Object, stats: Object): any;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Returns whether or not this plot needs to be rendered.
                 * 
                 */
                isDirty(): any;
                /**
                 * Create/alter any zooming windows on this plot.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                performZoom(dim: Object, offsets: Object): any;
                /**
                 * Stub function for use by specific plots.
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                plotEvent(o: Object): void;
                /**
                 * 
                 */
                purgeGroup(): void;
                /**
                 * Raises events in predefined order
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                raiseEvent(o: Object): void;
                /**
                 * Render/draw everything on this plot.
                 * 
                 * @param dim An object of the form { width, height }             
                 * @param offsets An object of the form { l, r, t, b }             
                 */
                render(dim: Object, offsets: Object): any;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Reset all events attached to our plotEvent (i.e. disconnect).
                 * 
                 */
                resetEvents(): void;
                /**
                 * Set an axis for this plot.
                 * 
                 * @param axis The axis to set.             
                 */
                setAxis(axis: dojox.charting.axis2d.Base): any;
                /**
                 * Compute plot axis data coordinates from page coordinates.
                 * 
                 * @param coord The pixel coordinate in page coordinate space. That is of the following form:{ x: 50, y: 200 }If not provided return the tranform method instead of the result of the transformation.             
                 */
                toData(coord: Object): any;
                /**
                 * Compute page coordinates from plot axis data coordinates.
                 * 
                 * @param coord               OptionalThe coordinates in plot axis data coordinate space. For cartesian charts that is of the following form:{ hAxisName: 50, vAxisName: 200 }If not provided return the transform method instead of the result of the transformation.             
                 */
                toPage(coord: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/Bars.html
             *
             * The plot object representing a bar chart (horizontal bars).
             * 
             * @param chart The chart this plot belongs to.     
             * @param kwArgs       OptionalAn optional keyword arguments object to help define the plot.     
             */
            class Bars extends dojox.charting.plot2d.CartesianBase implements dojox.charting.plot2d._PlotEvents {
                constructor(chart: dojox.charting.Chart, kwArgs?: Object);
                /**
                 * 
                 */
                "baseParams": Object;
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Add a data series to this plot.
                 * 
                 * @param run The series to be added.             
                 */
                addSeries(run: dojox.charting.Series): any;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * 
                 * @param creator             
                 * @param noClip             
                 */
                cleanGroup(creator: any, noClip: any): void;
                /**
                 * Clear out all of the information tied to this plot.
                 * 
                 */
                clear(): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: String): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: Function): any;
                /**
                 * 
                 * @param group             
                 * @param value             
                 * @param bbox             
                 * @param theme             
                 */
                createLabel(group: any, value: any, bbox: any, theme: any): void;
                /**
                 * 
                 * @param run             
                 * @param creator             
                 * @param params             
                 */
                createRect(run: any, creator: any, params: any): any;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * Find out if any event handlers have been connected to our plotEvent.
                 * 
                 */
                events(): any;
                /**
                 * Emulates firing an event for a given data value (specified by
                 * an index) of a given series.
                 * 
                 * @param seriesName Series name.             
                 * @param eventName Event name to emulate.             
                 * @param index Valid data value index used to raise an event.             
                 * @param eventObject               OptionalOptional event object. Especially useful for synthetic events.Default: null.             
                 */
                fireEvent(seriesName: String, eventName: String, index: number, eventObject: Object): void;
                /**
                 * 
                 */
                getBarProperties(): Object;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get how many data series we have, so we know how many colors to use.
                 * 
                 */
                getRequiredColors(): any;
                /**
                 * Calculate the min/max on all attached series in both directions.
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * 
                 * @param value             
                 * @param j             
                 * @param seriesIndex             
                 * @param indexed             
                 */
                getValue(value: any, j: any, seriesIndex: any, indexed: any): Object;
                /**
                 * Initializes scalers using attached axes.
                 * 
                 * @param dim Size of a plot area in pixels as {width, height}.             
                 * @param stats Min/max of data in both directions as {hmin, hmax, vmin, vmax}.             
                 */
                initializeScalers(dim: Object, stats: Object): any;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Returns whether or not this plot needs to be rendered.
                 * 
                 */
                isDirty(): any;
                /**
                 * Create/alter any zooming windows on this plot.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                performZoom(dim: Object, offsets: Object): any;
                /**
                 * Stub function for use by specific plots.
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                plotEvent(o: Object): void;
                /**
                 * 
                 */
                purgeGroup(): void;
                /**
                 * Raises events in predefined order
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                raiseEvent(o: Object): void;
                /**
                 * Run the calculations for any axes for this plot.
                 * 
                 * @param dim An object in the form of { width, height }             
                 * @param offsets An object of the form { l, r, t, b}.             
                 */
                render(dim: Object, offsets: Object): any;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Reset all events attached to our plotEvent (i.e. disconnect).
                 * 
                 */
                resetEvents(): void;
                /**
                 * Set an axis for this plot.
                 * 
                 * @param axis The axis to set.             
                 */
                setAxis(axis: dojox.charting.axis2d.Base): any;
                /**
                 * Compute plot axis data coordinates from page coordinates.
                 * 
                 * @param coord The pixel coordinate in page coordinate space. That is of the following form:{ x: 50, y: 200 }If not provided return the tranform method instead of the result of the transformation.             
                 */
                toData(coord: Object): any;
                /**
                 * Compute page coordinates from plot axis data coordinates.
                 * 
                 * @param coord               OptionalThe coordinates in plot axis data coordinate space. For cartesian charts that is of the following form:{ hAxisName: 50, vAxisName: 200 }If not provided return the transform method instead of the result of the transformation.             
                 */
                toPage(coord: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/Base.html
             *
             * Base class for all plot types.
             * 
             * @param chart The chart this plot belongs to.     
             * @param kwArgs       OptionalAn optional arguments object to help define the plot.     
             */
            class Base extends dojox.charting.Element {
                constructor(chart: dojox.charting.Chart, kwArgs?: Object);
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * Add a data series to this plot.
                 * 
                 * @param run The series to be added.             
                 */
                addSeries(run: dojox.charting.Series): any;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * Clean any elements (HTML or GFX-based) out of our group, and create a new one.
                 * 
                 * @param creator               OptionalAn optional surface to work with.             
                 */
                cleanGroup(creator: dojox.gfx.shape.Surface): any;
                /**
                 * Clear out all of the information tied to this plot.
                 * 
                 */
                clear(): any;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get how many data series we have, so we know how many colors to use.
                 * 
                 */
                getRequiredColors(): any;
                /**
                 * Calculate the min/max on all attached series in both directions.
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * Does nothing.
                 * 
                 */
                initializeScalers(): Function;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Clear any elements out of our group, and destroy the group.
                 * 
                 */
                purgeGroup(): any;
                /**
                 * Render the plot on the chart.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                render(dim: Object, offsets: Object): any;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Set an axis for this plot.
                 * 
                 * @param axis The axis to set.             
                 */
                setAxis(axis: dojox.charting.axis2d.Base): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/Bubble.html
             *
             * A plot representing bubbles.  Note that data for Bubbles requires 3 parameters,
             * in the form of:  { x, y, size }, where size determines the size of the bubble.
             * 
             * @param chart The chart this plot belongs to.     
             * @param kwArgs       OptionalOptional keyword arguments object to help define plot parameters.     
             */
            class Bubble extends dojox.charting.plot2d.CartesianBase implements dojox.charting.plot2d._PlotEvents {
                constructor(chart: dojox.charting.Chart, kwArgs?: Object);
                /**
                 * 
                 */
                "baseParams": Object;
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Add a data series to this plot.
                 * 
                 * @param run The series to be added.             
                 */
                addSeries(run: dojox.charting.Series): any;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * 
                 * @param creator             
                 * @param noClip             
                 */
                cleanGroup(creator: any, noClip: any): void;
                /**
                 * Clear out all of the information tied to this plot.
                 * 
                 */
                clear(): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: String): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: Function): any;
                /**
                 * 
                 * @param group             
                 * @param value             
                 * @param bbox             
                 * @param theme             
                 */
                createLabel(group: any, value: any, bbox: any, theme: any): void;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * Find out if any event handlers have been connected to our plotEvent.
                 * 
                 */
                events(): any;
                /**
                 * Emulates firing an event for a given data value (specified by
                 * an index) of a given series.
                 * 
                 * @param seriesName Series name.             
                 * @param eventName Event name to emulate.             
                 * @param index Valid data value index used to raise an event.             
                 * @param eventObject               OptionalOptional event object. Especially useful for synthetic events.Default: null.             
                 */
                fireEvent(seriesName: String, eventName: String, index: number, eventObject: Object): void;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get how many data series we have, so we know how many colors to use.
                 * 
                 */
                getRequiredColors(): any;
                /**
                 * Calculate the min/max on all attached series in both directions.
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * Initializes scalers using attached axes.
                 * 
                 * @param dim Size of a plot area in pixels as {width, height}.             
                 * @param stats Min/max of data in both directions as {hmin, hmax, vmin, vmax}.             
                 */
                initializeScalers(dim: Object, stats: Object): any;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Returns whether or not this plot needs to be rendered.
                 * 
                 */
                isDirty(): any;
                /**
                 * Create/alter any zooming windows on this plot.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                performZoom(dim: Object, offsets: Object): any;
                /**
                 * Stub function for use by specific plots.
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                plotEvent(o: Object): void;
                /**
                 * 
                 */
                purgeGroup(): void;
                /**
                 * Raises events in predefined order
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                raiseEvent(o: Object): void;
                /**
                 * Run the calculations for any axes for this plot.
                 * 
                 * @param dim An object in the form of { width, height }             
                 * @param offsets An object of the form { l, r, t, b}.             
                 */
                render(dim: Object, offsets: Object): any;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Reset all events attached to our plotEvent (i.e. disconnect).
                 * 
                 */
                resetEvents(): void;
                /**
                 * Set an axis for this plot.
                 * 
                 * @param axis The axis to set.             
                 */
                setAxis(axis: dojox.charting.axis2d.Base): any;
                /**
                 * Compute plot axis data coordinates from page coordinates.
                 * 
                 * @param coord The pixel coordinate in page coordinate space. That is of the following form:{ x: 50, y: 200 }If not provided return the tranform method instead of the result of the transformation.             
                 */
                toData(coord: Object): any;
                /**
                 * Compute page coordinates from plot axis data coordinates.
                 * 
                 * @param coord               OptionalThe coordinates in plot axis data coordinate space. For cartesian charts that is of the following form:{ hAxisName: 50, vAxisName: 200 }If not provided return the transform method instead of the result of the transformation.             
                 */
                toPage(coord: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/Candlesticks.html
             *
             * A plot that represents typical candlesticks (financial reporting, primarily).
             * Unlike most charts, the Candlestick expects data points to be represented by
             * an object of the form { x?, open, close, high, low, mid? }, where both
             * x and mid are optional parameters.  If x is not provided, the index of the
             * data array is used.
             * 
             * @param chart The chart this plot belongs to.     
             * @param kwArgs       OptionalAn optional keyword arguments object to help define the plot.     
             */
            class Candlesticks extends dojox.charting.plot2d.CartesianBase implements dojox.charting.plot2d._PlotEvents {
                constructor(chart: dojox.charting.Chart, kwArgs?: Object);
                /**
                 * 
                 */
                "baseParams": Object;
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Add a data series to this plot.
                 * 
                 * @param run The series to be added.             
                 */
                addSeries(run: dojox.charting.Series): any;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * 
                 * @param creator             
                 * @param noClip             
                 */
                cleanGroup(creator: any, noClip: any): void;
                /**
                 * Clear out all of the information tied to this plot.
                 * 
                 */
                clear(): any;
                /**
                 * Collect all statistics for drawing this chart.  Since the common
                 * functionality only assumes x and y, Candlesticks must create it's own
                 * stats (since data has no y value, but open/close/high/low instead).
                 * 
                 * @param series The data series array to be drawn on this plot.             
                 */
                collectStats(series: dojox.charting.Series): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: String): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: Function): any;
                /**
                 * 
                 * @param group             
                 * @param value             
                 * @param bbox             
                 * @param theme             
                 */
                createLabel(group: any, value: any, bbox: any, theme: any): void;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * Find out if any event handlers have been connected to our plotEvent.
                 * 
                 */
                events(): any;
                /**
                 * Emulates firing an event for a given data value (specified by
                 * an index) of a given series.
                 * 
                 * @param seriesName Series name.             
                 * @param eventName Event name to emulate.             
                 * @param index Valid data value index used to raise an event.             
                 * @param eventObject               OptionalOptional event object. Especially useful for synthetic events.Default: null.             
                 */
                fireEvent(seriesName: String, eventName: String, index: number, eventObject: Object): void;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get how many data series we have, so we know how many colors to use.
                 * 
                 */
                getRequiredColors(): any;
                /**
                 * Calculate the min/max on all attached series in both directions.
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * Initializes scalers using attached axes.
                 * 
                 * @param dim Size of a plot area in pixels as {width, height}.             
                 * @param stats Min/max of data in both directions as {hmin, hmax, vmin, vmax}.             
                 */
                initializeScalers(dim: Object, stats: Object): any;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Returns whether or not this plot needs to be rendered.
                 * 
                 */
                isDirty(): any;
                /**
                 * Create/alter any zooming windows on this plot.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                performZoom(dim: Object, offsets: Object): any;
                /**
                 * Stub function for use by specific plots.
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                plotEvent(o: Object): void;
                /**
                 * 
                 */
                purgeGroup(): void;
                /**
                 * Raises events in predefined order
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                raiseEvent(o: Object): void;
                /**
                 * Run the calculations for any axes for this plot.
                 * 
                 * @param dim An object in the form of { width, height }             
                 * @param offsets An object of the form { l, r, t, b}.             
                 */
                render(dim: Object, offsets: Object): any;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Reset all events attached to our plotEvent (i.e. disconnect).
                 * 
                 */
                resetEvents(): void;
                /**
                 * Set an axis for this plot.
                 * 
                 * @param axis The axis to set.             
                 */
                setAxis(axis: dojox.charting.axis2d.Base): any;
                /**
                 * Compute plot axis data coordinates from page coordinates.
                 * 
                 * @param coord The pixel coordinate in page coordinate space. That is of the following form:{ x: 50, y: 200 }If not provided return the tranform method instead of the result of the transformation.             
                 */
                toData(coord: Object): any;
                /**
                 * 
                 * @param o             
                 */
                tooltipFunc(o: any): String;
                /**
                 * Compute page coordinates from plot axis data coordinates.
                 * 
                 * @param coord               OptionalThe coordinates in plot axis data coordinate space. For cartesian charts that is of the following form:{ hAxisName: 50, vAxisName: 200 }If not provided return the transform method instead of the result of the transformation.             
                 */
                toPage(coord: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/CartesianBase.html
             *
             * 
             * @param chart The chart this plot belongs to.     
             * @param kwArgs       OptionalAn optional arguments object to help define the plot.     
             */
            class CartesianBase extends dojox.charting.plot2d.Base {
                constructor(chart: dojox.charting.Chart, kwArgs?: Object);
                /**
                 * 
                 */
                "baseParams": Object;
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * Add a data series to this plot.
                 * 
                 * @param run The series to be added.             
                 */
                addSeries(run: dojox.charting.Series): any;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * 
                 * @param creator             
                 * @param noClip             
                 */
                cleanGroup(creator: any, noClip?: any): void;
                /**
                 * Clear out all of the information tied to this plot.
                 * 
                 */
                clear(): any;
                /**
                 * 
                 * @param group             
                 * @param value             
                 * @param bbox             
                 * @param theme             
                 */
                createLabel(group: any, value: any, bbox: any, theme: any): void;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get how many data series we have, so we know how many colors to use.
                 * 
                 */
                getRequiredColors(): any;
                /**
                 * Calculate the min/max on all attached series in both directions.
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * Initializes scalers using attached axes.
                 * 
                 * @param dim Size of a plot area in pixels as {width, height}.             
                 * @param stats Min/max of data in both directions as {hmin, hmax, vmin, vmax}.             
                 */
                initializeScalers(dim?: Object, stats?: Object): any;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Returns whether or not this plot needs to be rendered.
                 * 
                 */
                isDirty(): any;
                /**
                 * Create/alter any zooming windows on this plot.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                performZoom(dim: Object, offsets: Object): any;
                /**
                 * 
                 */
                purgeGroup(): void;
                /**
                 * Render the plot on the chart.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                render(dim: Object, offsets: Object): any;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Set an axis for this plot.
                 * 
                 * @param axis The axis to set.             
                 */
                setAxis(axis: dojox.charting.axis2d.Base): any;
                /**
                 * Compute plot axis data coordinates from page coordinates.
                 * 
                 * @param coord The pixel coordinate in page coordinate space. That is of the following form:{ x: 50, y: 200 }If not provided return the tranform method instead of the result of the transformation.             
                 */
                toData(coord: Object): any;
                /**
                 * Compute page coordinates from plot axis data coordinates.
                 * 
                 * @param coord               OptionalThe coordinates in plot axis data coordinate space. For cartesian charts that is of the following form:{ hAxisName: 50, vAxisName: 200 }If not provided return the transform method instead of the result of the transformation.             
                 */
                toPage(coord: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/ClusteredBars.html
             *
             * A plot representing grouped or clustered bars (horizontal bars)
             * 
             * @param chart The chart this plot belongs to.     
             * @param kwArgs       OptionalAn optional keyword arguments object to help define the plot.     
             */
            class ClusteredBars extends dojox.charting.plot2d.Bars {
                constructor(chart: dojox.charting.Chart, kwArgs?: Object);
                /**
                 * 
                 */
                "baseParams": Object;
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Add a data series to this plot.
                 * 
                 * @param run The series to be added.             
                 */
                addSeries(run: dojox.charting.Series): any;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * 
                 * @param creator             
                 * @param noClip             
                 */
                cleanGroup(creator: any, noClip: any): void;
                /**
                 * Clear out all of the information tied to this plot.
                 * 
                 */
                clear(): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: String): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: Function): any;
                /**
                 * 
                 * @param group             
                 * @param value             
                 * @param bbox             
                 * @param theme             
                 */
                createLabel(group: any, value: any, bbox: any, theme: any): void;
                /**
                 * 
                 * @param run             
                 * @param creator             
                 * @param params             
                 */
                createRect(run: any, creator: any, params: any): any;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * Find out if any event handlers have been connected to our plotEvent.
                 * 
                 */
                events(): any;
                /**
                 * Emulates firing an event for a given data value (specified by
                 * an index) of a given series.
                 * 
                 * @param seriesName Series name.             
                 * @param eventName Event name to emulate.             
                 * @param index Valid data value index used to raise an event.             
                 * @param eventObject               OptionalOptional event object. Especially useful for synthetic events.Default: null.             
                 */
                fireEvent(seriesName: String, eventName: String, index: number, eventObject: Object): void;
                /**
                 * 
                 */
                getBarProperties(): Object;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get how many data series we have, so we know how many colors to use.
                 * 
                 */
                getRequiredColors(): any;
                /**
                 * Calculate the min/max on all attached series in both directions.
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * 
                 * @param value             
                 * @param j             
                 * @param seriesIndex             
                 * @param indexed             
                 */
                getValue(value: any, j: any, seriesIndex: any, indexed: any): Object;
                /**
                 * Initializes scalers using attached axes.
                 * 
                 * @param dim Size of a plot area in pixels as {width, height}.             
                 * @param stats Min/max of data in both directions as {hmin, hmax, vmin, vmax}.             
                 */
                initializeScalers(dim: Object, stats: Object): any;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Returns whether or not this plot needs to be rendered.
                 * 
                 */
                isDirty(): any;
                /**
                 * Create/alter any zooming windows on this plot.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                performZoom(dim: Object, offsets: Object): any;
                /**
                 * Stub function for use by specific plots.
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                plotEvent(o: Object): void;
                /**
                 * 
                 */
                purgeGroup(): void;
                /**
                 * Raises events in predefined order
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                raiseEvent(o: Object): void;
                /**
                 * Run the calculations for any axes for this plot.
                 * 
                 * @param dim An object in the form of { width, height }             
                 * @param offsets An object of the form { l, r, t, b}.             
                 */
                render(dim: Object, offsets: Object): any;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Reset all events attached to our plotEvent (i.e. disconnect).
                 * 
                 */
                resetEvents(): void;
                /**
                 * Set an axis for this plot.
                 * 
                 * @param axis The axis to set.             
                 */
                setAxis(axis: dojox.charting.axis2d.Base): any;
                /**
                 * Compute plot axis data coordinates from page coordinates.
                 * 
                 * @param coord The pixel coordinate in page coordinate space. That is of the following form:{ x: 50, y: 200 }If not provided return the tranform method instead of the result of the transformation.             
                 */
                toData(coord: Object): any;
                /**
                 * Compute page coordinates from plot axis data coordinates.
                 * 
                 * @param coord               OptionalThe coordinates in plot axis data coordinate space. For cartesian charts that is of the following form:{ hAxisName: 50, vAxisName: 200 }If not provided return the transform method instead of the result of the transformation.             
                 */
                toPage(coord: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/ClusteredColumns.html
             *
             * A plot representing grouped or clustered columns (vertical bars)
             * 
             * @param chart The chart this plot belongs to.     
             * @param kwArgs       OptionalAn optional keyword arguments object to help define the plot.     
             */
            class ClusteredColumns extends dojox.charting.plot2d.Columns {
                constructor(chart: dojox.charting.Chart, kwArgs?: Object);
                /**
                 * 
                 */
                "baseParams": Object;
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Add a data series to this plot.
                 * 
                 * @param run The series to be added.             
                 */
                addSeries(run: dojox.charting.Series): any;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * 
                 * @param creator             
                 * @param noClip             
                 */
                cleanGroup(creator: any, noClip: any): void;
                /**
                 * Clear out all of the information tied to this plot.
                 * 
                 */
                clear(): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: String): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: Function): any;
                /**
                 * 
                 * @param group             
                 * @param value             
                 * @param bbox             
                 * @param theme             
                 */
                createLabel(group: any, value: any, bbox: any, theme: any): void;
                /**
                 * 
                 * @param run             
                 * @param creator             
                 * @param params             
                 */
                createRect(run: any, creator: any, params: any): any;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * Find out if any event handlers have been connected to our plotEvent.
                 * 
                 */
                events(): any;
                /**
                 * Emulates firing an event for a given data value (specified by
                 * an index) of a given series.
                 * 
                 * @param seriesName Series name.             
                 * @param eventName Event name to emulate.             
                 * @param index Valid data value index used to raise an event.             
                 * @param eventObject               OptionalOptional event object. Especially useful for synthetic events.Default: null.             
                 */
                fireEvent(seriesName: String, eventName: String, index: number, eventObject: Object): void;
                /**
                 * 
                 */
                getBarProperties(): Object;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get how many data series we have, so we know how many colors to use.
                 * 
                 */
                getRequiredColors(): any;
                /**
                 * Calculate the min/max on all attached series in both directions.
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * 
                 * @param value             
                 * @param j             
                 * @param seriesIndex             
                 * @param indexed             
                 */
                getValue(value: any, j: any, seriesIndex: any, indexed: any): Object;
                /**
                 * Initializes scalers using attached axes.
                 * 
                 * @param dim Size of a plot area in pixels as {width, height}.             
                 * @param stats Min/max of data in both directions as {hmin, hmax, vmin, vmax}.             
                 */
                initializeScalers(dim: Object, stats: Object): any;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Returns whether or not this plot needs to be rendered.
                 * 
                 */
                isDirty(): any;
                /**
                 * Create/alter any zooming windows on this plot.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                performZoom(dim: Object, offsets: Object): any;
                /**
                 * Stub function for use by specific plots.
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                plotEvent(o: Object): void;
                /**
                 * 
                 */
                purgeGroup(): void;
                /**
                 * Raises events in predefined order
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                raiseEvent(o: Object): void;
                /**
                 * Run the calculations for any axes for this plot.
                 * 
                 * @param dim An object in the form of { width, height }             
                 * @param offsets An object of the form { l, r, t, b}.             
                 */
                render(dim: Object, offsets: Object): any;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Reset all events attached to our plotEvent (i.e. disconnect).
                 * 
                 */
                resetEvents(): void;
                /**
                 * Set an axis for this plot.
                 * 
                 * @param axis The axis to set.             
                 */
                setAxis(axis: dojox.charting.axis2d.Base): any;
                /**
                 * Compute plot axis data coordinates from page coordinates.
                 * 
                 * @param coord The pixel coordinate in page coordinate space. That is of the following form:{ x: 50, y: 200 }If not provided return the tranform method instead of the result of the transformation.             
                 */
                toData(coord: Object): any;
                /**
                 * Compute page coordinates from plot axis data coordinates.
                 * 
                 * @param coord               OptionalThe coordinates in plot axis data coordinate space. For cartesian charts that is of the following form:{ hAxisName: 50, vAxisName: 200 }If not provided return the transform method instead of the result of the transformation.             
                 */
                toPage(coord: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/Columns.html
             *
             * The plot object representing a column chart (vertical bars).
             * 
             * @param chart The chart this plot belongs to.     
             * @param kwArgs       OptionalAn optional keyword arguments object to help define the plot.     
             */
            class Columns extends dojox.charting.plot2d.CartesianBase implements dojox.charting.plot2d._PlotEvents {
                constructor(chart: dojox.charting.Chart, kwArgs?: Object);
                /**
                 * 
                 */
                "baseParams": Object;
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Add a data series to this plot.
                 * 
                 * @param run The series to be added.             
                 */
                addSeries(run: dojox.charting.Series): any;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * 
                 * @param creator             
                 * @param noClip             
                 */
                cleanGroup(creator: any, noClip: any): void;
                /**
                 * Clear out all of the information tied to this plot.
                 * 
                 */
                clear(): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: String): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: Function): any;
                /**
                 * 
                 * @param group             
                 * @param value             
                 * @param bbox             
                 * @param theme             
                 */
                createLabel(group: any, value: any, bbox: any, theme: any): void;
                /**
                 * 
                 * @param run             
                 * @param creator             
                 * @param params             
                 */
                createRect(run: any, creator: any, params: any): any;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * Find out if any event handlers have been connected to our plotEvent.
                 * 
                 */
                events(): any;
                /**
                 * Emulates firing an event for a given data value (specified by
                 * an index) of a given series.
                 * 
                 * @param seriesName Series name.             
                 * @param eventName Event name to emulate.             
                 * @param index Valid data value index used to raise an event.             
                 * @param eventObject               OptionalOptional event object. Especially useful for synthetic events.Default: null.             
                 */
                fireEvent(seriesName: String, eventName: String, index: number, eventObject: Object): void;
                /**
                 * 
                 */
                getBarProperties(): Object;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get how many data series we have, so we know how many colors to use.
                 * 
                 */
                getRequiredColors(): any;
                /**
                 * Calculate the min/max on all attached series in both directions.
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * 
                 * @param value             
                 * @param j             
                 * @param seriesIndex             
                 * @param indexed             
                 */
                getValue(value: any, j: any, seriesIndex: any, indexed: any): Object;
                /**
                 * Initializes scalers using attached axes.
                 * 
                 * @param dim Size of a plot area in pixels as {width, height}.             
                 * @param stats Min/max of data in both directions as {hmin, hmax, vmin, vmax}.             
                 */
                initializeScalers(dim: Object, stats: Object): any;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Returns whether or not this plot needs to be rendered.
                 * 
                 */
                isDirty(): any;
                /**
                 * Create/alter any zooming windows on this plot.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                performZoom(dim: Object, offsets: Object): any;
                /**
                 * Stub function for use by specific plots.
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                plotEvent(o: Object): void;
                /**
                 * 
                 */
                purgeGroup(): void;
                /**
                 * Raises events in predefined order
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                raiseEvent(o: Object): void;
                /**
                 * Run the calculations for any axes for this plot.
                 * 
                 * @param dim An object in the form of { width, height }             
                 * @param offsets An object of the form { l, r, t, b}.             
                 */
                render(dim: Object, offsets: Object): any;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Reset all events attached to our plotEvent (i.e. disconnect).
                 * 
                 */
                resetEvents(): void;
                /**
                 * Set an axis for this plot.
                 * 
                 * @param axis The axis to set.             
                 */
                setAxis(axis: dojox.charting.axis2d.Base): any;
                /**
                 * Compute plot axis data coordinates from page coordinates.
                 * 
                 * @param coord The pixel coordinate in page coordinate space. That is of the following form:{ x: 50, y: 200 }If not provided return the tranform method instead of the result of the transformation.             
                 */
                toData(coord: Object): any;
                /**
                 * Compute page coordinates from plot axis data coordinates.
                 * 
                 * @param coord               OptionalThe coordinates in plot axis data coordinate space. For cartesian charts that is of the following form:{ hAxisName: 50, vAxisName: 200 }If not provided return the transform method instead of the result of the transformation.             
                 */
                toPage(coord: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/Default.html
             *
             * 
             * @param chart The chart this plot belongs to.     
             * @param kwArgs       OptionalAn optional arguments object to help define this plot.     
             */
            class Default extends dojox.charting.plot2d.CartesianBase implements dojox.charting.plot2d._PlotEvents {
                constructor(chart: dojox.charting.Chart, kwArgs?: Object);
                /**
                 * 
                 */
                "baseParams": Object;
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * The default parameters of this plot.
                 * 
                 */
                "defaultParams": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * The optional parameters of this plot.
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Add a data series to this plot.
                 * 
                 * @param run The series to be added.             
                 */
                addSeries(run: dojox.charting.Series): any;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * 
                 * @param i             
                 * @param indexed             
                 */
                buildSegments(i: any, indexed: any): any[];
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * 
                 * @param creator             
                 * @param noClip             
                 */
                cleanGroup(creator: any, noClip: any): void;
                /**
                 * Clear out all of the information tied to this plot.
                 * 
                 */
                clear(): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: String): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: Function): any;
                /**
                 * 
                 * @param group             
                 * @param value             
                 * @param bbox             
                 * @param theme             
                 */
                createLabel(group: any, value: any, bbox: any, theme: any): void;
                /**
                 * 
                 * @param run             
                 * @param creator             
                 * @param params             
                 */
                createPath(run: any, creator: any, params: any): any;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * Find out if any event handlers have been connected to our plotEvent.
                 * 
                 */
                events(): any;
                /**
                 * Emulates firing an event for a given data value (specified by
                 * an index) of a given series.
                 * 
                 * @param seriesName Series name.             
                 * @param eventName Event name to emulate.             
                 * @param index Valid data value index used to raise an event.             
                 * @param eventObject               OptionalOptional event object. Especially useful for synthetic events.Default: null.             
                 */
                fireEvent(seriesName: String, eventName: String, index: number, eventObject: Object): void;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get how many data series we have, so we know how many colors to use.
                 * 
                 */
                getRequiredColors(): any;
                /**
                 * Calculate the min/max on all attached series in both directions.
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * Initializes scalers using attached axes.
                 * 
                 * @param dim Size of a plot area in pixels as {width, height}.             
                 * @param stats Min/max of data in both directions as {hmin, hmax, vmin, vmax}.             
                 */
                initializeScalers(dim: Object, stats: Object): any;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Returns whether or not this plot needs to be rendered.
                 * 
                 */
                isDirty(): any;
                /**
                 * Create/alter any zooming windows on this plot.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                performZoom(dim: Object, offsets: Object): any;
                /**
                 * Stub function for use by specific plots.
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                plotEvent(o: Object): void;
                /**
                 * 
                 */
                purgeGroup(): void;
                /**
                 * Raises events in predefined order
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                raiseEvent(o: Object): void;
                /**
                 * Render/draw everything on this plot.
                 * 
                 * @param dim An object of the form { width, height }             
                 * @param offsets An object of the form { l, r, t, b }             
                 */
                render(dim: Object, offsets: Object): any;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Reset all events attached to our plotEvent (i.e. disconnect).
                 * 
                 */
                resetEvents(): void;
                /**
                 * Set an axis for this plot.
                 * 
                 * @param axis The axis to set.             
                 */
                setAxis(axis: dojox.charting.axis2d.Base): any;
                /**
                 * Compute plot axis data coordinates from page coordinates.
                 * 
                 * @param coord The pixel coordinate in page coordinate space. That is of the following form:{ x: 50, y: 200 }If not provided return the tranform method instead of the result of the transformation.             
                 */
                toData(coord: Object): any;
                /**
                 * Compute page coordinates from plot axis data coordinates.
                 * 
                 * @param coord               OptionalThe coordinates in plot axis data coordinate space. For cartesian charts that is of the following form:{ hAxisName: 50, vAxisName: 200 }If not provided return the transform method instead of the result of the transformation.             
                 */
                toPage(coord: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/Grid.html
             *
             * A "faux" plot that can be placed behind other plots to represent
             * a grid against which other plots can be easily measured.
             * 
             * @param chart The chart this plot belongs to.     
             * @param kwArgs       OptionalAn optional keyword arguments object to help define the parameters of the underlying grid.     
             */
            class Grid extends dojox.charting.plot2d.CartesianBase {
                constructor(chart: dojox.charting.Chart, kwArgs?: Object);
                /**
                 * 
                 */
                "baseParams": Object;
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Ignored but included as a dummy method.
                 * 
                 * @param run             
                 */
                addSeries(run: any): any;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * 
                 */
                cleanGroup(): void;
                /**
                 * Clear out all of the information tied to this plot.
                 * 
                 */
                clear(): any;
                /**
                 * 
                 * @param group             
                 * @param value             
                 * @param bbox             
                 * @param theme             
                 */
                createLabel(group: any, value: any, bbox: any, theme: any): void;
                /**
                 * 
                 * @param creator             
                 * @param params             
                 */
                createLine(creator: any, params: any): any;
                /**
                 * 
                 * @param creator             
                 * @param params             
                 */
                createRect(creator: any, params: any): any;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get how many data series we have, so we know how many colors to use.
                 * 
                 */
                getRequiredColors(): any;
                /**
                 * Returns default stats (irrelevant for this type of plot).
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * Initializes scalers using attached axes.
                 * 
                 * @param dim Size of a plot area in pixels as {width, height}.             
                 * @param stats Min/max of data in both directions as {hmin, hmax, vmin, vmax}.             
                 */
                initializeScalers(dim: Object, stats: Object): any;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Returns whether or not this plot needs to be rendered.
                 * 
                 */
                isDirty(): any;
                /**
                 * Create/alter any zooming windows on this plot.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                performZoom(dim: Object, offsets: Object): any;
                /**
                 * 
                 */
                purgeGroup(): void;
                /**
                 * Render the plot on the chart.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                render(dim: Object, offsets: Object): any;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Set an axis for this plot.
                 * 
                 * @param axis The axis to set.             
                 */
                setAxis(axis: dojox.charting.axis2d.Base): any;
                /**
                 * Compute plot axis data coordinates from page coordinates.
                 * 
                 * @param coord The pixel coordinate in page coordinate space. That is of the following form:{ x: 50, y: 200 }If not provided return the tranform method instead of the result of the transformation.             
                 */
                toData(coord: Object): any;
                /**
                 * Compute page coordinates from plot axis data coordinates.
                 * 
                 * @param coord               OptionalThe coordinates in plot axis data coordinate space. For cartesian charts that is of the following form:{ hAxisName: 50, vAxisName: 200 }If not provided return the transform method instead of the result of the transformation.             
                 */
                toPage(coord: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/Indicator.html
             *
             * A "faux" plot that can be placed behind or above other plots to represent a line or multi-line
             * threshold on the chart.
             * 
             * @param chart The chart this plot belongs to.     
             * @param kwArgs       OptionalAn optional keyword arguments object to help define the parameters of the underlying grid.     
             */
            class Indicator extends dojox.charting.plot2d.CartesianBase implements dojox.charting.plot2d._PlotEvents {
                constructor(chart: dojox.charting.Chart, kwArgs?: Object);
                /**
                 * 
                 */
                "baseParams": Object;
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * 
                 * @param run             
                 */
                addSeries(run: any): void;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * 
                 * @param creator             
                 * @param noClip             
                 */
                cleanGroup(creator: any, noClip: any): void;
                /**
                 * 
                 */
                clear(): void;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: String): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: Function): any;
                /**
                 * 
                 * @param group             
                 * @param value             
                 * @param bbox             
                 * @param theme             
                 */
                createLabel(group: any, value: any, bbox: any, theme: any): void;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * Find out if any event handlers have been connected to our plotEvent.
                 * 
                 */
                events(): any;
                /**
                 * Emulates firing an event for a given data value (specified by
                 * an index) of a given series.
                 * 
                 * @param seriesName Series name.             
                 * @param eventName Event name to emulate.             
                 * @param index Valid data value index used to raise an event.             
                 * @param eventObject               OptionalOptional event object. Especially useful for synthetic events.Default: null.             
                 */
                fireEvent(seriesName: String, eventName: String, index: number, eventObject: Object): void;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get how many data series we have, so we know how many colors to use.
                 * 
                 */
                getRequiredColors(): any;
                /**
                 * Returns default stats (irrelevant for this type of plot).
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * Initializes scalers using attached axes.
                 * 
                 * @param dim Size of a plot area in pixels as {width, height}.             
                 * @param stats Min/max of data in both directions as {hmin, hmax, vmin, vmax}.             
                 */
                initializeScalers(dim: Object, stats: Object): any;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Returns whether or not this plot needs to be rendered.
                 * 
                 */
                isDirty(): any;
                /**
                 * Create/alter any zooming windows on this plot.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                performZoom(dim: Object, offsets: Object): any;
                /**
                 * Stub function for use by specific plots.
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                plotEvent(o: Object): void;
                /**
                 * 
                 */
                purgeGroup(): void;
                /**
                 * Raises events in predefined order
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                raiseEvent(o: Object): void;
                /**
                 * 
                 * @param dim             
                 * @param offsets             
                 */
                render(dim: any, offsets: any): any;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Reset all events attached to our plotEvent (i.e. disconnect).
                 * 
                 */
                resetEvents(): void;
                /**
                 * Set an axis for this plot.
                 * 
                 * @param axis The axis to set.             
                 */
                setAxis(axis: dojox.charting.axis2d.Base): any;
                /**
                 * Compute plot axis data coordinates from page coordinates.
                 * 
                 * @param coord The pixel coordinate in page coordinate space. That is of the following form:{ x: 50, y: 200 }If not provided return the tranform method instead of the result of the transformation.             
                 */
                toData(coord: Object): any;
                /**
                 * Compute page coordinates from plot axis data coordinates.
                 * 
                 * @param coord               OptionalThe coordinates in plot axis data coordinate space. For cartesian charts that is of the following form:{ hAxisName: 50, vAxisName: 200 }If not provided return the transform method instead of the result of the transformation.             
                 */
                toPage(coord: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/Lines.html
             *
             * A convenience constructor to create a typical line chart.
             * 
             */
            class Lines extends dojox.charting.plot2d.Default {
                constructor();
                /**
                 * 
                 */
                "baseParams": Object;
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * The default parameters of this plot.
                 * 
                 */
                "defaultParams": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * The optional parameters of this plot.
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Add a data series to this plot.
                 * 
                 * @param run The series to be added.             
                 */
                addSeries(run: dojox.charting.Series): any;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * 
                 * @param i             
                 * @param indexed             
                 */
                buildSegments(i: any, indexed: any): any[];
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * 
                 * @param creator             
                 * @param noClip             
                 */
                cleanGroup(creator: any, noClip: any): void;
                /**
                 * Clear out all of the information tied to this plot.
                 * 
                 */
                clear(): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: String): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: Function): any;
                /**
                 * 
                 * @param group             
                 * @param value             
                 * @param bbox             
                 * @param theme             
                 */
                createLabel(group: any, value: any, bbox: any, theme: any): void;
                /**
                 * 
                 * @param run             
                 * @param creator             
                 * @param params             
                 */
                createPath(run: any, creator: any, params: any): any;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * Find out if any event handlers have been connected to our plotEvent.
                 * 
                 */
                events(): any;
                /**
                 * Emulates firing an event for a given data value (specified by
                 * an index) of a given series.
                 * 
                 * @param seriesName Series name.             
                 * @param eventName Event name to emulate.             
                 * @param index Valid data value index used to raise an event.             
                 * @param eventObject               OptionalOptional event object. Especially useful for synthetic events.Default: null.             
                 */
                fireEvent(seriesName: String, eventName: String, index: number, eventObject: Object): void;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get how many data series we have, so we know how many colors to use.
                 * 
                 */
                getRequiredColors(): any;
                /**
                 * Calculate the min/max on all attached series in both directions.
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * Initializes scalers using attached axes.
                 * 
                 * @param dim Size of a plot area in pixels as {width, height}.             
                 * @param stats Min/max of data in both directions as {hmin, hmax, vmin, vmax}.             
                 */
                initializeScalers(dim: Object, stats: Object): any;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Returns whether or not this plot needs to be rendered.
                 * 
                 */
                isDirty(): any;
                /**
                 * Create/alter any zooming windows on this plot.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                performZoom(dim: Object, offsets: Object): any;
                /**
                 * Stub function for use by specific plots.
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                plotEvent(o: Object): void;
                /**
                 * 
                 */
                purgeGroup(): void;
                /**
                 * Raises events in predefined order
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                raiseEvent(o: Object): void;
                /**
                 * Render/draw everything on this plot.
                 * 
                 * @param dim An object of the form { width, height }             
                 * @param offsets An object of the form { l, r, t, b }             
                 */
                render(dim: Object, offsets: Object): any;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Reset all events attached to our plotEvent (i.e. disconnect).
                 * 
                 */
                resetEvents(): void;
                /**
                 * Set an axis for this plot.
                 * 
                 * @param axis The axis to set.             
                 */
                setAxis(axis: dojox.charting.axis2d.Base): any;
                /**
                 * Compute plot axis data coordinates from page coordinates.
                 * 
                 * @param coord The pixel coordinate in page coordinate space. That is of the following form:{ x: 50, y: 200 }If not provided return the tranform method instead of the result of the transformation.             
                 */
                toData(coord: Object): any;
                /**
                 * Compute page coordinates from plot axis data coordinates.
                 * 
                 * @param coord               OptionalThe coordinates in plot axis data coordinate space. For cartesian charts that is of the following form:{ hAxisName: 50, vAxisName: 200 }If not provided return the transform method instead of the result of the transformation.             
                 */
                toPage(coord: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/Markers.html
             *
             * A convenience plot to draw a line chart with markers.
             * 
             */
            class Markers extends dojox.charting.plot2d.Default {
                constructor();
                /**
                 * 
                 */
                "baseParams": Object;
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * The default parameters of this plot.
                 * 
                 */
                "defaultParams": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * The optional parameters of this plot.
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Add a data series to this plot.
                 * 
                 * @param run The series to be added.             
                 */
                addSeries(run: dojox.charting.Series): any;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * 
                 * @param i             
                 * @param indexed             
                 */
                buildSegments(i: any, indexed: any): any[];
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * 
                 * @param creator             
                 * @param noClip             
                 */
                cleanGroup(creator: any, noClip: any): void;
                /**
                 * Clear out all of the information tied to this plot.
                 * 
                 */
                clear(): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: String): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: Function): any;
                /**
                 * 
                 * @param group             
                 * @param value             
                 * @param bbox             
                 * @param theme             
                 */
                createLabel(group: any, value: any, bbox: any, theme: any): void;
                /**
                 * 
                 * @param run             
                 * @param creator             
                 * @param params             
                 */
                createPath(run: any, creator: any, params: any): any;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * Find out if any event handlers have been connected to our plotEvent.
                 * 
                 */
                events(): any;
                /**
                 * Emulates firing an event for a given data value (specified by
                 * an index) of a given series.
                 * 
                 * @param seriesName Series name.             
                 * @param eventName Event name to emulate.             
                 * @param index Valid data value index used to raise an event.             
                 * @param eventObject               OptionalOptional event object. Especially useful for synthetic events.Default: null.             
                 */
                fireEvent(seriesName: String, eventName: String, index: number, eventObject: Object): void;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get how many data series we have, so we know how many colors to use.
                 * 
                 */
                getRequiredColors(): any;
                /**
                 * Calculate the min/max on all attached series in both directions.
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * Initializes scalers using attached axes.
                 * 
                 * @param dim Size of a plot area in pixels as {width, height}.             
                 * @param stats Min/max of data in both directions as {hmin, hmax, vmin, vmax}.             
                 */
                initializeScalers(dim: Object, stats: Object): any;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Returns whether or not this plot needs to be rendered.
                 * 
                 */
                isDirty(): any;
                /**
                 * Create/alter any zooming windows on this plot.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                performZoom(dim: Object, offsets: Object): any;
                /**
                 * Stub function for use by specific plots.
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                plotEvent(o: Object): void;
                /**
                 * 
                 */
                purgeGroup(): void;
                /**
                 * Raises events in predefined order
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                raiseEvent(o: Object): void;
                /**
                 * Render/draw everything on this plot.
                 * 
                 * @param dim An object of the form { width, height }             
                 * @param offsets An object of the form { l, r, t, b }             
                 */
                render(dim: Object, offsets: Object): any;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Reset all events attached to our plotEvent (i.e. disconnect).
                 * 
                 */
                resetEvents(): void;
                /**
                 * Set an axis for this plot.
                 * 
                 * @param axis The axis to set.             
                 */
                setAxis(axis: dojox.charting.axis2d.Base): any;
                /**
                 * Compute plot axis data coordinates from page coordinates.
                 * 
                 * @param coord The pixel coordinate in page coordinate space. That is of the following form:{ x: 50, y: 200 }If not provided return the tranform method instead of the result of the transformation.             
                 */
                toData(coord: Object): any;
                /**
                 * Compute page coordinates from plot axis data coordinates.
                 * 
                 * @param coord               OptionalThe coordinates in plot axis data coordinate space. For cartesian charts that is of the following form:{ hAxisName: 50, vAxisName: 200 }If not provided return the transform method instead of the result of the transformation.             
                 */
                toPage(coord: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/MarkersOnly.html
             *
             * A convenience object to draw only markers (like a scatter but not quite).
             * 
             */
            class MarkersOnly extends dojox.charting.plot2d.Default {
                constructor();
                /**
                 * 
                 */
                "baseParams": Object;
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * The default parameters of this plot.
                 * 
                 */
                "defaultParams": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * The optional parameters of this plot.
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Add a data series to this plot.
                 * 
                 * @param run The series to be added.             
                 */
                addSeries(run: dojox.charting.Series): any;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * 
                 * @param i             
                 * @param indexed             
                 */
                buildSegments(i: any, indexed: any): any[];
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * 
                 * @param creator             
                 * @param noClip             
                 */
                cleanGroup(creator: any, noClip: any): void;
                /**
                 * Clear out all of the information tied to this plot.
                 * 
                 */
                clear(): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: String): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: Function): any;
                /**
                 * 
                 * @param group             
                 * @param value             
                 * @param bbox             
                 * @param theme             
                 */
                createLabel(group: any, value: any, bbox: any, theme: any): void;
                /**
                 * 
                 * @param run             
                 * @param creator             
                 * @param params             
                 */
                createPath(run: any, creator: any, params: any): any;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * Find out if any event handlers have been connected to our plotEvent.
                 * 
                 */
                events(): any;
                /**
                 * Emulates firing an event for a given data value (specified by
                 * an index) of a given series.
                 * 
                 * @param seriesName Series name.             
                 * @param eventName Event name to emulate.             
                 * @param index Valid data value index used to raise an event.             
                 * @param eventObject               OptionalOptional event object. Especially useful for synthetic events.Default: null.             
                 */
                fireEvent(seriesName: String, eventName: String, index: number, eventObject: Object): void;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get how many data series we have, so we know how many colors to use.
                 * 
                 */
                getRequiredColors(): any;
                /**
                 * Calculate the min/max on all attached series in both directions.
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * Initializes scalers using attached axes.
                 * 
                 * @param dim Size of a plot area in pixels as {width, height}.             
                 * @param stats Min/max of data in both directions as {hmin, hmax, vmin, vmax}.             
                 */
                initializeScalers(dim: Object, stats: Object): any;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Returns whether or not this plot needs to be rendered.
                 * 
                 */
                isDirty(): any;
                /**
                 * Create/alter any zooming windows on this plot.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                performZoom(dim: Object, offsets: Object): any;
                /**
                 * Stub function for use by specific plots.
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                plotEvent(o: Object): void;
                /**
                 * 
                 */
                purgeGroup(): void;
                /**
                 * Raises events in predefined order
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                raiseEvent(o: Object): void;
                /**
                 * Render/draw everything on this plot.
                 * 
                 * @param dim An object of the form { width, height }             
                 * @param offsets An object of the form { l, r, t, b }             
                 */
                render(dim: Object, offsets: Object): any;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Reset all events attached to our plotEvent (i.e. disconnect).
                 * 
                 */
                resetEvents(): void;
                /**
                 * Set an axis for this plot.
                 * 
                 * @param axis The axis to set.             
                 */
                setAxis(axis: dojox.charting.axis2d.Base): any;
                /**
                 * Compute plot axis data coordinates from page coordinates.
                 * 
                 * @param coord The pixel coordinate in page coordinate space. That is of the following form:{ x: 50, y: 200 }If not provided return the tranform method instead of the result of the transformation.             
                 */
                toData(coord: Object): any;
                /**
                 * Compute page coordinates from plot axis data coordinates.
                 * 
                 * @param coord               OptionalThe coordinates in plot axis data coordinate space. For cartesian charts that is of the following form:{ hAxisName: 50, vAxisName: 200 }If not provided return the transform method instead of the result of the transformation.             
                 */
                toPage(coord: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/OHLC.html
             *
             * A plot that represents typical open/high/low/close (financial reporting, primarily).
             * Unlike most charts, the Candlestick expects data points to be represented by
             * an object of the form { x?, open, close, high, low, mid? }, where both
             * x and mid are optional parameters.  If x is not provided, the index of the
             * data array is used.
             * 
             * @param chart The chart this plot belongs to.     
             * @param kwArgs       OptionalAn optional keyword arguments object to help define the plot.     
             */
            class OHLC extends dojox.charting.plot2d.CartesianBase implements dojox.charting.plot2d._PlotEvents {
                constructor(chart: dojox.charting.Chart, kwArgs?: Object);
                /**
                 * 
                 */
                "baseParams": Object;
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Add a data series to this plot.
                 * 
                 * @param run The series to be added.             
                 */
                addSeries(run: dojox.charting.Series): any;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * 
                 * @param creator             
                 * @param noClip             
                 */
                cleanGroup(creator: any, noClip: any): void;
                /**
                 * Clear out all of the information tied to this plot.
                 * 
                 */
                clear(): any;
                /**
                 * Collect all statistics for drawing this chart.  Since the common
                 * functionality only assumes x and y, OHLC must create it's own
                 * stats (since data has no y value, but open/close/high/low instead).
                 * 
                 * @param series The data series array to be drawn on this plot.             
                 */
                collectStats(series: dojox.charting.Series[]): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: String): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: Function): any;
                /**
                 * 
                 * @param group             
                 * @param value             
                 * @param bbox             
                 * @param theme             
                 */
                createLabel(group: any, value: any, bbox: any, theme: any): void;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * Find out if any event handlers have been connected to our plotEvent.
                 * 
                 */
                events(): any;
                /**
                 * Emulates firing an event for a given data value (specified by
                 * an index) of a given series.
                 * 
                 * @param seriesName Series name.             
                 * @param eventName Event name to emulate.             
                 * @param index Valid data value index used to raise an event.             
                 * @param eventObject               OptionalOptional event object. Especially useful for synthetic events.Default: null.             
                 */
                fireEvent(seriesName: String, eventName: String, index: number, eventObject: Object): void;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get how many data series we have, so we know how many colors to use.
                 * 
                 */
                getRequiredColors(): any;
                /**
                 * Calculate the min/max on all attached series in both directions.
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * Initializes scalers using attached axes.
                 * 
                 * @param dim Size of a plot area in pixels as {width, height}.             
                 * @param stats Min/max of data in both directions as {hmin, hmax, vmin, vmax}.             
                 */
                initializeScalers(dim: Object, stats: Object): any;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Returns whether or not this plot needs to be rendered.
                 * 
                 */
                isDirty(): any;
                /**
                 * Create/alter any zooming windows on this plot.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                performZoom(dim: Object, offsets: Object): any;
                /**
                 * Stub function for use by specific plots.
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                plotEvent(o: Object): void;
                /**
                 * 
                 */
                purgeGroup(): void;
                /**
                 * Raises events in predefined order
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                raiseEvent(o: Object): void;
                /**
                 * Run the calculations for any axes for this plot.
                 * 
                 * @param dim An object in the form of { width, height }             
                 * @param offsets An object of the form { l, r, t, b}.             
                 */
                render(dim: Object, offsets: Object): any;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Reset all events attached to our plotEvent (i.e. disconnect).
                 * 
                 */
                resetEvents(): void;
                /**
                 * Set an axis for this plot.
                 * 
                 * @param axis The axis to set.             
                 */
                setAxis(axis: dojox.charting.axis2d.Base): any;
                /**
                 * Compute plot axis data coordinates from page coordinates.
                 * 
                 * @param coord The pixel coordinate in page coordinate space. That is of the following form:{ x: 50, y: 200 }If not provided return the tranform method instead of the result of the transformation.             
                 */
                toData(coord: Object): any;
                /**
                 * Compute page coordinates from plot axis data coordinates.
                 * 
                 * @param coord               OptionalThe coordinates in plot axis data coordinate space. For cartesian charts that is of the following form:{ hAxisName: 50, vAxisName: 200 }If not provided return the transform method instead of the result of the transformation.             
                 */
                toPage(coord: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/Pie.html
             *
             * The plot that represents a typical pie chart.
             * 
             * @param chart     
             * @param kwArgs     
             */
            class Pie extends dojox.charting.plot2d.Base implements dojox.charting.plot2d._PlotEvents {
                constructor(chart: any, kwArgs: any);
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Add a series of data to this plot.
                 * 
                 * @param run             
                 */
                addSeries(run: any): any;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * Clean any elements (HTML or GFX-based) out of our group, and create a new one.
                 * 
                 * @param creator               OptionalAn optional surface to work with.             
                 */
                cleanGroup(creator: dojox.gfx.shape.Surface): any;
                /**
                 * Clear out all of the information tied to this plot.
                 * 
                 */
                clear(): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: String): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: Function): any;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * Find out if any event handlers have been connected to our plotEvent.
                 * 
                 */
                events(): any;
                /**
                 * Emulates firing an event for a given data value (specified by
                 * an index) of a given series.
                 * 
                 * @param seriesName Series name.             
                 * @param eventName Event name to emulate.             
                 * @param index Valid data value index used to raise an event.             
                 * @param eventObject               OptionalOptional event object. Especially useful for synthetic events.Default: null.             
                 */
                fireEvent(seriesName: String, eventName: String, index: number, eventObject: Object): void;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Return the number of colors needed to draw this plot.
                 * 
                 */
                getRequiredColors(): number;
                /**
                 * Returns default stats (irrelevant for this type of plot).
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * Does nothing.
                 * 
                 */
                initializeScalers(): Function;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Stub function for use by specific plots.
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                plotEvent(o: Object): void;
                /**
                 * Clear any elements out of our group, and destroy the group.
                 * 
                 */
                purgeGroup(): any;
                /**
                 * Raises events in predefined order
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                raiseEvent(o: Object): void;
                /**
                 * Render the plot on the chart.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                render(dim: Object, offsets: Object): any;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Reset all events attached to our plotEvent (i.e. disconnect).
                 * 
                 */
                resetEvents(): void;
                /**
                 * Dummy method, since axes are irrelevant with a Pie chart.
                 * 
                 * @param axis             
                 */
                setAxis(axis: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/Scatter.html
             *
             * A plot object representing a typical scatter chart.
             * 
             * @param chart The chart this plot belongs to.     
             * @param kwArgs       OptionalAn optional keyword arguments object to help define this plot's parameters.     
             */
            class Scatter extends dojox.charting.plot2d.CartesianBase implements dojox.charting.plot2d._PlotEvents {
                constructor(chart: dojox.charting.Chart, kwArgs?: Object);
                /**
                 * 
                 */
                "baseParams": Object;
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Add a data series to this plot.
                 * 
                 * @param run The series to be added.             
                 */
                addSeries(run: dojox.charting.Series): any;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * 
                 * @param creator             
                 * @param noClip             
                 */
                cleanGroup(creator: any, noClip: any): void;
                /**
                 * Clear out all of the information tied to this plot.
                 * 
                 */
                clear(): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: String): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: Function): any;
                /**
                 * 
                 * @param group             
                 * @param value             
                 * @param bbox             
                 * @param theme             
                 */
                createLabel(group: any, value: any, bbox: any, theme: any): void;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * Find out if any event handlers have been connected to our plotEvent.
                 * 
                 */
                events(): any;
                /**
                 * Emulates firing an event for a given data value (specified by
                 * an index) of a given series.
                 * 
                 * @param seriesName Series name.             
                 * @param eventName Event name to emulate.             
                 * @param index Valid data value index used to raise an event.             
                 * @param eventObject               OptionalOptional event object. Especially useful for synthetic events.Default: null.             
                 */
                fireEvent(seriesName: String, eventName: String, index: number, eventObject: Object): void;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get how many data series we have, so we know how many colors to use.
                 * 
                 */
                getRequiredColors(): any;
                /**
                 * Calculate the min/max on all attached series in both directions.
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * Initializes scalers using attached axes.
                 * 
                 * @param dim Size of a plot area in pixels as {width, height}.             
                 * @param stats Min/max of data in both directions as {hmin, hmax, vmin, vmax}.             
                 */
                initializeScalers(dim: Object, stats: Object): any;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Returns whether or not this plot needs to be rendered.
                 * 
                 */
                isDirty(): any;
                /**
                 * Create/alter any zooming windows on this plot.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                performZoom(dim: Object, offsets: Object): any;
                /**
                 * Stub function for use by specific plots.
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                plotEvent(o: Object): void;
                /**
                 * 
                 */
                purgeGroup(): void;
                /**
                 * Raises events in predefined order
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                raiseEvent(o: Object): void;
                /**
                 * Run the calculations for any axes for this plot.
                 * 
                 * @param dim An object in the form of { width, height }             
                 * @param offsets An object of the form { l, r, t, b}.             
                 */
                render(dim: Object, offsets: Object): any;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Reset all events attached to our plotEvent (i.e. disconnect).
                 * 
                 */
                resetEvents(): void;
                /**
                 * Set an axis for this plot.
                 * 
                 * @param axis The axis to set.             
                 */
                setAxis(axis: dojox.charting.axis2d.Base): any;
                /**
                 * Compute plot axis data coordinates from page coordinates.
                 * 
                 * @param coord The pixel coordinate in page coordinate space. That is of the following form:{ x: 50, y: 200 }If not provided return the tranform method instead of the result of the transformation.             
                 */
                toData(coord: Object): any;
                /**
                 * Compute page coordinates from plot axis data coordinates.
                 * 
                 * @param coord               OptionalThe coordinates in plot axis data coordinate space. For cartesian charts that is of the following form:{ hAxisName: 50, vAxisName: 200 }If not provided return the transform method instead of the result of the transformation.             
                 */
                toPage(coord: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/Spider.html
             *
             * The plot that represents a typical Spider chart.
             * 
             * @param chart The chart this plot belongs to.     
             * @param kwArgs       OptionalAn optional keyword arguments object to help define this plot's parameters.     
             */
            class Spider extends dojox.charting.plot2d.Base implements dojox.charting.plot2d._PlotEvents {
                constructor(chart: dojox.charting.Chart, kwArgs?: Object);
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Add a data series to this plot.
                 * 
                 * @param run The series to be added.             
                 */
                addSeries(run: dojox.charting.Series): any;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * Clean any elements (HTML or GFX-based) out of our group, and create a new one.
                 * 
                 * @param creator               OptionalAn optional surface to work with.             
                 */
                cleanGroup(creator: dojox.gfx.shape.Surface): any;
                /**
                 * Clear out all of the information tied to this plot.
                 * 
                 */
                clear(): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: String): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: Function): any;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * Find out if any event handlers have been connected to our plotEvent.
                 * 
                 */
                events(): any;
                /**
                 * Emulates firing an event for a given data value (specified by
                 * an index) of a given series.
                 * 
                 * @param seriesName Series name.             
                 * @param eventName Event name to emulate.             
                 * @param index Valid data value index used to raise an event.             
                 * @param eventObject               OptionalOptional event object. Especially useful for synthetic events.Default: null.             
                 */
                fireEvent(seriesName: String, eventName: String, index: number, eventObject: Object): void;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get how many data series we have, so we know how many colors to use.
                 * 
                 */
                getRequiredColors(): any;
                /**
                 * Calculate the min/max on all attached series in both directions.
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * Does nothing.
                 * 
                 */
                initializeScalers(): Function;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Stub function for use by specific plots.
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                plotEvent(o: Object): void;
                /**
                 * Clear any elements out of our group, and destroy the group.
                 * 
                 */
                purgeGroup(): any;
                /**
                 * Raises events in predefined order
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                raiseEvent(o: Object): void;
                /**
                 * Render the plot on the chart.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                render(dim: Object, offsets: Object): any;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Reset all events attached to our plotEvent (i.e. disconnect).
                 * 
                 */
                resetEvents(): void;
                /**
                 * Optionally set axis min and max property.
                 * 
                 * @param axis             
                 */
                setAxis(axis: any): any;
                /**
                 * 
                 * @param o             
                 */
                tooltipFunc(o: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/Stacked.html
             *
             * Like the default plot, Stacked sets up lines, areas and markers
             * in a stacked fashion (values on the y axis added to each other)
             * as opposed to a direct one.
             * 
             * @param chart The chart this plot belongs to.     
             * @param kwArgs       OptionalAn optional arguments object to help define this plot.     
             */
            class Stacked extends dojox.charting.plot2d.Default {
                constructor(chart: dojox.charting.Chart, kwArgs?: Object);
                /**
                 * 
                 */
                "baseParams": Object;
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * The default parameters of this plot.
                 * 
                 */
                "defaultParams": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * The optional parameters of this plot.
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Add a data series to this plot.
                 * 
                 * @param run The series to be added.             
                 */
                addSeries(run: dojox.charting.Series): any;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * 
                 * @param i             
                 * @param indexed             
                 */
                buildSegments(i: any, indexed: any): any[];
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * 
                 * @param creator             
                 * @param noClip             
                 */
                cleanGroup(creator: any, noClip: any): void;
                /**
                 * Clear out all of the information tied to this plot.
                 * 
                 */
                clear(): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: String): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: Function): any;
                /**
                 * 
                 * @param group             
                 * @param value             
                 * @param bbox             
                 * @param theme             
                 */
                createLabel(group: any, value: any, bbox: any, theme: any): void;
                /**
                 * 
                 * @param run             
                 * @param creator             
                 * @param params             
                 */
                createPath(run: any, creator: any, params: any): any;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * Find out if any event handlers have been connected to our plotEvent.
                 * 
                 */
                events(): any;
                /**
                 * Emulates firing an event for a given data value (specified by
                 * an index) of a given series.
                 * 
                 * @param seriesName Series name.             
                 * @param eventName Event name to emulate.             
                 * @param index Valid data value index used to raise an event.             
                 * @param eventObject               OptionalOptional event object. Especially useful for synthetic events.Default: null.             
                 */
                fireEvent(seriesName: String, eventName: String, index: number, eventObject: Object): void;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get how many data series we have, so we know how many colors to use.
                 * 
                 */
                getRequiredColors(): any;
                /**
                 * Calculate the min/max on all attached series in both directions.
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * Initializes scalers using attached axes.
                 * 
                 * @param dim Size of a plot area in pixels as {width, height}.             
                 * @param stats Min/max of data in both directions as {hmin, hmax, vmin, vmax}.             
                 */
                initializeScalers(dim: Object, stats: Object): any;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Returns whether or not this plot needs to be rendered.
                 * 
                 */
                isDirty(): any;
                /**
                 * Create/alter any zooming windows on this plot.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                performZoom(dim: Object, offsets: Object): any;
                /**
                 * Stub function for use by specific plots.
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                plotEvent(o: Object): void;
                /**
                 * 
                 */
                purgeGroup(): void;
                /**
                 * Raises events in predefined order
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                raiseEvent(o: Object): void;
                /**
                 * Render/draw everything on this plot.
                 * 
                 * @param dim An object of the form { width, height }             
                 * @param offsets An object of the form { l, r, t, b }             
                 */
                render(dim: Object, offsets: Object): any;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Reset all events attached to our plotEvent (i.e. disconnect).
                 * 
                 */
                resetEvents(): void;
                /**
                 * Set an axis for this plot.
                 * 
                 * @param axis The axis to set.             
                 */
                setAxis(axis: dojox.charting.axis2d.Base): any;
                /**
                 * Compute plot axis data coordinates from page coordinates.
                 * 
                 * @param coord The pixel coordinate in page coordinate space. That is of the following form:{ x: 50, y: 200 }If not provided return the tranform method instead of the result of the transformation.             
                 */
                toData(coord: Object): any;
                /**
                 * Compute page coordinates from plot axis data coordinates.
                 * 
                 * @param coord               OptionalThe coordinates in plot axis data coordinate space. For cartesian charts that is of the following form:{ hAxisName: 50, vAxisName: 200 }If not provided return the transform method instead of the result of the transformation.             
                 */
                toPage(coord: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/StackedAreas.html
             *
             * A convenience object to set up a stacked area plot.
             * 
             */
            class StackedAreas extends dojox.charting.plot2d.Stacked {
                constructor();
                /**
                 * 
                 */
                "baseParams": Object;
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * The default parameters of this plot.
                 * 
                 */
                "defaultParams": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * The optional parameters of this plot.
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Add a data series to this plot.
                 * 
                 * @param run The series to be added.             
                 */
                addSeries(run: dojox.charting.Series): any;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * 
                 * @param i             
                 * @param indexed             
                 */
                buildSegments(i: any, indexed: any): any[];
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * 
                 * @param creator             
                 * @param noClip             
                 */
                cleanGroup(creator: any, noClip: any): void;
                /**
                 * Clear out all of the information tied to this plot.
                 * 
                 */
                clear(): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: String): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: Function): any;
                /**
                 * 
                 * @param group             
                 * @param value             
                 * @param bbox             
                 * @param theme             
                 */
                createLabel(group: any, value: any, bbox: any, theme: any): void;
                /**
                 * 
                 * @param run             
                 * @param creator             
                 * @param params             
                 */
                createPath(run: any, creator: any, params: any): any;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * Find out if any event handlers have been connected to our plotEvent.
                 * 
                 */
                events(): any;
                /**
                 * Emulates firing an event for a given data value (specified by
                 * an index) of a given series.
                 * 
                 * @param seriesName Series name.             
                 * @param eventName Event name to emulate.             
                 * @param index Valid data value index used to raise an event.             
                 * @param eventObject               OptionalOptional event object. Especially useful for synthetic events.Default: null.             
                 */
                fireEvent(seriesName: String, eventName: String, index: number, eventObject: Object): void;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get how many data series we have, so we know how many colors to use.
                 * 
                 */
                getRequiredColors(): any;
                /**
                 * Calculate the min/max on all attached series in both directions.
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * Initializes scalers using attached axes.
                 * 
                 * @param dim Size of a plot area in pixels as {width, height}.             
                 * @param stats Min/max of data in both directions as {hmin, hmax, vmin, vmax}.             
                 */
                initializeScalers(dim: Object, stats: Object): any;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Returns whether or not this plot needs to be rendered.
                 * 
                 */
                isDirty(): any;
                /**
                 * Create/alter any zooming windows on this plot.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                performZoom(dim: Object, offsets: Object): any;
                /**
                 * Stub function for use by specific plots.
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                plotEvent(o: Object): void;
                /**
                 * 
                 */
                purgeGroup(): void;
                /**
                 * Raises events in predefined order
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                raiseEvent(o: Object): void;
                /**
                 * Render/draw everything on this plot.
                 * 
                 * @param dim An object of the form { width, height }             
                 * @param offsets An object of the form { l, r, t, b }             
                 */
                render(dim: Object, offsets: Object): any;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Reset all events attached to our plotEvent (i.e. disconnect).
                 * 
                 */
                resetEvents(): void;
                /**
                 * Set an axis for this plot.
                 * 
                 * @param axis The axis to set.             
                 */
                setAxis(axis: dojox.charting.axis2d.Base): any;
                /**
                 * Compute plot axis data coordinates from page coordinates.
                 * 
                 * @param coord The pixel coordinate in page coordinate space. That is of the following form:{ x: 50, y: 200 }If not provided return the tranform method instead of the result of the transformation.             
                 */
                toData(coord: Object): any;
                /**
                 * Compute page coordinates from plot axis data coordinates.
                 * 
                 * @param coord               OptionalThe coordinates in plot axis data coordinate space. For cartesian charts that is of the following form:{ hAxisName: 50, vAxisName: 200 }If not provided return the transform method instead of the result of the transformation.             
                 */
                toPage(coord: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/StackedBars.html
             *
             * The plot object representing a stacked bar chart (horizontal bars).
             * 
             * @param chart The chart this plot belongs to.     
             * @param kwArgs       OptionalAn optional keyword arguments object to help define the plot.     
             */
            class StackedBars extends dojox.charting.plot2d.Bars {
                constructor(chart: dojox.charting.Chart, kwArgs?: Object);
                /**
                 * 
                 */
                "baseParams": Object;
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Add a data series to this plot.
                 * 
                 * @param run The series to be added.             
                 */
                addSeries(run: dojox.charting.Series): any;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * 
                 * @param creator             
                 * @param noClip             
                 */
                cleanGroup(creator: any, noClip: any): void;
                /**
                 * Clear out all of the information tied to this plot.
                 * 
                 */
                clear(): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: String): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: Function): any;
                /**
                 * 
                 * @param group             
                 * @param value             
                 * @param bbox             
                 * @param theme             
                 */
                createLabel(group: any, value: any, bbox: any, theme: any): void;
                /**
                 * 
                 * @param run             
                 * @param creator             
                 * @param params             
                 */
                createRect(run: any, creator: any, params: any): any;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * Find out if any event handlers have been connected to our plotEvent.
                 * 
                 */
                events(): any;
                /**
                 * Emulates firing an event for a given data value (specified by
                 * an index) of a given series.
                 * 
                 * @param seriesName Series name.             
                 * @param eventName Event name to emulate.             
                 * @param index Valid data value index used to raise an event.             
                 * @param eventObject               OptionalOptional event object. Especially useful for synthetic events.Default: null.             
                 */
                fireEvent(seriesName: String, eventName: String, index: number, eventObject: Object): void;
                /**
                 * 
                 */
                getBarProperties(): Object;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get how many data series we have, so we know how many colors to use.
                 * 
                 */
                getRequiredColors(): any;
                /**
                 * Calculate the min/max on all attached series in both directions.
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * 
                 * @param value             
                 * @param index             
                 * @param seriesIndex             
                 * @param indexed             
                 */
                getValue(value: any, index: any, seriesIndex: any, indexed: any): Object;
                /**
                 * Initializes scalers using attached axes.
                 * 
                 * @param dim Size of a plot area in pixels as {width, height}.             
                 * @param stats Min/max of data in both directions as {hmin, hmax, vmin, vmax}.             
                 */
                initializeScalers(dim: Object, stats: Object): any;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Returns whether or not this plot needs to be rendered.
                 * 
                 */
                isDirty(): any;
                /**
                 * Create/alter any zooming windows on this plot.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                performZoom(dim: Object, offsets: Object): any;
                /**
                 * Stub function for use by specific plots.
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                plotEvent(o: Object): void;
                /**
                 * 
                 */
                purgeGroup(): void;
                /**
                 * Raises events in predefined order
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                raiseEvent(o: Object): void;
                /**
                 * Run the calculations for any axes for this plot.
                 * 
                 * @param dim An object in the form of { width, height }             
                 * @param offsets An object of the form { l, r, t, b}.             
                 */
                render(dim: Object, offsets: Object): any;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Reset all events attached to our plotEvent (i.e. disconnect).
                 * 
                 */
                resetEvents(): void;
                /**
                 * Set an axis for this plot.
                 * 
                 * @param axis The axis to set.             
                 */
                setAxis(axis: dojox.charting.axis2d.Base): any;
                /**
                 * Compute plot axis data coordinates from page coordinates.
                 * 
                 * @param coord The pixel coordinate in page coordinate space. That is of the following form:{ x: 50, y: 200 }If not provided return the tranform method instead of the result of the transformation.             
                 */
                toData(coord: Object): any;
                /**
                 * Compute page coordinates from plot axis data coordinates.
                 * 
                 * @param coord               OptionalThe coordinates in plot axis data coordinate space. For cartesian charts that is of the following form:{ hAxisName: 50, vAxisName: 200 }If not provided return the transform method instead of the result of the transformation.             
                 */
                toPage(coord: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/StackedColumns.html
             *
             * The plot object representing a stacked column chart (vertical bars).
             * 
             * @param chart The chart this plot belongs to.     
             * @param kwArgs       OptionalAn optional keyword arguments object to help define the plot.     
             */
            class StackedColumns extends dojox.charting.plot2d.Columns {
                constructor(chart: dojox.charting.Chart, kwArgs?: Object);
                /**
                 * 
                 */
                "baseParams": Object;
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * 
                 */
                "defaultParams": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Add a data series to this plot.
                 * 
                 * @param run The series to be added.             
                 */
                addSeries(run: dojox.charting.Series): any;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * 
                 * @param creator             
                 * @param noClip             
                 */
                cleanGroup(creator: any, noClip: any): void;
                /**
                 * Clear out all of the information tied to this plot.
                 * 
                 */
                clear(): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: String): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: Function): any;
                /**
                 * 
                 * @param group             
                 * @param value             
                 * @param bbox             
                 * @param theme             
                 */
                createLabel(group: any, value: any, bbox: any, theme: any): void;
                /**
                 * 
                 * @param run             
                 * @param creator             
                 * @param params             
                 */
                createRect(run: any, creator: any, params: any): any;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * Find out if any event handlers have been connected to our plotEvent.
                 * 
                 */
                events(): any;
                /**
                 * Emulates firing an event for a given data value (specified by
                 * an index) of a given series.
                 * 
                 * @param seriesName Series name.             
                 * @param eventName Event name to emulate.             
                 * @param index Valid data value index used to raise an event.             
                 * @param eventObject               OptionalOptional event object. Especially useful for synthetic events.Default: null.             
                 */
                fireEvent(seriesName: String, eventName: String, index: number, eventObject: Object): void;
                /**
                 * 
                 */
                getBarProperties(): Object;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get how many data series we have, so we know how many colors to use.
                 * 
                 */
                getRequiredColors(): any;
                /**
                 * Calculate the min/max on all attached series in both directions.
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * 
                 * @param value             
                 * @param index             
                 * @param seriesIndex             
                 * @param indexed             
                 */
                getValue(value: any, index: any, seriesIndex: any, indexed: any): Object;
                /**
                 * Initializes scalers using attached axes.
                 * 
                 * @param dim Size of a plot area in pixels as {width, height}.             
                 * @param stats Min/max of data in both directions as {hmin, hmax, vmin, vmax}.             
                 */
                initializeScalers(dim: Object, stats: Object): any;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Returns whether or not this plot needs to be rendered.
                 * 
                 */
                isDirty(): any;
                /**
                 * Create/alter any zooming windows on this plot.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                performZoom(dim: Object, offsets: Object): any;
                /**
                 * Stub function for use by specific plots.
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                plotEvent(o: Object): void;
                /**
                 * 
                 */
                purgeGroup(): void;
                /**
                 * Raises events in predefined order
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                raiseEvent(o: Object): void;
                /**
                 * Run the calculations for any axes for this plot.
                 * 
                 * @param dim An object in the form of { width, height }             
                 * @param offsets An object of the form { l, r, t, b}.             
                 */
                render(dim: Object, offsets: Object): any;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Reset all events attached to our plotEvent (i.e. disconnect).
                 * 
                 */
                resetEvents(): void;
                /**
                 * Set an axis for this plot.
                 * 
                 * @param axis The axis to set.             
                 */
                setAxis(axis: dojox.charting.axis2d.Base): any;
                /**
                 * Compute plot axis data coordinates from page coordinates.
                 * 
                 * @param coord The pixel coordinate in page coordinate space. That is of the following form:{ x: 50, y: 200 }If not provided return the tranform method instead of the result of the transformation.             
                 */
                toData(coord: Object): any;
                /**
                 * Compute page coordinates from plot axis data coordinates.
                 * 
                 * @param coord               OptionalThe coordinates in plot axis data coordinate space. For cartesian charts that is of the following form:{ hAxisName: 50, vAxisName: 200 }If not provided return the transform method instead of the result of the transformation.             
                 */
                toPage(coord: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/StackedLines.html
             *
             * A convenience object to create a stacked line chart.
             * 
             */
            class StackedLines extends dojox.charting.plot2d.Stacked {
                constructor();
                /**
                 * 
                 */
                "baseParams": Object;
                /**
                 * The parent chart for this element.
                 * 
                 */
                "chart": Object;
                /**
                 * The default parameters of this plot.
                 * 
                 */
                "defaultParams": Object;
                /**
                 * A flag indicating whether or not this element needs to be rendered.
                 * 
                 */
                "dirty": boolean;
                /**
                 * The visual GFX group representing this element.
                 * 
                 */
                "group": Object;
                /**
                 * Any DOMNodes used as a part of this element (such as HTML-based labels).
                 * 
                 */
                "htmlElement": any[];
                /**
                 * 
                 */
                "htmlElements": Object;
                /**
                 * The optional parameters of this plot.
                 * 
                 */
                "optionalParams": Object;
                /**
                 * Add a data series to this plot.
                 * 
                 * @param run The series to be added.             
                 */
                addSeries(run: dojox.charting.Series): any;
                /**
                 * From an array of axes pick the ones that correspond to this plot and
                 * assign them to the plot using setAxis method.
                 * 
                 * @param axes An array of dojox/charting/axis2d/Base             
                 */
                assignAxes(axes: any[]): void;
                /**
                 * 
                 * @param i             
                 * @param indexed             
                 */
                buildSegments(i: any, indexed: any): any[];
                /**
                 * Stub function for running the axis calculations (deprecated).
                 * 
                 * @param dim An object of the form { width, height }             
                 */
                calculateAxes(dim: Object): any;
                /**
                 * 
                 * @param creator             
                 * @param noClip             
                 */
                cleanGroup(creator: any, noClip: any): void;
                /**
                 * Clear out all of the information tied to this plot.
                 * 
                 */
                clear(): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: String): any;
                /**
                 * Helper function to connect any object's method to our plotEvent.
                 * 
                 * @param object The object to connect to.             
                 * @param method The method to fire when our plotEvent is fired.             
                 */
                connect(object: Object, method: Function): any;
                /**
                 * 
                 * @param group             
                 * @param value             
                 * @param bbox             
                 * @param theme             
                 */
                createLabel(group: any, value: any, bbox: any, theme: any): void;
                /**
                 * 
                 * @param run             
                 * @param creator             
                 * @param params             
                 */
                createPath(run: any, creator: any, params: any): any;
                /**
                 * API addition to conform to the rest of the Dojo Toolkit's standard.
                 * 
                 */
                destroy(): void;
                /**
                 * Destroy any DOMNodes that may have been created as a part of this element.
                 * 
                 */
                destroyHtmlElements(): void;
                /**
                 * Find out if any event handlers have been connected to our plotEvent.
                 * 
                 */
                events(): any;
                /**
                 * Emulates firing an event for a given data value (specified by
                 * an index) of a given series.
                 * 
                 * @param seriesName Series name.             
                 * @param eventName Event name to emulate.             
                 * @param index Valid data value index used to raise an event.             
                 * @param eventObject               OptionalOptional event object. Especially useful for synthetic events.Default: null.             
                 */
                fireEvent(seriesName: String, eventName: String, index: number, eventObject: Object): void;
                /**
                 * 
                 */
                getGroup(): any;
                /**
                 * Get how many data series we have, so we know how many colors to use.
                 * 
                 */
                getRequiredColors(): any;
                /**
                 * Calculate the min/max on all attached series in both directions.
                 * 
                 */
                getSeriesStats(): any;
                /**
                 * 
                 * @param s             
                 * @param font             
                 */
                getTextWidth(s: any, font: any): number;
                /**
                 * Get the truncated string based on the limited character count(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param wcLimit               Optionaltext limited character count.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
                /**
                 * Get the truncated string based on the limited width in px(dichotomy algorithm)
                 * 
                 * @param s               Optionalcandidate text.             
                 * @param font               Optionaltext's font style.             
                 * @param limitWidth               Optionaltext limited width in px.             
                 * @param truncated               Optionalwhether the input text(s) has already been truncated.             
                 */
                getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
                /**
                 * Initializes scalers using attached axes.
                 * 
                 * @param dim Size of a plot area in pixels as {width, height}.             
                 * @param stats Min/max of data in both directions as {hmin, hmax, vmin, vmax}.             
                 */
                initializeScalers(dim: Object, stats: Object): any;
                /**
                 * Returns whether or not any of this plot's data series need to be rendered.
                 * 
                 */
                isDataDirty(): any;
                /**
                 * Returns whether or not this plot needs to be rendered.
                 * 
                 */
                isDirty(): any;
                /**
                 * Create/alter any zooming windows on this plot.
                 * 
                 * @param dim An object of the form { width, height }.             
                 * @param offsets An object of the form { l, r, t, b }.             
                 */
                performZoom(dim: Object, offsets: Object): any;
                /**
                 * Stub function for use by specific plots.
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                plotEvent(o: Object): void;
                /**
                 * 
                 */
                purgeGroup(): void;
                /**
                 * Raises events in predefined order
                 * 
                 * @param o An object intended to represent event parameters.             
                 */
                raiseEvent(o: Object): void;
                /**
                 * Render/draw everything on this plot.
                 * 
                 * @param dim An object of the form { width, height }             
                 * @param offsets An object of the form { l, r, t, b }             
                 */
                render(dim: Object, offsets: Object): any;
                /**
                 * 
                 * @param group             
                 * @param x             
                 * @param y             
                 * @param label             
                 * @param theme             
                 * @param block             
                 * @param align             
                 */
                renderLabel(group: any, x: any, y: any, label: any, theme: any, block: any, align: any): any;
                /**
                 * Reset all events attached to our plotEvent (i.e. disconnect).
                 * 
                 */
                resetEvents(): void;
                /**
                 * Set an axis for this plot.
                 * 
                 * @param axis The axis to set.             
                 */
                setAxis(axis: dojox.charting.axis2d.Base): any;
                /**
                 * Compute plot axis data coordinates from page coordinates.
                 * 
                 * @param coord The pixel coordinate in page coordinate space. That is of the following form:{ x: 50, y: 200 }If not provided return the tranform method instead of the result of the transformation.             
                 */
                toData(coord: Object): any;
                /**
                 * Compute page coordinates from plot axis data coordinates.
                 * 
                 * @param coord               OptionalThe coordinates in plot axis data coordinate space. For cartesian charts that is of the following form:{ hAxisName: 50, vAxisName: 200 }If not provided return the transform method instead of the result of the transformation.             
                 */
                toPage(coord: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/common.html
             *
             * 
             */
            interface common {
                /**
                 * 
                 */
                defaultStats: Object;
                /**
                 * 
                 * @param target             
                 * @param color             
                 */
                augmentColor(target: any, color: any): any;
                /**
                 * 
                 * @param fill             
                 * @param color             
                 */
                augmentFill(fill: any, color: any): any;
                /**
                 * 
                 * @param stroke             
                 * @param color             
                 */
                augmentStroke(stroke: any, color: any): any;
                /**
                 * 
                 * @param availableSize             
                 * @param opt             
                 * @param clusterSize               Optional            
                 */
                calculateBarSize(availableSize: number, opt: Object, clusterSize: number): Object;
                /**
                 * 
                 * @param series             
                 */
                collectSimpleStats(series: any): any;
                /**
                 * 
                 * @param series             
                 */
                collectStackedStats(series: any): any;
                /**
                 * 
                 * @param a             
                 * @param tension             
                 */
                curve(a: number[], tension: number): any;
                /**
                 * 
                 * @param a             
                 * @param tension             
                 */
                curve(a: number[], tension: String): any;
                /**
                 * 
                 * @param moduleName             
                 * @param ifloaded             
                 * @param ifnotloaded             
                 */
                doIfLoaded(moduleName: any, ifloaded: any, ifnotloaded: any): any;
                /**
                 * 
                 * @param number             
                 * @param fixed             
                 * @param precision             
                 */
                getLabel(number: number, fixed: boolean, precision: number): any;
                /**
                 * 
                 * @param stroke             
                 */
                makeStroke(stroke: any): any;
            }
            module common {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/common.defaultStats.html
                 *
                 * 
                 */
                interface defaultStats {
                    /**
                     * 
                     */
                    hmax: Object;
                    /**
                     * 
                     */
                    hmin: Object;
                    /**
                     * 
                     */
                    vmax: Object;
                    /**
                     * 
                     */
                    vmin: Object;
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot2d/commonStacked.html
             *
             * 
             */
            interface commonStacked {
                /**
                 * 
                 * @param series             
                 */
                collectStats(series: any): any;
                /**
                 * 
                 * @param series             
                 * @param i             
                 * @param index             
                 */
                getIndexValue(series: any, i: any, index: any): any[];
                /**
                 * 
                 * @param series             
                 * @param i             
                 * @param x             
                 */
                getValue(series: any, i: any, x: any): any[];
            }
        }

        module plot3d {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot3d/Bars.html
             *
             * 
             * @param width     
             * @param height     
             * @param kwArgs     
             */
            class Bars extends dojox.charting.plot3d.Base {
                constructor(width: any, height: any, kwArgs: any);
                /**
                 * 
                 * @param chart             
                 * @param creator             
                 */
                generate(chart: any, creator: any): Function;
                /**
                 * 
                 */
                getDepth(): any;
                /**
                 * 
                 * @param data             
                 */
                setData(data: any): Function;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot3d/Base.html
             *
             * 
             * @param width     
             * @param height     
             * @param kwArgs     
             */
            class Base {
                constructor(width: any, height: any, kwArgs: any);
                /**
                 * 
                 * @param chart             
                 * @param creator             
                 */
                generate(chart: any, creator: any): void;
                /**
                 * 
                 */
                getDepth(): any;
                /**
                 * 
                 * @param data             
                 */
                setData(data: any): Function;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/plot3d/Cylinders.html
             *
             * 
             * @param width     
             * @param height     
             * @param kwArgs     
             */
            class Cylinders extends dojox.charting.plot3d.Base {
                constructor(width: any, height: any, kwArgs: any);
                /**
                 * 
                 * @param chart             
                 * @param creator             
                 */
                generate(chart: any, creator: any): Function;
                /**
                 * 
                 */
                getDepth(): any;
                /**
                 * 
                 * @param data             
                 */
                setData(data: any): Function;
            }
        }

        module scaler {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/scaler/common.html
             *
             * 
             */
            interface common {
                /**
                 * 
                 * @param moduleName             
                 * @param ifloaded             
                 * @param ifnotloaded             
                 */
                doIfLoaded(moduleName: any, ifloaded: any, ifnotloaded: any): any;
                /**
                 * 
                 * @param number             
                 * @param precision             
                 * @param kwArgs             
                 */
                getNumericLabel(number: number, precision: number, kwArgs: Object): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/scaler/linear.html
             *
             * 
             */
            interface linear {
                /**
                 * 
                 * @param min             
                 * @param max             
                 * @param span             
                 * @param kwArgs             
                 * @param delta               Optional            
                 * @param minorDelta               Optional            
                 */
                buildScaler(min: number, max: number, span: number, kwArgs: Object, delta: number, minorDelta: number): any;
                /**
                 * 
                 * @param scaler             
                 * @param kwArgs             
                 */
                buildTicks(scaler: Object, kwArgs: Object): any;
                /**
                 * 
                 * @param scaler             
                 */
                getTransformerFromModel(scaler: Object): Function;
                /**
                 * 
                 * @param scaler             
                 */
                getTransformerFromPlot(scaler: Object): Function;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/scaler/primitive.html
             *
             * 
             */
            interface primitive {
                /**
                 * 
                 * @param min             
                 * @param max             
                 * @param span             
                 * @param kwArgs             
                 */
                buildScaler(min: number, max: number, span: number, kwArgs: Object): Object;
                /**
                 * 
                 * @param scaler             
                 * @param kwArgs             
                 */
                buildTicks(scaler: Object, kwArgs: Object): Object;
                /**
                 * 
                 * @param scaler             
                 */
                getTransformerFromModel(scaler: Object): Function;
                /**
                 * 
                 * @param scaler             
                 */
                getTransformerFromPlot(scaler: Object): Function;
            }
        }

        module themes {
            module PlotKit {
                module blue {
                }

                module cyan {
                }

                module green {
                }

                module orange {
                }

                module purple {
                }

                module red {
                }

                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/themes/PlotKit/base.html
                 *
                 * 
                 */
                interface base {
                    /**
                     * 
                     */
                    Adobebricks: Object;
                    /**
                     * 
                     */
                    Algae: Object;
                    /**
                     * 
                     */
                    Bahamation: Object;
                    /**
                     * 
                     */
                    base: Object;
                    /**
                     * 
                     */
                    blue: Object;
                    /**
                     * 
                     */
                    BlueDusk: Object;
                    /**
                     * 
                     */
                    Charged: Object;
                    /**
                     * 
                     */
                    Chris: Object;
                    /**
                     * 
                     */
                    Claro: Object;
                    /**
                     * 
                     */
                    CubanShirts: Object;
                    /**
                     * 
                     */
                    cyan: Object;
                    /**
                     * 
                     */
                    Desert: Object;
                    /**
                     * 
                     */
                    Distinctive: Object;
                    /**
                     * 
                     */
                    Dollar: Object;
                    /**
                     * 
                     */
                    Electric: Object;
                    /**
                     * 
                     */
                    Grasshopper: Object;
                    /**
                     * 
                     */
                    Grasslands: Object;
                    /**
                     * 
                     */
                    green: Object;
                    /**
                     * 
                     */
                    GreySkies: Object;
                    /**
                     * 
                     */
                    Harmony: Object;
                    /**
                     * 
                     */
                    IndigoNation: Object;
                    /**
                     * 
                     */
                    Ireland: Object;
                    /**
                     * 
                     */
                    Julie: Object;
                    /**
                     * 
                     */
                    MiamiNice: Object;
                    /**
                     * 
                     */
                    Midwest: Object;
                    /**
                     * 
                     */
                    Minty: Object;
                    /**
                     * 
                     */
                    orange: Object;
                    /**
                     * 
                     */
                    PrimaryColors: Object;
                    /**
                     * 
                     */
                    purple: Object;
                    /**
                     * 
                     */
                    PurpleRain: Object;
                    /**
                     * 
                     */
                    red: Object;
                    /**
                     * 
                     */
                    Renkoo: Object;
                    /**
                     * 
                     */
                    RoyalPurples: Object;
                    /**
                     * 
                     */
                    SageToLime: Object;
                    /**
                     * 
                     */
                    Shrooms: Object;
                    /**
                     * 
                     */
                    Tom: Object;
                    /**
                     * 
                     */
                    Tufte: Object;
                    /**
                     * 
                     */
                    WatersEdge: Object;
                    /**
                     * 
                     */
                    Wetland: Object;
                    /**
                     * generates 2-color gradients using pure colors, a fill pattern, and two luminance values
                     * 
                     * @param colors Array of colors to generate gradients for each.             
                     * @param fillPattern Gradient fill descriptor which colors list will be generated.             
                     * @param lumFrom Initial luminance value (0-100).             
                     * @param lumTo Final luminance value (0-100).             
                     */
                    generateFills(colors: any[], fillPattern: Object, lumFrom: number, lumTo: number): void;
                    /**
                     * generates gradient colors using an intensity map
                     * 
                     * @param color Color to use to generate gradients.             
                     * @param intensityMap Array of tuples {o, i}, where o is a gradient offset (0-1),and i is an intensity (0-255).             
                     */
                    generateGradientByIntensity(color: dojo._base.Color, intensityMap: any[]): void;
                    /**
                     * generates mini-themes with 2-color gradients using colors, a fill pattern, and three luminance values
                     * 
                     * @param colors Array of colors to generate gradients for each.             
                     * @param fillPattern Gradient fill descriptor which colors list will be generated.             
                     * @param lumFrom Initial luminance value (0-100).             
                     * @param lumTo Final luminance value (0-100).             
                     * @param lumStroke Stroke luminance value (0-100).             
                     */
                    generateMiniTheme(colors: any[], fillPattern: Object, lumFrom: number, lumTo: number, lumStroke: number): void;
                    /**
                     * transforms solid color fills into 2-color gradients using a fill pattern, and two luminance values
                     * 
                     * @param themes Array of mini-themes (usually series themes or marker themes), which fill will be transformed.             
                     * @param fillPattern Gradient fill descriptor which colors list will be generated.             
                     * @param lumFrom Initial luminance value (0-100).             
                     * @param lumTo Final luminance value (0-100).             
                     */
                    updateFills(themes: any[], fillPattern: Object, lumFrom: number, lumTo: number): void;
                }
            }

            module ThreeD {
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/themes/common.html
             *
             * 
             */
            interface common {
                /**
                 * 
                 */
                Adobebricks: Object;
                /**
                 * 
                 */
                Algae: Object;
                /**
                 * 
                 */
                Bahamation: Object;
                /**
                 * 
                 */
                base: Object;
                /**
                 * 
                 */
                blue: Object;
                /**
                 * 
                 */
                BlueDusk: Object;
                /**
                 * 
                 */
                Charged: Object;
                /**
                 * 
                 */
                Chris: Object;
                /**
                 * 
                 */
                Claro: Object;
                /**
                 * 
                 */
                CubanShirts: Object;
                /**
                 * 
                 */
                cyan: Object;
                /**
                 * 
                 */
                Desert: Object;
                /**
                 * 
                 */
                Distinctive: Object;
                /**
                 * 
                 */
                Dollar: Object;
                /**
                 * 
                 */
                Electric: Object;
                /**
                 * 
                 */
                Grasshopper: Object;
                /**
                 * 
                 */
                Grasslands: Object;
                /**
                 * 
                 */
                green: Object;
                /**
                 * 
                 */
                GreySkies: Object;
                /**
                 * 
                 */
                Harmony: Object;
                /**
                 * 
                 */
                IndigoNation: Object;
                /**
                 * 
                 */
                Ireland: Object;
                /**
                 * 
                 */
                Julie: Object;
                /**
                 * 
                 */
                MiamiNice: Object;
                /**
                 * 
                 */
                Midwest: Object;
                /**
                 * 
                 */
                Minty: Object;
                /**
                 * 
                 */
                orange: Object;
                /**
                 * 
                 */
                PrimaryColors: Object;
                /**
                 * 
                 */
                purple: Object;
                /**
                 * 
                 */
                PurpleRain: Object;
                /**
                 * 
                 */
                red: Object;
                /**
                 * 
                 */
                Renkoo: Object;
                /**
                 * 
                 */
                RoyalPurples: Object;
                /**
                 * 
                 */
                SageToLime: Object;
                /**
                 * 
                 */
                Shrooms: Object;
                /**
                 * 
                 */
                Tom: Object;
                /**
                 * 
                 */
                Tufte: Object;
                /**
                 * 
                 */
                WatersEdge: Object;
                /**
                 * 
                 */
                Wetland: Object;
                /**
                 * generates 2-color gradients using pure colors, a fill pattern, and two luminance values
                 * 
                 * @param colors Array of colors to generate gradients for each.             
                 * @param fillPattern Gradient fill descriptor which colors list will be generated.             
                 * @param lumFrom Initial luminance value (0-100).             
                 * @param lumTo Final luminance value (0-100).             
                 */
                generateFills(colors: any[], fillPattern: Object, lumFrom: number, lumTo: number): void;
                /**
                 * generates gradient colors using an intensity map
                 * 
                 * @param color Color to use to generate gradients.             
                 * @param intensityMap Array of tuples {o, i}, where o is a gradient offset (0-1),and i is an intensity (0-255).             
                 */
                generateGradientByIntensity(color: dojo._base.Color, intensityMap: any[]): void;
                /**
                 * generates mini-themes with 2-color gradients using colors, a fill pattern, and three luminance values
                 * 
                 * @param colors Array of colors to generate gradients for each.             
                 * @param fillPattern Gradient fill descriptor which colors list will be generated.             
                 * @param lumFrom Initial luminance value (0-100).             
                 * @param lumTo Final luminance value (0-100).             
                 * @param lumStroke Stroke luminance value (0-100).             
                 */
                generateMiniTheme(colors: any[], fillPattern: Object, lumFrom: number, lumTo: number, lumStroke: number): void;
                /**
                 * transforms solid color fills into 2-color gradients using a fill pattern, and two luminance values
                 * 
                 * @param themes Array of mini-themes (usually series themes or marker themes), which fill will be transformed.             
                 * @param fillPattern Gradient fill descriptor which colors list will be generated.             
                 * @param lumFrom Initial luminance value (0-100).             
                 * @param lumTo Final luminance value (0-100).             
                 */
                updateFills(themes: any[], fillPattern: Object, lumFrom: number, lumTo: number): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/themes/gradientGenerator.html
             *
             * 
             */
            interface gradientGenerator {
                /**
                 * 
                 */
                Adobebricks: Object;
                /**
                 * 
                 */
                Algae: Object;
                /**
                 * 
                 */
                Bahamation: Object;
                /**
                 * 
                 */
                base: Object;
                /**
                 * 
                 */
                blue: Object;
                /**
                 * 
                 */
                BlueDusk: Object;
                /**
                 * 
                 */
                Charged: Object;
                /**
                 * 
                 */
                Chris: Object;
                /**
                 * 
                 */
                Claro: Object;
                /**
                 * 
                 */
                CubanShirts: Object;
                /**
                 * 
                 */
                cyan: Object;
                /**
                 * 
                 */
                Desert: Object;
                /**
                 * 
                 */
                Distinctive: Object;
                /**
                 * 
                 */
                Dollar: Object;
                /**
                 * 
                 */
                Electric: Object;
                /**
                 * 
                 */
                Grasshopper: Object;
                /**
                 * 
                 */
                Grasslands: Object;
                /**
                 * 
                 */
                green: Object;
                /**
                 * 
                 */
                GreySkies: Object;
                /**
                 * 
                 */
                Harmony: Object;
                /**
                 * 
                 */
                IndigoNation: Object;
                /**
                 * 
                 */
                Ireland: Object;
                /**
                 * 
                 */
                Julie: Object;
                /**
                 * 
                 */
                MiamiNice: Object;
                /**
                 * 
                 */
                Midwest: Object;
                /**
                 * 
                 */
                Minty: Object;
                /**
                 * 
                 */
                orange: Object;
                /**
                 * 
                 */
                PrimaryColors: Object;
                /**
                 * 
                 */
                purple: Object;
                /**
                 * 
                 */
                PurpleRain: Object;
                /**
                 * 
                 */
                red: Object;
                /**
                 * 
                 */
                Renkoo: Object;
                /**
                 * 
                 */
                RoyalPurples: Object;
                /**
                 * 
                 */
                SageToLime: Object;
                /**
                 * 
                 */
                Shrooms: Object;
                /**
                 * 
                 */
                Tom: Object;
                /**
                 * 
                 */
                Tufte: Object;
                /**
                 * 
                 */
                WatersEdge: Object;
                /**
                 * 
                 */
                Wetland: Object;
                /**
                 * generates 2-color gradients using pure colors, a fill pattern, and two luminance values
                 * 
                 * @param colors Array of colors to generate gradients for each.             
                 * @param fillPattern Gradient fill descriptor which colors list will be generated.             
                 * @param lumFrom Initial luminance value (0-100).             
                 * @param lumTo Final luminance value (0-100).             
                 */
                generateFills(colors: any[], fillPattern: Object, lumFrom: number, lumTo: number): void;
                /**
                 * generates gradient colors using an intensity map
                 * 
                 * @param color Color to use to generate gradients.             
                 * @param intensityMap Array of tuples {o, i}, where o is a gradient offset (0-1),and i is an intensity (0-255).             
                 */
                generateGradientByIntensity(color: dojo._base.Color, intensityMap: any[]): void;
                /**
                 * generates mini-themes with 2-color gradients using colors, a fill pattern, and three luminance values
                 * 
                 * @param colors Array of colors to generate gradients for each.             
                 * @param fillPattern Gradient fill descriptor which colors list will be generated.             
                 * @param lumFrom Initial luminance value (0-100).             
                 * @param lumTo Final luminance value (0-100).             
                 * @param lumStroke Stroke luminance value (0-100).             
                 */
                generateMiniTheme(colors: any[], fillPattern: Object, lumFrom: number, lumTo: number, lumStroke: number): void;
                /**
                 * transforms solid color fills into 2-color gradients using a fill pattern, and two luminance values
                 * 
                 * @param themes Array of mini-themes (usually series themes or marker themes), which fill will be transformed.             
                 * @param fillPattern Gradient fill descriptor which colors list will be generated.             
                 * @param lumFrom Initial luminance value (0-100).             
                 * @param lumTo Final luminance value (0-100).             
                 */
                updateFills(themes: any[], fillPattern: Object, lumFrom: number, lumTo: number): void;
            }
        }

        module widget {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/widget/Chart.html
             *
             * A chart widget.  This is leveraging dojox/charting/Chart as a Dijit widget.
             * 
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
             */
            class Chart extends dijit._WidgetBase {
                constructor(params?: Object, srcNodeRef?: HTMLElement);
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
                 * The margins around the chart. Default is { l:10, t:10, r:10, b:10 }.
                 * 
                 */
                "margins": Object;
                set(property:"margins", value: Object): void;
                get(property:"margins"): Object;
                watch(property:"margins", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                 * An optional theme to use for styling the chart.
                 * 
                 */
                "theme": Object;
                set(property:"theme", value: Object): void;
                get(property:"theme"): Object;
                watch(property:"theme", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                 * properly destroy the widget
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
                 * The color for the chart.
                 * An object with the following properties:type (String?, optional): The type of fill. One of 'linear', 'radial', 'pattern' or undefined. If not specified, a solid fill is assumed.
                 * color (String|dojo/Color?, optional): The color of a solid fill type.
                 * 
                 */
                fill(): any;
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
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 * 
                 * @param type Name of event (ex: "click") or extension event like touch.press.             
                 * @param func             
                 */
                on(type: String, func: Function): any;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 * 
                 * @param type Name of event (ex: "click") or extension event like touch.press.             
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
                 * Processing after the DOM fragment is created
                 * Called after the DOM fragment has been created, but not necessarily
                 * added to the document.  Do not include any operations which rely on
                 * node dimensions or placement.
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
                 * Resize the widget.
                 * Resize the domNode and the widget surface to the dimensions of a box of the following form:
                 * { l: 50, t: 200, w: 300: h: 150 }
                 * If no box is provided, resize the surface to the marginBox of the domNode.
                 * 
                 * @param box If passed, denotes the new size of the widget.             
                 */
                resize(box: any): void;
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
                 * The outline of the chart (stroke in vector graphics terms).
                 * An object with the following properties:color (String): The color of the stroke, default value 'black'.
                 * style (String): The style of the stroke, one of 'solid', ... . Default value 'solid'.
                 * width (Number): The width of a stroke, default value 1.
                 * cap (String): The endcap style of the path. One of 'butt', 'round', ... . Default value 'butt'.
                 * join (Number): The join style to use when combining path segments. Default value 4.
                 * 
                 */
                stroke(): any;
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
                 * Called when the widget stops being "active" because
                 * focus moved to something outside of it, or the user
                 * clicked somewhere outside of it, or the widget was
                 * hidden.
                 * 
                 */
                onBlur(): void;
                /**
                 * Called when the widget becomes "active" because
                 * it or a widget inside of it either has focus, or has recently
                 * been clicked.
                 * 
                 */
                onFocus(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/widget/Chart2D.html
             *
             * A chart widget.  This is leveraging dojox/charting/Chart as a Dijit widget.
             * 
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
             */
            class Chart2D extends dijit._WidgetBase {
                constructor(params?: Object, srcNodeRef?: HTMLElement);
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
                 * The margins around the chart. Default is { l:10, t:10, r:10, b:10 }.
                 * 
                 */
                "margins": Object;
                set(property:"margins", value: Object): void;
                get(property:"margins"): Object;
                watch(property:"margins", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                 * An optional theme to use for styling the chart.
                 * 
                 */
                "theme": Object;
                set(property:"theme", value: Object): void;
                get(property:"theme"): Object;
                watch(property:"theme", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                 * properly destroy the widget
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
                 * The color for the chart.
                 * An object with the following properties:type (String?, optional): The type of fill. One of 'linear', 'radial', 'pattern' or undefined. If not specified, a solid fill is assumed.
                 * color (String|dojo/Color?, optional): The color of a solid fill type.
                 * 
                 */
                fill(): any;
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
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 * 
                 * @param type Name of event (ex: "click") or extension event like touch.press.             
                 * @param func             
                 */
                on(type: String, func: Function): any;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 * 
                 * @param type Name of event (ex: "click") or extension event like touch.press.             
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
                 * Processing after the DOM fragment is created
                 * Called after the DOM fragment has been created, but not necessarily
                 * added to the document.  Do not include any operations which rely on
                 * node dimensions or placement.
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
                 * Resize the widget.
                 * Resize the domNode and the widget surface to the dimensions of a box of the following form:
                 * { l: 50, t: 200, w: 300: h: 150 }
                 * If no box is provided, resize the surface to the marginBox of the domNode.
                 * 
                 * @param box If passed, denotes the new size of the widget.             
                 */
                resize(box: any): void;
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
                 * The outline of the chart (stroke in vector graphics terms).
                 * An object with the following properties:color (String): The color of the stroke, default value 'black'.
                 * style (String): The style of the stroke, one of 'solid', ... . Default value 'solid'.
                 * width (Number): The width of a stroke, default value 1.
                 * cap (String): The endcap style of the path. One of 'butt', 'round', ... . Default value 'butt'.
                 * join (Number): The join style to use when combining path segments. Default value 4.
                 * 
                 */
                stroke(): any;
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
                 * Called when the widget stops being "active" because
                 * focus moved to something outside of it, or the user
                 * clicked somewhere outside of it, or the widget was
                 * hidden.
                 * 
                 */
                onBlur(): void;
                /**
                 * Called when the widget becomes "active" because
                 * it or a widget inside of it either has focus, or has recently
                 * been clicked.
                 * 
                 */
                onFocus(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/widget/Legend.html
             *
             * A legend for a chart. A legend contains summary labels for
             * each series of data contained in the chart.
             * 
             * Set the horizontal attribute to boolean false to layout legend labels vertically.
             * Set the horizontal attribute to a number to layout legend labels in horizontal
             * rows each containing that number of labels (except possibly the last row).
             * 
             * (Line or Scatter charts (colored lines with shape symbols) )
             * -o- Series1     -X- Series2     -v- Series3
             * 
             * (Area/Bar/Pie charts (letters represent colors))
             * [a] Series1     [b] Series2     [c] Series3
             * 
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
             */
            class Legend extends dijit._WidgetBase {
                constructor(params?: Object, srcNodeRef?: HTMLElement);
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
                "chartRef": string;
                set(property:"chartRef", value: string): void;
                get(property:"chartRef"): string;
                watch(property:"chartRef", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                 * 
                 */
                "horizontal": boolean;
                set(property:"horizontal", value: boolean): void;
                get(property:"horizontal"): boolean;
                watch(property:"horizontal", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                "legendBody": Object;
                set(property:"legendBody", value: Object): void;
                get(property:"legendBody"): Object;
                watch(property:"legendBody", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                 * 
                 */
                "swatchSize": number;
                set(property:"swatchSize", value: number): void;
                get(property:"swatchSize"): number;
                watch(property:"swatchSize", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 * 
                 * @param type Name of event (ex: "click") or extension event like touch.press.             
                 * @param func             
                 */
                on(type: String, func: Function): any;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 * 
                 * @param type Name of event (ex: "click") or extension event like touch.press.             
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
                 * regenerates the legend to reflect changes to the chart
                 * 
                 */
                refresh(): void;
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
                 * Called when the widget stops being "active" because
                 * focus moved to something outside of it, or the user
                 * clicked somewhere outside of it, or the widget was
                 * hidden.
                 * 
                 */
                onBlur(): void;
                /**
                 * Called when the widget becomes "active" because
                 * it or a widget inside of it either has focus, or has recently
                 * been clicked.
                 * 
                 */
                onFocus(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/charting/widget/SelectableLegend.html
             *
             * An enhanced chart legend supporting interactive events on data series
             * 
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
             */
            class SelectableLegend extends dojox.charting.widget.Legend {
                constructor(params?: Object, srcNodeRef?: HTMLElement);
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
                "chartRef": string;
                set(property:"chartRef", value: string): void;
                get(property:"chartRef"): string;
                watch(property:"chartRef", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
                 * 
                 */
                "horizontal": boolean;
                set(property:"horizontal", value: boolean): void;
                get(property:"horizontal"): boolean;
                watch(property:"horizontal", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                "legendBody": Object;
                set(property:"legendBody", value: Object): void;
                get(property:"legendBody"): Object;
                watch(property:"legendBody", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * 
                 */
                "outline": boolean;
                set(property:"outline", value: boolean): void;
                get(property:"outline"): boolean;
                watch(property:"outline", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                 * 
                 */
                "swatchSize": number;
                set(property:"swatchSize", value: number): void;
                get(property:"swatchSize"): number;
                watch(property:"swatchSize", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
                "transitionFill": Object;
                set(property:"transitionFill", value: Object): void;
                get(property:"transitionFill"): Object;
                watch(property:"transitionFill", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * 
                 */
                "transitionStroke": Object;
                set(property:"transitionStroke", value: Object): void;
                get(property:"transitionStroke"): Object;
                watch(property:"transitionStroke", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 * 
                 * @param type Name of event (ex: "click") or extension event like touch.press.             
                 * @param func             
                 */
                on(type: String, func: Function): any;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 * 
                 * @param type Name of event (ex: "click") or extension event like touch.press.             
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
                 * 
                 */
                refresh(): void;
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
                 * Called when the widget stops being "active" because
                 * focus moved to something outside of it, or the user
                 * clicked somewhere outside of it, or the widget was
                 * hidden.
                 * 
                 */
                onBlur(): void;
                /**
                 * Called when the widget becomes "active" because
                 * it or a widget inside of it either has focus, or has recently
                 * been clicked.
                 * 
                 */
                onFocus(): void;
            }
            module BidiSupport {
            }

            module Sparkline {
            }

        }

    }

}

declare module "dojox/charting/Chart3D" {
    var exp: dojox.charting.Chart3D
    export=exp;
}
declare module "dojox/charting/Chart2D" {
    var exp: dojox.charting.Chart2D
    export=exp;
}
declare module "dojox/charting/DataSeries" {
    var exp: dojox.charting.DataSeries
    export=exp;
}
declare module "dojox/charting/Chart" {
    var exp: dojox.charting.Chart
    export=exp;
}
declare module "dojox/charting/DataChart" {
    var exp: dojox.charting.DataChart
    export=exp;
}
declare module "dojox/charting/Element" {
    var exp: dojox.charting.Element
    export=exp;
}
declare module "dojox/charting/Series" {
    var exp: dojox.charting.Series
    export=exp;
}
declare module "dojox/charting/StoreSeries" {
    var exp: dojox.charting.StoreSeries
    export=exp;
}
declare module "dojox/charting/SimpleTheme" {
    var exp: dojox.charting.SimpleTheme
    export=exp;
}
declare module "dojox/charting/SimpleTheme.defaultMarkers" {
    var exp: dojox.charting.SimpleTheme.defaultMarkers
    export=exp;
}
declare module "dojox/charting/SimpleTheme.defaultTheme" {
    var exp: dojox.charting.SimpleTheme.defaultTheme
    export=exp;
}
declare module "dojox/charting/Theme" {
    var exp: dojox.charting.Theme
    export=exp;
}
declare module "dojox/charting/Theme.defaultMarkers" {
    var exp: dojox.charting.Theme.defaultMarkers
    export=exp;
}
declare module "dojox/charting/Theme.defaultTheme" {
    var exp: dojox.charting.Theme.defaultTheme
    export=exp;
}
declare module "dojox/charting/action2d/Base" {
    var exp: dojox.charting.action2d.Base
    export=exp;
}
declare module "dojox/charting/action2d/ChartAction" {
    var exp: dojox.charting.action2d.ChartAction
    export=exp;
}
declare module "dojox/charting/action2d/_IndicatorElement" {
    var exp: dojox.charting.action2d._IndicatorElement
    export=exp;
}
declare module "dojox/charting/action2d/Highlight" {
    var exp: dojox.charting.action2d.Highlight
    export=exp;
}
declare module "dojox/charting/action2d/Magnify" {
    var exp: dojox.charting.action2d.Magnify
    export=exp;
}
declare module "dojox/charting/action2d/MouseZoomAndPan" {
    var exp: dojox.charting.action2d.MouseZoomAndPan
    export=exp;
}
declare module "dojox/charting/action2d/MouseIndicator" {
    var exp: dojox.charting.action2d.MouseIndicator
    export=exp;
}
declare module "dojox/charting/action2d/MoveSlice" {
    var exp: dojox.charting.action2d.MoveSlice
    export=exp;
}
declare module "dojox/charting/action2d/PlotAction" {
    var exp: dojox.charting.action2d.PlotAction
    export=exp;
}
declare module "dojox/charting/action2d/Tooltip" {
    var exp: dojox.charting.action2d.Tooltip
    export=exp;
}
declare module "dojox/charting/action2d/Shake" {
    var exp: dojox.charting.action2d.Shake
    export=exp;
}
declare module "dojox/charting/action2d/TouchZoomAndPan" {
    var exp: dojox.charting.action2d.TouchZoomAndPan
    export=exp;
}
declare module "dojox/charting/action2d/TouchIndicator" {
    var exp: dojox.charting.action2d.TouchIndicator
    export=exp;
}
declare module "dojox/charting/axis2d/common" {
    var exp: dojox.charting.axis2d.common
    export=exp;
}
declare module "dojox/charting/axis2d/common.createText" {
    var exp: dojox.charting.axis2d.common.createText
    export=exp;
}
declare module "dojox/charting/axis2d/Base" {
    var exp: dojox.charting.axis2d.Base
    export=exp;
}
declare module "dojox/charting/axis2d/Invisible" {
    var exp: dojox.charting.axis2d.Invisible
    export=exp;
}
declare module "dojox/charting/axis2d/Default" {
    var exp: dojox.charting.axis2d.Default
    export=exp;
}
declare module "dojox/charting/bidi/_bidiutils" {
    var exp: dojox.charting.bidi._bidiutils
    export=exp;
}
declare module "dojox/charting/bidi/Chart" {
    var exp: dojox.charting.bidi.Chart
    export=exp;
}
declare module "dojox/charting/bidi/Chart3D" {
    var exp: dojox.charting.bidi.Chart3D
    export=exp;
}
declare module "dojox/charting/bidi/action2d/Tooltip" {
    var exp: dojox.charting.bidi.action2d.Tooltip
    export=exp;
}
declare module "dojox/charting/bidi/action2d/ZoomAndPan" {
    var exp: dojox.charting.bidi.action2d.ZoomAndPan
    export=exp;
}
declare module "dojox/charting/bidi/axis2d/Default" {
    var exp: dojox.charting.bidi.axis2d.Default
    export=exp;
}
declare module "dojox/charting/bidi/widget/Chart" {
    var exp: dojox.charting.bidi.widget.Chart
    export=exp;
}
declare module "dojox/charting/bidi/widget/Legend" {
    var exp: dojox.charting.bidi.widget.Legend
    export=exp;
}
declare module "dojox/charting/plot2d/common" {
    var exp: dojox.charting.plot2d.common
    export=exp;
}
declare module "dojox/charting/plot2d/common.defaultStats" {
    var exp: dojox.charting.plot2d.common.defaultStats
    export=exp;
}
declare module "dojox/charting/plot2d/commonStacked" {
    var exp: dojox.charting.plot2d.commonStacked
    export=exp;
}
declare module "dojox/charting/plot2d/_PlotEvents" {
    var exp: dojox.charting.plot2d._PlotEvents
    export=exp;
}
declare module "dojox/charting/plot2d/Areas" {
    var exp: dojox.charting.plot2d.Areas
    export=exp;
}
declare module "dojox/charting/plot2d/Bars" {
    var exp: dojox.charting.plot2d.Bars
    export=exp;
}
declare module "dojox/charting/plot2d/Base" {
    var exp: dojox.charting.plot2d.Base
    export=exp;
}
declare module "dojox/charting/plot2d/Bubble" {
    var exp: dojox.charting.plot2d.Bubble
    export=exp;
}
declare module "dojox/charting/plot2d/CartesianBase" {
    var exp: dojox.charting.plot2d.CartesianBase
    export=exp;
}
declare module "dojox/charting/plot2d/Candlesticks" {
    var exp: dojox.charting.plot2d.Candlesticks
    export=exp;
}
declare module "dojox/charting/plot2d/ClusteredBars" {
    var exp: dojox.charting.plot2d.ClusteredBars
    export=exp;
}
declare module "dojox/charting/plot2d/ClusteredColumns" {
    var exp: dojox.charting.plot2d.ClusteredColumns
    export=exp;
}
declare module "dojox/charting/plot2d/Columns" {
    var exp: dojox.charting.plot2d.Columns
    export=exp;
}
declare module "dojox/charting/plot2d/Grid" {
    var exp: dojox.charting.plot2d.Grid
    export=exp;
}
declare module "dojox/charting/plot2d/Default" {
    var exp: dojox.charting.plot2d.Default
    export=exp;
}
declare module "dojox/charting/plot2d/Indicator" {
    var exp: dojox.charting.plot2d.Indicator
    export=exp;
}
declare module "dojox/charting/plot2d/Lines" {
    var exp: dojox.charting.plot2d.Lines
    export=exp;
}
declare module "dojox/charting/plot2d/Markers" {
    var exp: dojox.charting.plot2d.Markers
    export=exp;
}
declare module "dojox/charting/plot2d/Pie" {
    var exp: dojox.charting.plot2d.Pie
    export=exp;
}
declare module "dojox/charting/plot2d/MarkersOnly" {
    var exp: dojox.charting.plot2d.MarkersOnly
    export=exp;
}
declare module "dojox/charting/plot2d/OHLC" {
    var exp: dojox.charting.plot2d.OHLC
    export=exp;
}
declare module "dojox/charting/plot2d/Scatter" {
    var exp: dojox.charting.plot2d.Scatter
    export=exp;
}
declare module "dojox/charting/plot2d/Stacked" {
    var exp: dojox.charting.plot2d.Stacked
    export=exp;
}
declare module "dojox/charting/plot2d/Spider" {
    var exp: dojox.charting.plot2d.Spider
    export=exp;
}
declare module "dojox/charting/plot2d/StackedAreas" {
    var exp: dojox.charting.plot2d.StackedAreas
    export=exp;
}
declare module "dojox/charting/plot2d/StackedBars" {
    var exp: dojox.charting.plot2d.StackedBars
    export=exp;
}
declare module "dojox/charting/plot2d/StackedColumns" {
    var exp: dojox.charting.plot2d.StackedColumns
    export=exp;
}
declare module "dojox/charting/plot2d/StackedLines" {
    var exp: dojox.charting.plot2d.StackedLines
    export=exp;
}
declare module "dojox/charting/plot3d/Bars" {
    var exp: dojox.charting.plot3d.Bars
    export=exp;
}
declare module "dojox/charting/plot3d/Base" {
    var exp: dojox.charting.plot3d.Base
    export=exp;
}
declare module "dojox/charting/plot3d/Cylinders" {
    var exp: dojox.charting.plot3d.Cylinders
    export=exp;
}
declare module "dojox/charting/scaler/common" {
    var exp: dojox.charting.scaler.common
    export=exp;
}
declare module "dojox/charting/scaler/primitive" {
    var exp: dojox.charting.scaler.primitive
    export=exp;
}
declare module "dojox/charting/scaler/linear" {
    var exp: dojox.charting.scaler.linear
    export=exp;
}
declare module "dojox/charting/themes/common" {
    var exp: dojox.charting.themes.common
    export=exp;
}
declare module "dojox/charting/themes/gradientGenerator" {
    var exp: dojox.charting.themes.gradientGenerator
    export=exp;
}
declare module "dojox/charting/themes/PlotKit/base" {
    var exp: dojox.charting.themes.PlotKit.base
    export=exp;
}
declare module "dojox/charting/widget/Chart2D" {
    var exp: dojox.charting.widget.Chart2D
    export=exp;
}
declare module "dojox/charting/widget/Chart" {
    var exp: dojox.charting.widget.Chart
    export=exp;
}
declare module "dojox/charting/widget/Legend" {
    var exp: dojox.charting.widget.Legend
    export=exp;
}
declare module "dojox/charting/widget/SelectableLegend" {
    var exp: dojox.charting.widget.SelectableLegend
    export=exp;
}
