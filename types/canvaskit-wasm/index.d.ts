// Type definitions for canvaskit-wasm 0.9
// Project: https://github.com/google/skia/tree/master/modules/canvaskit
// Definitions by: Alexander Shilov <https://github.com/ashlanderr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface CanvasKitInitResult {
    ready(): Promise<CanvasKit>;
}

export interface CanvasKit {
    // factories

    Color(r: number, g: number, b: number, a: number): SkColor;
    MakeAnimation(lottieJson: any): SkAnimation;
    MakeAnimatedImageFromEncoded(buffer: ArrayBuffer): SkAnimatedImage;
    MakeCanvasSurface(canvas: HTMLCanvasElement): SkSurface;
    MakeLinearGradientShader(start: SkPoint, end: SkPoint, colors: SkColor[], positions: number[], mode: number, localMatrix: SkMatrix | null, flags: number): SkShader;
    MakeRadialGradientShader(center: SkPoint, radius: number, colors: SkColor[], positions: number[], mode: number, localMatrix: SkMatrix | null, flags: number): SkShader;
    MakeSurface(width: number, height: number): SkSurface;
    MakeTwoPointConicalGradientShader(
        start: SkPoint,
        startRadius: number,
        end: SkPoint,
        endRadius: number,
        colors: SkColor[],
        positions: number[],
        mode: number,
        localMatrix: SkMatrix | null,
        flags: number,
    ): SkShader;
    MakeImageFromEncoded(buffer: ArrayBuffer): SkImage;
    MakePathFromCmds(cmds: SkPathCommand[]): SkPath;
    MakePathFromOp(first: SkPath, second: SkPath, op: SkPathOp): SkPath;
    MakePathFromSVGString(svg: string): SkPath;
    MakeSkDashPathEffect(intervals: number[], phase: number): SkPathEffect;
    MakeSkCornerPathEffect(radius: number): SkPathEffect;
    MakeSkDiscretePathEffect(frequency: number, amplitude: number, seed: number): SkPathEffect;
    LTRBRect(left: number, top: number, right: number, bottom: number): SkRect;
    RRectXY(rect: SkRect, rx: number, ry: number): SkRRect;
    XYWHRect(x: number, y: number, width: number, height: number): SkRect;
    readonly ParagraphBuilder: SkParagraphBuilderFactory;
    readonly SkColorFilter: SkColorFilterFactory;
    readonly SkFontMgr: SkFontMgrFactory;
    readonly SkImageFilter: SkImageFilterFactory;
    readonly SkMaskFilter: SkMaskFilterFactory;
    readonly SkTextBlob: SkTextBlobFactory;

    // methods

    currentContext(): SkContext;
    setCurrentContext(context: SkContext): void;

    // classes

    readonly SkPaint: SkPaintConstructor;
    readonly SkPath: SKPathConstructor;
    readonly SkFont: SkFontConstructor;
    readonly SkPictureRecorder: SkPictureRecorderConstructor;
    readonly ShapedText: ShapedTextConstructor;
    readonly ParagraphStyle: ParagraphStyleConstructor;
    readonly TextStyle: TextStyleConstructor;

    // colors

    readonly BLACK: SkColor;
    readonly BLUE: SkColor;
    readonly CYAN: SkColor;
    readonly RED: SkColor;
    readonly TRANSPARENT: SkColor;
    readonly WHITE: SkColor;
    readonly YELLOW: SkColor;

    // decoration

    readonly LineThroughDecoration: SkDecoration;
    readonly NoDecoration: SkDecoration;
    readonly OverlineDecoration: SkDecoration;
    readonly UnderlineDecoration: SkDecoration;

    // enums

    readonly Affinity: SkEnum<SkAffinity, {
        Downstream: SkAffinity;
        Upstream: SkAffinity;
    }>;

    readonly AlphaType: SkEnum<SkAlphaType, {
        Opaque: SkAlphaType;
        Premul: SkAlphaType;
        Unpremul: SkAlphaType;
    }>;

