// Type definitions for Raphael 2.1
// Project: http://raphaeljs.com
// Definitions by: https://github.com/CheCoxshall
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped


interface BoundingBox {
    x: number;
    y: number;
    x2: number;
    y2: number;
    width: number;
    height: number;
}

interface RaphaelAnimation {
    delay(delay: number): RaphaelAnimation;
    repeat(repeat: number): RaphaelAnimation;
}

interface RaphaelFont {

}

interface RaphaelElement {
    animate(params: { [key: string]: any; }, ms: number, easing?: string, callback?: Function): RaphaelElement;
    animate(animation: RaphaelAnimation): RaphaelElement;
    animateWith(el: RaphaelElement, anim: RaphaelAnimation, params: any, ms: number, easing?: string, callback?: Function): RaphaelElement;
    animateWith(el: RaphaelElement, anim: RaphaelAnimation, animation: RaphaelAnimation): RaphaelElement;
    attr(attrName: string, value: any): RaphaelElement;
    attr(params: { [key: string]: any; }): RaphaelElement;
    attr(attrName: string): any;
    attr(attrNames: string[]): any[];
    click(handler: Function): RaphaelElement;
    clone(): RaphaelElement;
    data(key: string): any;
    data(key: string, value: any): RaphaelElement;
    dblclick(handler: Function): RaphaelElement;
    drag(onmove: (dx: number, dy: number, x: number, y: number, event: DragEvent) =>{ }, onstart: (x: number, y: number, event: DragEvent) =>{ }, onend: (DragEvent) =>{ }, mcontext?: any, scontext?: any, econtext?: any): RaphaelElement;
    getBBox(isWithoutTransform?: bool): BoundingBox;
    glow(glow?: { width?: number; fill?: bool; opacity?: number; offsetx?: number; offsety?: number; color?: string; }): RaphaelSet;
    hide(): RaphaelElement;
    hover(f_in: Function, f_out: Function, icontext?: any, ocontext?: any): RaphaelElement;
    id: string;
    insertAfter(): RaphaelElement;
    insertBefore(): RaphaelElement;
    isPointInside(x: number, y: number): bool;
    isVisible(): bool;
    matrix: RaphaelMatrix;
    mousedown(handler: Function): RaphaelElement;
    mousemove(handler: Function): RaphaelElement;
    mouseout(handler: Function): RaphaelElement;
    mouseover(handler: Function): RaphaelElement;
    mouseup(handler: Function): RaphaelElement;
    next: RaphaelElement;
    node: Element;
    onDragOver(f: Function): RaphaelElement;
    paper: RaphaelPaper;
    pause(anim?: RaphaelAnimation): RaphaelElement;
    prev: RaphaelElement;
    raphael: RaphaelStatic;
    remove();
    removeData(key?: string): RaphaelElement;
    resume(anim?: RaphaelAnimation): RaphaelElement;
    setTime(anim: RaphaelAnimation);
    setTime(anim: RaphaelAnimation, value: number): RaphaelElement;
    show(): RaphaelElement;
    status(): { anim: RaphaelAnimation; status: number; }[];
    status(anim: RaphaelAnimation): number;
    status(anim: RaphaelAnimation, value: number): RaphaelElement;
    stop(anim?: RaphaelAnimation): RaphaelElement;
    toBack(): RaphaelElement;
    toFront(): RaphaelElement;
    touchcancel(handler: Function): RaphaelElement;
    touchend(handler: Function): RaphaelElement;
    touchmove(handler: Function): RaphaelElement;
    touchstart(handler: Function): RaphaelElement;
    transform(): string;
    transform(tstr: string): RaphaelElement;
    unclick(handler? ): RaphaelElement;
    undblclick(handler? ): RaphaelElement;
    undrag(): RaphaelElement;
    unhover(): RaphaelElement;
    unhover(f_in, f_out): RaphaelElement;
    unmousedown(handler? ): RaphaelElement;
    unmousemove(handler? ): RaphaelElement;
    unmouseout(handler? ): RaphaelElement;
    unmouseover(handler? ): RaphaelElement;
    unmouseup(handler? ): RaphaelElement;
    untouchcancel(handler? ): RaphaelElement;
    untouchend(handler? ): RaphaelElement;
    untouchmove(handler? ): RaphaelElement;
    untouchstart(handler? ): RaphaelElement;
}

interface RaphaelPath extends RaphaelElement {
    getPointAtLength(length: number): { x: number; y: number; alpha: number; };
    getSubpath(from: number, to: number): string;
    getTotalLength(): number;
}

interface RaphaelSet {
    clear();
    exclude(element: RaphaelElement): bool;
    forEach(callback: Function, thisArg?: any): RaphaelSet;
    pop(): RaphaelElement;
    push(...RaphaelElement: any[]): RaphaelElement;
    splice(index: number, count: number): RaphaelSet;
    splice(index: number, count: number, ...insertion: RaphaelElement[]): RaphaelSet;
    length: number;

