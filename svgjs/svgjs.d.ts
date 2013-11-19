// Type definitions for svg.js
// Project: http://www.svgjs.com/
// Definitions by: Sean Hess <https://seanhess.github.io/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// Reference: http://documentup.com/wout/svg.js

// TODO sets
// TODO gradients

declare var SVG:svgjs.Library;

declare module svgjs {

    export interface LinkedHTMLElement extends HTMLElement {
        instance: Element;
    }

    export interface Library {
        (selector:string):Doc;
        (domElement:HTMLElement):Doc;
        create(name:string):any;
        Element:ElementStatic;
        supported:boolean;
        get(id:string):Element;
        extend(parent:Object, obj:Object):void;
    }

    export interface Doc extends Parent {
        svg(data:string):any;
        pattern(w:number, h:number, add:(e:Element)=>void):Element;
        
        defs():Defs;

        use(element:Element):Element;

        clear():void;

        mask():Mask;

        // TODO gradients
    }    

    export interface Element {
        node:LinkedHTMLElement;

        nested():Doc;

        animate(duration?:number, ease?:string, delay?:number):Animation;
        animate(info:{ease?:string; duration?:number; delay?:number}):Animation;

        attr(name:string, value:any, namespace?:string):Element;
        attr(obj:Object):Element;
        attr(name:string):any;
        viewbox():Viewbox;
        viewbox(x:number, y:number, w:number, h:number):Element;
        viewbox(obj:Viewbox):Element;

        move(x:number, y:number, anchor?:boolean):Element;
        x(x:number, anchor?:boolean):Element;
        y(y:number, anchor?:boolean):Element;
        
        center(x:number, y:number, anchor?:boolean):Element;
        cx(x:number, anchor?:boolean):Element;
        cy(y:number, anchor?:boolean):Element;

        size(w:number, h:number, anchor?:boolean):Element;

        show():Element;
        hide():Element;
        visible():boolean;
        remove():void;

        each(iterator:(i?:number, children?:Element[])=>void, deep?:boolean):void;

        transform(t:Transform):Element;
        
        
        style(name:string, value:string):Element;
        style(obj:Object):Element;
        style(name:string):string;
        style():string;
        bbox():BBox;
        rbox():RBox;
        doc():Doc;
        data(name:string):any;
        data(name:string, value:any):Element;
        remember(name:string, value:any):Element;
        remember(obj:Object):Element;
        remember(name:string):any;
        forget(...keys:string[]):Element;

        fill(fill:{color?:string; opacity?:number}):Element;
        fill(color:string):Element;
        fill(pattern:Element):Element;
        stroke(data:{color?:string; opacity?:number; width?: number}):Element;
        stroke(color:string):Element;
        opacity(o:number):Element;
        rotate(d:number, cx?:number, cy?:number):Element;
        skew(x:number, y:number):Element;
        scale(x:number, y:number):Element;
        translate(x:number, y:number):Element;

        maskWith(element:Element):Element;
        masker:Element;
        unmask():Element;

        clipWith(element:Element):Element;
        clipper:Element;
        unclip():Element;

        front():Element;
        back():Element;
        forward():Element;
        backward():Element;

        siblings():Element[];
        position():number;
        next():Element;
        previous():Element;
        before(element:Element):Element;
        after(element:Element):Element;


        click(cb:Function):void;
        on(event:string, cb:Function):void;
        off(event:string, cb:Function):void;
    }

    export interface Mask extends Element {
        add(element:Element):Mask;
    }

    export interface Text extends Element {
        text(text:string):Text;
        content:string;
        font(font:{family?:string; size?:number; anchor?:string; leading?:string}):Text;
        tspan(text:string):Text;
        path(data:string):Text;
        plot(data:string):Text;
        track:Text;
    }

    export interface ElementStatic extends Parent {
        new(node:any):Element;
    }

    export interface Defs extends Element {}


    export interface Animation {
        stop():Animation;

        attr(name:string, value:any, namespace?:string):Animation;
        attr(obj:Object):Animation;
        attr(name:string):any;

        viewbox(x:number, y:number, w:number, h:number):Animation;

        move(x:number, y:number, anchor?:boolean):Animation;
        x(x:number, anchor?:boolean):Animation;
        y(y:number, anchor?:boolean):Animation;
        
        center(x:number, y:number, anchor?:boolean):Animation;
        cx(x:number, anchor?:boolean):Animation;
        cy(y:number, anchor?:boolean):Animation;

        size(w:number, h:number, anchor?:boolean):Animation;
        during(cb:(pos:number)=>void):Animation;
        to(value:number):Animation;
        after(cb:()=>void):Animation;

        // TODO style, etc, bbox... 
    }
    
    export interface Parent extends Element {
        put(element:Element, i?:number):Element;
        add(element:Element, i?:number):Parent;
        children:Element[];

        rect(w:number, h:number):Element;
        ellipse(w:number, h:number):Element;
        circle(diameter:number):Element;
        line(x1:number, y1:number, x2:number, y2:number):Element;
        polyline(data:string):Element;
        polyline(points:number[][]):Element;
        polygon(data:string):Element;
        polygon(points:number[][]):Element;
        path(data:string):Element;
        image(url:string, w:number, h:number):Element;
        text(text:string):Text;
        text(adder:(element:Text)=>void):Element;        

        group():Parent;
    }

    export interface BBox {
        height:number;
        width:number;
        y:number;
        x:number;
        cx:number;
        cy:number;
        merge(bbox:BBox):BBox;
    }

    export interface RBox extends BBox {}

    export interface Viewbox {
        x: number;
        y: number;
        width: number;
        height: number;
        zoom?: number;
    }

    export interface Transform {
        x?: number;
        y?: number;
        rotation?: number;
        cx?: number;
        cy?: number;
        scaleX?: number;
        scaleY?: number;
        skewX?: number;
        skewY?: number;
        matrix?: string; // 1,0,0,1,0,0
        a?: number; // direct digits of matrix
        b?: number;
        c?: number;
        d?: number;
        e?: number;
        f?: number;
    }
}