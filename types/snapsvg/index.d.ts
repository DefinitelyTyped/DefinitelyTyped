// Type definitions for Snap-SVG 0.4.1
// Project: https://github.com/adobe-webplatform/Snap.svg
// Definitions by: Lars Klein <https://github.com/lhk>, Mattanja Kern <https://github.com/mattanja>, Andrey Kurdyumov <https://github.com/kant2002>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="mina" />

export = Snap;
export as namespace Snap;

declare function Snap(width:number|string,height:number|string):Snap.Paper;
declare function Snap(query:string):Snap.Paper;
declare function Snap(DOM:SVGElement):Snap.Paper;

declare namespace Snap {
    export var filter:Filter;
    export var path:Path;

    export function Matrix():void;
    export function matrix():Matrix;
    export function matrix(a:number,b:number,c:number,d:number,e:number,f:number):Matrix;
    export function matrix(svgMatrix:SVGMatrix):Matrix;

    export function ajax(url:string,postData:string,callback:Function,scope?:Object):XMLHttpRequest;
    export function ajax(url:string,postData:Object,callback:Function,scope?:Object):XMLHttpRequest;
    export function ajax(url:string,callback:Function,scope?:Object):XMLHttpRequest;
    export function format(token:string,json:Object):string;
    export function fragment(varargs:any):Fragment;
    export function getElementByPoint(x:number,y:number):Snap.Element;
    export function is(o:any,type:string):boolean;
    export function load(url:string,callback:Function,scope?:Object):void;
    export function plugin(f:Function):void;
    export function select(query:string):Snap.Element;
    export function selectAll(query:string):any;
    export function snapTo(values:Array<number>|number,value:number,tolerance?:number):number;

    export function animate(from:number|number[],to:number|number[],updater:(n:number)=>void,duration:number,easing?:(num:number)=>number,callback?:()=>void):mina.MinaAnimation;
    export function animation(attr:Object,duration:number,easing?:(num:number)=>number,callback?:()=>void):Snap.Animation;

    export function color(clr:string):RGBHSB;
    export function getRGB(color:string):RGB;
    export function hsb(h:number,s:number,b:number):HSB;
    export function hsl(h:number,s:number,l:number):HSL;
    export function rgb(r:number,g:number,b:number):RGB;
    export function hsb2rgb(h:number,s:number,v:number):RGB;
    export function hsl2rgb(h:number,s:number,l:number):RGB;
    export function rgb2hsb(r:number,g:number,b:number):HSB;
    export function rgb2hsl(r:number,g:number,b:number):HSL;

    export function angle(x1:number,y1:number,x2:number,y2:number,x3?:number,y3?:number):number;
    export function rad(deg:number):number;
    export function deg(rad:number):number;
    export function sin(angle: number): number;
    export function cos(angle: number): number;
    export function tan(angle: number): number;
    export function asin(angle: number): number;
    export function acos(angle: number): number;
    export function atan(angle: number): number;
    export function atan2(angle: number): number;

    export function len(x1: number, y1: number, x2: number, y2: number): number;
    export function len2(x1: number, y1: number, x2: number, y2: number): number;

    export function parse(svg:string):Fragment;
    export function parsePathString(pathString:string):Array<any>;
    export function parsePathString(pathString:Array<string>):Array<any>;
    export function parseTransformString(TString:string):Array<any>;
    export function parseTransformString(TString:Array<string>):Array<any>;

    export function closest(x: number, y: number, X: number, Y: number): boolean;

    export interface RGB {
        r:number;
        g:number;
        b:number;
        hex:string;
    }

    export interface HSB {
        h:number;
        s:number;
        b:number;
    }

    export interface RGBHSB {
        r:number;
        g:number;
        b:number;
        hex:string;
        error:boolean;
        h:number;
        s:number;
        v:number;
        l:number;
    }

    export interface HSL {
        h:number;
        s:number;
        l:number;
    }