    [key: number]: RaphaelElement;
    animate(params: { [key: string]: any; }, ms: number, easing?: string, callback?: Function): RaphaelElement;
    animate(animation: RaphaelAnimation): RaphaelElement;
    animateWith(el: RaphaelElement, anim: RaphaelAnimation, params: any, ms: number, easing?: string, callback?: Function): RaphaelElement;
    animateWith(el: RaphaelElement, anim: RaphaelAnimation, animation: RaphaelAnimation): RaphaelElement;
    attr(attrName: string, value: any): RaphaelElement;
    attr(params: { [key: string]: any; }): RaphaelElement;
    attr(attrName: string): any;
    attr(attrNames: string[]): any[];
    click(handler: Function): RaphaelElement;
    clone(): RaphaelElement;
    data(key: string): any;
    data(key: string, value: any): RaphaelElement;
    dblclick(handler: Function): RaphaelElement;
    drag(onmove: (dx: number, dy: number, x: number, y: number, event: DragEvent) =>{ }, onstart: (x: number, y: number, event: DragEvent) =>{ }, onend: (DragEvent) =>{ }, mcontext?: any, scontext?: any, econtext?: any): RaphaelElement;
    getBBox(isWithoutTransform?: bool): BoundingBox;
    glow(glow?: { width?: number; fill?: bool; opacity?: number; offsetx?: number; offsety?: number; color?: string; }): RaphaelSet;
    hide(): RaphaelElement;
    hover(f_in: Function, f_out: Function, icontext?: any, ocontext?: any): RaphaelElement;
    id: string;
    insertAfter(): RaphaelElement;
    insertBefore(): RaphaelElement;
    isPointInside(x: number, y: number): bool;
    isVisible(): bool;
    matrix: RaphaelMatrix;
    mousedown(handler: Function): RaphaelElement;
    mousemove(handler: Function): RaphaelElement;
    mouseout(handler: Function): RaphaelElement;
    mouseover(handler: Function): RaphaelElement;
    mouseup(handler: Function): RaphaelElement;
    next: RaphaelElement;
    onDragOver(f: Function): RaphaelElement;
    paper: RaphaelPaper;
    pause(anim?: RaphaelAnimation): RaphaelElement;
    prev: RaphaelElement;
    raphael: RaphaelStatic;
    remove();
    removeData(key?: string): RaphaelElement;
    resume(anim?: RaphaelAnimation): RaphaelElement;
    setTime(anim: RaphaelAnimation);
    setTime(anim: RaphaelAnimation, value: number): RaphaelElement;
    show(): RaphaelElement;
    status(): { anim: RaphaelAnimation; status: number; }[];
    status(anim: RaphaelAnimation): number;
    status(anim: RaphaelAnimation, value: number): RaphaelElement;
    stop(anim?: RaphaelAnimation): RaphaelElement;
    toBack(): RaphaelElement;
    toFront(): RaphaelElement;
    touchcancel(handler: Function): RaphaelElement;
    touchend(handler: Function): RaphaelElement;
    touchmove(handler: Function): RaphaelElement;
    touchstart(handler: Function): RaphaelElement;
    transform(): string;
    transform(tstr: string): RaphaelElement;
    unclick(handler? ): RaphaelElement;
    undblclick(handler? ): RaphaelElement;
    undrag(): RaphaelElement;
    unhover(): RaphaelElement;
    unhover(f_in, f_out): RaphaelElement;
    unmousedown(handler? ): RaphaelElement;
    unmousemove(handler? ): RaphaelElement;
    unmouseout(handler? ): RaphaelElement;
    unmouseover(handler? ): RaphaelElement;
    unmouseup(handler? ): RaphaelElement;
    untouchcancel(handler? ): RaphaelElement;
    untouchend(handler? ): RaphaelElement;
    untouchmove(handler? ): RaphaelElement;
    untouchstart(handler? ): RaphaelElement;
}

interface RaphaelMatrix {
    add(a: number, b: number, c: number, d: number, e: number, f: number, matrix: RaphaelMatrix): RaphaelMatrix;
    clone(): RaphaelMatrix;
    invert(): RaphaelMatrix;
    rotate(a: number, x: number, y: number);
    scale(x: number, y?: number, cx?: number, cy?: number);
    split(): { dx: number; dy: number; scalex: number; scaley: number; shear: number; rotate: number; isSimple: bool; };
    toTransformString(): string;
    translate(x: number, y: number);
    x(x: number, y: number);
    y(x: number, y: number);
}

