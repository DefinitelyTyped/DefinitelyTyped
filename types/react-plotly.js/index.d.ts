// Type definitions for react-plotly.js 2.2
// Project: https://github.com/plotly/react-plotly.js#readme
// Definitions by: Jon Freedman <https://github.com/jonfreedman>
//                 Mitchell Grice <https://github.com/gricey432>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as Plotly from 'plotly.js';
import * as React from 'react';

export interface Figure {
    data: Plotly.Data[];
    layout: Partial<Plotly.Layout>;
    frames: Plotly.Frame[] | null;
}

export interface PlotParams {
    data: Plotly.Data[];
    layout: Partial<Plotly.Layout>;
    frames?: Plotly.Frame[];
    config?: Partial<Plotly.Config>;
    /**
     * When provided, causes the plot to update only when the revision is incremented.
     */
    revision?: number;
    /**
     * Callback executed after plot is initialized.
     * @param figure Object with three keys corresponding to input props: data, layout and frames.
     * @param graphDiv Reference to the DOM node into which the figure was rendered.
     */
    onInitialized?: (figure: Readonly<Figure>, graphDiv: Readonly<HTMLElement>) => void;
    /**
     * Callback executed when when a plot is updated due to new data or layout, or when user interacts with a plot.
     * @param figure Object with three keys corresponding to input props: data, layout and frames.
     * @param graphDiv Reference to the DOM node into which the figure was rendered.
     */
    onUpdate?: (figure: Readonly<Figure>, graphDiv: Readonly<HTMLElement>) => void;
    /**
     * Callback executed when component unmounts, before Plotly.purge strips the graphDiv of all private attributes.
     * @param figure Object with three keys corresponding to input props: data, layout and frames.
     * @param graphDiv Reference to the DOM node into which the figure was rendered.
     */
    onPurge?: (figure: Readonly<Figure>, graphDiv: Readonly<HTMLElement>) => void;
    /**
     * Callback executed when a plotly.js API method rejects
     * @param err Error
     */
    onError?: (err: Readonly<Error>) => void;
    /**
     * id assigned to the <div> into which the plot is rendered.
     */
    divId?: string;
    /**
     * applied to the <div> into which the plot is rendered
     */
    className?: string;
    /**
     * used to style the <div> into which the plot is rendered
     */
    style?: React.CSSProperties;
    /**
     * Assign the graph div to window.gd for debugging
     */
    debug?: boolean;
    /**
     * When true, adds a call to Plotly.Plot.resize() as a window.resize event handler
     */
    useResizeHandler?: boolean;

    onAfterExport?: () => void;
    onAfterPlot?: () => void;
    onAnimated?: () => void;
    onAnimatingFrame?: (event: Readonly<Plotly.FrameAnimationEvent>) => void;
    onAnimationInterrupted?: () => void;
    onAutoSize?: () => void;
    onBeforeExport?: () => void;
    onButtonClicked?: (event: Readonly<Plotly.ButtonClickEvent>) => void;
    onClick?: (event: Readonly<Plotly.PlotMouseEvent>) => void;
    onClickAnnotation?: (event: Readonly<Plotly.ClickAnnotationEvent>) => void;
    onDeselect?: () => void;
    onDoubleClick?: () => void;
    onFramework?: () => void;
    onHover?: (event: Readonly<Plotly.PlotMouseEvent>) => void;
    onLegendClick?: (event: Readonly<Plotly.LegendClickEvent>) => boolean;
    onLegendDoubleClick?: (event: Readonly<Plotly.LegendClickEvent>) => boolean;
    onRelayout?: (event: Readonly<Plotly.PlotRelayoutEvent>) => void;
    onRestyle?: (event: Readonly<Plotly.PlotRestyleEvent>) => void;
    onRedraw?: () => void;
    onSelected?: (event: Readonly<Plotly.PlotSelectionEvent>) => void;
    onSelecting?: (event: Readonly<Plotly.PlotSelectionEvent>) => void;
    onSliderChange?: (event: Readonly<Plotly.SliderChangeEvent>) => void;
    onSliderEnd?: (event: Readonly<Plotly.SliderEndEvent>) => void;
    onSliderStart?: (event: Readonly<Plotly.SliderStartEvent>) => void;
    onTransitioning?: () => void;
    onTransitionInterrupted?: () => void;
    onUnhover?: (event: Readonly<Plotly.PlotMouseEvent>) => void;
}

export default class Plot extends React.PureComponent<PlotParams> {
}