    readonly BlendMode: SkEnum<SkBlendMode, {
        Clear: SkBlendMode;
        Color: SkBlendMode;
        ColorBurn: SkBlendMode;
        ColorDodge: SkBlendMode;
        Darken: SkBlendMode;
        Difference: SkBlendMode;
        Dst: SkBlendMode;
        DstATop: SkBlendMode;
        DstIn: SkBlendMode;
        DstOut: SkBlendMode;
        DstOver: SkBlendMode;
        Exclusion: SkBlendMode;
        HardLight: SkBlendMode;
        Hue: SkBlendMode;
        Lighten: SkBlendMode;
        Luminosity: SkBlendMode;
        Modulate: SkBlendMode;
        Multiply: SkBlendMode;
        Overlay: SkBlendMode;
        Plus: SkBlendMode;
        Saturation: SkBlendMode;
        Screen: SkBlendMode;
        SoftLight: SkBlendMode;
        Src: SkBlendMode;
        SrcATop: SkBlendMode;
        SrcIn: SkBlendMode;
        SrcOut: SkBlendMode;
        SrcOver: SkBlendMode;
        Xor: SkBlendMode;
    }>;

    readonly BlurStyle: SkEnum<SkBlurStyle, {
        Inner: SkBlurStyle;
        Normal: SkBlurStyle;
        Outer: SkBlurStyle;
        Solid: SkBlurStyle;
    }>;

    readonly ClipOp: SkEnum<SkClipOp, {
        Difference: SkClipOp;
        Intersect: SkClipOp;
    }>;

    readonly ColorType: SkEnum<SkColorType, {
        A16_float: SkColorType;
        A16_unorm: SkColorType;
        ARGB_4444: SkColorType;
        Alpha_8: SkColorType;
        BGRA_8888: SkColorType;
        Gray_8: SkColorType;
        R8G8_unorm: SkColorType;
        R16G16B16A16_unorm: SkColorType;
        R16G16_float: SkColorType;
        R16G16_unorm: SkColorType;
        RGBA_8888: SkColorType;
        RGBA_1010102: SkColorType;
        RGBA_F16: SkColorType;
        RGBA_F32: SkColorType;
        RGB_565: SkColorType;
        RGB_888x: SkColorType;
        RGB_101010x: SkColorType;
    }>;

    readonly FillType: SkEnum<SkFillType, {
        EvenOdd: SkFillType;
        InverseEvenOdd: SkFillType;
        InverseWinding: SkFillType;
        Winding: SkFillType;
    }>;

    readonly FilterQuality: SkEnum<SkFilterQuality, {
        High: SkFilterQuality,
        Low: SkFilterQuality,
        Medium: SkFilterQuality,
        None: SkFilterQuality,
    }>;

    readonly FontSlant: SkEnum<SkFontSlant, {
        Italic: SkFontSlant;
        Oblique: SkFontSlant;
        Upright: SkFontSlant;
    }>;

    readonly FontWeight: SkEnum<SkFontWeight, {
        ExtraBlack: SkFontWeight;
        Black: SkFontWeight;
        ExtraBold: SkFontWeight;
        Bold: SkFontWeight;
        SemiBold: SkFontWeight;
        Medium: SkFontWeight;
        Normal: SkFontWeight;
        Light: SkFontWeight;
        ExtraLight: SkFontWeight;
        Thin: SkFontWeight;
    }>;

    readonly FontWidth: SkEnum<SkFontWidth, {
        Condensed: SkFontWidth;
        Expanded: SkFontWidth;
        ExtraCondensed: SkFontWidth;
        ExtraExpanded: SkFontWidth;
        Normal: SkFontWidth;
        SemiCondensed: SkFontWidth;
        SemiExpanded: SkFontWidth;
        UltraCondensed: SkFontWidth;
        UltraExpanded: SkFontWidth;
    }>;

    readonly ImageFormat: SkEnum<SkImageFormat, {
        JPEG: SkImageFormat;
        PNG: SkImageFormat;
    }>;

    readonly PaintStyle: SkEnum<SkPaintStyle, {
        Fill: SkPaintStyle,
        Stroke: SkPaintStyle,
        StrokeAndFill: SkPaintStyle,
    }>;

    readonly PathOp: SkEnum<SkPathOp, {
        Difference: SkPathOp;
        Intersect: SkPathOp;
        ReverseDifference: SkPathOp;
        Union: SkPathOp;
        XOR: SkPathOp;
    }>;

    readonly PointMode: SkEnum<SkPointMode, {
        Lines: SkPointMode,
        Points: SkPointMode,
        Polygon: SkPointMode,
    }>;