    export interface BBox {
        cx:number;
        cy:number;
        h:number;
        height:number;
        path:number;
        r0:number;
        r1:number;
        r2:number;
        vb:string;
        w:number;
        width:number;
        x2:number;
        x:number;
        y2:number;
        y:number;
    }

    export interface TransformationDescriptor {
        string: string;
        globalMatrix: Snap.Matrix;
        localMatrix: Snap.Matrix;
        diffMatrix: Snap.Matrix;
        global: string;
        local: string;
        toString(): string;
    }

    export interface Animation {
        attr:{[attr:string]:string|number|boolean|any};
        duration:number;
        easing?:(num:number)=>number;
        callback?:()=>void;
    }

    export interface Element {
        add(el:Snap.Element):Snap.Element;
        add(el:Snap.Set):Snap.Element;
        addClass(value:string):Snap.Element;
        after(el:Snap.Element):Snap.Element;
        align(el: Snap.Element, way: string):Snap.Element;
        animate(animation:any):Snap.Element;
        animate(attrs:{[attr:string]:string|number|boolean|any},duration:number,easing?:(num: number)=> number,callback?:()=>void):Snap.Element;
        append(el:Snap.Element):Snap.Element;
        append(el:Snap.Set):Snap.Element;
        appendTo(el:Snap.Element):Snap.Element;
        asPX(attr:string,value?:string):number;            //TODO: check what is really returned
        attr(param: "viewBox"): BBox;
        attr(param: string): string;
        attr(params:{[attr:string]:string|number|boolean|BBox|any}):Snap.Element;
        before(el:Snap.Element):Snap.Element;
        children(): Snap.Element[];
        clone():Snap.Element;
        data(key:string,value?:any):any;
        getAlign(el: Snap.Element, way: string): string;
        getBBox():BBox;
        getPointAtLength(length:number):{x:number, y:number, alpha:number};
        getSubpath(from:number,to:number):string;
        getTotalLength():number;
        hasClass(value:string):boolean;
        inAnim(): { anim: Animation; mina: mina.AnimationDescriptor; curStatus: number; status: (n?: number) => number; stop: () => void }[];
        innerSVG():string;
        insertAfter(el:Snap.Element):Snap.Element;
        insertBefore(el:Snap.Element):Snap.Element;
        marker(x:number,y:number,width:number,height:number,refX:number,refY:number):Snap.Element;
        node:HTMLElement;
        outerSVG():string;
        /** The top level element will included an reference to its Paper after it is rendered. */
        paper?: Snap.Paper;
        parent():Snap.Element;
        pattern(x:any,y:any,width:any,height:any):Snap.Element;
        prepend(el:Snap.Element):Snap.Element;
        prependTo(el:Snap.Element):Snap.Element;
        remove():Snap.Element;
        removeClass(value:string):Snap.Element;
        removeData(key?:string):Snap.Element;
        select(query:string):Snap.Element;
        stop():Snap.Element;
        toDefs():Snap.Element;
        toJSON(): any;
        toggleClass(value:string,flag:boolean):Snap.Element;
        toPattern(x:number,y:number,width:number,height:number):Object;
        toPattern(x:string,y:string,width:string,height:string):Object;
        toString():string;
        transform(): TransformationDescriptor;
        transform(tstr:string):Snap.Element;
        type:string;
        use():Object;
        selectAll(): Snap.Set;
        selectAll(query: string): Snap.Set;

        click(handler: (event: MouseEvent) => void, thisArg?: any): Snap.Element;
        dblclick(handler: (event: MouseEvent) => void, thisArg?: any): Snap.Element;
        mousedown(handler: (event: MouseEvent) => void, thisArg?: any): Snap.Element;
        mousemove(handler: (event: MouseEvent) => void, thisArg?: any): Snap.Element;
        mouseout(handler: (event: MouseEvent) => void, thisArg?: any): Snap.Element;
        mouseover(handler: (event: MouseEvent) => void, thisArg?: any): Snap.Element;
        mouseup(handler: (event: MouseEvent) => void, thisArg?: any): Snap.Element;
        touchstart(handler: (event: MouseEvent) => void, thisArg?: any): Snap.Element;
        touchmove(handler: (event: MouseEvent) => void, thisArg?: any): Snap.Element;
        touchend(handler: (event: MouseEvent) => void, thisArg?: any): Snap.Element;
        touchcancel(handler: (event: MouseEvent) => void, thisArg?: any): Snap.Element;

