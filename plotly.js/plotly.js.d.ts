// Type definitions for plotly.js
// Project: https://plot.ly/javascript/
// Definitions by: Martin Duparc <https://github.com/martinduparc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface PlotlyConfig {
    staticPlot?: boolean,
    editable?: boolean,
    autosizable?: boolean,
    fillFrame?: boolean,
    frameMargins?: number,
    scrollZoom?: boolean,
    doubleClick?: string,
    showTips?: boolean,
    showLink?: boolean,
    sendData?: boolean,
    linkText?: string,
    showSources?: boolean,
    displayModeBar?: string|boolean,
    modeBarButtonsToRemove?: any[],
    modeBarButtonsToAdd?: any[],
    modeBarButtons?: boolean,
    displaylogo?: boolean,
    plotGlPixelRatio?: number,
    setBackground?: any,
    topojsonURL?: string,
    mapboxAccessToken?: string,
    logging?: boolean
}

interface PlotlyStatic {
    newPlot(divid:string | HTMLElement, data:any[], layout?:any, config?:PlotlyConfig):void;
}

declare module "plotly.js" {    
    export = plotly;
}

declare var plotly:PlotlyStatic;
