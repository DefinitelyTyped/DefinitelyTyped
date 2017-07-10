// Type definitions for plotly.js 1.27
// Project: https://plot.ly/javascript/
// Definitions by: Chris Gervang <https://github.com/chrisgervang>, Martin Duparc <https://github.com/martinduparc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace Plots {
    interface StaticPlots {
        resize(root: Plotly.Root): void;
    }
}

declare namespace Plotly {
    type Root = string | HTMLElement;

    interface PlotlyStatic {
        Plots: Plots.StaticPlots;
        newPlot(root: Root, data: Array<Partial<Data>>, layout?: Partial<Layout>, config?: Partial<Config>): void;
        relayout(root: Root, layout: Partial<Layout>): void;
        redraw(root: Root): void;
        purge(root: Root): void;
        d3: any;
    }

    // Layout

    interface Layout {
        autosize: boolean;
        showlegend: boolean;
        xaxis: Partial<Axis>;
        yaxis: Partial<Axis>;
        margin: Partial<Margin>;
        height: number;
        width: number;
        hovermode: "closest" | "x" | "y" | false;
        'xaxis.range': [Datum, Datum];
        'yaxis.range': [Datum, Datum];
        'yaxis.type': AxisType;
        'xaxis.type': AxisType;
        'xaxis.autorange': boolean;
        'yaxis.autorange': boolean;
        shapes: Array<Partial<Shape>>;
        legend: Partial<Legend>;
    }

    interface Legend {
        traceorder: "grouped" | "normal" | "reversed";
        x: number;
        y: number;
        font: Partial<Font>;
        bgcolor: string;
        bordercolor: string;
        borderwidth: number;
        orientation: "v" | "h";
        tracegroupgap: number;
        xanchor: 'auto' | 'left' | 'center' | 'right';
        yanchor: 'auto' | 'top' | 'middle' | 'bottom';
    }

    type AxisType = "date" | "log" | "linear";

    interface Axis {
        title: string;
        showgrid: boolean;
        fixedrange: boolean;
        rangemode: "tozero" | 'normal' | 'nonnegative';
        type: AxisType;
        tickformat: string;
        hoverformat: string;
        rangeslider: Partial<RangeSlider>;
        rangeselector: Partial<RangeSelector>;
        range: [Datum, Datum];
        showticklabels: boolean;
        autotick: boolean;
        zeroline: boolean;
        autorange: boolean | 'reversed';
    }

    interface ShapeLine {
        color: string;
        width: number;
        dash: Dash;
    }

    interface Shape {
        visible: boolean;
        layer: 'below' | 'above';
        type: 'rect' | 'circle' | 'line' | 'path';
        path: string;
        // x-reference is assigned to the x-values
        xref: 'x' | 'paper';
        // y-reference is assigned to the plot paper [0,1]
        yref: 'paper' | 'y';
        x0: Datum;
        y0: Datum;
        x1: Datum;
        y1: Datum;
        fillcolor: string;
        opacity: number;
        line: Partial<ShapeLine>;
    }

    interface Margin {
        t: number;
        b: number;
        l: number;
        r: number;
    }

    type ModeBarButtons = 'lasso2d' | 'select2d' | 'sendDataToCloud' | 'autoScale2d' |
        'zoom2d' | 'pan2d' | 'zoomIn2d' | 'zoomOut2d' | 'autoScale2d' | 'resetScale2d' |
        'hoverClosestCartesian' | 'hoverCompareCartesian' | 'zoom3d' | 'pan3d' | 'orbitRotation' |
        'tableRotation' | 'resetCameraDefault3d' | 'resetCameraLastSave3d' | 'hoverClosest3d' |
        'zoomInGeo' | 'zoomOutGeo' | 'resetGeo' | 'hoverClosestGeo' | 'hoverClosestGl2d' |
        'hoverClosestPie' | 'toggleHover' | 'resetViews';

    // Data

    type Datum = string | number | Date;

    type Dash = 'solid' | 'dot' | 'dash' | 'longdash' | 'dashdot' | 'longdashdot';

    type Data = Partial<ScatterData> | Partial<BarData>;

    // Bar
    interface BarData {
        type: 'bar';
        x: Datum[];
        y: Datum[];
    }

