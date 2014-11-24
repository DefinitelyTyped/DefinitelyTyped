// Type definitions for Joint JS 0.6
// Project: http://www.jointjs.com/
// Definitions by: Aidan Reel <http://github.com/areel>, David Durman <http://github.com/DavidDurman>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../backbone/backbone.d.ts" />


declare module joint {

    module dia {

        interface IElementSize {
            width: number;
            height: number;
        }

        class Graph extends Backbone.Model {
            initialize();
            fromJSON(json: any);
            clear();
            addCell(cell: Cell);
            addCells(cells: Cell[]);
            getConnectedLinks(cell: Cell, opt?: any): Link[];
            disconnectLinks(cell: Cell);
            removeLinks(cell: Cell);
        }

        class Cell extends Backbone.Model {
            toJSON();
            remove(options?: any);
            toFront();
            toBack();
            embed(cell: Cell);
            unembed(cell: Cell);
            getEmbeddedCells(): Cell[];
            clone(opt?: any): Backbone.Model;      // @todo: return can either be Cell or Cell[].
            attr(attrs: any): Cell;
        }

        class Element extends Cell {
            position(x: number, y: number): Element;
            translate(tx: number, ty?: number): Element;
            resize(width: number, height: number): Element;
            rotate(angle: number, absolute): Element;
        }

        interface IDefaults {
            type: string;
        }

        class Link extends Cell {
            defaults(): IDefaults;
            disconnect(): Link;
            label(idx?: number, value?: any): any;   // @todo: returns either a label under idx or Link if both idx and value were passed
        }

        interface IOptions {
            width: number;
            height: number;
            gridSize: number;
            perpendicularLinks: boolean;
            elementView: ElementView;
            linkView: LinkView;
        }

        class Paper extends Backbone.View<Backbone.Model> {
            options: IOptions;
            setDimensions(width: number, height: number);
            scale(sx: number, sy?: number, ox?: number, oy?: number): Paper;
            rotate(deg: number, ox?: number, oy?: number): Paper;      // @todo not released yet though it's in the source code already
            findView(el: any): CellView;
            findViewByModel(modelOrId: any): CellView;
            findViewsFromPoint(p: { x: number; y: number; }): CellView[];
            findViewsInArea(r: { x: number; y: number; width: number; height: number; }): CellView[];
            snapToGrid(p): { x: number; y: number; };
        }

        class ElementView extends CellView  {
            scale(sx: number, sy: number);
        }

        class CellView extends Backbone.View<Cell> {
            getBBox(): { x: number; y: number; width: number; height: number; };
            highlight(el?: any);
            unhighlight(el?: any);
            findMagnet(el: any);
            getSelector(el: any);
        }

        class LinkView extends CellView {
            getConnectionLength(): number;
            getPointAtLength(length: number): { x: number; y: number; };
        }
    
    }

    module ui { }

    module shapes {
        module basic {
            class Generic extends joint.dia.Element { }
            class Rect extends Generic { }
            class Text extends Generic { }
            class Circle extends Generic { }
            class Image extends Generic { }
        }
    }

    module util {
        function uuid(): string;
        function guid(obj: any): string;
        function mixin(objects: any[]): any;
        function supplement(objects: any[]): any;
        function deepMixin(objects: any[]): any;
        function deepSupplement(objects: any[], defaultIndicator?: any): any;
    }

}