        unclick(handler?: (event: MouseEvent) => void): Snap.Element;
        undblclick(handler?: (event: MouseEvent) => void): Snap.Element;
        unmousedown(handler?: (event: MouseEvent) => void): Snap.Element;
        unmousemove(handler?: (event: MouseEvent) => void): Snap.Element;
        unmouseout(handler?: (event: MouseEvent) => void): Snap.Element;
        unmouseover(handler?: (event: MouseEvent) => void): Snap.Element;
        unmouseup(handler?: (event: MouseEvent) => void): Snap.Element;
        untouchstart(handler?: (event: MouseEvent) => void): Snap.Element;
        untouchmove(handler?: (event: MouseEvent) => void): Snap.Element;
        untouchend(handler?: (event: MouseEvent) => void): Snap.Element;
        untouchcancel(handler?: (event: MouseEvent) => void): Snap.Element;

        hover(hoverInHandler: (event: MouseEvent) => void, hoverOutHandler: (event: MouseEvent) => void, thisArg?: any): Snap.Element;
        hover(hoverInHandler: (event: MouseEvent) => void, hoverOutHandler: (event: MouseEvent) => void, inThisArg?: any, outThisArg?: any): Snap.Element;
        unhover(hoverInHandler: (event: MouseEvent) => void, hoverOutHandler: (event: MouseEvent) => void): Snap.Element;

        drag():Snap.Element;
        drag(onMove:  (dx: number, dy: number, x: number, y: number, event: MouseEvent) => void,
             onStart: (x: number, y: number, event: MouseEvent) => void,
             onEnd:   (event: MouseEvent) => void,
             moveThisArg?: any,
             startThisArg?: any,
             endThisArg?: any): Snap.Element;

        undrag(onMove:  (dx: number, dy: number, event: MouseEvent) => void,
               onStart: (x: number, y: number, event: MouseEvent) => void,
               onEnd:   (event: MouseEvent) => void): Snap.Element;
        undrag(): Snap.Element;
    }
    
    interface Gradient extends Element {
        stops: () => Snap.Element[];
        addStop: (color: string, offset: number) => Gradient;
        setStops:(str: string) => Gradient;
    }

    export interface Fragment {
        //TODO: The documentation says that selectAll returns a set, but the getting started guide
        // uses .attr on the returned object. That's not supported by a set
        select(query:string):Snap.Element;
        selectAll(query ?:string):Snap.Set;
    }

    export interface Matrix {
        add(a:number,b:number,c:number,d:number,e:number,f:number):Matrix;
        add(matrix:Matrix):Matrix;
        clone():Matrix;
        determinant():number;
        invert():Matrix;
        rotate(a:number,x?:number,y?:number):Matrix;
        scale(x:number,y?:number,cx?:number,cy?:number):Matrix;
        split():ExplicitTransform;
        toTransformString():string;
        translate(x:number,y:number):Matrix;
        x(x:number,y:number):number;
        y(x:number,y:number):number;
    }

    interface ExplicitTransform {
        dx: number;
        dy: number;
        scalex: number;
        scaley: number;
        shear: number;
        rotate: number;
        isSimple: boolean;
    }

    interface Paper extends Snap.Element {
        clear():void;
        el(name:string, attr:Object):Snap.Element;
        filter(filstr:string):Snap.Element;
        gradient(gradient:string):Snap.Gradient;
        g(varargs?:any):Snap.Paper;
        group(...els:any[]):Snap.Paper;
        mask(varargs:any):Object;
        ptrn(x:number,y:number,width:number,height:number,vbx:number,vby:number,vbw:number,vbh:number):Object;
        svg(x:number,y:number,width:number,height:number,vbx:number,vby:number,vbw:number,vbh:number):Object;
        toDataURL(): string;
        toString():string;
        use(id?:string):Object;
        use(id?:Snap.Element):Object;

