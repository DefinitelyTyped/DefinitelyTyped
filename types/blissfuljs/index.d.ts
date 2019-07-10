// Type definitions for bliss
// Project: http://blissfuljs.com/
// Definitions by: François Skorzec <https://github.com/fskorzec>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Element {
    _: BlissNS.BlissBindedElement<Element>;
}

interface Array<T> {
    _: BlissNS.BlissBindedArray<T> & BlissNS.BlissCollectionArray<T>;
}

declare namespace BlissNS {
    export type BlissDecoratedElement<T> = Element & T;
    export type BlissDecoratedArrayElement<T> = Array<T> & BlissNS.BlissCollectionArray<T>;

    interface BlissStatic {
        <T>(selector: string, context?: Element): BlissDecoratedElement<T>;

        classProps: Object;

        create(tag: "a"): HTMLAnchorElement;
        create(tag: "applet"): HTMLAppletElement;
        create(tag: "area"):HTMLAreaElement;
        create(tag: "audio"): HTMLAudioElement;
        create(tag: "base"): HTMLBaseElement;
        create(tag: "basefont"): HTMLBaseFontElement;
        create(tag: "blockquote"): HTMLQuoteElement;
        create(tag: "body"): HTMLBodyElement;
        create(tag: "br"): HTMLBRElement;
        create(tag: "button"): HTMLButtonElement;
        create(tag: "canvas"): HTMLCanvasElement;
        create(tag: "datalist"): HTMLDataListElement;
        create(tag: "dd"): HTMLElement;
        create(tag: "directory"): HTMLDirectoryElement;
        create(tag: "div"): HTMLDivElement;
        create(tag: "embeded"): HTMLEmbedElement;
        create(tag: "fieldset"): HTMLFieldSetElement;
        create(tag: "form"): HTMLFormElement;
        create(tag: "frame"): HTMLFrameElement;
        create(tag: "frameset"): HTMLFrameSetElement;
        create(tag: "iframe"): HTMLDListElement;
        create(tag: "image"): HTMLImageElement;
        create(tag: "input"): HTMLInputElement;
        create(tag: "i"): HTMLLIElement;
        create(tag: "label"): HTMLLabelElement;
        create(tag: "legend"): HTMLLegendElement;
        create(tag: "li"): HTMLLIElement;
        create(tag: "link"): HTMLLinkElement;
        create(tag: "map"): HTMLMapElement;
        create(tag: "mark"): HTMLMarqueeElement;
        create(tag: "menu"): HTMLMenuElement;
        create(tag: "meta"): HTMLMetaElement;
        create(tag: "object"): HTMLObjectElement;
        create(tag: "ol"): HTMLOListElement;
        create(tag: "optgroup"): HTMLOptGroupElement;
        create(tag: "option"): HTMLOptionElement;
        create(tag: "p"): HTMLParagraphElement;
        create(tag: "param"): HTMLParamElement;
        create(tag: "pre"): HTMLPreElement;
        create(tag: "progress"): HTMLProgressElement;
        create(tag: "q"): HTMLQuoteElement;
        create(tag: "script"): HTMLScriptElement;
        create(tag: "select"): HTMLSelectElement;
        create(tag: "source"): HTMLSourceElement;
        create(tag: "span"): HTMLSpanElement;
        create(tag: "style"): HTMLStyleElement;
        create(tag: "table"): HTMLTableElement;
        create(tag: "thead"): HTMLTableHeaderCellElement;
        create(tag: "ul"): HTMLUListElement;
        create(tag: "video"): HTMLVideoElement;
        create<T>(tag: string): BlissDecoratedElement<T>;

        create<T>(options: Object): BlissDecoratedElement<T>;

