interface boundingBox {
    x: number;
    y: number;
    x2: number;
    y2: number;
    width: number;
    height: number;
}

interface raphaelAnimation {
    delay(delay: number): raphaelAnimation;
    repeat(repeat: number): raphaelAnimation;
}

interface raphaelFont {

}

interface raphaelElement {
    animate(params: { [key: any]: any; }, ms: number, easing?: string, callback?: Function): raphaelElement;
    animate(animation: raphaelAnimation): raphaelElement;
    animateWith(el: raphaelElement, anim: raphaelAnimation, params: JSON, ms: number, easing?: string, callback?: Function): raphaelElement;
    animateWith(el: raphaelElement, anim: raphaelAnimation, animation: raphaelAnimation): raphaelElement;
    attr(attrName: string, value: any): raphaelElement;
    attr(params: { [key: any]: any; }): raphaelElement;
    attr(attrName: string): any;
    attr(attrNames: string[]): any[];
    click(handler: Function): raphaelElement;
    clone(): raphaelElement;
    data(key: string): any;
    data(key: string, value: any): raphaelElement;
    dblclick(handler: Function): raphaelElement;
    drag(onmove: (dx: number, dy: number, x: number, y: number, event: DragEvent) =>{ }, onstart: (x: number, y: number, event: DragEvent) =>{ }, onend: (DragEvent) =>{ }, mcontext?: any, scontext?: any, econtext?: any): raphaelElement;
    getBBox(isWithoutTransform?: bool): boundingBox;
    glow(glow?: { width?: number; fill?: bool; opacity?: number; offsetx?: number; offsety?: number; color?: string; }): raphaelSet;
    hide(): raphaelElement;
    hover(f_in: Function, f_out: Function, icontext?: any, ocontext?: any): raphaelElement;
    id: string;
    insertAfter(): raphaelElement;
    insertBefore(): raphaelElement;
    isPointInside(x: number, y: number): bool;
    isVisible(): bool;
    matrix: raphaelMatrix;
    mousedown(handler: Function): raphaelElement;
    mousemove(handler: Function): raphaelElement;
    mouseout(handler: Function): raphaelElement;
    mouseover(handler: Function): raphaelElement;
    mouseup(handler: Function): raphaelElement;
    next: raphaelElement;
    node: Element;
    onDragOver(f: Function): raphaelElement;
    paper: raphaelPaper;
    pause(anim?: raphaelAnimation): raphaelElement;
    prev: raphaelElement;
    raphael: raphaelStatic;
    remove();
    removeData(key?: string): raphaelElement;
    resume(anim?: raphaelAnimation): raphaelElement;
    setTime(anim: raphaelAnimation);
    setTime(anim: raphaelAnimation, value: number): raphaelElement;
    show(): raphaelElement;
    status(): { anim: raphaelAnimation; status: number; }[];
    status(anim: raphaelAnimation): number;
    status(anim: raphaelAnimation, value: number): raphaelElement;
    stop(anim?: raphaelAnimation): raphaelElement;
    toBack(): raphaelElement;
    toFront(): raphaelElement;
    touchcancel(handler: Function): raphaelElement;
    touchend(handler: Function): raphaelElement;
    touchmove(handler: Function): raphaelElement;
    touchstart(handler: Function): raphaelElement;
    transform(): string;
    transform(tstr: string): raphaelElement;
    unclick(handler? ): raphaelElement;
    undblclick(handler? ): raphaelElement;
    undrag(): raphaelElement;
    unhover(): raphaelElement;
    unhover(f_in, f_out): raphaelElement;
    unmousedown(handler? ): raphaelElement;
    unmousemove(handler? ): raphaelElement;
    unmouseout(handler? ): raphaelElement;
    unmouseover(handler? ): raphaelElement;
    unmouseup(handler? ): raphaelElement;
    untouchcancel(handler? ): raphaelElement;
    untouchend(handler? ): raphaelElement;
    untouchmove(handler? ): raphaelElement;
    untouchstart(handler? ): raphaelElement;
}

interface raphaelPath extends raphaelElement {
    getPointAtLength(length: number): { x: number; y: number; alpha: number; };
    getSubpath(from: number, to: number): string;
    getTotalLength(): number;
}

