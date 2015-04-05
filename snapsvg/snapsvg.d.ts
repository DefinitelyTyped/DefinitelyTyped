// Type definitions for Snap-SVG 0.3
// Project: https://github.com/adobe-webplatform/Snap.svg
// Definitions by: Lars Klein <https://github.com/lhk>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare function mina(a:number, A:number, b:number, B:number, get:Function, set:Function, easing?:Function):Object;
declare module mina {
    export interface Mina {
        id: string;
        duration: Function;
        easing: Function;
        speed: Function;
        status: Function;
        stop: Function;
    }

	export function backin(n:number):number;
	export function backout(n:number):number;
	export function bounce(n:number):number;
	export function easein(n:number):number;
	export function easeinout(n:number):number;
	export function easeout(n:number):number;
	export function elastic(n:number):number;
	export function getById(id:string):Object;
	export function linear(n:number):number;
	export function time():number;
}

declare function Snap(width:number,height:number):Snap.Paper;
declare function Snap(query:string):Snap.Paper;
declare function Snap(DOM:SVGElement):Snap.Paper;

declare module Snap {

	export var filter:Filter;
	export var path:Path;
	
	export function Matrix(a:number,b:number,c:number,d:number,e:number,f:number):Matrix;
	export function Matrix(svgMatrix:SVGMatrix):Matrix;
	
	export function ajax(url:string,postData:string,callback:Function,scope?:Object):XMLHttpRequest;
	export function ajax(url:string,postData:Object,callback:Function,scope?:Object):XMLHttpRequest;
	export function ajax(url:string,callback:Function,scope?:Object):XMLHttpRequest;
	export function format(token:string,json:Object):string;
	export function fragment(varargs:any):Fragment;
	export function getElementByPoint(x:number,y:number):Object;
	export function is(o:any,type:string):boolean;
	export function load(url:string,callback:Function,scope?:Object):void;
	export function plugin(f:Function):void;
	export function select(query:string):Snap.Element;
	export function selectAll(query:string):any;
	export function snapTo(values:Array<number>,value:number,tolerance?:number):number;
	
	export function animate(from:number,to:number,setter:Function,duration:number,easing:Function,callback:Function):mina.Mina;
	export function animate(from:Array<number>,to:number,setter:Function,duration:number,easing:Function,callback:Function):mina.Mina;
	export function animate(from:number,to:Array<number>,setter:Function,duration:number,easing:Function,callback:Function):mina.Mina;
	export function animate(from:Array<number>,to:Array<number>,setter:Function,duration:number,easing:Function,callback:Function):mina.Mina;
	export function animation(attr:Object,duration:number,easing?:Function,callback?:Function):Object;
	
	export function color(clr:string):Object;export function getRGB(color:string):Object;
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
	
	export function parse(svg:string):Fragment;
	export function parsePathString(pathString:string):Array<any>;
	export function parsePathString(pathString:Array<string>):Array<any>;
	export function parseTransformString(TString:string):Array<any>;
	export function parseTransformString(TString:Array<string>):Array<any>;
	
	export interface RGB{
		r:number;
		g:number;
		b:number;
		hex:string;
	}
	
	export interface HSB{
		h:number;
		s:number;
		b:number;
	}
	export interface HSL{
		h:number;
		s:number;
		l:number;
	}
	
	export interface BBox{
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

	export interface Element {
		add():void;
		addClass(value:string):Snap.Element;
		after(el:Snap.Element):Snap.Element;
		animate(attrs:Object,duration:number,easing?:Function,callback?:Function):Snap.Element;
		animate(animation:any):Snap.Element;
		append(el:Snap.Element):Snap.Element;
		appendTo(el:Snap.Element):Snap.Element;
		asPX(attr:string,value?:string):Snap.Element;
		attr(params:Object):Snap.Element;
		attr(param:string):string;
		before(el:Snap.Element):Snap.Element;
		clone():Snap.Element;
		data(key:string,value?:any):any;
		getBBox():BBox;
		getPointAtLength(length:number):Object;
		getSubpath(from:number,to:number):string;
		getTotalLength():number;
		hasClass(value:string):boolean;
		inAnim():Object;
		innerSVG():string;
		insertAfter(el:Snap.Element):Snap.Element;
		insertBefore(el:Snap.Element):Snap.Element;
		marker(x:number,y:number,width:number,height:number,refX:number,refY:number):Snap.Element;
		node:Element;
		outerSVG():string;
		parent():Snap.Element;
		pattern(x:any,y:any,width:any,height:any):Snap.Element;
		prepend(el:Snap.Element):Snap.Element;
		prependTo(el:Snap.Element):Snap.Element;
		remove():Snap.Element;
		removeClass(value:string):Snap.Element;
		removeData(key?:string):Snap.Element;
		select(query:string):Snap.Element;
        selectAll(query: string): Snap.Set;
        selectAll(): Snap.Set;
		stop():Snap.Element;
		toDefs():Snap.Element;
		toPattern(x:number,y:number,width:number,height:number):Object;
		toPattern(x:string,y:string,width:string,height:string):Object;
		toString():string;
		toggleClass(value:string,flag:boolean):Snap.Element;
		transform(tstr:string):any;
		type:string;
		use():Object;
		