        create(tag: "a", options: Object): HTMLAnchorElement;
        create(tag: "applet", options: Object): HTMLAppletElement;
        create(tag: "area", options: Object): HTMLAreaElement;
        create(tag: "audio", options: Object): HTMLAudioElement;
        create(tag: "base", options: Object): HTMLBaseElement;
        create(tag: "basefont", options: Object): HTMLBaseFontElement;
        create(tag: "blockquote", options: Object): HTMLQuoteElement;
        create(tag: "body", options: Object): HTMLBodyElement;
        create(tag: "br", options: Object): HTMLBRElement;
        create(tag: "button", options: Object): HTMLButtonElement;
        create(tag: "canvas", options: Object): HTMLCanvasElement;
        create(tag: "datalist", options: Object): HTMLDataListElement;
        create(tag: "dd", options: Object): HTMLElement;
        create(tag: "directory", options: Object): HTMLDirectoryElement;
        create(tag: "div", options: Object): HTMLDivElement;
        create(tag: "embeded", options: Object): HTMLEmbedElement;
        create(tag: "fieldset", options: Object): HTMLFieldSetElement;
        create(tag: "form", options: Object): HTMLFormElement;
        create(tag: "frame", options: Object): HTMLFrameElement;
        create(tag: "frameset", options: Object): HTMLFrameSetElement;
        create(tag: "iframe", options: Object): HTMLDListElement;
        create(tag: "image", options: Object): HTMLImageElement;
        create(tag: "input", options: Object): HTMLInputElement;
        create(tag: "i", options: Object): HTMLLIElement;
        create(tag: "label", options: Object): HTMLLabelElement;
        create(tag: "legend", options: Object): HTMLLegendElement;
        create(tag: "li", options: Object): HTMLLIElement;
        create(tag: "link", options: Object): HTMLLinkElement;
        create(tag: "map", options: Object): HTMLMapElement;
        create(tag: "mark", options: Object): HTMLMarqueeElement;
        create(tag: "menu", options: Object): HTMLMenuElement;
        create(tag: "meta", options: Object): HTMLMetaElement;
        create(tag: "object", options: Object): HTMLObjectElement;
        create(tag: "ol", options: Object): HTMLOListElement;
        create(tag: "optgroup", options: Object): HTMLOptGroupElement;
        create(tag: "option", options: Object): HTMLOptionElement;
        create(tag: "p", options: Object): HTMLParagraphElement;
        create(tag: "param", options: Object): HTMLParamElement;
        create(tag: "pre", options: Object): HTMLPreElement;
        create(tag: "progress", options: Object): HTMLProgressElement;
        create(tag: "q", options: Object): HTMLQuoteElement;
        create(tag: "script", options: Object): HTMLScriptElement;
        create(tag: "select", options: Object): HTMLSelectElement;
        create(tag: "source", options: Object): HTMLSourceElement;
        create(tag: "span", options: Object): HTMLSpanElement;
        create(tag: "style", options: Object): HTMLStyleElement;
        create(tag: "table", options: Object): HTMLTableElement;
        create(tag: "thead", options: Object): HTMLTableHeaderCellElement;
        create(tag: "ul", options: Object): HTMLUListElement;
        create(tag: "video", options: Object): HTMLVideoElement;
        create<T>(tag: string, options: Object): BlissDecoratedElement<T>;

        create<T>(...args:any[]): BlissDecoratedElement<T>;