interface raphaelSet {
    clear();
    exclude(element: raphaelElement): bool;
    forEach(callback: Function, thisArg?: any): raphaelSet;
    pop(): raphaelElement;
    push(raphaelElement): raphaelElement;
    splice(index: number, count: number): raphaelSet;
    splice(index: number, count: number, ...insertion: raphaelElement[]): raphaelSet;
    length: number;
    
    [key: number]: raphaelElement;
    animate(params: { [key: any]: any; }, ms: number, easing?: string, callback?: Function): raphaelElement;
    animate(animation: raphaelAnimation): raphaelElement;
    animateWith(el: raphaelElement, anim: raphaelAnimation, params: JSON, ms: number, easing?: string, callback?: Function): raphaelElement;
    animateWith(el: raphaelElement, anim: raphaelAnimation, animation: raphaelAnimation): raphaelElement;
    attr(attrName: string, value: any): raphaelElement;
    attr(params: { [key: any]: any; }): raphaelElement;
    attr(attrName: string): any;
    attr(attrNames: string[]): any[];
    click(handler: Function): raphaelElement;
    clone(): raphaelElement;
    data(key: string): any;
    data(key: string, value: any): raphaelElement;
    dblclick(handler: Function): raphaelElement;
    drag(onmove: (dx: number, dy: number, x: number, y: number, event: DragEvent) =>{ }, onstart: (x: number, y: number, event: DragEvent) =>{ }, onend: (DragEvent) =>{ }, mcontext?: any, scontext?: any, econtext?: any): raphaelElement;
    getBBox(isWithoutTransform?: bool): boundingBox;
    glow(glow?: { width?: number; fill?: bool; opacity?: number; offsetx?: number; offsety?: number; color?: string; }): raphaelSet;
    hide(): raphaelElement;
    hover(f_in: Function, f_out: Function, icontext?: any, ocontext?: any): raphaelElement;
    id: string;
    insertAfter(): raphaelElement;
    insertBefore(): raphaelElement;
    isPointInside(x: number, y: number): bool;
    isVisible(): bool;
    matrix: raphaelMatrix;
    mousedown(handler: Function): raphaelElement;
    mousemove(handler: Function): raphaelElement;
    mouseout(handler: Function): raphaelElement;
    mouseover(handler: Function): raphaelElement;
    mouseup(handler: Function): raphaelElement;
    next: raphaelElement;
    onDragOver(f: Function): raphaelElement;
    paper: raphaelPaper;
    pause(anim?: raphaelAnimation): raphaelElement;
    prev: raphaelElement;
    raphael: raphaelStatic;
    remove();
    removeData(key?: string): raphaelElement;
    resume(anim?: raphaelAnimation): raphaelElement;
    setTime(anim: raphaelAnimation);
    setTime(anim: raphaelAnimation, value: number): raphaelElement;
    show(): raphaelElement;
    status(): { anim: raphaelAnimation; status: number; }[];
    status(anim: raphaelAnimation): number;
    status(anim: raphaelAnimation, value: number): raphaelElement;
    stop(anim?: raphaelAnimation): raphaelElement;
    toBack(): raphaelElement;
    toFront(): raphaelElement;
    touchcancel(handler: Function): raphaelElement;
    touchend(handler: Function): raphaelElement;
    touchmove(handler: Function): raphaelElement;
    touchstart(handler: Function): raphaelElement;
    transform(): string;
    transform(tstr: string): raphaelElement;
    unclick(handler? ): raphaelElement;
    undblclick(handler? ): raphaelElement;
    undrag(): raphaelElement;
    unhover(): raphaelElement;
    unhover(f_in, f_out): raphaelElement;
    unmousedown(handler? ): raphaelElement;
    unmousemove(handler? ): raphaelElement;
    unmouseout(handler? ): raphaelElement;
    unmouseover(handler? ): raphaelElement;
    unmouseup(handler? ): raphaelElement;
    untouchcancel(handler? ): raphaelElement;
    untouchend(handler? ): raphaelElement;
    untouchmove(handler? ): raphaelElement;
    untouchstart(handler? ): raphaelElement;
}