    readonly StrokeCap: SkEnum<SkStrokeCap, {
        Butt: SkStrokeCap;
        Round: SkStrokeCap;
        Square: SkStrokeCap;
    }>;

    readonly StrokeJoin: SkEnum<SkStrokeJoin, {
        Bevel: SkStrokeJoin;
        Miter: SkStrokeJoin;
        Round: SkStrokeJoin;
    }>;

    readonly TextAlign: SkEnum<SkTextAlign, {
        Center: SkTextAlign,
        End: SkTextAlign,
        Justify: SkTextAlign,
        Left: SkTextAlign,
        Right: SkTextAlign,
        Start: SkTextAlign,
    }>;

    readonly TextDirection: SkEnum<SkTextDirection, {
        LTR: SkTextDirection,
        RTL: SkTextDirection,
    }>;

    readonly TileMode: SkEnum<SkTileMode, {
        Clamp: SkTileMode;
        Decal: SkTileMode;
        Mirror: SkTileMode;
        Repeat: SkTileMode;
    }>;

    readonly VertexMode: SkEnum<SkVertexMode, {
        TriangleFan: SkVertexMode;
        Triangles: SkVertexMode;
        TrianglesStrip: SkVertexMode;
    }>;
}

// interfaces

export interface SkObject<T extends SkObject<T>> {
    clone(): T;
    delete(): void;
    deleteAfter(): void;
    isAliasOf(other: any): boolean;
    isDeleted(): boolean;
}

export interface SkShader extends SkObject<SkShader> {}

export interface SkPathEffect extends SkObject<SkPathEffect> {}

export interface SkAnimation extends SkObject<SkAnimation> {
    duration(): number;
    fps(): number;
    render(canvas: SkCanvas, bounds: SkRect): void;
    seek(time: number): void;
    seekFrame(frame: number): void;
    size(): SkSize;
    version(): string;
}

export interface SkSize {
    w: number;
    h: number;
}

export interface SkPicture extends SkObject<SkPicture> {}

export interface SkPictureRecorder extends SkObject<SkPictureRecorder> {
    beginRecording(rect: SkRect): SkCanvas;
    finishRecordingAsPicture(): SkPicture;
}

export interface SkData extends SkObject<SkData> {
    size(): number;
}

export interface SkImage extends SkObject<SkImage> {
    encodeToData(): SkData;
    height(): number;
    readPixels(info: SkImageInfo, srcX: number, srcY: number): Uint8Array | Float32Array | null;
    width(): number;
}

export interface SkShapedTextConfig {
    font: SkFont;
    leftToRight: boolean;
    text: string;
    width: number;
}

export interface FontStyle {
    weight: SkFontWeight;
    slant: SkFontSlant;
    width: SkFontWidth;
}

export type FontStyleConfig = Partial<FontStyle>;

export interface TextStyleConfig {
    backgroundColor?: SkColor;
    color?: SkColor;
    decoration?: SkDecoration;
    decorationThickness?: number;
    fontFamilies: string[];
    fontSize?: number;
    fontStyle?: FontStyleConfig;
    foregroundColor?: SkColor;
}

export interface ParagraphStyleConfig {
    textStyle: TextStyleConfig;
    textAlign?: SkTextAlign;
    ellipsis?: string;
    textDirection?: SkTextDirection;
    disableHinting?: boolean;
    maxLines?: number;
}

export interface SkShapedText extends SkObject<SkShapedText> {
    getBounds(): SkRect;
}

export interface SkSurface extends SkObject<SkSurface> {
    captureFrameAsSkPicture(drawFrame: (canvas: SkCanvas) => void): SkPicture;
    dispose(): void;
    flush(): void;
    getCanvas(): SkCanvas;
    height(): number;
    makeImageSnapshot(): SkImage;
    makeSurface(info: SkImageInfo): SkSurface;
    width(): number;
}

export interface SkRect {
    fLeft: number;
    fTop: number;
    fRight: number;
    fBottom: number;
}

export interface SkRRect {
    rect: SkRect;
    rx1: number;
    rx2: number;
    rx3: number;
    rx4: number;
    ry1: number;
    ry2: number;
    ry3: number;
    ry4: number;
}

export interface SkStrokeConfig {
    width?: number;
    miter_limit?: number;
    cap?: SkStrokeCap;
    join?: SkStrokeJoin;
    precision?: number;
}