        set<T>(subject: BlissDecoratedElement<T>, options: Object): BlissDecoratedElement<T>;
        contents<T>(subject: BlissDecoratedElement<T> , elements: Object | Array<any> | string | Number | Node): BlissDecoratedElement<T>;
        contents<T>(subject: BlissDecoratedElement<T>[], elements: Object | Array<any> | string | Number | Node): BlissDecoratedElement<T>[];
        clone<T>(subject:BlissDecoratedElement<T>) : BlissDecoratedElement<T>;
        after<T>(subject:BlissDecoratedElement<T>, element: Element) : BlissDecoratedElement<T>;
        around<T>(subject:BlissDecoratedElement<T>, element: Element) : BlissDecoratedElement<T>;
        attributes<T>(subject:BlissDecoratedElement<T>, attrs: Object) : BlissDecoratedElement<T>;
        attributes<T>(subject:BlissDecoratedElement<T>[], attrs: Object) : BlissDecoratedElement<T>[];
        before<T>(subject:BlissDecoratedElement<T>, element: Element) : BlissDecoratedElement<T>;
        inside<T>(subject:BlissDecoratedElement<T>, element: Element) : BlissDecoratedElement<T>;
        properties<T>(subject:BlissDecoratedElement<T>, props: Object) : BlissDecoratedElement<T>;
        properties<T>(subject:BlissDecoratedElement<T>[], props: Object) : BlissDecoratedElement<T>[];
        start<T>(subject:BlissDecoratedElement<T>, element: Element) : BlissDecoratedElement<T>;
        style<T>(subject:BlissDecoratedElement<T>, properties: Object) : BlissDecoratedElement<T>;
        style<T>(subject:BlissDecoratedElement<T>[], properties: Object) : BlissDecoratedElement<T>[];
        transition<T>(subject:BlissDecoratedElement<T> | BlissDecoratedElement<T>[], properties: Object, duration?: number) : Promise<T>;
        delegate<T>(subject:BlissDecoratedElement<T> , type: string, selector: string, callback: (event: Event) => void): BlissDecoratedElement<T>;
        delegate<T>(subject: BlissDecoratedElement<T>[], type: string, selector: string, callback: (event: Event) => void): BlissDecoratedElement<T>[];
        delegate<T>(subject:BlissDecoratedElement<T> , type: string, selectorsToCallbacks: {[selector: string] : (event: Event) => void}): BlissDecoratedElement<T>;
        delegate<T>(subject:BlissDecoratedElement<T>[], type: string, selectorsToCallbacks: {[selector: string] : (event: Event) => void}): BlissDecoratedElement<T>[];
        delegate<T>(subject:BlissDecoratedElement<T> , typesToSelectorsToCallbacks: {[type: string] : {[selector: string] : (event: Event) => void}}): BlissDecoratedElement<T>;
        delegate<T>(subject:BlissDecoratedElement<T>[], typesToSelectorsToCallbacks: {[type: string] : {[selector: string] : (event: Event) => void}}): BlissDecoratedElement<T>[];
        events<T>(subject:BlissDecoratedElement<T> , handlers: {[eventName:string] : (event: Event) => void} | Element): BlissDecoratedElement<T>;
        events<T>(subject: BlissDecoratedElement<T>[], handlers: {[eventName:string] : (event: Event) => void} | Element): BlissDecoratedElement<T>[];
        fire<T>(subject:BlissDecoratedElement<T>, type: string, properties?: {[propertyName: string] : any}): BlissDecoratedElement<T>;
        fire<T>(subject:BlissDecoratedElement<T>[], type: string, properties?: {[propertyName: string] : any}): BlissDecoratedElement<T>[];
        once<T>(subject:BlissDecoratedElement<T>, handlers: {[eventName:string] : (event: Event) => void} | Element): BlissDecoratedElement<T>;
        once<T>(subject:BlissDecoratedElement<T>[], handlers: {[eventName:string] : (event: Event) => void} | Element): BlissDecoratedElement<T>[];
        ready(context?: Document): Promise<any>;

        remove(subject:Element | BlissStatic): void;

        all(array: Array<any>, method: string, ...args: Array<any>): Array<any>;
        all<T>(array: Array<T>, method: string, ...args: Array<any>): Array<T>;

        Class<T>(options: {
            constructor?: Function;
            extends?: Function;
            abstract?: boolean;
            lazy?: Object;
            live?: Object;
            static?: Object;
            [propertyName: string]:any;
        }): T;

        Class(options: {
            constructor?: Function;
            extends?: Function;
            abstract?: boolean;
            lazy?: Object;
            live?: Object;
            static?: Object;
            [propertyName: string]:any;
        }): Object;

        each<T>(obj: {[propertyName: string] : any}, callback: Function, ret?: Object): T;
        each(obj: {[propertyName: string] : any}, callback: Function, ret?: Object): Object;

        extend(target: Object, source: any, whitelist? : string[] | string | Function | RegExp): Object;
        extend<T>(target: Object, source: any, whitelist? : string[] | string | Function | RegExp): T;

        lazy(object: Object, property: string, getter: () => any): Object;
        lazy<T>(object:Object, property: string, getter:() => any): T;

        lazy(object: Object, properties: {[propertyName:string]: () => any}): Object;
        lazy<T>(object: Object, properties: {[propertyName:string]: () => any}): T;

        live(object: Object, property: string, descriptor: Object | Function): Object;
        live<T>(object: Object, property: string, descriptor: Object | Function): T;

        live(object: Object, properties: {[propertyName: string]: Object | Function}): Object;
        live<T>(object: Object, properties: {[propertyName: string]: Object | Function}): T;

        type(object: Object): string;

        value(obj: Object, ...properties: string[]): any;
        value<T>(obj: Object, ...properties: string[]): T;

        value(property: string, ...properties: string[]): any;
        value<T>(property: string , ...properties: string[]): T;

