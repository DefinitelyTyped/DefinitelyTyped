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

declare module WinJS {
    function strictProcessing(): void;
    module Binding {
        function as(data: any): any;
        class List {
            constructor(data?: any[]);
            public push(item: any): any;
            public indexOf(item: any): number;
            public splice(start: number, howMany?: number, item?: any[]): any[];
            public createFiltered(predicate: (x: any) => boolean): List;
            public createGrouped(keySelector: (x: any) => any, dataSelector: (x:any) => any, groupSorter: (left:any, right:any) => number): List;
            public groups: any;
            public dataSource: any;
            public getAt(index: number): any;
            public createSorted(sorter: (left, right) => number);
            public forEach(callback: (val: any, index: number, array: any[]) => void, thisArg?: any);
            public every(callback: (val: any, index: number, array: any[]) => boolean, thisArg?: any): boolean;
            public join(separator: string): string;
            public map(callback: (val: any, index: number, array: any[]) => any, thisArg?: any): any[];
            public move(index: number, newIndex: number);
            public pop(): any;
            public reduce(callback: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue?: any): any;
            public reduceRight(callback: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue?: any): any;
            public reverse();
            public setAt(index: number, newValue: number);
            public shift(): any;
            public slice(begin: number, end: number): WinJS.Binding.List;
            public some(callback: (val: any, index: number, array: any[]) => boolean, thisArg?: any): boolean;
            public sort(sortFunction: (left, right) => number);
            public unshift(value: any): number;
            public length: number;
            public notifyMutated(index: number);            
            
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
            public renderItem(item: any, recycled?: HTMLElement);
        }

        
    }
    module Namespace {
        var define: any;
        var defineWithParent: any;
    }
    module Class {
        function define(constructor: any, instanceMembers: any): any;
        function derive(baseClass: any, constructor: any, instanceMembers: any): any;
        function mix(constructor: any, mixin: any): any;
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
    class Promise<T> {
    	constructor(init: (c: any, e: any, p: any) => void);
        then<U>(success?: (value: T) => Promise<U>, error?: (error: any) => Promise<U>, progress?: (progress: any) => void ): Promise<U>;
        then<U>(success?: (value: T) => Promise<U>, error?: (error: any) => U, progress?: (progress: any) => void ): Promise<U>;
        then<U>(success?: (value: T) => U, error?: (error: any) => Promise<U>, progress?: (progress: any) => void ): Promise<U>;
        then<U>(success?: (value: T) => U, error?: (error: any) => U, progress?: (progress: any) => void ): Promise<U>;
        done<U>(success?: (value: T) => any, error?: (error: any) => any, progress?: (progress: any) => void ): void;
        static join: any;
        static timeout: any;
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
		function navigate(location: any, initialState: any);
		function navigate(location: any);	
		function removeEventListener(type: string, listener: EventListener, capture: boolean): void;	
		var onbeforenavigate: CustomEvent;
		var onnavigated: CustomEvent;
		var onnavigating: CustomEvent;
    }
    module Utilities {
        function markSupportedForProcessing(obj: any): void;
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
		var Menu: any;
		var setOptions: any;
    }
}

interface Element {
	winControl: any; // TODO: This should be control?   
}