		click(handler:Function):Snap.Element;
		unclick(handler:Function):Snap.Element;
		dblclick(handler:Function):Snap.Element;
		undblclick(handler:Function):Snap.Element;
		mousedown(handler:Function):Snap.Element;
		unmousedown(handler:Function):Snap.Element;
		mousemove(handler:Function):Snap.Element;
		unmousemove(handler:Function):Snap.Element;
		mouseout(handler:Function):Snap.Element;
		unmouseout(handler:Function):Snap.Element;
		mouseover(handler:Function):Snap.Element;
		unmouseover(handler:Function):Snap.Element;
		mouseup(handler:Function):Snap.Element;
		unmouseup(handler:Function):Snap.Element;
		touchstart(handler:Function):Snap.Element;
		untouchstart(handler:Function):Snap.Element;
		touchmove(handler:Function):Snap.Element;
		untouchmove(handler:Function):Snap.Element;
		touchend(handler:Function):Snap.Element;
		untouchend(handler:Function):Snap.Element;
		touchcancel(handler:Function):Snap.Element;
		untouchcancel(handler:Function):Snap.Element;
		hover(f_in:Function,f_out:Function,icontext?:Object,ocontext?:Object):Snap.Element;
        unhover(f_in: Function, f_out: Function): Snap.Element;
        drag(): void;
		drag(onmove:Function,onstart:Function,onend:Function,mcontext?:Object,scontext?:Object,econtext?:Object):Snap.Element;
		undrag():Snap.Element;
	}
	
	export interface Fragment {
		//TODO: The documentation says that selectAll returns a set, but the getting started guide
		// uses .attr on the returned object. That's not supported by a set
		select(query:string):Snap.Element;
		selectAll(query:string):Snap.Set;
		selectAll():Snap.Set;
	}
	
	export interface Matrix {
		add(a:number,b:number,c:number,d:number,e:number,f:number):void;
		add(matrix:Matrix):void;
		clone():Matrix;
		determinant():number;
		invert():Matrix;
		rotate(a:number,x:number,y:number):void;
		scale(x:number,y?:number,cx?:number,cy?:number):void;
		split():Object;
		toTransformString():string;	
		translate(x:number,y:number):void;
		x(x:number,y:number):number;
		y(x:number,y:number):number;
	
	}
	
	interface Paper extends Snap.Element {

	clear():void;
	el(name:string, attr:Object):Snap.Element;
	gradient(gradient:string):any;
	g(varargs?:any):any;
	group(el?:any,...els:any[]):any;
	mask(varargs:any):Object;
	ptrn(x:number,y:number,width:number,height:number,vbx:number,vby:number,vbw:number,vbh:number):Object;
	svg(x:number,y:number,width:number,height:number,vbx:number,vby:number,vbw:number,vbh:number):Object;
	toString():string;
	use(id?:string):Object;
	use(id?:Snap.Element):Object;
	
	circle(x:number,y:number,r:number):Snap.Element;
	ellipse(x:number,y:number,rx:number,ry:number):Snap.Element;
	image(src:string,x:number,y:number,width:number,height:number):Snap.Element;
	line(x1:number,y1:number,x2:number,y2:number):Snap.Element;
	path(pathString?:string):Snap.Element;
	polygon(varargs:any[]):Snap.Element;
	polyline(varargs:any[]):Snap.Element;
	rect(x:number,y:number,width:number,height:number,rx?:number,ry?:number):Snap.Element;
	text(x:number,y:number,text:string):Snap.Element;
	text(x:number,y:number,text:Array<string>):Snap.Element;
	}

	export interface Set {
		animate(attrs:Object,duration:number,easing?:Function,callback?:Function):Snap.Element;
        attr(params: Object): Snap.Element;
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
		shadow(dx:number,dy:number,blur?:number,color?:string,opacity?:number):string;
	}
	
	interface Path {
		bezierBBox(...args:number[]):Object;
		bezierBBox(bez:Array<number>):Object;
		findDotsAtSegment(p1x:number,p1y:number,c1x:number,
		                  c1y:number,c2x:number,c2y:number,
		                  p2x:number,p2y:number,t:number):Object;
		getBBox(path:string):Object;
		getPointAtLength(path:string,length:number):Object;
		getSubpath(path:string,from:number,to:number):string;
		getTotalLength(path:string):number;
		intersection(path1:string,path2:string):Array<any>;
		isBBoxIntersect(bbox1:string,bbox2:string):boolean
		isPointInside(path:string,x:number,y:number):boolean;
		isPointInsideBBox(bbox:string,x:string,y:string):boolean;
		map(path:string,matrix:Snap.Matrix):string;
		map(path:string,matrix:Object):string;
		toAbsolute(path:string):Array<any>;
		toCubic(pathString:string):Array<any>;
		toCubic(pathString:Array<string>):Array<any>;
		toRelative(path:string):Array<any>;
	}
}
