// Type definitions for Joint JS 0.9.3
// Project: http://www.jointjs.com/
// Definitions by: Aidan Reel <http://github.com/areel>, David Durman <http://github.com/DavidDurman>, Ewout Van Gossum <https://github.com/DenEwout>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../backbone/backbone.d.ts" />


declare module joint {

    module dia {

        interface IElementSize {
            width: number;
            height: number;
        }

        class Graph extends Backbone.Model {
            addCell(cell:Cell) : void;
            addCells(cells:Cell[]) : void;
            initialize() : void;
            fromJSON(json:any) : void;
            toJSON() : Object;
            clear() : void;
            getConnectedLinks(cell:Cell, opt?:any):Link[];
            disconnectLinks(cell:Cell) : void;
            removeLinks(cell:Cell) : void;
            findModelsFromPoint(point:{x : number; y: number}):Element[];
        }

        class Cell extends Backbone.Model {
            toJSON() : Object;
            remove(options?:any) : void;
            toFront() : void;
            toBack() : void;
            embed(cell:Cell) : void;
            unembed(cell:Cell) : void;
            getEmbeddedCells():Cell[];
            clone(opt?:any):Backbone.Model;      // @todo: return can either be Cell or Cell[].
            attr(attrs:any):Cell;
        }

        class Element extends Cell {
            position(x:number, y:number):Element;
            translate(tx:number, ty?:number):Element;
            resize(width:number, height:number):Element;
            rotate(angle:number, options : {absolute : boolean; origin: {x:number;y:number}}):Element;
            remove(): void;
        }

        interface IDefaults {
            type: string;
        }

        class Link extends Cell {
            defaults():IDefaults;
            disconnect():Link;
            label(idx?:number, value?:any):any;   // @todo: returns either a label under idx or Link if both idx and value were passed
            remove(): void;
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
            options:IOptions;

            setDimensions(width:number, height:number) : void;
            scale(sx:number, sy?:number, ox?:number, oy?:number):Paper;
            rotate(deg:number, ox?:number, oy?:number):Paper;      // @todo not released yet though it's in the source code already
            findView(el:any):CellView;
            findViewByModel(modelOrId:any):CellView;
            findViewsFromPoint(p:{ x: number; y: number; }):CellView[];
            findViewsInArea(r:{ x: number; y: number; width: number; height: number; }):CellView[];
            fitToContent(opt?:any): void;
        }

        class ElementView extends CellView {
            scale(sx:number, sy:number) : void;
        }

        class CellView extends Backbone.View<Cell> {
            getBBox():{ x: number; y: number; width: number; height: number; };
            highlight(el?:any): void;
            unhighlight(el?:any): void;
            findMagnet(el:any): void;
            getSelector(el:any): void;

            pointerdblclick(evt:any, x:number, y:number):void;
            pointerclick(evt:any, x:number, y:number):void;
            pointerdown(evt:any, x:number, y:number):void;
            pointermove(evt:any, x:number, y:number):void;
            pointerup(evt:any, x:number, y:number):void;
        }

        class LinkView extends CellView {
            getConnectionLength():number;
            getPointAtLength(length:number):{ x: number; y: number; };
        }

    }

    module ui {}

    module shapes {
        module basic {
            class Generic extends dia.Element {
            }
            class Rect extends Generic {
            }
            class Text extends Generic {
            }
            class Circle extends Generic {
            }
            class Image extends Generic {
            }
        }
    }

    module util {
        function uuid():string;
        function guid(obj:any):string;
        function mixin(objects:any[]):any;
        function supplement(objects:any[]):any;
        function deepMixin(objects:any[]):any;
        function deepSupplement(objects:any[], defaultIndicator?:any):any;
    }

}