export interface SkPath extends SkObject<SkPath> {
    addArc(oval: SkRect, startAngle: number, sweepAngle: number): void;
    addOval(oval: SkRect, isCCW: boolean, startIndex: number): void;
    addPath(path: SkPath, extend?: boolean): void;
    addPath(path: SkPath, m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, extend?: boolean): void;
    addPath(path: SkPath, m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number, extend?: boolean): void;
    addPoly(points: SkPoint[], close: boolean): void;
    addRect(rect: SkRect, isCCW?: boolean): void;
    addRect(left: number, top: number, right: number, bottom: number, isCCW?: boolean): void;
    addRoundRect(rect: SkRect, rx: number, ry: number, isCCW: boolean): void;
    addRoundRect(left: number, top: number, right: number, bottom: number, rx: number, ry: number, isCCW: boolean): void;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, isCCW: boolean): void;
    arcTo(oval: SkRect, startAngle: number, sweepAngle: number, forceMoveTo: boolean): void;
    close(): void;
    conicTo(x1: number, y1: number, x2: number, y2: number, w: number): void;
    cubicTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    dash(on: number, off: number, phase: number): void;
    equals(other: SkPath): boolean;
    getBounds(): SkRect;
    getFillType(): SkFillType;
    getPoint(index: number): SkPoint;
    isEmpty(): boolean;
    isVolatile(): boolean;
    lineTo(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    offset(dx: number, dy: number): void;
    op(other: SkPath, op: SkPathOp): void;
    quadTo(cpx: number, cpy: number, x: number, y: number): void;
    rArcTo(rx: number, ry: number, xAxisRotate: number, useSmallArc: boolean, isCCW: boolean, dx: number, dy: number): void;
    rConicTo(dx1: number, dy1: number, dx2: number, dy2: number, w: number): void;
    rCubicTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    rLineTo(dx: number, dy: number): void;
    rMoveTo(dx: number, dy: number): void;
    rQuadTo(cpx: number, cpy: number, x: number, y: number): void;
    reset(): void;
    rewind(): void;
    setFillType(value: SkFillType): void;
    setIsVolatile(value: boolean): void;
    simplify(): void;
    stroke(config: SkStrokeConfig): void;
    toCmds(): SkPathCommand[];
    toSVGString(): string;
    transform(matrix: SkMatrix): void;
    transform(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): void;
    trim(startT: any, stopT: any, isComplement: boolean): void;
}

export interface SkAnimatedImage extends SkObject<SkAnimatedImage> {
    decodeNextFrame(): number;
    getFrameCount(): number;
    getRepetitionCount(): number;
    height(): number;
    width(): number;
}

export interface SkImageInfo {
    width: number;
    height: number;
    colorType: SkColorType;
    alphaType: SkAlphaType;
}

