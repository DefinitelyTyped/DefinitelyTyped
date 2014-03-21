// Type definitions for KineticJS
// Project: http://kineticjs.com/
// Definitions by: Basarat Ali Syed <http://www.github.com/basarat>, Ralph de Ruijter <http://www.superdopey.nl/techblog/>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped

declare module Kinetic {

    var Node: {
        new (config: ObjectOptionsConfig): INode;
    }

    interface INode {
        cache(cacheConfig?: any): INode;
        clone(attrs: any): INode;
        destroy(): void;
        draw(): INode;
        drawBuffer(): any;
        drawScene(): any;
        getAbsoluteOpacity(): number;
        getAbsolutePosition(): Vector2d;
        getAbsoluteTransform(): any;
        getAbsoluteZIndex(): number;
        getAttrs(): any;
        getDragBounds(): any;
        getDragConstraint(): any;
        getDraggable(): boolean;
        getLayer(): any;
        getLevel(): number;
        getListening(): any;
        getName(): string;
        getOffset(): Vector2d;
        getOpacity(): number;
        getParent(): any;
        getPosition(): Vector2d;
        getRotation(): number;
        getRotationDeg(): number;
        getScale(): Vector2d;
        getScaleX(): number;
        getScaleY(): number;
        getSize(): ISize;
        getStage(): IStage;
        getTransform(): any;
        getZIndex(): number;
        hide(): void;
        isDraggable(): boolean;
        isDragging(): boolean;
        isListening(): boolean;
        move(x: number, y: number): void;
        moveDown(): void;
        moveTo(newContainer: IContainer): void;
        moveToBottom(): void;
        moveToTop(): void;
        moveUp(): void;
        name(): string;
        name(name: string): void;
        rotate(theta: number): void;
        rotateDeg(deg: number): void;

        // Events 
        on(typesStr: string, handler: (data: any) => any): void;
        off(typesStr: string): void;
        fire(typeStr: string, event?: any, bubble?: boolean): any;

        setAbsolutePosition(pos: Vector2d): void;
        setAttrs(config: any): void;
        setDefaultAttrs(config: any): void;
        setDragBounds(bounds: any): void;

        setDragConstraint(constraint: string): void;
        setDraggable(draggable: boolean): void;
        setListening(listening: boolean): void;
        setOffset(offset: Vector2d): any;
        setOpacity(opacity: any): void;
        setPosition(position: Vector2d): void;
        setRotation(theta: number): void;
        setRotationDeg(rotDeg: number): void;
        setScale(scale: Vector2d): void;
        setScaleX(scale: number): void;
        setScaleY(scale: number): void;
        setSize(size: ISize): any;
        setZIndex(zIndex: number): void;
        show(): void;
        simulate(eventType: string): void;
        toDataURL(config: any): void;
        transitionTo(config: any): void;

        // Width / Height
        width(): number;
        width(width: number): void;
        getWidth(): any;
        setWidth(width: number): void;
        height(): number;
        height(height: number): void;
        getHeight(): any;
        setHeight(height: number): any;

        // id 
        id(): string;
        id(id: string): void;
        getId(): string;
        setId(id: string): void;

        // Position
        x(): number;
        x(x: number): void;
        y(): number;
        y(y: number): void;
        getX(): number;
        setX(x: number): void;
        getY(): number;
        setY(y: number): void;
    }

    var Container: {
        new (config: any): IContainer;
    }

    interface IContainer extends INode {
        add(child: INode): any;
        clone(attrs: any): IContainer;
        destroyChildren(): IContainer;
        find(selector: string): any;
        get(selector: any): any;
        getChildren(): INode[];
        getIntersections(point: any): any;
        isAncestorOf(node: any): any;
        remove(child: any): any;
        removeChildren(): any;
    }

    var Stage: {
        new (config: StageConfig): IStage;
    }

    interface IStage extends IContainer {
        add(layer: ILayer): any;
        clear(): any;
        getContainer(): HTMLElement;
        getDOM(): HTMLElement;
        getHeight(): number;
        getIntersection(pos: any): any;
        getMousePosition(evt?: Event): any;
        getPointerPosition(): Vector2d;
        getStage(): IStage;
        getTouchPosition(evt?: Event): any;
        getUserPosition(evt?: Event): any;
        getWidth(): number;
        load(JSON: any): any;
        reset(): any;
        setHeight(height: number): any;
        setWidth(width: number): any;
        toDataURL(config: any): any;
        toImage(config: any, callback: () => any): any;
        toJSON(): any;
    }

    var Layer: {
        new (config?: LayerConfig): ILayer;
    }

