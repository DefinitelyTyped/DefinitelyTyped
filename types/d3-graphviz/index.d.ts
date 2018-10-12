// Type definitions for d3-graphviz 2.6
// Project: https://github.com/magjac/d3-graphviz
// Definitions by: Dom Parfitt <https://github.com/DomParfitt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ZoomBehavior } from 'd3-zoom'
import { Selection } from 'd3-selection'


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

export interface IEdgeAttributes {
    style: any;
    URL: any;
    tooltip: any;
}

export interface IEdgeOptions {
    shortening: number;
}

export interface INodeAttributes {
    URL: any;
    tooltip: any;
}

export interface INodeOptions {

}

export interface IGraphviz {
    engine(engine: string): IGraphviz;
    addImage(path: string, width: number, height: number): IGraphviz;
    totalMemory(size: number): IGraphviz;
    keyMode(keyMode: string): IGraphviz;
    fade(enable: boolean): IGraphviz;
    tweenPaths(enable: boolean): IGraphviz;
    tweenShapes(enable: boolean): IGraphviz;
    convertEqualSidedPolygons(enable: boolean): IGraphviz;
    tweenPrecision(precision: number): IGraphviz;
    growEnteringEdges(enable: boolean): IGraphviz;
    zoom(enable: boolean): IGraphviz;
    resetZoom(transition: any): any;
    zoomBehavior(): ZoomBehavior<any, any> | null;
    zoomSelection(): any | null;
    zoomScaleExtent(extent: number[]): IGraphviz;
    zoomTranslateExtent(extent: number[][]): IGraphviz;
    render(callback: Function): IGraphviz;
    dot(src: any, callback: () => void): any;
    data(): any;
    renderDot(src: string, callback: any): IGraphviz;
    transition: any;
    active(name: any): any;
    options(options: IGraphvizOptions | undefined): IGraphviz;
    width(width: number): IGraphviz;
    height(height: number): IGraphviz;
    scale(scale: number): IGraphviz;
    fit(fit: boolean): IGraphviz;
    attributer(callback: any): any;
    on(typenames: string, callback: () => void): any;
    onerror(callback: any): any;
    logEvents(enable: boolean): IGraphviz;
    drawEdge(x1: number, x2: number, y1: number, y2: number, attributes?: IEdgeAttributes, options?: IEdgeOptions): IGraphviz;
    updateDrawnEdge(x1: number, x2: number, y1: number, y2: number, attributes?: IEdgeAttributes, options?: IEdgeOptions): IGraphviz;
    moveDrawnEdgeEndPoint(x2: number, y2: number, options?: IEdgeOptions): IGraphviz;
    insertDrawnEdge(name: string): IGraphviz;
    removeDrawnEdge(): IGraphviz;
    drawnEdgeSelection(): any;
    drawNode(x: number, y: number, nodeId: string, attributes?: INodeAttributes, options?: INodeOptions): IGraphviz;
    updateDrawnNode(x: number, y: number, nodeId: string, attributes?: INodeAttributes, options?: INodeOptions): IGraphviz;
    moveDrawnNode(x: number, y: number, options?: INodeOptions): IGraphviz;
    inserDrawnNode(nodeId: string): IGraphviz;
    removeDrawnNode(): IGraphviz;
    drawnNodeSelection(): Selection<any, any, HTMLElement, any>;
}