    // Scatter
    interface ScatterData {
        type: 'scatter' | 'scattergl';
        x: Datum[];
        y: Datum[];
        text: string | string[];
        line: Partial<ScatterLine>;
        marker: Partial<ScatterMarker>;
        mode: "lines" | "markers" | "text" | "lines+markers" | "text+markers" | "text+lines" | "text+lines+markers" | "none";
        hoveron: "points" | "fills";
        hoverinfo: "text";
        fill: 'none' | 'tozeroy' | 'tozerox' | 'tonexty' | 'tonextx' | 'toself' | 'tonext';
        fillcolor: string;
        legendgroup: string;
        name: string;
        connectgaps: boolean;
    }

    interface ScatterMarker {
        symbol: string | string[]; // Drawing.symbolList
        color: string | string[];
        opacity: number | number[];
        size: number | number[];
        maxdisplayed: number;
        sizeref: number;
        sizemin: number;
        sizemode: "diameter" | "area";
        showscale: boolean;
        line: {}; // TODO
        colorbar: {}; // TODO
    }

    interface ScatterLine {
        color: string;
        width: number;
        dash: Dash;
        shape: 'linear' | 'spline' | 'hv' | 'vh' | 'hvh' | 'vhv';
        smoothing: number;
        simplify: boolean;
    }

    interface Font {
        family: string;
        size: number;
        color: string;
    }

    interface Config {
        // no interactivity, for export or image generation
        staticPlot: boolean;

        // we can edit titles, move annotations, etc
        editable: boolean;

        // DO autosize once regardless of layout.autosize
        // (use default width or height values otherwise)
        autosizable: boolean;

        // set the length of the undo/redo queue
        queueLength: number;

        // if we DO autosize, do we fill the container or the screen?
        fillFrame: boolean;

        // if we DO autosize, set the frame margins in percents of plot size
        frameMargins: number;

        // mousewheel or two-finger scroll zooms the plot
        scrollZoom: boolean;

        // double click interaction (false, 'reset', 'autosize' or 'reset+autosize')
        doubleClick: 'reset+autosize' | 'reset' | 'autosize' | false;

        // new users see some hints about interactivity
        showTips: boolean;

        // link to open this plot in plotly
        showLink: boolean;

        // if we show a link, does it contain data or just link to a plotly file?
        sendData: boolean;

        // text appearing in the sendData link
        linkText: string;

        // false or function adding source(s) to linkText <text>
        showSources: boolean;

        // display the mode bar (true, false, or 'hover')
        displayModeBar: 'hover' | boolean;

        // remove mode bar button by name
        // (see ./components/modebar/buttons.js for the list of names)
        modeBarButtonsToRemove: ModeBarButtons[];

        // add mode bar button using config objects
        // (see ./components/modebar/buttons.js for list of arguments)
        modeBarButtonsToAdd: ModeBarButtons[];

        // fully custom mode bar buttons as nested array,
        // where the outer arrays represents button groups, and
        // the inner arrays have buttons config objects or names of default buttons
        // (see ./components/modebar/buttons.js for more info)
        modeBarButtons: boolean;

        // add the plotly logo on the end of the mode bar
        displaylogo: boolean;

        // increase the pixel ratio for Gl plot images
        plotGlPixelRatio: number;

        // function to add the background color to a different container
        // or 'opaque' to ensure there's white behind it
        setBackground: string | 'opaque';

        // URL to topojson files used in geo charts
        topojsonURL: string;

        // Mapbox access token (required to plot mapbox trace types)
        // If using an Mapbox Atlas server, set this option to '',
        // so that plotly.js won't attempt to authenticate to the public Mapbox server.
        mapboxAccessToken: string;

        // Turn all console logging on or off (errors will be thrown)
        // This should ONLY be set via Plotly.setPlotConfig
        logging: boolean;

        // Set global transform to be applied to all traces with no
        // specification needed
        globalTransforms: any[];
    }

    // Components

    interface RangeSlider {
        visible: boolean;
        thickness: number;
        range: [Datum, Datum];
        borderwidth: number;
        bordercolor: string;
        bgcolor: string;
    }

    interface RangeSelectorButton {
        step: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year' | 'all';
        stepmode: 'backward' | 'todate';
        count: number;
        label: string;
    }

    interface RangeSelector {
        buttons: Array<Partial<RangeSelectorButton>>;
        visible: boolean;
        x: number;
        xanchor: 'auto' | 'left' | 'center' | 'right';
        y: number;
        yanchor: 'auto' | 'top' | 'middle' | 'bottom';
        bgcolor: string;
        activecolor: string;
        bordercolor: string;
        borderwidth: number;
        font: Partial<Font>;
    }
}

declare var Plotly: Plotly.PlotlyStatic;
export = Plotly;