        fetch(url: string, options?: {
            method?: string;
            data?: string;
            headers?:{[key:string]:string};

            onreadystatechange?: (ev: ProgressEvent) => any;
            readyState?: number;
            response?: any;
            responseBody?: any;
            responseText?: string;
            responseType?: string;
            responseXML?: any;
            status?: number;
            statusText?: string;
            timeout?: number;
            upload?: XMLHttpRequestUpload;
            withCredentials?: boolean;

            [propertyName: string]: any;
        }): Promise<XMLHttpRequest>;

        include(condition: any, url: string ): Promise<void>;
        include(url: string ): Promise<void>;

        add(name: string, callback: Function, on?: BlissStatic | BlissStaticCollection | Element | Array<any>): void;
        add(callbacks:{[callbackName: string]: Function}, on?: BlissStatic | BlissStaticCollection | Element | Array<any>): void;

        hooks: {
            add(name: string, callback: Function): void;
            run(name: string, env: Object): void;
        };

        $: BlissStaticCollection;
    }

    interface BlissStaticCollection extends BlissStatic {
        <T>(selector: string, context?: Element): BlissDecoratedArrayElement<T>;
        <T>(expr: Object, context?: Element): Array<T>;
        (expr: Window, context?: Element): [Window];
        (expr: Node, context?: Element): [Node];
    }

    interface AriaRequestEvent extends Event {
        readonly attributeName: string;
        attributeValue: string | null;
    }

    interface CommandEvent extends Event {
        readonly commandName: string;
        readonly detail: string | null;
    }

