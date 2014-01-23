/* *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

///<reference path="../winrt/winrt.d.ts"/>

declare module WinJS {
    function strictProcessing(): void;

    export module Application {
        export var onsettings: EventListener;
    }

    module Binding {
        function as(data: any): any;
        function processAll(rootElement?: any, dataContext?: any, skipRoot?: boolean, bindingCache?: any): any;
        function define(data: any): any;
        function expandProperties(data: any): any;
        function converter(method: any): any;

        export var optimizeBindingReferences: boolean;
        export var mixin: any;
        export var bind: any;
        export var oneTime: any;

        export function initializer(customInit: any): any;
        export var setAttribute: any;

        class List<T> {
            constructor(data?: T[], options?: { binding: boolean; proxy: boolean; });
            public push(item: T): number;
            public indexOf(item: T, fromIndex?: number): number;
            public splice(start: number, howMany?: number, ...items: T[]): T[];
            public createFiltered(predicate: (x: T) => boolean): List<T>;
            public createGrouped<U>(keySelector: (x: T) => string, dataSelector: (x:T) => U, groupSorter?: (left:string, right:string) => number): List<T>;
            public createSorted(sorter: (left:T, right:T) => number): List<T>;
            public groups: List<any>;
            public dataSource: any;
            public getAt(index: number): T;
            public forEach(callback: (val: T, index: number, array: T[]) => void, thisArg?: any): void;
            public every(callback: (val: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;
            public join(separator: string): string;
            public map<U>(callback: (val: T, index: number, array: T[]) => U, thisArg?: any): U[];
            public move(index: number, newIndex: number): void;
            public pop(): T;
            public reduce(callback: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue?: any): any;
            public reduceRight(callback: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue?: any): any;
            public reverse(): void;
            public setAt(index: number, newValue: T): void;
            public shift(): T;
            public slice(begin: number, end: number): List<T>;
            public some(callback: (val: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;
            public sort(sortFunction: (left: T, right: T) => number): void;
            public filter(callback: (val: T, index: number, array: T[]) => boolean, thisArg?: any): T[];
            public unshift(value: T): number;
            public length: number;
            public notifyMutated(index: number): void;          
        }
        class Template {
            public element: HTMLElement;
            public extractChild: boolean;
            public processTimeout: number;
            public debugBreakOnRender: boolean;
            public disableOptimizedProcessing: boolean;
            public isDeclarativeControlContainer: boolean;
            public bindingInitializer: any;

            constructor(element: HTMLElement, options?: any);            
            public render: {
                (dataContext: any, container?: HTMLElement): WinJS.Promise<HTMLElement>;
                value(href: string, dataContext: any, container?: HTMLElement): WinJS.Promise<HTMLElement>;
            };
            public renderItem(item: any, recycled?: HTMLElement): void;
        }

        
    }
    module Namespace {
        var define: any;
        var defineWithParent: any;
    }
    module Class {
        function define(constructor: any, instanceMembers: any): any;
        function derive(baseClass: any, constructor: any, instanceMembers: any): any;
        function mix(constructor: any, ...mixin: any[]): any;
    }
    function xhr(options: { type?: string; url?: string; user?: string; password?: string; headers?: any; data?: any; responseType?: string; }): WinJS.Promise<XMLHttpRequest>;
    module Application {
        interface IOHelper {
            exists(filename: string): boolean;
            readText(fileName: string, def: string): WinJS.Promise<string>;
            readText(fileName: string): WinJS.Promise<string>;
            writeText(fileName: string, text: string): WinJS.Promise<void>;
			remove(fileName: string): WinJS.Promise<void>;
        }
        var local: IOHelper;
        var roaming: IOHelper;
        var onactivated: EventListener;
        var sessionState: any;
        interface ApplicationActivationEvent extends Event {
            detail: any;
            setPromise(p: Promise<any>): any;
        }
        function addEventListener(type: string, listener: EventListener, capture?: boolean): void;
        var oncheckpoint: EventListener;  
        function start(): void;
        function stop(): void;
    }
    class ErrorFromName {
        constructor(name: string, message?: string);
    }    
    class Promise<T> implements Windows.Foundation.IPromise<T> {
    	constructor(init: (c: any, e: any, p: any) => void);
        then<U>(success?: (value: T) => Windows.Foundation.IPromise<U>, error?: (error: any) => Windows.Foundation.IPromise<U>, progress?: (progress: any) => void): Windows.Foundation.IPromise<U>;
        then<U>(success?: (value: T) => Windows.Foundation.IPromise<U>, error?: (error: any) => U, progress?: (progress: any) => void): Windows.Foundation.IPromise<U>;
        then<U>(success?: (value: T) => U, error?: (error: any) => Windows.Foundation.IPromise<U>, progress?: (progress: any) => void): Windows.Foundation.IPromise<U>;
        then<U>(success?: (value: T) => U, error?: (error: any) => U, progress?: (progress: any) => void): Windows.Foundation.IPromise<U>;
        done<U>(success?: (value: T) => any, error?: (error: any) => any, progress?: (progress: any) => void ): void;

        cancel(): void;

        static join(values: any[]): Promise<any[]>;
        static timeout(timeout: number): Promise<void>;
        static as(): Promise<any>;
        static as<U>(obj: U): Promise<U>;
        static wrapError<U>(obj: U): Promise<U>;
    }
    module Navigation {
        var history: any;
        var canGoBack: boolean;
        var canGoForward: boolean;
        var location: string;
        var state: any;
        function addEventListener(type: string, listener: EventListener, capture: boolean): void;
		function back(): void;
		function forward(): void;
		function navigate(location: any, initialState: any): WinJS.Promise<boolean>;
        function navigate(location: any): WinJS.Promise<boolean>;	
		function removeEventListener(type: string, listener: EventListener, capture: boolean): void;	
		var onbeforenavigate: CustomEvent;
		var onnavigated: CustomEvent;
		var onnavigating: CustomEvent;
    }

    export module Resources {
        export var processAll: (element?: HTMLElement) => void;
        export var getString: (id: string) => { value: string; empty?: boolean; lang?: string; };
        export var addEventListener: (id: string, handler: EventListener, useCapture?: boolean) => void;
    }

    module Utilities {
        function markSupportedForProcessing<T>(obj: T): T;
        function createEventProperties(...events: string[]): any;

        export function addClass(element: HTMLElement, className: string): void;
        export function removeClass(element: HTMLElement, className: string): void;

        export function hasClass(element: HTMLElement, className: string): boolean;

        enum Key {
			backspace, 
			tab, 
			enter, 
			shift, 
			ctrl, 
			alt, 
			pause, 
			capsLock, 
			escape, 
			space, 
			pageUp, 
			pageDown, 
			end, 
			home, 
			leftArrow, 
			upArrow, 
			rightArrow, 
			downArrow, 
			insert, 
			deleteKey, 
			num0, 
			num1, 
			num2, 
			num3, 
			num4, 
			num5, 
			num6, 
			num7, 
			num8, 
			num9, 
			a, 
			b, 
			c, 
			d, 
			e, 
			f, 
			g, 
			h, 
			i, 
			j, 
			k, 
			l, 
			m, 
			n, 
			o, 
			p, 
			q, 
			r, 
			s, 
			t, 
			u, 
			v, 
			w, 
			x, 
			y, 
			z, 
			leftWindows, 
			rightWindows, 
			numPad0, 
			numPad1, 
			numPad2, 
			numPad3, 
			numPad4, 
			numPad5, 
			numPad6, 
			numPad7, 
			numPad8, 
			numPad9, 
			multiply, 
			add, 
			subtract, 
			decimalPoint, 
			divide, 
			f1, 
			f2, 
			f3, 
			f4, 
			f5, 
			f6, 
			f7, 
			f8, 
			f9, 
			f10, 
			f11, 
			f12, 
			numLock, 
			scrollLock, 
			semicolon, 
			equal, 
			comma, 
			dash, 
			period, 
			forwardSlash, 
			graveAccent, 
			openBracket, 
			backSlash, 
			closeBracket, 
			singleQuote
		}
	}
    module UI {  
		var process: any;
		var processAll: any;
		var ListLayout: any;
		var GridLayout: any;
		var Pages: any;
        var setOptions: any;

        export var Animation: any;

        var DOMEventMixin: any;

        class Flyout {
            constructor(element: HTMLElement, options: any);
            element: Element;
        }

        module Fragments {
            var renderCopy: any;
        }

        export class HtmlControl {
            constructor(element: HTMLElement, options: { uri: string; });
        }

        interface IItem {
            data: any;
        }

        interface ISelection {
            clear(): WinJS.Promise<void>;
            count(): number;
            getItems(): WinJS.Promise<IItem[]>;
        }

        class ListView {
            element: Element;
            elementFromIndex(index: number): Element;
            indexOfElement(element: Element): number;
            selection: ISelection;
        }

        class Menu {
            constructor(element: HTMLElement, options: any);
            element: Element;
        }

        export class MenuCommand {
            constructor(element: HTMLElement, options: any);
        }

        export class SettingsFlyout {
            static populateSettings(e: any): any;
            static showSettings(id: string, path: any): any;
        }
    }

    export function xhr(options: { type: string; url: string; }): WinJS.Promise<any>;    // user: string; password: string; headers: any; data: any; responseType: string;
}

interface Element {
	winControl: any; // TODO: This should be control?   
}