export interface SkCanvas extends SkObject<SkCanvas> {
    clear(color: SkColor): void;
    clipPath(path: SkPath, op: SkClipOp, antialias: boolean): void;
    clipRRect(rrect: SkRRect, op: SkClipOp, antialias: boolean): void;
    clipRect(rect: SkRect, op: SkClipOp, antialias: boolean): void;
    concat(matrix: SkMatrix): void;
    drawAnimatedImage(image: SkAnimatedImage, x: number, y: number): void;
    drawArc(rect: SkRect, from: number, to: number, close: boolean, paint: SkPaint): void;
    drawCircle(cx: number, cy: number, radius: number, paint: SkPaint): void;
    drawColor(color: SkColor, blend: SkBlendMode): void;
    drawDRRect(outer: SkRRect, inner: SkRRect, paint: SkPaint): void;
    drawImage(image: SkImage, dx: number, dy: number, paint: SkPaint): void;
    drawImageNine(image: SkImage, srcRect: SkRect, destRect: SkRect, paint: SkPaint): void;
    drawImageRect(image: SkImage, srcRect: SkRect, destRect: SkRect, paint: SkPaint, strict: boolean): void;
    drawLine(x1: number, y1: number, x2: number, y2: number, paint: SkPaint): void;
    drawOval(rect: SkRect, paint: SkPaint): void;
    drawPaint(paint: SkPaint): void;
    drawParagraph(paragraph: SkParagraph, x: number, y: number): void;
    drawPath(path: SkPath, paint: SkPaint): void;
    drawPicture(picture: SkPicture): void;
    drawPoints(mode: SkPointMode, points: SkPoint[], paint: SkPaint): void;
    drawRRect(rect: SkRRect, paint: SkPaint): void;
    drawRect(rect: SkRect, paint: SkPaint): void;
    drawRoundRect(rect: SkRect, rx: number, ry: number, paint: SkPaint): void;
    drawText(text: string | SkShapedText, x: number, y: number, paint: SkPaint, font: SkFont): void;
    drawTextBlob(text: SkTextBlob, x: number, y: number, paint: SkPaint): void;
    drawVertices(vertices: any, blendMode: SkBlendMode, paint: SkPaint): void;
    flush(): void;
    getSaveCount(): number;
    getTotalMatrix(): SkMatrix;
    makeSurface(info: SkImageInfo): SkSurface;
    readPixels(x: number, y: number, w: number, h: number, alphaType?: SkAlphaType, colorType?: SkColorType, dstRowBytes?: number): Uint8Array;
    restore(): void;
    restoreToCount(count: number): void;
    rotate(degree: number, px: number, py: number): void;
    save(): void;
    saveLayer(bounds: SkRect, paint: SkPaint): number;
    scale(sx: number, sy: number): void;
    skew(sx: number, sy: number): void;
    translate(x: number, y: number): void;
    writePixels(pixels: Uint8Array, srcWidth: number, srcHeight: number, destX: number, destY: number, alphaType?: SkAlphaType, colorType?: SkColorType): void;
}

export interface SkPaint extends SkObject<SkPaint> {
    getBlendMode(): SkBlendMode;
    getColor(): SkColor;
    getFilterQuality(): SkFilterQuality;
    getStrokeCap(): SkStrokeCap;
    getStrokeJoin(): SkStrokeJoin;
    getStrokeMiter(): number;
    getStrokeWidth(): number;
    setAntiAlias(value: boolean): void;
    setBlendMode(value: SkBlendMode): void;
    setColor(value: SkColor): void;
    setColorFilter(value: SkColorFilter): void;
    setColorf(fRed: number, fGreen: number, fBlue: number, fAlpha: number): void;
    setFilterQuality(value: SkFilterQuality): void;
    setImageFilter(value: SkImageFilter): void;
    setMaskFilter(value: SkMaskFilter): void;
    setPathEffect(value: SkPathEffect): void;
    setShader(value: SkShader): void;
    setStrokeCap(value: SkStrokeCap): void;
    setStrokeJoin(value: SkStrokeJoin): void;
    setStrokeMiter(value: number): void;
    setStrokeWidth(value: number): void;
    setStyle(value: SkPaintStyle): void;
}

export interface SkTypeface extends SkObject<SkTypeface> {}

export interface SkFont extends SkObject<SkFont> {
    getScaleX(): number;
    getSize(): number;
    getSkewX(): number;
    getTypeface(): SkTypeface;
    getWidths(chars: string): number[];
    measureText(text: string): number;
    setScaleX(value: number): void;
    setSize(value: number): void;
    setSkewX(value: number): void;
    setTypeface(value: SkTypeface): void;
}

export interface SkGlyphPosition {
    affinity: SkAffinity;
    pos: number;
}

export interface SkWordBoundary {
    start: number;
    end: number;
}

export interface SkParagraph extends SkObject<SkParagraph> {
    getHeight(): number;
    getGlyphPositionAtCoordinate(x: number, y: number): SkGlyphPosition;
    getWordBoundary(index: number): SkWordBoundary;
    layout(maxWidth: number): void;
}

export interface SkParagraphStyle {
    disableHinting: boolean;
    heightMultiplier: number;
    maxLines: number;
    textAlign: SkTextAlign;
    textDirection: SkTextDirection;
    textStyle: SkTextStyle;
}

export interface SkFontManager extends SkObject<SkFontManager> {
    MakeTypefaceFromData(data: number[] | ArrayBuffer | Uint8Array): SkTypeface;
    countFamilies(): number;
}

export interface SkParagraphBuilderFactory {
    Make(style: SkParagraphStyle, fontManager: SkFontManager): SkParagraphBuilder;
}

