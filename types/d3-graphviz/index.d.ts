// Type definitions for d3-graphviz 2.6
// Project: https://github.com/magjac/d3-graphviz
// Definitions by: Dom Parfitt <https://github.com/DomParfitt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * 
 * @param selector 
 * @param options 
 */
export function graphviz(selector: string, options: IGraphvizOptions | boolean): IGraphviz;

export interface IGraphvizOptions {
    useWorker?: boolean,
    engine?: string,
    totalMemory?: number,
    keyMode?: string,
    fade?: boolean,
    tweenPaths?: boolean,
    tweenShapes?: boolean,
    convertEqualSidedPolygons?: boolean,
    tweenPrecision?: number,
    growEnteringEdges?: boolean,
    zoom?: boolean,
    zoomScaleExtent?: number[],
    zoomTranslateExtent?: number[][],
    width?: number,
    height?: number,
    scale?: number,
    fit?: boolean,
}

export interface IGraphviz {
    engine(engine: string): IGraphviz;
    addImage(path: any, width: any, height: any): any;
    totalMemory(size: number): IGraphviz;
    keyMode(keyMode: any): any;
    fade(enable: boolean): IGraphviz;
    tweenPaths(enable: boolean): IGraphviz;
    tweenShapes(enable: boolean): IGraphviz;
    convertEqualSidedPolygons(enable: boolean): IGraphviz;
    tweenPrecision(precision: number): IGraphviz;
    growEnteringEdges(enable: boolean): IGraphviz;
    zoom(enable: boolean): IGraphviz;
    resetZoom(transition: any): any;
    zoomBehavior(): any;
    zoomSelection(): any;
    zoomScaleExtent(extent: number[]): IGraphviz;
    zoomTranslateExtent(extent: number[][]): IGraphviz;
    render(callback: any): IGraphviz;
    dot: any;
    data(): any;
    renderDot(src: string, callback: any): any;
    transition: any;
    active(name: any): any;
    options(options: IGraphvizOptions | undefined): IGraphviz;
    width(width: number): IGraphviz;
    height(height: number): IGraphviz;
    scale(scale: number): IGraphviz;
    fit(fit: boolean): IGraphviz;
    attributer: any;
    on(typenames: string, callback: () => void): any;
    onerror: any;
    logEvents(enable: boolean): IGraphviz;
    drawEdge: any;
    updateDrawnEdge(x1: any, x2: any, y1: any, y2: any, attributes?: any, options?: any): any;

}