interface raphaelMatrix {
    add(a: number, b: number, c: number, d: number, e: number, f: number, matrix: raphaelMatrix): raphaelMatrix;
    clone(): raphaelMatrix;
    invert(): raphaelMatrix;
    rotate(a: number, x: number, y: number);
    scale(x: number, y?: number, cx?: number, cy?: number);
    split(): { dx: number; dy: number; scalex: number; scaley: number; shear: number; rotate: number; isSimple: bool; };
    toTransformString(): string;
    translate(x: number, y: number);
    x(x: number, y: number);
    y(x: number, y: number);
}

interface raphaelPaper {
    add(JSON): raphaelSet;
    bottom: raphaelElement;
    canvas: Element;
    circle(x: number, y: number, r: number): raphaelElement;
    clear();
    defs: Element;
    ellipse(x: number, y: number, rx: number, ry: number): raphaelElement;
    forEach(callback: number, thisArg: any): raphaelStatic;
    getById(id: number): raphaelElement;
    getElementByPoint(x: number, y: number): raphaelElement;
    getElementsByPoint(x: number, y: number): raphaelSet;
    getFont(family: string, weight?: string, style?: string, stretch?: string): raphaelFont;
    getFont(family: string, weight?: number, style?: string, stretch?: string): raphaelFont;
    height: number;
    image(src: string, x: number, y: number, width: number, height: number): raphaelElement;
    path(pathString?: string): raphaelPath;
    print(x: number, y: number, str: string, font: raphaelFont, size?: number, origin?: string, letter_spacing?: number): raphaelPath;
    rect(x: number, y: number, width: number, height: number, r?: number): raphaelElement;
    remove();
    renderfix();
    safari();
    set(elements?: raphaelElement[]): raphaelSet;
    setFinish();
    setSize(width: number, height: number);
    setStart();
    setViewBox(x: number, y: number, w: number, h: number, fit: bool);
    text(x: number, y: number, text: string): raphaelElement;
    top: raphaelElement;
    width: number;
}

interface raphaelStatic {
    (container: HTMLElement, width: number, height: number, callback?: Function): raphaelPaper;
    (container: string, width: number, height: number, callback?: Function): raphaelPaper;
    (x: number, y: number, width: number, height: number, callback?: Function): raphaelPaper;
    (all: Array, callback?: Function): raphaelPaper;
    (onReadyCallback?: Function): raphaelPaper;

    angle(x1: number, y1: number, x2: number, y2: number, x3?: number, y3?: number): number;
    animation(params: JSON, ms: number, easing?: string, callback?: Function): raphaelAnimation;
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
    getRGB(colour:string):{ r: number; g: number; b: number; hex: string; error: bool; };
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
    matrix(a: number, b: number, c: number, d: number, e: number, f: number): raphaelMatrix;
    ninja();
    parsePathString(pathString: string): string[];
    parsePathString(pathString: string[]): string[];
    parseTransformString(TString: string): string[];
    parseTransformString(TString: string[]): string[];
    path2curve(pathString: string): string[];
    path2curve(pathString: string[]): string[];
    pathBBox(path: string): boundingBox;
    pathIntersection(path1: string, path2: string): { x: number; y: number; t1: number; t2: number; segment1: number; segment2: number; bez1: Array; bez2: Array; }[];
    pathToRelative(pathString: string): string[];
    pathToRelative(pathString: string[]): string[];
    rad(deg: number): number;
    registerFont(font: raphaelFont): raphaelFont;
    rgb(r: number, g: number, b: number): string;
    rgb2hsb(r: number, g: number, b: number): { h: number; s: number; b: number; };
    rgb2hsl(r: number, g: number, b: number): { h: number; s: number; l: number; };
    setWindow(newwin: Window);
    snapTo(values: number, value: number, tolerance?: number): number;
    snapTo(values: number[], value: number, tolerance?: number): number;
    st: any;
    svg: bool;
    toMatrix(path: string, transform: string): raphaelMatrix;
    toMatrix(path: string, transform: string[]): raphaelMatrix;
    transformPath(path: string, transform: string): string;
    transformPath(path: string, transform: string[]): string;
    type: string;
    vml: bool;
}

declare var Raphael: raphaelStatic;