export interface SkParagraphBuilder extends SkObject<SkParagraphBuilder> {
    addText(value: string): void;
    build(): SkParagraph;
    pop(): void;
    pushStyle(value: SkTextStyle): void;
}

export interface SkFontMgrFactory {
    FromData(buffer: ArrayBuffer | ArrayBuffer[]): SkFontManager;
    RefDefault(): SkFontManager;
}

export interface SkTextBlobFactory {
    MakeFromText(text: string, font: SkFont): SkTextBlob;
}

export interface SkTextBlob extends SkObject<SkTextBlob> {}

export interface SkTextStyle {
    backgroundColor: SkColor;
    color: SkColor;
    decoration: SkDecoration;
    decorationThickness: number;
    fontFamilies: string[];
    fontSize: number;
    fontStyle: FontStyle;
    foregroundColor: SkColor;
}

export interface SkColorFilterFactory {
    MakeBlend(color: SkColor, blendMode: SkBlendMode): SkColorFilter;
    MakeCompose(first: SkColorFilter, second: SkColorFilter): SkColorFilter;
    MakeLerp(lerp: number, first: SkColorFilter, second: SkColorFilter): SkColorFilter;
    MakeLinearToSRGBGamma(): SkColorFilter;
    MakeMatrix(matrix: SkMatrix): SkColorFilter;
    MakeSRGBToLinearGamma(): SkColorFilter;
}

export interface SkImageFilterFactory {
    MakeBlur(rx: number, ry: number, tileMode: SkTileMode, next: SkImageFilter | null): SkImageFilter;
    MakeColorFilter(filter: SkColorFilter, next: SkImageFilter | null): SkImageFilter;
    MakeCompose(first: SkImageFilter, second: SkImageFilter): SkImageFilter;
    MakeMatrixTransform(matrix: SkMatrix, filterQuality: SkFilterQuality, next: SkImageFilter | null): SkImageFilter;
}

export interface SkImageFilter extends SkObject<SkImageFilter> {}

export interface SkColorFilter extends SkObject<SkColorFilter> {}

export interface SkMaskFilterFactory {
    MakeBlur(blurStyle: SkBlurStyle, radius: number, b: boolean): SkMaskFilter;
}

export interface SkMaskFilter extends SkObject<SkMaskFilter> {}

// constructors

export interface SkPictureRecorderConstructor {
    new (): SkPictureRecorder;
}

export interface SkPaintConstructor {
    new (): SkPaint;
}

export interface SKPathConstructor {
    new (): SkPath;
}

export interface ShapedTextConstructor {
    new (config: SkShapedTextConfig): SkShapedText;
}

export interface SkFontConstructor {
    new (typeface: SkTypeface | null, size: number): SkFont;
}

export interface ParagraphStyleConstructor {
    new (config: ParagraphStyleConfig): SkParagraphStyle;
}

export interface TextStyleConstructor {
    new (config: TextStyleConfig): SkTextStyle;
}

// enums

export type SkEnum<T, V extends Record<string, T>> = Readonly<V> & {
    readonly values: ReadonlyArray<T>;
};

export interface SkEnumValue {
    readonly value: number;
}

export type SkAffinity = SkEnumValue;
export type SkAlphaType = SkEnumValue;
export type SkBlendMode = SkEnumValue;
export type SkBlurStyle = SkEnumValue;
export type SkClipOp = SkEnumValue;
export type SkColorType = SkEnumValue;
export type SkFillType = SkEnumValue;
export type SkFontSlant = SkEnumValue;
export type SkFontWeight = SkEnumValue;
export type SkFontWidth = SkEnumValue;
export type SkImageFormat = SkEnumValue;
export type SkPaintStyle = SkEnumValue;
export type SkPathOp = SkEnumValue;
export type SkPointMode = SkEnumValue;
export type SkStrokeCap = SkEnumValue;
export type SkStrokeJoin = SkEnumValue;
export type SkTextAlign = SkEnumValue;
export type SkTextDirection = SkEnumValue;
export type SkFilterQuality = SkEnumValue;
export type SkTileMode = SkEnumValue;
export type SkVertexMode = SkEnumValue;

export type SkColor = number;
export type SkDecoration = number;
export type SkContext = number;
export type SkPoint = [number, number];
export type SkMatrix = [number, number, number, number, number, number, number, number, number];
export type SkPathCommand = number[];