    // Native methods added into "_" property, but methods that return "void" now return thi stype in order to be chainables
    // Methods are All HTMLElement a ELement methods
    interface BlissNativeExtentions<T> {
        blur(): T;
        click(): T;
        contains(child: HTMLElement): boolean;
        dragDrop(): boolean;
        focus(): T;
        insertAdjacentElement(position: string, insertedElement: Element): Element;
        insertAdjacentHTML(where: string, html: string): T;
        insertAdjacentText(where: string, text: string): T;
        msGetInputContext(): MSInputMethodContext;
        scrollIntoView(top?: boolean): T;
        setActive(): T;
        addEventListener(type: "MSContentZoom", listener: (ev: UIEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSGestureChange", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSGestureDoubleTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSGestureEnd", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSGestureHold", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSGestureStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSGestureTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSGotPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSInertiaStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSLostPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSPointerCancel", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSPointerDown", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSPointerEnter", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSPointerLeave", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSPointerMove", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSPointerOut", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSPointerOver", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSPointerUp", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "ariarequest", listener: (ev: AriaRequestEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "command", listener: (ev: CommandEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "contextmenu", listener: (ev: PointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "mousewheel", listener: (ev: MouseEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "touchcancel", listener: (ev: TouchEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "touchend", listener: (ev: TouchEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "touchmove", listener: (ev: TouchEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "touchstart", listener: (ev: TouchEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "webkitfullscreenchange", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "webkitfullscreenerror", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "wheel", listener: (ev: WheelEvent) => any, useCapture?: boolean): T;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): T;
        getAttribute(name?: string): string;
        getAttributeNS(namespaceURI: string, localName: string): string;
        getAttributeNode(name: string): Attr;
        getAttributeNodeNS(namespaceURI: string, localName: string): Attr;
        getBoundingClientRect(): ClientRect;
        getClientRects(): ClientRectList;
        getElementsByTagName(name: "a"): NodeListOf<HTMLAnchorElement>;
        getElementsByTagName(name: "abbr"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "acronym"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "address"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "applet"): NodeListOf<HTMLAppletElement>;
        getElementsByTagName(name: "area"): NodeListOf<HTMLAreaElement>;
        getElementsByTagName(name: "article"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "aside"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "audio"): NodeListOf<HTMLAudioElement>;
        getElementsByTagName(name: "b"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "base"): NodeListOf<HTMLBaseElement>;
        getElementsByTagName(name: "basefont"): NodeListOf<HTMLBaseFontElement>;
        getElementsByTagName(name: "bdo"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "big"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "blockquote"): NodeListOf<HTMLQuoteElement>;
        getElementsByTagName(name: "body"): NodeListOf<HTMLBodyElement>;
        getElementsByTagName(name: "br"): NodeListOf<HTMLBRElement>;
        getElementsByTagName(name: "button"): NodeListOf<HTMLButtonElement>;
        getElementsByTagName(name: "canvas"): NodeListOf<HTMLCanvasElement>;
        getElementsByTagName(name: "caption"): NodeListOf<HTMLTableCaptionElement>;
        getElementsByTagName(name: "center"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "circle"): NodeListOf<SVGCircleElement>;
        getElementsByTagName(name: "cite"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "clippath"): NodeListOf<SVGClipPathElement>;
        getElementsByTagName(name: "code"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "col"): NodeListOf<HTMLTableColElement>;
        getElementsByTagName(name: "colgroup"): NodeListOf<HTMLTableColElement>;
        getElementsByTagName(name: "datalist"): NodeListOf<HTMLDataListElement>;
        getElementsByTagName(name: "dd"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "defs"): NodeListOf<SVGDefsElement>;
        getElementsByTagName(name: "del"): NodeListOf<HTMLModElement>;
        getElementsByTagName(name: "desc"): NodeListOf<SVGDescElement>;
        getElementsByTagName(name: "dfn"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "dir"): NodeListOf<HTMLDirectoryElement>;
        getElementsByTagName(name: "div"): NodeListOf<HTMLDivElement>;
        getElementsByTagName(name: "dl"): NodeListOf<HTMLDListElement>;
        getElementsByTagName(name: "dt"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "ellipse"): NodeListOf<SVGEllipseElement>;
        getElementsByTagName(name: "em"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "embed"): NodeListOf<HTMLEmbedElement>;
        getElementsByTagName(name: "feblend"): NodeListOf<SVGFEBlendElement>;
        getElementsByTagName(name: "fecolormatrix"): NodeListOf<SVGFEColorMatrixElement>;
        getElementsByTagName(name: "fecomponenttransfer"): NodeListOf<SVGFEComponentTransferElement>;
        getElementsByTagName(name: "fecomposite"): NodeListOf<SVGFECompositeElement>;
        getElementsByTagName(name: "feconvolvematrix"): NodeListOf<SVGFEConvolveMatrixElement>;
        getElementsByTagName(name: "fediffuselighting"): NodeListOf<SVGFEDiffuseLightingElement>;
        getElementsByTagName(name: "fedisplacementmap"): NodeListOf<SVGFEDisplacementMapElement>;
        getElementsByTagName(name: "fedistantlight"): NodeListOf<SVGFEDistantLightElement>;
        getElementsByTagName(name: "feflood"): NodeListOf<SVGFEFloodElement>;
        getElementsByTagName(name: "fefunca"): NodeListOf<SVGFEFuncAElement>;
        getElementsByTagName(name: "fefuncb"): NodeListOf<SVGFEFuncBElement>;
        getElementsByTagName(name: "fefuncg"): NodeListOf<SVGFEFuncGElement>;
        getElementsByTagName(name: "fefuncr"): NodeListOf<SVGFEFuncRElement>;
        getElementsByTagName(name: "fegaussianblur"): NodeListOf<SVGFEGaussianBlurElement>;
        getElementsByTagName(name: "feimage"): NodeListOf<SVGFEImageElement>;
        getElementsByTagName(name: "femerge"): NodeListOf<SVGFEMergeElement>;
        getElementsByTagName(name: "femergenode"): NodeListOf<SVGFEMergeNodeElement>;
        getElementsByTagName(name: "femorphology"): NodeListOf<SVGFEMorphologyElement>;
        getElementsByTagName(name: "feoffset"): NodeListOf<SVGFEOffsetElement>;
        getElementsByTagName(name: "fepointlight"): NodeListOf<SVGFEPointLightElement>;
        getElementsByTagName(name: "fespecularlighting"): NodeListOf<SVGFESpecularLightingElement>;
        getElementsByTagName(name: "fespotlight"): NodeListOf<SVGFESpotLightElement>;
        getElementsByTagName(name: "fetile"): NodeListOf<SVGFETileElement>;
        getElementsByTagName(name: "feturbulence"): NodeListOf<SVGFETurbulenceElement>;
        getElementsByTagName(name: "fieldset"): NodeListOf<HTMLFieldSetElement>;
        getElementsByTagName(name: "figcaption"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "figure"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "filter"): NodeListOf<SVGFilterElement>;
        getElementsByTagName(name: "font"): NodeListOf<HTMLFontElement>;
        getElementsByTagName(name: "footer"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "foreignobject"): NodeListOf<SVGForeignObjectElement>;
        getElementsByTagName(name: "form"): NodeListOf<HTMLFormElement>;
        getElementsByTagName(name: "frame"): NodeListOf<HTMLFrameElement>;
        getElementsByTagName(name: "frameset"): NodeListOf<HTMLFrameSetElement>;
        getElementsByTagName(name: "g"): NodeListOf<SVGGElement>;
        getElementsByTagName(name: "h1"): NodeListOf<HTMLHeadingElement>;
        getElementsByTagName(name: "h2"): NodeListOf<HTMLHeadingElement>;
        getElementsByTagName(name: "h3"): NodeListOf<HTMLHeadingElement>;
        getElementsByTagName(name: "h4"): NodeListOf<HTMLHeadingElement>;
        getElementsByTagName(name: "h5"): NodeListOf<HTMLHeadingElement>;
        getElementsByTagName(name: "h6"): NodeListOf<HTMLHeadingElement>;
        getElementsByTagName(name: "head"): NodeListOf<HTMLHeadElement>;
        getElementsByTagName(name: "header"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "hgroup"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "hr"): NodeListOf<HTMLHRElement>;
        getElementsByTagName(name: "html"): NodeListOf<HTMLHtmlElement>;
        getElementsByTagName(name: "i"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "iframe"): NodeListOf<HTMLIFrameElement>;
        getElementsByTagName(name: "image"): NodeListOf<SVGImageElement>;
        getElementsByTagName(name: "img"): NodeListOf<HTMLImageElement>;
        getElementsByTagName(name: "input"): NodeListOf<HTMLInputElement>;
        getElementsByTagName(name: "ins"): NodeListOf<HTMLModElement>;
        getElementsByTagName(name: "isindex"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "kbd"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "keygen"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "label"): NodeListOf<HTMLLabelElement>;
        getElementsByTagName(name: "legend"): NodeListOf<HTMLLegendElement>;
        getElementsByTagName(name: "li"): NodeListOf<HTMLLIElement>;
        getElementsByTagName(name: "line"): NodeListOf<SVGLineElement>;
        getElementsByTagName(name: "lineargradient"): NodeListOf<SVGLinearGradientElement>;
        getElementsByTagName(name: "link"): NodeListOf<HTMLLinkElement>;
        getElementsByTagName(name: "listing"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "map"): NodeListOf<HTMLMapElement>;
        getElementsByTagName(name: "mark"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "marker"): NodeListOf<SVGMarkerElement>;
        getElementsByTagName(name: "marquee"): NodeListOf<HTMLMarqueeElement>;
        getElementsByTagName(name: "mask"): NodeListOf<SVGMaskElement>;
        getElementsByTagName(name: "menu"): NodeListOf<HTMLMenuElement>;
        getElementsByTagName(name: "meta"): NodeListOf<HTMLMetaElement>;
        getElementsByTagName(name: "metadata"): NodeListOf<SVGMetadataElement>;
        getElementsByTagName(name: "nav"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "nextid"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "nobr"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "noframes"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "noscript"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "object"): NodeListOf<HTMLObjectElement>;
        getElementsByTagName(name: "ol"): NodeListOf<HTMLOListElement>;
        getElementsByTagName(name: "optgroup"): NodeListOf<HTMLOptGroupElement>;
        getElementsByTagName(name: "option"): NodeListOf<HTMLOptionElement>;
        getElementsByTagName(name: "p"): NodeListOf<HTMLParagraphElement>;
        getElementsByTagName(name: "param"): NodeListOf<HTMLParamElement>;
        getElementsByTagName(name: "path"): NodeListOf<SVGPathElement>;
        getElementsByTagName(name: "pattern"): NodeListOf<SVGPatternElement>;
        getElementsByTagName(name: "plaintext"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "polygon"): NodeListOf<SVGPolygonElement>;
        getElementsByTagName(name: "polyline"): NodeListOf<SVGPolylineElement>;
        getElementsByTagName(name: "pre"): NodeListOf<HTMLPreElement>;
        getElementsByTagName(name: "progress"): NodeListOf<HTMLProgressElement>;
        getElementsByTagName(name: "q"): NodeListOf<HTMLQuoteElement>;
        getElementsByTagName(name: "radialgradient"): NodeListOf<SVGRadialGradientElement>;
        getElementsByTagName(name: "rect"): NodeListOf<SVGRectElement>;
        getElementsByTagName(name: "rt"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "ruby"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "s"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "samp"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "script"): NodeListOf<HTMLScriptElement>;
        getElementsByTagName(name: "section"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "select"): NodeListOf<HTMLSelectElement>;
        getElementsByTagName(name: "small"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "source"): NodeListOf<HTMLSourceElement>;
        getElementsByTagName(name: "span"): NodeListOf<HTMLSpanElement>;
        getElementsByTagName(name: "stop"): NodeListOf<SVGStopElement>;
        getElementsByTagName(name: "strike"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "strong"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "style"): NodeListOf<HTMLStyleElement>;
        getElementsByTagName(name: "sub"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "sup"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "svg"): NodeListOf<SVGSVGElement>;
        getElementsByTagName(name: "switch"): NodeListOf<SVGSwitchElement>;
        getElementsByTagName(name: "symbol"): NodeListOf<SVGSymbolElement>;
        getElementsByTagName(name: "table"): NodeListOf<HTMLTableElement>;
        getElementsByTagName(name: "tbody"): NodeListOf<HTMLTableSectionElement>;
        getElementsByTagName(name: "td"): NodeListOf<HTMLTableDataCellElement>;
        getElementsByTagName(name: "text"): NodeListOf<SVGTextElement>;
        getElementsByTagName(name: "textpath"): NodeListOf<SVGTextPathElement>;
        getElementsByTagName(name: "textarea"): NodeListOf<HTMLTextAreaElement>;
        getElementsByTagName(name: "tfoot"): NodeListOf<HTMLTableSectionElement>;
        getElementsByTagName(name: "th"): NodeListOf<HTMLTableHeaderCellElement>;
        getElementsByTagName(name: "thead"): NodeListOf<HTMLTableSectionElement>;
        getElementsByTagName(name: "title"): NodeListOf<HTMLTitleElement>;
        getElementsByTagName(name: "tr"): NodeListOf<HTMLTableRowElement>;
        getElementsByTagName(name: "track"): NodeListOf<HTMLTrackElement>;
        getElementsByTagName(name: "tspan"): NodeListOf<SVGTSpanElement>;
        getElementsByTagName(name: "tt"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "u"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "ul"): NodeListOf<HTMLUListElement>;
        getElementsByTagName(name: "use"): NodeListOf<SVGUseElement>;
        getElementsByTagName(name: "var"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "video"): NodeListOf<HTMLVideoElement>;
        getElementsByTagName(name: "view"): NodeListOf<SVGViewElement>;
        getElementsByTagName(name: "wbr"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "xmp"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: string): NodeListOf<Element>;
        getElementsByTagNameNS(namespaceURI: string, localName: string): NodeListOf<Element>;
        hasAttribute(name: string): boolean;
        hasAttributeNS(namespaceURI: string, localName: string): boolean;
        msGetUntransformedBounds(): ClientRect;
        msMatchesSelector(selectors: string): boolean;
        msReleasePointerCapture(pointerId: number): T;
        msSetPointerCapture(pointerId: number): T;
        releasePointerCapture(pointerId: number): T;
        removeAttribute(name?: string): T;
        removeAttributeNS(namespaceURI: string, localName: string): T;
        removeAttributeNode(oldAttr: Attr): Attr;
        requestFullscreen(): T;
        requestPointerLock(): T;
        setAttribute(name?: string, value?: string): T;
        setAttributeNS(namespaceURI: string, qualifiedName: string, value: string): T;
        setAttributeNode(newAttr: Attr): Attr;
        setAttributeNodeNS(newAttr: Attr): Attr;
        setPointerCapture(pointerId: number): T;
        webkitMatchesSelector(selectors: string): boolean;
        webkitRequestFullScreen(): T;
        webkitRequestFullscreen(): T;
        getElementsByClassName(classNames: string): NodeListOf<Element>;
        addEventListener(type: "MSGestureChange", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSGestureDoubleTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSGestureEnd", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSGestureHold", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSGestureStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSGestureTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSGotPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSInertiaStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSLostPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSPointerCancel", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSPointerDown", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSPointerEnter", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSPointerLeave", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSPointerMove", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSPointerOut", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSPointerOver", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "MSPointerUp", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "ariarequest", listener: (ev: AriaRequestEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "command", listener: (ev: CommandEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "touchcancel", listener: (ev: TouchEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "touchend", listener: (ev: TouchEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "touchmove", listener: (ev: TouchEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "touchstart", listener: (ev: TouchEvent) => any, useCapture?: boolean): T;
        addEventListener(type: "webkitfullscreenchange", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "webkitfullscreenerror", listener: (ev: Event) => any, useCapture?: boolean): T;
        addEventListener(type: "wheel", listener: (ev: WheelEvent) => any, useCapture?: boolean): T;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): T;
    }

    interface BlissBindedElement<T> extends BlissNativeExtentions<T> {
        set(options: Object): BlissDecoratedElement<T>
        contents(elements: Object | Array<any> | string | Number | Node): BlissDecoratedElement<T>
        clone(): BlissDecoratedElement<T>;
        after(element:Element) : BlissDecoratedElement<T>;
        around(element:Element) : BlissDecoratedElement<T>;
        attributes(attrs: Object) : BlissDecoratedElement<T>;
        before(element:Element) : BlissDecoratedElement<T>;
        inside(element:Element) : BlissDecoratedElement<T>;
        properties(props: Object) : BlissDecoratedElement<T>;
        start(element:Element) : BlissDecoratedElement<T>;
        style(properties: Object) : BlissDecoratedElement<T>;
        transition(properties: Object, duration?: number) : Promise<T>;
        delegate(type: string, selector: string, callback: (event: Event) => void): BlissDecoratedElement<T>;
        delegate(type: string, selectorsToCallbacks: {[selector: string] : (event: Event) => void}): BlissDecoratedElement<T>;
        delegate(typesToSelectorsToCallbacks: {[type: string] : {[selector: string] : (event: Event) => void}}): BlissDecoratedElement<T>;
        events(handlers: {[eventName:string] : (event: Event) => void} | Element): BlissDecoratedElement<T>;
        fire(type: string, properties?: {[propertyName: string] : any}): BlissDecoratedElement<T>;
        once(handlers: {[eventName:string] : (event: Event) => void} | Element): BlissDecoratedElement<T>;

        remove(): BlissDecoratedElement<T>;
    }

    interface BlissBindedArray<T> {
        all(method: string, ...args: Array<any>): Array<any>;
        all<T>(method: string, ...args: Array<any>): Array<T>;
    }

    interface BlissCollectionArray<T> {
        set(options: Object): BlissCollectionArray<T>
        contents(elements: Object | Array<any> | string | Number | Node): BlissCollectionArray<T>
        clone(): BlissCollectionArray<T>;
        after(element:Element) : BlissCollectionArray<T>;
        around(element:Element) : BlissCollectionArray<T>;
        attributes(attrs: Object) : BlissCollectionArray<T>;
        before(element:Element) : BlissCollectionArray<T>;
        inside(element:Element) : BlissCollectionArray<T>;
        properties(props: Object) : BlissCollectionArray<T>;
        start(element:Element) : BlissCollectionArray<T>;
        style(properties: Object) : BlissCollectionArray<T>;
        transition(properties: Object, duration?: number) : Promise<T>[];
        delegate(type: string, selector: string, callback: (event: Event) => void): BlissCollectionArray<T>;
        delegate(type: string, selectorsToCallbacks: {[selector: string] : (event: Event) => void}): BlissCollectionArray<T>;
        delegate(typesToSelectorsToCallbacks: {[type: string] : {[selector: string] : (event: Event) => void}}): BlissCollectionArray<T>;
        events(handlers: {[eventName:string] : (event: Event) => void} | Element): BlissCollectionArray<T>;
        fire(type: string, properties?: {[propertyName: string] : any}): BlissCollectionArray<T>;
        once(handlers: {[eventName:string] : (event: Event) => void} | Element): BlissCollectionArray<T>;

        addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): BlissCollectionArray<T>;

        remove(): BlissCollectionArray<T>;
    }
}

declare var Bliss: BlissNS.BlissStatic;
declare var $: BlissNS.BlissStatic;
declare var $$: BlissNS.BlissStaticCollection;