    interface ILayer extends IContainer {
        afterDraw(handler: () => any): any;
        beforeDraw(handler: () => any): any;
        clear(): any;
        getCanvas(): ICanvas;
        getClearBeforeDraw(): any;
        getContext(): CanvasRenderingContext2D;
        remove(): any;
        setClearBeforeDraw(clearBeforeDraw: boolean): any;
        toDataURL(config: any): any;
    }

    interface ICanvas {
        _canvas: HTMLCanvasElement;

        getPixelRatio(): number;

        height: number;
        setPixelRatio(pixelRatio: number): any;
        width: number;
    }

    var Shape: {
        new (config: any): IShape;
    }

    interface IShape extends INode {
        applyLineJoin(): void;
        drawImage(): void;
        fill(): void;
        fillText(text: string): void;
        getCanvas(): ICanvas;
        getContext(): any;
        getDrawFunc(): any;
        getFill(): string;
        getLineJoin(): any;
        getShadow(): any;
        getStroke(): any;
        getStrokeWidth(): number;
        intersects(point: any): boolean;
        setDrawFunc(drawFunc: () => any): any;
        setFill(fill: string): any;
        setLineJoin(): any;
        setShadow(config: any): any;
        setSize(size: ISize): any;
        setStroke(stroke: string): any;
        setStrokeWidth(strokeWidth: number): any;
        stroke(): any;
        strokeText(text: string): any;
    }

    var Rect: {
        new (config: RectConfig): IRect;
    }

    interface IRect extends IShape {
        getCornerRadius(): number;
        getHeight(): number;
        getWidth(): number;
        setCornerRadius(radius: number): any;
        setHeight(height: number): any;
        setWidth(width: number): any;
    }

    var Circle: {
        new (config: CircleConfig): ICircle;

    }

    interface ICircle extends IShape {
        getRadius(): number;
        setRadius(radius: number): any;
    }

    var Ellipse: {
        new (config: CircleConfig): IEllipse;
    }

    interface IEllipse extends IShape {
        getRadius(): number;
        setRadius(radius: number): any;
    }

    var Group: {
        new (config?: ObjectOptionsConfig): IGroup;
    }

    interface IGroup extends IContainer {
    }

    var Collection: {
        new (): ICollection;
    }

    interface ICollection {
        apply(method: Function, val: any): any;
        each(func: () => any): any;
    }

    var Image: {
        new (config?: ImageConfig): IImage;
    }

    interface IImage extends IShape {
        applyFilter(config: any): any;
        clearImageBuffer(): any;
        createImageBuffer(callback: () => any): any;
        getCrop(): any;
        getFilter(): any;
        getHeight(): number;
        getImage(): IImage;
        getWidth(): number;
        setCrop(config: CropConfig): any;
        setFilter(config: any): any;
        setHeight(height: number): any;
        setImage(image: IImage): any;
        setWidth(width: number): any;
    }

    var Line: {
        new (config: LineConfig): ILine;
    }

    interface ILine extends IShape {
        getDashArray(): any;
        getLineCap(): any;
        getPoints(): any;
        setDashArray(dashArray: any): any;
        setLineCap(lineCap: string): any;
        setPoints(can: any[]): any;
    }

    var Path: {
        new (config: PathConfig): IPath;
        parsePathData(data: string): any;
    }
    interface IPath extends IShape {
        getData(): string;
        setData(SVG: string): any;
    }

    var Polygon: {
        new (config: PolygonConfig): IPolygon;
    }

    interface IPolygon extends IShape {
        getPoints(): any;
        setPoints(points: any): any;
    }

    var RegularPolygon: {
        new (config: RegularPolygonConfig): IRegularPolygon;
    }

    interface IRegularPolygon extends IShape {
        getRadius(): number;
        getSides(): number;
        setRadius(radius: number): any;
        setSides(sides: number): any;
    }

    var Sprite: {
        new (config: SpriteConfig): ISprite;
    }
    interface ISprite extends IShape {
        afterFrame(index: number, func: () => any): any;
        getAnimation(): string;
        getAnimations(): any;
        getIndex(): number;
        setAnimation(anim: string): any;
        setAnimations(animations: any): any;
        setIndex(index: number): any;
        start(): any;
        stop(): any;
    }

    var Star: {
        new (config: StarConfig): IStar;
    }
    interface IStar extends IShape {
        getInnerRadius(): number;
        getNumPoints(): number;
        getOuterRadius(): number;
        setInnerRadius(radius: number): any;
        setNumPoints(points: number): any;
        setOuterRadius(radius: number): any;
    }

