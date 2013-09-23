// Type definitions for Adobe Edge Animate 2.0.1
// Project: http://www.adobe.com/devnet-docs/edgeanimate/api/current/index.html#symbolcompext
// Definitions by: Eirik Hoem <https://github.com/eirikhm/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

declare module AdobeEdge
{
    export function getComposition(compId:string):AdobeEdge.Composition;

    export function registerCompositionReadyHandler(compId:string, handlerFn:(symbol:AdobeEdge.Symbol, event:any) => any, options?:Object):AdobeEdge.Composition;

    export class Symbol {
        public static bindTimelineAction(compId:string, symbolName:string, timelineName:string, eventName:string, actionFunction:(symbol:AdobeEdge.Symbol, event:any) => any);

        public static bindTriggerAction(compId:string, symbolName:string, timelineName:string, delay, actionFunction:(symbol:AdobeEdge.Symbol, event:any) => any);

        public static bindSymbolAction(compId:string, symbolName:string, eventName:string, actionFunction:(symbol:AdobeEdge.Symbol, event:any) => any);

        public static bindElementAction(compId:string, symbolName:string, elementSelector:string, eventName:string, actionFunction:(symbol:AdobeEdge.Symbol, event:any) => any);

        public $(elementName:string):JQuery;

        public lookupSelector(elementName:string):HTMLElement;

        public getComposition():AdobeEdge.Composition;

        public getSymbol(name:string):AdobeEdge.Symbol;

        public createChildSymbol(symbolName:string, parentElementName:string, index?:number):AdobeEdge.Symbol;

        public getChildSymbols():AdobeEdge.Symbol[];

        public getParentSymbol():AdobeEdge.Symbol;

        public getSymbolElement():JQuery;

        public setVariable(name:string, value:any):void;

        public getVariable(name:string):any;

        public play(position?:number, executeTriggers?:boolean):void;

        public playReverse(position?:number, executeTriggers?:boolean):void;

        public stop(position?:number):void;
        public stop(position?:string):void;

        public getPosition():number;

        public getDuration():number;

        public isPlaying():boolean;

        public isPlayDirectionReverse():boolean;

        public getLabelPosition(name:string):number;

        public deleteSymbol(options:any):void;
    }

    export class Composition {
        public getStage():AdobeEdge.Symbol;

        public getSymbols(name:string):AdobeEdge.Symbol[];

        public createSymbolChild(symbolName:string, parentSelector:string, index?:number);

        public getCompId():string;
    }
}