        circle(x:number,y:number,r:number):Snap.Element;
        ellipse(x:number,y:number,rx:number,ry:number):Snap.Element;
        image(src:string,x:number,y:number,width:number,height:number):Snap.Element;
        line(x1:number,y1:number,x2:number,y2:number):Snap.Element;
        path(pathSpec: string | (string | number)[][]): Snap.Element;
        polygon(varargs:any[]):Snap.Element;
        polyline(varargs:any[]):Snap.Element;
        rect(x:number,y:number,width:number,height:number,rx?:number,ry?:number):Snap.Element;
        text(x:number,y:number,text:string|number):Snap.Element;
        text(x:number,y:number,text:Array<string|number>):Snap.Element;
        symbol(vbx:number,vby:number,vbw:number,vbh:number):Snap.Element;
    }

    export interface Set {
        animate(attrs:{[attr:string]:string|number|boolean|any},duration:number,easing?:(num:number)=>number,callback?:()=>void):Snap.Element;
        animate(...params:Array<{attrs:any,duration:number,easing:(num:number)=>number,callback?:()=>void}>):Snap.Element;
        attr(params: {[attr:string]:string|number|boolean|BBox|any}): Snap.Element;
        attr(param: "viewBox"): BBox;
        attr(param: string): string;
        bind(attr: string, callback: Function): Snap.Set;
        bind(attr:string,element:Snap.Element):Snap.Set;
        bind(attr:string,element:Snap.Element,eattr:string):Snap.Set;
        clear():Snap.Set;
        exclude(element:Snap.Element):boolean;
        forEach(callback:Function,thisArg?:Object):Snap.Set;
        pop():Snap.Element;
        push(el:Snap.Element):Snap.Element;
        push(els:Snap.Element[]):Snap.Element;
        remove(): Snap.Set;
        splice(index:number,count:number,insertion?:Object[]):Snap.Element[];
    }

    interface Filter {
        blur(x:number,y?:number):string;
        brightness(amount:number):string;
        contrast(amount:number):string;
        grayscale(amount:number):string;
        hueRotate(angle:number):string;
        invert(amount:number):string;
        saturate(amount:number):string;
        sepia(amount:number):string;
        shadow(dx: number, dy: number, blur: number, color: string, opacity: number): string;
        shadow(dx: number, dy: number, color: string, opacity: number): string;
        shadow(dx: number, dy: number, opacity: number): string;
    }

    interface Path {
        bezierBBox(...args:number[]):BBox;
        bezierBBox(bez:Array<number>):BBox;
        findDotsAtSegment(p1x:number,p1y:number,c1x:number,
                          c1y:number,c2x:number,c2y:number,
                          p2x:number,p2y:number,t:number):Object;
        getBBox(path:string):BBox;
        getPointAtLength(path:string,length:number):Object;
        getSubpath(path:string,from:number,to:number):string;
        getTotalLength(path:string):number;
        intersection(path1:string,path2:string):Array<IntersectionDot>;
        isBBoxIntersect(bbox1:BBox,bbox2:BBox):boolean
        isPointInside(path:string,x:number,y:number):boolean;
        isPointInsideBBox(bbox:BBox,x:number,y:number):boolean;
        map(path:string,matrix:Snap.Matrix):string;
        map(path:string,matrix:Object):string;
        toAbsolute(path:string):Array<any>;
        toCubic(pathString:string):Array<any>;
        toCubic(pathString:Array<string>):Array<any>;
        toRelative(path:string):Array<any>;
    }

    interface IntersectionDot{
        x:number,
        y:number,
        t1:number,
        t2:number,
        segment1:number,
        segment2:number,
        bez1:Array<number>,
        bez2:Array<number>
    }
}