interface RaphaelPaper {
    add(JSON): RaphaelSet;
    bottom: RaphaelElement;
    canvas: Element;
    circle(x: number, y: number, r: number): RaphaelElement;
    clear();
    defs: Element;
    ellipse(x: number, y: number, rx: number, ry: number): RaphaelElement;
    forEach(callback: number, thisArg: any): RaphaelStatic;
    getById(id: number): RaphaelElement;
    getElementByPoint(x: number, y: number): RaphaelElement;
    getElementsByPoint(x: number, y: number): RaphaelSet;
    getFont(family: string, weight?: string, style?: string, stretch?: string): RaphaelFont;
    getFont(family: string, weight?: number, style?: string, stretch?: string): RaphaelFont;
    height: number;
    image(src: string, x: number, y: number, width: number, height: number): RaphaelElement;
    path(pathString?: string): RaphaelPath;
    print(x: number, y: number, str: string, font: RaphaelFont, size?: number, origin?: string, letter_spacing?: number): RaphaelPath;
    rect(x: number, y: number, width: number, height: number, r?: number): RaphaelElement;
    remove();
    renderfix();
    safari();
    set(elements?: RaphaelElement[]): RaphaelSet;
    setFinish();
    setSize(width: number, height: number);
    setStart();
    setViewBox(x: number, y: number, w: number, h: number, fit: bool);
    text(x: number, y: number, text: string): RaphaelElement;
    top: RaphaelElement;
    width: number;
}

interface RaphaelStatic {
    (container: HTMLElement, width: number, height: number, callback?: Function): RaphaelPaper;
    (container: string, width: number, height: number, callback?: Function): RaphaelPaper;
    (x: number, y: number, width: number, height: number, callback?: Function): RaphaelPaper;
    (all: Array, callback?: Function): RaphaelPaper;
    (onReadyCallback?: Function): RaphaelPaper;

    angle(x1: number, y1: number, x2: number, y2: number, x3?: number, y3?: number): number;
    animation(params: any, ms: number, easing?: string, callback?: Function): RaphaelAnimation;
    bezierBBox(p1x: number, p1y: number, c1x: number, c1y: number, c2x: number, c2y: number, p2x: number, p2y: number): { min: { x: number; y: number; }; max: { x: number; y: number; }; };
    bezierBBox(bez: Array): { min: { x: number; y: number; }; max: { x: number; y: number; }; };
    color(clr: string): { r: number; g: number; b: number; hex: string; error: bool; h: number; s: number; v: number; l: number; };
    createUUID(): string;
    deg(deg: number): number;
    easing_formulas: any;
    el: any;
    findDotsAtSegment(p1x: number, p1y: number, c1x: number, c1y: number, c2x: number, c2y: number, p2x: number, p2y: number, t: number): { x: number; y: number; m: { x: number; y: number; }; n: { x: number; y: number; }; start: { x: number; y: number; }; end: { x: number; y: number; }; alpha: number; };
    fn: any;
    format(token: string, ...parameters: any[]): string;
    fullfill(token: string, json: JSON): string;
    getColor(value?: number): string;
    getColor: { reset(); };
    getPointAtLength(path: string, length: number): { x: number; y: number; alpha: number; };
    getRGB(colour: string): { r: number; g: number; b: number; hex: string; error: bool; };
    getSubpath(path: string, from: number, to: number): string;
    getTotalLength(path: string): number;
    hsb(h: number, s: number, b: number): string;
    hsb2rgb(h: number, s: number, v: number): { r: number; g: number; b: number; hex: string; };
    hsl(h: number, s: number, l: number): string;
    hsl2rgb(h: number, s: number, l: number): { r: number; g: number; b: number; hex: string; };
    is(o: any, type: string): bool;
    isBBoxIntersect(bbox1: string, bbox2: string): bool;
    isPointInsideBBox(bbox: string, x: number, y: number): bool;
    isPointInsidePath(path: string, x: number, y: number): bool;
    matrix(a: number, b: number, c: number, d: number, e: number, f: number): RaphaelMatrix;
    ninja();
    parsePathString(pathString: string): string[];
    parsePathString(pathString: string[]): string[];
    parseTransformString(TString: string): string[];
    parseTransformString(TString: string[]): string[];
    path2curve(pathString: string): string[];
    path2curve(pathString: string[]): string[];
    pathBBox(path: string): BoundingBox;
    pathIntersection(path1: string, path2: string): { x: number; y: number; t1: number; t2: number; segment1: number; segment2: number; bez1: Array; bez2: Array; }[];
    pathToRelative(pathString: string): string[];
    pathToRelative(pathString: string[]): string[];
    rad(deg: number): number;
    registerFont(font: RaphaelFont): RaphaelFont;
    rgb(r: number, g: number, b: number): string;
    rgb2hsb(r: number, g: number, b: number): { h: number; s: number; b: number; };
    rgb2hsl(r: number, g: number, b: number): { h: number; s: number; l: number; };
    setWindow(newwin: Window);
    snapTo(values: number, value: number, tolerance?: number): number;
    snapTo(values: number[], value: number, tolerance?: number): number;
    st: any;
    svg: bool;
    toMatrix(path: string, transform: string): RaphaelMatrix;
    toMatrix(path: string, transform: string[]): RaphaelMatrix;
    transformPath(path: string, transform: string): string;
    transformPath(path: string, transform: string[]): string;
    type: string;
    vml: bool;
}

declare var Raphael: RaphaelStatic;