    var Text: {
        new (config: TextConfig): IText;
    }
    interface IText extends IShape {
        getAlign(): string;
        getBoxHeight(): number;
        getBoxWidth(): number;
        getFontFamily(): string;
        getFontSize(): number;
        getFontStyle(): string;
        getHeight(): number;
        getLineHeight(): number;
        getPadding(): number;
        getShadow(): any;
        getText(): string;
        getTextFill(): any;
        getTextHeight(): number;
        getTextStroke(): any;
        getTextStrokeWidth(): number;
        getTextWidth(): number;
        getWidth(): number;
        setAlign(align: string): any;
        setFontFamily(fontFamily: string): any;
        setFontSize(fontSize: number): any;
        setFontStroke(textStroke: any): any;
        setFontStyle(fontStyle: string): any;
        setHeight(height: number): any;
        setLineHeight(lineHeight: number): any;
        setPadding(padding: number): any;
        setShadow(config: any): any;
        setText(text: string): any;
        setTextFill(textFill: any): any;
        setTextStrokeWidth(textStrokeWidth: number): any;
        setWidth(width: number): any;
    }

    var TextPath: {
        new (config: any): ITextPath;
    }
    interface ITextPath extends IShape {
        getFontFamily(): string;
        getFontSize(): number;
        getFontStyle(): string;
        getText(): string;
        getTextFill(): any;
        getTextHeight(): number;
        getTextStroke(): any;
        getTextStrokeWidth(): number;
        getTextWidth(): number;
        setFontFamily(fontFamily: string): any;
        setFontSize(fontSize: number): any;
        setFontStroke(textStroke: any): any;
        setFontStyle(fontStyle: string): any;
        setText(text: string): any;
        setTextFill(textFill: any): any;
        setTextStrokeWidth(textStrokeWidth: number): any;
    }

    var Transition: {
        new (node: Node, config: any): ITransition;
    }
    interface ITransition {
        start(): any;
        stop(): any;
    }

    var Animation: {
        new (...args: any[]): IAnimation;
    }
    interface IAnimation extends IContainer {
        start(): any;
        stop(): any;
    }

    interface CropConfig {
        x: number;
        y: number;
        width: number;
        height: number;
    }

    interface StageConfig extends ObjectOptionsConfig {
        container: string;
        width: number;
        height: number;
    }

    interface LayerConfig extends ObjectOptionsConfig {
        clearBeforeDraw?: boolean;
    }

    //shape configs class
    interface RectConfig extends DrawOptionsConfig, ObjectOptionsConfig {
        width?: number;
        height?: number;
        cornerRadius?: number;
    }

    interface CircleConfig extends DrawOptionsConfig, ObjectOptionsConfig {
        radius: number;
    }

    interface ImageConfig extends DrawOptionsConfig, ObjectOptionsConfig {
        image: any;
        width?: number;
        height?: number;
        crop?: any;
    }

    interface SpriteConfig extends DrawOptionsConfig, ObjectOptionsConfig {
        image: any;
        animations?: any;
        animation?: any;
        frameRate?: number;
    }

    interface TextConfig extends DrawOptionsConfig, ObjectOptionsConfig {
        text: string;
        fontSize?: number;
        fontFamily?: string;
        fontStyle?: string;
        textFill?: any;
        textStroke?: any;
        textStrokeWidth?: number;
        align?: string;
        padding?: string;
        width?: number;
        height?: number;
        lineHeight?: number;
        cornerRadius?: number;
    }

    interface LineConfig extends DrawOptionsConfig, ObjectOptionsConfig {
        points: any;
        lineCap?: string;
        dashArray?: any;
    }

    interface PolygonConfig extends DrawOptionsConfig, ObjectOptionsConfig {
        points: any;
    }

    interface RegularPolygonConfig extends DrawOptionsConfig, ObjectOptionsConfig {
        sides: number;
        radius: number;
    }

    interface PathConfig extends DrawOptionsConfig, ObjectOptionsConfig {
        data: string;
    }

    interface StarConfig extends DrawOptionsConfig, ObjectOptionsConfig {
        numPoints: number;
        outerRadius: number;
        innerRadius: number;
    }

    interface CustomConfig extends DrawOptionsConfig, ObjectOptionsConfig {
        drawFunc: () => any;
    }

    interface DrawOptionsConfig {
        fill?: string;
        stroke?: string;
        strokeWidth?: number;
        lineJoin?: string;
        shadow?: any;
    }

    interface Vector2d {
        x: number;
        y: number;
    }

    interface ObjectOptionsConfig {
        x?: number;
        y?: number;
        visible?: boolean;
        listening?: boolean;
        id?: string;
        name?: string;
        opacity?: any;
        scale?: Vector2d;
        rotation?: number;
        rotationDeg?: number;
        offset?: Vector2d;
        draggable?: boolean;
        dragConstraint?: string;
        dragBounds?: any;
        dragBoundFunc?: (pos: Vector2d) => Vector2d;
        width?: number;
        height?: number;
    }

    interface ISize {
        width: number;
        height: number;
    }
}